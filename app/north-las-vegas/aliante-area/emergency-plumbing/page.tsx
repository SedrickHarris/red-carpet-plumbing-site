import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { HeroSection } from "@/components/HeroSection";
import { JsonLd } from "@/components/JsonLd";
import { QuoteFormPlaceholder } from "@/components/QuoteFormPlaceholder";
import { SectionReveal, SectionRevealItem } from "@/components/SectionReveal";
import { ServiceCard } from "@/components/ServiceCard";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";

// FLAG: VERIFY before publishing. Active FLAGs on this page:
//   - 24/7 emergency availability (source-site claim; confirm operational hours
//     before publishing) -- appears in hero trust strip and FAQ Q3.
//   - Gas line scope (verify before publishing) -- appears in the emergency
//     services list.
//   - Transparent pricing, no hidden fees (source-site claim).
// License #0048585A is a verified business claim.
// SCHEMA NOTE: Aliante is a master-planned community within the incorporated
// City of North Las Vegas, so Service.areaServed uses Place (Aliante, North Las
// Vegas, Nevada) -> containedInPlace City (North Las Vegas) -> containedInPlace
// State (Nevada). NOT AdministrativeArea. NOT Clark County. No sameAs on the
// service-location page. No AggregateRating schema.
// FAQPage schema derives from ALIANTE_EMERGENCY_FAQS and HowTo from
// EMERGENCY_STEPS (character-for-character with visible text).
// CONTENT NOTE: Aliante homes are copper only, built 2000-2008. No galvanized,
// polybutylene, or Kitec narrative on this page.

export const metadata: Metadata = {
  title:
    "Emergency Plumbing in the Aliante Area of North Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Need emergency plumbing in the Aliante area of North Las Vegas? Red Carpet Plumbing provides licensed emergency plumbing service for Aliante homes. Call (702) 567-9172.",
  alternates: {
    canonical:
      "https://redcarpetplumbing.com/north-las-vegas/aliante-area/emergency-plumbing/",
  },
  openGraph: {
    title: "Emergency Plumbing in the Aliante Area of North Las Vegas, NV",
    description:
      "Red Carpet Plumbing provides emergency plumbing service in Aliante, North Las Vegas. Burst pipes, slab leaks, sewer backups, water heater failures. Licensed plumbers.",
    url: "https://redcarpetplumbing.com/north-las-vegas/aliante-area/emergency-plumbing/",
    siteName: "Red Carpet Plumbing",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

// Hero trust strip (4 items).
const ALIANTE_EMERGENCY_TRUST = [
  "NV Licensed Plumbers, #0048585A",
  // FLAG: VERIFY 24/7 availability before publishing.
  "Emergency Plumbing Service Available",
  "Serving Aliante and North Las Vegas",
  // FLAG: source-site claim -- verify before final launch.
  "Transparent Pricing, No Hidden Fees",
];

// ---------------------------------------------------------------------------
// Section 2 -- what counts as a plumbing emergency (bold label + body).
// Copper-only 2000-2008 framing; no galvanized/polybutylene.
// ---------------------------------------------------------------------------
const ALIANTE_EMERGENCY_PROBLEMS = [
  {
    label: "Burst pipes",
    body: "Copper supply pipes in Aliante homes built between 2000 and 2008 are now 16 to 25 years old. Hard water mineral corrosion can thin pipe walls over time, and a sudden pressure spike or temperature change can cause a section to fail.",
  },
  {
    label: "Slab leaks",
    body: "Aliante homes are built on concrete slab foundations. A supply line leaking beneath the slab can cause warm spots on flooring, water pressure loss, and structural damage if not addressed.",
  },
  {
    label: "Sewer backups",
    body: "Sewage backing up into drains, toilets, or tubs is a health hazard and requires immediate service.",
  },
  {
    label: "Water heater failures",
    body: "Sudden loss of hot water, a leaking tank, or unusual sounds from a water heater in a hard-water area like Aliante often signal a failure requiring prompt repair or replacement.",
  },
  {
    label: "Gas line concerns",
    body: "If you smell gas or suspect a gas line issue, leave the building immediately. Gas line work requires a licensed plumber.",
  },
  {
    label: "Major drain overflows",
    body: "Severe clogs that cause toilet or drain overflows can damage flooring and create unsanitary conditions.",
  },
];

// ---------------------------------------------------------------------------
// Section 3 -- emergency services list. Gas line item carries the verify FLAG.
// ---------------------------------------------------------------------------
const ALIANTE_EMERGENCY_SERVICES = [
  "Burst pipe repair and water line repair",
  "Sewer backup clearing and sewer line service",
  "Water heater emergency repair and replacement",
  "Slab leak detection and repair in the Aliante area",
  // FLAG: VERIFY gas line scope before publishing.
  "Gas line inspection and emergency repair",
  "Emergency drain clearing",
  "Toilet overflow and clog repair",
  "Water shutoff valve repair and replacement",
];

// ---------------------------------------------------------------------------
// Section 4 -- what to do (HowTo schema source of truth). Safety-first order.
// ---------------------------------------------------------------------------
const EMERGENCY_STEPS = [
  {
    name: "Shut Off the Main Water Supply",
    body: "The main water shutoff valve in most Aliante homes is located near the front of the property in a ground-level utility box near the street, or where the main line enters the building. Turn the valve clockwise to stop water flow throughout the house.",
  },
  {
    name: "For Gas Emergencies, Leave Immediately",
    body: "If you smell gas, do not operate any light switches, appliances, or devices. Leave the building immediately, leave doors open if it is safe to do so, and call your gas utility from outside. Contact Red Carpet Plumbing after the gas utility has confirmed the area is safe.",
  },
  {
    name: "Document the Damage",
    body: "Take photos and video of visible water damage, the source of the problem, and any affected areas before cleanup begins. This documentation supports insurance claims for covered events such as burst pipes or slab leaks.",
  },
  {
    name: "Call Red Carpet Plumbing",
    body: "Call (702) 567-9172 for emergency plumbing service in the Aliante area of North Las Vegas. Our licensed plumbers will assess the situation and explain the repair options before any work begins.",
  },
];

// ---------------------------------------------------------------------------
// Section 5 -- Aliante conditions (H3 + body). Copper-only; no galvanized.
// ---------------------------------------------------------------------------
const ALIANTE_CONDITIONS = [
  {
    title: "Copper Pipe and Hard Water Corrosion",
    body: "Most homes in the Aliante area were built between 2000 and 2008 with copper supply lines. Las Vegas Valley municipal water is drawn from Lake Mead and is consistently hard at 17 to 24 grains per gallon. Over 16 to 25 years of exposure, mineral deposits and the chemical interaction between hard water and copper can cause pitting corrosion inside supply lines. Pitting corrosion works from the inside out, creating pinhole leaks that can fail suddenly or cause slow, hidden water damage inside walls and beneath the slab. Homes in their first major plumbing service cycle are at the highest risk.",
  },
  {
    title: "Slab Foundations and Caliche Soil Movement",
    body: "Aliante homes are built on concrete slab foundations over caliche-rich desert soil. Caliche layers shift seasonally as the soil dries and re-wets through desert heat and rain cycles. This movement places mechanical stress on supply lines running beneath the slab, which can crack or separate at joints over time. A supply line failure beneath the slab is a plumbing emergency that requires specialized slab leak detection and often a decision about spot repair or pipe rerouting.",
  },
  {
    title: "Water Heater Sediment Buildup",
    body: "Aliante's hard water deposits calcium and magnesium sediment on the bottom of water heater tanks over time. Sediment buildup reduces heating efficiency, shortens equipment life, and can cause cracking at the tank bottom or pressure buildup that leads to sudden failure. Water heaters in homes approaching 15 to 20 years of service in hard-water areas are at the highest risk of emergency failure.",
  },
];

// ---------------------------------------------------------------------------
// Section 7 -- Aliante sub-areas served (plain text chips).
// ---------------------------------------------------------------------------
const ALIANTE_SUBAREAS = [
  "Aliante Parkway Area",
  "Aliante Nature Discovery Park Area",
  "Ann Road Corridor",
  "Deer Springs Way Area",
  "Elkhorn Road Area",
  "Northwest North Las Vegas",
];

// ---------------------------------------------------------------------------
// Section 8 -- related services. All cards link to built Aliante-specific
// routes (P41-P44).
// ---------------------------------------------------------------------------
const ALIANTE_EMERGENCY_RELATED = [
  {
    title: "Slab Leak Detection and Repair",
    description:
      "Detection and repair of water leaks beneath concrete slab foundations in Aliante area homes.",
    // ACTIVATED: P44 built and staged
    href: "/north-las-vegas/aliante-area/slab-leak-detection-repair/",
    image: "/images/services/slab-leak-detection-repair/card.webp",
    imageAlt: "Slab leak detection and repair in the Aliante area",
  },
  {
    title: "Drain Cleaning",
    description:
      "Professional drain cleaning and clearing for Aliante area homes with slow or blocked drains.",
    // ACTIVATED: P41 built and staged
    href: "/north-las-vegas/aliante-area/drain-cleaning/",
    image: "/images/services/drain-cleaning/card.webp",
    imageAlt: "Drain cleaning service in the Aliante area",
  },
  {
    title: "Leak Detection and Repair",
    description:
      "Accurate leak detection and repair for visible and hidden leaks in Aliante area homes.",
    // ACTIVATED: P43 built and staged
    href: "/north-las-vegas/aliante-area/leak-detection-repair/",
    image: "/images/services/leak-detection-repair/card.webp",
    imageAlt: "Leak detection and repair in the Aliante area",
  },
  {
    title: "Water Heater Repair and Installation",
    description:
      "Water heater diagnosis, repair, and installation for Aliante area homes affected by hard water sediment.",
    // ACTIVATED: P42 built and staged
    href: "/north-las-vegas/aliante-area/water-heater-repair-installation/",
    image: "/images/services/water-heater-repair-installation/card.webp",
    imageAlt: "Water heater repair and installation in the Aliante area",
  },
];

// ---------------------------------------------------------------------------
// Section 9 -- FAQ (FAQPage schema source of truth).
// ---------------------------------------------------------------------------
const ALIANTE_EMERGENCY_FAQS = [
  {
    question: "What should I do if a pipe bursts in my Aliante home?",
    answer:
      "Turn off the main water supply valve immediately. In most Aliante homes, this valve is located near the front of the property in a ground-level utility box near the street. After shutting off the water, document the damage and call Red Carpet Plumbing at (702) 567-9172 for emergency plumbing service.",
  },
  {
    question:
      "Do Aliante homes have a higher risk of plumbing problems after 20 years?",
    answer:
      "Yes. Most Aliante homes were built between 2000 and 2008 with copper supply lines, placing the plumbing systems in the 16 to 25 year range. This age coincides with the first major service cycle for copper pipe in Las Vegas Valley hard water conditions. Hard water mineral exposure and caliche soil movement beneath slab foundations can cause supply line deterioration, pinhole leaks, and slab leak events over time.",
  },
  {
    // FLAG: VERIFY 24/7 availability before publishing.
    question: "Is there an emergency plumber available in the Aliante area?",
    answer:
      "Red Carpet Plumbing provides emergency plumbing service for homes in the Aliante area of North Las Vegas. Call (702) 567-9172 to reach our team and describe your situation.",
  },
  {
    question: "Can a slab leak cause a plumbing emergency?",
    answer:
      "Yes. A slab leak is a supply line failure beneath your home's concrete foundation. Active water loss beneath the slab can cause structural damage, mold growth inside walls, and significant water damage if left unaddressed. Slab leaks often require specialized detection equipment and should be treated as an urgent service need.",
  },
  {
    question:
      "What are the most common plumbing emergencies in Aliante homes?",
    answer:
      "The most common emergency plumbing calls from Aliante area homeowners involve burst or leaking copper supply lines, slab leaks beneath slab foundations, water heater failures, and sewer backups. Hard water exposure and the age of the housing stock in Aliante contribute to these issues in homes built 16 to 25 years ago.",
  },
  {
    question: "How long does emergency plumbing service take?",
    answer:
      "The time required depends on the type and severity of the problem. A burst pipe repair or shutoff valve replacement may be completed in a single visit. A slab leak may require additional time for detection, diagnosis, and a decision about repair options. Red Carpet Plumbing will explain the process and timeline before any work begins.",
  },
];

// ---------------------------------------------------------------------------
// JSON-LD payloads. areaServed uses Place (Aliante, North Las Vegas, Nevada) ->
// City (North Las Vegas) -> State (Nevada). No sameAs on the service-location
// page. Do NOT use AdministrativeArea. Do NOT use Clark County.
// ---------------------------------------------------------------------------
const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Emergency Plumbing in the Aliante Area of North Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides emergency plumbing service in the Aliante area of North Las Vegas, NV. Burst pipes, slab leaks, sewer backups, water heater failures. Licensed plumbers, NV License #0048585A.",
  url: "https://redcarpetplumbing.com/north-las-vegas/aliante-area/emergency-plumbing/",
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
      name: "North Las Vegas Plumbing Services",
      item: "https://redcarpetplumbing.com/north-las-vegas-plumbing-services/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Aliante Area Plumbing Services",
      item: "https://redcarpetplumbing.com/north-las-vegas/aliante-area-plumbing/",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Emergency Plumbing in the Aliante Area",
      item: "https://redcarpetplumbing.com/north-las-vegas/aliante-area/emergency-plumbing/",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Emergency Plumbing in the Aliante Area of North Las Vegas",
  serviceType: "Emergency Plumbing",
  description:
    "Red Carpet Plumbing provides emergency plumbing service for homes in the Aliante area of North Las Vegas, NV, including burst pipe repair, slab leak detection and repair, sewer backup clearing, water heater emergency service, gas line emergencies, and emergency drain clearing.",
  provider: {
    "@type": "Plumber",
    name: "Red Carpet Plumbing",
    url: "https://redcarpetplumbing.com",
    // FLAG: VERIFY telephone (carried forward from existing pages).
    telephone: "+17025679172",
  },
  areaServed: {
    "@type": "Place",
    name: "Aliante, North Las Vegas, Nevada",
    containedInPlace: {
      "@type": "City",
      name: "North Las Vegas",
      containedInPlace: {
        "@type": "State",
        name: "Nevada",
      },
    },
  },
};

// HowTo schema included because Section 4 renders the matching visible numbered
// process steps.
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "What to Do During a Plumbing Emergency in Your Aliante Home",
  description:
    "Steps to take during a plumbing emergency in an Aliante area home in North Las Vegas, NV.",
  step: EMERGENCY_STEPS.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.name,
    text: s.body,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: ALIANTE_EMERGENCY_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function AlianteEmergencyPlumbingPage() {
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
              label: "North Las Vegas Plumbing Services",
              href: "/north-las-vegas-plumbing-services/",
            },
            {
              label: "Aliante Area Plumbing Services",
              href: "/north-las-vegas/aliante-area-plumbing/",
            },
            { label: "Emergency Plumbing in the Aliante Area" },
          ]}
        />

        {/* SECTION 1: HERO */}
        <HeroSection
          headingLevel="h1"
          headline="Emergency Plumbing in the Aliante Area of North Las Vegas, NV"
          subheading="Red Carpet Plumbing provides emergency plumbing service for homes throughout the Aliante area of North Las Vegas, NV. Whether you are dealing with a burst pipe, slab leak, sewer backup, water heater failure, or gas line concern, our licensed plumbers are ready to help. Call (702) 567-9172 now. NV Contractor License #0048585A."
          trustItems={ALIANTE_EMERGENCY_TRUST}
          primaryCTA={{
            label: "Call (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{
            label: "Request Service",
            href: "/contact/",
          }}
          ctaNote="Licensed plumbers. Transparent pricing. No hidden fees."
          formSlot={
            <QuoteFormPlaceholder title="Get Emergency Plumbing Help" />
          }
          backgroundImage={{
            src: "/images/services/emergency-plumbing/hero.webp",
            alt: "Emergency plumbing service in the Aliante area of North Las Vegas, NV",
          }}
        />

        {/* SECTION 2: WHAT COUNTS AS A PLUMBING EMERGENCY */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                What Counts as a Plumbing Emergency?
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                A plumbing emergency is any situation where active water damage is
                occurring, sewage is entering your living space, gas is present,
                or a critical system has failed and poses an immediate safety or
                property risk. For Aliante homeowners, the following situations
                require immediate plumbing service:
              </p>
            </div>
            <ul className="mt-8 space-y-5">
              {ALIANTE_EMERGENCY_PROBLEMS.map((p) => (
                <li
                  key={p.label}
                  className="rounded-2xl bg-brand-surface-alt p-6 ring-1 ring-brand-surface-alt"
                >
                  <p className="text-base leading-7 text-brand-dark/80">
                    <strong className="font-semibold text-brand-dark">
                      {p.label}:
                    </strong>{" "}
                    {p.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 3: EMERGENCY SERVICES */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Emergency Plumbing Services in the Aliante Area
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing provides the following emergency plumbing
                services for Aliante area homeowners. For our full range of{" "}
                <Link
                  href="/emergency-plumbing/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  emergency plumbing services
                </Link>
                , see the core service page.
              </p>
            </div>
            <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {ALIANTE_EMERGENCY_SERVICES.map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <CheckMark />
                  <span className="text-base leading-7 text-brand-dark/85">
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 4: WHAT TO DO (HowTo) */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    What to Do When You Have a Plumbing Emergency in Your Aliante
                    Home
                  </h2>
                </div>
              </SectionRevealItem>
              <SectionRevealItem className="mt-12">
                <ol className="space-y-8">
                  {EMERGENCY_STEPS.map((step, index) => (
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

        {/* SECTION 5: ALIANTE CONDITIONS */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Aliante Plumbing Conditions That Can Lead to Emergencies
              </h2>
            </div>
            <div className="mt-10 space-y-10">
              {ALIANTE_CONDITIONS.map((c) => (
                <article
                  key={c.title}
                  className="relative pl-6 before:absolute before:bottom-0 before:left-0 before:top-0 before:w-1 before:rounded-full before:bg-brand-primary"
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

        {/* SECTION 6: MID-PAGE EMERGENCY CTA */}
        <section className="bg-brand-charcoal text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Need Emergency Plumbing in the Aliante Area?
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/80">
                  Red Carpet Plumbing serves the Aliante community and the
                  surrounding North Las Vegas neighborhoods. Call now and describe
                  your situation, or request service online.
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
                  Request Service
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: ALIANTE SUB-AREAS */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Aliante Sub-Areas We Serve
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing provides emergency plumbing service throughout
                the Aliante community and surrounding northwest North Las Vegas
                neighborhoods. For{" "}
                <Link
                  href="/north-las-vegas/aliante-area-plumbing/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  Aliante area plumbing services
                </Link>{" "}
                or our full{" "}
                <Link
                  href="/north-las-vegas-plumbing-services/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  North Las Vegas plumbing services
                </Link>
                , see the area hub pages. We also provide{" "}
                <Link
                  href="/north-las-vegas/emergency-plumbing/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  emergency plumbing throughout North Las Vegas
                </Link>
                .
              </p>
            </div>
            <ul className="mt-8 flex flex-wrap gap-3">
              {ALIANTE_SUBAREAS.map((area) => (
                <li
                  key={area}
                  className="rounded-full bg-brand-surface-alt px-4 py-2 text-sm font-medium text-brand-dark/80 ring-1 ring-brand-surface-alt"
                >
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 8: RELATED SERVICES */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="max-w-3xl text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Related Plumbing Services in the Aliante Area
              </h2>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {ALIANTE_EMERGENCY_RELATED.map((service) => (
                <ServiceCard
                  key={service.title}
                  title={service.title}
                  description={service.description}
                  href={service.href}
                  image={service.image}
                  imageAlt={service.imageAlt}
                  built
                />
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 9: FAQ */}
        <section className="bg-white">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Emergency Plumbing FAQ for Aliante Area Homeowners
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {ALIANTE_EMERGENCY_FAQS.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl bg-brand-surface-alt p-6 shadow-sm ring-1 ring-brand-surface-alt open:border-l-4 open:border-brand-primary open:pl-4 sm:p-8"
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

        {/* SECTION 10: FINAL CTA */}
        <CTASection
          background="red"
          headline={<>Need Emergency Plumbing<br />in the Aliante Area?</>}
          body="Red Carpet Plumbing serves the Aliante community and surrounding North Las Vegas neighborhoods. Call (702) 567-9172 or request service online."
          primaryCTA={{
            label: "Call (702) 567-9172",
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
