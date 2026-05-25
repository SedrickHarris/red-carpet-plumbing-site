import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { HeroSection } from "@/components/HeroSection";
import { JsonLd } from "@/components/JsonLd";
import { QuoteFormPlaceholder } from "@/components/QuoteFormPlaceholder";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Drain Cleaning in Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Slow or clogged drain in Las Vegas? Red Carpet Plumbing provides professional drain cleaning for kitchens, bathrooms, floor drains, and commercial properties throughout the Las Vegas Valley.",
  alternates: {
    canonical: "https://redcarpetplumbing.com/drain-cleaning/",
  },
  openGraph: {
    title: "Drain Cleaning in Las Vegas, NV | Red Carpet Plumbing",
    description:
      "Clogged or slow drain in Las Vegas? Red Carpet Plumbing provides professional drain cleaning for homes and businesses throughout the Las Vegas Valley, including Henderson, Summerlin, and North Las Vegas.",
    url: "https://redcarpetplumbing.com/drain-cleaning/",
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
const DRAIN_CLEANING_FAQS = [
  {
    question: "Why does my drain keep clogging even after I clean it?",
    answer:
      "Recurring clogs usually point to a deeper problem than surface debris. In Las Vegas homes, hard water deposits mineral scale on the interior walls of drain pipes over time, creating a rough surface that traps grease, soap, and hair more easily. Grease accumulation in kitchen drain lines, partial blockages further down the pipe, or root intrusion in older systems can also cause a drain to slow again shortly after clearing. A professional drain cleaning that reaches the full length of the pipe can remove buildup that a quick fix cannot.",
  },
  {
    question: "What is the difference between drain snaking and hydro jetting?",
    answer:
      "Drain snaking uses a rotating cable to break up or pull out a blockage inside a pipe. It is effective for most standard clogs caused by hair, soap, or debris near the drain opening. Hydro jetting uses high-pressure water to scour the full interior surface of the drain line, removing grease, mineral scale, and buildup that has accumulated along the pipe walls. Hydro jetting is typically recommended when snaking does not fully clear the blockage or when the buildup is widespread along the pipe.",
  },
  {
    question:
      "Can I use chemical drain cleaners instead of calling a plumber?",
    answer:
      "Chemical drain cleaners can temporarily clear a surface-level clog, but they do not remove buildup from pipe walls and can damage older pipes with repeated use. For recurring clogs, slow drains in multiple fixtures, or any drain connected to a main sewer line, professional drain cleaning is a more reliable long-term solution.",
  },
  {
    question: "How do I know if my main sewer line is involved?",
    answer:
      "If multiple drains in your home are slow or backing up at the same time, or if you notice sewage smells coming from more than one fixture, the problem may be in the main sewer line rather than an individual drain. A plumber can assess the situation and recommend a camera inspection if the main line may be affected.",
  },
  {
    question:
      "Does Red Carpet Plumbing provide drain cleaning for commercial properties?",
    answer:
      "Yes. Red Carpet Plumbing provides drain cleaning for commercial properties including restaurants, retail spaces, office buildings, and multi-unit properties throughout the Las Vegas Valley.",
  },
  {
    question: "How often should drains be professionally cleaned?",
    answer:
      "The right frequency depends on the type of property, how heavily the drains are used, and whether hard water mineral buildup is a factor. Properties with high kitchen drain usage, commercial kitchens, or older plumbing systems may benefit from more regular professional cleaning. A plumber can help determine a reasonable schedule based on your specific situation.",
  },
];

const TRUST_STRIP_ITEMS = [
  "Professional Drain Cleaning",
  "Serving Las Vegas and the Las Vegas Valley",
  "Residential and Commercial Service",
  // SOURCE-SITE CLAIM: verify before publish
  "Transparent Pricing",
  // SOURCE-SITE CLAIM: verify before publish
  "Customer Satisfaction Focus",
];

const WHAT_IS_BULLETS = [
  "Removes grease, hair, soap scum, food debris, and mineral deposits",
  "Clears slow drains before they become full backups",
  "Helps prevent sewage from reaching fixtures and flooring",
  "Identifies root intrusion, pipe damage, or structural issues during service",
  "Covers residential and commercial drain systems",
  "Reduces odors caused by organic debris trapped inside drain lines",
];

const SIGNS_LIST = [
  "Water drains noticeably slower than usual in sinks, tubs, or showers",
  "Water pools on the floor of the shower or tub before draining",
  "Gurgling sounds come from drains after flushing or running water nearby",
  "Foul odors rise from sink or floor drains",
  "Multiple drains in your home or building are slow at the same time",
  "You notice sewage smells or discolored water near a drain opening",
  "A drain that was recently cleared has slowed again within a short period",
  "Your kitchen sink backs up when the dishwasher runs",
];

const SERVICE_COVERS = [
  "Kitchen sink drain clearing for grease, food debris, and soap buildup",
  "Bathroom drain cleaning for hair, soap scum, and mineral deposits",
  "Shower and tub drain clearing",
  "Floor drain cleaning for utility rooms, garages, and commercial spaces",
  "Hydro jetting for stubborn or recurring blockages and pipe wall buildup",
  "Drain snaking for standard household drain clogs",
  "Commercial drain cleaning for restaurants, retail properties, and office buildings",
  "Multi-drain assessment when several drains show problems at the same time",
];

const PROCESS_STEPS = [
  {
    heading: "Contact us.",
    body: "Reach out by phone or through our online contact form. Let us know which drains are affected, how long the problem has been occurring, and whether you have noticed any odors or gurgling sounds.",
  },
  {
    heading: "Schedule service.",
    body: "We will confirm your appointment and provide any preparation steps if needed before our plumber arrives.",
  },
  {
    heading: "Drain inspection.",
    body: "Our plumber will assess the affected drain, look for signs of a deeper blockage, and determine the right clearing method for your situation.",
  },
  {
    heading: "Drain clearing.",
    body: "Depending on the type and location of the blockage, we will use snaking, hydro jetting, or another appropriate method to clear the drain line.",
  },
  {
    heading: "Confirmation and findings.",
    body: "We will confirm that water is draining properly before completing the service and explain any findings or recommendations for keeping the drains flowing.",
  },
];

type RelatedServiceLink = {
  label: string;
  href: string;
  description: string;
  exists: boolean;
};

const RELATED_SERVICES: RelatedServiceLink[] = [
  {
    label: "Emergency Plumbing",
    href: "/emergency-plumbing/",
    description:
      "Sewage backups, overflows, and drain problems that cannot wait",
    exists: true,
  },
  {
    label: "Sewer Line Services",
    href: "/sewer-line-services/",
    description: "Main sewer line blockages, damage, and replacement",
    exists: false,
  },
  {
    label: "Video Camera Plumbing Inspections",
    href: "/video-camera-plumbing-inspections/",
    description:
      "Camera inspection to see exactly what is inside your drain line",
    exists: false,
  },
  {
    label: "Leak Detection and Repair",
    href: "/leak-detection-repair/",
    description: "Leaks connected to drain line damage or pipe failure",
    exists: false,
  },
  {
    label: "Plumbing Services",
    href: "/plumbing-services/",
    description: "Full list of residential and commercial plumbing services",
    exists: true,
  },
];

// ---------------------------------------------------------------------------
// JSON-LD payloads
// ---------------------------------------------------------------------------

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Drain Cleaning in Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides professional drain cleaning for clogged and slow drains in homes and businesses throughout Las Vegas, Henderson, North Las Vegas, Summerlin, and surrounding Las Vegas Valley communities.",
  url: "https://redcarpetplumbing.com/drain-cleaning/",
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
      {
        "@type": "ListItem",
        position: 3,
        name: "Drain Cleaning",
        item: "https://redcarpetplumbing.com/drain-cleaning/",
      },
    ],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Drain Cleaning",
  serviceType: "Drain Cleaning",
  description:
    "Professional drain cleaning for clogged drains, slow drains, and drain backups in residential and commercial properties throughout Las Vegas, Henderson, North Las Vegas, Summerlin, Spring Valley, Enterprise, Paradise, Green Valley, and surrounding Las Vegas Valley communities.",
  provider: {
    "@type": "Plumber",
    name: "Red Carpet Plumbing",
    url: "https://redcarpetplumbing.com",
    // FLAG: ADD telephone field to Service provider once phone number is confirmed
  },
  areaServed: [
    {
      "@type": "City",
      name: "Las Vegas",
      sameAs: "https://www.wikidata.org/wiki/Q23768",
    },
    { "@type": "City", name: "Henderson" },
    { "@type": "City", name: "North Las Vegas" },
    { "@type": "City", name: "Summerlin" },
    { "@type": "City", name: "Spring Valley" },
    { "@type": "City", name: "Enterprise" },
    { "@type": "City", name: "Paradise" },
    { "@type": "City", name: "Green Valley" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: DRAIN_CLEANING_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function DrainCleaningPage() {
  return (
    <>
      <JsonLd data={webPageSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />

      <SiteHeader />

      <main id="main" className="flex-1 bg-white">
        {/* BREADCRUMBS */}
        <Breadcrumbs
          trail={[
            { label: "Home", href: "/" },
            { label: "Plumbing Services", href: "/plumbing-services/" },
            { label: "Drain Cleaning" },
          ]}
        />

        {/* EYEBROW (above the hero so the H1 stays a clean single-string heading for SEO/AEO) */}
        <div className="bg-white pt-10 sm:pt-12 lg:pt-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 xl:px-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-primary">
              Professional Drain Cleaning in Las Vegas
            </p>
          </div>
        </div>

        {/* SECTION 1: HERO */}
        <HeroSection
          headingLevel="h1"
          headline="Drain Cleaning in Las Vegas, NV"
          subheading="Slow drains, recurring clogs, and backed-up fixtures are more than a minor inconvenience. Red Carpet Plumbing provides professional drain cleaning for homes and businesses throughout Las Vegas and the Las Vegas Valley. Whether you have a stubborn kitchen sink clog, a slow shower drain, or a floor drain that is not flowing properly, our team can clear the blockage and help restore normal drainage."
          primaryCTA={{
            label: "Request Drain Cleaning Service",
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
              title="Request Drain Cleaning Service"
              includeZip
              submitLabel="Request Service"
            />
          }
          backgroundImage={{
            src: "/images/services/drain-cleaning/hero.webp",
            alt: "Drain cleaning methods including snaking, hydro jetting, and enzymatic treatment",
          }}
        />

        {/* SECTION 2: TRUST STRIP (dark bg) */}
        <section
          aria-labelledby="drain-cleaning-trust-label"
          className="bg-brand-charcoal text-white"
        >
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-10 xl:px-12">
            <p id="drain-cleaning-trust-label" className="sr-only">
              Why Las Vegas Customers Choose Red Carpet Plumbing for Drain Cleaning
            </p>
            {/* FLAG: VERIFY TRANSPARENT PRICING CLAIM BEFORE PUBLISH */}
            {/* FLAG: VERIFY CUSTOMER SATISFACTION FOCUS CLAIM BEFORE PUBLISH */}
            <ul className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3 lg:grid-cols-5">
              {TRUST_STRIP_ITEMS.map((item) => (
                <li
                  key={item}
                  className="flex items-center justify-center gap-2 text-center"
                >
                  <CheckIcon className="h-5 w-5 flex-none text-brand-primary" />
                  <span className="text-sm font-medium text-white">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 3: DIRECT ANSWER */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
              What Is Professional Drain Cleaning?
            </h2>
            <p className="mt-6 text-lg leading-8 text-brand-dark/80">
              Professional drain cleaning removes blockages, buildup, and
              debris from drain lines to restore proper water flow. Unlike
              store-bought chemical cleaners, professional drain cleaning uses
              mechanical tools, high-pressure water jetting, and inspection
              techniques to clear the full length of the drain line. Red
              Carpet Plumbing provides drain cleaning for kitchen sinks,
              bathroom drains, shower and tub drains, floor drains, and
              commercial drainage systems throughout Las Vegas and the Las
              Vegas Valley.
            </p>
            <ul className="mt-6 space-y-3">
              {WHAT_IS_BULLETS.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <BulletIcon className="mt-1.5 h-2 w-2 flex-none text-brand-primary" />
                  <span className="text-base leading-7 text-brand-dark/80">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 4: SIGNS YOU NEED DRAIN CLEANING */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
              Signs Your Drains Need Professional Cleaning
            </h2>
            <p className="mt-6 text-lg leading-8 text-brand-dark/80">
              Drain problems often develop gradually before they become
              obvious blockages. Watch for these signs that your drains may
              need professional attention.
            </p>
            <ol className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
              {SIGNS_LIST.map((sign, index) => (
                <li
                  key={sign}
                  className="flex items-start gap-4 rounded-2xl border-l-4 border-brand-primary bg-white p-5 shadow-sm ring-1 ring-brand-surface-alt"
                >
                  <span
                    aria-hidden="true"
                    className="inline-flex h-8 w-8 flex-none items-center justify-center rounded-full bg-brand-primary/10 text-sm font-semibold text-brand-primary"
                  >
                    {index + 1}
                  </span>
                  <span className="text-base leading-7 text-brand-dark/80">
                    {sign}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* SECTION 5: WHAT THE SERVICE COVERS */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
              What Our Drain Cleaning Service Covers
            </h2>
            <p className="mt-6 text-lg leading-8 text-brand-dark/80">
              Red Carpet Plumbing provides drain cleaning for a wide range of
              residential and commercial drain problems throughout the Las
              Vegas Valley.
            </p>
            {/* FLAG: CLIENT MUST CONFIRM hydro jetting availability and commercial drain service scope before launch */}
            <ul className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-2">
              {SERVICE_COVERS.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-lg bg-white p-4 shadow-sm ring-1 ring-brand-surface-alt"
                >
                  <CheckIcon className="mt-1 h-5 w-5 flex-none text-brand-primary" />
                  <span className="text-base leading-7 text-brand-dark/80">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 6: LOCAL LAS VEGAS CONTEXT */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
              Why Las Vegas Drains Clog More Often
            </h2>
            <p className="mt-6 text-lg leading-8 text-brand-dark/80">
              Las Vegas has some of the hardest water in the United States.
              High mineral content in the local water supply deposits calcium
              and magnesium scale on the interior walls of drain pipes over
              time. That buildup narrows the drain opening and creates a
              rough surface that traps grease, soap, and hair far more easily
              than a clean pipe would. Homeowners in Las Vegas often find
              that drain blockages return more quickly than they would in
              areas with softer water, not because of anything they did
              wrong, but because of how the local water supply interacts with
              their plumbing over the years.
            </p>
            <p className="mt-4 text-lg leading-8 text-brand-dark/80">
              Grease is the other major contributor, especially in kitchen
              sink drains. Cooking oils and fats that are poured down the
              sink solidify as they cool and build up in layers on pipe
              walls. Combined with hard water mineral deposits, grease
              accumulation can narrow a kitchen drain significantly within a
              few years of regular use. Red Carpet Plumbing serves the full
              Las Vegas Valley including Henderson, North Las Vegas,
              Summerlin, Spring Valley, Enterprise, Green Valley, and
              surrounding communities. Visit our{" "}
              <Link
                href="/service-areas/"
                className="font-semibold text-brand-primary hover:text-brand-primary-hover"
              >
                service areas page
              </Link>{" "}
              to confirm coverage in your area.
            </p>
          </div>
        </section>

        {/* SECTION 7: PROCESS (5 numbered steps; NOT HowTo schema) */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
              How Our Drain Cleaning Process Works
            </h2>
            <p className="mt-6 text-lg leading-8 text-brand-dark/80">
              When you contact Red Carpet Plumbing for drain cleaning, here
              is what to expect.
            </p>
            {/* FLAG: CLIENT MUST CONFIRM exact process steps and service scope before launch */}
            <ol className="mt-8 space-y-6">
              {PROCESS_STEPS.map((step, index) => (
                <li key={step.heading} className="flex items-start gap-4">
                  <span
                    aria-hidden="true"
                    className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-full bg-brand-primary text-base font-semibold text-white"
                  >
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-brand-dark">
                      {step.heading}
                    </h3>
                    <p className="mt-2 text-base leading-7 text-brand-dark/80">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* SECTION 8: MID-PAGE CTA */}
        <CTASection
          background="red"
          headline="Ready to Clear Your Drains?"
          body="Contact Red Carpet Plumbing for professional drain cleaning in Las Vegas and the surrounding Las Vegas Valley."
          primaryCTA={{
            label: "Schedule Service",
            href: "/contact/",
          }}
        />

        {/* SECTION 9: RELATED SERVICES */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
              Related Plumbing Services
            </h2>
            <p className="mt-6 text-lg leading-8 text-brand-dark/80">
              Drain problems sometimes point to deeper issues in your
              plumbing system. Red Carpet Plumbing offers a full range of
              services to address both the immediate blockage and any
              connected concerns.
            </p>
            <ul className="mt-8 space-y-3">
              {RELATED_SERVICES.map((service) => (
                <li
                  key={service.href}
                  className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-brand-surface-alt"
                >
                  <Link
                    // /emergency-plumbing/ and /plumbing-services/ are live; the remaining 3 are forward links.
                    // TODO-BATCH-NEXT: /sewer-line-services/ /video-camera-plumbing-inspections/ /leak-detection-repair/ not yet built
                    href={service.href}
                    className="flex items-start gap-3 text-base text-brand-dark/80 hover:text-brand-primary"
                  >
                    <span aria-hidden="true" className="text-brand-primary">
                      →
                    </span>
                    <span>
                      <span className="font-semibold text-brand-dark">
                        {service.label}
                      </span>{" "}
                      - {service.description}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            {/* TODO-BATCH-NEXT: Add these service-location links once pages are live: */}
            {/* - Drain Cleaning in Las Vegas: /las-vegas/drain-cleaning/ */}
            {/* - Drain Cleaning in Henderson: /henderson/drain-cleaning/ */}
            {/* - Drain Cleaning in North Las Vegas: /north-las-vegas/drain-cleaning/ */}
            {/* - Drain Cleaning in Summerlin: /summerlin/drain-cleaning/ */}
          </div>
        </section>

        {/* SECTION 10: FAQ */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Drain Cleaning Questions Answered
              </h2>
            </div>
            <dl className="mt-12 space-y-4">
              {DRAIN_CLEANING_FAQS.map((faq) => (
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
          headline="Schedule Drain Cleaning Service in Las Vegas"
          body="Slow drains and persistent clogs are a problem you can solve today. Contact Red Carpet Plumbing to schedule professional drain cleaning for your home or business in Las Vegas or the surrounding Las Vegas Valley communities."
          primaryCTA={{
            label: "Request Drain Cleaning Service",
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

// ---------------------------------------------------------------------------
// Local icon helpers (decorative, aria-hidden)
// ---------------------------------------------------------------------------

type IconProps = { className?: string };

function CheckIcon({ className = "" }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  );
}

function BulletIcon({ className = "" }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 8 8"
      className={className}
      fill="currentColor"
    >
      <circle cx="4" cy="4" r="4" />
    </svg>
  );
}
