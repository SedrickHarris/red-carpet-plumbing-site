# Pages.dev Noindex Header (Gate 2, Plan and Confirm Only)

Date: 2026-10-28. Local HEAD: 948771f. This is a plan. public/_headers was not created, nothing was built for deploy, and nothing was staged, committed, pushed, or deployed. The only file created in this gate is this plan.

Text handling: report text has no em dashes or double hyphens. In embedded raw output, em dashes are shown as [em dash] and double hyphens as [dbl-hyphen]. Nothing else was altered.

Decision recorded from Sedrick: keep pages.dev for staging and lead-form review, add a host-scoped noindex header, reject a redirect. Prior findings (pages-dev-indexing-report.md): pages.dev serves full indexable pages, canonicals point to production, no X-Robots-Tag on either host, no public/_headers.

## 1. Summary

The planned file has two rules, each scoped to an absolute https URL on a pages.dev host. The Cloudflare Headers docs confirm the syntax elements used (absolute https URLs, :placeholder names, indented header lines, a 100 rule limit, a 2,000 character line limit). The docs' own example table shows host-scoped pages.dev rules not applying to a custom domain, which is the property that protects production. public/_headers is not gitignored (out/ is). The existing build already copies public/ files into out/, so out/_headers should be produced, but that exact file is UNVERIFIED until a build in Gate 3. No script or lint step reads public/ in a way a _headers file could break; check-sitemap-sync.mjs only reads index.html files and sitemap.xml. Two real risks need attention: the rule cannot be tested for non-matching on production before deploy (the check must run immediately after), and git is set to core.autocrlf=true, so line endings of the deployed file need confirming. There are two small housekeeping discrepancies in Section 9.

## 2. Syntax check against Cloudflare docs

Source: Cloudflare Pages docs, page "Headers" (https://developers.cloudflare.com/pages/configuration/headers/), shown as last updated Aug 25, 2026, fetched 2026-10-28. The page was read through a fetch tool that returns a summary, not the raw HTML, so quotes below could not be checked character by character. Treat verbatim wording as UNVERIFIED and re-read the page before Gate 3 if you need exact text.

One short quoted line: "You may define up to 100 header rules."

The rest is paraphrased, not quoted:

| Item | What the docs say (paraphrased) | Status for the planned file |
|-|-|-|
| File location | In the static asset directory of the project. For frameworks, public/ or static/ is a suitable place. Without a framework, the build output directory. | Matches. public/ is copied to out/ (Section 3). UNVERIFIED: which build output directory the Cloudflare project is configured to publish (the repo has no wrangler config; the Next export default is out/). |
| Absolute URLs | Must begin with https. A port is not supported. | Both rules begin with https://, no port. Confirmed. |
| Placeholders | Defined as :placeholder_name. A placeholder matches any characters except the delimiter, and in a host the delimiter is a period. Each named placeholder can be referenced only once (within a rule). | Each rule uses each name once. A placeholder matches one host label, so :project covers one label and :version.:project covers two. Confirmed by the docs wording. |
| Docs example | The docs show an X-Robots-Tag: noindex block for https://:project.pages.dev/* and for https://:version.:project.pages.dev/*, the same two rules as planned. | Confirmed. The example sits under a heading that mentions workers.dev while the rules target pages.dev. This looks like a doc heading oddity and was not resolved. |
| Limits | Up to 100 header rules. Each line has a 2,000 character limit. | Planned file has 2 rules and every line is under 40 characters. Confirmed within limits. |
| Indentation | Header lines must be an indented list under the URL. The docs do not say spaces or tabs or how many. Their examples mix tabs and two-space indents. | The planned file uses two spaces. UNVERIFIED whether any indentation style is rejected; the docs do not say. |
| Invalid lines | Not stated. | UNVERIFIED how Cloudflare treats a malformed line. |
| Overlap | A request matching several rules inherits all their headers. A header set twice has its values joined with a comma. Redirects are applied before headers. | The two planned URL patterns cannot match the same host (one label vs two labels), so no double header. No _redirects file exists. |
| Comments | An example begins with a # comment. | Comments appear allowed. The plan uses none. |
| Custom domains | Not stated in prose. The docs' example table shows an unscoped rule applying to a custom domain URL and a host-scoped https://myproject.pages.dev/* rule not applying to that custom domain URL. | Supported by the docs example table. There is no explicit sentence saying host-scoped rules skip custom domains. Label: documented by example, not by statement. Final confirmation is the production curl check after deploy. |
| Functions | Headers in _headers are not applied to responses generated by Pages Functions. | /api/lead responses are unaffected. Not an indexing concern. |

## 3. Static export behavior and gitignore (raw output)

Section 3 output, part 1 of 2 (lines 1 to 60)

```text
$ git check-ignore -v public/_headers out/_headers public/_redirects
.gitignore:15:out/	out/_headers
[exit=0]

$ git check-ignore -v public/robots.txt (control, expect no output)
[exit=1]

$ ls public (top level)
total 24
drwxr-xr-x 1 Welcome 197121    0 Jun  8 14:36 .
drwxr-xr-x 1 Welcome 197121    0 Oct 28 14:55 ..
-rw-r[dbl-hyphen]r[dbl-hyphen] 1 Welcome 197121  391 Jun  8 14:36 file.svg
-rw-r[dbl-hyphen]r[dbl-hyphen] 1 Welcome 197121 1035 Jun  8 14:36 globe.svg
drwxr-xr-x 1 Welcome 197121    0 Aug 31 08:26 images
-rw-r[dbl-hyphen]r[dbl-hyphen] 1 Welcome 197121 1375 Jun  8 14:36 next.svg
-rw-r[dbl-hyphen]r[dbl-hyphen] 1 Welcome 197121   91 Oct 13 19:34 robots.txt
-rw-r[dbl-hyphen]r[dbl-hyphen] 1 Welcome 197121  128 Jun  8 14:36 vercel.svg
-rw-r[dbl-hyphen]r[dbl-hyphen] 1 Welcome 197121  385 Jun  8 14:36 window.svg

$ compare public files with out copies (cmp)
robots.txt: identical in out/
file.svg: identical in out/
globe.svg: identical in out/

$ ls out (top level files, no dirs)
404/
404.html
__next.__PAGE__.txt
__next._full.txt
__next._head.txt
__next._index.txt
__next._tree.txt
_next/
_not-found/
about/
backflow-prevention/
boulder-city/
boulder-city-plumbing-services/
commercial-plumbing/
contact/
drain-cleaning/
emergency-plumbing/
enterprise/
enterprise-plumbing-services/
faucet-sink-repair-installation/
favicon.ico
file.svg
garbage-disposal-repair-installation/
gas-line-plumbing/
globe.svg
green-valley/
green-valley-plumbing-services/
henderson/
henderson-plumbing-services/
images/
index.html
index.txt
lake-las-vegas/
lake-las-vegas-plumbing-services/
las-vegas/
```

Section 3 output, part 2 of 2 (lines 61 to 115)

```text
las-vegas-plumbing-services/
leak-detection-repair/
manifest.webmanifest
next.svg
north-las-vegas/
north-las-vegas-plumbing-services/
opengraph-image.jpg
paradise/
paradise-plumbing-services/
plumbing-fixture-repair-replacement-installation/
plumbing-services/
privacy-policy/
repiping/
robots.txt
service-areas/
sewer-line-services/
sitemap/
sitemap.xml
slab-leak-detection-repair/
spring-valley/
spring-valley-plumbing-services/
summerlin/
summerlin-plumbing-services/
terms-and-conditions/
thank-you/
toilet-repair-installation/
trenchless-piping/
twitter-image.jpg
vercel.svg
video-camera-plumbing-inspections/
water-heater-repair-installation/
water-meter-pressure-regulator-services/
water-pipe-repair-replacement/
window.svg

$ rg -n "output|distDir|export" next.config.ts
4:  // Static export required for Cloudflare Pages static deployment.
6:  output: "export",
8:  // Required when `output: "export"` is set [em dash] Next.js Image Optimization
9:  // is a runtime feature and cannot run in a static export.
15:export default nextConfig;

$ git ls-files public | head (tracked public files, first 12)
public/file.svg
public/globe.svg
public/images/brand/favicon/android-chrome-192x192.png
public/images/brand/favicon/android-chrome-512x512.png
public/images/brand/favicon/apple-touch-icon-180x180.png
public/images/brand/favicon/favicon-16x16.png
public/images/brand/favicon/favicon-32x32.png
public/images/brand/favicon/favicon-48x48.png
public/images/brand/favicon/favicon-source.png
public/images/brand/favicon/site-icon-512x512.png
public/images/brand/logo/red-carpet-plumbing-logo.png
public/images/company/vehicles/red-carpet-plumbing-las-vegas-service-van-front-three-quarter-close.webp
```


Reading the output:
- git check-ignore printed only `.gitignore:15:out/	out/_headers`. So out/_headers would be ignored (correct, it is a build artifact) and public/_headers and public/_redirects are NOT ignored. The control check for public/robots.txt printed nothing (exit 1), as expected for a tracked, non-ignored file.
- next.config.ts line 6 sets `output: "export"`, which writes to out/. public/robots.txt, public/file.svg and public/globe.svg are byte-identical in out/ (cmp), and out/ has the top level files robots.txt, file.svg, globe.svg, next.svg, vercel.svg, window.svg and an images/ directory, all of which exist in public/. So public/ is copied into out/ at build.
- Not shown by this evidence: that a file named _headers specifically is copied. No _headers exists to test, and creating one is outside this gate. UNVERIFIED until the Gate 3 build shows out/_headers. Verify with: `ls -la out/_headers` and `cat out/_headers` after the build.
- out/_headers would be the file that is deployed only if Cloudflare publishes out/. The Cloudflare project's build output directory setting was not visible from the repo. UNVERIFIED.

## 4. Production safety

Why the rules should not match redcarpetplumbing.com:
1. Both URL patterns start with https:// and end the host in .pages.dev. Host matching is on the full hostname. redcarpetplumbing.com does not end in .pages.dev, so neither pattern matches it.
2. A placeholder cannot span a period, so the patterns cannot be stretched across a differently shaped host.
3. The docs example table shows a host-scoped pages.dev rule not applying to a custom domain request.

What could go wrong, and effect if so:

| # | Failure | Effect | Likelihood and notes |
|-|-|-|-|
| 1 | The host scope is dropped or mistyped into an unscoped path rule such as /* | noindex on the entire production site | Not what is planned. A draft or later edit could cause it. Catch by the immediate production curl check. This is the highest-impact failure. |
| 2 | Missing https:// prefix on a rule | The line is treated as a path or rejected. UNVERIFIED which. May fail open (pages.dev unprotected) or misbehave | Verify the exact bytes before commit. |
| 3 | Typo in pages.dev, in :project, or a placeholder reused within one URL | Rule silently does nothing, or the file is partly ignored (UNVERIFIED) | Fails open: pages.dev stays indexable, production unaffected. Detected by the pages.dev curl check. |
| 4 | Whitespace error: header line not indented, mixed indent, trailing characters, a blank line inside a block | Header line may be ignored or read as a URL. UNVERIFIED, since the docs do not describe invalid lines | Use the exact planned text with two-space indents and a single blank line between blocks. Check with cat -A on out/_headers. |
| 5 | Line endings: git core.autocrlf is true on this machine (raw output in Section 6) and there is no .gitattributes, so the working tree copy may use CRLF while the commit stores LF | If Cloudflare builds from git (LF) this is probably moot. If the deploy uploads a locally built out/ from Windows, CRLF could reach Cloudflare. Whether the parser tolerates CRLF is UNVERIFIED | Confirm the deploy method (Git integration or direct upload; not visible in the repo, UNVERIFIED). Check `cat -A out/_headers` for ^M. |
| 6 | Byte order mark or odd encoding added by an editor | File misread | Write as UTF-8 without BOM. Check with the first bytes of out/_headers. |
| 7 | Cloudflare caches or serves an older file | Header appears late, or rollback appears late | Use a cache-busting query string on checks and read cf-cache-status. |
| 8 | A pages.dev rule matches an unrelated host | Not a real concern: only this project's deployment contains the file | None. |
| 9 | Limits | 2 rules vs a 100 rule limit. Longest line under 40 characters vs a 2,000 limit. | Not a risk. |

Fail-open versus fail-closed: failures 2, 3, 4 and 6 most likely leave pages.dev indexable and production untouched. Failure 1 is the one that can harm production, which is why the production check is required before anything else.

A rule that matches no host cannot be tested locally. The repo's scripts/lead-dev.mjs runs `wrangler pages dev out` on localhost, which would read out/_headers but cannot match a pages.dev host. It might print a parse warning for a malformed line. UNVERIFIED that its parser matches Cloudflare's. At best it is an extra syntax smoke test.

## 5. Other repo effects (raw grep output)

Section 5 output, part 1 of 1 (lines 1 to 49)

```text
$ rg -n "[\"/ ]out[\"/]|outDir|\"out\"|public/|publicDir|readdirSync|readFileSync" scripts seo-automation package.json eslint.config.mjs tsconfig.json postcss.config.mjs app/sitemap.ts lib functions
eslint.config.mjs:12:    "out/**",
scripts\check-sitemap-sync.mjs:2:// Post-build check that out/sitemap.xml and the built pages agree.
scripts\check-sitemap-sync.mjs:4:// Runs as the npm "postbuild" step, after `next build` has written out/.
scripts\check-sitemap-sync.mjs:14:import { readdirSync, readFileSync, existsSync } from "node:fs";
scripts\check-sitemap-sync.mjs:19:const outDir = path.join(repoRoot, "out");
scripts\check-sitemap-sync.mjs:23:if (!existsSync(path.join(outDir, "sitemap.xml"))) {
scripts\check-sitemap-sync.mjs:24:  console.error("check-sitemap-sync: out/sitemap.xml not found. Run the build first.");
scripts\check-sitemap-sync.mjs:28:const sitemapXml = readFileSync(path.join(outDir, "sitemap.xml"), "utf8");
scripts\check-sitemap-sync.mjs:31:// Every index.html under out/, as a route with a trailing slash.
scripts\check-sitemap-sync.mjs:34:  for (const entry of readdirSync(dir, { withFileTypes: true })) {
scripts\check-sitemap-sync.mjs:54:const pages = collectPages(outDir);
scripts\lead-dev.mjs:4:// It never runs wrangler from the repo root. It copies out/ and functions/ into a
scripts\lead-dev.mjs:25:const outDir = process.env.LEAD_DEV_OUT
scripts\lead-dev.mjs:27:  : path.join(repoRoot, "out");
scripts\lead-dev.mjs:51:if (!existsSync(outDir)) stop("out/ not found. Run a build first.");
scripts\lead-dev.mjs:72:cpSync(outDir, path.join(work, "out"), { recursive: true });
scripts\lead-dev.mjs:85:const args = [path.join(repoRoot, "node_modules", "wrangler", "bin", "wrangler.js"), "pages", "dev", "out", "[dbl-hyphen]port", port, "[dbl-hyphen]compatibility-date", "2025-01-01"];
scripts\generate-social-share-image.mjs:23:  "public/images/brand/logo/red-carpet-plumbing-logo.png",
seo-automation\scripts\scan-routes.mjs:12:  "node_modules", ".next", "out", ".git", "dist", "build", ".cache",
[exit=0]

$ rg -n "public|out" package.json eslint.config.mjs tsconfig.json
eslint.config.mjs:12:    "out/**",
[exit=0]

$ rg -n "_headers|_redirects|_routes|_worker" (repo excl node_modules .next out Images)
.\docs\site-os\reports\noindex-audit-report.md:400:$ ls public/_headers public/_redirects public/sitemap.xml app/robots.ts wrangler.toml
.\docs\site-os\reports\noindex-audit-report.md:401:ls: cannot access 'public/_headers': No such file or directory
.\docs\site-os\reports\noindex-audit-report.md:402:ls: cannot access 'public/_redirects': No such file or directory
.\docs\site-os\reports\noindex-audit-report.md:452:$ ls out/_headers out/_redirects
.\docs\site-os\reports\noindex-audit-report.md:453:ls: cannot access 'out/_headers': No such file or directory
.\docs\site-os\reports\noindex-audit-report.md:454:ls: cannot access 'out/_redirects': No such file or directory
.\docs\site-os\reports\noindex-audit-report.md:457:Findings: no public/_headers, no public/_redirects, no app/robots.ts, no public/sitemap.xml, no wrangler.toml, no functions/_middleware.*. The only function is functions/api/lead.ts, which has no hit for robots or x-robots (its full 400-plus-line body is not reproduced; only the header-related grep is shown above). next.config.ts defines no `headers()`, so there is nothing to flag about ineffective custom headers. public/robots.txt and out/robots.txt are identical.
.\docs\site-os\reports\noindex-audit-report.md:862:1. UNVERIFIED: live production response headers. The repo has no _headers file, no middleware, and no wrangler config, but Cloudflare dashboard Transform Rules or Pages settings could add an X-Robots-Tag header outside the repo. To verify: run a header request against the live domain and the pages.dev preview URL, or share the Cloudflare rules.
[exit=0]

$ ls .github .gitattributes .editorconfig
ls: cannot access '.github': No such file or directory
ls: cannot access '.gitattributes': No such file or directory
ls: cannot access '.editorconfig': No such file or directory

$ git config [dbl-hyphen]get core.autocrlf ; git config [dbl-hyphen]get core.eol
true
[exit=0]
[exit=1]

$ rg -n -i "[0-9a-f]{6,}\.red-carpet-plumbing-site|[a-z0-9-]+\.red-carpet-plumbing-site\.pages\.dev" (hash or branch URLs documented in repo)
[exit=1]
```


Reading the output:
- scripts/check-sitemap-sync.mjs (postbuild): reads out/sitemap.xml and walks out/ collecting only files named index.html (line 34 onward). A file named _headers is not index.html and is skipped. No effect.
- scripts/lead-dev.mjs: copies all of out/ (cpSync, line 72) and runs wrangler pages dev. A _headers file would be included. Local host is localhost, so the pages.dev rules do not match and local lead-form tests are unaffected. See the Section 4 note.
- seo-automation/scripts/scan-routes.mjs: ignores out. eslint.config.mjs: ignores out/**. scripts/generate-social-share-image.mjs: reads one logo under public/images only. app/sitemap.ts reads docs/seo/route-manifest.json, not public/. functions/ does not read public/ or out/.
- package.json has no test script and no build step that lists public/ files.
- The only repo mentions of _headers or _redirects are in the report files I wrote. There is no existing reference to rely on.
- No .github directory (no CI workflow in repo), no .gitattributes, no .editorconfig. core.autocrlf is true. No hash or branch URL for red-carpet-plumbing-site.pages.dev is documented anywhere in the repo.

## 6. Verification plan (after deploy, Gate 4)

Run production first, immediately after the deploy is live. Use a cache-busting query on each URL.

### 6.1 Production must have NO X-Robots-Tag

```text
for p in / /drain-cleaning/ /las-vegas/drain-cleaning/ /robots.txt /sitemap.xml; do
  echo "== https://redcarpetplumbing.com${p}?v=1"
  curl -sIL -m 30 "https://redcarpetplumbing.com${p}?v=1" | tr -d '\r' | grep -i -E "^(HTTP/|x-robots-tag|cf-cache-status)"
done
```

Expected: each URL shows HTTP/1.1 200 OK and no x-robots-tag line. Pass: zero x-robots-tag lines on all 5 URLs. Fail: any x-robots-tag line on any production URL. A fail triggers the rollback in Section 7 at once.

### 6.2 Production HTML unchanged from the noindex audit baseline

```text
for p in / /drain-cleaning/ /las-vegas/drain-cleaning/ /thank-you/; do
  echo "== ${p}"
  curl -s -m 30 "https://redcarpetplumbing.com${p}?v=1" | grep -o -i -E '<meta[^>]*name="robots"[^>]*>|<link[^>]*rel="canonical"[^>]*>'
done
```

Baseline (noindex-audit-report.md and live-header-check.md): / has index, follow and canonical https://redcarpetplumbing.com/. /drain-cleaning/ has no robots tag and canonical https://redcarpetplumbing.com/drain-cleaning/. /las-vegas/drain-cleaning/ has index, follow and its own canonical. /thank-you/ has noindex, nofollow and no canonical. Pass: all four match exactly.

### 6.3 pages.dev MUST have the header

```text
for p in / /thank-you/ /drain-cleaning/; do
  echo "== https://red-carpet-plumbing-site.pages.dev${p}?v=1"
  curl -sIL -m 30 "https://red-carpet-plumbing-site.pages.dev${p}?v=1" | tr -d '\r' | grep -i -E "^(HTTP/|x-robots-tag)"
done
```

Expected: HTTP/1.1 200 OK and `x-robots-tag: noindex` on each. Pass: header present on all 3 and status still 200. Fail: header missing (rule did not match, see Section 4 failures 2 to 6). A fail here does not harm production and can be fixed in a new gate. Also confirm the lead form still works from the pages.dev URL (headers should not affect it).

### 6.4 A hash URL, if available

No hash or branch URL is documented in the repo and none was guessed. UNVERIFIED. Sedrick can copy a deployment URL (the <hash>.red-carpet-plumbing-site.pages.dev address) from the Cloudflare Pages deployments list. Then run `curl -sIL -m 30 https://<hash>.red-carpet-plumbing-site.pages.dev/ | grep -i x-robots-tag`. Expected: x-robots-tag: noindex. Caveat: the Cloudflare preview docs say preview deployments already carry noindex by default, so a header there does not prove the new rule worked. Only a production-branch deployment URL or the main pages.dev host (6.3) proves it. UNVERIFIED whether a production deployment's hash URL carries the default header.

### 6.5 Local checks before commit (Gate 3, no deploy)

```text
ls -la out/_headers
cat -A out/_headers
git check-ignore -v public/_headers
```

Expected: file exists, no ^M, no BOM, exactly the planned text, no ignore rule for public/_headers (empty output, exit 1).

## 7. Rollback plan

If any production URL shows x-robots-tag:
1. Do not wait for crawls. Remove the rule immediately: either `git revert <commit sha>` (a new commit, no history rewrite) or delete public/_headers and commit. Push, and let Cloudflare redeploy. Push approval is a separate approval and needs a standing exception if speed matters.
2. Rebuild and confirm out/_headers is gone locally if building locally.
3. Re-run Section 6.1 and 6.2 until clean, using cache-busting queries.
4. A Cloudflare dashboard rollback to the previous production deployment may also exist. It was not verified in this gate (UNVERIFIED), so the git route above is the documented plan.
5. Report the exposure window (deploy time to fixed time). A short noindex header exposure is recoverable but crawlers that see it can drop pages, so the window must be minimized.

The production check (6.1) must run immediately after the deploy reports success, before any other task. Recommended: Sedrick or Claude runs the check within minutes of deploy, with someone ready to approve the revert push.

## 8. Commit plan (for Gate 3, held back)

- Stage by explicit path only: `git add public/_headers`. No git add . and no other files.
- Draft commit message:

```text
seo: add host-scoped noindex header for pages.dev hosts

Add public/_headers with X-Robots-Tag: noindex scoped to
https://:project.pages.dev/* and https://:version.:project.pages.dev/*.
The production custom domain is not matched. pages.dev stays available
for staging and lead-form review.

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>
```

- Commit approval, push approval, and deploy approval are three separate approvals and none is given by this plan.
- Order: Gate 3 creates the file, builds locally, checks out/_headers, commits after approval. Gate 4 pushes and deploys after approval, then runs Section 6 immediately.

## 9. Separate housekeeping (listed only, not acted on)

### 9.1 Untracked report files

Raw git status at the start of this gate:

git status porcelain, part 1 of 1 (lines 1 to 7)

```text
?? docs/site-os/reports/live-header-check.md
?? docs/site-os/reports/metadata-length-audit.csv
?? docs/site-os/reports/metadata-length-audit.md
?? docs/site-os/reports/noindex-audit-report.md
?? docs/site-os/reports/pages-dev-indexing-report.md
?? docs/site-os/reports/remove-c1-gate2-plan.md
?? metadata-rewrite-v3.csv
```


Count: 6 untracked files are inside docs/site-os/reports/: live-header-check.md, metadata-length-audit.csv, metadata-length-audit.md, noindex-audit-report.md, pages-dev-indexing-report.md, remove-c1-gate2-plan.md. After this plan is written the count is 7. That differs from the "five" in the request, so the number may be stale; the list above is authoritative. A seventh untracked file, metadata-rewrite-v3.csv, sits in the repo root and is not in reports/. docs/site-os/reports/ already has 29 tracked files (git ls-files), so the tracked-reports standing rule is consistent with tracking these too.

### 9.2 Pages with no og:url tag

og:url scan, part 1 of 1 (lines 1 to 21)

```text
$ node ogurl.mjs (scan every out/ HTML file for og:url)
HTML files: 139; with og:url: 123; without og:url: 16
| Route | robots | has og:title |
|-|-|-|
| /404.html | noindex | yes |
| /404/ | noindex | yes |
| /_not-found/ | noindex | yes |
| /about/ | (no robots tag) | yes |
| /backflow-prevention/ | (no robots tag) | yes |
| /commercial-plumbing/ | (no robots tag) | yes |
| /faucet-sink-repair-installation/ | (no robots tag) | yes |
| /garbage-disposal-repair-installation/ | (no robots tag) | yes |
| /gas-line-plumbing/ | (no robots tag) | yes |
| /plumbing-fixture-repair-replacement-installation/ | (no robots tag) | yes |
| /thank-you/ | noindex, nofollow | yes |
| /toilet-repair-installation/ | (no robots tag) | yes |
| /trenchless-piping/ | (no robots tag) | yes |
| /video-camera-plumbing-inspections/ | (no robots tag) | yes |
| /water-meter-pressure-regulator-services/ | (no robots tag) | yes |
| /water-pipe-repair-replacement/ | (no robots tag) | yes |
[exit=0]
```


Count: 16 of 139 HTML files have no og:url tag. 4 are the noindex pages (/404.html, /404/, /_not-found/, /thank-you/). 12 are indexable service pages, and all 12 are among the 19 pages that also have no robots tag (observed overlap, not a proven cause). Every one of the 16 has an og:title. The cause (likely a missing url in each page's openGraph metadata) was not inspected, so it is UNVERIFIED. No fix is proposed here.

## 10. UNVERIFIED items

1. Verbatim wording of the Cloudflare Headers page (read through a summarizing fetch tool).
2. Whether any indentation style is rejected by Cloudflare, and how malformed lines are handled (docs silent).
3. An explicit docs sentence that host-scoped rules skip custom domains (only the docs example table shows it).
4. That a file named _headers is copied from public/ to out/ (confirmed for other files, not for this file).
5. The Cloudflare project's configured build output directory and deploy method (Git integration or direct upload).
6. Whether CRLF line endings (git core.autocrlf=true) are tolerated by Cloudflare if they reach the deploy.
7. A hash URL for testing, and whether a production deployment's hash URL carries the default noindex.
8. That Cloudflare dashboard rollback is available and behaves as expected.
9. Cause of the 16 missing og:url tags.
10. Cloudflare project name equals red-carpet-plumbing-site (the :project placeholder works on any single label, so the rule does not depend on it, but the check URLs do).

## 11. Questions for Sedrick

1. Is the deploy done by Cloudflare Git integration or by uploading a locally built out/? This decides the line ending risk.
2. Can you supply a deployment hash URL from the Cloudflare dashboard for Section 6.4?
3. Do you want push approval for Gate 4 granted in advance for the rollback commit, so a production fix is not delayed?
4. Approve Gate 3 (create public/_headers with the exact text, build locally, verify out/_headers, no commit)?
