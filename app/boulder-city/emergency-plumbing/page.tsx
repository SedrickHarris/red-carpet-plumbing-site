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

// FLAG: VERIFY before publishing — license #0048585A, emergency-service
// availability, and transparent-pricing are source-site claims shown on this
// page. Each carries an inline FLAG where it appears.
//
// SCHEMA NOTE: Boulder City IS an incorporated city (not an unincorporated
// Clark County community), so Service.areaServed uses City + containedInPlace
// State (Nevada), matching the Henderson and North Las Vegas emergency
// siblings. Do NOT use Place/AdministrativeArea here. No AggregateRating/
// Review. No sameAs Wikidata IDs on this service-location page. No
// hasCredential. Provider Plumber (name, url, telephone). 5 separate JsonLd
// blocks. HowTo included because Section 4 renders the matching visible <ol>.
//
// CONTENT NOTE: The Boulder City emergency story is the oldest residential
// plumbing in the region — galvanized steel supply lines (1930s-1960s Hoover
// Dam-era homes) now 60-90 years old — plus Lake Mead hard water and the
// Boulder City Building Department as the independent permit authority. This is
// distinct from the first-service-cycle copper framing used for newer
// communities.

export const metadata: Metadata = {
  title: "Emergency Plumbing in Boulder City, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides emergency plumbing service in Boulder City, NV. Burst pipes, galvanized pipe failures, sewer backups, water heater failures, and slab leaks in historic and newer homes. Licensed plumbers. Call (702) 567-9172.",
  alternates: {
    canonical: "https://redcarpetplumbing.com/boulder-city/emergency-plumbing/",
  },
  openGraph: {
    title: "Emergency Plumbing in Boulder City, NV | Red Carpet Plumbing",
    description:
      "Emergency plumbing in Boulder City from licensed local plumbers. Galvanized pipe failures, burst pipes, sewer backups, water heater failures. Historic and newer homes. Call Red Carpet Plumbing.",
    url: "https://redcarpetplumbing.com/boulder-city/emergency-plumbing/",
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
const BC_EMERGENCY_FAQS = [
  {
    question:
      "What should I do while waiting for an emergency plumber in Boulder City?",
    answer:
      "Shut off the water at the nearest shutoff valve or at your main supply if a pipe has burst or a major leak is active. If you suspect a gas issue, leave the building and call your gas company. Do not use electrical switches near standing water. Call Red Carpet Plumbing at (702) 567-9172 to speak with a plumber while you wait.",
  },
  // FLAG: source-site claim (emergency availability) in this answer — verify before final launch.
  {
    question: "Is there a 24-hour plumber in Boulder City, NV?",
    answer:
      "Red Carpet Plumbing provides emergency plumbing service in Boulder City. Call (702) 567-9172 to reach our team.",
  },
  {
    question:
      "Why are plumbing emergencies more common in older Boulder City homes?",
    answer:
      "Boulder City was built in the early 1930s to house Hoover Dam workers and has some of the oldest residential housing in the Las Vegas region. Many homes in the historic downtown and surrounding neighborhoods were built between the 1930s and 1960s with galvanized steel supply lines that are now 60 to 90 years old. Galvanized steel corrodes from the inside out under Las Vegas Valley hard water conditions and can fail with little warning, making it a leading cause of plumbing emergencies in older Boulder City homes.",
  },
  {
    question: "Who handles plumbing permits in Boulder City?",
    answer:
      "Boulder City is an incorporated city with its own building department. Plumbing permits in Boulder City are processed through the Boulder City Building Department, not Clark County. Red Carpet Plumbing holds Nevada Contractor License #0048585A and works within the Boulder City permit process for projects that require permits.",
  },
  {
    question: "How much does emergency plumbing cost in Boulder City?",
    answer:
      "Emergency plumbing costs vary based on the type of repair, the time of service, and the materials needed. Red Carpet Plumbing provides transparent pricing before work begins. Call (702) 567-9172 for a quote.",
  },
  {
    question:
      "Does Red Carpet Plumbing serve all Boulder City neighborhoods for emergency plumbing?",
    answer:
      "Yes. Red Carpet Plumbing provides emergency plumbing service throughout Boulder City including historic downtown, the King Street and Nevada Way corridors, and newer Boulder City neighborhoods. Call (702) 567-9172 to confirm coverage for your address.",
  },
];

const HERO_SUBHEADING =
  "Red Carpet Plumbing provides emergency plumbing service for homes and businesses in Boulder City, Nevada. Whether you are dealing with a burst pipe, galvanized line failure, sewer backup, water heater failure, or slab leak, our licensed plumbers are ready to help. Call (702) 567-9172 to reach a plumber now. Nevada Contractor License #0048585A, C-1 Plumbing and Heating.";

const TRUST_STRIP_ITEMS = [
  "NV Licensed Plumbers, #0048585A",
  // FLAG: source-site claim — verify before final launch.
  "Emergency Plumbing Service Available",
  "Serving Boulder City and the Las Vegas Valley",
  "Transparent Pricing, No Hidden Fees",
];

// Section 3 — common emergency problems (bold label + body). Galvanized pipe
// failure leads because it is the Boulder City-specific high-priority emergency.
// The slab-leak block carries an inline link to the built core slab-leak page;
// the gas-line block carries the brief's verify FLAG.
const BC_EMERGENCY_PROBLEMS: {
  label: string;
  body: string;
  link?: { pre: string; href: string; text: string; post: string };
}[] = [
  {
    label: "Galvanized pipe failures in historic homes",
    body: "Homes in Boulder City's historic downtown and original neighborhoods were built from the 1930s through the 1960s, many with galvanized steel supply lines. Galvanized pipe corrodes from the inside out over decades of hard water exposure. The corrosion process narrows the pipe interior, reducing water pressure and water quality over time, until the pipe wall fails and releases water inside walls or ceilings. Galvanized pipe failure can be sudden and release significant water, making it one of the most common plumbing emergencies in older Boulder City homes.",
  },
  {
    label: "Burst pipes and water line breaks",
    body: "Aging pipe materials, hard water mineral buildup, and temperature cycling can cause supply lines to crack or burst. In Boulder City's historic homes, pipes that have been under stress for 60 to 90 years are at elevated risk of sudden failure. Shut off the water at your main supply valve and call Red Carpet Plumbing at (702) 567-9172 immediately.",
  },
  {
    label: "Slab leaks",
    body: "Boulder City homes are built on concrete slab foundations, the same as the rest of the Las Vegas Valley. Hard water mineral corrosion, caliche soil movement, and aging pipe materials can cause under-slab supply lines to leak. Slab leaks in older Boulder City homes may involve pipe materials that are 60 or more years old. Signs include warm spots on the floor, unexplained increases in the water bill, and the sound of running water when all fixtures are off.",
    link: {
      pre: " See our ",
      href: "/slab-leak-detection-repair/",
      text: "slab leak detection and repair",
      post: " page for details.",
    },
  },
  {
    label: "Sewer line backups",
    body: "Sewage backing up into drains, toilets, or tubs is a health hazard and requires immediate service. Boulder City's older sewer laterals can accumulate root intrusion and debris over decades, particularly in properties with mature trees planted near original lateral lines. Do not use any drains or water fixtures during a sewer backup.",
  },
  {
    label: "Water heater failures",
    body: "Sudden loss of hot water, leaking tanks, or unusual noises from a water heater signal an emergency requiring prompt repair or replacement. Las Vegas Valley hard water from the Lake Mead supply accelerates sediment accumulation inside water heater tanks, shortening service life. In Boulder City homes where original water heaters have not been replaced, failure risk is elevated.",
  },
  {
    label: "Gas line emergencies",
    // FLAG: verify gas line scope before publishing.
    body: "If you smell gas in your Boulder City home, leave the building immediately and call your gas utility. Do not use electrical switches, open flames, or phones inside the building. After the area is declared safe, call Red Carpet Plumbing at (702) 567-9172. Red Carpet Plumbing holds NV License #0048585A, C-1 Plumbing and Heating, which covers gas line work.",
  },
];

// Section 4 — visible <ol>, HowTo schema source.
const EMERGENCY_STEPS = [
  {
    name: "Shut Off the Water Supply",
    body: "For a burst pipe, major leak, or overflowing fixture, shut off the water at the nearest shutoff valve or at the main supply to your home. In Boulder City, the main shutoff valve is typically located in a ground-level box near the street or at the front of the property.",
  },
  {
    name: "For Gas Issues, Evacuate and Call the Utility",
    body: "If you smell gas, leave the building immediately without using any electrical switches or open flames. Call your gas utility from outside. Do not re-enter until the area has been declared safe. Then call Red Carpet Plumbing at (702) 567-9172 for gas line inspection and repair.",
  },
  {
    name: "Limit Secondary Damage",
    body: "Move belongings away from the affected area. Place towels or containers to collect dripping water if safe to do so. Do not use electrical switches or appliances near standing water.",
  },
  {
    name: "Call Red Carpet Plumbing",
    body: "Call (702) 567-9172 to reach Red Carpet Plumbing. Describe the situation and location. Our licensed plumbers serve Boulder City and the Las Vegas Valley.",
  },
  {
    name: "Document the Damage",
    body: "Take photos of any visible damage, standing water, or affected areas before cleanup begins. Documentation is useful for insurance purposes and for the plumber's assessment on arrival.",
  },
];

// Section 6 — related services. Built items render as <Link>; built:false items
// render as plain text with the TODO-BATCH-6 comment inline (no anchor tag).
const RELATED_SERVICES = [
  {
    label: "Boulder City Plumbing Services",
    href: "/boulder-city-plumbing-services/",
    built: true,
  },
  {
    // TODO-BATCH-6 ACTIVATED: /boulder-city/drain-cleaning/ is built and
    // QA-passed; this item now renders as a live link.
    label: "Drain Cleaning in Boulder City",
    href: "/boulder-city/drain-cleaning/",
    built: true,
  },
  {
    // TODO-BATCH-6 ACTIVATED: /boulder-city/water-heater-repair-installation/ is
    // built and QA-passed; this item now renders as a live link.
    label: "Water Heater Repair in Boulder City",
    href: "/boulder-city/water-heater-repair-installation/",
    built: true,
  },
  {
    label: "Slab Leak Detection and Repair",
    href: "/slab-leak-detection-repair/",
    built: true,
  },
  {
    label: "Emergency Plumbing Services",
    href: "/emergency-plumbing/",
    built: true,
  },
];

// ---------------------------------------------------------------------------
// JSON-LD payloads. Boulder City IS incorporated, so Service.areaServed uses
// City + containedInPlace State (Nevada). Do NOT use Place/AdministrativeArea.
// ---------------------------------------------------------------------------
const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Emergency Plumbing in Boulder City, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides emergency plumbing service in Boulder City, NV. Burst pipes, galvanized pipe failures, sewer backups, water heater failures, and slab leaks. Licensed plumbers.",
  url: "https://redcarpetplumbing.com/boulder-city/emergency-plumbing/",
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
      name: "Emergency Plumbing in Boulder City",
      item: "https://redcarpetplumbing.com/boulder-city/emergency-plumbing/",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Emergency Plumbing in Boulder City, NV",
  serviceType: "Emergency Plumbing",
  description:
    "Red Carpet Plumbing provides emergency plumbing service for homes and businesses in Boulder City, NV, including burst pipes, galvanized pipe failures, sewer backups, water heater failures, and slab leaks.",
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

// HowTo schema included because Section 4 renders the matching visible
// step-by-step process (titles + body) on the page.
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "What to Do When a Plumbing Emergency Occurs in Boulder City",
  description:
    "Steps to take during a plumbing emergency in Boulder City, NV before and while waiting for Red Carpet Plumbing to arrive.",
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
  mainEntity: BC_EMERGENCY_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function BoulderCityEmergencyPlumbingPage() {
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
            { label: "Emergency Plumbing in Boulder City" },
          ]}
        />

        {/* SECTION 1: HERO */}
        <HeroSection
          headingLevel="h1"
          headline="Emergency Plumbing in Boulder City, NV"
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
          formSlot={<QuoteFormPlaceholder title="Get Emergency Plumbing Help" />}
          backgroundImage={{
            src: "/images/services/emergency-plumbing/hero.webp",
            alt: "emergency plumbing service in Boulder City, NV",
          }}
        />

        {/* SECTION 2: DIRECT ANSWER BLOCK */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Emergency Plumbing Service in Boulder City
              </h2>
              <div className="mt-6 space-y-6 text-lg leading-8 text-brand-dark/80">
                <p>
                  Red Carpet Plumbing is a local, family-owned plumbing company
                  serving Boulder City, Nevada. Boulder City is an incorporated
                  city in Clark County with some of the oldest residential
                  housing in the Las Vegas region, including homes built in the
                  1930s and 1940s that still have original plumbing
                  infrastructure. Our Nevada Contractor License #0048585A covers
                  plumbing work throughout Nevada including Boulder City.
                </p>
                <p>
                  When a plumbing emergency occurs in a Boulder City home, the age
                  of the plumbing system is often a factor. Galvanized steel
                  supply lines in historic Boulder City homes can fail with little
                  warning after decades of hard water exposure. Slab leaks, sewer
                  backups, water heater failures, and burst pipes are all common
                  emergency situations we respond to throughout Boulder City. For
                  our full range of plumbing services in Boulder City, visit our{" "}
                  <Link
                    href="/boulder-city-plumbing-services/"
                    className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                  >
                    Boulder City plumbing services
                  </Link>{" "}
                  page. For information on our broader emergency plumbing
                  coverage, see our{" "}
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
          </div>
        </section>

        {/* SECTION 3: COMMON EMERGENCY PROBLEMS IN BOULDER CITY */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Common Emergency Plumbing Problems in Boulder City
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Boulder City&apos;s combination of historic housing stock,
                    hard water from Lake Mead, and slab foundation construction
                    creates several specific emergency plumbing scenarios that
                    homeowners here encounter more frequently than in newer Las
                    Vegas Valley communities.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-10">
                <ul className="space-y-5">
                  {BC_EMERGENCY_PROBLEMS.map((p) => (
                    <li
                      key={p.label}
                      className="relative rounded-2xl bg-white p-6 ring-1 ring-brand-surface-alt"
                    >
                      <p className="text-base leading-7 text-brand-dark/80">
                        <strong className="font-semibold text-brand-dark">
                          {p.label}.
                        </strong>{" "}
                        {p.body}
                        {p.link ? (
                          <>
                            {p.link.pre}
                            <Link
                              href={p.link.href}
                              className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                            >
                              {p.link.text}
                            </Link>
                            {p.link.post}
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

        {/* SECTION 4: WHAT TO DO IN A PLUMBING EMERGENCY (HowTo) */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    What to Do When a Plumbing Emergency Occurs in Boulder City
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

        {/* SECTION 5: WHY HISTORIC BOULDER CITY HOMES HAVE ELEVATED EMERGENCY RISK */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Why Boulder City&apos;s Historic Homes Face Higher Plumbing
                Emergency Risk
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Boulder City was established in the early 1930s as the
                construction camp for Hoover Dam workers. After Hoover Dam&apos;s
                completion, it developed into a permanent planned city and retains
                many of its original structures. Homes in the historic downtown
                core and surrounding original neighborhoods date from the 1930s
                through the 1960s, giving Boulder City some of the oldest
                residential plumbing infrastructure in the Las Vegas region.
              </p>
            </div>

            <div className="mt-10 space-y-6">
              <article className="rounded-2xl bg-white p-6 ring-1 ring-brand-surface-alt sm:p-8">
                <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                  Galvanized Steel Pipe Past Service Life
                </h3>
                <p className="mt-3 text-base leading-7 text-brand-dark/80">
                  Galvanized steel supply lines installed in Boulder City homes
                  during the 1930s through 1950s have an expected service life of
                  40 to 70 years under normal conditions. Under Las Vegas Valley
                  hard water conditions, actual service life is often shorter.
                  Many of these original lines are now 60 to 90 years old and well
                  past typical service life. Reduced water pressure throughout the
                  home, rust-colored or discolored water from the tap, and
                  recurring small leaks are common signs that original galvanized
                  pipe is reaching end of service life. Galvanized pipe failures
                  can release significant water suddenly, making emergency
                  readiness particularly important for Boulder City homeowners in
                  older properties. See our{" "}
                  <Link
                    href="/water-pipe-repair-replacement/"
                    className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                  >
                    water pipe repair and replacement
                  </Link>{" "}
                  page for repair and replacement options.
                </p>
              </article>

              <article className="rounded-2xl bg-white p-6 ring-1 ring-brand-surface-alt sm:p-8">
                <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                  Hard Water from Lake Mead Compounds Aging Infrastructure
                </h3>
                <p className="mt-3 text-base leading-7 text-brand-dark/80">
                  Boulder City&apos;s municipal water supply draws from Lake Mead,
                  the same source as the rest of the Las Vegas Valley. Lake Mead
                  water carries high dissolved mineral content that is among the
                  highest of any municipal water system in the United States. In
                  Boulder City&apos;s older homes, where galvanized and early
                  copper plumbing has already been thinned by decades of hard
                  water exposure, this mineral content compounds the challenges of
                  aging infrastructure. Even in newer Boulder City homes built in
                  the 1970s through 2000s, hard water accelerates water heater
                  sediment accumulation, mineral scale in supply lines, and
                  fixture wear.
                </p>
              </article>

              <article className="rounded-2xl bg-white p-6 ring-1 ring-brand-surface-alt sm:p-8">
                <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                  Boulder City Permits Are Handled by the Boulder City Building
                  Department
                </h3>
                <p className="mt-3 text-base leading-7 text-brand-dark/80">
                  Boulder City is an incorporated city with its own building
                  department and permit requirements, separate from Clark County.
                  Plumbing work that requires a permit in Boulder City is
                  processed through the Boulder City Building Department, not Clark
                  County. Red Carpet Plumbing holds Nevada Contractor License
                  #0048585A and works within the Boulder City permit process for
                  projects that require permits.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* SECTION 6: RELATED SERVICES */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Related Plumbing Services in Boulder City
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing provides a range of plumbing services for
                Boulder City homes and businesses beyond emergency response.
              </p>
            </div>
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {RELATED_SERVICES.map((s) =>
                s.built ? (
                  <li key={s.label}>
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
                ) : (
                  // TODO-BATCH-6: activate to {s.href} once confirmed built and QA-passed
                  <li key={s.label}>
                    <span className="flex items-center gap-2 rounded-lg bg-brand-surface-alt px-4 py-3 text-base font-medium text-brand-dark/70 ring-1 ring-brand-surface-alt">
                      <span aria-hidden="true" className="text-brand-primary">
                        &rarr;
                      </span>
                      {s.label}
                    </span>
                  </li>
                ),
              )}
            </ul>
          </div>
        </section>

        {/* SECTION 7: FAQ */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Emergency Plumbing FAQs for Boulder City Homeowners
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {BC_EMERGENCY_FAQS.map((faq) => (
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

        {/* SECTION 8: FINAL CTA */}
        <CTASection
          background="red"
          headline={<>Need an Emergency Plumber<br />in Boulder City?</>}
          body="Do not wait on a plumbing emergency. Call Red Carpet Plumbing at (702) 567-9172 or request service online. We serve homes and businesses throughout Boulder City and the Las Vegas Valley."
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
