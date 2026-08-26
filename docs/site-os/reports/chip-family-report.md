# Chip Family — Whole-Device Neutralization

Closes the "chip and pill hovers" deferral from `787da01`. Content-lock
observed: no copy, heading text, anchor text, or link destination changed.

Date: 2026-08-26
Branch: main
Status: complete, uncommitted, held for review

## 1. Files Changed

| Metric | Count |
|---|---|
| Files changed | 54 |
| Lines changed | 111 (+111 / -111) |
| Chip hover states recolored | 47 |
| Chip resting labels recolored | 12 |
| Chip arrow glyphs recolored | 52 |
| Files outside `app/` | 0 |

Every edit is a 1:1 line swap inside a `className` literal. No line was added
or removed, and no file changed length.

## 2. The Deferral Did Not Describe What Is There

`787da01` recorded 62 chip hovers. There are 60 hover declarations, and they
were never the whole device.

| Element | Count | Files |
|---|---|---|
| Chip hover `hover:text-brand-primary` on a neutral card | 47 | 47 |
| Chip resting red label + `hover:text-brand-primary-hover` | 10 | 10 |
| Chip resting red label, hover changes background only | 2 | 2 |
| Red arrow glyph inside those same chips | 52 | 47 |

This is the fourth deferral count from `787da01` to prove inaccurate: 23 prose
links were 21, 64 icon fills were 59 declarations, 146 bullet dots were 111
shapes, and 62 chip hovers are 60 declarations plus 52 uninventoried glyphs.
Only step-number circles remain untested, and that count is also wrong: it is
93 in the survey but 95 in the tree, across three size variants.

## 3. The Finding That Set the Scope

**The chip is one device, and the hover was the smaller half of it.**

A chip renders as a neutral card holding a permanent red arrow and a dark
label that turns red on hover:

```tsx
<Link className="... bg-white ... text-brand-dark ... hover:text-brand-primary hover:shadow-md">
  <span aria-hidden="true" className="text-brand-primary">→</span>
  {service.label}
</Link>
```

Recoloring only the hover, as the deferral literally described, would have
left a red arrow sitting in every chip at rest while the hover went neutral.
That is the same incoherent half-treatment the previous batch avoided on the
43 callouts. The user selected whole-device treatment, so the arrow moves with
the hover.

All 52 bare `text-brand-primary` spans were confirmed by parent-element
inspection to be chip arrows. None were strays: 45 inside
`bg-brand-surface-alt` hover-red chips, 2 inside `bg-white` hover-red chips,
5 inside resting-red chips. Two further red arrows exist at
`app/north-las-vegas/aliante-area/drain-cleaning/page.tsx` L461 and L482, but
they are list markers rather than chips and were left alone.

## 4. This Batch Is Not an Accessibility Fix

Unlike the prose-link batch, which corrected a real WCAG AA failure, nothing
in the chip family was failing.

| Pair | Before | After |
|---|---|---|
| Chip label on white | 8.33:1 red | 16.30:1 dark |
| Chip label on surface-alt | 7.57:1 red | 14.81:1 dark |
| Chip hover on white | 8.33:1 red | 6.03:1 dark/70 |
| Chip hover on surface-alt | 7.57:1 red | 5.76:1 dark/70 |

Every value clears AA for normal text both before and after. The change is
accent reduction, not remediation, and contrast improves at rest while
remaining compliant on hover.

## 5. Substitutions Applied

| # | Device | Count | Change |
|---|---|---|---|
| S1 | Chip, dark label, hover to red | 47 | `hover:text-brand-primary` to `hover:text-brand-dark/70` |
| S2 | Chip, `font-semibold` red label | 5 | label to `text-brand-dark`, hover to `text-brand-dark/70` |
| S3 | Chip, `text-sm font-semibold` red label | 5 | label to `text-brand-dark`, hover to `text-brand-dark/70` |
| S4 | Chip, red label, background hover | 2 | label to `text-brand-dark`, `hover:bg` untouched |
| S5 | Chip arrow glyph | 52 | `text-brand-primary` to `text-brand-dark` |

All five target strings were verified disjoint before application: no target
was a substring of another, and the four resting-label variants are separated
by `text-sm`, `transition-colors`, and padding values. Total 111, matching the
diff exactly.

Target colors follow the campaign precedent rather than introducing anything
new. `4633e54` moved decorative marks to `text-brand-dark`; `1c58957` and
`787da01` established `hover:text-brand-dark/70` as the site hover idiom. No
token was added or redefined.

## 6. Validation Results

```
tsc --noEmit ........ EXIT 0    (no output)
eslint .............. EXIT 0    (no output)
npm run build ....... EXIT 0
                      Compiled successfully in 36.5s
                      Finished TypeScript in 26.0s
                      Generating static pages (114/114) in 6.6s
                      110 routes written to route-manifest.json
git status .......... 54 modified files, all under app/
```

**Generated-file churn.** `prebuild` rewrote the `generatedAt` field in
`docs/seo/route-manifest.json` from `2026-08-25T20:59:02.473Z` to
`2026-08-26T20:05:35.700Z`. Timestamp line only. Restored with
`git checkout --`, never staged.

## 7. Diff Audit

The full diff reduces to 8 distinct removed line patterns and 8 added, in
strict 1:1 correspondence. Machine-checked assertions, all zero:

| Assertion | Count |
|---|---|
| Lines changed containing `href=` | 0 |
| Lines changed containing a heading tag | 0 |
| Lines changed touching JSON-LD | 0 |
| Lines changed touching metadata | 0 |
| Changed lines not inside a `className` | 0 |
| Em dashes or double hyphens introduced | 0 |
| Files changed outside `app/` | 0 |

## 8. Rendered Verification

Checked against the production build output, not the source.

- Chips render as
  `class="flex items-center gap-2 rounded-lg bg-white px-4 py-3 text-base font-medium text-brand-dark shadow-sm ring-1 ring-brand-surface-alt transition hover:text-brand-dark/70 hover:shadow-md"`.
- All 17 arrow glyphs on `/contact` render as
  `<span aria-hidden="true" class="text-brand-dark">`. Zero red arrows remain
  on that page.
- The utility `.hover\:text-brand-dark\/70:hover` is present in the shipped
  production CSS. This was verified in the emitted stylesheet, because a
  Tailwind v4 opacity modifier on a theme token is only generated if some
  source file references it.

## 9. Token Reconciliation

| Token | Before | After |
|---|---|---|
| `text-brand-primary`, hover forms counted as substring | 139 | 18 |
| `hover:text-brand-primary`, `-hover` counted as substring | 64 | 7 |
| `hover:text-brand-primary-hover` | 11 | 1 |

The residual 18 is fully enumerated, not an unexplained remainder:

| Remaining item | Count | Why it stayed |
|---|---|---|
| Contact glyphs `h-4 w-4 text-brand-primary` | 5 | kept red by prior decision, closed |
| List-marker arrows, aliante drain-cleaning | 2 | not chips |
| Tinted icon tiles `bg-brand-primary/10` | 2 | singleton category, out of scope |
| `ServiceCard.tsx` Learn More link | 1 | shared component, cards not chips |
| `ServiceCard.tsx` title hover | 1 | same |
| `Button.tsx` `inverse` variant | 1 | component variant definition |
| Contact phone, email, emergency links | 3 | prose links, see deferral 1 |
| Contact block link, thank-you link | 2 | prose links, see deferral 1 |
| `ServiceCard` `hover:text-brand-primary-hover` | 1 | shared component |

## 10. Standing Delivery Protocol Checklist

| Item | Status |
|---|---|
| Customer-facing copy | unchanged |
| Anchor text and link destinations | unchanged |
| Headings and hierarchy | unchanged |
| CTA labels | unchanged |
| Page metadata | unchanged, not touched |
| Schema | unchanged, not touched |
| Alt text | unchanged, arrows are `aria-hidden` decorative |
| Navigation and IA | unchanged |
| Business facts | unchanged |
| Design tokens | unchanged, no token added or redefined |
| Routes | unchanged, 110 |
| No em dashes or double hyphens introduced | confirmed, class strings only |

## 11. Rule Deviations

None. Scope was referred to the user before editing, since the literal
deferral would have produced an incoherent result on 47 chips.

## 12. One Judgment Call Worth Recording

The arrow glyph keeps its own color class rather than inheriting the chip
color. A cleaner alternative exists: delete the arrow `className` entirely so
it inherits the link color and lightens in lockstep with the label on hover.
That was not done, for two reasons. It is a structural edit to markup rather
than a color substitution, which breaks the 1:1 auditable diff shape every
prior batch in this campaign has held to; and several arrow spans are
multi-line, so the edit would change file lengths.

The cost is small and worth stating plainly: on hover, the label lightens to
`brand-dark/70` while the arrow stays at full `brand-dark`. Both are readable,
16.30:1 and 6.03:1, and the arrow reading slightly stronger than the label is
not a defect. If the divergence is unwanted, the inheritance approach is the
fix, and it is a clean follow-up batch of its own.

## 13. Remaining Red Inventory

| Category | Count | Status |
|---|---|---|
| Prose links, both forms | 373 | done, `787da01` + `ec2e8ec` + `1c58957` |
| Icon fills, benefit checkmarks | 64 marks | done, `4633e54` |
| Left bars on editorial articles | 59 | done, `e5272dd` |
| Dots outside the callout device | 8 | done, `e5272dd` |
| Chip hovers and resting labels | 59 | done, this batch |
| Chip arrow glyphs | 52 | done, this batch |
| Icon fills, contact glyphs | 5 | kept red by decision, closed |
| Dots inside red callouts | 43 | kept red by decision, closed |
| `border-l-4` callout borders | 95 | kept red by decision, closed |
| `open:border-l-4` FAQ state borders | 91 | kept red by decision, closed |
| Step-number circles | 95, three sizes | open, largest remaining family |
| Red flood sections | 19 hand-written | open, by design, one per page |
| Top rule `h-1 w-16` | 1 | open, singleton |
| Footer `border-t-4` on charcoal | 1 | open, 2.13:1, singleton |
| Tinted icon tiles `bg-brand-primary/10` | 2 | open, singleton |
| Skip-link focus fill | 1 | open, singleton |
| `Pill` solid variant | 1 | open, singleton |
| Focus rings and outlines | 9 | open, deliberate focus affordance |

### 13.1 Deferrals

1. **Remaining hover-to-red prose links, 6 declarations.** Three contact
   phone and email links at `app/contact/page.tsx` L302, L318, L342, one block
   link at L361, one at `app/thank-you/page.tsx` L60, and one card-title hover
   in `components/ServiceCard.tsx` L42. All rest neutral and turn red on
   hover. They are the last hover-to-red behaviour on the site.
2. **`components/ServiceCard.tsx`.** Its Learn More link rests red at L56.
   One edit changes every service card sitewide, so it deserves its own batch
   rather than riding along with page-level work.
3. **Step-number circles, 95.** 93 `h-12 w-12`, 1 `h-10 w-10`, 1 `h-7 w-7`.
   Not decorative: white numerals on red at 8.33:1, so fill and label move
   together. The largest single remaining family.
4. **Five singletons.** Top rule, footer `border-t-4` at 2.13:1, two tinted
   icon tiles, skip-link focus fill, `Pill` solid variant. Small enough to
   close in one pass.
5. **CTASection `inverse` versus `inverse-charcoal`**, carried forward from
   the Phase 2A report. Still unresolved.

## 14. Commit Status

Not committed. Held for review, per standing protocol.
