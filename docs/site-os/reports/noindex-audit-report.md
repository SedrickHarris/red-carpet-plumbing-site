# Noindex Audit Report (Gate 1, Inspect and Report Only)

Site: Red Carpet Plumbing. Audit date: 2026-10-28. Repo HEAD at audit time: 948771f. Scope: read-only. No source, content, config, schema, or image file was edited. This file is the only file created in the repo.

Notes on text handling: the user rule forbids em dashes and double hyphens in report text. Embedded raw output contained one em dash (in a code comment inside next.config.ts, shown in Section 2.4). It is shown as the marker [em dash]. Three double hyphens inside the embedded app/sitemap.ts source (Section 2.5, git command arguments) are shown as the marker [dbl-hyphen]. Markdown table separator rows use single hyphens. No other raw output was altered.

## 1. Summary

The prerendered `out/` directory contains 139 HTML files. 4 of them carry a noindex directive: /thank-you/ (noindex, nofollow) and three Next.js framework not-found outputs (/404/, /404.html, /_not-found/), all classified INTENTIONAL. 116 pages carry an explicit `index, follow` tag and 19 indexable pages carry no robots tag at all (default indexable); there is no accidental or inherited noindex on any page. The sitemap lists 135 URLs, which equals every indexable page, and lists none of the 4 noindex pages. No page has a canonical pointing to a different URL (0), and every indexable page has exactly one self-referencing canonical. Privacy Policy and Terms exist in `out/` and are indexable. Live response headers and the absence of /thank-you/ from the approved build list cannot be verified from the repo and are listed in Section 8.

## 2. Method and commands run (full raw output)

Environment rules respected: no `next start`, no commit, no stage, no deploy. Build was run with `npx next build` instead of `npm run build` on purpose. The package.json `prebuild` hook runs `seo-automation/scripts/scan-routes.mjs`, which rewrites the tracked file `docs/seo/route-manifest.json`. That would have violated the read-only rule. The `postbuild` check (`scripts/check-sitemap-sync.mjs`) only reads `out/`, so it was run separately afterward (Section 2.6). Because `prebuild` was skipped, `docs/seo/route-manifest.json` is the committed version, not a regenerated one. It matches the built HTML route set (Section 6).

### 2.1 Pre-build checks: out/ gitignored, staleness

```text
$ git check-ignore -v out
.gitignore:15:out/	out
[exit=0]

$ ls -d out; stat out
out
2026-10-28 14:55:48.820438700 -0700 out

$ git log -1 (HEAD)
Tue Oct 13 20:07:22 2026 -0700 948771f seo: omit sitemap lastmod when git history is shallow
```

The previous `out/` (built 2026-10-13 20:02) predates HEAD (commit 20:07), so it was treated as stale and rebuilt.

### 2.2 Production build, full raw output (161 lines), part 1 of 3, lines 1 to 60

```text
▲ Next.js 16.2.6 (Turbopack)
- Environments: .env.local

  Creating an optimized production build ...
✓ Compiled successfully in 5.4s
  Running TypeScript ...
  Finished TypeScript in 12.8s ...
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

### 2.2 Production build, part 2 of 3 (lines 61 to 120)

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

### 2.2 Production build, part 3 of 3 (lines 121 to 161). Exit code 0.

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

### 2.3 Section A: source-level greps (full raw output, 170 lines)

Scope: whole repo excluding node_modules, .next, out, Images (gitignored raw working folder), package-lock.json, tsbuildinfo. A1 is limited to code and config directories; A2, A3, A4 cover the whole repo including docs.

Part 1 (lines 1 to 60):

```text
### A1 robots in app/lib/components
$ rg -n -i robots -g !node_modules -g !.next -g !out -g !Images -g !package-lock.json -g !*.tsbuildinfo app lib components functions scripts next.config.ts seo-automation public
scripts\check-sitemap-sync.mjs:11:// Pages with a noindex robots meta tag are intentionally excluded from the
scripts\check-sitemap-sync.mjs:47:    if (!/name=["']robots["']/i.test(tag)) continue;
app\boulder-city-plumbing-services\page.tsx:38:  robots: { index: true, follow: true },
app\contact\page.tsx:32:  robots: { index: true, follow: true },
app\enterprise-plumbing-services\page.tsx:38:  robots: { index: true, follow: true },
app\boulder-city\emergency-plumbing\page.tsx:53:  robots: { index: true, follow: true },
app\boulder-city\water-heater-repair-installation\page.tsx:56:  robots: { index: true, follow: true },
app\green-valley\drain-cleaning\page.tsx:56:  robots: { index: true, follow: true },
app\boulder-city\drain-cleaning\page.tsx:54:  robots: { index: true, follow: true },
app\boulder-city\leak-detection-repair\page.tsx:60:  robots: { index: true, follow: true },
app\green-valley\water-heater-repair-installation\page.tsx:59:  robots: { index: true, follow: true },
app\green-valley\leak-detection-repair\page.tsx:58:  robots: { index: true, follow: true },
app\enterprise\water-heater-repair-installation\page.tsx:55:  robots: { index: true, follow: true },
app\green-valley\emergency-plumbing\page.tsx:50:  robots: { index: true, follow: true },
app\green-valley\slab-leak-detection-repair\page.tsx:53:  robots: { index: true, follow: true },
app\green-valley\toilet-repair-installation\page.tsx:70:  robots: { index: true, follow: true },
app\green-valley\faucet-sink-repair-installation\page.tsx:63:  robots: { index: true, follow: true },
app\enterprise\slab-leak-detection-repair\page.tsx:55:  robots: { index: true, follow: true },
app\green-valley\repiping\page.tsx:54:  robots: { index: true, follow: true },
app\north-las-vegas-plumbing-services\page.tsx:39:  robots: { index: true, follow: true },
app\enterprise\sewer-line-services\page.tsx:71:  robots: { index: true, follow: true },
app\henderson-plumbing-services\page.tsx:38:  robots: { index: true, follow: true },
app\privacy-policy\page.tsx:26:  robots: { index: true, follow: true },
app\enterprise\repiping\page.tsx:53:  robots: { index: true, follow: true },
app\plumbing-services\page.tsx:35:  robots: { index: true, follow: true },
app\north-las-vegas\water-pipe-repair-replacement\page.tsx:68:  robots: { index: true, follow: true },
app\enterprise\leak-detection-repair\page.tsx:52:  robots: { index: true, follow: true },
app\las-vegas\water-pipe-repair-replacement\page.tsx:64:  robots: { index: true, follow: true },
app\north-las-vegas\water-heater-repair-installation\page.tsx:50:  robots: { index: true, follow: true },
app\enterprise\emergency-plumbing\page.tsx:53:  robots: { index: true, follow: true },
app\las-vegas\water-heater-repair-installation\page.tsx:50:  robots: { index: true, follow: true },
app\henderson\water-pipe-repair-replacement\page.tsx:63:  robots: { index: true, follow: true },
app\paradise-plumbing-services\page.tsx:38:  robots: { index: true, follow: true },
app\north-las-vegas\toilet-repair-installation\page.tsx:72:  robots: { index: true, follow: true },
app\enterprise\drain-cleaning\page.tsx:52:  robots: { index: true, follow: true },
app\las-vegas\video-camera-plumbing-inspections\page.tsx:63:  robots: { index: true, follow: true },
app\henderson\water-heater-repair-installation\page.tsx:50:  robots: { index: true, follow: true },
app\north-las-vegas\slab-leak-detection-repair\page.tsx:48:  robots: { index: true, follow: true },
app\enterprise\commercial-plumbing\page.tsx:50:  robots: { index: true, follow: true },
app\las-vegas\toilet-repair-installation\page.tsx:65:  robots: { index: true, follow: true },
app\henderson\commercial-plumbing\page.tsx:50:  robots: { index: true, follow: true },
app\henderson\garbage-disposal-repair-installation\page.tsx:62:  robots: { index: true, follow: true },
app\henderson\repiping\page.tsx:46:  robots: { index: true, follow: true },
app\henderson\toilet-repair-installation\page.tsx:62:  robots: { index: true, follow: true },
app\paradise\water-heater-repair-installation\page.tsx:47:  robots: { index: true, follow: true },
app\north-las-vegas\sewer-line-services\page.tsx:65:  robots: { index: true, follow: true },
app\henderson\sewer-line-services\page.tsx:59:  robots: { index: true, follow: true },
app\las-vegas\slab-leak-detection-repair\page.tsx:47:  robots: { index: true, follow: true },
app\thank-you\page.tsx:21:  robots: { index: false, follow: false },
app\henderson\faucet-sink-repair-installation\page.tsx:63:  robots: { index: true, follow: true },
app\henderson\backflow-prevention\page.tsx:75:  robots: { index: true, follow: true },
app\paradise\sewer-line-services\page.tsx:71:  robots: { index: true, follow: true },
app\henderson\slab-leak-detection-repair\page.tsx:48:  robots: { index: true, follow: true },
app\henderson\leak-detection-repair\page.tsx:49:  robots: { index: true, follow: true },
app\north-las-vegas\repiping\page.tsx:75:  robots: { index: true, follow: true },
app\las-vegas\sewer-line-services\page.tsx:63:  robots: { index: true, follow: true },
app\las-vegas\emergency-plumbing\page.tsx:48:  robots: { index: true, follow: true },
app\terms-and-conditions\page.tsx:26:  robots: { index: true, follow: true },
```

Part 2 (lines 61 to 120):

```text
app\henderson\emergency-plumbing\page.tsx:44:  robots: { index: true, follow: true },
app\paradise\leak-detection-repair\page.tsx:44:  robots: { index: true, follow: true },
app\green-valley-plumbing-services\page.tsx:38:  robots: { index: true, follow: true },
app\las-vegas\backflow-prevention\page.tsx:71:  robots: { index: true, follow: true },
app\henderson\gas-line-plumbing\page.tsx:62:  robots: { index: true, follow: true },
app\north-las-vegas\leak-detection-repair\page.tsx:48:  robots: { index: true, follow: true },
app\las-vegas\repiping\page.tsx:46:  robots: { index: true, follow: true },
app\las-vegas\drain-cleaning\page.tsx:44:  robots: { index: true, follow: true },
app\paradise\gas-line-plumbing\page.tsx:66:  robots: { index: true, follow: true },
app\summerlin-plumbing-services\page.tsx:38:  robots: { index: true, follow: true },
app\henderson\drain-cleaning\page.tsx:44:  robots: { index: true, follow: true },
app\las-vegas\commercial-plumbing\page.tsx:50:  robots: { index: true, follow: true },
app\lake-las-vegas-plumbing-services\page.tsx:38:  robots: { index: true, follow: true },
app\north-las-vegas\garbage-disposal-repair-installation\page.tsx:69:  robots: { index: true, follow: true },
app\las-vegas\leak-detection-repair\page.tsx:46:  robots: { index: true, follow: true },
app\las-vegas\garbage-disposal-repair-installation\page.tsx:65:  robots: { index: true, follow: true },
app\paradise\emergency-plumbing\page.tsx:46:  robots: { index: true, follow: true },
app\las-vegas\faucet-sink-repair-installation\page.tsx:66:  robots: { index: true, follow: true },
app\lake-las-vegas\water-heater-repair-installation\page.tsx:56:  robots: { index: true, follow: true },
app\las-vegas\gas-line-plumbing\page.tsx:62:  robots: { index: true, follow: true },
app\north-las-vegas\emergency-plumbing\page.tsx:45:  robots: { index: true, follow: true },
app\paradise\drain-cleaning\page.tsx:44:  robots: { index: true, follow: true },
app\las-vegas-plumbing-services\page.tsx:38:  robots: { index: true, follow: true },
app\north-las-vegas\aliante-area\drain-cleaning\page.tsx:59:  robots: { index: true, follow: true },
app\north-las-vegas\aliante-area\emergency-plumbing\page.tsx:56:  robots: { index: true, follow: true },
app\lake-las-vegas\slab-leak-detection-repair\page.tsx:57:  robots: { index: true, follow: true },
app\north-las-vegas\aliante-area\water-heater-repair-installation\page.tsx:67:  robots: { index: true, follow: true },
app\north-las-vegas\aliante-area\leak-detection-repair\page.tsx:74:  robots: { index: true, follow: true },
app\north-las-vegas\drain-cleaning\page.tsx:44:  robots: { index: true, follow: true },
app\paradise\backflow-prevention\page.tsx:75:  robots: { index: true, follow: true },
app\summerlin\water-pipe-repair-replacement\page.tsx:63:  robots: { index: true, follow: true },
app\paradise\commercial-plumbing\page.tsx:51:  robots: { index: true, follow: true },
app\page.tsx:32:  robots: { index: true, follow: true },
app\north-las-vegas\aliante-area\slab-leak-detection-repair\page.tsx:74:  robots: { index: true, follow: true },
app\north-las-vegas\commercial-plumbing\page.tsx:77:  robots: { index: true, follow: true },
app\north-las-vegas\aliante-area-plumbing\page.tsx:40:  robots: { index: true, follow: true },
app\lake-las-vegas\leak-detection-repair\page.tsx:54:  robots: { index: true, follow: true },
app\summerlin\emergency-plumbing\page.tsx:48:  robots: { index: true, follow: true },
app\summerlin\water-heater-repair-installation\page.tsx:53:  robots: { index: true, follow: true },
app\summerlin\leak-detection-repair\page.tsx:47:  robots: { index: true, follow: true },
app\sitemap\page.tsx:31:  robots: { index: true, follow: true },
app\spring-valley-plumbing-services\page.tsx:38:  robots: { index: true, follow: true },
app\summerlin\drain-cleaning\page.tsx:47:  robots: { index: true, follow: true },
app\lake-las-vegas\emergency-plumbing\page.tsx:53:  robots: { index: true, follow: true },
app\summerlin\toilet-repair-installation\page.tsx:62:  robots: { index: true, follow: true },
app\summerlin\garbage-disposal-repair-installation\page.tsx:62:  robots: { index: true, follow: true },
app\spring-valley\drain-cleaning\page.tsx:46:  robots: { index: true, follow: true },
app\summerlin\gas-line-plumbing\page.tsx:64:  robots: { index: true, follow: true },
app\spring-valley\leak-detection-repair\page.tsx:48:  robots: { index: true, follow: true },
app\lake-las-vegas\drain-cleaning\page.tsx:50:  robots: { index: true, follow: true },
app\spring-valley\commercial-plumbing\page.tsx:53:  robots: { index: true, follow: true },
app\spring-valley\water-heater-repair-installation\page.tsx:49:  robots: { index: true, follow: true },
app\service-areas\page.tsx:37:  robots: { index: true, follow: true },
app\summerlin\slab-leak-detection-repair\page.tsx:50:  robots: { index: true, follow: true },
app\summerlin\faucet-sink-repair-installation\page.tsx:63:  robots: { index: true, follow: true },
app\summerlin\repiping\page.tsx:48:  robots: { index: true, follow: true },
app\spring-valley\emergency-plumbing\page.tsx:56:  robots: { index: true, follow: true },
app\spring-valley\sewer-line-services\page.tsx:71:  robots: { index: true, follow: true },
app\spring-valley\slab-leak-detection-repair\page.tsx:49:  robots: { index: true, follow: true },
app\spring-valley\repiping\page.tsx:48:  robots: { index: true, follow: true },
```

Part 3 (lines 121 to 170):

```text
app\summerlin\sewer-line-services\page.tsx:72:  robots: { index: true, follow: true },
[exit=0]

### A2 meta robots/googlebot/bingbot
$ rg -n -i name=.?(robots|googlebot|bingbot)|googlebot|bingbot -g !node_modules -g !.next -g !out -g !Images -g !package-lock.json -g !*.tsbuildinfo .
[exit=1]

### A3 noindex
$ rg -n -i noindex -g !node_modules -g !.next -g !out -g !Images -g !package-lock.json -g !*.tsbuildinfo .
.\scripts\check-sitemap-sync.mjs:11:// Pages with a noindex robots meta tag are intentionally excluded from the
.\scripts\check-sitemap-sync.mjs:45:function isNoindex(html) {
.\scripts\check-sitemap-sync.mjs:49:    if (content && /noindex/i.test(content[1])) return true;
.\scripts\check-sitemap-sync.mjs:56:const noindexPages = [];
.\scripts\check-sitemap-sync.mjs:59:  (isNoindex(html) ? noindexPages : indexable).push(page.route);
.\scripts\check-sitemap-sync.mjs:95:    `${noindexPages.length} noindex page(s) excluded` +
.\scripts\check-sitemap-sync.mjs:96:    (noindexPages.length > 0 ? ` (${noindexPages.join(", ")})` : ""),
.\docs\site-os\reports\social-share-image-and-twitter-card-report.md:31:Untouched: `app/page.tsx` (already covered by the file convention in its own segment), `app/thank-you/page.tsx` (noindex, no `openGraph`), `docs/site-os/implementation-log.md`, all source images.
.\docs\site-os\master-prompts\prompts\09-final-launch-qa-prompt.md:224:- Page does not include noindex unless intentionally approved
.\docs\site-os\master-prompts\prompts\06-claude-code-build-prompt.md:209:- Robots/noindex behavior checked before launch
.\docs\site-os\master-prompts\checklists\seo-indexing-checklist.md:13:- [ ] Page is not accidentally noindexed
.\docs\site-os\master-prompts\checklists\post-deploy-production-verification-checklist.md:96:- [ ] No noindex pages appear in the sitemap
.\docs\site-os\master-prompts\checklists\page-after-build-checklist.md:44:- [ ] Page is indexable unless intentionally noindexed
.\docs\site-os\master-prompts\checklists\launch-readiness-checklist.md:27:- [ ] Page is accidentally noindexed
[exit=0]

### A3b nofollow
$ rg -n -i nofollow -g !node_modules -g !.next -g !out -g !Images -g !package-lock.json -g !*.tsbuildinfo .
[exit=1]

### A3c noarchive|nosnippet|unavailable_after
$ rg -n -i noarchive|nosnippet|unavailable_after|max-snippet -g !node_modules -g !.next -g !out -g !Images -g !package-lock.json -g !*.tsbuildinfo .
[exit=1]

### A4 X-Robots-Tag
$ rg -n -i x-robots -g !node_modules -g !.next -g !out -g !Images -g !package-lock.json -g !*.tsbuildinfo .
[exit=1]

### A5 env toggles
$ rg -n process\.env|NODE_ENV|NEXT_PUBLIC_|VERCEL_ENV|CF_PAGES|CF_PAGES_BRANCH -g !node_modules -g !.next -g !out -g !Images -g !package-lock.json -g !*.tsbuildinfo app lib components functions scripts next.config.ts seo-automation
scripts\lead-dev.mjs:25:const outDir = process.env.LEAD_DEV_OUT
scripts\lead-dev.mjs:26:  ? path.resolve(process.env.LEAD_DEV_OUT)
scripts\lead-dev.mjs:29:const port = process.env.LEAD_DEV_PORT || "8788";
scripts\lead-dev.mjs:56:  crmUrl = new URL(process.env.CRM_API_BASE_URL || "");
scripts\lead-dev.mjs:64:if (!/^[123]x0+AA$/.test(process.env.TURNSTILE_SECRET_KEY || "")) {
scripts\lead-dev.mjs:87:  const value = process.env[name];
scripts\lead-dev.mjs:91:const childEnv = { ...process.env, WRANGLER_SEND_METRICS: "false", NO_COLOR: "1" };
lib\lead-endpoint.ts:2:// Cloudflare Pages. Deliberately not a NEXT_PUBLIC_* variable.
components\useTurnstile.ts:9:const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";
[exit=0]
```

Summary of A1 (counted from the output above, not estimated): 116 page files export `robots: { index: true, follow: true }`, 1 file (app/thank-you/page.tsx:21) exports `robots: { index: false, follow: false }`, and no other robots export exists. app/layout.tsx has a `metadata` export (line 20) with no robots key. There is only one layout file (app/layout.tsx) and no template.tsx. There is no shared metadata helper that sets robots: each page declares its own robots value inline. A5 shows the only env-variable uses are for the lead form and Turnstile (scripts/lead-dev.mjs, lib/lead-endpoint.ts, components/useTurnstile.ts), none related to robots.

### 2.4 Section B: config and hosting signals (full raw output)

```text
$ ls public/_headers public/_redirects public/sitemap.xml app/robots.ts wrangler.toml
ls: cannot access 'public/_headers': No such file or directory
ls: cannot access 'public/_redirects': No such file or directory
ls: cannot access 'public/sitemap.xml': No such file or directory
ls: cannot access 'app/robots.ts': No such file or directory
ls: cannot access 'wrangler.toml': No such file or directory

$ find functions -type f
functions/api/lead.ts

$ rg -n -i "robots|x-robots|header" functions/api/lead.ts (header related lines)
71:    headers: {
115:  const declared = request.headers.get("Content-Length");
284:  const origin = request.headers.get("Origin");
287:  const contentType = (request.headers.get("Content-Type") ?? "")
347:  const visitorIp = request.headers.get("CF-Connecting-IP");
353:      headers: { "Content-Type": "application/x-www-form-urlencoded" },
410:        headers: {
$ rg -n -i "robots|x-robots" functions
[exit=1]

$ cat next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export required for Cloudflare Pages static deployment.
  // Produces an `out/` directory at `next build` time.
  output: "export",
  trailingSlash: true,
  // Required when `output: "export"` is set [em dash] Next.js Image Optimization
  // is a runtime feature and cannot run in a static export.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

$ cat public/robots.txt
User-agent: *
Allow: /
Disallow: /api/

Sitemap: https://redcarpetplumbing.com/sitemap.xml

$ cat out/robots.txt
User-agent: *
Allow: /
Disallow: /api/

Sitemap: https://redcarpetplumbing.com/sitemap.xml

$ ls out/_headers out/_redirects
ls: cannot access 'out/_headers': No such file or directory
ls: cannot access 'out/_redirects': No such file or directory
```

Findings: no public/_headers, no public/_redirects, no app/robots.ts, no public/sitemap.xml, no wrangler.toml, no functions/_middleware.*. The only function is functions/api/lead.ts, which has no hit for robots or x-robots (its full 400-plus-line body is not reproduced; only the header-related grep is shown above). next.config.ts defines no `headers()`, so there is nothing to flag about ineffective custom headers. public/robots.txt and out/robots.txt are identical.

### 2.5 Section B: sitemap generator source (app/sitemap.ts, printed in full)

```text
import { execFileSync } from "node:child_process";
import type { MetadataRoute } from "next";
import routeManifest from "@/docs/seo/route-manifest.json";

export const dynamic = "force-static";

const BASE_URL = "https://redcarpetplumbing.com";

// Never listed, whatever the manifest contains. A thank-you page is a
// conversion confirmation, not indexable content.
const EXCLUDED_ROUTES = new Set(["/thank-you"]);

// Listed first, in this order. Everything else follows alphabetically, so the
// output only changes when a route or a file date really changes.
const CORE_ROUTES = [
  "/",
  "/about",
  "/plumbing-services",
  "/service-areas",
  "/contact",
];

// Last commit date per source file. lastModified reflects the page file only,
// not shared components such as HeroSection or SiteHeader, so it is a
// conservative signal: a shared change does not bump every page.
//
// A shallow clone (common in CI, including some Cloudflare Pages setups) has
// only the newest commits, so `git log` would report that one commit date for
// every file. That is wrong, so a shallow clone, or a failed shallow check,
// means no URL gets a lastModified. A date is also omitted for a single file
// git cannot answer for (untracked file). It is never replaced with the build
// time or the date of HEAD, which would change every URL on every build.
function isShallowRepository(): boolean {
  try {
    return (
      execFileSync("git", ["rev-parse", "[dbl-hyphen]is-shallow-repository"], {
        encoding: "utf8",
        stdio: ["ignore", "pipe", "ignore"],
      }).trim() !== "false"
    );
  } catch {
    return true;
  }
}

const dateCache = new Map<string, string | undefined>();

function lastCommitDate(sourceFile: string): string | undefined {
  if (dateCache.has(sourceFile)) return dateCache.get(sourceFile);
  let date: string | undefined;
  try {
    const out = execFileSync(
      "git",
      ["log", "-1", "[dbl-hyphen]format=%cI", "[dbl-hyphen]", sourceFile],
      { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] },
    ).trim();
    date = out === "" ? undefined : out;
  } catch {
    date = undefined;
  }
  dateCache.set(sourceFile, date);
  return date;
}

function toUrl(route: string): string {
  return route === "/" ? `${BASE_URL}/` : `${BASE_URL}${route}/`;
}

function sortRoutes(a: string, b: string): number {
  const ai = CORE_ROUTES.indexOf(a);
  const bi = CORE_ROUTES.indexOf(b);
  if (ai !== -1 || bi !== -1) {
    if (ai === -1) return 1;
    if (bi === -1) return -1;
    return ai - bi;
  }
  return a < b ? -1 : a > b ? 1 : 0;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries = routeManifest.routes
    .filter((r) => !EXCLUDED_ROUTES.has(r.route))
    .sort((a, b) => sortRoutes(a.route, b.route));

  if (isShallowRepository()) {
    console.warn(
      "sitemap: the repository is a shallow clone or its history is unavailable, " +
        "so sitemap lastmod dates are omitted.",
    );
    return entries.map((r) => ({ url: toUrl(r.route) }));
  }

  const result: MetadataRoute.Sitemap = entries.map((r) => {
    const lastModified = lastCommitDate(r.sourceFile);
    return lastModified
      ? { url: toUrl(r.route), lastModified }
      : { url: toUrl(r.route) };
  });

  const undated = result.filter((e) => e.lastModified === undefined).length;
  if (result.length > 0 && undated / result.length > 0.5) {
    console.warn(
      `sitemap: ${undated} of ${result.length} URLs have no lastModified. ` +
        "Git history is probably unavailable, for example a shallow clone. " +
        "The build continues without those dates.",
    );
  }

  return result;
}
```

public/sitemap.xml does not exist. The sitemap is generated by app/sitemap.ts into out/sitemap.xml. The full out/sitemap.xml is in Appendix A.

### 2.6 Cross-checks: postbuild sitemap sync, build list, form redirect

```text
$ node scripts/check-sitemap-sync.mjs
check-sitemap-sync: 137 pages built, 135 sitemap URLs, 2 noindex page(s) excluded (/thank-you/, /_not-found/)
[exit=0]

$ rg -n -i "thank-you|thank you|404|noindex|not-found" docs/site-os/inputs/red-carpet-plumbing-build-list.md
[exit=1]

$ rg -n "router.push" components/ContactFormPlaceholder.tsx components/QuoteFormPlaceholder.tsx
components/ContactFormPlaceholder.tsx:77:      router.push("/thank-you/");
components/QuoteFormPlaceholder.tsx:80:      router.push("/thank-you/");

$ rg -n "thank-you" app components lib functions (excluding app/thank-you)
lib\sitemap-page-data.ts:26:const EXCLUDED_ROUTES = new Set(["/thank-you", "/sitemap"]);
components\ContactFormPlaceholder.tsx:77:      router.push("/thank-you/");
app\about\page.tsx:435:              matching HeroSection and the thank-you page. No `priority`: this
components\QuoteFormPlaceholder.tsx:80:      router.push("/thank-you/");
app\page.tsx:437:              aria-hidden wrapper, matching HeroSection and the thank-you page
app\page.tsx:440:              and the thank-you page where the photo is LCP-eligible. */}
app\page.tsx:597:              matching HeroSection and the thank-you page. No `priority`: this
app\sitemap.ts:9:// Never listed, whatever the manifest contains. A thank-you page is a
app\sitemap.ts:11:const EXCLUDED_ROUTES = new Set(["/thank-you"]);
```

"none" directive search: `rg -n -i "robots.{0,40}none|content=.none"` over the repo (same exclusions as A) returned no hits (exit 1).

### 2.7 Section C method: scan of every .html file in out/

Script (kept in the session scratchpad, not in the repo) is reproduced in Appendix B. It parsed every .html file under out/ (excluding out/_next), extracting meta robots, googlebot, bingbot, canonical, title, JSON-LD count, anchors, and the sitemap. Raw script output (132 lines):

Part 1 (lines 1 to 60):

```text
{
 "totals": {
  "htmlFiles": 139,
  "withRobotsTag": 120,
  "noRobotsTag": 19,
  "explicitIndex": 116,
  "noindex": 4,
  "nofollow": 1,
  "anyNoindexNoneNofollow": 4,
  "canonicalDifferent": 0,
  "canonicalMissing": 4,
  "canonicalMulti": 0,
  "jsonldPages": 135,
  "pagesWithRelNofollowAnchors": 0,
  "pagesWithXRobotsInHtml": 0,
  "sitemapExists": true,
  "sitemapLocs": 135,
  "manifestRoutes": 136
 },
 "distinctRobotsValues": [
  "noindex",
  "index, follow",
  "noindex, nofollow"
 ],
 "distinctRobotsTagText": [
  "<meta name=\"robots\" content=\"noindex\"/>",
  "<meta name=\"robots\" content=\"index, follow\"/>",
  "<meta name=\"robots\" content=\"noindex, nofollow\"/>"
 ],
 "noindexPages": [
  {
   "route": "/404/",
   "file": "out/404/index.html",
   "robotsTags": [
    "<meta name=\"robots\" content=\"noindex\"/>"
   ],
   "googlebot": [],
   "bingbot": [],
   "canonical": [],
   "title": "404: This page could not be found.",
   "jsonld": 0,
   "inSitemap": false,
   "inbound": {
    "total": 0,
    "fromIndexable": 0,
    "sources": []
   }
  },
  {
   "route": "/404.html",
   "file": "out/404.html",
   "robotsTags": [
    "<meta name=\"robots\" content=\"noindex\"/>"
   ],
   "googlebot": [],
   "bingbot": [],
   "canonical": [],
   "title": "404: This page could not be found.",
   "jsonld": 0,
   "inSitemap": false,
```

Part 2 (lines 61 to 120):

```text
   "inbound": {
    "total": 0,
    "fromIndexable": 0,
    "sources": []
   }
  },
  {
   "route": "/thank-you/",
   "file": "out/thank-you/index.html",
   "robotsTags": [
    "<meta name=\"robots\" content=\"noindex, nofollow\"/>"
   ],
   "googlebot": [],
   "bingbot": [],
   "canonical": [],
   "title": "Thank You | Red Carpet Plumbing",
   "jsonld": 0,
   "inSitemap": false,
   "inbound": {
    "total": 0,
    "fromIndexable": 0,
    "sources": []
   }
  },
  {
   "route": "/_not-found/",
   "file": "out/_not-found/index.html",
   "robotsTags": [
    "<meta name=\"robots\" content=\"noindex\"/>"
   ],
   "googlebot": [],
   "bingbot": [],
   "canonical": [],
   "title": "404: This page could not be found.",
   "jsonld": 0,
   "inSitemap": false,
   "inbound": {
    "total": 0,
    "fromIndexable": 0,
    "sources": []
   }
  }
 ],
 "inManifestNotHtml": [],
 "inHtmlNotManifest": [
  "/404/",
  "/404.html",
  "/_not-found/"
 ],
 "sitemapNotInHtml": [],
 "indexableNotInSitemap": [],
 "canonDiff": [],
 "canonMissing": [
  {
   "route": "/404/",
   "file": "out/404/index.html"
  },
  {
   "route": "/404.html",
   "file": "out/404.html"
```

Part 3 (lines 121 to 132):

```text
  },
  {
   "route": "/thank-you/",
   "file": "out/thank-you/index.html"
  },
  {
   "route": "/_not-found/",
   "file": "out/_not-found/index.html"
  }
 ],
 "canonMulti": []
}
```

The per-route table for all 139 HTML files (route, robots, googlebot, bingbot, canonical, title) is Appendix C.

## 3. Table 1: all noindex routes

| Route | Directive text (exact tag) | Source file and line | Classification | Should it be noindex |
|-|-|-|-|-|
| /thank-you/ | `<meta name="robots" content="noindex, nofollow"/>` | app/thank-you/page.tsx:21 (`robots: { index: false, follow: false }`) | INTENTIONAL | Yes |
| /404/ | `<meta name="robots" content="noindex"/>` | Emitted by the Next.js built-in not-found page. No repo source line (no app/not-found.tsx exists, and no repo grep hit). | INTENTIONAL (framework default) | Yes |
| /404.html | `<meta name="robots" content="noindex"/>` | Same as /404/. This is the file Cloudflare Pages serves for missing URLs. | INTENTIONAL (framework default) | Yes |
| /_not-found/ | `<meta name="robots" content="noindex"/>` | Same as /404/. | INTENTIONAL (framework default) | Yes |

No googlebot or bingbot meta tags exist on any page. Distinct robots values found in out/: "noindex", "index, follow", "noindex, nofollow".

## 4. Table 2: totals

| Metric | Count |
|-|-|
| Total HTML files scanned in out/ | 139 |
| Routes in docs/seo/route-manifest.json | 136 |
| URLs in out/sitemap.xml | 135 |
| Pages with an explicit robots tag | 120 |
| Indexable total (explicit index, follow plus no robots tag) | 135 |
| Indexable with explicit "index, follow" | 116 |
| Indexable with no robots tag (default indexable) | 19 |
| Noindex | 4 |
| Pages with a nofollow directive | 1 (/thank-you/ only) |
| Pages with a canonical pointing to a different URL than the page | 0 |
| Pages with a missing canonical | 4 (all four are the noindex pages) |
| Pages with more than one canonical | 0 |
| Pages with JSON-LD | 135 |
| Pages containing anchors with rel nofollow | 0 |
| Pages whose HTML contains the string x-robots | 0 |

The 19 indexable pages with no robots tag are listed below with their canonicals. Each is in the sitemap and has a self canonical. They are indexable by default.

```text
/about/   canonical=https://redcarpetplumbing.com/about/
/backflow-prevention/   canonical=https://redcarpetplumbing.com/backflow-prevention/
/commercial-plumbing/   canonical=https://redcarpetplumbing.com/commercial-plumbing/
/drain-cleaning/   canonical=https://redcarpetplumbing.com/drain-cleaning/
/emergency-plumbing/   canonical=https://redcarpetplumbing.com/emergency-plumbing/
/faucet-sink-repair-installation/   canonical=https://redcarpetplumbing.com/faucet-sink-repair-installation/
/garbage-disposal-repair-installation/   canonical=https://redcarpetplumbing.com/garbage-disposal-repair-installation/
/gas-line-plumbing/   canonical=https://redcarpetplumbing.com/gas-line-plumbing/
/leak-detection-repair/   canonical=https://redcarpetplumbing.com/leak-detection-repair/
/plumbing-fixture-repair-replacement-installation/   canonical=https://redcarpetplumbing.com/plumbing-fixture-repair-replacement-installation/
/repiping/   canonical=https://redcarpetplumbing.com/repiping/
/sewer-line-services/   canonical=https://redcarpetplumbing.com/sewer-line-services/
/slab-leak-detection-repair/   canonical=https://redcarpetplumbing.com/slab-leak-detection-repair/
/toilet-repair-installation/   canonical=https://redcarpetplumbing.com/toilet-repair-installation/
/trenchless-piping/   canonical=https://redcarpetplumbing.com/trenchless-piping/
/video-camera-plumbing-inspections/   canonical=https://redcarpetplumbing.com/video-camera-plumbing-inspections/
/water-heater-repair-installation/   canonical=https://redcarpetplumbing.com/water-heater-repair-installation/
/water-meter-pressure-regulator-services/   canonical=https://redcarpetplumbing.com/water-meter-pressure-regulator-services/
/water-pipe-repair-replacement/   canonical=https://redcarpetplumbing.com/water-pipe-repair-replacement/
```

## 5. Findings by classification

### INTENTIONAL (4 pages)

1. /thank-you/. Source: app/thank-you/page.tsx:21. There is no comment on the robots line itself. Intent is shown by app/sitemap.ts lines 9 to 11 ("A thank-you page is a conversion confirmation, not indexable content."), by the same exclusion in lib/sitemap-page-data.ts:26, and by scripts/check-sitemap-sync.mjs (fails the build if /thank-you/ appears in the sitemap). The page is reached only by client-side `router.push("/thank-you/")` after form submit (components/ContactFormPlaceholder.tsx:77, components/QuoteFormPlaceholder.tsx:80). Should stay noindex: yes, it is a post-form confirmation page. It does not appear in the approved build list (rg for thank-you, 404, noindex, not-found in docs/site-os/inputs/red-carpet-plumbing-build-list.md returned no hits). That is a gap in the list, not a conflict, and is raised in Section 8.
2. /404/, /404.html, /_not-found/. These are produced by the Next.js built-in not-found route, which emits its own noindex. No repo file sets it. Should stay noindex: yes. Cloudflare Pages serves 404.html for unknown URLs. The cause is verified only from the prerendered HTML and the absence of any repo source; the exact Next.js internal line is not cited because it lives in node_modules and was not inspected.

### ENVIRONMENT-DRIVEN (0 pages)

None. Section A5 shows no env or branch logic touching robots. The build log shows `Environments: .env.local` was loaded, but no code reads an env variable to set robots, so out/ should be identical for any build environment. This is verified from source (A5) and the out/ HTML, not from a build on a different branch.

### ACCIDENTAL OR INHERITED (0 pages)

None. app/layout.tsx has no robots key, there is no template.tsx or nested layout, and no shared metadata helper sets robots. Every noindex page was traced to its own source or to the framework default.

### UNKNOWN (0 pages)

None for the repo and out/. Live-site headers are outside the repo; see Section 8.

## 6. Conflicts and secondary risks (Section E results)

| # | Check | Result | Evidence |
|-|-|-|-|
| 1 | Noindex pages listed in the sitemap | None. Sitemap has 135 URLs, none of the 4 noindex pages. | scan output: inSitemap false on all 4 (Section 2.7). postbuild check (2.6): "2 noindex page(s) excluded (/thank-you/, /_not-found/)". |
| 2 | Indexable pages not in the sitemap | None. | scan output `"indexableNotInSitemap": []`. |
| 3 | robots.txt Disallow blocking a noindex page | None. The only Disallow is /api/. No noindex page is under /api/. | out/robots.txt in 2.4. |
| 4 | Noindex pages receiving internal links from indexable pages | Zero inbound anchors for all 4. /thank-you/ is reached only by script navigation after form submit. | scan output, inbound total 0 for each. |
| 5 | Noindex pages whose canonical points to an indexable page | None. All four have no canonical tag. | scan output `canonMissing`. |
| 6 | nofollow pages that should pass equity to service-location pages | None. The only nofollow is /thank-you/, which has zero inbound links. No anchor with rel nofollow exists on any page. | Table 2. |
| 7 | Pages with JSON-LD that are noindex | None. All four noindex pages have 0 JSON-LD blocks. | scan output, jsonld 0. |
| 8 | Privacy and Terms in out/ and robots status | Both exist, both `index, follow`, both self canonical, both in the sitemap. | Appendix C rows /privacy-policy/ and /terms-and-conditions/. |
| 9 | Indexable pages with missing or self-contradicting canonical | None. 0 missing, 0 different, 0 multiple among the 135 indexable pages. | scan output totals. |

Route cross-check against docs/seo/route-manifest.json (136 routes): every manifest route has a built HTML file (inManifestNotHtml is empty). Three built files are not in the manifest: /404/, /404.html, /_not-found/ (framework outputs, not app routes). The sitemap contains no URL without a built page (sitemapNotInHtml is empty). The sitemap has 135 URLs because it excludes /thank-you/, which is in the manifest (app/sitemap.ts:11).

Secondary observation, not a defect: 116 pages set an explicit `index, follow` and 19 root-level pages set no robots value. Both are indexable. The difference has no indexing effect.

## 7. Recommended fixes (listed only, not applied)

No fix is required to resolve an accidental noindex, because none was found. Optional items:

| # | File | Change description | Risk | Pages affected |
|-|-|-|-|-|
| 1 | None (verification only) | Request live response headers for a page URL on the production domain and the pages.dev preview domain and confirm there is no X-Robots-Tag header from Cloudflare dashboard rules. | None, read-only | All |
| 2 | app/thank-you/page.tsx:21 | Optional: decide whether to keep `follow: false` or change to `follow: true` on this noindex page. Current value stops crawlers from following its header and footer links. Not needed for indexing. | Very low. Metadata change, needs approval under CLAUDE.md. | /thank-you/ |
| 3 | The 19 root-level pages listed in Section 4 | Optional consistency only: add an explicit robots value to match the other 116 pages. No indexing effect. | Low. Metadata change, needs approval. | 19 pages |
| 4 | docs/site-os/inputs/red-carpet-plumbing-build-list.md | Optional: record /thank-you/ and the framework 404 as approved noindex utility pages. | None, docs only | Docs |

## 8. UNVERIFIED items and open questions for Sedrick

1. UNVERIFIED: live production response headers. The repo has no _headers file, no middleware, and no wrangler config, but Cloudflare dashboard Transform Rules or Pages settings could add an X-Robots-Tag header outside the repo. To verify: run a header request against the live domain and the pages.dev preview URL, or share the Cloudflare rules.
2. UNVERIFIED: whether pages.dev preview URLs are publicly reachable and indexable duplicates. Needs the Cloudflare Pages project settings or a live check.
3. UNVERIFIED: the exact Next.js internal source line that emits noindex on the not-found page. Verified only from out/ HTML and the absence of any repo source.
4. UNVERIFIED: that the deployed site matches this build. The audit covers the local out/ built from HEAD 948771f.
5. Question: /thank-you/ is not in the approved build list. Should it be added as an approved noindex utility page?
6. Question: do you want the optional items in Section 7 (2 and 3) planned, or left as is?
7. Note: `docs/seo/route-manifest.json` was not regenerated, because the prebuild hook would have rewritten a tracked file. It matched the built HTML anyway.

## Appendix A: out/sitemap.xml (full, raw)

```text
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<url>
<loc>https://redcarpetplumbing.com/</loc>
<lastmod>2026-10-13T11:03:47-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/about/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/plumbing-services/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/service-areas/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/contact/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/backflow-prevention/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/boulder-city-plumbing-services/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/boulder-city/drain-cleaning/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/boulder-city/emergency-plumbing/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/boulder-city/leak-detection-repair/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/boulder-city/water-heater-repair-installation/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/commercial-plumbing/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/drain-cleaning/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/emergency-plumbing/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/enterprise-plumbing-services/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/enterprise/commercial-plumbing/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/enterprise/drain-cleaning/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/enterprise/emergency-plumbing/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/enterprise/leak-detection-repair/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/enterprise/repiping/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/enterprise/sewer-line-services/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/enterprise/slab-leak-detection-repair/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/enterprise/water-heater-repair-installation/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/faucet-sink-repair-installation/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/garbage-disposal-repair-installation/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/gas-line-plumbing/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/green-valley-plumbing-services/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/green-valley/drain-cleaning/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/green-valley/emergency-plumbing/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/green-valley/faucet-sink-repair-installation/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/green-valley/leak-detection-repair/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/green-valley/repiping/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/green-valley/slab-leak-detection-repair/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/green-valley/toilet-repair-installation/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/green-valley/water-heater-repair-installation/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/henderson-plumbing-services/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/henderson/backflow-prevention/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/henderson/commercial-plumbing/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/henderson/drain-cleaning/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/henderson/emergency-plumbing/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/henderson/faucet-sink-repair-installation/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/henderson/garbage-disposal-repair-installation/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/henderson/gas-line-plumbing/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/henderson/leak-detection-repair/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/henderson/repiping/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/henderson/sewer-line-services/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/henderson/slab-leak-detection-repair/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/henderson/toilet-repair-installation/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/henderson/water-heater-repair-installation/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/henderson/water-pipe-repair-replacement/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/lake-las-vegas-plumbing-services/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/lake-las-vegas/drain-cleaning/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/lake-las-vegas/emergency-plumbing/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/lake-las-vegas/leak-detection-repair/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/lake-las-vegas/slab-leak-detection-repair/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/lake-las-vegas/water-heater-repair-installation/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/las-vegas-plumbing-services/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/las-vegas/backflow-prevention/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/las-vegas/commercial-plumbing/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/las-vegas/drain-cleaning/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/las-vegas/emergency-plumbing/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/las-vegas/faucet-sink-repair-installation/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/las-vegas/garbage-disposal-repair-installation/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/las-vegas/gas-line-plumbing/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/las-vegas/leak-detection-repair/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/las-vegas/repiping/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/las-vegas/sewer-line-services/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/las-vegas/slab-leak-detection-repair/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/las-vegas/toilet-repair-installation/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/las-vegas/video-camera-plumbing-inspections/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/las-vegas/water-heater-repair-installation/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/las-vegas/water-pipe-repair-replacement/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/leak-detection-repair/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/north-las-vegas-plumbing-services/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/north-las-vegas/aliante-area-plumbing/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/north-las-vegas/aliante-area/drain-cleaning/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/north-las-vegas/aliante-area/emergency-plumbing/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/north-las-vegas/aliante-area/leak-detection-repair/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/north-las-vegas/aliante-area/slab-leak-detection-repair/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/north-las-vegas/aliante-area/water-heater-repair-installation/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/north-las-vegas/commercial-plumbing/</loc>
<lastmod>2026-10-13T17:59:45-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/north-las-vegas/drain-cleaning/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/north-las-vegas/emergency-plumbing/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/north-las-vegas/garbage-disposal-repair-installation/</loc>
<lastmod>2026-10-13T18:07:08-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/north-las-vegas/leak-detection-repair/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/north-las-vegas/repiping/</loc>
<lastmod>2026-10-13T17:59:45-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/north-las-vegas/sewer-line-services/</loc>
<lastmod>2026-10-13T17:32:37-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/north-las-vegas/slab-leak-detection-repair/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/north-las-vegas/toilet-repair-installation/</loc>
<lastmod>2026-10-13T17:59:45-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/north-las-vegas/water-heater-repair-installation/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/north-las-vegas/water-pipe-repair-replacement/</loc>
<lastmod>2026-10-13T17:59:45-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/paradise-plumbing-services/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/paradise/backflow-prevention/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/paradise/commercial-plumbing/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/paradise/drain-cleaning/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/paradise/emergency-plumbing/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/paradise/gas-line-plumbing/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/paradise/leak-detection-repair/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/paradise/sewer-line-services/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/paradise/water-heater-repair-installation/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/plumbing-fixture-repair-replacement-installation/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/privacy-policy/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/repiping/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/sewer-line-services/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/sitemap/</loc>
<lastmod>2026-10-13T19:58:27-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/slab-leak-detection-repair/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/spring-valley-plumbing-services/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/spring-valley/commercial-plumbing/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/spring-valley/drain-cleaning/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/spring-valley/emergency-plumbing/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/spring-valley/leak-detection-repair/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/spring-valley/repiping/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/spring-valley/sewer-line-services/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/spring-valley/slab-leak-detection-repair/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/spring-valley/water-heater-repair-installation/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/summerlin-plumbing-services/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/summerlin/drain-cleaning/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/summerlin/emergency-plumbing/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/summerlin/faucet-sink-repair-installation/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/summerlin/garbage-disposal-repair-installation/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/summerlin/gas-line-plumbing/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/summerlin/leak-detection-repair/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/summerlin/repiping/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/summerlin/sewer-line-services/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/summerlin/slab-leak-detection-repair/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/summerlin/toilet-repair-installation/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/summerlin/water-heater-repair-installation/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/summerlin/water-pipe-repair-replacement/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/terms-and-conditions/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/toilet-repair-installation/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/trenchless-piping/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/video-camera-plumbing-inspections/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/water-heater-repair-installation/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/water-meter-pressure-regulator-services/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
<url>
<loc>https://redcarpetplumbing.com/water-pipe-repair-replacement/</loc>
<lastmod>2026-10-13T16:31:33-07:00</lastmod>
</url>
</urlset>
```

## Appendix B: scan script (scratchpad copy, full)

```text
import fs from "node:fs";
import path from "node:path";

const ROOT = "C:/Users/Welcome/Desktop/client-sites/red-carpet-plumbing-site";
const OUT = path.join(ROOT, "out");
const ORIGIN = "https://redcarpetplumbing.com";

function walk(d, acc = []) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) {
      if (e.name === "_next") continue;
      walk(p, acc);
    } else if (e.name.endsWith(".html")) acc.push(p);
  }
  return acc;
}
const files = walk(OUT);
const toRoute = (f) => {
  let r = "/" + path.relative(OUT, f).replace(/\\/g, "/");
  r = r.replace(/index\.html$/, "");
  return r;
};
const metaTags = (html) => [...html.matchAll(/<meta\b[^>]*>/gi)].map((m) => m[0]);
const attr = (tag, n) => (tag.match(new RegExp(`\\b${n}=("([^"]*)"|'([^']*)')`, "i")) || [])[2] ?? (tag.match(new RegExp(`\\b${n}=("([^"]*)"|'([^']*)')`, "i")) || [])[3];

const pages = files
  .map((f) => {
    const html = fs.readFileSync(f, "utf8");
    const metas = metaTags(html);
    const get = (name) =>
      metas
        .filter((t) => (attr(t, "name") || "").toLowerCase() === name)
        .map((t) => `<${t.replace(/^<|>$/g, "")}>`.replace(/^<</, "<").replace(/>>$/, ">"));
    const content = (name) =>
      metas.filter((t) => (attr(t, "name") || "").toLowerCase() === name).map((t) => attr(t, "content"));
    const canon = [...html.matchAll(/<link\b[^>]*>/gi)]
      .map((m) => m[0])
      .filter((t) => (attr(t, "rel") || "").toLowerCase() === "canonical")
      .map((t) => attr(t, "href"));
    const title = (html.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [])[1];
    const jsonld = [...html.matchAll(/<script[^>]*application\/ld\+json[^>]*>/gi)].length;
    const hrefs = [...html.matchAll(/<a\b[^>]*>/gi)]
      .map((m) => attr(m[0], "href"))
      .filter(Boolean);
    const relNofollow = [...html.matchAll(/<a\b[^>]*>/gi)].filter((m) => /nofollow/i.test(attr(m[0], "rel") || "")).length;
    return {
      file: path.relative(ROOT, f).replace(/\\/g, "/"),
      route: toRoute(f),
      robots: content("robots"),
      robotsTags: get("robots"),
      googlebot: content("googlebot"),
      bingbot: content("bingbot"),
      canonical: canon,
      title,
      jsonld,
      hrefs,
      relNofollow,
      xrobotsInHtml: /x-robots/i.test(html),
    };
  });

const dirs = new Set(pages.map((p) => p.route));
const manifest = JSON.parse(fs.readFileSync(path.join(ROOT, "docs/seo/route-manifest.json"), "utf8"));
const manifestRoutes = manifest.routes.map((r) => r.route);
const norm = (r) => (r === "/" ? "/" : r.replace(/\/?$/, "/"));

const isNoindexish = (p) => p.robots.concat(p.googlebot, p.bingbot).some((c) => /noindex|none|nofollow/i.test(c || ""));
const noindexPages = pages.filter((p) => p.robots.concat(p.googlebot, p.bingbot).some((c) => /noindex|\bnone\b/i.test(c || "")));
const nofollowPages = pages.filter((p) => p.robots.concat(p.googlebot, p.bingbot).some((c) => /nofollow/i.test(c || "")));
const robotsAny = pages.filter(isNoindexish);
const noRobotsTag = pages.filter((p) => p.robots.length === 0);
const explicitIndex = pages.filter((p) => p.robots.length > 0 && !p.robots.some((c) => /noindex|none/i.test(c || "")));

const selfCanon = (p) => {
  const expect = ORIGIN + p.route;
  return p.canonical.length === 1 && p.canonical[0] === expect;
};
const canonDiff = pages.filter((p) => p.canonical.length > 0 && !selfCanon(p));
const canonMissing = pages.filter((p) => p.canonical.length === 0);
const canonMulti = pages.filter((p) => p.canonical.length > 1);

// sitemap
const smPath = path.join(OUT, "sitemap.xml");
const smExists = fs.existsSync(smPath);
const sm = smExists ? fs.readFileSync(smPath, "utf8") : "";
const smLocs = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const smRoutes = new Set(smLocs.map((u) => u.replace(ORIGIN, "")));

// route cross check: html routes (normalized) vs manifest
const htmlRoutes = pages.map((p) => p.route);
const inManifestNotHtml = manifestRoutes.map(norm).filter((r) => !htmlRoutes.includes(r));
const inHtmlNotManifest = htmlRoutes.filter((r) => !manifestRoutes.map(norm).includes(r));

// inbound links
const indexableSet = new Set(pages.filter((p) => !noindexPages.includes(p)).map((p) => p.route));
const inbound = {};
for (const n of noindexPages) inbound[n.route] = { total: 0, fromIndexable: 0, sources: [] };
for (const p of pages) {
  for (const h of p.hrefs) {
    let t = h.replace(ORIGIN, "").split("#")[0].split("?")[0];
    if (!t.startsWith("/")) continue;
    t = norm(t);
    if (inbound[t] && p.route !== t) {
      inbound[t].total++;
      if (indexableSet.has(p.route)) inbound[t].fromIndexable++;
      inbound[t].sources.push(p.route);
    }
  }
}

const out = {
  totals: {
    htmlFiles: pages.length,
    withRobotsTag: pages.length - noRobotsTag.length,
    noRobotsTag: noRobotsTag.length,
    explicitIndex: explicitIndex.length,
    noindex: noindexPages.length,
    nofollow: nofollowPages.length,
    anyNoindexNoneNofollow: robotsAny.length,
    canonicalDifferent: canonDiff.length,
    canonicalMissing: canonMissing.length,
    canonicalMulti: canonMulti.length,
    jsonldPages: pages.filter((p) => p.jsonld > 0).length,
    pagesWithRelNofollowAnchors: pages.filter((p) => p.relNofollow > 0).length,
    pagesWithXRobotsInHtml: pages.filter((p) => p.xrobotsInHtml).length,
    sitemapExists: smExists,
    sitemapLocs: smLocs.length,
    manifestRoutes: manifestRoutes.length,
  },
  distinctRobotsValues: [...new Set(pages.flatMap((p) => p.robots))],
  distinctRobotsTagText: [...new Set(pages.flatMap((p) => p.robotsTags))],
  noindexPages: noindexPages.map((p) => ({
    route: p.route, file: p.file, robotsTags: p.robotsTags, googlebot: p.googlebot, bingbot: p.bingbot,
    canonical: p.canonical, title: p.title, jsonld: p.jsonld,
    inSitemap: smRoutes.has(p.route), inbound: inbound[p.route],
  })),
  canonDiff: canonDiff.map((p) => ({ route: p.route, canonical: p.canonical })),
  canonMissing: canonMissing.map((p) => ({ route: p.route, file: p.file })),
  canonMulti: canonMulti.map((p) => ({ route: p.route, canonical: p.canonical })),
  inManifestNotHtml, inHtmlNotManifest,
  sitemapNotInHtml: [...smRoutes].filter((r) => !htmlRoutes.includes(r)),
  indexableNotInSitemap: pages.filter((p) => !noindexPages.includes(p) && !smRoutes.has(p.route)).map((p) => ({ route: p.route, file: p.file, title: p.title, robots: p.robots })),
  noindexInSitemap: noindexPages.filter((p) => smRoutes.has(p.route)).map((p) => p.route),
  rows: pages.map((p) => ({ route: p.route, robots: p.robots.join(" | "), googlebot: p.googlebot.join(" | "), bingbot: p.bingbot.join(" | "), canonical: p.canonical.join(" | "), title: p.title })),
};
fs.writeFileSync(process.argv[2], JSON.stringify(out, null, 1));
console.log(JSON.stringify({ totals: out.totals, distinctRobotsValues: out.distinctRobotsValues, distinctRobotsTagText: out.distinctRobotsTagText, noindexPages: out.noindexPages, inManifestNotHtml, inHtmlNotManifest, sitemapNotInHtml: out.sitemapNotInHtml, indexableNotInSitemap: out.indexableNotInSitemap, canonDiff: out.canonDiff, canonMissing: out.canonMissing, canonMulti: out.canonMulti }, null, 1));
```

## Appendix C: every HTML file in out/ (route, robots, googlebot, bingbot, canonical, title)

| Route | robots | googlebot | bingbot | canonical | title |
|-|-|-|-|-|-|
| /404/ | noindex | (none) | (none) | (none) | 404: This page could not be found. |
| /404.html | noindex | (none) | (none) | (none) | 404: This page could not be found. |
| /about/ | (none) | (none) | (none) | https://redcarpetplumbing.com/about/ | About Red Carpet Plumbing / Las Vegas Plumbing Company |
| /backflow-prevention/ | (none) | (none) | (none) | https://redcarpetplumbing.com/backflow-prevention/ | Backflow Prevention Services in Las Vegas, NV |
| /boulder-city/drain-cleaning/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/boulder-city/drain-cleaning/ | Drain Cleaning in Boulder City, NV / Red Carpet Plumbing |
| /boulder-city/emergency-plumbing/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/boulder-city/emergency-plumbing/ | Emergency Plumbing in Boulder City, NV / Red Carpet Plumbing |
| /boulder-city/leak-detection-repair/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/boulder-city/leak-detection-repair/ | Leak Detection and Repair in Boulder City, NV |
| /boulder-city/water-heater-repair-installation/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/boulder-city/water-heater-repair-installation/ | Water Heater Repair and Installation in Boulder City, NV |
| /boulder-city-plumbing-services/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/boulder-city-plumbing-services/ | Plumbing Services in Boulder City, NV / Red Carpet Plumbing |
| /commercial-plumbing/ | (none) | (none) | (none) | https://redcarpetplumbing.com/commercial-plumbing/ | Commercial Plumbing in Las Vegas, NV / Red Carpet Plumbing |
| /contact/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/contact/ | Contact a Las Vegas Plumber / Red Carpet Plumbing |
| /drain-cleaning/ | (none) | (none) | (none) | https://redcarpetplumbing.com/drain-cleaning/ | Drain Cleaning in Las Vegas, NV / Red Carpet Plumbing |
| /emergency-plumbing/ | (none) | (none) | (none) | https://redcarpetplumbing.com/emergency-plumbing/ | Emergency Plumber in Las Vegas, NV / Red Carpet Plumbing |
| /enterprise/commercial-plumbing/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/enterprise/commercial-plumbing/ | Commercial Plumbing in Enterprise, NV / Red Carpet Plumbing |
| /enterprise/drain-cleaning/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/enterprise/drain-cleaning/ | Drain Cleaning in Enterprise, NV / Red Carpet Plumbing |
| /enterprise/emergency-plumbing/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/enterprise/emergency-plumbing/ | Emergency Plumbing in Enterprise, NV / Red Carpet Plumbing |
| /enterprise/leak-detection-repair/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/enterprise/leak-detection-repair/ | Leak Detection and Repair in Enterprise, NV |
| /enterprise/repiping/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/enterprise/repiping/ | Repiping Services in Enterprise, NV / Red Carpet Plumbing |
| /enterprise/sewer-line-services/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/enterprise/sewer-line-services/ | Sewer Line Services in Enterprise, NV / Red Carpet Plumbing |
| /enterprise/slab-leak-detection-repair/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/enterprise/slab-leak-detection-repair/ | Slab Leak Detection and Repair in Enterprise, NV |
| /enterprise/water-heater-repair-installation/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/enterprise/water-heater-repair-installation/ | Water Heater Repair and Installation in Enterprise, NV |
| /enterprise-plumbing-services/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/enterprise-plumbing-services/ | Plumbing Services in Enterprise, NV / Red Carpet Plumbing |
| /faucet-sink-repair-installation/ | (none) | (none) | (none) | https://redcarpetplumbing.com/faucet-sink-repair-installation/ | Faucet and Sink Repair and Installation in Las Vegas, NV |
| /garbage-disposal-repair-installation/ | (none) | (none) | (none) | https://redcarpetplumbing.com/garbage-disposal-repair-installation/ | Garbage Disposal Repair and Installation in Las Vegas, NV |
| /gas-line-plumbing/ | (none) | (none) | (none) | https://redcarpetplumbing.com/gas-line-plumbing/ | Gas Line Plumbing in Las Vegas, NV / Red Carpet Plumbing |
| /green-valley/drain-cleaning/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/green-valley/drain-cleaning/ | Drain Cleaning in Green Valley, NV / Red Carpet Plumbing |
| /green-valley/emergency-plumbing/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/green-valley/emergency-plumbing/ | Emergency Plumbing in Green Valley, NV / Red Carpet Plumbing |
| /green-valley/faucet-sink-repair-installation/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/green-valley/faucet-sink-repair-installation/ | Faucet and Sink Repair and Installation in Green Valley, NV |
| /green-valley/leak-detection-repair/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/green-valley/leak-detection-repair/ | Leak Detection and Repair in Green Valley, NV |
| /green-valley/repiping/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/green-valley/repiping/ | Repiping Services in Green Valley, NV / Red Carpet Plumbing |
| /green-valley/slab-leak-detection-repair/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/green-valley/slab-leak-detection-repair/ | Slab Leak Detection and Repair in Green Valley, NV |
| /green-valley/toilet-repair-installation/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/green-valley/toilet-repair-installation/ | Toilet Repair and Installation in Green Valley, NV |
| /green-valley/water-heater-repair-installation/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/green-valley/water-heater-repair-installation/ | Water Heater Repair and Installation in Green Valley, NV |
| /green-valley-plumbing-services/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/green-valley-plumbing-services/ | Plumbing Services in Green Valley, NV / Red Carpet Plumbing |
| /henderson/backflow-prevention/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/henderson/backflow-prevention/ | Backflow Prevention Services in Henderson, NV |
| /henderson/commercial-plumbing/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/henderson/commercial-plumbing/ | Commercial Plumbing in Henderson, NV / Red Carpet Plumbing |
| /henderson/drain-cleaning/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/henderson/drain-cleaning/ | Drain Cleaning in Henderson, NV / Red Carpet Plumbing |
| /henderson/emergency-plumbing/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/henderson/emergency-plumbing/ | Emergency Plumbing in Henderson, NV / Red Carpet Plumbing |
| /henderson/faucet-sink-repair-installation/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/henderson/faucet-sink-repair-installation/ | Faucet and Sink Repair and Installation in Henderson, NV |
| /henderson/garbage-disposal-repair-installation/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/henderson/garbage-disposal-repair-installation/ | Garbage Disposal Repair and Installation in Henderson, NV |
| /henderson/gas-line-plumbing/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/henderson/gas-line-plumbing/ | Gas Line Plumbing in Henderson, NV / Red Carpet Plumbing |
| /henderson/leak-detection-repair/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/henderson/leak-detection-repair/ | Leak Detection and Repair in Henderson, NV |
| /henderson/repiping/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/henderson/repiping/ | Repiping Services in Henderson, NV / Red Carpet Plumbing |
| /henderson/sewer-line-services/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/henderson/sewer-line-services/ | Sewer Line Services in Henderson, NV / Red Carpet Plumbing |
| /henderson/slab-leak-detection-repair/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/henderson/slab-leak-detection-repair/ | Slab Leak Detection and Repair in Henderson, NV |
| /henderson/toilet-repair-installation/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/henderson/toilet-repair-installation/ | Toilet Repair and Installation in Henderson, NV |
| /henderson/water-heater-repair-installation/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/henderson/water-heater-repair-installation/ | Water Heater Repair and Installation in Henderson, NV |
| /henderson/water-pipe-repair-replacement/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/henderson/water-pipe-repair-replacement/ | Water Pipe Repair and Replacement in Henderson, NV |
| /henderson-plumbing-services/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/henderson-plumbing-services/ | Plumbing Services in Henderson, NV / Red Carpet Plumbing |
| / | index, follow | (none) | (none) | https://redcarpetplumbing.com/ | Plumbing Company in Las Vegas, NV / Red Carpet Plumbing |
| /lake-las-vegas/drain-cleaning/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/lake-las-vegas/drain-cleaning/ | Drain Cleaning in Lake Las Vegas, NV / Red Carpet Plumbing |
| /lake-las-vegas/emergency-plumbing/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/lake-las-vegas/emergency-plumbing/ | Emergency Plumbing in Lake Las Vegas, NV |
| /lake-las-vegas/leak-detection-repair/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/lake-las-vegas/leak-detection-repair/ | Leak Detection and Repair in Lake Las Vegas, NV |
| /lake-las-vegas/slab-leak-detection-repair/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/lake-las-vegas/slab-leak-detection-repair/ | Slab Leak Detection and Repair in Lake Las Vegas, NV |
| /lake-las-vegas/water-heater-repair-installation/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/lake-las-vegas/water-heater-repair-installation/ | Water Heater Repair and Installation in Lake Las Vegas, NV |
| /lake-las-vegas-plumbing-services/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/lake-las-vegas-plumbing-services/ | Plumbing Services in Lake Las Vegas, NV |
| /las-vegas/backflow-prevention/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/las-vegas/backflow-prevention/ | Backflow Prevention Services in Las Vegas, NV |
| /las-vegas/commercial-plumbing/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/las-vegas/commercial-plumbing/ | Commercial Plumbing in Las Vegas, NV / Red Carpet Plumbing |
| /las-vegas/drain-cleaning/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/las-vegas/drain-cleaning/ | Drain Cleaning in Las Vegas, NV / Red Carpet Plumbing |
| /las-vegas/emergency-plumbing/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/las-vegas/emergency-plumbing/ | Emergency Plumbing in Las Vegas, NV / Red Carpet Plumbing |
| /las-vegas/faucet-sink-repair-installation/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/las-vegas/faucet-sink-repair-installation/ | Faucet and Sink Repair and Installation in Las Vegas, NV |
| /las-vegas/garbage-disposal-repair-installation/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/las-vegas/garbage-disposal-repair-installation/ | Garbage Disposal Repair and Installation in Las Vegas, NV |
| /las-vegas/gas-line-plumbing/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/las-vegas/gas-line-plumbing/ | Gas Line Plumbing in Las Vegas, NV / Red Carpet Plumbing |
| /las-vegas/leak-detection-repair/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/las-vegas/leak-detection-repair/ | Leak Detection and Repair in Las Vegas, NV |
| /las-vegas/repiping/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/las-vegas/repiping/ | Repiping Services in Las Vegas, NV / Red Carpet Plumbing |
| /las-vegas/sewer-line-services/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/las-vegas/sewer-line-services/ | Sewer Line Services in Las Vegas, NV / Red Carpet Plumbing |
| /las-vegas/slab-leak-detection-repair/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/las-vegas/slab-leak-detection-repair/ | Slab Leak Detection and Repair in Las Vegas, NV |
| /las-vegas/toilet-repair-installation/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/las-vegas/toilet-repair-installation/ | Toilet Repair and Installation in Las Vegas, NV |
| /las-vegas/video-camera-plumbing-inspections/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/las-vegas/video-camera-plumbing-inspections/ | Video Camera Plumbing Inspections in Las Vegas, NV |
| /las-vegas/water-heater-repair-installation/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/las-vegas/water-heater-repair-installation/ | Water Heater Repair and Installation in Las Vegas, NV |
| /las-vegas/water-pipe-repair-replacement/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/las-vegas/water-pipe-repair-replacement/ | Water Pipe Repair and Replacement in Las Vegas, NV |
| /las-vegas-plumbing-services/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/las-vegas-plumbing-services/ | Plumbing Services in Las Vegas, NV / Red Carpet Plumbing |
| /leak-detection-repair/ | (none) | (none) | (none) | https://redcarpetplumbing.com/leak-detection-repair/ | Leak Detection and Repair in Las Vegas, NV |
| /north-las-vegas/aliante-area/drain-cleaning/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/north-las-vegas/aliante-area/drain-cleaning/ | Drain Cleaning in Aliante, North Las Vegas |
| /north-las-vegas/aliante-area/emergency-plumbing/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/north-las-vegas/aliante-area/emergency-plumbing/ | Emergency Plumbing in Aliante, North Las Vegas |
| /north-las-vegas/aliante-area/leak-detection-repair/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/north-las-vegas/aliante-area/leak-detection-repair/ | Leak Detection and Repair in Aliante, North Las Vegas |
| /north-las-vegas/aliante-area/slab-leak-detection-repair/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/north-las-vegas/aliante-area/slab-leak-detection-repair/ | Slab Leak Detection and Repair in Aliante, North Las Vegas |
| /north-las-vegas/aliante-area/water-heater-repair-installation/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/north-las-vegas/aliante-area/water-heater-repair-installation/ | Water Heater Repair and Installation in Aliante, NV |
| /north-las-vegas/aliante-area-plumbing/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/north-las-vegas/aliante-area-plumbing/ | Plumbing Services in Aliante, North Las Vegas |
| /north-las-vegas/commercial-plumbing/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/north-las-vegas/commercial-plumbing/ | Commercial Plumbing in North Las Vegas, NV |
| /north-las-vegas/drain-cleaning/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/north-las-vegas/drain-cleaning/ | Drain Cleaning in North Las Vegas, NV / Red Carpet Plumbing |
| /north-las-vegas/emergency-plumbing/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/north-las-vegas/emergency-plumbing/ | Emergency Plumbing in North Las Vegas, NV |
| /north-las-vegas/garbage-disposal-repair-installation/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/north-las-vegas/garbage-disposal-repair-installation/ | Garbage Disposal Repair and Installation in North Las Vegas |
| /north-las-vegas/leak-detection-repair/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/north-las-vegas/leak-detection-repair/ | Leak Detection and Repair in North Las Vegas, NV |
| /north-las-vegas/repiping/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/north-las-vegas/repiping/ | Repiping Services in North Las Vegas, NV |
| /north-las-vegas/sewer-line-services/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/north-las-vegas/sewer-line-services/ | Sewer Line Services in North Las Vegas, NV |
| /north-las-vegas/slab-leak-detection-repair/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/north-las-vegas/slab-leak-detection-repair/ | Slab Leak Detection and Repair in North Las Vegas, NV |
| /north-las-vegas/toilet-repair-installation/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/north-las-vegas/toilet-repair-installation/ | Toilet Repair and Installation in North Las Vegas, NV |
| /north-las-vegas/water-heater-repair-installation/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/north-las-vegas/water-heater-repair-installation/ | Water Heater Repair and Installation in North Las Vegas, NV |
| /north-las-vegas/water-pipe-repair-replacement/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/north-las-vegas/water-pipe-repair-replacement/ | Water Pipe Repair and Replacement in North Las Vegas, NV |
| /north-las-vegas-plumbing-services/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/north-las-vegas-plumbing-services/ | Plumbing Services in North Las Vegas, NV |
| /paradise/backflow-prevention/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/paradise/backflow-prevention/ | Backflow Prevention Services in Paradise, NV |
| /paradise/commercial-plumbing/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/paradise/commercial-plumbing/ | Commercial Plumbing in Paradise, NV / Red Carpet Plumbing |
| /paradise/drain-cleaning/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/paradise/drain-cleaning/ | Drain Cleaning in Paradise, NV / Red Carpet Plumbing |
| /paradise/emergency-plumbing/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/paradise/emergency-plumbing/ | Emergency Plumber in Paradise, NV / Red Carpet Plumbing |
| /paradise/gas-line-plumbing/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/paradise/gas-line-plumbing/ | Gas Line Plumbing in Paradise, NV / Red Carpet Plumbing |
| /paradise/leak-detection-repair/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/paradise/leak-detection-repair/ | Leak Detection and Repair in Paradise, NV |
| /paradise/sewer-line-services/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/paradise/sewer-line-services/ | Sewer Line Services in Paradise, NV / Red Carpet Plumbing |
| /paradise/water-heater-repair-installation/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/paradise/water-heater-repair-installation/ | Water Heater Repair and Installation in Paradise, NV |
| /paradise-plumbing-services/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/paradise-plumbing-services/ | Plumbing Services in Paradise, NV / Red Carpet Plumbing |
| /plumbing-fixture-repair-replacement-installation/ | (none) | (none) | (none) | https://redcarpetplumbing.com/plumbing-fixture-repair-replacement-installation/ | Plumbing Fixture Repair and Installation in Las Vegas, NV |
| /plumbing-services/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/plumbing-services/ | Plumbing Services in Las Vegas, NV / Red Carpet Plumbing |
| /privacy-policy/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/privacy-policy/ | Privacy Policy / Red Carpet Plumbing |
| /repiping/ | (none) | (none) | (none) | https://redcarpetplumbing.com/repiping/ | Repiping Services in Las Vegas, NV / Red Carpet Plumbing |
| /service-areas/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/service-areas/ | Plumbing Service Areas in Las Vegas Valley |
| /sewer-line-services/ | (none) | (none) | (none) | https://redcarpetplumbing.com/sewer-line-services/ | Sewer Line Services in Las Vegas, NV / Red Carpet Plumbing |
| /sitemap/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/sitemap/ | Sitemap / Red Carpet Plumbing |
| /slab-leak-detection-repair/ | (none) | (none) | (none) | https://redcarpetplumbing.com/slab-leak-detection-repair/ | Slab Leak Detection and Repair in Las Vegas, NV |
| /spring-valley/commercial-plumbing/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/spring-valley/commercial-plumbing/ | Commercial Plumbing in Spring Valley, NV |
| /spring-valley/drain-cleaning/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/spring-valley/drain-cleaning/ | Drain Cleaning in Spring Valley, NV / Red Carpet Plumbing |
| /spring-valley/emergency-plumbing/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/spring-valley/emergency-plumbing/ | Emergency Plumbing in Spring Valley, NV |
| /spring-valley/leak-detection-repair/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/spring-valley/leak-detection-repair/ | Leak Detection and Repair in Spring Valley, NV |
| /spring-valley/repiping/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/spring-valley/repiping/ | Repiping Services in Spring Valley, NV / Red Carpet Plumbing |
| /spring-valley/sewer-line-services/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/spring-valley/sewer-line-services/ | Sewer Line Services in Spring Valley, NV |
| /spring-valley/slab-leak-detection-repair/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/spring-valley/slab-leak-detection-repair/ | Slab Leak Detection and Repair in Spring Valley, NV |
| /spring-valley/water-heater-repair-installation/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/spring-valley/water-heater-repair-installation/ | Water Heater Repair and Installation in Spring Valley, NV |
| /spring-valley-plumbing-services/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/spring-valley-plumbing-services/ | Plumbing Services in Spring Valley, NV / Red Carpet Plumbing |
| /summerlin/drain-cleaning/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/summerlin/drain-cleaning/ | Drain Cleaning in Summerlin, NV / Red Carpet Plumbing |
| /summerlin/emergency-plumbing/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/summerlin/emergency-plumbing/ | Emergency Plumber in Summerlin, NV / Red Carpet Plumbing |
| /summerlin/faucet-sink-repair-installation/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/summerlin/faucet-sink-repair-installation/ | Faucet and Sink Repair and Installation in Summerlin, NV |
| /summerlin/garbage-disposal-repair-installation/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/summerlin/garbage-disposal-repair-installation/ | Garbage Disposal Repair and Installation in Summerlin, NV |
| /summerlin/gas-line-plumbing/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/summerlin/gas-line-plumbing/ | Gas Line Plumbing in Summerlin, NV / Red Carpet Plumbing |
| /summerlin/leak-detection-repair/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/summerlin/leak-detection-repair/ | Leak Detection and Repair in Summerlin, NV |
| /summerlin/repiping/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/summerlin/repiping/ | Repiping Services in Summerlin, NV / Red Carpet Plumbing |
| /summerlin/sewer-line-services/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/summerlin/sewer-line-services/ | Sewer Line Services in Summerlin, NV / Red Carpet Plumbing |
| /summerlin/slab-leak-detection-repair/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/summerlin/slab-leak-detection-repair/ | Slab Leak Detection and Repair in Summerlin, NV |
| /summerlin/toilet-repair-installation/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/summerlin/toilet-repair-installation/ | Toilet Repair and Installation in Summerlin, NV |
| /summerlin/water-heater-repair-installation/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/summerlin/water-heater-repair-installation/ | Water Heater Repair and Installation in Summerlin, NV |
| /summerlin/water-pipe-repair-replacement/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/summerlin/water-pipe-repair-replacement/ | Water Pipe Repair and Replacement in Summerlin, NV |
| /summerlin-plumbing-services/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/summerlin-plumbing-services/ | Plumbing Services in Summerlin, NV / Red Carpet Plumbing |
| /terms-and-conditions/ | index, follow | (none) | (none) | https://redcarpetplumbing.com/terms-and-conditions/ | Terms and Conditions / Red Carpet Plumbing |
| /thank-you/ | noindex, nofollow | (none) | (none) | (none) | Thank You / Red Carpet Plumbing |
| /toilet-repair-installation/ | (none) | (none) | (none) | https://redcarpetplumbing.com/toilet-repair-installation/ | Toilet Repair and Installation in Las Vegas, NV |
| /trenchless-piping/ | (none) | (none) | (none) | https://redcarpetplumbing.com/trenchless-piping/ | Trenchless Piping Services in Las Vegas, NV |
| /video-camera-plumbing-inspections/ | (none) | (none) | (none) | https://redcarpetplumbing.com/video-camera-plumbing-inspections/ | Video Camera Plumbing Inspections in Las Vegas, NV |
| /water-heater-repair-installation/ | (none) | (none) | (none) | https://redcarpetplumbing.com/water-heater-repair-installation/ | Water Heater Repair and Installation in Las Vegas, NV |
| /water-meter-pressure-regulator-services/ | (none) | (none) | (none) | https://redcarpetplumbing.com/water-meter-pressure-regulator-services/ | Water Meter and Pressure Regulator Services in Las Vegas, NV |
| /water-pipe-repair-replacement/ | (none) | (none) | (none) | https://redcarpetplumbing.com/water-pipe-repair-replacement/ | Water Pipe Repair and Replacement in Las Vegas, NV |
| /_not-found/ | noindex | (none) | (none) | (none) | 404: This page could not be found. |
