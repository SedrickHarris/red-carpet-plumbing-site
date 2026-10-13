# Social Share Image and Twitter Card Report

Base commit: d762914. Status: built and validated locally. Not staged, not committed, not pushed, not deployed.

## Result

Every one of the 138 built HTML files in `out/` now has `og:image`, `og:image:width`, `og:image:height`, `og:image:alt`, `twitter:card` and `twitter:image`. The share image is the Red Carpet Plumbing logo, centered on a flat Off White (#FAF8F5) 1200x630 JPEG. No photo.

## Why two mechanisms

| Mechanism | Covers | Why |
|---|---|---|
| File convention: `app/opengraph-image.jpg`, `app/twitter-image.jpg` and matching `.alt.txt` | `twitter:*` on all 138 files; `og:image` on 5 files (homepage, thank-you, 404, 404/index, _not-found) | Next replaces a parent `openGraph` with a child's, so the root file image does not reach pages that define their own `openGraph` |
| `lib/social-image.ts` (`OG_IMAGES`) added to each page's existing `openGraph` | `og:image` on the other 133 pages | Approved Option A, applied by codemod |

The first build (file convention only) had `og:image` on 5 of 138 files and `twitter:card` on 138 of 138. That is what triggered Option A.

## Files changed

| Path | Change |
|---|---|
| `app/opengraph-image.jpg`, `app/twitter-image.jpg` | New. 1200x630 JPEG, 78,947 bytes each, identical |
| `app/opengraph-image.alt.txt`, `app/twitter-image.alt.txt` | New. Exactly `Red Carpet Plumbing logo`, no trailing newline |
| `scripts/generate-social-share-image.mjs` | New. Reproducible generator (sharp) |
| `lib/social-image.ts` | New. Exports `OG_IMAGES`, one object: url `/opengraph-image.jpg`, 1200, 630, alt `Red Carpet Plumbing logo` |
| `scripts/add-og-images-codemod.mjs` | Removed after use. One-time codemod, not staged and not part of the change set |
| 133 `app/**/page.tsx` | Each gains exactly one import line and one `images: OG_IMAGES,` line |
| `package.json` | `"sharp": "0.34.5"` added to devDependencies (exact pin) |
| `package-lock.json` | Root devDependencies entry, plus `optional` to `devOptional` on `sharp` and `semver` |

Untouched: `app/page.tsx` (already covered by the file convention in its own segment), `app/thank-you/page.tsx` (noindex, no `openGraph`), `docs/site-os/implementation-log.md`, all source images.

## Image

| Item | Value |
|---|---|
| Source | `public/images/brand/logo/red-carpet-plumbing-logo.png`, 1080x1058, transparent, no baked-in box (corners RGBA 0,0,0,0) |
| Visible logo bounds | 877x950 |
| Placed size | 462x500 at left 369, top 65 (downscale only, scale about 0.53) |
| Background | Flat #FAF8F5. No panel, gradient, border or added text |
| Output | 1200x630 JPEG, quality 90, 4:4:4, 78,947 bytes (budget 200 KB) |
| Clip check | Ink bounds x 368..831, y 64..567. A 2:1 crop (y 15..614) and a 600x315 preview both keep the whole logo |

## Validation

| Check | Result |
|---|---|
| Dry run | 133 targets, 133 would change, 0 anomalies. All 133 are inline `openGraph: {`, none use `generateMetadata`, none had an `images` key |
| Target mapping | The 133 built files lacking `og:image` map 1 to 1 to `app/**/page.tsx`. They are the 135 pages minus the homepage and thank-you |
| Per-file diff | 133 of 133 are exactly +2/-0: the import line and the property line, nothing else. 0 exceptions |
| String-set diff | Across all 133 files, no string literal removed. The only string added is `@/lib/social-image`. This covers titles, descriptions, FAQ questions and answers, and schema text |
| Lint | `npm run lint` exit 0, no output |
| Build | `npm run build` exit 0, 142 static pages, no warnings or errors |
| Built HTML total | 138 (135 routes plus `404.html`, `404/index.html`, `_not-found/index.html`) |
| `og:image`, `og:image:width`, `og:image:height`, `og:image:alt` | 138 of 138 each |
| `twitter:card`, `twitter:image` | 138 of 138 each. `twitter:card` is `summary_large_image` everywhere |
| Absolute URLs | 0 of the og and twitter image URLs fail to start with `https://redcarpetplumbing.com/` |
| `og:image:alt` | `Red Carpet Plumbing logo` on all 138. Width 1200 and height 630 on all 138. Exactly one `og:image` per file |
| Static server | Python `http.server` on 3100. `/opengraph-image.jpg` and `/twitter-image.jpg` both 200, `image/jpeg`, 78,947 bytes. Server stopped afterward |
| Prebuild | `docs/seo/route-manifest.json` regenerated with 135 routes, no diff |
| `git diff --stat` | 135 tracked files, 270 insertions, 2 deletions. The 2 deletions are the lockfile flag changes |
| Dash grep | No em dash or double hyphen in any added line of the tracked diff, nor in the new lib, alt and generator files |

## URL forms

| Pages | og:image URL |
|---|---|
| Homepage, thank-you, 404 pages (file convention) | `https://redcarpetplumbing.com/opengraph-image.jpg?opengraph-image.04ayulqi2o_fe.jpg` (with hash query) |
| The other 133 (via `OG_IMAGES`) | `https://redcarpetplumbing.com/opengraph-image.jpg` (no hash query) |
| All 138 `twitter:image` | `https://redcarpetplumbing.com/twitter-image.jpg?twitter-image.04ayulqi2o_fe.jpg` |

## Risks and unverified items

- The 133 pages use a URL with no cache-busting hash. If the image is ever replaced at the same path, Facebook, LinkedIn and X may keep serving the old one until re-scraped. Fix then: use a new filename or a version query in `OG_IMAGES`.
- `og:image:type` is emitted only on the 5 file-convention pages. It is not required for the others.
- Not verified: real-world rendering in the Facebook Sharing Debugger, LinkedIn Post Inspector and X card preview. That happens after deploy.
- Static server check used Python `http.server`, not Cloudflare Pages.
- `scripts/add-og-images-codemod.mjs` was deleted after use and is not staged. Its dash-pattern matches were command-line flags only.
- Existing untouched lines in some page files already contain em dashes in comments. None were added.
- Git reports line-ending warnings (LF to CRLF) on 32 files because the repo mixes endings under autocrlf. The codemod preserved each file's own endings and added no whole-file changes.
- The homepage structured data lists an AggregateRating hint in the route manifest. That is outside this task and was not touched, but worth a separate check against the review rules.

## After deploy (for Sedrick)

Check a few URLs in the Facebook Sharing Debugger, the LinkedIn Post Inspector and an X card preview. Re-scrape if cached previews are stale.
