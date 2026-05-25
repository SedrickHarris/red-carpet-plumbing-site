# Favicon Generation Report

**Generated:** 2026-05-25
**Script:** `docs/site-os/qa/generate-favicons.mjs` (Node + sharp)
**Results JSON:** `docs/site-os/qa/_favicon-results.json`
**Mode:** LIVE EXECUTION (assets generated; no commit)

## Source Logo

| Field | Value |
|---|---|
| Source file | `Images/brand/logo/Red Carpet Plumbing logo-trimmed.png` |
| Source dimensions | 414 × 347 px (PNG, alpha channel present) |
| Choice rationale | The trimmed logo is the mascot plumber only (no wordmark). The full transparent logo contains the "RED CARPET PLUMBING" text which would be illegible at 16×16 or 32×32. The mascot plumber with the wrench, blue cap, and red shirt collar stays recognizable even at the smallest favicon size. |

## Sharp Availability

| Item | Result |
|---|---|
| Node version | v22.17.0 (already installed) |
| Sharp install status | Already available as a transitive dependency of `next@16.2.6` (`node_modules/sharp` present) |
| Sharp installed for this task | **No** — used the existing install. No `package.json` change. |

## Design Decisions

- **Mark used:** Mascot plumber from the trimmed logo. No wordmark, no text.
- **Canvas:** Square, transparent background (alpha channel preserved on all PNG outputs and on the ICO embedded PNGs).
- **Centering:** Mark composited centered on the square canvas.
- **Padding:** Scaled per size to keep the mark legible:
  - 16 px and 32 px → 6% padding (mark occupies ~88% of canvas) to maximize detail
  - 48 px → 8% padding
  - 180 / 192 / 512 / 1024 px → 12% padding (cleaner safe area for app-icon contexts)
- **Background:** Transparent everywhere. No solid backplate added.
- **Color preservation:** No color manipulation. The mark retains the existing brand colors (`#981C1E` Primary Brand Red on the shirt collar, `#17469E` Secondary Brand Blue on cap and overalls, `#231F20` Dark Neutral on outlines, `#FFFFFF` White on gloves).

## Generated Files

### PNG icons in `public/images/brand/favicon/`

| Size | File | Dimensions | File size |
|---:|---|---:|---:|
| 16 | `favicon-16x16.png` | 16 × 16 | 0.57 KB |
| 32 | `favicon-32x32.png` | 32 × 32 | 1.52 KB |
| 48 | `favicon-48x48.png` | 48 × 48 | 2.64 KB |
| 180 | `apple-touch-icon-180x180.png` | 180 × 180 | 19.07 KB |
| 192 | `android-chrome-192x192.png` | 192 × 192 | 21.38 KB |
| 512 | `android-chrome-512x512.png` | 512 × 512 | 123.19 KB |
| 512 | `site-icon-512x512.png` | 512 × 512 | 123.19 KB |
| 1024 | `favicon-source.png` | 1024 × 1024 | 437.24 KB |

### ICO at `app/favicon.ico`

| Field | Value |
|---|---|
| File | `app/favicon.ico` |
| Format | Multi-resolution ICO with PNG-encoded payloads |
| Embedded sizes | 16, 32, 48 (each a padded PNG of the mascot on a transparent canvas) |
| File size | 4.79 KB |
| Replaced existing file | **Yes** — the Next.js scaffold default `app/favicon.ico` was overwritten |
| Backup taken | Created `app/favicon.ico.scaffold-backup` during the script run as a safety net, then removed manually after the run to avoid leaving stray files in `app/`. The original scaffold favicon is still recoverable from git history at commit `8729f0c`. |

## Visual Concerns at Small Sizes

Visual review notes after generating and inspecting the icons:

- **16 × 16** — Mascot silhouette is recognizable as "a small figure with a wrench" but facial features are blurred to a few pixels of color. The cap (blue), collar (red), and wrench (gray) read as distinct color blocks. **Acceptable** for browser-tab favicons, but a heavily abstracted mark (e.g., a stylized "R" or wrench glyph) would scale more cleanly. Consider commissioning a single-glyph favicon variant if 16-px tab clarity becomes a brand priority.
- **32 × 32** — The mascot is clearly identifiable as a plumber. Cap, face, overalls, and wrench all read distinctly. **Good.**
- **48 × 48** — Crisp. All brand color elements are visible and the wrench shape is fully resolved. **Good.**
- **180 × 180 and larger** — No visual concerns. The mark sits comfortably inside the 12% safe-area padding, which means iOS and Android home-screen icons will not crop the mark.

No solid backplate was added; the icons will display against whatever surface they sit on (browser tab background, iOS / Android home screen wallpaper). If a particular OS clips transparency or requires a colored background (e.g., older Safari pinned-tab icons), that can be generated as a separate variant.

## Files Not Wired Yet

The script generated assets only. None of the icons are referenced from `app/layout.tsx`, `app/page.tsx`, or any other component. To make the browser pick them up, the following wiring is needed (separate task, awaiting authorization):

- `app/favicon.ico` is already auto-detected by Next.js App Router (no code wiring needed for the basic favicon).
- The remaining PNG icons need to be referenced from the root `<head>` via `<link rel="apple-touch-icon" ...>`, `<link rel="icon" sizes="192x192" ...>`, etc., or surfaced via a Next 13+ `app/icon.png` / `app/apple-icon.png` convention plus a web manifest file. None of that has been done.

## Constraint Compliance

| Constraint | Result |
|---|---|
| Source logo not deleted | Confirmed (still at `Images/brand/logo/Red Carpet Plumbing logo-trimmed.png`) |
| Source logo not moved | Confirmed |
| Unrelated images not modified | Confirmed (only the existing scaffold `app/favicon.ico` was replaced, which was explicitly listed as an output target) |
| Page / component code not modified | Confirmed (no `app/**/*.tsx`, no `app/globals.css`, no shared component touched) |
| Brand colors preserved | Confirmed (no color manipulation; mascot's existing colors retained) |
| Transparent background where practical | Confirmed (all 8 PNGs and the ICO embedded PNGs are transparent) |
| Mark legibility at small sizes | Per-size padding tuned (6% at 16/32, 8% at 48, 12% at 180+); see "Visual Concerns" above |
| Mark used instead of full wordmark | Confirmed (trimmed mascot used; no text) |
| Files organized and URL-safe | Confirmed (all kebab-case lowercase filenames) |
| Nothing committed | Confirmed (`git status` shows working-tree changes only) |

## Validation (npm)

| Command | Result | Notes |
|---|---|---|
| `npm run lint` | **PASS** (exit 0, 0 errors, 0 warnings) | First run produced 1 warning (`'original' is assigned a value but never used`) inside the sidecar `docs/site-os/qa/copy-public-images.mjs` script. That dead assignment was removed; the re-run is clean. No project-code lint changes. |
| `npm run build` | **PASS** (exit 0) | Next.js 16.2.6 (Turbopack). Compiled in 6.2s. TypeScript finished in 4.7s. 4 static pages generated. Output: `Route (app): ○ /, ○ /_not-found  ○ (Static) prerendered as static content`. No errors, no warnings. |
