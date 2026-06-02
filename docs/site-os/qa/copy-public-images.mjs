// Copy Required public image assets from Images/ to public/images/
// Source plan: docs/site-os/qa/public-image-selection-audit.md
// Constraints: no deletes; no moves; preserve sources; WebP-convert when safe; no commits.
// Run from project root: node docs/site-os/qa/copy-public-images.mjs

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const __filename = fileURLToPath(import.meta.url);
const root = path.resolve(path.dirname(__filename), '..', '..', '..');
const imagesRoot = path.join(root, 'Images');
const publicRoot = path.join(root, 'public', 'images');

// Resolve sharp from the project's node_modules
const require = createRequire(path.join(root, 'package.json'));
const sharp = require('sharp');

const items = [
  // 1. Homepage hero
  { source: 'hero/homepage/pixelcut-export (41).webp', dest: 'hero/homepage/hero-primary.webp',
    usage: 'Homepage hero (two-column layout, left column)',
    alt: 'Red Carpet Plumbing plumber at work in a Las Vegas home', convert: false },

  // 2. Homepage service cards (5)
  { source: 'services/emergency-plumbing/24-7-emergency-plumbing.webp', dest: 'services/emergency-plumbing/card.webp',
    usage: 'Homepage service card: Emergency Plumbing (also reused for Emergency CTA strip via component, no separate copy)',
    alt: 'Twenty four hour emergency plumbing service in Las Vegas', convert: false },
  { source: 'services/drain-cleaning/Hydro Jetting in Action  Tough Drain Clog Removal  Red Carpet Plumbing Las Vegas.webp', dest: 'services/drain-cleaning/card.webp',
    usage: 'Homepage service card: Drain Cleaning',
    alt: 'Hydro jetting equipment clearing a tough drain clog', convert: false },
  { source: 'services/water-heater-repair-installation/Modern Water Heater Installation  Energy Efficient Plumbing  Red Carpet Plumbing Las Vegas_enhanced_enhanced.png', dest: 'services/water-heater-repair-installation/card.webp',
    usage: 'Homepage service card: Water Heater Repair and Installation',
    alt: 'Modern energy efficient water heater installation', convert: true },
  { source: 'services/leak-detection-repair/shharris0117_Editorial-style_image_showcasing_advanced_leak_det_7534aa8c-5a8e-482f-bdd4-793341d9612c.webp', dest: 'services/leak-detection-repair/card.webp',
    usage: 'Homepage service card: Leak Detection and Repair',
    alt: 'Advanced leak detection equipment in use at a Las Vegas home', convert: false },
  { source: 'services/slab-leak-detection-repair/shharris0117_Editorial-style_image_of_a_homes_foundation_with_v_50eeb815-b1ff-4d1a-bbc7-b5145529758e.webp', dest: 'services/slab-leak-detection-repair/card.webp',
    usage: 'Homepage service card: Slab Leak Detection and Repair',
    alt: 'Home foundation showing signs of a slab leak', convert: false },

  // 3. Core service page heroes (16)
  { source: 'services/emergency-plumbing/Expert Plumbing Diagnosis & Emergency Inspection  Red Carpet Plumbing Las Vegas.webp', dest: 'services/emergency-plumbing/hero.webp',
    usage: 'Emergency Plumbing service page hero',
    alt: 'Red Carpet Plumbing technician performing an emergency plumbing diagnosis in Las Vegas', convert: false },
  { source: 'services/drain-cleaning/Comprehensive Drain Cleaning Methods  Snaking, Hydro Jetting, Enzymatic  Red Carpet Plumbing Las Vegas.webp', dest: 'services/drain-cleaning/hero.webp',
    usage: 'Drain Cleaning service page hero',
    alt: 'Drain cleaning methods including snaking, hydro jetting, and enzymatic treatment', convert: false },
  { source: 'services/leak-detection-repair/shharris0117_Editorial-style_image_of_a_licensed_plumber_in_a_n_b936e585-8508-4548-925d-086a98066ed9 (1) (1).webp', dest: 'services/leak-detection-repair/hero.webp',
    usage: 'Leak Detection and Repair service page hero',
    alt: 'Licensed plumber locating a hidden water leak in a Las Vegas home', convert: false },
  { source: 'services/water-heater-repair-installation/Expert Water Heater Installation  Red Carpet Plumbing Las Vegas, NV.webp', dest: 'services/water-heater-repair-installation/hero.webp',
    usage: 'Water Heater Repair and Installation service page hero',
    alt: 'Expert water heater installation in a Las Vegas home', convert: false },
  { source: 'services/slab-leak-detection-repair/shharris0117_Editorial-style_close-up_image_of_advanced_leak_de_7b32d18f-500f-42aa-afe5-59dcfb3f9ba5.webp', dest: 'services/slab-leak-detection-repair/hero.webp',
    usage: 'Slab Leak Detection and Repair service page hero',
    alt: 'Close up of advanced slab leak detection equipment', convert: false },
  { source: 'services/re-piping/re-piping-services.webp', dest: 'services/re-piping/hero.webp',
    usage: 'Re-Piping service page hero',
    alt: 'Whole home re-piping service in Las Vegas', convert: false },
  { source: 'services/water-pipe-repair-replacement/shharris0117_Editorial-style_high-resolution_image_of_a_profess_10a3ec07-eabb-4093-b5f6-e012e40e5f3b (1) (1).webp', dest: 'services/water-pipe-repair-replacement/hero.webp',
    usage: 'Water Pipe Repair and Replacement service page hero',
    alt: 'Professional water pipe repair work in progress', convert: false },
  { source: 'services/gas-line-plumbing/Professional Gas Line Installation in Progress  Red Carpet Plumbing Las Vegas.webp', dest: 'services/gas-line-plumbing/hero.webp',
    usage: 'Gas Line Plumbing service page hero',
    alt: 'Professional gas line installation in progress in Las Vegas', convert: false },
  { source: 'services/toilet-repair-installation/shharris0117_Editorial-style_image_of_a_stylish_modern_toilet_i_8b240458-6703-4bcd-a29c-e6d4cb8957f0.webp', dest: 'services/toilet-repair-installation/hero.webp',
    usage: 'Toilet Repair and Installation service page hero',
    alt: 'Stylish modern toilet installation in a Las Vegas bathroom', convert: false },
  { source: 'services/faucet-sink-repair-installation/faucet-sink-repair-replacement-installation.webp', dest: 'services/faucet-sink-repair-installation/hero.webp',
    usage: 'Faucet and Sink Repair and Installation service page hero',
    alt: 'Faucet and sink repair, replacement, and installation services', convert: false },
  { source: 'services/garbage-disposal-repair-installation/Modern Garbage Disposal Installation  Aesthetic & Functional  Red Carpet Plumbing Las Vegas.webp', dest: 'services/garbage-disposal-repair-installation/hero.webp',
    usage: 'Garbage Disposal Repair and Installation service page hero',
    alt: 'Modern garbage disposal installation in a Las Vegas kitchen', convert: false },
  { source: 'services/backflow-prevention/Backflow Prevention Device Installation  Professional Plumbing Services  Red Carpet Plumbing Las Vegas.webp', dest: 'services/backflow-prevention/hero.webp',
    usage: 'Backflow Prevention service page hero',
    alt: 'Professional backflow prevention device installation', convert: false },
  { source: 'services/video-camera-plumbing-inspections/shharris0117_High-resolution_editorial-style_image_of_a_license_9f02cebf-186d-454d-b6bf-bd82b6fc18c3 (1).webp', dest: 'services/video-camera-plumbing-inspections/hero.webp',
    usage: 'Video Camera Plumbing Inspections service page hero',
    alt: 'Licensed plumber performing a video camera pipe inspection', convert: false },
  { source: 'services/water-meter-pressure-regulator-services/shharris0117_High-resolution_editorial-style_image_of_a_license_d731b012-8b7e-4a35-8d75-75872bf78a40 (1) (1).webp', dest: 'services/water-meter-pressure-regulator-services/hero.webp',
    usage: 'Water Meter and Pressure Regulator Services service page hero',
    alt: 'Licensed technician servicing a water meter and pressure regulator', convert: false },
  { source: 'services/trenchless-piping/shharris0117_Editorial-style_image_of_a_small_excavation_site_i_69bb8c5a-fdeb-4461-bf94-d452cbd1262f (1) (1).webp', dest: 'services/trenchless-piping/hero.webp',
    usage: 'Trenchless Piping Services service page hero',
    alt: 'Small excavation site for trenchless piping service in Las Vegas', convert: false },
  { source: 'services/plumbing-fixture-repair-replacement-installation/Plumbing Fixture Installation & Repair  Professional Service  Red Carpet Plumbing Las Vegas.webp', dest: 'services/plumbing-fixture-repair-replacement-installation/hero.webp',
    usage: 'Plumbing Fixture Repair, Replacement and Installation service page hero',
    alt: 'Professional plumbing fixture installation and repair', convert: false },

  // 4. Location hub heroes (4)
  { source: "locations/las-vegas/View_of_Las_Vegas'_strip_from_the_helicopter.jpg", dest: 'locations/las-vegas/hero.webp',
    usage: 'Las Vegas Tier 1 location hub hero',
    alt: 'View of the Las Vegas Strip from above', convert: true },
  { source: 'locations/henderson/Henderson,_NV_-_District1.jpg', dest: 'locations/henderson/hero.webp',
    usage: 'Henderson Tier 1 location hub hero',
    alt: 'Henderson, Nevada residential district', convert: true },
  { source: 'locations/summerlin/SummerlinEntrance.jpg', dest: 'locations/summerlin/hero.webp',
    usage: 'Summerlin Tier 1 location hub hero',
    alt: 'Summerlin community entrance in Las Vegas', convert: true },
  { source: 'locations/spring-valley/Las_Vegas_Spring_Valley_1.jpg', dest: 'locations/spring-valley/hero.webp',
    usage: 'Spring Valley Tier 1 location hub hero',
    alt: 'Spring Valley neighborhood near Las Vegas', convert: true },

  // 6. Brand logo (1; PNG kept to preserve transparency for header logo)
  { source: 'brand/logo/Red Carpet Plumbing  Transparent Logo  Las Vegas Plumbing Experts  Trenchless Piping & Leak Detection.png', dest: 'brand/logo/red-carpet-plumbing-logo.png',
    usage: 'Site header, footer, structured-data logo field',
    alt: 'Red Carpet Plumbing logo', convert: false },

  // 7. Company vehicle (1)
  { source: 'company/vehicles/pixelcut-export.webp', dest: 'company/vehicles/branded-vehicle.webp',
    usage: 'About page, trust strip, footer accent',
    alt: 'Red Carpet Plumbing service vehicle in Las Vegas', convert: false },
];

// Pre-create the standard folder tree
const dirs = [
  'brand/logo', 'brand/favicon',
  'hero/homepage', 'hero/locations',
  'services', 'locations', 'company', 'blog', 'social'
];
for (const d of dirs) {
  fs.mkdirSync(path.join(publicRoot, d), { recursive: true });
}

function pickUniqueDest(destFullPath) {
  if (!fs.existsSync(destFullPath)) return destFullPath;
  const ext = path.extname(destFullPath);
  const base = destFullPath.slice(0, -ext.length);
  let i = 2;
  while (fs.existsSync(`${base}-copy-${i}${ext}`)) i++;
  return `${base}-copy-${i}${ext}`;
}

const results = [];
let totalCopiedBytes = 0;
let totalSourceBytes = 0;
let conflicts = 0;
let conversions = 0;
let copies = 0;
let failures = 0;

for (const item of items) {
  const sourceFull = path.join(imagesRoot, item.source);
  const destDir = path.join(publicRoot, path.dirname(item.dest));
  fs.mkdirSync(destDir, { recursive: true });
  let destFull = path.join(publicRoot, item.dest);

  let conflictNote = '';
  if (fs.existsSync(destFull)) {
    destFull = pickUniqueDest(destFull);
    conflictNote = `Dest existed; renamed to ${path.basename(destFull)}.`;
    conflicts++;
  }

  let sourceSize = 0, finalSize = 0, originalType, finalType, status = 'ok', note = '';
  try {
    sourceSize = fs.statSync(sourceFull).size;
    originalType = path.extname(sourceFull).toLowerCase().slice(1);
    finalType = path.extname(destFull).toLowerCase().slice(1);

    if (item.convert) {
      await sharp(sourceFull).webp({ quality: 82, effort: 5 }).toFile(destFull);
      conversions++;
      note = `Converted ${originalType.toUpperCase()} to WebP (quality 82, effort 5).`;
    } else {
      fs.copyFileSync(sourceFull, destFull);
      copies++;
      note = `Copied as-is (already WebP or extension-preserved).`;
    }
    finalSize = fs.statSync(destFull).size;
    totalSourceBytes += sourceSize;
    totalCopiedBytes += finalSize;
  } catch (err) {
    status = 'FAIL';
    note = `ERROR: ${err.message}`;
    failures++;
  }

  results.push({
    source: item.source,
    dest: path.relative(root, destFull).replace(/\\/g, '/'),
    originalType, finalType,
    sourceSize, finalSize,
    usage: item.usage, alt: item.alt,
    convert: item.convert,
    status, note: (conflictNote ? conflictNote + ' ' : '') + note,
  });
}

const jsonPath = path.join(root, 'docs', 'site-os', 'qa', '_image-copy-results.json');
fs.writeFileSync(jsonPath, JSON.stringify(results, null, 2));

const fmtKB = (b) => (b / 1024).toFixed(1) + ' KB';
const fmtMB = (b) => (b / 1024 / 1024).toFixed(2) + ' MB';

console.log('=== COPY SUMMARY ===');
console.log(`Total items processed: ${items.length}`);
console.log(`Successful copies (no conversion): ${copies}`);
console.log(`Successful conversions to WebP: ${conversions}`);
console.log(`Filename conflicts handled: ${conflicts}`);
console.log(`Failures: ${failures}`);
console.log(`Total source bytes: ${fmtMB(totalSourceBytes)}`);
console.log(`Total bytes written to public/images/: ${fmtMB(totalCopiedBytes)}`);
console.log(`Net savings from conversions: ${fmtKB(totalSourceBytes - totalCopiedBytes)}`);
console.log('');
console.log('Results JSON: ' + path.relative(root, jsonPath).replace(/\\/g, '/'));
