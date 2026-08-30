// FLAG: VERIFY before publishing:
// - Telephone +17025679172 in serviceSchema.provider — project-established
//   value; confirm before launch.
// - License #0048585A, C-1 Plumbing and Heating — verified business claim.
// - "Transparent pricing, no hidden fees" in the hero ctaNote and the Section 8
//   checklist — source-site claim; confirm documentation before launch.
// FLAG comments appear only in source. No FLAG text appears in any visible
// string or schema text.
//
// North Las Vegas service-location schema pattern: matches
// app/north-las-vegas/repiping/ (Plumber provider; areaServed is an ARRAY of a
// City node with containedInPlace State plus ten PostalCodeSpecification nodes
// spread from NLV_ZIPS). This is deliberately NOT the Green Valley
// Place-within-City shape, even though this page follows the Green Valley
// toilet page's section structure and layout. No sameAs, no hasCredential, no
// LocalBusiness, no AggregateRating, no Review. 5 JsonLd blocks in order
// WebPage -> BreadcrumbList -> Service -> HowTo -> FAQPage. HowTo is included
// because Section 7 renders the matching visible numbered steps as distinct h3
// headings; both the visible list and the schema derive from
// NLV_TOILET_STEPS, and the visible FAQ accordion and FAQPage schema both
// derive from NLV_TOILET_FAQS, so neither pair can drift apart.
//
// Hero omits trustItems, matching the North Las Vegas cluster convention
// (repiping, sewer line services, water pipe repair and replacement) rather
// than the Green Valley convention, which renders a trust strip with a
// star-rating claim.
//
// Hero image: /images/services/toilet-repair-installation/hero.webp is the only
// asset available for this service and is the same one the Green Valley toilet
// page uses. No North Las Vegas specific toilet image exists in
// public/images/, and none was invented or sourced for this build.
//
// No "emergency" or "24/7" language appears anywhere on this page: neither
// claim is confirmed for toilet service. The same-day claim in FAQ 7 keeps its
// "subject to scheduling" qualifier and must not be strengthened.

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
  title:
    "Toilet Repair and Installation in North Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides toilet repair and installation throughout North Las Vegas, NV, including 89030, 89031, 89084, and surrounding ZIPs. Running toilets, base leaks, clogs, and new installations. Licensed plumbers. Call (702) 567-9172.",
  alternates: {
    canonical:
      "https://redcarpetplumbing.com/north-las-vegas/toilet-repair-installation/",
  },
  openGraph: {
    title:
      "Toilet Repair and Installation in North Las Vegas, NV | Red Carpet Plumbing",
    description:
      "Red Carpet Plumbing provides toilet repair and installation throughout North Las Vegas, NV, including 89030, 89031, 89084, and surrounding ZIPs. Running toilets, base leaks, clogs, and new installations. Licensed plumbers. Call (702) 567-9172.",
    url: "https://redcarpetplumbing.com/north-las-vegas/toilet-repair-installation/",
    siteName: "Red Carpet Plumbing",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

// ---------------------------------------------------------------------------
// Section 3 -- common toilet problems (plain list).
// ---------------------------------------------------------------------------
const NLV_TOILET_PROBLEMS = [
  "Toilet that runs continuously or cycles on and off after flushing",
  "Water pooling around the base of the toilet",
  "Toilet that clogs frequently or requires repeated plunging",
  "Weak or incomplete flush that does not clear waste in a single flush",
  "Toilet that wobbles or shifts when in use",
];

// ---------------------------------------------------------------------------
// Section 4 -- why North Las Vegas homes have toilet problems (three H3
// causes). Causes 2 and 3 carry inline links.
// ---------------------------------------------------------------------------
type LinkSeg = string | { href: string; text: string };

const NLV_TOILET_CAUSES: { title: string; body: string; tail?: LinkSeg[] }[] = [
  {
    title: "Hard Water Mineral Buildup",
    body: "North Las Vegas receives Las Vegas Valley municipal water from Lake Mead at 17 to 24 grains per gallon (approximately 280 parts per million), among the hardest municipal water supplies in the country. This hard water leaves mineral deposits inside toilet siphon jets and rim holes over time, reducing flush strength and leaving scale on internal rubber components. Flapper valves and fill valve seats in North Las Vegas homes wear faster due to hard water mineral contact than they would in areas with softer water. Toilets in North Las Vegas may need internal component replacement more frequently as a result.",
  },
  {
    title: "Two Housing Vintages, Two Wear Patterns",
    body: "Central and southern North Las Vegas neighborhoods, built from the 1960s through the 1980s, often still have original or early-replacement toilet fixtures with tank components that have been degrading for decades. The Aliante master-planned community, built primarily between 2000 and 2008, is now 16 to 25 years old and entering the first major plumbing service cycle, with original fill valves, flappers, and supply line connections beginning to show hard water wear.",
    tail: [
      " See our ",
      {
        href: "/north-las-vegas/aliante-area-plumbing/",
        text: "Aliante area plumbing services",
      },
      " page for more on this community.",
    ],
  },
  {
    title: "Wax Ring Wear and Caliche Soil Movement",
    body: "North Las Vegas homes on slab foundations sit above caliche and expansive clay soils that shift with seasonal temperature changes throughout the Las Vegas Valley. Repeated ground movement stresses the wax ring seal between the toilet base and the floor flange. In homes where the toilet has not been reseated in 20 or more years, a degraded wax ring is a common source of base leaks and sewer odor at floor level. A base leak that persists after a wax ring replacement may warrant a check for a slab issue beneath the bathroom floor.",
    tail: [
      " See our ",
      {
        href: "/north-las-vegas/slab-leak-detection-repair/",
        text: "slab leak detection in North Las Vegas",
      },
      " page if a slab leak is suspected.",
    ],
  },
];

// ---------------------------------------------------------------------------
// Section 5 -- toilet repair and installation services (six cards). Cards 2 and
// 3 carry inline links.
// ---------------------------------------------------------------------------
const NLV_TOILET_SERVICES: { label: string; body: string; tail?: LinkSeg[] }[] =
  [
    {
      label: "Running Toilet Repair",
      body: "Diagnosis and repair of toilets that run continuously after flushing, including flapper, fill valve, and float replacement. Las Vegas hard water accelerates wear on these components in North Las Vegas homes.",
    },
    {
      label: "Leaking Toilet Repair",
      body: "Repair of toilets leaking at the base, tank, or supply line connections, including wax ring replacement and flange service. For persistent moisture near the toilet base, we also check for hidden leaks.",
      tail: [
        " See our ",
        {
          href: "/north-las-vegas/leak-detection-repair/",
          text: "leak detection in North Las Vegas",
        },
        " for related diagnostic services.",
      ],
    },
    {
      label: "Toilet Clog Clearing",
      body: "Professional clearing of toilet clogs, including stubborn or recurring blockages that a plunger cannot resolve.",
      tail: [
        " For clogs that recur regularly or involve the main drain line, see our ",
        {
          href: "/north-las-vegas/drain-cleaning/",
          text: "North Las Vegas drain cleaning",
        },
        " page.",
      ],
    },
    {
      label: "Toilet Replacement",
      body: "Full toilet replacement for cracked, damaged, or aging toilets that are no longer repairable or efficient. We handle disconnection, removal, and installation of the replacement unit.",
    },
    {
      label: "New Toilet Installation",
      body: "Professional installation of new toilets for bathroom renovations, additions, and upgrades throughout North Las Vegas.",
    },
    {
      label: "Wax Ring and Tank Component Repair",
      body: "Replacement of failed wax rings, repair of damaged flanges, and replacement of tank internals including flappers, fill valves, flush valves, and supply lines.",
    },
  ];

// ---------------------------------------------------------------------------
// Section 6 -- repair vs replacement (two H3 blocks).
// ---------------------------------------------------------------------------
const NLV_TOILET_DECISION: { title: string; body: string }[] = [
  {
    title: "When repair is the right choice",
    body: "Repair is usually the practical choice for most toilet problems in North Las Vegas homes. A running toilet with a failed flapper or fill valve, a base leak from a worn wax ring, a weak flush caused by mineral-blocked siphon jets, and a wobbly toilet from loose floor bolts are all situations where targeted repair restores a toilet to normal function at a fraction of replacement cost. We assess the condition of the full fixture before recommending repair to confirm the toilet body itself is sound.",
  },
  {
    title: "When replacement makes more sense",
    body: "Replacement is the better option when a toilet has a cracked tank or bowl, requires repeated repairs for the same problem on an aging fixture, has severe hard water scale blocking siphon jets that cannot be cleared, or is an older pre-1992 model using significantly more water per flush than modern low-flow equivalents. The Southern Nevada Water Authority encourages water-efficient fixture upgrades in the Las Vegas Valley as part of long-term conservation planning. Replacing an aging toilet with a current high-efficiency model reduces household water use and eliminates recurring repair costs on an end-of-life fixture.",
  },
];

// ---------------------------------------------------------------------------
// Section 7 -- process (HowTo schema source of truth). Visible numbered steps
// and the HowTo JSON-LD both derive from this array.
// ---------------------------------------------------------------------------
const NLV_TOILET_STEPS = [
  {
    name: "Call and describe the problem",
    body: "Call (702) 567-9172 and describe what your toilet is doing. If it's overflowing and won't stop, shut off the water at the valve behind the toilet first.",
  },
  {
    name: "Inspection and diagnosis",
    body: "A licensed plumber inspects the toilet, tank components, base seal, flange, supply line, and drain connection to find the exact cause, checking for the hard water wear common in North Las Vegas homes.",
  },
  {
    name: "Review options and approve",
    body: "We explain what we found and whether repair or replacement is the more practical choice for your situation. You approve the work before anything is done.",
  },
  {
    name: "Repair or installation with final check",
    body: "Our plumber completes the repair or installs the new toilet, checks all connections, confirms the flush works correctly, and cleans up before leaving.",
  },
];

// ---------------------------------------------------------------------------
// Section 8 -- why North Las Vegas homeowners choose Red Carpet Plumbing.
// ---------------------------------------------------------------------------
// FLAG: VERIFY — license number and transparent pricing are source-site claims.
const NLV_TOILET_WHY = [
  "Local Las Vegas Valley plumbing company familiar with North Las Vegas housing stock and hard water conditions",
  "Transparent assessment of repair vs. replacement before any work is recommended",
  "Licensed plumbers, NV License #0048585A, C-1 Plumbing and Heating",
  "Transparent pricing with no hidden fees",
  "Toilet repair and installation service throughout North Las Vegas",
];

// ---------------------------------------------------------------------------
// Section 9 -- service area. NLV_ZIPS is the same client-confirmed ten-ZIP
// array used in app/north-las-vegas/repiping/ and is the single source for both
// the visible chip list and the Service schema areaServed postal codes.
// ---------------------------------------------------------------------------
const NLV_ZIPS = [
  "89030",
  "89031",
  "89032",
  "89033",
  "89036",
  "89081",
  "89084",
  "89085",
  "89086",
  "89087",
];

const NLV_TOILET_SUBAREAS = [
  "Aliante",
  "Central North Las Vegas",
  "Craig Road Corridor",
  "Cheyenne Corridor",
  "Losee Road Area",
  "Simmons Street Area",
];

// ---------------------------------------------------------------------------
// Section 10 -- FAQ (FAQPage schema source of truth). The visible FAQ section
// AND the FAQPage JSON-LD both derive from this single array, guaranteeing a
// character-for-character match. Do not edit one without the other. Answers are
// the Prompt 04 gap-fix revisions, tightened to the 30 to 60 word AEO and
// voice-search band. FAQ 7 keeps its "subject to scheduling" qualifier.
// ---------------------------------------------------------------------------
const NLV_TOILET_FAQS = [
  {
    question: "Why does my toilet keep running in my North Las Vegas home?",
    answer:
      "A failing flapper valve, a worn fill valve, or a float set too high are the usual causes. Las Vegas Valley hard water accelerates wear on these rubber and plastic parts, so North Las Vegas toilets often need internal components replaced more often than in areas with softer water.",
  },
  {
    question: "Why is my toilet leaking at the base?",
    answer:
      "A leak at the base is almost always a failed wax ring, the seal between the toilet and the floor flange. North Las Vegas homes on slab foundations sit on caliche soil that shifts with temperature changes, which stresses that seal over time in older fixtures.",
  },
  {
    question: "How do I know if my toilet needs repair or full replacement?",
    answer:
      "Repair usually makes sense for running toilets, base leaks, weak flushes, and most clogs. Replacement is the better call for a cracked tank or bowl, repeated repairs on the same fixture, or an older pre-1992 model using far more water per flush than current models.",
  },
  {
    question: "Does hard water damage toilets in North Las Vegas?",
    answer:
      "Yes. North Las Vegas receives Lake Mead water at 17 to 24 grains per gallon, among the hardest municipal supplies in the country. It leaves mineral deposits inside siphon jets and wears out flapper and fill valves faster than softer water would.",
  },
  {
    question:
      "Are older North Las Vegas homes more likely to need toilet repair?",
    answer:
      "Central and southern North Las Vegas homes built from the 1960s through the 1980s often still run original tank components decades past their service life. Aliante-area homes, built mainly from 2000 to 2008, are now entering their first major plumbing service cycle.",
  },
  {
    question:
      "Does Red Carpet Plumbing serve North Las Vegas for toilet repair and installation?",
    answer:
      "Yes. Red Carpet Plumbing provides toilet repair and installation throughout North Las Vegas, including the 89030, 89031, 89032, 89033, 89036, 89081, 89084, 89085, 89086, and 89087 ZIP codes. Call (702) 567-9172 to request service or confirm coverage for your address.",
  },
  {
    question: "Do you offer same-day toilet repair service in North Las Vegas?",
    answer:
      "Same-day toilet repair service is available in North Las Vegas, subject to scheduling. Call (702) 567-9172 to check same-day availability and get your address on the schedule.",
  },
];

// ---------------------------------------------------------------------------
// JSON-LD payloads. areaServed is the North Las Vegas array shape: City node
// (containedInPlace State) followed by ten PostalCodeSpecification nodes. This
// matches app/north-las-vegas/repiping/ and is NOT the Green Valley
// Place-within-City shape.
// ---------------------------------------------------------------------------
const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Toilet Repair and Installation in North Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides toilet repair and installation throughout North Las Vegas, NV, including 89030, 89031, 89084, and surrounding ZIPs. Running toilets, base leaks, clogs, and new installations. Licensed plumbers. Call (702) 567-9172.",
  url: "https://redcarpetplumbing.com/north-las-vegas/toilet-repair-installation/",
  isPartOf: {
    "@type": "WebSite",
    name: "Red Carpet Plumbing",
    url: "https://redcarpetplumbing.com/",
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
      name: "Toilet Repair and Installation in North Las Vegas, NV",
      item: "https://redcarpetplumbing.com/north-las-vegas/toilet-repair-installation/",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Toilet Repair and Installation",
  serviceType: "Toilet Repair and Installation",
  description:
    "Red Carpet Plumbing provides toilet repair and installation for homes and businesses in North Las Vegas, NV, including running toilet repair, base leak repair, wax ring replacement, toilet clog clearing, toilet replacement, and new toilet installation. Nevada Contractor License #0048585A.",
  provider: {
    "@type": "Plumber",
    name: "Red Carpet Plumbing",
    url: "https://redcarpetplumbing.com",
    // FLAG: VERIFY telephone before publishing.
    telephone: "+17025679172",
  },
  areaServed: [
    {
      "@type": "City",
      name: "North Las Vegas",
      containedInPlace: {
        "@type": "State",
        name: "Nevada",
      },
    },
    ...NLV_ZIPS.map((postalCode) => ({
      "@type": "PostalCodeSpecification",
      postalCode,
      addressCountry: "US",
    })),
  ],
};

// HowTo schema included because Section 7 renders the matching visible numbered
// process steps. Derived from NLV_TOILET_STEPS for a guaranteed text match.
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How We Handle Toilet Service in North Las Vegas",
  step: NLV_TOILET_STEPS.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.name,
    text: s.body,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: NLV_TOILET_FAQS.map((faq) => ({
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

function renderTail(tail: LinkSeg[]) {
  return tail.map((seg, i) =>
    typeof seg === "string" ? (
      seg
    ) : (
      <Link key={i} href={seg.href} className={LINK_CLASS}>
        {seg.text}
      </Link>
    ),
  );
}

export default function NorthLasVegasToiletRepairInstallationPage() {
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
        {/* hero.webp is the only asset present for this service and is shared
            with the Green Valley toilet page. No North Las Vegas specific
            toilet image exists; none was invented. See the file header. */}
        <HeroSection
          breadcrumbs={<Breadcrumbs trail={[
            { label: "Home", href: "/" },
            {
              label: "North Las Vegas Plumbing Services",
              href: "/north-las-vegas-plumbing-services/",
            },
            {
              label: "Toilet Repair and Installation in North Las Vegas, NV",
            },
          ]} variant="dark" />}
          headingLevel="h1"
          headline={
            <>
              Toilet Repair and Installation
              <br /> in North Las Vegas, NV
            </>
          }
          subheading="Red Carpet Plumbing provides toilet repair and installation for homes and businesses throughout North Las Vegas, NV. Running toilets, base leaks, clogs, toilet replacement, and new toilet installation. Licensed plumbers. Call (702) 567-9172."
          primaryCTA={{
            label: "Call (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{
            label: "Request Service",
            href: "/contact/",
          }}
          // FLAG: VERIFY — transparent pricing is a source-site claim.
          ctaNote="NV Licensed, #0048585A. Transparent pricing, no hidden fees."
          formSlot={<QuoteFormPlaceholder title="Get Toilet Repair Help" />}
          backgroundImage={{
            src: "/images/services/toilet-repair-installation/hero.webp",
            alt: "Toilet repair and installation in North Las Vegas, NV",
          }}
        />

        {/* SECTION 3: COMMON TOILET PROBLEMS */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Common Toilet Problems in North Las Vegas Homes
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                These are the most common toilet problems we see in North Las
                Vegas area homes. If you are experiencing any of the following,
                contact a licensed plumber for a professional assessment.
              </p>
            </div>
            <div className="mt-8 rounded-2xl border-l-4 border-brand-primary bg-brand-surface-alt p-6 sm:p-8">
              <ul className="space-y-3">
                {NLV_TOILET_PROBLEMS.map((problem) => (
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

        {/* SECTION 4: WHY NORTH LAS VEGAS HOMES HAVE TOILET PROBLEMS */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Why North Las Vegas Homes Have Toilet Problems
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Toilet problems in North Las Vegas homes are tied to a
                consistent set of local factors. For an overview of toilet
                repair and installation services across the Las Vegas Valley,
                visit our{" "}
                <Link href="/toilet-repair-installation/" className={LINK_CLASS}>
                  toilet repair and installation services
                </Link>{" "}
                page.
              </p>
            </div>
            <div className="mt-10 space-y-6">
              {NLV_TOILET_CAUSES.map((cause) => (
                <article
                  key={cause.title}
                  className="relative bg-white rounded-2xl p-6 pl-7 ring-1 ring-brand-surface-alt before:absolute before:bottom-6 before:left-0 before:top-6 before:w-1 before:rounded-full before:bg-brand-dark sm:p-8 sm:pl-9"
                >
                  <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                    {cause.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-brand-dark/80">
                    {cause.body}
                    {cause.tail ? renderTail(cause.tail) : null}
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
                Toilet Repair and Installation Services in North Las Vegas
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing provides a full range of toilet repair and
                installation services for North Las Vegas homes and properties.
              </p>
            </div>
            <ul className="mt-10 space-y-5">
              {NLV_TOILET_SERVICES.map((s) => (
                <li
                  key={s.label}
                  className="rounded-2xl bg-brand-surface-alt p-6 ring-1 ring-brand-surface-alt sm:p-8"
                >
                  <p className="text-base leading-7 text-brand-dark/80">
                    <strong className="font-semibold text-brand-dark">
                      {s.label}.
                    </strong>{" "}
                    {s.body}
                    {s.tail ? renderTail(s.tail) : null}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 6: REPAIR OR REPLACEMENT */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="text-left">
              <h2 className="text-3xl tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Toilet Repair or Replacement: What Makes Sense for Your North
                Las Vegas Home?
              </h2>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
              {NLV_TOILET_DECISION.map((d) => (
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

        {/* SECTION 7: PROCESS (HowTo) */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    How We Handle Toilet Service in North Las Vegas
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    This is our standard process for toilet repair and
                    installation in North Las Vegas area homes.
                  </p>
                </div>
              </SectionRevealItem>
              <SectionRevealItem className="mt-12">
                <ol className="space-y-8">
                  {NLV_TOILET_STEPS.map((step, index) => (
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
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Why North Las Vegas Homeowners Choose Red Carpet Plumbing
              </h2>
            </div>
            <ul className="mt-8 space-y-4">
              {NLV_TOILET_WHY.map((item) => (
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

        {/* SECTION: MID-PAGE CTA */}
        <section className="bg-brand-charcoal text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Toilet Trouble in Your North Las Vegas Home?
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/90">
                  Red Carpet Plumbing handles running toilets, base leaks,
                  clogs, replacements, and new installations throughout North
                  Las Vegas. Call now and describe what your toilet is doing, or
                  request service online.
                </p>
              </div>
              <div className="flex flex-col items-start gap-4 lg:items-end">
                <Button href="tel:+17025679172" variant="inverse" size="2xl">
                  Call Now (702) 567-9172
                </Button>
                <Button href="/contact/" variant="inverse-outline" size="lg">
                  Request Service
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 9: SERVICE AREA */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Toilet Repair and Installation Across North Las Vegas
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing provides toilet repair and installation
                throughout North Las Vegas, including{" "}
                {NLV_ZIPS.slice(0, -1).join(", ")}, and{" "}
                {NLV_ZIPS[NLV_ZIPS.length - 1]}. For the full list of plumbing
                services available in North Las Vegas, visit our{" "}
                <Link
                  href="/north-las-vegas-plumbing-services/"
                  className={LINK_CLASS}
                >
                  North Las Vegas plumbing services
                </Link>{" "}
                hub.
              </p>
            </div>
            <ul className="mt-8 flex flex-wrap gap-3">
              {NLV_ZIPS.map((zip) => (
                <li
                  key={zip}
                  className="rounded-full bg-brand-surface-alt px-4 py-2 text-sm font-medium text-brand-dark/80 ring-1 ring-brand-surface-alt"
                >
                  {zip}
                </li>
              ))}
            </ul>
            <ul className="mt-4 flex flex-wrap gap-3">
              {NLV_TOILET_SUBAREAS.map((area) => (
                <li
                  key={area}
                  className="rounded-full bg-brand-surface-alt px-4 py-2 text-sm font-medium text-brand-dark/80 ring-1 ring-brand-surface-alt"
                >
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 10: FAQ */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Frequently Asked Questions
                <br className="hidden sm:block" /> About Toilet Repair and
                Installation in North Las Vegas
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {NLV_TOILET_FAQS.map((faq) => (
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
        <CTASection
          background="red"
          headline="Toilet Problem in Your North Las Vegas Home? We Can Help."
          body="Red Carpet Plumbing handles running toilets, base leaks, clogs, replacements, and new installations for North Las Vegas homeowners. Transparent pricing and licensed plumbers."
          primaryCTA={{
            label: "Call Now (702) 567-9172",
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
