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

// FLAG: VERIFY before publishing — license #0048585A, emergency/24-7
// availability, transparent-pricing, and any rating/40-year claims are
// source-site/project claims. This page uses the conservative wording from the
// approved brief and does NOT assert rating, review count, or "40 years" here.
// The Las Vegas Valley hard-water context and Clark County code seismic-bracing
// / thermal-expansion-tank requirements carry forward from the verified core
// water heater page.

export const metadata: Metadata = {
  // FLAG: description below is the approved brief string (~250 chars). It
  // exceeds the site's ≤160 meta-description standard; see report. Kept as
  // approved pending a trim decision.
  title:
    "Water Heater Repair and Installation in Henderson, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing repairs and installs water heaters throughout Henderson, NV, including Green Valley and Lake Las Vegas. Tank and tankless water heaters, hard water maintenance, and Clark County code installations. Licensed plumbers. Call (702) 567-9172.",
  alternates: {
    canonical:
      "https://redcarpetplumbing.com/henderson/water-heater-repair-installation/",
  },
  openGraph: {
    title:
      "Water Heater Repair and Installation in Henderson, NV | Red Carpet Plumbing",
    description:
      "Water heater repair and installation in Henderson from licensed local plumbers. Green Valley, Lake Las Vegas, and all Henderson communities. Call Red Carpet Plumbing.",
    url: "https://redcarpetplumbing.com/henderson/water-heater-repair-installation/",
    siteName: "Red Carpet Plumbing",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

// ---------------------------------------------------------------------------
// FAQ source of truth. The visible FAQ section AND the FAQPage JSON-LD schema
// both derive from this single array, guaranteeing a character-for-character
// match. Do not edit one without the other.
// ---------------------------------------------------------------------------
const HENDERSON_WH_FAQS = [
  {
    question: "How long do water heaters last in Henderson, NV?",
    answer:
      "In Henderson, tank water heaters typically last 8 to 12 years, often shorter than the national average due to the Las Vegas Valley's hard water. Hard water causes faster sediment buildup and accelerated anode rod depletion, both of which shorten tank life. Original Green Valley homes with plumbing systems 30 to 40 years old have often cycled through multiple water heaters under these conditions. Tankless water heaters generally last 15 to 20 years but require annual descaling.",
  },
  {
    question: "Do Green Valley homes have more water heater problems?",
    answer:
      "Yes. Green Valley's original neighborhoods, built from the mid-1980s through the mid-1990s, have plumbing systems that have operated under Las Vegas Valley hard water conditions for 30 to 40 years. This sustained mineral exposure has depleted anode rods faster, accumulated more sediment, and put more cumulative stress on water heater systems than in newer Henderson construction. Original Green Valley homeowners are among the most common Henderson water heater service calls.",
  },
  {
    question: "Should I repair or replace my Henderson water heater?",
    answer:
      "For water heaters under 8 years old with repairable components, repair is usually the right choice. For units 10 years or older, units with visible tank corrosion, or units leaking from the tank body, replacement typically makes more financial sense. Red Carpet Plumbing provides an honest assessment of both options before recommending a course of action.",
  },
  {
    question: "Is a tankless water heater worth it in Henderson?",
    answer:
      "Tankless water heaters offer longer service life, no standby heat loss, and continuous hot water. In Henderson, they require annual descaling to remove hard water mineral deposits from the heat exchanger. For Green Valley homes where aging tank units are a recurring issue, or for households with high hot water demand, a tankless unit is often a sound long-term investment.",
  },
  {
    question:
      "Does Red Carpet Plumbing serve Green Valley and Lake Las Vegas for water heater service?",
    answer:
      "Yes. Red Carpet Plumbing provides water heater repair and installation throughout Henderson, including Green Valley, Green Valley Ranch, and Lake Las Vegas.",
  },
  {
    question:
      "What is a thermal expansion tank and does my Henderson home need one?",
    answer:
      "A thermal expansion tank absorbs the pressure created when a water heater heats water in a closed-loop plumbing system. Most Henderson homes operate on a closed-loop system due to backflow preventers at the street meter. Clark County plumbing code and most manufacturer warranties require a thermal expansion tank on closed-loop installations. If your water heater was installed without one, Red Carpet Plumbing can add it.",
  },
];

// Why Henderson water heaters need service (bold label + description). The
// two-phase Green Valley narrative leads (original 1980s-90s + Green Valley
// Ranch). The build brief used " -- " separators; rendered with the label and a
// period per the project no-double-hyphen copy rule. Apostrophes are safe in
// these string literals.
const HENDERSON_WH_CAUSES: {
  label: string;
  body: string;
  link?: { href: string; text: string };
}[] = [
  {
    label: "Green Valley original homes and aging water heaters",
    body: "Green Valley's original neighborhoods, developed from the mid-1980s through the mid-1990s, are now 30 to 40 years old. Most water heaters in these homes have been replaced at least once, and many are on their second or third unit, all operating under the same Las Vegas Valley hard water conditions that accelerate sediment buildup, deplete anode rods faster, and reduce tank lifespan below the national average. Original Green Valley homeowners are among the most common Henderson water heater service calls.",
  },
  {
    label: "Green Valley Ranch entering the second replacement cycle",
    body: "Green Valley Ranch, developed primarily from the mid-1990s through the mid-2000s, now has homes 20 to 30 years old. Many original water heaters from this phase have reached or passed the 8 to 12 year average lifespan for Las Vegas Valley tank units and are due for replacement or experiencing early failure symptoms.",
  },
  {
    label: "Hard water sediment buildup",
    body: "Henderson receives the same Lake Mead supply as the rest of the Las Vegas Valley. High calcium and magnesium content deposits sediment inside water heater tanks, reduces heating efficiency, causes popping and rumbling noises, and shortens tank life. Annual flushing is strongly recommended for Henderson homes.",
  },
  {
    label: "Anode rod depletion under hard water",
    body: "The anode rod inside every tank water heater protects the steel tank from internal corrosion. Las Vegas Valley hard water depletes anode rods significantly faster than the three to five year national average. An undetected depleted anode rod leads to rapid internal tank corrosion and premature failure.",
  },
  {
    label: "Closed-loop pressure system and thermal expansion tank",
    body: "Most Henderson homes operate on a closed-loop plumbing system due to backflow preventers at the street meter. Heated water expansion in a closed system causes pressure spikes that stress the tank and connections. Clark County code and most manufacturer warranties require a thermal expansion tank on closed-loop installations.",
  },
  {
    label: "Clark County seismic bracing requirement",
    body: "All water heater installations in Henderson must include seismic bracing per Clark County plumbing code. Red Carpet Plumbing installs all units to current code including two heavy-gauge steel straps at code-specified heights.",
  },
];

const HENDERSON_WH_SIGNS = [
  "No hot water or insufficient hot water",
  "Popping, rumbling, or banging noises during heating cycles",
  "Rust-colored or cloudy hot water",
  "A leak at pipe connections or the pressure relief valve",
  "A pilot light that keeps going out (gas units)",
  "A breaker that keeps tripping (electric units)",
  "Hot water that runs out faster than it used to",
];

// FLAG: VERIFY gas line scope on the gas/electric service item.
const HENDERSON_WH_SERVICES = [
  {
    label: "Water heater repair",
    body: "We diagnose and repair all water heater problems including failed heating elements, faulty thermostats, pilot light issues, pressure relief valve failures, and sediment buildup. We assess the unit's age and condition before recommending repair.",
  },
  {
    label: "Water heater replacement",
    body: "When repair is no longer cost-effective or the unit has reached end of service life, we replace it with a properly sized new water heater installed to current Clark County code.",
  },
  {
    label: "Tankless water heater installation",
    body: "Tankless water heaters heat water on demand, last 15 to 20 years with proper maintenance, and eliminate standby heat loss. In Henderson, annual descaling removes hard water mineral deposits from the heat exchanger. We install and service tankless units for residential and commercial properties.",
  },
  {
    label: "Water heater flush and maintenance",
    body: "Annual flushing removes calcium and magnesium sediment from Henderson water heater tanks before it hardens into scale and reduces efficiency.",
  },
  {
    label: "Anode rod replacement",
    body: "We inspect and replace anode rods as part of water heater maintenance to protect the tank and extend service life under Henderson hard water conditions.",
  },
  {
    label: "Thermal expansion tank installation",
    body: "We install thermal expansion tanks on closed-loop systems to absorb pressure spikes and meet Clark County code and manufacturer warranty requirements.",
  },
  {
    label: "Gas and electric water heater service",
    body: "We service both gas and electric water heaters including tank and tankless models. All gas line work performed under NV License #0048585A.",
  },
];

const WH_STEPS = [
  {
    name: "Diagnose the problem",
    body: "We inspect the unit, check sediment buildup, anode rod condition, pressure relief valve, and visible corrosion or damage before making any recommendations.",
  },
  {
    name: "Assess repair versus replacement",
    body: "For units under 8 years old with repairable components, repair is usually the right choice. For units 10 years or older, or units with tank corrosion, replacement typically makes more financial sense. We give you a clear, honest assessment of both options.",
  },
  {
    name: "Present your options",
    body: "We explain what we found, what the work involves, and what it will cost before any work begins.",
  },
  {
    name: "Complete the work to Clark County code",
    body: "All water heater work is completed to current Clark County code including seismic bracing, thermal expansion tank on closed-loop systems, and proper venting on gas units. We test the unit before we leave.",
  },
];

// FLAG: VERIFY — license number and transparent-pricing items are source-site
// claims per the approved brief.
const WHY_CHOOSE = [
  "Local Las Vegas Valley plumbing company with extensive experience servicing water heaters under Henderson hard water conditions",
  "Familiar with Green Valley original home plumbing systems and aging water heater profiles",
  "Licensed plumbers (NV License #0048585A)",
  "All installations completed to Clark County code including seismic bracing",
  "Transparent pricing with no hidden fees",
  "Residential and commercial water heater service throughout Henderson",
];

const WH_TRUST_STRIP = [
  "NV Licensed, #0048585A",
  "Installed to Clark County Code",
  "Tank and Tankless Service",
  "Transparent Pricing, No Hidden Fees",
];

const HENDERSON_COMMUNITIES = [
  "Green Valley",
  "Green Valley Ranch",
  "Lake Las Vegas",
  "Seven Hills",
  "MacDonald Ranch",
  "Anthem",
  "Tuscany Village",
  "Inspirada",
  "Whitney Ranch",
];

// Related services. /henderson/emergency-plumbing/ (Page 2) and
// /henderson/drain-cleaning/ (Page 5) are live. TODO-BATCH-5: replace the
// core-route links with the location-specific /henderson/[service]/ children
// once built (leak-detection-repair, slab-leak-detection-repair, re-piping).
const RELATED_SERVICES = [
  {
    label: "Emergency Plumbing in Henderson",
    href: "/henderson/emergency-plumbing/",
  },
  { label: "Drain Cleaning in Henderson", href: "/henderson/drain-cleaning/" },
  { label: "Leak Detection and Repair", href: "/leak-detection-repair/" },
  { label: "Slab Leak Detection and Repair", href: "/slab-leak-detection-repair/" },
  { label: "Re-Piping", href: "/re-piping/" },
];

// ---------------------------------------------------------------------------
// JSON-LD payloads
// ---------------------------------------------------------------------------
const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Water Heater Repair and Installation in Henderson, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing repairs and installs water heaters throughout Henderson, NV, including Green Valley and Lake Las Vegas. Tank and tankless water heaters, hard water maintenance, and Clark County code installations. Licensed plumbers.",
  url: "https://redcarpetplumbing.com/henderson/water-heater-repair-installation/",
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
      name: "Henderson Plumbing Services",
      item: "https://redcarpetplumbing.com/henderson-plumbing-services/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Water Heater Repair and Installation in Henderson",
      item: "https://redcarpetplumbing.com/henderson/water-heater-repair-installation/",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Water Heater Repair and Installation in Henderson",
  serviceType: "Water Heater Repair and Installation",
  description:
    "Red Carpet Plumbing repairs and installs water heaters for homes and businesses in Henderson, NV, including tank water heater repair and replacement, tankless water heater installation, flush and maintenance, anode rod replacement, and thermal expansion tank installation.",
  provider: {
    "@type": "Plumber",
    name: "Red Carpet Plumbing",
    url: "https://redcarpetplumbing.com",
    // FLAG: VERIFY telephone (carried forward from existing pages).
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

// HowTo schema is included because Section 7 renders the matching visible
// step-by-step process (titles + body) on the page.
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Red Carpet Plumbing Handles a Water Heater Call in Henderson NV",
  step: WH_STEPS.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.name,
    text: s.body,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: HENDERSON_WH_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function HendersonWaterHeaterPage() {
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
            { label: "Water Heater Repair and Installation in Henderson" },
          ]}
        />

        {/* SECTION 1: HERO */}
        {/* TODO: dedicated higher-resolution hero asset. hero.webp is the
            low-res 350x350 Batch 3 asset; using the larger card.webp here. */}
        <HeroSection
          headingLevel="h1"
          headline="Water Heater Repair and Installation in Henderson, NV"
          subheading="Red Carpet Plumbing repairs and installs water heaters for homes and businesses throughout Henderson, NV, including Green Valley, Green Valley Ranch, and Lake Las Vegas. Henderson hard water causes faster sediment buildup and anode rod depletion, and original Green Valley homes with 30 to 40 years of hard water exposure face above-average water heater failure rates. Our licensed plumbers handle all water heater work to current Clark County plumbing code. Call (702) 567-9172 to schedule service."
          trustItems={[
            "NV Licensed Plumbers, #0048585A",
            "Emergency Water Heater Service Available",
            "Serving Henderson and the Las Vegas Valley",
            "Transparent Pricing, No Hidden Fees",
          ]}
          primaryCTA={{
            label: "Call (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{
            label: "Request Service",
            href: "/contact/",
          }}
          ctaNote="Licensed plumbers. Transparent pricing. No hidden fees."
          formSlot={<QuoteFormPlaceholder title="Get Water Heater Help" />}
          backgroundImage={{
            src: "/images/services/water-heater-repair-installation/card.webp",
            alt: "Water heater repair and installation in Henderson, NV",
          }}
        />

        {/* SECTION 2: TRUST STRIP */}
        <TrustStrip
          items={WH_TRUST_STRIP}
          ariaLabel="Why Henderson customers choose Red Carpet Plumbing for water heater service"
        />

        {/* SECTION 3: DIRECT ANSWER */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="rounded-2xl border-l-4 border-brand-primary bg-brand-surface-alt p-6 sm:p-8">
              <h2 className="text-2xl font-bold tracking-tight text-brand-dark sm:text-3xl">
                Water Heater Repair and Installation in Henderson
              </h2>
              <p className="mt-4 text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing diagnoses, repairs, and installs water
                heaters for Henderson homes and businesses. Henderson receives
                the same hard water supply as the rest of the Las Vegas Valley,
                and its high mineral content causes sediment to accumulate faster
                and anode rods to deplete sooner than in softer-water cities. The
                original Green Valley neighborhoods compound this with decades of
                accumulated hard water damage on supply systems and water heaters. When your water heater stops
                working, makes unusual noises, produces discolored water, or
                reaches end of service life, our licensed plumbers can assess the
                unit and complete the repair or installation to Clark County code.
              </p>
              <p className="mt-4 text-base leading-7 text-brand-dark/70">
                This page covers water heater service specific to Henderson. For
                a broader overview, see our{" "}
                <Link
                  href="/water-heater-repair-installation/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  water heater repair and installation
                </Link>{" "}
                page.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4: WHY HENDERSON WATER HEATERS NEED SERVICE */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10 lg:pb-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Why Henderson Water Heaters Need Service
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Henderson water heater service is shaped by hard water, Clark
                    County code, and the age of the community. Original Green
                    Valley homes lead the list, with Green Valley Ranch close
                    behind.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-10">
                <ul className="space-y-5">
                  {HENDERSON_WH_CAUSES.map((c) => (
                    <li
                      key={c.label}
                      className="relative rounded-2xl bg-brand-surface-alt p-6 ring-1 ring-brand-surface-alt"
                    >
                      <p className="text-base leading-7 text-brand-dark/80">
                        <strong className="font-semibold text-brand-dark">
                          {c.label}.
                        </strong>{" "}
                        {c.body}
                      </p>
                    </li>
                  ))}
                </ul>
              </SectionRevealItem>

              <SectionRevealItem className="mt-12">
                <div className="rounded-2xl border-l-4 border-brand-primary bg-brand-surface-alt p-6 sm:p-8">
                  <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                    Signs Your Henderson Water Heater Needs Service
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {HENDERSON_WH_SIGNS.map((sign) => (
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
              </SectionRevealItem>
            </SectionReveal>
          </div>
        </section>

        {/* SECTION 5: WATER HEATER SERVICES */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Water Heater Services We Provide in Henderson
              </h2>
            </div>
            <ul className="mt-10 space-y-5">
              {HENDERSON_WH_SERVICES.map((s) => (
                <li
                  key={s.label}
                  className="rounded-2xl bg-white p-6 ring-1 ring-brand-surface-alt"
                >
                  <p className="text-base leading-7 text-brand-dark/80">
                    <strong className="font-semibold text-brand-dark">
                      {s.label}.
                    </strong>{" "}
                    {s.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 6 (mid-page): CTA */}
        <section className="bg-brand-primary text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  No Hot Water or a Leaking Water Heater in Henderson?
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/90">
                  A failing or leaking water heater can cause damage fast. Call
                  Red Carpet Plumbing and a licensed plumber will assess the unit
                  and explain your repair or replacement options.
                </p>
              </div>
              <div className="flex flex-col items-start gap-4 lg:items-end">
                <a
                  href="tel:+17025679172"
                  className="inline-flex min-h-14 items-center justify-center rounded-lg bg-white px-8 text-lg font-semibold text-brand-primary shadow-sm hover:bg-brand-surface-alt focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-safe:transition-colors motion-safe:active:scale-[0.97]"
                >
                  Call (702) 567-9172
                </a>
                <Link
                  href="/contact/"
                  className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/60 px-6 py-3 text-base font-semibold text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-safe:transition-colors motion-safe:active:scale-[0.97]"
                >
                  Request Water Heater Service
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: HOW WE HANDLE A WATER HEATER CALL (HowTo) */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    How We Handle a Water Heater Call in Henderson
                  </h2>
                </div>
              </SectionRevealItem>
              <SectionRevealItem className="mt-12">
                <ol className="space-y-8">
                  {WH_STEPS.map((step, index) => (
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

        {/* SECTION 8: WHY CHOOSE */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Why Henderson Homeowners Choose
                <br className="hidden sm:block" /> Red Carpet Plumbing for Water
                Heater Service
              </h2>
            </div>
            <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {WHY_CHOOSE.map((item) => (
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
                Henderson Communities We Serve for Water Heater Service
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/85">
                Red Carpet Plumbing provides water heater repair and installation
                throughout Henderson, NV, including Green Valley, Green Valley
                Ranch, Lake Las Vegas, Seven Hills, MacDonald Ranch, Anthem,
                Tuscany Village, Inspirada, Whitney Ranch, and surrounding
                Henderson neighborhoods.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/green-valley-plumbing-services/"
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-brand-charcoal shadow-sm transition-colors hover:bg-brand-surface-alt focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-safe:transition-transform motion-safe:active:scale-[0.97]"
              >
                Green Valley Plumbing Services
              </Link>
              <Link
                href="/lake-las-vegas-plumbing-services/"
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-brand-charcoal shadow-sm transition-colors hover:bg-brand-surface-alt focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-safe:transition-transform motion-safe:active:scale-[0.97]"
              >
                Lake Las Vegas Plumbing Services
              </Link>
            </div>

            <ul className="mt-8 flex flex-wrap gap-3">
              {HENDERSON_COMMUNITIES.map((name) => (
                <li key={name}>
                  <span className="block rounded-lg border border-white/10 bg-white/5 px-5 py-3 font-medium text-white/85">
                    {name}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-10 text-left">
              <Link
                href="/service-areas/"
                className="inline-flex items-center text-base font-semibold text-white hover:text-white/80"
              >
                Las Vegas Valley service areas
                <span aria-hidden="true" className="ml-1">
                  &rarr;
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 10: RELATED SERVICES */}
        {/* TODO-BATCH-5: replace core-route links with location-specific */}
        {/* /henderson/[service]/ children once built (leak-detection-repair, */}
        {/* slab-leak-detection-repair, re-piping). */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Related Plumbing Services
              </h2>
            </div>
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {RELATED_SERVICES.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="flex items-center gap-2 rounded-lg bg-brand-surface-alt px-4 py-3 text-base font-medium text-brand-dark ring-1 ring-brand-surface-alt transition hover:text-brand-primary hover:shadow-md"
                  >
                    <span aria-hidden="true" className="text-brand-primary">
                      &rarr;
                    </span>
                    {s.label}
                  </Link>
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
                Water Heater FAQs for Henderson Homeowners
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {HENDERSON_WH_FAQS.map((faq) => (
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
        <CTASection
          background="red"
          headline={<>Water Heater Problems<br />in Henderson?</>}
          body="Do not wait on a failing water heater. Call Red Carpet Plumbing at (702) 567-9172 or request service online. We repair and install water heaters throughout Henderson, including Green Valley, Green Valley Ranch, Lake Las Vegas, and surrounding communities, with all work completed to current Clark County plumbing code."
          primaryCTA={{
            label: "Call (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{
            label: "Request Water Heater Service",
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
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12.5l4.5 4.5L19 7.5" />
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
