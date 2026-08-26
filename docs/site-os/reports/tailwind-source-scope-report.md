# Tailwind Source Scope — Stop Scanning Documentation

Fixes the build-configuration issue surfaced by the placeholder-hairline
batch. Two directives added to `app/globals.css`. No component, markup, or
class was changed.

Date: 2026-08-26
Branch: main
Status: complete, uncommitted, held for review

## 1. Files Changed

| Metric | Value |
|---|---|
| Files changed | 1 (`app/globals.css`) |
| Lines changed | 13 insertions, 0 deletions |
| Directives added | 2 |
| Components touched | 0 |

## 2. The Problem

`app/globals.css` opened with a bare `@import "tailwindcss";` and no `@source`
directive. Tailwind v4 then auto-detects sources from the project root,
excluding only what `.gitignore` covers. Neither `docs/` nor `.claude/` is
ignored, so both were scanned for class names.

Both are documentation trees that quote class names while describing UI work:

| Tree | Tracked files | Files quoting class names |
|---|---|---|
| `docs/` | 175 | 14 |
| `.claude/` | 37 | 4 |

The Site OS batch reports record before-and-after class strings by design,
which is what makes them useful, and the design skills under
`.claude/skills/` quote examples. Every class name ever written into that
prose was being compiled into real CSS.

This predates tracking the reports in `87ad961`. Auto-detection keys on
`.gitignore` rather than on tracked status, so the reports were scanned from
the moment they were first written to disk.

## 3. The Fix, and the Mistake Made Getting There

```css
@source not "../docs";
@source not "../.claude";
```

**The first attempt did not work, and shipping it unverified would have
looked like a fix while changing nothing.** It was written as
`@source not "docs"`. Tailwind resolves `@source` paths relative to the
stylesheet that contains them, not the project root, so that resolved to
`app/docs`, which does not exist. The directive matched nothing and was
silently a no-op. No error, no warning.

It was caught because the stylesheet was measured before and after rather
than assumed: the CSS came back **186 bytes larger** with two selectors
**added**, `border-brand-dark/30` and `border-brand-dark/40`. Those two
values appear only in the contrast-options table of the
placeholder-hairline report, which had been written after the baseline build.
The build was proving that `docs/` was still being scanned at the moment it
was supposed to have stopped.

The `../` prefix corrects it.

Syntax was verified against the installed version rather than assumed.
Tailwind is **4.3.0**, and the parser in
`node_modules/tailwindcss/dist/lib.js` handles a `not ` prefix on `@source`
and requires quoted paths, which matches what was written.

## 4. Result

| Measure | Before | After |
|---|---|---|
| Stylesheet size | 60,569 bytes | **49,215 bytes** |
| Selectors | 525 | 425 |
| Bytes saved | | **11,354 (18.7%)** |

Substantially larger than the 1.11% estimated in the placeholder-hairline
report. That estimate only counted selectors traceable to `docs/` by exact
string match and missed everything contributed by `.claude/skills/`, which
turned out to be the larger source: whole utility families the site never
uses, including `bg-blue-500`, `bg-green-500`, `bg-red-500`, `from-blue-500`,
`text-red-500`, `focus:ring-blue-500`, `border-gray-200`, `grayscale`,
`sepia`, `backdrop-filter`, `animate-bounce`, `animate-pulse`, and a set of
`md:` breakpoint variants this project does not use.

Also removed, and worth noting because they are this campaign's own
footprints: `border-brand-primary/20`, `border-brand-primary/40`,
`bg-brand-primary/10`, `before:bg-brand-primary`, `hover:text-brand-primary`,
`hover:text-brand-primary-hover`, and `border-t-4`. Every one is a class this
campaign removed from the codebase, still being compiled because the reports
documenting their removal mentioned them.

## 5. Verification That Nothing Real Was Dropped

Removing CSS risks dropping a utility the site actually uses, which would not
fail the build and would only show as a silent visual regression. Three
checks were run, and the first two produced false alarms worth recording.

**Check 1, selector diff.** 100 selectors removed, 0 added. A naive substring
test flagged 19 as possibly still referenced, but that test matches `top-4`
inside `focus:top-4`. Rerun against exact class tokens extracted from source,
the count dropped to 2: `6` and `8`, which are not classes at all but
fragments of decimals inside `lab()` colour values captured by the selector
regex.

**Check 2, rendered coverage.** Every distinct class in all 114 rendered
pages, checked for a corresponding CSS rule. This initially reported 2
regressions, `flex-shrink-0` and `shrink-0`, and `flex-shrink-0` is genuinely
used in `components/StickyMobileCTA.tsx`. That looked like a real defect.

It was not. The rule is present as a **grouped selector**,
`.flex-shrink-0,.shrink-0{flex-shrink:0}`, where the baseline had emitted the
two separately. The checker's regex included `,` in its character class and
so read the pair as a single token matching neither name.

**Check 3, corrected coverage.** With selector groups split correctly, the
unmatched set is **identical before and after**: 9 entries each, the same 9.
All are matcher artifacts rather than missing styles: arbitrary-value classes
containing commas such as
`lg:grid-cols-[minmax(420px,1fr)_minmax(420px,1fr)]`, `group` which is a
marker class with no rule of its own by design, HTML-entity-encoded classes,
and `next-error-h1` which lives in a Next.js internal stylesheet.

| Measure | Result |
|---|---|
| Distinct classes in rendered HTML | 368 |
| Unmatched against baseline stylesheet | 9 |
| Unmatched against new stylesheet | 9 |
| **Regressions** | **0** |

## 6. Validation Results

```
tsc --noEmit ........ EXIT 0    (no output)
eslint .............. EXIT 0    (no output)
npm run build ....... EXIT 0
                      Compiled successfully in 23.9s
                      Generating static pages (114/114) in 10.1s
                      110 routes written to route-manifest.json
git status .......... 1 modified file
```

One intermediate build failed and is worth recording rather than hiding: an
edit to the explanatory comment left a stray `*/` mid-block, and PostCSS
reported `Unknown word Paths` at `globals.css:10:4`. Corrected, and the build
above is the result after the fix.

**Generated-file churn.** `prebuild` rewrote the `generatedAt` field in
`docs/seo/route-manifest.json`. Restored with `git checkout --`, never
staged.

## 7. Scope Note

Only `docs/` and `.claude/` are excluded. `public/` was left scanned: it is
71 tracked files, largely binary assets that Tailwind skips, and nothing
there was measured as contributing. `seo-automation/` was checked and
contains **0** files mentioning brand or utility class names, so excluding it
would have been unmeasured tidying rather than a fix.

## 8. Standing Delivery Protocol Checklist

| Item | Status |
|---|---|
| Customer-facing copy | unchanged |
| Anchor text and link destinations | unchanged |
| Headings and hierarchy | unchanged |
| CTA labels | unchanged |
| Page metadata | unchanged, not touched |
| Schema | unchanged, not touched |
| Alt text | unchanged |
| Navigation and IA | unchanged |
| Business facts | unchanged |
| Design tokens | unchanged, no token added or redefined |
| Routes | unchanged, 110 |
| Rendered class coverage | identical, 0 regressions |

## 9. Rule Deviations

None. This is a build-configuration change, which the placeholder-hairline
report deliberately kept out of that batch and recorded for its own change.

## 10. A Consequence Worth Knowing

Batch reports no longer influence the build. That is the point of the fix,
and it also means future reports can quote class strings freely, including
before-and-after pairs, without inflating the stylesheet.

The corollary matters more: **from here, a class name that exists only in a
report will not be compiled.** If a future report is ever used as the source
of truth for a class that was meant to ship, it will silently have no CSS.
Classes must live in `app`, `components`, or `lib` to exist.

## 11. Commit Status

Not committed. Held for review, per standing protocol. Report will be
committed alongside its code.
