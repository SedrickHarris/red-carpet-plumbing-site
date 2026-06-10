import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { HeroSection } from "@/components/HeroSection";
import { JsonLd } from "@/components/JsonLd";
import { QuoteFormPlaceholder } from "@/components/QuoteFormPlaceholder";
import { ServiceCard } from "@/components/ServiceCard";
import { SectionReveal, SectionRevealItem } from "@/components/SectionReveal";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";

export const metadata: Metadata = {
  title: "Plumbing Services in Enterprise, NV | Red Carpet Plumbing",
  description:
    "Plumbing services in Enterprise, NV and Southwest Las Vegas. Emergency plumbing, drain cleaning, water heater repair. NV #0048585A. (702) 567-9172.",
  alternates: {
    canonical: "https://redcarpetplumbing.com/enterprise-plumbing-services/",
  },
  openGraph: {
    title: "Plumbing Services in Enterprise, NV | Red Carpet Plumbing",
    description:
      "Plumbing services in Enterprise, NV and Southwest Las Vegas. Emergency plumbing, drain cleaning, water heater repair. NV #0048585A. (702) 567-9172.",
    url: "https://redcarpetplumbing.com/enterprise-plumbing-services/",
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
//
// NOTE: Q2's question was reworded from the source build prompt. The original
// used an em dash ("What is Enterprise, NV — is it part of Las Vegas?"), which
// the project copy rules prohibit. Reworded to an em-dash-free phrasing; meaning
// preserved and visible text + schema remain identical (both map from here).
// ---------------------------------------------------------------------------
const ENTERPRISE_FAQS = [
  {
    question: "Does Red Carpet Plumbing serve Enterprise, NV?",
    answer:
      "Yes. Red Carpet Plumbing provides plumbing services throughout Enterprise, Nevada, including Southwest Las Vegas and surrounding neighborhoods. Call (702) 567-9172 to confirm coverage for your address.",
  },
  {
    question: "What is Enterprise, NV, and is it part of Las Vegas?",
    answer:
      "Enterprise is an unincorporated community in Clark County, Nevada. It is located in the southwest corner of the Las Vegas Valley and is governed by Clark County rather than the City of Las Vegas. Enterprise is one of the fastest-growing communities in Clark County. Red Carpet Plumbing serves Enterprise and the surrounding Southwest Las Vegas area.",
  },
  {
    question:
      "What plumbing services does Red Carpet Plumbing offer in Enterprise?",
    answer:
      "Red Carpet Plumbing provides a full range of residential and commercial plumbing services in Enterprise including emergency plumbing, drain cleaning, water heater repair and installation, slab leak detection and repair, leak detection, re-piping, commercial plumbing, and more.",
  },
  {
    question:
      "Does Red Carpet Plumbing handle commercial plumbing in the Enterprise area?",
    answer:
      "Yes. Red Carpet Plumbing provides commercial plumbing services for businesses, commercial parks, and industrial properties throughout Enterprise and the Southwest Las Vegas area. Nevada Contractor License #0048585A covers commercial plumbing work throughout Clark County including Enterprise.",
  },
  {
    question: "Is Red Carpet Plumbing licensed to work in Enterprise, NV?",
    answer:
      "Yes. Red Carpet Plumbing holds Nevada Contractor License #0048585A under the C-1 Plumbing and Heating classification, issued by the State of Nevada Contractors Board. This license covers plumbing work throughout Nevada including Enterprise.",
  },
  {
    question: "How do I request plumbing service in Enterprise?",
    answer:
      "Call Red Carpet Plumbing at (702) 567-9172 or submit a service request online. For emergency plumbing in Enterprise, calling directly is the fastest option.",
  },
];

// ---------------------------------------------------------------------------
// The 18 service cards. Each links to a live route (built=true).
// card.webp assets exist for the first five services; the rest use the
// ServiceCard ServiceImagePlaceholder fallback (no image prop passed).
// Built /enterprise/[service]/ service-location pages (emergency, drain
// cleaning, leak detection, water heater, slab leak) link to those pages; the
// remaining services link to their core service page until an Enterprise
// location page is built.
// ---------------------------------------------------------------------------
type ServiceLink = {
  title: string;
  href: string;
  image?: string;
  imageAlt: string;
};

const ENTERPRISE_SERVICES: ServiceLink[] = [
  {
    title: "Emergency Plumbing",
    href: "/enterprise/emergency-plumbing/",
    image: "/images/services/emergency-plumbing/card.webp",
    imageAlt: "24/7 emergency plumbing service in Enterprise, NV",
  },
  {
    title: "Drain Cleaning",
    href: "/enterprise/drain-cleaning/",
    image: "/images/services/drain-cleaning/card.webp",
    imageAlt: "Drain cleaning service in Enterprise, NV",
  },
  {
    title: "Leak Detection and Repair",
    href: "/enterprise/leak-detection-repair/",
    image: "/images/services/leak-detection-repair/card.webp",
    imageAlt: "Leak detection and repair in Enterprise, NV",
  },
  {
    title: "Water Heater Repair and Installation",
    href: "/enterprise/water-heater-repair-installation/",
    image: "/images/services/water-heater-repair-installation/card.webp",
    imageAlt: "Water heater repair and installation in Enterprise, NV",
  },
  {
    title: "Slab Leak Detection and Repair",
    href: "/enterprise/slab-leak-detection-repair/",
    image: "/images/services/slab-leak-detection-repair/card.webp",
    imageAlt: "Slab leak detection and repair in Enterprise, NV",
  },
  {
    title: "Sewer Line Services",
    href: "/sewer-line-services/",
    imageAlt: "Sewer line services in Enterprise, NV",
  },
  {
    title: "Re-Piping",
    href: "/re-piping/",
    imageAlt: "Re-piping services in Enterprise, NV",
  },
  {
    title: "Water Pipe Repair and Replacement",
    href: "/water-pipe-repair-replacement/",
    imageAlt: "Water pipe repair and replacement in Enterprise, NV",
  },
  {
    title: "Gas Line Plumbing",
    href: "/gas-line-plumbing/",
    imageAlt: "Gas line plumbing service in Enterprise, NV",
  },
  {
    title: "Commercial Plumbing",
    href: "/commercial-plumbing/",
    imageAlt: "Commercial plumbing services in Enterprise, NV",
  },
  {
    title: "Toilet Repair and Installation",
    href: "/toilet-repair-installation/",
    imageAlt: "Toilet repair and installation in Enterprise, NV",
  },
  {
    title: "Faucet and Sink Repair and Installation",
    href: "/faucet-sink-repair-installation/",
    imageAlt: "Faucet and sink repair and installation in Enterprise, NV",
  },
  {
    title: "Garbage Disposal Repair and Installation",
    href: "/garbage-disposal-repair-installation/",
    imageAlt: "Garbage disposal repair and installation in Enterprise, NV",
  },
  {
    title: "Backflow Prevention",
    href: "/backflow-prevention/",
    imageAlt: "Backflow prevention services in Enterprise, NV",
  },
  {
    title: "Video Camera Plumbing Inspections",
    href: "/video-camera-plumbing-inspections/",
    imageAlt: "Video camera plumbing inspections in Enterprise, NV",
  },
  {
    title: "Plumbing Fixture Repair, Replacement and Installation",
    href: "/plumbing-fixture-repair-replacement-installation/",
    imageAlt:
      "Plumbing fixture repair replacement and installation in Enterprise, NV",
  },
  {
    title: "Trenchless Piping",
    href: "/trenchless-piping/",
    imageAlt: "Trenchless piping services in Enterprise, NV",
  },
  {
    title: "Water Meter and Pressure Regulator Services",
    href: "/water-meter-pressure-regulator-services/",
    imageAlt: "Water meter and pressure regulator services in Enterprise, NV",
  },
];

// Plain-text area signals. Routes are not yet built, so these render as text.
// TODO-BATCH-TIER2: /enterprise/southwest-las-vegas-plumbing/ not yet built.
// All area names render as plain text tags. No links.
const ENTERPRISE_AREAS = [
  "Southwest Las Vegas",
  "Enterprise 215 Corridor",
  "Southern Highlands Area",
  "Silverado Ranch Area",
  "Rhodes Ranch Area",
  "Mountain's Edge Area",
  "Inspirada Adjacent",
  "Enterprise Commercial Parks",
];

// Verified data only. The em dash from the source build list was replaced with
// comma punctuation per the project no-em-dash copy rule.
const TRUST_ITEMS = [
  "Over 40 years serving the Las Vegas Valley",
  "Local, family-owned, not a national franchise",
  "Nevada Contractor License #0048585A, C-1 Plumbing and Heating",
  "4.8-star rating across 76 Google reviews",
  "Transparent pricing, no hidden fees",
  "24/7 emergency plumbing service",
];

const ENTERPRISE_CONTEXT = [
  {
    title: "What Is Enterprise, NV?",
    body: "Enterprise is an unincorporated community in Clark County, Nevada, located in the southwest corner of the Las Vegas Valley. It is governed by Clark County rather than the City of Las Vegas, but shares the same area code, water supply, and valley infrastructure as the broader metro area. Enterprise has been one of the fastest-growing communities in Clark County over the past two decades, driven by master-planned residential development along the 215 Beltway and commercial expansion throughout the southwest corridor. Red Carpet Plumbing's Nevada Contractor License #0048585A covers work throughout Clark County including Enterprise.",
  },
  {
    title: "Residential Plumbing in a Growing Community",
    body: "Enterprise's residential growth has occurred across multiple decades. Homes built in the late 1990s and early 2000s in communities like Rhodes Ranch and Mountain's Edge are now 20 to 25 years old, entering the age range where water heaters, original fixtures, and supply connections begin requiring attention under Las Vegas Valley hard water conditions. Newer master-planned communities built in the 2010s are still in their early service years, though hard water scale and pressure regulator service are common maintenance concerns even in newer construction. Slab foundations are standard throughout Enterprise, and the caliche-rich Clark County soil creates the same conditions for under-slab pipe stress found throughout the Las Vegas Valley.",
  },
  {
    title: "Commercial Plumbing Along the 215 Beltway",
    body: "The 215 Beltway corridor through Enterprise and the Southwest Las Vegas area contains a significant concentration of commercial parks, warehouse and distribution facilities, retail developments, and light industrial properties. These properties require licensed commercial plumbing services including water heater systems, backflow prevention devices, floor drain maintenance, and supply line service. Red Carpet Plumbing provides licensed commercial plumbing throughout Enterprise and the Southwest Las Vegas commercial corridor under Nevada Contractor License #0048585A, C-1 Plumbing and Heating classification.",
  },
];

// ---------------------------------------------------------------------------
// JSON-LD payloads
// ---------------------------------------------------------------------------
// Enterprise is an unincorporated Clark County community, not an incorporated
// city, so areaServed uses Place + containedInPlace (Clark County) rather than
// City — same pattern as Paradise, Summerlin, and Spring Valley.
const plumberSchema = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  name: "Red Carpet Plumbing",
  url: "https://redcarpetplumbing.com",
  telephone: "+17025679172",
  email: "info@redcarpetplumbing.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "3330 W. Hacienda Ave Ste. 405",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89118",
    addressCountry: "US",
  },
  areaServed: {
    "@type": "Place",
    name: "Enterprise, Nevada",
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: "Clark County, Nevada",
    },
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:30",
      closes: "16:30",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "76",
    bestRating: "5",
    worstRating: "1",
  },
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "license",
    name: "Nevada C-1 Plumbing and Heating Contractor License",
    identifier: "0048585A",
    issuedBy: {
      "@type": "Organization",
      name: "State of Nevada Contractors Board",
    },
  },
  sameAs: [
    "https://share.google/oY5LcfC0lhWJXVjJj",
    "https://www.facebook.com/redcarpetplumbing/",
    "https://www.instagram.com/redcarpetplumbing/",
    "https://x.com/redcarpetplumb",
  ],
};

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Plumbing Services in Enterprise, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides licensed residential and commercial plumbing services throughout Enterprise, NV and the Southwest Las Vegas area. NV Licensed #0048585A.",
  url: "https://redcarpetplumbing.com/enterprise-plumbing-services/",
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
      name: "Service Areas",
      item: "https://redcarpetplumbing.com/service-areas/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Enterprise Plumbing Services",
      item: "https://redcarpetplumbing.com/enterprise-plumbing-services/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: ENTERPRISE_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function EnterprisePlumbingServicesPage() {
  return (
    <>
      <JsonLd data={plumberSchema} />
      <JsonLd data={webpageSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      <SiteHeader />

      <main id="main" className="flex-1 bg-white">
        <Breadcrumbs
          trail={[
            { label: "Home", href: "/" },
            { label: "Service Areas", href: "/service-areas/" },
            { label: "Enterprise Plumbing Services" },
          ]}
        />

        {/* SECTION 1: HERO */}
        {/* TODO: Add client-supplied Enterprise hero image at
            /images/locations/enterprise/hero.webp, then pass it via the
            HeroSection backgroundImage prop. Omitted for now (image missing);
            hero renders its gradient background. */}
        <HeroSection
          headingLevel="h1"
          headline="Plumbing Services in Enterprise, NV"
          subheading="Red Carpet Plumbing provides residential and commercial plumbing services throughout Enterprise, Nevada and the Southwest Las Vegas area. Enterprise is an unincorporated Clark County community in the southwest corner of the Las Vegas Valley. Our licensed plumbers serve homes, businesses, and commercial properties throughout Enterprise. NV Contractor License #0048585A."
          trustItems={[
            "4.8 stars, 76 Google reviews",
            "NV Licensed #0048585A",
            "Over 40 years serving Las Vegas Valley",
            "Transparent pricing, no hidden fees",
          ]}
          primaryCTA={{
            label: "Call (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{
            label: "Request Service",
            href: "/contact/",
          }}
          ctaNote="Licensed plumbers. Transparent pricing. No hidden fees."
          formSlot={<QuoteFormPlaceholder />}
        />

        {/* SECTION 2: DIRECT ANSWER BLOCK */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="rounded-2xl border-l-4 border-brand-primary bg-brand-surface-alt p-6 sm:p-8">
              <h2 className="text-2xl font-bold tracking-tight text-brand-dark sm:text-3xl">
                Licensed Plumbing Services in Enterprise
              </h2>
              <p className="mt-4 text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing is a local, family-owned plumbing company
                serving Enterprise, Nevada and surrounding Southwest Las Vegas
                communities. Enterprise is an unincorporated Clark County
                community, and our Nevada Contractor License #0048585A covers
                plumbing work throughout Clark County including Enterprise. We
                have been serving the Las Vegas Valley, including the Southwest
                Las Vegas and Enterprise area, for over 40 years. Our licensed
                plumbers handle residential and commercial plumbing for
                homeowners, businesses, and property managers throughout
                Enterprise.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: ENTERPRISE PLUMBING CONTEXT */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10 lg:pb-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Plumbing in Enterprise:
                    <br className="hidden sm:block" /> Residential and Commercial
                    Coverage
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Enterprise is one of the fastest-growing parts of the Las
                    Vegas Valley, mixing newer master-planned homes with a busy
                    commercial corridor. That combination shapes the plumbing
                    work residents and businesses here tend to need.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-12 space-y-10">
                {ENTERPRISE_CONTEXT.map((item) => (
                  <article
                    key={item.title}
                    className="relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:rounded-full before:bg-brand-primary"
                  >
                    <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-brand-dark/80">
                      {item.body}
                    </p>
                  </article>
                ))}
              </SectionRevealItem>
            </SectionReveal>
          </div>
        </section>

        {/* SECTION 4: SERVICES GRID */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <SectionReveal>
              <SectionRevealItem>
                <div className="max-w-3xl text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Plumbing Services We Provide in Enterprise
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Red Carpet Plumbing provides a full range of residential and
                    commercial plumbing services for Enterprise homes and
                    businesses.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-14">
                {/* Built /enterprise/[service]/ service-location pages are linked here. */}
                {/* Services without an Enterprise location page yet link to the core service page. */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {ENTERPRISE_SERVICES.map((service) => (
                    <ServiceCard
                      key={service.href}
                      title={service.title}
                      description=""
                      href={service.href}
                      image={service.image}
                      imageAlt={service.imageAlt}
                      built
                    />
                  ))}
                </div>
              </SectionRevealItem>
            </SectionReveal>
          </div>
        </section>

        {/* SECTION 5: ENTERPRISE AREAS */}
        <section className="bg-brand-charcoal text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="max-w-3xl text-left">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Enterprise Neighborhoods and Corridors We Serve
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/85">
                Red Carpet Plumbing serves homes and businesses throughout
                Enterprise and the Southwest Las Vegas area. Call (702) 567-9172
                to confirm coverage for your neighborhood.
              </p>
            </div>

            <ul className="mt-12 flex flex-wrap gap-3">
              {ENTERPRISE_AREAS.map((name) => (
                <li key={name}>
                  <span className="block rounded-lg border border-white/10 bg-white/5 px-5 py-3 font-medium text-white/85">
                    {name}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-10 text-left">
              <Link
                href="/service-areas/"
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-brand-charcoal shadow-sm transition-colors hover:bg-brand-surface-alt focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-safe:transition-transform motion-safe:active:scale-[0.97]"
              >
                See all service areas
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 6: EMERGENCY CTA (mid-page, red) */}
        <section className="bg-brand-primary text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Need an Emergency Plumber in Enterprise?
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/90">
                  Red Carpet Plumbing provides 24/7 emergency plumbing service
                  for Enterprise homes and businesses. Burst pipes, water heater
                  failures, slab leaks, and major plumbing emergencies are
                  handled promptly. Call any time.
                </p>
              </div>
              <div className="flex flex-col items-start gap-4 lg:items-end">
                <a
                  href="tel:+17025679172"
                  className="inline-flex min-h-14 items-center justify-center rounded-lg bg-white px-8 text-lg font-semibold text-brand-primary shadow-sm hover:bg-brand-surface-alt focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-safe:transition-colors motion-safe:active:scale-[0.97]"
                >
                  Call (702) 567-9172
                </a>
                <Link
                  href="/emergency-plumbing/"
                  className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/60 px-6 py-3 text-base font-semibold text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-safe:transition-colors motion-safe:active:scale-[0.97]"
                >
                  View Emergency Plumbing Service
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: TRUST AND CREDENTIALS */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Why Enterprise Residents and
                <br className="hidden sm:block" /> Businesses Choose Red Carpet
                Plumbing
              </h2>
            </div>

            <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {TRUST_ITEMS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckMark />
                  <span className="text-base leading-7 text-brand-dark/85">
                    {item === "4.8-star rating across 76 Google reviews" ? (
                      <>
                        4.8-star rating across 76 Google reviews.{" "}
                        <a
                          href="https://share.google/oY5LcfC0lhWJXVjJj"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                        >
                          Read our Google reviews
                        </a>
                      </>
                    ) : (
                      item
                    )}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-10 text-base leading-7 text-brand-dark/80">
              Our office is located at 3330 W. Hacienda Ave Ste. 405, Las Vegas,
              NV 89118. Office hours are Monday through Friday, 7:30 AM to 4:30
              PM. Emergency plumbing service is available 24/7.
            </p>

            <div className="mt-6">
              <Link
                href="/about/"
                className="inline-flex items-center text-base font-semibold text-brand-primary hover:text-brand-primary-hover"
              >
                Learn more about our company
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
                Frequently Asked Questions
                <br className="hidden sm:block" /> About Plumbing in Enterprise,
                NV
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {ENTERPRISE_FAQS.map((faq) => (
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
          headline="Request Plumbing Service in Enterprise"
          body="Red Carpet Plumbing is ready to help. Call or submit a service request and a member of our team will be in touch promptly."
          primaryCTA={{
            label: "Call (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{
            label: "Submit a Service Request",
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
