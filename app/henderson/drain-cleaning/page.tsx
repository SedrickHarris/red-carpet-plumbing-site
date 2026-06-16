import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { HeroSection } from "@/components/HeroSection";
import { JsonLd } from "@/components/JsonLd";
import { QuoteFormPlaceholder } from "@/components/QuoteFormPlaceholder";
import { SectionReveal, SectionRevealItem } from "@/components/SectionReveal";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import TrustStrip from "@/components/TrustStrip";

// FLAG: VERIFY before publishing — license #0048585A, emergency/24-7
// availability, transparent-pricing, and any rating/40-year claims are
// source-site/project claims. This page uses the conservative wording from the
// approved brief and does NOT assert rating, review count, or "40 years" here.

export const metadata: Metadata = {
  // FLAG: description below is the approved brief string (~230 chars). It
  // exceeds the site's ≤160 meta-description standard; see report. Kept as
  // approved pending a trim decision.
  title: "Drain Cleaning in Henderson, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides professional drain cleaning in Henderson, NV, including Green Valley and Lake Las Vegas. Kitchen drains, bathroom drains, main sewer lines, and hydro jetting. Licensed plumbers. Call (702) 567-9172.",
  alternates: {
    canonical: "https://redcarpetplumbing.com/henderson/drain-cleaning/",
  },
  openGraph: {
    title: "Drain Cleaning in Henderson, NV | Red Carpet Plumbing",
    description:
      "Professional drain cleaning in Henderson from licensed local plumbers. Green Valley, Lake Las Vegas, and all Henderson communities served. Call Red Carpet Plumbing.",
    url: "https://redcarpetplumbing.com/henderson/drain-cleaning/",
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
// FLAG: VERIFY — Q6 (transparent pricing) uses conservative wording per the
// approved brief; confirm before any expansion.
// ---------------------------------------------------------------------------
const HENDERSON_DRAIN_FAQS = [
  {
    question: "Why do drains clog faster in Henderson homes?",
    answer:
      "Henderson receives the same hard water supply as the rest of the Las Vegas Valley, which leaves calcium and magnesium deposits inside pipe walls that narrow the pipe and trap grease and soap scum. In original Green Valley homes built from the mid-1980s through mid-1990s, these deposits have been accumulating for 30 to 40 years, making drain clog formation faster and more stubborn than in newer construction.",
  },
  {
    question: "Is hydro jetting safe for older Green Valley pipes?",
    answer:
      "It depends on the condition of the pipe. Hydro jetting is highly effective for clearing mineral scale and grease from lines in good condition. For older Green Valley copper or polybutylene pipes that may be thinned by years of hard water exposure, we assess pipe condition before recommending high-pressure methods. A video camera inspection can help determine whether hydro jetting is the right approach for a specific line.",
  },
  {
    question: "How do I know if I need professional drain cleaning in Henderson?",
    answer:
      "Call a plumber when multiple drains are slow at the same time, when you have a complete blockage, when drains produce sewage or sulfur odors, or when you hear gurgling sounds from toilets or other fixtures. Multiple affected drains usually indicate a main sewer line problem that requires professional clearing.",
  },
  {
    question: "How often should Henderson homeowners have their drains cleaned?",
    answer:
      "Most Henderson homeowners benefit from professional drain cleaning every one to two years. Homes in original Green Valley neighborhoods with older pipes and accumulated hard water mineral buildup may benefit from annual cleaning. Commercial properties with heavy drain use should be cleaned more frequently.",
  },
  {
    question:
      "Does Red Carpet Plumbing serve Green Valley and Lake Las Vegas for drain cleaning?",
    answer:
      "Yes. Red Carpet Plumbing provides drain cleaning throughout Henderson, including Green Valley, Green Valley Ranch, and Lake Las Vegas.",
  },
  {
    question: "How much does drain cleaning cost in Henderson?",
    answer:
      "Drain cleaning costs vary based on the type of drain, the severity of the clog, and the method required. Red Carpet Plumbing provides transparent pricing before work begins. Call (702) 567-9172 for a quote.",
  },
];

// Why Henderson drains clog (bold label + description). The two-phase Green
// Valley narrative (original copper/polybutylene vs. Green Valley Ranch) is the
// topical anchor. The build brief used " -- " separators; rendered with the
// label and a period per the project no-double-hyphen copy rule. Apostrophes are
// safe in these string literals.
const HENDERSON_DRAIN_CAUSES = [
  {
    label: "Hard water mineral deposits in Green Valley's original homes",
    body: "Green Valley's original neighborhoods, built from the mid-1980s through the mid-1990s, have copper supply and drain lines that have been exposed to Las Vegas Valley hard water for 30 to 40 years. Calcium and magnesium deposits inside these pipes narrow the interior diameter and create rough surfaces that trap grease and soap scum faster than pipes in newer construction. Some original Green Valley homes also contain polybutylene pipe, a gray plastic material from that era that requires careful assessment before applying high-pressure clearing methods.",
  },
  {
    label: "Green Valley Ranch and newer construction entering the service cycle",
    body: "Homes in Green Valley Ranch, built primarily from the mid-1990s through the mid-2000s, are now 20 to 30 years old. While these homes carry less accumulated mineral damage than original Green Valley properties, they are entering the age range where drain line buildup and water heater sediment become regular maintenance issues.",
  },
  {
    label: "Grease and soap bonding to mineral scale",
    body: "Henderson receives the same hard water supply as the rest of the Las Vegas Valley. Grease and soap scum in kitchen and bathroom drains bond to mineral deposits already coating pipe walls, hardening and accumulating at an accelerated rate compared to softer-water cities.",
  },
  {
    label: "Tree root intrusion in established Henderson landscaping",
    body: "Henderson's established neighborhoods have mature trees whose root systems actively search for moisture. Sewer lines are a reliable water source, and aging pipe joints in older Henderson properties can allow root intrusion that causes recurring blockages.",
  },
  {
    label: "Main sewer line buildup in older Henderson corridors",
    body: "Main sewer lines in Henderson's older neighborhoods have handled decades of hard water drainage. Scale and grease accumulation in these lines can reduce flow capacity and cause backups that affect multiple fixtures throughout the home.",
  },
];

// Drain services (bold label + description). Two items carry an inline link to a
// live core service page (main sewer line -> sewer-line-services; video camera
// -> video-camera-plumbing-inspections).
const HENDERSON_DRAIN_SERVICES: {
  label: string;
  body: string;
  link?: { href: string; text: string };
}[] = [
  {
    label: "Kitchen drain cleaning",
    body: "Grease, cooking oils, and food particles build up inside kitchen drain lines, and Henderson hard water accelerates the bonding process. We clear kitchen drains completely from the sink trap to the main connection.",
  },
  {
    label: "Bathroom drain cleaning",
    body: "Hair, soap scum, and personal care product residue accumulate in bathroom sink, shower, and tub drains. We clear bathroom drains and verify full flow is restored.",
  },
  {
    label: "Main sewer line cleaning",
    body: "When multiple drains are slow or backing up simultaneously, the blockage is usually in the main sewer line. We clear main sewer lines using cable machines and hydro jetting matched to the type and location of the blockage.",
    link: { href: "/sewer-line-services/", text: "sewer line services" },
  },
  {
    label: "Hydro jetting",
    body: "Hydro jetting uses high-pressure water to scour the interior walls of drain and sewer lines, removing grease, mineral scale, and debris from the pipe walls rather than just clearing a path through the clog. For Henderson homes with aging pipes and significant hard water mineral buildup, hydro jetting provides a more thorough and longer-lasting result than cable clearing alone. Note: we assess pipe condition before recommending hydro jetting on older or potentially compromised lines.",
  },
  {
    label: "Video camera drain inspection",
    body: "A video camera inspection lets us see exactly what is inside your drain or sewer line before and after cleaning. We identify blockage type and location, confirm the line is fully clear after cleaning, and check for root intrusion, pipe damage, or structural issues.",
    link: {
      href: "/video-camera-plumbing-inspections/",
      text: "video camera plumbing inspections",
    },
  },
  {
    label: "Floor drain cleaning",
    body: "Floor drains in garages, utility rooms, and laundry areas collect debris, sediment, and mineral buildup. We clear floor drains and inspect the line for structural issues.",
  },
];

const DRAIN_STEPS = [
  {
    name: "Assess the drain and identify the clog",
    body: "We gather information about which drains are affected and how long the problem has been present to determine whether the clog is in a branch drain or the main sewer line.",
  },
  {
    name: "Select the right clearing method",
    body: "We match the method to the pipe material and clog type. For older Green Valley copper or polybutylene lines, we assess pipe condition before applying high-pressure methods. Cable machines handle hair and soap clogs. Hydro jetting handles mineral scale and grease buildup in main lines where pipes are in suitable condition.",
  },
  {
    name: "Clear the blockage completely",
    body: "We clear the drain line fully, not just enough to restore partial flow, working from cleanout access points for main sewer lines.",
  },
  {
    name: "Verify full flow is restored",
    body: "We run water through the line to confirm full flow is restored and no partial blockage remains.",
  },
];

// FLAG: VERIFY — license number and transparent-pricing items are source-site
// claims per the approved brief.
const WHY_CHOOSE = [
  "Local Las Vegas Valley plumbing company familiar with Henderson's housing stock and hard water conditions",
  "Licensed plumbers (NV License #0048585A)",
  "Transparent pricing with no hidden fees",
  "Residential and commercial drain cleaning throughout Henderson",
  "Hydro jetting available for stubborn or recurring clogs where pipe condition allows",
  "Familiar with original Green Valley copper and polybutylene pipe systems",
];

const DRAIN_TRUST_STRIP = [
  "NV Licensed, #0048585A",
  "Drain Cleaning and Hydro Jetting",
  "Serving Henderson and the Valley",
  "Transparent Pricing, No Hidden Fees",
];

const HENDERSON_COMMUNITIES = [
  "Green Valley",
  "Green Valley Ranch",
  "Lake Las Vegas",
  "Seven Hills",
  "MacDonald Ranch",
  "Anthem",
  "Tuscany Village",
  "Inspirada",
  "Whitney Ranch",
];

// Related services. /henderson/emergency-plumbing/ is live (Batch 5, Page 2).
// TODO-BATCH-5: replace the core-route links with the location-specific
// /henderson/[service]/ children once those pages are built
// (water-heater-repair-installation, leak-detection-repair).
const RELATED_SERVICES = [
  {
    label: "Emergency Plumbing in Henderson",
    href: "/henderson/emergency-plumbing/",
  },
  {
    label: "Water Heater Repair and Installation",
    href: "/water-heater-repair-installation/",
  },
  { label: "Leak Detection and Repair", href: "/leak-detection-repair/" },
  { label: "Sewer Line Services", href: "/sewer-line-services/" },
  {
    label: "Video Camera Plumbing Inspections",
    href: "/video-camera-plumbing-inspections/",
  },
];

// ---------------------------------------------------------------------------
// JSON-LD payloads
// ---------------------------------------------------------------------------
const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Drain Cleaning in Henderson, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides professional drain cleaning in Henderson, NV, including Green Valley and Lake Las Vegas. Kitchen drains, bathroom drains, main sewer lines, and hydro jetting. Licensed plumbers.",
  url: "https://redcarpetplumbing.com/henderson/drain-cleaning/",
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
      name: "Henderson Plumbing Services",
      item: "https://redcarpetplumbing.com/henderson-plumbing-services/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Drain Cleaning in Henderson",
      item: "https://redcarpetplumbing.com/henderson/drain-cleaning/",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Drain Cleaning in Henderson",
  serviceType: "Drain Cleaning",
  description:
    "Red Carpet Plumbing provides professional drain cleaning for homes and businesses in Henderson, NV, including kitchen drains, bathroom drains, main sewer line cleaning, hydro jetting, and video camera drain inspection.",
  provider: {
    "@type": "Plumber",
    name: "Red Carpet Plumbing",
    url: "https://redcarpetplumbing.com",
    // FLAG: VERIFY telephone (carried forward from existing pages).
    telephone: "+17025679172",
  },
  areaServed: {
    "@type": "City",
    name: "Henderson",
    containedInPlace: {
      "@type": "State",
      name: "Nevada",
    },
  },
};

// HowTo schema is included because Section 7 renders the matching visible
// step-by-step process (titles + body) on the page.
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Red Carpet Plumbing Cleans Drains in Henderson NV",
  step: DRAIN_STEPS.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.name,
    text: s.body,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: HENDERSON_DRAIN_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function HendersonDrainCleaningPage() {
  return (
    <>
      <JsonLd data={webpageSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={howToSchema} />
      <JsonLd data={faqSchema} />

      <SiteHeader />

      <main id="main" className="flex-1 bg-white">
        <Breadcrumbs
          trail={[
            { label: "Home", href: "/" },
            {
              label: "Henderson Plumbing Services",
              href: "/henderson-plumbing-services/",
            },
            { label: "Drain Cleaning in Henderson" },
          ]}
        />

        {/* SECTION 1: HERO */}
        <HeroSection
          headingLevel="h1"
          headline="Drain Cleaning in Henderson, NV"
          subheading="Red Carpet Plumbing provides professional drain cleaning for homes and businesses throughout Henderson, NV, including Green Valley, Green Valley Ranch, and Lake Las Vegas. Whether you are dealing with a slow kitchen drain, a clogged bathroom sink, a blocked main sewer line, or recurring drain problems from hard water mineral buildup, our licensed plumbers clear drains completely. Call (702) 567-9172 to schedule service."
          trustItems={[
            "NV Licensed Plumbers, #0048585A",
            "Available for Emergency Drain Service",
            "Serving Henderson and the Las Vegas Valley",
            "Transparent Pricing, No Hidden Fees",
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
          formSlot={<QuoteFormPlaceholder title="Get Drain Cleaning Help" />}
          backgroundImage={{
            src: "/images/services/drain-cleaning/hero.webp",
            alt: "Professional drain cleaning service in Henderson, NV",
          }}
        />

        {/* SECTION 2: TRUST STRIP */}
        <TrustStrip
          items={DRAIN_TRUST_STRIP}
          ariaLabel="Why Henderson customers choose Red Carpet Plumbing for drain cleaning"
        />

        {/* SECTION 3: DIRECT ANSWER */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="rounded-2xl border-l-4 border-brand-primary bg-brand-surface-alt p-6 sm:p-8">
              <h2 className="text-2xl font-bold tracking-tight text-brand-dark sm:text-3xl">
                Professional Drain Cleaning in Henderson
              </h2>
              <p className="mt-4 text-lg leading-8 text-brand-dark/80">
                Professional drain cleaning removes clogs, buildup, and
                blockages from residential and commercial drain and sewer lines.
                In Henderson, hard water mineral deposits inside pipe walls
                accelerate clog formation, particularly in older Green Valley
                homes where those deposits have been accumulating for 30 or more
                years. When a drain is slow, producing odors, or completely
                blocked, a licensed plumber can clear the line fully and identify
                any underlying pipe condition issues.
              </p>
              <p className="mt-4 text-base leading-7 text-brand-dark/70">
                This page covers drain cleaning specific to Henderson. For a
                broader overview, see our{" "}
                <Link
                  href="/drain-cleaning/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  drain cleaning services
                </Link>{" "}
                page.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4: WHY HENDERSON DRAINS CLOG */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10 lg:pb-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Why Henderson Drains Clog
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Henderson drains clog for a few local reasons, led by hard
                    water and the aging copper lines in original Green Valley
                    homes. Newer Green Valley Ranch homes face their own emerging
                    maintenance needs.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-10">
                <ul className="space-y-5">
                  {HENDERSON_DRAIN_CAUSES.map((c) => (
                    <li
                      key={c.label}
                      className="relative rounded-2xl bg-brand-surface-alt p-6 ring-1 ring-brand-surface-alt"
                    >
                      <p className="text-base leading-7 text-brand-dark/80">
                        <strong className="font-semibold text-brand-dark">
                          {c.label}.
                        </strong>{" "}
                        {c.body}
                      </p>
                    </li>
                  ))}
                </ul>
              </SectionRevealItem>
            </SectionReveal>
          </div>
        </section>

        {/* SECTION 5: DRAIN CLEANING SERVICES */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Drain Cleaning Services We Provide in Henderson
              </h2>
            </div>
            <ul className="mt-10 space-y-5">
              {HENDERSON_DRAIN_SERVICES.map((s) => (
                <li
                  key={s.label}
                  className="rounded-2xl bg-white p-6 ring-1 ring-brand-surface-alt"
                >
                  <p className="text-base leading-7 text-brand-dark/80">
                    <strong className="font-semibold text-brand-dark">
                      {s.label}.
                    </strong>{" "}
                    {s.body}
                    {s.link ? (
                      <>
                        {" "}
                        Learn more about our{" "}
                        <Link
                          href={s.link.href}
                          className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                        >
                          {s.link.text}
                        </Link>
                        .
                      </>
                    ) : null}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 6 (mid-page): CTA */}
        <section className="bg-brand-charcoal text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Recurring or Stubborn Drain Clog in Henderson?
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/80">
                  Aging Green Valley pipes and hard water buildup cause drains to
                  clog again and again. We assess the line and recommend the
                  right clearing method. Call Red Carpet Plumbing to get started.
                </p>
              </div>
              <div className="flex flex-col items-start gap-4 lg:items-end">
                <a
                  href="tel:+17025679172"
                  className="inline-flex min-h-14 items-center justify-center rounded-lg bg-brand-primary px-8 text-lg font-semibold text-white shadow-sm hover:bg-brand-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary motion-safe:transition-colors motion-safe:active:scale-[0.97]"
                >
                  Call (702) 567-9172
                </a>
                <Link
                  href="/contact/"
                  className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/60 px-6 py-3 text-base font-semibold text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-safe:transition-colors motion-safe:active:scale-[0.97]"
                >
                  Request Drain Cleaning Service
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: HOW WE CLEAN DRAINS (HowTo) */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    How We Clean Drains in Henderson
                  </h2>
                </div>
              </SectionRevealItem>
              <SectionRevealItem className="mt-12">
                <ol className="space-y-8">
                  {DRAIN_STEPS.map((step, index) => (
                    <li key={step.name} className="flex items-start gap-4">
                      <span
                        aria-hidden="true"
                        className="inline-flex h-12 w-12 flex-none items-center justify-center rounded-full bg-brand-primary text-lg font-semibold text-white"
                      >
                        {index + 1}
                      </span>
                      <div>
                        <h3 className="text-xl font-semibold text-brand-dark">
                          {step.name}
                        </h3>
                        <p className="mt-2 text-base leading-7 text-brand-dark/80">
                          {step.body}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </SectionRevealItem>
            </SectionReveal>
          </div>
        </section>

        {/* SECTION 8: WHY CHOOSE */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Why Henderson Homeowners Choose
                <br className="hidden sm:block" /> Red Carpet Plumbing for Drain
                Cleaning
              </h2>
            </div>
            <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {WHY_CHOOSE.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckMark />
                  <span className="text-base leading-7 text-brand-dark/85">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 9: HENDERSON COMMUNITIES */}
        <section className="bg-brand-charcoal text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="max-w-3xl text-left">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Henderson Communities We Serve for Drain Cleaning
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/85">
                Red Carpet Plumbing provides drain cleaning throughout Henderson,
                NV, including Green Valley, Green Valley Ranch, Lake Las Vegas,
                Seven Hills, MacDonald Ranch, Anthem, Tuscany Village, Inspirada,
                Whitney Ranch, and surrounding Henderson neighborhoods. We also
                serve the broader Las Vegas Valley.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/green-valley-plumbing-services/"
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-brand-charcoal shadow-sm transition-colors hover:bg-brand-surface-alt focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-safe:transition-transform motion-safe:active:scale-[0.97]"
              >
                Green Valley Plumbing Services
              </Link>
              <Link
                href="/lake-las-vegas-plumbing-services/"
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-brand-charcoal shadow-sm transition-colors hover:bg-brand-surface-alt focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-safe:transition-transform motion-safe:active:scale-[0.97]"
              >
                Lake Las Vegas Plumbing Services
              </Link>
            </div>

            <ul className="mt-8 flex flex-wrap gap-3">
              {HENDERSON_COMMUNITIES.map((name) => (
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
                Las Vegas Valley service areas
                <span aria-hidden="true" className="ml-1">
                  &rarr;
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 10: RELATED SERVICES */}
        {/* TODO-BATCH-5: replace core-route links with location-specific */}
        {/* /henderson/[service]/ children once built (water-heater-repair-installation, */}
        {/* leak-detection-repair, slab-leak-detection-repair). */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Related Plumbing Services
              </h2>
            </div>
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {RELATED_SERVICES.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="flex items-center gap-2 rounded-lg bg-brand-surface-alt px-4 py-3 text-base font-medium text-brand-dark ring-1 ring-brand-surface-alt transition hover:text-brand-primary hover:shadow-md"
                  >
                    <span aria-hidden="true" className="text-brand-primary">
                      &rarr;
                    </span>
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 11: FAQ */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Drain Cleaning FAQs
                <br className="hidden sm:block" /> for Henderson Homeowners
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {HENDERSON_DRAIN_FAQS.map((faq) => (
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

        {/* SECTION 12: FINAL CTA */}
        <CTASection
          background="red"
          headline={<>Clogged Drain<br />in Henderson?</>}
          body="Do not let a slow or blocked drain get worse. Call Red Carpet Plumbing at (702) 567-9172 or request service online. We provide professional drain cleaning throughout Henderson, including Green Valley, Green Valley Ranch, Lake Las Vegas, and surrounding communities."
          primaryCTA={{
            label: "Call (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{
            label: "Request Drain Cleaning Service",
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
