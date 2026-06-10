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
// source-site/project claims surfaced in the approved brief and shown on this
// page. The 24/7 emergency-availability FLAG is repeated inline at every copy
// instance referencing emergency availability (hero trust strip, Section 3
// emergency card, Section 5 Step 1, and FAQ Q5 source). License #0048585A and
// transparent-pricing are also source-site claims. Confirm before launch.
//
// SCHEMA NOTE: Spring Valley is an unincorporated Clark County community. Per
// the Batch 6 schema normalization, Service.areaServed uses Place ->
// AdministrativeArea (Clark County) -> State (Nevada), matching all Spring
// Valley siblings. Plain City is reserved for incorporated cities (Las Vegas,
// Henderson, North Las Vegas). Provider Plumber (name, url, telephone). 5
// separate JsonLd blocks. No AggregateRating/Review. No sameAs. HowTo covers the
// visible process steps. FLAG comments live in source only and are NOT part of
// any visible/schema string.

export const metadata: Metadata = {
  title: "Commercial Plumbing in Spring Valley, NV | Red Carpet Plumbing",
  description:
    "Licensed commercial plumbing in Spring Valley, NV. Red Carpet Plumbing serves businesses, restaurants, property managers, and HOA communities throughout Spring Valley. NV License #0048585A, C-1 Plumbing and Heating. Clark County permits coordinated.",
  alternates: {
    canonical:
      "https://redcarpetplumbing.com/spring-valley/commercial-plumbing/",
  },
  openGraph: {
    title: "Commercial Plumbing in Spring Valley, NV | Red Carpet Plumbing",
    description:
      "Licensed commercial plumbing throughout Spring Valley, NV. Businesses, restaurants, property managers, HOA communities. NV License #0048585A, C-1. Clark County permits coordinated.",
    url: "https://redcarpetplumbing.com/spring-valley/commercial-plumbing/",
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
const SV_COMMERCIAL_FAQS = [
  {
    question:
      "What commercial plumbing services are available in Spring Valley, NV?",
    answer:
      "Red Carpet Plumbing provides commercial plumbing repair, installation, and maintenance throughout Spring Valley including commercial drain cleaning and hydro jetting, grease trap and floor drain service, commercial water heater repair and installation, commercial leak detection and repair, commercial sewer line services, backflow prevention installation and testing, commercial pipe repair and re-piping, and emergency commercial plumbing response. All work is performed under Nevada Contractor License #0048585A, C-1 Plumbing and Heating.",
  },
  {
    question:
      "Do I need a licensed plumber for commercial plumbing work in Spring Valley?",
    answer:
      "Yes. Commercial plumbing work in Spring Valley requires a licensed Nevada contractor. Spring Valley is an unincorporated Clark County community, and Clark County is the permit jurisdiction for commercial plumbing here. Red Carpet Plumbing holds Nevada Contractor License #0048585A under the C-1 Plumbing and Heating classification, which covers commercial plumbing repair and installation throughout Spring Valley. Most commercial plumbing projects in Spring Valley require Clark County permits. Always verify a contractor's license number before hiring for commercial work.",
  },
  {
    question:
      "Does Red Carpet Plumbing work with property managers in Spring Valley?",
    answer:
      "Yes. Red Carpet Plumbing provides commercial plumbing services for property managers overseeing multi-unit residential buildings, mixed-use properties, and strip mall commercial parks throughout Spring Valley. Services include shared sewer line maintenance, individual unit repairs, supply line service, and tenant improvement plumbing work. We work with property managers to coordinate access and scheduling under NV License #0048585A.",
  },
  {
    question:
      "What are the most common commercial plumbing problems in Spring Valley?",
    answer:
      "The most common commercial plumbing issues in Spring Valley include grease-related drain blockages in restaurant and food service drain lines, mineral scale buildup in commercial water heaters from Las Vegas hard water, supply line failures in older commercial buildings along the Desert Inn and West Sahara corridors, backflow prevention device maintenance for commercial irrigation and fire suppression systems, and sewer line issues in high-traffic multi-unit properties. Older commercial properties in northern Spring Valley may also have original galvanized supply lines that reduce water pressure and quality as corrosion advances.",
  },
  // FLAG: 24/7 emergency-availability claim in this answer — verify before final launch.
  {
    question:
      "Does Red Carpet Plumbing provide emergency commercial plumbing in Spring Valley?",
    answer:
      "Red Carpet Plumbing provides emergency commercial plumbing response throughout Spring Valley. For commercial plumbing emergencies including burst pipes, sewer backups, and water heater failures, call (702) 567-9172 directly.",
  },
  {
    question:
      "What is the permit jurisdiction for commercial plumbing work in Spring Valley?",
    answer:
      "Spring Valley is an unincorporated Clark County community. The permit jurisdiction for commercial plumbing work in Spring Valley is Clark County, not the City of Las Vegas. Red Carpet Plumbing coordinates the required Clark County permits for applicable commercial plumbing projects in Spring Valley. If you are unsure whether your commercial plumbing project requires a permit, contact us before work begins.",
  },
];

const HERO_SUBHEADING =
  "Red Carpet Plumbing provides licensed commercial plumbing services for businesses, restaurants, property managers, and HOA communities throughout Spring Valley, Nevada. Spring Valley is an unincorporated Clark County community with a dense concentration of commercial corridors along Spring Valley Parkway, Rainbow Boulevard, Tropicana Avenue, and the West Sahara and Desert Inn corridors. All commercial work is performed under Nevada Contractor License #0048585A, C-1 Plumbing and Heating. Clark County permits are coordinated for applicable projects.";

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
// commercial focus, property-manager/HOA service, permit handling) — no new
// business claims.
const COMMERCIAL_TRUST_STRIP = [
  "NV Licensed #0048585A, C-1",
  "Licensed Commercial Plumbers",
  "Property Manager and HOA Service",
  "Clark County Permits Coordinated",
];

const WHO_WE_SERVE_INTRO =
  "Red Carpet Plumbing provides commercial plumbing services throughout Spring Valley for a range of business types and property operators. Our Nevada C-1 Plumbing and Heating license covers commercial plumbing repair and installation throughout Spring Valley and Clark County. Spring Valley is an unincorporated Clark County community, and Clark County is the permit jurisdiction for commercial plumbing work here, not the City of Las Vegas.";

const WHO_WE_SERVE = [
  {
    title: "Business Owners and Operators",
    body: "Retail stores, restaurants, office buildings, medical offices, and service businesses throughout Spring Valley depend on functioning plumbing for daily operations. Red Carpet Plumbing provides repair, maintenance, and installation services for commercial businesses along Spring Valley's commercial corridors, including the Spring Valley Parkway retail strip, Rainbow Boulevard commercial district, and the Tropicana and Flamingo corridors. We coordinate scheduling to minimize disruption to business operations.",
  },
  {
    title: "Restaurants and Food Service Operations",
    body: "Restaurants and food service businesses in Spring Valley require grease trap maintenance, floor drain cleaning, high-capacity hot water service, and drain line service. Health code compliance for commercial kitchens depends on properly maintained drain and fixture systems. Red Carpet Plumbing provides drain cleaning, grease trap service, water heater service, and fixture repair for food service operators throughout Spring Valley's commercial corridors.",
  },
  {
    title: "Property Managers and Multi-Unit Buildings",
    body: "Spring Valley is one of the most densely populated communities in the Las Vegas Valley, with a significant concentration of multi-unit residential buildings, mixed-use developments, and strip mall commercial parks. Property managers responsible for these properties need a licensed plumbing contractor who can handle shared sewer line maintenance, individual unit repairs, supply line service, and tenant improvement plumbing work. Red Carpet Plumbing works with Spring Valley property managers to provide responsive, documented commercial plumbing service under NV License #0048585A.",
  },
  {
    title: "HOA and Master-Planned Communities",
    body: "Spring Valley includes a number of HOA-managed residential communities with shared plumbing infrastructure, including common area irrigation connections and backflow prevention devices that require licensed installation, testing, and maintenance under Clark County code. Red Carpet Plumbing provides commercial plumbing services for HOA communities and their management companies throughout Spring Valley.",
  },
];

// Section 3 service cards link to their built service routes (built={true} so the
// card title and Learn More render as live links). Cards 1 and 4 point to the
// Spring Valley-specific drain-cleaning and leak-detection pages, both built and
// validated. Card 8 carries an inline 24/7 FLAG.
const COMMERCIAL_SERVICES: {
  title: string;
  description: string;
  href: string;
}[] = [
  {
    title: "Commercial Drain Cleaning and Hydro Jetting",
    description:
      "Grease buildup, mineral scale, and debris accumulation in commercial drain lines cause slow drains and backups that disrupt business operations. Red Carpet Plumbing provides commercial drain cleaning and hydro jetting for kitchen drains, floor drains, restroom lines, and main sewer connections throughout Spring Valley.",
    // /spring-valley/drain-cleaning/ (Page 13) is built and validated.
    href: "/spring-valley/drain-cleaning/",
  },
  {
    title: "Grease Trap and Floor Drain Service",
    description:
      "Spring Valley restaurants and food service businesses require regular grease trap maintenance and floor drain cleaning to meet health code requirements. Red Carpet Plumbing provides grease trap and floor drain service for food service operators throughout Spring Valley.",
    href: "/commercial-plumbing/",
  },
  {
    title: "Commercial Water Heater Repair and Installation",
    description:
      "High-capacity water heater systems in Spring Valley commercial properties face continuous demand and accelerated mineral scale buildup from Las Vegas hard water. Red Carpet Plumbing provides repair, maintenance, and replacement of commercial water heater systems throughout Spring Valley.",
    href: "/water-heater-repair-installation/",
  },
  {
    title: "Commercial Leak Detection and Repair",
    description:
      "Undetected leaks in commercial supply lines, fixture connections, and sewer lines accumulate costs and cause property damage. Red Carpet Plumbing provides commercial leak detection using acoustic sensors and pressure testing for businesses and multi-unit properties throughout Spring Valley.",
    // /spring-valley/leak-detection-repair/ (Page 15) is built and validated.
    href: "/spring-valley/leak-detection-repair/",
  },
  {
    title: "Commercial Sewer Line Services",
    description:
      "Inspection, cleaning, repair, and replacement of commercial sewer lines serving businesses, multi-unit buildings, and commercial properties throughout Spring Valley.",
    href: "/sewer-line-services/",
  },
  {
    title: "Backflow Prevention and Testing",
    description:
      "Installation, testing, and repair of backflow prevention devices required for commercial properties, irrigation systems, and fire suppression connections under Clark County code. Spring Valley commercial properties with irrigation systems or fire suppression connections require licensed backflow prevention devices.",
    href: "/backflow-prevention/",
  },
  {
    title: "Commercial Pipe Repair and Re-Piping",
    description:
      "Repair and replacement of aging or failing supply lines, drain lines, and commercial pipe systems in Spring Valley businesses and multi-unit buildings. Older commercial buildings in the Desert Inn and West Sahara corridors may have original galvanized supply lines that require full replacement rather than spot repair.",
    href: "/re-piping/",
  },
  // FLAG: 24/7 emergency-availability claim implied by this card — verify before final launch.
  {
    title: "Emergency Commercial Plumbing",
    description:
      "Emergency plumbing response for burst pipes, sewer backups, water heater failures, and major leaks in Spring Valley commercial properties.",
    href: "/spring-valley/emergency-plumbing/",
  },
];

// Section 4 — Spring Valley commercial plumbing conditions (four H3 cards).
const COMMERCIAL_FACTORS = [
  {
    title: "Dense Commercial Corridors Throughout the Community",
    body: "Spring Valley's commercial plumbing demand is driven by a dense network of retail centers, restaurant strips, service businesses, and mixed-use properties spread across multiple high-traffic corridors. The Spring Valley Parkway and Rainbow Boulevard corridors contain concentrated retail and restaurant developments. The Tropicana and Flamingo corridors run through Spring Valley's commercial and mixed-use zones. Businesses along these corridors depend on drain systems, fixture connections, and water heater systems that hold up under continuous commercial use.",
  },
  {
    title:
      "Older Commercial Buildings in the Desert Inn and West Sahara Corridors",
    body: "The northern Spring Valley commercial corridors along Desert Inn Road and West Sahara Avenue include older commercial properties built in the 1970s through 1990s. These buildings share the same galvanized steel supply line risk as older residential properties in this area. Galvanized pipe corrosion reduces water pressure and water quality over time and can result in sudden supply line failures in older commercial buildings. When a commercial property in this corridor shows reduced pressure or discolored water, a full supply line assessment is warranted before additional failures occur.",
  },
  {
    title: "Clark County Permits and Licensed Contractor Requirements",
    body: "Commercial plumbing work in Spring Valley falls under Clark County jurisdiction, not the City of Las Vegas. Most commercial plumbing projects in Spring Valley require Clark County permits and must be performed by a licensed Nevada contractor. Nevada C-1 Plumbing and Heating licensees are authorized for commercial plumbing work throughout Clark County. Red Carpet Plumbing holds NV Contractor License #0048585A and handles permit coordination for applicable commercial projects in Spring Valley. Working with an unlicensed contractor on commercial plumbing work in Clark County can result in failed inspections and compliance issues.",
  },
  {
    title: "Hard Water Demand on Commercial Systems",
    body: "Las Vegas hard water, at 17 to 24 grains per gallon (approximately 280 parts per million of dissolved minerals), affects commercial plumbing systems at a much greater scale than residential. Commercial water heaters, fixture connections, and supply lines in high-volume Spring Valley businesses accumulate mineral scale faster than residential systems. Regular inspection and maintenance of commercial systems helps prevent unexpected failures that disrupt operations.",
  },
];

// Section 5 — visible <ol>, HowTo schema source. Step 1 body is the clean schema
// text; the visible Step 1 renders the "Spring Valley emergency plumbing" anchor
// inline (text matches this string character-for-character).
const COMMERCIAL_STEPS = [
  // FLAG: 24/7 emergency-response availability implied in this step — verify before final launch.
  {
    name: "Call and Describe the Job",
    body: "Call Red Carpet Plumbing at (702) 567-9172 and describe the issue or project. We work with business owners, facilities managers, and property managers throughout Spring Valley. For commercial plumbing emergencies, see our Spring Valley emergency plumbing page.",
  },
  {
    name: "Site Assessment and Diagnosis",
    body: "A licensed plumber arrives to assess the commercial plumbing system, diagnose the issue, and document what needs to be addressed. We use professional equipment to inspect drain lines, supply lines, water heaters, and connections. For older Spring Valley commercial buildings with original galvanized supply lines, we assess the full system condition, not just the immediate failure point.",
  },
  {
    name: "Review Scope and Approve the Work",
    body: "We explain what we found, what the repair or installation involves, and what options are available. For commercial projects requiring Clark County permits, we identify the permit requirements and coordinate the filing as part of the project. You approve the full scope before any work begins.",
  },
  {
    name: "Complete the Work and Follow Up",
    body: "We complete the repair, installation, or maintenance project and verify the system is operating correctly before we leave. For permitted commercial work, we schedule the required Clark County inspection and obtain final sign-off. We provide documentation of all work completed under NV License #0048585A.",
  },
];

const COMMERCIAL_AREAS_INTRO =
  "Red Carpet Plumbing provides commercial plumbing services throughout Spring Valley and its surrounding communities.";

// Plain-text area chips. No Spring Valley sub-area routes are built.
const SV_COMMERCIAL_AREAS = [
  "Spring Valley Parkway Corridor",
  "Rainbow Boulevard Commercial District",
  "Tropicana Avenue Corridor",
  "Flamingo Road Corridor",
  "West Sahara Commercial Corridor",
  "Desert Inn Road Corridor",
  "Decatur Boulevard Area",
  "Western Spring Valley Commercial Areas",
];

// ---------------------------------------------------------------------------
// JSON-LD payloads. Service.areaServed uses Place -> AdministrativeArea (Clark
// County) -> State (Nevada) because Spring Valley is unincorporated. Do NOT use
// "@type": "City".
// ---------------------------------------------------------------------------
const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Commercial Plumbing in Spring Valley, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides licensed commercial plumbing in Spring Valley, NV. Businesses, restaurants, property managers, HOA communities. NV License #0048585A, C-1. Clark County permits coordinated.",
  url: "https://redcarpetplumbing.com/spring-valley/commercial-plumbing/",
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
      name: "Spring Valley Plumbing Services",
      item: "https://redcarpetplumbing.com/spring-valley-plumbing-services/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Commercial Plumbing in Spring Valley",
      item: "https://redcarpetplumbing.com/spring-valley/commercial-plumbing/",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Commercial Plumbing in Spring Valley, NV",
  serviceType: "Commercial Plumbing",
  description:
    "Red Carpet Plumbing provides licensed commercial plumbing repair, installation, and maintenance throughout Spring Valley, NV. Services include commercial drain cleaning, grease trap service, water heater repair, leak detection, sewer line services, backflow prevention, pipe repair, and emergency commercial response. NV License #0048585A, C-1 Plumbing and Heating.",
  provider: {
    "@type": "Plumber",
    name: "Red Carpet Plumbing",
    url: "https://redcarpetplumbing.com",
    // FLAG: VERIFY telephone (carried forward from existing pages).
    telephone: "+17025679172",
  },
  areaServed: {
    "@type": "Place",
    name: "Spring Valley",
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
// step-by-step process (titles + body) on the page.
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Get Commercial Plumbing Service in Spring Valley, NV",
  description:
    "The process Red Carpet Plumbing follows for commercial plumbing service in Spring Valley, NV.",
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
  mainEntity: SV_COMMERCIAL_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function SpringValleyCommercialPlumbingPage() {
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
              label: "Spring Valley Plumbing Services",
              href: "/spring-valley-plumbing-services/",
            },
            { label: "Commercial Plumbing in Spring Valley" },
          ]}
        />

        {/* SECTION 1: HERO */}
        {/* TODO: Replace the accent hero with an approved commercial plumbing */}
        {/* hero image when the client supplies one at */}
        {/* public/images/services/commercial-plumbing/hero.webp (none exists yet). */}
        <HeroSection
          headingLevel="h1"
          headline="Commercial Plumbing in Spring Valley, NV"
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
          ctaNote="NV Licensed #0048585A, C-1 Plumbing and Heating. Clark County permits coordinated."
          formSlot={<QuoteFormPlaceholder title="Get Commercial Plumbing Help" />}
          accentWidth="sm"
        />

        {/* SECTION 1b: TRUST STRIP */}
        <section
          aria-label="Why Spring Valley businesses choose Red Carpet Plumbing for commercial plumbing"
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
                Commercial Plumbing for Spring Valley Businesses and Properties
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
                    Commercial Plumbing Services We Provide in Spring Valley
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    For our full overview of commercial plumbing capabilities,
                    see our{" "}
                    <Link
                      href="/commercial-plumbing/"
                      className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                    >
                      commercial plumbing services
                    </Link>{" "}
                    page.
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

        {/* SECTION 4: SPRING VALLEY COMMERCIAL CONDITIONS */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Spring Valley Commercial Plumbing Conditions
                  </h2>
                </div>
              </SectionRevealItem>
              <SectionRevealItem className="mt-10">
                <ul className="space-y-5">
                  {COMMERCIAL_FACTORS.map((c) => (
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
                    Our Commercial Plumbing Process in Spring Valley
                  </h2>
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
                        {index === 0 ? (
                          // Visible Step 1 renders the emergency anchor inline.
                          // Text matches COMMERCIAL_STEPS[0].body exactly so the
                          // HowTo schema and visible copy stay in sync.
                          <p className="mt-2 text-base leading-7 text-brand-dark/80">
                            Call Red Carpet Plumbing at (702) 567-9172 and
                            describe the issue or project. We work with business
                            owners, facilities managers, and property managers
                            throughout Spring Valley. For commercial plumbing
                            emergencies, see our{" "}
                            <Link
                              href="/spring-valley/emergency-plumbing/"
                              className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                            >
                              Spring Valley emergency plumbing
                            </Link>{" "}
                            page.
                          </p>
                        ) : (
                          <p className="mt-2 text-base leading-7 text-brand-dark/80">
                            {step.body}
                          </p>
                        )}
                      </div>
                    </li>
                  ))}
                </ol>
              </SectionRevealItem>
            </SectionReveal>
          </div>
        </section>

        {/* SECTION 6: COVERAGE AREAS */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Spring Valley Commercial Plumbing Coverage Areas
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                {COMMERCIAL_AREAS_INTRO}
              </p>
            </div>
            <ul className="mt-8 flex flex-wrap gap-3">
              {SV_COMMERCIAL_AREAS.map((area) => (
                <li
                  key={area}
                  className="rounded-full bg-brand-surface-alt px-4 py-2 text-sm font-medium text-brand-dark/80 ring-1 ring-brand-surface-alt"
                >
                  {area}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-base leading-7 text-brand-dark/80">
              Red Carpet Plumbing also provides{" "}
              <Link
                href="/spring-valley-plumbing-services/"
                className="font-semibold text-brand-primary hover:text-brand-primary-hover"
              >
                Spring Valley plumbing services
              </Link>{" "}
              for residential customers throughout Spring Valley. For commercial
              plumbing across the Las Vegas Valley, see our{" "}
              <Link
                href="/las-vegas/commercial-plumbing/"
                className="font-semibold text-brand-primary hover:text-brand-primary-hover"
              >
                Las Vegas commercial plumbing
              </Link>{" "}
              page.
            </p>
          </div>
        </section>

        {/* SECTION 7: FAQ */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Commercial Plumbing FAQs for Spring Valley
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {SV_COMMERCIAL_FAQS.map((faq) => (
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
          headline="Licensed Commercial Plumbing Throughout Spring Valley, NV"
          body="Red Carpet Plumbing provides licensed commercial plumbing repair, installation, and maintenance for businesses, restaurants, property managers, and HOA communities throughout Spring Valley. NV Contractor License #0048585A, C-1 Plumbing and Heating. Clark County permits coordinated."
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
