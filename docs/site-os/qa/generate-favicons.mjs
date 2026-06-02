// Generate favicon and app icon assets from the trimmed brand logo.
// Source: Images/brand/logo/Red Carpet Plumbing logo-trimmed.png (mascot only, no wordmark)
// Each icon is centered on a square transparent canvas with padding so the mark
// does not touch the edges. Padding is 12% of the canvas (so logo occupies 76%).
//
// Output:
//   app/favicon.ico                                       (multi-size ICO: 16, 32, 48 embedded as PNG)
//   public/images/brand/favicon/favicon-16x16.png
//   public/images/brand/favicon/favicon-32x32.png
//   public/images/brand/favicon/favicon-48x48.png
//   public/images/brand/favicon/apple-touch-icon-180x180.png
//   public/images/brand/favicon/android-chrome-192x192.png
//   public/images/brand/favicon/android-chrome-512x512.png
//   public/images/brand/favicon/site-icon-512x512.png
//   public/images/brand/favicon/favicon-source.png        (1024 high-res reference)
//
// Run from project root: node docs/site-os/qa/generate-favicons.mjs

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const __filename = fileURLToPath(import.meta.url);
const root = path.resolve(path.dirname(__filename), '..', '..', '..');
const require = createRequire(path.join(root, 'package.json'));
const sharp = require('sharp');

const sourcePath = path.join(root, 'Images', 'brand', 'logo', 'Red Carpet Plumbing logo-trimmed.png');
const faviconDir = path.join(root, 'public', 'images', 'brand', 'favicon');
const appFaviconPath = path.join(root, 'app', 'favicon.ico');

fs.mkdirSync(faviconDir, { recursive: true });

if (!fs.existsSync(sourcePath)) {
  console.error(`Source logo not found at ${sourcePath}`);
  process.exit(1);
}

const meta = await sharp(sourcePath).metadata();
console.log(`Source: ${path.relative(root, sourcePath).replace(/\\/g, '/')}`);
console.log(`Source dimensions: ${meta.width}x${meta.height} (${meta.format}, alpha=${meta.hasAlpha})`);

const transparent = { r: 0, g: 0, b: 0, alpha: 0 };
// Logo occupies ~76% of canvas; 12% padding per side. Adjust per size for very small icons
// (16/32 need slightly less padding so the mark remains legible).
function paddingForSize(size) {
  if (size <= 32) return 0.06;  // 6% padding -> mark at 88% to maximize legibility
  if (size <= 48) return 0.08;
  return 0.12;
}

async function makeSquarePng(canvasSize, outPath) {
  const pad = paddingForSize(canvasSize);
  const logoTarget = Math.max(1, Math.round(canvasSize * (1 - 2 * pad)));
  const logoBuf = await sharp(sourcePath)
    .resize(logoTarget, logoTarget, { fit: 'contain', background: transparent })
    .png({ compressionLevel: 9 })
    .toBuffer();
  await sharp({
    create: { width: canvasSize, height: canvasSize, channels: 4, background: transparent },
  })
    .composite([{ input: logoBuf, gravity: 'center' }])
    .png({ compressionLevel: 9 })
    .toFile(outPath);
  return fs.statSync(outPath).size;
}

const pngTargets = [
  { size: 16,   name: 'favicon-16x16.png' },
  { size: 32,   name: 'favicon-32x32.png' },
  { size: 48,   name: 'favicon-48x48.png' },
  { size: 180,  name: 'apple-touch-icon-180x180.png' },
  { size: 192,  name: 'android-chrome-192x192.png' },
  { size: 512,  name: 'android-chrome-512x512.png' },
  { size: 512,  name: 'site-icon-512x512.png' },
  { size: 1024, name: 'favicon-source.png' },
];

const results = [];
for (const t of pngTargets) {
  const outPath = path.join(faviconDir, t.name);
  const bytes = await makeSquarePng(t.size, outPath);
  results.push({ ...t, bytes });
}

// Multi-size ICO with embedded PNG payloads (sizes 16, 32, 48) - same padded logo
const icoSizes = [16, 32, 48];
const pngBuffers = [];
for (const size of icoSizes) {
  const pad = paddingForSize(size);
  const logoTarget = Math.max(1, Math.round(size * (1 - 2 * pad)));
  const logoBuf = await sharp(sourcePath)
    .resize(logoTarget, logoTarget, { fit: 'contain', background: transparent })
    .png({ compressionLevel: 9 })
    .toBuffer();
  const buf = await sharp({
    create: { width: size, height: size, channels: 4, background: transparent },
  })
    .composite([{ input: logoBuf, gravity: 'center' }])
    .png({ compressionLevel: 9 })
    .toBuffer();
  pngBuffers.push({ size, buf });
}

// ICO format with PNG payloads:
//   ICONDIR (6): reserved(2)=0, type(2)=1, count(2)
//   ICONDIRENTRY (16 each): w(1), h(1), colors(1)=0, reserved(1)=0, planes(2)=1, bpp(2)=32, size(4), offset(4)
//   payloads...
const headerSize = 6;
const entrySize = 16;
const dirSize = headerSize + entrySize * pngBuffers.length;
const totalSize = dirSize + pngBuffers.reduce((s, p) => s + p.buf.length, 0);
const ico = Buffer.alloc(totalSize);

ico.writeUInt16LE(0, 0);
ico.writeUInt16LE(1, 2);
ico.writeUInt16LE(pngBuffers.length, 4);

let entryOffset = headerSize;
let dataOffset = dirSize;
for (const { size, buf } of pngBuffers) {
  ico.writeUInt8(size === 256 ? 0 : size, entryOffset + 0);
  ico.writeUInt8(size === 256 ? 0 : size, entryOffset + 1);
  ico.writeUInt8(0, entryOffset + 2);
  ico.writeUInt8(0, entryOffset + 3);
  ico.writeUInt16LE(1, entryOffset + 4);
  ico.writeUInt16LE(32, entryOffset + 6);
  ico.writeUInt32LE(buf.length, entryOffset + 8);
  ico.writeUInt32LE(dataOffset, entryOffset + 12);
  buf.copy(ico, dataOffset);
  entryOffset += entrySize;
  dataOffset += buf.length;
}

// Backup the existing scaffold favicon once before overwriting
const backupPath = appFaviconPath + '.scaffold-backup';
let backedUp = false;
let priorIcoExisted = fs.existsSync(appFaviconPath);
if (priorIcoExisted && !fs.existsSync(backupPath)) {
  fs.copyFileSync(appFaviconPath, backupPath);
  backedUp = true;
}
fs.writeFileSync(appFaviconPath, ico);
const icoBytes = fs.statSync(appFaviconPath).size;

console.log('');
console.log('=== Generated PNG icons (public/images/brand/favicon/) ===');
for (const r of results) {
  console.log(`  ${String(r.size).padStart(4)}px  ${r.name.padEnd(38)}  ${(r.bytes/1024).toFixed(2).padStart(8)} KB`);
}
console.log('');
console.log(`=== Generated ICO (app/favicon.ico) ===`);
console.log(`  multi (16,32,48 embedded as PNG)              ${(icoBytes/1024).toFixed(2).padStart(8)} KB`);
console.log(`  app/favicon.ico existed before this run:      ${priorIcoExisted}`);
console.log(`  scaffold backup created at app/favicon.ico.scaffold-backup: ${backedUp}`);
console.log('');

// Emit machine-readable result for the report generator
const resultsJsonPath = path.join(root, 'docs', 'site-os', 'qa', '_favicon-results.json');
const out = {
  source: path.relative(root, sourcePath).replace(/\\/g, '/'),
  sourceDimensions: `${meta.width}x${meta.height}`,
  pngFiles: results.map(r => ({
    size: r.size,
    name: r.name,
    publicPath: path.posix.join('public/images/brand/favicon', r.name),
    bytes: r.bytes,
  })),
  icoFile: {
    path: 'app/favicon.ico',
    embeddedSizes: icoSizes,
    bytes: icoBytes,
    priorIcoExisted,
    backupCreated: backedUp,
    backupPath: backedUp ? 'app/favicon.ico.scaffold-backup' : null,
  },
};
fs.writeFileSync(resultsJsonPath, JSON.stringify(out, null, 2));
console.log(`Results JSON: ${path.relative(root, resultsJsonPath).replace(/\\/g, '/')}`);
console.log('Done.');
