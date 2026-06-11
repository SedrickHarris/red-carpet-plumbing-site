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

// FLAG: VERIFY before publishing — source-site / project claims surfaced in the
// approved brief and shown on this page. Each instance carries an inline FLAG:
//   - 24/7 emergency commercial service (hero trust item + Section 3 emergency
//     card + Section 5 Step 1 + FAQ Q5) — source-site claim
//   - 4.8-star rating, 76 Google reviews — verify before publishing
//   - "Over 40 years" serving the area — verify before publishing
// License #0048585A (C-1 Plumbing and Heating) is the established project value.
// Schema follows the brief: Service.areaServed uses Place -> AdministrativeArea
// (Clark County) -> State (Nevada), NOT City, because Paradise is unincorporated
// Clark County. No AggregateRating, no standalone LocalBusiness, and NO
// hasCredential on the Service provider block (per guardrail 8 — the core
// /commercial-plumbing/ page carries the credential; service-location pages omit
// it).

export const metadata: Metadata = {
  title: "Commercial Plumbing in Paradise, NV | Red Carpet Plumbing",
  // FLAG: this description is the approved brief string (~230 chars). It exceeds
  // the site's <=160 meta-description standard; kept verbatim because page
  // metadata is approval-gated. Trim pending explicit approval.
  description:
    "Licensed commercial plumbing in Paradise, NV. Restaurant drain service, grease trap clearing, backflow prevention, water heater service, and commercial leak detection near the Las Vegas Strip. NV License #0048585A. Call (702) 567-9172.",
  alternates: {
    canonical: "https://redcarpetplumbing.com/paradise/commercial-plumbing/",
  },
  openGraph: {
    title: "Commercial Plumbing in Paradise, NV | Red Carpet Plumbing",
    description:
      "Licensed C-1 commercial plumbing for businesses, restaurants, and property managers in Paradise, NV. Near the Las Vegas Strip. Call (702) 567-9172.",
    url: "https://redcarpetplumbing.com/paradise/commercial-plumbing/",
    siteName: "Red Carpet Plumbing",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

// ---------------------------------------------------------------------------
// FAQ source of truth. The visible FAQ section AND the FAQPage JSON-LD schema
// both derive from this single array, guaranteeing a character-for-character
// match. The 24/7 FLAG on Q5 lives in this comment only and is NOT part of the
// answer text. (Q5 answer carries the 24/7 source-site claim — verify before
// final launch.)
// ---------------------------------------------------------------------------
const PARADISE_COMMERCIAL_FAQS = [
  {
    question:
      "Is Red Carpet Plumbing licensed for commercial plumbing in Paradise, NV?",
    answer:
      "Yes. Red Carpet Plumbing holds Nevada Contractor License #0048585A under the C-1 Plumbing and Heating classification, issued by the Nevada State Contractors Board. The C-1 classification covers commercial plumbing repair and installation throughout Nevada including Paradise and all Clark County properties. Commercial plumbing work in Paradise must be performed by a licensed Nevada contractor.",
  },
  {
    question: "Who issues commercial plumbing permits in Paradise, NV?",
    answer:
      "Commercial plumbing permits in Paradise are issued by Clark County, Nevada. Paradise is an unincorporated community within Clark County, so the City of Las Vegas building department does not have permit jurisdiction over Paradise properties. Red Carpet Plumbing handles permit coordination with Clark County for applicable commercial projects.",
  },
  {
    question:
      "Does Red Carpet Plumbing service restaurants and commercial kitchens near the Las Vegas Strip?",
    answer:
      "Yes. Red Carpet Plumbing provides commercial plumbing services for restaurants, hotel kitchens, bars, and commercial food service operations throughout Paradise including the Strip corridor. Services include grease drain line clearing, floor drain service, high-capacity water heater repair and installation, backflow prevention testing, and commercial sewer line service.",
  },
  {
    question:
      "What is backflow prevention and is it required for commercial properties in Paradise?",
    answer:
      "Backflow prevention devices prevent contaminated water from flowing back into the municipal water supply. Clark County requires backflow preventer installation and periodic testing for commercial properties with irrigation systems, fire suppression connections, and certain commercial kitchen equipment. Red Carpet Plumbing installs, tests, and repairs backflow prevention devices for commercial properties throughout Paradise under NV License #0048585A.",
  },
  {
    // FLAG: 24/7 source-site claim in this answer — verify before final launch.
    question:
      "Does Red Carpet Plumbing provide emergency commercial plumbing service in Paradise?",
    answer:
      "Red Carpet Plumbing provides 24/7 emergency commercial plumbing service throughout Paradise. Burst pipes, sewer backups, water heater failures, and major leaks in commercial properties are handled by our licensed plumbers. Call (702) 567-9172 at any time for emergency commercial response.",
  },
  {
    question:
      "Can Red Carpet Plumbing work with our property management company in Paradise?",
    answer:
      "Yes. Red Carpet Plumbing works with property managers overseeing multi-unit residential buildings, mixed-use developments, and commercial properties throughout Paradise. We provide documented commercial plumbing service, coordinate scheduling to minimize tenant disruption, and handle permit filing with Clark County for applicable projects. Call (702) 567-9172 or request service online to discuss your property's needs.",
  },
];

const HERO_SUBHEADING =
  "Red Carpet Plumbing provides licensed commercial plumbing services for businesses, restaurants, property managers, and facilities throughout Paradise, NV. Paradise is home to the Las Vegas Strip and one of the highest concentrations of commercial plumbing demand in the United States. Our Nevada Contractor License #0048585A, C-1 Plumbing and Heating classification covers commercial plumbing repair and installation throughout Clark County including all Paradise properties. Call us or request service online.";

const HERO_TRUST_ITEMS = [
  "Nevada Contractor License #0048585A, C-1 Plumbing and Heating",
  "Commercial plumbing for restaurants, hospitality, and property managers",
  // FLAG: VERIFY rating and review count before publishing.
  "4.8-star rating, 76 Google reviews",
  // FLAG: VERIFY "over 40 years" before publishing.
  "Serving Paradise and the Las Vegas Valley for over 40 years",
  // FLAG: source-site claim (24/7 emergency commercial service) — verify before
  // final launch.
  "24/7 emergency commercial service",
];

// Section 2 — "Who We Serve" segment cards (H3 + paragraph).
const WHO_WE_SERVE_INTRO =
  "Red Carpet Plumbing provides commercial plumbing services throughout Paradise for a range of business types and property operators. Our Nevada C-1 license covers commercial plumbing repair and installation throughout Clark County including all Paradise properties.";

const WHO_WE_SERVE = [
  {
    title: "Strip Corridor Restaurants and Hospitality Operations",
    body: "Paradise is home to the Las Vegas Strip, Las Vegas Boulevard South between Russell Road and Sahara Avenue, and the surrounding corridors of hotels, casinos, restaurants, bars, and entertainment venues. Commercial kitchens in this corridor generate significant grease buildup in drain lines, require high-capacity hot water supply, and depend on floor drain systems that must stay clear for health code compliance. Gas line plumbing serves kitchen equipment throughout the hospitality zone. Backflow prevention devices are required on commercial properties with irrigation systems and fire suppression connections. Red Carpet Plumbing provides drain cleaning, grease trap service, water heater service, backflow testing, and commercial plumbing repair for Strip corridor restaurants and hospitality operators throughout Paradise.",
  },
  {
    title: "Business Owners and Operators",
    body: "Retail stores, office buildings, medical offices, and service businesses throughout Paradise depend on reliable plumbing for daily operations. Red Carpet Plumbing provides repair, maintenance, and installation for commercial businesses in Paradise, including fixture repair, supply line service, water heater maintenance, drain cleaning, and backflow prevention. We coordinate scheduling to minimize disruption to business hours.",
  },
  {
    title: "Property Managers and Multi-Unit Buildings",
    body: "Paradise includes multi-unit residential buildings, mixed-use developments, and commercial properties outside the Strip corridor. Property managers responsible for these properties need a licensed plumbing contractor who can handle shared sewer line maintenance, riser pipe inspection, individual unit repairs, and tenant improvement plumbing work. Red Carpet Plumbing works with property managers throughout Paradise to provide responsive, documented commercial plumbing service under NV License #0048585A.",
  },
  {
    title: "Facilities Managers and Commercial Properties",
    body: "Office complexes, warehouse properties, and commercial facilities throughout Paradise require a licensed plumbing contractor who understands commercial system scale. Red Carpet Plumbing provides commercial plumbing inspection, repair, and installation for facilities throughout Paradise and the broader Las Vegas Valley.",
  },
];

// Section 3 — commercial service cards (title + description). Each card renders
// its specific inline anchor as a live <Link> per the internal-linking spec.
// Card 7 (emergency) carries the 24/7 source-site FLAG.
const COMMERCIAL_SERVICES: {
  title: string;
  body: string;
  link?: { href: string; text: string };
}[] = [
  {
    title: "Commercial Drain Cleaning and Grease Trap Service",
    body: "High-volume grease drain lines in Strip corridor restaurants and commercial kitchens accumulate buildup faster than residential drains. We provide grease line clearing, floor drain cleaning, and main line service for commercial properties throughout Paradise.",
    link: { href: "/paradise/drain-cleaning/", text: "drain cleaning in Paradise" },
  },
  {
    title: "Commercial Water Heater Repair and Installation",
    body: "Restaurants, hospitality operations, and commercial properties require high-capacity water heater service. We repair and replace commercial water heaters including high-capacity tank and tankless systems.",
    link: {
      href: "/paradise/water-heater-repair-installation/",
      text: "water heater repair in Paradise",
    },
  },
  {
    title: "Commercial Leak Detection and Repair",
    body: "Accurate, non-invasive detection and repair of leaks in commercial supply lines, fixtures, and plumbing connections before they cause property damage or business disruption.",
    link: {
      href: "/paradise/leak-detection-repair/",
      text: "leak detection in Paradise",
    },
  },
  {
    title: "Commercial Sewer Line Services",
    body: "Commercial properties generate higher sewer line demand than residential systems. Blockages or failures disrupt operations. Red Carpet Plumbing provides commercial sewer line inspection, cleaning, repair, and replacement throughout Paradise.",
    link: { href: "/sewer-line-services/", text: "sewer line services" },
  },
  {
    title: "Backflow Prevention and Testing",
    body: "Commercial properties with irrigation systems, fire suppression connections, and commercial kitchen equipment require backflow prevention devices. Clark County requires backflow preventer installation and periodic testing for qualifying commercial properties.",
    link: { href: "/backflow-prevention/", text: "backflow prevention" },
  },
  {
    title: "Commercial Pipe Repair and Re-Piping",
    body: "Aging supply lines, corroded drain lines, and failing pipe systems in commercial buildings require assessment and repair by a licensed contractor. Red Carpet Plumbing provides commercial pipe repair for businesses and multi-unit properties throughout Paradise.",
  },
  {
    // FLAG: 24/7 source-site claim in this card body — verify before final launch.
    title: "Emergency Commercial Plumbing",
    body: "Burst pipes, sewer backups, water heater failures, and major leaks in commercial properties require immediate licensed response. Red Carpet Plumbing provides 24/7 emergency commercial plumbing service throughout Paradise.",
    link: {
      href: "/paradise/emergency-plumbing/",
      text: "emergency plumbing in Paradise",
    },
  },
];

// Section 4 — "What Makes This Market Different" context blocks (H3 + paragraph).
const COMMERCIAL_CONTEXT = [
  {
    title: "Las Vegas Strip Corridor Demand",
    body: "Paradise is home to the Las Vegas Strip, one of the most plumbing-intensive commercial corridors in the United States. The density of restaurants, hotel kitchens, bars, and entertainment venues operating around the clock creates sustained high-volume plumbing demand unlike any residential or standard commercial area. Grease buildup in commercial drain lines, high-capacity hot water demand, and backflow prevention requirements are everyday service needs in this corridor. Red Carpet Plumbing is licensed for commercial plumbing under NV Contractor License #0048585A and has experience serving commercial properties in the Paradise area.",
  },
  {
    // Permit jurisdiction: Clark County — not City of Las Vegas.
    title: "Clark County Permits and C-1 License Requirement",
    body: "Commercial plumbing work in Paradise requires permits issued by Clark County, Nevada. Paradise is an unincorporated community within Clark County, so the City of Las Vegas building department does not have permit jurisdiction over Paradise properties. Most commercial plumbing work must be performed by a Nevada-licensed C-1 contractor. Red Carpet Plumbing holds NV Contractor License #0048585A, C-1 Plumbing and Heating, and handles permit coordination with Clark County for applicable commercial projects. Working with an unlicensed contractor on commercial plumbing can result in failed inspections and compliance issues.",
  },
  {
    title: "Property Management and Multi-Unit Service",
    body: "Beyond the Strip corridor, Paradise has residential and mixed-use properties requiring regular commercial plumbing maintenance. Property managers overseeing multi-unit buildings in Paradise need a reliable licensed plumbing contractor who can coordinate shared sewer line maintenance, individual unit repairs, and tenant improvement plumbing. Red Carpet Plumbing provides documented commercial service for property managers under NV License #0048585A.",
  },
  {
    title: "Hard Water at Commercial Scale",
    body: "Commercial properties in Paradise receive the same Las Vegas Valley municipal water supply carrying 17 to 24 grains per gallon of dissolved minerals. At commercial usage volumes, hard water mineral scale accumulates in water heaters, supply lines, and fixtures faster than in residential settings. Commercial water heaters serving high-demand kitchens and hospitality operations require regular descaling and anode rod service. Regular inspection and maintenance of commercial systems helps prevent unexpected failures that disrupt operations and create expensive emergency repairs.",
  },
];

// Section 5 — visible <ol>, HowTo schema source. NOTE: Step 1's visible body
// ends "...we respond 24/7." (source-site claim, FLAG below); the brief's Block 4
// schema text instead ends "...we respond promptly." Both are reproduced
// verbatim — the schema variant is applied via the i === 0 override in
// howToSchema. Do not collapse the two.
const COMMERCIAL_STEPS = [
  {
    // FLAG: 24/7 source-site claim in this step body — verify before final launch.
    name: "Call and Describe the Job",
    body: "Call (702) 567-9172 and describe the issue or project. We work with business owners, facilities managers, property managers, and restaurant operators. For commercial emergencies, we respond 24/7.",
  },
  {
    name: "Site Assessment and Diagnosis",
    body: "A licensed plumber arrives to assess the commercial plumbing system, diagnose the issue, and document what needs to be addressed. We use professional detection equipment to inspect drain lines, supply lines, water heaters, backflow devices, and connections.",
  },
  {
    name: "Review Scope and Approve the Work",
    body: "We explain what we found, what the repair or installation involves, and what options are available. You approve the full scope before any work begins. No surprises, no unauthorized work.",
  },
  {
    // Permit jurisdiction: Clark County — not City of Las Vegas.
    name: "Complete the Work and Coordinate Permits",
    body: "We complete the repair or installation to commercial code standards. For projects requiring Clark County permits, we handle filing and coordinate inspections. All work is performed under NV Contractor License #0048585A, C-1 Plumbing and Heating.",
  },
];

// Section 7 — commercial area chips, no links.
const SERVICE_AREAS = [
  "Las Vegas Strip Corridor",
  "Harmon Avenue Corridor",
  "Flamingo Road Corridor",
  "Tropicana Avenue Corridor",
  "Paradise Road Corridor",
  "UNLV / University District",
  "Harry Reid Airport Area",
  "Swenson Street Corridor",
  "East Sahara Commercial Corridor",
  "Eastern Avenue Corridor",
];

// ---------------------------------------------------------------------------
// JSON-LD payloads (5 separate blocks; areaServed Place -> Clark County per
// brief. No hasCredential on provider per guardrail 8.)
// ---------------------------------------------------------------------------
const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Commercial Plumbing in Paradise, NV | Red Carpet Plumbing",
  description:
    "Licensed commercial plumbing in Paradise, NV. Restaurant drain service, grease trap clearing, backflow prevention, water heater service, and commercial leak detection near the Las Vegas Strip. NV License #0048585A. Call (702) 567-9172.",
  url: "https://redcarpetplumbing.com/paradise/commercial-plumbing/",
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
      name: "Paradise Plumbing Services",
      item: "https://redcarpetplumbing.com/paradise-plumbing-services/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Commercial Plumbing in Paradise, NV",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Commercial Plumbing in Paradise, NV",
  serviceType: "Commercial Plumbing",
  description:
    "Licensed commercial plumbing for businesses, restaurants, property managers, and facilities in Paradise, NV. Drain cleaning, grease trap service, water heater service, backflow prevention, sewer line service, and emergency commercial plumbing.",
  provider: {
    "@type": "Plumber",
    name: "Red Carpet Plumbing",
    // FLAG: VERIFY telephone and address (carried forward from approved brief).
    telephone: "+17025679172",
    address: {
      "@type": "PostalAddress",
      streetAddress: "3330 W. Hacienda Ave Ste. 405",
      addressLocality: "Las Vegas",
      addressRegion: "NV",
      postalCode: "89118",
      addressCountry: "US",
    },
  },
  areaServed: {
    "@type": "Place",
    name: "Paradise",
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

// HowTo schema included because Section 5 renders the matching visible
// step-by-step process. Step 1 schema text uses the brief's Block 4 wording
// ("...we respond promptly.") via the i === 0 override; the visible Step 1 body
// carries the "...we respond 24/7." source-site wording.
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How We Handle Commercial Plumbing in Paradise, NV",
  step: COMMERCIAL_STEPS.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.name,
    text:
      i === 0
        ? "Call (702) 567-9172 and describe the issue or project. We work with business owners, facilities managers, property managers, and restaurant operators. For commercial emergencies, we respond promptly."
        : s.body,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: PARADISE_COMMERCIAL_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function ParadiseCommercialPlumbingPage() {
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
              label: "Paradise Plumbing Services",
              href: "/paradise-plumbing-services/",
            },
            { label: "Commercial Plumbing in Paradise, NV" },
          ]}
        />

        {/* SECTION 1: HERO */}
        {/* TODO: no commercial-plumbing image assets exist yet (no */}
        {/* public/images/services/commercial-plumbing/ and no */}
        {/* public/images/locations/paradise/). Using the accentWidth="sm" hero */}
        {/* pattern from the sibling commercial pages. Swap to an approved hero */}
        {/* image when the client supplies one. */}
        <HeroSection
          headingLevel="h1"
          headline="Commercial Plumbing in Paradise, NV"
          subheading={HERO_SUBHEADING}
          trustItems={HERO_TRUST_ITEMS}
          primaryCTA={{
            label: "Call Now: (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{
            label: "Request Service",
            href: "/contact/",
          }}
          ctaNote="Licensed commercial plumbing throughout Paradise, NV"
          formSlot={<QuoteFormPlaceholder title="Get Commercial Plumbing Help" />}
          accentWidth="sm"
        />

        {/* SECTION 2: WHO WE SERVE */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Who We Serve in Paradise, NV
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
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Commercial Plumbing Services We Provide in Paradise, NV
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing handles the full range of commercial plumbing
                services for businesses, restaurants, and property managers in
                Paradise. For a broader overview, see our{" "}
                <Link
                  href="/commercial-plumbing/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  commercial plumbing services
                </Link>{" "}
                page.
              </p>
            </div>
            <div className="mt-10 space-y-6">
              {COMMERCIAL_SERVICES.map((card) => (
                <article
                  key={card.title}
                  className="rounded-2xl bg-white p-6 ring-1 ring-brand-surface-alt sm:p-8"
                >
                  <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-brand-dark/80">
                    {card.body}
                    {card.link ? (
                      <>
                        {" "}
                        See{" "}
                        <Link
                          href={card.link.href}
                          className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                        >
                          {card.link.text}
                        </Link>
                        .
                      </>
                    ) : null}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: WHAT MAKES THIS MARKET DIFFERENT */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Commercial Plumbing in Paradise, NV: What Makes This Market
                    Different
                  </h2>
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

        {/* SECTION 5: HOW WE HANDLE COMMERCIAL PLUMBING (HowTo) */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    How We Handle Commercial Plumbing in Paradise, NV
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    When you contact Red Carpet Plumbing for commercial plumbing
                    service in Paradise, here is our process.
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

        {/* SECTION 6: MID-PAGE CTA (charcoal band) */}
        <section className="bg-brand-charcoal text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Need a Licensed Commercial Plumber in Paradise, NV?
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/80">
                  Red Carpet Plumbing serves businesses, restaurants, and property
                  managers throughout Paradise and the Las Vegas Valley. NV
                  Contractor License #0048585A, C-1 Plumbing and Heating. For
                  commercial emergencies, see{" "}
                  <Link
                    href="/paradise/emergency-plumbing/"
                    className="font-semibold text-white underline underline-offset-4 hover:text-white/80"
                  >
                    emergency plumbing in Paradise
                  </Link>
                  .
                </p>
              </div>
              <div className="flex flex-col items-start gap-4 lg:items-end">
                <a
                  href="tel:+17025679172"
                  className="inline-flex min-h-14 items-center justify-center rounded-lg bg-brand-primary px-8 text-lg font-semibold text-white shadow-sm hover:bg-brand-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary motion-safe:transition-colors motion-safe:active:scale-[0.97]"
                >
                  Call Now: (702) 567-9172
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: SERVICE AREAS */}
        <section className="bg-brand-charcoal text-white">
          <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10 lg:pb-24 xl:px-12">
            <div className="max-w-3xl text-left">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Commercial Plumbing Service Areas in Paradise, NV
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/85">
                Red Carpet Plumbing provides commercial plumbing throughout
                Paradise and the surrounding Las Vegas Valley. Commercial service
                areas within Paradise include:
              </p>
            </div>

            <ul className="mt-10 flex flex-wrap gap-3">
              {SERVICE_AREAS.map((area) => (
                <li key={area}>
                  <span className="block rounded-lg border border-white/10 bg-white/5 px-5 py-3 font-medium text-white/85">
                    {area}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-base leading-7 text-white/80">
              If your property or business is not listed, call (702) 567-9172 to
              confirm coverage. For the full range of plumbing services in
              Paradise, see our{" "}
              <Link
                href="/paradise-plumbing-services/"
                className="font-semibold text-white underline underline-offset-4 hover:text-white/80"
              >
                Paradise plumbing services
              </Link>{" "}
              page. For broader Las Vegas Valley commercial coverage, see{" "}
              <Link
                href="/las-vegas-plumbing-services/"
                className="font-semibold text-white underline underline-offset-4 hover:text-white/80"
              >
                Las Vegas plumbing services
              </Link>
              .
            </p>
          </div>
        </section>

        {/* SECTION 8: FAQ */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Frequently Asked Questions About Commercial Plumbing in Paradise,
                NV
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {PARADISE_COMMERCIAL_FAQS.map((faq) => (
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
          headline="Ready to Schedule Commercial Plumbing Service in Paradise, NV?"
          body="Red Carpet Plumbing provides licensed commercial plumbing throughout Paradise and the Las Vegas Valley. NV Contractor License #0048585A, C-1 Plumbing and Heating. Call now or request service online."
          primaryCTA={{
            label: "Call Now: (702) 567-9172",
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
