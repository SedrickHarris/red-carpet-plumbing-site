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

// FLAG: VERIFY before publishing — license #0048585A, 24/7 availability,
// transparent-pricing, and any rating/40-year claims are source-site/project
// claims. This page uses the conservative wording from the approved brief and
// does NOT assert rating, review count, or "40 years" here.

export const metadata: Metadata = {
  // FLAG: description below is the approved brief string (~220 chars). It
  // exceeds the site's ≤160 meta-description standard; see report. Kept as
  // approved pending a trim decision.
  title: "Emergency Plumbing in Henderson, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides emergency plumbing service in Henderson, NV, including Green Valley and Lake Las Vegas. Burst pipes, slab leaks, sewer backups, water heater failures. Licensed plumbers. Call (702) 567-9172.",
  alternates: {
    canonical: "https://redcarpetplumbing.com/henderson/emergency-plumbing/",
  },
  openGraph: {
    title: "Emergency Plumbing in Henderson, NV | Red Carpet Plumbing",
    description:
      "Emergency plumbing in Henderson from licensed local plumbers. Green Valley, Lake Las Vegas, and all Henderson communities. Call Red Carpet Plumbing.",
    url: "https://redcarpetplumbing.com/henderson/emergency-plumbing/",
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
// FLAG: VERIFY — Q2 (24-hour availability) and Q4 (transparent pricing) use
// conservative wording per the approved brief; confirm before any expansion.
// ---------------------------------------------------------------------------
const HENDERSON_EMERGENCY_FAQS = [
  {
    question:
      "What should I do while waiting for an emergency plumber in Henderson?",
    answer:
      "Shut off the water at the nearest shutoff valve or at your main supply if a pipe has burst or a major leak is active. If you suspect a gas issue, leave the building and call your gas company. Do not use electrical switches near standing water. Call Red Carpet Plumbing at (702) 567-9172 to speak with a plumber while you wait.",
  },
  {
    question: "Is there a 24-hour plumber in Henderson, NV?",
    answer:
      "Red Carpet Plumbing provides emergency plumbing service in Henderson. Call (702) 567-9172 to reach our team.",
  },
  {
    question: "Are slab leaks a common emergency in Henderson?",
    answer:
      "Yes. Henderson's older Green Valley neighborhoods have copper supply lines now 30 to 40 years old, thinned by years of hard water mineral exposure. Caliche soil movement beneath slab foundations adds stress to those pipes. Slab leaks are one of the more common emergency plumbing situations we see in Henderson.",
  },
  {
    question: "How much does emergency plumbing cost in Henderson?",
    answer:
      "Emergency plumbing costs vary based on the type of repair, time of service, and materials needed. Red Carpet Plumbing provides transparent pricing before work begins. Call (702) 567-9172 for a quote.",
  },
  {
    question: "Do you serve Green Valley and Lake Las Vegas for emergency plumbing?",
    answer:
      "Yes. Red Carpet Plumbing provides emergency plumbing service throughout Henderson, including Green Valley and Lake Las Vegas.",
  },
  {
    question: "Do you offer emergency plumbing for businesses in Henderson?",
    answer:
      "Yes. Red Carpet Plumbing provides emergency plumbing service for both residential and commercial properties throughout Henderson.",
  },
];

// Common emergency problems (bold label + description). Slab leaks lead because
// they are the Henderson-specific high-priority emergency. The build brief used
// " -- " separators; rendered with the label and a period per the project
// no-double-hyphen copy rule. Apostrophes are safe in these string literals.
const HENDERSON_EMERGENCY_PROBLEMS = [
  {
    label: "Slab leaks in Green Valley and older Henderson neighborhoods",
    body: "Green Valley's original homes, built between the mid-1980s and mid-1990s, have copper supply lines that have been exposed to Las Vegas Valley hard water for 30 to 40 years. Mineral corrosion thins pipe walls over time, and caliche soil movement beneath Henderson slab foundations adds mechanical stress. Slab leaks are one of the most common emergency plumbing calls we receive from Henderson homeowners.",
  },
  {
    label: "Burst pipes and water line breaks",
    body: "Temperature swings and aging pipe materials in Henderson's established neighborhoods can cause pipes to crack or fail suddenly.",
  },
  {
    label: "Sewer line backups",
    body: "Sewage backing up into drains, toilets, or tubs is a health hazard requiring immediate service.",
  },
  {
    label: "Water heater failures",
    body: "Sudden loss of hot water, leaking tanks, and unusual noises are common water heater emergencies in Henderson homes, where hard water accelerates sediment buildup and shortens equipment life.",
  },
  {
    label: "Gas line emergencies",
    body: "If you smell gas or suspect a gas line problem, leave the building immediately. Gas line emergencies require a licensed plumber.",
  },
  {
    label: "Major drain clogs and overflows",
    body: "Severe clogs that cause toilet or drain overflows can damage flooring and create unsanitary conditions.",
  },
];

// FLAG: VERIFY gas line scope before publishing.
const HENDERSON_EMERGENCY_SERVICES = [
  "Burst pipe repair and water line repair",
  "Sewer backup clearing and sewer line service",
  "Water heater emergency repair and replacement",
  "Slab leak detection and repair in Henderson",
  "Gas line inspection and emergency repair",
  "Emergency drain clearing",
  "Toilet overflow and clog repair",
  "Water shutoff valve repair and replacement",
];

const EMERGENCY_STEPS = [
  {
    name: "Call Red Carpet Plumbing",
    body: "Call (702) 567-9172. Describe what is happening and your Henderson address. We will assess the urgency and dispatch a licensed plumber to your location.",
  },
  {
    name: "Plumber arrives and assesses",
    body: "A licensed plumber arrives, inspects the problem, and explains what needs to be done before work begins.",
  },
  {
    name: "We complete the repair",
    body: "Our plumber completes the work and confirms all systems are functioning correctly before leaving.",
  },
  {
    name: "Follow-up if needed",
    body: "If additional service is required, we schedule the follow-up and ensure you understand next steps.",
  },
];

// FLAG: VERIFY — license number and transparent-pricing items are source-site
// claims per the approved brief.
const WHY_CHOOSE = [
  "Local Las Vegas Valley plumbing company familiar with Henderson's construction history and plumbing conditions",
  "Licensed plumbers (NV License #0048585A)",
  "Transparent pricing with no hidden fees",
  "Familiar with Green Valley's aging pipe systems, caliche soil conditions, and slab construction",
  "Residential and commercial emergency service throughout Henderson",
];

const EMERGENCY_TRUST_STRIP = [
  "NV Licensed, #0048585A",
  "Emergency Service Available",
  "Serving Henderson and the Valley",
  "Transparent Pricing, No Hidden Fees",
];

// Plain-text Henderson communities (body signal). Green Valley and Lake Las
// Vegas also render as live hub links below.
const HENDERSON_COMMUNITIES = [
  "Green Valley",
  "Lake Las Vegas",
  "Seven Hills",
  "MacDonald Ranch",
  "Anthem",
  "Tuscany Village",
  "Inspirada",
  "Whitney Ranch",
];

// Related core service pages (live routes). TODO-BATCH-5: replace with the
// location-specific /henderson/[service]/ children once those pages are built
// (drain-cleaning, leak-detection-repair, water-heater-repair-installation,
// slab-leak-detection-repair).
const RELATED_SERVICES = [
  { label: "Drain Cleaning", href: "/drain-cleaning/" },
  { label: "Leak Detection and Repair", href: "/leak-detection-repair/" },
  {
    label: "Water Heater Repair and Installation",
    href: "/water-heater-repair-installation/",
  },
  { label: "Slab Leak Detection and Repair", href: "/slab-leak-detection-repair/" },
  { label: "Sewer Line Services", href: "/sewer-line-services/" },
];

// ---------------------------------------------------------------------------
// JSON-LD payloads
// ---------------------------------------------------------------------------
const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Emergency Plumbing in Henderson, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides emergency plumbing service in Henderson, NV, including Green Valley and Lake Las Vegas. Burst pipes, slab leaks, sewer backups, water heater failures. Licensed plumbers.",
  url: "https://redcarpetplumbing.com/henderson/emergency-plumbing/",
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
      name: "Emergency Plumbing in Henderson",
      item: "https://redcarpetplumbing.com/henderson/emergency-plumbing/",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Emergency Plumbing in Henderson",
  serviceType: "Emergency Plumbing",
  description:
    "Red Carpet Plumbing provides emergency plumbing service for homes and businesses in Henderson, NV, including burst pipe repair, slab leak detection and repair, sewer backup clearing, water heater emergency service, and gas line emergency service.",
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
  name: "How to Get Emergency Plumbing Help in Henderson NV",
  step: EMERGENCY_STEPS.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.name,
    text: s.body,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: HENDERSON_EMERGENCY_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function HendersonEmergencyPlumbingPage() {
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
            { label: "Emergency Plumbing in Henderson" },
          ]}
        />

        {/* SECTION 1: HERO */}
        <HeroSection
          headingLevel="h1"
          headline="Emergency Plumbing in Henderson, NV"
          subheading="Red Carpet Plumbing provides emergency plumbing service for homes and businesses throughout Henderson, NV, including Green Valley, Lake Las Vegas, and surrounding communities. Whether you are dealing with a burst pipe, sewer backup, slab leak, water heater failure, or gas line issue, our licensed plumbers are ready to help. Call (702) 567-9172 now."
          trustItems={[
            "NV Licensed Plumbers, #0048585A",
            "Emergency Plumbing Service Available",
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
          formSlot={<QuoteFormPlaceholder title="Get Emergency Plumbing Help" />}
          backgroundImage={{
            src: "/images/services/emergency-plumbing/hero.webp",
            alt: "Emergency plumber responding to a burst pipe in Henderson, NV",
          }}
        />

        {/* SECTION 2: TRUST STRIP */}
        <TrustStrip
          items={EMERGENCY_TRUST_STRIP}
          ariaLabel="Why Henderson customers choose Red Carpet Plumbing for emergency service"
        />

        {/* SECTION 3: DIRECT ANSWER */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="rounded-2xl border-l-4 border-brand-primary bg-brand-surface-alt p-6 sm:p-8">
              <h2 className="text-2xl font-bold tracking-tight text-brand-dark sm:text-3xl">
                What Counts as a Plumbing Emergency in Henderson?
              </h2>
              <p className="mt-4 text-lg leading-8 text-brand-dark/80">
                A plumbing emergency is any situation that poses an immediate
                risk to your home, property, or safety. In Henderson, burst
                pipes, sewage backups, slab leaks, water heater failures, and gas
                line issues are the most common situations that require immediate
                professional attention. If you are unsure whether your situation
                qualifies, call a licensed plumber rather than waiting.
              </p>
              <p className="mt-4 text-base leading-7 text-brand-dark/70">
                This page covers emergency plumbing specific to Henderson. For a
                broader overview, see our{" "}
                <Link
                  href="/emergency-plumbing/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  emergency plumbing services
                </Link>{" "}
                page.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4: COMMON EMERGENCY PROBLEMS IN HENDERSON */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10 lg:pb-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Common Emergency Plumbing Problems in Henderson, NV
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Henderson homes face plumbing risks shaped by local
                    construction history and desert conditions. Slab leaks lead
                    the list in Green Valley and other established neighborhoods.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-10">
                <ul className="space-y-5">
                  {HENDERSON_EMERGENCY_PROBLEMS.map((p) => (
                    <li
                      key={p.label}
                      className="relative rounded-2xl bg-brand-surface-alt p-6 ring-1 ring-brand-surface-alt"
                    >
                      <p className="text-base leading-7 text-brand-dark/80">
                        <strong className="font-semibold text-brand-dark">
                          {p.label}.
                        </strong>{" "}
                        {p.body}
                      </p>
                    </li>
                  ))}
                </ul>
              </SectionRevealItem>
            </SectionReveal>
          </div>
        </section>

        {/* SECTION 5 (mid-page): EMERGENCY CTA */}
        <section className="bg-brand-primary text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Have a Plumbing Emergency in Henderson Right Now?
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/90">
                  Do not wait on an active leak or backup. Call Red Carpet
                  Plumbing and speak with a licensed plumber about your Henderson
                  emergency.
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
                  href="/contact/"
                  className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/60 px-6 py-3 text-base font-semibold text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-safe:transition-colors motion-safe:active:scale-[0.97]"
                >
                  Request Emergency Service
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: SERVICES WE PROVIDE */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Emergency Plumbing Services We Provide in Henderson
              </h2>
            </div>
            <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {HENDERSON_EMERGENCY_SERVICES.map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <CheckMark />
                  <span className="text-base leading-7 text-brand-dark/85">
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 7: HOW WE HANDLE AN EMERGENCY (HowTo) */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    How We Handle an Emergency Plumbing Call in Henderson
                  </h2>
                </div>
              </SectionRevealItem>
              <SectionRevealItem className="mt-12">
                <ol className="space-y-8">
                  {EMERGENCY_STEPS.map((step, index) => (
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
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Why Henderson Homeowners
                <br className="hidden sm:block" /> Choose Red Carpet Plumbing
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
                Henderson Communities We Serve
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/85">
                Red Carpet Plumbing responds to plumbing emergencies throughout
                Henderson, NV, including Green Valley, Lake Las Vegas, Seven
                Hills, MacDonald Ranch, Anthem, Tuscany Village, Inspirada,
                Whitney Ranch, and surrounding neighborhoods. We also provide
                emergency plumbing across the broader Las Vegas Valley.
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
        {/* TODO-BATCH-5: replace these core-service links with the */}
        {/* location-specific /henderson/[service]/ children once built */}
        {/* (drain-cleaning, leak-detection-repair, water-heater-repair-installation, */}
        {/* slab-leak-detection-repair). */}
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
                Emergency Plumbing FAQs
                <br className="hidden sm:block" /> for Henderson Homeowners
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {HENDERSON_EMERGENCY_FAQS.map((faq) => (
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
          headline={<>Need an Emergency Plumber<br />in Henderson?</>}
          body="Do not wait on a plumbing emergency. Call Red Carpet Plumbing at (702) 567-9172 or request service online. We serve homes and businesses throughout Henderson, including Green Valley, Lake Las Vegas, and surrounding communities."
          primaryCTA={{
            label: "Call (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{
            label: "Request Emergency Service",
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
