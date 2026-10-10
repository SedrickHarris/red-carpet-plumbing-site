// FLAG: VERIFY before publishing:
// - Telephone +17025679172: project-established value; confirm before launch.
// - License #048585A, C-1 Plumbing and Heating: project-established value;
//   confirm before launch.
// - "Transparent pricing with no hidden fees": source-site claim; confirm
//   before launch.
// - "4.8-star rated" in the hero subheading: visible text only, matching the
//   sibling pages. Deliberately NOT expressed as rating or review schema: no
//   verified review count or source has been provided.
// - Meter-to-home water line responsibility sentence (services card and FAQ),
//   the permit sentences (process step and FAQ 6, which name no jurisdiction),
//   and the 'one of the hardest municipal supplies in the country' phrase.
// FLAG comments appear only in source. No FLAG text appears in any visible
// string or schema text.
//
// Las Vegas service-location schema pattern (matches the Las Vegas repiping
// page): Plumber provider with telephone; areaServed City (Las Vegas)
// containedInPlace State (Nevada), because Las Vegas is an incorporated city;
// no social profile links, no credential node, no rating or review schema, no
// ZIP data.
// 5 separate JsonLd blocks in order WebPage, BreadcrumbList, Service, HowTo,
// FAQPage. HowTo and FAQPage derive from the same consts that render visibly,
// so schema text and page text cannot drift apart.
//
// Hero uses the shared Water Pipe Repair and Replacement service hero asset, also used by the core
// page and the other city variants. No city-specific image exists.

import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { HeroSection } from "@/components/HeroSection";
import { JsonLd } from "@/components/JsonLd";
import { QuoteFormPlaceholder } from "@/components/QuoteFormPlaceholder";
import { SectionReveal, SectionRevealItem } from "@/components/SectionReveal";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { FaqSection } from "@/components/FaqSection";
import { buildFaqPageSchema, type FaqItem } from "@/lib/faq";

export const metadata: Metadata = {
  // FLAG: VERIFY license #048585A in the description before publishing.
  title: "Water Pipe Repair and Replacement in Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Water pipe repair and replacement in Las Vegas, NV. Burst pipes, pinhole leaks, low pressure, and main line repair. NV #048585A. Call (702) 567-9172.",
  alternates: {
    canonical: "https://redcarpetplumbing.com/las-vegas/water-pipe-repair-replacement/",
  },
  openGraph: {
    title: "Water Pipe Repair and Replacement in Las Vegas, NV | Red Carpet Plumbing",
    description:
      "Water pipe repair and replacement in Las Vegas, NV. Burst pipes, pinhole leaks, low pressure, and main line repair. NV #048585A. Call (702) 567-9172.",
    url: "https://redcarpetplumbing.com/las-vegas/water-pipe-repair-replacement/",
    siteName: "Red Carpet Plumbing",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

type LinkSeg = string | { href: string; text: string };

const HERO_SUBHEADING =
  "Red Carpet Plumbing repairs and replaces water supply pipes for homes and businesses throughout Las Vegas, NV. Burst pipes, pinhole leaks, low water pressure, corroded lines, and main water line repair. Licensed plumbers, 4.8-star rated. Call (702) 567-9172.";

const HERO_TRUST_ITEMS = [
  // FLAG: VERIFY license #048585A before publishing.
  "NV Licensed, #048585A",
  "Burst Pipe and Leak Repair",
  "Serving Neighborhoods Across Las Vegas",
  // FLAG: VERIFY transparent pricing claim before publishing.
  "Transparent Pricing, No Hidden Fees",
];

// Direct answer.
const DIRECT_ANSWER = {
  heading: "Water Pipe Problems in Las Vegas, and How We Fix Them",
  p1: "Falling water pressure, discolored water, water stains, and the sound of running water when nothing is on are common signs of a failing water pipe in Las Vegas homes. Red Carpet Plumbing locates the problem, then repairs or replaces the damaged section, or recommends repiping when the pipe is failing in more than one place. Call (702) 567-9172 to schedule an assessment.",
  // FLAG: VERIFY license #048585A before publishing.
  // FLAG: VERIFY transparent pricing claim before publishing.
  p2: "Red Carpet Plumbing is a Nevada C-1 licensed plumbing contractor (#048585A). We explain repair and replacement options before work begins and provide transparent pricing with no hidden fees.",
  p3: "Need water pipe service in Las Vegas? Same-day service is available, subject to scheduling. Call (702) 567-9172 to get on the schedule.",
};

// Problems list.
const PROBLEMS_HEADING = "Signs of a Failing Water Pipe in Las Vegas Homes";
const PROBLEMS_INTRO = "If you notice any of the following, contact a licensed plumber for an assessment.";
const PROBLEMS = [
  "Unexplained drop in water pressure at one fixture or throughout the home",
  "Discolored, rusty, or metallic-tasting water",
  "The sound of running water when no fixture is in use",
  "Water stains, bubbling paint, or damp spots on walls, ceilings, or floors",
  "A water bill that rises with no change in how you use water",
  "Repeated leaks in different parts of the plumbing system",
];

// Local causes (H3 article cards).
const CAUSES_HEADING = "Why Water Pipes Fail in Las Vegas Homes";
const CAUSES_INTRO: LinkSeg[] = ["For an overview of water pipe repair and replacement across the Las Vegas Valley, visit our ", { href: "/water-pipe-repair-replacement/", text: "water pipe repair and replacement" }, " page."];
const CAUSES: { title: string; body: string; tail?: LinkSeg[] }[] = [
  {
    title: "Many Las Vegas Homes Are Decades Old",
    body: "A significant portion of Las Vegas homes were built between the 1970s and the early 1990s, so their water supply plumbing has been in service for decades. Supply pipe wears with age and constant use, and homes of this vintage are more likely to show pinhole leaks, corroded fittings, and failing shut-off valves. The pipe material depends on when and how each home was built, so an assessment is the reliable way to learn what you have and whether repair or replacement is the practical choice.",
    tail: [" If leaks keep appearing in several places, see our ", { href: "/las-vegas/repiping/", text: "Las Vegas repiping" }, " page."],
  },
  // FLAG: VERIFY 'one of the hardest municipal supplies in the country' phrase (carried from the Las Vegas hub) before publishing.
  {
    title: "Lake Mead Hard Water and Soil Movement",
    body: "Las Vegas receives its municipal water from Lake Mead, one of the hardest municipal supplies in the country, and its mineral content can corrode metal pipe and fittings over time. Slab foundations also sit above caliche and expansive clay soils that shift with the seasons, which adds stress to pipes that run under or through the slab.",
    tail: [" If a leak under the slab is suspected, see our ", { href: "/las-vegas/slab-leak-detection-repair/", text: "Las Vegas slab leak detection and repair" }, " page."],
  },
  {
    title: "Desert Heat on Exposed Plumbing",
    body: "Las Vegas summers are hot, and attics and exterior walls get hotter still. Repeated heating and cooling can stress supply pipes, fittings, and connections that run through unconditioned space or along the outside of the home, so isolated failures at valves and connections are common even in homes with sound pipe elsewhere. We tell you plainly when a repair is all that is needed.",
  },
];

// Services (H3 article cards).
const SERVICES_HEADING = "Water Pipe Repair and Replacement Services in Las Vegas";
const SERVICES_INTRO = "Red Carpet Plumbing provides a full range of water pipe repair and replacement services for Las Vegas homes and businesses.";
const SERVICES: { title: string; body: string; tail?: LinkSeg[] }[] = [
  {
    title: "Burst Pipe Repair",
    body: "Repair of burst or split water pipes. If a pipe bursts, shut off the water at the main valve first, then call. We replace the damaged section and restore service.",
  },
  {
    title: "Pinhole Leak Repair",
    body: "We locate and repair small leaks in supply pipe before they cause water damage. When pinhole leaks keep appearing, we explain whether the pipe is near the end of its service life.",
  },
  {
    title: "Pipe Section Replacement",
    body: "Replacement of corroded, damaged, or leaking sections of supply pipe in walls, attics, and accessible areas.",
    tail: [" For hidden leaks, see our ", { href: "/las-vegas/leak-detection-repair/", text: "Las Vegas leak detection and repair" }, " page."],
  },
  // FLAG: VERIFY meter-to-home water line responsibility wording before publishing.
  {
    title: "Main Water Line Repair",
    body: "Repair and replacement of the water line that serves your property between the meter and the home. The owner is generally responsible for this line, and we help you confirm what applies at your address.",
  },
  {
    title: "Supply Line and Shut-Off Valve Replacement",
    body: "Replacement of corroded or failing supply lines and shut-off valves at sinks, toilets, water heaters, and appliances.",
    tail: [" For water heater connections, see our ", { href: "/las-vegas/water-heater-repair-installation/", text: "Las Vegas water heater repair and installation" }, " page."],
  },
  {
    title: "Pipe Replacement and Repiping",
    body: "When pipe is failing in several places, we replace more than a single section or recommend partial or full repiping, and we explain the options before you decide.",
  },
];

// Repair or replace (two H3 blocks).
const DECISION_HEADING = "Repair or Replace? What Makes Sense for Your Las Vegas Home";
const DECISION_BLOCKS: { title: string; body: string }[] = [
  {
    title: "When repair is the right choice",
    body: "Repair is usually the practical choice for a single leak, a failed fitting or valve, or one damaged section when the rest of the pipe is in good condition. A targeted repair restores service and avoids replacing pipe that is still sound.",
  },
  {
    title: "When replacement makes more sense",
    body: "Replacement is the better choice when leaks keep returning in different places, when pipe is corroded along a long run, or when low pressure and discolored water point to pipe that is failing inside. We explain what we find and the options, and you approve the scope before work begins.",
  },
];

// Mid-page CTA band (charcoal).
const MID_CTA = {
  headline: "Water Pipe Trouble in Your Las Vegas Home?",
  body: "Red Carpet Plumbing handles burst pipes, pinhole leaks, low pressure, and pipe replacement throughout Las Vegas. Call now and describe what is happening, or request service online.",
};

// Process. Single source for the visible steps and the HowTo schema.
const PROCESS_HEADING = "How We Handle Water Pipe Service in Las Vegas";
const PROCESS_INTRO = "This is our standard process for water pipe repair and replacement in Las Vegas homes.";
const PROCESS_STEPS: { name: string; body: string }[] = [
  {
    name: "Call and describe the problem.",
    body: "Call (702) 567-9172 and describe what you are seeing. If water is actively leaking, shut off the water at the main valve first.",
  },
  {
    name: "Inspection and pipe assessment.",
    body: "A licensed plumber checks accessible supply lines, fittings, and valves, tests for active water loss if needed, and assesses the type and condition of the pipe.",
  },
  {
    name: "Review options and approve.",
    body: "We explain what we found and whether repair or replacement is the more practical choice. You approve the work before anything is done.",
  },
  // FLAG: VERIFY permit wording (depends on address and scope) before publishing.
  {
    name: "Repair or replacement with pressure test.",
    body: "We complete the approved work, pressure test it, restore service, and clean up before leaving. Permit requirements, when they apply, depend on your address and the scope of the work.",
  },
];

// Why choose.
const WHY_CHOOSE_HEADING = "Why Las Vegas Homeowners Choose Red Carpet Plumbing";
const WHY_CHOOSE_ITEMS = [
  // FLAG: VERIFY license #048585A before publishing.
  "Licensed Nevada plumbers, NV License #048585A, C-1 Plumbing and Heating",
  "Honest repair or replace assessment before any work is recommended",
  "Familiar with Las Vegas homes built across several decades",
  "Clear options explained before work begins",
  // FLAG: VERIFY transparent pricing claim before publishing.
  "Transparent pricing with no hidden fees",
];

// Areas. Chips are plain text; cross-links are in the paragraph.
const AREAS_HEADING = "Water Pipe Repair and Replacement Across Las Vegas";
const AREAS_INTRO = "Red Carpet Plumbing provides water pipe repair and replacement throughout Las Vegas, including neighborhoods and corridors across the city. Call (702) 567-9172 to confirm coverage for your address.";
const AREA_CHIPS = [
  "Downtown Las Vegas",
  "Desert Inn / West Sahara",
  "Desert Shores",
  "The Lakes",
  "Sunrise Manor",
  "Whitney",
  "Winchester",
  "Southwest Las Vegas",
  "Eastern Las Vegas",
];
const AREAS_CROSS_LINKS: LinkSeg[] = ["We also provide water pipe repair and replacement in ", { href: "/north-las-vegas/water-pipe-repair-replacement/", text: "North Las Vegas" }, " and ", { href: "/summerlin/water-pipe-repair-replacement/", text: "Summerlin" }, ". For every service we offer in your community, visit our ", { href: "/las-vegas-plumbing-services/", text: "Las Vegas plumbing services" }, " page."];

// FAQs. Single source for the visible accordion and the FAQPage schema.
const FAQS: FaqItem[] = [
  {
    question: "What causes water pipe leaks in Las Vegas homes?",
    answer: "Age, corrosion from hard water, worn fittings, and soil movement under the slab are the most common causes. Many Las Vegas homes were built between the 1970s and early 1990s, so leaks from wear are more likely. An assessment identifies the cause before any repair begins.",
    category: "causes-signs",
  },
  {
    question: "How do I know if I have a hidden water leak?",
    answer: "Common signs include a higher water bill, the sound of running water when nothing is on, damp or stained walls and floors, warm spots on the floor, and low pressure. A plumber can test for active water loss and locate the leak before opening anything up.",
    category: "causes-signs",
  },
  {
    question: "Should I repair or replace old water pipes?",
    answer: "A single leak or failed fitting is usually repaired. When leaks keep appearing in different places, or pipe is corroded over a long run, replacement or repiping is usually the better long-term choice. We explain both options and you approve the scope before work begins.",
    category: "the-service",
  },
  // FLAG: VERIFY meter-to-home water line responsibility wording before publishing.
  {
    question: "Who is responsible for the water line between the meter and my Las Vegas home?",
    answer: "The property owner is generally responsible for the water line from the meter to the home, while the water utility handles the meter and its own side of the connection. Individual properties can differ, so we can help you confirm what applies at your address.",
    category: "the-service",
  },
  {
    question: "What should I do if a pipe bursts?",
    answer: "Shut off the water at the main valve right away, then open a low faucet to drain the remaining water. Call (702) 567-9172 and describe what happened so we can schedule the repair. Move valuables away from the water if it is safe to do so.",
    category: "emergency",
  },
  // FLAG: VERIFY permit wording (depends on address and scope) before publishing.
  {
    question: "Do water pipe repairs in Las Vegas need a permit?",
    answer: "It depends on your address and the scope of the work. Small repairs often do not need a permit, while larger replacements or repiping may. We confirm the requirements for your property before work begins.",
    category: "trust",
  },
  {
    question: "Do you offer same-day water pipe service in Las Vegas?",
    answer: "Same-day water pipe service is available in Las Vegas, subject to scheduling. Call (702) 567-9172 to check same-day availability for your address. When you call, tell us what you are seeing, such as low pressure, a leak, or water stains, so we can schedule the right visit.",
    category: "timing-process",
  },
];

// Related services.
const RELATED_SERVICES: { label: string; href: string }[] = [
  {
    label: "Leak Detection and Repair in Las Vegas",
    href: "/las-vegas/leak-detection-repair/",
  },
  {
    label: "Repiping in Las Vegas",
    href: "/las-vegas/repiping/",
  },
  {
    label: "Slab Leak Detection and Repair in Las Vegas",
    href: "/las-vegas/slab-leak-detection-repair/",
  },
  {
    label: "Water Heater Repair and Installation in Las Vegas",
    href: "/las-vegas/water-heater-repair-installation/",
  },
  {
    label: "Water Pipe Repair and Replacement (all of the Las Vegas Valley)",
    href: "/water-pipe-repair-replacement/",
  },
];

// Final CTA.
const FINAL_CTA = {
  headline: "Water Pipe Problem in Las Vegas? We Can Help.",
  // FLAG: VERIFY transparent pricing claim before publishing.
  body: "Red Carpet Plumbing provides pipe assessment, leak repair, pipe replacement, and main water line repair for Las Vegas homes and businesses. Transparent pricing and licensed plumbers.",
};

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Water Pipe Repair and Replacement in Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Water pipe repair and replacement in Las Vegas, NV. Burst pipes, pinhole leaks, low pressure, and main line repair. NV #048585A. Call (702) 567-9172.",
  url: "https://redcarpetplumbing.com/las-vegas/water-pipe-repair-replacement/",
  isPartOf: {
    "@type": "WebSite",
    name: "Red Carpet Plumbing",
    url: "https://redcarpetplumbing.com",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://redcarpetplumbing.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Las Vegas Plumbing Services",
      item: "https://redcarpetplumbing.com/las-vegas-plumbing-services/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Water Pipe Repair and Replacement in Las Vegas, NV",
      item: "https://redcarpetplumbing.com/las-vegas/water-pipe-repair-replacement/",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Water Pipe Repair and Replacement",
  serviceType: "Water Pipe Repair and Replacement",
  // FLAG: VERIFY license #048585A in the description before publishing.
  description:
    "Red Carpet Plumbing provides burst pipe repair, pinhole leak repair, pipe section replacement, main water line repair, supply line and shut-off valve replacement, and repiping for homes and businesses in Las Vegas, NV. Nevada Contractor License #048585A.",
  provider: {
    "@type": "Plumber",
    name: "Red Carpet Plumbing",
    url: "https://redcarpetplumbing.com",
    // FLAG: VERIFY telephone before publishing.
    telephone: "+17025679172",
    // Source: Google Business Profile, 81 reviews, 4.8. Recheck before launch.
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "81",
      bestRating: "5",
      worstRating: "1",
    },
  },
  areaServed: {
    "@type": "City",
    name: "Las Vegas",
    containedInPlace: {
      "@type": "State",
      name: "Nevada",
    },
  },
};

// HowTo schema included because the process section renders the matching visible
// numbered steps. Derived from PROCESS_STEPS so the schema text always matches the page text.
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How We Handle Water Pipe Service in Las Vegas",
  description: "The process Red Carpet Plumbing follows for water pipe repair and replacement in Las Vegas, NV.",
  step: PROCESS_STEPS.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.name,
    text: s.body,
  })),
};

const faqSchema = buildFaqPageSchema(FAQS);

const LINK_CLASS =
  "font-semibold text-brand-dark underline hover:text-brand-dark/70";
const LINK_CLASS_ON_DARK =
  "font-semibold text-white underline underline-offset-4 hover:text-white/80";

function renderTail(tail: LinkSeg[], className: string = LINK_CLASS) {
  return tail.map((seg, i) =>
    typeof seg === "string" ? (
      seg
    ) : (
      <Link key={i} href={seg.href} className={className}>
        {seg.text}
      </Link>
    ),
  );
}

export default function LasVegasWaterPipePage() {
  return (
    <>
      <JsonLd data={webpageSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={howToSchema} />
      <JsonLd data={faqSchema} />

      <SiteHeader />

      <main id="main" className="flex-1 bg-white">
        {/* SECTION 1: HERO */}
        <HeroSection
          breadcrumbs={<Breadcrumbs trail={[
            { label: "Home", href: "/" },
            {
              label: "Las Vegas Plumbing Services",
              href: "/las-vegas-plumbing-services/",
            },
            { label: "Water Pipe Repair and Replacement in Las Vegas, NV" },
          ]} variant="dark" />}
          headingLevel="h1"
          headline={
            <>
              Water Pipe Repair and Replacement
              <br /> in Las Vegas, NV
            </>
          }
          subheading={HERO_SUBHEADING}
          trustItems={HERO_TRUST_ITEMS}
          primaryCTA={{
            label: "Call Now: (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{
            label: "Request Service",
            href: "/contact/",
          }}
          // FLAG: VERIFY transparent pricing claim before publishing.
          ctaNote="Licensed plumbers. Transparent pricing. No hidden fees."
          formSlot={<QuoteFormPlaceholder title="Get Water Pipe Help" />}
          backgroundImage={{
            src: "/images/services/water-pipe-repair-replacement/red-carpet-plumbing-las-vegas-water-pipe-repair-replacement-primary-hero.webp",
            alt: "Water Pipe Repair and Replacement in Las Vegas, NV",
          }}
        />

        {/* SECTION 2: DIRECT ANSWER */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="rounded-2xl border-l-4 border-brand-primary bg-brand-surface-alt p-6 sm:p-8">
              <h2 className="text-2xl tracking-tight text-brand-dark sm:text-3xl">
                {DIRECT_ANSWER.heading}
              </h2>
              <p className="mt-4 text-lg leading-8 text-brand-dark/80">
                {DIRECT_ANSWER.p1}
              </p>
              <p className="mt-4 text-base leading-7 text-brand-dark/80">
                {DIRECT_ANSWER.p2}
              </p>
              <p className="mt-4 text-base leading-7 text-brand-dark/80">
                {DIRECT_ANSWER.p3}
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: PROBLEMS */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10 lg:pb-24">
            <div className="text-left">
              <h2 className="text-3xl tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                {PROBLEMS_HEADING}
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                {PROBLEMS_INTRO}
              </p>
            </div>
            <div className="mt-8 rounded-2xl border-l-4 border-brand-primary bg-brand-surface-alt p-6 sm:p-8">
              <ul className="space-y-3">
                {PROBLEMS.map((problem) => (
                  <li key={problem} className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-2 inline-block h-2 w-2 flex-none rounded-full bg-brand-primary"
                    />
                    <span className="text-base leading-7 text-brand-dark/80">
                      {problem}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 4: LOCAL CAUSES */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                {CAUSES_HEADING}
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                {renderTail(CAUSES_INTRO)}
              </p>
            </div>
            <div className="mt-10 space-y-6">
              {CAUSES.map((c) => (
                <article
                  key={c.title}
                  className="rounded-2xl bg-white p-6 ring-1 ring-brand-surface-alt sm:p-8"
                >
                  <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-brand-dark/80">
                    {c.body}
                    {c.tail ? renderTail(c.tail) : null}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: SERVICES */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                {SERVICES_HEADING}
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                {SERVICES_INTRO}
              </p>
            </div>
            <div className="mt-10 space-y-6">
              {SERVICES.map((s) => (
                <article
                  key={s.title}
                  className="rounded-2xl bg-brand-surface-alt p-6 ring-1 ring-brand-surface-alt sm:p-8"
                >
                  <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-brand-dark/80">
                    {s.body}
                    {s.tail ? renderTail(s.tail) : null}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6: REPAIR OR REPLACE */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="text-left">
              <h2 className="text-3xl tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                {DECISION_HEADING}
              </h2>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
              {DECISION_BLOCKS.map((d) => (
                <article
                  key={d.title}
                  className="rounded-2xl bg-white p-6 ring-1 ring-brand-surface-alt sm:p-8"
                >
                  <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                    {d.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-brand-dark/80">
                    {d.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6B: MID-PAGE CTA */}
        <section className="bg-brand-charcoal text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl tracking-tight text-white sm:text-4xl lg:text-5xl">
                  {MID_CTA.headline}
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/90">
                  {MID_CTA.body}
                </p>
              </div>
              <div className="flex flex-col items-start gap-4 lg:items-end">
                <Button href="tel:+17025679172" variant="inverse" size="2xl">
                  Call Now: (702) 567-9172
                </Button>
                <Button href="/contact/" variant="inverse-outline" size="lg">
                  Request Service
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: PROCESS (HowTo) */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    {PROCESS_HEADING}
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    {PROCESS_INTRO}
                  </p>
                </div>
              </SectionRevealItem>
              <SectionRevealItem className="mt-12">
                <ol className="space-y-8">
                  {PROCESS_STEPS.map((step, index) => (
                    <li key={step.name} className="flex items-start gap-4">
                      <span
                        aria-hidden="true"
                        className="inline-flex h-12 w-12 flex-none items-center justify-center rounded-full bg-brand-dark text-lg font-semibold text-white"
                      >
                        {index + 1}
                      </span>
                      <div>
                        <h3 className="text-xl font-semibold text-brand-dark">
                          {step.name}
                        </h3>
                        <p className="mt-2 text-base leading-7 text-brand-dark/80">
                          {step.body}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </SectionRevealItem>
            </SectionReveal>
          </div>
        </section>

        {/* SECTION 8: WHY CHOOSE RED CARPET PLUMBING */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="text-left">
              <h2 className="text-3xl tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                {WHY_CHOOSE_HEADING}
              </h2>
            </div>
            <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {WHY_CHOOSE_ITEMS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckMark />
                  <span className="text-base leading-7 text-brand-dark/85">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 9: AREAS */}
        <section className="bg-brand-charcoal text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="max-w-3xl text-left">
              <h2 className="text-3xl tracking-tight sm:text-4xl lg:text-5xl">
                {AREAS_HEADING}
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/85">
                {AREAS_INTRO}
              </p>
            </div>

            <ul className="mt-10 flex flex-wrap gap-3">
              {AREA_CHIPS.map((name) => (
                <li key={name}>
                  <span className="block rounded-lg border border-white/10 bg-white/5 px-5 py-3 font-medium text-white/85">
                    {name}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/85">
              {renderTail(AREAS_CROSS_LINKS, LINK_CLASS_ON_DARK)}
            </p>
          </div>
        </section>

        {/* SECTION 10: FAQ */}
        <FaqSection
          heading={<>Frequently Asked Questions <br className="hidden sm:block" /> About Water Pipe Repair and Replacement in Las Vegas, NV</>}
          faqs={FAQS}
          surface="alt"
        />

        {/* SECTION 11: RELATED SERVICES */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="text-left">
              <h2 className="text-3xl tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Related Plumbing Services
              </h2>
            </div>
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {RELATED_SERVICES.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="flex items-center gap-2 rounded-lg bg-brand-surface-alt px-4 py-3 text-base font-medium text-brand-dark ring-1 ring-brand-surface-alt transition hover:text-brand-dark/70 hover:shadow-md"
                  >
                    <span aria-hidden="true" className="text-brand-dark">
                      &rarr;
                    </span>
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 12: FINAL CTA */}
        <CTASection
          background="red"
          headline={FINAL_CTA.headline}
          body={FINAL_CTA.body}
          primaryCTA={{
            label: "Call Now: (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{
            label: "Request Service",
            href: "/contact/",
          }}
        />
      </main>

      <SiteFooter />

      {/* Spacer so the fixed sticky mobile CTA never covers footer content. */}
      <div className="h-16 lg:hidden" aria-hidden="true" />

      <StickyMobileCTA />
    </>
  );
}

function CheckMark() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="mt-1 h-5 w-5 flex-none text-brand-dark"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 12.5l4.5 4.5L19 7.5"
      />
    </svg>
  );
}
