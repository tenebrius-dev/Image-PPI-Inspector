import { createHash } from "node:crypto";
import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const rawDir = process.argv[2];

if (!rawDir) {
  console.error("Usage: node scripts/finalize-icon-export.mjs <raw-svg-directory>");
  process.exit(1);
}

const index = JSON.parse(await readFile(path.join(root, "icons", "ui3.icons.json"), "utf8"));
const overrides = JSON.parse(await readFile(path.join(root, "icons", "name-overrides.json"), "utf8"));
const svgDir = path.join(root, "icons", "svg");
const manifestPath = path.join(root, "icons", "manifest.generated.json");

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

  if (colors.size > 1) return { svg, multicolor: true };

  return {
    svg: svg.replace(
      /\b(fill|stroke)="(?!none\b|currentColor\b|url\()[^"]+"/gi,
      '$1="currentColor"',
    ),
    multicolor: false,
  };
}

const candidates = index.components
  .filter(item => item.exportable)
  .sort((a, b) => a.nodeId.localeCompare(b.nodeId));
const exported = [];
const failedExports = [];

for (const component of candidates) {
  const rawName = "node-" + component.nodeId.replace(/:/g, "-") + ".svg";
  let sourceSvg;

  try {
    sourceSvg = await readFile(path.join(rawDir, rawName), "utf8");
  } catch (error) {
    if (!error || error.code !== "ENOENT") throw error;
    failedExports.push({
      sourceName: component.name,
      nodeId: component.nodeId,
      componentKey: component.key,
      size: Math.round(component.width),
      code: component.nodeId === "1:540750" ? "SOURCE_EMPTY_GEOMETRY" : "MISSING_RAW_EXPORT",
    });
    continue;
  }

  const normalized = normalizeMonochrome(sourceSvg.trim());
  exported.push({
    ...component,
    geometryHash: hash(normalized.svg),
    svg: normalized.svg,
    multicolor: normalized.multicolor,
  });
}

const groups = new Map();
for (const item of exported) {
  if (!groups.has(item.name)) groups.set(item.name, []);
  groups.get(item.name).push(item);
}

for (const [name, group] of groups) {
  group.sort((a, b) => a.nodeId.localeCompare(b.nodeId));
  const hashes = new Set(group.map(item => item.geometryHash));

  if (hashes.size === 1) {
    group.forEach((item, indexInGroup) => {
      item.canonicalName = name;
      item.duplicateGeometry = indexInGroup > 0;
      item.nameCollision = false;
    });
    continue;
  }

  for (const item of group) {
    item.canonicalName =
      overrides.byGeometryHash?.[item.geometryHash] ||
      name + ".variant-" + item.geometryHash.slice(0, 8);
    item.duplicateGeometry = false;
    item.nameCollision = true;
  }
}

await mkdir(svgDir, { recursive: true });
const written = new Map();

for (const item of exported) {
  const filename = slug(item.canonicalName) + ".svg";
  const previous = written.get(filename);

  if (previous && previous !== item.svg) {
    throw new Error("Filename collision with different geometry: " + filename);
  }

  if (!previous) {
    await writeFile(path.join(svgDir, filename), item.svg + "\n", "utf8");
    written.set(filename, item.svg);
  }

  item.file = "svg/" + filename;
}

const manifest = {
  schemaVersion: 1,
  source: {
    fileKey: index.source.fileKey,
    fileName: index.source.name,
    sourceUrl: index.source.url,
    extractedAt: index.source.extractedAt,
    iconsPageId: index.pageId,
    finalizedAt: new Date().toISOString(),
  },
  inventory: {
    allComponents: index.componentCount,
    componentSets: index.componentSetCount,
    exportCandidates: candidates.length,
    renderedComponents: exported.length,
    failedExports: failedExports.length,
    uniqueSvgFiles: written.size,
    duplicateGeometry: exported.filter(item => item.duplicateGeometry).length,
    nameCollisions: exported.filter(item => item.nameCollision).length,
    multicolor: exported.filter(item => item.multicolor).length,
  },
  failedExports,
  icons: exported
    .map(item => ({
      canonicalName: item.canonicalName,
      sourceName: item.name,
      nodeId: item.nodeId,
      componentKey: item.key,
      size: Math.round(item.width),
      width: item.width,
      height: item.height,
      file: item.file,
      geometryHash: item.geometryHash,
      multicolor: item.multicolor,
      nameCollision: item.nameCollision,
      duplicateGeometry: item.duplicateGeometry,
    }))
    .sort((a, b) => a.canonicalName.localeCompare(b.canonicalName) || a.nodeId.localeCompare(b.nodeId)),
};

await writeFile(manifestPath, JSON.stringify(manifest, null, 2) + "\n", "utf8");

const stale = (await readdir(svgDir))
  .filter(name => name.endsWith(".svg") && !written.has(name))
  .sort();

if (stale.length) console.warn("Stale SVG files not referenced by the new manifest:", stale);
console.log(JSON.stringify(manifest.inventory, null, 2));
