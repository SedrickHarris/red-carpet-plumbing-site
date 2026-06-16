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
// License #0048585A, C-1 classification, permit handling, and
// transparent-pricing are also source-site claims. Confirm before launch.
//
// SCHEMA NOTE: Enterprise is an unincorporated Clark County community (not an
// incorporated city), so Service.areaServed uses Place -> AdministrativeArea
// (Clark County) -> State (Nevada), NOT City. Matches the Enterprise emergency,
// drain-cleaning, water-heater, leak-detection, and slab-leak siblings. No
// AggregateRating/Review. No sameAs. No hasCredential. Provider Plumber (name,
// url, telephone). 5 separate JsonLd blocks. HowTo included because Section 5
// renders the matching visible numbered process steps.
//
// IMAGE NOTE: No commercial-plumbing hero/card image exists under
// public/images/services/commercial-plumbing/. Per build-brief Guardrail 7 we
// do NOT invent a path; the hero renders without a background image (its
// default radial-gradient treatment) until an approved asset is added.

export const metadata: Metadata = {
  title: "Commercial Plumbing in Enterprise, NV | Red Carpet Plumbing",
  description:
    "Licensed commercial plumbing services in Enterprise, NV. Red Carpet Plumbing serves businesses, commercial parks, and property managers throughout the Southwest Las Vegas 215 Beltway corridor. NV Licensed #0048585A, C-1. Call (702) 567-9172.",
  alternates: {
    canonical: "https://redcarpetplumbing.com/enterprise/commercial-plumbing/",
  },
  openGraph: {
    title: "Commercial Plumbing in Enterprise, NV | Red Carpet Plumbing",
    description:
      "Licensed commercial plumbing for Enterprise businesses, commercial parks, warehouses, and property managers. Southwest Las Vegas 215 Beltway corridor. NV Licensed #0048585A, C-1 Plumbing and Heating.",
    url: "https://redcarpetplumbing.com/enterprise/commercial-plumbing/",
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
const ENTERPRISE_COMMERCIAL_FAQS = [
  {
    question:
      "Is Red Carpet Plumbing licensed for commercial plumbing in Enterprise?",
    answer:
      "Yes. Red Carpet Plumbing holds Nevada Contractor License #0048585A under the C-1 Plumbing and Heating classification, issued by the State of Nevada Contractors Board. This license covers commercial plumbing work throughout Clark County including Enterprise.",
  },
  {
    question:
      "What commercial plumbing services does Red Carpet Plumbing provide in Enterprise?",
    answer:
      "Red Carpet Plumbing provides commercial water heater repair and installation, commercial drain cleaning, backflow prevention testing and certification, supply line repair and replacement, permit-required commercial plumbing work, and commercial emergency plumbing support for businesses throughout Enterprise and the 215 Beltway corridor.",
  },
  {
    question:
      "What types of commercial properties does Red Carpet Plumbing serve in Enterprise?",
    answer:
      "Red Carpet Plumbing serves warehouse and distribution facilities, retail and restaurant properties, office and commercial parks, multi-unit residential and HOA properties, and light industrial properties throughout Enterprise and the Southwest Las Vegas 215 Beltway corridor.",
  },
  {
    question:
      "Who is the permit authority for commercial plumbing work in Enterprise?",
    answer:
      "Enterprise is an unincorporated Clark County community. The permit authority for commercial plumbing work in Enterprise is Clark County, not the City of Las Vegas. Red Carpet Plumbing files permits with Clark County Building Department and coordinates final inspections for commercial projects that require permits.",
  },
  {
    question:
      "How often do commercial backflow prevention devices need to be tested in Enterprise?",
    answer:
      "Clark County requires annual testing of commercial backflow prevention devices by a licensed plumber. Red Carpet Plumbing provides backflow prevention device testing, certification, and replacement for commercial properties in Enterprise.",
  },
  {
    question: "How do I request commercial plumbing service in Enterprise?",
    answer:
      "Call Red Carpet Plumbing at (702) 567-9172 or submit a service request online. For commercial plumbing emergencies in Enterprise, calling directly is the fastest option.",
  },
];

const HERO_SUBHEADING =
  "Red Carpet Plumbing provides licensed commercial plumbing services for businesses, commercial parks, warehouse and distribution facilities, retail properties, and multi-unit residential buildings throughout Enterprise, Nevada and the Southwest Las Vegas 215 Beltway corridor. Nevada Contractor License #0048585A, C-1 Plumbing and Heating classification.";

const TRUST_STRIP_ITEMS = [
  "NV Licensed #0048585A, C-1 Plumbing and Heating",
  // FLAG: VERIFY "over 40 years" before publishing.
  "Over 40 Years Serving Las Vegas Valley",
  // FLAG: VERIFY rating and review count before publishing.
  "4.8-Star Rating, 76 Google Reviews",
  "Clark County Permits and Inspections",
  "Transparent Pricing, No Hidden Fees",
];

// Section 3 — who we serve (H3 + body), rendered as visible H3 sections.
const WHO_WE_SERVE = [
  {
    heading: "Warehouse and Distribution Facilities",
    body: "The 215 Beltway corridor through Enterprise and Southwest Las Vegas has a high concentration of warehouse, fulfillment, and distribution facilities. These properties require licensed plumbing services for supply line maintenance, water heater systems, floor drain service, and backflow prevention device testing and certification. Red Carpet Plumbing provides commercial plumbing services for warehouse and distribution properties throughout the corridor.",
  },
  {
    heading: "Retail and Restaurant Properties",
    body: "Enterprise's commercial parks and retail corridors include restaurants, food service operations, and retail businesses that rely on properly functioning plumbing systems. Restaurant and food service properties require grease trap maintenance, floor drain cleaning, and commercial water heater service. Red Carpet Plumbing provides commercial drain cleaning and water heater services for retail and food service properties in Enterprise.",
  },
  {
    heading: "Office and Commercial Parks",
    body: "Enterprise has a growing number of office parks and commercial complexes along the 215 Beltway. These properties require supply line maintenance, restroom plumbing service, and water heater system service. Red Carpet Plumbing works with commercial property managers and building owners to minimize disruption to tenants during plumbing service.",
  },
  {
    heading: "Multi-Unit Residential and HOA Properties",
    body: "Enterprise includes master-planned residential communities with HOA-managed common areas and multi-unit housing properties. These properties require licensed plumbing for common-area supply lines, water heater systems, and shared plumbing infrastructure. Red Carpet Plumbing coordinates with HOA managers and property management companies throughout Enterprise.",
  },
  {
    heading: "Light Industrial Properties",
    body: "Light industrial properties along the Enterprise commercial corridor require licensed plumbing services for process water supply, floor drains, and utility connections. Red Carpet Plumbing's C-1 Plumbing and Heating classification covers commercial and light industrial plumbing throughout Clark County.",
  },
];

// Section 4 — commercial services (bold label + body). One block carries an
// inline link to the built /backflow-prevention/ core page.
const COMMERCIAL_SERVICES: {
  label: string;
  body: string;
  link?: { pre: string; href: string; text: string; post: string };
}[] = [
  {
    label: "Commercial water heater repair and installation",
    body: "Red Carpet Plumbing repairs and installs commercial water heater systems for businesses in Enterprise. Las Vegas Valley hard water accelerates scale buildup in commercial water heaters, shortening service life and reducing efficiency. We service tank and tankless commercial water heater systems and advise on replacement when scaling or age indicates end of service life.",
  },
  {
    label: "Commercial drain cleaning",
    body: "Commercial drain lines in food service, retail, and industrial properties accumulate grease, scale, and debris faster than residential systems. Red Carpet Plumbing provides commercial drain cleaning using hydro jetting and professional drain equipment for businesses throughout Enterprise and the 215 Beltway corridor.",
  },
  {
    label: "Backflow prevention testing and certification",
    body: "Commercial properties in Clark County are required to have backflow prevention devices tested annually by a licensed plumber. Red Carpet Plumbing provides backflow prevention device testing, certification, and replacement for commercial properties in Enterprise.",
    link: {
      pre: " See our ",
      href: "/backflow-prevention/",
      text: "backflow prevention services",
      post: " page for details.",
    },
  },
  {
    label: "Supply line repair and replacement",
    body: "Commercial supply line failures can disrupt business operations and cause significant water damage. Red Carpet Plumbing responds to commercial supply line leaks, evaluates the full system, and provides targeted repair or replacement to restore service quickly.",
  },
  {
    label: "Commercial emergency plumbing",
    // FLAG: source-site claim — verify before final launch.
    body: "Commercial plumbing emergencies including burst pipes, sewer backups, and water heater failures can cause significant business disruption. Red Carpet Plumbing provides commercial emergency plumbing support for businesses in Enterprise and the Southwest Las Vegas area.",
  },
  {
    label: "Permit-required commercial plumbing work",
    body: "Commercial plumbing installations and modifications that require Clark County permits are handled by Red Carpet Plumbing from permit filing through final inspection sign-off. We work directly with Clark County Building Department for commercial projects in Enterprise.",
  },
];

// Section 5 — visible <ol>, HowTo schema source.
const COMMERCIAL_STEPS = [
  {
    name: "Call and Describe the Commercial Job",
    body: "Call Red Carpet Plumbing at (702) 567-9172 and describe the plumbing issue or project. We work with business owners, facilities managers, property managers, and HOA management companies throughout Enterprise and the 215 Beltway corridor.",
  },
  {
    name: "On-Site Assessment and Diagnosis",
    body: "A licensed plumber arrives to assess the commercial plumbing system, diagnose the issue, and document what needs to be addressed. We use professional equipment to inspect drain lines, supply lines, water heater systems, and backflow prevention devices.",
  },
  {
    name: "Review Scope and Approve the Work",
    body: "We explain what we found, what the repair or installation involves, and what options are available. You approve the full scope before any work begins. No surprises and no hidden fees.",
  },
  {
    name: "Licensed Repair or Installation with Minimal Disruption",
    body: "Our licensed plumbers complete the commercial plumbing work with care to limit disruption to business operations. We coordinate timing with facilities managers and property managers to minimize impact on tenants and operations.",
  },
  {
    name: "Permit Coordination and Inspection When Required",
    body: "For commercial plumbing work that requires a Clark County permit, Red Carpet Plumbing files the permit and coordinates the final inspection for sign-off. Enterprise permit jurisdiction is Clark County, not the City of Las Vegas.",
  },
];

// Section 6 — why choose (bulleted list). FLAGged items per brief.
const WHY_CHOOSE_ITEMS = [
  "Nevada Contractor License #0048585A, C-1 Plumbing and Heating",
  // FLAG: VERIFY "over 40 years" before publishing.
  "Over 40 years serving the Las Vegas Valley",
  "Local, family-owned, not a national franchise",
  // FLAG: VERIFY rating and review count before publishing.
  "4.8-star rating across 76 Google reviews",
  "Clark County permits filed and inspections coordinated",
  "Transparent pricing, no hidden fees",
  // FLAG: source-site claim — verify before final launch.
  "24/7 emergency plumbing support",
];

// Section 7 — commercial area chips (plain text only; no Enterprise sub-area
// routes are built).
const ENTERPRISE_COMMERCIAL_AREAS = [
  "215 Beltway Commercial Corridor",
  "Southwest Las Vegas Industrial Parks",
  "Rhodes Ranch Commercial Area",
  "Mountain's Edge Commercial Strip",
  "Silverado Ranch Commercial",
  "Enterprise Business Parks",
  "Southern Highlands Commercial",
  "Inspirada Adjacent Commercial",
];

// ---------------------------------------------------------------------------
// JSON-LD payloads. Service.areaServed uses Place -> AdministrativeArea (Clark
// County) -> State (Nevada) because Enterprise is unincorporated. Do NOT use
// "@type": "City".
// ---------------------------------------------------------------------------
const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Commercial Plumbing in Enterprise, NV | Red Carpet Plumbing",
  description:
    "Licensed commercial plumbing services in Enterprise, NV. Red Carpet Plumbing serves businesses, commercial parks, and property managers throughout the Southwest Las Vegas 215 Beltway corridor. NV Licensed #0048585A, C-1.",
  url: "https://redcarpetplumbing.com/enterprise/commercial-plumbing/",
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
      name: "Commercial Plumbing in Enterprise",
      item: "https://redcarpetplumbing.com/enterprise/commercial-plumbing/",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Commercial Plumbing in Enterprise, NV",
  serviceType: "Commercial Plumbing",
  description:
    "Red Carpet Plumbing provides licensed commercial plumbing services for businesses, commercial parks, warehouse and distribution facilities, retail properties, and multi-unit residential buildings throughout Enterprise, NV and the Southwest Las Vegas 215 Beltway corridor.",
  provider: {
    "@type": "Plumber",
    name: "Red Carpet Plumbing",
    url: "https://redcarpetplumbing.com",
    // FLAG: VERIFY telephone (carried forward from existing pages).
    telephone: "+17025679172",
  },
  areaServed: {
    "@type": "Place",
    name: "Enterprise, Nevada",
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
  name: "How Red Carpet Plumbing Handles Commercial Plumbing in Enterprise",
  description:
    "The process Red Carpet Plumbing follows for commercial plumbing projects in Enterprise, NV.",
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
  mainEntity: ENTERPRISE_COMMERCIAL_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function EnterpriseCommercialPlumbingPage() {
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
            { label: "Commercial Plumbing in Enterprise" },
          ]}
        />

        {/* SECTION 1: HERO */}
        {/* TODO: No commercial-plumbing hero/card image exists under
            public/images/services/commercial-plumbing/. Add an approved asset
            and pass it as backgroundImage. Do not invent a path. */}
        <HeroSection
          headingLevel="h1"
          headline="Commercial Plumbing in Enterprise, NV"
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
          ctaNote="Licensed commercial plumbers. C-1 classification. Transparent pricing."
          formSlot={
            <QuoteFormPlaceholder title="Request Commercial Plumbing Service" />
          }
        />

        {/* SECTION 2: DIRECT ANSWER BLOCK */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Licensed Commercial Plumbing for Enterprise Businesses
              </h2>
              <div className="mt-6 space-y-6 text-lg leading-8 text-brand-dark/80">
                <p>
                  Enterprise, Nevada is one of the fastest-growing commercial and
                  residential areas in Clark County, anchored by the 215 Beltway
                  corridor in the southwest Las Vegas Valley. The corridor
                  contains a significant concentration of commercial parks,
                  warehouse and distribution facilities, retail developments, and
                  light industrial properties, all of which require licensed
                  commercial plumbing services.
                </p>
                <p>
                  Red Carpet Plumbing holds Nevada Contractor License #0048585A
                  under the C-1 Plumbing and Heating classification, which covers
                  commercial plumbing work throughout Clark County including
                  Enterprise. We provide plumbing services for businesses,
                  commercial property managers, and multi-unit residential
                  buildings throughout Enterprise and the Southwest Las Vegas
                  area. For a full range of our commercial plumbing services,
                  visit our{" "}
                  <Link
                    href="/commercial-plumbing/"
                    className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                  >
                    commercial plumbing services
                  </Link>{" "}
                  page.
                </p>
                <p>
                  Enterprise is an unincorporated Clark County community. Permit
                  jurisdiction for commercial plumbing work in Enterprise is
                  Clark County, not the City of Las Vegas. Red Carpet Plumbing
                  handles permit filing for commercial projects that require it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: WHO WE SERVE */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Commercial Properties We Serve in Enterprise
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing provides commercial plumbing services for a
                range of property types throughout Enterprise and the 215 Beltway
                corridor.
              </p>
            </div>
            <div className="mt-10 space-y-6">
              {WHO_WE_SERVE.map((seg) => (
                <article
                  key={seg.heading}
                  className="rounded-2xl bg-white p-6 ring-1 ring-brand-surface-alt sm:p-8"
                >
                  <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                    {seg.heading}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-brand-dark/80">
                    {seg.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: COMMERCIAL PLUMBING SERVICES */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Commercial Plumbing Services in Enterprise
              </h2>
            </div>
            <ul className="mt-10 space-y-5">
              {COMMERCIAL_SERVICES.map((s) => (
                <li
                  key={s.label}
                  className="rounded-2xl bg-brand-surface-alt p-6 ring-1 ring-brand-surface-alt"
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

        {/* SECTION 5: OUR COMMERCIAL PLUMBING PROCESS (HowTo) */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Our Commercial Plumbing Process in Enterprise
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
                        <p className="mt-2 text-base leading-7 text-brand-dark/80">
                          {step.body}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </SectionRevealItem>
            </SectionReveal>

            {/* Mid-section emergency CTA */}
            <div className="mt-12 rounded-2xl border-l-4 border-brand-primary bg-white p-6 sm:p-8">
              <p className="text-base leading-7 text-brand-dark/80">
                For commercial plumbing emergencies in Enterprise
                {/* TODO-BATCH-6: activate to /enterprise/emergency-plumbing/ once confirmed built and QA-passed */}
                , call Red Carpet Plumbing at{" "}
                <a
                  href="tel:+17025679172"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  (702) 567-9172
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 6: WHY CHOOSE */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Why Enterprise Businesses Choose Red Carpet Plumbing
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing is a local, family-owned plumbing company
                serving Enterprise and the Southwest Las Vegas area. We hold
                Nevada Contractor License #0048585A under the C-1 Plumbing and
                Heating classification, covering residential and commercial
                plumbing work throughout Clark County including Enterprise.
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
              Our office is located at{" "}
              <a
                href="https://www.google.com/maps/place/3330+W+Hacienda+Ave+%23405,+Las+Vegas,+NV+89118/@36.0943375,-115.1870907,17z/data=!3m1!4b1!4m6!3m5!1s0x80c8c5d697faaaab:0x3db74ab4815ec72a!8m2!3d36.0943375!4d-115.1845158!16s%2Fg%2F11nynzwdy4?entry=ttu&g_ep=EgoyMDI0MDkxOC4xIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-brand-primary hover:underline"
                aria-label="Get directions to Red Carpet Plumbing on Google Maps"
              >
                3330 W. Hacienda Ave Ste. 405, Las Vegas, NV 89118
              </a>
              . Office hours are Monday through Friday, 7:30 AM to 4:30 PM. For a
              full range of our plumbing services, visit our{" "}
              <Link
                href="/enterprise-plumbing-services/"
                className="font-semibold text-brand-primary hover:text-brand-primary-hover"
              >
                Enterprise plumbing services
              </Link>{" "}
              page.
            </p>
            <p className="mt-4 text-base leading-7 text-brand-dark/80">
              For our full list of plumbing services, visit our{" "}
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

        {/* SECTION 7: COMMERCIAL AREAS WE SERVE */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Enterprise Commercial Areas and Corridors We Serve
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing serves commercial properties throughout
                Enterprise and the Southwest Las Vegas corridor. Call (702)
                567-9172 to confirm coverage for your property.
              </p>
            </div>
            <ul className="mt-8 flex flex-wrap gap-3">
              {ENTERPRISE_COMMERCIAL_AREAS.map((area) => (
                <li
                  key={area}
                  className="rounded-full bg-white px-4 py-2 text-sm font-medium text-brand-dark/80 ring-1 ring-brand-surface-alt"
                >
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 8: FAQ */}
        <section className="bg-white">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Commercial Plumbing FAQs for Enterprise Businesses
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {ENTERPRISE_COMMERCIAL_FAQS.map((faq) => (
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

        {/* SECTION 9: FINAL CTA */}
        <CTASection
          background="red"
          headline={<>Ready to Schedule Commercial Plumbing<br />in Enterprise?</>}
          body="Red Carpet Plumbing provides licensed commercial plumbing services throughout Enterprise and the Southwest Las Vegas area. C-1 Plumbing and Heating license. Clark County permits handled. Transparent pricing. No hidden fees."
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
