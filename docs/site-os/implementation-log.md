# Red Carpet Plumbing Implementation Log

Append-only build log for Site OS implementation work. One entry per build.

---

## Batch 5, Page 11 — Leak Detection and Repair in Henderson

- **Route:** `/henderson/leak-detection-repair/`
- **File created:** `app/henderson/leak-detection-repair/page.tsx`
- **Status:** Created (uncommitted, untracked). Pending Prompt 07 QA.
- **Schema:** WebPage + BreadcrumbList + Service + HowTo + FAQPage (5 separate JsonLd blocks).
- **Deviations from the approved brief (flagged in build report):**
  1. Schema uses the established site-wide shape (Service.provider = Plumber; areaServed City Henderson + containedInPlace State Nevada, no `sameAs`; WebPage isPartOf WebSite; separate JsonLd blocks) instead of the brief's publisher/LocalBusiness/breadcrumb-@id/single-block variant. The brief's `areaServed.sameAs` Q491269 was omitted — the site references Henderson as Q491204 elsewhere, so a conflicting ID was avoided.
  2. Added HowTo schema for the visible Section 6 process steps (consistent with the 10 sibling Batch-5 pages; the brief's schema list omitted it).
  3. Core `/leak-detection-repair/` page NOT edited (brief allowed-files list excluded it). Its stale `/henderson/leak-detection-repair/ not yet built` comment remains and no Henderson dedicated-pages inbound link was added there. Recommended later cleanup.
  4. Hero uses `/images/services/leak-detection-repair/hero.webp` (consistent with the Las Vegas leak page) rather than card.webp.
- **Trust claims:** This page shows 4.8/76 rating, "Over 40 years," and "24/7 emergency service" (per this brief) with FLAG: VERIFY comments — note the 10 prior Batch-5 service-location pages used conservative wording instead.
- **Validation:** lint, tsc --noEmit, build — see build report.

---

## Batch 5, Page 12 — Leak Detection and Repair in North Las Vegas

- **Route:** `/north-las-vegas/leak-detection-repair/`
- **File created:** `app/north-las-vegas/leak-detection-repair/page.tsx`
- **Status:** Created (uncommitted, untracked). Pending Prompt 07 QA.
- **Schema:** WebPage + BreadcrumbList + Service + HowTo + FAQPage (established site-wide pattern per standing guardrail; Plumber provider, areaServed City North Las Vegas + State Nevada, no sameAs; the brief's publisher/LocalBusiness/single-block/sameAs Q494541 variant was not used).
- **Content:** NLV dual-vintage leak causes (galvanized older central NLV + Aliante 2000-2008 copper first service cycle + hard water 17-24 gpg + caliche/closed-loop). Visible warning-signs list; meter-check FAQ (Q2); galvanized FAQ (Q3); Aliante FAQ (Q4). Live Aliante hub link; commercial corridor (Craig Road/Cheyenne/Losee) callout.
- **Trust claims:** shows 4.8/76, "Over 40 years," 24/7 (per brief) with FLAG: VERIFY comments — same as Page 11, differs from conservative Pages 1-10.
- **Core `/leak-detection-repair/` NOT edited** (brief allowed-files scope) — its `/north-las-vegas/leak-detection-repair/ not yet built` comment remains; no NLV inbound link added there. Recommended later cleanup.
- **Validation:** lint, tsc --noEmit, build — see build report.

---

## Batch 5, Page 13 — Slab Leak Detection and Repair in Las Vegas

- **Route:** `/las-vegas/slab-leak-detection-repair/`
- **File created:** `app/las-vegas/slab-leak-detection-repair/page.tsx`
- **Status:** Created (uncommitted, untracked). Pending Prompt 07 QA.
- **Schema:** WebPage + BreadcrumbList + Service + HowTo + FAQPage (established site-wide pattern per standing guardrail; Plumber provider, areaServed City Las Vegas + State Nevada, no sameAs; separate JsonLd blocks). Brief's combined-block / `breadcrumb` nested-in-WebPage variant not used — BreadcrumbList kept as its own block per site convention.
- **Content:** Slab-specific. 4 LV cause anchors (hard water 280 ppm copper corrosion + caliche/clay soil + aging copper/polybutylene pre-2000 + closed-loop pressure). New Repair Options section (Section 5): spot repair, pipe rerouting, epoxy lining — each definition-first H3. Slab-specific warning-signs list (warm floors, foundation cracks). 4-step HowTo process. 6 FAQs (signs, causes, detection, options, reroute-vs-spot, duration). Neighborhood grid (Desert Inn/West Sahara, Desert Shores, Sunrise Manor, Whitney, Winchester, SW LV, etc.).
- **Internal links (all 9 from brief):** core slab + LV leak (Section 3); water-pipe-repair-replacement (spot repair card); re-piping (rerouting card, TODO-BATCH-5 fallback to core `/re-piping/` until `/las-vegas/re-piping/` P15 built); LV emergency (mid CTA); LV plumbing services + Henderson slab (Section 8, TODO-BATCH-5 fallback to core `/slab-leak-detection-repair/` until P14 built); LV water-heater + LV drain (related). Required link anchors added via minimal "Learn more about our X" sentences, consistent with P10-P12 approved pattern.
- **Trust claims:** shows 4.8/76, "Over 40 years," 24/7 (per brief) with FLAG: VERIFY comments — consistent with Pages 11-12.
- **Hero image:** `card.webp` (92KB) used as hero background; `hero.webp` is low-res 18KB (TODO higher-res), same decision as Pages 7-9.
- **Validation:** lint, tsc --noEmit, build — see build report.

---

## Batch 5, Page 14 — Slab Leak Detection and Repair in Henderson

- **Route:** `/henderson/slab-leak-detection-repair/`
- **File created:** `app/henderson/slab-leak-detection-repair/page.tsx`
- **Status:** Created (uncommitted, untracked). Pending Prompt 07 QA.
- **Schema:** WebPage + BreadcrumbList + Service + HowTo + FAQPage (established site-wide pattern per standing guardrail; Plumber provider, areaServed City Henderson + containedInPlace State Nevada, no sameAs; 5 separate JsonLd blocks). The brief presented schema as one combined array — rendered as separate blocks per site convention, matching siblings P11/P13.
- **Content:** Slab-specific, Henderson-localized. Section 4 distinguishes Green Valley original neighborhoods (mid-1980s–mid-1990s, copper + polybutylene, highest risk) from Green Valley Ranch (mid-1990s–mid-2000s, lower but present risk) within Cause Factor 1, per Step 04 gap fix. 4 cause anchors (Green Valley aging pipe + caliche/clay soil + hard water 17–24 gpg / 280 ppm + closed-loop pressure). Repair Options (Section 5): spot repair, pipe rerouting, epoxy lining — each definition-first H3. Slab-specific warning-signs `<ul>`. 4-step `<ol>` HowTo process. 6 FAQs (signs, causes, Green Valley vs newer, non-invasive detection, reroute-vs-spot, duration). Communities grid (Green Valley + Lake Las Vegas live links; Green Valley Ranch, Seven Hills, MacDonald Ranch, Anthem, Tuscany Village, Inspirada, Whitney Ranch, Downtown Henderson as text chips).
- **Internal links (all 9 from brief):** core slab + Henderson leak (Section 3 intro); water-pipe-repair-replacement (spot repair card); re-piping (rerouting card — see deviation 2 below); Henderson emergency (mid CTA); Henderson plumbing services (Section 8 intro); Green Valley + Lake Las Vegas hubs (Section 8 community chips); Las Vegas slab leak (Section 8 closing). Required link anchors added via minimal "Learn more about our X" / "see our X" connective sentences, consistent with the approved P10–P13 pattern.
- **Deviations from the approved brief (flagged):**
  1. Connective sentences added to host required internal links in Sections 7 and 8 (Henderson emergency plumbing; Henderson plumbing services). The brief's section paragraphs did not include these link sentences, but the brief's own internal-link table marks them Required; resolved per the established sibling precedent (P11/P13). No substantive copy invented.
  2. Per Guardrail 14, the Section 5 pipe-rerouting link points to the built `/water-pipe-repair-replacement/` as the active fallback with a TODO-BATCH-5 comment to switch to `/henderson/re-piping/` (anchor "Henderson re-piping") when P16 is built. As a result `/water-pipe-repair-replacement/` is linked from both the spot-repair and rerouting cards until P16 lands.
  3. No standalone "Related Plumbing Services" section was added — the Page 14 brief outline does not include one (unlike P11/P13), so none was created (Guardrail 2, no added content).
- **Trust claims:** shows 4.8/76, "Over 40 years," 24/7 (per brief) with FLAG: VERIFY comments — consistent with Pages 11–13.
- **Hero image:** `card.webp` used as hero background (alt "slab leak detection in Henderson, NV"); `hero.webp` is low-res (TODO higher-res), same decision as P13.
- **Validation:** `eslint` (clean), `tsc --noEmit` (clean), `next build` (route prerendered as static ○). All pass.

---

## Batch 5, Page 15 — Re-Piping Services in Las Vegas

- **Route:** `/las-vegas/re-piping/`
- **File created:** `app/las-vegas/re-piping/page.tsx`
- **Status:** Created (uncommitted, untracked). Pending Prompt 07 QA.
- **Schema:** WebPage + BreadcrumbList + Service + HowTo + FAQPage (established site-wide pattern per standing guardrail; Plumber provider, areaServed City Las Vegas + containedInPlace State Nevada, no sameAs; 5 separate JsonLd blocks). Brief presented schema as one combined array — rendered as separate blocks per site convention. **No AggregateRating** (Guardrail 4 — the core `/re-piping/` page carries AggregateRating, this service-location page intentionally does not) and **no hasCredential**, matching siblings P13/P14.
- **Content:** Re-piping, Las Vegas-localized. 8-item signs `<ul>`. Pipe Material Guide (Section 3): 4 era H3s (polybutylene 1975–1995, Kitec late-1990s–2005 with orange/blue + brass-fitting identification detail, galvanized pre-1975, copper 1975–2000 pitting). 7 service cards (whole-house, partial, polybutylene, Kitec, galvanized, PEX, copper) rendered via `ServiceCard` with `built={false}` (non-linked descriptive cards + ServiceImagePlaceholder, matching the core page — the brief assigns no routes to these cards). Repair-vs-Repipe decision section (Section 5) opens with a direct-answer paragraph (Step 04 gap fix) then 2 H3s. 4-step `<ol>` HowTo with permit/inspection close-out. Neighborhood era grid (10 items). PEX attic insulation 150°F detail in Card 6 + FAQ Q4; permit-jurisdiction (LV/Henderson/NLV) framing in FAQ Q3 + Step 1/4.
- **Internal links (all 8 from brief):** re-piping services (Section 3 intro); Las Vegas slab leak detection + water pipe repair and replacement (Section 5 "right call", brief-specified placement); Las Vegas emergency plumbing (Section 7 mid CTA); Las Vegas plumbing services (Section 8 intro); Henderson re-piping (Section 8 closing — see deviation 2); Las Vegas water heater repair + Las Vegas leak detection (Related Plumbing Services block, see deviation 1). Required link anchors added via minimal connective sentences, consistent with the approved P10–P14 pattern.
- **Deviations from the approved brief (flagged):**
  1. Added a compact "Related Plumbing Services" block (Section 9b) before the final CTA to host the required `/las-vegas/water-heater-repair-installation/` link (brief link-table placement "Section 10 related") and the `/las-vegas/leak-detection-repair/` link (table allowed "Section 4 or 5"). The `CTASection` body is plain text and cannot host inline links, so the related block follows the established sibling P13 pattern. No prose invented beyond link labels.
  2. Per Guardrail 14, the Section 8 closing "Henderson re-piping page" link points to the built `/re-piping/` core page as the active fallback, with a TODO-BATCH-5 comment to switch to `/henderson/re-piping/` when P16 is built.
  3. Connective sentences added to host required links in Sections 3, 7, and 8 (re-piping services; Las Vegas emergency plumbing; Las Vegas plumbing services). Brief section paragraphs did not include these link sentences but the brief's internal-link table marks them Required; resolved per sibling precedent.
  4. 1b colored trust strip (4 items) is a factual restatement of brief content (services, license, permits, materials) — no new business claims — matching the derived strips on P13/P14. The 5 brief-listed Section-1 trust items render as the hero `trustItems`.
- **Trust claims:** shows 4.8/76, "Over 40 years," and permit/inspection handling (per brief) with FLAG: VERIFY comments — consistent with Pages 11–14.
- **Hero image:** `/images/services/re-piping/hero.webp` used as hero background (alt "re-piping service in Las Vegas, NV"); no `card.webp` exists for this service.
- **Validation:** `eslint` (clean), `tsc --noEmit` (clean), `next build` (route prerendered as static ○). All pass.

---

## Batch 5, Page 16 — Re-Piping Services in Henderson

- **Route:** `/henderson/re-piping/`
- **File created:** `app/henderson/re-piping/page.tsx`
- **Status:** Created (uncommitted, untracked). Pending Prompt 07 QA.
- **Schema:** WebPage + BreadcrumbList + Service + HowTo + FAQPage (established site-wide pattern per standing guardrail; Plumber provider, areaServed City Henderson + containedInPlace State Nevada, no sameAs; 5 separate JsonLd blocks). Brief presented schema as one combined array — rendered as separate blocks per site convention. **No AggregateRating** (Guardrail 4) and **no hasCredential**, matching siblings P13/P14/P15.
- **Content:** Re-piping, Henderson-localized. 8-item signs `<ul>`. Pipe Material Guide (Section 3) uses 4 distinct H3 blocks separating Green Valley original (1985–1995 polybutylene + aging copper, highest concentration of candidates) from Green Valley Ranch (late-1990s–2005 Kitec in condos/HOAs, with orange/blue + brass-fitting identification), plus hard-water-across-all-eras and galvanized-in-older-properties blocks — the Step 04 gap fix against reader conflation. 7 service cards (whole-house, partial, polybutylene, Kitec, galvanized, PEX, copper) via `ServiceCard` `built={false}` (non-linked descriptive cards, matching core/P15). Repair-vs-Repipe (Section 5) opens with direct-answer paragraph then 2 H3s, with the slab-leak-history tie-in to P14. 4-step `<ol>` HowTo with Henderson permit/inspection close-out. Communities grid (Green Valley + Lake Las Vegas live links; 8 text chips). PEX attic 150°F detail in Card 6 + FAQ Q5; Henderson permit framing in FAQ Q3 + Steps 1/4; Green Valley repipe-candidate FAQ Q4.
- **Internal links (all 9 from brief, ALL resolve to built routes — no TODO links on this page per Guardrail 14):** re-piping services (Section 3 intro); Henderson leak detection (Section 4 intro, table-allowed "Section 4 or 5"); Henderson slab leak detection + water pipe repair and replacement (Section 5 "right call", brief-specified); Henderson emergency plumbing (Section 7 mid CTA); Henderson plumbing services (Section 8 intro); Green Valley + Lake Las Vegas hubs (Section 8 community chips); Las Vegas re-piping (Section 8 closing, P15). Required link anchors added via minimal connective sentences, consistent with the approved P10–P15 pattern.
- **Deviations from the approved brief (flagged):**
  1. Connective sentences added to host required links in Sections 3, 4, 7, and 8 (re-piping services; Henderson leak detection; Henderson emergency plumbing; Henderson plumbing services). Brief section paragraphs did not include these link sentences but the brief's internal-link table marks them Required; resolved per sibling precedent. No substantive copy invented.
  2. 1b colored trust strip (4 items) is a factual restatement of brief content (services, license, permits, materials) — no new business claims — matching P13/P14/P15. The 5 brief-listed Section-1 trust items render as the hero `trustItems`.
- **Carry-forward (not actioned — outside this brief's allowed-files scope):** P16 is now built, so the TODO-BATCH-5 fallback links on **P14** (`/henderson/slab-leak-detection-repair/` pipe-rerouting card, currently → `/water-pipe-repair-replacement/`, target anchor "Henderson re-piping") and **P15** (`/las-vegas/re-piping/` Section 8 closing, currently → `/re-piping/`) can now be activated to point at `/henderson/re-piping/`. Recommended follow-up edit when those files are in scope.
- **Trust claims:** shows 4.8/76, "Over 40 years," and permit/inspection handling (per brief) with FLAG: VERIFY comments — consistent with Pages 11–15.
- **Hero image:** `/images/services/re-piping/hero.webp` (alt "re-piping service in Henderson, NV"); no `card.webp` exists for this service.
- **Validation:** `eslint` (clean), `tsc --noEmit` (clean), `next build` (route prerendered as static ○). All pass.

---

## Batch 5 — Link activations (post-P16)

- Following P14/P15/P16 builds, the standing TODO-BATCH-5 fallbacks were activated across the cluster (separate instructions, allowed-files scope each time):
  - **P11** `app/henderson/leak-detection-repair/page.tsx` — Section 5 Card 4 slab link → `/henderson/slab-leak-detection-repair/`.
  - **P10** `app/las-vegas/leak-detection-repair/page.tsx` — in-content slab card + RELATED_SERVICES slab → `/las-vegas/slab-leak-detection-repair/`.
  - **P13** `app/las-vegas/slab-leak-detection-repair/page.tsx` — rerouting card → `/las-vegas/re-piping/`; Section 8 closing → `/henderson/slab-leak-detection-repair/`.
  - **P14** `app/henderson/slab-leak-detection-repair/page.tsx` — rerouting card → `/henderson/re-piping/` (anchor "Henderson re-piping").
  - All corresponding TODO-BATCH-5 comments replaced with `ACTIVATED:` notes. **P12** (`north-las-vegas/leak-detection-repair`) left parked — `/north-las-vegas/slab-leak-detection-repair/` is not built.

---

## Batch 5, Page 18 — Commercial Plumbing in Henderson

- **Route:** `/henderson/commercial-plumbing/`
- **File created:** `app/henderson/commercial-plumbing/page.tsx`
- **Status:** Created (uncommitted, untracked). Pending Prompt 07 QA.
- **Schema:** WebPage + BreadcrumbList + Service + HowTo + FAQPage (established site-wide pattern; Plumber provider, areaServed City Henderson + containedInPlace State Nevada, no sameAs; 5 separate JsonLd blocks). **No AggregateRating** (Guardrail 4) and **no hasCredential**, matching siblings P13–P16 (the core `/commercial-plumbing/` page carries both; this service-location page omits them).
- **Content:** Commercial, Henderson-localized. Section 2 "Who We Serve" = direct-answer intro + 4 H3 segment cards (business owners, restaurants, property managers, HOA/master-planned — HOA block opens direct-answer per Step 04). Section 3 = 8 `ServiceCard`s rendered `built={true}` so each links live to its built service route (drain cleaning, grease trap→core commercial, water heater, leak detection, sewer, backflow, pipe repair→core commercial, emergency). Section 4 = 4 Henderson commercial-context H3s (HOA infrastructure, GVR/business corridors with Kitec note, Henderson permits, hard water at scale). Section 5 = 4-step `<ol>` HowTo. Section 7 = named corridor/community chips (Lake Las Vegas Resort Area linked) + Green Valley & Henderson-overview community links. 6-item FAQ.
- **Internal links:** 9 of 10 brief targets resolve to built routes and are placed as specified — `/commercial-plumbing/` (Section 3 intro, wrapped on the existing "commercial plumbing services" phrase); `/henderson/drain-cleaning/`, `/henderson/leak-detection-repair/`, `/sewer-line-services/`, `/backflow-prevention/` (Section 3 cards, live via `ServiceCard`); `/henderson/emergency-plumbing/` (Section 6 CTA); `/lake-las-vegas-plumbing-services/` (Section 7 area chip); `/green-valley-plumbing-services/` + `/henderson-plumbing-services/` (Section 7 community links).
- **Deviations from the approved brief (flagged):**
  1. **Guardrail 14 could not be met as written — `/las-vegas/commercial-plumbing/` (P17) is NOT built** (only the core `/commercial-plumbing/` exists; the brief's own closing summary lists "P17 build + QA" as pending). To avoid a dangling 404 on the Section 7 closing link, it points to the built core `/commercial-plumbing/` (currently titled "Commercial Plumbing in Las Vegas, NV") as the active fallback, with a `TODO-BATCH-5` comment to switch to `/las-vegas/commercial-plumbing/` when P17 is built. This is the only TODO-BATCH link on the page and the only deviation from Guardrail 14, forced by the missing dependency. Anchor "Las Vegas commercial plumbing" preserved.
  2. Hero uses the core-commercial pattern (`accentWidth="sm"`, no background image) with a TODO — no `public/images/services/commercial-plumbing/` assets exist. Section 3 cards use `ServiceImagePlaceholder` (TODO) for the same reason.
  3. 1b colored trust strip (4 items) is a factual restatement of brief content (license, commercial focus, HOA/PM service, permits) — no new claims — matching P13–P16. The 5 brief-listed Section-1 trust items render as the hero `trustItems`.
  4. Section 3 intro `/commercial-plumbing/` link wraps the existing "commercial plumbing services" phrase rather than adding a sentence (cleaner; no added copy).
- **FLAG handling (Guardrail 8/11):** the 24/7 emergency-availability FLAG appears as an inline source comment at each instance — hero trust strip item, Section 3 emergency card, Section 5 Step 1, FAQ Q5 — plus the top-of-file block. No FLAG text appears in any visible string or schema text; FAQ visible text and FAQPage schema derive from one array and match character-for-character.
- **Trust claims:** shows 4.8/76, "Over 40 years," and 24/7 commercial emergency service (per brief) with FLAG: VERIFY comments — consistent with Pages 11–16.
- **Validation:** `eslint` (clean), `tsc --noEmit` (clean), `next build` (route prerendered as static ○). All pass.

---

## Batch 5, Page 17 — Commercial Plumbing in Las Vegas

- **Route:** `/las-vegas/commercial-plumbing/`
- **File created:** `app/las-vegas/commercial-plumbing/page.tsx`
- **Status:** Created (uncommitted, untracked). Self-QA PASS.
- **Schema:** WebPage + BreadcrumbList + Service + HowTo + FAQPage (established site-wide pattern; Plumber provider, areaServed City Las Vegas + containedInPlace State Nevada, no sameAs; 5 separate JsonLd blocks). **No AggregateRating** (Guardrail 4) and **no hasCredential**, matching siblings P13–P16/P18 (the core `/commercial-plumbing/` page carries both; this service-location page omits them).
- **Content:** Direct sibling of P18, Las Vegas-localized. Section 2 "Who We Serve" = direct-answer intro + 4 H3 segment cards (business owners, restaurants/hospitality, property managers/multi-unit, facilities managers). Section 3 = 8 `ServiceCard`s `built={true}` linking live to built routes (LV drain cleaning, grease trap→core commercial, water heater, LV leak detection, sewer, backflow, pipe repair→core commercial, LV emergency). Section 4 = 4 LV market H3s (hospitality corridor, property management, Clark County permits/license, hard water at scale). Section 5 = 4-step `<ol>` HowTo. Section 7 = 9 corridor/area text chips + Henderson commercial closing link. 6-item FAQ.
- **Internal links (all targets resolve to built routes):** `/commercial-plumbing/` (Section 3 intro, wrapped on existing "commercial plumbing services" phrase); `/las-vegas/drain-cleaning/`, `/las-vegas/leak-detection-repair/`, `/sewer-line-services/`, `/backflow-prevention/` (Section 3 cards, live via `ServiceCard`); `/las-vegas/emergency-plumbing/` (Section 6 CTA); `/las-vegas-plumbing-services/` (Section 7 intro); `/henderson/commercial-plumbing/` (Section 7 closing — see deviation 1).
- **Deviations from the approved brief (flagged):**
  1. **Guardrail 14 intentionally not followed — and correctly so.** The brief required a `TODO-BATCH-5` fallback to `/commercial-plumbing/` "until P18 is built," but **P18 (`/henderson/commercial-plumbing/`) is already built**. So the Section 7 closing link points directly and live to `/henderson/commercial-plumbing/` (no fallback, no TODO), mirroring how P16 linked directly to the already-built P15. A source comment documents why the guardrail's fallback was unnecessary. There are **no TODO-BATCH links on this page.**
  2. Hero uses the core-commercial pattern (`accentWidth="sm"`, no background image) with a TODO — no `public/images/services/commercial-plumbing/` assets exist. Section 3 cards use `ServiceImagePlaceholder` (TODO).
  3. 1b colored trust strip (4 items) is a factual restatement of brief content (license, commercial focus, property-manager/multi-unit service, permits) — no new claims — matching P13–P16/P18. The 5 brief Section-1 trust items render as the hero `trustItems`.
  4. Section 3 intro `/commercial-plumbing/` link wraps the existing "commercial plumbing services" phrase rather than adding a sentence; Section 7 `/las-vegas-plumbing-services/` link added as a minimal connective sentence (sibling precedent).
- **FLAG handling (Guardrail 8/11):** the 24/7 emergency-availability FLAG appears as an inline source comment at each instance — hero trust strip item, Section 3 emergency card, Section 5 Step 1, FAQ Q5 — plus the top-of-file block. No FLAG text appears in any visible string or schema text; FAQ visible text and FAQPage schema derive from one array (character-for-character).
- **Validation:** `eslint` (clean), `tsc --noEmit` (clean), `next build` (`/las-vegas/commercial-plumbing` prerendered static ○). All pass.

---

## Batch 5 — Link activation (post-P17): P18 Section 7

- With P17 (`/las-vegas/commercial-plumbing/`) now built and passing self-QA, the P18 fallback was activated:
  - **P18** `app/henderson/commercial-plumbing/page.tsx` — Section 7 closing "Las Vegas commercial plumbing" link → `/las-vegas/commercial-plumbing/` (was fallback `/commercial-plumbing/`); TODO-BATCH-5 comment replaced with `ACTIVATED: /las-vegas/commercial-plumbing/ built (P17)`.
- This clears the last commercial-cluster fallback.
- **Validation after activation:** `eslint` (clean), `tsc --noEmit` (clean), `next build` (all routes prerendered static ○). All pass.

---

## Batch 5 — Link activation: P15 Section 8 (final fallback cleared)

- **P15** `app/las-vegas/re-piping/page.tsx` — Section 8 closing "Henderson re-piping page" link → `/henderson/re-piping/` (was fallback `/re-piping/`); TODO-BATCH-5 comment replaced with `ACTIVATED: /henderson/re-piping/ built (P16)`.
- This was the last remaining TODO-BATCH-5 fallback across the built Batch-5 pages. **Only remaining parked TODO-BATCH-5:** P12 (`north-las-vegas/leak-detection-repair`) slab-leak card → `/slab-leak-detection-repair/`, awaiting `/north-las-vegas/slab-leak-detection-repair/` (not built).
- **Validation:** `eslint` (clean), `tsc --noEmit` (clean), `next build` (all 57 routes prerendered static ○). All pass.

---

## Batch 6, Page 30 — Drain Cleaning in Green Valley

- **Route:** `/green-valley/drain-cleaning/`
- **File created:** `app/green-valley/drain-cleaning/page.tsx`
- **Status:** Created (uncommitted, untracked). Self-QA PASS. Pending Prompt 07 QA.
- **Schema:** Service + BreadcrumbList + HowTo + WebPage + FAQPage (5 separate JsonLd blocks, rendered in the brief-specified order). **Green Valley areaServed pattern** — `Place` (Green Valley, Nevada) → containedInPlace `City` (Henderson) → containedInPlace `State` (Nevada). NOT City, NOT AdministrativeArea, NOT Clark County. **No AggregateRating** (Guardrail 4), no `sameAs`, no `hasCredential`. HowTo derives from `GV_DRAIN_STEPS`; FAQPage from `GV_DRAIN_FAQS` (character-for-character with visible text).
- **Content:** Two-era Green Valley framing throughout (original GV late-1970s–mid-1990s copper 30–45yr = highest clog concentration in Henderson; GV Ranch mid-1990s–mid-2000s first-service-cycle copper 20–30yr). Section 2 direct-answer + 4 cause factors (hard water mineral bonding 17–24 gpg / Lake Mead lead; original GV copper; GV Ranch; tree root intrusion). Section 3 two-era H2. Section 5 = 6 service blocks (sewer-line + video-camera carry inline core links via the Henderson sibling "Learn more about our X" connector). Section 6 = 4-step `<ol>` HowTo. Green Valley always paired with Henderson; never described as a city.
- **Internal links (all live targets resolve to built routes):** `/green-valley-plumbing-services/` (Section 2 + community chip), `/henderson-plumbing-services/` (Section 3 + Section 8 + community chip), `/drain-cleaning/` (Section 4), `/sewer-line-services/` + `/video-camera-plumbing-inspections/` (Section 5 cards), `/henderson/drain-cleaning/` (related block), `/lake-las-vegas-plumbing-services/` (community chip), `/contact/` (CTAs). **TODO-BATCH-6 (plain text only, no anchor):** `/green-valley/slab-leak-detection-repair/` (Section 3 closing sentence), `/green-valley/water-heater-repair-installation/` + `/green-valley/leak-detection-repair/` (related-services block) — each carries an inline `TODO-BATCH-6` comment.
- **Deviations from the approved brief (flagged, user-approved before build):**
  1. **Em dash → comma (approved).** The Section 2 intro's "...dissolved minerals — among the highest..." em dash was changed to a comma to satisfy the absolute no-em-dash copy rule (which conflicted with the do-not-rewrite-copy guardrail). The comma phrasing already matches the same fact as written in `GV_DRAIN_FACTORS[0]`. User approved the comma fix before the build began. No other copy altered.
  2. **Meta description exceeds the ≤160-char standard** (~213 chars). Kept exactly as approved per the established sibling precedent (P11 Henderson), with an inline `FLAG` comment; metadata changes need approval, so not trimmed.
- **Carry-forward (out of this brief's allowed-files scope — not actioned):** Step 10's recommended hub cross-link — adding `/green-valley/drain-cleaning/` to the `/green-valley-plumbing-services/` hub — was **not** done; the hub is not in this brief's Files Allowed to Edit and Guardrail 14 forbids touching sibling files. The GV hub's Drain Cleaning entry still points at core `/drain-cleaning/`. Recommended follow-up when the hub is in scope.
- **Trust claims:** shows 4.8/76, "Over 40 years," transparent pricing, and emergency availability (per brief) with FLAG: VERIFY comments at each instance plus the top-of-file block. No FLAG text in any visible string or schema.
- **Hero image:** `/images/services/drain-cleaning/hero.webp` (alt "drain cleaning service in Green Valley, Henderson, NV").
- **Validation:** `eslint` (clean), `tsc --noEmit` (clean), `next build` (`/green-valley/drain-cleaning` prerendered static ○). All pass.

---

## Batch 6, Page 31 — Water Heater Repair and Installation in Green Valley

- **Route:** `/green-valley/water-heater-repair-installation/`
- **File created:** `app/green-valley/water-heater-repair-installation/page.tsx`
- **Status:** Created (uncommitted, untracked). Self-QA PASS. Pending Prompt 07 QA.
- **Schema:** WebPage + BreadcrumbList + Service + HowTo + FAQPage (5 separate JsonLd blocks, rendered in the brief-specified order: webpage, breadcrumb, service, howTo, faq). **Green Valley areaServed pattern** — `Place` (Green Valley, Nevada) → containedInPlace `City` (Henderson) → `State` (Nevada). NOT City, NOT AdministrativeArea, NOT Clark County. **No AggregateRating** (Guardrail 4), no `sameAs`, no `hasCredential`. HowTo derives from `GV_WH_STEPS`; FAQPage from `GV_WH_FAQS` (character-for-character with visible text).
- **Code/permit framing:** installations to **Clark County plumbing code** (seismic bracing, thermal expansion tank); **permits handled through the City of Henderson** — stated in cause factor 4, Section 5 cards, HowTo step 4, and FAQ Q6. Distinct from the Boulder City pages (own building department); no Boulder City language used.
- **Content:** Two-era Green Valley framing leads (original GV late-1970s–mid-1990s, 30–45yr, second/third water heater cycle, highest concentration of WH service candidates in Henderson; GV Ranch mid-1990s–mid-2000s, 20–30yr, original/first-replacement units at or past the 8–12yr LV service life). Section 2 AEO direct answer (8–12yr lifespan in sentence one). Section 3 = 4 cause cards (original GV aging, GV Ranch second cycle, hard water sediment/anode rod, closed-loop/Clark County code) + a plain-text slab-leak closing note (TODO-BATCH-6). Section 4 = 8-item signs `<ul>`. Section 5 = 7 service cards (re-piping support card carries the only inline link via the "Learn more about our X" connector; gas card carries a source-only `flag` field + comment, never rendered). Section 6 = repair-vs-replace, 2 H3s. Section 7 = 4-step `<ol>` HowTo. Green Valley always paired with Henderson; never described as a city.
- **Internal links (all live targets resolve to built routes):** `/water-heater-repair-installation/` (Section 2), `/green-valley-plumbing-services/` (Section 2 + community chip), `/re-piping/` (Section 5 card), `/henderson-plumbing-services/` (Section 9 + chip), `/green-valley/drain-cleaning/` + `/henderson/water-heater-repair-installation/` (related block, both built), `/lake-las-vegas-plumbing-services/` (chip), `/contact/` (CTAs). **TODO-BATCH-6 (plain text only, no anchor, inline comment):** `/green-valley/slab-leak-detection-repair/` (Section 3 closing note) and `/green-valley/leak-detection-repair/` + `/green-valley/slab-leak-detection-repair/` (related-services block).
- **Deviations from the approved brief (flagged):**
  1. **Meta description exceeds the ≤160-char standard** (~205 chars). Kept exactly as approved per the established sibling precedent (P11/P30), with an inline `FLAG` comment; metadata changes need approval, so not trimmed.
  2. Section 3's "re-piping service item in cause factor 1" instruction (Step-10/Section-3 prose) appears to be a template carryover — `GV_WH_CAUSES[0]` contains no re-piping anchor text, and the internal-link table places the `/re-piping/` link in the Section 5 re-piping-support card. Resolved per the link table: the re-piping link renders in Section 5 only (anchor "re-piping services"); no link was forced into the Section 3 cause body (Guardrail 2). The Section 3 slab-leak closing note renders as approved plain text with its TODO-BATCH-6 comment.
- **Carry-forward (out of scope — not actioned):** Step-10 recommended hub cross-link (`/green-valley/water-heater-repair-installation/` into the `/green-valley-plumbing-services/` hub) NOT done; hub not in Files Allowed to Edit and Guardrail 14 forbids sibling edits. Same standing carry-forward as P30 (GV hub repoints pending a future in-scope brief).
- **Trust claims:** shows 4.8/76, "Over 40 years," Clark County code compliance, and emergency availability (per brief) with FLAG: VERIFY comments at each instance plus the top-of-file block (incl. the gas-scope FLAG). No FLAG text in any visible string or schema.
- **Hero image:** `/images/services/water-heater-repair-installation/card.webp` (alt "water heater repair and installation in Green Valley, Henderson, NV"), per brief (hero.webp is the low-res Batch-3 asset).
- **Validation:** `eslint` (clean), `tsc --noEmit` (clean), `next build` (`/green-valley/water-heater-repair-installation` prerendered static ○). All pass.

---

## Batch 6, Page 32 — Leak Detection and Repair in Green Valley

- **Route:** `/green-valley/leak-detection-repair/`
- **File created:** `app/green-valley/leak-detection-repair/page.tsx`
- **Status:** Created (uncommitted, untracked). Self-QA PASS. Pending Prompt 07 QA.
- **Schema:** WebPage + BreadcrumbList + Service + HowTo + FAQPage (5 separate JsonLd blocks, rendered in the brief-specified order: webpage, breadcrumb, service, howTo, faq). **Green Valley areaServed pattern** — `Place` (Green Valley, Nevada) → `City` (Henderson) → `State` (Nevada). NOT City, NOT AdministrativeArea, NOT Clark County. **No AggregateRating**, no `sameAs`, no `hasCredential`. HowTo from `GV_LEAK_STEPS`; FAQPage from `GV_LEAK_FAQS` (character-for-character).
- **Content:** Non-invasive framing throughout (hero subheading, Section 3 H2, FAQ Q5, final CTA — 4+ placements per Guardrail 12). Section 2 = standalone AEO direct-answer opener + warning-signs `<ul>` + visible water-meter test under an H3 + GV-plumbing-services closing link. Section 3 = three detection-method cards (acoustic, pressure, thermal) + core leak link + Henderson link. Section 4 = 4 cause cards (original GV copper late-1970s–mid-1990s + polybutylene "failure without warning" leads; hard water 17–24 gpg; caliche soil; closed-loop). Section 5 = 5 service cards (slab → core slab link; video camera → core inspections link, via "Learn more about our X" connector). Section 6 = 4-step `<ol>` HowTo. 1b red trust strip (Non-Invasive / NV Licensed / 24-7 / Serving GV & Henderson) matching the Henderson sibling. Green Valley always paired with Henderson; never described as a city.
- **Internal links (live):** `/green-valley-plumbing-services/` (Section 2 + chip), `/leak-detection-repair/` (Section 3), `/henderson-plumbing-services/` (Section 3 + Section 8 + chip), `/slab-leak-detection-repair/` + `/video-camera-plumbing-inspections/` (Section 5 cards), `/henderson/leak-detection-repair/` + `/green-valley/drain-cleaning/` (P30) + `/green-valley/water-heater-repair-installation/` (P31) (related block), `/lake-las-vegas-plumbing-services/` (chip), `/contact/` (CTAs). **TODO-BATCH-6 (plain text only, no anchor):** `/green-valley/slab-leak-detection-repair/` — related-services block (inline comment) and a source-only note on the Section 5 slab card.
- **Deviations from the approved brief (flagged):**
  1. **Em dash → comma (applied via approved P30 precedent, flagged in report).** The hero subheading's "...thermal imaging — without opening up walls or floors." em dash was changed to a comma to satisfy the absolute no-em-dash rule (conflict with do-not-rewrite-copy). The user approved this exact resolution for Page 30's identical conflict; applied here and surfaced in the build report for override. No other copy altered.
  2. **Meta description exceeds the ≤160-char standard** (~205 chars). Kept exactly as approved per sibling precedent (P11/P30/P31) with an inline `FLAG` comment; not trimmed (metadata changes need approval).
- **Carry-forward (out of scope — not actioned):** GV hub cross-link for this route NOT added; hub not in Files Allowed to Edit (Guardrail 16). Same standing item as P30/P31 — GV hub repoints pending a future in-scope brief.
- **Trust claims:** shows 4.8/76, "Over 40 years," 24/7 emergency, transparent pricing (per brief) with FLAG: VERIFY comments at each instance plus the top-of-file block. No FLAG text in any visible string or schema.
- **Hero image:** `/images/services/leak-detection-repair/hero.webp` (alt "Professional leak detection service in Green Valley, Henderson, NV").
- **Validation:** `eslint` (clean), `tsc --noEmit` (clean), `next build` (`/green-valley/leak-detection-repair` prerendered static ○). All pass.

---

## Batch 6, Page 33 — Slab Leak Detection and Repair in Green Valley

- **Route:** `/green-valley/slab-leak-detection-repair/`
- **File created:** `app/green-valley/slab-leak-detection-repair/page.tsx`
- **Status:** Created (uncommitted, untracked). Self-QA PASS. Pending Prompt 07 QA.
- **Schema:** WebPage + BreadcrumbList + Service + HowTo + FAQPage (5 separate JsonLd blocks, order: webpage, breadcrumb, service, howTo, faq). **Green Valley areaServed pattern** — `Place` (Green Valley, Nevada) → `City` (Henderson) → `State` (Nevada). NOT City, NOT AdministrativeArea, NOT Clark County. **No AggregateRating**, no `sameAs`, no `hasCredential`. HowTo from `GV_SLAB_STEPS`; FAQPage from `GV_SLAB_FAQS` (character-for-character).
- **Content:** Highest-specificity GV page. Original GV (late-1970s–mid-1990s) named "the highest concentration of slab leak risk in Henderson." Section 2 slab-specific warning-signs `<ul>` (warm floors bullet 1 per Guardrail 12) + AEO opener + inline urgency CTA. Section 3 = three non-invasive detection-method H3 cards + core slab link + GV leak-detection link. Section 4 = 4 cause H3 cards (original GV copper/polybutylene leads; caliche soil; hard water 17–24 gpg; closed-loop). Section 5 = three repair-option H3 articles (spot → water-pipe-repair link; rerouting → core /re-piping/ fallback with TODO-BATCH-6 to GV re-piping; epoxy no link). Section 6 = 4-step `<ol>` HowTo. 1b red trust strip (Non-Invasive / NV Licensed / All Repair Options Explained / Residential and Commercial) matching Henderson slab sibling. "Non-invasive" in hero, Section 3 H2, FAQ Q4, final CTA (4+, Guardrail 12 met). Green Valley always paired with Henderson; never called a city.
- **Internal links (live):** `/green-valley-plumbing-services/` (Section 2 + chip), `/slab-leak-detection-repair/` + `/green-valley/leak-detection-repair/` (P32, Section 3), `/water-pipe-repair-replacement/` (Section 5 spot card), `/re-piping/` (Section 5 rerouting card — core fallback), `/henderson-plumbing-services/` (Section 8 + chip), `/henderson/slab-leak-detection-repair/` (Section 8 cross-ref), `/green-valley/drain-cleaning/` (P30) + `/green-valley/water-heater-repair-installation/` (P31) (related block), `/lake-las-vegas-plumbing-services/` (chip), `/contact/` (CTAs). **TODO-BATCH-6 (plain text only, no anchor):** `/green-valley/re-piping/` (P34) — related-services block (inline comment) + a source-only TODO note on the Section 5 rerouting card data (Guardrail 14).
- **Deviations from the approved brief:** **None substantive.** Meta description (~178 chars) exceeds the ≤160 standard; kept exactly as approved per the established sibling precedent (P11/P30/P31/P32) with an inline `FLAG` comment (metadata changes need approval, so not trimmed). No em dash present in the approved copy this time. Rerouting card links to built `/re-piping/` core (Guardrail 14) with the TODO-BATCH-6 activation note for `/green-valley/re-piping/`.
- **Carry-forward (out of scope — not actioned):** GV hub cross-link for this route NOT added; hub not in Files Allowed to Edit (Guardrail 17). Same standing item as P30–P32. **Cross-cluster note:** once **P34 (`/green-valley/re-piping/`)** is built, there are now multiple in-page TODO-BATCH-6 references waiting to activate to it — P33 (Section 5 rerouting card + related block) and the slab/rerouting references on P30–P32 where applicable.
- **Trust claims:** shows 4.8/76, "Over 40 years," 24/7 emergency, all-repair-options, transparent pricing (per brief) with FLAG: VERIFY comments at each instance plus the top-of-file block. No FLAG text in any visible string or schema.
- **Hero image:** `/images/services/slab-leak-detection-repair/card.webp` (alt "Slab leak detection and repair in Green Valley, Henderson, NV"), per brief (hero.webp is low-res).
- **Validation:** `eslint` (clean), `tsc --noEmit` (clean), `next build` (`/green-valley/slab-leak-detection-repair` prerendered static ○). All pass.

---

## Batch 6, Page 34 — Re-Piping Services in Green Valley

- **Route:** `/green-valley/re-piping/`
- **File created:** `app/green-valley/re-piping/page.tsx`
- **Status:** Created (uncommitted, untracked). Self-QA PASS. Pending Prompt 07 QA. **Final page of the Green Valley cluster (P30–P34).**
- **Schema:** WebPage + BreadcrumbList + Service + HowTo + FAQPage (5 separate JsonLd blocks, order: webpage, breadcrumb, service, howTo, faq). **Green Valley areaServed pattern** — `Place` (Green Valley, Nevada) → `City` (Henderson) → `State` (Nevada). NOT City, NOT AdministrativeArea, NOT Clark County. **No AggregateRating**, no `sameAs`, no `hasCredential`. HowTo from `GV_REPIPE_STEPS`; FAQPage from `GV_REPIPE_FAQS` (character-for-character).
- **Content:** Original GV timeline extended to the late 1970s. Section 2 = 8-item signs `<ul>` (intro/follow rendered from consts per Guardrail 12). Section 3 = 4 pipe-material H3 cards (original GV polybutylene/aging copper leads; GV Ranch Kitec with orange/blue + brass-fitting identification; hard water all eras; galvanized older properties) + core re-piping & GV-hub links. Section 4 = 7 `ServiceCard` `built={false}` descriptive cards (whole-house, partial, polybutylene, Kitec, galvanized, PEX, copper), no route links (Guardrail 11). Section 5 = direct-answer paragraph (const) + 2 H3s; **live link to `/green-valley/slab-leak-detection-repair/` (P33)** in the "when to repipe" H3 + water-pipe-repair link in "when to repair" + GV leak-detection link in closing. Section 6 = 4-step `<ol>` HowTo with City of Henderson permit + "water restored each evening" + one-to-two-day framing. PEX attic 150°F detail in material card + FAQ Q5. 1b red trust strip (Whole-House and Partial / NV Licensed / Permits Pulled / PEX and Copper). Green Valley always paired with Henderson; never called a city.
- **Internal links (ALL live — no TODO-BATCH-6 remaining on this page):** `/re-piping/` + `/green-valley-plumbing-services/` (Section 3), `/water-pipe-repair-replacement/` + `/green-valley/slab-leak-detection-repair/` (P33) + `/green-valley/leak-detection-repair/` (P32) (Section 5), `/henderson-plumbing-services/` (Section 8 + chip), `/henderson/re-piping/` (Section 8 cross-ref + related), all four GV cluster siblings P30–P33 (related block), `/lake-las-vegas-plumbing-services/` (chip), `/contact/` (CTAs). The full Green Valley cluster is now internally interlinked.
- **Deviations from the approved brief:** **None substantive.** Meta description (~172 chars) exceeds the ≤160 standard; kept exactly as approved per established sibling precedent (P11/P30–P33) with an inline `FLAG` comment (metadata changes need approval, so not trimmed). No em dash present in the approved copy.
- **Guardrail 15 honored:** P33 (`/green-valley/slab-leak-detection-repair/`) was **not** modified. Its rerouting-card TODO-BATCH-6 (currently → core `/re-piping/`) remains parked pending a separate brief to repoint it to `/green-valley/re-piping/`, now that this page is built.
- **Carry-forward (out of scope — not actioned; for a future in-scope brief):**
  1. **Activate P33 rerouting cross-link** → repoint `/re-piping/` to `/green-valley/re-piping/` (anchor "Green Valley re-piping services") in `app/green-valley/slab-leak-detection-repair/page.tsx`.
  2. **GV hub repoints** — point the `/green-valley-plumbing-services/` hub's service cards to the built GV service-location pages (P30–P34); applies cluster-wide, deferred on every GV page in this batch.
  3. **Core `/drain-cleaning/` cross-link** — add `/green-valley/drain-cleaning/` to its service-area link list (and analogous core-page back-links for the other services).
- **Trust claims:** shows 4.8/76, "Over 40 years," permits/inspections, transparent pricing (per brief) with FLAG: VERIFY comments at each instance plus the top-of-file block. No FLAG text in any visible string or schema.
- **Hero image:** `/images/services/re-piping/hero.webp` (alt "re-piping service in Green Valley, Henderson, NV"); no `card.webp` exists for the re-piping service (per log).
- **Validation:** `eslint` (clean), `tsc --noEmit` (clean), `next build` (`/green-valley/re-piping` prerendered static ○). All pass.

---

## Batch 6 — Green Valley cluster (P30–P34) complete

- All five Green Valley service-location pages built and self-QA passed: drain-cleaning (P30), water-heater-repair-installation (P31), leak-detection-repair (P32), slab-leak-detection-repair (P33), re-piping (P34).
- All use the Green Valley areaServed schema (`Place` → `City` Henderson → `State` Nevada), pair Green Valley with Henderson throughout, and lead with the two-era (original GV / Green Valley Ranch) narrative.
- **Open follow-ups (each needs an in-scope brief):** (a) P33 rerouting cross-link → `/green-valley/re-piping/`; (b) `/green-valley-plumbing-services/` hub card repoints to the five built GV pages; (c) core service-page back-links (e.g., `/drain-cleaning/` → `/green-valley/drain-cleaning/`).

---

## Green Valley Follow-Up Activations (Post-Batch-6 P30-P34)

- **Task A** — `app/green-valley/slab-leak-detection-repair/page.tsx` — rerouting card `linkHref` repointed from `/re-piping/` to `/green-valley/re-piping/`; `linkText` updated to "Green Valley re-piping services"; the TODO-BATCH-6 comment and unused `todo` field on that card removed and replaced with an ACTIVATED note. P34 is confirmed built and committed.
- **Task B** — `app/green-valley-plumbing-services/page.tsx` — five `GREEN_VALLEY_SERVICES` card `href` values repointed from core routes to built GV service-location routes: Drain Cleaning, Leak Detection and Repair, Water Heater Repair and Installation, Slab Leak Detection and Repair, Re-Piping. Both TODO-BATCH-PHASE4 comments (the data-block comment above the array AND the matching render-side JSX comment) replaced with ACTIVATED notes. The remaining service cards (Sewer Line, Commercial, Toilet, etc.) were left pointing at core routes, per brief scope.
- **Task C** — `app/drain-cleaning/page.tsx` — `/green-valley/drain-cleaning/` added to the service areas inline link list as the final Oxford-comma item alongside Las Vegas, Henderson, and North Las Vegas.
- **Out of scope / carry-forward:** P33's related-services "Green Valley Re-Piping" chip remains a plain-text `<span>` with a TODO-BATCH-6 comment (the brief's Task A scoped only the rerouting card). It can be activated to a live `/green-valley/re-piping/` link in a future brief. Likewise, core `/water-heater-repair-installation/`, `/leak-detection-repair/`, `/slab-leak-detection-repair/`, and `/re-piping/` still need Green Valley added to their service-area sections (separate brief each).
- **Validation:** `eslint` (clean), `tsc --noEmit` (clean), `next build` (all 91 routes prerendered static ○). All pass.
- **Commits:** 3 separate commits, staged by path (d7257a6, 35cd978, 8c70d2a). Pushed to `origin/main`.
