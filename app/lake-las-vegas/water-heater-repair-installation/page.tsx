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

// FLAG: VERIFY before publishing. "Emergency water heater service available"
// and "transparent pricing, no hidden fees" are source-site claims shown on
// this page. License #0048585A is a verified business claim. Gas line scope
// (FLAG: verify gas line scope before publishing) is carried forward from
// sibling water heater pages.
// SCHEMA NOTE: Lake Las Vegas is a master-planned community within the
// incorporated City of Henderson, so Service.areaServed uses the Green Valley
// pattern: Place (Lake Las Vegas, Nevada) -> containedInPlace City (Henderson)
// -> containedInPlace State (Nevada). NOT AdministrativeArea. NOT Clark County.
// Permit jurisdiction is the City of Henderson; code jurisdiction is Clark
// County (seismic bracing, thermal expansion tank). No AggregateRating schema.
// FAQPage schema derives from LLV_WH_FAQS and HowTo from LLV_WH_STEPS
// (character-for-character with visible text). Lake Las Vegas is never
// described as a city or as unincorporated.
// Hero image uses card.webp (hero.webp is the low-res Batch-3 asset), per the
// established Green Valley and Henderson water heater page precedent.

export const metadata: Metadata = {
  title:
    "Water Heater Repair and Installation in Lake Las Vegas, Henderson, NV | Red Carpet Plumbing",
  // FLAG: approved brief description (~210 chars) exceeds the site's ≤160
  // meta-description standard; kept as approved pending a trim decision.
  description:
    "Water heater repair and installation in Lake Las Vegas, Henderson, NV. Red Carpet Plumbing services tank and tankless water heaters for Lake Las Vegas resort residential homes. Clark County code. Call (702) 567-9172.",
  alternates: {
    canonical:
      "https://redcarpetplumbing.com/lake-las-vegas/water-heater-repair-installation/",
  },
  openGraph: {
    title:
      "Water Heater Repair and Installation in Lake Las Vegas, Henderson, NV | Red Carpet Plumbing",
    description:
      "Licensed water heater repair and installation for Lake Las Vegas homes. Hard water sediment flushing, anode rod replacement, thermal expansion tanks, seismic bracing. Clark County code-compliant. Call (702) 567-9172.",
    url: "https://redcarpetplumbing.com/lake-las-vegas/water-heater-repair-installation/",
    siteName: "Red Carpet Plumbing",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

// Hero trust strip. FLAG comments retained per established sibling pattern.
const LLV_WH_TRUST = [
  "Nevada Contractor License #0048585A, C-1 Plumbing and Heating",
  // FLAG: source-site claim -- verify before final launch.
  "Emergency water heater service available",
  // FLAG: source-site claim -- verify before final launch.
  "Transparent pricing, no hidden fees",
  "Serving Lake Las Vegas and Henderson, NV",
];

// ---------------------------------------------------------------------------
// Cause factors (bold label + body). Aging 2000-2010 build era leads. Code
// jurisdiction is Clark County; permits are issued by the City of Henderson.
// ---------------------------------------------------------------------------
const LLV_WH_CAUSES = [
  {
    label: "Aging units from the 2000-2010 build era",
    body: "Lake Las Vegas homes were primarily built between 2000 and 2010. Original water heaters installed at construction are now 15 to 25 years old, well past the 8 to 12 year service life typical in the Las Vegas Valley. Homes in this age range are either past their first replacement or approaching it, and many are now on their second unit. If your water heater is showing signs of wear, age alone is a strong indicator that replacement deserves serious consideration.",
  },
  {
    label: "Hard water sediment buildup",
    body: "Lake Las Vegas is served by the Lake Mead water supply, which measures 17 to 24 grains per gallon. That level of mineral hardness causes calcium and magnesium to deposit inside water heater tanks as sediment over time. Sediment accumulation reduces heating efficiency, causes the popping and rumbling sounds many homeowners report during heating cycles, and shortens overall tank life. Annual flushing removes sediment before it hardens into scale.",
  },
  {
    label: "Accelerated anode rod depletion",
    body: "Every tank water heater contains an anode rod that protects the steel tank from internal corrosion by corroding in its place. Las Vegas Valley hard water depletes anode rods significantly faster than the three to five year national average. An undetected depleted anode rod leaves the steel tank exposed to rapid internal corrosion. Annual inspections that include anode rod checks are strongly recommended for Lake Las Vegas homeowners.",
  },
  {
    label: "Closed-loop system and Clark County code requirements",
    body: "Most Lake Las Vegas homes operate on a closed-loop plumbing system because of backflow preventers at the street meter. When the water heater heats water, the expanding volume has nowhere to go in a closed system, causing repeated pressure spikes that stress the tank and its connections. Clark County plumbing code and most manufacturer warranties require a thermal expansion tank on closed-loop installations. Clark County code also requires seismic bracing on all new water heater installations. Permits for Lake Las Vegas water heater work are issued by the City of Henderson.",
  },
];

// Signs you need service -- visible <ul>.
const LLV_WH_SIGNS = [
  "No hot water or insufficient hot water",
  "Popping, rumbling, or banging noises during heating cycles",
  "Rust-colored or cloudy hot water",
  "A leak at pipe connections or the pressure relief valve",
  "A pilot light that keeps going out (gas units)",
  "A breaker that keeps tripping (electric units)",
  "Hot water that runs out faster than it used to",
  "A water heater that is 10 or more years old",
];

// ---------------------------------------------------------------------------
// Water heater services (bold label + body). Gas/electric item carries the
// verify FLAG as a source-only code comment.
// ---------------------------------------------------------------------------
const LLV_WH_SERVICES = [
  {
    label: "Water heater repair",
    body: "We diagnose and repair all water heater problems including failed heating elements, faulty thermostats, pilot light issues, pressure relief valve failures, and sediment buildup. We assess the unit's age and condition before recommending repair.",
  },
  {
    label: "Water heater replacement",
    body: "When repair is no longer cost-effective or the unit has reached end of service life, we replace it with a properly sized new water heater installed to current Clark County code. For Lake Las Vegas homes with original 2000-2010 units, replacement is typically the right choice.",
  },
  {
    label: "Tankless water heater installation",
    body: "Tankless water heaters heat water on demand, last 15 to 20 years with proper maintenance, and eliminate standby heat loss. In Lake Las Vegas, as throughout the Las Vegas Valley, annual descaling removes hard water mineral deposits from the heat exchanger and maintains efficiency. We install and service tankless units for residential properties throughout Lake Las Vegas.",
  },
  {
    label: "Water heater flush and maintenance",
    body: "Annual flushing removes calcium and magnesium sediment from Lake Las Vegas water heater tanks before it hardens into scale and reduces efficiency. We recommend annual maintenance for all tank water heaters in the Las Vegas Valley.",
  },
  {
    label: "Anode rod replacement",
    body: "We inspect and replace anode rods as part of water heater maintenance to protect the tank from internal corrosion and extend service life under Lake Las Vegas hard water conditions.",
  },
  {
    label: "Thermal expansion tank installation",
    body: "We install thermal expansion tanks on closed-loop systems to absorb pressure spikes and meet Clark County plumbing code and manufacturer warranty requirements.",
  },
  {
    label: "Gas and electric water heater service",
    // FLAG: verify gas line scope before publishing.
    body: "We service both gas and electric water heaters including tank and tankless models. All gas line work is performed under Nevada Contractor License #0048585A, C-1 Plumbing and Heating.",
  },
];

// ---------------------------------------------------------------------------
// Process steps -- HowTo schema source of truth.
// ---------------------------------------------------------------------------
const LLV_WH_STEPS = [
  {
    name: "Diagnose the problem",
    body: "We inspect the unit, check sediment buildup, anode rod condition, pressure relief valve function, and visible corrosion or damage before making any recommendations.",
  },
  {
    name: "Assess repair versus replacement",
    body: "For units under 8 years old with repairable components, repair is usually the right choice. For units 10 years or older, or units with tank corrosion, replacement typically makes more financial sense. We give you a clear, honest assessment of both options before any work begins.",
  },
  {
    name: "Present your options",
    body: "We explain what we found, what the repair or replacement involves, and what it will cost. We do not start work without your approval. If a replacement is needed, we discuss the right size and type for your household's demand.",
  },
  {
    name: "Complete the work to Clark County code",
    body: "All water heater work is completed to current Clark County plumbing code including seismic bracing on new installations, thermal expansion tank installation on closed-loop systems, and proper venting on gas units. We test the unit before we leave to confirm it is operating correctly. If a permit is required for the work performed, we handle permit filing with the City of Henderson.",
  },
];

// ---------------------------------------------------------------------------
// FAQ -- FAQPage schema source of truth.
// ---------------------------------------------------------------------------
const LLV_WH_FAQS = [
  {
    question: "How long does a water heater last in Lake Las Vegas?",
    answer:
      "In the Las Vegas Valley, most tank water heaters last 8 to 12 years due to hard water from the Lake Mead supply, which measures 17 to 24 grains per gallon. Lake Las Vegas homes were primarily built between 2000 and 2010, which means original water heaters in those homes are now 15 to 25 years old and well past their expected service life. If your unit is in that age range and showing problems, replacement is usually the right choice.",
  },
  {
    question:
      "Why does hard water shorten water heater life in Lake Las Vegas?",
    answer:
      "Lake Las Vegas is served by Lake Mead, which delivers water measuring 17 to 24 grains per gallon. That level of hardness causes calcium and magnesium to deposit inside the water heater tank as sediment, reducing heating efficiency and causing the popping and rumbling sounds many homeowners report. Hard water also depletes the anode rod inside the tank much faster than the three to five year national average. A depleted anode rod leaves the steel tank unprotected from internal corrosion, accelerating failure.",
  },
  {
    question:
      "What is a thermal expansion tank and do I need one in Lake Las Vegas?",
    answer:
      "Most Lake Las Vegas homes operate on a closed-loop plumbing system because of backflow preventers installed at the street meter. When a water heater heats water, the expanded volume has nowhere to go in a closed system, which creates pressure spikes that stress the tank and its connections over time. Clark County plumbing code and most manufacturer warranties require a thermal expansion tank on closed-loop water heater installations. If your water heater was installed without one, Red Carpet Plumbing can add it during a service call.",
  },
  {
    question:
      "Is a tankless water heater a good choice for a Lake Las Vegas home?",
    answer:
      "Tankless water heaters work well in Lake Las Vegas homes, but they require annual descaling to remove mineral deposits from the heat exchanger caused by the area's hard water. A properly maintained tankless unit typically lasts 15 to 20 years, which is significantly longer than a tank unit under Las Vegas Valley hard water conditions. Whether tank or tankless is the better choice depends on your household's hot water demand, available space, and budget.",
  },
  {
    question: "Who handles water heater permits in Lake Las Vegas?",
    answer:
      "Water heater installation permits in Lake Las Vegas are issued by the City of Henderson, which is the governing jurisdiction for the Lake Las Vegas community. All installations must meet Clark County plumbing code requirements, including seismic bracing and thermal expansion tank installation on closed-loop systems. Red Carpet Plumbing holds Nevada Contractor License #0048585A and handles all applicable permit and inspection requirements.",
  },
  {
    question:
      "Does Red Carpet Plumbing serve Lake Las Vegas for water heater repair?",
    answer:
      "Yes. Red Carpet Plumbing provides water heater repair, replacement, and installation for homes throughout Lake Las Vegas as part of its Henderson, NV service area. Call (702) 567-9172 to schedule service.",
  },
];

// ---------------------------------------------------------------------------
// Related-services rerouting cards. All link to built Lake Las Vegas routes
// (emergency, slab leak detection, drain cleaning) — fully activated.
// ---------------------------------------------------------------------------
const LLV_WH_REROUTING = [
  {
    title: "Emergency Plumbing",
    body: "If your water heater failure is causing active flooding or you need immediate service, emergency plumbing support is available for Lake Las Vegas and Henderson homes.",
    // ACTIVATED: /lake-las-vegas/emergency-plumbing/ built (P36)
    linkHref: "/lake-las-vegas/emergency-plumbing/",
    linkText: "Lake Las Vegas emergency plumbing",
  },
  {
    title: "Slab Leak Detection and Repair",
    body: "Water heater supply line failures and aging copper pipes can sometimes be connected to broader under-slab pipe issues. Red Carpet Plumbing provides slab leak detection for Lake Las Vegas homes.",
    // ACTIVATED: /lake-las-vegas/slab-leak-detection-repair/ built (P39)
    linkHref: "/lake-las-vegas/slab-leak-detection-repair/",
    linkText: "Slab leak detection and repair",
  },
  {
    title: "Drain Cleaning",
    body: "Hard water affects drains and water heaters alike. If you are dealing with slow drains in your Lake Las Vegas home alongside water heater issues, Red Carpet Plumbing handles both.",
    // ACTIVATED: /lake-las-vegas/drain-cleaning/ built (P35)
    linkHref: "/lake-las-vegas/drain-cleaning/",
    linkText: "Lake Las Vegas drain cleaning",
  },
];

// ---------------------------------------------------------------------------
// JSON-LD payloads. areaServed uses Place (Lake Las Vegas) -> City (Henderson)
// -> State (Nevada). Do NOT use City for Lake Las Vegas directly. Do NOT use
// AdministrativeArea. Do NOT use Clark County.
// ---------------------------------------------------------------------------
const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Water Heater Repair and Installation in Lake Las Vegas, Henderson, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides water heater repair and installation for homes in Lake Las Vegas, Henderson, NV. Tank and tankless water heaters, hard water maintenance, and Clark County code-compliant installations. Licensed plumbers.",
  url: "https://redcarpetplumbing.com/lake-las-vegas/water-heater-repair-installation/",
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
      name: "Lake Las Vegas Plumbing Services",
      item: "https://redcarpetplumbing.com/lake-las-vegas-plumbing-services/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Water Heater Repair and Installation in Lake Las Vegas",
      item: "https://redcarpetplumbing.com/lake-las-vegas/water-heater-repair-installation/",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Water Heater Repair and Installation in Lake Las Vegas, Henderson, NV",
  serviceType: "Water Heater Repair and Installation",
  description:
    "Red Carpet Plumbing provides water heater repair and installation for homes in Lake Las Vegas, Henderson, NV. Tank water heater repair and replacement, tankless water heater installation, sediment flush and maintenance, anode rod replacement, and thermal expansion tank installation. Nevada Contractor License #0048585A, C-1 Plumbing and Heating.",
  provider: {
    "@type": "Plumber",
    name: "Red Carpet Plumbing",
    url: "https://redcarpetplumbing.com",
    // FLAG: VERIFY telephone (carried forward from existing pages).
    telephone: "+17025679172",
  },
  areaServed: {
    "@type": "Place",
    name: "Lake Las Vegas, Nevada",
    containedInPlace: {
      "@type": "City",
      name: "Henderson",
      containedInPlace: {
        "@type": "State",
        name: "Nevada",
      },
    },
  },
};

// HowTo schema included because Section 6 renders the matching visible numbered
// process steps.
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Red Carpet Plumbing Handles a Water Heater Call in Lake Las Vegas",
  description:
    "The water heater service process used by Red Carpet Plumbing for Lake Las Vegas, Henderson, NV homes.",
  step: LLV_WH_STEPS.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.name,
    text: s.body,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: LLV_WH_FAQS.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.answer,
    },
  })),
};

export default function LakeLasVegasWaterHeaterPage() {
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
              label: "Lake Las Vegas Plumbing Services",
              href: "/lake-las-vegas-plumbing-services/",
            },
            {
              label: "Water Heater Repair and Installation in Lake Las Vegas",
            },
          ]}
        />

        {/* SECTION 1: HERO */}
        <HeroSection
          headingLevel="h1"
          headline="Water Heater Repair and Installation in Lake Las Vegas, Henderson, NV"
          subheading="Red Carpet Plumbing repairs and installs water heaters for homes throughout Lake Las Vegas and Henderson, NV. Lake Las Vegas homes built between 2000 and 2010 are now in their first or second water heater replacement cycle, and hard water from Lake Mead accelerates sediment buildup and anode rod depletion. Our licensed plumbers handle all water heater work to current Clark County plumbing code. Call (702) 567-9172 to schedule service."
          trustItems={LLV_WH_TRUST}
          primaryCTA={{
            label: "Call (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{
            label: "Schedule Water Heater Service",
            href: "/contact/",
          }}
          ctaNote="Licensed plumbers. Clark County code installations."
          formSlot={<QuoteFormPlaceholder title="Get Water Heater Help" />}
          backgroundImage={{
            src: "/images/services/water-heater-repair-installation/card.webp",
            alt: "water heater repair and installation in Lake Las Vegas, Henderson, NV",
          }}
        />

        {/* SECTION 2: AEO DIRECT ANSWER */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                How Long Do Water Heaters Last in Lake Las Vegas?
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                In the Las Vegas Valley, most tank water heaters last 8 to 12
                years because of the area&apos;s hard water supply. Lake Las Vegas
                homes were built primarily between 2000 and 2010, which means
                original water heaters in those homes are now 15 to 25 years old
                and have typically exceeded their expected service life. Homes in
                this era are at or past their first replacement cycle, and many
                are on their second unit. For{" "}
                <Link
                  href="/water-heater-repair-installation/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  water heater repair and installation
                </Link>{" "}
                throughout Lake Las Vegas and Henderson, call Red Carpet Plumbing
                at (702) 567-9172 or request service online.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: CAUSE FACTORS */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Why Water Heaters Fail Faster in Lake Las Vegas
                  </h2>
                </div>
              </SectionRevealItem>
              <SectionRevealItem className="mt-10">
                <ul className="space-y-5">
                  {LLV_WH_CAUSES.map((c) => (
                    <li
                      key={c.label}
                      className="rounded-2xl bg-white p-6 ring-1 ring-brand-surface-alt"
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
            </SectionReveal>
          </div>
        </section>

        {/* SECTION 4: SIGNS YOU NEED SERVICE */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Signs Your Lake Las Vegas Water Heater Needs Repair or Replacement
              </h2>
            </div>
            <div className="mt-8 rounded-2xl border-l-4 border-brand-primary bg-brand-surface-alt p-6 sm:p-8">
              <ul className="space-y-3">
                {LLV_WH_SIGNS.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-2 inline-block h-2 w-2 flex-none rounded-full bg-brand-primary"
                    />
                    <span className="text-base leading-7 text-brand-dark/80">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 5: SERVICES OFFERED */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Water Heater Services for Lake Las Vegas and Henderson Homes
              </h2>
            </div>
            <ul className="mt-10 space-y-5">
              {LLV_WH_SERVICES.map((s) => (
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

        {/* SECTION 6: PROCESS STEPS (HowTo) */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    How Red Carpet Plumbing Handles a Water Heater Call in Lake
                    Las Vegas
                  </h2>
                </div>
              </SectionRevealItem>
              <SectionRevealItem className="mt-12">
                <ol className="space-y-8">
                  {LLV_WH_STEPS.map((step, index) => (
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

        {/* SECTION 7: SERVICE AREA NOTE */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Serving Lake Las Vegas as Part of Henderson, NV
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Lake Las Vegas is a master-planned resort community within the
                incorporated City of Henderson, Nevada. Water heater installation
                permits for Lake Las Vegas properties are issued by the City of
                Henderson. All water heater work must meet Clark County plumbing
                code requirements, including seismic bracing and thermal expansion
                tank installation on closed-loop systems. Red Carpet Plumbing
                serves Lake Las Vegas as part of its broader Henderson service
                area. For a full list of plumbing services available in this area,
                visit our{" "}
                <Link
                  href="/lake-las-vegas-plumbing-services/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  Lake Las Vegas plumbing services
                </Link>{" "}
                page or our{" "}
                <Link
                  href="/henderson-plumbing-services/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  Henderson plumbing services
                </Link>{" "}
                page.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 8: FAQ */}
        <section className="bg-white">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Water Heater Questions for Lake Las Vegas Homeowners
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {LLV_WH_FAQS.map((faq) => (
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

        {/* SECTION 9: RELATED SERVICES (rerouting cards) */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="max-w-4xl text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Related Plumbing Services in Lake Las Vegas
              </h2>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {LLV_WH_REROUTING.map((card) => (
                <article
                  key={card.title}
                  className="flex flex-col rounded-2xl bg-white p-6 ring-1 ring-brand-surface-alt sm:p-8"
                >
                  <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                    {card.title}
                  </h3>
                  <p className="mt-3 flex-1 text-base leading-7 text-brand-dark/80">
                    {card.body}
                  </p>
                  <Link
                    href={card.linkHref}
                    className="mt-4 inline-flex items-center font-semibold text-brand-primary hover:text-brand-primary-hover"
                  >
                    {card.linkText}
                    <span aria-hidden="true" className="ml-1">
                      &rarr;
                    </span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 10: FINAL CTA */}
        <CTASection
          background="red"
          headline="Need Water Heater Repair or Installation in Lake Las Vegas?"
          body="Red Carpet Plumbing services tank and tankless water heaters throughout Lake Las Vegas and Henderson, NV. Hard water maintenance, Clark County code-compliant installations, and repair or replacement assessments from licensed plumbers. Call us or schedule service online."
          primaryCTA={{
            label: "Call (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{
            label: "Schedule Water Heater Service",
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
