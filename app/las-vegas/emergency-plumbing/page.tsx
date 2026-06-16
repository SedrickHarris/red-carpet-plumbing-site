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

// FLAG: VERIFY before publishing — the following are source-site / project
// claims surfaced in the build brief. They are confirmed elsewhere in the
// project (license #0048585A, 24/7 availability, 4.8/76 rating, 40+ years),
// but this page deliberately uses the conservative wording from the approved
// brief and does NOT assert rating, review count, or "40 years" here.
//   - NV License #0048585A (C-1 Plumbing and Heating)
//   - Emergency / 24-7 availability
//   - Transparent pricing, no hidden fees

export const metadata: Metadata = {
  // FLAG: description below is the approved brief string (~200 chars). It
  // exceeds the site's ≤160 meta-description standard; see report. Kept as
  // approved pending a trim decision.
  title: "Emergency Plumbing in Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides emergency plumbing service in Las Vegas, NV. Burst pipes, sewer backups, water heater failures, slab leaks, and gas line emergencies. Licensed plumbers. Call (702) 567-9172.",
  alternates: {
    canonical: "https://redcarpetplumbing.com/las-vegas/emergency-plumbing/",
  },
  openGraph: {
    title: "Emergency Plumbing in Las Vegas, NV | Red Carpet Plumbing",
    description:
      "Emergency plumbing in Las Vegas from licensed local plumbers. Call Red Carpet Plumbing for burst pipes, sewer backups, leaks, and urgent plumbing problems.",
    url: "https://redcarpetplumbing.com/las-vegas/emergency-plumbing/",
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
const LAS_VEGAS_EMERGENCY_FAQS = [
  {
    question:
      "What should I do while waiting for an emergency plumber in Las Vegas?",
    answer:
      "Shut off the water supply at the nearest valve or at your main shutoff if a pipe has burst or a major leak is active. If there is a gas issue, leave the building and call your gas company. Do not use electrical switches near standing water. Call Red Carpet Plumbing at (702) 567-9172 to speak with a plumber while you wait.",
  },
  {
    question: "Is there a 24-hour plumber in Las Vegas?",
    answer:
      "Red Carpet Plumbing provides emergency plumbing service in Las Vegas. Call (702) 567-9172 to reach our team.",
  },
  {
    question: "What counts as a plumbing emergency?",
    answer:
      "A plumbing emergency is any situation that poses an immediate risk to your home, health, or safety. Burst pipes, sewage backups, gas leaks, major water leaks, slab leaks, and complete loss of water service all qualify as plumbing emergencies.",
  },
  {
    question: "How much does emergency plumbing cost in Las Vegas?",
    answer:
      "Emergency plumbing costs vary based on the type of repair, time of service, and materials needed. Red Carpet Plumbing provides transparent pricing before work begins. Call (702) 567-9172 for a quote.",
  },
  {
    question: "Do you handle slab leak emergencies in Las Vegas?",
    answer:
      "Yes. Slab leaks are a common plumbing emergency in Las Vegas due to the area's concrete slab construction. Red Carpet Plumbing provides slab leak detection and repair service throughout the Las Vegas Valley.",
  },
  {
    question:
      "Do you offer emergency plumbing for commercial properties in Las Vegas?",
    answer:
      "Yes. Red Carpet Plumbing provides emergency plumbing service for both residential and commercial properties throughout Las Vegas.",
  },
];

// Common emergency problems (bold label + description). The build brief used
// " -- " separators; rendered here with the label and a period per the
// project no-double-hyphen copy rule.
const LAS_VEGAS_EMERGENCY_PROBLEMS = [
  {
    label: "Burst pipes and water line breaks",
    body: "Temperature swings, hard water mineral buildup, and aging pipe materials can cause pipes to crack or burst, flooding walls, ceilings, and floors.",
  },
  {
    label: "Sewer line backups",
    body: "Sewage backing up into drains, toilets, or tubs is a health hazard and requires immediate service.",
  },
  {
    label: "Water heater failures",
    body: "Sudden loss of hot water, leaking tanks, or unusual noises from a water heater often signal an emergency requiring prompt repair or replacement.",
  },
  {
    label: "Slab leaks",
    body: "Las Vegas is built on concrete slab foundations. Slab leaks are common and can cause serious structural and water damage if left unaddressed.",
  },
  {
    label: "Gas line issues",
    body: "If you smell gas or suspect a gas line problem, leave the area and call immediately. Gas line work requires a licensed plumber.",
  },
  {
    label: "Major drain clogs and overflows",
    body: "Severe clogs that cause toilet or drain overflows can damage flooring and create unsanitary conditions.",
  },
];

// FLAG: VERIFY gas line scope before publishing.
const LAS_VEGAS_EMERGENCY_SERVICES = [
  "Burst pipe repair and water line repair",
  "Sewer backup clearing and sewer line service",
  "Water heater emergency repair and replacement",
  "Slab leak detection and repair",
  "Gas line inspection and emergency repair",
  "Emergency drain clearing",
  "Toilet overflow and clog repair",
  "Water shutoff valve repair and replacement",
];

const EMERGENCY_STEPS = [
  {
    name: "Call Red Carpet Plumbing",
    body: "Reach our team at (702) 567-9172. Describe what is happening and where you are located. We will assess the urgency and dispatch a licensed plumber to your Las Vegas location.",
  },
  {
    name: "Plumber arrives and assesses the problem",
    body: "A licensed plumber will arrive, inspect the issue, and explain what needs to be done before any work begins.",
  },
  {
    name: "We complete the repair",
    body: "Our plumber completes the work and confirms all systems are functioning correctly before leaving.",
  },
  {
    name: "We follow up",
    body: "If additional service is needed, we schedule the follow-up and ensure you understand the next steps.",
  },
];

// FLAG: VERIFY — license number and transparent-pricing items are source-site
// claims per the approved brief.
const WHY_CHOOSE = [
  "Local Las Vegas plumbing company",
  "Licensed plumbers (NV License #0048585A)",
  "Transparent pricing with no hidden fees",
  "Residential and commercial emergency service",
  "Familiar with Las Vegas plumbing conditions including hard water, slab construction, and aging pipe systems",
];

const EMERGENCY_TRUST_STRIP = [
  "NV Licensed, #0048585A",
  "Emergency Service Available",
  "Serving the Las Vegas Valley",
  "Transparent Pricing, No Hidden Fees",
];

// Related core service pages (live routes). TODO-BATCH-5: replace with the
// location-specific /las-vegas/[service]/ children once those pages are built.
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
  name: "Emergency Plumbing in Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides emergency plumbing service in Las Vegas, NV. Burst pipes, sewer backups, water heater failures, slab leaks, and gas line emergencies. Licensed plumbers.",
  url: "https://redcarpetplumbing.com/las-vegas/emergency-plumbing/",
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
      name: "Emergency Plumbing in Las Vegas",
      item: "https://redcarpetplumbing.com/las-vegas/emergency-plumbing/",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Emergency Plumbing in Las Vegas",
  serviceType: "Emergency Plumbing",
  description:
    "Red Carpet Plumbing provides emergency plumbing service for homes and businesses in Las Vegas, NV, including burst pipe repair, sewer backup clearing, water heater emergency service, slab leak repair, and gas line emergency service.",
  provider: {
    "@type": "Plumber",
    name: "Red Carpet Plumbing",
    url: "https://redcarpetplumbing.com",
    // FLAG: VERIFY telephone (carried forward from existing pages).
    telephone: "+17025679172",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Las Vegas",
      addressRegion: "NV",
      addressCountry: "US",
    },
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

// HowTo schema is included because Section 6 renders the matching visible
// step-by-step process (titles + body) on the page.
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Get Emergency Plumbing Help in Las Vegas",
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
  mainEntity: LAS_VEGAS_EMERGENCY_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function LasVegasEmergencyPlumbingPage() {
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
            { label: "Emergency Plumbing in Las Vegas" },
          ]}
        />

        {/* SECTION 1: HERO */}
        <HeroSection
          headingLevel="h1"
          headline="Emergency Plumbing in Las Vegas, NV"
          subheading="Red Carpet Plumbing provides emergency plumbing service for homes and businesses throughout Las Vegas, NV. Whether you are dealing with a burst pipe, sewer backup, water heater failure, slab leak, or gas line issue, our licensed plumbers are ready to help. Call (702) 567-9172 to reach a plumber now."
          trustItems={[
            "NV Licensed Plumbers, #0048585A",
            "Emergency Plumbing Service Available",
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
          formSlot={<QuoteFormPlaceholder title="Get Emergency Plumbing Help" />}
          backgroundImage={{
            src: "/images/services/emergency-plumbing/hero.webp",
            alt: "Emergency plumber responding to a burst pipe in Las Vegas, NV",
          }}
        />

        {/* SECTION 2: TRUST STRIP */}
        <TrustStrip
          items={EMERGENCY_TRUST_STRIP}
          ariaLabel="Why Las Vegas customers choose Red Carpet Plumbing for emergency service"
        />

        {/* SECTION 3: DIRECT ANSWER */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="rounded-2xl border-l-4 border-brand-primary bg-brand-surface-alt p-6 sm:p-8">
              <h2 className="text-2xl font-bold tracking-tight text-brand-dark sm:text-3xl">
                What Counts as a Plumbing Emergency?
              </h2>
              <p className="mt-4 text-lg leading-8 text-brand-dark/80">
                A plumbing emergency is any situation that poses an immediate
                risk to your home, property, or safety. Burst pipes, sewage
                backups, gas line issues, major water leaks, and complete loss of
                water supply are all plumbing emergencies that need immediate
                professional attention. If you are unsure whether your situation
                qualifies, call a licensed plumber. It is always better to check
                than to wait.
              </p>
              <p className="mt-4 text-base leading-7 text-brand-dark/70">
                This page covers emergency plumbing specific to Las Vegas. For a
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

        {/* SECTION 4: COMMON EMERGENCY PROBLEMS IN LAS VEGAS */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10 lg:pb-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Common Emergency Plumbing Problems in Las Vegas
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Las Vegas homes face plumbing risks that are specific to the
                    desert Southwest. Here are the most common emergency plumbing
                    situations we handle in Las Vegas.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-10">
                <ul className="space-y-5">
                  {LAS_VEGAS_EMERGENCY_PROBLEMS.map((p) => (
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
                  Have a Plumbing Emergency in Las Vegas Right Now?
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/90">
                  Do not wait on an active leak or backup. Call Red Carpet
                  Plumbing and speak with a licensed plumber about your Las Vegas
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
                Emergency Plumbing Services We Provide in Las Vegas
              </h2>
            </div>
            <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {LAS_VEGAS_EMERGENCY_SERVICES.map((s) => (
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
                    How We Handle an Emergency Plumbing Call in Las Vegas
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
                Why Las Vegas Homeowners and
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

        {/* SECTION 9: SERVICE AREAS */}
        <section className="bg-brand-charcoal text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="max-w-3xl text-left">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Emergency Plumbing Service Areas Near Las Vegas
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/85">
                Red Carpet Plumbing responds to plumbing emergencies throughout
                Las Vegas and the surrounding Las Vegas Valley. We also serve
                Henderson, North Las Vegas, Paradise, Summerlin, Spring Valley,
                Enterprise, Boulder City, Green Valley, and Lake Las Vegas.
              </p>
            </div>
            <div className="mt-10 text-left">
              <Link
                href="/service-areas/"
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-brand-charcoal shadow-sm transition-colors hover:bg-brand-surface-alt focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-safe:transition-transform motion-safe:active:scale-[0.97]"
              >
                Las Vegas Valley service areas
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 10: RELATED SERVICES */}
        {/* TODO-BATCH-5: replace these core-service links with the */}
        {/* location-specific /las-vegas/[service]/ children once built */}
        {/* (drain-cleaning, leak-detection-repair, water-heater-repair-installation, */}
        {/* slab-leak-detection-repair, sewer-line-services). */}
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
                <br className="hidden sm:block" /> for Las Vegas Homeowners
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {LAS_VEGAS_EMERGENCY_FAQS.map((faq) => (
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
          headline={<>Need an Emergency Plumber<br />in Las Vegas?</>}
          body="Do not wait on a plumbing emergency. Call Red Carpet Plumbing at (702) 567-9172 or request service online. We serve homes and businesses throughout the Las Vegas Valley."
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
