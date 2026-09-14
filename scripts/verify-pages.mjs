import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const out = fileURLToPath(new URL('../out/', import.meta.url));
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '/brasas-e-fogao';
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || `https://cloudpronto.github.io${basePath}`).replace(/\/$/, '');
const files = readdirSync(out, { recursive: true }).map(String);
const checked = new Set();
for (const route of ['index.html', 'cardapio/index.html', '404.html', 'robots.txt', 'sitemap.xml', 'cardapio-brasas-e-fogao.pdf']) {
  assert(existsSync(path.join(out, route)), `Missing export: ${route}`);
}
for (const file of files.filter((name) => /\.(html|css)$/.test(name))) {
  const content = readFileSync(path.join(out, file), 'utf8');
  const urls = [...content.matchAll(/(?:src|href)="([^"<>]+)"|url\(['"]?([^)'"\s]+)['"]?\)/g)];
  for (const match of urls) {
    const url = (match[1] || match[2]).split(/[?#]/)[0];
    if (!url.startsWith('/') || url.startsWith('//')) continue;
    assert(url === basePath || url.startsWith(`${basePath}/`), `URL misses basePath in ${file}: ${url}`);
    const relative = decodeURIComponent(url.slice(basePath.length));
    const target = path.join(out, relative);
    assert(existsSync(target), `Missing asset or page in ${file}: ${url}`);
    if (statSync(target).isDirectory()) assert(existsSync(path.join(target, 'index.html')), `Missing index: ${url}`);
    checked.add(url);
  }
}
for (const [file, canonical] of [['index.html', `${siteUrl}/`], ['cardapio/index.html', `${siteUrl}/cardapio/`]]) {
  const html = readFileSync(path.join(out, file), 'utf8');
  assert(html.includes(`rel="canonical" href="${canonical}"`), `Incorrect canonical in ${file}`);
  assert(html.includes('Brasas e Fogão'), `Missing restaurant content: ${file}`);
}
const menu = readFileSync(path.join(out, 'cardapio/index.html'), 'utf8');
assert(menu.includes('Suco Honest') && menu.includes('Choripan ao chimichurri'), 'Missing menu items');
assert(readFileSync(path.join(out, 'sitemap.xml'), 'utf8').includes(`${siteUrl}/cardapio/`));
assert(readFileSync(path.join(out, 'robots.txt'), 'utf8').includes(`${siteUrl}/sitemap.xml`));
console.log(`Static export verified: ${checked.size} local paths, homepage, menu, PDF, fonts and SEO.`);
