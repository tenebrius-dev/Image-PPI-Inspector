const esbuild = require('esbuild');
const fs = require('fs');
const path = require('path');

// 1. Build the UI3 design system CSS
const cssBundle = esbuild.buildSync({
  entryPoints: ['design-system/src/index.css'],
  bundle: true,
  minify: true,
  write: false,
}).outputFiles[0].text;

// 2. Read ui.html
const uiHtmlPath = path.join(__dirname, 'ui.html');
let uiHtml = fs.readFileSync(uiHtmlPath, 'utf8');

// 3. Inject CSS into ui.html
// Look for a specific block or just inject right after <style>
const styleStartTag = '<style>';
if (uiHtml.includes(styleStartTag)) {
  // If we already injected, replace the block, otherwise just prepend it
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
  console.warn("Could not find <style> tag in ui.html to inject CSS.");
}

// 4. Save ui.html
fs.writeFileSync(uiHtmlPath, uiHtml, 'utf8');

console.log("UI3 CSS successfully injected into ui.html");
