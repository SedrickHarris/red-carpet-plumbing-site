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
