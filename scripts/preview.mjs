import http from "node:http";
import fs from "node:fs/promises";
import path from "node:path";
const root = path.resolve("out");
const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".xml": "application/xml",
  ".txt": "text/plain; charset=utf-8",
};
const server = http.createServer(async (req, res) => {
  try {
    const pathname = decodeURIComponent(
      new URL(req.url, "http://127.0.0.1").pathname,
    );
    let file = path.resolve(root, `.${pathname}`);
    if (file !== root && !file.startsWith(root + path.sep)) {
      res.writeHead(403);
      res.end();
      return;
    }
    try {
      if ((await fs.stat(file)).isDirectory())
        file = path.join(file, "index.html");
      await fs.access(file);
    } catch {
      file = path.join(root, "404.html");
      res.statusCode = 404;
    }
    const data = await fs.readFile(file);
    res.setHeader(
      "Content-Type",
      types[path.extname(file)] || "application/octet-stream",
    );
    res.end(data);
  } catch {
    res.writeHead(500);
    res.end("Preview error");
  }
});
const port = Number(process.env.PORT || 3000);
server.listen(port, "127.0.0.1", () =>
  console.log(`Acenara preview: http://127.0.0.1:${port}`),
);
