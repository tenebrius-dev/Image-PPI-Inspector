# CMYK Export Engine Architecture & Specification

## 1. Overview

The CMYK Export module in **Image PPI Inspector** provides professional-grade prepress color separation directly inside Figma, without requiring external tools like Adobe Photoshop or ImageMagick.

Key capabilities:
- Accurate conversion from Figma's sRGB space to any standard or custom CMYK color space.
- Parity with Adobe Photoshop's Color Engine (ACE) using Black Point Compensation (BPC) and standard rendering intents.
- Direct output of compliant 4-channel CMYK JPEG images with embedded ICC color profiles in `APP2` markers and inspected PPI resolution in `JFIF` headers.

---

## 2. Color Conversion Pipeline

```
[Figma Image Bytes (PNG/RGBA)]
               │
               ▼
   [White Alpha Compositing]
      R = r*a + 255*(1-a)
      G = g*a + 255*(1-a)
      B = b*a + 255*(1-a)
               │
               ▼
      [Opaque RGB Array]
               │
               ▼
    [jsColorEngine Transform]
  ├── Input Profile: Virtual sRGB
  ├── Output Profile: Target CMYK ICC (from bundled manifest or custom file)
  ├── Intent: Perceptual (0) / Relative (1) / Saturation (2) / Absolute (3)
  └── BPC: true / false
               │
               ▼
      [CMYK Int8 Buffer]
               │
               ▼
     [Custom JPEG Encoder]
  ├── 100% Quality Quantization Tables
  ├── JFIF Header: DPI = Inspected PPI
  ├── APP2 Marker: Raw Target ICC Bytes
  └── Adobe Marker (APP14): Color Transform 0 (CMYK)
               │
               ▼
       [CMYK JPEG Blob]
```

---

## 3. Bundled ICC Profiles & Compression

To maintain a lightweight plugin footprint while providing standard press profiles, profiles are compressed using raw Deflate (`zlib.deflateRawSync`, compression level 9) during `npm run build:ui`.

At runtime, profiles are decoded on-demand using the browser's native `DecompressionStream('deflate-raw')` and cached in memory:

| Profile Key | Full Profile Name | Characterization / Standard |
| :--- | :--- | :--- |
| `iso_coated_v2_300` | ISO Coated v2 300% (ECI) | FOGRA39 (Max TAC 300%) |
| `iso_coated_v2` | ISO Coated v2 (ECI) | FOGRA39 (Standard TAC) |
| `coated_fogra39` | Coated FOGRA39 | ISO 12647-2:2004 |
| `uncoated_fogra29` | Uncoated FOGRA29 | ISO 12647-2:2004 (Uncoated) |
| `coated_gracol2006` | Coated GRACoL 2006 | IDEAlliance GRACoL 2006 |
| `us_web_coated_swop` | US Web Coated (SWOP) v2 | ANSI CGATS TR 001 |
| `japan_color_2001_coated` | Japan Color 2001 Coated | Japan Color Standard |
| `custom` | Custom User Profile | User-provided `.icc` or `.icm` |

---

## 4. Rendering Intents

| Intent | Code | Description & Usage |
| :--- | :---: | :--- |
| **Perceptual** | `0` | Compresses full gamut while maintaining visual color relationships. Ideal for photographic images with out-of-gamut saturated colors. |
| **Saturation** | `2` | Preserves pure saturated colors at the expense of hue accuracy. Best for business graphics and vector artwork. |
| **Relative Colorimetric** | `1` | Default in Adobe Photoshop and prepress. Maps in-gamut colors exactly and clips out-of-gamut colors to nearest printable border, scaling white point. |
| **Absolute Colorimetric** | `3` | Similar to Relative Colorimetric, but maintains exact paper white tint. Ideal for hard-proofing simulations. |

---

## 5. JPEG Specification & Metadata

The encoder outputs standard JFIF/EXIF-compatible CMYK JPEGs:
1. **SOI** (`0xFFD8`)
2. **APP0 (JFIF)**: sets `units: 1` (dots per inch) with X/Y density matching the inspected layer's effective PPI.
3. **APP2 (ICC_PROFILE)**: chunked embedding of the complete target ICC profile bytes (`ICC_PROFILE\0\x01\x01`).
4. **APP14 (Adobe)**: sets `transform: 0` (standard 4-channel CMYK).
5. **DQT**: non-subsampled 100% quality quantization tables.
6. **SOF0**: 4 color components (C: 1, M: 2, Y: 3, K: 4).
