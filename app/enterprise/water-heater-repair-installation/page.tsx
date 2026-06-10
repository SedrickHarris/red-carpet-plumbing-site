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

// FLAG: VERIFY before publishing — license #0048585A, "over 40 years", and the
// 4.8/76 rating are source-site/project claims. Each visible instance carries an
// inline FLAG comment.
//
// SCHEMA NOTE: Enterprise is an unincorporated Clark County community (not an
// incorporated city), so Service.areaServed uses Place -> AdministrativeArea
// (Clark County) -> State (Nevada), NOT City. Matches the Enterprise emergency
// and drain-cleaning siblings. No AggregateRating/Review. No sameAs. Provider
// Plumber (name, url, telephone). 5 separate JsonLd blocks.
//
// CONTENT NOTE: The Enterprise water heater differentiator is the first-service
// cycle of 20-to-25-year-old homes whose original water heaters are at or past
// the 8-12 year Las Vegas lifespan. The four established Las Vegas failure
// factors (hard water scale, anode rod depletion, closed-loop pressure, seismic
// bracing) are present as causes 2-5. There is intentionally NO galvanized-pipe
// language; Enterprise's supply context is 20-25 year old copper.

export const metadata: Metadata = {
  title:
    "Water Heater Repair and Installation in Enterprise, NV | Red Carpet Plumbing",
  description:
    "Water heater repair and installation in Enterprise, NV. Red Carpet Plumbing serves Rhodes Ranch, Mountain's Edge, and all Enterprise communities. Tank and tankless water heaters. Clark County code-compliant installation. NV #0048585A. (702) 567-9172.",
  alternates: {
    canonical:
      "https://redcarpetplumbing.com/enterprise/water-heater-repair-installation/",
  },
  openGraph: {
    title:
      "Water Heater Repair and Installation in Enterprise, NV | Red Carpet Plumbing",
    description:
      "Water heater repair and replacement throughout Enterprise, NV. Rhodes Ranch, Mountain's Edge, Southwest Las Vegas. Tank and tankless. Clark County code. NV #0048585A.",
    url: "https://redcarpetplumbing.com/enterprise/water-heater-repair-installation/",
    siteName: "Red Carpet Plumbing",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

// ---------------------------------------------------------------------------
// FAQ source of truth. The visible FAQ section AND the FAQPage JSON-LD schema
// both derive from this single array, guaranteeing a character-for-character
// match.
// ---------------------------------------------------------------------------
const ENT_WH_FAQS = [
  {
    question: "How long do water heaters last in Enterprise, NV?",
    answer:
      "Tank water heaters in Las Vegas Valley homes typically last 8 to 12 years due to hard water conditions. Las Vegas municipal water at 17 to 24 grains per gallon accelerates sediment buildup and anode rod depletion, shortening tank service life compared to the national average of 10 to 15 years in softer-water areas. Enterprise homes in Rhodes Ranch and Mountain's Edge were built in the late 1990s and early 2000s. Original water heaters in these homes have been operating well beyond their expected service life for years. Homeowners with original or early-replacement water heaters in Enterprise should have them assessed.",
  },
  {
    question: "What are the signs my water heater is failing in Enterprise?",
    answer:
      "Common signs include no hot water or insufficient hot water, popping or rumbling noises during heating cycles (a sign of sediment buildup), rust-colored or cloudy hot water, a leak at pipe connections or the pressure relief valve, a pilot light that keeps going out (gas units), a breaker that keeps tripping (electric units), hot water that runs out faster than it used to, or a unit that is 10 or more years old. In Enterprise homes now 20 to 25 years old, a water heater showing any of these signs is a strong replacement candidate.",
  },
  {
    question: "Do I need a thermal expansion tank in Enterprise, NV?",
    answer:
      "Yes, in most cases. Most Enterprise homes operate on a closed-loop plumbing system due to backflow preventers at the street meter. When a water heater heats water in a closed system, the expanding water volume has nowhere to go, causing pressure spikes that stress the tank. Clark County plumbing code and most manufacturer warranties require a thermal expansion tank on closed-loop water heater installations. Red Carpet Plumbing assesses closed-loop status on every installation and adds an expansion tank where required.",
  },
  {
    question:
      "Is seismic bracing required for water heater installation in Enterprise?",
    answer:
      "Yes. Clark County plumbing code requires seismic bracing on all water heater installations, including two heavy-gauge steel straps secured at code-specified heights. Red Carpet Plumbing installs all water heaters to current Clark County code including seismic bracing requirements. Enterprise is an unincorporated Clark County community and Clark County is the permit jurisdiction for water heater installation here.",
  },
  {
    question: "Should I repair or replace my water heater in Enterprise?",
    answer:
      "The answer depends on the unit's age, condition, and the nature of the problem. For units under 8 years old with repairable components, repair is typically the right choice. For units 10 years or older, especially in Enterprise homes where original water heaters are now 15 to 25 years old, replacement typically makes more long-term financial sense than continued repairs on an aging unit. We assess both options and give you a clear cost comparison before any work begins.",
  },
  {
    question: "Who issues permits for water heater installation in Enterprise, NV?",
    answer:
      "Enterprise is an unincorporated Clark County community, and Clark County is the permit jurisdiction for water heater installation here. Red Carpet Plumbing holds NV License #0048585A and works within the Clark County permit process for applicable water heater installations.",
  },
];

const HERO_SUBHEADING =
  "Red Carpet Plumbing provides water heater repair and installation throughout Enterprise, Nevada and the Southwest Las Vegas area. Enterprise homes built in the late 1990s and early 2000s in communities like Rhodes Ranch and Mountain's Edge are now 20 to 25 years old. Original water heaters in these homes have long exceeded their expected service life under Las Vegas hard water conditions. Our licensed plumbers handle tank water heater repair and replacement, tankless installation, and code-compliant service throughout Enterprise. NV Contractor License #0048585A.";

const HERO_TRUST_ITEMS = [
  "NV Licensed, #0048585A",
  "Tank and Tankless Water Heaters",
  "Seismic Bracing and Expansion Tanks",
  "Transparent Pricing, No Hidden Fees",
];

// Section 3 — why Enterprise water heaters fail faster (bold label + body). Item 1
// is the Enterprise-specific first-service-cycle factor; items 2-5 are the four
// established Las Vegas failure factors. No galvanized-pipe language.
const ENT_WH_CAUSES = [
  {
    label: "First-service-cycle homes with original or aging water heaters",
    body: "Enterprise homes in Rhodes Ranch, Mountain's Edge, and surrounding communities were built primarily in the late 1990s through the mid-2000s. Many still have original water heaters or early replacement units that are now 15 to 25 years old. Tank water heaters in Las Vegas typically last 8 to 12 years due to hard water conditions, meaning most original units in Enterprise homes have been operating well beyond their expected service life for years. A water heater that shows no obvious symptoms can still be operating with a depleted anode rod, accumulated sediment reducing efficiency, and an aging tank lining approaching failure.",
  },
  {
    label: "Hard water mineral buildup",
    body: "Las Vegas municipal water carries 17 to 24 grains per gallon of dissolved calcium and magnesium, approximately 280 parts per million. This is among the hardest municipal water in the United States. These minerals accumulate as sediment inside water heater tanks and on heat exchanger surfaces much faster than in softer-water cities. Sediment buildup reduces heating efficiency, causes the popping and rumbling noises Enterprise homeowners commonly report during heating cycles, and shortens tank service life. Annual flushing is strongly recommended for all Enterprise water heaters.",
  },
  {
    label: "Accelerated anode rod depletion",
    body: "The anode rod inside every tank water heater is a sacrificial component that corrodes in place of the steel tank, protecting it from internal rust. Las Vegas hard water depletes anode rods significantly faster than the three to five year national average. A depleted anode rod in an Enterprise home leaves the tank unprotected from internal corrosion. Annual inspections that check anode rod condition are strongly recommended for all Enterprise water heaters.",
  },
  {
    label: "Closed-loop pressure system and thermal expansion tank",
    body: "Most Enterprise homes operate on a closed-loop plumbing system due to backflow preventers at the street meter. When a water heater heats water, the expanding volume has nowhere to go in a closed system, causing repeated pressure spikes that stress the tank lining and connections. Clark County plumbing code and most manufacturer warranties require a thermal expansion tank on closed-loop water heater installations. A missing expansion tank is a common finding during water heater service calls in Enterprise homes.",
  },
  {
    label: "Clark County seismic bracing requirement",
    body: "Nevada is one of the most seismically active states in the country. Clark County plumbing code requires all water heater installations to include seismic bracing, with two heavy-gauge steel straps secured at code-specified heights. Red Carpet Plumbing installs all water heaters to current Clark County code including seismic bracing. A water heater installed without proper seismic bracing does not meet Clark County code and may not be covered under manufacturer warranty.",
  },
];

// Section 4 — visible <ul> signs list.
const ENT_WH_SIGNS = [
  "No hot water or insufficient hot water",
  "Popping, rumbling, or banging noises during heating cycles",
  "Rust-colored or cloudy hot water",
  "A leak at pipe connections or the pressure relief valve",
  "A pilot light that keeps going out (gas units)",
  "A breaker that keeps tripping (electric units)",
  "Hot water that runs out faster than it used to",
  "A water heater that is 10 or more years old",
];

// Section 5 — water heater services (bold label + body). Item 8 (gas/electric)
// carries the gas-line scope FLAG.
const ENT_WH_SERVICES = [
  {
    label: "Water heater repair",
    body: "We diagnose and repair all water heater problems including failed heating elements, faulty thermostats, pilot light issues, pressure relief valve failures, and sediment buildup. We assess the unit's age and condition before recommending repair over replacement.",
  },
  {
    label: "Water heater replacement",
    body: "When repair is no longer cost-effective or the unit has reached end of service life, we replace it with a properly sized new water heater installed to current Clark County code. For Enterprise homes with original 20-25 year old units, replacement is typically the right choice.",
  },
  {
    label: "Tankless water heater installation",
    body: "Tankless water heaters heat water on demand, last 15 to 20 years with proper maintenance, and eliminate standby heat loss. In Enterprise, as throughout the Las Vegas Valley, annual descaling removes hard water mineral deposits from the heat exchanger and maintains efficiency. We install and service tankless units for residential and commercial properties.",
  },
  {
    label: "Water heater flush and maintenance",
    body: "Annual flushing removes calcium and magnesium sediment from Enterprise water heater tanks before it hardens into scale and reduces efficiency. We also inspect the anode rod, pressure relief valve, and connections during maintenance visits.",
  },
  {
    label: "Anode rod replacement",
    body: "We inspect and replace anode rods as part of water heater maintenance service to protect the tank from internal corrosion and extend service life under Enterprise hard water conditions.",
  },
  {
    label: "Thermal expansion tank installation",
    body: "We install thermal expansion tanks on closed-loop systems to absorb pressure spikes and meet Clark County code and manufacturer warranty requirements. Many Enterprise water heater installations are missing expansion tanks; we can add one during a repair or replacement visit.",
  },
  {
    label: "Seismic bracing installation",
    body: "We install all water heaters to current Clark County seismic bracing requirements. Existing water heaters without proper seismic bracing can be brought into compliance as a standalone service.",
  },
  // FLAG: verify gas line scope before publishing.
  {
    label: "Gas and electric water heater service",
    body: "We service both gas and electric water heaters including tank and tankless models. All gas line work is performed under NV License #0048585A.",
  },
];

// Section 6 — visible <ol>, HowTo schema source.
const WH_STEPS = [
  {
    name: "Diagnose the water heater problem",
    body: "We inspect the unit, note its age and maintenance history, and check for sediment buildup, anode rod condition, pressure relief valve function, expansion tank presence, and visible corrosion or damage before making any recommendations. For Enterprise homes with original or aging units, we also assess whether the unit is a strong repair candidate or a replacement candidate based on age and condition.",
  },
  {
    name: "Assess repair versus replacement",
    body: "For units under 8 years old with repairable components, repair is usually the right choice. For units 10 years or older, or units with tank corrosion or significant hard water damage, replacement typically makes more long-term financial sense. We give you a clear assessment of both options including estimated cost for each so you can make an informed decision.",
  },
  {
    name: "Present your options clearly",
    body: "We explain what we found, what the repair or replacement involves, and what the job will cost before any work begins. If a replacement is needed, we discuss the right size and type for your household and the pros and cons of tank versus tankless for your Enterprise home's layout and hot water demand.",
  },
  {
    name: "Complete the work to Clark County code",
    body: "All water heater work is completed to current Clark County plumbing code including seismic bracing on new installations, thermal expansion tank installation on closed-loop systems, and proper venting on gas units. We test the unit before we leave to confirm it is operating correctly.",
  },
];

// Section 7 — why choose (bulleted list). Three items carry FLAGs.
const WHY_CHOOSE = [
  "Local Las Vegas Valley plumbing company familiar with Enterprise's first-service-cycle housing stock, Rhodes Ranch and Mountain's Edge water heater conditions, and Clark County code requirements",
  // FLAG: VERIFY license number before publishing.
  "Licensed plumbers, NV License #0048585A",
  "Clark County code-compliant installation including seismic bracing and expansion tank",
  "Transparent pricing with no hidden fees",
  "Tank and tankless water heater service throughout Enterprise and Southwest Las Vegas",
  // FLAG: VERIFY "over 40 years" before publishing.
  "Over 40 years serving the Las Vegas Valley",
  // FLAG: VERIFY rating and review count before publishing.
  "4.8-star rating across 76 Google reviews",
];

// Section 7 — related services (built core/sibling routes).
const RELATED_SERVICES = [
  { href: "/enterprise/drain-cleaning/", text: "Enterprise drain cleaning" },
  {
    href: "/enterprise/emergency-plumbing/",
    text: "Enterprise emergency plumbing",
  },
  { href: "/leak-detection-repair/", text: "Leak detection and repair" },
  {
    href: "/slab-leak-detection-repair/",
    text: "Slab leak detection and repair",
  },
];

// Section 8 — coverage area chips (plain text only; no Enterprise sub-area routes
// are built).
const ENTERPRISE_AREAS = [
  "Rhodes Ranch",
  "Mountain's Edge",
  "Southwest Las Vegas",
  "Enterprise 215 Corridor",
  "Southern Highlands Area",
  "Silverado Ranch Area",
  "Inspirada Adjacent",
  "Enterprise Commercial Parks",
];

// ---------------------------------------------------------------------------
// JSON-LD payloads. Service.areaServed uses Place -> AdministrativeArea (Clark
// County) -> State (Nevada) because Enterprise is unincorporated. Do NOT use
// "@type": "City".
// ---------------------------------------------------------------------------
const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Water Heater Repair and Installation in Enterprise, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides water heater repair and installation in Enterprise, NV. Tank and tankless water heaters. Clark County code-compliant installation. Licensed plumbers.",
  url: "https://redcarpetplumbing.com/enterprise/water-heater-repair-installation/",
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
      name: "Enterprise Plumbing Services",
      item: "https://redcarpetplumbing.com/enterprise-plumbing-services/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Water Heater Repair and Installation in Enterprise",
      item: "https://redcarpetplumbing.com/enterprise/water-heater-repair-installation/",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Water Heater Repair and Installation in Enterprise, NV",
  serviceType: "Water Heater Repair and Installation",
  description:
    "Red Carpet Plumbing provides water heater repair, replacement, and installation for homes and businesses in Enterprise, NV. Services include tank water heater repair and replacement, tankless installation, water heater flush and maintenance, anode rod replacement, thermal expansion tank installation, seismic bracing, and gas and electric water heater service.",
  provider: {
    "@type": "Plumber",
    name: "Red Carpet Plumbing",
    url: "https://redcarpetplumbing.com",
    // FLAG: VERIFY telephone (carried forward from existing pages).
    telephone: "+17025679172",
  },
  areaServed: {
    "@type": "Place",
    name: "Enterprise",
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

// HowTo schema included because Section 6 renders the matching visible
// step-by-step process (titles + body) on the page.
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Red Carpet Plumbing Handles Water Heater Service in Enterprise",
  description:
    "The process Red Carpet Plumbing follows for water heater repair and installation in Enterprise, NV.",
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
  mainEntity: ENT_WH_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function EnterpriseWaterHeaterPage() {
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
              label: "Enterprise Plumbing Services",
              href: "/enterprise-plumbing-services/",
            },
            {
              label: "Water Heater Repair and Installation in Enterprise",
            },
          ]}
        />

        {/* SECTION 1: HERO */}
        <HeroSection
          headingLevel="h1"
          headline="Water Heater Repair and Installation in Enterprise, NV"
          subheading={HERO_SUBHEADING}
          trustItems={HERO_TRUST_ITEMS}
          primaryCTA={{
            label: "Call (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{
            label: "Request Service",
            href: "/contact/",
          }}
          ctaNote="Licensed plumbers. Clark County code-compliant installation. Transparent pricing."
          formSlot={<QuoteFormPlaceholder title="Get Water Heater Help" />}
          backgroundImage={{
            src: "/images/services/water-heater-repair-installation/hero.webp",
            alt: "Water heater repair and installation in Enterprise, NV",
          }}
        />

        {/* SECTION 2: DIRECT ANSWER */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="rounded-2xl border-l-4 border-brand-primary bg-brand-surface-alt p-6 sm:p-8">
              <h2 className="text-2xl font-bold tracking-tight text-brand-dark sm:text-3xl">
                Water Heater Services in Enterprise, NV
              </h2>
              {/* FLAG: "over 40 years" claim below — verify before publishing. */}
              <p className="mt-4 text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing is a local, family-owned plumbing company
                serving Enterprise, Nevada and the Las Vegas Valley. We hold
                Nevada Contractor License #0048585A under the C-1 Plumbing and
                Heating classification. We have been serving the Las Vegas
                Valley, including Enterprise, for over 40 years.
              </p>
              <p className="mt-4 text-base leading-7 text-brand-dark/80">
                Tank water heaters in Las Vegas typically last 8 to 12 years
                under hard water conditions. Enterprise homes in Rhodes Ranch and
                Mountain&apos;s Edge were built primarily in the late 1990s
                through the mid-2000s. Many of these homes still have their
                original water heaters or first-replacement units that are now
                well past this expected service life. Homeowners in Enterprise who
                have not yet replaced their original water heater are operating at
                elevated risk of tank failure. For our full water heater service
                overview, see our{" "}
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

        {/* SECTION 3: WHY WATER HEATERS FAIL FASTER */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10 lg:pb-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Why Enterprise Water Heaters Fail Faster
                  </h2>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-10">
                <ul className="space-y-5">
                  {ENT_WH_CAUSES.map((c) => (
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
            </SectionReveal>
          </div>
        </section>

        {/* SECTION 4: SIGNS YOUR WATER HEATER NEEDS SERVICE */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Signs Your Water Heater Needs Service in Enterprise
              </h2>
            </div>
            <div className="mt-8 rounded-2xl border-l-4 border-brand-primary bg-white p-6 sm:p-8">
              <ul className="space-y-3">
                {ENT_WH_SIGNS.map((item) => (
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

        {/* SECTION 5: WATER HEATER SERVICES WE PROVIDE */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Water Heater Services We Provide in Enterprise
              </h2>
            </div>
            <ul className="mt-10 space-y-5">
              {ENT_WH_SERVICES.map((s) => (
                <li
                  key={s.label}
                  className="rounded-2xl bg-brand-surface-alt p-6 ring-1 ring-brand-surface-alt"
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

        {/* SECTION 6: OUR WATER HEATER PROCESS (HowTo) */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Our Water Heater Process in Enterprise
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

        {/* SECTION 7: WHY CHOOSE */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Why Enterprise Homeowners Choose Red Carpet Plumbing for Water
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

            <div className="mt-10">
              <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                Related Services
              </h3>
              <ul className="mt-4 flex flex-wrap gap-3">
                {RELATED_SERVICES.map((r) => (
                  <li key={r.href}>
                    <Link
                      href={r.href}
                      className="inline-flex rounded-lg bg-brand-surface-alt px-4 py-2 text-sm font-semibold text-brand-primary shadow-sm ring-1 ring-brand-surface-alt hover:text-brand-primary-hover"
                    >
                      {r.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-8 text-base leading-7 text-brand-dark/80">
              Red Carpet Plumbing provides full{" "}
              <Link
                href="/enterprise-plumbing-services/"
                className="font-semibold text-brand-primary hover:text-brand-primary-hover"
              >
                Enterprise plumbing services
              </Link>{" "}
              including drain cleaning, leak detection, slab leak detection, and
              emergency plumbing. We also serve communities near Enterprise
              including{" "}
              <Link
                href="/las-vegas-plumbing-services/"
                className="font-semibold text-brand-primary hover:text-brand-primary-hover"
              >
                Las Vegas plumbing services
              </Link>{" "}
              and{" "}
              <Link
                href="/henderson-plumbing-services/"
                className="font-semibold text-brand-primary hover:text-brand-primary-hover"
              >
                Henderson plumbing services
              </Link>
              .
            </p>
          </div>
        </section>

        {/* SECTION 8: COVERAGE AREAS */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Enterprise Water Heater Coverage Areas
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing provides water heater repair and installation
                throughout Enterprise and the Southwest Las Vegas area.
              </p>
            </div>
            <ul className="mt-8 flex flex-wrap gap-3">
              {ENTERPRISE_AREAS.map((area) => (
                <li
                  key={area}
                  className="rounded-full bg-white px-4 py-2 text-sm font-medium text-brand-dark/80 ring-1 ring-brand-surface-alt"
                >
                  {area}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-base leading-7 text-brand-dark/80">
              For water heater services across the Las Vegas Valley, see our{" "}
              <Link
                href="/water-heater-repair-installation/"
                className="font-semibold text-brand-primary hover:text-brand-primary-hover"
              >
                water heater repair and installation
              </Link>{" "}
              page.
            </p>
          </div>
        </section>

        {/* SECTION 9: FAQ */}
        <section className="bg-white">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Water Heater FAQs for Enterprise Homeowners
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {ENT_WH_FAQS.map((faq) => (
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
          headline="Schedule Water Heater Service in Enterprise Today"
          body="Red Carpet Plumbing provides water heater repair and installation throughout Enterprise, NV, including Rhodes Ranch, Mountain's Edge, and the Southwest Las Vegas area. Clark County code-compliant installation. Call (702) 567-9172 or request service online."
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
