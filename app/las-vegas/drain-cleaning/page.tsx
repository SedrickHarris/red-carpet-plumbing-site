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
  // FLAG: description below is the approved brief string (~270 chars). It
  // exceeds the site's ≤160 meta-description standard; see report. Kept as
  // approved pending a trim decision.
  title: "Drain Cleaning in Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides professional drain cleaning in Las Vegas, NV. Kitchen drains, bathroom drains, main sewer lines, and hydro jetting. Las Vegas hard water and aging pipes are the leading causes of drain clogs. Licensed plumbers. Call (702) 567-9172.",
  alternates: {
    canonical: "https://redcarpetplumbing.com/las-vegas/drain-cleaning/",
  },
  openGraph: {
    title: "Drain Cleaning in Las Vegas, NV | Red Carpet Plumbing",
    description:
      "Professional drain cleaning in Las Vegas from licensed local plumbers. Hard water, grease buildup, and aging pipes cleared completely. Call Red Carpet Plumbing.",
    url: "https://redcarpetplumbing.com/las-vegas/drain-cleaning/",
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
// FLAG: VERIFY — Q5 (transparent pricing) uses conservative wording per the
// approved brief; confirm before any expansion.
// ---------------------------------------------------------------------------
const LV_DRAIN_FAQS = [
  {
    question: "What causes drains to clog faster in Las Vegas?",
    answer:
      "Las Vegas has some of the hardest water in the United States. Hard water leaves calcium and magnesium deposits inside pipe walls that narrow the pipe, slow water flow, and create rough surfaces that trap grease, soap scum, and debris. This is why Las Vegas drains tend to clog faster and more stubbornly than drains in cities with softer water.",
  },
  {
    question: "How do I know if I need professional drain cleaning in Las Vegas?",
    answer:
      "Call a plumber when multiple drains are slow at the same time, when you have a complete blockage, when drains produce sewage or sulfur odors, or when you hear gurgling sounds from toilets or other fixtures. Multiple affected drains usually indicate a main sewer line problem that requires professional clearing.",
  },
  {
    question: "Are chemical drain cleaners safe for Las Vegas pipes?",
    answer:
      "Chemical drain cleaners can damage pipe linings, especially in older galvanized or copper pipes common in Las Vegas homes. They typically dissolve only part of the clog and do not address mineral buildup or root intrusion. Professional drain cleaning removes the entire blockage and is safer for aging Las Vegas pipe systems.",
  },
  {
    question: "What is hydro jetting and when is it needed in Las Vegas?",
    answer:
      "Hydro jetting uses high-pressure water to scour the interior walls of drain and sewer lines, removing grease, mineral scale, and debris from the pipe walls rather than just clearing a path through the clog. It is recommended for recurring clogs, main sewer line cleaning, and lines with significant hard water mineral buildup, all common conditions in Las Vegas homes.",
  },
  {
    question: "How much does drain cleaning cost in Las Vegas?",
    answer:
      "Drain cleaning costs vary based on the type of drain, the severity of the clog, and the method required to clear it. Red Carpet Plumbing provides transparent pricing before work begins. Call (702) 567-9172 for a quote.",
  },
  {
    question:
      "Does Red Carpet Plumbing offer drain cleaning for commercial properties in Las Vegas?",
    answer:
      "Yes. Red Carpet Plumbing provides drain cleaning for residential and commercial properties throughout Las Vegas, including kitchen drains, floor drains, main sewer lines, and hydro jetting service for commercial facilities with heavy drain use.",
  },
];

// Why Las Vegas drains clog faster (bold label + description). Hard water leads
// because it is the most Las Vegas-specific cause and the topical anchor. The
// build brief used " -- " separators; rendered with the label and a period per
// the project no-double-hyphen copy rule. Apostrophes are safe in string literals.
const LV_DRAIN_CAUSES = [
  {
    label: "Hard water mineral deposits inside pipe walls",
    body: "Las Vegas has some of the hardest water in the United States. Calcium and magnesium from the Lake Mead municipal supply deposit inside pipe walls over time, narrowing the pipe's interior and creating a rough surface that traps grease, soap scum, and debris. In older Las Vegas homes with copper or galvanized pipes, these deposits have been accumulating for decades. This is the primary reason Las Vegas drains clog faster and more stubbornly than drains in most other cities.",
  },
  {
    label: "Grease and soap scum bonding to mineral scale",
    body: "In cities with soft water, grease and soap flow through pipes more freely. In Las Vegas, the mineral deposits already coating the inside of pipe walls give grease and soap something to stick to. Once grease bonds to mineral scale, it hardens and accumulates rapidly. Kitchen drains in Las Vegas homes are especially prone to this cycle.",
  },
  {
    label: "Tree root intrusion from desert landscaping",
    body: "Desert-adapted trees such as mesquite, olive, and palm have aggressive root systems that actively search for moisture. Sewer lines are a reliable moisture source, and small cracks or aging joints in underground pipes give roots an entry point. Root intrusion is a common cause of recurring drain problems in established Las Vegas neighborhoods.",
  },
  {
    label: "Aging pipes in older Las Vegas neighborhoods",
    body: "Homes in central Las Vegas, the Desert Inn and West Sahara corridors, Desert Shores, Sunrise Manor, and similar neighborhoods built from the 1950s through the 1990s often have original galvanized steel or cast iron drain lines. These pipes corrode from the inside out, creating rough surfaces that trap debris and cause recurring slow drains that get worse over time.",
  },
];

// Drain services (bold label + description). Two items carry an inline link to a
// live core service page (main sewer line -> sewer-line-services; video camera
// -> video-camera-plumbing-inspections).
const LV_DRAIN_SERVICES: {
  label: string;
  body: string;
  link?: { href: string; text: string };
}[] = [
  {
    label: "Kitchen drain cleaning",
    body: "Grease, cooking oils, and food particles build up inside kitchen drain lines over time. Las Vegas hard water accelerates this process. We clear kitchen drains completely from the sink trap to the main connection.",
  },
  {
    label: "Bathroom drain cleaning",
    body: "Hair, soap scum, and personal care product residue accumulate in bathroom sink, shower, and tub drains. We clear bathroom drains and verify full flow is restored.",
  },
  {
    label: "Main sewer line cleaning",
    body: "When multiple drains are slow or backing up at the same time, the blockage is usually in the main sewer line. We clear main sewer lines using cable machines and hydro jetting matched to the type and location of the blockage.",
    link: { href: "/sewer-line-services/", text: "sewer line services" },
  },
  {
    label: "Hydro jetting",
    body: "Hydro jetting uses high-pressure water to scour the interior walls of drain and sewer lines, removing grease, mineral scale, and debris from the pipe walls rather than just punching a hole through the clog. It is the most thorough drain cleaning method for Las Vegas homes with hard water mineral buildup and for commercial properties with heavy drain use.",
  },
  {
    label: "Video camera drain inspection",
    body: "A video camera inspection lets us see exactly what is inside your drain or sewer line. We use camera inspections to identify the type and location of a blockage, confirm the line is fully clear after cleaning, and check for pipe damage, root intrusion, or structural issues.",
    link: {
      href: "/video-camera-plumbing-inspections/",
      text: "video camera plumbing inspections",
    },
  },
  {
    label: "Floor drain cleaning",
    body: "Floor drains in garages, utility rooms, and laundry areas collect debris, sediment, and desert sand. We clear floor drains and inspect the line for structural issues.",
  },
];

const DRAIN_STEPS = [
  {
    name: "Assess the drain and identify the clog",
    body: "We gather information about which drains are affected and how long the problem has been present to determine whether the clog is in a branch drain or the main sewer line.",
  },
  {
    name: "Select the right clearing method",
    body: "Not every clog requires the same approach. Hair and soap scum respond well to cable machines. Hard mineral scale and grease buildup in main lines benefit from hydro jetting. We select the method based on the pipe material, clog type, and condition of the line.",
  },
  {
    name: "Clear the blockage completely",
    body: "We clear the drain line fully, not just enough to restore partial flow. For main sewer line cleaning, we work from cleanout access points to clear the entire line.",
  },
  {
    name: "Verify full flow is restored",
    body: "After clearing, we run water through the line to confirm full flow is restored and no partial blockage remains.",
  },
];

// FLAG: VERIFY — license number and transparent-pricing items are source-site
// claims per the approved brief.
const WHY_CHOOSE = [
  "Local Las Vegas plumbing company familiar with hard water conditions and aging pipe systems throughout the city",
  "Licensed plumbers (NV License #0048585A)",
  "Transparent pricing with no hidden fees",
  "Residential and commercial drain cleaning service throughout Las Vegas",
  "Hydro jetting available for stubborn or recurring clogs",
];

const DRAIN_TRUST_STRIP = [
  "NV Licensed, #0048585A",
  "Drain Cleaning and Hydro Jetting",
  "Serving the Las Vegas Valley",
  "Transparent Pricing, No Hidden Fees",
];

const LV_NEIGHBORHOODS = [
  "Downtown Las Vegas",
  "Desert Inn / West Sahara",
  "Desert Shores",
  "Sunrise Manor",
  "Whitney",
  "Winchester",
  "Southwest Las Vegas",
];

// Related services. /las-vegas/emergency-plumbing/ is live (Batch 5, Page 1).
// TODO-BATCH-5: replace the core-route links with the location-specific
// /las-vegas/[service]/ children once those pages are built
// (water-heater-repair-installation, leak-detection-repair, sewer-line-services).
const RELATED_SERVICES = [
  { label: "Emergency Plumbing in Las Vegas", href: "/las-vegas/emergency-plumbing/" },
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
  name: "Drain Cleaning in Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides professional drain cleaning in Las Vegas, NV. Kitchen drains, bathroom drains, main sewer lines, and hydro jetting. Licensed plumbers.",
  url: "https://redcarpetplumbing.com/las-vegas/drain-cleaning/",
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
      name: "Las Vegas Plumbing Services",
      item: "https://redcarpetplumbing.com/las-vegas-plumbing-services/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Drain Cleaning in Las Vegas",
      item: "https://redcarpetplumbing.com/las-vegas/drain-cleaning/",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Drain Cleaning in Las Vegas",
  serviceType: "Drain Cleaning",
  description:
    "Red Carpet Plumbing provides professional drain cleaning for homes and businesses in Las Vegas, NV, including kitchen drains, bathroom drains, main sewer line cleaning, hydro jetting, and video camera drain inspection.",
  provider: {
    "@type": "Plumber",
    name: "Red Carpet Plumbing",
    url: "https://redcarpetplumbing.com",
    // FLAG: VERIFY telephone (carried forward from existing pages).
    telephone: "+17025679172",
  },
  areaServed: {
    "@type": "City",
    name: "Las Vegas",
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
  name: "How Red Carpet Plumbing Cleans Drains in Las Vegas",
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
  mainEntity: LV_DRAIN_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function LasVegasDrainCleaningPage() {
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
              label: "Las Vegas Plumbing Services",
              href: "/las-vegas-plumbing-services/",
            },
            { label: "Drain Cleaning in Las Vegas" },
          ]}
        />

        {/* SECTION 1: HERO */}
        <HeroSection
          headingLevel="h1"
          headline="Drain Cleaning in Las Vegas, NV"
          subheading="Red Carpet Plumbing provides professional drain cleaning for homes and businesses throughout Las Vegas, NV. Whether you are dealing with a slow kitchen drain, a clogged bathroom sink, a blocked main sewer line, or recurring drain problems caused by Las Vegas hard water and mineral buildup, our licensed plumbers clear drains completely. Call (702) 567-9172 to schedule service."
          trustItems={[
            "NV Licensed Plumbers, #0048585A",
            "Available for Emergency Drain Service",
            "Serving the Las Vegas Valley",
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
            alt: "Professional drain cleaning service in Las Vegas, NV",
          }}
        />

        {/* SECTION 2: TRUST STRIP */}
        <TrustStrip
          items={DRAIN_TRUST_STRIP}
          ariaLabel="Why Las Vegas customers choose Red Carpet Plumbing for drain cleaning"
        />

        {/* SECTION 3: DIRECT ANSWER */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="rounded-2xl border-l-4 border-brand-primary bg-brand-surface-alt p-6 sm:p-8">
              <h2 className="text-2xl font-bold tracking-tight text-brand-dark sm:text-3xl">
                Professional Drain Cleaning in Las Vegas
              </h2>
              <p className="mt-4 text-lg leading-8 text-brand-dark/80">
                Professional drain cleaning removes clogs, buildup, and
                blockages from residential and commercial drain and sewer lines.
                In Las Vegas, hard water mineral deposits inside pipe walls
                accelerate clog formation and make DIY solutions less effective
                over time. When a drain is slow, producing odors, or completely
                blocked, a licensed plumber can clear the line fully and identify
                any underlying problems with the pipe.
              </p>
              <p className="mt-4 text-base leading-7 text-brand-dark/70">
                This page covers drain cleaning specific to Las Vegas. For a
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

        {/* SECTION 4: WHY LAS VEGAS DRAINS CLOG FASTER */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10 lg:pb-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Why Las Vegas Drains Clog Faster Than Most Cities
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    A few local conditions make drains in Las Vegas clog faster
                    and more stubbornly than in most cities. Hard water is the
                    leading cause.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-10">
                <ul className="space-y-5">
                  {LV_DRAIN_CAUSES.map((c) => (
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
                Drain Cleaning Services We Provide in Las Vegas
              </h2>
            </div>
            <ul className="mt-10 space-y-5">
              {LV_DRAIN_SERVICES.map((s) => (
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
                  Recurring or Stubborn Drain Clog in Las Vegas?
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/80">
                  Hard water buildup and aging pipes cause drains to clog again
                  and again. Hydro jetting clears the pipe walls completely. Call
                  Red Carpet Plumbing to discuss the right approach for your
                  drains.
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
                    How We Clean Drains in Las Vegas
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
                Why Las Vegas Homeowners Choose
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

        {/* SECTION 9: NEIGHBORHOODS */}
        <section className="bg-brand-charcoal text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="max-w-3xl text-left">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Las Vegas Neighborhoods We Serve for Drain Cleaning
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/85">
                Red Carpet Plumbing provides drain cleaning throughout Las Vegas,
                NV, including Downtown Las Vegas, the Desert Inn and West Sahara
                corridors, Desert Shores, Sunrise Manor, Whitney, Winchester,
                Southwest Las Vegas, and surrounding neighborhoods. We also
                provide drain cleaning throughout the Las Vegas Valley, including
                Henderson, North Las Vegas, Summerlin, Paradise, Spring Valley,
                and Enterprise.
              </p>
            </div>

            <ul className="mt-12 flex flex-wrap gap-3">
              {LV_NEIGHBORHOODS.map((name) => (
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
        {/* /las-vegas/[service]/ children once built (water-heater-repair-installation, */}
        {/* leak-detection-repair, sewer-line-services). */}
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
                <br className="hidden sm:block" /> for Las Vegas Homeowners
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {LV_DRAIN_FAQS.map((faq) => (
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
          headline={<>Clogged Drain<br />in Las Vegas?</>}
          body="Do not let a slow or blocked drain get worse. Call Red Carpet Plumbing at (702) 567-9172 or request service online. We provide professional drain cleaning throughout the Las Vegas Valley."
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
