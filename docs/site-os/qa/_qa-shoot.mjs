// True mobile emulation via puppeteer-core + existing Chrome.
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const puppeteer = require('puppeteer-core');

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..', '..');
const chrome = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const viewports = [
  { name: 'mobile-375', width: 375, height: 800, dpr: 2, mobile: true },
  { name: 'tablet-768', width: 768, height: 1024, dpr: 2, mobile: true },
  { name: 'desktop-1280', width: 1280, height: 900, dpr: 1, mobile: false },
];

const browser = await puppeteer.launch({
  executablePath: chrome,
  headless: 'new',
  args: ['--no-sandbox', '--disable-gpu'],
});

for (const vp of viewports) {
  const page = await browser.newPage();
  await page.setViewport({
    width: vp.width,
    height: vp.height,
    deviceScaleFactor: vp.dpr,
    isMobile: vp.mobile,
    hasTouch: vp.mobile,
  });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0', timeout: 30000 });

  // Measure document and html dimensions
  const m = await page.evaluate(() => {
    const html = document.documentElement;
    const body = document.body;
    return {
      htmlScrollWidth: html.scrollWidth,
      htmlClientWidth: html.clientWidth,
      htmlOffsetWidth: html.offsetWidth,
      bodyScrollWidth: body.scrollWidth,
      bodyOffsetWidth: body.offsetWidth,
      innerWidth: window.innerWidth,
      devicePixelRatio: window.devicePixelRatio,
    };
  });
  console.log(`${vp.name} (${vp.width}x${vp.height} @${vp.dpr}x mobile=${vp.mobile}):`);
  console.log('  ', m);

  // Find any element wider than viewport
  const overflows = await page.evaluate((w) => {
    const items = [];
    document.querySelectorAll('*').forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.right > w + 1) {
        items.push({
          tag: el.tagName.toLowerCase(),
          cls: (el.className || '').toString().slice(0, 80),
          right: Math.round(r.right),
          width: Math.round(r.width),
        });
      }
    });
    return items.slice(0, 10);
  }, vp.width);
  if (overflows.length) {
    console.log('  overflowing elements (top 10):');
    overflows.forEach((o) => console.log(`    ${o.tag}.${o.cls} right=${o.right} width=${o.width}`));
  } else {
    console.log('  no horizontal overflow');
  }

  const outPath = path.join(root, 'docs', 'site-os', 'qa', `qa-pup-${vp.name}.png`);
  await page.screenshot({ path: outPath, fullPage: true });
  console.log('  saved:', path.relative(root, outPath));
  await page.close();
}

await browser.close();
console.log('done');
