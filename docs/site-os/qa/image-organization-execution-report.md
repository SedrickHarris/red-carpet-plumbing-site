# Image Organization Execution Report

**Generated:** 2026-05-25
**Source plan:** `docs/site-os/qa/image-organization-audit.md` (v2)
**Script:** `docs/site-os/qa/migrate-images.ps1`
**Mode:** LIVE EXECUTION (files moved on disk)
**Scope:** `Images/` only. No promotion to `public/images/`. No commits.

## Summary

| Metric | Value |
|---|---:|
| Total files processed (pre-move snapshot) | 176 |
| Files moved | 164 |
| Files left in place (already at target — `blog/` files) | 7 |
| Files moved to `duplicates-review/` (planned per v2 audit) | 19 |
| Files moved to `duplicates-review/` (filename + hash collision) | 0 |
| Filename collisions encountered | 0 |
| Files renamed via `-copy-N` suffix | 0 |
| Files skipped (no rule matched) | 0 |
| Empty source folders removed | 18 |
| Post-move file count | 176 |
| Files deleted | 0 |
| Files moved into `public/images/` | 0 |
| Files committed | 0 |

Pre-move count equals post-move count (176 = 176): **no files were lost**.

## Collision Handling Rules Applied

Per user directive, the script applied these rules when a moved file would collide with an existing file at its target:

1. **Same filename + same SHA256 hash** → reroute to `Images/duplicates-review/`. If a name-collision exists in `duplicates-review/` too, append `-copy-N` suffix before the extension.
2. **Same filename + different SHA256 hash** → place at intended target with a `-copy-N` suffix before the extension.

**No collisions occurred during execution.** All 19 files that landed in `duplicates-review/` were planned there by the v2 audit (hash-identical pairs across organized subfolders that the audit identified before the migration ran). None of the planned-target moves produced same-name conflicts because the source folders contained disjoint filename sets.

## Files Sent To `duplicates-review/` (Planned, 19)

All 19 below were flagged in the v2 audit's "Files Flagged For duplicates-review/" table because each one is a SHA256-identical twin of another file in an organized subfolder. The "kept" file remained at its mapped service target; the file listed here was moved to `duplicates-review/`.

| # | Moved file (original relative path) |
|---:|---|
| 1 | `services/backflow-prevention-services.webp` |
| 2 | `services/drain-cleaning-clog-removal.webp` |
| 3 | `services/Emergency Plumbing/Water Heater Leak Repair  Emergency Plumbing Services  Red Carpet Plumbing Las Vegas.webp` |
| 4 | `services/garbage-disposal-services.webp` |
| 5 | `services/natural-gas-line-services.webp` |
| 6 | `services/Re-Piping/shharris0117_Editorial-style_photo_of_a_licensed_plumber_in_nav_cc67b215-6cbb-4eb8-8a74-81d82dcac4b3.webp` |
| 7 | `services/Sink Repair Services/Modern Bathroom and Kitchen Faucet Installation  Red Carpet Plumbing Las Vegas, NV.webp` |
| 8 | `services/slab-leak-detection-repair.webp` |
| 9 | `services/Toilet Repair/shharris0117_Editorial-style_image_of_a_professional_plumber_in_931a9fe1-dd82-4fe1-be43-0244f66d108e.webp` |
| 10 | `services/toilet-repair-installation.webp` |
| 11 | `services/Video Camera Inspection/shharris0117_Editorial-style_image_of_a_professional_plumber_in_2c7976fd-8dce-481e-9415-ace9884cd9f0.webp` |
| 12 | `services/Video Camera Inspection/shharris0117_Editorial-style_image_of_a_professional_plumber_in_35ee85c6-8a18-4137-987c-e05bde7a5419.webp` |
| 13 | `services/video-camera-plumbing-inspections.webp` |
| 14 | `services/Water Leak and Clog/shharris0117_High-resolution_editorial-style_image_of_a_profess_ec57a48a-0498-4971-8f66-e1732b0af135 (1).jpg` |
| 15 | `services/Water Pipe/shharris0117_Editorial-style_image_of_a_professional_plumber_in_0b7a229e-244b-4bd3-b7ad-8ac5b329cbe6.webp` |
| 16 | `services/water-heater-repair-replacement-installation.webp` |
| 17 | `services/water-leak-clog-troubleshooting.webp` |
| 18 | `services/water-meter-pressure-regulator-services.webp` |
| 19 | `services/water-pipe-repair-replacement-installation.webp` |

## Final Folder Count Summary

| Folder | Files |
|---|---:|
| `Images/blog/` | 7 |
| `Images/brand/favicon/` | 0 (empty, pre-created) |
| `Images/brand/logo/` | 3 |
| `Images/brand/social/` | 1 |
| `Images/company/equipment/` | 0 (empty, pre-created) |
| `Images/company/job-sites/` | 0 (empty, pre-created) |
| `Images/company/team/` | 0 (empty, pre-created) |
| `Images/company/vehicles/` | 4 |
| `Images/duplicates-review/` | 19 |
| `Images/hero/homepage/` | 24 |
| `Images/hero/locations/` | 1 |
| `Images/locations/henderson/` | 1 |
| `Images/locations/las-vegas/` | 7 |
| `Images/locations/spring-valley/` | 1 |
| `Images/locations/summerlin/` | 2 |
| `Images/services/backflow-prevention/` | 6 |
| `Images/services/drain-cleaning/` | 6 |
| `Images/services/emergency-plumbing/` | 20 |
| `Images/services/faucet-sink-repair-installation/` | 6 |
| `Images/services/garbage-disposal-repair-installation/` | 6 |
| `Images/services/gas-line-plumbing/` | 5 |
| `Images/services/leak-detection-repair/` | 5 |
| `Images/services/plumbing-fixture-repair-replacement-installation/` | 6 |
| `Images/services/re-piping/` | 6 |
| `Images/services/slab-leak-detection-repair/` | 6 |
| `Images/services/toilet-repair-installation/` | 5 |
| `Images/services/trenchless-piping/` | 5 |
| `Images/services/video-camera-plumbing-inspections/` | 3 |
| `Images/services/water-heater-repair-installation/` | 6 |
| `Images/services/water-meter-pressure-regulator-services/` | 8 |
| `Images/services/water-pipe-repair-replacement/` | 7 |
| `Images/social/google-business-profile/` | 0 (empty, pre-created) |
| `Images/social/instagram/` | 0 (empty, pre-created) |
| `Images/social/notebooklm/` | 0 (empty, pre-created) |
| **Total files** | **176** |

## Empty Source Folders Removed (18)

These folders held no files after the move and were removed. **No files were deleted.**

- `Images/logo/`
- `Images/company vehicle/`
- `Images/emergency plumbing/`
- `Images/services/Backflow Prevention Services/`
- `Images/services/Drain Cleaning Services/`
- `Images/services/Emergency Plumbing/`
- `Images/services/Garbage Disposal/`
- `Images/services/Natural Gas/`
- `Images/services/Plumbing Fixtures/`
- `Images/services/Re-Piping/` (renamed to lowercase `re-piping/` after move via temp-name rename to force case change on case-insensitive filesystem)
- `Images/services/Sink Repair Services/`
- `Images/services/Slab Leak/`
- `Images/services/Toilet Repair/`
- `Images/services/Trenchless Piping/`
- `Images/services/Video Camera Inspection/`
- `Images/services/Water Heater Services/`
- `Images/services/Water Leak and Clog/`
- `Images/services/Water Meter/`
- `Images/services/Water Pipe/`

## Constraint Compliance

| Constraint | Result |
|---|---|
| No files deleted | Confirmed (176 → 176) |
| Nothing moved into `public/images/` | Confirmed (path does not exist; `public/` contains only scaffold SVGs) |
| Nothing committed | Confirmed (working-tree-only changes; `Images/` is gitignored) |
| File extensions preserved | Confirmed (no extension changes performed by the script) |
| `Images/` remains gitignored | Confirmed (`.gitignore:67:/Images/	Images/`) |
| `docs/site-os/qa/` remains uncommitted | Confirmed (untracked, never staged) |

## Manual-Review Follow-Ups (from v2 plan, still pending)

These are unchanged from the v2 plan and remain as TODOs after this execution:

1. **`services/leak-detection-repair/` (5 files from `Water Leak and Clog`)** may contain images that depict drain clogs rather than leaks. Per-file visual review recommended; reassign clog-focused images to `services/drain-cleaning/` if appropriate.
2. **19 `pixelcut-export (NN).webp` hero files** defaulted to `hero/homepage/`. If any depict service or location-specific scenes, reassign during visual review.
3. **5 generic aerial location shots** defaulted to `locations/las-vegas/` based on filename keywords. Reassign during visual review if any depict Henderson, Summerlin, Aliante, etc.
4. **`brand/favicon/`** is empty. Populate when a higher-res favicon source set is prepared.
5. **`social/google-business-profile/`, `social/instagram/`, `social/notebooklm/`** are empty. Populate when channel-specific assets are ready.
6. **No source images** are present for `services/sewer-line-services/`, `services/commercial-plumbing/`, or several other approved-list services. Content-sourcing gap; not a blocker for the reorganization itself.

## Sidecar CSVs

The script also produced these working files in `docs/site-os/qa/` for full audit reference (uncommitted, ignored by git only if added to `.gitignore`):

- `image-moves.csv` — every move with source path, final target, and route classification.
- `image-collisions.csv` — collisions log (empty this run; not written if zero rows).
