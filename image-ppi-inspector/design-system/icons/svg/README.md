# Bundled SVG library

This directory contains 728 reviewed local SVG files exported from the named UI3 Community source. They represent 729 renderable icon components because one duplicate-name pair has identical geometry and shares a file.

Use `../manifest.generated.json` and generate a consumer module with `npm run icons:module`. Do not import the full directory into every plugin bundle.

Run npm run icons:sync from the package root after setting FIGMA_FILE_KEY and FIGMA_ACCESS_TOKEN only when refreshing from a controlled Figma copy.

The sync script writes local SVG files here and creates ../manifest.generated.json. It never deletes old SVG files automatically, so a library update cannot silently remove an icon used by a plugin.

Monochrome exports are converted to currentColor. Multicolor exports keep their source colors and are marked in the generated manifest.

If the Figma source contains the same component name with different geometry, the script adds a stable geometry-hash suffix. Add a reviewed replacement name to ../name-overrides.json if the product needs a human semantic alias.

`icon.16.slice` is intentionally absent: source node `1:540750` has empty visible geometry and is documented in `../manifest.generated.json` under `failedExports`.
