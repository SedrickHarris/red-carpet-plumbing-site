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
  title: "Plumbing Services in Green Valley, NV | Red Carpet Plumbing",
  description:
    "Plumbing services in Green Valley, NV. Slab leak detection, re-piping, water heater repair for original and newer homes. NV #0048585A. (702) 567-9172.",
  alternates: {
    canonical: "https://redcarpetplumbing.com/green-valley-plumbing-services/",
  },
  openGraph: {
    title: "Plumbing Services in Green Valley, NV | Red Carpet Plumbing",
    description:
      "Plumbing services in Green Valley, NV. Slab leak detection, re-piping, water heater repair for original and newer homes. NV #0048585A. (702) 567-9172.",
    url: "https://redcarpetplumbing.com/green-valley-plumbing-services/",
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
// used an em dash ("What is Green Valley, NV — is it part of Henderson?"), which
// the project copy rules prohibit. Reworded to an em-dash-free phrasing; meaning
// preserved and visible text + schema remain identical (both map from here).
// ---------------------------------------------------------------------------
const GREEN_VALLEY_FAQS: FaqItem[] = [
  {
    question: "Does Red Carpet Plumbing serve Green Valley, NV?",
    answer:
      "Yes. Red Carpet Plumbing provides plumbing services throughout Green Valley, Nevada. Green Valley is part of the City of Henderson, and Red Carpet Plumbing serves both Green Valley and the broader Henderson area. Call (702) 567-9172 to confirm coverage for your address.",
    category: "service-area",
  },
  {
    question: "What is Green Valley, NV, and is it part of Henderson?",
    answer:
      "Green Valley is a master-planned community within the City of Henderson, Nevada. It was one of the first large master-planned communities in the American Southwest, with development beginning in the late 1970s. Many residents identify primarily as Green Valley residents, though the area is officially within Henderson city limits. Red Carpet Plumbing serves Green Valley as part of its Henderson service area.",
    category: "service-area",
  },
  {
    question: "Are slab leaks common in Green Valley homes?",
    answer:
      "Yes. Green Valley's original neighborhoods, built from the late 1970s through the mid-1990s, have copper supply lines that have been exposed to Las Vegas Valley hard water for 30 to 45 years. This sustained hard water mineral exposure thins copper pipe walls through corrosion, and caliche soil movement beneath slab foundations adds mechanical stress to those pipes. These combined conditions make slab leaks more common in original Green Valley neighborhoods than in newer Henderson communities.",
    category: "causes-signs",
  },
  {
    question:
      "What plumbing services does Red Carpet Plumbing offer in Green Valley?",
    answer:
      "Red Carpet Plumbing provides a full range of plumbing services in Green Valley including emergency plumbing, drain cleaning, water heater repair and installation, slab leak detection and repair, leak detection, re-piping, and more.",
    category: "the-service",
  },
  {
    question: "Is Red Carpet Plumbing licensed to work in Green Valley?",
    answer:
      "Yes. Red Carpet Plumbing holds Nevada Contractor License #0048585A under the C-1 Plumbing and Heating classification, issued by the State of Nevada Contractors Board. This license covers plumbing work throughout Nevada including Green Valley and Henderson.",
    category: "trust",
  },
  {
    question: "How do I request plumbing service in Green Valley?",
    answer:
      "Call Red Carpet Plumbing at (702) 567-9172 or submit a service request online. For emergency plumbing in Green Valley, calling directly is the fastest option.",
    category: "timing-process",
  },
];

// ---------------------------------------------------------------------------
// All 18 core service pages. Each links to a live route (built=true).
// card.webp assets exist for the first five services; the rest use the
// ServiceCard ServiceImagePlaceholder fallback (no image prop passed).
// ACTIVATED: All five Green Valley service-location pages are built (Batch 6, P30-P34).
// ServiceCards now link to GV-specific routes.
// ---------------------------------------------------------------------------
type ServiceLink = {
  title: string;
  href: string;
  image?: string;
  imageAlt: string;
};

// Four featured services rendered as cards. Hrefs keep the established
// fallback convention: Green Valley route where one is built, core service
// page otherwise.
// TODO: /green-valley/sewer-line-services/ is not built. Sewer Line Services
// falls back to the core page until that route exists.
const GREEN_VALLEY_FEATURED_SERVICES: ServiceLink[] = [
  {
    title: "Sewer Line Services",
    href: "/sewer-line-services/",
    image:
      "/images/services/sewer-line-services/red-carpet-plumbing-sewer-line-services-las-vegas.webp",
    imageAlt: "Sewer line services in Green Valley, NV",
  },
  {
    title: "Re-Piping",
    href: "/green-valley/re-piping/",
    image: "/images/services/re-piping/hero.webp",
    imageAlt: "Re-piping services in Green Valley, NV",
  },
  {
    title: "Water Heater Repair and Installation",
    href: "/green-valley/water-heater-repair-installation/",
    image: "/images/services/water-heater-repair-installation/card.webp",
    imageAlt: "Water heater repair and installation in Green Valley, NV",
  },
  {
    title: "Slab Leak Detection and Repair",
    href: "/green-valley/slab-leak-detection-repair/",
    image: "/images/services/slab-leak-detection-repair/card.webp",
    imageAlt: "Slab leak detection and repair in Green Valley, NV",
  },
];

// The remaining 14 services render as pills in two fixed rows of seven.

const GREEN_VALLEY_PILLS_ROW_ONE: ServicePill[] = [
  { title: "Emergency Plumbing", href: "/green-valley/emergency-plumbing/" },
  { title: "Drain Cleaning", href: "/green-valley/drain-cleaning/" },
  {
    title: "Leak Detection and Repair",
    href: "/green-valley/leak-detection-repair/",
  },
  {
    title: "Water Pipe Repair and Replacement",
    href: "/water-pipe-repair-replacement/",
  },
  { title: "Gas Line Plumbing", href: "/gas-line-plumbing/" },
  { title: "Commercial Plumbing", href: "/commercial-plumbing/" },
  {
    title: "Toilet Repair and Installation",
    href: "/green-valley/toilet-repair-installation/",
  },
];

const GREEN_VALLEY_PILLS_ROW_TWO: ServicePill[] = [
  {
    title: "Faucet and Sink Repair and Installation",
    href: "/green-valley/faucet-sink-repair-installation/",
  },
  {
    title: "Garbage Disposal Repair and Installation",
    href: "/garbage-disposal-repair-installation/",
  },
  { title: "Backflow Prevention", href: "/backflow-prevention/" },
  {
    title: "Video Camera Plumbing Inspections",
    href: "/video-camera-plumbing-inspections/",
  },
  {
    title: "Plumbing Fixture Repair, Replacement and Installation",
    href: "/plumbing-fixture-repair-replacement-installation/",
  },
  { title: "Trenchless Piping", href: "/trenchless-piping/" },
  {
    title: "Water Meter and Pressure Regulator Services",
    href: "/water-meter-pressure-regulator-services/",
  },
];

// Plain-text area signals. Routes are not yet built, so these render as text.
const GREEN_VALLEY_AREAS = [
  "Original Green Valley",
  "Green Valley Ranch",
  "Green Valley Parkway Corridor",
  "Eastern Avenue Corridor",
  "Sunset Road Area",
  "Gibson Road Area",
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

const GREEN_VALLEY_CONTEXT = [
  {
    title: "Original Green Valley Neighborhoods and Aging Plumbing",
    body: "Green Valley's original development began in 1978, making it one of the first large master-planned communities in the American Southwest. Homes in the original Green Valley neighborhoods, built from the late 1970s through the mid-1990s, now have plumbing systems that are 30 to 45 years old. Many of these homes were constructed with copper supply lines that have been exposed to Las Vegas Valley hard water for their entire service life. Hard water mineral corrosion thins copper pipe walls over time, and in homes at the 30 to 45 year mark, this process has been ongoing long enough to create meaningful slab leak risk and re-piping candidacy. The caliche and expansive clay soils beneath Green Valley's slab foundations add mechanical stress to these already-compromised pipes. For homeowners in original Green Valley neighborhoods, a plumbing inspection is a practical step in understanding the current condition of supply lines and water heaters before a small issue becomes a significant repair.",
  },
  {
    title: "Hard Water and Slab Foundations in Green Valley",
    body: "Green Valley receives the same Lake Mead municipal water supply as the rest of the Las Vegas Valley. This supply carries high dissolved mineral content, primarily calcium and magnesium, that accelerates scale buildup in water heaters, supply lines, and fixtures. In original Green Valley homes where copper plumbing has been under hard water stress for three to four decades, the cumulative mineral damage to pipe walls is significant. Tank water heaters in these homes have also been operating under hard water conditions for extended periods, accumulating sediment that reduces efficiency and shortens lifespan. Slab foundations throughout Green Valley mean that supply lines run beneath or are embedded in concrete, creating conditions where under-slab leaks can cause structural and water damage before they are detected above ground.",
  },
  {
    title: "Green Valley Ranch and Newer Construction",
    body: "Green Valley Ranch, developed primarily from the mid-1990s through the mid-2000s, represents a newer phase of the community. Homes here are now 20 to 30 years old and are entering the age range where original water heaters, fixtures, and supply connections begin requiring service attention under hard water conditions. While Green Valley Ranch homes carry less slab leak risk than the original neighborhoods, water heater maintenance, pressure regulator service, and drain line cleaning are common service needs as these homes reach their second and third decades.",
  },
];

// ---------------------------------------------------------------------------
// JSON-LD payloads
// ---------------------------------------------------------------------------
// Green Valley is a community within the incorporated City of Henderson, so
// areaServed uses Place + containedInPlace City (Henderson) — distinct from both
// the incorporated-city pattern (City + sameAs) and the unincorporated-county
// pattern (Place + containedInPlace AdministrativeArea).
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
    name: "Green Valley, Nevada",
    containedInPlace: {
      "@type": "City",
      name: "Henderson",
      sameAs: "https://www.wikidata.org/wiki/Q491204",
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
  name: "Plumbing Services in Green Valley, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides licensed plumbing services in Green Valley, NV including slab leak detection, re-piping, and water heater repair. NV Licensed #0048585A.",
  url: "https://redcarpetplumbing.com/green-valley-plumbing-services/",
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
      name: "Henderson Plumbing Services",
      item: "https://redcarpetplumbing.com/henderson-plumbing-services/",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Green Valley Plumbing Services",
      item: "https://redcarpetplumbing.com/green-valley-plumbing-services/",
    },
  ],
};

const faqSchema = buildFaqPageSchema(GREEN_VALLEY_FAQS);

const TRUST_STRIP_ITEMS = [
"4.8 stars, 76 Google reviews",
"NV Licensed #0048585A",
"Over 40 years serving Las Vegas Valley",
"Transparent pricing, no hidden fees",
];

export default function GreenValleyPlumbingServicesPage() {
  return (
    <>
      <JsonLd data={plumberSchema} />
      <JsonLd data={webpageSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      <SiteHeader />

      <main id="main" className="flex-1 bg-white">
        {/* SECTION 1: HERO */}
        {/* TODO: Add client-supplied Green Valley hero image at
            /images/locations/green-valley/hero.webp, then pass it via the
            HeroSection backgroundImage prop. Omitted for now (image missing);
            hero renders its gradient background. */}
        <HeroSection
          breadcrumbs={<Breadcrumbs trail={[
            { label: "Home", href: "/" },
            { label: "Service Areas", href: "/service-areas/" },
            {
              label: "Henderson Plumbing Services",
              href: "/henderson-plumbing-services/",
            },
            { label: "Green Valley Plumbing Services" },
          ]} variant="dark" />}
          headingLevel="h1"
          headline={
            <>
              Plumbing Services
              <br /> in Green Valley, NV
            </>
          }
          subheading="Red Carpet Plumbing provides licensed plumbing services throughout Green Valley, Nevada. Green Valley is a master-planned community within Henderson, with original neighborhoods built from the late 1970s through the 1990s and Green Valley Ranch extending into the 2000s. Our licensed plumbers serve homes throughout Green Valley with experience in the aging plumbing challenges common in this area. NV Contractor License #0048585A."
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
        />

        {/* SECTION 2: DIRECT ANSWER BLOCK */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="rounded-2xl border-l-4 border-brand-primary bg-brand-surface-alt p-6 sm:p-8">
              <h2 className="text-2xl tracking-tight text-brand-dark sm:text-3xl">
                Licensed Plumbing Services in Green Valley
              </h2>
              <p className="mt-4 text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing is a local, family-owned plumbing company
                serving Green Valley, Nevada and the broader Henderson area.
                Green Valley is an established master-planned community within the
                City of Henderson, and Red Carpet Plumbing has been serving homes
                throughout the Henderson and Green Valley area for over 40 years.
                We hold Nevada Contractor License #0048585A under the C-1 Plumbing
                and Heating classification. For full Henderson area plumbing
                coverage including Green Valley, visit our{" "}
                <Link
                  href="/henderson-plumbing-services/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  Henderson Plumbing Services
                </Link>{" "}
                page.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: GREEN VALLEY PLUMBING CONTEXT */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10 lg:pb-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Plumbing in Green Valley:
                    <br className="hidden sm:block" /> What Homeowners Should Know
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Green Valley is one of the most established master-planned
                    communities in the valley, with original neighborhoods now
                    decades old and a newer Green Valley Ranch phase. That spread
                    of build vintages shapes the plumbing work homeowners here
                    tend to need.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-12 space-y-10">
                {GREEN_VALLEY_CONTEXT.map((item) => (
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
                  <h2 className="text-3xl tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Plumbing Services We Provide in Green Valley
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Red Carpet Plumbing provides a full range of residential
                    plumbing services for Green Valley homes and businesses.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-14">
                {/* Featured services: single row of four cards. */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {GREEN_VALLEY_FEATURED_SERVICES.map((service) => (
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
                  <PillRow pills={GREEN_VALLEY_PILLS_ROW_ONE} variant="outline" />
                  <PillRow pills={GREEN_VALLEY_PILLS_ROW_TWO} variant="solid" />
                </div>
              </SectionRevealItem>
            </SectionReveal>
          </div>
        </section>

        {/* SECTION 5: GREEN VALLEY AREAS AND PARENT HUB */}
        <section className="bg-brand-charcoal text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="max-w-3xl text-left">
              <h2 className="text-3xl tracking-tight sm:text-4xl lg:text-5xl">
                Green Valley and Henderson Service Coverage
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/85">
                Green Valley is part of the City of Henderson, and Red Carpet
                Plumbing serves the entire Henderson and Green Valley area. For
                full Henderson area coverage, see our Henderson plumbing services
                page.
              </p>
            </div>

            <div className="mt-8">
              <Button href="/henderson-plumbing-services/" variant="inverse-charcoal" size="lg">
                Henderson Plumbing Services
              </Button>
            </div>

            <ul className="mt-10 flex flex-wrap gap-3">
              {GREEN_VALLEY_AREAS.map((name) => (
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
                className="inline-flex items-center text-base font-semibold text-white hover:text-white/80"
              >
                See all service areas
                <span aria-hidden="true" className="ml-1">
                  &rarr;
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 6: EMERGENCY CTA (mid-page, red) */}
        <section className="bg-brand-primary text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Need an Emergency Plumber in Green Valley?
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/90">
                  Red Carpet Plumbing provides 24/7 emergency plumbing service
                  for Green Valley homes. Burst pipes, slab leaks, water heater
                  failures, and major plumbing problems are handled promptly.
                  Call any time.
                </p>
              </div>
              <div className="flex flex-col items-start gap-4 lg:items-end">
                <Button href="tel:+17025679172" variant="inverse" size="2xl">
                  Call (702) 567-9172
                </Button>
                <Button href="/green-valley/emergency-plumbing/" variant="inverse-outline" size="lg">
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
                Why Green Valley Homeowners
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
              . Office hours are Monday through Friday, 7:30 AM to 4:30
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
        <FaqSection
          heading={<>Frequently Asked Questions
                <br className="hidden sm:block" /> About Plumbing in Green Valley</>}
          faqs={GREEN_VALLEY_FAQS}
          surface="alt"
        />

        {/* SECTION 9: FINAL CTA */}
        <CTASection
          background="red"
          headline={<>Request Plumbing Service<br />in Green Valley</>}
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

