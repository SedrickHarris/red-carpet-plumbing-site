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
  title: "Plumbing Services in Lake Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Plumbing services in Lake Las Vegas, NV. Water heater repair, slab leak detection, leak detection for luxury Henderson homes. NV #0048585A. (702) 567-9172.",
  alternates: {
    canonical: "https://redcarpetplumbing.com/lake-las-vegas-plumbing-services/",
  },
  openGraph: {
    title: "Plumbing Services in Lake Las Vegas, NV | Red Carpet Plumbing",
    description:
      "Plumbing services in Lake Las Vegas, NV. Water heater repair, slab leak detection, leak detection for luxury Henderson homes. NV #0048585A. (702) 567-9172.",
    url: "https://redcarpetplumbing.com/lake-las-vegas-plumbing-services/",
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
// used an em dash ("What is Lake Las Vegas — is it part of Henderson?"), which
// the project copy rules prohibit. Reworded to an em-dash-free phrasing; meaning
// preserved and visible text + schema remain identical (both map from here).
// ---------------------------------------------------------------------------
const LAKE_LAS_VEGAS_FAQS = [
  {
    question: "Does Red Carpet Plumbing serve Lake Las Vegas, NV?",
    answer:
      "Yes. Red Carpet Plumbing provides plumbing services in Lake Las Vegas, Nevada. Lake Las Vegas is part of the City of Henderson, and Red Carpet Plumbing serves both Lake Las Vegas and the broader Henderson area. Call (702) 567-9172 to confirm coverage and schedule service.",
  },
  {
    question: "What is Lake Las Vegas, and is it part of Henderson?",
    answer:
      "Lake Las Vegas is a resort and residential community built around a man-made lake in the eastern portion of Henderson, Nevada. It is a master-planned luxury community entirely within Henderson city limits. Red Carpet Plumbing serves Lake Las Vegas as part of its Henderson service area.",
  },
  {
    question: "Does hard water affect luxury homes in Lake Las Vegas?",
    answer:
      "Yes. Lake Las Vegas receives the same Lake Mead water supply as the rest of the Las Vegas Valley, which is among the hardest municipal water in the United States. Hard water is particularly hard on tankless water heater heat exchangers, which are common in Lake Las Vegas luxury homes. Mineral scale builds up inside tankless units and reduces flow and efficiency if the unit is not descaled periodically. Premium fixtures and complex plumbing systems in Lake Las Vegas homes are also affected by hard water and benefit from regular maintenance.",
  },
  {
    question:
      "What plumbing services does Red Carpet Plumbing offer in Lake Las Vegas?",
    answer:
      "Red Carpet Plumbing provides plumbing services in Lake Las Vegas including emergency plumbing, water heater repair and installation, slab leak detection and repair, leak detection, drain cleaning, and more. Call (702) 567-9172 to discuss your specific plumbing needs.",
  },
  {
    question: "Is Red Carpet Plumbing licensed to work in Lake Las Vegas?",
    answer:
      "Yes. Red Carpet Plumbing holds Nevada Contractor License #0048585A under the C-1 Plumbing and Heating classification, issued by the State of Nevada Contractors Board. This license covers plumbing work throughout Nevada including Lake Las Vegas and Henderson.",
  },
  {
    question: "How do I request plumbing service in Lake Las Vegas?",
    answer:
      "Call Red Carpet Plumbing at (702) 567-9172 or submit a service request online. For emergency plumbing in Lake Las Vegas, calling directly is the fastest option.",
  },
];

// ---------------------------------------------------------------------------
// All 18 core service pages. Each links to a live route (built=true).
// card.webp assets exist for the first five services; the rest use the
// ServiceCard ServiceImagePlaceholder fallback (no image prop passed).
// TODO-BATCH-PHASE4: only three Lake Las Vegas service-location pages are
// documented in the build list:
//   /lake-las-vegas/water-heater-repair-installation/
//   /lake-las-vegas/leak-detection-repair/
//   /lake-las-vegas/slab-leak-detection-repair/
// ServiceCards link to core service pages only.
// ---------------------------------------------------------------------------
type ServiceLink = {
  title: string;
  href: string;
  image?: string;
  imageAlt: string;
};

const LAKE_LAS_VEGAS_SERVICES: ServiceLink[] = [
  {
    title: "Emergency Plumbing",
    href: "/emergency-plumbing/",
    image: "/images/services/emergency-plumbing/card.webp",
    imageAlt: "24/7 emergency plumbing service in Lake Las Vegas, NV",
  },
  {
    title: "Drain Cleaning",
    href: "/drain-cleaning/",
    image: "/images/services/drain-cleaning/card.webp",
    imageAlt: "Drain cleaning service in Lake Las Vegas, NV",
  },
  {
    title: "Leak Detection and Repair",
    href: "/leak-detection-repair/",
    image: "/images/services/leak-detection-repair/card.webp",
    imageAlt: "Leak detection and repair in Lake Las Vegas, NV",
  },
  {
    title: "Water Heater Repair and Installation",
    href: "/water-heater-repair-installation/",
    image: "/images/services/water-heater-repair-installation/card.webp",
    imageAlt: "Water heater repair and installation in Lake Las Vegas, NV",
  },
  {
    title: "Slab Leak Detection and Repair",
    href: "/slab-leak-detection-repair/",
    image: "/images/services/slab-leak-detection-repair/card.webp",
    imageAlt: "Slab leak detection and repair in Lake Las Vegas, NV",
  },
  {
    title: "Sewer Line Services",
    href: "/sewer-line-services/",
    imageAlt: "Sewer line services in Lake Las Vegas, NV",
  },
  {
    title: "Re-Piping",
    href: "/re-piping/",
    imageAlt: "Re-piping services in Lake Las Vegas, NV",
  },
  {
    title: "Water Pipe Repair and Replacement",
    href: "/water-pipe-repair-replacement/",
    imageAlt: "Water pipe repair and replacement in Lake Las Vegas, NV",
  },
  {
    title: "Gas Line Plumbing",
    href: "/gas-line-plumbing/",
    imageAlt: "Gas line plumbing service in Lake Las Vegas, NV",
  },
  {
    title: "Commercial Plumbing",
    href: "/commercial-plumbing/",
    imageAlt: "Commercial plumbing services in Lake Las Vegas, NV",
  },
  {
    title: "Toilet Repair and Installation",
    href: "/toilet-repair-installation/",
    imageAlt: "Toilet repair and installation in Lake Las Vegas, NV",
  },
  {
    title: "Faucet and Sink Repair and Installation",
    href: "/faucet-sink-repair-installation/",
    imageAlt: "Faucet and sink repair and installation in Lake Las Vegas, NV",
  },
  {
    title: "Garbage Disposal Repair and Installation",
    href: "/garbage-disposal-repair-installation/",
    imageAlt: "Garbage disposal repair and installation in Lake Las Vegas, NV",
  },
  {
    title: "Backflow Prevention",
    href: "/backflow-prevention/",
    imageAlt: "Backflow prevention services in Lake Las Vegas, NV",
  },
  {
    title: "Video Camera Plumbing Inspections",
    href: "/video-camera-plumbing-inspections/",
    imageAlt: "Video camera plumbing inspections in Lake Las Vegas, NV",
  },
  {
    title: "Plumbing Fixture Repair, Replacement and Installation",
    href: "/plumbing-fixture-repair-replacement-installation/",
    imageAlt:
      "Plumbing fixture repair replacement and installation in Lake Las Vegas, NV",
  },
  {
    title: "Trenchless Piping",
    href: "/trenchless-piping/",
    imageAlt: "Trenchless piping services in Lake Las Vegas, NV",
  },
  {
    title: "Water Meter and Pressure Regulator Services",
    href: "/water-meter-pressure-regulator-services/",
    imageAlt: "Water meter and pressure regulator services in Lake Las Vegas, NV",
  },
];

// Plain-text area signals. Routes are not yet built, so these render as text.
const LAKE_LAS_VEGAS_AREAS = [
  "Lake Las Vegas Waterfront",
  "MonteLago Village Area",
  "South Shore",
  "Reflection Bay Area",
  "Gated Communities",
  "Lake Las Vegas Resort Corridor",
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

const LAKE_LAS_VEGAS_CONTEXT = [
  {
    title: "What Is Lake Las Vegas?",
    body: "Lake Las Vegas is a resort and residential community built around a 320-acre man-made lake in the eastern portion of Henderson, Nevada. Developed from the early 1990s through the mid-2000s, Lake Las Vegas was designed as a master-planned luxury destination, featuring waterfront residential properties, resort hotels, a Mediterranean-style village, golf courses, and gated communities. The community sits approximately 17 miles east of the Las Vegas Strip and is entirely within Henderson city limits. Homes in Lake Las Vegas range from high-end single-family residences to luxury townhomes and custom lakefront properties. Red Carpet Plumbing serves Lake Las Vegas as part of its Henderson service area, and Nevada Contractor License #0048585A covers plumbing work throughout Henderson including Lake Las Vegas.",
  },
  {
    title: "Hard Water and Premium Plumbing Systems",
    body: "Lake Las Vegas receives the same Lake Mead municipal water supply as the rest of the Las Vegas Valley. This water carries among the highest dissolved mineral content of any major municipal water system in the United States. The impact of hard water is felt differently in luxury homes than in standard construction. Tankless water heaters, which are common in Lake Las Vegas homes, are particularly vulnerable to mineral scale buildup on heat exchangers. Without periodic descaling, tankless units in hard water environments experience reduced flow, lower output temperatures, and shortened service life. Premium fixtures and complex plumbing systems also accumulate mineral deposits that affect performance over time. Regular maintenance of these systems is more important in Las Vegas Valley hard water conditions than it would be in softer-water markets.",
  },
  {
    title: "Aging Luxury Construction and First Service Milestones",
    body: "Lake Las Vegas homes built during the community's primary development period, the mid-1990s through mid-2000s, are now between 15 and 30 years old. This age range marks the point at which original water heaters, pressure regulators, and plumbing connections in luxury homes typically begin requiring service or replacement. Hard water accelerates this timeline, particularly for water heaters and any copper supply connections. Under-slab supply lines in Lake Las Vegas homes are subject to the same caliche soil movement conditions that affect the broader Las Vegas Valley. Slab leak risk in these homes is lower than in original Green Valley neighborhoods but is increasing as the construction ages. A plumbing inspection provides an accurate picture of current system condition before issues develop into significant repairs.",
  },
];

// ---------------------------------------------------------------------------
// JSON-LD payloads
// ---------------------------------------------------------------------------
// Lake Las Vegas is a community within the incorporated City of Henderson, so
// areaServed uses Place + containedInPlace City (Henderson) — same pattern as
// Green Valley.
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
    name: "Lake Las Vegas, Nevada",
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
  name: "Plumbing Services in Lake Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides licensed plumbing services in Lake Las Vegas, NV including water heater repair, slab leak detection, and leak detection. NV Licensed #0048585A.",
  url: "https://redcarpetplumbing.com/lake-las-vegas-plumbing-services/",
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
      name: "Lake Las Vegas Plumbing Services",
      item: "https://redcarpetplumbing.com/lake-las-vegas-plumbing-services/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: LAKE_LAS_VEGAS_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function LakeLasVegasPlumbingServicesPage() {
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
            {
              label: "Henderson Plumbing Services",
              href: "/henderson-plumbing-services/",
            },
            { label: "Lake Las Vegas Plumbing Services" },
          ]}
        />

        {/* SECTION 1: HERO */}
        {/* TODO: Add client-supplied Lake Las Vegas hero image at
            /images/locations/lake-las-vegas/hero.webp, then pass it via the
            HeroSection backgroundImage prop. Omitted for now (image missing);
            hero renders its gradient background. */}
        <HeroSection
          headingLevel="h1"
          headline="Plumbing Services in Lake Las Vegas, NV"
          subheading="Red Carpet Plumbing provides licensed plumbing services in Lake Las Vegas, Nevada. Lake Las Vegas is a luxury resort and residential community within Henderson, featuring premium homes and complex plumbing systems that require experienced licensed plumbers. Our licensed plumbers serve Lake Las Vegas homes and properties. NV Contractor License #0048585A."
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
                Licensed Plumbing Services in Lake Las Vegas
              </h2>
              <p className="mt-4 text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing is a local, family-owned plumbing company
                serving Lake Las Vegas and the broader Henderson area. Lake Las
                Vegas is a luxury master-planned community within the City of
                Henderson, and Red Carpet Plumbing has been serving homes
                throughout Henderson, including Lake Las Vegas, for over 40 years.
                We hold Nevada Contractor License #0048585A under the C-1 Plumbing
                and Heating classification. For full Henderson area plumbing
                coverage, visit our{" "}
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

        {/* SECTION 3: LAKE LAS VEGAS PLUMBING CONTEXT */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10 lg:pb-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Plumbing in Lake Las Vegas:
                    <br className="hidden sm:block" /> What Homeowners Should Know
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Lake Las Vegas pairs luxury construction and premium plumbing
                    systems with the same hard water every Las Vegas Valley home
                    faces. That combination shapes the service these homes tend
                    to need.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-12 space-y-10">
                {LAKE_LAS_VEGAS_CONTEXT.map((item) => (
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
                    Plumbing Services We Provide in Lake Las Vegas
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Red Carpet Plumbing provides a full range of residential
                    plumbing services for Lake Las Vegas homes and properties.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-14">
                {/* TODO-BATCH-PHASE4: Lake Las Vegas service-location pages not yet built: */}
                {/* /lake-las-vegas/water-heater-repair-installation/, */}
                {/* /lake-las-vegas/leak-detection-repair/, */}
                {/* /lake-las-vegas/slab-leak-detection-repair/. */}
                {/* ServiceCards link to core service pages only. */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {LAKE_LAS_VEGAS_SERVICES.map((service) => (
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

        {/* SECTION 5: AREAS SERVED AND PARENT HUB */}
        <section className="bg-brand-charcoal text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="max-w-3xl text-left">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Lake Las Vegas and Henderson Service Coverage
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/85">
                Lake Las Vegas is part of the City of Henderson. Red Carpet
                Plumbing serves the entire Henderson and Lake Las Vegas area. For
                full Henderson coverage, see our Henderson plumbing services page.
              </p>
            </div>

            <div className="mt-8">
              <Link
                href="/henderson-plumbing-services/"
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-brand-charcoal shadow-sm transition-colors hover:bg-brand-surface-alt focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-safe:transition-transform motion-safe:active:scale-[0.97]"
              >
                Henderson Plumbing Services
              </Link>
            </div>

            <ul className="mt-10 flex flex-wrap gap-3">
              {LAKE_LAS_VEGAS_AREAS.map((name) => (
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
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Need an Emergency Plumber in Lake Las Vegas?
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/90">
                  Red Carpet Plumbing provides 24/7 emergency plumbing service
                  for Lake Las Vegas homes and properties. Burst pipes, water
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
                Why Lake Las Vegas Homeowners
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
                <br className="hidden sm:block" /> About Plumbing in Lake Las
                Vegas
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {LAKE_LAS_VEGAS_FAQS.map((faq) => (
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
          headline="Request Plumbing Service in Lake Las Vegas"
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
