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
  // FLAG: description below is the approved brief string (~240 chars). It
  // exceeds the site's ≤160 meta-description standard; see report. Kept as
  // approved pending a trim decision.
  title: "Drain Cleaning in North Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides professional drain cleaning in North Las Vegas, NV, including the Aliante area. Kitchen drains, bathroom drains, main sewer lines, hydro jetting, and commercial floor drains. Licensed plumbers. Call (702) 567-9172.",
  alternates: {
    canonical: "https://redcarpetplumbing.com/north-las-vegas/drain-cleaning/",
  },
  openGraph: {
    title: "Drain Cleaning in North Las Vegas, NV | Red Carpet Plumbing",
    description:
      "Professional drain cleaning in North Las Vegas from licensed local plumbers. Aliante area, Craig Road corridor, and all North Las Vegas neighborhoods served. Call Red Carpet Plumbing.",
    url: "https://redcarpetplumbing.com/north-las-vegas/drain-cleaning/",
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
const NLV_DRAIN_FAQS = [
  {
    question: "Why do drains clog faster in older North Las Vegas homes?",
    answer:
      "Homes in central and southern North Las Vegas built from the 1960s through the 1980s often still have original galvanized steel drain lines. Galvanized steel corrodes from the inside out under hard water conditions, creating a rough, pitted pipe interior that catches and holds grease, soap scum, and mineral deposits faster than copper or plastic lines. This corrosion-roughened surface is the primary reason older central North Las Vegas homes experience more frequent and more stubborn drain clogs than newer construction.",
  },
  {
    question: "Do Aliante homes need drain cleaning?",
    answer:
      "Yes. Aliante homes built between 2000 and 2008 are now 16 to 25 years old, and their copper drain lines are entering the age range where hard water mineral buildup and grease accumulation cause noticeable flow reduction. While Aliante pipes are in better condition than the oldest North Las Vegas housing stock, professional drain cleaning every one to two years helps maintain drainage capacity and prevents buildup from progressing to a full blockage.",
  },
  {
    question: "Is hydro jetting safe for older North Las Vegas galvanized pipes?",
    answer:
      "It depends on the condition of the pipe. Hydro jetting is highly effective for clearing mineral scale and grease from lines in good condition, including main sewer lines and newer plastic or copper lines. For older galvanized drain pipes in central North Las Vegas that may be thinned or structurally compromised by decades of corrosion, we assess pipe condition before recommending high-pressure methods. A video camera inspection can help determine the right approach.",
  },
  {
    question:
      "Does Red Carpet Plumbing clean commercial and industrial drains in North Las Vegas?",
    answer:
      "Yes. Red Carpet Plumbing provides floor drain cleaning, main drain line clearing, and hydro jetting for commercial and industrial facilities throughout North Las Vegas, including businesses along Craig Road, Cheyenne Avenue, and the Losee Road industrial corridor.",
  },
  {
    question: "How often should North Las Vegas homeowners clean their drains?",
    answer:
      "Most North Las Vegas homeowners benefit from professional drain cleaning every one to two years. Homes in older central North Las Vegas neighborhoods with galvanized drain lines and significant hard water exposure may benefit from annual cleaning. Commercial properties with heavy drain use should be cleaned more frequently based on usage and drain condition.",
  },
  {
    question: "How much does drain cleaning cost in North Las Vegas?",
    answer:
      "Drain cleaning costs vary based on the type of drain, severity of the clog, and the method required. Red Carpet Plumbing provides transparent pricing before work begins. Call (702) 567-9172 for a quote.",
  },
];

// Why North Las Vegas drains clog (bold label + description). Galvanized pipe
// corrosion in older central NLV leads (the NLV-specific anchor), then Aliante
// copper, hard water baseline, commercial floor drains, and tree roots. The
// build brief used " -- " separators; rendered with the label and a period per
// the project no-double-hyphen copy rule. Apostrophes are safe in string literals.
const NLV_DRAIN_CAUSES = [
  {
    label: "Galvanized steel drain lines in older central North Las Vegas neighborhoods",
    body: "Homes in the central and southern portions of North Las Vegas, built from the 1960s through the 1980s, often still have original galvanized steel drain lines. Galvanized steel corrodes from the inside out under Las Vegas Valley hard water conditions. As corrosion progresses, the rough, pitted interior surface of galvanized pipe catches and holds grease, soap scum, and mineral deposits far more aggressively than copper or plastic lines. This makes recurring slow drains and blockages significantly more common in older central North Las Vegas homes than in newer construction.",
  },
  {
    label: "Aliante-area copper lines entering the first service cycle",
    body: "Homes in the Aliante master-planned community, built primarily between 2000 and 2008, are now 16 to 25 years old. While newer than the oldest NLV housing stock, these copper drain lines are entering the age range where hard water mineral buildup and grease accumulation begin causing noticeable flow reduction. Drain cleaning and water heater maintenance are becoming regular needs for Aliante homeowners.",
  },
  {
    label: "Hard water mineral bonding throughout North Las Vegas",
    body: "All North Las Vegas homes receive the same Las Vegas Valley hard water supply. Mineral deposits inside pipe walls narrow the pipe interior and create rough surfaces that trap grease and soap. This is the baseline drain clog driver across all of North Las Vegas, compounded by pipe age in older neighborhoods.",
  },
  {
    label: "Commercial and industrial floor drain buildup",
    body: "Businesses and facilities in the Craig Road corridor, Cheyenne Avenue, and the Losee Road industrial area depend on functioning floor drains. Grease, debris, mineral scale, and industrial residue accumulate inside floor drain lines. Regular professional cleaning prevents backups that can cause facility downtime, damage flooring, and create compliance issues.",
  },
  {
    label: "Tree root intrusion in established North Las Vegas properties",
    body: "Established trees in older North Las Vegas neighborhoods have root systems that actively search for moisture through aging sewer line joints and cracks. Root intrusion causes recurring blockages that cable clearing addresses temporarily but camera inspection and sewer line repair address permanently.",
  },
];

// Drain services (bold label + description). Two items carry an inline link to a
// live core service page (main sewer line -> sewer-line-services; video camera
// -> video-camera-plumbing-inspections).
const NLV_DRAIN_SERVICES: {
  label: string;
  body: string;
  link?: { href: string; text: string };
}[] = [
  {
    label: "Kitchen drain cleaning",
    body: "Grease, cooking oils, and food particles build up inside kitchen drain lines, compounded by North Las Vegas hard water mineral bonding. We clear kitchen drains from the sink trap to the main connection.",
  },
  {
    label: "Bathroom drain cleaning",
    body: "Hair, soap scum, and personal care residue accumulate in bathroom sink, shower, and tub drains. We clear all bathroom drain types and verify full flow is restored.",
  },
  {
    label: "Main sewer line cleaning",
    body: "When multiple drains are slow or backing up simultaneously, the problem is usually in the main sewer line. We clear main sewer lines using cable machines and hydro jetting based on the type and location of the blockage.",
    link: { href: "/sewer-line-services/", text: "sewer line services" },
  },
  {
    label: "Hydro jetting",
    body: "Hydro jetting uses high-pressure water to scour the interior walls of drain and sewer lines, removing grease, mineral scale, and debris from the pipe walls rather than just clearing a path through the clog. For North Las Vegas homes with hard water mineral buildup and for commercial facilities in the Craig Road and Cheyenne corridors with heavy drain use, hydro jetting provides a more thorough and longer-lasting result. We assess pipe condition before recommending hydro jetting on older galvanized lines.",
  },
  {
    label: "Floor drain cleaning",
    body: "Floor drains in commercial facilities, warehouses, distribution centers, and industrial buildings require regular professional cleaning to prevent backups and maintain drainage capacity. We clear floor drains throughout the North Las Vegas commercial and industrial corridor.",
  },
  {
    label: "Video camera drain inspection",
    body: "A video camera inspection lets us see exactly what is inside your drain or sewer line. We identify blockage type and location, confirm the line is clear after cleaning, and check for root intrusion, pipe damage, or structural issues.",
    link: {
      href: "/video-camera-plumbing-inspections/",
      text: "video camera plumbing inspections",
    },
  },
];

const DRAIN_STEPS = [
  {
    name: "Assess the drain and identify the clog",
    body: "We gather information about which drains are affected and how long the problem has been present to determine whether the clog is in a branch drain or the main sewer line.",
  },
  {
    name: "Select the right clearing method",
    body: "We match the method to the pipe material and clog type. For older galvanized drain lines in central North Las Vegas, we assess pipe condition before applying high-pressure methods. Cable machines handle hair and soap clogs. Hydro jetting handles mineral scale and grease buildup where pipes are in suitable condition.",
  },
  {
    name: "Clear the blockage completely",
    body: "We clear the drain line fully, not just enough to restore partial flow, working from cleanout access points for main sewer lines and floor drains.",
  },
  {
    name: "Verify full flow is restored",
    body: "We run water through the line to confirm full flow is restored and no partial blockage remains.",
  },
];

// FLAG: VERIFY — license number and transparent-pricing items are source-site
// claims per the approved brief.
const WHY_CHOOSE = [
  "Local Las Vegas Valley plumbing company familiar with North Las Vegas housing stock and hard water conditions",
  "Licensed plumbers (NV License #0048585A)",
  "Transparent pricing with no hidden fees",
  "Residential and commercial drain cleaning throughout North Las Vegas",
  "Hydro jetting available for stubborn or recurring clogs where pipe condition allows",
  "Experienced with older galvanized drain systems in central North Las Vegas neighborhoods",
];

const DRAIN_TRUST_STRIP = [
  "NV Licensed, #0048585A",
  "Drain Cleaning and Hydro Jetting",
  "Residential and Commercial",
  "Transparent Pricing, No Hidden Fees",
];

const NLV_AREAS = [
  "Aliante Area",
  "Central North Las Vegas",
  "Craig Road Corridor",
  "Cheyenne Area",
  "Carey Area",
  "Losee Road Area",
  "Simmons Street",
];

// Related services. /north-las-vegas/emergency-plumbing/ is live (Batch 5, Page
// 3). TODO-BATCH-5: replace the core-route links with the location-specific
// /north-las-vegas/[service]/ children once those pages are built
// (water-heater-repair-installation, leak-detection-repair).
const RELATED_SERVICES = [
  {
    label: "Emergency Plumbing in North Las Vegas",
    href: "/north-las-vegas/emergency-plumbing/",
  },
  { label: "Aliante Area Plumbing", href: "/north-las-vegas/aliante-area-plumbing/" },
  {
    label: "Water Heater Repair and Installation",
    href: "/water-heater-repair-installation/",
  },
  { label: "Leak Detection and Repair", href: "/leak-detection-repair/" },
  { label: "Sewer Line Services", href: "/sewer-line-services/" },
];

// ---------------------------------------------------------------------------
// JSON-LD payloads
// ---------------------------------------------------------------------------
const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Drain Cleaning in North Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides professional drain cleaning in North Las Vegas, NV, including the Aliante area. Kitchen drains, bathroom drains, main sewer lines, hydro jetting, and commercial floor drains. Licensed plumbers.",
  url: "https://redcarpetplumbing.com/north-las-vegas/drain-cleaning/",
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
      name: "North Las Vegas Plumbing Services",
      item: "https://redcarpetplumbing.com/north-las-vegas-plumbing-services/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Drain Cleaning in North Las Vegas",
      item: "https://redcarpetplumbing.com/north-las-vegas/drain-cleaning/",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Drain Cleaning in North Las Vegas",
  serviceType: "Drain Cleaning",
  description:
    "Red Carpet Plumbing provides professional drain cleaning for homes and businesses in North Las Vegas, NV, including kitchen drains, bathroom drains, main sewer line cleaning, hydro jetting, and commercial floor drain cleaning.",
  provider: {
    "@type": "Plumber",
    name: "Red Carpet Plumbing",
    url: "https://redcarpetplumbing.com",
    // FLAG: VERIFY telephone (carried forward from existing pages).
    telephone: "+17025679172",
  },
  areaServed: {
    "@type": "City",
    name: "North Las Vegas",
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
  name: "How Red Carpet Plumbing Cleans Drains in North Las Vegas NV",
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
  mainEntity: NLV_DRAIN_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function NorthLasVegasDrainCleaningPage() {
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
              label: "North Las Vegas Plumbing Services",
              href: "/north-las-vegas-plumbing-services/",
            },
            { label: "Drain Cleaning in North Las Vegas" },
          ]}
        />

        {/* SECTION 1: HERO */}
        <HeroSection
          headingLevel="h1"
          headline="Drain Cleaning in North Las Vegas, NV"
          subheading="Red Carpet Plumbing provides professional drain cleaning for homes and businesses throughout North Las Vegas, NV, including the Aliante area, central North Las Vegas neighborhoods, and the Craig Road and Cheyenne Avenue commercial corridors. Whether you are dealing with a slow kitchen drain, a clogged bathroom sink, a blocked main sewer line, or floor drains at a commercial or industrial facility, our licensed plumbers clear drains completely. Call (702) 567-9172 to schedule service."
          trustItems={[
            "NV Licensed Plumbers, #0048585A",
            "Available for Emergency Drain Service",
            "Serving North Las Vegas and the Las Vegas Valley",
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
            alt: "Professional drain cleaning service in North Las Vegas, NV",
          }}
        />

        {/* SECTION 2: TRUST STRIP */}
        <TrustStrip
          items={DRAIN_TRUST_STRIP}
          ariaLabel="Why North Las Vegas customers choose Red Carpet Plumbing for drain cleaning"
        />

        {/* SECTION 3: DIRECT ANSWER */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="rounded-2xl border-l-4 border-brand-primary bg-brand-surface-alt p-6 sm:p-8">
              <h2 className="text-2xl font-bold tracking-tight text-brand-dark sm:text-3xl">
                Professional Drain Cleaning in North Las Vegas
              </h2>
              <p className="mt-4 text-lg leading-8 text-brand-dark/80">
                Professional drain cleaning removes clogs, buildup, and
                blockages from residential and commercial drain and sewer lines.
                In North Las Vegas, hard water mineral deposits accelerate clog
                formation in all homes, and older central neighborhoods with
                aging galvanized pipes face a more serious and persistent version
                of the problem. When a drain is slow, producing odors, or
                completely blocked, a licensed plumber can clear the line fully
                and identify any underlying pipe condition issues.
              </p>
              <p className="mt-4 text-base leading-7 text-brand-dark/70">
                This page covers drain cleaning specific to North Las Vegas. For
                a broader overview, see our{" "}
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

        {/* SECTION 4: WHY NORTH LAS VEGAS DRAINS CLOG */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10 lg:pb-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Why North Las Vegas Drains Clog
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Drain problems in North Las Vegas fall into a few clear
                    patterns, led by aging galvanized lines in older central
                    neighborhoods and the newer Aliante housing stock now
                    entering its first major service cycle.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-10">
                <ul className="space-y-5">
                  {NLV_DRAIN_CAUSES.map((c) => (
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
                Drain Cleaning Services We Provide in North Las Vegas
              </h2>
            </div>
            <ul className="mt-10 space-y-5">
              {NLV_DRAIN_SERVICES.map((s) => (
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
                  Recurring Drain Clog or Commercial Backup in North Las Vegas?
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/80">
                  Aging galvanized lines and heavy commercial drain use cause
                  repeat backups. We assess the line and recommend the right
                  clearing method, from cable machines to hydro jetting. Call Red
                  Carpet Plumbing to get started.
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
                    How We Clean Drains in North Las Vegas
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
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Why North Las Vegas Homeowners and
                <br className="hidden sm:block" /> Businesses Choose Red Carpet
                Plumbing
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

        {/* SECTION 9: NORTH LAS VEGAS AREAS */}
        <section className="bg-brand-charcoal text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="max-w-3xl text-left">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                North Las Vegas Areas We Serve for Drain Cleaning
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/85">
                Red Carpet Plumbing provides drain cleaning throughout North Las
                Vegas, NV, including the Aliante area, central North Las Vegas,
                the Craig Road corridor, the Cheyenne area, the Carey area, Losee
                Road, Simmons Street, and surrounding neighborhoods. We also
                serve the broader Las Vegas Valley.
              </p>
            </div>

            <div className="mt-8">
              <Link
                href="/north-las-vegas/aliante-area-plumbing/"
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-brand-charcoal shadow-sm transition-colors hover:bg-brand-surface-alt focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-safe:transition-transform motion-safe:active:scale-[0.97]"
              >
                Aliante Area Plumbing
              </Link>
            </div>

            <ul className="mt-8 flex flex-wrap gap-3">
              {NLV_AREAS.map((name) => (
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
        {/* /north-las-vegas/[service]/ children once built */}
        {/* (water-heater-repair-installation, leak-detection-repair). */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
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
                Drain Cleaning FAQs for North Las
                <br className="hidden sm:block" /> Vegas Homeowners and Businesses
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {NLV_DRAIN_FAQS.map((faq) => (
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
          headline={<>Clogged Drain<br />in North Las Vegas?</>}
          body="Do not let a slow or blocked drain get worse. Call Red Carpet Plumbing at (702) 567-9172 or request service online. We provide professional drain cleaning throughout North Las Vegas, including the Aliante area and all surrounding neighborhoods and commercial corridors."
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
