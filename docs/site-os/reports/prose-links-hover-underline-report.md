# Prose Links — "Other Red Form" (`text-brand-primary hover:underline`)

Closes the last deferral named in `787da01`. Content-lock observed: no copy,
heading text, anchor text, link destination, or `href` changed.

Date: 2026-08-25
Branch: main
Status: complete, uncommitted, held for review

## 1. Files Changed

| Metric | Count |
|---|---|
| Files changed | 17 |
| Lines changed | 21 (+21 / -21) |
| Attributes touched | `className` only |

Full file list in section 7.

## 2. The Count — 21, Not 23

`787da01` recorded this deferral as "23 prose links written in the other red
form, `text-brand-primary hover:underline`". That figure is an overcount. The
literal string occurs 23 times, but 2 of those matches land inside a `hover:`
prefix rather than on a rest-state color.

| Form | Count | Rest color | Red appears |
|---|---|---|---|
| ` text-brand-primary hover:underline` | 21 | `text-brand-primary` | at rest |
| `hover:text-brand-primary hover:underline` | 2 | not red | on hover only |

The 2 excluded matches:

| File | Line | Full class string | Rest color |
|---|---|---|---|
| `app/contact/page.tsx` | 361 | `block transition-colors hover:text-brand-primary hover:underline` | none set, inherits |
| `app/thank-you/page.tsx` | 60 | `text-sm font-medium text-brand-muted underline-offset-4 transition-colors hover:text-brand-primary hover:underline` | `text-brand-muted` |

Neither is a red prose link. Both are hover-tints, structurally the same family
as the 62 chip and pill hovers `787da01` deliberately left alone, so they are
out of scope for a prose-link recolor and were not touched. They are the reason
the deferral was written as 23. Flagging in case a separate pass on hover-tints
is wanted; that is a different decision from this one.

Separation was done with a leading-space-anchored grep, since
`hover:text-brand-primary` is preceded by a colon rather than a space:

```
grep -rn " text-brand-primary hover:underline" app/ components/   ->  21
grep -rn "hover:text-brand-primary hover:underline" app/ components/  ->  2
```

## 3. Substitution Applied

```
-  text-brand-primary hover:underline
+  text-brand-dark underline hover:text-brand-dark/70
```

The right-hand side is byte-identical to the end state `787da01` and `ec2e8ec`
produced for the other 352 links, so all 373 prose links on the site now carry
one treatment rather than two.

`hover:underline` is dropped rather than kept. With `underline` always on it is
a no-op, and retaining it would leave this batch's links textually different
from the other 352 while rendering identically.

Font weights are preserved exactly as found and were not part of this decision:
19 links keep `font-medium`, 2 keep `font-semibold`.

## 4. Surface Audit — the check `787da01` ran

`787da01` verified that no recolored link sat inside a charcoal or red flood,
where dark-on-dark would have failed. The same audit was run here by walking
back from each of the 21 matches to its nearest enclosing `<section>` and
reading that section's background class.

| Enclosing surface | Links | Risk |
|---|---|---|
| `bg-white` | 19 | none |
| `bg-brand-surface-alt` | 2 | none |
| charcoal or red flood | 0 | n/a |

Zero of 21 sit on a filled section. The dark-on-dark failure mode does not
arise in this batch. The 2 on `bg-brand-surface-alt` are
`app/boulder-city/leak-detection-repair/page.tsx:690` and
`app/boulder-city/water-heater-repair-installation/page.tsx:624`.

## 5. Validation — Gate 4

| Check | Command | Exit | Result |
|---|---|---|---|
| Lint | `npx eslint` over the 17 changed files | 0 | clean, no output |
| Types | `npx tsc --noEmit` | 0 | clean, no output |
| Build | `npm run build` | 0 | 114/114 static pages, no warnings or deprecation notices |

Next.js 16.2.6 (Turbopack). Route count held at 110; no route added, removed, or
renamed.

### 5.1 Diff shape

Every changed line is a `className` attribute. Grouped, the diff is exactly
three substitutions repeated:

| Occurrences | Before | After |
|---|---|---|
| 15 | `font-medium text-brand-primary hover:underline` | `font-medium text-brand-dark underline hover:text-brand-dark/70` |
| 4 | `font-medium text-brand-primary hover:underline` (deeper indent) | same, deeper indent |
| 2 | `font-semibold text-brand-primary hover:underline` | `font-semibold text-brand-dark underline hover:text-brand-dark/70` |

No `href`, anchor text, `target`, `rel`, or `aria-label` appears anywhere in the
diff. The Google Maps link on the location pages keeps its
`target="_blank"`, `rel="noopener noreferrer"`, and `aria-label` untouched.

### 5.2 Contrast

WCAG 2.1 relative luminance; `/70` composited against the surface before
measuring. Numbers match those `787da01` reported for the same substitution.

| Surface | Links | Rest now | Rest before | Hover now | AA |
|---|---|---|---|---|---|
| `bg-white` #FFFFFF | 19 | 16.30:1 | 8.33:1 | 6.02:1 | pass both states |
| `bg-brand-surface-alt` #F3F4F6 | 2 | 14.81:1 | 7.57:1 | 5.76:1 | pass both states |

Rest contrast roughly doubles on both surfaces. Hover clears AA and misses AAA,
the same profile the other 352 links carry, so this batch is consistent with the
site rather than an exception.

### 5.3 Accessibility note — the real gain here

This form was weaker than the one `787da01` fixed. `hover:underline` means the
underline only existed on hover, so at rest these 21 links were distinguished
from body text **by color alone**, which fails WCAG 1.4.1 Use of Color. Hover is
not available to keyboard or touch users, so the affordance was absent for them
entirely.

The persistent `underline` resolves this. All 21 are now identifiable without
relying on hue or on a pointer.

## 6. Scope Verification

`npm run build` again rewrote the `generatedAt` timestamp in
`docs/seo/route-manifest.json` with no content change (`routeCount` still 110).
Restored with `git checkout --` as build churn.

After restore, `git status --porcelain` shows 17 modified tracked files and no
others, plus the untracked `docs/site-os/reports/` directory.

## 7. Files Changed

| File | Links |
|---|---|
| `app/about/page.tsx` | 4 |
| `app/page.tsx` | 2 |
| `app/boulder-city-plumbing-services/page.tsx` | 1 |
| `app/boulder-city/leak-detection-repair/page.tsx` | 1 |
| `app/boulder-city/water-heater-repair-installation/page.tsx` | 1 |
| `app/enterprise-plumbing-services/page.tsx` | 1 |
| `app/enterprise/commercial-plumbing/page.tsx` | 1 |
| `app/enterprise/re-piping/page.tsx` | 1 |
| `app/green-valley-plumbing-services/page.tsx` | 1 |
| `app/henderson-plumbing-services/page.tsx` | 1 |
| `app/lake-las-vegas-plumbing-services/page.tsx` | 1 |
| `app/las-vegas-plumbing-services/page.tsx` | 1 |
| `app/north-las-vegas-plumbing-services/page.tsx` | 1 |
| `app/north-las-vegas/aliante-area-plumbing/page.tsx` | 1 |
| `app/paradise-plumbing-services/page.tsx` | 1 |
| `app/spring-valley-plumbing-services/page.tsx` | 1 |
| `app/summerlin-plumbing-services/page.tsx` | 1 |
| **Total** | **21** |

## 8. Standing Delivery Protocol Checklist

| Item | Status |
|---|---|
| Customer-facing copy | unchanged |
| Anchor text | unchanged |
| Link destinations (`href`) | unchanged |
| `target`, `rel`, `aria-label` | unchanged |
| Headings and hierarchy | unchanged |
| CTA labels | unchanged |
| Page metadata | unchanged, not touched |
| Schema | unchanged, not touched |
| Alt text | unchanged, not touched |
| Navigation and IA | unchanged |
| Business facts | unchanged |
| Design tokens | unchanged, existing tokens reused only |
| Routes | unchanged, 110 |
| No em dashes or double hyphens introduced | confirmed, class strings only |

## 9. Rule Deviations

None.

## 10. Remaining Red-Form Inventory

After this batch, the deferral list from `787da01` stands as:

| Category | Count | Status |
|---|---|---|
| Prose links, `hover:text-brand-primary-hover` form | 352 | done, `787da01` + `ec2e8ec` |
| Prose links, `hover:underline` form | 21 | done, this batch |
| SVG icon fills | 64 | untouched, no decision yet |
| Chip and pill hovers | 62 | untouched, includes the 2 from section 2 |
| Bullet dots | 146 | untouched, no decision yet |
| Step-number circles | 93 | untouched, no decision yet |

All prose links are now resolved. What remains is non-prose ornament.

## 11. Commit Status

Not committed. Held for review, per standing protocol.
