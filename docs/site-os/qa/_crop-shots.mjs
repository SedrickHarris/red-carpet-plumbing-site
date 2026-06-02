// Crop QA screenshots into section-level images for detailed review.
import path from 'node:path';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const sharp = require('../../../node_modules/sharp');

const root = path.resolve(import.meta.dirname, '..', '..', '..');
const qa = path.join(root, 'docs', 'site-os', 'qa');

async function process(src, prefix) {
  const meta = await sharp(src).metadata();
  console.log(`${prefix}: ${meta.width}x${meta.height}`);
  // Find the actual rendered content height by autocropping whitespace from bottom
  // Just split into 4 equal vertical sections + a header zoom
  const sections = 4;
  const sectionH = Math.floor(meta.height / sections);
  for (let i = 0; i < sections; i++) {
    const out = path.join(qa, `${prefix}-band-${i + 1}.png`);
    await sharp(src)
      .extract({ left: 0, top: i * sectionH, width: meta.width, height: Math.min(sectionH, meta.height - i * sectionH) })
      .toFile(out);
  }
  // Plus a top-200 header zoom
  await sharp(src)
    .extract({ left: 0, top: 0, width: meta.width, height: Math.min(220, meta.height) })
    .toFile(path.join(qa, `${prefix}-header-zoom.png`));
}

await process(path.join(qa, 'qa-desktop-1280.png'), 'qa-desktop');
await process(path.join(qa, 'qa-tablet-768.png'), 'qa-tablet');
await process(path.join(qa, 'qa-mobile-375.png'), 'qa-mobile');
console.log('done');
