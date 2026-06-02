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
  title: "Plumbing Services in Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing offers emergency plumbing, drain cleaning, leak detection, water heater repair, slab leak service, re-piping, and more in Las Vegas, NV.",
  alternates: {
    canonical: "https://redcarpetplumbing.com/plumbing-services/",
  },
  openGraph: {
    title: "Plumbing Services in Las Vegas, NV | Red Carpet Plumbing",
    description:
      "From emergency calls to water heater repair and drain cleaning, Red Carpet Plumbing provides comprehensive plumbing services for homes and businesses throughout Las Vegas and the Las Vegas Valley.",
    url: "https://redcarpetplumbing.com/plumbing-services/",
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
const PLUMBING_SERVICES_FAQS = [
  {
    question: "What plumbing services does Red Carpet Plumbing offer?",
    answer:
      "Red Carpet Plumbing offers a full range of plumbing services including emergency plumbing, drain cleaning, leak detection and repair, water heater repair and installation, slab leak detection, sewer line services, re-piping, gas line plumbing, commercial plumbing, and residential plumbing repair and installation. The company serves homes and businesses throughout Las Vegas and the Las Vegas Valley.",
  },
  {
    question: "Does Red Carpet Plumbing handle emergency plumbing in Las Vegas?",
    answer:
      "Yes, Red Carpet Plumbing provides emergency plumbing services in Las Vegas and surrounding areas. Emergency services include burst pipes, severe leaks, sewer backups, water heater failures, and other urgent plumbing situations.",
  },
  {
    question: "Does Red Carpet Plumbing offer commercial plumbing services?",
    answer:
      "Yes, Red Carpet Plumbing provides commercial plumbing services for businesses, property managers, and commercial operators in Las Vegas and the Las Vegas Valley. Commercial services include plumbing repair, installation, drain service, backflow prevention, gas line support, and inspection services.",
  },
  {
    question: "What areas does Red Carpet Plumbing serve?",
    answer:
      "Red Carpet Plumbing serves Las Vegas, Henderson, North Las Vegas, Paradise, Summerlin, Spring Valley, Enterprise, Boulder City, Green Valley, Lake Las Vegas, and nearby communities throughout the Las Vegas Valley.",
  },
  {
    question: "How do I schedule plumbing service with Red Carpet Plumbing?",
    answer:
      "You can contact Red Carpet Plumbing by phone or by submitting a service request online through the website. For emergency plumbing situations, calling directly is recommended for the fastest response.",
  },
  {
    question:
      "Does Red Carpet Plumbing handle both repair and installation services?",
    answer:
      "Yes, Red Carpet Plumbing handles both plumbing repair and installation. Services include water heater installation, toilet installation, faucet and sink installation, garbage disposal installation, fixture installation, and re-piping, in addition to a full range of plumbing repair services.",
  },
  {
    question: "What is slab leak detection and repair?",
    answer:
      "A slab leak is a water leak that occurs in pipes running beneath a home's concrete foundation. Slab leaks can cause water damage, mold growth, and structural problems if not addressed. Red Carpet Plumbing provides slab leak detection and repair services in Las Vegas and the surrounding area.",
  },
  {
    question:
      "Does Red Carpet Plumbing offer video camera plumbing inspections?",
    answer:
      "Yes, Red Carpet Plumbing offers video camera plumbing inspections. A camera inspection allows a plumber to see inside pipes to identify blockages, damage, root intrusion, and other issues without unnecessary digging or demolition.",
  },
];

const TRUST_STRIP_ITEMS = [
  "Local Las Vegas Plumbing Company",
  "Residential and Commercial Service",
  "Emergency Plumbing Support",
  "Transparent Pricing",
  "Customer Satisfaction Focus",
];

// ---------------------------------------------------------------------------
// Service cards. Each card either uses a confirmed image at the listed path
// or renders the ServiceImagePlaceholder when no asset exists yet. Every
// card links to its planned service-page slug; those routes have not been
// built yet and currently 404, per the phased build plan in the project
// build list.
// ---------------------------------------------------------------------------
type ServiceCardData = {
  title: string;
  description: string;
  image?: string;
  alt: string;
  href: string;
  todo?: string;
};

const SERVICE_CARDS: ServiceCardData[] = [
  {
    title: "Emergency Plumbing",
    image: "/images/services/emergency-plumbing/card.webp",
    alt: "Emergency plumber responding to a plumbing call in Las Vegas",
    description:
      "Fast response for burst pipes, severe leaks, sewer backups, water heater failures, and other urgent plumbing situations in Las Vegas.",
    href: "/emergency-plumbing/",
  },
  {
    title: "Drain Cleaning",
    image: "/images/services/drain-cleaning/card.webp",
    alt: "Drain cleaning service in Las Vegas",
    description:
      "Professional drain cleaning for slow drains, clogged drains, and recurring blockages in kitchens, bathrooms, and main lines.",
    href: "/drain-cleaning/",
  },
  {
    title: "Leak Detection and Repair",
    image: "/images/services/leak-detection-repair/card.webp",
    alt: "Plumber performing leak detection in a Las Vegas home",
    description:
      "Accurate leak detection and repair for visible and hidden leaks throughout your home or business plumbing system.",
    href: "/leak-detection-repair/",
  },
  {
    title: "Water Heater Repair and Installation",
    image: "/images/services/water-heater-repair-installation/card.webp",
    alt: "Modern energy efficient water heater installation",
    description:
      "Water heater diagnosis, repair, and installation for tank and tankless units in Las Vegas homes and businesses.",
    href: "/water-heater-repair-installation/",
  },
  {
    title: "Slab Leak Detection and Repair",
    image: "/images/services/slab-leak-detection-repair/card.webp",
    alt: "Home foundation showing signs of a slab leak",
    description:
      "Detection and repair of water leaks beneath concrete slabs, protecting your foundation and preventing water damage.",
    href: "/slab-leak-detection-repair/",
  },
  {
    title: "Sewer Line Services",
    // TODO: Replace placeholder with owner-supplied image when available
    alt: "Sewer line services in Las Vegas",
    description:
      "Sewer line inspection, cleaning, repair, and replacement for residential and commercial properties in Las Vegas.",
    href: "/sewer-line-services/",
  },
  {
    title: "Re-Piping",
    // TODO: Replace placeholder with owner-supplied image when available
    alt: "Re-piping services for Las Vegas homes",
    description:
      "Full and partial re-piping services for homes and businesses with aging, corroded, or failing pipe systems.",
    href: "/re-piping/",
  },
  {
    title: "Water Pipe Repair and Replacement",
    // TODO: Replace placeholder with owner-supplied image when available
    alt: "Water pipe repair and replacement in Las Vegas",
    description:
      "Repair and replacement of damaged, corroded, or leaking water supply pipes throughout your property.",
    href: "/water-pipe-repair-replacement/",
  },
  {
    title: "Gas Line Plumbing",
    // TODO: Replace placeholder with owner-supplied image when available
    alt: "Gas line plumbing service in Las Vegas",
    description:
      "Gas line inspection, repair, and installation for homes and businesses by trained plumbing professionals.",
    href: "/gas-line-plumbing/",
  },
  {
    title: "Commercial Plumbing",
    // TODO: Replace placeholder with owner-supplied image when available
    alt: "Commercial plumbing services in Las Vegas",
    description:
      "Commercial plumbing repair, installation, drain service, and inspection for businesses and property managers in Las Vegas.",
    href: "/commercial-plumbing/",
  },
  {
    title: "Toilet Repair and Installation",
    // TODO: Replace placeholder with owner-supplied image when available
    alt: "Toilet repair and installation service in Las Vegas",
    description:
      "Toilet repair, replacement, and installation for all makes and models in residential and commercial settings.",
    href: "/toilet-repair-installation/",
  },
  {
    title: "Faucet and Sink Repair and Installation",
    // TODO: Replace placeholder with owner-supplied image when available
    alt: "Faucet and sink repair and installation in Las Vegas",
    description:
      "Faucet and sink repair, replacement, and installation for kitchens, bathrooms, and utility areas.",
    href: "/faucet-sink-repair-installation/",
  },
  {
    title: "Garbage Disposal Repair and Installation",
    // TODO: Replace placeholder with owner-supplied image when available
    alt: "Garbage disposal repair and installation in Las Vegas",
    description:
      "Garbage disposal repair, replacement, and installation for kitchen sinks throughout the Las Vegas Valley.",
    href: "/garbage-disposal-repair-installation/",
  },
  {
    title: "Backflow Prevention",
    // TODO: Replace placeholder with owner-supplied image when available
    alt: "Backflow prevention services in Las Vegas",
    description:
      "Backflow prevention device installation, testing, and repair to protect your water supply from contamination.",
    href: "/backflow-prevention/",
  },
  {
    title: "Video Camera Plumbing Inspections",
    // TODO: Replace placeholder with owner-supplied image when available
    alt: "Video camera plumbing inspection in Las Vegas",
    description:
      "Camera inspection inside pipes to identify blockages, damage, root intrusion, and hidden plumbing problems.",
    href: "/video-camera-plumbing-inspections/",
  },
  {
    title: "Plumbing Fixture Repair, Replacement and Installation",
    // TODO: Replace placeholder with owner-supplied image when available
    alt: "Plumbing fixture repair replacement and installation in Las Vegas",
    description:
      "Repair, replacement, and installation of plumbing fixtures including faucets, toilets, showers, tubs, and sinks.",
    href: "/plumbing-fixture-repair-replacement-installation/",
  },
  {
    title: "Trenchless Piping",
    // TODO: Replace placeholder with owner-supplied image when available
    alt: "Trenchless piping service in Las Vegas",
    description:
      "Trenchless pipe repair and replacement methods that minimize excavation and disruption to your property.",
    href: "/trenchless-piping/",
  },
  {
    title: "Water Meter and Pressure Regulator Services",
    // TODO: Replace placeholder with owner-supplied image when available
    alt: "Water meter and pressure regulator service in Las Vegas",
    description:
      "Water meter inspection and pressure regulator service to maintain safe, consistent water pressure in your plumbing system.",
    href: "/water-meter-pressure-regulator-services/",
  },
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
  name: "Plumbing Services in Las Vegas, NV | Red Carpet Plumbing",
  url: "https://redcarpetplumbing.com/plumbing-services/",
  description:
    "Red Carpet Plumbing offers emergency plumbing, drain cleaning, leak detection, water heater repair, slab leak service, re-piping, and more in Las Vegas, NV.",
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
        name: "Plumbing Services",
        item: "https://redcarpetplumbing.com/plumbing-services/",
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
      "Las Vegas, NV",
      "Henderson, NV",
      "North Las Vegas, NV",
      "Paradise, NV",
      "Summerlin, NV",
      "Spring Valley, NV",
      "Enterprise, NV",
      "Boulder City, NV",
      "Green Valley, NV",
      "Lake Las Vegas, NV",
    ],
  },
  description:
    "Red Carpet Plumbing provides residential and commercial plumbing services throughout Las Vegas and the Las Vegas Valley.",
  areaServed: "Las Vegas, NV",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: PLUMBING_SERVICES_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function PlumbingServicesPage() {
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
            { label: "Plumbing Services" },
          ]}
        />

        {/* SECTION 2: HERO (two-column with form) */}
        <HeroSection
          headingLevel="h1"
          headline="Plumbing Services in Las Vegas, NV"
          subheading={
            <>
              <span className="block">
                Red Carpet Plumbing provides plumbing services for homes and
                businesses throughout Las Vegas and the Las Vegas Valley. Our
                team handles emergency plumbing, drain cleaning, leak detection
                and repair, water heater repair and installation, slab leak
                detection and repair, sewer line services, re-piping, gas line
                plumbing, commercial plumbing, and a full range of residential
                plumbing repair and installation services.
              </span>
              <span className="mt-4 block">
                Whether you have a burst pipe, a slow drain, a failing water
                heater, or a plumbing project that requires installation or
                replacement, Red Carpet Plumbing is available to help Las Vegas
                homeowners and businesses get the plumbing support they need.
              </span>
            </>
          }
          primaryCTA={{
            label: "Request Plumbing Service",
            href: "/contact/",
          }}
          secondaryCTA={{
            label: "Call (702) 567-9172",
            href: "tel:+17025679172",
          }}
          formSlot={
            <div>
              <QuoteFormPlaceholder
                title="Request Plumbing Service"
                includeZip
                submitLabel="Request Plumbing Service"
              />
              <p className="mt-3 text-center text-xs text-brand-muted">
                We will contact you to confirm your service request.
              </p>
            </div>
          }
        />

        {/* SECTION 3: TRUST STRIP */}
        <section
          aria-labelledby="trust-strip-label"
          className="border-y border-brand-surface-alt bg-brand-surface-alt"
        >
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-10 xl:px-12">
            <p
              id="trust-strip-label"
              className="text-center text-sm font-semibold uppercase tracking-wider text-brand-muted"
            >
              Why Las Vegas Customers Choose Red Carpet Plumbing
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3 lg:grid-cols-5">
              {TRUST_STRIP_ITEMS.map((item) => (
                <li
                  key={item}
                  className="flex items-center justify-center gap-2 text-center"
                >
                  <CheckIcon className="h-5 w-5 flex-none text-brand-primary" />
                  <span className="text-sm font-medium text-brand-dark">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 4: EMERGENCY CTA STRIP */}
        <CTASection
          background="red"
          headline="Plumbing Emergency? Get Fast Help."
          primaryCTA={{
            label: "Get Emergency Plumbing Help",
            href: "/emergency-plumbing/",
          }}
          secondaryCTA={{
            label: "Call (702) 567-9172",
            href: "tel:+17025679172",
          }}
        />

        {/* SECTION 5: FULL SERVICES GRID (18 cards) */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Our Full Range of Plumbing Services
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing handles a comprehensive list of plumbing
                services for residential and commercial customers in Las Vegas,
                Henderson, North Las Vegas, Paradise, Summerlin, Spring Valley,
                Enterprise, and the surrounding Las Vegas Valley.
              </p>
            </div>
            <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {SERVICE_CARDS.map((card) => (
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
                      {card.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-6 text-brand-dark/80">
                      {card.description}
                    </p>
                    <Link
                      href={card.href}
                      className="mt-4 inline-flex items-center text-sm font-semibold text-brand-primary hover:text-brand-primary-hover"
                    >
                      Learn More
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

        {/* SECTION 6: RESIDENTIAL PLUMBING */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
              Residential Plumbing Services in Las Vegas
            </h2>
            <p className="mt-6 text-lg leading-8 text-brand-dark/80">
              Red Carpet Plumbing works with Las Vegas homeowners on everything
              from routine plumbing repairs to full re-piping projects. Common
              residential services include drain cleaning, leak detection,
              faucet and sink repair, toilet repair and installation, garbage
              disposal service, water heater repair and installation, and slab
              leak detection and repair.
            </p>
            <p className="mt-4 text-lg leading-8 text-brand-dark/80">
              Las Vegas homes have specific plumbing challenges. Hard water is
              common throughout the Las Vegas Valley and can accelerate pipe
              corrosion, reduce water heater efficiency, and shorten the
              lifespan of fixtures and appliances. Our team understands these
              local conditions and provides plumbing support that accounts for
              the Las Vegas water environment.
            </p>
          </div>
        </section>

        {/* SECTION 7: COMMERCIAL PLUMBING */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
              Commercial Plumbing Services
            </h2>
            <p className="mt-6 text-lg leading-8 text-brand-dark/80">
              Red Carpet Plumbing supports businesses, property managers, and
              commercial operators throughout Las Vegas with commercial
              plumbing services. Commercial plumbing needs often require fast
              response, minimal disruption, and coordination with facility
              schedules. Our commercial plumbing services include repair,
              installation, drain service, water heater service, backflow
              prevention, gas line support, and inspection services.
            </p>
            <div className="mt-8">
              <Link
                href="/commercial-plumbing/"
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-brand-primary px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-brand-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
              >
                Learn About Commercial Plumbing
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 8: SERVICE AREAS PREVIEW */}
        <section className="bg-brand-charcoal text-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Plumbing Services Across the Las Vegas Valley
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/85">
              Red Carpet Plumbing serves customers throughout the Las Vegas
              Valley. Our service area includes Las Vegas, Henderson, North Las
              Vegas, Paradise, Summerlin, Spring Valley, Enterprise, Boulder
              City, Green Valley, Lake Las Vegas, and surrounding communities.
            </p>
            <div className="mt-8">
              <Link
                href="/service-areas/"
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-brand-charcoal shadow-sm transition hover:bg-brand-surface-alt focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                See All Service Areas
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 9: WHY CHOOSE RED CARPET PLUMBING */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Why Choose Red Carpet Plumbing
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing is a local Las Vegas plumbing company
                focused on responsive service, clear communication, and quality
                plumbing work for homes and businesses throughout the Las Vegas
                Valley.
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
                Plumbing Services FAQs
              </h2>
            </div>
            <dl className="mt-12 space-y-4">
              {PLUMBING_SERVICES_FAQS.map((faq) => (
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
          headline="Ready to Schedule Plumbing Service in Las Vegas?"
          body="Contact Red Carpet Plumbing today to request service, get a free quote, or ask about plumbing in your area."
          primaryCTA={{
            label: "Request Plumbing Service",
            href: "/contact/",
          }}
          secondaryCTA={{
            label: "Call (702) 567-9172",
            href: "tel:+17025679172",
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
