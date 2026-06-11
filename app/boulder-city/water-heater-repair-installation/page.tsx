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

// FLAG: VERIFY before publishing — rating (4.8 stars / 76 Google reviews)
// and "Over 40 years" trust claims are source-site claims shown on this page.
// License #0048585A, permit handling, and transparent-pricing are also
// source-site claims. Confirm before launch.
//
// SCHEMA NOTE: Boulder City IS an incorporated city (not an unincorporated
// Clark County community), so Service.areaServed uses City + containedInPlace
// State (Nevada), matching the Henderson and North Las Vegas siblings. Do NOT
// use Place/AdministrativeArea here. No AggregateRating/Review. No sameAs
// Wikidata IDs on this service-location page. No hasCredential. Provider
// Plumber (name, url, telephone). 5 separate JsonLd blocks. HowTo included
// because Section 6 renders the matching visible <ol>.
//
// PERMIT NOTE: Boulder City is an incorporated city with its OWN building
// department. Every code/permit reference on this page names "Boulder City
// plumbing code" and "Boulder City Building Department" — NEVER Clark County.
// This differs from the unincorporated-community siblings, which name Clark
// County.

export const metadata: Metadata = {
  title:
    "Water Heater Repair and Installation in Boulder City, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides water heater repair and installation in Boulder City, NV. Tank and tankless water heaters, sediment flushing, anode rod replacement, thermal expansion tanks. Boulder City code-compliant installations. Licensed plumbers. Call (702) 567-9172.",
  alternates: {
    canonical:
      "https://redcarpetplumbing.com/boulder-city/water-heater-repair-installation/",
  },
  openGraph: {
    title:
      "Water Heater Repair and Installation in Boulder City, NV | Red Carpet Plumbing",
    description:
      "Tank and tankless water heater repair, replacement, and installation in Boulder City, NV. Hard water sediment flushing, anode rod replacement, seismic bracing. Boulder City code-compliant. Licensed plumbers.",
    url: "https://redcarpetplumbing.com/boulder-city/water-heater-repair-installation/",
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
const BC_WH_FAQS = [
  {
    question: "How long do water heaters last in Boulder City?",
    answer:
      "Tank water heaters in Boulder City typically last 8 to 12 years under Las Vegas Valley hard water conditions. The hard water from Lake Mead, which carries approximately 280 parts per million of dissolved minerals, accelerates sediment buildup and anode rod depletion, shortening service life compared to softer-water cities. Annual flushing and anode rod inspection can extend service life. Tankless water heaters can last 15 to 20 years with proper annual descaling.",
  },
  {
    question: "What is an anode rod and why does it matter in Boulder City?",
    answer:
      "The anode rod is a sacrificial metal component inside every tank water heater designed to corrode in place of the steel tank, protecting it from internal rust. Boulder City hard water depletes anode rods significantly faster than the three to five year national average. A depleted anode rod can lead to rapid internal tank corrosion within one to two years. Red Carpet Plumbing recommends annual anode rod inspection for Boulder City water heaters.",
  },
  {
    question:
      "What is a thermal expansion tank and do I need one in Boulder City?",
    answer:
      "A thermal expansion tank absorbs the pressure that builds up when heated water expands inside a closed-loop plumbing system. Most Boulder City homes operate on a closed-loop system due to backflow preventers at the street meter. Boulder City plumbing code and most manufacturer warranties require a thermal expansion tank on closed-loop water heater installations. If your water heater was installed without one, Red Carpet Plumbing can add it.",
  },
  {
    question:
      "Is seismic bracing required for water heater installation in Boulder City?",
    answer:
      "Yes. Boulder City plumbing code requires seismic bracing on water heater installations, including heavy-gauge steel straps secured at code-specified heights. Red Carpet Plumbing installs all water heaters to current Boulder City plumbing code including seismic bracing requirements.",
  },
  {
    question:
      "Who issues permits for water heater installation in Boulder City?",
    answer:
      "Boulder City is an incorporated city with its own building department. Permits for water heater installation in Boulder City are processed through the Boulder City Building Department. Red Carpet Plumbing holds Nevada Contractor License #0048585A and works within the Boulder City permit process for installations that require permits.",
  },
  {
    question:
      "How much does water heater repair or replacement cost in Boulder City?",
    answer:
      "Water heater repair and replacement costs vary based on the unit type, the scope of work, and the materials required. Red Carpet Plumbing provides transparent pricing before work begins. Call (702) 567-9172 for a quote.",
  },
];

const HERO_SUBHEADING =
  "Red Carpet Plumbing provides water heater repair and installation throughout Boulder City, Nevada. From tank water heater repair and replacement to tankless installation and annual sediment flushing, our licensed plumbers service Boulder City homes with code-compliant water heater work. Nevada Contractor License #0048585A, C-1 Plumbing and Heating.";

const TRUST_STRIP_ITEMS = [
  "NV Licensed, #0048585A",
  "Tank and Tankless Water Heaters",
  "Seismic Bracing and Expansion Tanks",
  "Transparent Pricing, No Hidden Fees",
];

// Section 3 — four failure factors (bold label + body). Factor four (seismic
// bracing) and the closed-loop factor name Boulder City plumbing code, NOT
// Clark County.
const BC_WH_CAUSES = [
  {
    label: "Hard water mineral buildup from Lake Mead",
    body: "Boulder City's municipal water draws from Lake Mead and carries 17 to 24 grains of hardness per gallon, approximately 280 parts per million of dissolved minerals. This is among the hardest municipal water in the United States. Calcium and magnesium deposits accumulate inside water heater tanks and on heat exchanger surfaces much faster than in softer-water cities. Sediment buildup reduces heating efficiency, causes the popping and rumbling noises Boulder City homeowners commonly report, and shortens tank lifespan. Annual flushing is strongly recommended for Boulder City homes.",
  },
  {
    label: "Accelerated anode rod depletion",
    body: "The anode rod inside every tank water heater is a sacrificial component that corrodes in place of the steel tank, protecting it from internal rust. Boulder City hard water depletes anode rods significantly faster than the three to five year national average. A depleted anode rod can lead to rapid internal tank corrosion within one to two years. Annual water heater inspections that include anode rod checks are strongly recommended for Boulder City homes.",
  },
  {
    label: "Closed-loop pressure system stress",
    body: "Most Boulder City homes operate on a closed-loop plumbing system due to backflow preventers at the street meter. When the water heater heats water, the expanding water volume has nowhere to go, causing repeated pressure spikes inside the tank that stress the glass lining and connections. A thermal expansion tank absorbs these pressure spikes. Boulder City plumbing code and most manufacturer warranties require a thermal expansion tank on closed-loop water heater installations.",
  },
  {
    label: "Seismic bracing requirements",
    body: "Nevada is one of the most seismically active states in the country. Boulder City plumbing code requires water heater installations to include seismic bracing, with heavy-gauge steel straps secured at code-specified heights to prevent the unit from tipping during a seismic event. A full 50-gallon water heater weighs approximately 500 pounds when full. Red Carpet Plumbing installs all water heaters to current Boulder City code including seismic bracing requirements.",
  },
];

// Section 4 — visible <ul> warning signs.
const WH_SIGNS = [
  "No hot water or insufficient hot water",
  "Popping, rumbling, or banging noises during heating cycles",
  "Rust-colored or cloudy hot water",
  "A leak at pipe connections or the pressure relief valve",
  "A pilot light that keeps going out on gas units",
  "A breaker that keeps tripping on electric units",
  "Hot water that runs out faster than it used to",
  "A water heater that is 10 or more years old",
];

// Section 5 — water heater services (bold label + body). The gas/electric block
// carries an inline link to the built core re-piping page; its body is split so
// the rendered sentence reads exactly as approved, with "re-piping services
// page" as the anchor.
const BC_WH_SERVICES: {
  label: string;
  body: string;
  link: { href: string; text: string } | null;
}[] = [
  {
    label: "Water heater repair",
    body: "We diagnose and repair all water heater problems including failed heating elements, faulty thermostats, pilot light issues, pressure relief valve failures, and sediment buildup. We assess the unit's age and condition before recommending repair to confirm it makes sense given the remaining service life.",
    link: null,
  },
  {
    label: "Water heater replacement",
    body: "When repair is no longer cost-effective or the unit has reached end of service life, we replace it with a properly sized new water heater installed to current Boulder City plumbing code. Tank water heaters in Las Vegas Valley hard water conditions typically last 8 to 12 years.",
    link: null,
  },
  {
    label: "Tankless water heater installation and descaling",
    body: "Tankless water heaters heat water on demand, eliminate standby heat loss, and can last 15 to 20 years with proper maintenance. In Boulder City, annual descaling is required to remove hard water mineral deposits from the heat exchanger. Tankless units that have not been descaled on schedule may already have reduced output and restricted flow. We install new tankless units and provide descaling service for existing Boulder City tankless water heaters.",
    link: null,
  },
  {
    label: "Water heater flush and maintenance",
    body: "Annual flushing removes calcium and magnesium sediment from tank water heaters before it hardens into scale and reduces efficiency. Boulder City hard water from the Lake Mead supply makes annual flushing significantly more important here than in most other cities.",
    link: null,
  },
  {
    label: "Anode rod inspection and replacement",
    body: "We inspect and replace anode rods as part of water heater maintenance to protect the tank from internal corrosion and extend service life under Boulder City hard water conditions.",
    link: null,
  },
  {
    label: "Thermal expansion tank installation",
    body: "We install thermal expansion tanks on closed-loop systems to absorb pressure spikes, protect the water heater, and meet Boulder City plumbing code and manufacturer warranty requirements. If your Boulder City water heater was installed without an expansion tank, we can add one.",
    link: null,
  },
  {
    // Body split at the anchor: rendered output reads
    // "...see our re-piping services page." exactly as approved.
    label: "Gas and electric water heater service",
    body: "We service both gas and electric water heaters including tank and tankless models. All gas line work is performed under NV License #0048585A. For Boulder City homes that may need broader pipe assessment alongside water heater service, see our ",
    link: { href: "/re-piping/", text: "re-piping services page" },
  },
];

// Section 6 — visible <ol>, HowTo schema source. Step four names Boulder City
// plumbing code, NOT Clark County.
const BC_WH_STEPS = [
  {
    name: "Diagnose the problem",
    body: "We inspect the unit, check sediment buildup, anode rod condition, pressure relief valve function, expansion tank presence, and any visible damage or corrosion. This gives us a complete picture of the unit's current condition before we make any recommendations.",
  },
  {
    name: "Assess repair versus replacement",
    body: "For units under 8 years old with repairable components, repair is usually the right choice. For units 10 years or older, or units with tank corrosion, replacement typically makes more long-term financial sense than continued repairs. We give you a clear, honest assessment of both options.",
  },
  {
    name: "Present your options",
    body: "Before any work begins, we explain what we found, what the repair or installation involves, and what the job will cost. We do not start work without your approval.",
  },
  {
    name: "Complete the work to Boulder City plumbing code",
    body: "All water heater work is completed to current Boulder City plumbing code including seismic bracing on new installations, thermal expansion tank on closed-loop systems, and proper venting on gas units. We test the unit before we leave to confirm it is operating correctly.",
  },
];

// Section 7 — why choose (bulleted list). FLAGged items per brief.
const WHY_CHOOSE_ITEMS = [
  // FLAG: VERIFY "over 40 years" before publishing.
  "Over 40 years serving the Las Vegas Valley",
  "Local, family-owned, not a national franchise",
  "Nevada Contractor License #0048585A, C-1 Plumbing and Heating",
  // FLAG: VERIFY rating and review count before publishing.
  "4.8-star rating across 76 Google reviews",
  "Boulder City code-compliant seismic bracing and expansion tank installation",
  "Tank and tankless water heater service throughout Boulder City",
  "Annual descaling service for tankless units",
  "Transparent pricing, no hidden fees",
];

// Section 8 — neighborhood chips (plain text only; no Boulder City sub-area
// routes are built).
const BOULDER_CITY_AREAS = [
  "Historic Downtown Boulder City",
  "King Street Area",
  "Nevada Way Corridor",
  "Veterans Memorial Drive Area",
  "Buchanan Boulevard Area",
  "Newer Boulder City Neighborhoods",
];

// ---------------------------------------------------------------------------
// JSON-LD payloads. Boulder City IS incorporated, so Service.areaServed uses
// City + containedInPlace State (Nevada). Do NOT use Place/AdministrativeArea.
// ---------------------------------------------------------------------------
const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Water Heater Repair and Installation in Boulder City, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides water heater repair and installation in Boulder City, NV. Tank and tankless water heaters, sediment flushing, anode rod replacement, thermal expansion tanks, and Boulder City code-compliant seismic bracing.",
  url: "https://redcarpetplumbing.com/boulder-city/water-heater-repair-installation/",
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
      name: "Boulder City Plumbing Services",
      item: "https://redcarpetplumbing.com/boulder-city-plumbing-services/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Water Heater Repair and Installation in Boulder City",
      item: "https://redcarpetplumbing.com/boulder-city/water-heater-repair-installation/",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Water Heater Repair and Installation in Boulder City, NV",
  serviceType: "Water Heater Repair and Installation",
  description:
    "Red Carpet Plumbing provides water heater repair, replacement, and installation for homes and businesses in Boulder City, NV, including tank and tankless units, sediment flushing, anode rod replacement, thermal expansion tank installation, and Boulder City code-compliant seismic bracing.",
  provider: {
    "@type": "Plumber",
    name: "Red Carpet Plumbing",
    url: "https://redcarpetplumbing.com",
    // FLAG: VERIFY telephone (carried forward from existing pages).
    telephone: "+17025679172",
  },
  areaServed: {
    "@type": "City",
    name: "Boulder City",
    containedInPlace: {
      "@type": "State",
      name: "Nevada",
    },
  },
};

// HowTo schema included because Section 6 renders the matching visible
// step-by-step process (titles + body) on the page.
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Red Carpet Plumbing Handles Water Heater Service in Boulder City",
  description:
    "The process Red Carpet Plumbing follows for water heater repair and installation in Boulder City, NV.",
  step: BC_WH_STEPS.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.name,
    text: s.body,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: BC_WH_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function BoulderCityWaterHeaterPage() {
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
              label: "Boulder City Plumbing Services",
              href: "/boulder-city-plumbing-services/",
            },
            {
              label: "Water Heater Repair and Installation in Boulder City",
            },
          ]}
        />

        {/* SECTION 1: HERO */}
        <HeroSection
          headingLevel="h1"
          headline="Water Heater Repair and Installation in Boulder City, NV"
          subheading={HERO_SUBHEADING}
          trustItems={TRUST_STRIP_ITEMS}
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
            src: "/images/services/water-heater-repair-installation/hero.webp",
            alt: "water heater repair and installation in Boulder City, NV",
          }}
        />

        {/* SECTION 2: DIRECT ANSWER BLOCK */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Water Heater Repair and Installation for Boulder City Homes
              </h2>
              <div className="mt-6 space-y-6 text-lg leading-8 text-brand-dark/80">
                <p>
                  Red Carpet Plumbing is a local, family-owned plumbing company
                  providing water heater repair and installation services
                  throughout Boulder City, Nevada. Boulder City is an
                  incorporated city with its own building department, and water
                  heater installations here must meet Boulder City plumbing code
                  requirements including seismic bracing and thermal expansion
                  tank installation on closed-loop systems.
                </p>
                <p>
                  Boulder City receives hard water from the Lake Mead supply,
                  which carries approximately 280 parts per million of dissolved
                  minerals. This mineral content accelerates sediment buildup
                  inside water heater tanks, depletes anode rods faster than the
                  national average, and shortens tank service life compared to
                  softer-water cities. Annual water heater maintenance is
                  particularly important in Boulder City.
                </p>
                <p>
                  Nevada Contractor License #0048585A covers plumbing work
                  throughout Nevada including Boulder City. For our full range of
                  plumbing services in Boulder City, visit our{" "}
                  <Link
                    href="/boulder-city-plumbing-services/"
                    className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                  >
                    Boulder City plumbing services
                  </Link>{" "}
                  page. For information on our water heater services across the
                  Las Vegas Valley, see our{" "}
                  <Link
                    href="/water-heater-repair-installation/"
                    className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                  >
                    water heater repair and installation services
                  </Link>{" "}
                  page.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: WHY BOULDER CITY WATER HEATERS FAIL FASTER */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Why Boulder City Water Heaters Fail Faster
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Four factors specific to Boulder City and the Las Vegas
                    Valley cause water heaters here to require more frequent
                    maintenance and earlier replacement than in most of the
                    country.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-10">
                <ul className="space-y-5">
                  {BC_WH_CAUSES.map((c) => (
                    <li
                      key={c.label}
                      className="relative rounded-2xl bg-white p-6 ring-1 ring-brand-surface-alt"
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
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Signs Your Boulder City Water Heater Needs Service
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                If you are noticing any of these signs in your Boulder City home,
                call Red Carpet Plumbing at (702) 567-9172 to schedule a water
                heater assessment.
              </p>
            </div>
            <div className="mt-8 rounded-2xl border-l-4 border-brand-primary bg-brand-surface-alt p-6 sm:p-8">
              <ul className="space-y-3">
                {WH_SIGNS.map((item) => (
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

        {/* SECTION 5: WATER HEATER SERVICES */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Water Heater Services for Boulder City Homes
              </h2>
            </div>
            <ul className="mt-10 space-y-5">
              {BC_WH_SERVICES.map((s) => (
                <li
                  key={s.label}
                  className="rounded-2xl bg-white p-6 ring-1 ring-brand-surface-alt"
                >
                  <p className="text-base leading-7 text-brand-dark/80">
                    <strong className="font-semibold text-brand-dark">
                      {s.label}.
                    </strong>{" "}
                    {s.body}
                    {s.link ? (
                      <>
                        <Link
                          href={s.link.href}
                          className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                        >
                          {s.link.text}
                        </Link>
                        .
                      </>
                    ) : null}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 6: OUR WATER HEATER PROCESS (HowTo) */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Our Water Heater Process in Boulder City
                  </h2>
                </div>
              </SectionRevealItem>
              <SectionRevealItem className="mt-12">
                <ol className="space-y-8">
                  {BC_WH_STEPS.map((step, index) => (
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
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Why Boulder City Homeowners Choose Red Carpet Plumbing
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing is a local, family-owned plumbing company
                serving Boulder City and the Las Vegas Valley. We hold Nevada
                Contractor License #0048585A under the C-1 Plumbing and Heating
                classification, covering residential and commercial plumbing work
                throughout Nevada including Boulder City.
              </p>
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
            <p className="mt-8 text-base leading-7 text-brand-dark/80">
              Our office is located at 3330 W. Hacienda Ave Ste. 405, Las Vegas,
              NV 89118. Office hours are Monday through Friday, 7:30 AM to 4:30
              PM. For our full range of plumbing services, visit our{" "}
              <Link
                href="/plumbing-services/"
                className="font-semibold text-brand-primary hover:text-brand-primary-hover"
              >
                plumbing services
              </Link>{" "}
              page.
            </p>
          </div>
        </section>

        {/* SECTION 8: BOULDER CITY NEIGHBORHOODS WE SERVE */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Boulder City Neighborhoods We Serve
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing provides water heater repair and installation
                throughout Boulder City. Call (702) 567-9172 to confirm coverage
                for your address.
              </p>
            </div>
            <ul className="mt-8 flex flex-wrap gap-3">
              {BOULDER_CITY_AREAS.map((area) => (
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

        {/* SECTION 9: FAQ */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Water Heater FAQs for Boulder City Homeowners
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {BC_WH_FAQS.map((faq) => (
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

        {/* SECTION 10: FINAL CTA */}
        <CTASection
          background="red"
          headline="Ready to Schedule Water Heater Service in Boulder City?"
          body="Red Carpet Plumbing provides water heater repair and installation throughout Boulder City and the Las Vegas Valley. Boulder City code-compliant installations. Transparent pricing. No hidden fees."
          primaryCTA={{
            label: "Call (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{
            label: "Request Service Online",
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
