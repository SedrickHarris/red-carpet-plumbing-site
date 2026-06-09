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

// FLAG: VERIFY before publishing — the rating (4.8 stars / 76 Google reviews),
// "Over 40 years," and "24/7 emergency commercial service" trust claims are
// source-site claims surfaced in the approved brief and shown on this page.
// Per Guardrail 8, the 24/7 emergency-availability FLAG is repeated inline at
// every copy instance referencing emergency availability (hero trust strip,
// Section 3 emergency card, Section 5 Step 1, FAQ Q5). License #0048585A and
// transparent-pricing are also source-site claims. Confirm before launch.
// Schema follows the established site-wide service-location pattern (Plumber
// provider; areaServed City Las Vegas + containedInPlace State Nevada, no
// sameAs; WebPage isPartOf WebSite; separate JsonLd blocks; HowTo for the
// visible process steps). Like siblings P13–P16/P18 and unlike the core
// /commercial-plumbing/ page, this page omits AggregateRating (Guardrail 4)
// and hasCredential.

export const metadata: Metadata = {
  title: "Commercial Plumbing in Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Licensed commercial plumbing services in Las Vegas, NV. Red Carpet Plumbing serves businesses, restaurants, property managers, and multi-unit buildings throughout Las Vegas. NV Licensed #0048585A. Call (702) 567-9172.",
  alternates: {
    canonical: "https://redcarpetplumbing.com/las-vegas/commercial-plumbing/",
  },
  openGraph: {
    title: "Commercial Plumbing in Las Vegas, NV | Red Carpet Plumbing",
    description:
      "Licensed commercial plumbers for businesses, restaurants, property managers, and multi-unit buildings throughout Las Vegas, NV. NV #0048585A.",
    url: "https://redcarpetplumbing.com/las-vegas/commercial-plumbing/",
    siteName: "Red Carpet Plumbing",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

// ---------------------------------------------------------------------------
// FAQ source of truth. The visible FAQ section AND the FAQPage JSON-LD schema
// both derive from this single array, guaranteeing a character-for-character
// match. Do not edit one without the other. FLAG comments live in this source
// only and are NOT part of the visible/schema answer text (Guardrail 11).
// ---------------------------------------------------------------------------
const LV_COMMERCIAL_FAQS = [
  {
    question: "What does commercial plumbing include in Las Vegas?",
    answer:
      "Commercial plumbing covers the installation, repair, and maintenance of plumbing systems in businesses, restaurants, office buildings, multi-unit residential properties, and industrial facilities. This includes drain systems, water supply lines, water heaters, restroom fixtures, grease traps, floor drains, backflow prevention devices, and sewer line connections. Commercial plumbing systems operate at higher demand levels than residential systems and require licensed contractors for most work in Nevada.",
  },
  {
    question:
      "Do I need a licensed plumber for commercial plumbing work in Las Vegas?",
    answer:
      "Yes. Commercial plumbing work in Nevada must be performed by a licensed contractor. Red Carpet Plumbing holds Nevada Contractor License #0048585A under the C-1 Plumbing and Heating classification, which covers commercial plumbing repair and installation throughout Las Vegas and Clark County. Clark County requires permits for most commercial plumbing work. Always verify a contractor's license number before hiring for commercial jobs.",
  },
  {
    question: "What are the most common commercial plumbing problems in Las Vegas?",
    answer:
      "Common commercial plumbing problems in Las Vegas include grease buildup and drain clogs in restaurant kitchen drain lines, high-demand water heater failures accelerated by hard water mineral scale, backflow preventer issues in commercial irrigation and fire suppression systems, aging supply lines in older commercial buildings, and slab leaks in single-story commercial properties built on caliche-rich desert soil.",
  },
  {
    question: "How often should commercial plumbing be inspected in Las Vegas?",
    answer:
      "Most commercial plumbing professionals recommend annual inspections for commercial properties. High-traffic facilities such as restaurants, hotels, and multi-unit buildings benefit from more frequent inspections of drain lines, grease traps, water heaters, and backflow prevention devices. Las Vegas hard water accelerates mineral scale buildup in commercial systems at high usage volumes, making regular inspection and maintenance particularly important.",
  },
  // FLAG: 24/7 emergency-availability claim in this answer — verify before final launch.
  {
    question:
      "Does Red Carpet Plumbing handle commercial plumbing emergencies in Las Vegas?",
    answer:
      "Yes. Red Carpet Plumbing provides emergency service for commercial plumbing situations including burst pipes, sewer backups, water heater failures, and major leaks throughout Las Vegas. Commercial plumbing emergencies that disrupt business operations require fast, licensed response. Call (702) 567-9172 directly for the fastest response.",
  },
  {
    question: "Does Red Carpet Plumbing work with property managers in Las Vegas?",
    answer:
      "Yes. Red Carpet Plumbing provides plumbing services for property managers overseeing multi-unit residential buildings, mixed-use properties, and commercial facilities throughout Las Vegas. We handle everything from individual unit repairs to shared sewer line maintenance, riser pipe inspection, and water heater replacement. Our licensed status under NV #0048585A supports permit compliance requirements for managed properties.",
  },
];

const HERO_SUBHEADING =
  "Red Carpet Plumbing provides licensed commercial plumbing repair, installation, and maintenance for businesses, restaurants, property managers, and multi-unit buildings throughout Las Vegas. All commercial work is performed under Nevada Contractor License #0048585A, C-1 Plumbing and Heating.";

const HERO_TRUST_ITEMS = [
  "NV Licensed #0048585A, C-1 Plumbing and Heating",
  // FLAG: VERIFY rating before publishing.
  "4.8 Stars, 76 Google Reviews",
  // FLAG: VERIFY "Over 40 years" before publishing.
  "Over 40 Years Serving the Las Vegas Valley",
  // FLAG: 24/7 emergency-availability claim — verify before final launch.
  "24/7 Emergency Commercial Service",
  "Transparent Pricing, No Hidden Fees",
];

// 1b colored strip. Items are factual restatements of brief content (license,
// commercial focus, property-manager/multi-unit service, permit handling) —
// no new business claims — consistent with the derived strips on siblings
// P13–P16 and P18.
const COMMERCIAL_TRUST_STRIP = [
  "NV Licensed #0048585A, C-1",
  "Licensed Commercial Plumbers",
  "Property Manager and Multi-Unit Service",
  "Permits Coordinated",
];

const WHO_WE_SERVE_INTRO =
  "Red Carpet Plumbing provides commercial plumbing services throughout Las Vegas for a range of business types and property operators. Our Nevada C-1 license covers commercial plumbing repair and installation throughout Clark County.";

const WHO_WE_SERVE = [
  {
    title: "Business Owners and Operators",
    body: "Retail stores, office buildings, medical offices, and service businesses throughout Las Vegas depend on reliable plumbing for daily operations. Red Carpet Plumbing provides repair, maintenance, and installation services for commercial businesses, including fixture repair, supply line service, water heater maintenance, and drain cleaning. We coordinate scheduling to minimize disruption to business hours.",
  },
  {
    title: "Restaurants and Hospitality Operations",
    body: "Commercial kitchens and food service operations require specialized plumbing attention due to grease buildup in drain lines, high-capacity hot water demand, and health code requirements for floor drains and grease traps. Red Carpet Plumbing provides drain cleaning, grease trap service, water heater service, and fixture repair for restaurants and hospitality operators throughout Las Vegas.",
  },
  {
    title: "Property Managers and Multi-Unit Buildings",
    body: "Property managers overseeing multi-unit residential buildings, mixed-use developments, and commercial parks need a reliable licensed plumbing contractor who can handle shared sewer line maintenance, riser pipe inspection, individual unit repairs, and tenant improvement plumbing work. Red Carpet Plumbing works with property managers throughout Las Vegas to provide responsive, documented commercial plumbing service.",
  },
  {
    title: "Facilities Managers and Commercial Properties",
    body: "Facilities managers responsible for office complexes, warehouse and distribution centers, and light industrial properties along Las Vegas commercial corridors need a licensed plumbing contractor who understands commercial system scale. Red Carpet Plumbing provides commercial plumbing inspection, repair, and installation for facilities throughout Las Vegas.",
  },
];

// Section 3 service cards link to their built service routes (built={true} so
// the card title and Learn More render as live links). All eight targets
// resolve to built routes. Card 8 carries an inline 24/7 FLAG (Guardrail 8).
const COMMERCIAL_SERVICES: {
  title: string;
  description: string;
  href: string;
}[] = [
  {
    title: "Commercial Drain Cleaning and Hydro Jetting",
    description:
      "Grease buildup, mineral scale, and debris accumulation in commercial drain lines cause slow drains and backups that disrupt business operations. Red Carpet Plumbing provides commercial drain cleaning and hydro jetting for kitchen drains, floor drains, restroom lines, and main sewer connections.",
    href: "/las-vegas/drain-cleaning/",
  },
  {
    title: "Grease Trap and Floor Drain Service",
    description:
      "Commercial kitchens and food service operations require regular grease trap maintenance and floor drain cleaning to meet health code requirements. Red Carpet Plumbing provides grease trap and floor drain service for restaurants and food service businesses throughout Las Vegas.",
    href: "/commercial-plumbing/",
  },
  {
    title: "Commercial Water Heater Repair and Installation",
    description:
      "High-capacity water heater systems in commercial properties operate under continuous demand. Mineral buildup from Las Vegas hard water accelerates scale accumulation in commercial water heaters at high usage volumes. Red Carpet Plumbing provides repair, maintenance, and replacement of commercial water heater systems.",
    href: "/water-heater-repair-installation/",
  },
  {
    title: "Commercial Leak Detection and Repair",
    description:
      "Undetected leaks in commercial supply lines, fixture connections, and sewer lines accumulate costs and cause property damage before they become visible. Red Carpet Plumbing provides commercial leak detection using acoustic sensors and pressure testing for businesses and multi-unit properties throughout Las Vegas.",
    href: "/las-vegas/leak-detection-repair/",
  },
  {
    title: "Commercial Sewer Line Services",
    description:
      "Commercial properties generate higher sewer line demand than residential systems, and blockages or failures disrupt operations. Red Carpet Plumbing provides commercial sewer line inspection, cleaning, repair, and replacement for businesses throughout Las Vegas.",
    href: "/sewer-line-services/",
  },
  {
    title: "Backflow Prevention and Testing",
    description:
      "Commercial properties with irrigation systems, fire suppression connections, and specialized equipment require backflow prevention devices. Clark County requires backflow preventer installation and periodic testing for qualifying commercial properties. Red Carpet Plumbing installs, tests, and repairs backflow prevention devices for commercial clients.",
    href: "/backflow-prevention/",
  },
  {
    title: "Commercial Pipe Repair and Re-Piping",
    description:
      "Aging supply lines, corroded drain lines, and failing pipe systems in commercial buildings require assessment and repair by a licensed contractor. Red Carpet Plumbing provides commercial pipe repair and re-piping for businesses and multi-unit properties throughout Las Vegas.",
    href: "/commercial-plumbing/",
  },
  // FLAG: 24/7 emergency-availability claim stated in this card — verify before final launch.
  {
    title: "Emergency Commercial Plumbing",
    description:
      "Burst pipes, sewer backups, water heater failures, and major leaks in commercial properties require immediate licensed response. Red Carpet Plumbing provides 24/7 emergency commercial plumbing service throughout Las Vegas.",
    href: "/las-vegas/emergency-plumbing/",
  },
];

const COMMERCIAL_CONTEXT_INTRO =
  "Commercial plumbing in Las Vegas has its own demands shaped by the hospitality industry, multi-unit property density, Clark County permitting requirements, and desert climate conditions.";

const COMMERCIAL_CONTEXT = [
  {
    title: "Hospitality and Restaurant Corridor Demands",
    body: "The Las Vegas hospitality industry creates one of the highest concentrations of commercial plumbing demand in the country. Restaurants, bars, hotels, and entertainment venues throughout Las Vegas operate high-demand plumbing systems around the clock. Commercial kitchens generate significant grease buildup in drain lines, require high-capacity hot water supply, and depend on floor drain systems that must remain clear to meet health code requirements. A licensed commercial plumber who understands the pace and scale of Las Vegas food service and hospitality operations is essential.",
  },
  {
    title: "Property Management and Multi-Unit Buildings",
    body: "Las Vegas has large concentrations of multi-unit residential buildings, mixed-use developments, and commercial parks throughout the valley. Property managers responsible for these buildings need a reliable licensed plumbing contractor who can handle everything from shared sewer line maintenance and riser pipe inspection to individual unit repairs and tenant improvement plumbing work. Documented service records and permit compliance are important for property managers managing building systems across multiple units.",
  },
  {
    title: "Clark County Permits and Licensed Contractor Requirements",
    body: "Most commercial plumbing work in Las Vegas requires permits and must be performed by a licensed contractor. Nevada C-1 Plumbing and Heating licensees are authorized for commercial plumbing repair and installation. Red Carpet Plumbing holds NV Contractor License #0048585A and handles permit coordination for applicable commercial projects. Working with an unlicensed contractor on commercial plumbing can result in failed inspections, code violations, and liability exposure.",
  },
  {
    title: "Hard Water Impact on Commercial Systems",
    body: "Commercial plumbing systems in Las Vegas face the same hard water conditions that affect residential plumbing, but at much greater scale. Las Vegas water carries approximately 280 parts per million of dissolved minerals. At high commercial usage volumes, mineral scale accumulates in water heaters, supply lines, and fixtures more quickly than in residential systems. Regular inspection and maintenance of commercial systems helps prevent unexpected failures that disrupt business operations.",
  },
];

const COMMERCIAL_STEPS = [
  // FLAG: 24/7 emergency-response availability implied in this step — verify before final launch.
  {
    name: "Call and Describe the Job",
    body: "Call Red Carpet Plumbing at (702) 567-9172 and describe the issue or project. We work with business owners, facilities managers, and property managers throughout Las Vegas. For commercial plumbing emergencies, call directly for the fastest response.",
  },
  {
    name: "Site Assessment and Diagnosis",
    body: "A licensed plumber arrives to assess the commercial plumbing system, diagnose the issue, and document what needs to be addressed. We use professional equipment to inspect drain lines, supply lines, water heaters, and connections.",
  },
  {
    name: "Review Scope and Approve the Work",
    body: "We explain what we found, what the repair or installation involves, and what options are available. You approve the full scope before any work begins. No surprises.",
  },
  {
    name: "Licensed Repair or Installation with Inspection",
    body: "Our licensed plumber completes the work, confirms all connections and systems are functioning correctly, and ensures the job meets code requirements. We coordinate permit inspections when required for the scope of work.",
  },
];

const COMMERCIAL_AREAS_INTRO =
  "Red Carpet Plumbing provides commercial plumbing services throughout Las Vegas and the broader Las Vegas Valley.";

const COMMERCIAL_AREAS = [
  "Downtown Las Vegas",
  "Spring Valley / Desert Inn Corridor",
  "Rancho Drive Corridor",
  "Martin Luther King Boulevard Corridor",
  "West Sahara Corridor",
  "Southwest Las Vegas / I-215 Corridor",
  "North Las Vegas Industrial and Commercial Areas",
  "Summerlin Business Parks",
  "Henderson Business District",
];

// ---------------------------------------------------------------------------
// JSON-LD payloads (established site-wide shape; see NOTE at top of file).
// ---------------------------------------------------------------------------
const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Commercial Plumbing in Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Licensed commercial plumbing services in Las Vegas, NV. Red Carpet Plumbing serves businesses, restaurants, property managers, and multi-unit buildings throughout Las Vegas. NV Licensed #0048585A.",
  url: "https://redcarpetplumbing.com/las-vegas/commercial-plumbing/",
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
      name: "Las Vegas Plumbing",
      item: "https://redcarpetplumbing.com/las-vegas-plumbing-services/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Commercial Plumbing",
      item: "https://redcarpetplumbing.com/las-vegas/commercial-plumbing/",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Commercial Plumbing",
  serviceType: "Commercial Plumbing",
  description:
    "Licensed commercial plumbing repair, installation, and maintenance for businesses, restaurants, property managers, and multi-unit buildings throughout Las Vegas, NV. Nevada Contractor License #0048585A, C-1 Plumbing and Heating.",
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

// HowTo schema included because Section 5 renders the matching visible
// step-by-step process (titles + body) on the page.
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Red Carpet Plumbing Handles Commercial Plumbing in Las Vegas",
  step: COMMERCIAL_STEPS.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.name,
    text: s.body,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: LV_COMMERCIAL_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function LasVegasCommercialPlumbingPage() {
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
              label: "Las Vegas Plumbing",
              href: "/las-vegas-plumbing-services/",
            },
            { label: "Commercial Plumbing" },
          ]}
        />

        {/* SECTION 1: HERO */}
        {/* TODO: Replace ServiceImagePlaceholder/accent hero with an approved commercial */}
        {/* plumbing hero image when the client supplies one at */}
        {/* public/images/services/commercial-plumbing/hero.webp (none exists yet). */}
        <HeroSection
          headingLevel="h1"
          headline="Commercial Plumbing in Las Vegas, NV"
          subheading={HERO_SUBHEADING}
          trustItems={HERO_TRUST_ITEMS}
          primaryCTA={{
            label: "Call (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{
            label: "Request Commercial Service",
            href: "/contact/",
          }}
          ctaNote="NV Licensed #0048585A, C-1 Plumbing and Heating. Permits coordinated."
          formSlot={<QuoteFormPlaceholder title="Get Commercial Plumbing Help" />}
          accentWidth="sm"
        />

        {/* SECTION 1b: TRUST STRIP */}
        <section
          aria-label="Why Las Vegas businesses choose Red Carpet Plumbing for commercial plumbing"
          className="bg-brand-primary text-white"
        >
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-10 xl:px-12">
            <ul className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
              {COMMERCIAL_TRUST_STRIP.map((item) => (
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

        {/* SECTION 2: WHO WE SERVE */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Commercial Plumbing for Las Vegas Businesses and Properties
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                {WHO_WE_SERVE_INTRO}
              </p>
            </div>
            <div className="mt-10 space-y-6">
              {WHO_WE_SERVE.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl bg-brand-surface-alt p-6 ring-1 ring-brand-surface-alt sm:p-8"
                >
                  <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-brand-dark/80">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: COMMERCIAL SERVICES */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <SectionReveal>
              <SectionRevealItem>
                <div className="max-w-3xl text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Las Vegas Commercial Plumbing Services
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Red Carpet Plumbing provides the full range of{" "}
                    <Link
                      href="/commercial-plumbing/"
                      className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                    >
                      commercial plumbing services
                    </Link>{" "}
                    for businesses and properties throughout Las Vegas. All work
                    is performed under NV Contractor License #0048585A.
                  </p>
                </div>
              </SectionRevealItem>
              <SectionRevealItem className="mt-14">
                {/* TODO: Replace ServiceImagePlaceholder with approved commercial plumbing service images when available. */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {COMMERCIAL_SERVICES.map((card) => (
                    <ServiceCard
                      key={card.title}
                      title={card.title}
                      description={card.description}
                      href={card.href}
                      built={true}
                    />
                  ))}
                </div>
              </SectionRevealItem>
            </SectionReveal>
          </div>
        </section>

        {/* SECTION 4: LAS VEGAS COMMERCIAL CONTEXT */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Commercial Plumbing in the Las Vegas Market
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    {COMMERCIAL_CONTEXT_INTRO}
                  </p>
                </div>
              </SectionRevealItem>
              <SectionRevealItem className="mt-10">
                <ul className="space-y-5">
                  {COMMERCIAL_CONTEXT.map((c) => (
                    <li
                      key={c.title}
                      className="rounded-2xl bg-brand-surface-alt p-6 ring-1 ring-brand-surface-alt sm:p-8"
                    >
                      <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                        {c.title}
                      </h3>
                      <p className="mt-3 text-base leading-7 text-brand-dark/80">
                        {c.body}
                      </p>
                    </li>
                  ))}
                </ul>
              </SectionRevealItem>
            </SectionReveal>
          </div>
        </section>

        {/* SECTION 5: PROCESS STEPS (HowTo) */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    How Red Carpet Plumbing Handles Commercial Plumbing in Las
                    Vegas
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Here is what to expect when you call Red Carpet Plumbing for
                    commercial plumbing service in Las Vegas.
                  </p>
                </div>
              </SectionRevealItem>
              <SectionRevealItem className="mt-12">
                <ol className="space-y-8">
                  {COMMERCIAL_STEPS.map((step, index) => (
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

        {/* SECTION 6: MID-PAGE CTA */}
        <section className="bg-brand-charcoal text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Commercial Plumbing Service Throughout Las Vegas
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/80">
                  Red Carpet Plumbing provides licensed commercial plumbing for
                  businesses, restaurants, property managers, and multi-unit
                  buildings throughout Las Vegas. NV Licensed #0048585A. Call or
                  request service online. For urgent issues, see our{" "}
                  <Link
                    href="/las-vegas/emergency-plumbing/"
                    className="font-semibold text-white underline underline-offset-4 hover:text-white/80"
                  >
                    Las Vegas emergency plumbing
                  </Link>{" "}
                  services.
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
                  Request Commercial Service
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: LAS VEGAS COMMERCIAL AREAS */}
        <section className="bg-brand-charcoal text-white">
          <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10 lg:pb-24 xl:px-12">
            <div className="max-w-3xl text-left">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Las Vegas Commercial Areas We Serve
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/85">
                {COMMERCIAL_AREAS_INTRO} For full coverage details, see our{" "}
                <Link
                  href="/las-vegas-plumbing-services/"
                  className="font-semibold text-white underline underline-offset-4 hover:text-white/80"
                >
                  Las Vegas plumbing services
                </Link>{" "}
                page.
              </p>
            </div>

            <ul className="mt-10 flex flex-wrap gap-3">
              {COMMERCIAL_AREAS.map((a) => (
                <li key={a}>
                  <span className="block rounded-lg border border-white/10 bg-white/5 px-5 py-3 font-medium text-white/85">
                    {a}
                  </span>
                </li>
              ))}
            </ul>

            {/* /henderson/commercial-plumbing/ is built (P18), so the Henderson */}
            {/* commercial link below points directly to it (no fallback). The */}
            {/* brief's Guardrail 14 TODO-BATCH-5 fallback to /commercial-plumbing/ */}
            {/* is unnecessary because P18 is already live. */}
            <p className="mt-8 text-base leading-7 text-white/80">
              For Henderson commercial plumbing service, visit our{" "}
              <Link
                href="/henderson/commercial-plumbing/"
                className="font-semibold text-white underline underline-offset-4 hover:text-white/80"
              >
                Henderson commercial plumbing
              </Link>{" "}
              page.
            </p>

            <div className="mt-8 text-left">
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

        {/* SECTION 8: FAQ */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Frequently Asked Questions About Commercial Plumbing in Las Vegas
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {LV_COMMERCIAL_FAQS.map((faq) => (
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

        {/* SECTION 9: FINAL CTA */}
        <CTASection
          background="red"
          headline="Licensed Commercial Plumbing Throughout Las Vegas, NV"
          body="Red Carpet Plumbing provides licensed commercial plumbing repair, installation, and maintenance for businesses, restaurants, property managers, and multi-unit buildings throughout Las Vegas. NV Contractor License #0048585A, C-1 Plumbing and Heating."
          primaryCTA={{
            label: "Call (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{
            label: "Request Commercial Service",
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
