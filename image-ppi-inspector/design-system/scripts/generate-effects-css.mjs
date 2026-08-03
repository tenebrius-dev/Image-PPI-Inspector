import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourcePath = path.join(root, "tokens", "ui3.effects.json");
const outputPath = path.join(root, "tokens", "ui3.effects.css");
const source = JSON.parse(await readFile(sourcePath, "utf8"));

function number(value) {
  return Number(value.toFixed(3)).toString();
}

function rgba(color) {
  return `rgba(${Math.round(color.r * 255)}, ${Math.round(color.g * 255)}, ${Math.round(color.b * 255)}, ${number(color.a)})`;
}

function shadow(effect) {
  const inset = effect.type === "INNER_SHADOW" ? "inset " : "";
  return `${inset}${number(effect.offset.x)}px ${number(effect.offset.y)}px ${number(effect.radius)}px ${number(effect.spread || 0)}px ${rgba(effect.color)}`;
}

function variableName(styleName) {
  return "--ui3-" + styleName.replace(/^(light|dark)\//, "").replace(/[^a-z0-9]+/gi, "-").toLowerCase();
}

const modes = {
  light: source.effectStyles.filter(style => style.name.startsWith("light/")),
  dark: source.effectStyles.filter(style => style.name.startsWith("dark/")),
};

const lines = [
  "/* Generated from tokens/ui3.effects.json. Do not edit by hand. */",
  ":root,",
  ".figma-light,",
  ".ui3-theme-light,",
  ".ui3-theme-figjam-light,",
  ".ui3-theme-devmode-light,",
  ".ui3-theme-slides-light {",
];

for (const style of modes.light) {
  const value = style.effects.filter(effect => effect.visible !== false).map(shadow).join(", ");
  lines.push(`  ${variableName(style.name)}: ${value || "none"};`);
}

lines.push(
  "}",
  "",
  ".figma-dark,",
  ".ui3-theme-dark,",
  ".ui3-theme-figjam-dark,",
  ".ui3-theme-devmode-dark,",
  ".ui3-theme-slides-dark {",
);

for (const style of modes.dark) {
  const value = style.effects.filter(effect => effect.visible !== false).map(shadow).join(", ");
  lines.push(`  ${variableName(style.name)}: ${value || "none"};`);
}

lines.push("}", "");
await writeFile(outputPath, lines.join("\n"), "utf8");
console.log(`Wrote ${outputPath} (${source.effectStyles.length} effect styles).`);
