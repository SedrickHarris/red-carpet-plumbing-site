// FLAG: VERIFY before publishing:
// - Telephone +17025679172 — project-established value; confirm before launch.
// - License #0048585A, C-1 Plumbing and Heating — project-established value;
//   confirm before launch.
// - "Licensed and Insured Plumbers" trust strip claim — confirm documentation.
// - "Transparent Pricing, No Hidden Fees" / "Upfront Pricing" — source-site
//   claims; confirm before launch.
// - Emergency sewer availability (Section 4 emergency card) — source-site claim.
// FLAG comments appear only in source. No FLAG text appears in any visible
// string or schema text.
//
// Henderson service-location schema pattern (matches app/henderson/re-piping/
// page.tsx): Plumber provider; areaServed City (Henderson) + containedInPlace
// State (Nevada); no sameAs, no hasCredential, no AggregateRating. 5 separate
// JsonLd blocks in order WebPage -> BreadcrumbList -> Service -> HowTo ->
// FAQPage. HowTo + FAQPage derive from a single const (visible = schema). Hero
// carries trustItems AND a separate red trust band (Section 2). Context and
// services render as H3 article cards.
//
// Hero has no backgroundImage: no /images/services/sewer-line-services/ asset
// exists (directory absent, same as the core/LV sewer pages). HeroSection
// renders its gradient. TODO: add a dedicated sewer-line-services hero asset.

import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { HeroSection } from "@/components/HeroSection";
import { JsonLd } from "@/components/JsonLd";
import { QuoteFormPlaceholder } from "@/components/QuoteFormPlaceholder";
import { SectionReveal, SectionRevealItem } from "@/components/SectionReveal";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import TrustStrip from "@/components/TrustStrip";

export const metadata: Metadata = {
  title: "Sewer Line Services in Henderson, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides sewer line inspection, cleaning, repair, and replacement in Henderson, NV. Licensed plumbers. Call (702) 567-9172.",
  alternates: {
    canonical: "https://redcarpetplumbing.com/henderson/sewer-line-services/",
  },
  openGraph: {
    title: "Sewer Line Services in Henderson, NV | Red Carpet Plumbing",
    description:
      "Licensed sewer line inspection, cleaning, repair, and replacement for Henderson homes and businesses. Serving Green Valley, Green Valley Ranch, Anthem, and all Henderson communities. Call (702) 567-9172.",
    url: "https://redcarpetplumbing.com/henderson/sewer-line-services/",
    siteName: "Red Carpet Plumbing",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

type LinkSeg = string | { href: string; text: string };

const HERO_TRUST_ITEMS = [
  // FLAG: VERIFY license #0048585A before publishing.
  "NV Licensed Plumbers, #0048585A",
  "Serving Henderson and the Las Vegas Valley",
  "Residential and Commercial Sewer Service",
  // FLAG: VERIFY transparent pricing claim before publishing.
  "Transparent Pricing, No Hidden Fees",
];

const SEWER_TRUST_STRIP = [
  // FLAG: VERIFY "Licensed and Insured" claim before publishing.
  "Licensed and Insured Plumbers",
  "Serving Henderson, Green Valley, and the Las Vegas Valley",
  "Sewer Camera Inspection Available",
  // FLAG: VERIFY "Upfront Pricing" claim before publishing.
  "Upfront Pricing, No Hidden Fees",
];

// ---------------------------------------------------------------------------
// Section 3 — why Henderson homes have sewer line problems (H3 article cards).
// ---------------------------------------------------------------------------
const HENDERSON_SEWER_CONTEXT = [
  {
    title: "Green Valley Original Neighborhoods (1985 to 1995)",
    body: "Homes built during Green Valley's first decade of development, from roughly 1985 through the early-to-mid 1990s, now have sewer infrastructure that is 30 to 40 years old. Original sewer lines in these homes were commonly clay or cast iron. Cast iron sewer pipes corrode from the inside out in hard water environments, accumulating mineral scale that reduces flow capacity and weakens pipe walls over decades. Clay sewer lines in this vintage can develop cracks and joint separations as the surrounding caliche and clay soil shifts over time. Many Green Valley original homes are reaching the point where a sewer camera inspection is a practical maintenance step, not just a diagnostic response to an active problem.",
  },
  {
    title:
      "Green Valley Ranch and Newer Henderson Development (Mid-1990s to Mid-2000s)",
    body: "Homes built in Green Valley Ranch and other Henderson communities developed from the mid-1990s through the mid-2000s are now 20 to 30 years old and approaching or at the first sewer service cycle. These homes more commonly have PVC sewer lines rather than clay or cast iron, but root intrusion, pipe belly from soil settlement, and joint issues can affect any sewer line material as it ages in desert soil conditions.",
  },
  {
    title: "Desert Tree Roots and Henderson HOA Landscaping",
    body: "Henderson's master-planned communities, including Green Valley, Green Valley Ranch, Anthem, MacDonald Ranch, and Inspirada, have extensive HOA-maintained landscaping with mature mesquite, olive, and ornamental trees. Mesquite roots can extend 50 feet or more from the trunk, actively seeking moisture. Sewer lines are the most reliable moisture source on a residential property. Small cracks, aging joint separations, and root entry points allow roots to penetrate the sewer line and grow into masses that restrict or completely block flow. Root intrusion is one of the most common sewer line findings in Henderson camera inspections, particularly in original Green Valley neighborhoods where trees planted at the time of construction have had 30 to 40 years to mature.",
  },
];

// ---------------------------------------------------------------------------
// Section 4 — sewer line services (H3 article cards). Cleaning card links to the
// video camera page; emergency card links to Henderson emergency plumbing.
// ---------------------------------------------------------------------------
const HENDERSON_SEWER_SERVICES: {
  title: string;
  body: string;
  tail?: LinkSeg[];
}[] = [
  {
    title: "Sewer Camera Inspection",
    body: "A sewer camera inspection lets us see inside your sewer line without excavation. We insert a high-resolution camera through a cleanout access point and inspect the interior of the line in real time. Camera inspection identifies blockages, root intrusion, mineral scale, pipe belly conditions, cracks, offset joints, and structural damage accurately. For Henderson homeowners in original Green Valley or older properties, a camera inspection is a practical first step before a small issue becomes a major repair. We also perform camera inspections as part of pre-purchase due diligence for buyers evaluating Henderson homes.",
  },
  {
    title: "Sewer Line Cleaning",
    body: "We clean sewer lines using cable machines and hydro jetting matched to the type and location of the blockage. For Henderson sewer lines with significant hard water mineral scale or grease accumulation, hydro jetting uses high-pressure water to scour the pipe walls clean rather than just clearing a path through the clog. We assess the condition of older sewer lines before recommending hydro jetting to confirm the pipe can handle the pressure.",
    tail: [
      " See our ",
      {
        href: "/video-camera-plumbing-inspections/",
        text: "video camera plumbing inspections",
      },
      " page for more on how camera inspection guides cleaning decisions.",
    ],
  },
  {
    title: "Root Intrusion Removal",
    body: "Desert tree roots are a major cause of sewer line blockages in Henderson, particularly in Green Valley and Green Valley Ranch neighborhoods where mature mesquite and ornamental trees are common near sewer line paths. We remove root intrusion mechanically and with hydro jetting, and we use camera inspection to assess whether the roots have caused structural damage to the pipe beyond the blockage itself.",
  },
  {
    title: "Sewer Line Repair",
    body: "Sewer lines with cracks, corrosion, offset joints, or structural damage may require repair rather than cleaning alone. Red Carpet Plumbing provides trenchless CIPP pipe lining for lines that retain adequate structural shape, and traditional excavation for sections that require direct access. Henderson's caliche soil makes traditional sewer excavation more labor-intensive and expensive than in softer soil markets, which is why trenchless repair is often the preferred option when the pipe qualifies.",
  },
  {
    title: "Sewer Line Replacement",
    body: "When a sewer line has deteriorated beyond repair, we coordinate sewer line replacement including Henderson City permit application and inspection scheduling. Pipe bursting allows new pipe to be pulled through the old line without a full-length trench, preserving Henderson pavers, desert landscaping, and hardscape that would otherwise require expensive restoration after traditional excavation.",
  },
  {
    // FLAG: VERIFY emergency sewer availability before publishing — source-site claim.
    title: "Emergency Sewer Line Service",
    body: "Active sewer backups with sewage surfacing inside the home or yard require immediate licensed response. Red Carpet Plumbing provides emergency sewer line service throughout Henderson.",
    tail: [
      " See our ",
      {
        href: "/henderson/emergency-plumbing/",
        text: "Henderson emergency plumbing",
      },
      " page for full emergency service details.",
    ],
  },
];

// ---------------------------------------------------------------------------
// Section 5 — warning signs (plain list).
// ---------------------------------------------------------------------------
const HENDERSON_SEWER_WARNING_SIGNS = [
  "Multiple slow drains or backups throughout the home at the same time",
  "Sewage odor inside the home, in the yard, or near the foundation",
  "Gurgling sounds from toilets or floor drains when other fixtures are in use",
  "Water backing up into tubs or floor drains when the toilet is flushed",
  "Wet spots or unusually green or soggy ground in the yard along the sewer line path",
  "Drain problems that return shortly after professional clearing",
  "Unexplained increases in water or sewer utility bills",
];

// ---------------------------------------------------------------------------
// Section 6 — process (HowTo schema source of truth). Visible numbered steps and
// the HowTo JSON-LD both derive from this array.
// ---------------------------------------------------------------------------
const HENDERSON_SEWER_STEPS = [
  {
    name: "Inspect the sewer line with a camera",
    body: "We begin every sewer line service call with a camera inspection when the condition of the line is unknown. Inserting a high-resolution camera through a cleanout access point lets us see exactly what is happening inside the line before recommending any repair. We identify blockage type, root intrusion, mineral scale, pipe belly, cracks, offset joints, and structural damage accurately without excavation.",
  },
  {
    name: "Report findings and explain all options",
    body: "We walk you through what the camera found, explain what it means for your sewer line, and present all applicable repair options with clear descriptions. A line that is blocked by soft debris may need only cleaning. A line with root intrusion requires root removal and a structural assessment. A line with cracks or significant corrosion may need trenchless repair or replacement. You have the information needed to make a confident decision.",
  },
  {
    name: "Complete the approved service",
    body: "We complete the approved service using the method appropriate for your specific line condition, whether that is hydro jetting, trenchless CIPP lining, pipe bursting, or targeted excavation. For projects requiring Henderson City permits, we coordinate the permit application and inspection scheduling as part of the job.",
  },
  {
    name: "Confirm the line is clear with a post-service camera check",
    body: "For cleaning and repair work, we perform a post-service camera inspection to confirm the line is fully clear and the repair is holding. You have direct visual confirmation of the result before we leave the property.",
  },
];

// FLAG: VERIFY before publishing — license #0048585A and transparent pricing are
// source-site claims.
const WHY_CHOOSE_ITEMS = [
  "Licensed Nevada plumbers. Every sewer line service job in Henderson is handled by Nevada-licensed plumbing professionals.",
  "Henderson-specific knowledge. We understand the sewer line conditions specific to Green Valley, Green Valley Ranch, Anthem, and Henderson's other master-planned communities, including vintage pipe materials, caliche soil, and HOA landscaping root intrusion patterns.",
  "Camera inspection first. We inspect before we repair, so you understand the actual condition of your sewer line and the reason for every recommendation.",
  "Henderson City permits coordinated. Projects requiring City of Henderson permits are handled with permit application and inspection scheduling included.",
  "Transparent pricing. We explain the scope and cost of the work before it begins.",
  "Full sewer line coverage. From camera inspection and cleaning to trenchless repair and full replacement, Red Carpet Plumbing handles the complete range of Henderson sewer line needs.",
];

const COMMUNITIES_INTRO =
  "Red Carpet Plumbing provides sewer line services throughout Henderson, including its established neighborhoods, newer master-planned communities, and resort-area properties.";

const COMMUNITIES: { name: string; href?: string }[] = [
  { name: "Green Valley", href: "/green-valley-plumbing-services/" },
  { name: "Lake Las Vegas", href: "/lake-las-vegas-plumbing-services/" },
  { name: "Green Valley Ranch" },
  { name: "Seven Hills" },
  { name: "MacDonald Ranch" },
  { name: "Anthem" },
  { name: "Tuscany Village" },
  { name: "Inspirada" },
  { name: "Whitney Ranch" },
  { name: "Downtown Henderson" },
];

// ---------------------------------------------------------------------------
// FAQ source of truth. The visible FAQ section AND the FAQPage JSON-LD schema
// both derive from this single array, guaranteeing a character-for-character
// match. Do not edit one without the other.
// ---------------------------------------------------------------------------
const HENDERSON_SEWER_FAQS = [
  {
    question:
      "How do I know if I have a sewer line problem in my Henderson home?",
    answer:
      "Common signs of a sewer line problem in Henderson include multiple slow drains or backups throughout the home at the same time, sewage odor inside the home or yard, gurgling sounds from toilets or floor drains when other fixtures are in use, water backing up into tubs or floor drains when the toilet is flushed, wet or soggy spots in the yard along the sewer line path, and drain problems that return shortly after clearing. If you notice any of these signs, a sewer camera inspection is the most accurate way to diagnose the cause.",
  },
  {
    question:
      "Why are sewer line problems so common in Green Valley and Green Valley Ranch?",
    answer:
      "Homes built in Green Valley from roughly 1985 through the early 1990s now have sewer infrastructure that is 30 to 40 years old. Original sewer lines in these homes were commonly clay or cast iron, both of which are affected by Las Vegas hard water mineral buildup, soil movement from caliche and expansive clay, and root intrusion from mature mesquite and ornamental trees planted at the time of construction. Green Valley Ranch homes from the mid-1990s to mid-2000s are approaching their first service cycle. A sewer camera inspection helps identify developing issues before they become emergencies.",
  },
  {
    question: "What is a sewer camera inspection and do I need one?",
    answer:
      "A sewer camera inspection involves inserting a high-resolution waterproof camera into the sewer line through a cleanout access point to inspect the interior of the pipe in real time. The inspection identifies blockages, root intrusion, mineral scale, cracks, offset joints, pipe belly, and other structural issues without excavation. A camera inspection is recommended any time you have recurring backups, unexplained sewer odors, or a drain problem that has returned after clearing. It is also useful as a pre-purchase check for buyers evaluating older Henderson homes.",
  },
  {
    question: "Does Red Carpet Plumbing handle Henderson City sewer permits?",
    answer:
      "Yes. Sewer line repair and replacement projects in Henderson that require a City of Henderson permit are handled with permit application and inspection scheduling included. Henderson City permits are separate from Clark County unincorporated permits, and our plumbers coordinate the permitting process as part of the job.",
  },
  {
    question:
      "What is trenchless sewer line repair and is it available in Henderson?",
    answer:
      "Trenchless sewer line repair uses methods like CIPP pipe lining and pipe bursting to repair or replace a damaged sewer line without excavating the full length of the pipe. CIPP lining inserts a resin-saturated liner into the existing pipe, which cures in place to form a new pipe within the old one. Pipe bursting pulls a new pipe through the old one while fracturing the original outward. Both methods preserve Henderson pavers, desert landscaping, and hardscape that would otherwise require expensive restoration after traditional excavation. Red Carpet Plumbing evaluates whether a line qualifies for trenchless repair based on camera inspection findings.",
  },
  {
    question:
      "Where does Red Carpet Plumbing provide sewer line services in Henderson?",
    answer:
      "Red Carpet Plumbing provides sewer line inspection, cleaning, repair, and replacement throughout Henderson, NV, including Green Valley, Green Valley Ranch, Seven Hills, MacDonald Ranch, Anthem, Tuscany Village, Inspirada, Whitney Ranch, Lake Las Vegas, and Downtown Henderson. We also serve all neighboring Las Vegas Valley communities. Contact us to confirm coverage for your location.",
  },
];

// ---------------------------------------------------------------------------
// JSON-LD payloads. areaServed City (Henderson) -> State (Nevada). No
// AggregateRating, no sameAs, no hasCredential.
// ---------------------------------------------------------------------------
const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Sewer Line Services in Henderson, NV | Red Carpet Plumbing",
  url: "https://redcarpetplumbing.com/henderson/sewer-line-services/",
  description:
    "Red Carpet Plumbing provides sewer line inspection, cleaning, repair, and replacement in Henderson, NV. Licensed plumbers serving Green Valley, Green Valley Ranch, Anthem, and all Henderson communities.",
  inLanguage: "en-US",
  isPartOf: {
    "@type": "WebSite",
    name: "Red Carpet Plumbing",
    url: "https://redcarpetplumbing.com/",
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
      name: "Henderson Plumbing Services",
      item: "https://redcarpetplumbing.com/henderson-plumbing-services/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Sewer Line Services in Henderson, NV",
      item: "https://redcarpetplumbing.com/henderson/sewer-line-services/",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Sewer Line Services in Henderson, NV",
  serviceType: "Sewer Line Services",
  description:
    "Red Carpet Plumbing provides sewer line inspection, cleaning, repair, and replacement for homes and businesses in Henderson, NV, including camera inspection, hydro jetting, CIPP lining, pipe bursting, root intrusion removal, and emergency sewer line service.",
  provider: {
    "@type": "Plumber",
    name: "Red Carpet Plumbing",
    url: "https://redcarpetplumbing.com",
    // FLAG: VERIFY telephone before publishing.
    telephone: "+17025679172",
  },
  areaServed: {
    "@type": "City",
    name: "Henderson",
    containedInPlace: {
      "@type": "State",
      name: "Nevada",
    },
  },
};

// HowTo schema included because Section 6 renders the matching visible numbered
// process steps. Derived from HENDERSON_SEWER_STEPS for a guaranteed text match.
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Red Carpet Plumbing Handles Sewer Line Service in Henderson",
  step: HENDERSON_SEWER_STEPS.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.name,
    text: s.body,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: HENDERSON_SEWER_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

function renderTail(tail: LinkSeg[]) {
  return tail.map((seg, i) =>
    typeof seg === "string" ? (
      seg
    ) : (
      <Link
        key={i}
        href={seg.href}
        className="font-semibold text-brand-primary hover:text-brand-primary-hover"
      >
        {seg.text}
      </Link>
    ),
  );
}

export default function HendersonSewerLinePage() {
  return (
    <>
      <JsonLd data={webpageSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={howToSchema} />
      <JsonLd data={faqSchema} />

      <SiteHeader />

      <main id="main" className="flex-1 bg-white">
        <Breadcrumbs
          trail={[
            { label: "Home", href: "/" },
            {
              label: "Henderson Plumbing Services",
              href: "/henderson-plumbing-services/",
            },
            { label: "Sewer Line Services in Henderson, NV" },
          ]}
        />

        {/* SECTION 1: HERO */}
        {/* TODO: no /images/services/sewer-line-services/ hero asset exists;
            hero renders its gradient background. Add a dedicated hero image when
            available and pass it via backgroundImage. */}
        <HeroSection
          headingLevel="h1"
          headline="Sewer Line Services in Henderson, NV"
          subheading="Red Carpet Plumbing provides sewer line inspection, cleaning, repair, and replacement for homes and businesses throughout Henderson, NV. Whether you are dealing with a sewer backup, slow drains, gurgling pipes, or a line that needs inspection before a home purchase, our licensed plumbers diagnose the problem accurately and explain all repair options before any work begins. Call us or request service online."
          trustItems={HERO_TRUST_ITEMS}
          primaryCTA={{
            label: "Call (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{
            label: "Request Sewer Line Service",
            href: "/contact/",
          }}
          ctaNote="Licensed plumbers. Transparent pricing. No hidden fees."
          formSlot={<QuoteFormPlaceholder title="Get Sewer Line Help" />}
        />

        {/* SECTION 2: TRUST STRIP */}
        <TrustStrip
          items={SEWER_TRUST_STRIP}
          ariaLabel="Why Henderson customers choose Red Carpet Plumbing for sewer line services"
        />

        {/* SECTION 3: HENDERSON SEWER LINE CONTEXT */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Why Henderson Homes Have Sewer Line Problems
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Henderson&apos;s sewer line conditions are shaped by the age of
                construction in its established neighborhoods, the expansive
                caliche and clay soils common throughout the Las Vegas Valley, and
                the hard water that affects all plumbing systems drawing from the
                Southern Nevada Water Authority.
              </p>
            </div>
            <div className="mt-10 space-y-6">
              {HENDERSON_SEWER_CONTEXT.map((c) => (
                <article
                  key={c.title}
                  className="rounded-2xl bg-brand-surface-alt p-6 ring-1 ring-brand-surface-alt sm:p-8"
                >
                  <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-brand-dark/80">
                    {c.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: SERVICES OFFERED */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Sewer Line Services for Henderson Homes and Businesses
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing provides the full range of sewer line services
                for residential and commercial properties throughout Henderson. Our
                licensed plumbers start with a camera inspection so you understand
                exactly what the problem is before any repair work begins.
              </p>
            </div>
            <div className="mt-10 space-y-6">
              {HENDERSON_SEWER_SERVICES.map((s) => (
                <article
                  key={s.title}
                  className="rounded-2xl bg-white p-6 ring-1 ring-brand-surface-alt sm:p-8"
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

        {/* SECTION 5: WARNING SIGNS */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Signs You May Have a Sewer Line Problem in Henderson
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                If you notice any of the following, contact a licensed plumber for
                a sewer line inspection:
              </p>
            </div>
            <div className="mt-8 rounded-2xl border-l-4 border-brand-primary bg-brand-surface-alt p-6 sm:p-8">
              <ul className="space-y-3">
                {HENDERSON_SEWER_WARNING_SIGNS.map((sign) => (
                  <li key={sign} className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-2 inline-block h-2 w-2 flex-none rounded-full bg-brand-primary"
                    />
                    <span className="text-base leading-7 text-brand-dark/80">
                      {sign}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 6: PROCESS (HowTo) */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    How Red Carpet Plumbing Handles Sewer Line Service in Henderson
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Sewer line problems range from blockages that clear with
                    cleaning to structural damage that requires repair or
                    replacement. Here is how we approach sewer line service for
                    Henderson homes and businesses.
                  </p>
                </div>
              </SectionRevealItem>
              <SectionRevealItem className="mt-12">
                <ol className="space-y-8">
                  {HENDERSON_SEWER_STEPS.map((step, index) => (
                    <li key={step.name} className="flex items-start gap-4">
                      <span
                        aria-hidden="true"
                        className="inline-flex h-12 w-12 flex-none items-center justify-center rounded-full bg-brand-primary text-lg font-semibold text-white"
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

        {/* SECTION 7: MID-PAGE CTA */}
        <section className="bg-brand-charcoal text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Sewer Line Problem in Henderson?
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/80">
                  Red Carpet Plumbing provides sewer line inspection, cleaning,
                  repair, and replacement throughout Henderson, NV. We start with a
                  camera inspection so you know exactly what you are dealing with
                  before any work begins. Call us or request service online.
                </p>
              </div>
              <div className="flex flex-col items-start gap-4 lg:items-end">
                <a
                  href="tel:+17025679172"
                  className="inline-flex min-h-14 items-center justify-center rounded-lg bg-brand-primary px-8 text-lg font-semibold text-white shadow-sm hover:bg-brand-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary motion-safe:transition-colors motion-safe:active:scale-[0.97]"
                >
                  Call (702) 567-9172
                </a>
                <Link
                  href="/contact/"
                  className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/60 px-6 py-3 text-base font-semibold text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-safe:transition-colors motion-safe:active:scale-[0.97]"
                >
                  Request Sewer Line Service
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8: WHY CHOOSE RED CARPET PLUMBING */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Why Henderson Homeowners Choose Red Carpet Plumbing for Sewer
                Service
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

        {/* SECTION 9: HENDERSON COMMUNITIES */}
        <section className="bg-brand-charcoal text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="max-w-3xl text-left">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Henderson Communities We Serve for Sewer Line Services
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/85">
                {COMMUNITIES_INTRO} For full Henderson plumbing coverage, see our{" "}
                <Link
                  href="/henderson-plumbing-services/"
                  className="font-semibold text-white underline underline-offset-4 hover:text-white/80"
                >
                  Henderson plumbing services
                </Link>{" "}
                page.
              </p>
            </div>

            <ul className="mt-10 flex flex-wrap gap-3">
              {COMMUNITIES.map((c) => (
                <li key={c.name}>
                  {c.href ? (
                    <Link
                      href={c.href}
                      className="block rounded-lg bg-white px-5 py-3 font-semibold text-brand-charcoal shadow-sm transition-colors hover:bg-brand-surface-alt focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                      {c.name}
                    </Link>
                  ) : (
                    <span className="block rounded-lg border border-white/10 bg-white/5 px-5 py-3 font-medium text-white/85">
                      {c.name}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 10: FAQ */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Frequently Asked Questions About Sewer Line Services in Henderson,
                NV
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {HENDERSON_SEWER_FAQS.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-brand-surface-alt open:border-l-4 open:border-brand-primary open:pl-4 sm:p-8"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-brand-dark sm:text-xl [&::-webkit-details-marker]:hidden">
                    <span>{faq.question}</span>
                    <FaqChevron />
                  </summary>
                  <p className="mt-4 text-base leading-7 text-brand-dark/80">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 11: FINAL CTA */}
        {/* FLAG: VERIFY — license number in the body is a source-site claim. */}
        <CTASection
          background="red"
          headline={<>Ready to Schedule Sewer Line Service<br />in Henderson?</>}
          body="Red Carpet Plumbing is available for sewer line inspection, cleaning, repair, and replacement throughout Henderson and the Las Vegas Valley. Licensed plumbers, NV #0048585A."
          primaryCTA={{
            label: "Call (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{
            label: "Request Sewer Line Service",
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
      className="mt-1 h-5 w-5 flex-none text-brand-primary"
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

function FaqChevron() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 flex-none text-brand-muted transition-transform group-open:rotate-180"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
    </svg>
  );
}
