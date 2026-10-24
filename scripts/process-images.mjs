import fs from "node:fs/promises";
import path from "node:path";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const sharp = require("sharp");
const source = path.resolve("design/source-images");
const output = path.resolve("public/images");
await fs.mkdir(output, { recursive: true });
for (const name of await fs.readdir(source)) {
  if (!name.endsWith(".png")) continue;
  const target = path.join(output, name.replace(".png", ".webp"));
  await sharp(path.join(source, name))
    .resize({ width: 1440, withoutEnlargement: true })
    .webp({ quality: name.startsWith("people-") ? 84 : 83 })
    .toFile(target);
  const stat = await fs.stat(target);
  console.log(`${path.basename(target)}: ${Math.round(stat.size / 1024)} KB`);
}
