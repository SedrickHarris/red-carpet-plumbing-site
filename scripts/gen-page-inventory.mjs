#!/usr/bin/env node
// Generates docs/site-os/page-inventory.md.
//
// Run after `npm run build` (needs out/):
//   node scripts/gen-page-inventory.mjs
//
// Inputs (Node built-ins only, no dependencies):
//   docs/seo/route-manifest.json                          route list and source files
//   out/                                                  built HTML: title, noindex, sitemap
//   docs/site-os/inputs/red-carpet-plumbing-build-list.md approved routes not yet built
//   app/                                                  scanned for ServiceCard built={false}
//
// The output is overwritten each run. Do not hand-edit page-inventory.md.

import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

const MANIFEST = "docs/seo/route-manifest.json";
const BUILD_LIST = "docs/site-os/inputs/red-carpet-plumbing-build-list.md";
const OUT_FILE = "docs/site-os/page-inventory.md";
const OUT_DIR = "out";

for (const p of [MANIFEST, BUILD_LIST, OUT_DIR]) {
  if (!fs.existsSync(p)) {
    console.error(`Missing ${p}. Run "npm run build" from the project root first.`);
    process.exit(1);
  }
}

const slash = (u) => (u.endsWith("/") ? u : u + "/");
const decode = (s) =>
  s.replace(/&amp;/g, "&").replace(/&#x27;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">");

const CITIES = new Set([
  "las-vegas", "henderson", "north-las-vegas", "summerlin", "spring-valley",
  "enterprise", "paradise", "green-valley", "lake-las-vegas", "boulder-city",
]);

// Route type from the URL pattern alone.
function classify(route) {
  const s = route.split("/").filter(Boolean);
  if (route === "/" || route === "/about/" || route === "/contact/") return "Core";
  if (route === "/plumbing-services/" || route === "/service-areas/") return "Hub";
  if (route === "/privacy-policy/" || route === "/terms-and-conditions/") return "Legal";
  if (route === "/sitemap/" || route === "/thank-you/") return "Utility";
  if (s.length === 1 && s[0].endsWith("-plumbing-services")) return "City hub";
  if (s.length === 1) return "Core service";
  if (s.length === 2 && s[1] === "aliante-area-plumbing") return "Aliante hub";
  if (s.length === 2 && CITIES.has(s[0])) return "Service-location";
  if (s.length === 3 && s[1] === "aliante-area") return "Aliante service";
  return "Unclassified";
}
const TYPE_ORDER = [
  "Core", "Hub", "City hub", "Core service", "Service-location",
  "Aliante hub", "Aliante service", "Legal", "Utility", "Unclassified",
];

const manifest = JSON.parse(fs.readFileSync(MANIFEST, "utf8"));
const routes = manifest.routes.map((r) => ({ route: slash(r.route), source: r.sourceFile }));

function htmlFor(route) {
  const f = route === "/" ? path.join(OUT_DIR, "index.html") : path.join(OUT_DIR, route.slice(1), "index.html");
  return fs.existsSync(f) ? fs.readFileSync(f, "utf8") : null;
}

const rows = routes.map(({ route, source }) => {
  const html = htmlFor(route);
  const title = html ? decode((html.match(/<title>([^<]*)<\/title>/) || [])[1] || "") : "";
  const noindex = html ? /<meta name="robots" content="[^"]*noindex/.test(html) : false;
  return { route, source, type: classify(route), indexable: html ? !noindex : null, titleLength: html ? title.length : null, built: Boolean(html) };
});

// Built page count: manifest routes plus the Next.js not-found page when present.
const notFoundBuilt = fs.existsSync(path.join(OUT_DIR, "404.html"));
const notFoundNoindex = notFoundBuilt && /<meta name="robots" content="[^"]*noindex/.test(fs.readFileSync(path.join(OUT_DIR, "404.html"), "utf8"));
const totalBuilt = rows.filter((r) => r.built).length + (notFoundBuilt ? 1 : 0);
const noindexCount = rows.filter((r) => r.indexable === false).length + (notFoundNoindex ? 1 : 0);
const sitemapFile = path.join(OUT_DIR, "sitemap.xml");
const sitemapUrls = fs.existsSync(sitemapFile) ? (fs.readFileSync(sitemapFile, "utf8").match(/<loc>/g) || []).length : null;

// Build-list routes with no manifest route.
const have = new Set(rows.map((r) => r.route));
const bl = fs.readFileSync(BUILD_LIST, "utf8").split(/\r?\n/);
const tokens = new Map(); // route -> Set(headings)
let heading = "";
for (const line of bl) {
  const h = line.match(/^#{1,3}\s+(.*)$/);
  if (h) heading = h[1];
  for (const m of line.matchAll(/`(\/[a-z0-9\/-]*)`/g)) {
    const r = slash(m[1]);
    if (/^\/(api|images|_next)/.test(r)) continue;
    if (!tokens.has(r)) tokens.set(r, new Set());
    tokens.get(r).add(heading);
  }
}
const missing = [...tokens].filter(([r]) => !have.has(r));
const coreServiceSlugs = new Set(rows.filter((r) => r.type === "Core service").map((r) => r.route.split("/").filter(Boolean)[0]));
const group = (r, heads) => {
  const s = r.split("/").filter(Boolean);
  if ([...heads].some((h) => /possible future pages/i.test(h))) return "unclear";
  if (s.length === 3) return "tier2child";
  // A second segment that is a built core service slug is a service-location combination.
  if (s.length === 2 && coreServiceSlugs.has(s[1])) return "combo";
  if (s.length === 2 && s[1].endsWith("-plumbing")) return "hub";
  if (s.length === 2) return "combo";
  return "other";
};
const groups = { combo: [], hub: [], tier2child: [], other: [], unclear: [] };
for (const [r, heads] of missing) groups[group(r, heads)].push(r);

// Cards that render as plain text because their routes are not built.
function scan(dir, acc = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) scan(p, acc);
    else if (e.name.endsWith(".tsx")) acc.push(p);
  }
  return acc;
}
const unbuiltCardFiles = scan("app").filter((f) => fs.readFileSync(f, "utf8").includes("built={false}")).length;

let head = "unknown";
try { head = execSync("git log -1 --format=%h%x20%s", { encoding: "utf8" }).trim(); } catch { /* not a git checkout */ }
const today = new Date().toISOString().slice(0, 10);

const countBy = (t) => rows.filter((r) => r.type === t).length;
const L = [];
L.push("# Red Carpet Plumbing Page Inventory", "");
L.push(`- **Generated:** ${today}`);
L.push("- **Sources:** `docs/seo/route-manifest.json` (routes and source files) and `out/` (titles, indexability, sitemap)");
L.push(`- **Branch head when generated:** \`${head}\``);
L.push("- **Regenerate:** run `npm run build`, then `node scripts/gen-page-inventory.mjs`. The file is overwritten; do not hand-edit it.", "");
L.push("## Inventory Summary", "", "| Type | Routes |", "|---|---|");
const labels = {
  "Core": "Core pages (`/`, `/about/`, `/contact/`)",
  "Hub": "Hub pages (`/plumbing-services/`, `/service-areas/`)",
  "City hub": "City hub pages (`/{city}-plumbing-services/`)",
  "Core service": "Core service pages (`/{service}/`)",
  "Service-location": "Service-location pages (`/{city}/{service}/`)",
  "Aliante hub": "Aliante area hub (`/north-las-vegas/aliante-area-plumbing/`)",
  "Aliante service": "Aliante area service pages (`/north-las-vegas/aliante-area/{service}/`)",
  "Legal": "Legal pages",
  "Utility": "Utility pages (`/sitemap/`, `/thank-you/`)",
  "Unclassified": "Unclassified",
};
for (const t of TYPE_ORDER) if (countBy(t) || t !== "Unclassified") L.push(`| ${labels[t]} | ${countBy(t)} |`);
L.push(`| **Total routes in manifest** | **${rows.length}** |`, "");
L.push("| Build check | Value |", "|---|---|");
L.push(`| Manifest routes | ${rows.length} (\`routeCount\` ${manifest.routeCount}) |`);
L.push(`| Total built pages (manifest routes plus the not-found page) | ${totalBuilt} |`);
L.push(`| Sitemap URLs (\`out/sitemap.xml\`) | ${sitemapUrls ?? "n/a"} |`);
L.push(`| Noindex pages | ${noindexCount} (${[...rows.filter((r) => r.indexable === false).map((r) => "`" + r.route + "`"), ...(notFoundNoindex ? ["`/_not-found/`"] : [])].join(", ")}) |`, "");

L.push("## All Routes", "", "Titles are read from the built HTML, so title length reflects what search engines receive. Rows are in route order.", "");
L.push("| Route | Type | Source file | Indexable | Title length |", "|---|---|---|---|---|");
for (const r of rows.slice().sort((a, b) => a.route.localeCompare(b.route))) {
  L.push(`| \`${r.route}\` | ${r.type} | \`${r.source}\` | ${r.indexable === null ? "n/a" : r.indexable ? "yes" : "no"} | ${r.titleLength ?? "n/a"} |`);
}
L.push("");

const list = (arr) => arr.length ? arr.map((r) => `- \`${r}\``).join("\n") : "- none";
L.push("## Approved in Build List, Not Built", "");
L.push(`Routes named in \`docs/site-os/inputs/red-carpet-plumbing-build-list.md\` that have no route in the manifest. ${missing.length - groups.unclear.length} routes.`, "");
L.push(`### Service-location combinations listed as link targets (${groups.combo.length})`, "", list(groups.combo), "");
L.push(`### Neighborhood hubs (${groups.hub.length})`, "", list(groups.hub), "");
L.push(`### Tier 2 neighborhood service-location pages (${groups.tier2child.length})`, "", list(groups.tier2child), "");
if (groups.other.length) L.push(`### Other (${groups.other.length})`, "", list(groups.other), "");
L.push(`## Unclear in Build List`, "", "Routes the build list marks as conditional (\"Possible Future Pages\", build only if demand appears).", "", list(groups.unclear), "");

L.push("## Cards Without Routes", "");
L.push(`Sub-service cards on ${unbuiltCardFiles} service pages use \`ServiceCard\` with \`built={false}\`. They render the title as plain text with no link, because their routes are not built. Examples include the "Types of service" cards on \`/sewer-line-services/\`.`, "");

fs.writeFileSync(OUT_FILE, L.join("\n").replace(/\n+$/, "") + "\n");
const unclassified = rows.filter((r) => r.type === "Unclassified").map((r) => r.route);
console.log(`Wrote ${OUT_FILE}: ${rows.length} routes, ${totalBuilt} built, ${sitemapUrls} sitemap URLs, ${noindexCount} noindex.`);
console.log(`Not built: ${missing.length} (${Object.entries(groups).map(([k, v]) => k + " " + v.length).join(", ")}). Unclassified routes: ${unclassified.length ? unclassified.join(", ") : "none"}.`);
