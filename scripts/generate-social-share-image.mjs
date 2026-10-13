#!/usr/bin/env node
// Regenerates the sitewide social share image (Open Graph and Twitter/X card).
//
// Output: a 1200x630 JPEG with the existing logo centered on a flat Off White
// background. No photo, panel, gradient, border, or added text. The same file is
// written to both Next.js file-convention locations:
//   app/opengraph-image.jpg
//   app/twitter-image.jpg
//
// The logo is trimmed to its visible bounds, then scaled down (never up) to fit a
// 1000x500 box centered on the canvas. The source logo is only read, never modified.
//
// Usage: node scripts/generate-social-share-image.mjs

import { copyFileSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const logoPath = path.join(
  repoRoot,
  "public/images/brand/logo/red-carpet-plumbing-logo.png",
);
const ogPath = path.join(repoRoot, "app/opengraph-image.jpg");
const twitterPath = path.join(repoRoot, "app/twitter-image.jpg");

const WIDTH = 1200;
const HEIGHT = 630;
const BACKGROUND = "#FAF8F5";
const LOGO_MAX_WIDTH = 1000;
const LOGO_MAX_HEIGHT = 500;
const JPEG_QUALITY = 90;
const MAX_BYTES = 200 * 1024;

const trimmed = await sharp(logoPath).trim().toBuffer({ resolveWithObject: true });
const logo = await sharp(trimmed.data)
  .resize({
    width: LOGO_MAX_WIDTH,
    height: LOGO_MAX_HEIGHT,
    fit: "inside",
    withoutEnlargement: true,
  })
  .png()
  .toBuffer({ resolveWithObject: true });

const left = Math.round((WIDTH - logo.info.width) / 2);
const top = Math.round((HEIGHT - logo.info.height) / 2);

await sharp({
  create: { width: WIDTH, height: HEIGHT, channels: 3, background: BACKGROUND },
})
  .composite([{ input: logo.data, left, top }])
  .jpeg({ quality: JPEG_QUALITY, chromaSubsampling: "4:4:4" })
  .toFile(ogPath);

copyFileSync(ogPath, twitterPath);

const meta = await sharp(readFileSync(ogPath)).metadata();
const bytes = statSync(ogPath).size;
console.log(`trimmed logo: ${trimmed.info.width}x${trimmed.info.height}`);
console.log(`placed logo: ${logo.info.width}x${logo.info.height} at left=${left} top=${top}`);
console.log(`output: ${meta.width}x${meta.height} ${meta.format} ${bytes} bytes`);

if (meta.width !== WIDTH || meta.height !== HEIGHT) {
  throw new Error(`Unexpected output size ${meta.width}x${meta.height}`);
}
if (bytes > MAX_BYTES) {
  throw new Error(`Output is ${bytes} bytes, over the ${MAX_BYTES} byte budget`);
}
