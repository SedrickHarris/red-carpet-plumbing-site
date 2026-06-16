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
  title: "Plumbing Services in Summerlin, NV | Red Carpet Plumbing",
  description:
    "Plumbing services in Summerlin, NV. Emergency plumbing, water heater repair, slab leak detection, re-piping for Summerlin homes. NV #0048585A. (702) 567-9172.",
  alternates: {
    canonical: "https://redcarpetplumbing.com/summerlin-plumbing-services/",
  },
  openGraph: {
    title: "Plumbing Services in Summerlin, NV | Red Carpet Plumbing",
    description:
      "Plumbing services in Summerlin, NV. Emergency plumbing, water heater repair, slab leak detection, re-piping for Summerlin homes. NV #0048585A. (702) 567-9172.",
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
const SUMMERLIN_FAQS = [
  {
    question: "Does Red Carpet Plumbing serve Summerlin, NV?",
    answer:
      "Yes. Red Carpet Plumbing provides plumbing services throughout Summerlin, including Summerlin North, Summerlin South, and all Summerlin villages. Call (702) 567-9172 to confirm coverage for your address.",
  },
  {
    question:
      "What plumbing services does Red Carpet Plumbing offer in Summerlin?",
    answer:
      "Red Carpet Plumbing provides a full range of plumbing services in Summerlin including emergency plumbing, drain cleaning, water heater repair and installation, slab leak detection and repair, leak detection, re-piping, sewer line services, and more.",
  },
  {
    question: "Are slab leaks common in Summerlin homes?",
    answer:
      "Slab leaks are a concern in older Summerlin villages where homes built in the 1990s now have copper supply lines that have been exposed to Las Vegas Valley hard water for 25 to 35 years. Mineral corrosion thins copper pipe walls over time, and caliche soil movement beneath slab foundations adds additional stress. Red Carpet Plumbing provides slab leak detection and repair throughout Summerlin.",
  },
  {
    question: "Does hard water affect plumbing in Summerlin homes?",
    answer:
      "Yes. Summerlin receives the same Lake Mead municipal water supply as the rest of the Las Vegas Valley, which is among the hardest municipal water in the United States. Hard water accelerates mineral buildup in water heaters, supply lines, and fixtures throughout Summerlin. Water heater flushing, fixture maintenance, and periodic pipe inspection help Summerlin homeowners manage hard water effects.",
  },
  {
    question: "Is Red Carpet Plumbing licensed to work in Summerlin, NV?",
    answer:
      "Yes. Red Carpet Plumbing holds Nevada Contractor License #0048585A under the C-1 Plumbing and Heating classification, issued by the State of Nevada Contractors Board. This license covers plumbing work throughout Nevada including Summerlin.",
  },
  {
    question: "How do I request plumbing service in Summerlin?",
    answer:
      "Call Red Carpet Plumbing at (702) 567-9172 or submit a service request online. For emergency plumbing in Summerlin, calling directly is the fastest option.",
  },
];

// ---------------------------------------------------------------------------
// All 18 core service pages. Each links to a live route (built=true).
// card.webp assets exist for the first five services; the rest use the
// ServiceCard ServiceImagePlaceholder fallback (no image prop passed).
// TODO-BATCH-PHASE4: /summerlin/[service]/ service-location pages not yet built.
// ServiceCards link to core service pages only.
// ---------------------------------------------------------------------------
type ServiceLink = {
  title: string;
  href: string;
  image?: string;
  imageAlt: string;
};

const SUMMERLIN_SERVICES: ServiceLink[] = [
  {
    title: "Emergency Plumbing",
    href: "/emergency-plumbing/",
    image: "/images/services/emergency-plumbing/card.webp",
    imageAlt: "24/7 emergency plumbing service in Summerlin",
  },
  {
    title: "Drain Cleaning",
    href: "/drain-cleaning/",
    image: "/images/services/drain-cleaning/card.webp",
    imageAlt: "Drain cleaning service in Summerlin",
  },
  {
    title: "Leak Detection and Repair",
    href: "/leak-detection-repair/",
    image: "/images/services/leak-detection-repair/card.webp",
    imageAlt: "Leak detection and repair in Summerlin",
  },
  {
    title: "Water Heater Repair and Installation",
    href: "/water-heater-repair-installation/",
    image: "/images/services/water-heater-repair-installation/card.webp",
    imageAlt: "Water heater repair and installation in Summerlin",
  },
  {
    title: "Slab Leak Detection and Repair",
    href: "/slab-leak-detection-repair/",
    image: "/images/services/slab-leak-detection-repair/card.webp",
    imageAlt: "Slab leak detection and repair in Summerlin",
  },
  {
    title: "Sewer Line Services",
    href: "/sewer-line-services/",
    imageAlt: "Sewer line services in Summerlin",
  },
  {
    title: "Re-Piping",
    href: "/re-piping/",
    imageAlt: "Re-piping services in Summerlin",
  },
  {
    title: "Water Pipe Repair and Replacement",
    href: "/water-pipe-repair-replacement/",
    imageAlt: "Water pipe repair and replacement in Summerlin",
  },
  {
    title: "Gas Line Plumbing",
    href: "/gas-line-plumbing/",
    imageAlt: "Gas line plumbing service in Summerlin",
  },
  {
    title: "Commercial Plumbing",
    href: "/commercial-plumbing/",
    imageAlt: "Commercial plumbing services in Summerlin",
  },
  {
    title: "Toilet Repair and Installation",
    href: "/toilet-repair-installation/",
    imageAlt: "Toilet repair and installation in Summerlin",
  },
  {
    title: "Faucet and Sink Repair and Installation",
    href: "/faucet-sink-repair-installation/",
    imageAlt: "Faucet and sink repair and installation in Summerlin",
  },
  {
    title: "Garbage Disposal Repair and Installation",
    href: "/garbage-disposal-repair-installation/",
    imageAlt: "Garbage disposal repair and installation in Summerlin",
  },
  {
    title: "Backflow Prevention",
    href: "/backflow-prevention/",
    imageAlt: "Backflow prevention services in Summerlin",
  },
  {
    title: "Video Camera Plumbing Inspections",
    href: "/video-camera-plumbing-inspections/",
    imageAlt: "Video camera plumbing inspections in Summerlin",
  },
  {
    title: "Plumbing Fixture Repair, Replacement and Installation",
    href: "/plumbing-fixture-repair-replacement-installation/",
    imageAlt: "Plumbing fixture repair replacement and installation in Summerlin",
  },
  {
    title: "Trenchless Piping",
    href: "/trenchless-piping/",
    imageAlt: "Trenchless piping services in Summerlin",
  },
  {
    title: "Water Meter and Pressure Regulator Services",
    href: "/water-meter-pressure-regulator-services/",
    imageAlt: "Water meter and pressure regulator services in Summerlin",
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
    body: "Summerlin's development began in the late 1980s, and the community's oldest villages, including The Hills, The Trails, and The Arbors, have homes that are now 25 to 35 years old. Homes built during Summerlin's first decade of development were constructed with copper supply lines that have been exposed to Las Vegas Valley hard water throughout their service life. Hard water mineral corrosion thins copper pipe walls over time, and in homes approaching or past 30 years, this process has been ongoing long enough to create slab leak risk and re-piping candidacy. Caliche and expansive clay soil movement beneath Summerlin's slab foundations adds additional pipe stress, particularly in the older western villages. For homeowners in these original Summerlin communities, a plumbing inspection is a practical step in understanding the current condition of supply lines and water heaters.",
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: SUMMERLIN_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function SummerlinPlumbingServicesPage() {
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
            { label: "Summerlin Plumbing Services" },
          ]}
        />

        {/* SECTION 1: HERO */}
        <HeroSection
          headingLevel="h1"
          headline="Plumbing Services in Summerlin, NV"
          subheading="Red Carpet Plumbing provides plumbing services throughout Summerlin, Nevada, including Summerlin North, Summerlin South, and all Summerlin villages. From emergency plumbing and drain cleaning to water heater repair, slab leak detection, and re-piping, our licensed plumbers serve Summerlin homes and businesses. NV Contractor License #0048585A."
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
            src: "/images/locations/summerlin/hero.webp",
            alt: "Licensed plumbers serving Summerlin, NV",
          }}
        />

        {/* SECTION 2: DIRECT ANSWER BLOCK */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="rounded-2xl border-l-4 border-brand-primary bg-brand-surface-alt p-6 sm:p-8">
              <h2 className="text-2xl font-bold tracking-tight text-brand-dark sm:text-3xl">
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
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
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
                    Plumbing Services We Provide in Summerlin
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Red Carpet Plumbing provides a full range of residential
                    plumbing services for Summerlin homes and businesses.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-14">
                {/* TODO-BATCH-PHASE4: /summerlin/[service]/ service-location pages not yet built. */}
                {/* ServiceCards link to core service pages only. */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {SUMMERLIN_SERVICES.map((service) => (
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

        {/* SECTION 5: SUMMERLIN COMMUNITIES */}
        <section className="bg-brand-charcoal text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="max-w-3xl text-left">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
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
                  Need an Emergency Plumber in Summerlin?
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/90">
                  Red Carpet Plumbing provides 24/7 emergency plumbing service
                  for Summerlin homes. Burst pipes, slab leaks, water heater
                  failures, and major leaks are handled promptly. Call any time.
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
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Frequently Asked Questions
                <br className="hidden sm:block" /> About Plumbing in Summerlin
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {SUMMERLIN_FAQS.map((faq) => (
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
