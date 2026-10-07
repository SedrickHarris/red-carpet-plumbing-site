// FLAG: VERIFY before publishing:
// - Telephone +17025679172: project-established value; confirm before launch.
// - License #0048585A, C-1 Plumbing and Heating: project-established value;
//   confirm before launch.
// - "Transparent pricing with no hidden fees": source-site claim; confirm
//   before launch.
// - "4.8-star rated" in the hero subheading: visible text only, matching the
//   sibling pages. Deliberately NOT expressed as rating or review schema: no
//   verified review count or source has been provided.
// - Southwest Gas number 1-800-935-4748 and the gas utility responsibility note
//   (reused from the Henderson gas page), the pressure test on every connection
//   claims, and the permit sentences (services card, FAQs, process step).
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
// Hero uses the shared Gas Line Plumbing service hero asset, also used by the core
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

export const metadata: Metadata = {
  // FLAG: VERIFY license #0048585A in the description before publishing.
  title: "Gas Line Plumbing in Summerlin, NV | Red Carpet Plumbing",
  description:
    "Gas line repair, installation, and inspection in Summerlin, NV. Appliance hookups and outdoor gas lines. NV #0048585A. Call (702) 567-9172.",
  alternates: {
    canonical: "https://redcarpetplumbing.com/summerlin/gas-line-plumbing/",
  },
  openGraph: {
    title: "Gas Line Plumbing in Summerlin, NV | Red Carpet Plumbing",
    description:
      "Gas line repair, installation, and inspection in Summerlin, NV. Appliance hookups and outdoor gas lines. NV #0048585A. Call (702) 567-9172.",
    url: "https://redcarpetplumbing.com/summerlin/gas-line-plumbing/",
    siteName: "Red Carpet Plumbing",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

type LinkSeg = string | { href: string; text: string };

// FLAG: VERIFY "4.8-star rated" before publishing. Visible text only, not in schema.
const HERO_SUBHEADING =
  "Red Carpet Plumbing provides gas line repair, installation, inspection, and appliance hookups for homes and businesses throughout Summerlin, NV. Licensed plumbers, 4.8-star rated. Call (702) 567-9172.";

const HERO_TRUST_ITEMS = [
  // FLAG: VERIFY license #0048585A before publishing.
  "NV Licensed, #0048585A",
  "Residential and Commercial Gas Line Service",
  "Serving All Summerlin Villages",
  // FLAG: VERIFY transparent pricing claim before publishing.
  "Transparent Pricing, No Hidden Fees",
];

// Safety panel shown directly after the hero. Not a CTA: plain text only.
const SAFETY_PANEL = {
  heading: "If You Smell Gas in Your Summerlin Home",
  steps: [
    "Do not turn any electrical switches on or off. Do not use a phone inside the building.",
    "Leave the building immediately. Leave the door open as you exit.",
    // FLAG: VERIFY Southwest Gas number and gas utility responsibility note before publishing.
    "Move away from the building and call Southwest Gas at 1-800-935-4748 from a safe location.",
    "Do not re-enter the building until Southwest Gas has cleared the area.",
    "Once the area is declared safe, call Red Carpet Plumbing at (702) 567-9172 to inspect and repair the gas line.",
  ],
  // FLAG: VERIFY Southwest Gas number and gas utility responsibility note before publishing.
  note: "Southwest Gas is responsible for the gas supply line up to your meter. Red Carpet Plumbing handles licensed gas line repair and installation from the meter into your home or business.",
};

// Direct answer.
const DIRECT_ANSWER = {
  heading: "Gas Line Services in Summerlin, and What to Do First",
  p1: "A gas smell, a hissing sound near a gas line, a gas appliance that burns poorly, or a gas bill that climbs without a change in use can point to a gas line problem. If you smell gas, leave the building and call Southwest Gas first. Once the area is cleared, Red Carpet Plumbing inspects, repairs, and pressure tests the gas line from the meter into your home or business.",
  // FLAG: VERIFY license #0048585A before publishing.
  // FLAG: VERIFY transparent pricing claim before publishing.
  p2: "Red Carpet Plumbing is a Nevada C-1 licensed plumbing contractor (#0048585A). We explain your options before work begins and provide transparent pricing with no hidden fees.",
  p3: "Need gas line service in Summerlin? Same-day service is available, subject to scheduling. Call (702) 567-9172 to get on the schedule.",
};

// Problems list.
const PROBLEMS_HEADING = "Warning Signs of a Gas Line Problem in Summerlin";
const PROBLEMS_INTRO = "If you notice any of the following, treat it seriously. A smell of gas means leave first, then call Southwest Gas.";
const PROBLEMS = [
  "Smell of rotten eggs or sulfur near a gas appliance, meter, or along a buried line path",
  "Hissing or whistling sound near a gas appliance, connection, or meter",
  "Dead or dying vegetation above a buried gas line with no other explanation",
  "Gas appliances producing a yellow, flickering, or unusually small flame",
  "Unexplained increase in your gas bill without a change in usage",
  "Corrosion, rust, or visible damage on gas pipe fittings or connections",
];

// Local causes (H3 article cards).
const CAUSES_HEADING = "Why Summerlin Gas Lines Need Attention";
const CAUSES_INTRO: LinkSeg[] = ["For an overview of gas line services across the Las Vegas Valley, visit our ", { href: "/gas-line-plumbing/", text: "gas line plumbing" }, " page."];
const CAUSES: { title: string; body: string; tail?: LinkSeg[] }[] = [
  {
    title: "Gas Systems in the Original Villages Are Now 25 to 35 Years Old",
    body: "Summerlin's oldest villages, including The Hills, The Trails, and The Arbors, now have homes that are 25 to 35 years old. Over that time, gas line fittings and connections can loosen or corrode, and appliance connectors can wear. The pipe and connector types depend on when and how each home was built, so an inspection is the reliable way to learn the condition of your system before a small issue becomes a safety problem.",
  },
  {
    title: "Summer Heat on Exposed Gas Lines",
    body: "Summerlin summers are hot, and attics, rooftops, and exterior walls get hotter still. Repeated heating and cooling can stress gas line connectors and fittings that run through unconditioned space or along the outside of the home. Inspecting exposed connections is a reasonable precaution for homes of any age.",
  },
  // FLAG: VERIFY permit wording (depends on address and scope) before publishing.
  {
    title: "Outdoor Kitchens, Fire Pits, and Pool Heaters",
    body: "Outdoor living is a big part of many Summerlin properties, including built-in grills, fire pits, patio heaters, and pool heaters. These additions need a gas line extension installed by a licensed contractor, and permit requirements can depend on whether your address is in the City of Las Vegas or unincorporated Clark County. Check your community's rules for exterior additions as well.",
  },
];

// Services (H3 article cards).
const SERVICES_HEADING = "Gas Line Services in Summerlin";
const SERVICES_INTRO = "Red Carpet Plumbing provides licensed gas line services for Summerlin homes and businesses.";
const SERVICES: { title: string; body: string; tail?: LinkSeg[] }[] = [
  // FLAG: VERIFY pressure testing claim before publishing.
  {
    title: "Gas Line Leak Detection and Repair",
    body: "We use pressure testing and detection equipment to locate gas line leaks accurately. If you smell gas, follow the Southwest Gas steps above first. Once the area is cleared, our licensed plumbers locate and repair the leak and pressure test the line before gas is restored.",
  },
  // FLAG: VERIFY pressure testing claim before publishing.
  {
    title: "Gas Line Inspection and Pressure Testing",
    body: "We inspect supply lines, connections, fittings, and appliance hookups for corrosion, loose connections, heat stress, and pressure irregularities. An inspection is also a smart step when you are buying an older Summerlin home.",
  },
  // FLAG: VERIFY permit wording (depends on address and scope) before publishing.
  {
    title: "Gas Line Installation",
    body: "New gas line installation for remodels, additions, and new appliances. Permit and inspection requirements, when they apply, depend on your address and the scope of the work.",
  },
  // FLAG: VERIFY pressure testing claim before publishing.
  {
    title: "Gas Appliance Hookup and Connection",
    body: "Licensed connection of stoves, dryers, gas water heaters, furnaces, and other gas appliances, with a pressure test on every connection.",
    tail: [" For gas water heater service, see our ", { href: "/summerlin/water-heater-repair-installation/", text: "Summerlin water heater repair and installation" }, " page."],
  },
  // FLAG: VERIFY pressure testing claim before publishing.
  {
    title: "Outdoor Gas Line Extensions",
    body: "Gas line extensions for outdoor grills, fire pits, patio heaters, pool heaters, and outdoor kitchens, including route planning, installation, and pressure testing.",
  },
  {
    title: "Gas Line Repair and Replacement",
    body: "Repair and replacement of damaged, corroded, or aging gas pipe, fittings, and connectors in homes and commercial properties.",
    tail: [" To find a hidden leak in water lines instead, see our ", { href: "/summerlin/leak-detection-repair/", text: "Summerlin leak detection and repair" }, " page."],
  },
];

// Repair or replace (two H3 blocks).
const DECISION_HEADING = "Inspect, Repair, or Replace? What Makes Sense for Your Summerlin Property";
const DECISION_BLOCKS: { title: string; body: string }[] = [
  {
    title: "When an inspection is enough",
    body: "An inspection is the right first step when you have no leak but your gas system is decades old, you are buying a home, or you are adding an appliance. We check connections, fittings, and pressure, and we tell you what we found.",
  },
  // FLAG: VERIFY pressure testing claim before publishing.
  {
    title: "When repair or replacement is needed",
    body: "Repair or replacement is needed when we find a leak, corroded or damaged pipe, a failed connector, or a fitting that will not hold pressure. We explain the options, you approve the scope before work begins, and the finished work is pressure tested before gas is restored.",
  },
];

// Mid-page CTA band (charcoal).
const MID_CTA = {
  headline: "Gas Line Question at Your Summerlin Property?",
  body: "Red Carpet Plumbing handles gas line inspection, repair, installation, and appliance hookups throughout Summerlin. If you smell gas, leave and call Southwest Gas first. For everything else, call now or request service online.",
};

// Process. Single source for the visible steps and the HowTo schema.
const PROCESS_HEADING = "How We Handle Gas Line Service in Summerlin";
const PROCESS_INTRO = "This is our standard process for gas line service in Summerlin.";
const PROCESS_STEPS: { name: string; body: string }[] = [
  {
    name: "If you smell gas, leave first.",
    body: "If you smell gas, leave the building and call Southwest Gas from outside before you call us. For other gas line concerns, call (702) 567-9172 and describe what you are seeing.",
  },
  // FLAG: VERIFY pressure testing claim before publishing.
  {
    name: "Inspection and testing.",
    body: "A licensed plumber inspects the gas line, connections, and appliances, and pressure tests the system to find the cause of the problem.",
  },
  {
    name: "Review options and approve.",
    body: "We explain what we found and the repair, replacement, or installation options that apply. You approve the work before anything is done.",
  },
  // FLAG: VERIFY permit wording (depends on address and scope) before publishing.
  // FLAG: VERIFY pressure testing claim before publishing.
  {
    name: "Repair or installation with final pressure test.",
    body: "We complete the approved work, pressure test it, and confirm it is safe before gas is restored. Permit and inspection requirements, when they apply, depend on your address and the scope of the work.",
  },
];

// Why choose.
const WHY_CHOOSE_HEADING = "Why Summerlin Homeowners Choose Red Carpet Plumbing";
const WHY_CHOOSE_ITEMS = [
  // FLAG: VERIFY license #0048585A before publishing.
  "Licensed Nevada plumbers, NV License #0048585A, C-1 Plumbing and Heating",
  // FLAG: VERIFY pressure testing claim before publishing.
  "Safety-first process with pressure testing on completed gas line work",
  "Familiar with Summerlin's older villages, newer builds, and outdoor living additions",
  "Clear options explained before work begins",
  // FLAG: VERIFY transparent pricing claim before publishing.
  "Transparent pricing with no hidden fees",
];

// Areas. Chips are plain text; cross-links are in the paragraph.
const AREAS_HEADING = "Gas Line Plumbing Across Summerlin";
const AREAS_INTRO = "Red Carpet Plumbing provides gas line plumbing throughout Summerlin, including Summerlin North, Summerlin South, and all Summerlin villages. Call (702) 567-9172 to confirm coverage for your address.";
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
const AREAS_CROSS_LINKS: LinkSeg[] = ["We also provide gas line plumbing in ", { href: "/henderson/gas-line-plumbing/", text: "Henderson" }, " and ", { href: "/las-vegas/gas-line-plumbing/", text: "Las Vegas" }, ". For every service we offer in your community, visit our ", { href: "/summerlin-plumbing-services/", text: "Summerlin plumbing services" }, " page."];

// FAQs. Single source for the visible accordion and the FAQPage schema.
const FAQS: { question: string; answer: string }[] = [
  // FLAG: VERIFY Southwest Gas number and gas utility responsibility note before publishing.
  {
    question: "Should I call a plumber or Southwest Gas for a gas line problem in Summerlin?",
    answer: "If you smell gas, leave the building and call Southwest Gas from a safe location first. Southwest Gas is responsible for the line up to your meter. Once the area is cleared, call Red Carpet Plumbing to inspect and repair the gas line from the meter into your home or business.",
  },
  {
    question: "How do I know if I have a gas leak?",
    answer: "Common signs are a rotten egg smell, a hissing sound near a gas line, dead vegetation above a buried line, a yellow or flickering appliance flame, and an unexplained rise in your gas bill. Never test for a leak with a flame. If you suspect a leak, leave and call Southwest Gas.",
  },
  {
    question: "Why have a gas line inspected in an older Summerlin home?",
    answer: "Gas systems in Summerlin's oldest villages are now 25 to 35 years old. Over time, fittings can loosen or corrode, and connectors in hot attics or exterior spaces can wear. An inspection finds these issues before they become a safety problem, and it is a practical step when buying a home.",
  },
  // FLAG: VERIFY permit wording (depends on address and scope) before publishing.
  {
    question: "Can a plumber install a gas line for an outdoor kitchen, fire pit, or pool heater in Summerlin?",
    answer: "Yes. Red Carpet Plumbing installs gas line extensions for outdoor grills, fire pits, patio heaters, and pool heaters. The work needs a licensed contractor, and permit requirements can depend on whether your address is in the City of Las Vegas or unincorporated Clark County.",
  },
  // FLAG: VERIFY pressure testing claim before publishing.
  {
    question: "Can you hook up a gas stove, dryer, or water heater?",
    answer: "Yes. Gas appliances should be connected by a licensed plumber and tested before use. Red Carpet Plumbing connects stoves, dryers, gas water heaters, and furnaces, and pressure tests every connection before the appliance goes into service.",
  },
  // FLAG: VERIFY permit wording (depends on address and scope) before publishing.
  {
    question: "Does gas line work in Summerlin need a permit?",
    answer: "New gas line installations and extensions often do. Summerlin spans the City of Las Vegas and unincorporated Clark County, so the permit process that applies can depend on your address. We confirm the requirements for your property before work begins.",
  },
  {
    question: "Do you offer same-day gas line service in Summerlin?",
    answer: "Same-day gas line service is available in Summerlin, subject to scheduling. Call (702) 567-9172 to check same-day availability for your address. When you call, tell us what you are seeing, such as a failing appliance or a planned installation, so we can schedule the right visit.",
  },
];

// Related services.
const RELATED_SERVICES: { label: string; href: string }[] = [
  {
    label: "Water Heater Repair and Installation in Summerlin",
    href: "/summerlin/water-heater-repair-installation/",
  },
  {
    label: "Leak Detection and Repair in Summerlin",
    href: "/summerlin/leak-detection-repair/",
  },
  {
    label: "Water Pipe Repair and Replacement in Summerlin",
    href: "/summerlin/water-pipe-repair-replacement/",
  },
  {
    label: "Gas Line Plumbing (all of the Las Vegas Valley)",
    href: "/gas-line-plumbing/",
  },
];

// Final CTA.
const FINAL_CTA = {
  headline: "Gas Line Service in Summerlin? We Can Help.",
  // FLAG: VERIFY transparent pricing claim before publishing.
  body: "Red Carpet Plumbing provides gas line inspection, repair, installation, and appliance hookups for Summerlin homes and businesses. Transparent pricing and licensed plumbers.",
};

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Gas Line Plumbing in Summerlin, NV | Red Carpet Plumbing",
  description:
    "Gas line repair, installation, and inspection in Summerlin, NV. Appliance hookups and outdoor gas lines. NV #0048585A. Call (702) 567-9172.",
  url: "https://redcarpetplumbing.com/summerlin/gas-line-plumbing/",
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
      name: "Gas Line Plumbing in Summerlin",
      item: "https://redcarpetplumbing.com/summerlin/gas-line-plumbing/",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Gas Line Plumbing",
  serviceType: "Gas Line Plumbing",
  // FLAG: VERIFY license #0048585A in the description before publishing.
  description:
    "Red Carpet Plumbing provides gas line leak detection and repair, inspection and pressure testing, installation, appliance hookups, outdoor gas line extensions, and repair and replacement for homes and businesses in Summerlin, NV. Nevada Contractor License #0048585A.",
  provider: {
    "@type": "Plumber",
    name: "Red Carpet Plumbing",
    url: "https://redcarpetplumbing.com",
    // FLAG: VERIFY telephone before publishing.
    telephone: "+17025679172",
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
  name: "How We Handle Gas Line Service in Summerlin",
  description: "The process Red Carpet Plumbing follows for gas line service in Summerlin, NV.",
  step: PROCESS_STEPS.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.name,
    text: s.body,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

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

export default function SummerlinGasLinePage() {
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
            { label: "Gas Line Plumbing in Summerlin" },
          ]} variant="dark" />}
          headingLevel="h1"
          headline={
            <>
              Gas Line Plumbing
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
          formSlot={<QuoteFormPlaceholder title="Get Gas Line Help" />}
          backgroundImage={{
            src: "/images/services/gas-line-plumbing/red-carpet-plumbing-las-vegas-gas-line-plumbing-hero.webp",
            alt: "Gas Line Plumbing in Summerlin, NV",
          }}
        />

        {/* SECTION 1B: GAS SAFETY PANEL (not a CTA, plain text only) */}
        <section aria-label="Gas safety instructions" className="bg-white">
          <div className="mx-auto max-w-4xl px-4 pt-12 sm:px-6 sm:pt-16 lg:px-10">
            <div className="rounded-2xl border-2 border-brand-primary bg-brand-surface-alt p-6 sm:p-8">
              <h2 className="text-2xl tracking-tight text-brand-dark sm:text-3xl">
                {SAFETY_PANEL.heading}
              </h2>
              <ol className="mt-6 space-y-4">
                {SAFETY_PANEL.steps.map((step, index) => (
                  <li key={step} className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="inline-flex h-7 w-7 flex-none items-center justify-center rounded-full bg-brand-dark text-sm font-semibold text-white"
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
                {SAFETY_PANEL.note}
              </p>
            </div>
          </div>
        </section>

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
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Frequently Asked Questions
                <br className="hidden sm:block" /> About Gas Line Plumbing in Summerlin, NV
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {FAQS.map((faq) => (
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
