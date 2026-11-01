# Red Carpet Plumbing Full Project Audit (Read-Only), 2026-11-01

Mode: read-only. The only file written for this audit is this report. Nothing was committed. No content, metadata, schema or business claim was edited. The one side effect is that `npm run build` regenerated the gitignored `out/` folder (the previous build was dated 2026-10-28).

Method note: counts come from scripted scans of `app/`, `components/`, `lib/` and the fresh `out/` build. "Pages" means `page.tsx` files, which map 1:1 to the 136 manifest routes. Matches include FAQ text, schema strings and trust-item arrays, so one page can contribute many lines.

## 1. Summary

- Branch: `main`. HEAD: `394c50e Add 301 redirects for old URLs via Cloudflare Pages _redirects`.
- Working tree at start: 4 untracked reports under `docs/site-os/reports/` plus `metadata-rewrite-v3.csv`. Unchanged by this audit apart from this report.
- Built `out/` existed (stale, 2026-10-28). It was rebuilt in Audit 9, so all `out/` findings below describe the current HEAD build.
- Corrections to the audit brief:
  - `docs/seo/business-context.md` lists **81** Google reviews, not 76. The figure 76 appears only in historical docs (`docs/site-os/implementation-log.md:707`, `:845`, batch reports, and a removed diff line in `og-url-inspection-report.md:1474`). Every distinct review count in `app/`, `components/`, `lib/` is **81**. There is no 76 anywhere in code or in `out/`.
  - `docs/site-os/client-context/red-carpet-plumbing-sitemap.md` **does not exist**. No file with "sitemap" in its name exists under `docs/`.
  - A root `Images/` folder does not exist in the working tree. `public/images/` holds 217 tracked files.

| Severity | Count | Items |
|---|---|---|
| High | 4 | H1 AggregateRating schema, H2 24/7 claim, H3 satisfaction guarantee, H4 pricing claims |
| Medium | 6 | M1 to M6 |
| Low | 7 | L1 to L7 |

License number: **0 WRONG instances in code, schema, visible copy or `out/`**. Two WRONG strings exist, both in untracked or historical docs, and neither is customer-facing (section 2).

Validation: `tsc --noEmit` pass, `eslint app components lib` pass (no output), `npm run build` pass, postbuild sitemap sync pass.

## 2. License number findings

Settled fact applied: `#048585A` is correct, `#0048585A` is wrong.

Regex used: `(#?)(0*)48585(A?)`, case-insensitive, over `app components lib public docs scripts seo-automation functions out` (text files only).

| Scope | CORRECT `#048585A` | WRONG `#0048585A` | OTHER |
|---|---|---|---|
| `app/` | 769 | 0 | 31 |
| `components/`, `lib/`, `public/`, `scripts/`, `seo-automation/`, `functions/` | 0 | 0 | 0 |
| `docs/` | 1740 | 2 | 18 |
| `out/` (fresh build) | 3478 | 0 | 155 |
| Total | 5987 | 2 | 204 |

**High severity (WRONG in JSON-LD or visible copy): none.**

Visible copy variants, all CORRECT: "Nevada Contractor License #048585A" (177), "NV License #048585A" (105), "NV Licensed #048585A" (63), "NV Contractor License #048585A" (60), "NV Licensed, #048585A" (50), "NV Licensed Plumbers, #048585A" (35), and smaller variants.

### WRONG instances (2, both docs only)

- `docs/site-os/reports/license-wording-inventory.md:108`: the text "#0048585A or any 0048585 variant: 0 files". A statement that none exist, not a use of the number.
- `docs/site-os/reports/og-url-inspection-report.md:1474`: a removed line in a pasted diff ("NV Licensed #0048585A. 4.8 stars, 76 reviews."). This is historical evidence of an old metadata value. It is in an untracked file. The current metadata is correct.

### OTHER instances, by file

1. `app/**/page.tsx`, 31 files, one each: `identifier: "048585A"` inside the `EducationalOccupationalCredential` node. This is a bare identifier value with no `#`, used consistently on every page. It is the JSON-LD identifier field, not display text. The 31 locations are listed in Appendix A.
2. `out/**`: 155 hits, the rendered copy of the same 31 schema identifiers across `index.html`, `index.txt`, `__next._full.txt` and `__PAGE__.txt` payloads.
3. `docs/site-os/reports/license-wording-inventory.md`: lines 28, 56, 73, 108 to 112, 125, 126, 134. These are report text describing the strings above (bare `048585A`, plus the hypothetical variants it checked for).
4. `docs/site-os/reports/remove-c1-gate2-plan.md:3` and `docs/site-os/reports/remove-c1-license-wording-report.md:1247`: report text mentioning bare `048585A`.
5. `docs/site-os/implementation-log.md:625`, `:643`: a source-comment note that quotes "#048585A/C-1" (a `/C-1` suffix that appears in an old source comment and not in any rendered string). Classified CORRECT for the `#048585A` prefix; the suffix is a stray classification fragment, not published.

## 3. Business claims table

Verification status is from `docs/seo/business-context.md` ("BC") and `docs/site-os/client-context/red-carpet-plumbing-project-context.md` ("PC"). The two docs disagree on some claims (finding M1).

| Claim | Where used (pages) | Verification status per docs | Risk |
|---|---|---|---|
| 4.8 stars (visible text, schema `ratingValue "4.8"`) | 119 pages; `AggregateRating` JSON-LD on 94 | BC: requires verification. PC: "owner confirmed; recheck before launch" | High (schema), Medium (visible) |
| 81 reviews / 81 Google reviews (the only count found; `reviewCount "81"`) | 94 pages with schema; 94 with visible "81 Google reviews" or variants | BC: requires verification. PC: owner confirmed, recheck before launch | High (schema) |
| Any other review count (76 or other) | 0 in code. 76 only in historical docs | n/a | None in code |
| Over 40 years / 40 years serving (also "four decades", "decades of experience") | 92 pages; about page has the only "decades" derivatives (`app/about/page.tsx:79-80`) | BC: requires verification. PC: "over 40 years" owner approved | Medium (doc conflict) |
| Any other business year count | None found. Other "N years" hits are pipe or fixture ages | n/a | None |
| 24/7 emergency, 24 hours, round the clock | 67 pages. Hero trust items, FAQ answers, meta descriptions, e.g. `app/about/page.tsx:19`, `:66`, `:91-92`, `:536` | BC: requires verification. PC: no approval recorded and PC warns against "emergency" or "24/7" language unless separately confirmed | High |
| "Emergency" (word) | 114 files, expected for a core service | BC lists Emergency Plumbing as a verified service | Low |
| Transparent pricing | 126 pages | BC: requires verification | High |
| No hidden fees | 122 pages | BC: requires verification | High |
| Upfront pricing | 4 pages: `app/about/page.tsx:96`, `app/page.tsx:71`, `:107`, plus comment-only mentions in `app/henderson/*` | BC: requires verification | High (grouped with pricing) |
| Customer satisfaction guarantee | 2 pages: `app/page.tsx:230-231`, `app/about/page.tsx:99-100`. "Customer Satisfaction Focus" heading (not a guarantee) on `app/plumbing-services/page.tsx:101`, `:282`, `app/service-areas/page.tsx:256` | BC: requires verification | High |
| "Stands behind every service" | 2 pages: `app/page.tsx:231`, `app/about/page.tsx:100` | Part of the guarantee block | High (grouped) |
| Other guarantee or warranty wording | "warranty" appears only as manufacturer warranty context in water heater content (about 40 lines). "guarantee" outside the block above appears only in FAQ ordering code comments and in legal pages' disclaimers (`privacy-policy`, `terms-and-conditions`) | n/a | Low |
| Same-day service | 127 pages. All instances carry "subject to scheduling" (or availability) within a 7-line window. The only 2 unqualified hits are code comments (`app/north-las-vegas/commercial-plumbing/page.tsx:166`, `:533`) | PC: confirmed company-wide with the qualifier | Low |
| Family-owned | 28 pages, e.g. `app/page.tsx:20`, `:52`, `app/about/page.tsx:19`, `:39`, `:59` | BC: verified ("Local, family-owned plumbing company") | Low |
| Licensed (plumbers, NV license) | 129 pages | BC: verified ("Licensed plumbers (NV #048585A)"). PC: "confirm on the Nevada State Contractors Board record before launch" | Low |

## 4. NAP findings

No variants found. Every instance matches the approved values.

- Business name: "Red Carpet Plumbing" everywhere (plus uppercase "RED CARPET PLUMBING" only in code comments, and the domain `redcarpetplumbing.com`). One alt string reads "Red Carpet Plumbing commercial plumbing ..." (fine).
- Address: "3330 W. Hacienda Ave Ste. 405" (28), "3330 W. Hacienda Ave Ste. 405, Las Vegas, NV 89118" (16), and a Google Maps URL (18) with "3330 W Hacienda Ave #405, Las Vegas, NV 89118". Schema: `streetAddress "3330 W. Hacienda Ave Ste. 405"` (24), `postalCode "89118"` (24), `addressLocality "Las Vegas"` (32 including non-Las Vegas area nodes by design).
- Phone: "(702) 567-9172" (1201), `tel:+17025679172` (384), `+17025679172` (170), schema `telephone "+17025679172"` (131). No other `tel:` value exists. No other 702 number.
- Non-NAP numbers found: "877-860-6020" (Southwest Gas, see M5) and the form placeholder "(702) 000-0000" in `components/ContactFormPlaceholder.tsx:296` and `components/QuoteFormPlaceholder.tsx:325` (placeholder only).
- Email: `info@redcarpetplumbing.com` (16), no other address.

## 5. Schema findings

Source: static analysis of 136 `page.tsx` files, cross-checked against the 136 rendered `out/` pages (all JSON-LD blocks parse).

Types emitted (pages): `Plumber` 132, `WebPage` 134, `BreadcrumbList` 134 (all but home and thank-you), `WebSite` 117, `Service` 118, `HowTo`/`HowToStep` 116, `FAQPage` 132 (built via `lib/faq.ts` `buildFaqPageSchema`), `AggregateRating` 94, `EducationalOccupationalCredential` 36 nodes, `OpeningHoursSpecification` 13, `AboutPage` 1, `ContactPoint` 1, plus `City`/`State`/`Place`/`AdministrativeArea`/`PostalCodeSpecification` area nodes.

Checks:

- **Review / AggregateRating**: 94 pages emit `AggregateRating` (`ratingValue "4.8"`, `reviewCount "81"`), 81 of them nested in `Service`, 13 in `Plumber`/`WebPage`/`AboutPage` nodes. Each of the 94 pages shows the text "4.8 stars, 81 Google reviews" (or a variant), but **no page shows any individual review content**. No `Review` node exists. This conflicts with the rule "AggregateRating only when reviews are real, visible, and verified" (see H1). Example: `app/drain-cleaning/page.tsx:285-291`. Line list in Appendix B.
- **FAQPage vs visible FAQ**: 132 pages pass (the array passed to `buildFaqPageSchema` is the same array passed to `<FaqSection faqs=...>`). The 4 pages without FAQ schema are `/privacy-policy/`, `/terms-and-conditions/`, `/sitemap/`, `/thank-you/` (no visible FAQ either). `FaqSection` renders the answer by slicing the schema string, so text equality holds by construction.
- **Breadcrumb schema vs visible breadcrumbs**: 132 pages pass (labels in `<Breadcrumbs trail>` equal `ListItem` names). `/` has neither a visible breadcrumb nor schema (expected for the home page). `/thank-you/` has neither (noindex page).
- **HowTo without visible numbered steps**: none. All 116 `HowTo` blocks map the same step array that is rendered on the page with numbering.
- **Invented `geo`**: none (no `GeoCoordinates`, latitude or longitude).
- **Invented `priceRange`**: none.
- **`openingHoursSpecification`** (13 pages: `/about/`, `/contact/`, and the 11 Tier 1 hub pages): Monday to Friday 07:30 to 16:30. Visible office-hours text exists on these pages (`app/contact/page.tsx:340`, `app/about/page.tsx:535`, `app/las-vegas-plumbing-services/page.tsx:613`). The hours are **not in either business doc** (M2).
- **`sameAs`** (14 pages): `https://share.google/oY5LcfC0lhWJXVjJj`, `https://www.facebook.com/redcarpetplumbing/`, `https://www.instagram.com/redcarpetplumbing/`, `https://x.com/redcarpetplumb`, plus Wikidata IDs on 6 hub pages (Q24859 Las Vegas, Q491204 Henderson, Q982252 North Las Vegas, Q792601 Boulder City). None of these profiles are listed in the business docs and no page links to them visibly (M3).
- **License values**: only `identifier: "048585A"` (31 nodes, section 2). No other license string in schema.

## 6. Copy rule violations

Scope: `app/`, `components/`, `lib/`, comments and imports excluded (block comments, JSX comments and `//` lines stripped).

- **Em dashes in customer-visible strings: 0.** The only five em dashes are in code comments in `components/Button.tsx:14-16`, `:71-72` (not customer-facing, ignored per scope).
- **Double hyphens in visible strings: 0.** One match, `app/sitemap.ts:54`, is a git CLI argument.
- **"award", "best in", "#1", "lifetime warranty", fake urgency ("limited time", "act now", "only today"): 0.**
- **"guaranteed"**: 5 lines. Two are the guarantee block (`app/page.tsx:230`, `app/about/page.tsx:99`, covered by H3). Three are legal disclaimers (`privacy-policy:208`, `terms-and-conditions:96`, `:257`), which are not claims.
- **"years of experience"**: 4 lines, all with the approved "over 40 years" wording (`app/about/page.tsx:19`, `:27`, `:123`, `app/page.tsx:280`).

No rule violations apart from the unverified-claim items already counted in section 3.

## 7. Technical SEO failures

Checked against the fresh `out/` HTML for all 136 manifest routes (H1 count, title, description, canonical with trailing slash equal to the route, og:title, og:description, og:url, JSON-LD parses, visible breadcrumb nav, breadcrumb schema, `<img>` alt attribute).

Result by check:

| Check | Pass | Fail |
|---|---|---|
| Exactly one H1 | 136 | 0 |
| Title and meta description | 136 | 0 (titles all 60 characters or fewer, descriptions all between 70 and 160) |
| `alternates.canonical`, trailing slash, matches route | 135 | 1 (`/thank-you/`, intentionally noindex, no canonical) |
| og:title, og:description, og:url | 135 | 1 (`/thank-you/`, same reason) |
| At least one JSON-LD block | 135 | 1 (`/thank-you/`) |
| Visible breadcrumb and breadcrumb schema | 134 | 2 (`/` home, `/thank-you/`; both expected) |
| Every `<img>` has an `alt` attribute | 957 of 957 | 0 |

**Failures only (all expected or by design):**

- `/` (home): no breadcrumb, visible or schema.
- `/thank-you/`: no canonical, no OG url, no JSON-LD, no breadcrumb. It carries `noindex, nofollow` and is excluded from the sitemap.

Non-failure SEO concerns:

- **M4**: 15 title collisions between distinct, self-canonical routes (list in M4).
- All 136 routes render one decorative hero `<img alt="">` inside an `aria-hidden` container (L3).

## 8. Route and sitemap sync results

- `docs/seo/route-manifest.json`: `routeCount` 136, 136 routes. Matches the 136 `app/**/page.tsx` files exactly (no page missing from the manifest, no manifest route without a page).
- `out/sitemap.xml`: 135 unique URLs, all with a trailing slash, 135 with `lastmod`. The only manifest route absent from the sitemap is `/thank-you/` (expected). No sitemap URL is outside the manifest.
- `scripts/check-sitemap-sync.mjs` exists. It ran as the build's postbuild step and passed: "137 pages built, 135 sitemap URLs, 2 noindex page(s) excluded (/thank-you/, /_not-found/)".
- `docs/site-os/client-context/red-carpet-plumbing-sitemap.md`: **missing**, so the 136/135 comparison against that doc cannot be made (M6). The closest file is `docs/site-os/inputs/red-carpet-plumbing-build-list.md` (approved URL list), which was not diffed route by route.
- Internal links: 0 rendered anchors across all 136 built pages point to a path outside the manifest. 0 links lack a trailing slash. 0 links point at a `public/_redirects` source (82 redirect sources exist). Source arrays reference 48 child routes that are not built (for example `/drain-cleaning/kitchen/`, `/sewer-line-services/cipp-lining/`); these cards are flagged `built: false` and do not render as links (L4).

## 9. Image findings

- Code references to raw `Images/` or `duplicates-review` paths: **0** (`app/`, `components/`, `lib/`, `scripts/`, `next.config.ts`).
- Image paths referenced in code: 705 references, 213 distinct. **0 missing** from `public/images/`. No template-literal image paths.
- `public/images/` holds 217 tracked files; 4 are not referenced by any literal path in code (L5).
- Alt text in built HTML: 957 `<img>` tags, **0 without an alt attribute**, 821 with descriptive alt, 136 with `alt=""`. All 136 empty-alt images are the hero background image, rendered inside an `aria-hidden="true"` wrapper (`components/HeroSection.tsx:159`, `:174`, `:188`). No non-decorative image has empty alt.

## 10. Validation results

| Command | Result |
|---|---|
| `npx tsc --noEmit` | Pass, exit 0, no errors |
| `npx eslint app components lib` | Pass, exit 0, no problems |
| `npm run build` | Pass, exit 0, no warnings or deprecation notices, static export to `out/` |
| postbuild `node scripts/check-sitemap-sync.mjs` | Pass: 137 pages built, 135 sitemap URLs, 2 noindex excluded |

## Findings detail

### High

- **H1. AggregateRating JSON-LD on 94 pages with no visible review content.** `aggregateRating` with `ratingValue "4.8"`, `reviewCount "81"` on 94 pages (e.g. `app/drain-cleaning/page.tsx:285-291`; list in Appendix B). Only a text badge ("4.8 stars, 81 Google reviews") is visible. BC lists the figures as "requires verification". PC says owner confirmed, recheck before launch. Site OS rules allow `AggregateRating` only when reviews are real, visible and verified.
- **H2. "24/7 emergency" availability on 67 pages.** Examples: `app/about/page.tsx:19`, `:66`, `:91-92`, `:536`, `app/backflow-prevention/page.tsx:298`, hero trust item `"24/7 Emergency Service"` in the hero arrays. BC lists it as requires verification; PC has no approval and warns against 24/7 language unless confirmed for that service. The Plumber schema on 13 pages simultaneously states Monday to Friday 07:30 to 16:30 office hours.
- **H3. "Customer Satisfaction Guarantee" and "stands behind every service we provide".** `app/page.tsx:230-231`, `app/about/page.tsx:99-100`. BC lists it as requires verification.
- **H4. Pricing claims.** "Transparent pricing" on 126 pages, "no hidden fees" on 122, "upfront pricing" (`app/about/page.tsx:96`, `app/page.tsx:71`, `:107`). BC lists these as requires verification. Also appears in meta descriptions (`app/about/page.tsx:123`).

### Medium

- **M1. The two source-of-truth docs disagree.** `business-context.md` puts 4.8 stars/81 reviews, over 40 years, 24/7, pricing and guarantee under "Claims Requiring Verification". `project-context.md` records rating and years as owner approved. Site-wide copy uses all of them (rating 119 pages, years 92).
- **M2. Office-hours schema is not in any business doc.** 13 pages (`/about/`, `/contact/`, 11 Tier 1 hubs), e.g. `app/contact/page.tsx:199-211`. Visible text matches the schema; the doc source for it is missing.
- **M3. `sameAs` profile URLs and Wikidata IDs are undocumented.** 14 pages, e.g. `app/contact/page.tsx:213`, `app/boulder-city-plumbing-services/page.tsx:262`, `:290`. No visible links to those profiles.
- **M4. 15 pairs of routes share identical titles.** Each has its own canonical and a distinct meta description. Measured visible-text overlap is 0.91 to 0.96 for the service pairs checked. Pairs: `/X/` and `/las-vegas/X/` for backflow-prevention, commercial-plumbing, drain-cleaning, faucet-sink-repair-installation, garbage-disposal-repair-installation, gas-line-plumbing, leak-detection-repair, repiping, sewer-line-services, slab-leak-detection-repair, toilet-repair-installation, video-camera-plumbing-inspections, water-heater-repair-installation, water-pipe-repair-replacement, plus `/plumbing-services/` and `/las-vegas-plumbing-services/` (overlap 0.69). Both routes are on the approved build list.
- **M5. Southwest Gas number "877-860-6020" in customer-facing safety copy.** 6 files (`app/gas-line-plumbing/page.tsx:53`, `:473`; `app/green-valley/emergency-plumbing/page.tsx:110`; `app/henderson/gas-line-plumbing/page.tsx`; `app/las-vegas/gas-line-plumbing/page.tsx:89`; `app/paradise/gas-line-plumbing/page.tsx`; `app/summerlin/gas-line-plumbing/page.tsx`). Source comments still say "FLAG: VERIFY ... against swgas.com/en/contact-us before publishing".
- **M6. Missing sitemap doc.** `docs/site-os/client-context/red-carpet-plumbing-sitemap.md` does not exist.

### Low

- **L1.** 31 schema `identifier: "048585A"` values lack a `#`. Consistent and conventional for an identifier field.
- **L2.** 2 WRONG `#0048585A` strings in docs only (section 2).
- **L3.** Hero `<img alt="">` on all 136 routes (decorative, `aria-hidden`). `HeroSection` accepts descriptive `alt` props from pages but never renders them.
- **L4.** 48 child-route hrefs in source arrays for unbuilt pages; guarded by `built` flags, not rendered.
- **L5.** 4 files in `public/images/` are not referenced by literal path.
- **L6.** 632 `FLAG: VERIFY` comment lines remain across 103 `app/` files. None leak into rendered HTML.
- **L7.** The `out/` folder was stale (2026-10-28) before this audit; it is now a build of HEAD.

## 11. Proposed fix plan

Nothing below has been applied. Numbering is global. "Safe mechanical" means no wording, claim or design decision is involved. "Needs client decision" means a business-fact or copy call is required first, per CLAUDE.md.

### Group A. License number (own group)

No edits are required: 0 WRONG instances exist in `app/`, `components/`, `lib/`, `public/` or `out/`.

1. Optional, **safe mechanical**: `docs/site-os/reports/og-url-inspection-report.md:1474`. Old text: `NV Licensed #0048585A. 4.8 stars, 76 reviews.` New text: leave the file alone, or redact the old value to `NV Licensed [old value]. 4.8 stars, [old count] reviews.` It is an untracked historical diff.
2. Optional, **safe mechanical**: `docs/site-os/reports/license-wording-inventory.md:108`. Old text: `#0048585A or any 0048585 variant: 0 files`. New text: `The two-leading-zero variant: 0 files`. Prevents this line from matching the wrong-number search again.
3. Leave `identifier: "048585A"` (31 files, Appendix A) as is. If the client prefers `#048585A` there, that is **needs client decision**; the change is one string per file.

### Group B. Rating and review schema (H1)

4. **Needs client decision** (verify on Google Business Profile, then choose): remove the `aggregateRating` object and the preceding `// Source: Google Business Profile ...` comment from each of the 94 pages (line list in Appendix B). Example, `app/drain-cleaning/page.tsx:285-291`: old `aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "81", bestRating: "5", worstRating: "1" },` new: delete the block. Alternative: keep it only after real, visible, verified review content is added on the same page.
5. **Needs client decision**: reconcile `business-context.md` with `project-context.md` for the rating and years claims (M1). Update the one that is stale.

### Group C. 24/7 availability (H2)

6. **Needs client decision**: confirm or deny 24/7 emergency availability. If denied, replace on 67 pages (hero trust item `"24/7 Emergency Service"`, FAQ answers, meta descriptions) with the approved same-day wording ("Same-day service available, subject to scheduling"). Exact new wording must come from the client.
7. **Needs client decision**: if 24/7 is confirmed, update `docs/seo/business-context.md` to move it to "Verified Business Claims" and add the confirmed scope (all services, emergency only).

### Group D. Guarantee wording (H3)

8. **Needs client decision**: `app/page.tsx:230-231` and `app/about/page.tsx:99-100`. Old title: `Customer Satisfaction Guarantee`. Old body: `Red Carpet Plumbing stands behind every service we provide...`. Replace with a non-guarantee heading (for example the existing `Customer Satisfaction Focus` used at `app/plumbing-services/page.tsx:101`) or remove the block, unless the owner confirms a written guarantee. If the heading changes, update any matching schema and nav text.

### Group E. Pricing claims (H4)

9. **Needs client decision**: confirm "transparent pricing", "no hidden fees", "upfront pricing". If confirmed, move to BC verified claims. If not, remove from 126 hero arrays and FAQ answers (e.g. `app/page.tsx:71`, `:107`, `app/about/page.tsx:96`, `:123`).

### Group F. Schema fields (M2, M3)

10. **Needs client decision**: confirm office hours Monday to Friday 07:30 to 16:30 and add them to `docs/seo/business-context.md`. No page edit if confirmed.
11. **Needs client decision**: confirm the Facebook, Instagram, X and `share.google` URLs and the Wikidata IDs are the client's. If not, remove `sameAs` from 14 pages. If yes, add them to BC and consider footer links.

### Group G. Safety phone number (M5)

12. **Needs client decision**: verify "877-860-6020" at swgas.com/en/contact-us. If it is correct, delete the `FLAG: VERIFY` comments in the 6 files. If not, replace the number in 19 lines.

### Group H. Duplicate titles (M4)

13. **Needs client decision**: choose distinct titles for the 15 pairs (for example add the city to the `/las-vegas/X/` title or differentiate the `/X/` title). Metadata is protected per CLAUDE.md, so no edit without approval.

### Group I. Docs and housekeeping (M6, L3 to L7)

14. **Safe mechanical**: create `docs/site-os/client-context/red-carpet-plumbing-sitemap.md` listing the 136 manifest routes, marking `/thank-you/` as excluded (135 in the sitemap). Source: `docs/seo/route-manifest.json`.
15. **Safe mechanical**: remove the 632 `FLAG: VERIFY` comment lines only after items 9, 11 and 12 are resolved.
16. **Safe mechanical**: in `components/HeroSection.tsx`, either stop accepting the unused `alt` prop or render it when the image is not decorative. Verify visually first.
17. **Safe mechanical**: review the 4 unreferenced files under `public/images/` and delete or wire them in. Do not touch `Images/` (it does not exist).

## Appendix A. `identifier: "048585A"` locations (31 files)

- app/about/page.tsx:192
- app/backflow-prevention/page.tsx:322
- app/boulder-city-plumbing-services/page.tsx:284
- app/commercial-plumbing/page.tsx:323
- app/drain-cleaning/page.tsx:309
- app/emergency-plumbing/page.tsx:311
- app/enterprise-plumbing-services/page.tsx:300
- app/faucet-sink-repair-installation/page.tsx:323
- app/garbage-disposal-repair-installation/page.tsx:323
- app/gas-line-plumbing/page.tsx:319
- app/green-valley-plumbing-services/page.tsx:277
- app/henderson-plumbing-services/page.tsx:291
- app/lake-las-vegas-plumbing-services/page.tsx:305
- app/las-vegas-plumbing-services/page.tsx:292
- app/leak-detection-repair/page.tsx:305
- app/north-las-vegas/aliante-area-plumbing/page.tsx:302
- app/north-las-vegas-plumbing-services/page.tsx:292
- app/page.tsx:285
- app/paradise-plumbing-services/page.tsx:298
- app/plumbing-fixture-repair-replacement-installation/page.tsx:322
- app/repiping/page.tsx:305
- app/sewer-line-services/page.tsx:306
- app/slab-leak-detection-repair/page.tsx:308
- app/spring-valley-plumbing-services/page.tsx:299
- app/summerlin-plumbing-services/page.tsx:295
- app/toilet-repair-installation/page.tsx:322
- app/trenchless-piping/page.tsx:315
- app/video-camera-plumbing-inspections/page.tsx:323
- app/water-heater-repair-installation/page.tsx:315
- app/water-meter-pressure-regulator-services/page.tsx:322
- app/water-pipe-repair-replacement/page.tsx:319

## Appendix B. `aggregateRating:` locations (94 pages)

- app/about/page.tsx:205
- app/backflow-prevention/page.tsx:330
- app/boulder-city/drain-cleaning/page.tsx:295
- app/boulder-city/leak-detection-repair/page.tsx:345
- app/boulder-city/water-heater-repair-installation/page.tsx:326
- app/boulder-city-plumbing-services/page.tsx:273
- app/commercial-plumbing/page.tsx:331
- app/drain-cleaning/page.tsx:317
- app/emergency-plumbing/page.tsx:319
- app/enterprise/commercial-plumbing/page.tsx:303
- app/enterprise/drain-cleaning/page.tsx:295
- app/enterprise/emergency-plumbing/page.tsx:360
- app/enterprise/leak-detection-repair/page.tsx:337
- app/enterprise/repiping/page.tsx:311
- app/enterprise/sewer-line-services/page.tsx:343
- app/enterprise/slab-leak-detection-repair/page.tsx:324
- app/enterprise/water-heater-repair-installation/page.tsx:314
- app/enterprise-plumbing-services/page.tsx:289
- app/faucet-sink-repair-installation/page.tsx:331
- app/garbage-disposal-repair-installation/page.tsx:331
- app/gas-line-plumbing/page.tsx:327
- app/green-valley/drain-cleaning/page.tsx:288
- app/green-valley/leak-detection-repair/page.tsx:364
- app/green-valley/repiping/page.tsx:367
- app/green-valley/slab-leak-detection-repair/page.tsx:352
- app/green-valley/water-heater-repair-installation/page.tsx:352
- app/green-valley-plumbing-services/page.tsx:266
- app/henderson/backflow-prevention/page.tsx:365
- app/henderson/commercial-plumbing/page.tsx:356
- app/henderson/faucet-sink-repair-installation/page.tsx:350
- app/henderson/garbage-disposal-repair-installation/page.tsx:343
- app/henderson/leak-detection-repair/page.tsx:302
- app/henderson/repiping/page.tsx:316
- app/henderson/slab-leak-detection-repair/page.tsx:264
- app/henderson/toilet-repair-installation/page.tsx:348
- app/henderson/water-pipe-repair-replacement/page.tsx:353
- app/henderson-plumbing-services/page.tsx:280
- app/lake-las-vegas-plumbing-services/page.tsx:294
- app/las-vegas/commercial-plumbing/page.tsx:344
- app/las-vegas/repiping/page.tsx:324
- app/las-vegas/slab-leak-detection-repair/page.tsx:273
- app/las-vegas/water-pipe-repair-replacement/page.tsx:353
- app/las-vegas-plumbing-services/page.tsx:281
- app/leak-detection-repair/page.tsx:313
- app/north-las-vegas/aliante-area-plumbing/page.tsx:291
- app/north-las-vegas/commercial-plumbing/page.tsx:305
- app/north-las-vegas/garbage-disposal-repair-installation/page.tsx:361
- app/north-las-vegas/leak-detection-repair/page.tsx:303
- app/north-las-vegas/repiping/page.tsx:287
- app/north-las-vegas/sewer-line-services/page.tsx:269
- app/north-las-vegas/water-pipe-repair-replacement/page.tsx:276
- app/north-las-vegas-plumbing-services/page.tsx:281
- app/page.tsx:250
- app/paradise/backflow-prevention/page.tsx:363
- app/paradise/commercial-plumbing/page.tsx:350
- app/paradise/drain-cleaning/page.tsx:291
- app/paradise/emergency-plumbing/page.tsx:269
- app/paradise/gas-line-plumbing/page.tsx:377
- app/paradise/leak-detection-repair/page.tsx:325
- app/paradise/sewer-line-services/page.tsx:340
- app/paradise/water-heater-repair-installation/page.tsx:293
- app/paradise-plumbing-services/page.tsx:287
- app/plumbing-fixture-repair-replacement-installation/page.tsx:330
- app/repiping/page.tsx:313
- app/sewer-line-services/page.tsx:314
- app/slab-leak-detection-repair/page.tsx:316
- app/spring-valley/commercial-plumbing/page.tsx:358
- app/spring-valley/drain-cleaning/page.tsx:298
- app/spring-valley/emergency-plumbing/page.tsx:335
- app/spring-valley/leak-detection-repair/page.tsx:316
- app/spring-valley/repiping/page.tsx:313
- app/spring-valley/sewer-line-services/page.tsx:342
- app/spring-valley/slab-leak-detection-repair/page.tsx:323
- app/spring-valley/water-heater-repair-installation/page.tsx:307
- app/spring-valley-plumbing-services/page.tsx:288
- app/summerlin/drain-cleaning/page.tsx:290
- app/summerlin/emergency-plumbing/page.tsx:288
- app/summerlin/faucet-sink-repair-installation/page.tsx:349
- app/summerlin/garbage-disposal-repair-installation/page.tsx:343
- app/summerlin/gas-line-plumbing/page.tsx:374
- app/summerlin/leak-detection-repair/page.tsx:307
- app/summerlin/repiping/page.tsx:301
- app/summerlin/sewer-line-services/page.tsx:341
- app/summerlin/slab-leak-detection-repair/page.tsx:316
- app/summerlin/toilet-repair-installation/page.tsx:347
- app/summerlin/water-heater-repair-installation/page.tsx:312
- app/summerlin/water-pipe-repair-replacement/page.tsx:353
- app/summerlin-plumbing-services/page.tsx:284
- app/toilet-repair-installation/page.tsx:330
- app/trenchless-piping/page.tsx:323
- app/video-camera-plumbing-inspections/page.tsx:331
- app/water-heater-repair-installation/page.tsx:323
- app/water-meter-pressure-regulator-services/page.tsx:330
- app/water-pipe-repair-replacement/page.tsx:327
