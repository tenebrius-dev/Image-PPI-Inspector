# Changelog

All notable changes to the Image PPI Inspector plugin are documented in this file.

## [1.1.0] — 2026-09-09

### Added
- **CMYK Export Module (100% JPG)**:
  - High-performance in-browser CMYK conversion powered by `jsColorEngine`.
  - Built-in compression pipeline for standard ICC profiles using raw Deflate compression with zero-overhead runtime decompression via `DecompressionStream`.
  - **7 Bundled Standard ICC Profiles**:
    - `ISO Coated v2 300% (ECI)` (Default)
    - `ISO Coated v2 (ECI)`
    - `Coated FOGRA39`
    - `Uncoated FOGRA29`
    - `Coated GRACoL 2006`
    - `US Web Coated (SWOP) v2`
    - `Japan Color 2001 Coated`
  - **Custom ICC Profile Support**: Ability to load any `.icc` or `.icm` profile via the file picker.
  - **Full Support for 4 Rendering Intents**:
    - `Perceptual` (Intent 0)
    - `Saturation` (Intent 2)
    - `Relative Colorimetric` (Intent 1, Default)
    - `Absolute Colorimetric` (Intent 3)
    *(Ordered according to Adobe Photoshop menu specifications)*.
  - **Black Point Compensation (BPC)** toggle checkbox.
  - Custom Adobe-compatible CMYK JPEG encoder injecting `APP2 (ICC_PROFILE)` payload and `JFIF` resolution density headers (DPI calculated from inspected effective PPI).
- **Toolbar Unit Switcher**:
  - Independent `Unit: px / mm` switch in the header.
  - Centered navigation control with refined button spacing.
- **Figma UI3 Design System Overhaul**:
  - Custom UI3 dropdown triggers and floating overlay menus matching Figma Community UI3 catalog and `PDF Smart Import`.
  - Native Figma UI3 checkboxes with SVG checkmark masks.
  - Exact hover states for secondary buttons (`#F2F2F2` background, `#D9D9D9` border) and Target PPI input (`#E7E7E7` border).
  - Dynamic window auto-sizing without internal scrollbars or sticky elements (`overflow: hidden`).
  - Strict 8 px viewport boundary clamp for open dropdown menus.

### Fixed
- Fixed Light theme dropdown styling bug caused by unclosed `@media` query in previous builds.
- Fixed 1 px chevron icon displacement in dropdown triggers by compensating for the 1 px border box.
- Fixed rendering intent mapping in `cmyk-engine.js` ensuring Saturation and Absolute colorimetric intents correctly construct independent transformation tables.
- Fixed dropdown menu bottom spacing, enforcing an exact 8 px clearance to the plugin window edge.

---

## [1.0.0] — 2026-06-09

### Added
- Initial release of Image PPI Inspector for Figma.
- Real-time effective PPI calculation for selected raster image fills.
- Quality status traffic lights: Green (≥ 300 PPI), Yellow (250–299 PPI), Red (< 250 PPI).
- Geometry metrics display: current size, original dimensions, crop coordinates, and scale factors.
- Multi-image selection review mode and batch scanning.
- Target PPI calculator and layer resizing tool.
- Single-click copying for all metadata values and comprehensive summary export.
- Original image download and color-correction detection.
