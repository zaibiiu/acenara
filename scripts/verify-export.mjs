import fs from "node:fs/promises";
import path from "node:path";
import assert from "node:assert/strict";
const root = path.resolve("out");
async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  return (
    await Promise.all(
      entries.map((e) =>
        e.isDirectory()
          ? walk(path.join(dir, e.name))
          : [path.join(dir, e.name)],
      ),
    )
  ).flat();
}
const files = await walk(root);
const pages = files.filter((f) => f.endsWith(".html"));
const issues = [];
const titles = new Set();
let links = 0,
  assets = 0,
  anchors = 0;
for (const file of pages) {
  const html = await fs.readFile(file, "utf8");
  const title = html.match(/<title>([\s\S]*?)<\/title>/)?.[1];
  if (!title) issues.push(`${file}: missing title`);
  if (
    !file.endsWith("404.html") &&
    !file.endsWith(path.join("404", "index.html"))
  ) {
    if (titles.has(title)) issues.push(`${file}: duplicate title`);
    titles.add(title);
  }
  const h1 = html.match(/<h1(?:\s|>)/g) || [];
  if (h1.length !== 1)
    issues.push(`${file}: expected one H1, found ${h1.length}`);
  const pageUrl = new URL(
    path
      .relative(root, file)
      .replaceAll("\\", "/")
      .replace(/index\.html$/, ""),
    "https://qa.invalid/",
  );
  for (const match of html.matchAll(/(?:href|src)="([^"<>]+)"/g)) {
    const raw = match[1].replaceAll("&amp;", "&");
    if (/^(mailto:|tel:|data:|https?:\/\/|javascript:)/.test(raw)) continue;
    const url = new URL(raw, pageUrl);
    let dest = path.join(root, decodeURIComponent(url.pathname));
    try {
      if ((await fs.stat(dest)).isDirectory())
        dest = path.join(dest, "index.html");
      await fs.access(dest);
    } catch {
      issues.push(`${path.relative(root, file)}: missing local target ${raw}`);
      continue;
    }
    if (url.hash && dest.endsWith(".html")) {
      anchors++;
      const targetHtml = await fs.readFile(dest, "utf8");
      const id = decodeURIComponent(url.hash.slice(1));
      if (!targetHtml.includes(`id="${id}"`))
        issues.push(`${file}: missing anchor ${raw}`);
    }
    if (dest.endsWith(".html")) links++;
    else assets++;
  }
  if (html.includes("http://localhost") || html.includes("http://127.0.0.1"))
    issues.push(`${file}: local origin leaked into export`);
}
assert.ok(
  pages.length >= 22,
  `Expected at least 22 HTML files; got ${pages.length}`,
);
assert.deepEqual(issues, []);
for (const file of [
  "favicon.ico",
  "solutions/index.html",
  "how-we-work/index.html",
  "brand/icon-dark.svg",
  "brand/app-icon.png",
  "images/people-collaboration.webp",
  "images/people-strategy.webp",
  "images/people-design.webp",
  "images/people-architecture.webp",
  "brand/logo.svg",
  "brand/logo-dark.svg",
  "brand/icon.svg",
  "brand/social.png",
  "images/brand-sculpture.webp",
  "sitemap.xml",
  "robots.txt",
])
  await fs.access(path.join(root, file));
console.log(
  `PASS: ${pages.length} HTML files; ${links} internal links; ${anchors} anchors; ${assets} asset references. Unique page titles and single H1 verified.`,
);
