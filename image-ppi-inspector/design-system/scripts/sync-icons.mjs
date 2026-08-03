import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const svgDir = path.join(root, "icons", "svg");
const generatedManifestPath = path.join(root, "icons", "manifest.generated.json");
const overridesPath = path.join(root, "icons", "name-overrides.json");

const fileKey = process.env.FIGMA_FILE_KEY;
const token = process.env.FIGMA_ACCESS_TOKEN;

if (!fileKey || !token) {
  console.error("Set FIGMA_FILE_KEY and FIGMA_ACCESS_TOKEN. See .env.example.");
  process.exit(1);
}

async function figmaApi(apiPath) {
  const response = await fetch("https://api.figma.com/v1" + apiPath, {
    headers: { "X-Figma-Token": token },
  });
  if (!response.ok) {
    const detail = await response.text();
    throw new Error("Figma API " + response.status + " for " + apiPath + ": " + detail);
  }
  return response.json();
}

function nodeSize(node) {
  const box = node.absoluteBoundingBox || node.size || {};
  return {
    width: Number(box.width || 0),
    height: Number(box.height || 0),
  };
}

function collectComponents(pageDocument, componentMetadata) {
  const result = [];

  function walk(node, ancestors) {
    if (node.type === "COMPONENT") {
      const size = nodeSize(node);
      const roundedWidth = Math.round(size.width);
      const roundedHeight = Math.round(size.height);
      const componentSet = [...ancestors].reverse().find(item => item.type === "COMPONENT_SET");
      const topFrame = ancestors.find(item => !["DOCUMENT", "CANVAS"].includes(item.type));
      const exportable =
        /^icon\.(16|24)\./.test(node.name) &&
        roundedWidth === roundedHeight &&
        (roundedWidth === 16 || roundedWidth === 24);
      const meta = componentMetadata[node.id] || {};

      result.push({
        name: node.name,
        nodeId: node.id,
        key: meta.key || "",
        width: size.width,
        height: size.height,
        componentSet: componentSet ? componentSet.name : null,
        topFrame: topFrame ? topFrame.name : null,
        exportable,
      });
    }

    for (const child of node.children || []) {
      walk(child, [...ancestors, node]);
    }
  }

  walk(pageDocument, []);
  return result.sort((a, b) => a.name.localeCompare(b.name) || a.nodeId.localeCompare(b.nodeId));
}

function hash(text) {
  return createHash("sha256").update(text).digest("hex").slice(0, 12);
}

function slug(value) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-+/g, "-");
}

function normalizeMonochrome(svg) {
  const colorPattern = /\b(?:fill|stroke)="(?!none\b|currentColor\b|url\()[^"]+"/gi;
  const colors = new Set();
  for (const match of svg.matchAll(colorPattern)) {
    colors.add(match[0].replace(/^(?:fill|stroke)="/i, "").slice(0, -1).toLowerCase());
  }

  if (colors.size > 1) {
    return { svg, multicolor: true };
  }

  const normalized = svg.replace(
    /\b(fill|stroke)="(?!none\b|currentColor\b|url\()[^"]+"/gi,
    '$1="currentColor"',
  );
  return { svg: normalized, multicolor: false };
}

async function readOverrides() {
  try {
    const value = JSON.parse(await readFile(overridesPath, "utf8"));
    return value.byGeometryHash || {};
  } catch (error) {
    if (error && error.code === "ENOENT") return {};
    throw error;
  }
}

async function exportSvgUrls(components) {
  const urls = new Map();
  for (let index = 0; index < components.length; index += 100) {
    const batch = components.slice(index, index + 100);
    const query = new URLSearchParams({
      ids: batch.map(item => item.nodeId).join(","),
      format: "svg",
      svg_outline_text: "true",
    });
    const payload = await figmaApi("/images/" + encodeURIComponent(fileKey) + "?" + query);
    for (const item of batch) {
      const url = payload.images && payload.images[item.nodeId];
      urls.set(item.nodeId, url || null);
    }
  }
  return urls;
}

async function downloadIcons(components, urls) {
  const downloaded = [];
  const failedExports = [];
  let cursor = 0;

  async function worker() {
    while (true) {
      const index = cursor++;
      if (index >= components.length) return;
      const component = components[index];
      const url = urls.get(component.nodeId);
      if (!url) {
        failedExports[index] = {
          sourceName: component.name,
          nodeId: component.nodeId,
          componentKey: component.key,
          size: Math.round(component.width),
          code: component.nodeId === "1:540750" ? "SOURCE_EMPTY_GEOMETRY" : "FIGMA_RENDER_UNAVAILABLE",
        };
        continue;
      }
      const response = await fetch(url);
      if (!response.ok) throw new Error("Could not download SVG for " + component.nodeId);
      const originalSvg = await response.text();
      const normalized = normalizeMonochrome(originalSvg);
      downloaded[index] = {
        ...component,
        geometryHash: hash(normalized.svg),
        svg: normalized.svg,
        multicolor: normalized.multicolor,
      };
    }
  }

  await Promise.all(Array.from({ length: 8 }, worker));
  return {
    downloaded: downloaded.filter(Boolean),
    failedExports: failedExports.filter(Boolean),
  };
}

function assignCanonicalNames(downloaded, overrides) {
  const groups = new Map();
  for (const item of downloaded) {
    if (!groups.has(item.name)) groups.set(item.name, []);
    groups.get(item.name).push(item);
  }

  for (const [name, group] of groups) {
    group.sort((a, b) => a.nodeId.localeCompare(b.nodeId));
    const hashes = new Set(group.map(item => item.geometryHash));
    for (const [index, item] of group.entries()) {
      if (hashes.size === 1) {
        item.canonicalName = name;
        item.duplicateGeometry = index > 0;
        item.nameCollision = false;
      } else {
        item.canonicalName =
          overrides[item.geometryHash] || name + ".variant-" + item.geometryHash.slice(0, 8);
        item.nameCollision = true;
      }
    }
  }
}

const outline = await figmaApi("/files/" + encodeURIComponent(fileKey) + "?depth=1");
const iconsPage = (outline.document.children || []).find(
  node => node.type === "CANVAS" && node.name === "Icons",
);
if (!iconsPage) throw new Error('The file has no page named "Icons".');

const nodePayload = await figmaApi(
  "/files/" + encodeURIComponent(fileKey) + "/nodes?ids=" + encodeURIComponent(iconsPage.id),
);
const pagePayload = nodePayload.nodes && nodePayload.nodes[iconsPage.id];
if (!pagePayload || !pagePayload.document) throw new Error("Could not load the Icons page.");

const components = collectComponents(pagePayload.document, pagePayload.components || {});
const exportable = components.filter(item => item.exportable);
const urls = await exportSvgUrls(exportable);
const { downloaded, failedExports } = await downloadIcons(exportable, urls);
const overrides = await readOverrides();
assignCanonicalNames(downloaded, overrides);

await mkdir(svgDir, { recursive: true });
const written = new Map();
for (const item of downloaded) {
  const filename = slug(item.canonicalName) + ".svg";
  const existing = written.get(filename);
  if (existing && existing !== item.svg) {
    throw new Error("Filename collision with different geometry: " + filename);
  }
  if (!existing) {
    await writeFile(path.join(svgDir, filename), item.svg, "utf8");
    written.set(filename, item.svg);
  }
  item.file = "svg/" + filename;
  delete item.svg;
}

const manifest = {
  schemaVersion: 1,
  source: {
    fileKey,
    fileName: outline.name,
    fileVersion: outline.version,
    lastModified: outline.lastModified,
    iconsPageId: iconsPage.id,
    syncedAt: new Date().toISOString(),
  },
  inventory: {
    allComponents: components.length,
    componentSets: Object.keys(pagePayload.componentSets || {}).length,
    exportCandidates: exportable.length,
    renderedComponents: downloaded.length,
    failedExports: failedExports.length,
    uniqueSvgFiles: written.size,
    nameCollisions: downloaded.filter(item => item.nameCollision).length,
    duplicateGeometry: downloaded.filter(item => item.duplicateGeometry).length,
    multicolor: downloaded.filter(item => item.multicolor).length,
  },
  failedExports,
  icons: downloaded
    .map(({ canonicalName, name, nodeId, key, width, height, file, geometryHash, multicolor, nameCollision, duplicateGeometry }) => ({
      canonicalName,
      sourceName: name,
      nodeId,
      componentKey: key,
      size: Math.round(width),
      width,
      height,
      file,
      geometryHash,
      multicolor,
      nameCollision: Boolean(nameCollision),
      duplicateGeometry: Boolean(duplicateGeometry),
    }))
    .sort((a, b) => a.canonicalName.localeCompare(b.canonicalName) || a.nodeId.localeCompare(b.nodeId)),
};

await writeFile(generatedManifestPath, JSON.stringify(manifest, null, 2) + "\n", "utf8");
console.log(JSON.stringify(manifest.inventory, null, 2));
console.log("Wrote " + generatedManifestPath);
console.log("Old SVG files are not deleted automatically; review stale files in icons/svg.");
