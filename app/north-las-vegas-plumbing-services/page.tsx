import type { Metadata } from "next";
import Link from "next/link";
import { PillRow, type ServicePill } from "@/components/Pill";
import { Button } from "@/components/Button";
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
import { FaqSection } from "@/components/FaqSection";
import { buildFaqPageSchema, type FaqItem } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Plumbing Services in North Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Plumbing services in North Las Vegas, NV including the Aliante area. Emergency plumbing, water heater repair, drain cleaning. NV #0048585A. (702) 567-9172.",
  alternates: {
    canonical:
      "https://redcarpetplumbing.com/north-las-vegas-plumbing-services/",
  },
  openGraph: {
    title: "Plumbing Services in North Las Vegas, NV | Red Carpet Plumbing",
    description:
      "Plumbing services in North Las Vegas, NV including the Aliante area. Emergency plumbing, water heater repair, drain cleaning. NV #0048585A. (702) 567-9172.",
    url: "https://redcarpetplumbing.com/north-las-vegas-plumbing-services/",
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
// NOTE: Q3 was reworded from the source build prompt. The original answer
// claimed "The Aliante area has a dedicated plumbing services page." That hub
// page is not built yet, so the claim would be inaccurate and must not appear
// in the FAQ schema. Reactivate a dedicated-page mention only after the Aliante
// sub-hub ships at /north-las-vegas/aliante-area-plumbing/.
// ---------------------------------------------------------------------------
const NORTH_LAS_VEGAS_FAQS: FaqItem[] = [
  {
    question: "Does Red Carpet Plumbing serve North Las Vegas, NV?",
    answer:
      "Yes. Red Carpet Plumbing provides plumbing services throughout North Las Vegas, Nevada, including the Aliante area and surrounding neighborhoods. Call (702) 567-9172 to confirm coverage for your address.",
    category: "service-area",
  },
  {
    question:
      "What plumbing services does Red Carpet Plumbing offer in North Las Vegas?",
    answer:
      "Red Carpet Plumbing provides residential and commercial plumbing services throughout North Las Vegas including emergency plumbing, drain cleaning, water heater repair and installation, leak detection and repair, sewer line services, commercial plumbing, repiping, and more.",
    category: "the-service",
  },
  {
    question:
      "Does Red Carpet Plumbing serve the Aliante area of North Las Vegas?",
    answer:
      "Yes. Red Carpet Plumbing serves the Aliante master-planned community and surrounding North Las Vegas neighborhoods, providing residential and commercial plumbing throughout the area. Call (702) 567-9172 to confirm coverage for your address.",
    category: "service-area",
  },
  {
    question:
      "Is North Las Vegas covered by Red Carpet Plumbing's emergency plumbing service?",
    answer:
      "Yes. Red Carpet Plumbing provides 24/7 emergency plumbing service throughout North Las Vegas. For plumbing emergencies in North Las Vegas, call (702) 567-9172 directly.",
    category: "emergency",
  },
  {
    question: "Is Red Carpet Plumbing licensed to work in North Las Vegas, NV?",
    answer:
      "Yes. Red Carpet Plumbing holds Nevada Contractor License #0048585A under the C-1 Plumbing and Heating classification, issued by the State of Nevada Contractors Board. This license covers plumbing work throughout Nevada including North Las Vegas.",
    category: "trust",
  },
  {
    question: "How do I request plumbing service in North Las Vegas?",
    answer:
      "Call Red Carpet Plumbing at (702) 567-9172 or submit a service request online. For emergency plumbing in North Las Vegas, calling directly is the fastest option.",
    category: "timing-process",
  },
  {
    question: "Do you offer same-day plumbing service in North Las Vegas?",
    answer:
      "Same-day plumbing service is available in North Las Vegas, subject to scheduling. Call (702) 567-9172 to check same-day availability for your address.",
    category: "timing-process",
  },
];

// ---------------------------------------------------------------------------
// All 18 core service pages. Each links to a live route (built=true).
// card.webp assets exist for the first five services; the rest use the
// ServiceCard ServiceImagePlaceholder fallback (no image prop passed).
// ServiceCards link to core service pages only.
// ---------------------------------------------------------------------------
type ServiceLink = {
  title: string;
  href: string;
  image?: string;
  imageAlt: string;
};

// Four featured services rendered as cards. Hrefs are unchanged: the
// location route where one is built, the core service page otherwise.
const NORTH_LAS_VEGAS_FEATURED_SERVICES: ServiceLink[] = [
  {
    title: "Sewer Line Services",
    href: "/north-las-vegas/sewer-line-services/",
    image:
      "/images/services/sewer-line-services/red-carpet-plumbing-las-vegas-sewer-line-services-card.webp",
    imageAlt: "Sewer line services in North Las Vegas",
  },
  {
    title: "Repiping",
    href: "/north-las-vegas/repiping/",
    image:
      "/images/services/repiping/red-carpet-plumbing-las-vegas-repiping-services-hero.webp",
    imageAlt: "Repiping services in North Las Vegas",
  },
  {
    title: "Water Heater Repair and Installation",
    href: "/north-las-vegas/water-heater-repair-installation/",
    image:
      "/images/services/water-heater-repair-installation/red-carpet-plumbing-las-vegas-water-heater-repair-installation-card.webp",
    imageAlt: "Water heater repair and installation in North Las Vegas",
  },
  {
    title: "Slab Leak Detection and Repair",
    href: "/north-las-vegas/slab-leak-detection-repair/",
    image:
      "/images/services/slab-leak-detection-repair/red-carpet-plumbing-las-vegas-slab-leak-detection-repair-card.webp",
    imageAlt: "Slab leak detection and repair in North Las Vegas",
  },
];

// The remaining 14 services render as pills in two fixed rows of seven.

const NORTH_LAS_VEGAS_PILLS_ROW_ONE: ServicePill[] = [
  {
    title: "Emergency Plumbing",
    href: "/north-las-vegas/emergency-plumbing/",
  },
  {
    title: "Drain Cleaning",
    href: "/north-las-vegas/drain-cleaning/",
  },
  {
    title: "Leak Detection and Repair",
    href: "/north-las-vegas/leak-detection-repair/",
  },
  {
    title: "Water Pipe Repair and Replacement",
    href: "/north-las-vegas/water-pipe-repair-replacement/",
  },
  {
    title: "Gas Line Plumbing",
    href: "/gas-line-plumbing/",
  },
  {
    title: "Commercial Plumbing",
    href: "/north-las-vegas/commercial-plumbing/",
  },
  {
    title: "Toilet Repair and Installation",
    href: "/north-las-vegas/toilet-repair-installation/",
  },
];

const NORTH_LAS_VEGAS_PILLS_ROW_TWO: ServicePill[] = [
  {
    title: "Faucet and Sink Repair and Installation",
    href: "/faucet-sink-repair-installation/",
  },
  {
    title: "Garbage Disposal Repair and Installation",
    href: "/garbage-disposal-repair-installation/",
  },
  {
    title: "Backflow Prevention",
    href: "/backflow-prevention/",
  },
  {
    title: "Video Camera Plumbing Inspections",
    href: "/video-camera-plumbing-inspections/",
  },
  {
    title: "Plumbing Fixture Repair, Replacement and Installation",
    href: "/plumbing-fixture-repair-replacement-installation/",
  },
  {
    title: "Trenchless Piping",
    href: "/trenchless-piping/",
  },
  {
    title: "Water Meter and Pressure Regulator Services",
    href: "/water-meter-pressure-regulator-services/",
  },
];

const NORTH_LAS_VEGAS_AREAS = [
  "Aliante Area",
  "Central North Las Vegas",
  "Craig Road Corridor",
  "Cheyenne Area",
  "Carey Area",
  "Simmons Street Corridor",
  "Losee Road Area",
  "Downtown North Las Vegas",
  "Industrial Corridor",
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

const NORTH_LAS_VEGAS_CONTEXT = [
  {
    title: "Aliante and Mid-2000s Homes Reaching Key Milestones",
    body: "The Aliante master-planned community in northwest North Las Vegas saw its primary residential development between the late 1990s and 2007. Homes built during this period are now between 18 and 25 years old. While newer than the oldest Las Vegas Valley housing stock, these homes are entering the age range where original water heaters, supply line connections, and fixtures begin showing wear under the valley's hard water conditions. Sediment buildup in water heaters, early signs of mineral corrosion in copper lines, and aging pressure regulators are common issues for homeowners in Aliante and similar mid-2000s North Las Vegas neighborhoods.",
  },
  {
    title: "Older North Las Vegas Neighborhoods and Aging Infrastructure",
    body: "The central and southern portions of North Las Vegas include neighborhoods built from the 1960s through the 1980s. These homes share the same aging pipe challenges found in older Las Vegas neighborhoods: galvanized steel supply lines corroding from the inside out, original copper plumbing approaching or past service life under hard water conditions, and drain systems that have handled decades of mineral-laden water. Slab foundations throughout North Las Vegas also carry the same caliche soil movement risk as the broader Las Vegas Valley, making slab leak detection relevant for homeowners in the city's older areas.",
  },
  {
    title: "Commercial and Industrial Plumbing in North Las Vegas",
    body: "North Las Vegas has a significant industrial and commercial base along the Interstate 15 corridor, Craig Road, Cheyenne Avenue, and the Losee Road area. Warehouses, distribution centers, manufacturing facilities, and commercial businesses in these corridors require licensed commercial plumbing services including floor drain maintenance, high-capacity water heater systems, backflow prevention, and plumbing system inspection for lease turnovers and tenant improvements. Red Carpet Plumbing holds Nevada Contractor License #0048585A under the C-1 Plumbing and Heating classification, covering commercial plumbing work throughout North Las Vegas.",
  },
];

// ---------------------------------------------------------------------------
// JSON-LD payloads
// ---------------------------------------------------------------------------
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
    "@type": "City",
    name: "North Las Vegas",
    sameAs: "https://www.wikidata.org/wiki/Q982252",
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
  name: "Plumbing Services in North Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides licensed residential and commercial plumbing services throughout North Las Vegas, NV including the Aliante area. NV Licensed #0048585A.",
  url: "https://redcarpetplumbing.com/north-las-vegas-plumbing-services/",
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
      name: "North Las Vegas Plumbing Services",
      item: "https://redcarpetplumbing.com/north-las-vegas-plumbing-services/",
    },
  ],
};

const faqSchema = buildFaqPageSchema(NORTH_LAS_VEGAS_FAQS);

const TRUST_STRIP_ITEMS = [
"4.8 stars, 76 Google reviews",
"NV Licensed #0048585A",
"Over 40 years serving Las Vegas Valley",
"Transparent pricing, no hidden fees",
];

export default function NorthLasVegasPlumbingServicesPage() {
  return (
    <>
      <JsonLd data={plumberSchema} />
      <JsonLd data={webpageSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      <SiteHeader />

      <main id="main" className="flex-1 bg-white">
        {/* SECTION 1: HERO */}
        <HeroSection
          breadcrumbs={<Breadcrumbs trail={[
            { label: "Home", href: "/" },
            { label: "Service Areas", href: "/service-areas/" },
            { label: "North Las Vegas Plumbing Services" },
          ]} variant="dark" />}
          headingLevel="h1"
          headline={
            <>
              Plumbing Services
              <br /> in North Las Vegas, NV
            </>
          }
          subheading="Red Carpet Plumbing provides residential and commercial plumbing services throughout North Las Vegas, Nevada, including the Aliante area and surrounding neighborhoods. From emergency plumbing and drain cleaning to water heater repair, sewer line services, and commercial plumbing, our licensed plumbers serve homes and businesses across North Las Vegas. NV Contractor License #0048585A."
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
          formSlot={<QuoteFormPlaceholder />}
          backgroundImage={{
            src: "/images/locations/north-las-vegas/red-carpet-plumbing-north-las-vegas-nv-neighborhood-location-hero.webp",
            alt: "Red Carpet Plumbing plumbing services in North Las Vegas, NV",
          }}
        />

        {/* SECTION 2: DIRECT ANSWER BLOCK */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="rounded-2xl border-l-4 border-brand-primary bg-brand-surface-alt p-6 sm:p-8">
              <h2 className="text-2xl tracking-tight text-brand-dark sm:text-3xl">
                Licensed Plumbing Services in North Las Vegas
              </h2>
              <p className="mt-4 text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing is a local, family-owned plumbing company
                serving North Las Vegas, Nevada and surrounding communities. We
                hold Nevada Contractor License #0048585A under the C-1 Plumbing
                and Heating classification and have been serving the Las Vegas
                Valley, including North Las Vegas, for over 40 years. Our
                licensed plumbers handle residential and commercial plumbing for
                homeowners, businesses, property managers, and industrial
                facilities throughout North Las Vegas.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: NORTH LAS VEGAS PLUMBING CONTEXT */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10 lg:pb-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Plumbing in North Las Vegas:
                    <br className="hidden sm:block" /> Residential and Commercial
                    Service
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    North Las Vegas is an independent city with a mix of newer
                    master-planned neighborhoods, established older areas, and a
                    large commercial and industrial base. Each places different
                    demands on the plumbing work homeowners and businesses here
                    need.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-12 space-y-10">
                {NORTH_LAS_VEGAS_CONTEXT.map((item) => (
                  <article
                    key={item.title}
                    className="relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:rounded-full before:bg-brand-dark"
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
                  <h2 className="text-3xl tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Plumbing Services We Provide in North Las Vegas
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Red Carpet Plumbing provides a full range of residential and
                    commercial plumbing services for North Las Vegas homes and
                    businesses.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-14">
                {/* ServiceCards link to core service pages only. */}
                {/* Featured services: single row of four cards. */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {NORTH_LAS_VEGAS_FEATURED_SERVICES.map((service) => (
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

              <SectionRevealItem className="mt-10">
                {/* Remaining services as pills, kept in two fixed rows of seven. */}
                <div className="flex flex-col gap-4">
                  <PillRow pills={NORTH_LAS_VEGAS_PILLS_ROW_ONE} variant="outline" />
                  <PillRow pills={NORTH_LAS_VEGAS_PILLS_ROW_TWO} variant="solid" />
                </div>
              </SectionRevealItem>
            </SectionReveal>
          </div>
        </section>

        {/* SECTION 5: NORTH LAS VEGAS AREAS */}
        <section className="bg-brand-charcoal text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="max-w-3xl text-left">
              <h2 className="text-3xl tracking-tight sm:text-4xl lg:text-5xl">
                North Las Vegas Areas We Serve
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/85">
                Red Carpet Plumbing serves homes and businesses throughout North
                Las Vegas, including the Aliante area and surrounding
                neighborhoods. Call (702) 567-9172 to confirm coverage for your
                specific neighborhood.
              </p>
            </div>

            {/* Aliante Area has a dedicated hub page, linked below. */}
            <div className="mt-10">
              <p className="text-sm font-semibold uppercase tracking-wide text-white/70">
                We have a dedicated service page for:
              </p>
              <div className="mt-4">
                <Button href="/north-las-vegas/aliante-area-plumbing/" variant="inverse-charcoal" size="lg">
                  Aliante Area Plumbing Services
                </Button>
              </div>
            </div>

            <ul className="mt-8 flex flex-wrap gap-3">
              {NORTH_LAS_VEGAS_AREAS.map((name) => (
                <li key={name}>
                  <span className="block rounded-lg border border-white/10 bg-white/5 px-5 py-3 font-medium text-white/85">
                    {name}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-10 text-left">
              <Button href="/service-areas/" variant="inverse-charcoal" size="lg">
                See all service areas
              </Button>
            </div>
          </div>
        </section>

        {/* SECTION 6: EMERGENCY CTA (mid-page, red) */}
        <section className="border-t border-white/30 bg-brand-charcoal text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Need an Emergency Plumber in North Las Vegas?
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/90">
                  Red Carpet Plumbing provides 24/7 emergency plumbing service
                  for North Las Vegas homes and businesses. Burst pipes, sewer
                  backups, water heater failures, and major leaks are handled
                  promptly. Call any time.
                </p>
              </div>
              <div className="flex flex-col items-start gap-4 lg:items-end">
                <Button href="tel:+17025679172" variant="inverse" size="2xl">
                  Call (702) 567-9172
                </Button>
                <Button href="/north-las-vegas/emergency-plumbing/" variant="inverse-outline" size="lg">
                  View Emergency Plumbing Service
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: TRUST AND CREDENTIALS */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="text-left">
              <h2 className="text-3xl tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Why North Las Vegas Homeowners and
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
                          className="font-semibold text-brand-dark underline hover:text-brand-dark/70"
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
              Our office is located at{" "}
              <a
                href="https://www.google.com/maps/place/3330+W+Hacienda+Ave+%23405,+Las+Vegas,+NV+89118/@36.0943375,-115.1870907,17z/data=!3m1!4b1!4m6!3m5!1s0x80c8c5d697faaaab:0x3db74ab4815ec72a!8m2!3d36.0943375!4d-115.1845158!16s%2Fg%2F11nynzwdy4?entry=ttu&g_ep=EgoyMDI0MDkxOC4xIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-brand-dark underline hover:text-brand-dark/70"
                aria-label="Get directions to Red Carpet Plumbing on Google Maps"
              >
                3330 W. Hacienda Ave Ste. 405, Las Vegas, NV 89118
              </a>
              . Office hours are Monday through Friday, 7:30 AM to 4:30 PM.
              Emergency plumbing service is available 24/7.
            </p>

            <div className="mt-6">
              <Link
                href="/about/"
                className="inline-flex items-center text-base font-semibold text-brand-dark underline hover:text-brand-dark/70"
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
        <FaqSection
          heading={<>Frequently Asked Questions
                <br className="hidden sm:block" /> About Plumbing in North Las
                Vegas</>}
          faqs={NORTH_LAS_VEGAS_FAQS}
          surface="alt"
        />

        {/* SECTION 9: FINAL CTA */}
        <CTASection
          background="red"
          headline={<>Request Plumbing Service<br />in North Las Vegas</>}
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
      className="mt-1 h-5 w-5 flex-none text-brand-dark"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  );
}

