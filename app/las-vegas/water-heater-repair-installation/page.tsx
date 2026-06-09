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

// FLAG: VERIFY before publishing — license #0048585A, emergency/24-7
// availability, transparent-pricing, and any rating/40-year claims are
// source-site/project claims. This page uses the conservative wording from the
// approved brief and does NOT assert rating, review count, or "40 years" here.
// The Las Vegas hard-water figure (17 to 24 grains/gallon), Clark County code
// seismic-bracing and thermal-expansion-tank requirements carry forward from the
// verified core water heater page.

export const metadata: Metadata = {
  // FLAG: description below is the approved brief string (~270 chars). It
  // exceeds the site's ≤160 meta-description standard; see report. Kept as
  // approved pending a trim decision.
  title:
    "Water Heater Repair and Installation in Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing repairs and installs water heaters throughout Las Vegas, NV. Tank and tankless water heaters, hard water sediment flushing, anode rod replacement, and Clark County code installations. Licensed plumbers. Call (702) 567-9172.",
  alternates: {
    canonical:
      "https://redcarpetplumbing.com/las-vegas/water-heater-repair-installation/",
  },
  openGraph: {
    title:
      "Water Heater Repair and Installation in Las Vegas, NV | Red Carpet Plumbing",
    description:
      "Water heater repair and installation in Las Vegas from licensed local plumbers. Hard water experts. Tank, tankless, flush, and full replacement. Call Red Carpet Plumbing.",
    url: "https://redcarpetplumbing.com/las-vegas/water-heater-repair-installation/",
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
const LV_WATER_HEATER_FAQS = [
  {
    question: "How long does a water heater last in Las Vegas?",
    answer:
      "In Las Vegas, tank water heaters typically last 8 to 12 years, often shorter than the national average due to the valley's extremely hard water. Hard water causes sediment buildup and accelerates anode rod depletion, both of which shorten tank life. Tankless water heaters generally last 15 to 20 years but require annual descaling to remove hard water mineral deposits from the heat exchanger.",
  },
  {
    question: "Why does my water heater make popping or rumbling noises?",
    answer:
      "Popping and rumbling sounds are caused by sediment buildup on the bottom of the tank. In Las Vegas, the high mineral content in the water causes sediment to accumulate faster than in most other cities. Water trapped under sediment layers boils during the heating cycle and creates these sounds. Annual flushing removes sediment before it hardens into scale.",
  },
  {
    question: "Should I repair or replace my Las Vegas water heater?",
    answer:
      "For water heaters under 8 years old with repairable components, repair is usually the right choice. For units 10 years or older, units with visible tank corrosion, or units leaking from the tank body itself, replacement typically makes more financial sense than continued repairs. Red Carpet Plumbing provides an honest assessment of both options before recommending a course of action.",
  },
  {
    question: "Is a tankless water heater worth it in Las Vegas?",
    answer:
      "Tankless water heaters offer longer service life, no standby heat loss, and continuous hot water on demand. In Las Vegas, they require annual descaling to remove hard water mineral deposits from the heat exchanger. For homes with high hot water demand or older tank units nearing end of life, a tankless water heater is often a sound long-term investment.",
  },
  {
    question: "How often should I flush my water heater in Las Vegas?",
    answer:
      "Annual flushing is recommended for Las Vegas homes. Las Vegas water hardness of 17 to 24 grains per gallon causes sediment to accumulate and harden into scale faster than in softer-water cities. Annual flushing removes deposits before they reduce efficiency or damage the tank.",
  },
  {
    question:
      "What is a thermal expansion tank and do I need one in Las Vegas?",
    answer:
      "A thermal expansion tank absorbs the pressure that builds up when heated water expands inside a closed-loop plumbing system. Most Las Vegas homes operate on a closed-loop system due to backflow preventers at the street meter. Clark County plumbing code and most manufacturer warranties require a thermal expansion tank on closed-loop water heater installations. If your water heater was installed without one, Red Carpet Plumbing can add it.",
  },
];

// Why Las Vegas water heaters fail faster (bold label + description). All four
// Las Vegas-specific anchors (hard water 17-24 gpg, anode rod, closed-loop /
// expansion tank, seismic bracing) plus aging units. The build brief used " -- "
// separators; rendered with the label and a period per the project
// no-double-hyphen copy rule. Apostrophes are safe in these string literals.
const LV_WH_CAUSES: {
  label: string;
  body: string;
  link?: { href: string; text: string };
}[] = [
  {
    label: "Hard water mineral buildup",
    body: "Las Vegas municipal water averages 17 to 24 grains of hardness per gallon, making it among the hardest water in the United States. Calcium and magnesium deposits accumulate inside water heater tanks and on heat exchanger surfaces much faster than in softer-water cities. This sediment reduces heating efficiency, causes the popping and rumbling noises common in Las Vegas water heaters, and shortens tank lifespan. Annual flushing is strongly recommended for Las Vegas homes.",
  },
  {
    label: "Accelerated anode rod depletion",
    body: "The anode rod inside every tank water heater is a sacrificial component that corrodes in place of the steel tank, protecting it from internal rust. Las Vegas hard water depletes anode rods significantly faster than the three to five year national average. A depleted anode rod in a Las Vegas home can lead to rapid internal tank corrosion within one to two years. Annual inspections that check anode rod condition are strongly recommended.",
  },
  {
    label: "Closed-loop pressure system stress",
    body: "Most Las Vegas homes operate on a closed-loop plumbing system due to backflow preventers at the street meter. When the water heater heats water, the expanding water volume has nowhere to go, causing pressure spikes that stress the tank lining and connections. A thermal expansion tank absorbs these pressure spikes. Clark County code and most manufacturer warranties require a thermal expansion tank on closed-loop installations.",
  },
  {
    label: "Seismic bracing requirements",
    body: "Nevada is one of the most seismically active states in the country. Clark County plumbing code requires all water heater installations to include seismic bracing with two heavy-gauge steel straps secured at specific heights to prevent the unit from tipping during a seismic event. Red Carpet Plumbing installs all water heaters to current Clark County code.",
  },
  {
    label: "Aging units in older Las Vegas neighborhoods",
    body: "Homes in established Las Vegas neighborhoods including the Desert Inn and West Sahara corridors, Desert Shores, Sunrise Manor, Whitney, and Winchester that were built from the 1970s through the 1990s often have original or early-replacement water heaters that have been operating under Las Vegas hard water conditions for 15 or more years. These units are strong replacement candidates, and homes on original pipe may also be candidates for",
    link: { href: "/re-piping/", text: "re-piping" },
  },
];

const LV_WH_SIGNS = [
  "No hot water or insufficient hot water",
  "Popping, rumbling, or banging noises during heating cycles",
  "Rust-colored or cloudy hot water",
  "A leak at pipe connections or the pressure relief valve",
  "A pilot light that keeps going out (gas units)",
  "A breaker that keeps tripping (electric units)",
  "Hot water that runs out faster than it used to",
];

// FLAG: VERIFY gas line scope on the gas/electric service item.
const LV_WH_SERVICES = [
  {
    label: "Water heater repair",
    body: "We diagnose and repair all water heater problems including failed heating elements, faulty thermostats, pilot light issues, pressure relief valve failures, and sediment buildup. We assess the unit's age and condition before recommending repair to confirm the repair makes sense given the remaining service life.",
  },
  {
    label: "Water heater replacement",
    body: "When repair is no longer cost-effective or the unit has reached end of service life, we replace it with a new water heater matched to your household's hot water demand, installed to current Clark County code.",
  },
  {
    label: "Tankless water heater installation",
    body: "Tankless water heaters heat water on demand, eliminate standby heat loss, and can last 15 to 20 years with proper maintenance. In Las Vegas, they require annual descaling to remove hard water mineral deposits from the heat exchanger. We install and service tankless units for residential and commercial properties.",
  },
  {
    label: "Water heater flush and maintenance",
    body: "Annual flushing removes calcium and magnesium sediment before it hardens into scale and reduces efficiency. Las Vegas hard water makes annual flushing more important here than in most other cities.",
  },
  {
    label: "Anode rod replacement",
    body: "We inspect and replace anode rods as part of water heater maintenance to protect the tank from internal corrosion and extend service life.",
  },
  {
    label: "Thermal expansion tank installation",
    body: "We install thermal expansion tanks on closed-loop systems to absorb pressure spikes, protect the water heater, and meet Clark County code and manufacturer warranty requirements.",
  },
  {
    label: "Gas and electric water heater service",
    body: "We service both gas and electric water heaters including tank and tankless models. All gas line work is performed under NV License #0048585A.",
  },
];

const WH_STEPS = [
  {
    name: "Diagnose the problem",
    body: "We inspect the unit, check sediment buildup, anode rod condition, pressure relief valve, and any visible damage or corrosion to get a complete picture before making recommendations.",
  },
  {
    name: "Assess repair versus replacement",
    body: "For units under 8 years old with repairable components, repair is usually the right choice. For units 10 years or older, or units with tank corrosion, replacement typically makes more long-term financial sense. We give you a clear, honest assessment of both options.",
  },
  {
    name: "Present your options",
    body: "We explain what we found, what the repair or installation involves, and what the job will cost before any work begins.",
  },
  {
    name: "Complete the work to Clark County code",
    body: "All water heater work is completed to current Clark County code including seismic bracing, thermal expansion tank on closed-loop systems, and proper venting on gas units. We test the unit before we leave.",
  },
];

// FLAG: VERIFY — license number and transparent-pricing items are source-site
// claims per the approved brief.
const WHY_CHOOSE = [
  "Local Las Vegas plumbing company with extensive experience servicing water heaters under Las Vegas hard water conditions",
  "Licensed plumbers (NV License #0048585A)",
  "All installations completed to Clark County plumbing code including seismic bracing",
  "Transparent pricing with no hidden fees",
  "Honest repair vs. replacement assessments",
  "Residential and commercial water heater service throughout Las Vegas",
];

const WH_TRUST_STRIP = [
  "NV Licensed, #0048585A",
  "Installed to Clark County Code",
  "Tank and Tankless Service",
  "Transparent Pricing, No Hidden Fees",
];

const LV_NEIGHBORHOODS = [
  "Desert Inn / West Sahara",
  "Desert Shores",
  "Sunrise Manor",
  "Whitney",
  "Winchester",
  "Southwest Las Vegas",
  "Downtown Las Vegas",
];

// Related services. /las-vegas/emergency-plumbing/ (Page 1) and
// /las-vegas/drain-cleaning/ (Page 4) are live. TODO-BATCH-5: replace the
// core-route links with the location-specific /las-vegas/[service]/ children
// once built (leak-detection-repair, slab-leak-detection-repair, re-piping).
const RELATED_SERVICES = [
  { label: "Emergency Plumbing in Las Vegas", href: "/las-vegas/emergency-plumbing/" },
  { label: "Drain Cleaning in Las Vegas", href: "/las-vegas/drain-cleaning/" },
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
  name: "Water Heater Repair and Installation in Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing repairs and installs water heaters throughout Las Vegas, NV. Tank and tankless water heaters, hard water sediment flushing, anode rod replacement, and Clark County code installations. Licensed plumbers.",
  url: "https://redcarpetplumbing.com/las-vegas/water-heater-repair-installation/",
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
      name: "Water Heater Repair and Installation in Las Vegas",
      item: "https://redcarpetplumbing.com/las-vegas/water-heater-repair-installation/",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Water Heater Repair and Installation in Las Vegas",
  serviceType: "Water Heater Repair and Installation",
  description:
    "Red Carpet Plumbing repairs and installs water heaters for homes and businesses in Las Vegas, NV, including tank water heater repair and replacement, tankless water heater installation, flush and maintenance, anode rod replacement, and thermal expansion tank installation.",
  provider: {
    "@type": "Plumber",
    name: "Red Carpet Plumbing",
    url: "https://redcarpetplumbing.com",
    // FLAG: VERIFY telephone (carried forward from existing pages).
    telephone: "+17025679172",
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

// HowTo schema is included because Section 7 renders the matching visible
// step-by-step process (titles + body) on the page.
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Red Carpet Plumbing Handles a Water Heater Call in Las Vegas",
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
  mainEntity: LV_WATER_HEATER_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function LasVegasWaterHeaterPage() {
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
              label: "Las Vegas Plumbing Services",
              href: "/las-vegas-plumbing-services/",
            },
            { label: "Water Heater Repair and Installation in Las Vegas" },
          ]}
        />

        {/* SECTION 1: HERO */}
        {/* TODO: dedicated higher-resolution hero asset. hero.webp is the
            low-res 350x350 Batch 3 asset; using the larger card.webp here. */}
        <HeroSection
          headingLevel="h1"
          headline="Water Heater Repair and Installation in Las Vegas, NV"
          subheading="Red Carpet Plumbing repairs and installs water heaters for homes and businesses throughout Las Vegas, NV. Las Vegas hard water averages 17 to 24 grains per gallon, causing faster sediment buildup, accelerated anode rod depletion, and shorter water heater lifespans than most cities. Whether you need a repair, a replacement, a tankless installation, or annual maintenance, our licensed plumbers handle all water heater work to current Clark County plumbing code. Call (702) 567-9172 to schedule service."
          trustItems={[
            "NV Licensed Plumbers, #0048585A",
            "Emergency Water Heater Service Available",
            "Serving Las Vegas and the Las Vegas Valley",
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
            alt: "Water heater repair and installation service in Las Vegas, NV",
          }}
        />

        {/* SECTION 2: TRUST STRIP */}
        <section
          aria-label="Why Las Vegas customers choose Red Carpet Plumbing for water heater service"
          className="bg-brand-primary text-white"
        >
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-10 xl:px-12">
            <ul className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
              {WH_TRUST_STRIP.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <svg
                    aria-hidden="true"
                    className="h-4 w-4 flex-shrink-0 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm font-semibold">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 3: DIRECT ANSWER */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="rounded-2xl border-l-4 border-brand-primary bg-brand-surface-alt p-6 sm:p-8">
              <h2 className="text-2xl font-bold tracking-tight text-brand-dark sm:text-3xl">
                Water Heater Repair and Installation in Las Vegas
              </h2>
              <p className="mt-4 text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing diagnoses, repairs, and installs water
                heaters for Las Vegas homes and businesses. Las Vegas hard water
                is among the most demanding in the country for water heaters,
                causing sediment to accumulate faster and anode rods to deplete
                sooner than in softer-water cities. When your water heater stops
                working, makes unusual noises, produces discolored water, or
                reaches the end of its service life, our licensed plumbers can
                assess the unit, explain your options, and complete the repair or
                installation to Clark County code.
              </p>
              <p className="mt-4 text-base leading-7 text-brand-dark/70">
                This page covers water heater service specific to Las Vegas. For
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

        {/* SECTION 4: WHY LAS VEGAS WATER HEATERS FAIL FASTER */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10 lg:pb-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Why Las Vegas Water Heaters Fail Faster
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Las Vegas hard water, closed-loop pressure systems, and Clark
                    County code requirements all shape water heater service here.
                    Hard water is the leading factor.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-10">
                <ul className="space-y-5">
                  {LV_WH_CAUSES.map((c) => (
                    <li
                      key={c.label}
                      className="relative rounded-2xl bg-brand-surface-alt p-6 ring-1 ring-brand-surface-alt"
                    >
                      <p className="text-base leading-7 text-brand-dark/80">
                        <strong className="font-semibold text-brand-dark">
                          {c.label}.
                        </strong>{" "}
                        {c.body}
                        {c.link ? (
                          <>
                            {" "}
                            <Link
                              href={c.link.href}
                              className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                            >
                              {c.link.text}
                            </Link>
                            .
                          </>
                        ) : null}
                      </p>
                    </li>
                  ))}
                </ul>
              </SectionRevealItem>

              <SectionRevealItem className="mt-12">
                <div className="rounded-2xl border-l-4 border-brand-primary bg-brand-surface-alt p-6 sm:p-8">
                  <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                    Signs Your Las Vegas Water Heater Needs Service
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {LV_WH_SIGNS.map((sign) => (
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
                Water Heater Services We Provide in Las Vegas
              </h2>
            </div>
            <ul className="mt-10 space-y-5">
              {LV_WH_SERVICES.map((s) => (
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
                  No Hot Water or a Leaking Water Heater in Las Vegas?
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
                    How We Handle a Water Heater Call in Las Vegas
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
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Why Las Vegas Homeowners Choose
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

        {/* SECTION 9: NEIGHBORHOODS */}
        <section className="bg-brand-charcoal text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="max-w-3xl text-left">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Las Vegas Neighborhoods We Serve for Water Heater Service
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/85">
                Red Carpet Plumbing provides water heater repair and installation
                throughout Las Vegas, NV, including the Desert Inn and West Sahara
                corridors, Desert Shores, Sunrise Manor, Whitney, Winchester,
                Southwest Las Vegas, Downtown Las Vegas, and surrounding
                neighborhoods. We also serve the broader Las Vegas Valley
                including Henderson, North Las Vegas, Summerlin, Paradise, Spring
                Valley, and Enterprise.
              </p>
            </div>

            <ul className="mt-12 flex flex-wrap gap-3">
              {LV_NEIGHBORHOODS.map((name) => (
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
        {/* /las-vegas/[service]/ children once built (leak-detection-repair, */}
        {/* slab-leak-detection-repair, re-piping). */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
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
                Water Heater FAQs for Las Vegas Homeowners
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {LV_WATER_HEATER_FAQS.map((faq) => (
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
          headline="Water Heater Problems in Las Vegas?"
          body="Do not wait on a failing water heater. Call Red Carpet Plumbing at (702) 567-9172 or request service online. We repair and install water heaters throughout Las Vegas and the Las Vegas Valley, with all work completed to current Clark County plumbing code."
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
