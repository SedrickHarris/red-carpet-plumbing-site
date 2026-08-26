# Step-Number Circles — Filled Shape With a Label

Closes the last inventoried deferral from `787da01`. Content-lock observed:
no copy, heading text, anchor text, or link destination changed.

Date: 2026-08-26
Branch: main
Status: complete, uncommitted, held for review

## 1. Files Changed

| Metric | Count |
|---|---|
| Files changed | 94 |
| Lines changed | 95 (+95 / -95) |
| Step circles recolored | 95 |
| Callout dots deliberately untouched | 43 |
| Files outside `app/` | 0 |

Every edit is a 1:1 line swap inside a `className` literal. 95 circles across
94 files, because one file carries two of them.

## 2. The Count Was Wrong, As Expected

`787da01` recorded 93 step-number circles. There are 95, in three sizes.

| Class | Count |
|---|---|
| `h-12 w-12 ... text-lg font-semibold text-white` | 93 |
| `h-10 w-10 ... text-base font-semibold text-white` | 1 |
| `h-7 w-7 ... text-sm font-semibold text-white` | 1 |

That completes the audit of `787da01`. All five of its deferral counts were
inaccurate: 23 prose links were 21, 64 icon fills were 59 declarations, 146
bullet dots were 111 shapes in three families, 62 chip hovers were 60
declarations plus 52 uninventoried glyphs, and 93 step circles are 95 in
three sizes. Nothing in that commit's deferral list remains untested.

## 3. Why This Family Was Held Back

Every prior batch moved a purely decorative shape. This one carries a visible
label, so the fill and the numeral had to move together, and a dark fill
would have been unusable had any circle sat on a dark section.

Both concerns resolved cleanly once measured.

**Every circle sits on a light section.** All 95 were resolved to their
enclosing `<section>` before any edit:

| Enclosing section | Count |
|---|---|
| `bg-white` | 48 |
| `bg-brand-surface-alt` | 47 |
| `bg-brand-charcoal` | 0 |
| Red flood | 0 |

No dark-on-dark case exists, so one substitution covers the whole family.

**The numeral is decorative, not content.** All 95 are `aria-hidden="true"`,
all 95 render `{index + 1}`, and all 95 sit inside an `<ol>`. The ordinal is
already carried by the list element, so the visible digit duplicates
semantics assistive technology gets for free. Nothing is announced
differently after this change.

That said, the digit is still visible text, so WCAG 1.4.3 applies to it
regardless of `aria-hidden`. `aria-hidden` governs exposure to assistive
technology, not visual contrast obligations. The contrast floor was therefore
treated as real, not waived.

## 4. Contrast

| Pair | Ratio |
|---|---|
| White numeral on red `#981C1E`, before | 8.33:1 |
| White numeral on `brand-dark` `#231F20`, after | 16.30:1 |

The circles were already passing at 8.33:1, so this is accent reduction
rather than remediation, the same as the chip and icon batches. Contrast
roughly doubles as a side effect.

## 5. Substitution Applied

A single substitution, `rounded-full bg-brand-primary text-` to
`rounded-full bg-brand-dark text-`.

The trailing `text-` is what makes it safe. The 43 callout dots share the
prefix `rounded-full bg-brand-primary` but terminate there, since a dot has
no label. Anchoring on the label utility selects all 95 circles and reaches
none of the 43 dots. Verified before and after: 95 targets matched, 43 dots
still red.

`brand-dark` follows the campaign precedent rather than introducing anything
new, and it matches the `text-brand-dark` H3 sitting beside each circle, so
the step block now reads as one unit. `brand-charcoal` was considered and
rejected: it measures marginally higher at 17.74:1, but charcoal currently
appears only on full-bleed CTA bands, and using it here would introduce a
second dark into page body content for no legibility gain.

## 6. Validation Results

```
tsc --noEmit ........ EXIT 0    (no output)
eslint .............. EXIT 0    (no output)
npm run build ....... EXIT 0
                      Compiled successfully in 34.8s
                      Finished TypeScript in 26.7s
                      Generating static pages (114/114) in 11.9s
                      110 routes written to route-manifest.json
git status .......... 94 modified files, all under app/
```

**Generated-file churn.** `prebuild` rewrote the `generatedAt` field in
`docs/seo/route-manifest.json`. Timestamp line only. Restored with
`git checkout --`, never staged.

## 7. Diff Audit

The full diff reduces to 3 distinct removed line patterns and 3 added, in
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

Geometry is untouched. `h-12 w-12`, `inline-flex`, `flex-none`,
`items-center`, `justify-center`, `rounded-full`, the text size, the font
weight, and `aria-hidden` are all preserved. Only the fill token moved.

## 8. Rendered Verification

Checked against the production build output, not the source.

- Circles render as
  `class="inline-flex h-12 w-12 flex-none items-center justify-center rounded-full bg-brand-dark text-lg font-semibold text-white"`.
- Zero `rounded-full bg-brand-primary text-` remain in the rendered page.
- `.bg-brand-dark` is present in the shipped production CSS, already emitted
  before this batch, so no new utility had to be generated.

## 9. Schema Note

`HowTo` schema is unaffected. This batch changed no visible step text, step
count, step order, or step name, so any page carrying step-by-step schema
still matches its visible content exactly. No schema block appears in the
diff.

## 10. Standing Delivery Protocol Checklist

| Item | Status |
|---|---|
| Customer-facing copy | unchanged |
| Anchor text and link destinations | unchanged |
| Headings and hierarchy | unchanged |
| CTA labels | unchanged |
| Page metadata | unchanged, not touched |
| Schema | unchanged, not touched |
| Alt text | unchanged, circles are `aria-hidden` decorative |
| Navigation and IA | unchanged |
| Business facts | unchanged |
| Design tokens | unchanged, no token added or redefined |
| Routes | unchanged, 110 |
| No em dashes or double hyphens introduced | confirmed, class strings only |

## 11. Rule Deviations

None. The fill choice was referred to the user before editing, since it
changes the look of a step block on 93 pages.

## 12. Remaining Red Inventory

| Category | Count | Status |
|---|---|---|
| Prose links, both forms | 373 | done, `787da01` + `ec2e8ec` + `1c58957` |
| Icon fills, benefit checkmarks | 64 marks | done, `4633e54` |
| Left bars on editorial articles | 59 | done, `e5272dd` |
| Dots outside the callout device | 8 | done, `e5272dd` |
| Chip hovers, labels, and arrows | 111 | done, `d8f730b` |
| Step-number circles | 95 | done, this batch |
| Icon fills, contact glyphs | 5 | kept red by decision, closed |
| Dots inside red callouts | 43 | kept red by decision, closed |
| `border-l-4` callout borders | 95 | kept red by decision, closed |
| `open:border-l-4` FAQ state borders | 91 | kept red by decision, closed |
| Red flood sections | 19 hand-written | open, by design, one per page |
| Hover-to-red prose links | 6 | open |
| `ServiceCard.tsx` link and title hover | 2 | open, shared component |
| Top rule `h-1 w-16` | 1 | open, singleton |
| Footer `border-t-4` on charcoal | 1 | open, 2.13:1, singleton |
| Tinted icon tiles `bg-brand-primary/10` | 2 | open, singleton |
| Skip-link focus fill | 1 | open, singleton |
| `Pill` solid variant | 1 | open, singleton |
| Focus rings and outlines | 9 | open, deliberate focus affordance |

Every large family is now resolved. What remains is 19 intentional flood
sections, 8 link and component instances, five singletons, and the focus
affordances.

### 12.1 Deferrals

1. **Remaining hover-to-red prose links, 6 declarations.** Three contact
   phone and email links at `app/contact/page.tsx` L302, L318, L342, one
   block link at L361, one at `app/thank-you/page.tsx` L60, and one
   card-title hover in `components/ServiceCard.tsx` L42. They are the last
   hover-to-red behaviour on the site.
2. **`components/ServiceCard.tsx`.** Its Learn More link rests red at L56.
   One edit changes every service card sitewide.
3. **Five singletons.** Top rule, footer `border-t-4` at 2.13:1, two tinted
   icon tiles, skip-link focus fill, `Pill` solid variant.
4. **Chip arrow inheritance**, carried forward from the chip batch. On hover
   the chip label lightens to `brand-dark/70` while the arrow stays at full
   `brand-dark`.
5. **CTASection `inverse` versus `inverse-charcoal`**, carried forward from
   the Phase 2A report. Still unresolved.
6. **The 44 adjacent charcoal section pairs**, assigned to Phase 2C in the
   Phase 2A report and never revisited.

## 13. Commit Status

Not committed. Held for review, per standing protocol.
