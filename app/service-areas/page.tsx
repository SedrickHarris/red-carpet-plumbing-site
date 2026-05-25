import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { HeroSection } from "@/components/HeroSection";
import { JsonLd } from "@/components/JsonLd";
import { QuoteFormPlaceholder } from "@/components/QuoteFormPlaceholder";
import { ServiceImagePlaceholder } from "@/components/ServiceImagePlaceholder";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title:
    "Plumbing Service Areas in Las Vegas Valley | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing serves Las Vegas, Henderson, North Las Vegas, Summerlin, Spring Valley, Paradise, Boulder City, Green Valley, Lake Las Vegas, and the Las Vegas Valley.",
  alternates: {
    canonical: "https://redcarpetplumbing.com/service-areas/",
  },
  openGraph: {
    title:
      "Plumbing Service Areas in Las Vegas Valley | Red Carpet Plumbing",
    description:
      "Red Carpet Plumbing provides plumbing services throughout the Las Vegas Valley including Las Vegas, Henderson, North Las Vegas, Paradise, Summerlin, Spring Valley, Enterprise, Boulder City, Green Valley, and Lake Las Vegas.",
    url: "https://redcarpetplumbing.com/service-areas/",
    siteName: "Red Carpet Plumbing",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

// ---------------------------------------------------------------------------
// FAQ source of truth. The visible FAQ section AND the FAQPage JSON-LD
// schema both derive from this list, guaranteeing character-for-character
// match. Do not edit one without the other.
// ---------------------------------------------------------------------------
const SERVICE_AREAS_FAQS = [
  {
    question: "What areas does Red Carpet Plumbing serve?",
    answer:
      "Red Carpet Plumbing serves Las Vegas, Henderson, North Las Vegas, Paradise, Summerlin, Spring Valley, Enterprise, Boulder City, Green Valley, Lake Las Vegas, and surrounding communities throughout the Las Vegas Valley. Contact us to confirm service availability in your neighborhood.",
  },
  {
    question: "Does Red Carpet Plumbing serve Henderson, NV?",
    answer:
      "Yes, Red Carpet Plumbing serves Henderson, Nevada including the Green Valley and Lake Las Vegas areas. Services available in Henderson include emergency plumbing, drain cleaning, leak detection and repair, water heater service, slab leak detection and repair, and re-piping.",
  },
  {
    question: "Does Red Carpet Plumbing serve Summerlin?",
    answer:
      "Yes, Red Carpet Plumbing provides plumbing services in the Summerlin area of Las Vegas. Available services in Summerlin include emergency plumbing, drain cleaning, water heater repair and installation, leak detection, slab leak repair, and re-piping.",
  },
  {
    question: "Does Red Carpet Plumbing serve North Las Vegas?",
    answer:
      "Yes, Red Carpet Plumbing serves North Las Vegas including the Aliante area and surrounding neighborhoods. Services available include emergency plumbing, drain cleaning, water heater service, leak detection, and commercial plumbing.",
  },
  {
    question: "Does Red Carpet Plumbing serve Spring Valley and Enterprise?",
    answer:
      "Yes, Red Carpet Plumbing serves both the Spring Valley and Enterprise areas of the Las Vegas Valley. Available services include emergency plumbing, drain cleaning, leak detection and repair, slab leak detection, water heater service, and re-piping.",
  },
  {
    question: "Does Red Carpet Plumbing serve Boulder City, NV?",
    answer:
      "Yes, Red Carpet Plumbing provides plumbing services in Boulder City, Nevada. Services available in Boulder City include emergency plumbing, drain cleaning, water heater repair and installation, and leak detection.",
  },
  {
    question:
      "What plumbing services does Red Carpet Plumbing offer throughout the Las Vegas Valley?",
    answer:
      "Red Carpet Plumbing offers emergency plumbing, drain cleaning, leak detection and repair, water heater repair and installation, slab leak detection and repair, sewer line services, re-piping, gas line plumbing, commercial plumbing, and a full range of residential and commercial plumbing repair and installation services throughout the Las Vegas Valley.",
  },
  {
    question:
      "How do I find out if Red Carpet Plumbing serves my neighborhood?",
    answer:
      "If your neighborhood is not listed on this page, contact Red Carpet Plumbing directly by phone or through the online service request form. We can confirm whether your location is within our current service area.",
  },
];

// ---------------------------------------------------------------------------
// Tier 1 location cards. Every link is a forward route that does not yet
// exist on disk; each <Link> ships with a TODO-BATCH-NEXT comment.
// ---------------------------------------------------------------------------
type LocationCardData = {
  name: string;
  image?: string;
  alt: string;
  description: string;
  href: string;
};

const LOCATION_CARDS: LocationCardData[] = [
  {
    name: "Las Vegas",
    image: "/images/locations/las-vegas/hero.webp",
    alt: "View of the Las Vegas Strip from above",
    description:
      "Plumbing services for homes and businesses throughout Las Vegas, including residential repair, emergency plumbing, drain cleaning, leak detection, and commercial plumbing.",
    href: "/las-vegas-plumbing-services/",
  },
  {
    name: "Henderson",
    image: "/images/locations/henderson/hero.webp",
    alt: "Henderson, Nevada residential district",
    description:
      "Plumbing repair, installation, and emergency service for Henderson homeowners and businesses, including Green Valley and Lake Las Vegas areas.",
    href: "/henderson-plumbing-services/",
  },
  {
    name: "North Las Vegas",
    // TODO: Replace placeholder with location image when available
    alt: "North Las Vegas neighborhood",
    description:
      "Residential and commercial plumbing services throughout North Las Vegas, including the Aliante area and surrounding neighborhoods.",
    href: "/north-las-vegas-plumbing-services/",
  },
  {
    name: "Paradise",
    // TODO: Replace placeholder with location image when available
    alt: "Paradise, Nevada near Las Vegas",
    description:
      "Plumbing services for the Paradise area of the Las Vegas Valley, serving residential and commercial customers near the Strip corridor and surrounding neighborhoods.",
    href: "/paradise-plumbing-services/",
  },
  {
    name: "Summerlin",
    image: "/images/locations/summerlin/hero.webp",
    alt: "Summerlin community entrance in Las Vegas",
    description:
      "Plumbing services for Summerlin homes and businesses, including emergency plumbing, drain cleaning, water heater service, leak detection, and re-piping.",
    href: "/summerlin-plumbing-services/",
  },
  {
    name: "Spring Valley",
    image: "/images/locations/spring-valley/hero.webp",
    alt: "Spring Valley neighborhood near Las Vegas",
    description:
      "Plumbing services for Spring Valley residents and businesses, including emergency response, drain cleaning, leak detection, and water heater service.",
    href: "/spring-valley-plumbing-services/",
  },
  {
    name: "Enterprise",
    // TODO: Replace placeholder with location image when available
    alt: "Enterprise area of southwest Las Vegas",
    description:
      "Plumbing services for homes, businesses, and commercial properties in the Enterprise area of southwest Las Vegas.",
    href: "/enterprise-plumbing-services/",
  },
  {
    name: "Boulder City",
    // TODO: Replace placeholder with location image when available
    alt: "Boulder City, Nevada",
    description:
      "Plumbing repair, drain cleaning, water heater service, and emergency plumbing for Boulder City homes and properties.",
    href: "/boulder-city-plumbing-services/",
  },
  {
    name: "Green Valley",
    // TODO: Replace placeholder with location image when available
    alt: "Green Valley community in Henderson, Nevada",
    description:
      "Plumbing services for Green Valley residents including drain cleaning, leak detection, slab leak repair, re-piping, and water heater service.",
    href: "/green-valley-plumbing-services/",
  },
  {
    name: "Lake Las Vegas",
    // TODO: Replace placeholder with location image when available
    alt: "Lake Las Vegas community in Henderson, Nevada",
    description:
      "Plumbing services for Lake Las Vegas homes including water heater service, leak detection, slab leak repair, and drain cleaning.",
    href: "/lake-las-vegas-plumbing-services/",
  },
  {
    name: "Aliante Area (North Las Vegas)",
    // TODO: Replace placeholder with location image when available
    alt: "Aliante area in North Las Vegas, Nevada",
    description:
      "Plumbing services for the Aliante master-planned community and surrounding North Las Vegas neighborhoods.",
    href: "/north-las-vegas/aliante-area-plumbing/",
  },
];

// ---------------------------------------------------------------------------
// Tier 2 neighborhood names — all routes are future Batch builds.
// Each name renders as PLAIN TEXT (not a link). Comments document the
// intended future route slug.
// ---------------------------------------------------------------------------
const LAS_VEGAS_TIER2 = [
  // TODO-BATCH-TIER2: /las-vegas/whitney-plumbing/ not yet built — render as text until route is created
  "Whitney",
  // TODO-BATCH-TIER2: /las-vegas/winchester-plumbing/ not yet built — render as text until route is created
  "Winchester",
  // TODO-BATCH-TIER2: /las-vegas/sunrise-manor-plumbing/ not yet built — render as text until route is created
  "Sunrise Manor",
  // TODO-BATCH-TIER2: /las-vegas/desert-shores-plumbing/ not yet built — render as text until route is created
  "Desert Shores",
  // TODO-BATCH-TIER2: /las-vegas/tropicana-area-plumbing/ not yet built — render as text until route is created
  "Tropicana Area",
];

const HENDERSON_TIER2 = [
  // TODO-BATCH-TIER2: /henderson/seven-hills-plumbing/ not yet built — render as text until route is created
  "Seven Hills",
];

const SPRING_VALLEY_ENTERPRISE_TIER2 = [
  // TODO-BATCH-TIER2: /spring-valley/desert-inn-west-sahara-plumbing/ not yet built — render as text until route is created
  "Desert Inn / West Sahara Corridor",
  // TODO-BATCH-TIER2: /enterprise/southwest-las-vegas-plumbing/ not yet built — render as text until route is created
  "Enterprise Southwest Las Vegas",
];

// ---------------------------------------------------------------------------
// Section 7 service list. All routes except `/plumbing-services/` are
// future Batch Next builds.
// ---------------------------------------------------------------------------
const POPULAR_SERVICES = [
  { label: "Emergency Plumbing", href: "/emergency-plumbing/" },
  { label: "Drain Cleaning", href: "/drain-cleaning/" },
  { label: "Leak Detection and Repair", href: "/leak-detection-repair/" },
  {
    label: "Water Heater Repair and Installation",
    href: "/water-heater-repair-installation/",
  },
  {
    label: "Slab Leak Detection and Repair",
    href: "/slab-leak-detection-repair/",
  },
  { label: "Sewer Line Services", href: "/sewer-line-services/" },
  { label: "Re-Piping", href: "/re-piping/" },
  { label: "Commercial Plumbing", href: "/commercial-plumbing/" },
];

const WHY_CHOOSE_LABELS = [
  "Local Las Vegas Plumbing Company",
  "Residential and Commercial Service",
  // SOURCE-SITE CLAIM: verify supporting documentation before final launch
  "Emergency Plumbing Support",
  // SOURCE-SITE CLAIM: verify supporting documentation before final launch
  "Transparent Pricing",
  // SOURCE-SITE CLAIM: verify supporting documentation before final launch
  "Customer Satisfaction Focus",
];

// ---------------------------------------------------------------------------
// JSON-LD payloads
// ---------------------------------------------------------------------------

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Plumbing Service Areas in Las Vegas Valley | Red Carpet Plumbing",
  url: "https://redcarpetplumbing.com/service-areas/",
  description:
    "Red Carpet Plumbing serves Las Vegas, Henderson, North Las Vegas, Summerlin, Spring Valley, Paradise, Boulder City, Green Valley, Lake Las Vegas, and the Las Vegas Valley.",
  breadcrumb: {
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
    ],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Plumbing Services",
  serviceType: "Plumbing",
  provider: {
    "@type": "Plumber",
    name: "Red Carpet Plumbing",
    url: "https://redcarpetplumbing.com",
    // FLAG: ADD telephone field once phone number is confirmed
    areaServed: [
      {
        "@type": "City",
        name: "Las Vegas",
        containedInPlace: { "@type": "State", name: "Nevada" },
      },
      {
        "@type": "City",
        name: "Henderson",
        containedInPlace: { "@type": "State", name: "Nevada" },
      },
      {
        "@type": "City",
        name: "North Las Vegas",
        containedInPlace: { "@type": "State", name: "Nevada" },
      },
      {
        "@type": "City",
        name: "Paradise",
        containedInPlace: { "@type": "State", name: "Nevada" },
      },
      {
        "@type": "City",
        name: "Summerlin",
        containedInPlace: { "@type": "State", name: "Nevada" },
      },
      {
        "@type": "City",
        name: "Spring Valley",
        containedInPlace: { "@type": "State", name: "Nevada" },
      },
      {
        "@type": "City",
        name: "Enterprise",
        containedInPlace: { "@type": "State", name: "Nevada" },
      },
      {
        "@type": "City",
        name: "Boulder City",
        containedInPlace: { "@type": "State", name: "Nevada" },
      },
      {
        "@type": "City",
        name: "Green Valley",
        containedInPlace: { "@type": "State", name: "Nevada" },
      },
      {
        "@type": "City",
        name: "Lake Las Vegas",
        containedInPlace: { "@type": "State", name: "Nevada" },
      },
    ],
  },
  description:
    "Red Carpet Plumbing provides residential and commercial plumbing services throughout the Las Vegas Valley.",
  areaServed: "Las Vegas Valley, NV",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: SERVICE_AREAS_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function ServiceAreasPage() {
  return (
    <>
      <JsonLd data={webPageSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />

      <SiteHeader />

      <main id="main" className="flex-1 bg-white">
        {/* SECTION 1: BREADCRUMBS */}
        <Breadcrumbs
          trail={[
            { label: "Home", href: "/" },
            { label: "Service Areas" },
          ]}
        />

        {/* SECTION 2: HERO (two-column with form) */}
        <HeroSection
          headingLevel="h1"
          headline="Plumbing Service Areas in the Las Vegas Valley"
          subheading={
            <>
              <span className="block">
                Red Carpet Plumbing provides plumbing services throughout the
                Las Vegas Valley. The company serves Las Vegas, Henderson, North
                Las Vegas, Paradise, Summerlin, Spring Valley, Enterprise,
                Boulder City, Green Valley, Lake Las Vegas, and surrounding
                communities. Whether you need emergency plumbing, drain
                cleaning, leak detection, water heater service, or any other
                residential or commercial plumbing support, Red Carpet Plumbing
                serves customers across the greater Las Vegas area.
              </span>
              <span className="mt-4 block">
                If you are not sure whether we serve your neighborhood, contact
                us and we will confirm your service area.
              </span>
            </>
          }
          primaryCTA={{
            label: "Request Plumbing Service",
            // TODO-BATCH-NEXT: /contact/ not yet built
            href: "/contact/",
          }}
          /* FLAG: CLIENT MUST CONFIRM PHONE NUMBER BEFORE LAUNCH — do not invent */
          secondaryCTA={{
            label: "Call Now",
            href: "#",
            disabled: true,
          }}
          formSlot={
            <QuoteFormPlaceholder
              title="Request Plumbing Service"
              includeZip
              submitLabel="Request Plumbing Service"
            />
          }
          backgroundImage={{
            src: "/images/locations/las-vegas/hero.webp",
            alt: "View of the Las Vegas Strip from above",
          }}
        />

        {/* SECTION 3: PRIMARY SERVICE AREAS GRID */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Primary Plumbing Service Areas
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing operates across the Las Vegas Valley with
                plumbing services available for homeowners, businesses, and
                property managers in the following primary service areas.
              </p>
            </div>
            <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {LOCATION_CARDS.map((card) => (
                <article
                  key={card.href}
                  className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-brand-surface-alt transition hover:shadow-lg"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-brand-surface-alt">
                    {card.image ? (
                      <Image
                        src={card.image}
                        alt={card.alt}
                        fill
                        sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition group-hover:scale-105"
                      />
                    ) : (
                      <ServiceImagePlaceholder />
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-xl font-semibold text-brand-dark">
                      {card.name}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-6 text-brand-dark/80">
                      {card.description}
                    </p>
                    <Link
                      // TODO-BATCH-NEXT: card.href location route not yet built
                      href={card.href}
                      className="mt-4 inline-flex items-center text-sm font-semibold text-brand-primary hover:text-brand-primary-hover"
                    >
                      See Plumbing Services
                      <span aria-hidden="true" className="ml-1">
                        →
                      </span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: MID-PAGE CTA STRIP */}
        <CTASection
          background="red"
          headline="Need a Plumber in the Las Vegas Valley?"
          primaryCTA={{
            label: "Request Plumbing Service",
            // TODO-BATCH-NEXT: /contact/ not yet built
            href: "/contact/",
          }}
          /* FLAG: CLIENT MUST CONFIRM PHONE NUMBER BEFORE LAUNCH — do not invent */
          secondaryCTA={{
            label: "Call Now",
            href: "#",
            disabled: true,
          }}
        />

        {/* SECTION 5: NEIGHBORHOODS AND CORRIDORS (Tier 2 plain text) */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
              Neighborhoods and Corridors We Serve
            </h2>
            <p className="mt-6 text-lg leading-8 text-brand-dark/80">
              In addition to our primary service areas, Red Carpet Plumbing
              serves customers in many Las Vegas Valley neighborhoods and
              corridors.
            </p>

            <div className="mt-10">
              <h3 className="text-xl font-semibold text-brand-dark">
                Las Vegas Neighborhoods
              </h3>
              <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-base text-brand-dark/80">
                {LAS_VEGAS_TIER2.map((name) => (
                  <li
                    key={name}
                    className="before:mr-2 before:content-['•'] before:text-brand-muted"
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-brand-dark">
                Henderson Neighborhoods
              </h3>
              <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-base text-brand-dark/80">
                {HENDERSON_TIER2.map((name) => (
                  <li
                    key={name}
                    className="before:mr-2 before:content-['•'] before:text-brand-muted"
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-brand-dark">
                Spring Valley and Enterprise Areas
              </h3>
              <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-base text-brand-dark/80">
                {SPRING_VALLEY_ENTERPRISE_TIER2.map((name) => (
                  <li
                    key={name}
                    className="before:mr-2 before:content-['•'] before:text-brand-muted"
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 6: ALSO SERVING NEARBY AREAS */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
              Also Serving Nearby Areas
            </h2>
            <p className="mt-6 text-lg leading-8 text-brand-dark/80">
              Red Carpet Plumbing also serves customers in nearby communities
              throughout Clark County and the Las Vegas Valley. If your
              neighborhood is not listed above, contact us to confirm your
              service area.
            </p>
            <p className="mt-4 text-lg leading-8 text-brand-dark/80">
              Communities and corridors we have served include Downtown Las
              Vegas, the North Strip area, the South Strip corridor, the
              Fremont Street area, and other Las Vegas Valley communities.
            </p>
          </div>
        </section>

        {/* SECTION 7: POPULAR SERVICES BY AREA */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
              Popular Plumbing Services by Area
            </h2>
            <p className="mt-6 text-lg leading-8 text-brand-dark/80">
              No matter which Las Vegas Valley community you live or work in,
              Red Carpet Plumbing provides the same comprehensive plumbing
              services. Frequently requested services across our service areas
              include:
            </p>
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {POPULAR_SERVICES.map((service) => (
                <li key={service.href}>
                  <Link
                    // TODO-BATCH-NEXT: service.href service route not yet built
                    href={service.href}
                    className="flex items-center gap-2 rounded-lg bg-white px-4 py-3 text-base font-medium text-brand-dark shadow-sm ring-1 ring-brand-surface-alt transition hover:text-brand-primary hover:shadow-md"
                  >
                    <span
                      aria-hidden="true"
                      className="text-brand-primary"
                    >
                      →
                    </span>
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-10 text-center">
              <Link
                href="/plumbing-services/"
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-brand-primary px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-brand-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
              >
                See All Plumbing Services
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 8: EMERGENCY PLUMBING CTA (custom inline JSX) */}
        <section className="bg-brand-primary text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Emergency Plumbing Across the Las Vegas Valley
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/90 sm:text-xl">
                Plumbing emergencies do not wait for a convenient time. Red
                Carpet Plumbing provides emergency plumbing services for homes
                and businesses throughout the Las Vegas Valley, including Las
                Vegas, Henderson, North Las Vegas, Summerlin, Spring Valley,
                Paradise, Enterprise, Boulder City, Green Valley, and Lake Las
                Vegas.
              </p>
              {/* SOURCE-SITE CLAIM: verify 24/7 availability documentation before final launch */}
              <p className="mt-4 text-lg leading-8 text-white/90 sm:text-xl">
                For emergency plumbing help, call Red Carpet Plumbing directly.
              </p>
              <div className="mt-10">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
                  <Link
                    // TODO-BATCH-NEXT: /emergency-plumbing/ not yet built
                    href="/emergency-plumbing/"
                    className="inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-brand-primary shadow-sm transition hover:bg-brand-surface-alt focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Get Emergency Plumbing Help
                  </Link>
                  {/* FLAG: CLIENT MUST CONFIRM PHONE NUMBER BEFORE LAUNCH — do not invent */}
                  <span
                    role="button"
                    aria-disabled="true"
                    title="Phone number pending"
                    className="inline-flex min-h-12 cursor-not-allowed items-center justify-center rounded-lg border border-white/40 bg-transparent px-6 py-3 text-base font-semibold text-white/75"
                  >
                    Call Now
                  </span>
                </div>
                <p className="mt-3 text-center text-xs text-white/70">
                  Phone number pending
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 9: WHY RED CARPET PLUMBING */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Why Red Carpet Plumbing Serves the Las Vegas Valley
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing is a local Las Vegas plumbing company.
                Serving communities across the Las Vegas Valley means our team
                understands the local water conditions, construction styles,
                and plumbing challenges specific to this region. Las Vegas hard
                water, aging pipe systems in established neighborhoods, and the
                unique demands of newer master-planned communities all factor
                into the plumbing work we do every day.
              </p>
            </div>
            <ul className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {WHY_CHOOSE_LABELS.map((label) => (
                <li
                  key={label}
                  className="flex flex-col items-center gap-3 rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-brand-surface-alt"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                    <CheckIcon className="h-6 w-6" />
                  </div>
                  <span className="text-base font-semibold text-brand-dark">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 10: FAQ */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Plumbing Service Area FAQs
              </h2>
            </div>
            <dl className="mt-12 space-y-4">
              {SERVICE_AREAS_FAQS.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-brand-surface-alt sm:p-8"
                >
                  <dt>
                    <h3 className="text-lg font-semibold text-brand-dark sm:text-xl">
                      {faq.question}
                    </h3>
                  </dt>
                  <dd className="mt-3 text-base leading-7 text-brand-dark/80">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* SECTION 11: FINAL CTA */}
        <CTASection
          background="red"
          headline="Ready to Schedule Plumbing Service?"
          body="Contact Red Carpet Plumbing to request service in your area, ask about coverage, or get a free quote for your plumbing project."
          primaryCTA={{
            label: "Request Plumbing Service",
            // TODO-BATCH-NEXT: /contact/ not yet built
            href: "/contact/",
          }}
          /* FLAG: CLIENT MUST CONFIRM PHONE NUMBER BEFORE LAUNCH — do not invent */
          secondaryCTA={{
            label: "Call Now",
            href: "#",
            disabled: true,
          }}
        />
      </main>

      <SiteFooter />
    </>
  );
}

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 12.5l4.5 4.5L19 7.5"
      />
    </svg>
  );
}
