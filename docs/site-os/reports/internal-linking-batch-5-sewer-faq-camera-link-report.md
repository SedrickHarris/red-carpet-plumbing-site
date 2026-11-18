# Internal Linking Batch 5: Sewer FAQ Camera Link Report (IL-079, FAQ placement)

Base commit: `952427b`. Nothing staged, committed, pushed, or deployed.

## Change

One file, one added line, no removed lines: `app/sewer-line-services/page.tsx`, in the `SEWER_LINE_FAQS` item "How do I know if I need sewer line repair or replacement?", between `answer` and `category`:

    link: { phrase: "sewer camera inspection", href: "/video-camera-plumbing-inspections/" },

Audit note: IL-079 as audited was a body-region link on "camera inspection" with an unverified line. This batch implements an FAQ placement on the phrase "sewer camera inspection" instead, approved at Gate 1.

## Validation

| check | result |
|---|---|
| Diff | `app/sewer-line-services/page.tsx` +1 / -0 |
| Lint, `tsc --noEmit`, build | exit 0, exit 0, exit 0; `check-sitemap-sync: 137 pages built, 135 sitemap URLs, 2 noindex page(s) excluded (/thank-you/, /_not-found/)` |
| Sewer JSON-LD hash | 77b7a4e7eae62d75, identical to before |
| `acceptedAnswer.text` hash for this question | 24276217299847c5, identical to before (444 characters) |
| Sewer visible-text hash | bd4b1ef653565d36, identical to before (a link adds no words) |
| Control drain-cleaning | JSON-LD 4ad264d0d4d9de83 and visible text fe6a9b03f447e78f, both identical |
| New contextual link on `/sewer-line-services/` | exactly one, region FAQ, inside this question's `<details>`, href `/video-camera-plumbing-inspections/`, anchor text exactly "sewer camera inspection" |
| Answer rendering | answer HTML starts `A <a ...>sewer camera inspection</a> is the most reliable...`; visible answer equals schema text; no extra whitespace |
| `<details>` count | 9, unchanged; the other 8 FAQ answers have no anchor |
| Contextual inbound `/video-camera-plumbing-inspections/` | 36 before, 37 after |
| Manifest and sitemap | manifest 136 routes; 135 sitemap URLs; `/thank-you/` linked from nowhere |
| Em dash or `--` in the added line | none |

Hashes are SHA-256 cut to 16 hex characters.

## Risk: unrendered sub-page hrefs (line 116 and six siblings)

`app/sewer-line-services/page.tsx:116` is `href: "/sewer-line-services/camera-inspection/"` inside `SEWER_LINE_SERVICES_LIST: ServiceTypeCard[]` (declared at line 112; rendered at line 507). The list has 7 cards whose hrefs point to routes that do not exist: camera-inspection, cleaning, repair, replacement, cipp-lining, pipe-bursting, root-intrusion (lines 117, 126, 135, 144, 154, 163, 173 after the edit).

- The cards render through `ServiceCard` with `built={false}`, so the title is a `<span aria-disabled="true">` and there is no `Learn More` link.
- The href is used only as the React `key` (`key={card.href}`), so it appears in the built HTML only inside the Next.js flight payload script, as the article key. There is no `<a href>` to any of the 7 routes in the built page (0 anchors).
- None of the 7 routes is in `docs/seo/route-manifest.json`.
- Conclusion: these are dead, unrendered placeholders for sub-pages that are not built. Nothing crawlable points at them today. If those pages are built later, flip `built` for the card and add the route to the manifest. The "Sewer Camera Inspection" card is currently an unlinked card even though a live page on the same topic exists (`/video-camera-plumbing-inspections/`); linking it is a possible follow-up for Sedrick to decide, not part of this batch.

## Notes

- `docs/seo/route-manifest.json` is still modified by rebuilds and unstaged. `scripts/audit/` is untracked.

## Full `git diff -U0 -- app/`

```diff
diff --git a/app/sewer-line-services/page.tsx b/app/sewer-line-services/page.tsx
index b2f59a5..a28ed32 100644
--- a/app/sewer-line-services/page.tsx
+++ b/app/sewer-line-services/page.tsx
@@ -64,0 +65 @@ const SEWER_LINE_FAQS: FaqItem[] = [
+    link: { phrase: "sewer camera inspection", href: "/video-camera-plumbing-inspections/" },
```
