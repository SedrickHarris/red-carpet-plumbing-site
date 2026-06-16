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
  title: "Plumbing Services in Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Plumbing services in Las Vegas, NV. Emergency plumbing, drain cleaning, water heater repair, slab leak detection. Licensed. NV #0048585A. Call (702) 567-9172.",
  alternates: {
    canonical: "https://redcarpetplumbing.com/las-vegas-plumbing-services/",
  },
  openGraph: {
    title: "Plumbing Services in Las Vegas, NV | Red Carpet Plumbing",
    description:
      "Plumbing services in Las Vegas, NV. Emergency plumbing, drain cleaning, water heater repair, slab leak detection. Licensed. NV #0048585A. Call (702) 567-9172.",
    url: "https://redcarpetplumbing.com/las-vegas-plumbing-services/",
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
const LAS_VEGAS_FAQS = [
  {
    question: "Does Red Carpet Plumbing serve all of Las Vegas?",
    answer:
      "Red Carpet Plumbing serves homes and businesses throughout Las Vegas, Nevada, including residential neighborhoods, the commercial corridor, and surrounding communities in the Las Vegas Valley. Call (702) 567-9172 to confirm service availability for your specific address.",
  },
  {
    question: "Is Red Carpet Plumbing licensed to work in Las Vegas?",
    answer:
      "Yes. Red Carpet Plumbing holds Nevada Contractor License #0048585A under the C-1 Plumbing and Heating classification, issued by the State of Nevada Contractors Board. This license covers plumbing work throughout Nevada including Las Vegas.",
  },
  {
    question:
      "Does Red Carpet Plumbing offer 24/7 emergency plumbing in Las Vegas?",
    answer:
      "Yes. Red Carpet Plumbing provides 24/7 emergency plumbing service for Las Vegas homes and businesses. For emergency situations, call (702) 567-9172 directly.",
  },
  {
    question: "Why do Las Vegas homes have so many plumbing problems?",
    answer:
      "Las Vegas has some of the hardest water in the country. High mineral content from the Lake Mead municipal supply accelerates buildup inside water heaters, supply lines, and fixtures, shortening equipment life. The desert climate causes repeated pipe expansion and contraction, and many Las Vegas homes built before 2000 have aging galvanized or early plastic piping that is approaching end of service life.",
  },
  {
    question: "What neighborhoods in Las Vegas does Red Carpet Plumbing serve?",
    answer:
      "Red Carpet Plumbing serves neighborhoods throughout Las Vegas including Downtown Las Vegas, Desert Inn/West Sahara, Desert Shores, The Lakes, Sunrise Manor, Whitney, Winchester, Southwest Las Vegas, and surrounding communities, as well as Henderson, North Las Vegas, Summerlin, Paradise, Spring Valley, and Enterprise.",
  },
  {
    question: "How do I request plumbing service in Las Vegas?",
    answer:
      "Call Red Carpet Plumbing at (702) 567-9172 or submit a service request online. For emergency plumbing, calling directly is the fastest option.",
  },
];

// ---------------------------------------------------------------------------
// All 18 core service pages. Each links to a live route (built=true).
// Image card.webp assets exist for the first five services; the remaining
// services render the ServiceImagePlaceholder via ServiceCard's built-in
// fallback (no image prop passed).
// TODO-BATCH-PHASE4: /las-vegas/[service]/ service-location pages not yet
// built. ServiceCards link to core service pages only. Do not add
// /las-vegas/ prefixed hrefs here.
// ---------------------------------------------------------------------------
type ServiceLink = {
  title: string;
  href: string;
  image?: string;
  imageAlt: string;
};

const LAS_VEGAS_SERVICES: ServiceLink[] = [
  {
    title: "Emergency Plumbing",
    href: "/emergency-plumbing/",
    image: "/images/services/emergency-plumbing/card.webp",
    imageAlt: "24/7 emergency plumbing service in Las Vegas",
  },
  {
    title: "Drain Cleaning",
    href: "/drain-cleaning/",
    image: "/images/services/drain-cleaning/card.webp",
    imageAlt: "Drain cleaning service in Las Vegas",
  },
  {
    title: "Leak Detection and Repair",
    href: "/leak-detection-repair/",
    image: "/images/services/leak-detection-repair/card.webp",
    imageAlt: "Leak detection and repair in Las Vegas",
  },
  {
    title: "Water Heater Repair and Installation",
    href: "/water-heater-repair-installation/",
    image: "/images/services/water-heater-repair-installation/card.webp",
    imageAlt: "Water heater repair and installation in Las Vegas",
  },
  {
    title: "Slab Leak Detection and Repair",
    href: "/slab-leak-detection-repair/",
    image: "/images/services/slab-leak-detection-repair/card.webp",
    imageAlt: "Slab leak detection and repair in Las Vegas",
  },
  {
    title: "Sewer Line Services",
    href: "/sewer-line-services/",
    imageAlt: "Sewer line services in Las Vegas",
  },
  {
    title: "Re-Piping",
    href: "/re-piping/",
    imageAlt: "Re-piping services in Las Vegas",
  },
  {
    title: "Water Pipe Repair and Replacement",
    href: "/water-pipe-repair-replacement/",
    imageAlt: "Water pipe repair and replacement in Las Vegas",
  },
  {
    title: "Gas Line Plumbing",
    href: "/gas-line-plumbing/",
    imageAlt: "Gas line plumbing service in Las Vegas",
  },
  {
    title: "Commercial Plumbing",
    href: "/commercial-plumbing/",
    imageAlt: "Commercial plumbing services in Las Vegas",
  },
  {
    title: "Toilet Repair and Installation",
    href: "/toilet-repair-installation/",
    imageAlt: "Toilet repair and installation in Las Vegas",
  },
  {
    title: "Faucet and Sink Repair and Installation",
    href: "/faucet-sink-repair-installation/",
    imageAlt: "Faucet and sink repair and installation in Las Vegas",
  },
  {
    title: "Garbage Disposal Repair and Installation",
    href: "/garbage-disposal-repair-installation/",
    imageAlt: "Garbage disposal repair and installation in Las Vegas",
  },
  {
    title: "Backflow Prevention",
    href: "/backflow-prevention/",
    imageAlt: "Backflow prevention services in Las Vegas",
  },
  {
    title: "Video Camera Plumbing Inspections",
    href: "/video-camera-plumbing-inspections/",
    imageAlt: "Video camera plumbing inspections in Las Vegas",
  },
  {
    title: "Plumbing Fixture Repair, Replacement and Installation",
    href: "/plumbing-fixture-repair-replacement-installation/",
    imageAlt:
      "Plumbing fixture repair replacement and installation in Las Vegas",
  },
  {
    title: "Trenchless Piping",
    href: "/trenchless-piping/",
    imageAlt: "Trenchless piping services in Las Vegas",
  },
  {
    title: "Water Meter and Pressure Regulator Services",
    href: "/water-meter-pressure-regulator-services/",
    imageAlt: "Water meter and pressure regulator services in Las Vegas",
  },
];

// Plain-text neighborhood signals. Routes are not yet built, so these render
// as text tags, never links.
const LAS_VEGAS_NEIGHBORHOODS = [
  "Downtown Las Vegas",
  "Strip Corridor",
  "Desert Inn / West Sahara",
  "Desert Shores",
  "The Lakes",
  "Sunrise Manor",
  "Whitney",
  "Winchester",
  "Southwest Las Vegas",
  "Spring Valley Adjacent",
  "Summerlin Adjacent",
  "Eastern Las Vegas",
  "North Las Vegas Adjacent",
  "Paradise Adjacent",
];

// Verified data only. The em dash from the source build list was replaced
// with comma punctuation per the project no-em-dash copy rule.
const TRUST_ITEMS = [
  "Over 40 years serving the Las Vegas Valley",
  "Local, family-owned, not a national franchise",
  "Nevada Contractor License #0048585A, C-1 Plumbing and Heating",
  "4.8-star rating across 76 Google reviews",
  "Transparent pricing, no hidden fees",
  "24/7 emergency plumbing service",
];

const LAS_VEGAS_CONTEXT = [
  {
    title: "Hard Water and Mineral Buildup",
    body: "Las Vegas has some of the hardest water in the United States. Municipal water supplied from Lake Mead carries high dissolved mineral content that accelerates scale buildup inside water heaters, supply lines, faucets, and fixtures. Homeowners with standard tank water heaters often see shortened equipment life, reduced heating efficiency, and sediment accumulation that requires periodic flushing to manage. The same mineral deposits coat the inside of copper supply lines over years of exposure, thinning pipe walls and creating conditions for pinhole leaks.",
  },
  {
    title: "Aging Supply Lines and Slab Foundations",
    body: "A significant portion of Las Vegas homes were built between the 1970s and early 1990s. Many still have original galvanized steel or early copper supply lines that are approaching or past typical service life under hard water conditions. Las Vegas was also built extensively on concrete slab foundations, which means water supply lines run beneath the slab in many neighborhoods. The caliche and expansive clay soils common throughout the Las Vegas Valley shift with temperature changes and rainfall, placing ongoing stress on pipes embedded in or running below the slab.",
  },
  {
    title: "Desert Heat and Pipe Stress",
    body: "Las Vegas summer temperatures regularly exceed 110 degrees Fahrenheit. This extreme heat causes pipes to expand and contract repeatedly, stressing pipe joints and connections over time. Outdoor supply lines, irrigation connections, and rooftop equipment are exposed to extended periods of intense heat. In older homes where pipes have already been thinned by mineral corrosion, this thermal stress accelerates the risk of joint failure and pinhole leaks.",
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
    name: "Las Vegas",
    sameAs: "https://www.wikidata.org/wiki/Q24859",
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
  name: "Plumbing Services in Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides licensed plumbing services throughout Las Vegas, NV. Emergency plumbing, drain cleaning, water heater repair, slab leak detection, and more. NV Licensed #0048585A.",
  url: "https://redcarpetplumbing.com/las-vegas-plumbing-services/",
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
      name: "Las Vegas Plumbing Services",
      item: "https://redcarpetplumbing.com/las-vegas-plumbing-services/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: LAS_VEGAS_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function LasVegasPlumbingServicesPage() {
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
            { label: "Las Vegas Plumbing Services" },
          ]}
        />

        {/* SECTION 1: HERO */}
        <HeroSection
          headingLevel="h1"
          headline="Plumbing Services in Las Vegas, NV"
          subheading="Red Carpet Plumbing provides residential and commercial plumbing services throughout Las Vegas, Nevada. From emergency plumbing and drain cleaning to water heater repair, slab leak detection, and re-piping, our licensed plumbers serve homes and businesses across Las Vegas. NV Contractor License #0048585A."
          trustItems={[
            "4.8 stars, 76 Google reviews",
            "NV Licensed #0048585A",
            "Over 40 years serving Las Vegas",
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
            src: "/images/locations/las-vegas/hero.webp",
            alt: "Licensed plumbers serving Las Vegas, NV",
          }}
        />

        {/* SECTION 2: DIRECT ANSWER BLOCK */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="rounded-2xl border-l-4 border-brand-primary bg-brand-surface-alt p-6 sm:p-8">
              <h2 className="text-2xl font-bold tracking-tight text-brand-dark sm:text-3xl">
                Licensed Plumbing Services in Las Vegas
              </h2>
              <p className="mt-4 text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing is a local, family-owned plumbing company
                serving Las Vegas, Nevada. We hold Nevada Contractor License
                #0048585A under the C-1 Plumbing and Heating classification and
                have been serving the Las Vegas Valley for over 40 years. Our
                licensed plumbers handle residential and commercial plumbing for
                homeowners, businesses, property managers, and real estate
                professionals throughout Las Vegas.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: LAS VEGAS PLUMBING CONTEXT */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10 lg:pb-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Why Las Vegas Homes
                    <br className="hidden sm:block" /> Need Specialized Plumbing
                    Care
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Plumbing in Las Vegas faces a combination of conditions that
                    are uncommon in most of the country. Understanding why helps
                    homeowners and businesses recognize problems early and
                    maintain their systems before a failure occurs.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-12 space-y-10">
                {LAS_VEGAS_CONTEXT.map((item) => (
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
                    Plumbing Services We Provide in Las Vegas
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Red Carpet Plumbing provides a full range of residential and
                    commercial plumbing services for Las Vegas homes and
                    businesses.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-14">
                {/* TODO-BATCH-PHASE4: /las-vegas/[service]/ service-location pages not yet built. */}
                {/* ServiceCards link to core service pages only. Do not add /las-vegas/ prefixed hrefs. */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {LAS_VEGAS_SERVICES.map((service) => (
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

        {/* SECTION 5: NEIGHBORHOODS */}
        <section className="bg-brand-charcoal text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="max-w-3xl text-left">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Las Vegas Neighborhoods We Serve
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/85">
                Red Carpet Plumbing serves homes and businesses in neighborhoods
                and corridors throughout Las Vegas. If your neighborhood is not
                listed, call (702) 567-9172 to confirm coverage.
              </p>
            </div>

            <ul className="mt-12 flex flex-wrap gap-3">
              {LAS_VEGAS_NEIGHBORHOODS.map((name) => (
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
                  Need an Emergency Plumber in Las Vegas?
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/90">
                  Red Carpet Plumbing provides 24/7 emergency plumbing service
                  for Las Vegas homes and businesses. Burst pipes, sewer
                  backups, gas line concerns, major leaks, and water heater
                  failures are handled promptly. Call any time.
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
                Why Las Vegas Homeowners
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
                <br className="hidden sm:block" /> About Plumbing in Las Vegas
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {LAS_VEGAS_FAQS.map((faq) => (
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
          headline={<>Request Plumbing Service<br />in Las Vegas</>}
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
