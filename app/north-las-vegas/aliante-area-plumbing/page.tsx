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
  title: "Plumbing Services in Aliante, North Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Plumbing services in Aliante, North Las Vegas. Emergency plumbing, water heater repair, drain cleaning, leak detection. NV #0048585A. (702) 567-9172.",
  alternates: {
    canonical:
      "https://redcarpetplumbing.com/north-las-vegas/aliante-area-plumbing/",
  },
  openGraph: {
    title:
      "Plumbing Services in the Aliante Area, North Las Vegas | Red Carpet Plumbing",
    description:
      "Plumbing services in Aliante, North Las Vegas. Emergency plumbing, water heater repair, drain cleaning, leak detection. NV #0048585A. (702) 567-9172.",
    url: "https://redcarpetplumbing.com/north-las-vegas/aliante-area-plumbing/",
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
const ALIANTE_FAQS = [
  {
    question:
      "Does Red Carpet Plumbing serve the Aliante area of North Las Vegas?",
    answer:
      "Yes. Red Carpet Plumbing provides plumbing services throughout the Aliante master-planned community and surrounding North Las Vegas neighborhoods. Call (702) 567-9172 to confirm coverage and schedule service.",
  },
  {
    question: "What is the Aliante area in North Las Vegas?",
    answer:
      "Aliante is a large master-planned community in the northwest portion of North Las Vegas, Nevada. It was developed primarily between the late 1990s and 2010, featuring planned neighborhoods, parks, and the Aliante Nature Discovery Park. Aliante is within North Las Vegas city limits, and Red Carpet Plumbing serves the Aliante area as part of its North Las Vegas service coverage.",
  },
  {
    question:
      "What plumbing services does Red Carpet Plumbing offer in the Aliante area?",
    answer:
      "Red Carpet Plumbing provides plumbing services in the Aliante area including emergency plumbing, drain cleaning, water heater repair and installation, leak detection, slab leak detection and repair, and more.",
  },
  {
    question: "Are water heater replacements common in Aliante homes?",
    answer:
      "Yes. Most Aliante homes were built between 2000 and 2008, placing them at 16 to 25 years old. Standard tank water heaters have an expected service life of 8 to 12 years under normal conditions, and Las Vegas Valley hard water shortens this further through accelerated sediment buildup. Many Aliante homeowners are now dealing with aging original water heaters that are at or past their expected service life.",
  },
  {
    question:
      "Is Red Carpet Plumbing licensed to work in the Aliante area of North Las Vegas?",
    answer:
      "Yes. Red Carpet Plumbing holds Nevada Contractor License #0048585A under the C-1 Plumbing and Heating classification, issued by the State of Nevada Contractors Board. This license covers plumbing work throughout Nevada including North Las Vegas and the Aliante area.",
  },
  {
    question: "How do I request plumbing service in the Aliante area?",
    answer:
      "Call Red Carpet Plumbing at (702) 567-9172 or submit a service request online. For emergency plumbing in the Aliante area, calling directly is the fastest option.",
  },
];

// ---------------------------------------------------------------------------
// All 18 core service pages. Each links to a live route (built=true).
// card.webp assets exist for the first five services; the rest use the
// ServiceCard ServiceImagePlaceholder fallback (no image prop passed).
// ACTIVATED: /north-las-vegas/aliante-area/emergency-plumbing/ built (P40).
// ACTIVATED: /north-las-vegas/aliante-area/drain-cleaning/ built (P41).
// ACTIVATED: /north-las-vegas/aliante-area/water-heater-repair-installation/ built (P42).
// ACTIVATED: /north-las-vegas/aliante-area/leak-detection-repair/ built (P43).
// ACTIVATED: /north-las-vegas/aliante-area/slab-leak-detection-repair/ built (P44).
// All Aliante-area service-location ServiceCards now link to built routes.
// ---------------------------------------------------------------------------
type ServiceLink = {
  title: string;
  href: string;
  image?: string;
  imageAlt: string;
};

const ALIANTE_SERVICES: ServiceLink[] = [
  {
    // ACTIVATED: P40 built and staged.
    title: "Emergency Plumbing",
    href: "/north-las-vegas/aliante-area/emergency-plumbing/",
    image: "/images/services/emergency-plumbing/card.webp",
    imageAlt: "24/7 emergency plumbing service in the Aliante area",
  },
  {
    // ACTIVATED: P41 built and staged
    title: "Drain Cleaning",
    href: "/north-las-vegas/aliante-area/drain-cleaning/",
    image: "/images/services/drain-cleaning/card.webp",
    imageAlt: "Drain cleaning service in the Aliante area",
  },
  {
    // ACTIVATED: P43 built and staged
    title: "Leak Detection and Repair",
    href: "/north-las-vegas/aliante-area/leak-detection-repair/",
    image: "/images/services/leak-detection-repair/card.webp",
    imageAlt: "Leak detection and repair in the Aliante area",
  },
  {
    // ACTIVATED: P42 built and staged
    title: "Water Heater Repair and Installation",
    href: "/north-las-vegas/aliante-area/water-heater-repair-installation/",
    image: "/images/services/water-heater-repair-installation/card.webp",
    imageAlt: "Water heater repair and installation in the Aliante area",
  },
  {
    // ACTIVATED: P44 built and staged
    title: "Slab Leak Detection and Repair",
    href: "/north-las-vegas/aliante-area/slab-leak-detection-repair/",
    image: "/images/services/slab-leak-detection-repair/card.webp",
    imageAlt: "Slab leak detection and repair in the Aliante area",
  },
  {
    title: "Sewer Line Services",
    href: "/sewer-line-services/",
    imageAlt: "Sewer line services in the Aliante area",
  },
  {
    title: "Re-Piping",
    href: "/re-piping/",
    imageAlt: "Re-piping services in the Aliante area",
  },
  {
    title: "Water Pipe Repair and Replacement",
    href: "/water-pipe-repair-replacement/",
    imageAlt: "Water pipe repair and replacement in the Aliante area",
  },
  {
    title: "Gas Line Plumbing",
    href: "/gas-line-plumbing/",
    imageAlt: "Gas line plumbing service in the Aliante area",
  },
  {
    title: "Commercial Plumbing",
    href: "/commercial-plumbing/",
    imageAlt: "Commercial plumbing services in the Aliante area",
  },
  {
    title: "Toilet Repair and Installation",
    href: "/toilet-repair-installation/",
    imageAlt: "Toilet repair and installation in the Aliante area",
  },
  {
    title: "Faucet and Sink Repair and Installation",
    href: "/faucet-sink-repair-installation/",
    imageAlt: "Faucet and sink repair and installation in the Aliante area",
  },
  {
    title: "Garbage Disposal Repair and Installation",
    href: "/garbage-disposal-repair-installation/",
    imageAlt: "Garbage disposal repair and installation in the Aliante area",
  },
  {
    title: "Backflow Prevention",
    href: "/backflow-prevention/",
    imageAlt: "Backflow prevention services in the Aliante area",
  },
  {
    title: "Video Camera Plumbing Inspections",
    href: "/video-camera-plumbing-inspections/",
    imageAlt: "Video camera plumbing inspections in the Aliante area",
  },
  {
    title: "Plumbing Fixture Repair, Replacement and Installation",
    href: "/plumbing-fixture-repair-replacement-installation/",
    imageAlt:
      "Plumbing fixture repair replacement and installation in the Aliante area",
  },
  {
    title: "Trenchless Piping",
    href: "/trenchless-piping/",
    imageAlt: "Trenchless piping services in the Aliante area",
  },
  {
    title: "Water Meter and Pressure Regulator Services",
    href: "/water-meter-pressure-regulator-services/",
    imageAlt: "Water meter and pressure regulator services in the Aliante area",
  },
];

// Plain-text area signals. Routes are not yet built, so these render as text.
const ALIANTE_AREAS = [
  "Aliante Parkway Area",
  "Aliante Nature Discovery Park Area",
  "Ann Road Corridor",
  "Deer Springs Way Area",
  "Elkhorn Road Area",
  "Northwest North Las Vegas",
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

const ALIANTE_CONTEXT = [
  {
    title: "What Is the Aliante Area?",
    body: "Aliante is a large master-planned community in the northwest portion of North Las Vegas, Nevada. Development began in the late 1990s and continued through approximately 2010, with the majority of residential construction occurring between 2000 and 2008. The community features planned neighborhoods organized around the Aliante Nature Discovery Park, a 40-acre nature park that serves as the community's central amenity. Aliante is within North Las Vegas city limits and is served by North Las Vegas municipal utilities. Red Carpet Plumbing serves the Aliante community and surrounding northwest North Las Vegas neighborhoods, with Nevada Contractor License #0048585A covering plumbing work throughout North Las Vegas including Aliante.",
  },
  {
    title: "Aliante Homes and the First Major Service Cycle",
    body: "Most homes in the Aliante community were built between 2000 and 2008, placing the housing stock at 16 to 25 years old. This age range coincides with the first major plumbing service cycle for many Las Vegas Valley homes. Standard tank water heaters have an expected service life of 8 to 12 years under normal conditions, and under the Las Vegas Valley's hard water conditions, sediment accumulation shortens this further. Many Aliante homeowners are now dealing with original water heaters that are well past their expected service life and are showing signs of reduced efficiency, inconsistent hot water delivery, or early failure. Supply line connections, pressure regulators, and fixture hardware installed during original construction are also beginning to show hard water wear in 20-plus year old homes.",
  },
  {
    title: "Hard Water in the Aliante Area",
    body: "The Aliante area receives the same Lake Mead municipal water supply as the rest of the Las Vegas Valley and the City of North Las Vegas. This supply carries high dissolved mineral content that accelerates scale buildup in water heaters, supply lines, and fixtures. In homes that are now 16 to 25 years old, hard water mineral deposits have been accumulating inside water heaters and supply connections throughout the home's history. Regular water heater flushing, anode rod inspection, and attention to supply line and fixture condition help Aliante homeowners stay ahead of hard water-related plumbing problems before they require major repairs.",
  },
];

// ---------------------------------------------------------------------------
// JSON-LD payloads
// ---------------------------------------------------------------------------
// Aliante is a community within the incorporated City of North Las Vegas, so
// areaServed uses Place + containedInPlace City (North Las Vegas) — same pattern
// as Green Valley and Lake Las Vegas (within Henderson).
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
    name: "Aliante, North Las Vegas, Nevada",
    containedInPlace: {
      "@type": "City",
      name: "North Las Vegas",
      sameAs: "https://www.wikidata.org/wiki/Q982252",
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
  name: "Plumbing Services in the Aliante Area of North Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides licensed plumbing services in the Aliante area of North Las Vegas including water heater repair, drain cleaning, and leak detection. NV Licensed #0048585A.",
  url: "https://redcarpetplumbing.com/north-las-vegas/aliante-area-plumbing/",
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
    {
      "@type": "ListItem",
      position: 4,
      name: "Aliante Area Plumbing Services",
      item: "https://redcarpetplumbing.com/north-las-vegas/aliante-area-plumbing/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: ALIANTE_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function AlianteAreaPlumbingPage() {
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
              label: "North Las Vegas Plumbing Services",
              href: "/north-las-vegas-plumbing-services/",
            },
            { label: "Aliante Area Plumbing Services" },
          ]}
        />

        {/* SECTION 1: HERO */}
        {/* TODO: Add client-supplied Aliante area hero image at
            /images/locations/aliante/hero.webp, then pass it via the
            HeroSection backgroundImage prop. Omitted for now (image missing);
            hero renders its gradient background. */}
        <HeroSection
          headingLevel="h1"
          headline="Plumbing Services in the Aliante Area of North Las Vegas, NV"
          subheading="Red Carpet Plumbing provides licensed plumbing services throughout the Aliante master-planned community and surrounding North Las Vegas neighborhoods. Most Aliante homes were built between 2000 and 2008 and are entering the first major plumbing service cycle under Las Vegas Valley hard water conditions. NV Contractor License #0048585A."
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
                Licensed Plumbing Services in the Aliante Area
              </h2>
              <p className="mt-4 text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing is a local, family-owned plumbing company
                serving the Aliante area and the broader North Las Vegas
                community. Aliante is a master-planned community within the City
                of North Las Vegas, and Red Carpet Plumbing has been serving
                homes throughout North Las Vegas, including Aliante, for over 40
                years. We hold Nevada Contractor License #0048585A under the C-1
                Plumbing and Heating classification. For full North Las Vegas area
                plumbing coverage, visit our{" "}
                <Link
                  href="/north-las-vegas-plumbing-services/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  North Las Vegas Plumbing Services
                </Link>{" "}
                page.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: ALIANTE PLUMBING CONTEXT */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10 lg:pb-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Plumbing in the Aliante Area:
                    <br className="hidden sm:block" /> What Homeowners Should Know
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Aliante is one of the defining master-planned communities in
                    North Las Vegas, and its homes are reaching the age where the
                    first round of major plumbing service tends to come due.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-12 space-y-10">
                {ALIANTE_CONTEXT.map((item) => (
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
                    Plumbing Services We Provide in the Aliante Area
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Red Carpet Plumbing provides a full range of residential
                    plumbing services for Aliante area homes and properties.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-14">
                {/* ACTIVATED: /north-las-vegas/aliante-area/emergency-plumbing/ built (P40). */}
                {/* ACTIVATED: /north-las-vegas/aliante-area/drain-cleaning/ built (P41). */}
                {/* ACTIVATED: /north-las-vegas/aliante-area/water-heater-repair-installation/ built (P42). */}
                {/* ACTIVATED: /north-las-vegas/aliante-area/leak-detection-repair/ built (P43). */}
                {/* ACTIVATED: /north-las-vegas/aliante-area/slab-leak-detection-repair/ built (P44). */}
                {/* All Aliante-area service-location ServiceCards now link to built routes. */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {ALIANTE_SERVICES.map((service) => (
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
                Aliante Area and North Las Vegas Service Coverage
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/85">
                The Aliante area is part of North Las Vegas. Red Carpet Plumbing
                serves the entire North Las Vegas area including Aliante. For full
                North Las Vegas coverage, see our North Las Vegas plumbing
                services page.
              </p>
            </div>

            <div className="mt-8">
              <Link
                href="/north-las-vegas-plumbing-services/"
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-brand-charcoal shadow-sm transition-colors hover:bg-brand-surface-alt focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-safe:transition-transform motion-safe:active:scale-[0.97]"
              >
                North Las Vegas Plumbing Services
              </Link>
            </div>

            <ul className="mt-10 flex flex-wrap gap-3">
              {ALIANTE_AREAS.map((name) => (
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
                  Need an Emergency Plumber in the Aliante Area?
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/90">
                  Red Carpet Plumbing provides 24/7 emergency plumbing service
                  for Aliante homes and properties. Burst pipes, water heater
                  failures, slab leaks, and major plumbing problems are handled
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
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Why Aliante Homeowners
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
                <br className="hidden sm:block" /> About Plumbing in the Aliante
                Area
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {ALIANTE_FAQS.map((faq) => (
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
          headline={<>Request Plumbing Service<br />in the Aliante Area</>}
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
