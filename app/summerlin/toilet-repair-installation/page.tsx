// FLAG: VERIFY before publishing:
// - Telephone +17025679172: project-established value; confirm before launch.
// - License #048585A, C-1 Plumbing and Heating: project-established value;
//   confirm before launch.
// - "Transparent pricing with no hidden fees": source-site claim; confirm
//   before launch.
// - "4.8-star rated" in the hero subheading: visible text only, matching the
//   sibling pages. Deliberately NOT expressed as rating or review schema: no
//   verified review count or source has been provided.
// - FAQ 5: standard replacement "usually completed in a single visit".
// FLAG comments appear only in source. No FLAG text appears in any visible
// string or schema text.
//
// Summerlin service-location schema pattern (matches the Summerlin drain
// cleaning and repiping pages): Plumber provider with telephone; areaServed
// Place (Summerlin) containedInPlace AdministrativeArea (Clark County)
// containedInPlace State (Nevada), per the Batch 6 normalization; no social
// profile links, no credential node, no rating or review schema, no ZIP data.
// 5 separate JsonLd blocks in order WebPage, BreadcrumbList, Service, HowTo,
// FAQPage. HowTo and FAQPage derive from the same consts that render visibly,
// so schema text and page text cannot drift apart.
//
// Hero uses the shared Toilet Repair and Installation service hero asset, also used by the core
// page and the other city variants. No Summerlin-specific image exists.

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
  title: "Toilet Repair and Installation in Summerlin, NV | Red Carpet Plumbing",
  description:
    "Toilet repair and installation in Summerlin, NV. Running toilets, base leaks, clogs, and replacements. NV #048585A. Call (702) 567-9172.",
  alternates: {
    canonical: "https://redcarpetplumbing.com/summerlin/toilet-repair-installation/",
  },
  openGraph: {
    title: "Toilet Repair and Installation in Summerlin, NV | Red Carpet Plumbing",
    description:
      "Toilet repair and installation in Summerlin, NV. Running toilets, base leaks, clogs, and replacements. NV #048585A. Call (702) 567-9172.",
    url: "https://redcarpetplumbing.com/summerlin/toilet-repair-installation/",
    siteName: "Red Carpet Plumbing",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

type LinkSeg = string | { href: string; text: string };

const HERO_SUBHEADING =
  "Red Carpet Plumbing provides toilet repair and installation for homes and businesses throughout Summerlin, NV. Running toilets, base leaks, clogs, toilet replacement, and new installations. Licensed plumbers, 4.8-star rated. Call (702) 567-9172.";

const HERO_TRUST_ITEMS = [
  // FLAG: VERIFY license #048585A before publishing.
  "NV Licensed, #048585A",
  "Toilet Repair and Installation",
  "Serving All Summerlin Villages",
  // FLAG: VERIFY transparent pricing claim before publishing.
  "Transparent Pricing, No Hidden Fees",
];

// Direct answer.
const DIRECT_ANSWER = {
  heading: "Toilet Problems in Summerlin, and How We Fix Them",
  p1: "A toilet that runs, leaks at the base, clogs often, flushes weakly, or wobbles usually has a worn part that can be repaired, or it has reached the point where replacement makes more sense. Red Carpet Plumbing diagnoses the cause, explains whether to repair or replace, and completes the work, including new toilet installation. Call (702) 567-9172 to schedule service.",
  // FLAG: VERIFY license #048585A before publishing.
  // FLAG: VERIFY transparent pricing claim before publishing.
  p2: "Red Carpet Plumbing is a Nevada C-1 licensed plumbing contractor (#048585A). We explain your options before work begins and provide transparent pricing with no hidden fees.",
  p3: "Need toilet service in Summerlin? Same-day service is available, subject to scheduling. Call (702) 567-9172 to get on the schedule.",
};

// Problems list.
const PROBLEMS_HEADING = "Common Toilet Problems in Summerlin Homes";
const PROBLEMS_INTRO = "These are the most common toilet problems homeowners call about. If you are experiencing any of the following, contact a licensed plumber for an assessment.";
const PROBLEMS = [
  "Toilet that runs continuously or cycles on and off after flushing",
  "Water pooling around the base of the toilet",
  "Toilet that clogs frequently or requires repeated plunging",
  "Weak or incomplete flush that does not clear waste in a single flush",
  "Toilet that wobbles or shifts when in use",
];

// Local causes (H3 article cards).
const CAUSES_HEADING = "Why Summerlin Homes Have Toilet Problems";
const CAUSES_INTRO: LinkSeg[] = ["Toilet problems in Summerlin homes are tied to a consistent set of local factors. For an overview of toilet repair and installation across the Las Vegas Valley, visit our ", { href: "/toilet-repair-installation/", text: "toilet repair and installation" }, " page."];
const CAUSES: { title: string; body: string; tail?: LinkSeg[] }[] = [
  {
    title: "Hard Water Wear on Toilet Parts",
    body: "Summerlin homes share the hard water of the rest of the Las Vegas Valley. Mineral deposits can build up in the siphon jets and rim holes, which weakens the flush, and they speed up wear on flappers, fill valves, and other tank parts. Running toilets and weak flushes are common results.",
  },
  {
    title: "Older Villages and Newer Homes Age Differently",
    body: "In Summerlin's oldest villages, including The Hills, The Trails, and The Arbors, toilets and tank parts that have never been replaced can be decades old, so worn seals and parts are common service calls. In newer Summerlin South homes, the call is more often a part replacement or an upgrade to a different toilet style or height.",
  },
  {
    title: "Wax Ring Wear and Soil Movement",
    body: "Many Summerlin homes sit on slab foundations above caliche and expansive clay soils that shift with the seasons. That movement can stress the wax ring seal between the toilet base and the floor flange. If a toilet has not been reseated in many years, a base leak or wobble is a common sign.",
    tail: [" See our ", { href: "/summerlin/slab-leak-detection-repair/", text: "Summerlin slab leak detection and repair" }, " page if a slab leak is suspected."],
  },
];

// Services (H3 article cards).
const SERVICES_HEADING = "Toilet Repair and Installation Services in Summerlin";
const SERVICES_INTRO = "Red Carpet Plumbing provides a full range of toilet repair and installation services for Summerlin homes and properties.";
const SERVICES: { title: string; body: string; tail?: LinkSeg[] }[] = [
  {
    title: "Running Toilet Repair",
    body: "Diagnosis and repair of toilets that run continuously after flushing, including flapper, fill valve, and float replacement. Hard water speeds up wear on these parts.",
  },
  {
    title: "Leaking Toilet Repair",
    body: "Repair of toilets leaking at the base, tank, or supply line connections, including wax ring replacement and flange service. For persistent moisture near the toilet, we also check for hidden leaks.",
    tail: [" See our ", { href: "/summerlin/leak-detection-repair/", text: "Summerlin leak detection and repair" }, " page for related diagnostic services."],
  },
  {
    title: "Toilet Clog Clearing",
    body: "Clearing of toilet clogs, including stubborn or recurring blockages that a plunger cannot resolve.",
    tail: [" For clogs that recur or involve the main drain line, see our ", { href: "/summerlin/drain-cleaning/", text: "Summerlin drain cleaning" }, " page."],
  },
  {
    title: "Toilet Replacement",
    body: "Full toilet replacement for cracked, damaged, or aging toilets that are no longer worth repairing. We handle disconnection, removal, and installation of the replacement unit.",
  },
  {
    title: "New Toilet Installation",
    body: "Installation of new toilets for bathroom remodels, additions, and upgrades throughout Summerlin.",
  },
  {
    title: "Wax Ring and Tank Component Repair",
    body: "Replacement of failed wax rings, repair of damaged flanges, and replacement of tank parts including flappers, fill valves, flush valves, and supply lines.",
  },
];

// Repair or replace (two H3 blocks).
const DECISION_HEADING = "Toilet Repair or Replacement: What Makes Sense for Your Summerlin Home?";
const DECISION_BLOCKS: { title: string; body: string }[] = [
  {
    title: "When repair is the right choice",
    body: "Repair is usually the practical choice for most toilet problems. A running toilet with a worn flapper or fill valve, a base leak from a worn wax ring, a weak flush caused by mineral-blocked jets, and a wobbly toilet from loose bolts are all problems that targeted repair can fix.",
  },
  {
    title: "When replacement makes more sense",
    body: "Replacement is the better option when a toilet has a cracked tank or bowl, needs repeated repairs for the same problem, or has heavy mineral scale that cannot be cleared. An older toilet may also use more water per flush than a modern low-flow model, which is worth weighing.",
  },
];

// Mid-page CTA band (charcoal).
const MID_CTA = {
  headline: "Toilet Trouble in Your Summerlin Home?",
  body: "Red Carpet Plumbing handles running toilets, base leaks, clogs, and toilet replacement throughout Summerlin. Call now and describe what is happening, or request service online.",
};

// Process. Single source for the visible steps and the HowTo schema.
const PROCESS_HEADING = "How We Handle Toilet Service in Summerlin";
const PROCESS_INTRO = "This is our standard process for toilet repair and installation in Summerlin homes.";
const PROCESS_STEPS: { name: string; body: string }[] = [
  {
    name: "Call and describe the problem.",
    body: "Call (702) 567-9172 and describe what your toilet is doing. If it is overflowing and will not stop, shut off the water at the valve behind the toilet first.",
  },
  {
    name: "Inspection and diagnosis.",
    body: "A licensed plumber inspects the toilet, tank parts, base seal, flange, supply line, and drain connection to find the exact cause.",
  },
  {
    name: "Review options and approve.",
    body: "We explain what we found and whether repair or replacement is the more practical choice for your situation. You approve the work before anything is done.",
  },
  {
    name: "Repair or installation with final check.",
    body: "Our plumber completes the repair or installs the new toilet, checks all connections, confirms the flush works correctly, and cleans up before leaving.",
  },
];

// Why choose.
const WHY_CHOOSE_HEADING = "Why Summerlin Homeowners Choose Red Carpet Plumbing";
const WHY_CHOOSE_ITEMS = [
  // FLAG: VERIFY license #048585A before publishing.
  "Licensed Nevada plumbers, NV License #048585A, C-1 Plumbing and Heating",
  "Honest repair or replace assessment before any work is recommended",
  "Familiar with Summerlin's mix of older villages and newer builds",
  "Clear options explained before work begins",
  // FLAG: VERIFY transparent pricing claim before publishing.
  "Transparent pricing with no hidden fees",
];

// Areas. Chips are plain text; cross-links are in the paragraph.
const AREAS_HEADING = "Toilet Repair and Installation Across Summerlin";
const AREAS_INTRO = "Red Carpet Plumbing provides toilet repair and installation throughout Summerlin, including Summerlin North, Summerlin South, and all Summerlin villages. Call (702) 567-9172 to confirm coverage for your address.";
const AREA_CHIPS = [
  "Summerlin North",
  "Summerlin South",
  "The Hills",
  "The Trails",
  "The Arbors",
  "The Canyons",
  "The Ridges",
  "The Willows",
  "The Gardens",
  "Downtown Summerlin Area",
  "Summerlin Centre",
];
const AREAS_CROSS_LINKS: LinkSeg[] = ["We also provide toilet repair and installation in ", { href: "/las-vegas/toilet-repair-installation/", text: "Las Vegas" }, " and ", { href: "/north-las-vegas/toilet-repair-installation/", text: "North Las Vegas" }, ". For every service we offer in your community, visit our ", { href: "/summerlin-plumbing-services/", text: "Summerlin plumbing services" }, " page."];

// FAQs. Single source for the visible accordion and the FAQPage schema.
const FAQS: FaqItem[] = [
  {
    question: "Why does my toilet keep running?",
    answer: "A worn flapper, a failing fill valve, or a float set too high are the usual causes. Hard water speeds up wear on these rubber and plastic parts, so tank components often need replacing. A plumber can find the cause and fix it quickly in most cases.",
    category: "causes-signs",
  },
  {
    question: "Why is my toilet leaking at the base?",
    answer: "A leak at the base is most often a failed wax ring, the seal between the toilet and the floor flange. Soil movement under a slab, loose bolts, or a damaged flange can also cause it. Stop using the toilet and call us before the water damages the floor.",
    category: "causes-signs",
  },
  {
    question: "How do I know if my toilet needs repair or replacement?",
    answer: "Repair fits most single problems, such as a worn flapper, a failed wax ring, or a loose base. Replacement makes more sense for a cracked bowl or tank, repeated repairs on the same fixture, or heavy mineral scale. We explain both options, and you approve the work first.",
    category: "causes-signs",
  },
  {
    question: "Can hard water damage a toilet?",
    answer: "Yes. Minerals from hard water build up in the siphon jets and rim holes, which weakens the flush, and they wear out flappers, fill valves, and seals faster. Regular repairs, and replacement when scale is severe, keep a toilet working properly.",
    category: "the-service",
  },
  // FLAG: VERIFY single-visit installation timing before publishing.
  {
    question: "How long does toilet installation take?",
    answer: "A standard toilet replacement is usually completed in a single visit. The time depends on the condition of the floor flange, shut-off valve, and supply line, which we check before installing the new toilet. We tell you what to expect when you call.",
    category: "timing-process",
  },
  {
    question: "What should I do if my toilet is overflowing?",
    answer: "Do not flush again. Shut off the water at the valve behind the toilet by turning it clockwise. Then call (702) 567-9172 and tell us what happened. If water has reached the floor, move rugs and valuables away from it if it is safe to do so.",
    category: "the-service",
  },
  {
    question: "Do you offer same-day toilet repair in Summerlin?",
    answer: "Same-day toilet repair is available in Summerlin, subject to scheduling. Call (702) 567-9172 to check same-day availability for your address. When you call, tell us what the toilet is doing, such as running, leaking, or clogging, so we can schedule the right visit.",
    category: "timing-process",
  },
];

// Related services.
const RELATED_SERVICES: { label: string; href: string }[] = [
  {
    label: "Drain Cleaning in Summerlin",
    href: "/summerlin/drain-cleaning/",
  },
  {
    label: "Leak Detection and Repair in Summerlin",
    href: "/summerlin/leak-detection-repair/",
  },
  {
    label: "Faucet and Sink Repair and Installation in Summerlin",
    href: "/summerlin/faucet-sink-repair-installation/",
  },
  {
    label: "Water Pipe Repair and Replacement in Summerlin",
    href: "/summerlin/water-pipe-repair-replacement/",
  },
  {
    label: "Toilet Repair and Installation (all of the Las Vegas Valley)",
    href: "/toilet-repair-installation/",
  },
];

// Final CTA.
const FINAL_CTA = {
  headline: "Toilet Problem in Summerlin? We Can Help.",
  // FLAG: VERIFY transparent pricing claim before publishing.
  body: "Red Carpet Plumbing provides toilet diagnosis, repair, replacement, and new installation for Summerlin homes and businesses. Transparent pricing and licensed plumbers.",
};

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Toilet Repair and Installation in Summerlin, NV | Red Carpet Plumbing",
  description:
    "Toilet repair and installation in Summerlin, NV. Running toilets, base leaks, clogs, and replacements. NV #048585A. Call (702) 567-9172.",
  url: "https://redcarpetplumbing.com/summerlin/toilet-repair-installation/",
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
      name: "Summerlin Plumbing Services",
      item: "https://redcarpetplumbing.com/summerlin-plumbing-services/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Toilet Repair and Installation in Summerlin",
      item: "https://redcarpetplumbing.com/summerlin/toilet-repair-installation/",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Toilet Repair and Installation",
  serviceType: "Toilet Repair and Installation",
  // FLAG: VERIFY license #048585A in the description before publishing.
  description:
    "Red Carpet Plumbing provides running toilet repair, leaking toilet repair, toilet clog clearing, toilet replacement, new toilet installation, and wax ring and tank component repair for homes and businesses in Summerlin, NV. Nevada Contractor License #048585A.",
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
    "@type": "Place",
    name: "Summerlin",
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: "Clark County",
      containedInPlace: {
        "@type": "State",
        name: "Nevada",
      },
    },
  },
};

// HowTo schema included because the process section renders the matching visible
// numbered steps. Derived from PROCESS_STEPS so the schema text always matches the page text.
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How We Handle Toilet Service in Summerlin",
  description: "The process Red Carpet Plumbing follows for toilet repair and installation in Summerlin, NV.",
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

export default function SummerlinToiletPage() {
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
              label: "Summerlin Plumbing Services",
              href: "/summerlin-plumbing-services/",
            },
            { label: "Toilet Repair and Installation in Summerlin" },
          ]} variant="dark" />}
          headingLevel="h1"
          headline={
            <>
              Toilet Repair and Installation
              <br /> in Summerlin, NV
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
          formSlot={<QuoteFormPlaceholder title="Get Toilet Repair Help" />}
          backgroundImage={{
            src: "/images/services/toilet-repair-installation/red-carpet-plumbing-las-vegas-toilet-repair-installation-hero.webp",
            alt: "Toilet Repair and Installation in Summerlin, NV",
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
          heading={<>Frequently Asked Questions <br className="hidden sm:block" /> About Toilet Repair and Installation in Summerlin, NV</>}
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
