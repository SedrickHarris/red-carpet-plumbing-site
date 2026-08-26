# Icon Fills — 64 Red SVG Fills

Closes the icon-fill deferral from `787da01`. Content-lock observed: no copy,
heading text, anchor text, link destination, or `href` changed.

Date: 2026-08-25
Branch: main
Status: complete, uncommitted, held for review

## 1. Files Changed

| Metric | Count |
|---|---|
| Files changed | 59 |
| Lines changed | 59 (+59 / -59) |
| Attributes touched | one `className`, identical in every file |
| Rendered marks affected | 64 |

## 2. This Batch Was Not a Defect Fix

The three preceding batches each corrected something that was failing:
`edb1e5b` found `text-white/60` fine print at 3.85:1 on red, and `1c58957`
found 21 links distinguished from body text by color alone, a WCAG 1.4.1
failure.

Nothing was failing here. Every one of the 64 icons cleared the relevant
threshold before this change.

| Check | Requirement | Red icons measured | Result |
|---|---|---|---|
| WCAG 1.4.11 non-text contrast on `bg-white` | 3:1 | 8.33:1 | pass, wide margin |
| WCAG 1.4.11 non-text contrast on `bg-brand-surface-alt` | 3:1 | 7.57:1 | pass, wide margin |
| Decorative marking | n/a | every icon carries `aria-hidden="true"` | 1.4.11 arguably does not apply at all |

This batch is therefore an aesthetic and semantic decision, not a remediation.
It was put to the user as an explicit choice rather than inferred, because there
was also no substitution to inherit: the prose-link end state
(`text-brand-dark underline hover:text-brand-dark/70`) is meaningless on an
icon, since an icon has no underline and no hover state of its own.

## 3. The 64 Split Into Two Groups

`787da01` recorded this deferral as a single category of 64 SVG icon fills. The
survey found two groups with different roles.

| Group | Declarations | Rendered | What it is | Decision |
|---|---|---|---|---|
| A | 59 `CheckMark` helpers | 64 marks | affirmative checkmarks in "Why Choose" benefit lists | recolored |
| B | 5 icons in `app/contact/page.tsx` | 5 | `PhoneIcon`, `MailIcon`, `ClockIcon`, `PinIcon`, `AlertIcon` on contact detail blocks | left red |

### 3.1 Why Group A was recolored

A red checkmark sits next to affirmative copy but reads as error by convention.
Of everywhere red survives on this site, the benefit-list checkmark is the one
place the color actively works against the content it marks. Neutralizing it
costs nothing semantically and removes the conflict.

### 3.2 Why Group B was left red

These are labeling glyphs on contact detail blocks, not content markers. The
accent earns its place there, and `AlertIcon` in red is semantically correct
rather than accidental. Recoloring the alert would have been a regression.

`app/contact/page.tsx` does not appear in the diff.

## 4. The 59 / 64 Discrepancy

The declaration count and the rendered count differ, and both are correct.

`CheckMark` is defined once per page as a local helper, in 59 page files, each
with the fill hardcoded in its `className`. Two of those pages render the helper
twice, so 59 declarations produce 64 rendered marks. Changing 59 lines therefore
changes 64 icons on screen.

This is why the file count is 59 while the deferral was written as 64. Both
numbers describe the same set.

## 5. Substitution Applied

```
- className="mt-1 h-5 w-5 flex-none text-brand-primary"
+ className="mt-1 h-5 w-5 flex-none text-brand-dark"
```

The class string was verified uniform before the edit: all 59 `CheckMark`
helpers carried byte-identical `className` values, and the full string
`mt-1 h-5 w-5 flex-none text-brand-primary` occurs exactly 59 times across
`app/` and `components/`, never outside a `CheckMark` helper. Targeting the
whole string rather than the bare token guaranteed no other SVG was reachable by
the substitution.

Geometry, `aria-hidden`, `viewBox`, `fill`, `stroke`, `strokeWidth`, and the
`<path>` data are untouched. Only the color token changed.

## 6. Surface Audit

Every render site of `<CheckMark />` was resolved to its enclosing `<section>`
before the edit, the same check `787da01` and `ec2e8ec` ran.

| Enclosing surface | Rendered marks | Risk |
|---|---|---|
| `bg-white` | 34 | none |
| `bg-brand-surface-alt` | 30 | none |
| charcoal or red flood | 0 | n/a |

No icon sits on a filled section, so the dark-on-dark case does not arise.

## 7. Validation — Gate 4

| Check | Command | Exit | Result |
|---|---|---|---|
| Lint | `npx eslint` over the 59 changed files | 0 | clean, no output |
| Types | `npx tsc --noEmit` | 0 | clean, no output |
| Build | `npm run build` | 0 | compiled in 39.8s, 114/114 static pages, no warnings or deprecation notices |

Next.js 16.2.6 (Turbopack). Route count held at 110.

### 7.1 Diff shape

The entire diff is one substitution repeated 59 times, with no variants:

```
     59 -      className="mt-1 h-5 w-5 flex-none text-brand-primary"
     59 +      className="mt-1 h-5 w-5 flex-none text-brand-dark"
```

`git diff --name-only | grep -c contact` returns 0, confirming Group B was not
reached.

### 7.2 Contrast after the change

| Surface | Marks | Before | After | 1.4.11 floor |
|---|---|---|---|---|
| `bg-white` | 34 | 8.33:1 | 16.30:1 | 3:1 |
| `bg-brand-surface-alt` | 30 | 7.57:1 | 14.81:1 | 3:1 |

Contrast roughly doubles on both surfaces. Since both values already passed, the
gain is margin rather than remediation.

The recolored checkmarks now match the `text-brand-dark/85` body copy they sit
beside, which is the intended result: the mark reads as part of the list item
rather than as a separate colored element competing with it.

## 8. Scope Verification

`npm run build` again rewrote the `generatedAt` timestamp in
`docs/seo/route-manifest.json` with no content change (`routeCount` still 110).
Restored with `git checkout --` as build churn.

After restore, `git status --porcelain` shows 59 modified tracked files under
`app/` and nothing else, plus the untracked `docs/site-os/reports/` directory.

## 9. Standing Delivery Protocol Checklist

| Item | Status |
|---|---|
| Customer-facing copy | unchanged |
| Anchor text and link destinations | unchanged |
| Headings and hierarchy | unchanged |
| CTA labels | unchanged |
| Page metadata | unchanged, not touched |
| Schema | unchanged, not touched |
| Alt text | unchanged, icons are `aria-hidden` decorative |
| Navigation and IA | unchanged |
| Business facts | unchanged |
| Design tokens | unchanged, no token added or redefined |
| Icon geometry and accessibility attributes | unchanged |
| Routes | unchanged, 110 |
| No em dashes or double hyphens introduced | confirmed, class strings only |

## 10. Rule Deviations

None. The decision on which treatment to apply was referred to the user rather
than chosen unilaterally, since `CLAUDE.md` reserves brand color decisions for
explicit approval and no prior batch established a precedent for icons.

## 11. Remaining Red Inventory

| Category | Count | Status |
|---|---|---|
| Prose links, `hover:text-brand-primary-hover` form | 352 | done, `787da01` + `ec2e8ec` |
| Prose links, `hover:underline` form | 21 | done, `1c58957` |
| Icon fills, benefit-list checkmarks | 59 files / 64 marks | done, this batch |
| Icon fills, contact detail glyphs | 5 | kept red by decision, closed |
| Chip and pill hovers | 62 | open, no decision yet |
| Bullet dots | 146 | open, no decision yet |
| Step-number circles | 93 | open, no decision yet |

Bullet dots and step-number circles are `bg-brand-primary` rather than
`text-brand-primary`, so they are a filled-shape decision rather than a
glyph-color one and should be assessed on their own terms.

## 12. Commit Status

Not committed. Held for review, per standing protocol.
