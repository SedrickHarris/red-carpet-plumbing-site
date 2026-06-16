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
  title: "Plumbing Services in Boulder City, NV | Red Carpet Plumbing",
  description:
    "Plumbing services in Boulder City, NV. Emergency plumbing, drain cleaning, water heater repair for historic and newer homes. NV #0048585A. (702) 567-9172.",
  alternates: {
    canonical: "https://redcarpetplumbing.com/boulder-city-plumbing-services/",
  },
  openGraph: {
    title: "Plumbing Services in Boulder City, NV | Red Carpet Plumbing",
    description:
      "Plumbing services in Boulder City, NV. Emergency plumbing, drain cleaning, water heater repair for historic and newer homes. NV #0048585A. (702) 567-9172.",
    url: "https://redcarpetplumbing.com/boulder-city-plumbing-services/",
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
const BOULDER_CITY_FAQS = [
  {
    question: "Does Red Carpet Plumbing serve Boulder City, NV?",
    answer:
      "Yes. Red Carpet Plumbing provides plumbing services in Boulder City, Nevada. Call (702) 567-9172 to confirm coverage and schedule service.",
  },
  {
    question:
      "What plumbing services does Red Carpet Plumbing offer in Boulder City?",
    answer:
      "Red Carpet Plumbing provides plumbing services in Boulder City including emergency plumbing, drain cleaning, water heater repair and installation, leak detection, water pipe repair, and re-piping. Call (702) 567-9172 to discuss your plumbing needs.",
  },
  {
    question: "Why do Boulder City homes have older plumbing systems?",
    answer:
      "Boulder City was built in the early 1930s to house workers on Hoover Dam and has some of the oldest residential housing in the Las Vegas region. Many homes in the historic downtown and surrounding neighborhoods were built between the 1930s and 1960s, giving them plumbing systems that are now 60 to 90 years old. Original galvanized steel and early copper supply lines in these homes are well past typical service life and are common sources of leaks, reduced water pressure, and water quality concerns.",
  },
  {
    question: "Does hard water affect plumbing in Boulder City?",
    answer:
      "Yes. Boulder City receives water from the Lake Mead supply, which is among the hardest municipal water in the United States. Hard water accelerates mineral buildup in water heaters, supply lines, and fixtures, and is a factor in the accelerated wear of older Boulder City plumbing systems. Water heater maintenance and periodic pipe inspection are particularly important in homes with aging infrastructure.",
  },
  {
    question: "Is Red Carpet Plumbing licensed to work in Boulder City, NV?",
    answer:
      "Yes. Red Carpet Plumbing holds Nevada Contractor License #0048585A under the C-1 Plumbing and Heating classification, issued by the State of Nevada Contractors Board. This license covers plumbing work throughout Nevada including Boulder City.",
  },
  {
    question: "How do I request plumbing service in Boulder City?",
    answer:
      "Call Red Carpet Plumbing at (702) 567-9172 or submit a service request online. For emergency plumbing in Boulder City, calling directly is the fastest option.",
  },
];

// ---------------------------------------------------------------------------
// All 18 core service pages. Each links to a live route (built=true).
// card.webp assets exist for the first five services; the rest use the
// ServiceCard ServiceImagePlaceholder fallback (no image prop passed).
// TODO-BATCH-PHASE4: only three Boulder City service-location pages are
// documented in the build list:
//   /boulder-city/emergency-plumbing/ BUILT and ACTIVATED (links to location page)
//   /boulder-city/drain-cleaning/ BUILT and ACTIVATED (links to location page)
//   /boulder-city/water-heater-repair-installation/ BUILT and ACTIVATED (links to location page)
//   /boulder-city/leak-detection-repair/ BUILT and ACTIVATED (links to location page)
// Remaining ServiceCards link to core service pages only.
// ---------------------------------------------------------------------------
type ServiceLink = {
  title: string;
  href: string;
  image?: string;
  imageAlt: string;
};

const BOULDER_CITY_SERVICES: ServiceLink[] = [
  {
    // TODO-BATCH-PHASE4 ACTIVATED: /boulder-city/emergency-plumbing/ is built
    // and QA-passed; this card now links to the Boulder City location page.
    title: "Emergency Plumbing",
    href: "/boulder-city/emergency-plumbing/",
    image: "/images/services/emergency-plumbing/card.webp",
    imageAlt: "24/7 emergency plumbing service in Boulder City, NV",
  },
  {
    // TODO-BATCH-PHASE4 ACTIVATED: /boulder-city/drain-cleaning/ is built and
    // QA-passed; this card now links to the Boulder City location page.
    title: "Drain Cleaning",
    href: "/boulder-city/drain-cleaning/",
    image: "/images/services/drain-cleaning/card.webp",
    imageAlt: "Drain cleaning service in Boulder City, NV",
  },
  {
    // TODO-BATCH-PHASE4 ACTIVATED: /boulder-city/leak-detection-repair/ is built
    // and QA-passed; this card now links to the Boulder City location page.
    title: "Leak Detection and Repair",
    href: "/boulder-city/leak-detection-repair/",
    image: "/images/services/leak-detection-repair/card.webp",
    imageAlt: "Leak detection and repair in Boulder City, NV",
  },
  {
    // TODO-BATCH-PHASE4 ACTIVATED: /boulder-city/water-heater-repair-installation/
    // is built and QA-passed; this card now links to the Boulder City location page.
    title: "Water Heater Repair and Installation",
    href: "/boulder-city/water-heater-repair-installation/",
    image: "/images/services/water-heater-repair-installation/card.webp",
    imageAlt: "Water heater repair and installation in Boulder City, NV",
  },
  {
    title: "Slab Leak Detection and Repair",
    href: "/slab-leak-detection-repair/",
    image: "/images/services/slab-leak-detection-repair/card.webp",
    imageAlt: "Slab leak detection and repair in Boulder City, NV",
  },
  {
    title: "Sewer Line Services",
    href: "/sewer-line-services/",
    imageAlt: "Sewer line services in Boulder City, NV",
  },
  {
    title: "Re-Piping",
    href: "/re-piping/",
    imageAlt: "Re-piping services in Boulder City, NV",
  },
  {
    title: "Water Pipe Repair and Replacement",
    href: "/water-pipe-repair-replacement/",
    imageAlt: "Water pipe repair and replacement in Boulder City, NV",
  },
  {
    title: "Gas Line Plumbing",
    href: "/gas-line-plumbing/",
    imageAlt: "Gas line plumbing service in Boulder City, NV",
  },
  {
    title: "Commercial Plumbing",
    href: "/commercial-plumbing/",
    imageAlt: "Commercial plumbing services in Boulder City, NV",
  },
  {
    title: "Toilet Repair and Installation",
    href: "/toilet-repair-installation/",
    imageAlt: "Toilet repair and installation in Boulder City, NV",
  },
  {
    title: "Faucet and Sink Repair and Installation",
    href: "/faucet-sink-repair-installation/",
    imageAlt: "Faucet and sink repair and installation in Boulder City, NV",
  },
  {
    title: "Garbage Disposal Repair and Installation",
    href: "/garbage-disposal-repair-installation/",
    imageAlt: "Garbage disposal repair and installation in Boulder City, NV",
  },
  {
    title: "Backflow Prevention",
    href: "/backflow-prevention/",
    imageAlt: "Backflow prevention services in Boulder City, NV",
  },
  {
    title: "Video Camera Plumbing Inspections",
    href: "/video-camera-plumbing-inspections/",
    imageAlt: "Video camera plumbing inspections in Boulder City, NV",
  },
  {
    title: "Plumbing Fixture Repair, Replacement and Installation",
    href: "/plumbing-fixture-repair-replacement-installation/",
    imageAlt:
      "Plumbing fixture repair replacement and installation in Boulder City, NV",
  },
  {
    title: "Trenchless Piping",
    href: "/trenchless-piping/",
    imageAlt: "Trenchless piping services in Boulder City, NV",
  },
  {
    title: "Water Meter and Pressure Regulator Services",
    href: "/water-meter-pressure-regulator-services/",
    imageAlt: "Water meter and pressure regulator services in Boulder City, NV",
  },
];

// Plain-text area signals. Routes are not yet built, so these render as text.
const BOULDER_CITY_AREAS = [
  "Historic Downtown Boulder City",
  "King Street Area",
  "Nevada Way Corridor",
  "Veterans Memorial Drive Area",
  "Buchanan Boulevard Area",
  "Newer Boulder City Neighborhoods",
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

const BOULDER_CITY_CONTEXT = [
  {
    title: "Boulder City's Historic Housing and Aging Plumbing",
    body: "Boulder City was established in the early 1930s as a federally administered construction camp for workers on Hoover Dam. After Hoover Dam's completion, it developed into a permanent planned city and retains many of its original structures. Homes in the historic downtown core and surrounding original neighborhoods date from the 1930s through the 1960s, giving Boulder City some of the oldest residential plumbing infrastructure in the Las Vegas region. Galvanized steel supply lines installed in the 1930s through 1950s have an expected service life of 40 to 70 years under normal conditions, and under Las Vegas Valley hard water conditions, actual service life is often shorter. Many of these original lines are now 60 to 90 years old and are well past typical service life. Reduced water pressure, rust-colored water from tap, and recurring small leaks are common signs that original galvanized pipe has reached end of service life. Re-piping with modern materials is the most durable long-term solution for Boulder City homes still on original plumbing.",
  },
  {
    title: "Hard Water from Lake Mead",
    body: "Boulder City's municipal water supply draws from Lake Mead, the same source as the rest of the Las Vegas Valley. Lake Mead water carries high dissolved mineral content, primarily calcium and magnesium, that is among the highest of any municipal water system in the United States. In Boulder City's older homes, where galvanized and early copper plumbing has already been thinned by decades of hard water exposure, this mineral content compounds the challenges of aging infrastructure. Even in newer Boulder City homes, hard water accelerates water heater sediment accumulation, reduces fixture lifespan, and requires regular maintenance attention to manage effectively.",
  },
  {
    title: "A Smaller Market with Distinct Service Needs",
    body: "Boulder City has a smaller population than other Las Vegas Valley communities, and as an incorporated city with its own building department, it operates its own permitting requirements. Plumbing contractors must be licensed under Nevada's C-1 Plumbing and Heating classification to work in Boulder City, and permits are required for most significant plumbing work. Red Carpet Plumbing holds Nevada Contractor License #0048585A and has been serving the Las Vegas Valley, including Boulder City, for over 40 years.",
  },
];

// ---------------------------------------------------------------------------
// JSON-LD payloads
// ---------------------------------------------------------------------------
// Boulder City IS an incorporated city, so areaServed uses City + sameAs
// (Wikidata) — the Henderson / North Las Vegas pattern, NOT the Place +
// containedInPlace pattern used for the unincorporated communities.
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
    name: "Boulder City",
    sameAs: "https://www.wikidata.org/wiki/Q792601",
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
  name: "Plumbing Services in Boulder City, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides licensed plumbing services in Boulder City, NV including emergency plumbing, drain cleaning, water heater repair, and re-piping. NV Licensed #0048585A.",
  url: "https://redcarpetplumbing.com/boulder-city-plumbing-services/",
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
      name: "Boulder City Plumbing Services",
      item: "https://redcarpetplumbing.com/boulder-city-plumbing-services/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: BOULDER_CITY_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function BoulderCityPlumbingServicesPage() {
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
            { label: "Boulder City Plumbing Services" },
          ]}
        />

        {/* SECTION 1: HERO */}
        {/* TODO: Add client-supplied Boulder City hero image at
            /images/locations/boulder-city/hero.webp, then pass it via the
            HeroSection backgroundImage prop. Omitted for now (image missing);
            hero renders its gradient background. */}
        <HeroSection
          headingLevel="h1"
          headline="Plumbing Services in Boulder City, NV"
          subheading="Red Carpet Plumbing provides licensed plumbing services in Boulder City, Nevada, serving both historic homes and newer residential properties. Boulder City has some of the oldest housing in the Las Vegas region, and our licensed plumbers are experienced with the unique plumbing demands of older infrastructure under Las Vegas Valley hard water conditions. NV Contractor License #0048585A."
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
                Licensed Plumbing Services in Boulder City
              </h2>
              <p className="mt-4 text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing is a local, family-owned plumbing company
                serving Boulder City, Nevada. Boulder City is an incorporated
                city in Clark County with some of the oldest housing stock in the
                Las Vegas region, and plumbing service there requires
                understanding of aging infrastructure and the hard water
                conditions of the Lake Mead supply. We hold Nevada Contractor
                License #0048585A under the C-1 Plumbing and Heating
                classification and have been serving the Las Vegas Valley,
                including Boulder City, for over 40 years.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: BOULDER CITY PLUMBING CONTEXT */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10 lg:pb-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Plumbing in Boulder City:
                    <br className="hidden sm:block" /> What Homeowners Should Know
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Boulder City has a character all its own, from its Hoover Dam
                    origins to some of the oldest homes in the region. That
                    history shapes the plumbing service homeowners here tend to
                    need.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-12 space-y-10">
                {BOULDER_CITY_CONTEXT.map((item) => (
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
                    Plumbing Services We Provide in Boulder City
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Red Carpet Plumbing provides a full range of residential and
                    commercial plumbing services for Boulder City homes and
                    properties.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-14">
                {/* TODO-BATCH-PHASE4: /boulder-city/emergency-plumbing/ BUILT and ACTIVATED */}
                {/* TODO-BATCH-PHASE4: /boulder-city/drain-cleaning/ BUILT and ACTIVATED */}
                {/* TODO-BATCH-PHASE4: /boulder-city/water-heater-repair-installation/ BUILT and ACTIVATED */}
                {/* TODO-BATCH-PHASE4: /boulder-city/leak-detection-repair/ BUILT and ACTIVATED */}
                {/* Remaining ServiceCards link to core service pages only. */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {BOULDER_CITY_SERVICES.map((service) => (
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

        {/* SECTION 5: BOULDER CITY AREAS */}
        <section className="bg-brand-charcoal text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="max-w-3xl text-left">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Boulder City Areas We Serve
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/85">
                Red Carpet Plumbing serves homes and properties throughout
                Boulder City. Call (702) 567-9172 to confirm service availability
                for your address.
              </p>
            </div>

            <ul className="mt-12 flex flex-wrap gap-3">
              {BOULDER_CITY_AREAS.map((name) => (
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
                  Need an Emergency Plumber in Boulder City?
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/90">
                  Red Carpet Plumbing provides 24/7 emergency plumbing service
                  for Boulder City homes and properties. Burst pipes, water
                  heater failures, major leaks, and drain emergencies are handled
                  promptly. Call any time.
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
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Why Boulder City Homeowners
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
              . Office hours are Monday through Friday, 7:30 AM to 4:30 PM.
              Emergency plumbing service is available 24/7.
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
                <br className="hidden sm:block" /> About Plumbing in Boulder City
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {BOULDER_CITY_FAQS.map((faq) => (
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
          headline={<>Request Plumbing Service<br />in Boulder City</>}
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
