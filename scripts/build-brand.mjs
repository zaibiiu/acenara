import fs from "node:fs/promises";
import path from "node:path";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const fontkit = require("fontkit");
const sharp = require("sharp");
const root = process.cwd();
const dir = path.join(root, "public/brand");
await fs.mkdir(dir, { recursive: true });
const font = fontkit.openSync(
  path.join(
    root,
    "node_modules/@fontsource-variable/manrope/files/manrope-latin-wght-normal.woff2",
  ),
);
function typePaths(text, x, baseline, size, color, stroke = 15) {
  const run = font.layout(text);
  const scale = size / font.unitsPerEm;
  return run.glyphs
    .map((g, i) => {
      const pos = run.positions[i];
      const c = typeof color === "function" ? color(i) : color;
      const out = `<path d="${g.path.toSVG()}" transform="translate(${x + pos.xOffset * scale} ${baseline - pos.yOffset * scale}) scale(${scale} ${-scale})" fill="${c}" stroke="${c}" stroke-width="${stroke}" stroke-linejoin="round" paint-order="stroke"/>`;
      x += pos.xAdvance * scale;
      return out;
    })
    .join("");
}
function mark(dark = false) {
  return `<path d="M6 53 25 11Q28 4 36 8L17 53H6Z" fill="${dark ? "#BDD6E3" : "#2F5061"}"/><path d="m35 9 22 44H44L29 22l6-13Z" fill="${dark ? "#87ADBF" : "#6F91A2"}"/><path d="M16 43Q32 22 46 43l5 10H39q-9-15-19 0H11l5-10Z" fill="${dark ? "#E1EBEF" : "#2F5061"}"/><circle cx="38" cy="30" r="5.1" fill="#E57F84"/>`;
}
function svg(content, w = 285, h = 64) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">${content}</svg>`;
}
function logo(dark = false) {
  return svg(
    mark(dark) +
      typePaths(
        "Acenara",
        76,
        44,
        46,
        (i) => (i < 4 ? (dark ? "#BED7E4" : "#2F5061") : "#E57F84"),
        19,
      ),
  );
}
for (const [name, dark] of [
  ["logo.svg", false],
  ["logo-light.svg", false],
  ["logo-dark.svg", true],
])
  await fs.writeFile(path.join(dir, name), logo(dark));
const icon = svg(mark(), 64, 64);
const iconDark = svg(mark(true), 64, 64);
await fs.writeFile(path.join(dir, "icon.svg"), icon);
await fs.writeFile(path.join(dir, "icon-dark.svg"), iconDark);
await fs.writeFile(path.join(dir, "favicon.svg"), icon);
await sharp(
  Buffer.from(
    svg(
      `<rect width="64" height="64" rx="13" fill="#F7F5F2"/>${mark()}`,
      64,
      64,
    ),
  ),
)
  .resize(180, 180)
  .png()
  .toFile(path.join(dir, "apple-touch-icon.png"));
await sharp(
  Buffer.from(
    svg(
      `<rect width="64" height="64" rx="13" fill="#172C39"/>${mark(true)}`,
      64,
      64,
    ),
  ),
)
  .resize(512, 512)
  .png()
  .toFile(path.join(dir, "app-icon.png"));
const pngs = await Promise.all(
  [16, 32, 48].map((size) =>
    sharp(Buffer.from(icon)).resize(size, size).png().toBuffer(),
  ),
);
const header = Buffer.alloc(6 + 16 * pngs.length);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(pngs.length, 4);
let offset = header.length;
pngs.forEach((b, i) => {
  const base = 6 + i * 16;
  header[base] = [16, 32, 48][i];
  header[base + 1] = [16, 32, 48][i];
  header.writeUInt16LE(1, base + 4);
  header.writeUInt16LE(32, base + 6);
  header.writeUInt32LE(b.length, base + 8);
  header.writeUInt32LE(offset, base + 12);
  offset += b.length;
});
await fs.writeFile(
  path.join(root, "public/favicon.ico"),
  Buffer.concat([header, ...pngs]),
);
const social = svg(
  `<rect width="1200" height="630" fill="#172C39"/><path d="M790 0h410v630H790Z" fill="#244453"/><circle cx="1040" cy="315" r="235" stroke="#496D80" fill="none"/><circle cx="1040" cy="315" r="190" stroke="#365C70" fill="none"/><g transform="translate(840 140) scale(4.4)">${mark(true)}</g><g transform="translate(68 60) scale(1.3)">${mark(true) + typePaths("Acenara", 76, 44, 46, (i) => (i < 4 ? "#BED7E4" : "#E57F84"), 19)}</g>${typePaths("Software for", 75, 295, 70, "#F7F5F2", 20)}${typePaths("your next big move.", 75, 385, 65, "#E57F84", 20)}${typePaths("SOFTWARE DEVELOPMENT & DIGITAL TECHNOLOGY", 78, 522, 16, "#BBD2DF", 5)}${typePaths("LAHORE, PAKISTAN / WORKING INTERNATIONALLY", 78, 555, 12, "#9CBACB", 3)}`,
  1200,
  630,
);
await fs.writeFile(path.join(dir, "social.svg"), social);
await sharp(Buffer.from(social)).png().toFile(path.join(dir, "social.png"));
console.log(
  "Updated ribbon-A identity, coral sphere, bold two-color outlined wordmark, favicon, app icon, and social graphic.",
);
