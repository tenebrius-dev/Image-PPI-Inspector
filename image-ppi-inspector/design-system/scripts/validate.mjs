import { access, readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const failures = [];

async function text(relativePath) {
  return readFile(path.join(root, relativePath), "utf8");
}

async function json(relativePath) {
  return JSON.parse(await text(relativePath));
}

function assert(condition, message) {
  if (!condition) failures.push(message);
}

function declarationCount(css, prefix) {
  return css.split("\n").filter(line => line.trimStart().startsWith(prefix)).length;
}

const snapshot = await json("tokens/ui3.snapshot.json");
const effects = await json("tokens/ui3.effects.json");
const icons = await json("icons/ui3.icons.json");
const colorCss = await text("tokens/ui3.colors.css");
const typeCss = await text("tokens/ui3.typography.css");
const sizeCss = await text("tokens/ui3.sizing.css");
const effectCss = await text("tokens/ui3.effects.css");
const runtimeCss = await text("src/ui3-runtime.css");
const dropdownCss = await text("src/ui3-dropdown.css");

assert(snapshot.inventory.colorVariables === 946, "Expected 946 color variables.");
assert(snapshot.inventory.colorModes === 8, "Expected 8 color modes.");
assert(snapshot.inventory.typographyVariables === 57, "Expected 57 typography variables.");
assert(snapshot.inventory.sizingVariables === 12, "Expected 12 sizing variables.");
assert(snapshot.inventory.textStyles === 12, "Expected 12 text styles.");
assert(snapshot.inventory.effectStyles === 10, "Expected 10 effect styles.");
assert(effects.effectStyles.length === 10, "Expected 10 effect style records.");
assert(
  effects.effectStyles.filter(style => style.name.startsWith("light/")).length === 5 &&
    effects.effectStyles.filter(style => style.name.startsWith("dark/")).length === 5,
  "Expected five light and five dark effect styles.",
);
assert(icons.componentCount === 820, "Expected 820 icon components.");
assert(icons.componentSetCount === 9, "Expected 9 icon component sets.");
assert(icons.exportableCount === 730, "Expected 730 exportable icon components.");

assert(
  declarationCount(colorCss, "--ui3-color-") ===
    snapshot.inventory.colorVariables * snapshot.inventory.colorModes,
  "Generated color CSS declaration count does not match snapshot.",
);
assert(
  declarationCount(typeCss, "--ui3-type-") === snapshot.inventory.typographyVariables,
  "Generated typography CSS declaration count does not match snapshot.",
);
assert(
  declarationCount(sizeCss, "--ui3-size-") === snapshot.inventory.sizingVariables,
  "Generated sizing CSS declaration count does not match snapshot.",
);
assert(
  declarationCount(effectCss, "--ui3-elevation-") === snapshot.inventory.effectStyles,
  "Generated effect CSS declaration count does not match snapshot.",
);
for (const contract of [
  "--ui3-dropdown-bg",
  "--ui3-dropdown-text",
  "select.ui3-dropdown",
  ".ui3-dropdown__menu",
  "aria-selected",
  "aria-disabled",
]) {
  assert(dropdownCss.includes(contract), "Dropdown CSS is missing contract " + contract + ".");
}

for (const [name, map] of Object.entries(snapshot.cssVariableNames)) {
  const values = Object.values(map);
  assert(new Set(values).size === values.length, name + " contains duplicate generated CSS names.");
}

const knownColors = new Set(Object.values(snapshot.cssVariableNames.Colors));
for (const match of runtimeCss.matchAll(/var\((--ui3-color-[a-z0-9-]+)/g)) {
  assert(knownColors.has(match[1]), "Runtime adapter references unknown fallback " + match[1] + ".");
}
assert(!/#[0-9a-f]{3,8}\b/i.test(runtimeCss), "Runtime adapter contains a hard-coded color.");

const nodeIds = icons.components.map(item => item.nodeId);
assert(new Set(nodeIds).size === nodeIds.length, "Icon source contains duplicate node IDs.");

const duplicateNames = [...new Set(
  icons.components
    .filter(item => item.exportable)
    .map(item => item.name)
    .filter((name, index, all) => all.indexOf(name) !== index),
)].sort();
assert(
  JSON.stringify(duplicateNames) ===
    JSON.stringify(["icon.24.text.paragraph-indent", "icon.24.text.resize-height"]),
  "The known duplicate icon-name set changed; review canonical naming.",
);

let generatedManifest = null;
try {
  generatedManifest = await json("icons/manifest.generated.json");
} catch (error) {
  if (!error || error.code !== "ENOENT") throw error;
}

if (generatedManifest) {
  const expectedInventory = {
    allComponents: 820,
    componentSets: 9,
    exportCandidates: 730,
    renderedComponents: 729,
    failedExports: 1,
    uniqueSvgFiles: 728,
    duplicateGeometry: 1,
    nameCollisions: 2,
    multicolor: 23,
  };
  assert(
    JSON.stringify(generatedManifest.inventory) === JSON.stringify(expectedInventory),
    "Generated icon inventory changed; review the source audit and manifest.",
  );
  assert(generatedManifest.icons.length === 729, "Expected 729 rendered icon records.");
  assert(
    generatedManifest.failedExports?.length === 1 &&
      generatedManifest.failedExports[0].nodeId === "1:540750" &&
      generatedManifest.failedExports[0].code === "SOURCE_EMPTY_GEOMETRY",
    "Expected the documented icon.16.slice empty-geometry source anomaly.",
  );

  const canonicalNames = generatedManifest.icons.map(item => item.canonicalName);
  assert(
    new Set(canonicalNames).size === canonicalNames.length -
      generatedManifest.icons.filter(item => item.duplicateGeometry).length,
    "Generated icon canonical names contain unresolved collisions.",
  );

  for (const icon of generatedManifest.icons) {
    const filePath = path.join(root, "icons", icon.file);
    try {
      await access(filePath);
      const svg = await readFile(filePath, "utf8");
      assert(/<svg\b/i.test(svg), icon.file + " is not an SVG.");
      assert(/\bviewBox="/i.test(svg), icon.file + " has no viewBox.");
      assert(!/<image\b/i.test(svg), icon.file + " contains a raster image.");
      assert(!/https?:\/\//i.test(svg.replace("http://www.w3.org/2000/svg", "")), icon.file + " contains an external URL.");
      if (!icon.multicolor) {
        assert(/currentColor/.test(svg), icon.file + " is monochrome but does not inherit currentColor.");
      }
    } catch (error) {
      if (error && error.code === "ENOENT") failures.push("Missing generated icon file " + icon.file + ".");
      else throw error;
    }
  }

  const files = (await readdir(path.join(root, "icons", "svg"))).filter(name => name.endsWith(".svg"));
  const referenced = new Set(generatedManifest.icons.map(item => path.basename(item.file)));
  assert(files.length === 728, "Expected 728 local SVG files.");
  assert(referenced.size === 728, "Expected 728 unique SVG files referenced by the manifest.");
  for (const file of files) {
    if (!referenced.has(file)) console.warn("Stale SVG not referenced by manifest: " + file);
  }
} else {
  console.warn("icons/manifest.generated.json is absent; run npm run icons:sync when a controlled library is ready.");
}

if (failures.length) {
  for (const failure of failures) console.error("FAIL: " + failure);
  process.exit(1);
}

console.log(JSON.stringify({
  status: "ok",
  snapshot: snapshot.inventory,
  generatedIconsChecked: generatedManifest ? generatedManifest.icons.length : 0,
}, null, 2));
