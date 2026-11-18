# Internal Linking Batch 2: FAQ Links Report

Base commit: `4fa3349`. Nothing staged, committed, pushed, or deployed.

## Files changed (5) and lines added

Each file gained one `link` line between `answer` and `category` of one FAQ object. No question, answer, category, JSX, `lib/faq.ts` or `components/FaqSection.tsx` change.

| ID | File | FAQ question | phrase | href |
|---|---|---|---|---|
| IL-003 | app/commercial-plumbing/page.tsx | What are the most common commercial plumbing problems in Las Vegas? | slab leaks | /slab-leak-detection-repair/ |
| IL-011 | app/henderson/commercial-plumbing/page.tsx | What are the most common commercial plumbing problems in Henderson? | slab leaks | /henderson/slab-leak-detection-repair/ |
| IL-017 | app/las-vegas/commercial-plumbing/page.tsx | What are the most common commercial plumbing problems in Las Vegas? | slab leaks | /las-vegas/slab-leak-detection-repair/ |
| IL-024 | app/north-las-vegas/commercial-plumbing/page.tsx | What are common commercial plumbing problems for North Las Vegas businesses? | slab leaks | /north-las-vegas/slab-leak-detection-repair/ |
| IL-033 | app/toilet-repair-installation/page.tsx | What should I do if my toilet is overflowing? | sewer line | /sewer-line-services/ |

## Validation

| check | result |
|---|---|
| Diff | 5 files, 5 added lines, 0 removed lines; each row matches the approved table (5 PASS) |
| Lint, `tsc --noEmit`, build | exit 0, exit 0, exit 0; `check-sitemap-sync: 137 pages built, 135 sitemap URLs, 2 noindex page(s) excluded (/thank-you/, /_not-found/)` |
| JSON-LD hash before vs after | identical on all 7 pages |
| Visible text hash before vs after | identical on all 7 pages |
| FAQPage `acceptedAnswer.text` for the 5 edited questions | byte-identical before and after, and equal to the visible answer text |
| New `<a>` in each edited answer | exactly 1 each, href and text as expected; `<a>` in FAQ details went 0 to 1 on each of the 5 pages |
| `<details>` count | unchanged on all 5 pages (9, 7, 7, 9, 9) |
| 2 control pages | `<main>` byte-identical |
| Em dash or `--` in added lines | none |

Hashes are SHA-256 cut to 16 hex characters.

## Hash comparison

| page | JSON-LD before | JSON-LD after | text before | text after |
|---|---|---|---|---|
| commercial-plumbing | 0afa15cbba4b0822 | 0afa15cbba4b0822 | 20b320804d87ff33 | 20b320804d87ff33 |
| henderson/commercial-plumbing | fef9a1890316e14a | fef9a1890316e14a | eeb66475a40773a0 | eeb66475a40773a0 |
| las-vegas/commercial-plumbing | 09c9ec6acddf92bd | 09c9ec6acddf92bd | cdf17ebce7ab2dd9 | cdf17ebce7ab2dd9 |
| north-las-vegas/commercial-plumbing | ec241c524c96313d | ec241c524c96313d | 42d9ed1186f194dc | 42d9ed1186f194dc |
| toilet-repair-installation | c882ac031b2a62e1 | c882ac031b2a62e1 | 4ad2d553162d5dbf | 4ad2d553162d5dbf |
| drain-cleaning (control) | 4ad264d0d4d9de83 | 4ad264d0d4d9de83 | ace05c50f23aab29 | ace05c50f23aab29 |
| water-heater-repair-installation (control) | 958e68b6f90216ae | 958e68b6f90216ae | d19479f2732ae539 | d19479f2732ae539 |

## Contextual inbound (from `out/`)

| target | before | after |
|---|---|---|
| /slab-leak-detection-repair/ | 27 | 28 |
| /henderson/slab-leak-detection-repair/ | 14 | 15 |
| /las-vegas/slab-leak-detection-repair/ | 14 | 15 |
| /north-las-vegas/slab-leak-detection-repair/ | 8 | 9 |
| /sewer-line-services/ | 29 | 30 |

## Risks and notes

- The `hidden` attribute is set by FaqSection client state only when a category pill is active. In the prerendered default state no `<details>` carries it, before or after, so the check shows the structure unchanged rather than a toggle test.
- The FAQ link renders as bold underlined text, the existing `FaqAnswer` style, so the five answers look slightly different from their neighbors by design.
- `docs/seo/route-manifest.json` is still modified (rebuild) and unstaged. `scripts/audit/` is untracked.
- IL-025, IL-030, IL-035 and IL-076 were deliberately not implemented, per the prompt.

## Full `git diff -U0 -- app/`

```diff
diff --git a/app/commercial-plumbing/page.tsx b/app/commercial-plumbing/page.tsx
index 6daf282..e42f90d 100644
--- a/app/commercial-plumbing/page.tsx
+++ b/app/commercial-plumbing/page.tsx
@@ -60,0 +61 @@ const COMMERCIAL_FAQS: FaqItem[] = [
+    link: { phrase: "slab leaks", href: "/slab-leak-detection-repair/" },
diff --git a/app/henderson/commercial-plumbing/page.tsx b/app/henderson/commercial-plumbing/page.tsx
index 44e1fd7..430265d 100644
--- a/app/henderson/commercial-plumbing/page.tsx
+++ b/app/henderson/commercial-plumbing/page.tsx
@@ -82,0 +83 @@ const HENDERSON_COMMERCIAL_FAQS: FaqItem[] = [
+    link: { phrase: "slab leaks", href: "/henderson/slab-leak-detection-repair/" },
diff --git a/app/las-vegas/commercial-plumbing/page.tsx b/app/las-vegas/commercial-plumbing/page.tsx
index fda5f59..40dbeba 100644
--- a/app/las-vegas/commercial-plumbing/page.tsx
+++ b/app/las-vegas/commercial-plumbing/page.tsx
@@ -76,0 +77 @@ const LV_COMMERCIAL_FAQS: FaqItem[] = [
+    link: { phrase: "slab leaks", href: "/las-vegas/slab-leak-detection-repair/" },
diff --git a/app/north-las-vegas/commercial-plumbing/page.tsx b/app/north-las-vegas/commercial-plumbing/page.tsx
index a1ff7d4..4088d09 100644
--- a/app/north-las-vegas/commercial-plumbing/page.tsx
+++ b/app/north-las-vegas/commercial-plumbing/page.tsx
@@ -198,0 +199 @@ const NLV_COMMERCIAL_FAQS: FaqItem[] = [
+    link: { phrase: "slab leaks", href: "/north-las-vegas/slab-leak-detection-repair/" },
diff --git a/app/toilet-repair-installation/page.tsx b/app/toilet-repair-installation/page.tsx
index 0b1b906..68c2808 100644
--- a/app/toilet-repair-installation/page.tsx
+++ b/app/toilet-repair-installation/page.tsx
@@ -80,0 +81 @@ const TOILET_FAQS: FaqItem[] = [
+    link: { phrase: "sewer line", href: "/sewer-line-services/" },
```
