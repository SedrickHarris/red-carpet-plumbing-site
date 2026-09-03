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
  title: "Plumbing Services in Summerlin, NV | Red Carpet Plumbing",
  description:
    "Plumbing services in Summerlin, NV. Emergency plumbing, water heater repair, slab leak detection, repiping for Summerlin homes. NV #0048585A. (702) 567-9172.",
  alternates: {
    canonical: "https://redcarpetplumbing.com/summerlin-plumbing-services/",
  },
  openGraph: {
    title: "Plumbing Services in Summerlin, NV | Red Carpet Plumbing",
    description:
      "Plumbing services in Summerlin, NV. Emergency plumbing, water heater repair, slab leak detection, repiping for Summerlin homes. NV #0048585A. (702) 567-9172.",
    url: "https://redcarpetplumbing.com/summerlin-plumbing-services/",
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
const SUMMERLIN_FAQS: FaqItem[] = [
  {
    question: "Does Red Carpet Plumbing serve Summerlin, NV?",
    answer:
      "Yes. Red Carpet Plumbing provides plumbing services throughout Summerlin, including Summerlin North, Summerlin South, and all Summerlin villages. Call (702) 567-9172 to confirm coverage for your address.",
    category: "service-area",
  },
  {
    question:
      "What plumbing services does Red Carpet Plumbing offer in Summerlin?",
    answer:
      "Red Carpet Plumbing provides a full range of plumbing services in Summerlin including emergency plumbing, drain cleaning, water heater repair and installation, slab leak detection and repair, leak detection, repiping, sewer line services, and more.",
    category: "the-service",
  },
  {
    question: "Are slab leaks common in Summerlin homes?",
    answer:
      "Slab leaks are a concern in older Summerlin villages where homes built in the 1990s now have copper supply lines that have been exposed to Las Vegas Valley hard water for 25 to 35 years. Mineral corrosion thins copper pipe walls over time, and caliche soil movement beneath slab foundations adds additional stress. Red Carpet Plumbing provides slab leak detection and repair throughout Summerlin.",
    category: "causes-signs",
  },
  {
    question: "Does hard water affect plumbing in Summerlin homes?",
    answer:
      "Yes. Summerlin receives the same Lake Mead municipal water supply as the rest of the Las Vegas Valley, which is among the hardest municipal water in the United States. Hard water accelerates mineral buildup in water heaters, supply lines, and fixtures throughout Summerlin. Water heater flushing, fixture maintenance, and periodic pipe inspection help Summerlin homeowners manage hard water effects.",
    category: "causes-signs",
  },
  {
    question: "Is Red Carpet Plumbing licensed to work in Summerlin, NV?",
    answer:
      "Yes. Red Carpet Plumbing holds Nevada Contractor License #0048585A under the C-1 Plumbing and Heating classification, issued by the State of Nevada Contractors Board. This license covers plumbing work throughout Nevada including Summerlin.",
    category: "trust",
  },
  {
    question: "How do I request plumbing service in Summerlin?",
    answer:
      "Call Red Carpet Plumbing at (702) 567-9172 or submit a service request online. For emergency plumbing in Summerlin, calling directly is the fastest option.",
    category: "timing-process",
  },
  {
    question: "Do you offer same-day plumbing service in Summerlin?",
    answer:
      "Same-day plumbing service is available in Summerlin, subject to scheduling. Call (702) 567-9172 to check same-day availability for your address.",
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
const SUMMERLIN_FEATURED_SERVICES: ServiceLink[] = [
  {
    title: "Sewer Line Services",
    href: "/sewer-line-services/",
    image:
      "/images/services/sewer-line-services/red-carpet-plumbing-las-vegas-sewer-line-services-card.webp",
    imageAlt: "Sewer camera cable descending into an open cleanout",
  },
  {
    title: "Repiping",
    href: "/summerlin/repiping/",
    image:
      "/images/services/repiping/red-carpet-plumbing-las-vegas-repiping-services-hero.webp",
    imageAlt: "Repiping services in Summerlin",
  },
  {
    title: "Water Heater Repair and Installation",
    href: "/summerlin/water-heater-repair-installation/",
    image:
      "/images/services/water-heater-repair-installation/red-carpet-plumbing-las-vegas-water-heater-repair-installation-card.webp",
    imageAlt: "Water heater repair and installation in Summerlin",
  },
  {
    title: "Slab Leak Detection and Repair",
    href: "/summerlin/slab-leak-detection-repair/",
    image:
      "/images/services/slab-leak-detection-repair/red-carpet-plumbing-las-vegas-slab-leak-detection-repair-card.webp",
    imageAlt: "Slab leak detection and repair in Summerlin",
  },
];

// The remaining 14 services render as pills in two fixed rows of seven.

const SUMMERLIN_PILLS_ROW_ONE: ServicePill[] = [
  {
    title: "Emergency Plumbing",
    href: "/summerlin/emergency-plumbing/",
  },
  {
    title: "Drain Cleaning",
    href: "/summerlin/drain-cleaning/",
  },
  {
    title: "Leak Detection and Repair",
    href: "/summerlin/leak-detection-repair/",
  },
  {
    title: "Water Pipe Repair and Replacement",
    href: "/water-pipe-repair-replacement/",
  },
  {
    title: "Gas Line Plumbing",
    href: "/gas-line-plumbing/",
  },
  {
    title: "Commercial Plumbing",
    href: "/commercial-plumbing/",
  },
  {
    title: "Toilet Repair and Installation",
    href: "/toilet-repair-installation/",
  },
];

const SUMMERLIN_PILLS_ROW_TWO: ServicePill[] = [
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

// Plain-text community signals. Routes are not yet built, so these render as
// text only.
// TODO-BATCH-TIER2: /summerlin/summerlin-north-plumbing/ not yet built.
// TODO-BATCH-TIER2: /summerlin/summerlin-south-plumbing/ not yet built.
const SUMMERLIN_COMMUNITIES = [
  "Summerlin North",
  "Summerlin South",
  "The Hills",
  "The Trails",
  "The Arbors",
  "The Canyons",
  "The Ridges",
  "The Willows",
  "The Gardens",
  "Downtown Summerlin Area",
  "Summerlin Centre",
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

const SUMMERLIN_CONTEXT = [
  {
    title: "Older Summerlin Villages and Aging Plumbing Systems",
    body: "Summerlin's development began in the late 1980s, and the community's oldest villages, including The Hills, The Trails, and The Arbors, have homes that are now 25 to 35 years old. Homes built during Summerlin's first decade of development were constructed with copper supply lines that have been exposed to Las Vegas Valley hard water throughout their service life. Hard water mineral corrosion thins copper pipe walls over time, and in homes approaching or past 30 years, this process has been ongoing long enough to create slab leak risk and repiping candidacy. Caliche and expansive clay soil movement beneath Summerlin's slab foundations adds additional pipe stress, particularly in the older western villages. For homeowners in these original Summerlin communities, a plumbing inspection is a practical step in understanding the current condition of supply lines and water heaters.",
  },
  {
    title: "Hard Water Impact on Summerlin Homes",
    body: "Summerlin receives the same Lake Mead municipal water supply as the rest of the Las Vegas Valley. This supply is among the hardest municipal water in the United States, with high dissolved calcium and magnesium content that accelerates scale buildup in water heaters, supply lines, and fixtures. In Summerlin, where a significant portion of homes have tank water heaters that have been operating under hard water conditions for two or more decades, sediment accumulation and anode rod depletion are common maintenance issues. Regular water heater flushing, anode rod inspection, and attention to fixture performance help Summerlin homeowners identify problems before they require major repairs.",
  },
  {
    title: "Premium Fixtures and Tankless Water Heaters in Newer Summerlin Builds",
    body: "Summerlin South and the newer Summerlin villages developed from the mid-2000s onward have a higher concentration of premium construction, luxury finishes, and modern plumbing systems including tankless water heaters, whole-house filtration connections, and high-end fixture installations. These systems require service from plumbers familiar with their specific requirements. Tankless water heaters in particular need descaling in hard water environments to maintain heat exchanger efficiency and flow rate. Red Carpet Plumbing services both legacy tank systems in older Summerlin homes and modern tankless and premium systems in newer construction throughout Summerlin.",
  },
];

// ---------------------------------------------------------------------------
// JSON-LD payloads
// ---------------------------------------------------------------------------
// Summerlin is a master-planned community spanning both the City of Las Vegas
// and unincorporated Clark County, not an incorporated city, so areaServed uses
// Place + containedInPlace (Clark County) rather than City — same as Paradise.
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
    name: "Summerlin, Nevada",
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
  name: "Plumbing Services in Summerlin, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides licensed plumbing services throughout Summerlin, NV including Summerlin North and South. NV Licensed #0048585A.",
  url: "https://redcarpetplumbing.com/summerlin-plumbing-services/",
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
      name: "Summerlin Plumbing Services",
      item: "https://redcarpetplumbing.com/summerlin-plumbing-services/",
    },
  ],
};

const faqSchema = buildFaqPageSchema(SUMMERLIN_FAQS);

const TRUST_STRIP_ITEMS = [
"4.8 stars, 76 Google reviews",
"NV Licensed #0048585A",
"Over 40 years serving Las Vegas Valley",
"Transparent pricing, no hidden fees",
];

export default function SummerlinPlumbingServicesPage() {
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
            { label: "Summerlin Plumbing Services" },
          ]} variant="dark" />}
          headingLevel="h1"
          headline={
            <>
              Plumbing Services
              <br /> in Summerlin, NV
            </>
          }
          subheading="Red Carpet Plumbing provides plumbing services throughout Summerlin, Nevada, including Summerlin North, Summerlin South, and all Summerlin villages. From emergency plumbing and drain cleaning to water heater repair, slab leak detection, and repiping, our licensed plumbers serve Summerlin homes and businesses. NV Contractor License #0048585A."
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
            src: "/images/locations/summerlin/red-carpet-plumbing-summerlin-nv-red-rock-canyon-location-hero.webp",
            alt: "Licensed plumbers serving Summerlin, NV",
          }}
        />

        {/* SECTION 2: DIRECT ANSWER BLOCK */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="rounded-2xl border-l-4 border-brand-primary bg-brand-surface-alt p-6 sm:p-8">
              <h2 className="text-2xl tracking-tight text-brand-dark sm:text-3xl">
                Licensed Plumbing Services in Summerlin
              </h2>
              <p className="mt-4 text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing is a local, family-owned plumbing company
                serving Summerlin, Nevada and surrounding Las Vegas Valley
                communities. We hold Nevada Contractor License #0048585A under
                the C-1 Plumbing and Heating classification and have been serving
                the Las Vegas Valley, including Summerlin, for over 40 years. Our
                licensed plumbers provide residential plumbing service for
                homeowners throughout all Summerlin villages from the original
                1990s communities to the newest Summerlin South development.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: SUMMERLIN PLUMBING CONTEXT */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10 lg:pb-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Plumbing in Summerlin:
                    <br className="hidden sm:block" /> What Homeowners Should Know
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Summerlin spans more than three decades of construction, from
                    original 1990s villages to current Summerlin South builds.
                    That range shapes the plumbing service homeowners across the
                    community tend to need.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-12 space-y-10">
                {SUMMERLIN_CONTEXT.map((item) => (
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
                    Plumbing Services We Provide in Summerlin
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Red Carpet Plumbing provides a full range of residential
                    plumbing services for Summerlin homes and businesses.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-14">
                {/* ServiceCards link to core service pages only. */}
                {/* Featured services: single row of four cards. */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {SUMMERLIN_FEATURED_SERVICES.map((service) => (
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
                  <PillRow pills={SUMMERLIN_PILLS_ROW_ONE} variant="outline" />
                  <PillRow pills={SUMMERLIN_PILLS_ROW_TWO} variant="solid" />
                </div>
              </SectionRevealItem>
            </SectionReveal>
          </div>
        </section>

        {/* SECTION 5: SUMMERLIN COMMUNITIES */}
        <section className="bg-brand-charcoal text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="max-w-3xl text-left">
              <h2 className="text-3xl tracking-tight sm:text-4xl lg:text-5xl">
                Summerlin Communities We Serve
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/85">
                Red Carpet Plumbing serves homes throughout Summerlin, from the
                original 1990s villages to the newest Summerlin South
                communities. Call (702) 567-9172 to confirm coverage for your
                neighborhood.
              </p>
            </div>

            <ul className="mt-12 flex flex-wrap gap-3">
              {SUMMERLIN_COMMUNITIES.map((name) => (
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
                  Need an Emergency Plumber in Summerlin?
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/90">
                  Red Carpet Plumbing provides 24/7 emergency plumbing service
                  for Summerlin homes. Burst pipes, slab leaks, water heater
                  failures, and major leaks are handled promptly. Call any time.
                </p>
              </div>
              <div className="flex flex-col items-start gap-4 lg:items-end">
                <Button href="tel:+17025679172" variant="inverse" size="2xl">
                  Call (702) 567-9172
                </Button>
                <Button href="/summerlin/emergency-plumbing/" variant="inverse-outline" size="lg">
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
                Why Summerlin Homeowners
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
              . Office hours are Monday through Friday, 7:30 AM to 4:30
              PM. Emergency plumbing service is available 24/7.
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
                <br className="hidden sm:block" /> About Plumbing in Summerlin</>}
          faqs={SUMMERLIN_FAQS}
          surface="alt"
        />

        {/* SECTION 9: FINAL CTA */}
        <CTASection
          background="red"
          headline={<>Request Plumbing Service<br />in Summerlin</>}
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

