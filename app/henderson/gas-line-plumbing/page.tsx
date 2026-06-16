// FLAG: VERIFY before publishing:
// - Telephone +17025679172 — project-established value; confirm before launch.
// - License #0048585A, C-1 Plumbing and Heating — project-established value;
//   confirm before launch.
// - "Emergency Gas Line Response Available" trust strip claim — confirm.
// - "Transparent Pricing" / "Upfront Pricing, No Hidden Fees" — source-site
//   claims; confirm before launch.
// - Emergency availability (Section 5 emergency card) — source-site claim.
// - Southwest Gas number 1-800-935-4748 — publicly listed; verify current
//   accuracy before launch.
// FLAG comments appear only in source. No FLAG text appears in any visible
// string or schema text.
//
// Henderson service-location schema pattern (matches app/henderson/
// sewer-line-services/page.tsx, P54): Plumber provider; areaServed City
// (Henderson) + containedInPlace State (Nevada); no sameAs, no hasCredential,
// no AggregateRating. 5 separate JsonLd blocks in order WebPage ->
// BreadcrumbList -> Service -> HowTo -> FAQPage. HowTo + FAQPage derive from a
// single const (visible = schema). Hero carries trustItems AND a separate red
// trust band. Context and services render as H3 article cards.
//
// Hero uses gas-line-plumbing/hero.webp (358KB; the only asset — no card.webp).
// The "If You Smell Gas" safety callout (Section 2) renders as a distinct
// bordered alert panel (border-2 border-brand-primary on brand-surface-alt) —
// NOT the full-width red trust band and NOT a CTA button.

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
  title: "Gas Line Plumbing in Henderson, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides licensed gas line repair, installation, and inspection in Henderson, NV. NV License #0048585A. Call (702) 567-9172.",
  alternates: {
    canonical: "https://redcarpetplumbing.com/henderson/gas-line-plumbing/",
  },
  openGraph: {
    title: "Gas Line Plumbing in Henderson, NV | Red Carpet Plumbing",
    description:
      "Licensed gas line repair, installation, inspection, and appliance hookup for Henderson homes and businesses. Serving Green Valley, Green Valley Ranch, Anthem, and all Henderson communities. NV License #0048585A.",
    url: "https://redcarpetplumbing.com/henderson/gas-line-plumbing/",
    siteName: "Red Carpet Plumbing",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

type LinkSeg = string | { href: string; text: string };

const HERO_TRUST_ITEMS = [
  // FLAG: VERIFY license #0048585A before publishing.
  "NV Licensed Gas Line Plumbers, #0048585A",
  "Serving Henderson and the Las Vegas Valley",
  "Residential and Commercial Gas Line Service",
  // FLAG: VERIFY transparent pricing claim before publishing.
  "Transparent Pricing, No Hidden Fees",
];

// Section 2 safety callout (rendered as a distinct bordered alert panel).
const SAFETY_CALLOUT = {
  heading: "If You Smell Gas in Your Henderson Home",
  steps: [
    "Do not turn any electrical switches on or off. Do not use a phone inside the building.",
    "Leave the building immediately. Leave the door open as you exit.",
    // FLAG: VERIFY Southwest Gas number 1-800-935-4748 before publishing.
    "Move away from the building and call Southwest Gas at 1-800-935-4748 from a safe location.",
    "Do not re-enter the building until Southwest Gas has cleared the area.",
    // FLAG: VERIFY telephone before publishing.
    "Once the area is declared safe, call Red Carpet Plumbing at (702) 567-9172 to inspect and repair the gas line.",
  ],
  note: "Southwest Gas is responsible for the gas supply line up to your meter. Red Carpet Plumbing handles licensed gas line repair and installation from the meter into your home or business.",
};

// Section 3 red trust band (distinct from hero trustItems).
const GAS_TRUST_STRIP = [
  "Licensed Gas Line Plumbers, NV #0048585A",
  "Serving Henderson, Green Valley, and the Las Vegas Valley",
  // FLAG: VERIFY "Emergency Gas Line Response Available" claim before publishing.
  "Emergency Gas Line Response Available",
  // FLAG: VERIFY "Upfront Pricing" claim before publishing.
  "Upfront Pricing, No Hidden Fees",
];

// ---------------------------------------------------------------------------
// Section 4 — Henderson gas line context (H3 article cards).
// ---------------------------------------------------------------------------
const HENDERSON_GAS_CONTEXT = [
  {
    title: "Aging Gas Lines in Original Green Valley Homes",
    body: "Homes built in Green Valley from roughly 1985 through the early 1990s now have gas supply systems that are 30 to 40 years old. Many of these homes were built with black iron gas pipe with threaded fittings sealed with pipe dope compound. Over decades of extreme heat cycles in unconditioned attic and crawl space areas, that sealant dries out and fitting connections can loosen. Black iron pipe in older Green Valley homes that has never been inspected is approaching the age where a professional assessment is practical maintenance rather than a reactive response to a problem.",
  },
  {
    title: "Extreme Heat and CSST Gas Line Connectors",
    body: "Henderson summers regularly exceed 110 degrees Fahrenheit, and temperatures inside attics and enclosed mechanical spaces climb significantly higher. Many Henderson homes built from the mid-1990s onward use CSST (corrugated stainless steel tubing) for gas line distribution inside the home. CSST is flexible and installer-friendly, but the connectors and fittings at junctions are particularly vulnerable to heat stress in unconditioned spaces. Annual inspection of exposed CSST connections is a reasonable precaution in the Las Vegas Valley's extreme climate.",
  },
  {
    title: "Outdoor Gas Lines and Henderson HOA Communities",
    body: "Outdoor kitchens, built-in gas grills, fire pits, and pool heaters are common additions in Henderson's master-planned communities, including Green Valley, Green Valley Ranch, Anthem, Inspirada, and MacDonald Ranch. These additions require permitted gas line extensions installed by a licensed contractor. Henderson City permits are required for new gas line work, and the installation must pass inspection before the appliance can be connected. Red Carpet Plumbing handles the full process including route planning, installation, permit coordination, and final pressure testing.",
  },
];

// ---------------------------------------------------------------------------
// Section 5 — gas line services (H3 article cards). Leak, appliance hookup, and
// emergency cards carry inline links per the approved copy.
// ---------------------------------------------------------------------------
const HENDERSON_GAS_SERVICES: {
  title: string;
  body: string;
  tail?: LinkSeg[];
}[] = [
  {
    title: "Gas Line Leak Detection and Repair",
    body: "Gas line leaks are a safety emergency. Red Carpet Plumbing uses professional pressure testing and detection equipment to locate gas line leaks accurately. If you smell gas, follow the Southwest Gas emergency protocol first. Once the area is cleared, our licensed plumbers inspect, locate, and repair the leak with a final pressure test before gas is restored.",
    tail: [
      " See our ",
      { href: "/gas-line-plumbing/", text: "gas line plumbing" },
      " page for full service details.",
    ],
  },
  {
    title: "Gas Line Inspection",
    body: "Annual gas line inspections are recommended for Henderson homes, particularly those in original Green Valley neighborhoods with aging black iron pipe. We inspect supply lines, connections, fittings, appliance hookups, and exposed CSST for signs of corrosion, loose connections, heat stress, and pressure irregularities. An inspection identifies issues before they become safety emergencies.",
  },
  {
    title: "Gas Line Installation",
    body: "New gas line installation for Henderson homes and businesses, including new construction, additions, and property improvements. All new gas line work in Henderson requires a City of Henderson permit. Red Carpet Plumbing coordinates permit application, installation, and final inspection as part of the job.",
  },
  {
    title: "Gas Appliance Hookup and Connection",
    body: "Licensed connection of gas appliances including stoves, dryers, gas water heaters, furnaces, and outdoor grills and fire pits. Appliance connections must be made by a licensed contractor and tested before use. Red Carpet Plumbing handles appliance hookups throughout Henderson with a final pressure test on every connection.",
    tail: [
      " For gas water heater service, see our ",
      {
        href: "/water-heater-repair-installation/",
        text: "water heater repair and installation",
      },
      " page.",
    ],
  },
  {
    title: "Outdoor Gas Line Extensions",
    body: "Permitted outdoor gas line extensions for Henderson homes adding built-in grills, fire pits, outdoor kitchens, pool heaters, and patio heaters. These extensions run from your existing gas supply to the outdoor appliance location and require a Henderson City permit. Red Carpet Plumbing handles route planning, trenching, installation, permit coordination, and pressure testing for outdoor gas line projects throughout Henderson.",
  },
  {
    // FLAG: VERIFY emergency availability before publishing — source-site claim.
    title: "Emergency Gas Line Service",
    body: "Once Southwest Gas has cleared the area following a gas event, Red Carpet Plumbing provides emergency gas line inspection and repair throughout Henderson. Call (702) 567-9172 for emergency response.",
    tail: [
      " For plumbing emergencies more broadly, see our ",
      {
        href: "/henderson/emergency-plumbing/",
        text: "Henderson emergency plumbing",
      },
      " page.",
    ],
  },
];

// ---------------------------------------------------------------------------
// Section 6 — warning signs (plain list + note).
// ---------------------------------------------------------------------------
const HENDERSON_GAS_WARNING_SIGNS = [
  "Smell of rotten eggs or sulfur near a gas appliance, meter, or along a buried line path",
  "Hissing or whistling sound near a gas appliance, connection, or meter",
  "Dead or dying vegetation in a strip or patch above a buried gas line with no other explanation",
  "Gas appliances producing a yellow, flickering, or unusually small flame",
  "Unexplained increase in your gas bill without a change in usage",
  "Corrosion, rust, or visible damage on gas pipe fittings or connections",
];

const WARNING_SIGNS_NOTE =
  "A rotten egg smell is the most urgent warning sign. Do not investigate. Follow the Southwest Gas emergency protocol above.";

// ---------------------------------------------------------------------------
// Section 7 — process (HowTo schema source of truth). Visible numbered steps and
// the HowTo JSON-LD both derive from this array.
// ---------------------------------------------------------------------------
const HENDERSON_GAS_STEPS = [
  {
    name: "Call and describe the situation",
    // FLAG: VERIFY telephone and Southwest Gas number before publishing.
    body: "Call Red Carpet Plumbing at (702) 567-9172. If you smell gas or suspect an active leak, leave the property, call Southwest Gas at 1-800-935-4748 first, and call us once the area is declared safe. For non-emergency service including installation, hookup, or inspection, describe what you need and we will schedule a licensed plumber.",
  },
  {
    name: "Licensed inspection and diagnosis",
    body: "A licensed plumber arrives to inspect your gas supply lines, connections, fittings, and appliance hookups. We use pressure testing and professional detection equipment to locate the source of any issue or assess the scope of new installation work.",
  },
  {
    name: "Review options and approve the work",
    body: "We explain what we found, what repair or installation options are available, and what the work involves. For Henderson City permit-required work, we walk you through the permitting process. You approve the scope and cost before any work begins.",
  },
  {
    name: "Professional repair or installation with safety test and permit coordination",
    body: "Our licensed plumber completes the repair or installation and performs a final pressure test and safety check before the gas supply is restored. For permitted work, we coordinate the Henderson City inspection. You receive confirmation that all connections meet code requirements before we leave the job.",
  },
];

// FLAG: VERIFY before publishing — license #0048585A and transparent pricing are
// source-site claims.
const WHY_CHOOSE_ITEMS = [
  "Licensed for gas line work in Nevada. Red Carpet Plumbing holds NV Contractor License #0048585A, C-1 Plumbing and Heating, which authorizes gas line repair and installation throughout Henderson.",
  "Henderson-specific knowledge. We understand the gas line conditions specific to original Green Valley homes, Henderson's extreme summer heat, CSST connector vulnerabilities, and the outdoor living addition requirements common in Henderson HOA communities.",
  "Safety-first process. We follow the correct safety protocol for gas line work, including Southwest Gas emergency coordination and final pressure testing on every job.",
  "Henderson City permits handled. Gas line work requiring a City of Henderson permit is coordinated with permit application and final inspection included.",
  "Transparent pricing. We explain the scope and cost of the work before it begins.",
  "Residential and commercial service. We provide gas line services for Henderson homeowners, businesses, and commercial properties throughout the city.",
];

const COMMUNITIES_INTRO =
  "Red Carpet Plumbing provides gas line services throughout Henderson, including established neighborhoods, newer master-planned communities, and resort-area properties.";

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
const HENDERSON_GAS_FAQS = [
  {
    question: "What are the signs of a gas line problem in my Henderson home?",
    answer:
      "The most common sign of a gas line problem is a rotten egg or sulfur smell, which is the odorant added to natural gas so leaks can be detected. You may also hear a hissing or whistling sound near a gas appliance, meter, or line, notice dead or dying vegetation above a buried gas line, see a yellow or flickering flame on a gas appliance, or see an unexplained increase in your gas bill. If you smell gas, leave the building immediately and call Southwest Gas at 1-800-935-4748 from outside before calling a plumber.",
  },
  {
    question:
      "Should I call a plumber or Southwest Gas for a gas line problem in Henderson?",
    answer:
      "If you smell gas or suspect an active leak, call Southwest Gas at 1-800-935-4748 from outside your home first. Southwest Gas is responsible for the line up to your meter. Once the area is declared safe, call Red Carpet Plumbing at (702) 567-9172 to inspect, locate, and repair the gas line from the meter into your home or business. For non-emergency gas line work such as appliance hookups, inspections, or permitted extensions, call Red Carpet Plumbing directly.",
  },
  {
    question: "Does Red Carpet Plumbing handle gas line permits in Henderson?",
    answer:
      "Yes. New gas line installations and most gas line repairs in Henderson require a City of Henderson permit. Red Carpet Plumbing handles permit application and inspection coordination as part of the job. Henderson City permits are separate from Clark County unincorporated permits, and all gas line work must be performed by a Nevada-licensed contractor.",
  },
  {
    question:
      "Can a plumber install a gas line for an outdoor kitchen or fire pit in Henderson?",
    answer:
      "Yes. Red Carpet Plumbing installs permitted gas line extensions for outdoor kitchens, built-in grills, fire pits, pool heaters, and patio heaters throughout Henderson. Outdoor gas line work requires a City of Henderson permit. We handle route planning, trenching, installation, permit coordination, and final pressure testing. Outdoor gas line extensions are a common request in Henderson's master-planned communities, including Green Valley, Green Valley Ranch, Anthem, Inspirada, and MacDonald Ranch.",
  },
  {
    question:
      "Why do gas lines need to be inspected in older Henderson homes?",
    answer:
      "Homes built in original Green Valley neighborhoods from roughly 1985 through the early 1990s now have gas supply systems that are 30 to 40 years old. Many were built with black iron pipe and threaded fittings that can loosen and dry out over decades of extreme heat cycles. Homes built with CSST gas line connectors have fittings that can be stressed by Las Vegas Valley attic heat. Annual gas line inspections help identify corroded fittings, loose connections, and aging pipe materials before they become safety concerns.",
  },
  {
    question:
      "Where does Red Carpet Plumbing provide gas line services in Henderson?",
    answer:
      "Red Carpet Plumbing provides gas line repair, installation, inspection, and appliance hookup throughout Henderson, NV, including Green Valley, Green Valley Ranch, Seven Hills, MacDonald Ranch, Anthem, Tuscany Village, Inspirada, Whitney Ranch, Lake Las Vegas, and Downtown Henderson. Contact us to confirm coverage for your specific location.",
  },
];

// ---------------------------------------------------------------------------
// JSON-LD payloads. areaServed City (Henderson) -> State (Nevada). No
// AggregateRating, no sameAs, no hasCredential.
// ---------------------------------------------------------------------------
const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Gas Line Plumbing in Henderson, NV | Red Carpet Plumbing",
  url: "https://redcarpetplumbing.com/henderson/gas-line-plumbing/",
  description:
    "Red Carpet Plumbing provides licensed gas line repair, installation, and inspection in Henderson, NV. Serving Green Valley, Green Valley Ranch, Anthem, and all Henderson communities. NV License #0048585A.",
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
      name: "Gas Line Plumbing in Henderson, NV",
      item: "https://redcarpetplumbing.com/henderson/gas-line-plumbing/",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Gas Line Plumbing in Henderson, NV",
  serviceType: "Gas Line Plumbing",
  description:
    "Red Carpet Plumbing provides licensed gas line repair, installation, inspection, and appliance hookup for homes and businesses throughout Henderson, NV. Nevada Contractor License #0048585A, C-1 Plumbing and Heating.",
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

// HowTo schema included because Section 7 renders the matching visible numbered
// process steps. Derived from HENDERSON_GAS_STEPS for a guaranteed text match.
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Red Carpet Plumbing Handles Gas Line Work in Henderson",
  step: HENDERSON_GAS_STEPS.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.name,
    text: s.body,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: HENDERSON_GAS_FAQS.map((faq) => ({
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

export default function HendersonGasLinePage() {
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
            { label: "Gas Line Plumbing in Henderson, NV" },
          ]}
        />

        {/* SECTION 1: HERO */}
        <HeroSection
          headingLevel="h1"
          headline="Gas Line Plumbing in Henderson, NV"
          subheading="Red Carpet Plumbing provides licensed gas line repair, installation, inspection, and appliance hookup for homes and businesses throughout Henderson, NV. From gas line leak detection and emergency repair to new appliance connections and permitted outdoor gas line extensions, our licensed plumbers handle gas line work safely and correctly. Call us or request service online."
          trustItems={HERO_TRUST_ITEMS}
          primaryCTA={{
            label: "Call (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{
            label: "Request Gas Line Service",
            href: "/contact/",
          }}
          ctaNote="Licensed plumbers. Gas line work done safely and to code."
          formSlot={<QuoteFormPlaceholder title="Get Gas Line Help" />}
          backgroundImage={{
            src: "/images/services/gas-line-plumbing/hero.webp",
            alt: "Licensed gas line plumbing service in Henderson, NV",
          }}
        />

        {/* SECTION 2: SAFETY CALLOUT — distinct bordered alert panel, not a CTA */}
        <section
          aria-label="Gas safety instructions"
          className="bg-white"
        >
          <div className="mx-auto max-w-4xl px-4 pt-12 sm:px-6 sm:pt-16 lg:px-10">
            <div className="rounded-2xl border-2 border-brand-primary bg-brand-surface-alt p-6 sm:p-8">
              <h2 className="text-2xl font-bold tracking-tight text-brand-dark sm:text-3xl">
                {SAFETY_CALLOUT.heading}
              </h2>
              <p className="mt-4 text-base font-medium leading-7 text-brand-dark/80">
                If you smell gas or suspect a gas line leak, take these steps
                immediately:
              </p>
              <ol className="mt-6 space-y-4">
                {SAFETY_CALLOUT.steps.map((step, index) => (
                  <li key={step} className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="inline-flex h-7 w-7 flex-none items-center justify-center rounded-full bg-brand-primary text-sm font-semibold text-white"
                    >
                      {index + 1}
                    </span>
                    <span className="text-base leading-7 text-brand-dark/85">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
              <p className="mt-6 text-base leading-7 text-brand-dark/80">
                {SAFETY_CALLOUT.note}
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: TRUST STRIP */}
        <TrustStrip
          items={GAS_TRUST_STRIP}
          ariaLabel="Why Henderson customers choose Red Carpet Plumbing for gas line plumbing"
        />

        {/* SECTION 4: HENDERSON GAS LINE CONTEXT */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Gas Line Risks in Henderson Homes and Businesses
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Henderson homes and businesses face gas line risks shaped by the
                age of construction in established neighborhoods, extreme summer
                heat, outdoor living additions common in HOA communities, and the
                same caliche soil conditions that affect all buried utilities in
                the Las Vegas Valley.
              </p>
            </div>
            <div className="mt-10 space-y-6">
              {HENDERSON_GAS_CONTEXT.map((c) => (
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

        {/* SECTION 5: SERVICES OFFERED */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Gas Line Services for Henderson Homes and Businesses
              </h2>
            </div>
            <div className="mt-10 space-y-6">
              {HENDERSON_GAS_SERVICES.map((s) => (
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

        {/* SECTION 6: WARNING SIGNS */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Signs of a Gas Line Problem in Your Henderson Home
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                If you notice any of the following, take them seriously:
              </p>
            </div>
            <div className="mt-8 rounded-2xl border-l-4 border-brand-primary bg-brand-surface-alt p-6 sm:p-8">
              <ul className="space-y-3">
                {HENDERSON_GAS_WARNING_SIGNS.map((sign) => (
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
            <p className="mt-6 text-base font-medium leading-7 text-brand-dark/80">
              {WARNING_SIGNS_NOTE}
            </p>
          </div>
        </section>

        {/* SECTION 7: PROCESS (HowTo) */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    How Red Carpet Plumbing Handles Gas Line Work in Henderson
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Gas line work is safety-critical and must be performed by a
                    licensed contractor. Here is how we approach gas line service
                    for Henderson homes and businesses.
                  </p>
                </div>
              </SectionRevealItem>
              <SectionRevealItem className="mt-12">
                <ol className="space-y-8">
                  {HENDERSON_GAS_STEPS.map((step, index) => (
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

        {/* SECTION 8: MID-PAGE CTA */}
        <section className="bg-brand-charcoal text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Need a Licensed Gas Line Plumber in Henderson?
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/80">
                  Red Carpet Plumbing provides licensed gas line repair,
                  installation, and inspection throughout Henderson, NV. If you
                  smell gas, follow the Southwest Gas emergency protocol first. For
                  all other gas line service, call us or request service online.
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
                  Request Gas Line Service
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 9: WHY CHOOSE RED CARPET PLUMBING */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Why Henderson Homeowners Choose Red Carpet Plumbing for Gas Line
                Work
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

        {/* SECTION 10: HENDERSON COMMUNITIES */}
        <section className="bg-brand-charcoal text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="max-w-3xl text-left">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Henderson Communities We Serve for Gas Line Services
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

        {/* SECTION 11: FAQ */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Frequently Asked Questions About Gas Line Plumbing in Henderson, NV
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {HENDERSON_GAS_FAQS.map((faq) => (
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

        {/* SECTION 12: FINAL CTA */}
        {/* FLAG: VERIFY — license number in the body is a source-site claim. */}
        <CTASection
          background="red"
          headline={<>Ready to Schedule Gas Line Service<br />in Henderson?</>}
          body="Red Carpet Plumbing is available for licensed gas line repair, installation, inspection, and appliance hookup throughout Henderson and the Las Vegas Valley. NV License #0048585A, C-1 Plumbing and Heating."
          primaryCTA={{
            label: "Call (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{
            label: "Request Gas Line Service",
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
