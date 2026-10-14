#!/usr/bin/env node
// Post-build check that out/sitemap.xml and the built pages agree.
//
// Runs as the npm "postbuild" step, after `next build` has written out/.
// Node built-ins only. Exits 1 with a readable list when:
//   - an indexable built page is missing from the sitemap,
//   - the sitemap lists a URL with no built page,
//   - a sitemap URL is a duplicate, lacks a trailing slash, or does not start
//     with the production origin,
//   - /thank-you/ appears in the sitemap.
// Pages with a noindex robots meta tag are intentionally excluded from the
// sitemap and are not reported as missing.

import { readdirSync, readFileSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(repoRoot, "out");
const ORIGIN = "https://redcarpetplumbing.com/";
const IGNORED_DIRS = new Set(["404", "_next", "images"]);

if (!existsSync(path.join(outDir, "sitemap.xml"))) {
  console.error("check-sitemap-sync: out/sitemap.xml not found. Run the build first.");
  process.exit(1);
}

const sitemapXml = readFileSync(path.join(outDir, "sitemap.xml"), "utf8");
const locs = [...sitemapXml.matchAll(/<loc>([^<]*)<\/loc>/g)].map((m) => m[1].trim());

// Every index.html under out/, as a route with a trailing slash.
function collectPages(dir, rel = "") {
  const found = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (rel === "" && IGNORED_DIRS.has(entry.name)) continue;
      found.push(...collectPages(path.join(dir, entry.name), `${rel}${entry.name}/`));
    } else if (entry.name === "index.html") {
      found.push({ route: `/${rel}`, file: path.join(dir, entry.name) });
    }
  }
  return found;
}

function isNoindex(html) {
  for (const tag of html.match(/<meta\b[^>]*>/gi) ?? []) {
    if (!/name=["']robots["']/i.test(tag)) continue;
    const content = tag.match(/content=["']([^"']*)["']/i);
    if (content && /noindex/i.test(content[1])) return true;
  }
  return false;
}

const pages = collectPages(outDir);
const indexable = [];
const noindexPages = [];
for (const page of pages) {
  const html = readFileSync(page.file, "utf8");
  (isNoindex(html) ? noindexPages : indexable).push(page.route);
}

const problems = [];
const builtRoutes = new Set(pages.map((p) => p.route));
const sitemapPaths = new Set();
const seen = new Set();

for (const loc of locs) {
  if (seen.has(loc)) problems.push(`Duplicate sitemap URL: ${loc}`);
  seen.add(loc);
  if (!loc.startsWith(ORIGIN)) {
    problems.push(`Sitemap URL does not start with ${ORIGIN}: ${loc}`);
    continue;
  }
  if (!loc.endsWith("/")) problems.push(`Sitemap URL lacks a trailing slash: ${loc}`);
  const route = loc.slice(ORIGIN.length - 1);
  sitemapPaths.add(route);
  if (route === "/thank-you/") problems.push(`Sitemap lists ${loc}`);
  if (!builtRoutes.has(route)) problems.push(`Sitemap URL has no built page: ${loc}`);
}

for (const route of indexable) {
  if (!sitemapPaths.has(route)) {
    problems.push(`Indexable built page missing from the sitemap: ${route}`);
  }
}

if (problems.length > 0) {
  console.error(`check-sitemap-sync: ${problems.length} problem(s)`);
  for (const p of problems) console.error(`  - ${p}`);
  process.exit(1);
}

console.log(
  `check-sitemap-sync: ${pages.length} pages built, ${locs.length} sitemap URLs, ` +
    `${noindexPages.length} noindex page(s) excluded` +
    (noindexPages.length > 0 ? ` (${noindexPages.join(", ")})` : ""),
);
