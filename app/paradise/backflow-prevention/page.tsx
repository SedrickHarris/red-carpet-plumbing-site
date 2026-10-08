// FLAG: VERIFY before publishing:
// - Telephone +17025679172: project-established value; confirm before launch.
// - License #0048585A, C-1 Plumbing and Heating: project-established value;
//   confirm before launch.
// - "Transparent pricing with no hidden fees": source-site claim; confirm
//   before launch.
// - "4.8-star rated" in the hero subheading: visible text only, matching the
//   sibling pages. Deliberately NOT expressed as rating or review schema: no
//   verified review count or source has been provided.
// - Backflow tester certification is NOT confirmed. This page never claims Red
//   Carpet Plumbing performs annual backflow testing. Also verify the
//   documentation step, FAQ 3 "next steps" wording, the C-1 installation
//   authority, and the irrigation, RPZ, DCVA and pressure vacuum breaker
//   statements, and the irrigation-on-Paradise-properties statement (cause card 2).
// FLAG comments appear only in source. No FLAG text appears in any visible
// string or schema text.
//
// VERIFY BEFORE PUBLISHING: Confirm Red Carpet Plumbing holds current Nevada
// Backflow Prevention Assembly Tester certification before launching this page.
// Testing language in this file is informational context for the property
// owner and does NOT claim Red Carpet Plumbing performs annual testing unless
// certification is confirmed. No water provider is named because the
// Paradise program is not verified.
// FLAG text carried forward from the Las Vegas backflow page. Do not remove
// or reduce this note.
//
// Paradise service-location schema pattern (matches the Paradise sewer line
// page): Plumber provider with telephone; areaServed Place (Paradise)
// containedInPlace AdministrativeArea (Clark County) containedInPlace State
// (Nevada), per the Batch 6 normalization; no social profile links, no
// credential node, no rating or review schema, no ZIP data.
// 5 separate JsonLd blocks in order WebPage, BreadcrumbList, Service, HowTo,
// FAQPage. HowTo and FAQPage derive from the same consts that render visibly,
// so schema text and page text cannot drift apart.
//
// Hero uses the shared Backflow Prevention service hero asset, also used by the core
// page and the other city variants. No city-specific image exists.

import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { HeroSection } from "@/components/HeroSection";
import { JsonLd } from "@/components/JsonLd";
import { QuoteFormPlaceholder } from "@/components/QuoteFormPlaceholder";
import { SectionReveal, SectionRevealItem } from "@/components/SectionReveal";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";

export const metadata: Metadata = {
  // FLAG: VERIFY license #0048585A in the description before publishing.
  title: "Backflow Prevention Services in Paradise, NV | Red Carpet Plumbing",
  description:
    "Backflow preventer installation, repair, and replacement in Paradise, NV. Irrigation and commercial devices. NV #0048585A. Call (702) 567-9172.",
  alternates: {
    canonical: "https://redcarpetplumbing.com/paradise/backflow-prevention/",
  },
  openGraph: {
    title: "Backflow Prevention Services in Paradise, NV | Red Carpet Plumbing",
    description:
      "Backflow preventer installation, repair, and replacement in Paradise, NV. Irrigation and commercial devices. NV #0048585A. Call (702) 567-9172.",
    url: "https://redcarpetplumbing.com/paradise/backflow-prevention/",
    siteName: "Red Carpet Plumbing",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

type LinkSeg = string | { href: string; text: string };

// FLAG: VERIFY "4.8-star rated" before publishing. Visible text only, not in schema.
const HERO_SUBHEADING =
  "Red Carpet Plumbing installs, repairs, and replaces backflow prevention devices for homes and businesses throughout Paradise, NV. Irrigation backflow preventers, commercial assemblies for properties near the Strip corridor, and help after a failed test or compliance notice. Licensed plumbers, 4.8-star rated. Call (702) 567-9172.";

const HERO_TRUST_ITEMS = [
  // FLAG: VERIFY license #0048585A before publishing.
  "NV Licensed, #0048585A",
  "Backflow Device Installation and Repair",
  "Residential and Commercial Properties",
  // FLAG: VERIFY transparent pricing claim before publishing.
  "Transparent Pricing, No Hidden Fees",
];

// Direct answer.
const DIRECT_ANSWER = {
  heading: "Backflow Prevention in Paradise, and What It Means for Your Property",
  p1: "A backflow preventer protects the public water supply by stopping water from flowing backward into it. Paradise properties with irrigation systems, fire suppression connections, or commercial plumbing commonly need one. Red Carpet Plumbing assesses your property, then installs, repairs, or replaces the device. Call (702) 567-9172 to schedule an assessment.",
  // FLAG: VERIFY license #0048585A before publishing.
  // FLAG: VERIFY transparent pricing claim before publishing.
  p2: "Red Carpet Plumbing is a Nevada C-1 licensed plumbing contractor (#0048585A). We explain what your property needs before work begins and provide transparent pricing with no hidden fees.",
  p3: "Need backflow service in Paradise? Same-day service is available, subject to scheduling. Call (702) 567-9172 to get on the schedule.",
};

// Problems list.
const PROBLEMS_HEADING = "Signs You May Need Backflow Service in Paradise";
const PROBLEMS_INTRO = "If any of the following applies to your property, contact a licensed plumber for an assessment.";
const PROBLEMS = [
  "A compliance or testing notice from your water provider",
  "A backflow device that failed its annual test",
  // FLAG: VERIFY irrigation, RPZ, DCVA and pressure vacuum breaker statements before publishing.
  "An irrigation system with no backflow preventer on its supply line",
  "A device that leaks, discharges water, or is damaged or corroded",
  "A commercial, multi-unit, or fire suppression connection that has not been assessed",
  "An older device that may need to be replaced with a current approved assembly",
];

// Local causes (H3 article cards).
const CAUSES_HEADING = "Why Paradise Properties Need Backflow Protection";
const CAUSES_INTRO: LinkSeg[] = ["For an overview of backflow prevention across the Las Vegas Valley, visit our ", { href: "/backflow-prevention/", text: "backflow prevention services" }, " page."];
const CAUSES: { title: string; body: string; tail?: LinkSeg[] }[] = [
  // FLAG: VERIFY irrigation, RPZ, DCVA and pressure vacuum breaker statements before publishing.
  {
    title: "Commercial, Multi-Unit, and Fire Suppression Connections",
    body: "Paradise includes restaurants, retail, mixed-use properties, and multi-unit residential buildings near the Strip corridor and along Tropicana and Flamingo. Commercial properties, multi-unit buildings, and properties with fire suppression connections usually need a containment device, and the type depends on the level of hazard. Higher-hazard connections generally call for a reduced pressure zone (RPZ) assembly, and moderate-hazard connections may use a double check valve assembly (DCVA).",
    tail: [" For commercial plumbing service, see our ", { href: "/paradise/commercial-plumbing/", text: "commercial plumbing in Paradise" }, " page."],
  },
  // FLAG: VERIFY irrigation-on-Paradise-properties statement before publishing.
  // FLAG: VERIFY irrigation, RPZ, DCVA and pressure vacuum breaker statements before publishing.
  {
    title: "Irrigation Systems and Cross-Connection Risk",
    body: "Many Paradise properties have landscape irrigation, including multi-unit properties and commercial landscaping. An irrigation line connects the drinking water supply to soil, fertilizer, and standing water, so a pressure vacuum breaker or similar device is commonly installed to prevent water from flowing backward into the supply.",
  },
  {
    title: "Notices, Testing, and Failed Devices",
    body: "Backflow devices are generally tested on a schedule by a certified tester, and results go to the local water provider. If your provider sends a notice, or a device fails its test, repair or replacement is typically needed before the property is back in compliance. Your notice and your water provider set the rules that apply to your property.",
  },
];

// Services (H3 article cards).
const SERVICES_HEADING = "Backflow Prevention Services in Paradise";
const SERVICES_INTRO = "Red Carpet Plumbing provides backflow device installation, repair, and replacement for Paradise homes and businesses.";
const SERVICES: { title: string; body: string; tail?: LinkSeg[] }[] = [
  // FLAG: VERIFY irrigation, RPZ, DCVA and pressure vacuum breaker statements before publishing.
  {
    title: "Backflow Preventer Installation",
    body: "Installation of backflow prevention devices for residential irrigation systems, commercial properties, and fire suppression connections.",
  },
  // FLAG: VERIFY irrigation, RPZ, DCVA and pressure vacuum breaker statements before publishing.
  {
    title: "Irrigation System Backflow Protection",
    body: "Pressure vacuum breaker installation for residential and commercial irrigation systems, to meet your water provider's cross-connection requirements.",
  },
  {
    title: "Commercial Backflow Prevention",
    body: "Containment backflow prevention device installation and repair for commercial properties, multi-unit buildings, and high-hazard connections.",
  },
  {
    title: "Backflow Device Repair",
    body: "Repair of failed or malfunctioning backflow prevention assemblies, including devices that failed a test.",
  },
  {
    title: "Backflow Device Replacement",
    body: "Replacement of outdated, failed, or non-compliant backflow prevention devices with current approved assemblies.",
  },
  {
    title: "Backflow Compliance Assessment",
    body: "Assessment of your property to determine backflow prevention needs, identify missing or non-compliant devices, and plan the installation or repair.",
  },
];

// Repair or replace (two H3 blocks).
const DECISION_HEADING = "Repair or Replace a Backflow Device: What Makes Sense for Your Paradise Property?";
const DECISION_BLOCKS: { title: string; body: string }[] = [
  {
    title: "When repair is the right choice",
    body: "Repair is usually the practical choice when the device is a current approved type and a worn internal part, seal, or valve is the cause of a failed test or a leak. A repaired device still has to pass its test before the property is back in compliance.",
  },
  {
    title: "When replacement makes more sense",
    body: "Replacement is the better option when the device is outdated, damaged, corroded, or no longer approved, or when the same device keeps failing. We explain what we found and the options, and you approve the work before anything is done.",
  },
];

// Mid-page CTA band (charcoal).
const MID_CTA = {
  headline: "Backflow Question at Your Paradise Property?",
  body: "Red Carpet Plumbing handles backflow device installation, repair, and replacement throughout Paradise. Call now and describe your situation, or request service online.",
};

// Process. Single source for the visible steps and the HowTo schema.
const PROCESS_HEADING = "How We Handle Backflow Prevention Service in Paradise";
const PROCESS_INTRO = "This is our standard process for backflow prevention service in Paradise.";
const PROCESS_STEPS: { name: string; body: string }[] = [
  {
    name: "Call and describe your situation.",
    body: "Call Red Carpet Plumbing at (702) 567-9172 and describe your backflow need. Whether you have received a compliance notice, need a new device installed, or have a device that needs repair or replacement, we can schedule a licensed plumber to assess your property.",
  },
  {
    name: "Property assessment and device review.",
    body: "A licensed plumber inspects the existing backflow setup or assesses where a new device is needed. We identify the appropriate device type based on the connection, the hazard level, and your water provider's requirements.",
  },
  {
    name: "Review options and approve the work.",
    body: "We explain what device is needed or what repair is required, and what the installation or repair involves. You approve the scope before any work begins.",
  },
  // FLAG: VERIFY documentation step wording before publishing.
  {
    name: "Installation or repair with documentation.",
    body: "Our licensed plumber installs or repairs the device following local code requirements. We document the work completed for your records.",
  },
];

// Why choose.
const WHY_CHOOSE_HEADING = "Why Paradise Property Owners Choose Red Carpet Plumbing";
const WHY_CHOOSE_ITEMS = [
  // FLAG: VERIFY license #0048585A before publishing.
  "Licensed Nevada plumbers, NV License #0048585A, C-1 Plumbing and Heating",
  "Residential and commercial backflow device installation, repair, and replacement",
  "Familiar with Paradise's commercial corridors and multi-unit properties",
  "Clear options explained before work begins",
  // FLAG: VERIFY transparent pricing claim before publishing.
  "Transparent pricing with no hidden fees",
];

// Areas. Chips are plain text; cross-links are in the paragraph.
const AREAS_HEADING = "Backflow Prevention Across Paradise";
const AREAS_INTRO = "Red Carpet Plumbing provides backflow prevention service throughout Paradise, including residential neighborhoods and commercial properties near the Strip corridor. Call (702) 567-9172 to confirm coverage for your address.";
const AREA_CHIPS = [
  "Strip Corridor",
  "University District / UNLV Area",
  "Tropicana Avenue Corridor",
  "Flamingo Road Corridor",
  "Airport Corridor",
  "Paradise Road Area",
  "Eastern Corridor",
  "Residential Paradise",
];
const AREAS_CROSS_LINKS: LinkSeg[] = ["We also provide backflow prevention in ", { href: "/las-vegas/backflow-prevention/", text: "Las Vegas" }, ". For every service we offer in your community, visit our ", { href: "/paradise-plumbing-services/", text: "Paradise plumbing services" }, " page."];

// FAQs. Single source for the visible accordion and the FAQPage schema.
const FAQS: { question: string; answer: string }[] = [
  // FLAG: VERIFY irrigation, RPZ, DCVA and pressure vacuum breaker statements before publishing.
  {
    question: "What is a backflow preventer?",
    answer: "A backflow preventer is a device on your water supply line that stops water from flowing backward into the public water supply. Without one, contaminants from irrigation systems, fire suppression lines, or commercial equipment could be drawn into clean drinking water.",
  },
  // FLAG: VERIFY irrigation, RPZ, DCVA and pressure vacuum breaker statements before publishing.
  {
    question: "Who needs a backflow preventer in Paradise?",
    answer: "Requirements come from your water provider and local code, and they depend on the connection. Properties with irrigation systems, fire suppression connections, commercial plumbing, or multi-unit buildings commonly need one. If you received a notice, a licensed plumber can assess your property.",
  },
  // FLAG: VERIFY 'can help with next steps' wording; tester certification is not confirmed.
  {
    question: "How often does a backflow preventer need to be tested?",
    answer: "Most regulated devices need periodic testing by a certified tester, commonly once a year, with results sent to the water provider. Your provider's notice sets the schedule for your property. Red Carpet Plumbing installs, repairs, and replaces devices and can help with next steps after a failed test.",
  },
  {
    question: "What happens if my backflow preventer fails a test?",
    answer: "A failed test means the device is not protecting the water supply as required. Repair or replacement is typically needed before the property is back in compliance. A licensed plumber can tell you whether the device can be repaired or needs to be replaced.",
  },
  // FLAG: VERIFY irrigation, RPZ, DCVA and pressure vacuum breaker statements before publishing.
  {
    question: "Do I need a backflow preventer for my irrigation system?",
    answer: "In most cases, yes. An irrigation line connects your drinking water to soil and fertilizer, so a device such as a pressure vacuum breaker is commonly required. If your system has none, a licensed plumber can assess it and install the right device.",
  },
  // FLAG: VERIFY irrigation, RPZ, DCVA and pressure vacuum breaker statements before publishing.
  {
    question: "Does Red Carpet Plumbing install backflow preventers in Paradise?",
    answer: "Yes. Red Carpet Plumbing installs, repairs, and replaces backflow prevention devices for Paradise homes and businesses, including irrigation devices and commercial containment assemblies. Call (702) 567-9172 and describe your property so we can schedule an assessment.",
  },
  {
    question: "Do you offer same-day backflow prevention service in Paradise?",
    answer: "Same-day backflow prevention service is available in Paradise, subject to scheduling. Call (702) 567-9172 to check same-day availability for your address. When you call, tell us whether you have a notice, a failed device, or a new installation, so we can schedule the right visit.",
  },
];

// Related services.
const RELATED_SERVICES: { label: string; href: string }[] = [
  {
    label: "Commercial Plumbing in Paradise",
    href: "/paradise/commercial-plumbing/",
  },
  {
    label: "Leak Detection and Repair in Paradise",
    href: "/paradise/leak-detection-repair/",
  },
  {
    label: "Drain Cleaning in Paradise",
    href: "/paradise/drain-cleaning/",
  },
  {
    label: "Backflow Prevention Services (all of the Las Vegas Valley)",
    href: "/backflow-prevention/",
  },
];

// Final CTA.
const FINAL_CTA = {
  headline: "Backflow Question in Paradise? We Can Help.",
  // FLAG: VERIFY transparent pricing claim before publishing.
  body: "Red Carpet Plumbing provides backflow device assessment, installation, repair, and replacement for Paradise homes and businesses. Transparent pricing and licensed plumbers.",
};

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Backflow Prevention Services in Paradise, NV | Red Carpet Plumbing",
  description:
    "Backflow preventer installation, repair, and replacement in Paradise, NV. Irrigation and commercial devices. NV #0048585A. Call (702) 567-9172.",
  url: "https://redcarpetplumbing.com/paradise/backflow-prevention/",
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
      name: "Paradise Plumbing Services",
      item: "https://redcarpetplumbing.com/paradise-plumbing-services/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Backflow Prevention Services in Paradise, NV",
      item: "https://redcarpetplumbing.com/paradise/backflow-prevention/",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Backflow Prevention",
  serviceType: "Backflow Prevention",
  // FLAG: VERIFY license #0048585A in the description before publishing.
  description:
    "Red Carpet Plumbing provides backflow preventer installation, irrigation backflow protection, commercial backflow prevention, device repair and replacement, and compliance assessment for homes and businesses in Paradise, NV. Nevada Contractor License #0048585A.",
  provider: {
    "@type": "Plumber",
    name: "Red Carpet Plumbing",
    url: "https://redcarpetplumbing.com",
    // FLAG: VERIFY telephone before publishing.
    telephone: "+17025679172",
  },
  areaServed: {
    "@type": "Place",
    name: "Paradise",
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: "Clark County",
      containedInPlace: {
        "@type": "State",
        name: "Nevada",
      },
    },
  },
};

// HowTo schema included because the process section renders the matching visible
// numbered steps. Derived from PROCESS_STEPS so the schema text always matches the page text.
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How We Handle Backflow Prevention Service in Paradise",
  description: "The process Red Carpet Plumbing follows for backflow prevention service in Paradise, NV.",
  step: PROCESS_STEPS.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.name,
    text: s.body,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const LINK_CLASS =
  "font-semibold text-brand-dark underline hover:text-brand-dark/70";
const LINK_CLASS_ON_DARK =
  "font-semibold text-white underline underline-offset-4 hover:text-white/80";

function renderTail(tail: LinkSeg[], className: string = LINK_CLASS) {
  return tail.map((seg, i) =>
    typeof seg === "string" ? (
      seg
    ) : (
      <Link key={i} href={seg.href} className={className}>
        {seg.text}
      </Link>
    ),
  );
}

export default function ParadiseBackflowPage() {
  return (
    <>
      <JsonLd data={webpageSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={howToSchema} />
      <JsonLd data={faqSchema} />

      <SiteHeader />

      <main id="main" className="flex-1 bg-white">
        {/* SECTION 1: HERO */}
        <HeroSection
          breadcrumbs={<Breadcrumbs trail={[
            { label: "Home", href: "/" },
            {
              label: "Paradise Plumbing Services",
              href: "/paradise-plumbing-services/",
            },
            { label: "Backflow Prevention Services in Paradise, NV" },
          ]} variant="dark" />}
          headingLevel="h1"
          headline={
            <>
              Backflow Prevention Services
              <br /> in Paradise, NV
            </>
          }
          subheading={HERO_SUBHEADING}
          trustItems={HERO_TRUST_ITEMS}
          primaryCTA={{
            label: "Call Now: (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{
            label: "Request Service",
            href: "/contact/",
          }}
          // FLAG: VERIFY transparent pricing claim before publishing.
          ctaNote="Licensed plumbers. Transparent pricing. No hidden fees."
          formSlot={<QuoteFormPlaceholder title="Get Backflow Help" />}
          backgroundImage={{
            src: "/images/services/backflow-prevention/red-carpet-plumbing-las-vegas-backflow-prevention-hero.webp",
            alt: "Backflow Prevention Services in Paradise, NV",
          }}
        />

        {/* SECTION 2: DIRECT ANSWER */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="rounded-2xl border-l-4 border-brand-primary bg-brand-surface-alt p-6 sm:p-8">
              <h2 className="text-2xl tracking-tight text-brand-dark sm:text-3xl">
                {DIRECT_ANSWER.heading}
              </h2>
              <p className="mt-4 text-lg leading-8 text-brand-dark/80">
                {DIRECT_ANSWER.p1}
              </p>
              <p className="mt-4 text-base leading-7 text-brand-dark/80">
                {DIRECT_ANSWER.p2}
              </p>
              <p className="mt-4 text-base leading-7 text-brand-dark/80">
                {DIRECT_ANSWER.p3}
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: PROBLEMS */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10 lg:pb-24">
            <div className="text-left">
              <h2 className="text-3xl tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                {PROBLEMS_HEADING}
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                {PROBLEMS_INTRO}
              </p>
            </div>
            <div className="mt-8 rounded-2xl border-l-4 border-brand-primary bg-brand-surface-alt p-6 sm:p-8">
              <ul className="space-y-3">
                {PROBLEMS.map((problem) => (
                  <li key={problem} className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-2 inline-block h-2 w-2 flex-none rounded-full bg-brand-primary"
                    />
                    <span className="text-base leading-7 text-brand-dark/80">
                      {problem}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 4: LOCAL CAUSES */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                {CAUSES_HEADING}
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                {renderTail(CAUSES_INTRO)}
              </p>
            </div>
            <div className="mt-10 space-y-6">
              {CAUSES.map((c) => (
                <article
                  key={c.title}
                  className="rounded-2xl bg-white p-6 ring-1 ring-brand-surface-alt sm:p-8"
                >
                  <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-brand-dark/80">
                    {c.body}
                    {c.tail ? renderTail(c.tail) : null}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: SERVICES */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                {SERVICES_HEADING}
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                {SERVICES_INTRO}
              </p>
            </div>
            <div className="mt-10 space-y-6">
              {SERVICES.map((s) => (
                <article
                  key={s.title}
                  className="rounded-2xl bg-brand-surface-alt p-6 ring-1 ring-brand-surface-alt sm:p-8"
                >
                  <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-brand-dark/80">
                    {s.body}
                    {s.tail ? renderTail(s.tail) : null}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6: REPAIR OR REPLACE */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="text-left">
              <h2 className="text-3xl tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                {DECISION_HEADING}
              </h2>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
              {DECISION_BLOCKS.map((d) => (
                <article
                  key={d.title}
                  className="rounded-2xl bg-white p-6 ring-1 ring-brand-surface-alt sm:p-8"
                >
                  <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                    {d.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-brand-dark/80">
                    {d.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6B: MID-PAGE CTA */}
        <section className="bg-brand-charcoal text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl tracking-tight text-white sm:text-4xl lg:text-5xl">
                  {MID_CTA.headline}
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/90">
                  {MID_CTA.body}
                </p>
              </div>
              <div className="flex flex-col items-start gap-4 lg:items-end">
                <Button href="tel:+17025679172" variant="inverse" size="2xl">
                  Call Now: (702) 567-9172
                </Button>
                <Button href="/contact/" variant="inverse-outline" size="lg">
                  Request Service
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: PROCESS (HowTo) */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    {PROCESS_HEADING}
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    {PROCESS_INTRO}
                  </p>
                </div>
              </SectionRevealItem>
              <SectionRevealItem className="mt-12">
                <ol className="space-y-8">
                  {PROCESS_STEPS.map((step, index) => (
                    <li key={step.name} className="flex items-start gap-4">
                      <span
                        aria-hidden="true"
                        className="inline-flex h-12 w-12 flex-none items-center justify-center rounded-full bg-brand-dark text-lg font-semibold text-white"
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

        {/* SECTION 8: WHY CHOOSE RED CARPET PLUMBING */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="text-left">
              <h2 className="text-3xl tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                {WHY_CHOOSE_HEADING}
              </h2>
            </div>
            <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {WHY_CHOOSE_ITEMS.map((item) => (
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

        {/* SECTION 9: AREAS */}
        <section className="bg-brand-charcoal text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="max-w-3xl text-left">
              <h2 className="text-3xl tracking-tight sm:text-4xl lg:text-5xl">
                {AREAS_HEADING}
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/85">
                {AREAS_INTRO}
              </p>
            </div>

            <ul className="mt-10 flex flex-wrap gap-3">
              {AREA_CHIPS.map((name) => (
                <li key={name}>
                  <span className="block rounded-lg border border-white/10 bg-white/5 px-5 py-3 font-medium text-white/85">
                    {name}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/85">
              {renderTail(AREAS_CROSS_LINKS, LINK_CLASS_ON_DARK)}
            </p>
          </div>
        </section>

        {/* SECTION 10: FAQ */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Frequently Asked Questions
                <br className="hidden sm:block" /> About Backflow Prevention in Paradise, NV
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {FAQS.map((faq) => (
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

        {/* SECTION 11: RELATED SERVICES */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="text-left">
              <h2 className="text-3xl tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Related Plumbing Services
              </h2>
            </div>
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {RELATED_SERVICES.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="flex items-center gap-2 rounded-lg bg-brand-surface-alt px-4 py-3 text-base font-medium text-brand-dark ring-1 ring-brand-surface-alt transition hover:text-brand-dark/70 hover:shadow-md"
                  >
                    <span aria-hidden="true" className="text-brand-dark">
                      &rarr;
                    </span>
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 12: FINAL CTA */}
        <CTASection
          background="red"
          headline={FINAL_CTA.headline}
          body={FINAL_CTA.body}
          primaryCTA={{
            label: "Call Now: (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{
            label: "Request Service",
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
      className="mt-1 h-5 w-5 flex-none text-brand-dark"
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
