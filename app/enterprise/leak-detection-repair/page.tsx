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

// FLAG: VERIFY before publishing — license #0048585A, "over 40 years", the
// 4.8/76 rating, and the emergency-availability trust-strip item are
// source-site/project claims. Each visible instance carries an inline FLAG
// comment.
//
// SCHEMA NOTE: Enterprise is an unincorporated Clark County community (not an
// incorporated city), so Service.areaServed uses Place -> AdministrativeArea
// (Clark County) -> State (Nevada), NOT City. Matches the Enterprise emergency,
// drain-cleaning, and water-heater siblings. No AggregateRating/Review. No
// sameAs. Provider Plumber (name, url, telephone). 5 separate JsonLd blocks.
//
// CONTENT NOTE: The Enterprise leak-cause story is the first-service cycle of
// 20-to-25-year-old copper supply lines (hard water pitting corrosion, caliche
// soil movement, closed-loop pressure fatigue, aging fixture connections). There
// is intentionally NO galvanized-pipe language; galvanized supply lines are the
// Spring Valley / older North Las Vegas story, not Enterprise's newer copper.

export const metadata: Metadata = {
  title: "Leak Detection and Repair in Enterprise, NV | Red Carpet Plumbing",
  description:
    "Professional non-invasive leak detection and repair in Enterprise, NV. Red Carpet Plumbing locates hidden water leaks using acoustic sensors, pressure testing, and thermal imaging. Rhodes Ranch, Mountain's Edge, Southwest Las Vegas. NV #0048585A.",
  alternates: {
    canonical: "https://redcarpetplumbing.com/enterprise/leak-detection-repair/",
  },
  openGraph: {
    title: "Leak Detection and Repair in Enterprise, NV | Red Carpet Plumbing",
    description:
      "Non-invasive leak detection throughout Enterprise, NV. Acoustic sensors, pressure testing, thermal imaging. Rhodes Ranch, Mountain's Edge. Licensed plumbers. NV #0048585A.",
    url: "https://redcarpetplumbing.com/enterprise/leak-detection-repair/",
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
const ENT_LEAK_FAQS = [
  {
    question:
      "How do I know if I have a hidden water leak in my Enterprise home?",
    answer:
      "The most common signs of a hidden water leak in an Enterprise home are an unexplained increase in your water bill, the sound of running water when all fixtures are off, warm or wet spots on floors or walls, discoloration or bubbling paint, a persistent musty odor, reduced water pressure, and unexplained cracks in walls or flooring. If you notice one or more of these signs, a professional leak detection inspection can locate the source before further damage occurs.",
  },
  {
    question: "How can I check for a water leak using my meter in Enterprise?",
    answer:
      "Turn off all water fixtures and appliances in your home. Locate your water meter at the street and record the reading. Do not use any water for 30 minutes, then check the meter again. If the reading has changed, water is being used somewhere in the system, which indicates an active leak. This test confirms a leak is present but does not locate it. Call a licensed plumber for a professional inspection to find the source.",
  },
  {
    question: "What causes hidden pipe leaks in Enterprise, NV homes?",
    answer:
      "The most common causes in Enterprise are hard water mineral corrosion inside copper supply lines that have been thinning since original construction in the late 1990s and early 2000s, caliche and expansive clay soil movement beneath slab foundations that stresses underground pipes and connections, closed-loop pressure cycling that fatigues pipe joints and supply line connections over time, and aging fixture and appliance supply connections that have reached the end of their recommended service life in homes now 20 to 25 years old.",
  },
  {
    question: "How does non-invasive leak detection work in Enterprise?",
    answer:
      "Non-invasive leak detection uses acoustic sensors that amplify the sound of pressurized water escaping from pipes through walls, floors, and underground. This allows the plumber to pinpoint the leak location without opening large sections of the home. Pressure testing confirms which line is losing pressure, and thermal imaging identifies temperature differences caused by hot water leaks. Together these methods locate hidden leaks precisely before any repair begins.",
  },
  {
    question:
      "Can a small hidden leak cause serious damage in my Enterprise home?",
    answer:
      "Yes. A small hidden leak inside a wall can promote mold growth within 24 to 48 hours and can damage wood framing, drywall, insulation, and flooring over weeks and months without any visible sign above the surface. An underground supply line leak can waste hundreds of gallons per month and create soil saturation conditions near the foundation. Early detection and repair limits damage and reduces total repair cost.",
  },
  {
    question:
      "Does Red Carpet Plumbing detect leaks in commercial properties in Enterprise?",
    answer:
      "Yes. Red Carpet Plumbing provides commercial leak detection services for businesses, commercial parks, and industrial properties throughout Enterprise and the Southwest Las Vegas area, including the 215 Beltway corridor. Call (702) 567-9172 for commercial leak detection service.",
  },
];

const HERO_SUBHEADING =
  "Hidden water leaks in Enterprise homes can cause serious damage long before they become visible. Red Carpet Plumbing locates leaks non-invasively using acoustic sensors, pressure testing, and thermal imaging, then makes targeted repairs without unnecessary demolition. Enterprise homes in Rhodes Ranch, Mountain's Edge, and surrounding communities built in the late 1990s and early 2000s are entering the first major service cycle for their copper supply lines. NV Contractor License #0048585A.";

const HERO_TRUST_ITEMS = [
  // FLAG: VERIFY rating before publishing.
  "4.8 Stars, 76 Google Reviews",
  "NV Licensed #0048585A",
  // FLAG: VERIFY "Over 40 years" before publishing.
  "Over 40 Years Serving the Las Vegas Valley",
  "Transparent Pricing, No Hidden Fees",
];

// 1b colored strip.
const LEAK_TRUST_STRIP = [
  "Non-Invasive Detection",
  "NV Licensed, #0048585A",
  // FLAG: source-site claim (emergency availability) — verify before final launch.
  "Emergency Leak Service",
  "Residential and Commercial",
];

// Section 2 — visible <ul> warning signs.
const WARNING_SIGNS = [
  "An unexplained increase in your water bill",
  "The sound of running water when all fixtures are off",
  "Warm or wet spots on floors or walls",
  "Discoloration or bubbling paint on walls or ceilings",
  "A persistent musty odor in part of the home",
  "Reduced water pressure with no other explanation",
  "Unexplained cracks in walls or flooring",
];

// Section 3 — what causes hidden pipe leaks (bold label + body). Four copper /
// first-service-cycle causes; no galvanized-pipe language.
const ENT_LEAK_CAUSES = [
  {
    label:
      "Hard water mineral corrosion in 20-25 year old copper supply lines",
    body: "Enterprise homes in Rhodes Ranch, Mountain's Edge, and surrounding communities were built primarily in the late 1990s and early 2000s. Their copper supply lines are now 20 to 25 years old and have been continuously exposed to Las Vegas Valley hard water since original construction. Las Vegas municipal water at 17 to 24 grains per gallon, approximately 280 parts per million of dissolved minerals, deposits calcium and magnesium scale inside copper pipe walls over time. This process thins the pipe walls from the inside out through a mechanism called pitting corrosion. As copper pipe walls thin, they become more vulnerable to pinhole leaks at stress points or where the pipe contacts other materials. Enterprise homes entering the 20-25 year range are seeing the first effects of this accumulation.",
  },
  {
    label: "Caliche and expansive clay soil movement beneath slab foundations",
    body: "Enterprise is built predominantly on concrete slab foundations, and the caliche and expansive clay soils beneath those slabs shift with seasonal temperature changes and infrequent rainfall throughout Clark County. This soil movement creates mechanical stress on supply lines embedded in and running beneath the slab, wearing through pipe walls at friction points and stressing pipe joints and connections. First-service-cycle copper pipes in Enterprise homes that have been subject to this soil movement for 20 to 25 years are at elevated risk of under-slab and slab-adjacent leaks.",
  },
  {
    label: "Closed-loop pressure cycling and supply line connection fatigue",
    body: "Most Enterprise homes operate on a closed-loop plumbing system due to backflow preventers at the street meter. Thermal expansion from water heating creates repeated pressure spikes in the closed system that stress pipe joints, supply line connections, and fixture shutoff valves. Over 20 to 25 years of pressure cycling, these connection points accumulate fatigue. Homes without properly sized thermal expansion tanks are particularly vulnerable. Supply line connection failures at toilets, dishwashers, and washing machines are common in Enterprise homes of this age range.",
  },
  {
    label: "Aging fixture and appliance connections",
    body: "In Enterprise homes now 20 to 25 years old, original supply line hoses and braided connections at toilets, dishwashers, refrigerators, and washing machines are approaching end of recommended service life. These connections typically last 5 to 10 years and are a common source of hidden leaks in first-service-cycle homes that have not had their original supply lines replaced.",
  },
];

// Section 4 — non-invasive detection methods (bold label + body).
const DETECTION_METHODS = [
  {
    label: "Acoustic Electronic Detection",
    body: "Electronic acoustic sensors amplify the sound of pressurized water escaping from pipes through walls, floors, and underground. This allows Red Carpet Plumbing to locate leaks precisely through finished surfaces without cutting or demolition.",
  },
  {
    label: "Pressure Testing",
    body: "Pressure testing isolates which section of the plumbing system is losing pressure, confirming an active leak and identifying which line is affected. This method works for both visible and hidden leaks throughout the home.",
  },
  {
    label: "Thermal Imaging",
    body: "Thermal imaging identifies temperature differences on wall, floor, and ceiling surfaces caused by water escaping from hot water supply lines. This is particularly useful for locating leaks from hot water lines inside wall cavities and beneath slab floors.",
  },
];

// Section 5 — leak detection and repair services (label + body, optional inline
// link). Items 4 (slab) and 5 (supply line) link built core service pages. Item 6
// carries the gas-line scope FLAG. Item 1 carries no link per the brief's
// internal-links table (the core leak page is linked once, in Section 2).
const LEAK_SERVICES: {
  label: string;
  body: string;
  link?: { pre: string; href: string; text: string; post: string };
}[] = [
  {
    label: "Electronic leak detection",
    body: "Using professional acoustic sensors, we locate hidden leaks in walls, floors, underground supply lines, and slab areas without opening large sections of your Enterprise home. Electronic detection pinpoints the leak location so repairs are targeted and precise.",
  },
  {
    label: "Wall and ceiling leak detection",
    body: "Corroded supply lines, failed connection fittings, and leaking drain lines inside wall and ceiling cavities can cause mold and structural damage before any visible surface sign. We locate wall and ceiling leaks using acoustic and moisture detection equipment.",
  },
  {
    label: "Underground supply line leak detection",
    body: "Underground supply line leaks increase water bills steadily without any visible interior sign. We use acoustic sensors and pressure testing to locate underground leaks in Enterprise copper supply lines and provide targeted repair or replacement recommendations.",
  },
  {
    label: "Slab leak detection",
    body: "Slab leaks are a meaningful risk for Enterprise homes now 20 to 25 years old with copper supply lines beneath slab foundations subject to caliche soil movement. Red Carpet Plumbing provides slab leak detection using acoustic sensors, thermal imaging, and pressure testing.",
    link: {
      pre: " See our ",
      href: "/slab-leak-detection-repair/",
      text: "slab leak detection and repair",
      post: " page for repair options.",
    },
  },
  {
    label: "Supply line and fixture connection repair",
    body: "We repair or replace failing supply line connections at fixtures and appliances throughout the home. For aging Enterprise homes where multiple connections are approaching end of service life, we explain all options before work begins.",
    link: {
      pre: " See our ",
      href: "/water-pipe-repair-replacement/",
      text: "water pipe repair and replacement",
      post: " page for related pipe repair services.",
    },
  },
  {
    // FLAG: verify gas line scope before publishing.
    label: "Gas line leak detection",
    body: "If you smell gas, leave the building immediately and call your gas utility. After the utility has assessed the situation, Red Carpet Plumbing can inspect and repair gas line leaks under NV License #0048585A.",
  },
];

// Section 6 — visible <ol>, HowTo schema source.
const LEAK_STEPS = [
  {
    name: "Gather information and identify symptoms",
    body: "We ask about the signs you have noticed, review the age and type of plumbing in your Enterprise home, and identify the most likely leak locations based on the home's construction vintage and symptoms before deploying detection equipment.",
  },
  {
    name: "Perform pressure testing and meter verification",
    body: "We isolate sections of the plumbing system and perform pressure tests to confirm where water loss is occurring. We verify the water meter reading with all water off to confirm active water loss.",
  },
  {
    name: "Use electronic detection equipment to locate the leak",
    body: "We deploy acoustic sensors, electronic detection equipment, and where appropriate thermal imaging to locate the precise source of the leak non-invasively. This process identifies the leak location before any disruption to your Enterprise home.",
  },
  {
    name: "Present repair options and complete the repair",
    body: "Once the leak is located, we explain the repair options, the scope of work, and the cost before starting. We make targeted repairs and retest the affected section before we leave.",
  },
];

// Section 7 — why choose (bulleted list). Three items carry FLAGs.
const WHY_CHOOSE = [
  "Local Las Vegas Valley plumbing company familiar with Enterprise's first-service-cycle housing stock, Rhodes Ranch and Mountain's Edge copper pipe conditions, and Clark County permit requirements",
  "Non-invasive leak detection equipment that locates leaks precisely before any repair work begins",
  // FLAG: VERIFY license number before publishing.
  "Licensed plumbers, NV License #0048585A",
  "Transparent pricing with no hidden fees",
  "Residential and commercial leak detection throughout Enterprise and Southwest Las Vegas",
  // FLAG: VERIFY "over 40 years" before publishing.
  "Over 40 years serving the Las Vegas Valley",
  // FLAG: VERIFY rating and review count before publishing.
  "4.8-star rating across 76 Google reviews",
];

// Section 7 — related services (built sibling routes).
const RELATED_SERVICES = [
  {
    href: "/enterprise/water-heater-repair-installation/",
    text: "Enterprise water heater repair and installation",
  },
  { href: "/enterprise/drain-cleaning/", text: "Enterprise drain cleaning" },
  {
    href: "/enterprise/emergency-plumbing/",
    text: "Enterprise emergency plumbing",
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
  name: "Leak Detection and Repair in Enterprise, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides non-invasive leak detection and repair in Enterprise, NV using acoustic sensors, pressure testing, and thermal imaging.",
  url: "https://redcarpetplumbing.com/enterprise/leak-detection-repair/",
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
      name: "Leak Detection and Repair in Enterprise",
      item: "https://redcarpetplumbing.com/enterprise/leak-detection-repair/",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Leak Detection and Repair in Enterprise, NV",
  serviceType: "Leak Detection and Repair",
  description:
    "Red Carpet Plumbing provides non-invasive leak detection and repair for homes and businesses in Enterprise, NV using acoustic sensors, pressure testing, and thermal imaging to locate hidden water leaks and provide targeted repairs.",
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
  name: "How Red Carpet Plumbing Handles Leak Detection in Enterprise",
  description:
    "The process Red Carpet Plumbing follows for non-invasive leak detection and repair in Enterprise, NV.",
  step: LEAK_STEPS.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.name,
    text: s.body,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: ENT_LEAK_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function EnterpriseLeakDetectionPage() {
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
            { label: "Leak Detection and Repair in Enterprise" },
          ]}
        />

        {/* SECTION 1: HERO */}
        <HeroSection
          headingLevel="h1"
          headline="Leak Detection and Repair in Enterprise, NV"
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
          ctaNote="Licensed plumbers. Non-invasive detection. Transparent pricing."
          formSlot={<QuoteFormPlaceholder title="Get Leak Detection Help" />}
          backgroundImage={{
            src: "/images/services/leak-detection-repair/hero.webp",
            alt: "Leak detection and repair in Enterprise, NV",
          }}
        />

        {/* SECTION 1b: TRUST STRIP */}
        <TrustStrip
          items={LEAK_TRUST_STRIP}
          ariaLabel="Why Enterprise customers choose Red Carpet Plumbing for leak detection"
        />

        {/* SECTION 2: WARNING SIGNS AND WATER METER TEST */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Warning Signs of a Hidden Water Leak in Enterprise
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                The following are the most common indicators of a hidden water
                leak in an Enterprise home. See our{" "}
                <Link
                  href="/leak-detection-repair/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  leak detection and repair services
                </Link>{" "}
                page for our full service overview.
              </p>
            </div>
            <div className="mt-8 rounded-2xl border-l-4 border-brand-primary bg-brand-surface-alt p-6 sm:p-8">
              <ul className="space-y-3">
                {WARNING_SIGNS.map((item) => (
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
            <p className="mt-8 text-base leading-7 text-brand-dark/80">
              If you notice one or more of these signs in your Enterprise home, a
              professional leak detection inspection can locate the source before
              further damage occurs. Call Red Carpet Plumbing at (702) 567-9172
              or{" "}
              <Link
                href="/contact/"
                className="font-semibold text-brand-primary hover:text-brand-primary-hover"
              >
                request service online
              </Link>
              .
            </p>

            <div className="mt-12">
              <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                The Water Meter Test
              </h3>
              <p className="mt-3 text-base leading-7 text-brand-dark/80">
                Turn off every water fixture and appliance in the home. Find your
                water meter near the street in a ground-level box and check
                whether the dial or digital display is still moving. If the meter
                continues to advance with all water off, water is being used
                somewhere in your system. This confirms a leak is present but does
                not locate it. Call a plumber for a professional inspection to
                find the source.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: WHAT CAUSES HIDDEN PIPE LEAKS */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    What Causes Hidden Pipe Leaks in Enterprise, NV Homes
                  </h2>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-10">
                <ul className="space-y-5">
                  {ENT_LEAK_CAUSES.map((c) => (
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

        {/* SECTION 4: HOW NON-INVASIVE LEAK DETECTION WORKS */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                How Non-Invasive Leak Detection Works in Enterprise
              </h2>
            </div>
            <ul className="mt-10 space-y-5">
              {DETECTION_METHODS.map((m) => (
                <li
                  key={m.label}
                  className="rounded-2xl bg-brand-surface-alt p-6 ring-1 ring-brand-surface-alt"
                >
                  <p className="text-base leading-7 text-brand-dark/80">
                    <strong className="font-semibold text-brand-dark">
                      {m.label}.
                    </strong>{" "}
                    {m.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 5: LEAK DETECTION AND REPAIR SERVICES */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Leak Detection and Repair Services We Provide in Enterprise
              </h2>
            </div>
            <ul className="mt-10 space-y-5">
              {LEAK_SERVICES.map((s) => (
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
                        {s.link.pre}
                        <Link
                          href={s.link.href}
                          className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                        >
                          {s.link.text}
                        </Link>
                        {s.link.post}
                      </>
                    ) : null}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 6: OUR LEAK DETECTION PROCESS (HowTo) */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Our Leak Detection Process in Enterprise
                  </h2>
                </div>
              </SectionRevealItem>
              <SectionRevealItem className="mt-12">
                <ol className="space-y-8">
                  {LEAK_STEPS.map((step, index) => (
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
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Why Enterprise Homeowners Choose Red Carpet Plumbing for Leak
                Detection
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
                      className="inline-flex rounded-lg bg-white px-4 py-2 text-sm font-semibold text-brand-primary shadow-sm ring-1 ring-brand-surface-alt hover:text-brand-primary-hover"
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
              including water heater repair, drain cleaning, slab leak detection,
              and emergency plumbing. We also serve communities near Enterprise
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
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Enterprise Leak Detection Coverage Areas
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing provides non-invasive leak detection and
                repair throughout Enterprise and the Southwest Las Vegas area.
              </p>
            </div>
            <ul className="mt-8 flex flex-wrap gap-3">
              {ENTERPRISE_AREAS.map((area) => (
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
                Leak Detection FAQs for Enterprise Homeowners
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {ENT_LEAK_FAQS.map((faq) => (
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
          headline={<>Suspect a Hidden Leak<br />in Enterprise? Call Red Carpet Plumbing.</>}
          body="Red Carpet Plumbing provides non-invasive leak detection and repair throughout Enterprise, NV, including Rhodes Ranch, Mountain's Edge, and the Southwest Las Vegas area. Call (702) 567-9172 or request service online."
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
