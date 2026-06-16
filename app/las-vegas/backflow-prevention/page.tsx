// VERIFY BEFORE PUBLISHING: Confirm Red Carpet Plumbing holds current Nevada
// Backflow Prevention Assembly Tester certification before launching this page.
// Annual testing language in this file is informational context for the property
// owner (LVVWD compliance obligation) and does NOT claim Red Carpet Plumbing
// performs annual testing unless certification is confirmed.
// FLAG text carried forward from core /backflow-prevention/page.tsx.
// Do not remove or reduce this note.

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

// ---------------------------------------------------------------------------
// Active FLAGs for this page (source-only; none appear in rendered strings or
// schema text fields):
//   - telephone (+17025679172) in serviceSchema.provider — VERIFY before launch.
//   - Tester certification: every annual-testing reference is informational
//     (property-owner obligation, performed by "a certified tester"); the page
//     never claims Red Carpet Plumbing performs annual testing. Confirm Nevada
//     Backflow Prevention Assembly Tester certification before any testing
//     service is advertised. FLAG comments mark each annual-testing reference.
//   - "Transparent Pricing, No Hidden Fees" trust items + Why-Choose bullet —
//     source-site claims, VERIFY.
//   - License #0048585A / C-1 classification — verified business claim; C-1
//     authorizes device installation (distinct from tester certification).
//
// Las Vegas cluster pattern: 5 separate JsonLd blocks WebPage -> BreadcrumbList
// -> Service -> HowTo -> FAQPage. areaServed `City` (Las Vegas) -> `State`
// (Nevada). BreadcrumbList = 3 items. No AggregateRating / Review. HowTo +
// FAQPage derive from a single const. Hero trustItems + separate red trust band.
// Info blocks, factors, and services render as H3 article cards.
//
// Hero uses backflow-prevention/hero.webp (308KB; the only asset — no card.webp).
// Service provider includes a PostalAddress per the approved P52 Service schema.
// The serviceSchema description claims installation/repair/replacement only — it
// does NOT claim annual testing.
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title: "Backflow Prevention Services in Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing installs, repairs, and services backflow prevention devices for homes and businesses in Las Vegas, NV. LVVWD compliance. Irrigation PVB installation. NV #0048585A. Call (702) 567-9172.",
  alternates: {
    canonical: "https://redcarpetplumbing.com/las-vegas/backflow-prevention/",
  },
  openGraph: {
    title:
      "Backflow Prevention Services in Las Vegas, NV | Red Carpet Plumbing",
    description:
      "Licensed backflow prevention installation and repair in Las Vegas. LVVWD compliance, irrigation PVB, RPZ, DCVA. NV C-1 License #0048585A.",
    url: "https://redcarpetplumbing.com/las-vegas/backflow-prevention/",
    siteName: "Red Carpet Plumbing",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

type LinkSeg = string | { href: string; text: string };

// ---------------------------------------------------------------------------
// FAQ source of truth. The visible FAQ section AND the FAQPage JSON-LD schema
// both derive from this single array, guaranteeing a character-for-character
// match. Do not edit one without the other.
//
// FLAG: VERIFY — FAQ Q3 references annual testing. This is informational context
// about the property owner's LVVWD obligation (testing "performed by a certified
// backflow tester"). It does NOT claim Red Carpet Plumbing performs annual
// testing. Confirm tester certification before this page goes live.
// ---------------------------------------------------------------------------
const LV_BACKFLOW_FAQS = [
  {
    question: "What is a backflow preventer?",
    answer:
      "A backflow preventer is a plumbing device installed on your water supply line to stop water from flowing backward into the public water supply. Backflow can occur when pressure drops or reverses in the supply line, potentially allowing contaminants from irrigation systems, fire suppression lines, or commercial plumbing to enter clean drinking water. Backflow preventers are required on many residential and commercial properties in Las Vegas and throughout Clark County.",
  },
  {
    question: "Who is required to have a backflow preventer in Las Vegas?",
    answer:
      "The Las Vegas Valley Water District and local municipalities require backflow prevention devices on properties with irrigation systems, fire suppression connections, commercial plumbing, multi-unit buildings, and any connection that poses a cross-connection risk to the public water supply. Requirements vary by property type and connection. If you have received a compliance notice from LVVWD or your local water authority, a licensed plumber can assess your property and install the appropriate device.",
  },
  {
    // FLAG: VERIFY — annual testing reference; informational property-owner
    // obligation, testing performed by a certified tester (not Red Carpet
    // Plumbing) until tester certification is confirmed.
    question: "How often do backflow preventers need to be tested in Las Vegas?",
    answer:
      "Annual testing is required for most backflow prevention assemblies in Las Vegas and surrounding municipalities. The Las Vegas Valley Water District requires annual testing for containment assemblies. The City of North Las Vegas operates a formal backflow program and notifies account holders when devices are due. Testing must be performed by a certified backflow tester and results submitted to the local water authority. Failing to test on schedule can result in notices of violation and risk water service disruption.",
  },
  {
    question: "What happens if my backflow preventer fails a test?",
    answer:
      "A failed test means your backflow prevention device is not functioning correctly and is not protecting the water supply as required. Once a device fails, repair or replacement is typically required before the property can be brought back into compliance. A licensed plumber can assess whether the device can be repaired or needs to be replaced, and can coordinate the follow-up certification process.",
  },
  {
    question: "What types of backflow preventers are used in Las Vegas?",
    answer:
      "Common backflow prevention devices in Las Vegas include reduced pressure zone assemblies, which provide the highest level of protection and are required for high-hazard connections including fire suppression systems. Double check valve assemblies are used for moderate-hazard applications. Pressure vacuum breakers are commonly installed on residential irrigation systems. The appropriate device depends on the type of connection, the level of hazard, and the requirements of the local water authority.",
  },
  {
    question:
      "Do I need a backflow preventer for my irrigation system in Las Vegas?",
    answer:
      "Yes, in most cases. Residential irrigation systems in Las Vegas are among the most common applications requiring a backflow preventer because the irrigation line creates a direct cross-connection between the water supply and potentially contaminated soil or fertilizer. Pressure vacuum breakers are the most common backflow device installed on residential irrigation systems in Clark County. If your irrigation system does not have a backflow preventer, contact a licensed plumber to assess and install the appropriate device.",
  },
];

// ---------------------------------------------------------------------------
// Process steps — HowTo schema source of truth. Visible numbered steps and the
// HowTo JSON-LD both derive from this array. (Step 4 documents the install/repair
// completed; it is not an annual-testing claim.)
// ---------------------------------------------------------------------------
const LV_BACKFLOW_STEPS = [
  {
    name: "Call and describe your situation",
    body: "Call Red Carpet Plumbing at (702) 567-9172 and describe your backflow prevention need. Whether you have received a compliance notice, need a new device installed, or have a device that needs repair or replacement, we can schedule a licensed plumber to assess your property.",
  },
  {
    name: "Property assessment and device review",
    body: "A licensed plumber inspects the existing backflow prevention setup or assesses where a new device is needed. We identify the appropriate device type based on the connection, hazard level, and local authority requirements.",
  },
  {
    name: "Review options and approve the work",
    body: "We explain what device is needed or what repair is required, and what the installation or repair involves. You approve the scope before any work begins.",
  },
  {
    name: "Installation or repair with compliance documentation",
    body: "Our licensed plumber installs or repairs the backflow prevention device following local code requirements. We document the work completed for your compliance records.",
  },
];

// FLAG: VERIFY before publishing — license number, C-1 classification, and
// transparent pricing are source-site claims. The Why-Choose list claims
// installation/assessment/repair/replacement only (no annual testing); confirm
// tester certification before advertising annual testing as a service.
const WHY_CHOOSE = [
  "Local Las Vegas plumbing company familiar with LVVWD backflow compliance requirements and Clark County cross-connection control rules",
  "Licensed plumbers (NV License #0048585A, C-1 Plumbing and Heating) authorized for backflow device installation",
  "Residential and commercial backflow prevention service throughout Las Vegas",
  "Full service: assessment, installation (PVB, DCVA, RPZ), repair, replacement, and compliance documentation",
  "Transparent pricing with no hidden fees",
];

// Red brand-primary trust band (Section 2).
const LV_BACKFLOW_TRUST_STRIP = [
  "NV Licensed Plumbers, #0048585A",
  "Backflow Device Installation and Service",
  "Serving Las Vegas and the Valley",
  "Transparent Pricing, No Hidden Fees",
];

const LV_BACKFLOW_NEIGHBORHOODS = [
  "Downtown Las Vegas",
  "Desert Inn / West Sahara",
  "Desert Shores",
  "Sunrise Manor",
  "Whitney",
  "Winchester",
  "Southwest Las Vegas",
  "Spring Valley Adjacent",
  "Summerlin Adjacent",
  "Eastern Las Vegas",
];

// ---------------------------------------------------------------------------
// Section 3 — backflow prevention information blocks (H3 article cards).
// ---------------------------------------------------------------------------
const LV_BACKFLOW_INFO_BLOCKS = [
  {
    title: "What is backflow and why does it matter?",
    body: "Backflow occurs when water flows backward through a plumbing connection, reversing from its intended direction. This can happen when pressure drops suddenly in the supply line, creating suction that pulls water backward. Without a properly functioning backflow preventer, contaminants from irrigation systems, commercial equipment, or other cross-connections can enter the clean water supply. Las Vegas Valley Water District and local municipalities require backflow prevention devices on properties where cross-connection risk exists.",
  },
  {
    title: "When is a backflow preventer required in Las Vegas?",
    body: "The Las Vegas Valley Water District and local municipalities require backflow prevention devices on properties with irrigation systems, fire suppression connections, commercial plumbing connections, and any configuration that creates a cross-connection risk. Requirements vary by property type and connection type. If you have received a compliance notice from LVVWD or your local water authority, a licensed plumber can assess your property and install the appropriate device.",
  },
  {
    // FLAG: VERIFY — annual testing block; informational property-owner
    // obligation (testing scheduled with "a certified tester"). Not a Red Carpet
    // Plumbing testing-service claim until tester certification is confirmed.
    title: "Annual testing requirements in Las Vegas",
    body: "LVVWD requires annual testing of backflow prevention assemblies for most regulated properties in its service area. Property owners are responsible for scheduling testing with a certified tester, ensuring devices pass, and maintaining compliance records. Failure to complete required annual testing can result in notices of violation and risk of water service interruption.",
  },
  {
    title: "What happens if a device fails a test?",
    body: "A failed backflow test means the device is not protecting the water supply as required. Repair or replacement is typically necessary to restore compliance. A licensed plumber can assess whether the failed device can be repaired or needs to be replaced and can coordinate the process. Red Carpet Plumbing handles backflow device repair and replacement for Las Vegas properties following a failed annual test.",
  },
];

// ---------------------------------------------------------------------------
// Section 4 — Las Vegas backflow context (H3 article cards). The commercial
// factor carries a commercial-plumbing link per the approved copy.
// ---------------------------------------------------------------------------
const LV_BACKFLOW_FACTORS: { title: string; body: string; tail?: LinkSeg[] }[] =
  [
    {
      // FLAG: VERIFY — annual testing reference; informational property-owner
      // obligation. Red Carpet Plumbing "coordinates next steps," does not
      // perform testing until tester certification is confirmed.
      title: "LVVWD annual testing requirements",
      body: "The Las Vegas Valley Water District requires annual testing of backflow prevention assemblies for most regulated properties in its service area. Property owners are responsible for scheduling testing, ensuring devices pass, and maintaining compliance records. Failure to complete required annual testing can result in notices of violation and risk of water service interruption. If your property has a backflow preventer that has not been tested recently or you have received a compliance notice from LVVWD, a licensed plumber can assess the device and coordinate the appropriate next steps.",
    },
    {
      // FLAG: VERIFY — references the North Las Vegas annual inspection program
      // (informational); not a Red Carpet Plumbing testing-service claim.
      title: "North Las Vegas backflow prevention program",
      body: "The City of North Las Vegas operates a formal backflow prevention program for properties within its water service area. When a device becomes due for annual inspection, the city sends a notification letter to the water billing account holder. Properties with older device types may be required to upgrade to current approved assemblies upon written notification. A licensed plumber familiar with North Las Vegas requirements can advise on compliance and any required upgrades. For properties in Las Vegas served by LVVWD, the annual testing obligation follows LVVWD's schedule and notification process.",
    },
    {
      title: "Irrigation systems and cross-connection risk",
      body: "Residential irrigation systems are one of the most common sources of cross-connection risk in Las Vegas because they connect the potable water supply directly to soil, fertilizers, and pesticides. A pressure vacuum breaker installed on the irrigation supply line prevents back-siphonage from the irrigation zone back into the home's drinking water. Las Vegas's high residential irrigation use makes this one of the most frequently required backflow prevention installations throughout Clark County. If your irrigation system does not have a backflow preventer, contact a licensed plumber for assessment and installation.",
    },
    {
      // FLAG: VERIFY — states annual testing of commercial assemblies is
      // mandatory (informational requirement on the property owner). Not a Red
      // Carpet Plumbing testing-service claim.
      title: "Commercial and fire suppression requirements",
      body: "Commercial properties, multi-unit residential buildings, and properties with fire suppression connections in Las Vegas are required to have containment backflow prevention devices. The type of device required depends on the level of hazard associated with the plumbing connection. RPZ assemblies are required for high-hazard applications and fire suppression systems. Annual testing of these assemblies is mandatory, and records must be submitted to the local water authority.",
      tail: [
        " For commercial plumbing service in Las Vegas, see our ",
        {
          href: "/las-vegas/commercial-plumbing/",
          text: "commercial plumbing in Las Vegas",
        },
        " page.",
      ],
    },
  ];

// ---------------------------------------------------------------------------
// Section 5 — backflow prevention services (H3 article cards). Commercial card
// carries a commercial-plumbing link. None of these services claim annual
// testing.
// ---------------------------------------------------------------------------
const LV_BACKFLOW_SERVICES: { title: string; body: string; tail?: LinkSeg[] }[] =
  [
    {
      title: "Backflow Preventer Installation",
      body: "Installation of backflow prevention devices for residential irrigation systems, commercial properties, and fire suppression connections throughout Las Vegas.",
    },
    {
      title: "Irrigation System Backflow Protection",
      body: "Pressure vacuum breaker installation for residential and commercial irrigation systems to meet LVVWD and Clark County cross-connection requirements.",
    },
    {
      title: "Commercial Backflow Prevention",
      body: "Containment backflow prevention device installation and repair for commercial properties, multi-unit buildings, and high-hazard connections.",
      tail: [
        " See our ",
        {
          href: "/las-vegas/commercial-plumbing/",
          text: "commercial plumbing in Las Vegas",
        },
        " page for related commercial services.",
      ],
    },
    {
      title: "Backflow Device Repair",
      body: "Repair of failed or malfunctioning backflow prevention assemblies to restore compliance after a failed annual test.",
    },
    {
      title: "Backflow Device Replacement",
      body: "Replacement of outdated, failed, or non-compliant backflow prevention devices with current approved assemblies.",
    },
    {
      title: "RPZ Assembly Service",
      body: "Installation and repair of reduced pressure zone assemblies for high-hazard commercial and industrial connections requiring the highest level of backflow protection.",
    },
    {
      title: "PVB and DCVA Service",
      body: "Installation and repair of pressure vacuum breakers and double check valve assemblies for residential and moderate-hazard commercial applications.",
    },
    {
      title: "Backflow Compliance Assessment",
      body: "Property assessment to determine backflow prevention requirements, identify missing or non-compliant devices, and plan installations to meet LVVWD and municipal requirements.",
    },
  ];

// ---------------------------------------------------------------------------
// JSON-LD payloads. areaServed `City` (Las Vegas) -> `State` (Nevada). No
// AggregateRating, no sameAs.
// ---------------------------------------------------------------------------
const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Backflow Prevention Services in Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing installs, repairs, and services backflow prevention devices for homes and businesses in Las Vegas, NV. LVVWD compliance. Irrigation PVB installation. NV #0048585A.",
  url: "https://redcarpetplumbing.com/las-vegas/backflow-prevention/",
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
      name: "Backflow Prevention Services in Las Vegas, NV",
      item: "https://redcarpetplumbing.com/las-vegas/backflow-prevention/",
    },
  ],
};

// FLAG: VERIFY — telephone carried from sibling pattern. Confirm before launch.
// The description claims installation/repair/replacement/documentation only — it
// does NOT claim annual testing (tester certification not yet confirmed).
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Backflow Prevention Services in Las Vegas",
  serviceType: "Backflow Prevention",
  description:
    "Red Carpet Plumbing installs, repairs, and replaces backflow prevention devices for residential and commercial properties in Las Vegas, NV. Services include PVB installation for irrigation systems, RPZ and DCVA installation for commercial applications, device repair, and compliance documentation. NV License #0048585A.",
  provider: {
    "@type": "Plumber",
    name: "Red Carpet Plumbing",
    url: "https://redcarpetplumbing.com",
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

// HowTo schema included because Section 6 renders the matching visible numbered
// process steps. Derived from LV_BACKFLOW_STEPS for a guaranteed text match.
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Red Carpet Plumbing Handles Backflow Prevention Service in Las Vegas",
  step: LV_BACKFLOW_STEPS.map((step, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: step.name,
    text: step.body,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: LV_BACKFLOW_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

function renderTail(tail: LinkSeg[]) {
  return tail.map((seg, i) =>
    typeof seg === "string" ? (
      seg
    ) : (
      <Link
        key={i}
        href={seg.href}
        className="font-semibold text-brand-primary hover:text-brand-primary-hover"
      >
        {seg.text}
      </Link>
    ),
  );
}

export default function LasVegasBackflowPreventionPage() {
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
            { label: "Backflow Prevention Services in Las Vegas, NV" },
          ]}
        />

        {/* SECTION 1: HERO */}
        <HeroSection
          headingLevel="h1"
          headline="Backflow Prevention Services in Las Vegas, NV"
          subheading="Red Carpet Plumbing installs, repairs, and services backflow prevention devices for homes and businesses throughout Las Vegas. Whether you have received a compliance notice from LVVWD, need a backflow preventer installed for your irrigation system, or have a device that needs repair or replacement, our licensed plumbers can assess your property and complete the work."
          trustItems={LV_BACKFLOW_TRUST_STRIP}
          primaryCTA={{
            label: "Call (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{
            label: "Request Backflow Service",
            href: "/contact/",
          }}
          ctaNote="Licensed plumbers. Transparent pricing. No hidden fees."
          formSlot={<QuoteFormPlaceholder title="Get Backflow Prevention Help" />}
          backgroundImage={{
            src: "/images/services/backflow-prevention/hero.webp",
            alt: "Backflow prevention device installation and service in Las Vegas, NV",
          }}
        />

        {/* SECTION 2: TRUST STRIP */}
        <TrustStrip
          items={LV_BACKFLOW_TRUST_STRIP}
          ariaLabel="Why Las Vegas customers choose Red Carpet Plumbing for backflow prevention"
        />

        {/* SECTION 3: BACKFLOW PREVENTION IN LAS VEGAS */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Backflow Prevention in Las Vegas
              </h2>
            </div>
            {/* FLAG: VERIFY — intro notes annual testing is "required by LVVWD"
                (informational compliance context, not a Red Carpet Plumbing
                testing-service claim). */}
            <div className="mt-8 rounded-2xl border-l-4 border-brand-primary bg-brand-surface-alt p-6 sm:p-8">
              <p className="text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing installs, repairs, and services backflow
                prevention devices for homes and businesses throughout the Las
                Vegas Valley. Backflow preventers protect your water
                supply from contamination caused by reverse water flow. Annual
                testing is required by the Las Vegas Valley Water District and
                local municipalities for many properties in Clark County.
              </p>
            </div>
            <div className="mt-8 space-y-6">
              {LV_BACKFLOW_INFO_BLOCKS.map((block) => (
                <article
                  key={block.title}
                  className="rounded-2xl bg-brand-surface-alt p-6 ring-1 ring-brand-surface-alt sm:p-8"
                >
                  <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                    {block.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-brand-dark/80">
                    {block.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: BACKFLOW PREVENTION REQUIREMENTS IN THE LAS VEGAS VALLEY */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Backflow Prevention Requirements in the Las Vegas Valley
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Backflow prevention requirements in Las Vegas are set by the Las
                Vegas Valley Water District and individual municipal water
                authorities, each with their own notification and compliance
                processes. Knowing what applies to your property helps avoid
                compliance issues and service interruption.
              </p>
            </div>
            <div className="mt-10 space-y-6">
              {LV_BACKFLOW_FACTORS.map((f) => (
                <article
                  key={f.title}
                  className="rounded-2xl bg-white p-6 ring-1 ring-brand-surface-alt sm:p-8"
                >
                  <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                    {f.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-brand-dark/80">
                    {f.body}
                    {f.tail ? renderTail(f.tail) : null}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: BACKFLOW PREVENTION SERVICES WE PROVIDE */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Backflow Prevention Services in Las Vegas
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing handles the full range of backflow prevention
                installation, repair, and replacement for residential and
                commercial properties throughout Las Vegas. For complete service
                details, see our{" "}
                <Link
                  href="/backflow-prevention/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  core backflow prevention page
                </Link>
                .
              </p>
            </div>
            <div className="mt-10 space-y-6">
              {LV_BACKFLOW_SERVICES.map((s) => (
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

        {/* SECTION 6: OUR BACKFLOW PREVENTION PROCESS (HowTo) */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Our Backflow Prevention Process
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Here is how Red Carpet Plumbing handles backflow prevention
                    service for Las Vegas homes and businesses.
                  </p>
                </div>
              </SectionRevealItem>
              <SectionRevealItem className="mt-12">
                <ol className="space-y-8">
                  {LV_BACKFLOW_STEPS.map((step, index) => (
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

        {/* SECTION 7: MID-PAGE CTA */}
        <section className="bg-brand-charcoal text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Backflow Prevention Compliance in Las Vegas? We Can Help.
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/80">
                  Red Carpet Plumbing installs, repairs, and replaces backflow
                  prevention devices for homes and businesses throughout the Las
                  Vegas Valley. Licensed plumbers, transparent pricing.
                  NV License #0048585A.
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
                  Request Backflow Service
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8: WHY CHOOSE RED CARPET PLUMBING */}
        {/* FLAG: VERIFY — confirm Nevada Backflow Prevention Assembly Tester
            certification before advertising annual testing. The Why-Choose list
            below claims installation/assessment/repair/replacement only. */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Why Choose Red Carpet Plumbing for Backflow Prevention
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
                Backflow Prevention Service Areas in Las Vegas
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/85">
                Red Carpet Plumbing provides backflow prevention device
                installation, repair, and service throughout Las Vegas and the
                surrounding communities of the Las Vegas Valley. We serve
                homeowners with irrigation systems, commercial property managers,
                business owners, and multi-unit residential property operators
                across the city.
              </p>
              {/* FLAG: VERIFY — references commercial properties with "annual
                  containment device testing" needs (informational description of
                  the property's obligation, not a Red Carpet Plumbing testing
                  service). */}
              <p className="mt-6 text-lg leading-8 text-white/85">
                We commonly serve Las Vegas properties that have received
                compliance notices from LVVWD, properties adding irrigation
                systems requiring backflow protection, and commercial properties
                with annual containment device testing and maintenance needs. For
                all Las Vegas plumbing services, visit our{" "}
                <Link
                  href="/las-vegas-plumbing-services/"
                  className="font-semibold text-white underline underline-offset-4 hover:text-white/80"
                >
                  Las Vegas plumbing services
                </Link>{" "}
                hub.
              </p>
            </div>

            <ul className="mt-12 flex flex-wrap gap-3">
              {LV_BACKFLOW_NEIGHBORHOODS.map((name) => (
                <li key={name}>
                  <span className="block rounded-lg border border-white/10 bg-white/5 px-5 py-3 font-medium text-white/85">
                    {name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 10: FAQ */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Frequently Asked Questions About Backflow Prevention in Las Vegas
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {LV_BACKFLOW_FAQS.map((faq) => (
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

        {/* SECTION 11: FINAL CTA */}
        {/* FLAG: VERIFY — license number and trust claims in the body are
            source-site claims; confirm all (and tester certification) before
            publishing. */}
        <CTASection
          background="red"
          headline={<>Need Backflow Prevention Service<br />in Las Vegas?</>}
          body="Red Carpet Plumbing provides backflow prevention device installation, repair, and replacement throughout the Las Vegas Valley. Licensed, local, transparent pricing. NV #0048585A."
          primaryCTA={{
            label: "Call (702) 567-9172",
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
      className="mt-1 h-5 w-5 flex-none text-brand-primary"
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
