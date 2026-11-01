# og:url, og:site_name and og:type on 12 Pages (Gate 3 and Gate 4 Report)

Date: 2026-10-28. HEAD: a259d5d. Nothing was staged, committed, pushed, or deployed. The 12 source edits are in the working tree, uncommitted. The insert script, validation scripts, and the out snapshot are in the session scratchpad, outside the repo.

Text handling: report text has no em dashes or double hyphens. In embedded raw output, em dashes show as [em dash] and double hyphens as [dbl-hyphen]. The session scratchpad folder name contains two consecutive hyphens, so every place it appears in raw output shows the marker inside the folder name. Nothing else was altered. The snapshot location is given as <session scratchpad folder>\out-snapshot-og-url (the full absolute path is in the chat message).

## 1. Result: STOPPED on a failed validation check (V4 as written)

All edits and builds succeeded. Twelve of the thirteen planned validation checks pass. V4, as written in the Gate 2 plan, fails. This is a stop condition in the task, so nothing further was done: no repair, no revert, no staging, no commit.

The failure is in the plan's V4 criterion, not in the edits. The plan said each of the 12 HTML diffs must be "exactly three added meta tags and nothing else". The built index.html files also contain an inline Next.js script (self.__next_f.push) that carries the page's head metadata as data. That chunk changes in the same way as the three tags. The plan did not anticipate that chunk, which is a mistake in my plan.

A read-only diagnostic (Section 9, not part of the plan) shows, for all 12 pages: the only HTML differences are the 3 expected meta tags plus that one inline head chunk, and the chunk's new content equals its old content plus exactly the same 3 entries (the entries' index keys are renumbered, nothing is removed). Whether to accept that refined criterion is Sedrick's decision.

Everything else matches the plan: exactly 48 files changed (4 per route), nothing added or removed, 1,420 files identical, 135 of 135 indexable pages have og:url equal to the canonical, the 4 noindex pages and 3 comparison pages are unchanged, canonicals, robots meta, titles and all JSON-LD hashes are unchanged on all 139 pages, the manifest has an empty diff, and the diff is 12 files with 3 insertions and 0 deletions each with CRLF line endings intact.

## 2. Pass or fail table

| ID | Check | Result | Evidence |
|-|-|-|-|
| Step 1 | Working tree has no modified tracked files before starting | PASS | Section 3 |
| Step 2 | Pre-change build (npx next build) | PASS (exit 0) | Section 4 |
| Step 3 | Snapshot copy: 1,468 files, size equal, identical hashes | PASS (1468 files, 78876920 bytes both, sha256 lists identical, diff -rq no differences) | Section 5 |
| Step 4 and 5 | Insert script check mode then apply; anchor found exactly once in all 12 | PASS | Sections 6, 7 |
| Step 6a | git diff stat: 12 files, 3 insertions each, 0 deletions | PASS (12 files, 36 insertions, 0 deletions) | Section 8 |
| Step 6b | Line endings: i/lf and w/crlf for the 12 files | PASS (12 of 12) | Section 8 |
| Step 6c | Added url equals canonical string, character for character | PASS (12 of 12 EQUAL) | Section 8 |
| Step 6d | Added source lines: 0 em dashes, 0 double hyphens | PASS (36 lines, 0 and 0) | Section 8 |
| Step 7 | Second build (npx next build) | PASS (exit 0, TypeScript finished) | Section 10 |
| V1 | Build and sitemap sync check | PASS (both builds exit 0; sync check: 137 pages built, 135 sitemap URLs, 2 noindex excluded) | Sections 4, 10 |
| V2 | HTML page count is 139 | PASS (139) | Section 10 |
| V3 | Exactly 48 files differ after build ID token replacement, none added or removed | PASS (changed 48, unexpected 0, missing 0, added 0, removed 0) | Section 11 |
| V4 | Each of the 12 HTML diffs is exactly 3 added meta tags and nothing else | FAIL as written (each also differs in the inline head flight chunk: 4 tokens removed and 7 added by the script, 3 of which are the expected tags) | Sections 11, 9 |
| V5 | RSC text files (36): no string removed, only expected new strings | PASS (0 strings removed in all 36; new strings are og:url, og:site_name, og:type, website, Red Carpet Plumbing (head file), and the key numbers 27, 28, 29) | Section 11 |
| V6 | og:url equals canonical on all 135 indexable pages | PASS (135 of 135, 0 mismatches) | Section 11 |
| V7 | The 4 noindex pages are unchanged, no og:url | PASS (18 files under those paths, 0 changed, 0 og:url) | Section 11 |
| V8 | Canonicals, robots meta, titles unchanged on all pages; JSON-LD hashes unchanged | PASS (0 differences on 139 pages; JSON-LD equal on all 12 pages and on all 139) | Sections 11, 10 |
| V9 | Everything else identical | PASS (1,420 of 1,468 identical) | Section 11 |
| V10 | docs/seo/route-manifest.json has an empty git diff | PASS (0 lines, no status entry under docs/seo) | Section 10 |
| V11 | Source diff shape: 12 files, 36 insertions, 0 deletions, eol intact | PASS | Sections 8, 10 |
| V12 | No em dash or double hyphen on added lines | PASS on characters (source lines 0 and 0; the 84 added HTML tokens 0 and 0). The validation script's own count assertion (expected 36 added tokens, saw 84) also failed, for the same reason as V4: the tokenizer counts the changed inline chunk as added tokens | Sections 8, 11 |
| V13 | The 3 comparison pages are unchanged | PASS (0 changed files) | Section 11 |
| Noindex scan | Totals versus the baseline in noindex-audit-report.md | PASS (all 16 metrics identical, same 4 noindex pages, 0 routes with any change in robots, canonical or title) | Section 10 |

## 3. Step 1: working tree before starting (raw)

Step 1, part 1 of 1

```text
$ git status
On branch main
Your branch is up to date with 'origin/main'.

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	docs/site-os/reports/og-url-gate2-plan.md
	docs/site-os/reports/og-url-inspection-report.md
	metadata-rewrite-v3.csv

nothing added to commit but untracked files present (use "git add" to track)

$ git diff [dbl-hyphen]stat (modified tracked, expect empty)
[exit=0]
$ git diff [dbl-hyphen]cached [dbl-hyphen]stat (staged, expect empty)
[exit=0]
$ git status [dbl-hyphen]short app lib components public (expect empty)
$ git log -1 [dbl-hyphen]oneline
a259d5d Track noindex and pages.dev audit reports
```


## 4. Step 2: pre-change build (raw)

Pre-change build log, part 1 of 3 (lines 1 to 60)

```text
▲ Next.js 16.2.6 (Turbopack)
- Environments: .env.local

  Creating an optimized production build ...
✓ Compiled successfully in 8.5s
  Running TypeScript ...
  Finished TypeScript in 12.4s ...
  Collecting page data using 15 workers ...
  Generating static pages using 15 workers (0/143) ...
  Generating static pages using 15 workers (35/143) 
  Generating static pages using 15 workers (71/143) 
  Generating static pages using 15 workers (107/143) 
✓ Generating static pages using 15 workers (143/143) in 4.8s
  Finalizing page optimization ...

Route (app)
┌ ○ /
├ ○ /_not-found
├ ○ /about
├ ○ /backflow-prevention
├ ○ /boulder-city-plumbing-services
├ ○ /boulder-city/drain-cleaning
├ ○ /boulder-city/emergency-plumbing
├ ○ /boulder-city/leak-detection-repair
├ ○ /boulder-city/water-heater-repair-installation
├ ○ /commercial-plumbing
├ ○ /contact
├ ○ /drain-cleaning
├ ○ /emergency-plumbing
├ ○ /enterprise-plumbing-services
├ ○ /enterprise/commercial-plumbing
├ ○ /enterprise/drain-cleaning
├ ○ /enterprise/emergency-plumbing
├ ○ /enterprise/leak-detection-repair
├ ○ /enterprise/repiping
├ ○ /enterprise/sewer-line-services
├ ○ /enterprise/slab-leak-detection-repair
├ ○ /enterprise/water-heater-repair-installation
├ ○ /faucet-sink-repair-installation
├ ○ /garbage-disposal-repair-installation
├ ○ /gas-line-plumbing
├ ○ /green-valley-plumbing-services
├ ○ /green-valley/drain-cleaning
├ ○ /green-valley/emergency-plumbing
├ ○ /green-valley/faucet-sink-repair-installation
├ ○ /green-valley/leak-detection-repair
├ ○ /green-valley/repiping
├ ○ /green-valley/slab-leak-detection-repair
├ ○ /green-valley/toilet-repair-installation
├ ○ /green-valley/water-heater-repair-installation
├ ○ /henderson-plumbing-services
├ ○ /henderson/backflow-prevention
├ ○ /henderson/commercial-plumbing
├ ○ /henderson/drain-cleaning
├ ○ /henderson/emergency-plumbing
├ ○ /henderson/faucet-sink-repair-installation
├ ○ /henderson/garbage-disposal-repair-installation
├ ○ /henderson/gas-line-plumbing
├ ○ /henderson/leak-detection-repair
├ ○ /henderson/repiping
```

Pre-change build log, part 2 of 3 (lines 61 to 120)

```text
├ ○ /henderson/sewer-line-services
├ ○ /henderson/slab-leak-detection-repair
├ ○ /henderson/toilet-repair-installation
├ ○ /henderson/water-heater-repair-installation
├ ○ /henderson/water-pipe-repair-replacement
├ ○ /lake-las-vegas-plumbing-services
├ ○ /lake-las-vegas/drain-cleaning
├ ○ /lake-las-vegas/emergency-plumbing
├ ○ /lake-las-vegas/leak-detection-repair
├ ○ /lake-las-vegas/slab-leak-detection-repair
├ ○ /lake-las-vegas/water-heater-repair-installation
├ ○ /las-vegas-plumbing-services
├ ○ /las-vegas/backflow-prevention
├ ○ /las-vegas/commercial-plumbing
├ ○ /las-vegas/drain-cleaning
├ ○ /las-vegas/emergency-plumbing
├ ○ /las-vegas/faucet-sink-repair-installation
├ ○ /las-vegas/garbage-disposal-repair-installation
├ ○ /las-vegas/gas-line-plumbing
├ ○ /las-vegas/leak-detection-repair
├ ○ /las-vegas/repiping
├ ○ /las-vegas/sewer-line-services
├ ○ /las-vegas/slab-leak-detection-repair
├ ○ /las-vegas/toilet-repair-installation
├ ○ /las-vegas/video-camera-plumbing-inspections
├ ○ /las-vegas/water-heater-repair-installation
├ ○ /las-vegas/water-pipe-repair-replacement
├ ○ /leak-detection-repair
├ ○ /manifest.webmanifest
├ ○ /north-las-vegas-plumbing-services
├ ○ /north-las-vegas/aliante-area-plumbing
├ ○ /north-las-vegas/aliante-area/drain-cleaning
├ ○ /north-las-vegas/aliante-area/emergency-plumbing
├ ○ /north-las-vegas/aliante-area/leak-detection-repair
├ ○ /north-las-vegas/aliante-area/slab-leak-detection-repair
├ ○ /north-las-vegas/aliante-area/water-heater-repair-installation
├ ○ /north-las-vegas/commercial-plumbing
├ ○ /north-las-vegas/drain-cleaning
├ ○ /north-las-vegas/emergency-plumbing
├ ○ /north-las-vegas/garbage-disposal-repair-installation
├ ○ /north-las-vegas/leak-detection-repair
├ ○ /north-las-vegas/repiping
├ ○ /north-las-vegas/sewer-line-services
├ ○ /north-las-vegas/slab-leak-detection-repair
├ ○ /north-las-vegas/toilet-repair-installation
├ ○ /north-las-vegas/water-heater-repair-installation
├ ○ /north-las-vegas/water-pipe-repair-replacement
├ ○ /opengraph-image.jpg
├ ○ /paradise-plumbing-services
├ ○ /paradise/backflow-prevention
├ ○ /paradise/commercial-plumbing
├ ○ /paradise/drain-cleaning
├ ○ /paradise/emergency-plumbing
├ ○ /paradise/gas-line-plumbing
├ ○ /paradise/leak-detection-repair
├ ○ /paradise/sewer-line-services
├ ○ /paradise/water-heater-repair-installation
├ ○ /plumbing-fixture-repair-replacement-installation
├ ○ /plumbing-services
├ ○ /privacy-policy
```

Pre-change build log, part 3 of 3 (lines 121 to 160)

```text
├ ○ /repiping
├ ○ /service-areas
├ ○ /sewer-line-services
├ ○ /sitemap
├ ○ /sitemap.xml
├ ○ /slab-leak-detection-repair
├ ○ /spring-valley-plumbing-services
├ ○ /spring-valley/commercial-plumbing
├ ○ /spring-valley/drain-cleaning
├ ○ /spring-valley/emergency-plumbing
├ ○ /spring-valley/leak-detection-repair
├ ○ /spring-valley/repiping
├ ○ /spring-valley/sewer-line-services
├ ○ /spring-valley/slab-leak-detection-repair
├ ○ /spring-valley/water-heater-repair-installation
├ ○ /summerlin-plumbing-services
├ ○ /summerlin/drain-cleaning
├ ○ /summerlin/emergency-plumbing
├ ○ /summerlin/faucet-sink-repair-installation
├ ○ /summerlin/garbage-disposal-repair-installation
├ ○ /summerlin/gas-line-plumbing
├ ○ /summerlin/leak-detection-repair
├ ○ /summerlin/repiping
├ ○ /summerlin/sewer-line-services
├ ○ /summerlin/slab-leak-detection-repair
├ ○ /summerlin/toilet-repair-installation
├ ○ /summerlin/water-heater-repair-installation
├ ○ /summerlin/water-pipe-repair-replacement
├ ○ /terms-and-conditions
├ ○ /thank-you
├ ○ /toilet-repair-installation
├ ○ /trenchless-piping
├ ○ /twitter-image.jpg
├ ○ /video-camera-plumbing-inspections
├ ○ /water-heater-repair-installation
├ ○ /water-meter-pressure-regulator-services
└ ○ /water-pipe-repair-replacement


○  (Static)  prerendered as static content
```


After pre-change build, part 1 of 1 (lines 1 to 11)

```text
$ node scripts/check-sitemap-sync.mjs
check-sitemap-sync: 137 pages built, 135 sitemap URLs, 2 noindex page(s) excluded (/thank-you/, /_not-found/)
[exit=0]
$ find out -name "*.html" | wc -l
139
$ find out -type f | wc -l
1468
$ git status [dbl-hyphen]short
?? docs/site-os/reports/og-url-gate2-plan.md
?? docs/site-os/reports/og-url-inspection-report.md
?? metadata-rewrite-v3.csv
```


## 5. Step 3: snapshot (raw)

Snapshot copy and verification, part 1 of 1 (lines 1 to 20)

```text
snapshot path: C:/Users/Welcome/AppData/Local/Temp/claude/c[dbl-hyphen]Users-Welcome-Desktop-client-sites-red-carpet-plumbing-site/b60365cc-d1d0-46bb-9f81-fb7d1add64f9/scratchpad/out-snapshot-og-url
$ ls -d snapshot before copy (expect missing)
ls: cannot access 'C:/Users/Welcome/AppData/Local/Temp/claude/c[dbl-hyphen]Users-Welcome-Desktop-client-sites-red-carpet-plumbing-site/b60365cc-d1d0-46bb-9f81-fb7d1add64f9/scratchpad/out-snapshot-og-url': No such file or directory
$ cp -a out "<snapshot path>"
[exit=0]
$ find out -type f | wc -l  /  find snapshot -type f | wc -l
out: 1468  snapshot: 1468
$ du -sb out  /  du -sb snapshot (bytes)
78876920	out
78876920	C:/Users/Welcome/AppData/Local/Temp/claude/c[dbl-hyphen]Users-Welcome-Desktop-client-sites-red-carpet-plumbing-site/b60365cc-d1d0-46bb-9f81-fb7d1add64f9/scratchpad/out-snapshot-og-url
$ du -sh out / snapshot
79M	out
79M	C:/Users/Welcome/AppData/Local/Temp/claude/c[dbl-hyphen]Users-Welcome-Desktop-client-sites-red-carpet-plumbing-site/b60365cc-d1d0-46bb-9f81-fb7d1add64f9/scratchpad/out-snapshot-og-url
$ sha256 lists equal?
  1468 C:/Users/Welcome/AppData/Local/Temp/claude/c[dbl-hyphen]Users-Welcome-Desktop-client-sites-red-carpet-plumbing-site/b60365cc-d1d0-46bb-9f81-fb7d1add64f9/scratchpad/g3og-out-pre.sha
  1468 C:/Users/Welcome/AppData/Local/Temp/claude/c[dbl-hyphen]Users-Welcome-Desktop-client-sites-red-carpet-plumbing-site/b60365cc-d1d0-46bb-9f81-fb7d1add64f9/scratchpad/g3og-snap.sha
  2936 total
IDENTICAL (copy verified)
$ diff -rq out snapshot
[exit=0] (0 = no differences)
```


## 6. Step 4: the insert script (full, scratchpad copy)

insert-og.mjs, part 1 of 3 (lines 1 to 60)

```text
// Byte-level insert of three openGraph lines (url, siteName, type) into 12 page files.
// Lives in the session scratchpad, not in the repo.
// Usage: node insert-og.mjs <repoRoot> check   (validate only, writes nothing)
//        node insert-og.mjs <repoRoot> apply   (validate all 12, then write all 12)
// All-or-nothing: if any file fails any check, nothing is written.
import fs from "node:fs";
import path from "node:path";

const root = process.argv[2];
const mode = process.argv[3];
if (!root || !["check", "apply"].includes(mode)) {
  console.error("usage: node insert-og.mjs <repoRoot> check|apply");
  process.exit(2);
}

const ROUTES = [
  "about",
  "backflow-prevention",
  "commercial-plumbing",
  "faucet-sink-repair-installation",
  "garbage-disposal-repair-installation",
  "gas-line-plumbing",
  "plumbing-fixture-repair-replacement-installation",
  "toilet-repair-installation",
  "trenchless-piping",
  "video-camera-plumbing-inspections",
  "water-meter-pressure-regulator-services",
  "water-pipe-repair-replacement",
];
const ORIGIN = "https://redcarpetplumbing.com";
const ANCHOR = "    images: OG_IMAGES,";
const SITE_NAME = "Red Carpet Plumbing";
const TYPE = "website";

const plans = [];
const problems = [];

for (const r of ROUTES) {
  const rel = `app/${r}/page.tsx`;
  const file = path.join(root, rel);
  const buf = fs.readFileSync(file);
  const text = buf.toString("utf8");
  if (text.includes("﻿")) problems.push(`${rel}: contains a BOM`);

  // Line ending: the file must use CRLF consistently (no bare LF lines).
  const crlfCount = (text.match(/\r\n/g) || []).length;
  const lfCount = (text.match(/\n/g) || []).length;
  const eol = crlfCount === lfCount && crlfCount > 0 ? "\r\n" : lfCount > 0 && crlfCount === 0 ? "\n" : null;
  if (eol === null) {
    problems.push(`${rel}: mixed line endings (crlf=${crlfCount}, lf=${lfCount})`);
    continue;
  }

  const lines = text.split(eol);

  // Locate the openGraph block.
  const os = lines.findIndex((l) => /^\s*openGraph:\s*\{\s*$/.test(l));
  const osCount = lines.filter((l) => /^\s*openGraph:\s*\{\s*$/.test(l)).length;
  if (osCount !== 1) {
    problems.push(`${rel}: openGraph block found ${osCount} times`);
```

insert-og.mjs, part 2 of 3 (lines 61 to 120)

```text
    continue;
  }
  let oe = -1;
  let depth = 0;
  let started = false;
  for (let i = os; i < lines.length; i++) {
    for (const ch of lines[i]) {
      if (ch === "{") {
        depth++;
        started = true;
      } else if (ch === "}") depth[dbl-hyphen];
    }
    if (started && depth === 0) {
      oe = i;
      break;
    }
  }
  if (oe < 0) {
    problems.push(`${rel}: could not find end of openGraph block`);
    continue;
  }
  const block = lines.slice(os, oe + 1);

  // Refuse if an openGraph url (or siteName or type) already exists.
  for (const key of ["url", "siteName", "type"]) {
    if (block.some((l) => new RegExp(`^\\s*${key}:`).test(l))) problems.push(`${rel}: openGraph already has a ${key} line`);
  }

  // Anchor must appear exactly once in the whole file, and inside the openGraph block.
  const anchorAll = lines.map((l, i) => (l === ANCHOR ? i : -1)).filter((i) => i >= 0);
  const anyImages = lines.filter((l) => /images:\s*OG_IMAGES/.test(l)).length;
  if (anchorAll.length !== 1 || anyImages !== 1) {
    problems.push(`${rel}: anchor line found ${anchorAll.length} times (images: OG_IMAGES lines in file: ${anyImages})`);
    continue;
  }
  const at = anchorAll[0];
  if (!(at > os && at < oe)) {
    problems.push(`${rel}: anchor is not inside the openGraph block`);
    continue;
  }

  // Canonical: exactly one canonical string; it must equal ORIGIN + "/" + route + "/".
  const canonMatches = [...text.matchAll(/canonical:\s*(?:\r?\n\s*)?"([^"]+)"/g)].map((m) => m[1]);
  const expected = `${ORIGIN}/${r}/`;
  if (canonMatches.length !== 1 || canonMatches[0] !== expected) {
    problems.push(`${rel}: canonical strings ${JSON.stringify(canonMatches)} do not equal the single expected ${expected}`);
    continue;
  }

  const added = [`    url: "${canonMatches[0]}",`, `    siteName: "${SITE_NAME}",`, `    type: "${TYPE}",`];
  const next = [...lines.slice(0, at), ...added, ...lines.slice(at)].join(eol);
  plans.push({ rel, file, eol: eol === "\r\n" ? "CRLF" : "LF", at: at + 1, added, next, beforeBytes: buf.length });
}

console.log(`mode: ${mode}`);
for (const p of plans) {
  console.log(`OK    ${p.rel}  eol=${p.eol}  insert at line ${p.at}  added=${p.added.length}`);
  for (const a of p.added) console.log(`        + ${a}`);
}
for (const m of problems) console.log(`FAIL  ${m}`);
```

insert-og.mjs, part 3 of 3 (lines 121 to 135)

```text

if (problems.length > 0 || plans.length !== ROUTES.length) {
  console.log(`\nREFUSED: ${problems.length} problem(s), ${plans.length} of ${ROUTES.length} files validated. Nothing written.`);
  process.exit(1);
}
if (mode === "check") {
  console.log(`\nCHECK PASSED for all ${plans.length} files. Nothing written.`);
  process.exit(0);
}
for (const p of plans) {
  fs.writeFileSync(p.file, Buffer.from(p.next, "utf8"));
  const after = fs.statSync(p.file).size;
  console.log(`WROTE ${p.rel}  bytes ${p.beforeBytes} -> ${after}  (delta ${after - p.beforeBytes})`);
}
console.log(`\nAPPLIED to ${plans.length} files.`);
```


## 7. Step 5: running the script (raw)

Check mode first (validates all 12, writes nothing), then apply.

Check mode output, part 1 of 1 (lines 1 to 55)

```text
$ node insert-og.mjs <repo> check
mode: check
OK    app/about/page.tsx  eol=CRLF  insert at line 28  added=3
        +     url: "https://redcarpetplumbing.com/about/",
        +     siteName: "Red Carpet Plumbing",
        +     type: "website",
OK    app/backflow-prevention/page.tsx  eol=CRLF  insert at line 36  added=3
        +     url: "https://redcarpetplumbing.com/backflow-prevention/",
        +     siteName: "Red Carpet Plumbing",
        +     type: "website",
OK    app/commercial-plumbing/page.tsx  eol=CRLF  insert at line 29  added=3
        +     url: "https://redcarpetplumbing.com/commercial-plumbing/",
        +     siteName: "Red Carpet Plumbing",
        +     type: "website",
OK    app/faucet-sink-repair-installation/page.tsx  eol=CRLF  insert at line 32  added=3
        +     url: "https://redcarpetplumbing.com/faucet-sink-repair-installation/",
        +     siteName: "Red Carpet Plumbing",
        +     type: "website",
OK    app/garbage-disposal-repair-installation/page.tsx  eol=CRLF  insert at line 32  added=3
        +     url: "https://redcarpetplumbing.com/garbage-disposal-repair-installation/",
        +     siteName: "Red Carpet Plumbing",
        +     type: "website",
OK    app/gas-line-plumbing/page.tsx  eol=CRLF  insert at line 29  added=3
        +     url: "https://redcarpetplumbing.com/gas-line-plumbing/",
        +     siteName: "Red Carpet Plumbing",
        +     type: "website",
OK    app/plumbing-fixture-repair-replacement-installation/page.tsx  eol=CRLF  insert at line 32  added=3
        +     url: "https://redcarpetplumbing.com/plumbing-fixture-repair-replacement-installation/",
        +     siteName: "Red Carpet Plumbing",
        +     type: "website",
OK    app/toilet-repair-installation/page.tsx  eol=CRLF  insert at line 32  added=3
        +     url: "https://redcarpetplumbing.com/toilet-repair-installation/",
        +     siteName: "Red Carpet Plumbing",
        +     type: "website",
OK    app/trenchless-piping/page.tsx  eol=CRLF  insert at line 31  added=3
        +     url: "https://redcarpetplumbing.com/trenchless-piping/",
        +     siteName: "Red Carpet Plumbing",
        +     type: "website",
OK    app/video-camera-plumbing-inspections/page.tsx  eol=CRLF  insert at line 32  added=3
        +     url: "https://redcarpetplumbing.com/video-camera-plumbing-inspections/",
        +     siteName: "Red Carpet Plumbing",
        +     type: "website",
OK    app/water-meter-pressure-regulator-services/page.tsx  eol=CRLF  insert at line 32  added=3
        +     url: "https://redcarpetplumbing.com/water-meter-pressure-regulator-services/",
        +     siteName: "Red Carpet Plumbing",
        +     type: "website",
OK    app/water-pipe-repair-replacement/page.tsx  eol=CRLF  insert at line 32  added=3
        +     url: "https://redcarpetplumbing.com/water-pipe-repair-replacement/",
        +     siteName: "Red Carpet Plumbing",
        +     type: "website",

CHECK PASSED for all 12 files. Nothing written.
[exit=0]

$ git status [dbl-hyphen]short app (nothing written yet, expect empty)
```


Apply output, part 1 of 1 (lines 1 to 29)

```text
$ node insert-og.mjs <repo> apply
mode: apply
OK    app/about/page.tsx  eol=CRLF  insert at line 28  added=3
OK    app/backflow-prevention/page.tsx  eol=CRLF  insert at line 36  added=3
OK    app/commercial-plumbing/page.tsx  eol=CRLF  insert at line 29  added=3
OK    app/faucet-sink-repair-installation/page.tsx  eol=CRLF  insert at line 32  added=3
OK    app/garbage-disposal-repair-installation/page.tsx  eol=CRLF  insert at line 32  added=3
OK    app/gas-line-plumbing/page.tsx  eol=CRLF  insert at line 29  added=3
OK    app/plumbing-fixture-repair-replacement-installation/page.tsx  eol=CRLF  insert at line 32  added=3
OK    app/toilet-repair-installation/page.tsx  eol=CRLF  insert at line 32  added=3
OK    app/trenchless-piping/page.tsx  eol=CRLF  insert at line 31  added=3
OK    app/video-camera-plumbing-inspections/page.tsx  eol=CRLF  insert at line 32  added=3
OK    app/water-meter-pressure-regulator-services/page.tsx  eol=CRLF  insert at line 32  added=3
OK    app/water-pipe-repair-replacement/page.tsx  eol=CRLF  insert at line 32  added=3
WROTE app/about/page.tsx  bytes 26467 -> 26577  (delta 110)
WROTE app/backflow-prevention/page.tsx  bytes 40292 -> 40416  (delta 124)
WROTE app/commercial-plumbing/page.tsx  bytes 40171 -> 40295  (delta 124)
WROTE app/faucet-sink-repair-installation/page.tsx  bytes 39884 -> 40020  (delta 136)
WROTE app/garbage-disposal-repair-installation/page.tsx  bytes 40023 -> 40164  (delta 141)
WROTE app/gas-line-plumbing/page.tsx  bytes 36691 -> 36813  (delta 122)
WROTE app/plumbing-fixture-repair-replacement-installation/page.tsx  bytes 40483 -> 40636  (delta 153)
WROTE app/toilet-repair-installation/page.tsx  bytes 38488 -> 38619  (delta 131)
WROTE app/trenchless-piping/page.tsx  bytes 39483 -> 39605  (delta 122)
WROTE app/video-camera-plumbing-inspections/page.tsx  bytes 39575 -> 39713  (delta 138)
WROTE app/water-meter-pressure-regulator-services/page.tsx  bytes 41369 -> 41513  (delta 144)
WROTE app/water-pipe-repair-replacement/page.tsx  bytes 40376 -> 40510  (delta 134)

APPLIED to 12 files.
[exit=0]
```


## 8. Step 6: edit verification (raw)

Edit verification, part 1 of 2 (lines 1 to 60)

```text
$ git diff [dbl-hyphen]stat
 app/about/page.tsx                                            | 3 +++
 app/backflow-prevention/page.tsx                              | 3 +++
 app/commercial-plumbing/page.tsx                              | 3 +++
 app/faucet-sink-repair-installation/page.tsx                  | 3 +++
 app/garbage-disposal-repair-installation/page.tsx             | 3 +++
 app/gas-line-plumbing/page.tsx                                | 3 +++
 app/plumbing-fixture-repair-replacement-installation/page.tsx | 3 +++
 app/toilet-repair-installation/page.tsx                       | 3 +++
 app/trenchless-piping/page.tsx                                | 3 +++
 app/video-camera-plumbing-inspections/page.tsx                | 3 +++
 app/water-meter-pressure-regulator-services/page.tsx          | 3 +++
 app/water-pipe-repair-replacement/page.tsx                    | 3 +++
 12 files changed, 36 insertions(+)

$ git diff [dbl-hyphen]numstat (insertions deletions path)
3	0	app/about/page.tsx
3	0	app/backflow-prevention/page.tsx
3	0	app/commercial-plumbing/page.tsx
3	0	app/faucet-sink-repair-installation/page.tsx
3	0	app/garbage-disposal-repair-installation/page.tsx
3	0	app/gas-line-plumbing/page.tsx
3	0	app/plumbing-fixture-repair-replacement-installation/page.tsx
3	0	app/toilet-repair-installation/page.tsx
3	0	app/trenchless-piping/page.tsx
3	0	app/video-camera-plumbing-inspections/page.tsx
3	0	app/water-meter-pressure-regulator-services/page.tsx
3	0	app/water-pipe-repair-replacement/page.tsx

$ git ls-files [dbl-hyphen]eol for the 12 files
i/lf    w/crlf  attr/                 	app/about/page.tsx
i/lf    w/crlf  attr/                 	app/backflow-prevention/page.tsx
i/lf    w/crlf  attr/                 	app/commercial-plumbing/page.tsx
i/lf    w/crlf  attr/                 	app/faucet-sink-repair-installation/page.tsx
i/lf    w/crlf  attr/                 	app/garbage-disposal-repair-installation/page.tsx
i/lf    w/crlf  attr/                 	app/gas-line-plumbing/page.tsx
i/lf    w/crlf  attr/                 	app/plumbing-fixture-repair-replacement-installation/page.tsx
i/lf    w/crlf  attr/                 	app/toilet-repair-installation/page.tsx
i/lf    w/crlf  attr/                 	app/trenchless-piping/page.tsx
i/lf    w/crlf  attr/                 	app/video-camera-plumbing-inspections/page.tsx
i/lf    w/crlf  attr/                 	app/water-meter-pressure-regulator-services/page.tsx
i/lf    w/crlf  attr/                 	app/water-pipe-repair-replacement/page.tsx

$ checks: every numstat row is 3 and 0; 12 rows
rows ok (3 ins, 0 del): 12  rows not ok: 0
$ eol: count of w/crlf and i/lf among the 12
i/lf and w/crlf: 12  other: 0

$ side by side: canonical string in source vs added url (character for character)
app/about/page.tsx
   canonical: https://redcarpetplumbing.com/about/
   url added: https://redcarpetplumbing.com/about/
   result:    EQUAL
app/backflow-prevention/page.tsx
   canonical: https://redcarpetplumbing.com/backflow-prevention/
   url added: https://redcarpetplumbing.com/backflow-prevention/
   result:    EQUAL
app/commercial-plumbing/page.tsx
   canonical: https://redcarpetplumbing.com/commercial-plumbing/
   url added: https://redcarpetplumbing.com/commercial-plumbing/
```

Edit verification, part 2 of 2 (lines 61 to 104)

```text
   result:    EQUAL
app/faucet-sink-repair-installation/page.tsx
   canonical: https://redcarpetplumbing.com/faucet-sink-repair-installation/
   url added: https://redcarpetplumbing.com/faucet-sink-repair-installation/
   result:    EQUAL
app/garbage-disposal-repair-installation/page.tsx
   canonical: https://redcarpetplumbing.com/garbage-disposal-repair-installation/
   url added: https://redcarpetplumbing.com/garbage-disposal-repair-installation/
   result:    EQUAL
app/gas-line-plumbing/page.tsx
   canonical: https://redcarpetplumbing.com/gas-line-plumbing/
   url added: https://redcarpetplumbing.com/gas-line-plumbing/
   result:    EQUAL
app/plumbing-fixture-repair-replacement-installation/page.tsx
   canonical: https://redcarpetplumbing.com/plumbing-fixture-repair-replacement-installation/
   url added: https://redcarpetplumbing.com/plumbing-fixture-repair-replacement-installation/
   result:    EQUAL
app/toilet-repair-installation/page.tsx
   canonical: https://redcarpetplumbing.com/toilet-repair-installation/
   url added: https://redcarpetplumbing.com/toilet-repair-installation/
   result:    EQUAL
app/trenchless-piping/page.tsx
   canonical: https://redcarpetplumbing.com/trenchless-piping/
   url added: https://redcarpetplumbing.com/trenchless-piping/
   result:    EQUAL
app/video-camera-plumbing-inspections/page.tsx
   canonical: https://redcarpetplumbing.com/video-camera-plumbing-inspections/
   url added: https://redcarpetplumbing.com/video-camera-plumbing-inspections/
   result:    EQUAL
app/water-meter-pressure-regulator-services/page.tsx
   canonical: https://redcarpetplumbing.com/water-meter-pressure-regulator-services/
   url added: https://redcarpetplumbing.com/water-meter-pressure-regulator-services/
   result:    EQUAL
app/water-pipe-repair-replacement/page.tsx
   canonical: https://redcarpetplumbing.com/water-pipe-repair-replacement/
   url added: https://redcarpetplumbing.com/water-pipe-repair-replacement/
   result:    EQUAL

$ added lines: forbidden characters (em dash and double hyphen)
added lines: 36
em dash lines: 0
double hyphen lines: 0
distinct siteName lines: 1  distinct type lines: 1  distinct url lines: 12
any removed lines (lines starting with a single minus, excluding file headers): 0
```


Full git diff of all 12 files:

git diff, part 1 of 3 (lines 1 to 60)

```text
$ git diff (full, all 12 files)
diff [dbl-hyphen]git a/app/about/page.tsx b/app/about/page.tsx
index 3601326..03a7ba6 100644
[dbl-hyphen]- a/app/about/page.tsx
+++ b/app/about/page.tsx
@@ -25,6 +25,9 @@ export const metadata: Metadata = {
       "About Red Carpet Plumbing | Las Vegas Plumbing Company",
     description:
       "Local, family-owned Las Vegas plumbing company with over 40 years of experience. Licensed plumbers and 24/7 emergency service. Call (702) 567-9172.",
+    url: "https://redcarpetplumbing.com/about/",
+    siteName: "Red Carpet Plumbing",
+    type: "website",
     images: OG_IMAGES,
   },
 };
diff [dbl-hyphen]git a/app/backflow-prevention/page.tsx b/app/backflow-prevention/page.tsx
index f37ed41..f6fd7f2 100644
[dbl-hyphen]- a/app/backflow-prevention/page.tsx
+++ b/app/backflow-prevention/page.tsx
@@ -33,6 +33,9 @@ export const metadata: Metadata = {
       "Backflow Prevention Services in Las Vegas, NV",
     description:
       "Backflow prevention device installation, repair, and testing for Las Vegas homes and businesses. Annual testing required by LVVWD. Call (702) 567-9172.",
+    url: "https://redcarpetplumbing.com/backflow-prevention/",
+    siteName: "Red Carpet Plumbing",
+    type: "website",
     images: OG_IMAGES,
   },
 };
diff [dbl-hyphen]git a/app/commercial-plumbing/page.tsx b/app/commercial-plumbing/page.tsx
index bc5a94b..db65843 100644
[dbl-hyphen]- a/app/commercial-plumbing/page.tsx
+++ b/app/commercial-plumbing/page.tsx
@@ -26,6 +26,9 @@ export const metadata: Metadata = {
     title: "Commercial Plumbing in Las Vegas, NV | Red Carpet Plumbing",
     description:
       "Licensed commercial plumbing repair, installation, and maintenance for businesses and property managers in Las Vegas, NV. Call (702) 567-9172.",
+    url: "https://redcarpetplumbing.com/commercial-plumbing/",
+    siteName: "Red Carpet Plumbing",
+    type: "website",
     images: OG_IMAGES,
   },
 };
diff [dbl-hyphen]git a/app/faucet-sink-repair-installation/page.tsx b/app/faucet-sink-repair-installation/page.tsx
index b6b8c5a..04d114b 100644
[dbl-hyphen]- a/app/faucet-sink-repair-installation/page.tsx
+++ b/app/faucet-sink-repair-installation/page.tsx
@@ -29,6 +29,9 @@ export const metadata: Metadata = {
       "Faucet and Sink Repair and Installation in Las Vegas, NV",
     description:
       "Faucet and sink repair and installation for Las Vegas kitchens and bathrooms. Dripping faucets, low pressure. Licensed plumbers. Call (702) 567-9172.",
+    url: "https://redcarpetplumbing.com/faucet-sink-repair-installation/",
+    siteName: "Red Carpet Plumbing",
+    type: "website",
     images: OG_IMAGES,
   },
 };
diff [dbl-hyphen]git a/app/garbage-disposal-repair-installation/page.tsx b/app/garbage-disposal-repair-installation/page.tsx
index 4c40723..b345408 100644
[dbl-hyphen]- a/app/garbage-disposal-repair-installation/page.tsx
```

git diff, part 2 of 3 (lines 61 to 120)

```text
+++ b/app/garbage-disposal-repair-installation/page.tsx
@@ -29,6 +29,9 @@ export const metadata: Metadata = {
       "Garbage Disposal Repair and Installation in Las Vegas, NV",
     description:
       "Garbage disposal repair, replacement, and installation for Las Vegas kitchens. Jammed, leaking, or not working. Licensed plumbers. Call (702) 567-9172.",
+    url: "https://redcarpetplumbing.com/garbage-disposal-repair-installation/",
+    siteName: "Red Carpet Plumbing",
+    type: "website",
     images: OG_IMAGES,
   },
 };
diff [dbl-hyphen]git a/app/gas-line-plumbing/page.tsx b/app/gas-line-plumbing/page.tsx
index 8930af9..b25bc6b 100644
[dbl-hyphen]- a/app/gas-line-plumbing/page.tsx
+++ b/app/gas-line-plumbing/page.tsx
@@ -26,6 +26,9 @@ export const metadata: Metadata = {
     title: "Gas Line Plumbing in Las Vegas, NV | Red Carpet Plumbing",
     description:
       "Licensed gas line repair, installation, and inspection throughout Las Vegas and the Las Vegas Valley. Call (702) 567-9172.",
+    url: "https://redcarpetplumbing.com/gas-line-plumbing/",
+    siteName: "Red Carpet Plumbing",
+    type: "website",
     images: OG_IMAGES,
   },
 };
diff [dbl-hyphen]git a/app/plumbing-fixture-repair-replacement-installation/page.tsx b/app/plumbing-fixture-repair-replacement-installation/page.tsx
index 56a7c54..566fbdf 100644
[dbl-hyphen]- a/app/plumbing-fixture-repair-replacement-installation/page.tsx
+++ b/app/plumbing-fixture-repair-replacement-installation/page.tsx
@@ -29,6 +29,9 @@ export const metadata: Metadata = {
       "Plumbing Fixture Repair and Installation in Las Vegas, NV",
     description:
       "Plumbing fixture repair, replacement, and installation in Las Vegas. Faucets, shower valves, showerheads, and bathtub fixtures. Call (702) 567-9172.",
+    url: "https://redcarpetplumbing.com/plumbing-fixture-repair-replacement-installation/",
+    siteName: "Red Carpet Plumbing",
+    type: "website",
     images: OG_IMAGES,
   },
 };
diff [dbl-hyphen]git a/app/toilet-repair-installation/page.tsx b/app/toilet-repair-installation/page.tsx
index 4deff14..a6fe372 100644
[dbl-hyphen]- a/app/toilet-repair-installation/page.tsx
+++ b/app/toilet-repair-installation/page.tsx
@@ -29,6 +29,9 @@ export const metadata: Metadata = {
       "Toilet Repair and Installation in Las Vegas, NV",
     description:
       "Toilet repair, replacement, and installation in Las Vegas and the Valley. Running toilets, base leaks, clogs, new installs. Call (702) 567-9172.",
+    url: "https://redcarpetplumbing.com/toilet-repair-installation/",
+    siteName: "Red Carpet Plumbing",
+    type: "website",
     images: OG_IMAGES,
   },
 };
diff [dbl-hyphen]git a/app/trenchless-piping/page.tsx b/app/trenchless-piping/page.tsx
index 9b3cb89..6eb9a91 100644
[dbl-hyphen]- a/app/trenchless-piping/page.tsx
+++ b/app/trenchless-piping/page.tsx
@@ -28,6 +28,9 @@ export const metadata: Metadata = {
       "Trenchless Piping Services in Las Vegas, NV",
     description:
```

git diff, part 3 of 3 (lines 121 to 170)

```text
       "Trenchless pipe repair and replacement for Las Vegas homes and businesses. CIPP lining and pipe bursting without major excavation. Call (702) 567-9172.",
+    url: "https://redcarpetplumbing.com/trenchless-piping/",
+    siteName: "Red Carpet Plumbing",
+    type: "website",
     images: OG_IMAGES,
   },
 };
diff [dbl-hyphen]git a/app/video-camera-plumbing-inspections/page.tsx b/app/video-camera-plumbing-inspections/page.tsx
index 584641b..c5c23a0 100644
[dbl-hyphen]- a/app/video-camera-plumbing-inspections/page.tsx
+++ b/app/video-camera-plumbing-inspections/page.tsx
@@ -29,6 +29,9 @@ export const metadata: Metadata = {
       "Video Camera Plumbing Inspections in Las Vegas, NV",
     description:
       "Video camera plumbing inspections for Las Vegas homes and businesses. Root intrusion, pipe bellies, blockages, pre-purchase checks. Call (702) 567-9172.",
+    url: "https://redcarpetplumbing.com/video-camera-plumbing-inspections/",
+    siteName: "Red Carpet Plumbing",
+    type: "website",
     images: OG_IMAGES,
   },
 };
diff [dbl-hyphen]git a/app/water-meter-pressure-regulator-services/page.tsx b/app/water-meter-pressure-regulator-services/page.tsx
index 3f7f618..84be393 100644
[dbl-hyphen]- a/app/water-meter-pressure-regulator-services/page.tsx
+++ b/app/water-meter-pressure-regulator-services/page.tsx
@@ -29,6 +29,9 @@ export const metadata: Metadata = {
       "Water Meter and Pressure Regulator Services in Las Vegas, NV",
     description:
       "Pressure regulator inspection, repair, and replacement for Las Vegas homes. High pressure and PRV failure are common in the Valley. Call (702) 567-9172.",
+    url: "https://redcarpetplumbing.com/water-meter-pressure-regulator-services/",
+    siteName: "Red Carpet Plumbing",
+    type: "website",
     images: OG_IMAGES,
   },
 };
diff [dbl-hyphen]git a/app/water-pipe-repair-replacement/page.tsx b/app/water-pipe-repair-replacement/page.tsx
index 3dfa1cb..693aa4d 100644
[dbl-hyphen]- a/app/water-pipe-repair-replacement/page.tsx
+++ b/app/water-pipe-repair-replacement/page.tsx
@@ -29,6 +29,9 @@ export const metadata: Metadata = {
       "Water Pipe Repair and Replacement in Las Vegas, NV",
     description:
       "Water supply pipe repair and replacement in Las Vegas and the Valley. Burst pipes, pinhole leaks, galvanized and polybutylene pipes. Call (702) 567-9172.",
+    url: "https://redcarpetplumbing.com/water-pipe-repair-replacement/",
+    siteName: "Red Carpet Plumbing",
+    type: "website",
     images: OG_IMAGES,
   },
 };
[exit=0]
```


## 9. Diagnostic for the V4 failure (read-only, not part of the plan)

The diagnostic removes the single inline head chunk token from each page's token list before comparing, then parses the chunk and compares its entries (ignoring the index keys that renumber and the component reference ids). Nothing was written to the repo.

V4 diagnostic, part 1 of 1 (lines 1 to 18)

```text
$ node diag-v4.mjs snapshot out (read-only diagnostic, not part of the plan)
| Page | tokens old | tokens new | head-flight chunk tokens (old/new) | other tokens differing | meta tags added outside chunk | head chunk entries old | new | new minus the 3 entries equals old (ignoring index keys and component ids) | removed entries |
|-|-|-|-|-|-|-|-|-|-|
| /about/ | 720 | 723 | 1/1 | 0 removed, 0 extra | 3 (the 3 expected) | 27 | 30 | true | 0 |
| /backflow-prevention/ | 1224 | 1227 | 1/1 | 0 removed, 0 extra | 3 (the 3 expected) | 27 | 30 | true | 0 |
| /commercial-plumbing/ | 1234 | 1237 | 1/1 | 0 removed, 0 extra | 3 (the 3 expected) | 27 | 30 | true | 0 |
| /faucet-sink-repair-installation/ | 1232 | 1235 | 1/1 | 0 removed, 0 extra | 3 (the 3 expected) | 27 | 30 | true | 0 |
| /garbage-disposal-repair-installation/ | 1231 | 1234 | 1/1 | 0 removed, 0 extra | 3 (the 3 expected) | 27 | 30 | true | 0 |
| /gas-line-plumbing/ | 1232 | 1235 | 1/1 | 0 removed, 0 extra | 3 (the 3 expected) | 27 | 30 | true | 0 |
| /plumbing-fixture-repair-replacement-installation/ | 1231 | 1234 | 1/1 | 0 removed, 0 extra | 3 (the 3 expected) | 27 | 30 | true | 0 |
| /toilet-repair-installation/ | 1235 | 1238 | 1/1 | 0 removed, 0 extra | 3 (the 3 expected) | 27 | 30 | true | 0 |
| /trenchless-piping/ | 1224 | 1227 | 1/1 | 0 removed, 0 extra | 3 (the 3 expected) | 27 | 30 | true | 0 |
| /video-camera-plumbing-inspections/ | 1229 | 1232 | 1/1 | 0 removed, 0 extra | 3 (the 3 expected) | 27 | 30 | true | 0 |
| /water-meter-pressure-regulator-services/ | 1232 | 1235 | 1/1 | 0 removed, 0 extra | 3 (the 3 expected) | 27 | 30 | true | 0 |
| /water-pipe-repair-replacement/ | 1231 | 1234 | 1/1 | 0 removed, 0 extra | 3 (the 3 expected) | 27 | 30 | true | 0 |

Diagnostic result: for all 12 pages, the only HTML differences are the 3 meta tags plus the single inline head flight chunk, whose new content equals the old content plus exactly the 3 same entries (key indexes renumbered)
[exit=0]
```


## 10. Step 7 and remaining checks (raw)

Second build log, part 1 of 3 (lines 1 to 60)

```text
▲ Next.js 16.2.6 (Turbopack)
- Environments: .env.local

  Creating an optimized production build ...
✓ Compiled successfully in 5.6s
  Running TypeScript ...
  Finished TypeScript in 12.5s ...
  Collecting page data using 15 workers ...
  Generating static pages using 15 workers (0/143) ...
  Generating static pages using 15 workers (35/143) 
  Generating static pages using 15 workers (71/143) 
  Generating static pages using 15 workers (107/143) 
✓ Generating static pages using 15 workers (143/143) in 4.7s
  Finalizing page optimization ...

Route (app)
┌ ○ /
├ ○ /_not-found
├ ○ /about
├ ○ /backflow-prevention
├ ○ /boulder-city-plumbing-services
├ ○ /boulder-city/drain-cleaning
├ ○ /boulder-city/emergency-plumbing
├ ○ /boulder-city/leak-detection-repair
├ ○ /boulder-city/water-heater-repair-installation
├ ○ /commercial-plumbing
├ ○ /contact
├ ○ /drain-cleaning
├ ○ /emergency-plumbing
├ ○ /enterprise-plumbing-services
├ ○ /enterprise/commercial-plumbing
├ ○ /enterprise/drain-cleaning
├ ○ /enterprise/emergency-plumbing
├ ○ /enterprise/leak-detection-repair
├ ○ /enterprise/repiping
├ ○ /enterprise/sewer-line-services
├ ○ /enterprise/slab-leak-detection-repair
├ ○ /enterprise/water-heater-repair-installation
├ ○ /faucet-sink-repair-installation
├ ○ /garbage-disposal-repair-installation
├ ○ /gas-line-plumbing
├ ○ /green-valley-plumbing-services
├ ○ /green-valley/drain-cleaning
├ ○ /green-valley/emergency-plumbing
├ ○ /green-valley/faucet-sink-repair-installation
├ ○ /green-valley/leak-detection-repair
├ ○ /green-valley/repiping
├ ○ /green-valley/slab-leak-detection-repair
├ ○ /green-valley/toilet-repair-installation
├ ○ /green-valley/water-heater-repair-installation
├ ○ /henderson-plumbing-services
├ ○ /henderson/backflow-prevention
├ ○ /henderson/commercial-plumbing
├ ○ /henderson/drain-cleaning
├ ○ /henderson/emergency-plumbing
├ ○ /henderson/faucet-sink-repair-installation
├ ○ /henderson/garbage-disposal-repair-installation
├ ○ /henderson/gas-line-plumbing
├ ○ /henderson/leak-detection-repair
├ ○ /henderson/repiping
```

Second build log, part 2 of 3 (lines 61 to 120)

```text
├ ○ /henderson/sewer-line-services
├ ○ /henderson/slab-leak-detection-repair
├ ○ /henderson/toilet-repair-installation
├ ○ /henderson/water-heater-repair-installation
├ ○ /henderson/water-pipe-repair-replacement
├ ○ /lake-las-vegas-plumbing-services
├ ○ /lake-las-vegas/drain-cleaning
├ ○ /lake-las-vegas/emergency-plumbing
├ ○ /lake-las-vegas/leak-detection-repair
├ ○ /lake-las-vegas/slab-leak-detection-repair
├ ○ /lake-las-vegas/water-heater-repair-installation
├ ○ /las-vegas-plumbing-services
├ ○ /las-vegas/backflow-prevention
├ ○ /las-vegas/commercial-plumbing
├ ○ /las-vegas/drain-cleaning
├ ○ /las-vegas/emergency-plumbing
├ ○ /las-vegas/faucet-sink-repair-installation
├ ○ /las-vegas/garbage-disposal-repair-installation
├ ○ /las-vegas/gas-line-plumbing
├ ○ /las-vegas/leak-detection-repair
├ ○ /las-vegas/repiping
├ ○ /las-vegas/sewer-line-services
├ ○ /las-vegas/slab-leak-detection-repair
├ ○ /las-vegas/toilet-repair-installation
├ ○ /las-vegas/video-camera-plumbing-inspections
├ ○ /las-vegas/water-heater-repair-installation
├ ○ /las-vegas/water-pipe-repair-replacement
├ ○ /leak-detection-repair
├ ○ /manifest.webmanifest
├ ○ /north-las-vegas-plumbing-services
├ ○ /north-las-vegas/aliante-area-plumbing
├ ○ /north-las-vegas/aliante-area/drain-cleaning
├ ○ /north-las-vegas/aliante-area/emergency-plumbing
├ ○ /north-las-vegas/aliante-area/leak-detection-repair
├ ○ /north-las-vegas/aliante-area/slab-leak-detection-repair
├ ○ /north-las-vegas/aliante-area/water-heater-repair-installation
├ ○ /north-las-vegas/commercial-plumbing
├ ○ /north-las-vegas/drain-cleaning
├ ○ /north-las-vegas/emergency-plumbing
├ ○ /north-las-vegas/garbage-disposal-repair-installation
├ ○ /north-las-vegas/leak-detection-repair
├ ○ /north-las-vegas/repiping
├ ○ /north-las-vegas/sewer-line-services
├ ○ /north-las-vegas/slab-leak-detection-repair
├ ○ /north-las-vegas/toilet-repair-installation
├ ○ /north-las-vegas/water-heater-repair-installation
├ ○ /north-las-vegas/water-pipe-repair-replacement
├ ○ /opengraph-image.jpg
├ ○ /paradise-plumbing-services
├ ○ /paradise/backflow-prevention
├ ○ /paradise/commercial-plumbing
├ ○ /paradise/drain-cleaning
├ ○ /paradise/emergency-plumbing
├ ○ /paradise/gas-line-plumbing
├ ○ /paradise/leak-detection-repair
├ ○ /paradise/sewer-line-services
├ ○ /paradise/water-heater-repair-installation
├ ○ /plumbing-fixture-repair-replacement-installation
├ ○ /plumbing-services
├ ○ /privacy-policy
```

Second build log, part 3 of 3 (lines 121 to 160)

```text
├ ○ /repiping
├ ○ /service-areas
├ ○ /sewer-line-services
├ ○ /sitemap
├ ○ /sitemap.xml
├ ○ /slab-leak-detection-repair
├ ○ /spring-valley-plumbing-services
├ ○ /spring-valley/commercial-plumbing
├ ○ /spring-valley/drain-cleaning
├ ○ /spring-valley/emergency-plumbing
├ ○ /spring-valley/leak-detection-repair
├ ○ /spring-valley/repiping
├ ○ /spring-valley/sewer-line-services
├ ○ /spring-valley/slab-leak-detection-repair
├ ○ /spring-valley/water-heater-repair-installation
├ ○ /summerlin-plumbing-services
├ ○ /summerlin/drain-cleaning
├ ○ /summerlin/emergency-plumbing
├ ○ /summerlin/faucet-sink-repair-installation
├ ○ /summerlin/garbage-disposal-repair-installation
├ ○ /summerlin/gas-line-plumbing
├ ○ /summerlin/leak-detection-repair
├ ○ /summerlin/repiping
├ ○ /summerlin/sewer-line-services
├ ○ /summerlin/slab-leak-detection-repair
├ ○ /summerlin/toilet-repair-installation
├ ○ /summerlin/water-heater-repair-installation
├ ○ /summerlin/water-pipe-repair-replacement
├ ○ /terms-and-conditions
├ ○ /thank-you
├ ○ /toilet-repair-installation
├ ○ /trenchless-piping
├ ○ /twitter-image.jpg
├ ○ /video-camera-plumbing-inspections
├ ○ /water-heater-repair-installation
├ ○ /water-meter-pressure-regulator-services
└ ○ /water-pipe-repair-replacement


○  (Static)  prerendered as static content
```


After second build, part 1 of 1 (lines 1 to 7)

```text
$ node scripts/check-sitemap-sync.mjs
check-sitemap-sync: 137 pages built, 135 sitemap URLs, 2 noindex page(s) excluded (/thank-you/, /_not-found/)
[exit=0]
$ find out -name "*.html" | wc -l
139
$ find out -type f | wc -l
1468
```


V1, V2, V10, V11, V12 and noindex scan, part 1 of 1 (lines 1 to 52)

```text
##### V1 build 2 evidence
$ grep TypeScript and Compiled lines in build 2 log
✓ Compiled successfully in 5.6s
  Running TypeScript ...
  Finished TypeScript in 12.5s ...
  Generating static pages using 15 workers (0/143) ...
  Generating static pages using 15 workers (35/143) 
  Generating static pages using 15 workers (71/143) 
  Generating static pages using 15 workers (107/143) 
✓ Generating static pages using 15 workers (143/143) in 4.7s
(build 2 exit code was 0; sitemap sync check exit 0, shown earlier)

##### V2 page count
$ find out -name "*.html" | wc -l
139

##### V10 manifest
$ git diff [dbl-hyphen] docs/seo/route-manifest.json | wc -l
0
$ git status [dbl-hyphen]short [dbl-hyphen] docs/seo
(empty = unchanged)

##### V11 source diff shape
files: 12  insertions: 36  deletions: 0
$ git ls-files [dbl-hyphen]eol (12 files) summary
     12 i/lf w/crlf

##### V12 added source lines: em dash and double hyphen counts (from edit verification)
em dash lines: 0  double hyphen lines: 0  added lines: 36

##### noindex scan versus the baseline in noindex-audit-report.md (totals)
| Metric | Baseline | Now | Same |
|-|-|-|-|
| htmlFiles | 139 | 139 | yes |
| withRobotsTag | 120 | 120 | yes |
| noRobotsTag | 19 | 19 | yes |
| explicitIndex | 116 | 116 | yes |
| noindex | 4 | 4 | yes |
| nofollow | 1 | 1 | yes |
| anyNoindexNoneNofollow | 4 | 4 | yes |
| canonicalDifferent | 0 | 0 | yes |
| canonicalMissing | 4 | 4 | yes |
| canonicalMulti | 0 | 0 | yes |
| jsonldPages | 135 | 135 | yes |
| pagesWithRelNofollowAnchors | 0 | 0 | yes |
| pagesWithXRobotsInHtml | 0 | 0 | yes |
| sitemapExists | true | true | yes |
| sitemapLocs | 135 | 135 | yes |
| manifestRoutes | 136 | 136 | yes |
noindex list identical to baseline: true
noindex pages: /404.html, /404/, /_not-found/, /thank-you/
routes with any change in robots, googlebot, bingbot, canonical or title: 0
```


## 11. Step 8: validation script output (raw)

Comparison method: the old build ID (1aYoIjFbypbH_AJaZjs0Q in the snapshot) and the new build ID (7mqTnkfsoh2Hx6GsESnmg) were each replaced by the token BUILDID in every HTML and text file, and in file paths, before comparing content hashes. The V4 section below prints the changed inline script as a very long line.

Validation script output, part 1 of 4 (lines 1 to 60)

```text
old build id: 1aYoIjFbypbH_AJaZjs0Q
new build id: 7mqTnkfsoh2Hx6GsESnmg

##### V3 files compared after build ID token replacement
files in snapshot: 1468; files in new out: 1468
added paths: 0; removed paths: 0; identical: 1420; changed: 48
CHANGED paths (sorted):
  about/__next._full.txt
  about/__next._head.txt
  about/index.html
  about/index.txt
  backflow-prevention/__next._full.txt
  backflow-prevention/__next._head.txt
  backflow-prevention/index.html
  backflow-prevention/index.txt
  commercial-plumbing/__next._full.txt
  commercial-plumbing/__next._head.txt
  commercial-plumbing/index.html
  commercial-plumbing/index.txt
  faucet-sink-repair-installation/__next._full.txt
  faucet-sink-repair-installation/__next._head.txt
  faucet-sink-repair-installation/index.html
  faucet-sink-repair-installation/index.txt
  garbage-disposal-repair-installation/__next._full.txt
  garbage-disposal-repair-installation/__next._head.txt
  garbage-disposal-repair-installation/index.html
  garbage-disposal-repair-installation/index.txt
  gas-line-plumbing/__next._full.txt
  gas-line-plumbing/__next._head.txt
  gas-line-plumbing/index.html
  gas-line-plumbing/index.txt
  plumbing-fixture-repair-replacement-installation/__next._full.txt
  plumbing-fixture-repair-replacement-installation/__next._head.txt
  plumbing-fixture-repair-replacement-installation/index.html
  plumbing-fixture-repair-replacement-installation/index.txt
  toilet-repair-installation/__next._full.txt
  toilet-repair-installation/__next._head.txt
  toilet-repair-installation/index.html
  toilet-repair-installation/index.txt
  trenchless-piping/__next._full.txt
  trenchless-piping/__next._head.txt
  trenchless-piping/index.html
  trenchless-piping/index.txt
  video-camera-plumbing-inspections/__next._full.txt
  video-camera-plumbing-inspections/__next._head.txt
  video-camera-plumbing-inspections/index.html
  video-camera-plumbing-inspections/index.txt
  water-meter-pressure-regulator-services/__next._full.txt
  water-meter-pressure-regulator-services/__next._head.txt
  water-meter-pressure-regulator-services/index.html
  water-meter-pressure-regulator-services/index.txt
  water-pipe-repair-replacement/__next._full.txt
  water-pipe-repair-replacement/__next._head.txt
  water-pipe-repair-replacement/index.html
  water-pipe-repair-replacement/index.txt
unexpected changed (not in the expected 48): 0
expected but NOT changed: 0

##### V4 HTML tokenized diff for the 12 index.html files
FAIL  /about/  removed tokens=4  added tokens=7
```

Validation script output, part 2 of 4 (lines 61 to 120)

```text
        + <meta property="og:url" content="https://redcarpetplumbing.com/about/"/>
        + <meta property="og:site_name" content="Red Carpet Plumbing"/>
        + <meta property="og:type" content="website"/>
        + <script>self.__next_f.push([1,"2c:[[\"$\",\"title\",\"0\",{\"children\":\"About Red Carpet Plumbing | Las Vegas Plumbing Company\"}],[\"$\",\"meta\",\"1\",{\"name\":\"description\",\"content\":\"Local, family-owned Las Vegas plumbing company with over 40 years of experience. Licensed plumbers and 24/7 emergency service. Call (702) 567-9172.\"}],[\"$\",\"link\",\"2\",{\"rel\":\"manifest\",\"href\":\"/manifest.webmanifest\",\"crossOrigin\":\"$undefined\"}],[\"$\",\"link\",\"3\",{\"rel\":\"canonical\",\"href\":\"https://redcarpetplumbing.com/about/\"}],[\"$\",\"meta\",\"4\",{\"name\":\"google-site-verification\",\"content\":\"rHmMU4XKfCcGn_0P2gh1hOK089pJTJnLZBa9VD67GV8\"}],[\"$\",\"meta\",\"5\",{\"property\":\"og:title\",\"content\":\"About Red Carpet Plumbing | Las Vegas Plumbing Company\"}],[\"$\",\"meta\",\"6\",{\"property\":\"og:description\",\"content\":\"Local, family-owned Las Vegas plumbing company with over 40 years of experience. Licensed plumbers and 24/7 emergency service. Call (702) 567-9172.\"}],[\"$\",\"meta\",\"7\",{\"property\":\"og:url\",\"content\":\"https://redcarpetplumbing.com/about/\"}],[\"$\",\"meta\",\"8\",{\"property\":\"og:site_name\",\"content\":\"Red Carpet Plumbing\"}],[\"$\",\"meta\",\"9\",{\"property\":\"og:image\",\"content\":\"https://redcarpetplumbing.com/opengraph-image.jpg\"}],[\"$\",\"meta\",\"10\",{\"property\":\"og:image:width\",\"content\":\"1200\"}],[\"$\",\"meta\",\"11\",{\"property\":\"og:image:height\",\"content\":\"630\"}],[\"$\",\"meta\",\"12\",{\"property\":\"og:image:alt\",\"content\":\"Red Carpet Plumbing logo\"}],[\"$\",\"meta\",\"13\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"$\",\"meta\",\"14\",{\"name\":\"twitter:card\",\"content\":\"summary_large_image\"}],[\"$\",\"meta\",\"15\",{\"name\":\"twitter:title\",\"content\":\"About Red Carpet Plumbing | Las Vegas Plumbing Company\"}],[\"$\",\"meta\",\"16\",{\"name\":\"twitter:description\",\"content\":\"Local, family-owned Las Vegas plumbing company with over 40 years of experience. Licensed plumbers and 24/7 emergency service. Call (702) 567-9172.\"}],[\"$\",\"meta\",\"17\",{\"name\":\"twitter:image\",\"content\":\"https://redcarpetplumbing.com/twitter-image.jpg?twitter-image.04ayulqi2o_fe.jpg\"}],[\"$\",\"meta\",\"18\",{\"name\":\"twitter:image:alt\",\"content\":\"Red Carpet Plumbing logo\"}],[\"$\",\"meta\",\"19\",{\"name\":\"twitter:image:type\",\"content\":\"image/jpeg\"}],[\"$\",\"meta\",\"20\",{\"name\":\"twitter:image:width\",\"content\":\"1200\"}],[\"$\",\"meta\",\"21\",{\"name\":\"twitter:image:height\",\"content\":\"630\"}],[\"$\",\"link\",\"22\",{\"rel\":\"icon\",\"href\":\"/favicon.ico?favicon.09533q2zskatv.ico\",\"sizes\":\"48x48\",\"type\":\"image/x-icon\"}],[\"$\",\"link\",\"23\",{\"rel\":\"icon\",\"href\":\"/images/brand/favicon/favicon-16x16.png\",\"sizes\":\"16x16\",\"type\":\"image/png\"}],[\"$\",\"link\",\"24\",{\"rel\":\"icon\",\"href\":\"/images/brand/favicon/favicon-32x32.png\",\"sizes\":\"32x32\",\"type\":\"image/png\"}],[\"$\",\"link\",\"25\",{\"rel\":\"icon\",\"href\":\"/images/brand/favicon/favicon-48x48.png\",\"sizes\":\"48x48\",\"type\":\"image/png\"}],[\"$\",\"link\",\"26\",{\"rel\":\"icon\",\"href\":\"/images/brand/favicon/android-chrome-192x192.png\",\"sizes\":\"192x192\",\"type\":\"image/png\"}],[\"$\",\"link\",\"27\",{\"rel\":\"icon\",\"href\":\"/images/brand/favicon/android-chrome-512x512.png\",\"sizes\":\"512x512\",\"type\":\"image/png\"}],[\"$\",\"link\",\"28\",{\"rel\":\"apple-touch-icon\",\"href\":\"/images/brand/favicon/apple-touch-icon-180x180.png\",\"sizes\":\"180x180\",\"type\":\"image/png\"}],[\"$\",\"$L2e\",\"29\",{}]]\n"])
        + </script>
        + </body>
        + </html>
FAIL  /backflow-prevention/  removed tokens=4  added tokens=7
        + <meta property="og:url" content="https://redcarpetplumbing.com/backflow-prevention/"/>
        + <meta property="og:site_name" content="Red Carpet Plumbing"/>
        + <meta property="og:type" content="website"/>
        + <script>self.__next_f.push([1,"34:[[\"$\",\"title\",\"0\",{\"children\":\"Backflow Prevention Services in Las Vegas, NV\"}],[\"$\",\"meta\",\"1\",{\"name\":\"description\",\"content\":\"Backflow prevention device installation, repair, and testing for Las Vegas homes and businesses. Annual testing required by LVVWD. Call (702) 567-9172.\"}],[\"$\",\"link\",\"2\",{\"rel\":\"manifest\",\"href\":\"/manifest.webmanifest\",\"crossOrigin\":\"$undefined\"}],[\"$\",\"link\",\"3\",{\"rel\":\"canonical\",\"href\":\"https://redcarpetplumbing.com/backflow-prevention/\"}],[\"$\",\"meta\",\"4\",{\"name\":\"google-site-verification\",\"content\":\"rHmMU4XKfCcGn_0P2gh1hOK089pJTJnLZBa9VD67GV8\"}],[\"$\",\"meta\",\"5\",{\"property\":\"og:title\",\"content\":\"Backflow Prevention Services in Las Vegas, NV\"}],[\"$\",\"meta\",\"6\",{\"property\":\"og:description\",\"content\":\"Backflow prevention device installation, repair, and testing for Las Vegas homes and businesses. Annual testing required by LVVWD. Call (702) 567-9172.\"}],[\"$\",\"meta\",\"7\",{\"property\":\"og:url\",\"content\":\"https://redcarpetplumbing.com/backflow-prevention/\"}],[\"$\",\"meta\",\"8\",{\"property\":\"og:site_name\",\"content\":\"Red Carpet Plumbing\"}],[\"$\",\"meta\",\"9\",{\"property\":\"og:image\",\"content\":\"https://redcarpetplumbing.com/opengraph-image.jpg\"}],[\"$\",\"meta\",\"10\",{\"property\":\"og:image:width\",\"content\":\"1200\"}],[\"$\",\"meta\",\"11\",{\"property\":\"og:image:height\",\"content\":\"630\"}],[\"$\",\"meta\",\"12\",{\"property\":\"og:image:alt\",\"content\":\"Red Carpet Plumbing logo\"}],[\"$\",\"meta\",\"13\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"$\",\"meta\",\"14\",{\"name\":\"twitter:card\",\"content\":\"summary_large_image\"}],[\"$\",\"meta\",\"15\",{\"name\":\"twitter:title\",\"content\":\"Backflow Prevention Services in Las Vegas, NV\"}],[\"$\",\"meta\",\"16\",{\"name\":\"twitter:description\",\"content\":\"Backflow prevention device installation, repair, and testing for Las Vegas homes and businesses. Annual testing required by LVVWD. Call (702) 567-9172.\"}],[\"$\",\"meta\",\"17\",{\"name\":\"twitter:image\",\"content\":\"https://redcarpetplumbing.com/twitter-image.jpg?twitter-image.04ayulqi2o_fe.jpg\"}],[\"$\",\"meta\",\"18\",{\"name\":\"twitter:image:alt\",\"content\":\"Red Carpet Plumbing logo\"}],[\"$\",\"meta\",\"19\",{\"name\":\"twitter:image:type\",\"content\":\"image/jpeg\"}],[\"$\",\"meta\",\"20\",{\"name\":\"twitter:image:width\",\"content\":\"1200\"}],[\"$\",\"meta\",\"21\",{\"name\":\"twitter:image:height\",\"content\":\"630\"}],[\"$\",\"link\",\"22\",{\"rel\":\"icon\",\"href\":\"/favicon.ico?favicon.09533q2zskatv.ico\",\"sizes\":\"48x48\",\"type\":\"image/x-icon\"}],[\"$\",\"link\",\"23\",{\"rel\":\"icon\",\"href\":\"/images/brand/favicon/favicon-16x16.png\",\"sizes\":\"16x16\",\"type\":\"image/png\"}],[\"$\",\"link\",\"24\",{\"rel\":\"icon\",\"href\":\"/images/brand/favicon/favicon-32x32.png\",\"sizes\":\"32x32\",\"type\":\"image/png\"}],[\"$\",\"link\",\"25\",{\"rel\":\"icon\",\"href\":\"/images/brand/favicon/favicon-48x48.png\",\"sizes\":\"48x48\",\"type\":\"image/png\"}],[\"$\",\"link\",\"26\",{\"rel\":\"icon\",\"href\":\"/images/brand/favicon/android-chrome-192x192.png\",\"sizes\":\"192x192\",\"type\":\"image/png\"}],[\"$\",\"link\",\"27\",{\"rel\":\"icon\",\"href\":\"/images/brand/favicon/android-chrome-512x512.png\",\"sizes\":\"512x512\",\"type\":\"image/png\"}],[\"$\",\"link\",\"28\",{\"rel\":\"apple-touch-icon\",\"href\":\"/images/brand/favicon/apple-touch-icon-180x180.png\",\"sizes\":\"180x180\",\"type\":\"image/png\"}],[\"$\",\"$L4e\",\"29\",{}]]\n"])
        + </script>
        + </body>
        + </html>
FAIL  /commercial-plumbing/  removed tokens=4  added tokens=7
        + <meta property="og:url" content="https://redcarpetplumbing.com/commercial-plumbing/"/>
        + <meta property="og:site_name" content="Red Carpet Plumbing"/>
        + <meta property="og:type" content="website"/>
        + <script>self.__next_f.push([1,"31:[[\"$\",\"title\",\"0\",{\"children\":\"Commercial Plumbing in Las Vegas, NV | Red Carpet Plumbing\"}],[\"$\",\"meta\",\"1\",{\"name\":\"description\",\"content\":\"Licensed commercial plumbing repair, installation, and maintenance for businesses and property managers in Las Vegas, NV. Call (702) 567-9172.\"}],[\"$\",\"link\",\"2\",{\"rel\":\"manifest\",\"href\":\"/manifest.webmanifest\",\"crossOrigin\":\"$undefined\"}],[\"$\",\"link\",\"3\",{\"rel\":\"canonical\",\"href\":\"https://redcarpetplumbing.com/commercial-plumbing/\"}],[\"$\",\"meta\",\"4\",{\"name\":\"google-site-verification\",\"content\":\"rHmMU4XKfCcGn_0P2gh1hOK089pJTJnLZBa9VD67GV8\"}],[\"$\",\"meta\",\"5\",{\"property\":\"og:title\",\"content\":\"Commercial Plumbing in Las Vegas, NV | Red Carpet Plumbing\"}],[\"$\",\"meta\",\"6\",{\"property\":\"og:description\",\"content\":\"Licensed commercial plumbing repair, installation, and maintenance for businesses and property managers in Las Vegas, NV. Call (702) 567-9172.\"}],[\"$\",\"meta\",\"7\",{\"property\":\"og:url\",\"content\":\"https://redcarpetplumbing.com/commercial-plumbing/\"}],[\"$\",\"meta\",\"8\",{\"property\":\"og:site_name\",\"content\":\"Red Carpet Plumbing\"}],[\"$\",\"meta\",\"9\",{\"property\":\"og:image\",\"content\":\"https://redcarpetplumbing.com/opengraph-image.jpg\"}],[\"$\",\"meta\",\"10\",{\"property\":\"og:image:width\",\"content\":\"1200\"}],[\"$\",\"meta\",\"11\",{\"property\":\"og:image:height\",\"content\":\"630\"}],[\"$\",\"meta\",\"12\",{\"property\":\"og:image:alt\",\"content\":\"Red Carpet Plumbing logo\"}],[\"$\",\"meta\",\"13\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"$\",\"meta\",\"14\",{\"name\":\"twitter:card\",\"content\":\"summary_large_image\"}],[\"$\",\"meta\",\"15\",{\"name\":\"twitter:title\",\"content\":\"Commercial Plumbing in Las Vegas, NV | Red Carpet Plumbing\"}],[\"$\",\"meta\",\"16\",{\"name\":\"twitter:description\",\"content\":\"Licensed commercial plumbing repair, installation, and maintenance for businesses and property managers in Las Vegas, NV. Call (702) 567-9172.\"}],[\"$\",\"meta\",\"17\",{\"name\":\"twitter:image\",\"content\":\"https://redcarpetplumbing.com/twitter-image.jpg?twitter-image.04ayulqi2o_fe.jpg\"}],[\"$\",\"meta\",\"18\",{\"name\":\"twitter:image:alt\",\"content\":\"Red Carpet Plumbing logo\"}],[\"$\",\"meta\",\"19\",{\"name\":\"twitter:image:type\",\"content\":\"image/jpeg\"}],[\"$\",\"meta\",\"20\",{\"name\":\"twitter:image:width\",\"content\":\"1200\"}],[\"$\",\"meta\",\"21\",{\"name\":\"twitter:image:height\",\"content\":\"630\"}],[\"$\",\"link\",\"22\",{\"rel\":\"icon\",\"href\":\"/favicon.ico?favicon.09533q2zskatv.ico\",\"sizes\":\"48x48\",\"type\":\"image/x-icon\"}],[\"$\",\"link\",\"23\",{\"rel\":\"icon\",\"href\":\"/images/brand/favicon/favicon-16x16.png\",\"sizes\":\"16x16\",\"type\":\"image/png\"}],[\"$\",\"link\",\"24\",{\"rel\":\"icon\",\"href\":\"/images/brand/favicon/favicon-32x32.png\",\"sizes\":\"32x32\",\"type\":\"image/png\"}],[\"$\",\"link\",\"25\",{\"rel\":\"icon\",\"href\":\"/images/brand/favicon/favicon-48x48.png\",\"sizes\":\"48x48\",\"type\":\"image/png\"}],[\"$\",\"link\",\"26\",{\"rel\":\"icon\",\"href\":\"/images/brand/favicon/android-chrome-192x192.png\",\"sizes\":\"192x192\",\"type\":\"image/png\"}],[\"$\",\"link\",\"27\",{\"rel\":\"icon\",\"href\":\"/images/brand/favicon/android-chrome-512x512.png\",\"sizes\":\"512x512\",\"type\":\"image/png\"}],[\"$\",\"link\",\"28\",{\"rel\":\"apple-touch-icon\",\"href\":\"/images/brand/favicon/apple-touch-icon-180x180.png\",\"sizes\":\"180x180\",\"type\":\"image/png\"}],[\"$\",\"$L4c\",\"29\",{}]]\n"])
        + </script>
        + </body>
        + </html>
FAIL  /faucet-sink-repair-installation/  removed tokens=4  added tokens=7
        + <meta property="og:url" content="https://redcarpetplumbing.com/faucet-sink-repair-installation/"/>
        + <meta property="og:site_name" content="Red Carpet Plumbing"/>
        + <meta property="og:type" content="website"/>
        + <script>self.__next_f.push([1,"35:[[\"$\",\"title\",\"0\",{\"children\":\"Faucet and Sink Repair and Installation in Las Vegas, NV\"}],[\"$\",\"meta\",\"1\",{\"name\":\"description\",\"content\":\"Faucet and sink repair and installation for Las Vegas kitchens and bathrooms. Dripping faucets, low pressure. Licensed plumbers. Call (702) 567-9172.\"}],[\"$\",\"link\",\"2\",{\"rel\":\"manifest\",\"href\":\"/manifest.webmanifest\",\"crossOrigin\":\"$undefined\"}],[\"$\",\"link\",\"3\",{\"rel\":\"canonical\",\"href\":\"https://redcarpetplumbing.com/faucet-sink-repair-installation/\"}],[\"$\",\"meta\",\"4\",{\"name\":\"google-site-verification\",\"content\":\"rHmMU4XKfCcGn_0P2gh1hOK089pJTJnLZBa9VD67GV8\"}],[\"$\",\"meta\",\"5\",{\"property\":\"og:title\",\"content\":\"Faucet and Sink Repair and Installation in Las Vegas, NV\"}],[\"$\",\"meta\",\"6\",{\"property\":\"og:description\",\"content\":\"Faucet and sink repair and installation for Las Vegas kitchens and bathrooms. Dripping faucets, low pressure. Licensed plumbers. Call (702) 567-9172.\"}],[\"$\",\"meta\",\"7\",{\"property\":\"og:url\",\"content\":\"https://redcarpetplumbing.com/faucet-sink-repair-installation/\"}],[\"$\",\"meta\",\"8\",{\"property\":\"og:site_name\",\"content\":\"Red Carpet Plumbing\"}],[\"$\",\"meta\",\"9\",{\"property\":\"og:image\",\"content\":\"https://redcarpetplumbing.com/opengraph-image.jpg\"}],[\"$\",\"meta\",\"10\",{\"property\":\"og:image:width\",\"content\":\"1200\"}],[\"$\",\"meta\",\"11\",{\"property\":\"og:image:height\",\"content\":\"630\"}],[\"$\",\"meta\",\"12\",{\"property\":\"og:image:alt\",\"content\":\"Red Carpet Plumbing logo\"}],[\"$\",\"meta\",\"13\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"$\",\"meta\",\"14\",{\"name\":\"twitter:card\",\"content\":\"summary_large_image\"}],[\"$\",\"meta\",\"15\",{\"name\":\"twitter:title\",\"content\":\"Faucet and Sink Repair and Installation in Las Vegas, NV\"}],[\"$\",\"meta\",\"16\",{\"name\":\"twitter:description\",\"content\":\"Faucet and sink repair and installation for Las Vegas kitchens and bathrooms. Dripping faucets, low pressure. Licensed plumbers. Call (702) 567-9172.\"}],[\"$\",\"meta\",\"17\",{\"name\":\"twitter:image\",\"content\":\"https://redcarpetplumbing.com/twitter-image.jpg?twitter-image.04ayulqi2o_fe.jpg\"}],[\"$\",\"meta\",\"18\",{\"name\":\"twitter:image:alt\",\"content\":\"Red Carpet Plumbing logo\"}],[\"$\",\"meta\",\"19\",{\"name\":\"twitter:image:type\",\"content\":\"image/jpeg\"}],[\"$\",\"meta\",\"20\",{\"name\":\"twitter:image:width\",\"content\":\"1200\"}],[\"$\",\"meta\",\"21\",{\"name\":\"twitter:image:height\",\"content\":\"630\"}],[\"$\",\"link\",\"22\",{\"rel\":\"icon\",\"href\":\"/favicon.ico?favicon.09533q2zskatv.ico\",\"sizes\":\"48x48\",\"type\":\"image/x-icon\"}],[\"$\",\"link\",\"23\",{\"rel\":\"icon\",\"href\":\"/images/brand/favicon/favicon-16x16.png\",\"sizes\":\"16x16\",\"type\":\"image/png\"}],[\"$\",\"link\",\"24\",{\"rel\":\"icon\",\"href\":\"/images/brand/favicon/favicon-32x32.png\",\"sizes\":\"32x32\",\"type\":\"image/png\"}],[\"$\",\"link\",\"25\",{\"rel\":\"icon\",\"href\":\"/images/brand/favicon/favicon-48x48.png\",\"sizes\":\"48x48\",\"type\":\"image/png\"}],[\"$\",\"link\",\"26\",{\"rel\":\"icon\",\"href\":\"/images/brand/favicon/android-chrome-192x192.png\",\"sizes\":\"192x192\",\"type\":\"image/png\"}],[\"$\",\"link\",\"27\",{\"rel\":\"icon\",\"href\":\"/images/brand/favicon/android-chrome-512x512.png\",\"sizes\":\"512x512\",\"type\":\"image/png\"}],[\"$\",\"link\",\"28\",{\"rel\":\"apple-touch-icon\",\"href\":\"/images/brand/favicon/apple-touch-icon-180x180.png\",\"sizes\":\"180x180\",\"type\":\"image/png\"}],[\"$\",\"$L4e\",\"29\",{}]]\n"])
        + </script>
        + </body>
        + </html>
FAIL  /garbage-disposal-repair-installation/  removed tokens=4  added tokens=7
        + <meta property="og:url" content="https://redcarpetplumbing.com/garbage-disposal-repair-installation/"/>
        + <meta property="og:site_name" content="Red Carpet Plumbing"/>
        + <meta property="og:type" content="website"/>
        + <script>self.__next_f.push([1,"35:[[\"$\",\"title\",\"0\",{\"children\":\"Garbage Disposal Repair and Installation in Las Vegas, NV\"}],[\"$\",\"meta\",\"1\",{\"name\":\"description\",\"content\":\"Garbage disposal repair, replacement, and installation for Las Vegas kitchens. Jammed, leaking, or not working. Licensed plumbers. Call (702) 567-9172.\"}],[\"$\",\"link\",\"2\",{\"rel\":\"manifest\",\"href\":\"/manifest.webmanifest\",\"crossOrigin\":\"$undefined\"}],[\"$\",\"link\",\"3\",{\"rel\":\"canonical\",\"href\":\"https://redcarpetplumbing.com/garbage-disposal-repair-installation/\"}],[\"$\",\"meta\",\"4\",{\"name\":\"google-site-verification\",\"content\":\"rHmMU4XKfCcGn_0P2gh1hOK089pJTJnLZBa9VD67GV8\"}],[\"$\",\"meta\",\"5\",{\"property\":\"og:title\",\"content\":\"Garbage Disposal Repair and Installation in Las Vegas, NV\"}],[\"$\",\"meta\",\"6\",{\"property\":\"og:description\",\"content\":\"Garbage disposal repair, replacement, and installation for Las Vegas kitchens. Jammed, leaking, or not working. Licensed plumbers. Call (702) 567-9172.\"}],[\"$\",\"meta\",\"7\",{\"property\":\"og:url\",\"content\":\"https://redcarpetplumbing.com/garbage-disposal-repair-installation/\"}],[\"$\",\"meta\",\"8\",{\"property\":\"og:site_name\",\"content\":\"Red Carpet Plumbing\"}],[\"$\",\"meta\",\"9\",{\"property\":\"og:image\",\"content\":\"https://redcarpetplumbing.com/opengraph-image.jpg\"}],[\"$\",\"meta\",\"10\",{\"property\":\"og:image:width\",\"content\":\"1200\"}],[\"$\",\"meta\",\"11\",{\"property\":\"og:image:height\",\"content\":\"630\"}],[\"$\",\"meta\",\"12\",{\"property\":\"og:image:alt\",\"content\":\"Red Carpet Plumbing logo\"}],[\"$\",\"meta\",\"13\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"$\",\"meta\",\"14\",{\"name\":\"twitter:card\",\"content\":\"summary_large_image\"}],[\"$\",\"meta\",\"15\",{\"name\":\"twitter:title\",\"content\":\"Garbage Disposal Repair and Installation in Las Vegas, NV\"}],[\"$\",\"meta\",\"16\",{\"name\":\"twitter:description\",\"content\":\"Garbage disposal repair, replacement, and installation for Las Vegas kitchens. Jammed, leaking, or not working. Licensed plumbers. Call (702) 567-9172.\"}],[\"$\",\"meta\",\"17\",{\"name\":\"twitter:image\",\"content\":\"https://redcarpetplumbing.com/twitter-image.jpg?twitter-image.04ayulqi2o_fe.jpg\"}],[\"$\",\"meta\",\"18\",{\"name\":\"twitter:image:alt\",\"content\":\"Red Carpet Plumbing logo\"}],[\"$\",\"meta\",\"19\",{\"name\":\"twitter:image:type\",\"content\":\"image/jpeg\"}],[\"$\",\"meta\",\"20\",{\"name\":\"twitter:image:width\",\"content\":\"1200\"}],[\"$\",\"meta\",\"21\",{\"name\":\"twitter:image:height\",\"content\":\"630\"}],[\"$\",\"link\",\"22\",{\"rel\":\"icon\",\"href\":\"/favicon.ico?favicon.09533q2zskatv.ico\",\"sizes\":\"48x48\",\"type\":\"image/x-icon\"}],[\"$\",\"link\",\"23\",{\"rel\":\"icon\",\"href\":\"/images/brand/favicon/favicon-16x16.png\",\"sizes\":\"16x16\",\"type\":\"image/png\"}],[\"$\",\"link\",\"24\",{\"rel\":\"icon\",\"href\":\"/images/brand/favicon/favicon-32x32.png\",\"sizes\":\"32x32\",\"type\":\"image/png\"}],[\"$\",\"link\",\"25\",{\"rel\":\"icon\",\"href\":\"/images/brand/favicon/favicon-48x48.png\",\"sizes\":\"48x48\",\"type\":\"image/png\"}],[\"$\",\"link\",\"26\",{\"rel\":\"icon\",\"href\":\"/images/brand/favicon/android-chrome-192x192.png\",\"sizes\":\"192x192\",\"type\":\"image/png\"}],[\"$\",\"link\",\"27\",{\"rel\":\"icon\",\"href\":\"/images/brand/favicon/android-chrome-512x512.png\",\"sizes\":\"512x512\",\"type\":\"image/png\"}],[\"$\",\"link\",\"28\",{\"rel\":\"apple-touch-icon\",\"href\":\"/images/brand/favicon/apple-touch-icon-180x180.png\",\"sizes\":\"180x180\",\"type\":\"image/png\"}],[\"$\",\"$L4e\",\"29\",{}]]\n"])
        + </script>
        + </body>
        + </html>
FAIL  /gas-line-plumbing/  removed tokens=4  added tokens=7
        + <meta property="og:url" content="https://redcarpetplumbing.com/gas-line-plumbing/"/>
        + <meta property="og:site_name" content="Red Carpet Plumbing"/>
        + <meta property="og:type" content="website"/>
        + <script>self.__next_f.push([1,"33:[[\"$\",\"title\",\"0\",{\"children\":\"Gas Line Plumbing in Las Vegas, NV | Red Carpet Plumbing\"}],[\"$\",\"meta\",\"1\",{\"name\":\"description\",\"content\":\"Licensed gas line repair, installation, and inspection throughout Las Vegas and the Las Vegas Valley. Call (702) 567-9172.\"}],[\"$\",\"link\",\"2\",{\"rel\":\"manifest\",\"href\":\"/manifest.webmanifest\",\"crossOrigin\":\"$undefined\"}],[\"$\",\"link\",\"3\",{\"rel\":\"canonical\",\"href\":\"https://redcarpetplumbing.com/gas-line-plumbing/\"}],[\"$\",\"meta\",\"4\",{\"name\":\"google-site-verification\",\"content\":\"rHmMU4XKfCcGn_0P2gh1hOK089pJTJnLZBa9VD67GV8\"}],[\"$\",\"meta\",\"5\",{\"property\":\"og:title\",\"content\":\"Gas Line Plumbing in Las Vegas, NV | Red Carpet Plumbing\"}],[\"$\",\"meta\",\"6\",{\"property\":\"og:description\",\"content\":\"Licensed gas line repair, installation, and inspection throughout Las Vegas and the Las Vegas Valley. Call (702) 567-9172.\"}],[\"$\",\"meta\",\"7\",{\"property\":\"og:url\",\"content\":\"https://redcarpetplumbing.com/gas-line-plumbing/\"}],[\"$\",\"meta\",\"8\",{\"property\":\"og:site_name\",\"content\":\"Red Carpet Plumbing\"}],[\"$\",\"meta\",\"9\",{\"property\":\"og:image\",\"content\":\"https://redcarpetplumbing.com/opengraph-image.jpg\"}],[\"$\",\"meta\",\"10\",{\"property\":\"og:image:width\",\"content\":\"1200\"}],[\"$\",\"meta\",\"11\",{\"property\":\"og:image:height\",\"content\":\"630\"}],[\"$\",\"meta\",\"12\",{\"property\":\"og:image:alt\",\"content\":\"Red Carpet Plumbing logo\"}],[\"$\",\"meta\",\"13\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"$\",\"meta\",\"14\",{\"name\":\"twitter:card\",\"content\":\"summary_large_image\"}],[\"$\",\"meta\",\"15\",{\"name\":\"twitter:title\",\"content\":\"Gas Line Plumbing in Las Vegas, NV | Red Carpet Plumbing\"}],[\"$\",\"meta\",\"16\",{\"name\":\"twitter:description\",\"content\":\"Licensed gas line repair, installation, and inspection throughout Las Vegas and the Las Vegas Valley. Call (702) 567-9172.\"}],[\"$\",\"meta\",\"17\",{\"name\":\"twitter:image\",\"content\":\"https://redcarpetplumbing.com/twitter-image.jpg?twitter-image.04ayulqi2o_fe.jpg\"}],[\"$\",\"meta\",\"18\",{\"name\":\"twitter:image:alt\",\"content\":\"Red Carpet Plumbing logo\"}],[\"$\",\"meta\",\"19\",{\"name\":\"twitter:image:type\",\"content\":\"image/jpeg\"}],[\"$\",\"meta\",\"20\",{\"name\":\"twitter:image:width\",\"content\":\"1200\"}],[\"$\",\"meta\",\"21\",{\"name\":\"twitter:image:height\",\"content\":\"630\"}],[\"$\",\"link\",\"22\",{\"rel\":\"icon\",\"href\":\"/favicon.ico?favicon.09533q2zskatv.ico\",\"sizes\":\"48x48\",\"type\":\"image/x-icon\"}],[\"$\",\"link\",\"23\",{\"rel\":\"icon\",\"href\":\"/images/brand/favicon/favicon-16x16.png\",\"sizes\":\"16x16\",\"type\":\"image/png\"}],[\"$\",\"link\",\"24\",{\"rel\":\"icon\",\"href\":\"/images/brand/favicon/favicon-32x32.png\",\"sizes\":\"32x32\",\"type\":\"image/png\"}],[\"$\",\"link\",\"25\",{\"rel\":\"icon\",\"href\":\"/images/brand/favicon/favicon-48x48.png\",\"sizes\":\"48x48\",\"type\":\"image/png\"}],[\"$\",\"link\",\"26\",{\"rel\":\"icon\",\"href\":\"/images/brand/favicon/android-chrome-192x192.png\",\"sizes\":\"192x192\",\"type\":\"image/png\"}],[\"$\",\"link\",\"27\",{\"rel\":\"icon\",\"href\":\"/images/brand/favicon/android-chrome-512x512.png\",\"sizes\":\"512x512\",\"type\":\"image/png\"}],[\"$\",\"link\",\"28\",{\"rel\":\"apple-touch-icon\",\"href\":\"/images/brand/favicon/apple-touch-icon-180x180.png\",\"sizes\":\"180x180\",\"type\":\"image/png\"}],[\"$\",\"$L4e\",\"29\",{}]]\n"])
        + </script>
        + </body>
        + </html>
FAIL  /plumbing-fixture-repair-replacement-installation/  removed tokens=4  added tokens=7
        + <meta property="og:url" content="https://redcarpetplumbing.com/plumbing-fixture-repair-replacement-installation/"/>
        + <meta property="og:site_name" content="Red Carpet Plumbing"/>
        + <meta property="og:type" content="website"/>
        + <script>self.__next_f.push([1,"36:[[\"$\",\"title\",\"0\",{\"children\":\"Plumbing Fixture Repair and Installation in Las Vegas, NV\"}],[\"$\",\"meta\",\"1\",{\"name\":\"description\",\"content\":\"Plumbing fixture repair, replacement, and installation in Las Vegas. Faucets, shower valves, showerheads, and bathtub fixtures. Call (702) 567-9172.\"}],[\"$\",\"link\",\"2\",{\"rel\":\"manifest\",\"href\":\"/manifest.webmanifest\",\"crossOrigin\":\"$undefined\"}],[\"$\",\"link\",\"3\",{\"rel\":\"canonical\",\"href\":\"https://redcarpetplumbing.com/plumbing-fixture-repair-replacement-installation/\"}],[\"$\",\"meta\",\"4\",{\"name\":\"google-site-verification\",\"content\":\"rHmMU4XKfCcGn_0P2gh1hOK089pJTJnLZBa9VD67GV8\"}],[\"$\",\"meta\",\"5\",{\"property\":\"og:title\",\"content\":\"Plumbing Fixture Repair and Installation in Las Vegas, NV\"}],[\"$\",\"meta\",\"6\",{\"property\":\"og:description\",\"content\":\"Plumbing fixture repair, replacement, and installation in Las Vegas. Faucets, shower valves, showerheads, and bathtub fixtures. Call (702) 567-9172.\"}],[\"$\",\"meta\",\"7\",{\"property\":\"og:url\",\"content\":\"https://redcarpetplumbing.com/plumbing-fixture-repair-replacement-installation/\"}],[\"$\",\"meta\",\"8\",{\"property\":\"og:site_name\",\"content\":\"Red Carpet Plumbing\"}],[\"$\",\"meta\",\"9\",{\"property\":\"og:image\",\"content\":\"https://redcarpetplumbing.com/opengraph-image.jpg\"}],[\"$\",\"meta\",\"10\",{\"property\":\"og:image:width\",\"content\":\"1200\"}],[\"$\",\"meta\",\"11\",{\"property\":\"og:image:height\",\"content\":\"630\"}],[\"$\",\"meta\",\"12\",{\"property\":\"og:image:alt\",\"content\":\"Red Carpet Plumbing logo\"}],[\"$\",\"meta\",\"13\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"$\",\"meta\",\"14\",{\"name\":\"twitter:card\",\"content\":\"summary_large_image\"}],[\"$\",\"meta\",\"15\",{\"name\":\"twitter:title\",\"content\":\"Plumbing Fixture Repair and Installation in Las Vegas, NV\"}],[\"$\",\"meta\",\"16\",{\"name\":\"twitter:description\",\"content\":\"Plumbing fixture repair, replacement, and installation in Las Vegas. Faucets, shower valves, showerheads, and bathtub fixtures. Call (702) 567-9172.\"}],[\"$\",\"meta\",\"17\",{\"name\":\"twitter:image\",\"content\":\"https://redcarpetplumbing.com/twitter-image.jpg?twitter-image.04ayulqi2o_fe.jpg\"}],[\"$\",\"meta\",\"18\",{\"name\":\"twitter:image:alt\",\"content\":\"Red Carpet Plumbing logo\"}],[\"$\",\"meta\",\"19\",{\"name\":\"twitter:image:type\",\"content\":\"image/jpeg\"}],[\"$\",\"meta\",\"20\",{\"name\":\"twitter:image:width\",\"content\":\"1200\"}],[\"$\",\"meta\",\"21\",{\"name\":\"twitter:image:height\",\"content\":\"630\"}],[\"$\",\"link\",\"22\",{\"rel\":\"icon\",\"href\":\"/favicon.ico?favicon.09533q2zskatv.ico\",\"sizes\":\"48x48\",\"type\":\"image/x-icon\"}],[\"$\",\"link\",\"23\",{\"rel\":\"icon\",\"href\":\"/images/brand/favicon/favicon-16x16.png\",\"sizes\":\"16x16\",\"type\":\"image/png\"}],[\"$\",\"link\",\"24\",{\"rel\":\"icon\",\"href\":\"/images/brand/favicon/favicon-32x32.png\",\"sizes\":\"32x32\",\"type\":\"image/png\"}],[\"$\",\"link\",\"25\",{\"rel\":\"icon\",\"href\":\"/images/brand/favicon/favicon-48x48.png\",\"sizes\":\"48x48\",\"type\":\"image/png\"}],[\"$\",\"link\",\"26\",{\"rel\":\"icon\",\"href\":\"/images/brand/favicon/android-chrome-192x192.png\",\"sizes\":\"192x192\",\"type\":\"image/png\"}],[\"$\",\"link\",\"27\",{\"rel\":\"icon\",\"href\":\"/images/brand/favicon/android-chrome-512x512.png\",\"sizes\":\"512x512\",\"type\":\"image/png\"}],[\"$\",\"link\",\"28\",{\"rel\":\"apple-touch-icon\",\"href\":\"/images/brand/favicon/apple-touch-icon-180x180.png\",\"sizes\":\"180x180\",\"type\":\"image/png\"}],[\"$\",\"$L4f\",\"29\",{}]]\n"])
        + </script>
        + </body>
        + </html>
FAIL  /toilet-repair-installation/  removed tokens=4  added tokens=7
        + <meta property="og:url" content="https://redcarpetplumbing.com/toilet-repair-installation/"/>
        + <meta property="og:site_name" content="Red Carpet Plumbing"/>
        + <meta property="og:type" content="website"/>
        + <script>self.__next_f.push([1,"34:[[\"$\",\"title\",\"0\",{\"children\":\"Toilet Repair and Installation in Las Vegas, NV\"}],[\"$\",\"meta\",\"1\",{\"name\":\"description\",\"content\":\"Toilet repair, replacement, and installation in Las Vegas and the Valley. Running toilets, base leaks, clogs, new installs. Call (702) 567-9172.\"}],[\"$\",\"link\",\"2\",{\"rel\":\"manifest\",\"href\":\"/manifest.webmanifest\",\"crossOrigin\":\"$undefined\"}],[\"$\",\"link\",\"3\",{\"rel\":\"canonical\",\"href\":\"https://redcarpetplumbing.com/toilet-repair-installation/\"}],[\"$\",\"meta\",\"4\",{\"name\":\"google-site-verification\",\"content\":\"rHmMU4XKfCcGn_0P2gh1hOK089pJTJnLZBa9VD67GV8\"}],[\"$\",\"meta\",\"5\",{\"property\":\"og:title\",\"content\":\"Toilet Repair and Installation in Las Vegas, NV\"}],[\"$\",\"meta\",\"6\",{\"property\":\"og:description\",\"content\":\"Toilet repair, replacement, and installation in Las Vegas and the Valley. Running toilets, base leaks, clogs, new installs. Call (702) 567-9172.\"}],[\"$\",\"meta\",\"7\",{\"property\":\"og:url\",\"content\":\"https://redcarpetplumbing.com/toilet-repair-installation/\"}],[\"$\",\"meta\",\"8\",{\"property\":\"og:site_name\",\"content\":\"Red Carpet Plumbing\"}],[\"$\",\"meta\",\"9\",{\"property\":\"og:image\",\"content\":\"https://redcarpetplumbing.com/opengraph-image.jpg\"}],[\"$\",\"meta\",\"10\",{\"property\":\"og:image:width\",\"content\":\"1200\"}],[\"$\",\"meta\",\"11\",{\"property\":\"og:image:height\",\"content\":\"630\"}],[\"$\",\"meta\",\"12\",{\"property\":\"og:image:alt\",\"content\":\"Red Carpet Plumbing logo\"}],[\"$\",\"meta\",\"13\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"$\",\"meta\",\"14\",{\"name\":\"twitter:card\",\"content\":\"summary_large_image\"}],[\"$\",\"meta\",\"15\",{\"name\":\"twitter:title\",\"content\":\"Toilet Repair and Installation in Las Vegas, NV\"}],[\"$\",\"meta\",\"16\",{\"name\":\"twitter:description\",\"content\":\"Toilet repair, replacement, and installation in Las Vegas and the Valley. Running toilets, base leaks, clogs, new installs. Call (702) 567-9172.\"}],[\"$\",\"meta\",\"17\",{\"name\":\"twitter:image\",\"content\":\"https://redcarpetplumbing.com/twitter-image.jpg?twitter-image.04ayulqi2o_fe.jpg\"}],[\"$\",\"meta\",\"18\",{\"name\":\"twitter:image:alt\",\"content\":\"Red Carpet Plumbing logo\"}],[\"$\",\"meta\",\"19\",{\"name\":\"twitter:image:type\",\"content\":\"image/jpeg\"}],[\"$\",\"meta\",\"20\",{\"name\":\"twitter:image:width\",\"content\":\"1200\"}],[\"$\",\"meta\",\"21\",{\"name\":\"twitter:image:height\",\"content\":\"630\"}],[\"$\",\"link\",\"22\",{\"rel\":\"icon\",\"href\":\"/favicon.ico?favicon.09533q2zskatv.ico\",\"sizes\":\"48x48\",\"type\":\"image/x-icon\"}],[\"$\",\"link\",\"23\",{\"rel\":\"icon\",\"href\":\"/images/brand/favicon/favicon-16x16.png\",\"sizes\":\"16x16\",\"type\":\"image/png\"}],[\"$\",\"link\",\"24\",{\"rel\":\"icon\",\"href\":\"/images/brand/favicon/favicon-32x32.png\",\"sizes\":\"32x32\",\"type\":\"image/png\"}],[\"$\",\"link\",\"25\",{\"rel\":\"icon\",\"href\":\"/images/brand/favicon/favicon-48x48.png\",\"sizes\":\"48x48\",\"type\":\"image/png\"}],[\"$\",\"link\",\"26\",{\"rel\":\"icon\",\"href\":\"/images/brand/favicon/android-chrome-192x192.png\",\"sizes\":\"192x192\",\"type\":\"image/png\"}],[\"$\",\"link\",\"27\",{\"rel\":\"icon\",\"href\":\"/images/brand/favicon/android-chrome-512x512.png\",\"sizes\":\"512x512\",\"type\":\"image/png\"}],[\"$\",\"link\",\"28\",{\"rel\":\"apple-touch-icon\",\"href\":\"/images/brand/favicon/apple-touch-icon-180x180.png\",\"sizes\":\"180x180\",\"type\":\"image/png\"}],[\"$\",\"$L4d\",\"29\",{}]]\n"])
```

Validation script output, part 3 of 4 (lines 121 to 180)

```text
        + </script>
        + </body>
        + </html>
FAIL  /trenchless-piping/  removed tokens=4  added tokens=7
        + <meta property="og:url" content="https://redcarpetplumbing.com/trenchless-piping/"/>
        + <meta property="og:site_name" content="Red Carpet Plumbing"/>
        + <meta property="og:type" content="website"/>
        + <script>self.__next_f.push([1,"34:[[\"$\",\"title\",\"0\",{\"children\":\"Trenchless Piping Services in Las Vegas, NV\"}],[\"$\",\"meta\",\"1\",{\"name\":\"description\",\"content\":\"Trenchless pipe repair and replacement for Las Vegas homes and businesses. CIPP lining and pipe bursting without major excavation. Call (702) 567-9172.\"}],[\"$\",\"link\",\"2\",{\"rel\":\"manifest\",\"href\":\"/manifest.webmanifest\",\"crossOrigin\":\"$undefined\"}],[\"$\",\"link\",\"3\",{\"rel\":\"canonical\",\"href\":\"https://redcarpetplumbing.com/trenchless-piping/\"}],[\"$\",\"meta\",\"4\",{\"name\":\"google-site-verification\",\"content\":\"rHmMU4XKfCcGn_0P2gh1hOK089pJTJnLZBa9VD67GV8\"}],[\"$\",\"meta\",\"5\",{\"property\":\"og:title\",\"content\":\"Trenchless Piping Services in Las Vegas, NV\"}],[\"$\",\"meta\",\"6\",{\"property\":\"og:description\",\"content\":\"Trenchless pipe repair and replacement for Las Vegas homes and businesses. CIPP lining and pipe bursting without major excavation. Call (702) 567-9172.\"}],[\"$\",\"meta\",\"7\",{\"property\":\"og:url\",\"content\":\"https://redcarpetplumbing.com/trenchless-piping/\"}],[\"$\",\"meta\",\"8\",{\"property\":\"og:site_name\",\"content\":\"Red Carpet Plumbing\"}],[\"$\",\"meta\",\"9\",{\"property\":\"og:image\",\"content\":\"https://redcarpetplumbing.com/opengraph-image.jpg\"}],[\"$\",\"meta\",\"10\",{\"property\":\"og:image:width\",\"content\":\"1200\"}],[\"$\",\"meta\",\"11\",{\"property\":\"og:image:height\",\"content\":\"630\"}],[\"$\",\"meta\",\"12\",{\"property\":\"og:image:alt\",\"content\":\"Red Carpet Plumbing logo\"}],[\"$\",\"meta\",\"13\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"$\",\"meta\",\"14\",{\"name\":\"twitter:card\",\"content\":\"summary_large_image\"}],[\"$\",\"meta\",\"15\",{\"name\":\"twitter:title\",\"content\":\"Trenchless Piping Services in Las Vegas, NV\"}],[\"$\",\"meta\",\"16\",{\"name\":\"twitter:description\",\"content\":\"Trenchless pipe repair and replacement for Las Vegas homes and businesses. CIPP lining and pipe bursting without major excavation. Call (702) 567-9172.\"}],[\"$\",\"meta\",\"17\",{\"name\":\"twitter:image\",\"content\":\"https://redcarpetplumbing.com/twitter-image.jpg?twitter-image.04ayulqi2o_fe.jpg\"}],[\"$\",\"meta\",\"18\",{\"name\":\"twitter:image:alt\",\"content\":\"Red Carpet Plumbing logo\"}],[\"$\",\"meta\",\"19\",{\"name\":\"twitter:image:type\",\"content\":\"image/jpeg\"}],[\"$\",\"meta\",\"20\",{\"name\":\"twitter:image:width\",\"content\":\"1200\"}],[\"$\",\"meta\",\"21\",{\"name\":\"twitter:image:height\",\"content\":\"630\"}],[\"$\",\"link\",\"22\",{\"rel\":\"icon\",\"href\":\"/favicon.ico?favicon.09533q2zskatv.ico\",\"sizes\":\"48x48\",\"type\":\"image/x-icon\"}],[\"$\",\"link\",\"23\",{\"rel\":\"icon\",\"href\":\"/images/brand/favicon/favicon-16x16.png\",\"sizes\":\"16x16\",\"type\":\"image/png\"}],[\"$\",\"link\",\"24\",{\"rel\":\"icon\",\"href\":\"/images/brand/favicon/favicon-32x32.png\",\"sizes\":\"32x32\",\"type\":\"image/png\"}],[\"$\",\"link\",\"25\",{\"rel\":\"icon\",\"href\":\"/images/brand/favicon/favicon-48x48.png\",\"sizes\":\"48x48\",\"type\":\"image/png\"}],[\"$\",\"link\",\"26\",{\"rel\":\"icon\",\"href\":\"/images/brand/favicon/android-chrome-192x192.png\",\"sizes\":\"192x192\",\"type\":\"image/png\"}],[\"$\",\"link\",\"27\",{\"rel\":\"icon\",\"href\":\"/images/brand/favicon/android-chrome-512x512.png\",\"sizes\":\"512x512\",\"type\":\"image/png\"}],[\"$\",\"link\",\"28\",{\"rel\":\"apple-touch-icon\",\"href\":\"/images/brand/favicon/apple-touch-icon-180x180.png\",\"sizes\":\"180x180\",\"type\":\"image/png\"}],[\"$\",\"$L4d\",\"29\",{}]]\n"])
        + </script>
        + </body>
        + </html>
FAIL  /video-camera-plumbing-inspections/  removed tokens=4  added tokens=7
        + <meta property="og:url" content="https://redcarpetplumbing.com/video-camera-plumbing-inspections/"/>
        + <meta property="og:site_name" content="Red Carpet Plumbing"/>
        + <meta property="og:type" content="website"/>
        + <script>self.__next_f.push([1,"35:[[\"$\",\"title\",\"0\",{\"children\":\"Video Camera Plumbing Inspections in Las Vegas, NV\"}],[\"$\",\"meta\",\"1\",{\"name\":\"description\",\"content\":\"Video camera plumbing inspections for Las Vegas homes and businesses. Root intrusion, pipe bellies, blockages, pre-purchase checks. Call (702) 567-9172.\"}],[\"$\",\"link\",\"2\",{\"rel\":\"manifest\",\"href\":\"/manifest.webmanifest\",\"crossOrigin\":\"$undefined\"}],[\"$\",\"link\",\"3\",{\"rel\":\"canonical\",\"href\":\"https://redcarpetplumbing.com/video-camera-plumbing-inspections/\"}],[\"$\",\"meta\",\"4\",{\"name\":\"google-site-verification\",\"content\":\"rHmMU4XKfCcGn_0P2gh1hOK089pJTJnLZBa9VD67GV8\"}],[\"$\",\"meta\",\"5\",{\"property\":\"og:title\",\"content\":\"Video Camera Plumbing Inspections in Las Vegas, NV\"}],[\"$\",\"meta\",\"6\",{\"property\":\"og:description\",\"content\":\"Video camera plumbing inspections for Las Vegas homes and businesses. Root intrusion, pipe bellies, blockages, pre-purchase checks. Call (702) 567-9172.\"}],[\"$\",\"meta\",\"7\",{\"property\":\"og:url\",\"content\":\"https://redcarpetplumbing.com/video-camera-plumbing-inspections/\"}],[\"$\",\"meta\",\"8\",{\"property\":\"og:site_name\",\"content\":\"Red Carpet Plumbing\"}],[\"$\",\"meta\",\"9\",{\"property\":\"og:image\",\"content\":\"https://redcarpetplumbing.com/opengraph-image.jpg\"}],[\"$\",\"meta\",\"10\",{\"property\":\"og:image:width\",\"content\":\"1200\"}],[\"$\",\"meta\",\"11\",{\"property\":\"og:image:height\",\"content\":\"630\"}],[\"$\",\"meta\",\"12\",{\"property\":\"og:image:alt\",\"content\":\"Red Carpet Plumbing logo\"}],[\"$\",\"meta\",\"13\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"$\",\"meta\",\"14\",{\"name\":\"twitter:card\",\"content\":\"summary_large_image\"}],[\"$\",\"meta\",\"15\",{\"name\":\"twitter:title\",\"content\":\"Video Camera Plumbing Inspections in Las Vegas, NV\"}],[\"$\",\"meta\",\"16\",{\"name\":\"twitter:description\",\"content\":\"Video camera plumbing inspections for Las Vegas homes and businesses. Root intrusion, pipe bellies, blockages, pre-purchase checks. Call (702) 567-9172.\"}],[\"$\",\"meta\",\"17\",{\"name\":\"twitter:image\",\"content\":\"https://redcarpetplumbing.com/twitter-image.jpg?twitter-image.04ayulqi2o_fe.jpg\"}],[\"$\",\"meta\",\"18\",{\"name\":\"twitter:image:alt\",\"content\":\"Red Carpet Plumbing logo\"}],[\"$\",\"meta\",\"19\",{\"name\":\"twitter:image:type\",\"content\":\"image/jpeg\"}],[\"$\",\"meta\",\"20\",{\"name\":\"twitter:image:width\",\"content\":\"1200\"}],[\"$\",\"meta\",\"21\",{\"name\":\"twitter:image:height\",\"content\":\"630\"}],[\"$\",\"link\",\"22\",{\"rel\":\"icon\",\"href\":\"/favicon.ico?favicon.09533q2zskatv.ico\",\"sizes\":\"48x48\",\"type\":\"image/x-icon\"}],[\"$\",\"link\",\"23\",{\"rel\":\"icon\",\"href\":\"/images/brand/favicon/favicon-16x16.png\",\"sizes\":\"16x16\",\"type\":\"image/png\"}],[\"$\",\"link\",\"24\",{\"rel\":\"icon\",\"href\":\"/images/brand/favicon/favicon-32x32.png\",\"sizes\":\"32x32\",\"type\":\"image/png\"}],[\"$\",\"link\",\"25\",{\"rel\":\"icon\",\"href\":\"/images/brand/favicon/favicon-48x48.png\",\"sizes\":\"48x48\",\"type\":\"image/png\"}],[\"$\",\"link\",\"26\",{\"rel\":\"icon\",\"href\":\"/images/brand/favicon/android-chrome-192x192.png\",\"sizes\":\"192x192\",\"type\":\"image/png\"}],[\"$\",\"link\",\"27\",{\"rel\":\"icon\",\"href\":\"/images/brand/favicon/android-chrome-512x512.png\",\"sizes\":\"512x512\",\"type\":\"image/png\"}],[\"$\",\"link\",\"28\",{\"rel\":\"apple-touch-icon\",\"href\":\"/images/brand/favicon/apple-touch-icon-180x180.png\",\"sizes\":\"180x180\",\"type\":\"image/png\"}],[\"$\",\"$L4e\",\"29\",{}]]\n"])
        + </script>
        + </body>
        + </html>
FAIL  /water-meter-pressure-regulator-services/  removed tokens=4  added tokens=7
        + <meta property="og:url" content="https://redcarpetplumbing.com/water-meter-pressure-regulator-services/"/>
        + <meta property="og:site_name" content="Red Carpet Plumbing"/>
        + <meta property="og:type" content="website"/>
        + <script>self.__next_f.push([1,"36:[[\"$\",\"title\",\"0\",{\"children\":\"Water Meter and Pressure Regulator Services in Las Vegas, NV\"}],[\"$\",\"meta\",\"1\",{\"name\":\"description\",\"content\":\"Pressure regulator inspection, repair, and replacement for Las Vegas homes. High pressure and PRV failure are common in the Valley. Call (702) 567-9172.\"}],[\"$\",\"link\",\"2\",{\"rel\":\"manifest\",\"href\":\"/manifest.webmanifest\",\"crossOrigin\":\"$undefined\"}],[\"$\",\"link\",\"3\",{\"rel\":\"canonical\",\"href\":\"https://redcarpetplumbing.com/water-meter-pressure-regulator-services/\"}],[\"$\",\"meta\",\"4\",{\"name\":\"google-site-verification\",\"content\":\"rHmMU4XKfCcGn_0P2gh1hOK089pJTJnLZBa9VD67GV8\"}],[\"$\",\"meta\",\"5\",{\"property\":\"og:title\",\"content\":\"Water Meter and Pressure Regulator Services in Las Vegas, NV\"}],[\"$\",\"meta\",\"6\",{\"property\":\"og:description\",\"content\":\"Pressure regulator inspection, repair, and replacement for Las Vegas homes. High pressure and PRV failure are common in the Valley. Call (702) 567-9172.\"}],[\"$\",\"meta\",\"7\",{\"property\":\"og:url\",\"content\":\"https://redcarpetplumbing.com/water-meter-pressure-regulator-services/\"}],[\"$\",\"meta\",\"8\",{\"property\":\"og:site_name\",\"content\":\"Red Carpet Plumbing\"}],[\"$\",\"meta\",\"9\",{\"property\":\"og:image\",\"content\":\"https://redcarpetplumbing.com/opengraph-image.jpg\"}],[\"$\",\"meta\",\"10\",{\"property\":\"og:image:width\",\"content\":\"1200\"}],[\"$\",\"meta\",\"11\",{\"property\":\"og:image:height\",\"content\":\"630\"}],[\"$\",\"meta\",\"12\",{\"property\":\"og:image:alt\",\"content\":\"Red Carpet Plumbing logo\"}],[\"$\",\"meta\",\"13\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"$\",\"meta\",\"14\",{\"name\":\"twitter:card\",\"content\":\"summary_large_image\"}],[\"$\",\"meta\",\"15\",{\"name\":\"twitter:title\",\"content\":\"Water Meter and Pressure Regulator Services in Las Vegas, NV\"}],[\"$\",\"meta\",\"16\",{\"name\":\"twitter:description\",\"content\":\"Pressure regulator inspection, repair, and replacement for Las Vegas homes. High pressure and PRV failure are common in the Valley. Call (702) 567-9172.\"}],[\"$\",\"meta\",\"17\",{\"name\":\"twitter:image\",\"content\":\"https://redcarpetplumbing.com/twitter-image.jpg?twitter-image.04ayulqi2o_fe.jpg\"}],[\"$\",\"meta\",\"18\",{\"name\":\"twitter:image:alt\",\"content\":\"Red Carpet Plumbing logo\"}],[\"$\",\"meta\",\"19\",{\"name\":\"twitter:image:type\",\"content\":\"image/jpeg\"}],[\"$\",\"meta\",\"20\",{\"name\":\"twitter:image:width\",\"content\":\"1200\"}],[\"$\",\"meta\",\"21\",{\"name\":\"twitter:image:height\",\"content\":\"630\"}],[\"$\",\"link\",\"22\",{\"rel\":\"icon\",\"href\":\"/favicon.ico?favicon.09533q2zskatv.ico\",\"sizes\":\"48x48\",\"type\":\"image/x-icon\"}],[\"$\",\"link\",\"23\",{\"rel\":\"icon\",\"href\":\"/images/brand/favicon/favicon-16x16.png\",\"sizes\":\"16x16\",\"type\":\"image/png\"}],[\"$\",\"link\",\"24\",{\"rel\":\"icon\",\"href\":\"/images/brand/favicon/favicon-32x32.png\",\"sizes\":\"32x32\",\"type\":\"image/png\"}],[\"$\",\"link\",\"25\",{\"rel\":\"icon\",\"href\":\"/images/brand/favicon/favicon-48x48.png\",\"sizes\":\"48x48\",\"type\":\"image/png\"}],[\"$\",\"link\",\"26\",{\"rel\":\"icon\",\"href\":\"/images/brand/favicon/android-chrome-192x192.png\",\"sizes\":\"192x192\",\"type\":\"image/png\"}],[\"$\",\"link\",\"27\",{\"rel\":\"icon\",\"href\":\"/images/brand/favicon/android-chrome-512x512.png\",\"sizes\":\"512x512\",\"type\":\"image/png\"}],[\"$\",\"link\",\"28\",{\"rel\":\"apple-touch-icon\",\"href\":\"/images/brand/favicon/apple-touch-icon-180x180.png\",\"sizes\":\"180x180\",\"type\":\"image/png\"}],[\"$\",\"$L50\",\"29\",{}]]\n"])
        + </script>
        + </body>
        + </html>
FAIL  /water-pipe-repair-replacement/  removed tokens=4  added tokens=7
        + <meta property="og:url" content="https://redcarpetplumbing.com/water-pipe-repair-replacement/"/>
        + <meta property="og:site_name" content="Red Carpet Plumbing"/>
        + <meta property="og:type" content="website"/>
        + <script>self.__next_f.push([1,"34:[[\"$\",\"title\",\"0\",{\"children\":\"Water Pipe Repair and Replacement in Las Vegas, NV\"}],[\"$\",\"meta\",\"1\",{\"name\":\"description\",\"content\":\"Water supply pipe repair and replacement in Las Vegas and the Valley. Burst pipes, pinhole leaks, galvanized and polybutylene pipes. Call (702) 567-9172.\"}],[\"$\",\"link\",\"2\",{\"rel\":\"manifest\",\"href\":\"/manifest.webmanifest\",\"crossOrigin\":\"$undefined\"}],[\"$\",\"link\",\"3\",{\"rel\":\"canonical\",\"href\":\"https://redcarpetplumbing.com/water-pipe-repair-replacement/\"}],[\"$\",\"meta\",\"4\",{\"name\":\"google-site-verification\",\"content\":\"rHmMU4XKfCcGn_0P2gh1hOK089pJTJnLZBa9VD67GV8\"}],[\"$\",\"meta\",\"5\",{\"property\":\"og:title\",\"content\":\"Water Pipe Repair and Replacement in Las Vegas, NV\"}],[\"$\",\"meta\",\"6\",{\"property\":\"og:description\",\"content\":\"Water supply pipe repair and replacement in Las Vegas and the Valley. Burst pipes, pinhole leaks, galvanized and polybutylene pipes. Call (702) 567-9172.\"}],[\"$\",\"meta\",\"7\",{\"property\":\"og:url\",\"content\":\"https://redcarpetplumbing.com/water-pipe-repair-replacement/\"}],[\"$\",\"meta\",\"8\",{\"property\":\"og:site_name\",\"content\":\"Red Carpet Plumbing\"}],[\"$\",\"meta\",\"9\",{\"property\":\"og:image\",\"content\":\"https://redcarpetplumbing.com/opengraph-image.jpg\"}],[\"$\",\"meta\",\"10\",{\"property\":\"og:image:width\",\"content\":\"1200\"}],[\"$\",\"meta\",\"11\",{\"property\":\"og:image:height\",\"content\":\"630\"}],[\"$\",\"meta\",\"12\",{\"property\":\"og:image:alt\",\"content\":\"Red Carpet Plumbing logo\"}],[\"$\",\"meta\",\"13\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"$\",\"meta\",\"14\",{\"name\":\"twitter:card\",\"content\":\"summary_large_image\"}],[\"$\",\"meta\",\"15\",{\"name\":\"twitter:title\",\"content\":\"Water Pipe Repair and Replacement in Las Vegas, NV\"}],[\"$\",\"meta\",\"16\",{\"name\":\"twitter:description\",\"content\":\"Water supply pipe repair and replacement in Las Vegas and the Valley. Burst pipes, pinhole leaks, galvanized and polybutylene pipes. Call (702) 567-9172.\"}],[\"$\",\"meta\",\"17\",{\"name\":\"twitter:image\",\"content\":\"https://redcarpetplumbing.com/twitter-image.jpg?twitter-image.04ayulqi2o_fe.jpg\"}],[\"$\",\"meta\",\"18\",{\"name\":\"twitter:image:alt\",\"content\":\"Red Carpet Plumbing logo\"}],[\"$\",\"meta\",\"19\",{\"name\":\"twitter:image:type\",\"content\":\"image/jpeg\"}],[\"$\",\"meta\",\"20\",{\"name\":\"twitter:image:width\",\"content\":\"1200\"}],[\"$\",\"meta\",\"21\",{\"name\":\"twitter:image:height\",\"content\":\"630\"}],[\"$\",\"link\",\"22\",{\"rel\":\"icon\",\"href\":\"/favicon.ico?favicon.09533q2zskatv.ico\",\"sizes\":\"48x48\",\"type\":\"image/x-icon\"}],[\"$\",\"link\",\"23\",{\"rel\":\"icon\",\"href\":\"/images/brand/favicon/favicon-16x16.png\",\"sizes\":\"16x16\",\"type\":\"image/png\"}],[\"$\",\"link\",\"24\",{\"rel\":\"icon\",\"href\":\"/images/brand/favicon/favicon-32x32.png\",\"sizes\":\"32x32\",\"type\":\"image/png\"}],[\"$\",\"link\",\"25\",{\"rel\":\"icon\",\"href\":\"/images/brand/favicon/favicon-48x48.png\",\"sizes\":\"48x48\",\"type\":\"image/png\"}],[\"$\",\"link\",\"26\",{\"rel\":\"icon\",\"href\":\"/images/brand/favicon/android-chrome-192x192.png\",\"sizes\":\"192x192\",\"type\":\"image/png\"}],[\"$\",\"link\",\"27\",{\"rel\":\"icon\",\"href\":\"/images/brand/favicon/android-chrome-512x512.png\",\"sizes\":\"512x512\",\"type\":\"image/png\"}],[\"$\",\"link\",\"28\",{\"rel\":\"apple-touch-icon\",\"href\":\"/images/brand/favicon/apple-touch-icon-180x180.png\",\"sizes\":\"180x180\",\"type\":\"image/png\"}],[\"$\",\"$L4e\",\"29\",{}]]\n"])
        + </script>
        + </body>
        + </html>

##### V5 RSC .txt files: quoted string literal sets, snapshot vs new (36 files)
PASS  about/index.txt  removed strings=0  new strings=7  ["og:url","og:site_name","og:type","website","27","28","29"]
PASS  about/__next._full.txt  removed strings=0  new strings=7  ["og:url","og:site_name","og:type","website","27","28","29"]
PASS  about/__next._head.txt  removed strings=0  new strings=8  ["og:url","og:site_name","Red Carpet Plumbing","og:type","website","27","28","29"]
PASS  backflow-prevention/index.txt  removed strings=0  new strings=7  ["og:url","og:site_name","og:type","website","27","28","29"]
PASS  backflow-prevention/__next._full.txt  removed strings=0  new strings=7  ["og:url","og:site_name","og:type","website","27","28","29"]
PASS  backflow-prevention/__next._head.txt  removed strings=0  new strings=8  ["og:url","og:site_name","Red Carpet Plumbing","og:type","website","27","28","29"]
PASS  commercial-plumbing/index.txt  removed strings=0  new strings=7  ["og:url","og:site_name","og:type","website","27","28","29"]
PASS  commercial-plumbing/__next._full.txt  removed strings=0  new strings=7  ["og:url","og:site_name","og:type","website","27","28","29"]
PASS  commercial-plumbing/__next._head.txt  removed strings=0  new strings=8  ["og:url","og:site_name","Red Carpet Plumbing","og:type","website","27","28","29"]
PASS  faucet-sink-repair-installation/index.txt  removed strings=0  new strings=7  ["og:url","og:site_name","og:type","website","27","28","29"]
PASS  faucet-sink-repair-installation/__next._full.txt  removed strings=0  new strings=7  ["og:url","og:site_name","og:type","website","27","28","29"]
PASS  faucet-sink-repair-installation/__next._head.txt  removed strings=0  new strings=8  ["og:url","og:site_name","Red Carpet Plumbing","og:type","website","27","28","29"]
PASS  garbage-disposal-repair-installation/index.txt  removed strings=0  new strings=7  ["og:url","og:site_name","og:type","website","27","28","29"]
PASS  garbage-disposal-repair-installation/__next._full.txt  removed strings=0  new strings=7  ["og:url","og:site_name","og:type","website","27","28","29"]
PASS  garbage-disposal-repair-installation/__next._head.txt  removed strings=0  new strings=8  ["og:url","og:site_name","Red Carpet Plumbing","og:type","website","27","28","29"]
PASS  gas-line-plumbing/index.txt  removed strings=0  new strings=7  ["og:url","og:site_name","og:type","website","27","28","29"]
PASS  gas-line-plumbing/__next._full.txt  removed strings=0  new strings=7  ["og:url","og:site_name","og:type","website","27","28","29"]
PASS  gas-line-plumbing/__next._head.txt  removed strings=0  new strings=8  ["og:url","og:site_name","Red Carpet Plumbing","og:type","website","27","28","29"]
PASS  plumbing-fixture-repair-replacement-installation/index.txt  removed strings=0  new strings=7  ["og:url","og:site_name","og:type","website","27","28","29"]
PASS  plumbing-fixture-repair-replacement-installation/__next._full.txt  removed strings=0  new strings=7  ["og:url","og:site_name","og:type","website","27","28","29"]
PASS  plumbing-fixture-repair-replacement-installation/__next._head.txt  removed strings=0  new strings=8  ["og:url","og:site_name","Red Carpet Plumbing","og:type","website","27","28","29"]
PASS  toilet-repair-installation/index.txt  removed strings=0  new strings=7  ["og:url","og:site_name","og:type","website","27","28","29"]
PASS  toilet-repair-installation/__next._full.txt  removed strings=0  new strings=7  ["og:url","og:site_name","og:type","website","27","28","29"]
```

Validation script output, part 4 of 4 (lines 181 to 237)

```text
PASS  toilet-repair-installation/__next._head.txt  removed strings=0  new strings=8  ["og:url","og:site_name","Red Carpet Plumbing","og:type","website","27","28","29"]
PASS  trenchless-piping/index.txt  removed strings=0  new strings=7  ["og:url","og:site_name","og:type","website","27","28","29"]
PASS  trenchless-piping/__next._full.txt  removed strings=0  new strings=7  ["og:url","og:site_name","og:type","website","27","28","29"]
PASS  trenchless-piping/__next._head.txt  removed strings=0  new strings=8  ["og:url","og:site_name","Red Carpet Plumbing","og:type","website","27","28","29"]
PASS  video-camera-plumbing-inspections/index.txt  removed strings=0  new strings=7  ["og:url","og:site_name","og:type","website","27","28","29"]
PASS  video-camera-plumbing-inspections/__next._full.txt  removed strings=0  new strings=7  ["og:url","og:site_name","og:type","website","27","28","29"]
PASS  video-camera-plumbing-inspections/__next._head.txt  removed strings=0  new strings=8  ["og:url","og:site_name","Red Carpet Plumbing","og:type","website","27","28","29"]
PASS  water-meter-pressure-regulator-services/index.txt  removed strings=0  new strings=7  ["og:url","og:site_name","og:type","website","27","28","29"]
PASS  water-meter-pressure-regulator-services/__next._full.txt  removed strings=0  new strings=7  ["og:url","og:site_name","og:type","website","27","28","29"]
PASS  water-meter-pressure-regulator-services/__next._head.txt  removed strings=0  new strings=8  ["og:url","og:site_name","Red Carpet Plumbing","og:type","website","27","28","29"]
PASS  water-pipe-repair-replacement/index.txt  removed strings=0  new strings=7  ["og:url","og:site_name","og:type","website","27","28","29"]
PASS  water-pipe-repair-replacement/__next._full.txt  removed strings=0  new strings=7  ["og:url","og:site_name","og:type","website","27","28","29"]
PASS  water-pipe-repair-replacement/__next._head.txt  removed strings=0  new strings=8  ["og:url","og:site_name","Red Carpet Plumbing","og:type","website","27","28","29"]

##### V6 og:url equals canonical on indexable pages
HTML pages: 139; noindex: 4 (/404.html, /404/, /_not-found/, /thank-you/); indexable: 135
indexable with exactly one og:url: 135 of 135
og:url not equal to canonical (or missing/duplicated): 0
noindex pages with an og:url (expected 0): 0

##### V7 the 4 noindex pages and their files are unchanged
files under the 4 noindex paths: 18; changed: 0

##### V8 canonical, robots, title for all pages; JSON-LD hashes for the 12 pages
pages compared: 139; differences in canonical, robots meta or title: 0
  JSON-LD /about/: blocks old=4 new=4 hashes EQUAL
  JSON-LD /backflow-prevention/: blocks old=5 new=5 hashes EQUAL
  JSON-LD /commercial-plumbing/: blocks old=5 new=5 hashes EQUAL
  JSON-LD /faucet-sink-repair-installation/: blocks old=5 new=5 hashes EQUAL
  JSON-LD /garbage-disposal-repair-installation/: blocks old=5 new=5 hashes EQUAL
  JSON-LD /gas-line-plumbing/: blocks old=5 new=5 hashes EQUAL
  JSON-LD /plumbing-fixture-repair-replacement-installation/: blocks old=5 new=5 hashes EQUAL
  JSON-LD /toilet-repair-installation/: blocks old=5 new=5 hashes EQUAL
  JSON-LD /trenchless-piping/: blocks old=5 new=5 hashes EQUAL
  JSON-LD /video-camera-plumbing-inspections/: blocks old=5 new=5 hashes EQUAL
  JSON-LD /water-meter-pressure-regulator-services/: blocks old=5 new=5 hashes EQUAL
  JSON-LD /water-pipe-repair-replacement/: blocks old=5 new=5 hashes EQUAL
JSON-LD differences across all 139 pages: 0

##### V13 the 3 comparison pages: files changed under /contact/, /drain-cleaning/, /las-vegas/drain-cleaning/: 0

##### V12 forbidden characters in the 84 added HTML tags: em dash=0, double hyphen=0

##### RESULT TABLE (script checks)
| ID | Check | Result | Detail |
|-|-|-|-|
| V3 | Exactly 48 files differ (4 per route x 12), none added or removed | PASS | changed=48 unexpected=0 missing=0 added=0 removed=0 |
| V9 | All other files identical (JS, CSS, images, sitemap, robots, _headers, other pages) | PASS | identical=1420 of 1468; build-id-folder files compared by content under normalized path |
| V4 | Each of the 12 HTML diffs is exactly 3 added meta tags (og:url, og:site_name, og:type), 0 removed | FAIL | see V4 section |
| V5 | RSC text diffs: no string removed; only the three property names, the url, siteName, type values (and numeric key renumbering) added | PASS | see V5 section |
| V6 | og:url equals canonical on all 135 indexable pages | PASS | indexable=135 with og:url=135 mismatches=0 |
| V7 | The 4 noindex pages (and their files) are unchanged, still no og:url | PASS | files=18 changed=0 |
| V8 | Canonical, robots meta, title unchanged on all pages; JSON-LD hashes unchanged (12 pages, and all pages) | PASS | meta diffs=0; jsonld diffs 12 pages=0, all pages=0 |
| V13 | The 3 comparison pages are unchanged | PASS | changed files=0 |
| V12a | No em dash or double hyphen in the added HTML tags | FAIL | tags=84 em=0 dh=0 |

OVERALL script checks: AT LEAST ONE FAIL
```


## 12. Validation script (full, scratchpad copy)

validate.mjs, part 1 of 3 (lines 1 to 60)

```text
// Read-only validation of out/ against the pre-change snapshot. Writes nothing in the repo.
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const OLD = process.argv[2]; // snapshot
const NEW = process.argv[3]; // new out
const ORIGIN = "https://redcarpetplumbing.com";
const R12 = ["about", "backflow-prevention", "commercial-plumbing", "faucet-sink-repair-installation", "garbage-disposal-repair-installation", "gas-line-plumbing", "plumbing-fixture-repair-replacement-installation", "toilet-repair-installation", "trenchless-piping", "video-camera-plumbing-inspections", "water-meter-pressure-regulator-services", "water-pipe-repair-replacement"];
const CONTROLS = ["contact", "drain-cleaning", "las-vegas/drain-cleaning"];
const NOINDEX_PATHS = ["404.html", "404/", "_not-found/", "thank-you/"];
const results = [];
const pf = (id, name, ok, detail) => { results.push({ id, name, ok, detail }); };

const walk = (d, base = d, a = []) => {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p, base, a);
    else a.push(path.relative(base, p).split(path.sep).join("/"));
  }
  return a;
};
const idOf = (root) => fs.readdirSync(path.join(root, "_next/static")).find((n) => n !== "chunks" && n !== "media");
const oldId = idOf(OLD), newId = idOf(NEW);
console.log(`old build id: ${oldId}\nnew build id: ${newId}\n`);
const norm = (rel, id) => rel.split(id).join("BUILDID");
const read = (root, rel, id) => {
  const buf = fs.readFileSync(path.join(root, rel));
  if (/\.(html|txt)$/.test(rel)) return Buffer.from(buf.toString("utf8").split(id).join("BUILDID"), "utf8");
  return buf;
};
const h = (b) => crypto.createHash("sha256").update(b).digest("hex");

const oldFiles = walk(OLD), newFiles = walk(NEW);
const oldMap = new Map(oldFiles.map((r) => [norm(r, oldId), r]));
const newMap = new Map(newFiles.map((r) => [norm(r, newId), r]));
const added = [...newMap.keys()].filter((k) => !oldMap.has(k));
const removed = [...oldMap.keys()].filter((k) => !newMap.has(k));
const changed = [], same = [];
for (const [k, rn] of newMap) {
  if (!oldMap.has(k)) continue;
  const a = h(read(OLD, oldMap.get(k), oldId)), b = h(read(NEW, rn, newId));
  (a === b ? same : changed).push(k);
}

// [dbl-hyphen][dbl-hyphen] V3
const expected48 = new Set();
for (const r of R12) for (const f of ["index.html", "index.txt", "__next._full.txt", "__next._head.txt"]) expected48.add(`${r}/${f}`);
const chSet = new Set(changed);
const unexpectedChanged = changed.filter((k) => !expected48.has(k));
const missingExpected = [...expected48].filter((k) => !chSet.has(k));
console.log("##### V3 files compared after build ID token replacement");
console.log(`files in snapshot: ${oldFiles.length}; files in new out: ${newFiles.length}`);
console.log(`added paths: ${added.length}; removed paths: ${removed.length}; identical: ${same.length}; changed: ${changed.length}`);
console.log("CHANGED paths (sorted):"); changed.sort().forEach((k) => console.log("  " + k));
console.log(`unexpected changed (not in the expected 48): ${unexpectedChanged.length}`); unexpectedChanged.forEach((k) => console.log("  " + k));
console.log(`expected but NOT changed: ${missingExpected.length}`); missingExpected.forEach((k) => console.log("  " + k));
pf("V3", "Exactly 48 files differ (4 per route x 12), none added or removed", changed.length === 48 && unexpectedChanged.length === 0 && missingExpected.length === 0 && added.length === 0 && removed.length === 0, `changed=${changed.length} unexpected=${unexpectedChanged.length} missing=${missingExpected.length} added=${added.length} removed=${removed.length}`);
// V9
pf("V9", "All other files identical (JS, CSS, images, sitemap, robots, _headers, other pages)", same.length === newFiles.length - 48 && unexpectedChanged.length === 0, `identical=${same.length} of ${newFiles.length}; build-id-folder files compared by content under normalized path`);
```

validate.mjs, part 2 of 3 (lines 61 to 120)

```text

// [dbl-hyphen][dbl-hyphen] V4 (HTML token diff)
const tok = (s) => s.replace(/</g, "\n<").split("\n").filter((x) => x.length);
console.log("\n##### V4 HTML tokenized diff for the 12 index.html files");
let v4ok = true; const v4detail = [];
const attrv = (t, n) => (t.match(new RegExp(`\\b${n}="([^"]*)"`)) || [])[1];
const canonOf = (html) => { const l = [...html.matchAll(/<link\b[^>]*>/gi)].map((m) => m[0]).find((t) => (attrv(t, "rel") || "").toLowerCase() === "canonical"); return l ? attrv(l, "href") : undefined; };
for (const r of R12) {
  const o = tok(read(OLD, oldMap.get(`${r}/index.html`), oldId).toString("utf8"));
  const n = tok(read(NEW, newMap.get(`${r}/index.html`), newId).toString("utf8"));
  // old must be a subsequence of new; extras are the added tokens
  let i = 0; const extras = [];
  for (const t of n) { if (i < o.length && t === o[i]) i++; else extras.push(t); }
  const removedCount = o.length - i;
  const canon = canonOf(read(NEW, newMap.get(`${r}/index.html`), newId).toString("utf8"));
  const want = new Set([`<meta property="og:url" content="${ORIGIN}/${r}/"/>`, `<meta property="og:site_name" content="Red Carpet Plumbing"/>`, `<meta property="og:type" content="website"/>`]);
  const got = new Set(extras);
  const okPage = removedCount === 0 && extras.length === 3 && [...want].every((w) => got.has(w)) && canon === `${ORIGIN}/${r}/`;
  if (!okPage) v4ok = false;
  v4detail.push(`${okPage ? "PASS" : "FAIL"}  /${r}/  removed tokens=${removedCount}  added tokens=${extras.length}`);
  extras.forEach((x) => v4detail.push(`        + ${x}`));
}
v4detail.forEach((l) => console.log(l));
pf("V4", "Each of the 12 HTML diffs is exactly 3 added meta tags (og:url, og:site_name, og:type), 0 removed", v4ok, "see V4 section");

// [dbl-hyphen][dbl-hyphen] V5 RSC txt string-set test
console.log("\n##### V5 RSC .txt files: quoted string literal sets, snapshot vs new (36 files)");
const strs = (s) => { const m = new Map(); for (const x of s.matchAll(/"((?:[^"\\]|\\.)*)"/g)) m.set(x[1], (m.get(x[1]) || 0) + 1); return m; };
let v5ok = true; const v5detail = []; const numeric = /^\d+$/;
for (const r of R12) for (const f of ["index.txt", "__next._full.txt", "__next._head.txt"]) {
  const o = strs(read(OLD, oldMap.get(`${r}/${f}`), oldId).toString("utf8")), n = strs(read(NEW, newMap.get(`${r}/${f}`), newId).toString("utf8"));
  const rem = [...o.keys()].filter((k) => !n.has(k));
  const add = [...n.keys()].filter((k) => !o.has(k));
  const allowedNew = (k) => ["og:url", "og:site_name", "og:type", `${ORIGIN}/${r}/`, "Red Carpet Plumbing", "website", "property", "content"].includes(k) || numeric.test(k);
  const okf = rem.length === 0 && add.every(allowedNew);
  if (!okf) v5ok = false;
  v5detail.push(`${okf ? "PASS" : "FAIL"}  ${r}/${f}  removed strings=${rem.length}  new strings=${add.length}  ${add.length ? JSON.stringify(add).slice(0, 220) : ""}${rem.length ? "  REMOVED " + JSON.stringify(rem).slice(0, 220) : ""}`);
}
v5detail.forEach((l) => console.log(l));
// byte-size note
pf("V5", "RSC text diffs: no string removed; only the three property names, the url, siteName, type values (and numeric key renumbering) added", v5ok, "see V5 section");

// [dbl-hyphen][dbl-hyphen] scan all HTML
const pages = (root, id) => {
  const out = new Map();
  for (const rel of walk(root).filter((x) => x.endsWith(".html"))) {
    const html = fs.readFileSync(path.join(root, rel), "utf8").split(id).join("BUILDID");
    const route = "/" + rel.replace(/index\.html$/, "");
    const metas = [...html.matchAll(/<meta\b[^>]*>/gi)].map((m) => m[0]);
    const robots = metas.filter((t) => (attrv(t, "name") || "").toLowerCase() === "robots").map((t) => attrv(t, "content")).join("|");
    const ogurl = metas.filter((t) => attrv(t, "property") === "og:url").map((t) => attrv(t, "content"));
    const ld = [...html.matchAll(/<script[^>]*application\/ld\+json[^>]*>([\s\S]*?)<\/script>/gi)].map((m) => h(Buffer.from(m[1])));
    const title = (html.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [])[1];
    out.set(route, { canon: canonOf(html), robots, ogurl, ld, title });
  }
  return out;
};
const po = pages(OLD, oldId), pn = pages(NEW, newId);

// [dbl-hyphen][dbl-hyphen] V6
```

validate.mjs, part 3 of 3 (lines 121 to 171)

```text
console.log("\n##### V6 og:url equals canonical on indexable pages");
const noindex = [...pn].filter(([, v]) => /noindex/.test(v.robots)).map(([k]) => k);
const indexable = [...pn].filter(([, v]) => !/noindex/.test(v.robots));
const withOg = indexable.filter(([, v]) => v.ogurl.length === 1);
const mism = indexable.filter(([, v]) => v.ogurl.length !== 1 || v.ogurl[0] !== v.canon);
console.log(`HTML pages: ${pn.size}; noindex: ${noindex.length} (${noindex.sort().join(", ")}); indexable: ${indexable.length}`);
console.log(`indexable with exactly one og:url: ${withOg.length} of ${indexable.length}`);
console.log(`og:url not equal to canonical (or missing/duplicated): ${mism.length}`); mism.forEach(([k, v]) => console.log(`  ${k} og:url=${JSON.stringify(v.ogurl)} canonical=${v.canon}`));
const ogOnNoindex = [...pn].filter(([k, v]) => /noindex/.test(v.robots) && v.ogurl.length > 0);
console.log(`noindex pages with an og:url (expected 0): ${ogOnNoindex.length}`);
pf("V6", "og:url equals canonical on all 135 indexable pages", indexable.length === 135 && withOg.length === 135 && mism.length === 0, `indexable=${indexable.length} with og:url=${withOg.length} mismatches=${mism.length}`);

// [dbl-hyphen][dbl-hyphen] V7 noindex pages unchanged
console.log("\n##### V7 the 4 noindex pages and their files are unchanged");
const nfiles = [...newMap.keys()].filter((k) => NOINDEX_PATHS.some((p) => k === p || k.startsWith(p)));
const nchanged = nfiles.filter((k) => chSet.has(k));
console.log(`files under the 4 noindex paths: ${nfiles.length}; changed: ${nchanged.length}`); nchanged.forEach((k) => console.log("  CHANGED " + k));
pf("V7", "The 4 noindex pages (and their files) are unchanged, still no og:url", nchanged.length === 0 && ogOnNoindex.length === 0, `files=${nfiles.length} changed=${nchanged.length}`);

// [dbl-hyphen][dbl-hyphen] V8 canonical, robots, JSON-LD, titles all pages; JSON-LD for the 12
console.log("\n##### V8 canonical, robots, title for all pages; JSON-LD hashes for the 12 pages");
let diffs = 0; const dl = [];
for (const [k, o] of po) { const n = pn.get(k); if (!n) { diffs++; dl.push(`${k} missing in new`); continue; } for (const f of ["canon", "robots", "title"]) if (o[f] !== n[f]) { diffs++; dl.push(`${k} ${f}: ${o[f]} => ${n[f]}`); } }
console.log(`pages compared: ${po.size}; differences in canonical, robots meta or title: ${diffs}`); dl.forEach((x) => console.log("  " + x));
let ldd = 0; const ldl = [];
for (const r of R12) { const k = `/${r}/`; const a = po.get(k).ld, b = pn.get(k).ld; const same2 = a.length === b.length && a.every((x, i) => x === b[i]); if (!same2) { ldd++; ldl.push(k); } console.log(`  JSON-LD ${k}: blocks old=${a.length} new=${b.length} hashes ${same2 ? "EQUAL" : "DIFFER"}`); }
let ldAll = 0; for (const [k, o] of po) { const n = pn.get(k); if (n && JSON.stringify(o.ld) !== JSON.stringify(n.ld)) ldAll++; }
console.log(`JSON-LD differences across all ${po.size} pages: ${ldAll}`);
pf("V8", "Canonical, robots meta, title unchanged on all pages; JSON-LD hashes unchanged (12 pages, and all pages)", diffs === 0 && ldd === 0 && ldAll === 0, `meta diffs=${diffs}; jsonld diffs 12 pages=${ldd}, all pages=${ldAll}`);

// [dbl-hyphen][dbl-hyphen] V13 controls
const cch = []; for (const c of CONTROLS) for (const f of walk(path.join(NEW, c)).map((x) => `${c}/${x}`)) if (chSet.has(f)) cch.push(f);
console.log(`\n##### V13 the 3 comparison pages: files changed under /contact/, /drain-cleaning/, /las-vegas/drain-cleaning/: ${cch.length}`); cch.forEach((x) => console.log("  CHANGED " + x));
// careful: las-vegas/drain-cleaning is a subdirectory only for that route; contact and drain-cleaning dirs have no subroutes
pf("V13", "The 3 comparison pages are unchanged", cch.length === 0, `changed files=${cch.length}`);

// [dbl-hyphen][dbl-hyphen] V12 forbidden characters in the 36 added tags
const allExtras = [];
for (const r of R12) {
  const o = tok(read(OLD, oldMap.get(`${r}/index.html`), oldId).toString("utf8")), n = tok(read(NEW, newMap.get(`${r}/index.html`), newId).toString("utf8"));
  let i = 0; for (const t of n) { if (i < o.length && t === o[i]) i++; else allExtras.push(t); }
}
const em = allExtras.filter((t) => /[em dash]/.test(t)).length, dh = allExtras.filter((t) => /[dbl-hyphen]/.test(t)).length;
console.log(`\n##### V12 forbidden characters in the ${allExtras.length} added HTML tags: em dash=${em}, double hyphen=${dh}`);
pf("V12a", "No em dash or double hyphen in the added HTML tags", em === 0 && dh === 0 && allExtras.length === 36, `tags=${allExtras.length} em=${em} dh=${dh}`);

console.log("\n##### RESULT TABLE (script checks)");
console.log("| ID | Check | Result | Detail |\n|-|-|-|-|");
for (const r of results) console.log(`| ${r.id} | ${r.name} | ${r.ok ? "PASS" : "FAIL"} | ${r.detail} |`);
console.log(`\nOVERALL script checks: ${results.every((r) => r.ok) ? "ALL PASS" : "AT LEAST ONE FAIL"}`);
process.exit(results.every((r) => r.ok) ? 0 : 1);
```


## 13. UNVERIFIED items

1. Whether the refined V4 criterion (3 added meta tags plus the inline head chunk gaining the same 3 entries) is acceptable. It is a decision for Sedrick. The diagnostic supports it for all 12 pages.
2. That the live production HTML will look like the local out/ after deploy (not deployed, not checked).
3. How social platforms treat the new tags (not tested).
4. Whether the scratchpad snapshot survives into a later session.
5. What build command Cloudflare runs (not visible in the repo).
6. The V5 test is a string-set test. It shows no string was removed, but it does not prove byte-level equality of the unchanged parts of the 36 text files. The string sets show only the 3 new property and value strings and the renumbered key numbers 27, 28 and 29 were added.

## 14. State left behind

- 12 source files modified in the working tree (36 insertions, 0 deletions). Not staged. Not committed.
- out/ holds the post-change build. The pre-change snapshot is in the scratchpad.
- Untracked: this report, og-url-gate2-plan.md, og-url-inspection-report.md, metadata-rewrite-v3.csv (the last was already untracked).
- No push, no deploy, no revert.
