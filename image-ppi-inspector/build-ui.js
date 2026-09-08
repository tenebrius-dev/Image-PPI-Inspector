const esbuild = require('esbuild');
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

console.log('[build-ui] Starting UI assets compilation...');

// 1. Build the UI3 design system CSS
const cssBundle = esbuild.buildSync({
  entryPoints: ['design-system/src/index.css'],
  bundle: true,
  minify: true,
  write: false,
}).outputFiles[0].text;

// 2. Build jsColorEngine for browser
console.log('[build-ui] Bundling jsColorEngine...');
const jsColorEngineBundle = esbuild.buildSync({
  stdin: {
    contents: `
      import { Profile, Transform, eIntent, color } from "jscolorengine";
      window.jsColorEngine = { Profile, Transform, eIntent, color };
    `,
    resolveDir: __dirname,
  },
  bundle: true,
  format: 'iife',
  platform: 'browser',
  minify: true,
  write: false,
  external: ['http', 'https', 'fs', 'path', 'util', 'child_process', 'worker_threads', 'os'],
}).outputFiles[0].text;

// 3. Compress standard ICC Profiles
const profilesConfig = {
  iso_coated_v2_300: {
    name: 'ISO Coated v2 300% (ECI)',
    file: 'ISOcoated_v2_300_eci.icc',
    shortLabel: 'ISOcoated_v2_300',
    default: true
  },
  iso_coated_v2: {
    name: 'ISO Coated v2 (ECI)',
    file: 'ISOcoated_v2_eci.icc',
    shortLabel: 'ISOcoated_v2'
  },
  coated_fogra39: {
    name: 'Coated FOGRA39',
    file: 'CoatedFOGRA39.icc',
    shortLabel: 'FOGRA39'
  },
  uncoated_fogra29: {
    name: 'Uncoated FOGRA29',
    file: 'UncoatedFOGRA29.icc',
    shortLabel: 'FOGRA29'
  },
  coated_gracol2006: {
    name: 'Coated GRACoL 2006',
    file: 'CoatedGRACoL2006.icc',
    shortLabel: 'GRACoL2006'
  },
  us_web_coated_swop: {
    name: 'US Web Coated (SWOP) v2',
    file: 'USWebCoatedSWOP.icc',
    shortLabel: 'SWOP'
  },
  japan_color_2001_coated: {
    name: 'Japan Color 2001 Coated',
    file: 'JapanColor2001Coated.icc',
    shortLabel: 'JapanColor2001'
  }
};

const profilesManifest = {};
const profilesDir = path.join(__dirname, 'assets/profiles');

for (const [key, cfg] of Object.entries(profilesConfig)) {
  const pPath = path.join(profilesDir, cfg.file);
  if (!fs.existsSync(pPath)) {
    console.error(`[build-ui] Error: Profile file not found: ${pPath}`);
    process.exit(1);
  }
  const raw = fs.readFileSync(pPath);
  const compressed = zlib.deflateRawSync(raw, { level: 9 }).toString('base64');
  profilesManifest[key] = {
    name: cfg.name,
    shortLabel: cfg.shortLabel,
    default: !!cfg.default,
    data: compressed
  };
}

// 4. Read CMYK Engine script
const cmykEngineCode = fs.readFileSync(path.join(__dirname, 'src/cmyk-engine.js'), 'utf8');

// Combine JS bundle
const cmykJsBundle = `
/* CMYK_BUNDLE_START */
window.__ICC_PROFILES__ = ${JSON.stringify(profilesManifest)};
${jsColorEngineBundle}
${cmykEngineCode}
/* CMYK_BUNDLE_END */
`;

// 5. Read and inject into ui.html
const uiHtmlPath = path.join(__dirname, 'ui.html');
let uiHtml = fs.readFileSync(uiHtmlPath, 'utf8');

// Inject CSS
const styleStartTag = '<style>';
if (uiHtml.includes(styleStartTag)) {
  const injectMarkerStart = '/* UI3_INJECT_START */';
  const injectMarkerEnd = '/* UI3_INJECT_END */';
  const injectedContent = `${injectMarkerStart}\n${cssBundle}\n${injectMarkerEnd}`;

  if (uiHtml.includes(injectMarkerStart) && uiHtml.includes(injectMarkerEnd)) {
    const regex = new RegExp(`\\/\\* UI3_INJECT_START \\*\\/[\\s\\S]*?\\/\\* UI3_INJECT_END \\*\\/`);
    uiHtml = uiHtml.replace(regex, injectedContent);
  } else {
    uiHtml = uiHtml.replace(styleStartTag, `${styleStartTag}\n${injectedContent}`);
  }
} else {
  console.warn('[build-ui] Could not find <style> tag in ui.html to inject CSS.');
}

// Inject CMYK JS Bundle
const scriptStartTag = '<script>';
if (uiHtml.includes(scriptStartTag)) {
  const bundleMarkerStart = '/* CMYK_BUNDLE_START */';
  const bundleMarkerEnd = '/* CMYK_BUNDLE_END */';

  if (uiHtml.includes(bundleMarkerStart) && uiHtml.includes(bundleMarkerEnd)) {
    const regex = new RegExp(`\\/\\* CMYK_BUNDLE_START \\*\\/[\\s\\S]*?\\/\\* CMYK_BUNDLE_END \\*\\/`);
    uiHtml = uiHtml.replace(regex, cmykJsBundle.trim());
  } else {
    uiHtml = uiHtml.replace(scriptStartTag, `${scriptStartTag}\n${cmykJsBundle.trim()}`);
  }
} else {
  console.warn('[build-ui] Could not find <script> tag in ui.html to inject JS bundle.');
}

// 6. Save ui.html
fs.writeFileSync(uiHtmlPath, uiHtml, 'utf8');

console.log('[build-ui] UI successfully bundled! jsColorEngine and 7 standard ICC profiles injected into ui.html');
