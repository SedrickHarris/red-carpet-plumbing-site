# service-areas — Flood Hierarchy Resolution + Deferred Link Recolor

Gate 3 build, single-page scope. Content-lock observed: no heading text, body
copy, CTA labels, link destinations, or anchor text changed.

Date: 2026-08-25
Branch: main
Status: complete, uncommitted, held for review

## 1. Files Changed

| File | Hunks | Lines changed |
|---|---|---|
| `app/service-areas/page.tsx` | 3 | 3 (+3 / -3) |

No other file appears in the diff. See section 6 for verification.

## 2. Step 1 — Final Flood Confirmation

Line numbers had not shifted from the report. The three red floods were
re-located by content and structure and confirmed as follows.

| # | Line | Section | Markup form | Position |
|---|---|---|---|---|
| 1 | 480 | SECTION 4: Mid-Page CTA Strip | `<CTASection background="red">` | mid-page |
| 2 | 614 | SECTION 8: Emergency Plumbing CTA | hand-written `<section className="bg-brand-primary text-white">` | mid-page |
| 3 | 692 | SECTION 11: Final CTA | `<CTASection background="red">` | **final** |

The flood at line 692 is the final section preceding the footer boundary. It is
the last child of `<main>`, immediately followed by `</main>` and then
`<SiteFooter />`, with no intervening section. It was left red and unchanged.

The two mid-page floods (Sections 4 and 8) were reassigned to charcoal.

## 3. Changes Applied

### 3.1 Section 4 mid-page CTA — component prop swap

The section uses `CTASection`, so the `background` prop was swapped rather than
raw classes, matching the component path Commit 1 used where a page's flood was
a `CTASection`.

```
-          background="red"
+          background="dark"
```

`CTASection` resolves `background="dark"` internally to
`bg-brand-charcoal text-white`, the identical class pair Commit 1 applied by
hand elsewhere.

### 3.2 Section 8 emergency CTA — class swap

This flood is hand-written inline JSX, so it took the literal Commit 1 class
substitution.

```
-        <section className="bg-brand-primary text-white">
+        <section className="bg-brand-charcoal text-white">
```

### 3.3 "See Plumbing Services" link recolor

Single `className` on the `<Link>` inside the `.map()` over the area cards.

```
-  className="mt-4 inline-flex items-center text-sm font-semibold text-brand-primary hover:text-brand-primary-hover"
+  className="mt-4 inline-flex items-center text-sm font-semibold text-brand-dark underline hover:text-brand-dark/70"
```

Because the link is rendered inside a `.map()`, this one edit covers every
instance. The link text, the `href={card.href}`, the trailing arrow span, and
the pre-existing `TODO-BATCH-NEXT` comment above `href` are untouched.

## 4. Validation — Gate 4

All three commands run from the project root. Full raw output was pasted to the
session; results summarized here.

| Check | Command | Exit | Result |
|---|---|---|---|
| Lint | `npx eslint app/service-areas/page.tsx` | 0 | clean, no output |
| Types | `npx tsc --noEmit` | 0 | clean, no output |
| Build | `npm run build` | 0 | compiled in 73s, 114/114 static pages generated, no warnings or deprecation notices |

Build environment: Next.js 16.2.6 (Turbopack). Route count held at 110; no route
was added, removed, or renamed.

### 4.1 Red flood count after the change

`grep -n 'background="red"\|bg-brand-primary text-white' app/service-areas/page.tsx`

```
693:          background="red"
```

Exactly one red flood remains on the page. It is the Section 11 final CTA, in
final position. (Line 693 rather than 692 because the `<CTASection` opening tag
is on 692 and the prop on 693.)

The corresponding charcoal check returns the two reassigned sections:

```
481:          background="dark"
614:        <section className="bg-brand-charcoal text-white">
```

### 4.2 Contrast — two newly-charcoal sections

Charcoal token is `--color-brand-charcoal: #111827`. WCAG 2.1 relative
luminance, alpha values composited against the section background before
measuring.

| Foreground | On charcoal | Prior on red | AA normal | AA large | AAA normal |
|---|---|---|---|---|---|
| `text-white` #FFFFFF (headings) | 17.74:1 | 8.33:1 | pass | pass | pass |
| `text-white/90` (body paragraphs) | 14.46:1 | 6.99:1 | pass | pass | pass |
| `text-white/70` (CTASection fine print) | 9.46:1 | 4.63:1 | pass | pass | pass |

Every foreground on both reassigned sections improved. The weakest pairing on
charcoal (9.46:1) is stronger than the strongest pairing was on red (8.33:1).
This matches the Commit 1 outcome for the other 80 pages.

### 4.3 Contrast — recolored link

The link sits inside an `<article className="... bg-white ...">` card, so white
is the correct backdrop for measurement.

| State | Color | Ratio on #FFFFFF | AA normal | AAA normal |
|---|---|---|---|---|
| Rest | `text-brand-dark` #231F20 | 16.30:1 | pass | pass |
| Hover | `text-brand-dark/70` | 6.02:1 | pass | fail |
| Prior rest | `text-brand-primary` #981C1E | 8.33:1 | pass | pass |

Rest state nearly doubles the prior contrast. The hover state at 6.02:1 clears
AA comfortably and misses AAA, which is the same profile the other 351 links
carry from Commit 2, so the page is consistent with the site rather than an
exception. The added `underline` also means the link is no longer distinguished
by color alone, which satisfies WCAG 1.4.1 Use of Color for in-card links.

### 4.4 Button contrast on the reassigned sections

Both charcoal sections still carry buttons. Neither was in scope, and neither
regressed.

| Variant | Surface | Label | Ratio | Note |
|---|---|---|---|---|
| `inverse` | `bg-white` | `text-brand-primary` | 8.33:1 | label contrast is against the button's own white surface, unaffected by the section behind it |
| `inverse-outline` | transparent, `border-white/60` | `text-white` | 17.74:1 | measured against charcoal |

The white button surface against charcoal is 17.74:1, so the button still reads
as a distinct affordance.

## 5. Observations — no action taken

Two things surfaced during validation that do not affect this change but are
worth recording.

**5.1 `inverse` vs `inverse-charcoal` on charcoal sections.** `Button.tsx`
defines an `inverse-charcoal` variant commented as "white surface,
brand-charcoal label, for charcoal sections", while `inverse` is commented as
"for brand-primary sections". Section 8 keeps `variant="inverse"`, so a white
button with a red label now sits on charcoal.

This is deliberate and correct for consistency. Commit 1 changed zero
`variant="inverse"` occurrences across all 80 pages, and `CTASection` itself
maps `onColor` to `inverse` for both the red and dark backgrounds, so every
charcoal CTA on the site renders a red-labeled inverse button. Spot checks of
`app/backflow-prevention/page.tsx`,
`app/boulder-city-plumbing-services/page.tsx`, and
`app/boulder-city/leak-detection-repair/page.tsx` confirm `variant="inverse"`
inside their charcoal sections. Switching Section 8 to `inverse-charcoal` would
have been an unapproved deviation and would have made this page the only
inconsistent one. No contrast issue either way, per 4.4. Flagging in case a
site-wide variant pass is wanted as a separate batch.

**5.2 Area card count.** The brief describes the `.map()` as covering 22 area
cards. `LOCATION_CARDS` actually holds 11 entries (Las Vegas, Henderson, North
Las Vegas, Paradise, Summerlin, Spring Valley, Enterprise, Boulder City, Green
Valley, Lake Las Vegas, Aliante Area). There is one `.map()` at line 437 and one
"See Plumbing Services" link per card. This does not change the edit: a single
`className` change on the mapped `<Link>` covers every rendered instance
regardless of array length. Noting only so the count in the source report can be
reconciled.

## 6. Single-File Verification

`npm run build` runs a `prebuild` step (`seo-automation/scripts/scan-routes.mjs`)
that rewrites `docs/seo/route-manifest.json`. It dirtied the tree with a
one-line `generatedAt` timestamp change and no content change (`routeCount` held
at 110). That is build-artifact churn, not a source edit, so it was restored
with `git checkout -- docs/seo/route-manifest.json`.

`git status --porcelain` after restore:

```
 M app/service-areas/page.tsx
?? docs/site-os/reports/
```

The only tracked modification is the target file. The untracked entry is the
reports directory holding this document.

## 7. Standing Delivery Protocol Checklist

| Item | Status |
|---|---|
| Customer-facing copy | unchanged |
| Headings and heading hierarchy | unchanged, one `<h1>` |
| CTA labels | unchanged |
| Link destinations and anchor text | unchanged |
| Page metadata (title, description, OG) | unchanged, not touched |
| Schema | unchanged, not touched |
| Alt text | unchanged, not touched |
| Internal links | unchanged, destinations identical |
| Navigation and IA | unchanged |
| Business facts | unchanged |
| Design tokens | unchanged, existing tokens reused only |
| Routes | unchanged, 110 |
| No em dashes or double hyphens introduced | confirmed, only class strings changed |

## 8. Rule Deviations

None.

## 9. Commit Status

Not committed. Held for review, consistent with every prior batch. No push, no
history rewrite, no hooks bypassed.
