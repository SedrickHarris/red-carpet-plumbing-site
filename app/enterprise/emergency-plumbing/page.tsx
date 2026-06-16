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

// FLAG: VERIFY before publishing — license #0048585A, "over 40 years", the
// 4.8/76 rating, the gas-line scope, and every emergency-availability statement
// are source-site/project claims. Each visible instance carries an inline FLAG
// comment.
//
// SCHEMA NOTE: Enterprise is an unincorporated Clark County community (not an
// incorporated city), so Service.areaServed uses Place -> AdministrativeArea
// (Clark County) -> State (Nevada), NOT City. This matches the Spring Valley,
// Paradise, and Summerlin unincorporated siblings. No AggregateRating/Review. No
// sameAs. Provider Plumber (name, url, telephone). 5 separate JsonLd blocks.
//
// CONTENT NOTE: The Enterprise emergency differentiator is the first-service
// cycle of 20-to-25-year-old homes (hard water wear, original water heaters, and
// pressure regulators reaching end of life). There is intentionally NO
// galvanized-pipe language on this page; galvanized supply lines are the Spring
// Valley story, not Enterprise's newer construction.

export const metadata: Metadata = {
  title: "Emergency Plumbing in Enterprise, NV | Red Carpet Plumbing",
  description:
    "Emergency plumbing in Enterprise, NV. Burst pipes, slab leaks, sewer backups, water heater failures. Red Carpet Plumbing serves Enterprise, Rhodes Ranch, Mountain's Edge, and Southwest Las Vegas. Licensed plumbers. Call (702) 567-9172.",
  alternates: {
    canonical: "https://redcarpetplumbing.com/enterprise/emergency-plumbing/",
  },
  openGraph: {
    title: "Emergency Plumbing in Enterprise, NV | Red Carpet Plumbing",
    description:
      "Emergency plumbing in Enterprise, NV. Burst pipes, slab leaks, sewer backups, water heater failures. Licensed plumbers. Call (702) 567-9172.",
    url: "https://redcarpetplumbing.com/enterprise/emergency-plumbing/",
    siteName: "Red Carpet Plumbing",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

// ---------------------------------------------------------------------------
// FAQ source of truth. The visible FAQ section AND the FAQPage JSON-LD schema
// both derive from this single array, guaranteeing a character-for-character
// match. FLAG comments live in this source only and are NOT part of the
// visible/schema answer text.
// ---------------------------------------------------------------------------
const ENT_EMERGENCY_FAQS = [
  {
    question:
      "What should I do while waiting for an emergency plumber in Enterprise?",
    answer:
      "Shut off the water at the nearest shutoff valve or at your main supply if a pipe has burst or a major leak is active. If you suspect a gas issue, leave the building and call your gas company. Do not use electrical switches near standing water. Call Red Carpet Plumbing at (702) 567-9172 to speak with a plumber while you wait.",
  },
  // FLAG: source-site claim (emergency availability) in this answer — verify before final launch.
  {
    question: "Is there a 24-hour plumber in Enterprise, NV?",
    answer:
      "Red Carpet Plumbing provides emergency plumbing service in Enterprise. Call (702) 567-9172 to reach our team.",
  },
  {
    question: "Why are plumbing emergencies common in Enterprise homes now?",
    answer:
      "Many Enterprise homes in Rhodes Ranch, Mountain's Edge, and surrounding communities were built in the late 1990s and early 2000s and are now 20 to 25 years old. This is the age range when original water heaters, pressure regulators, and supply line connections begin reaching end of service life under Las Vegas hard water conditions. Tank water heaters in Las Vegas typically last 8 to 12 years due to hard water sediment buildup and anode rod depletion. Original pressure regulators installed during construction typically last 10 to 15 years. Homeowners in Enterprise who have not yet replaced these original components are at elevated risk for plumbing emergencies.",
  },
  {
    question: "What is Enterprise, NV, and who handles plumbing permits there?",
    answer:
      "Enterprise is an unincorporated community in Clark County, Nevada, located in the southwest corner of the Las Vegas Valley. It is governed by Clark County rather than the City of Las Vegas. Plumbing permits and inspections in Enterprise are handled through Clark County. Red Carpet Plumbing holds NV License #0048585A and works within the applicable Clark County permit process.",
  },
  {
    question: "How much does emergency plumbing cost in Enterprise?",
    answer:
      "Emergency plumbing costs vary based on the type of repair, the time of service, and the materials needed. Red Carpet Plumbing provides transparent pricing before work begins. Call (702) 567-9172 for a quote.",
  },
  {
    question:
      "Does Red Carpet Plumbing provide emergency plumbing for commercial properties in Enterprise?",
    answer:
      "Yes. Red Carpet Plumbing provides emergency plumbing service for both residential and commercial properties throughout Enterprise and the Southwest Las Vegas area, including commercial parks and industrial properties along the 215 Beltway corridor. Call (702) 567-9172 for commercial emergency response.",
  },
];

const HERO_SUBHEADING =
  "Red Carpet Plumbing provides emergency plumbing service for homes and businesses throughout Enterprise, Nevada and the Southwest Las Vegas area. Whether you are dealing with a burst pipe, water heater failure, slab leak, sewer backup, or gas line issue, our licensed plumbers are ready to respond. Enterprise is an unincorporated Clark County community and our Nevada Contractor License #0048585A covers plumbing work throughout Clark County. Call (702) 567-9172 now.";

const HERO_TRUST_ITEMS = [
  "NV Licensed Plumbers, #0048585A",
  // FLAG: source-site claim (emergency availability) — verify before final launch.
  "Emergency Plumbing Service Available",
  "Serving Enterprise and Southwest Las Vegas",
  "Transparent Pricing, No Hidden Fees",
];

// Section 3 — common emergency problems (bold label + body). Item 2 (slab) links
// the built core /slab-leak-detection-repair/ page. Item 6 (gas) carries a scope
// FLAG. No galvanized-pipe language on this page (Enterprise is newer
// construction).
const COMMON_PROBLEMS: {
  label: string;
  body: string;
  link?: { pre: string; href: string; text: string; post: string };
}[] = [
  {
    label: "Water heater failures in first-service-cycle homes",
    body: "Homes built in Rhodes Ranch, Mountain's Edge, and surrounding Enterprise communities in the late 1990s through the mid-2000s are now 20 to 25 years old. Many of the original water heaters installed in these homes have reached or exceeded their expected service life under Las Vegas hard water conditions. Tank water heaters in Las Vegas typically last 8 to 12 years due to accelerated anode rod depletion and sediment buildup from hard water. Original water heaters still in service in Enterprise homes of this age are at elevated risk of tank failure. Sudden loss of hot water, pooling water around the water heater, or unusual rumbling during heating cycles are signs of a water heater emergency.",
  },
  {
    label: "Slab leaks in Enterprise slab-foundation homes",
    body: "Enterprise is built predominantly on concrete slab foundations, and the caliche and expansive clay soils beneath those slabs shift with temperature changes and seasonal rainfall throughout Clark County. This soil movement stresses copper supply pipes embedded in and running beneath the slab over time. Combined with Las Vegas hard water mineral corrosion thinning copper pipe walls in homes now 20 to 25 years old, slab leaks are a meaningful emergency risk for Enterprise homeowners. Signs of a slab leak include warm spots on floors, unexplained increases in water bills, and the sound of running water when all fixtures are off.",
    link: {
      pre: " For more information, see our ",
      href: "/slab-leak-detection-repair/",
      text: "slab leak detection and repair",
      post: " page.",
    },
  },
  {
    label: "Pressure regulator failures causing supply line stress",
    body: "Pressure regulators in Enterprise homes installed during the late 1990s and early 2000s construction phase are reaching the end of their typical service life of 10 to 15 years. A failing pressure regulator can allow water pressure to spike well above normal operating levels. High pressure places stress on supply line connections, fixture shutoff valves, and water heater pressure relief valves. Sudden high-pressure events can cause supply line failures at the most vulnerable points in the system. If fixtures in your Enterprise home are running louder than normal, or if you notice reduced pressure in some areas and normal pressure in others, a pressure regulator evaluation is warranted.",
  },
  {
    label: "Burst pipes and supply line failures",
    body: "Supply line failures at fixture connections, under sinks, or along wall runs can release significant water in a short time. In Enterprise homes now 20 to 25 years old, original supply line hoses and braided connections at toilets, dishwashers, and washing machines are at the age where failures begin occurring. A burst supply line under a sink or behind a wall should be treated as a plumbing emergency requiring immediate shutoff and repair.",
  },
  {
    label: "Sewer line backups",
    body: "Sewer backups that cause sewage to rise into tubs, drains, or toilets require immediate professional response. In Enterprise, newly established tree root systems in maturing landscaping can begin intruding into sewer laterals in homes now 20 to 25 years old, and debris accumulation in lines that have never been cleaned is a common cause of first-time backups in this community.",
  },
  {
    // FLAG: verify gas line scope before publishing.
    label: "Gas line issues",
    body: "If you smell gas in your Enterprise home, leave the building immediately and call your gas company. After the utility has assessed the situation, Red Carpet Plumbing can inspect and repair gas line issues under NV License #0048585A.",
  },
];

// Section 4 — emergency services list. Items compose as before + optional link +
// after so the inline links (water heater, sewer, drain cleaning) read naturally
// without em dashes. The gas item carries a scope FLAG.
const EMERGENCY_SERVICES: {
  before?: string;
  link?: { href: string; text: string };
  after?: string;
}[] = [
  { before: "Burst pipe detection and repair" },
  {
    before: "Water heater emergency repair and replacement. See our ",
    link: {
      href: "/water-heater-repair-installation/",
      text: "water heater repair and installation",
    },
    after: " page.",
  },
  { before: "Slab leak detection and emergency repair" },
  { before: "Pressure regulator assessment and replacement" },
  {
    before:
      "Supply line failure repair at fixtures, appliances, and wall runs",
  },
  {
    before: "Sewer backup clearing and ",
    link: { href: "/sewer-line-services/", text: "sewer line services" },
  },
  {
    link: { href: "/drain-cleaning/", text: "Drain cleaning" },
    after: " for blocked or slow drain emergencies",
  },
  { before: "Main water line repair" },
  { before: "Fixture leak containment and repair" },
  // FLAG: verify gas line scope before publishing.
  {
    before:
      "Gas line emergency response (leave building and call gas company first)",
  },
  { before: "Commercial emergency plumbing response throughout Enterprise" },
];

// Section 5 — what to do during a plumbing emergency (bold label + body).
const WHAT_TO_DO = [
  {
    label: "Shut off the water",
    body: "If a pipe has burst or a major leak is active, shut off the water at the nearest fixture shutoff valve or at your home's main supply shutoff. The main shutoff is typically near the water meter at the street or where the main supply enters the home.",
  },
  {
    label: "If you smell gas, leave immediately",
    body: "Do not use any electrical switches, open flames, or anything that could cause a spark. Leave the building, move away from the property, and call your gas company from a safe location. Call Red Carpet Plumbing after the gas company has assessed the situation.",
  },
  {
    label: "Do not use electricity near standing water",
    body: "If water has entered a room with electrical outlets, panels, or appliances, do not enter or use electrical switches until the power has been shut off at the breaker.",
  },
  {
    label: "Call Red Carpet Plumbing",
    body: "Call (702) 567-9172 to reach a plumber. Describe what you are seeing so we can advise you on immediate steps while our team responds.",
  },
];

// Section 6 — visible <ol>, HowTo schema source.
const EMERGENCY_STEPS = [
  {
    name: "Call and assess",
    body: "When you call (702) 567-9172, we gather information about what you are experiencing and advise you on immediate protective steps, including water shutoff and safety precautions, while our team prepares to respond.",
  },
  {
    name: "Diagnose on arrival",
    body: "We inspect the situation, identify the source and scope of the problem, and give you a clear assessment and pricing before any repair work begins.",
  },
  {
    name: "Complete the repair",
    body: "We repair the immediate problem completely, whether that is a water heater failure, a burst supply line, a slab leak, a sewer backup, or a pressure regulator issue, and verify the repair is holding before we leave.",
  },
  {
    name: "Follow-up assessment",
    body: "We advise you on whether the emergency was an isolated event or a sign of a broader system issue. For Enterprise homes now 20 to 25 years old, a single supply line failure or water heater emergency can be the first indicator that other original components are approaching end of service life. We explain what we found and what, if anything, warrants follow-up attention.",
  },
];

// Section 7 — why choose (bulleted list). Multiple items carry FLAGs.
const WHY_CHOOSE = [
  "Local Las Vegas Valley plumbing company familiar with Enterprise's newer construction, Rhodes Ranch and Mountain's Edge community plumbing conditions, and Clark County permit requirements",
  // FLAG: VERIFY license number before publishing.
  "Licensed plumbers, NV License #0048585A",
  // FLAG: source-site claim (emergency availability) — verify before final launch.
  "Emergency plumbing service available",
  "Transparent pricing with no hidden fees",
  "Residential and commercial emergency plumbing throughout Enterprise and the Southwest Las Vegas area",
  // FLAG: VERIFY "over 40 years" before publishing.
  "Over 40 years serving the Las Vegas Valley",
  // FLAG: VERIFY rating and review count before publishing.
  "4.8-star rating across 76 Google reviews",
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
  name: "Emergency Plumbing in Enterprise, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides emergency plumbing service in Enterprise, NV. Burst pipes, slab leaks, sewer backups, water heater failures. Licensed plumbers.",
  url: "https://redcarpetplumbing.com/enterprise/emergency-plumbing/",
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
      name: "Emergency Plumbing in Enterprise",
      item: "https://redcarpetplumbing.com/enterprise/emergency-plumbing/",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Emergency Plumbing in Enterprise, NV",
  serviceType: "Emergency Plumbing",
  description:
    "Red Carpet Plumbing provides emergency plumbing service for homes and businesses in Enterprise, NV, including burst pipe repair, water heater emergency service, slab leak detection and repair, pressure regulator replacement, sewer backup clearing, and commercial emergency plumbing response.",
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
  name: "How to Get Emergency Plumbing Help in Enterprise NV",
  description:
    "The process Red Carpet Plumbing follows for emergency plumbing response in Enterprise, NV.",
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
  mainEntity: ENT_EMERGENCY_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function EnterpriseEmergencyPlumbingPage() {
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
            { label: "Emergency Plumbing in Enterprise" },
          ]}
        />

        {/* SECTION 1: HERO */}
        <HeroSection
          headingLevel="h1"
          headline="Emergency Plumbing in Enterprise, NV"
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
          ctaNote="Licensed plumbers. Transparent pricing. No hidden fees."
          formSlot={<QuoteFormPlaceholder title="Get Emergency Plumbing Help" />}
          backgroundImage={{
            src: "/images/services/emergency-plumbing/hero.webp",
            alt: "Emergency plumbing service in Enterprise, NV",
          }}
        />

        {/* SECTION 2: DIRECT ANSWER */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="rounded-2xl border-l-4 border-brand-primary bg-brand-surface-alt p-6 sm:p-8">
              <h2 className="text-2xl font-bold tracking-tight text-brand-dark sm:text-3xl">
                Emergency Plumbing Services in Enterprise
              </h2>
              {/* FLAG: "over 40 years" claim below — verify before publishing. */}
              <p className="mt-4 text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing is a local, family-owned plumbing company
                serving Enterprise, Nevada and the Las Vegas Valley. We hold
                Nevada Contractor License #0048585A under the C-1 Plumbing and
                Heating classification. We have been serving the Las Vegas
                Valley, including Enterprise and the Southwest Las Vegas area, for
                over 40 years. Our licensed plumbers handle residential and
                commercial emergency plumbing for homeowners, businesses, and
                commercial properties throughout Enterprise.
              </p>
              <p className="mt-4 text-base leading-7 text-brand-dark/80">
                Enterprise is one of the fastest-growing communities in Clark
                County, with master-planned residential development across Rhodes
                Ranch, Mountain&apos;s Edge, and newer communities along the 215
                Beltway. Homes built in the late 1990s and early 2000s in these
                communities are now 20 to 25 years old and entering their first
                major plumbing service cycle. Las Vegas hard water at 17 to 24
                grains per gallon accelerates water heater and fixture wear, and
                original pressure regulators in these homes often reach end of
                service life around this age. For emergency plumbing information
                across the Las Vegas Valley, see our{" "}
                <Link
                  href="/emergency-plumbing/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  emergency plumbing services
                </Link>{" "}
                page.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: COMMON EMERGENCY PROBLEMS */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10 lg:pb-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Common Emergency Plumbing Problems in Enterprise
                  </h2>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-10">
                <ul className="space-y-5">
                  {COMMON_PROBLEMS.map((c) => (
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
                            {c.link.pre}
                            <Link
                              href={c.link.href}
                              className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                            >
                              {c.link.text}
                            </Link>
                            {c.link.post}
                          </>
                        ) : null}
                      </p>
                    </li>
                  ))}
                </ul>
              </SectionRevealItem>
            </SectionReveal>
          </div>
        </section>

        {/* SECTION 4: EMERGENCY SERVICES WE PROVIDE */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Emergency Plumbing Services We Provide in Enterprise
              </h2>
            </div>
            <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {EMERGENCY_SERVICES.map((s, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckMark />
                  <span className="text-base leading-7 text-brand-dark/85">
                    {s.before}
                    {s.link ? (
                      <Link
                        href={s.link.href}
                        className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                      >
                        {s.link.text}
                      </Link>
                    ) : null}
                    {s.after}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 5: WHAT TO DO DURING A PLUMBING EMERGENCY */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                What to Do During a Plumbing Emergency in Enterprise
              </h2>
            </div>
            <ul className="mt-10 space-y-5">
              {WHAT_TO_DO.map((w) => (
                <li
                  key={w.label}
                  className="rounded-2xl bg-brand-surface-alt p-6 ring-1 ring-brand-surface-alt"
                >
                  <p className="text-base leading-7 text-brand-dark/80">
                    <strong className="font-semibold text-brand-dark">
                      {w.label}.
                    </strong>{" "}
                    {w.body}
                  </p>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <a
                href="tel:+17025679172"
                className="inline-flex min-h-14 items-center justify-center rounded-lg bg-brand-primary px-8 text-lg font-semibold text-white shadow-sm hover:bg-brand-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary motion-safe:transition-colors motion-safe:active:scale-[0.97]"
              >
                Call (702) 567-9172
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 6: OUR EMERGENCY PLUMBING PROCESS (HowTo) */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Our Emergency Plumbing Process in Enterprise
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

        {/* SECTION 7: WHY CHOOSE */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Why Enterprise Homeowners and Businesses Choose Red Carpet
                Plumbing
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
            <p className="mt-8 text-base leading-7 text-brand-dark/80">
              Red Carpet Plumbing provides full{" "}
              <Link
                href="/enterprise-plumbing-services/"
                className="font-semibold text-brand-primary hover:text-brand-primary-hover"
              >
                Enterprise plumbing services
              </Link>{" "}
              including drain cleaning, water heater repair, slab leak detection,
              and re-piping. We also serve communities near Enterprise including{" "}
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
                Enterprise Emergency Plumbing Coverage Areas
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing provides emergency plumbing services
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
              For emergency plumbing service across the Las Vegas Valley, see our{" "}
              <Link
                href="/emergency-plumbing/"
                className="font-semibold text-brand-primary hover:text-brand-primary-hover"
              >
                emergency plumbing services
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
                Emergency Plumbing FAQs for Enterprise Homeowners
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {ENT_EMERGENCY_FAQS.map((faq) => (
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
          headline={<>Emergency Plumbing<br />in Enterprise, NV? Call Red Carpet Plumbing.</>}
          body="Red Carpet Plumbing provides emergency plumbing service throughout Enterprise, NV, including Rhodes Ranch, Mountain's Edge, and the Southwest Las Vegas area. Call (702) 567-9172 or request service online."
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
