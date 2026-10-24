import fs from "node:fs/promises";
import path from "node:path";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const fontkit = require("fontkit");
const sharp = require("sharp");
const root = process.cwd();
const dir = path.join(root, "public", "brand");
await fs.mkdir(dir, { recursive: true });
const font = fontkit.openSync(
  path.join(
    root,
    "node_modules/@fontsource-variable/manrope/files/manrope-latin-wght-normal.woff2",
  ),
);
const run = font.layout("Acenara");
const width = run.positions.reduce((a, p) => a + p.xAdvance, 0);
const scale = 176 / width;
function wordmark(color) {
  let x = 78;
  return run.glyphs
    .map((g, i) => {
      const p = run.positions[i];
      const out = `<path d="${g.path.toSVG()}" transform="translate(${x + p.xOffset * scale} ${43 - p.yOffset * scale}) scale(${scale} ${-scale})" fill="${color}"/>`;
      x += p.xAdvance * scale;
      return out;
    })
    .join("");
}
function mark(color = "#2F5061") {
  return `<path d="M6 52 27 7h12L18 52H6Z" fill="${color}"/><path d="m39 18 17 34H43L32 30l7-12Z" fill="${color}"/><path d="M25 35h10l5 10H20l5-10Z" fill="#E57F84"/>`;
}
function svg(content, w = 264, h = 62) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img">${content}</svg>`;
}
await fs.writeFile(
  path.join(dir, "logo.svg"),
  svg(mark() + wordmark("#172C39")),
);
await fs.writeFile(
  path.join(dir, "logo-light.svg"),
  svg(mark() + wordmark("#172C39")),
);
await fs.writeFile(
  path.join(dir, "logo-dark.svg"),
  svg(mark("#F7F5F2") + wordmark("#F7F5F2")),
);
const icon = svg(mark(), 62, 62);
await fs.writeFile(path.join(dir, "icon.svg"), icon);
await fs.writeFile(path.join(dir, "favicon.svg"), icon);
await sharp(
  Buffer.from(
    svg(
      `<rect width="62" height="62" rx="12" fill="#F7F5F2"/>${mark()}`,
      62,
      62,
    ),
  ),
)
  .resize(180, 180)
  .png()
  .toFile(path.join(dir, "apple-touch-icon.png"));
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
  `<rect width="1200" height="630" fill="#F7F5F2"/><path d="M680 0h520v630H680z" fill="#E5EBE8"/><g transform="translate(750 115) scale(5)">${mark()}</g><g transform="translate(80 85) scale(1.4)">${mark() + wordmark("#172C39")}</g><text x="85" y="320" fill="#172C39" font-family="Georgia,serif" font-size="65">Good ideas.</text><text x="85" y="397" fill="#2F5061" font-family="Georgia,serif" font-style="italic" font-size="65">Exceptional execution.</text><text x="85" y="525" fill="#536975" font-family="sans-serif" font-size="15" letter-spacing="2">SOFTWARE DEVELOPMENT &amp; DIGITAL TECHNOLOGY STUDIO</text><rect x="85" y="565" width="50" height="4" fill="#E57F84"/>`,
  1200,
  630,
);
await fs.writeFile(path.join(dir, "social.svg"), social);
await sharp(Buffer.from(social)).png().toFile(path.join(dir, "social.png"));
await sharp(path.join(root, "public/images/brand-sculpture-original.png"))
  .resize(1440)
  .webp({ quality: 85 })
  .toFile(path.join(root, "public/images/brand-sculpture.webp"));
// Recorded internal directions: open aperture, continuous ribbon, and ascending planes.
await fs.writeFile(
  path.join(dir, "logo-explorations.svg"),
  svg(
    `<rect width="900" height="280" fill="#F7F5F2"/><g transform="translate(110 60) scale(2)">${mark()}</g><g transform="translate(400 65)" fill="none" stroke="#2F5061" stroke-width="18"><path d="m0 105 45-105 47 105M22 65h47"/></g><g transform="translate(665 65)" fill="#2F5061"><path d="m0 105 45-105 12 28-35 77ZM59 39l29 66H66L48 63Z"/><path d="M25 70h31l9 17H17Z" fill="#E57F84"/></g><text x="80" y="235" font-family="sans-serif" font-size="13" fill="#2F5061">01 / OPEN APERTURE — SELECTED</text><text x="375" y="235" font-family="sans-serif" font-size="13" fill="#2F5061">02 / CONTINUOUS RIBBON</text><text x="660" y="235" font-family="sans-serif" font-size="13" fill="#2F5061">03 / ASCENDING PLANES</text>`,
    900,
    280,
  ),
);
console.log(
  "Generated outlined SVG logos, brand mark, favicon, social card, and compressed hero.",
);
