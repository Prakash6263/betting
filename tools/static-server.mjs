import fs from 'fs';
import http from 'http';
import path from 'path';
import { fileURLToPath } from 'url';
const ROOT = 'D:\\prakash\\batting\\bettings\\bettings';
const PORT = 8090;
const MIME = { '.html':'text/html; charset=utf-8', '.js':'application/javascript; charset=utf-8', '.css':'text/css; charset=utf-8', '.png':'image/png', '.jpg':'image/jpeg', '.jpeg':'image/jpeg', '.gif':'image/gif', '.svg':'image/svg+xml', '.webp':'image/webp', '.ico':'image/x-icon', '.woff':'font/woff', '.woff2':'font/woff2', '.ttf':'font/ttf', '.json':'application/json' };
http.createServer((req, res) => {
  let urlPath = decodeURIComponent((req.url || '/').split('?')[0]);
  if (urlPath === '/') urlPath = '/index.html';
  const fp = path.join(ROOT, urlPath);
  if (!fp.startsWith(ROOT)) { res.writeHead(403); res.end('forbidden'); return; }
  fs.stat(fp, (err, st) => {
    const target = (!err && st.isDirectory()) ? path.join(fp, 'index.html') : fp;
    fs.readFile(target, (err2, data) => {
      if (err2) { res.writeHead(404); res.end('not found: ' + urlPath); return; }
      res.writeHead(200, { 'Content-Type': MIME[path.extname(target).toLowerCase()] || 'application/octet-stream', 'Cache-Control': 'no-cache' });
      res.end(data);
    });
  });
}).listen(PORT, () => console.log('serving on http://localhost:' + PORT));