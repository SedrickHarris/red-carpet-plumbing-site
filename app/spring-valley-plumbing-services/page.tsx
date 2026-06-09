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
  title: "Plumbing Services in Spring Valley, NV | Red Carpet Plumbing",
  description:
    "Licensed plumbing in Spring Valley, NV including the Desert Inn and West Sahara corridors. Emergency plumbing, drain cleaning, water heater repair. NV #0048585A. Call (702) 567-9172.",
  alternates: {
    canonical: "https://redcarpetplumbing.com/spring-valley-plumbing-services/",
  },
  openGraph: {
    title: "Plumbing Services in Spring Valley, NV | Red Carpet Plumbing",
    description:
      "Licensed plumbing in Spring Valley, NV including the Desert Inn and West Sahara corridors. Emergency plumbing, drain cleaning, water heater repair. NV #0048585A. Call (702) 567-9172.",
    url: "https://redcarpetplumbing.com/spring-valley-plumbing-services/",
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
// used an em dash ("What is Spring Valley, NV — is it part of Las Vegas?"),
// which the project copy rules prohibit. Reworded to an em-dash-free phrasing;
// meaning preserved and visible text + schema remain identical (both map here).
// ---------------------------------------------------------------------------
const SPRING_VALLEY_FAQS = [
  {
    question: "Does Red Carpet Plumbing serve Spring Valley, NV?",
    answer:
      "Yes. Red Carpet Plumbing provides plumbing services throughout Spring Valley, Nevada, including the Desert Inn / West Sahara corridor and surrounding neighborhoods. Call (702) 567-9172 to confirm coverage for your address.",
  },
  {
    question: "What is Spring Valley, NV, and is it part of Las Vegas?",
    answer:
      "Spring Valley is an unincorporated community in Clark County, Nevada. It is located west of the Las Vegas Strip and is governed by Clark County rather than the City of Las Vegas, though it is geographically part of the greater Las Vegas metropolitan area. Red Carpet Plumbing serves both the City of Las Vegas and Spring Valley.",
  },
  {
    question:
      "What plumbing services does Red Carpet Plumbing offer in Spring Valley?",
    answer:
      "Red Carpet Plumbing provides a full range of residential and commercial plumbing services in Spring Valley including emergency plumbing, drain cleaning, water heater repair and installation, leak detection, slab leak detection and repair, re-piping, commercial plumbing, and more.",
  },
  {
    question: "Why do older Spring Valley homes have plumbing problems?",
    answer:
      "Many Spring Valley homes along the Desert Inn and West Sahara corridors were built in the 1970s through 1990s. These homes often have galvanized steel or original copper supply lines that have been exposed to Las Vegas Valley hard water for 30 to 50 years. Galvanized pipe corrodes from the inside out, reducing water flow and quality over time. Original copper lines in hard water environments thin through mineral corrosion and can develop pinhole leaks. Slab foundations throughout Spring Valley also carry the same caliche soil movement risk as the broader Las Vegas Valley.",
  },
  {
    question: "Is Red Carpet Plumbing licensed to work in Spring Valley, NV?",
    answer:
      "Yes. Red Carpet Plumbing holds Nevada Contractor License #0048585A under the C-1 Plumbing and Heating classification, issued by the State of Nevada Contractors Board. This license covers plumbing work throughout Nevada including Spring Valley.",
  },
  {
    question: "How do I request plumbing service in Spring Valley?",
    answer:
      "Call Red Carpet Plumbing at (702) 567-9172 or submit a service request online. For emergency plumbing in Spring Valley, calling directly is the fastest option.",
  },
];

// ---------------------------------------------------------------------------
// All 18 core service pages. Each links to a live route (built=true).
// card.webp assets exist for the first five services; the rest use the
// ServiceCard ServiceImagePlaceholder fallback (no image prop passed).
// TODO-BATCH-PHASE4: /spring-valley/[service]/ service-location pages not yet
// built. ServiceCards link to core service pages only.
// ---------------------------------------------------------------------------
type ServiceLink = {
  title: string;
  href: string;
  image?: string;
  imageAlt: string;
};

const SPRING_VALLEY_SERVICES: ServiceLink[] = [
  {
    title: "Emergency Plumbing",
    href: "/emergency-plumbing/",
    image: "/images/services/emergency-plumbing/card.webp",
    imageAlt: "24/7 emergency plumbing service in Spring Valley",
  },
  {
    title: "Drain Cleaning",
    href: "/drain-cleaning/",
    image: "/images/services/drain-cleaning/card.webp",
    imageAlt: "Drain cleaning service in Spring Valley",
  },
  {
    title: "Leak Detection and Repair",
    href: "/leak-detection-repair/",
    image: "/images/services/leak-detection-repair/card.webp",
    imageAlt: "Leak detection and repair in Spring Valley",
  },
  {
    title: "Water Heater Repair and Installation",
    href: "/water-heater-repair-installation/",
    image: "/images/services/water-heater-repair-installation/card.webp",
    imageAlt: "Water heater repair and installation in Spring Valley",
  },
  {
    title: "Slab Leak Detection and Repair",
    href: "/slab-leak-detection-repair/",
    image: "/images/services/slab-leak-detection-repair/card.webp",
    imageAlt: "Slab leak detection and repair in Spring Valley",
  },
  {
    title: "Sewer Line Services",
    href: "/sewer-line-services/",
    imageAlt: "Sewer line services in Spring Valley",
  },
  {
    title: "Re-Piping",
    href: "/re-piping/",
    imageAlt: "Re-piping services in Spring Valley",
  },
  {
    title: "Water Pipe Repair and Replacement",
    href: "/water-pipe-repair-replacement/",
    imageAlt: "Water pipe repair and replacement in Spring Valley",
  },
  {
    title: "Gas Line Plumbing",
    href: "/gas-line-plumbing/",
    imageAlt: "Gas line plumbing service in Spring Valley",
  },
  {
    title: "Commercial Plumbing",
    href: "/commercial-plumbing/",
    imageAlt: "Commercial plumbing services in Spring Valley",
  },
  {
    title: "Toilet Repair and Installation",
    href: "/toilet-repair-installation/",
    imageAlt: "Toilet repair and installation in Spring Valley",
  },
  {
    title: "Faucet and Sink Repair and Installation",
    href: "/faucet-sink-repair-installation/",
    imageAlt: "Faucet and sink repair and installation in Spring Valley",
  },
  {
    title: "Garbage Disposal Repair and Installation",
    href: "/garbage-disposal-repair-installation/",
    imageAlt: "Garbage disposal repair and installation in Spring Valley",
  },
  {
    title: "Backflow Prevention",
    href: "/backflow-prevention/",
    imageAlt: "Backflow prevention services in Spring Valley",
  },
  {
    title: "Video Camera Plumbing Inspections",
    href: "/video-camera-plumbing-inspections/",
    imageAlt: "Video camera plumbing inspections in Spring Valley",
  },
  {
    title: "Plumbing Fixture Repair, Replacement and Installation",
    href: "/plumbing-fixture-repair-replacement-installation/",
    imageAlt:
      "Plumbing fixture repair replacement and installation in Spring Valley",
  },
  {
    title: "Trenchless Piping",
    href: "/trenchless-piping/",
    imageAlt: "Trenchless piping services in Spring Valley",
  },
  {
    title: "Water Meter and Pressure Regulator Services",
    href: "/water-meter-pressure-regulator-services/",
    imageAlt: "Water meter and pressure regulator services in Spring Valley",
  },
];

// Plain-text area signals. Routes are not yet built, so these render as text.
// TODO-BATCH-TIER2: /spring-valley/desert-inn-west-sahara-plumbing/ not yet
// built. All area names render as plain text tags. No links.
const SPRING_VALLEY_AREAS = [
  "Desert Inn / West Sahara Corridor",
  "West Flamingo Area",
  "Spring Valley Parkway Corridor",
  "Tropicana Corridor",
  "Rainbow Boulevard Area",
  "Decatur Boulevard Area",
  "Western Spring Valley",
  "Eastern Spring Valley",
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

const SPRING_VALLEY_CONTEXT = [
  {
    title: "What Is Spring Valley, NV?",
    body: "Spring Valley is an unincorporated community in Clark County, Nevada. It lies west of the Las Vegas Strip, bordered by Summerlin to the northwest, Enterprise to the south, and the Strip corridor to the east. Like Paradise, Spring Valley is governed by Clark County rather than the City of Las Vegas, though it is fully integrated into the Las Vegas metropolitan area for all practical purposes. Spring Valley is one of the most densely populated unincorporated communities in the United States. Red Carpet Plumbing's Nevada Contractor License #0048585A covers work throughout Clark County including Spring Valley.",
  },
  {
    title: "Aging Plumbing in the Desert Inn and West Sahara Corridors",
    body: "Northern Spring Valley, particularly the neighborhoods along the Desert Inn Road and West Sahara Avenue corridors, includes some of the Las Vegas Valley's most established residential areas. Homes in this corridor were built primarily in the 1970s through 1990s and now have plumbing systems that are 30 to 50 years old. Galvanized steel supply lines from original construction corrode from the inside out under Las Vegas hard water conditions, reducing water pressure and quality over time before eventually failing. Original copper lines from this era have been thinned by decades of mineral exposure. Slab foundations throughout this corridor carry the same caliche soil movement risk that affects the broader Las Vegas Valley, creating conditions for under-slab pipe stress and slab leaks in older homes.",
  },
  {
    title: "Hard Water and Slab Foundations in Spring Valley",
    body: "Spring Valley receives the same Lake Mead municipal water supply as the rest of the Las Vegas Valley. Hard water mineral content affects water heaters, supply lines, and fixtures throughout Spring Valley the same way it does in Las Vegas, Henderson, and other valley communities. Tank water heaters in older Spring Valley homes accumulate sediment faster than the national average, reducing efficiency and shortening lifespan. Slab foundations throughout Spring Valley also mean that supply lines run beneath or are embedded in concrete, and the caliche and expansive clay soils common in Clark County shift with temperature changes and rainfall, stressing pipes over time.",
  },
];

// ---------------------------------------------------------------------------
// JSON-LD payloads
// ---------------------------------------------------------------------------
// Spring Valley is an unincorporated Clark County community, not an incorporated
// city, so areaServed uses Place + containedInPlace (Clark County) rather than
// City — same pattern as Paradise and Summerlin.
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
    name: "Spring Valley, Nevada",
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
  name: "Plumbing Services in Spring Valley, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides licensed plumbing services throughout Spring Valley, NV including the Desert Inn and West Sahara corridors. NV Licensed #0048585A.",
  url: "https://redcarpetplumbing.com/spring-valley-plumbing-services/",
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
      name: "Spring Valley Plumbing Services",
      item: "https://redcarpetplumbing.com/spring-valley-plumbing-services/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: SPRING_VALLEY_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function SpringValleyPlumbingServicesPage() {
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
            { label: "Spring Valley Plumbing Services" },
          ]}
        />

        {/* SECTION 1: HERO */}
        <HeroSection
          headingLevel="h1"
          headline="Plumbing Services in Spring Valley, NV"
          subheading="Red Carpet Plumbing provides residential and commercial plumbing services throughout Spring Valley, Nevada. Spring Valley is an unincorporated Clark County community west of Las Vegas, home to established neighborhoods along the Desert Inn and West Sahara corridors. Our licensed plumbers serve homes and businesses throughout Spring Valley. NV Contractor License #0048585A."
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
          backgroundImage={{
            src: "/images/locations/spring-valley/hero.webp",
            alt: "Licensed plumbers serving Spring Valley, NV",
          }}
        />

        {/* SECTION 2: DIRECT ANSWER BLOCK */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="rounded-2xl border-l-4 border-brand-primary bg-brand-surface-alt p-6 sm:p-8">
              <h2 className="text-2xl font-bold tracking-tight text-brand-dark sm:text-3xl">
                Licensed Plumbing Services in Spring Valley
              </h2>
              <p className="mt-4 text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing is a local, family-owned plumbing company
                serving Spring Valley, Nevada and surrounding Las Vegas Valley
                communities. Spring Valley is an unincorporated Clark County
                community, and our Nevada Contractor License #0048585A covers
                plumbing work throughout Clark County including Spring Valley. We
                have been serving the Las Vegas Valley, including Spring Valley,
                for over 40 years. Our licensed plumbers handle residential and
                commercial plumbing for homeowners, property managers, and
                businesses throughout Spring Valley.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: SPRING VALLEY PLUMBING CONTEXT */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10 lg:pb-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Plumbing in Spring Valley:
                    <br className="hidden sm:block" /> What Local Homeowners
                    Should Know
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Spring Valley is one of the densest communities in the Las
                    Vegas Valley, with established corridors of older homes west
                    of the Strip. A few local conditions shape the plumbing work
                    residents here tend to need.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-12 space-y-10">
                {SPRING_VALLEY_CONTEXT.map((item) => (
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
                    Plumbing Services We Provide in Spring Valley
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Red Carpet Plumbing provides a full range of residential and
                    commercial plumbing services for Spring Valley homes and
                    businesses.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-14">
                {/* TODO-BATCH-PHASE4: /spring-valley/[service]/ service-location pages not yet built. */}
                {/* ServiceCards link to core service pages only. */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {SPRING_VALLEY_SERVICES.map((service) => (
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

        {/* SECTION 5: SPRING VALLEY AREAS */}
        <section className="bg-brand-charcoal text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="max-w-3xl text-left">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Spring Valley Neighborhoods and Corridors We Serve
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/85">
                Red Carpet Plumbing serves homes and businesses throughout Spring
                Valley. If your neighborhood or corridor is not listed, call
                (702) 567-9172 to confirm coverage.
              </p>
            </div>

            <ul className="mt-12 flex flex-wrap gap-3">
              {SPRING_VALLEY_AREAS.map((name) => (
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
                  Need an Emergency Plumber in Spring Valley?
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/90">
                  Red Carpet Plumbing provides 24/7 emergency plumbing service
                  for Spring Valley homes and businesses. Burst pipes, water
                  heater failures, slab leaks, and major plumbing problems are
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
                Why Spring Valley Residents
                <br className="hidden sm:block" /> Choose Red Carpet Plumbing
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
                <br className="hidden sm:block" /> About Plumbing in Spring
                Valley
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {SPRING_VALLEY_FAQS.map((faq) => (
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
          headline="Request Plumbing Service in Spring Valley"
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
