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

// ---------------------------------------------------------------------------
// Active FLAGs for this page (source-only; none appear as unverified claims in
// rendered copy beyond those noted):
//   - telephone (+17025679172) in serviceSchema.provider — VERIFY before launch.
//   - "Transparent Pricing, No Hidden Fees" trust strip item + ctaNote and the
//     Why-Choose pricing bullet — source-site claims, VERIFY before launch.
//   - License #0048585A is a verified business claim.
//
// Schema follows the established site-wide service-location pattern with the
// P45 brief variant for the Service block (provider includes PostalAddress per
// brief): Plumber provider; areaServed Place (Green Valley, Nevada) ->
// containedInPlace City (Henderson) -> containedInPlace State Nevada; WebPage
// isPartOf WebSite; 5 separate JsonLd blocks in order WebPage -> BreadcrumbList
// -> Service -> HowTo -> FAQPage; HowTo for the visible process steps. No
// AggregateRating schema. NO sameAs on this service-location page.
//
// Green Valley is a community within the incorporated City of Henderson. It is
// never described as a city or unincorporated area. areaServed Place ->
// City (Henderson) -> State (Nevada). NOT AdministrativeArea, NOT Clark County.
// Breadcrumb is 3-level (Home -> Green Valley hub -> current), per the GV
// cluster pattern.
//
// Hero uses hero.webp (the only asset present for this service; card.webp does
// not exist). TODO: dedicated higher-resolution / card asset if needed.
//
// PUNCTUATION NOTE: the approved Section 6 H2 was supplied as "Toilet Repair or
// Replacement -- What Makes Sense for Your Green Valley Home?" with a double
// hyphen. Rendered with a colon to comply with the brand no-double-hyphen /
// no-em-dash rule; no words changed.
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title:
    "Toilet Repair and Installation in Green Valley, Henderson, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides toilet repair and installation in Green Valley, Henderson, NV. Running toilets, base leaks, wax ring replacement, clogs, and new installations. NV License #0048585A. (702) 567-9172.",
  alternates: {
    canonical:
      "https://redcarpetplumbing.com/green-valley/toilet-repair-installation/",
  },
  openGraph: {
    title:
      "Toilet Repair and Installation in Green Valley, Henderson, NV | Red Carpet Plumbing",
    description:
      "Licensed toilet repair and installation for Green Valley homes. Running toilets, base leaks, clog clearing, replacement, and new installations. Henderson, NV. Call (702) 567-9172.",
    url: "https://redcarpetplumbing.com/green-valley/toilet-repair-installation/",
    siteName: "Red Carpet Plumbing",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

// Trust strip (4 items) rendered as a red brand-primary band, matching the GV
// cluster pattern.
const GV_TOILET_TRUST = [
  "NV Licensed, #0048585A",
  "Toilet Repair and Installation",
  "Serving Green Valley and Henderson",
  // FLAG: VERIFY — "Transparent Pricing, No Hidden Fees" is a source-site claim.
  "Transparent Pricing, No Hidden Fees",
];

// ---------------------------------------------------------------------------
// Section 3 -- common toilet problems (plain list).
// ---------------------------------------------------------------------------
const GV_TOILET_PROBLEMS = [
  "Toilet that runs continuously or cycles on and off after flushing",
  "Water pooling around the base of the toilet",
  "Toilet that clogs frequently or requires repeated plunging",
  "Weak or incomplete flush that does not clear waste in a single flush",
  "Toilet that wobbles or shifts when in use",
];

// ---------------------------------------------------------------------------
// Section 4 -- why Green Valley homes have toilet problems (three H3 causes).
// Cause 3 carries an inline link to the GV slab leak page.
// ---------------------------------------------------------------------------
type LinkSeg = string | { href: string; text: string };

const GV_TOILET_CAUSES: { title: string; body: string; tail?: LinkSeg[] }[] = [
  {
    title: "Hard Water Mineral Buildup",
    body: "The Las Vegas Valley receives municipal water from Lake Mead at 17 to 24 grains per gallon (approximately 280 parts per million). This hard water leaves mineral deposits inside toilet siphon jets and rim holes over time, reducing flush strength and leaving scale on internal rubber components. Flapper valves and fill valve seats in Green Valley homes wear faster due to hard water mineral contact than they would in areas with softer water. Toilets in Green Valley may need internal component replacement more frequently as a result.",
  },
  {
    title: "Aging Fixtures in Original Green Valley Neighborhoods",
    body: "Original Green Valley homes, built from the late 1970s through the mid-1990s, are now 30 to 45 years old. Many still have original or early-replacement toilet fixtures with tank components that have been degrading for decades. Original flappers, fill valves, and supply line connections in toilets of this age are well past their expected service life. A toilet in an original Green Valley home that has never had internal components replaced is a likely candidate for a running toilet, supply line leak, or weak flush caused by accumulated hard water scale.",
  },
  {
    title: "Wax Ring Wear and Slab Foundation Movement",
    body: "Green Valley homes sit on slab foundations above caliche and expansive clay soils that shift with seasonal temperature changes throughout the Henderson area. Repeated ground movement stresses the wax ring seal between the toilet base and the floor flange. In homes where the toilet has not been reseated in 20 or more years, a degraded wax ring is a common source of base leaks and sewer odor at floor level. A base leak that persists after a wax ring replacement may warrant a check for a slab issue beneath the bathroom floor.",
    tail: [
      " See our ",
      {
        href: "/green-valley/slab-leak-detection-repair/",
        text: "slab leak detection in Green Valley",
      },
      " page if a slab leak is suspected.",
    ],
  },
];

// ---------------------------------------------------------------------------
// Section 5 -- toilet repair and installation services (six cards). Cards 2 and
// 3 carry inline links.
// ---------------------------------------------------------------------------
const GV_TOILET_SERVICES: { label: string; body: string; tail?: LinkSeg[] }[] = [
  {
    label: "Running Toilet Repair",
    body: "Diagnosis and repair of toilets that run continuously after flushing, including flapper, fill valve, and float replacement. Las Vegas hard water accelerates wear on these components in Green Valley homes.",
  },
  {
    label: "Leaking Toilet Repair",
    body: "Repair of toilets leaking at the base, tank, or supply line connections, including wax ring replacement and flange service. For persistent moisture near the toilet base, we also check for hidden leaks.",
    tail: [
      " See our ",
      {
        href: "/green-valley/leak-detection-repair/",
        text: "leak detection in Green Valley",
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
        href: "/green-valley/drain-cleaning/",
        text: "Green Valley drain cleaning",
      },
      " and ",
      { href: "/drain-cleaning/", text: "drain cleaning services" },
      " pages.",
    ],
  },
  {
    label: "Toilet Replacement",
    body: "Full toilet replacement for cracked, damaged, or aging toilets that are no longer repairable or efficient. We handle disconnection, removal, and installation of the replacement unit.",
  },
  {
    label: "New Toilet Installation",
    body: "Professional installation of new toilets for bathroom renovations, additions, and upgrades throughout Green Valley and Henderson.",
  },
  {
    label: "Wax Ring and Tank Component Repair",
    body: "Replacement of failed wax rings, repair of damaged flanges, and replacement of tank internals including flappers, fill valves, flush valves, and supply lines.",
  },
];

// ---------------------------------------------------------------------------
// Section 6 -- repair vs replacement (two H3 blocks).
// ---------------------------------------------------------------------------
const GV_TOILET_DECISION: { title: string; body: string }[] = [
  {
    title: "When repair is the right choice",
    body: "Repair is usually the practical choice for most toilet problems in Green Valley homes. A running toilet with a failed flapper or fill valve, a base leak from a worn wax ring, a weak flush caused by mineral-blocked siphon jets, and a wobbly toilet from loose floor bolts are all situations where targeted repair restores a toilet to normal function at a fraction of replacement cost. We assess the condition of the full fixture before recommending repair to confirm the toilet body itself is sound.",
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
const GV_TOILET_STEPS = [
  {
    name: "Call and describe the problem",
    body: "Call Red Carpet Plumbing at (702) 567-9172 and describe what your toilet is doing. If the toilet is overflowing and will not stop, shut off the water at the valve behind the toilet before calling.",
  },
  {
    name: "Inspection and diagnosis",
    body: "A licensed plumber inspects the toilet, tank components, base seal, flange, supply line, and drain connection to identify the exact cause of the problem. We check for hard water mineral buildup, seal failures, and component wear specific to Green Valley homes.",
  },
  {
    name: "Review options and approve",
    body: "We explain what we found and what options are available, including whether repair or replacement is the more practical choice for your situation. You approve the work before anything is done.",
  },
  {
    name: "Repair or installation with final check",
    body: "Our licensed plumber completes the repair or installs the new toilet, checks all connections, confirms the flush is operating correctly, and cleans up the work area before leaving.",
  },
];

// ---------------------------------------------------------------------------
// Section 8 -- why Green Valley homeowners choose Red Carpet Plumbing.
// ---------------------------------------------------------------------------
// FLAG: VERIFY — license number and transparent pricing are source-site claims.
const GV_TOILET_WHY = [
  "Local Las Vegas Valley plumbing company familiar with Green Valley homes and the hard water conditions that affect toilet components",
  "Transparent assessment of repair vs. replacement before any work is recommended",
  "Licensed plumbers, NV License #0048585A, C-1 Plumbing and Heating",
  "Transparent pricing with no hidden fees",
  "Toilet repair and installation service throughout Green Valley and Henderson",
];

// ---------------------------------------------------------------------------
// Section 9 -- Green Valley sub-areas served (plain-text chips, no built routes).
// ---------------------------------------------------------------------------
const GV_TOILET_SUBAREAS = [
  "Original Green Valley",
  "Green Valley Ranch",
  "Green Valley Parkway Corridor",
  "Eastern Avenue Corridor",
  "Sunset Road Area",
  "Gibson Road Area",
];

// ---------------------------------------------------------------------------
// Section 10 -- FAQ (FAQPage schema source of truth). The visible FAQ section
// AND the FAQPage JSON-LD both derive from this single array, guaranteeing a
// character-for-character match. Do not edit one without the other.
// ---------------------------------------------------------------------------
const GV_TOILET_FAQS = [
  {
    question: "Why does my toilet keep running in my Green Valley home?",
    answer:
      "A running toilet in a Green Valley home is usually caused by a failing flapper valve, a worn fill valve that does not shut off after the tank refills, or a float set too high. Las Vegas Valley hard water accelerates wear on rubber flapper valves and fill valve seats, which means toilet internals in Green Valley homes may need replacement more frequently than in areas with softer water. A running toilet wastes a significant amount of water and should be repaired promptly.",
  },
  {
    question: "Why is my toilet leaking at the base?",
    answer:
      "A toilet leaking at the base is most often a failed wax ring, which is the seal between the toilet and the floor flange. In Green Valley homes built on slab foundations, seasonal ground movement in the caliche soil beneath the slab can stress the wax ring over time, accelerating failure in older fixtures. A base leak can also allow sewer gases into the home and should be repaired as soon as possible.",
  },
  {
    question: "How do I know if my toilet needs repair or full replacement?",
    answer:
      "Repair is usually the right choice for running toilets, base leaks, weak flushes caused by mineral buildup, and most clog situations. Replacement makes more sense when the toilet has a cracked tank or bowl, requires repeated repairs for the same problem, has severe mineral scale that cannot be cleared, or is an older pre-1992 model that uses significantly more water per flush than current high-efficiency models. A licensed plumber can assess the condition of your toilet and recommend the most practical option.",
  },
  {
    question: "Does hard water damage toilets in Green Valley?",
    answer:
      "Yes. Las Vegas Valley hard water at 17 to 24 grains per gallon leaves mineral deposits inside toilet siphon jets and rim holes over time, reducing flush strength. Hard water also accelerates wear on rubber flapper valves and fill valve seats. Toilets in Green Valley homes may develop weak flushes and running problems sooner than toilets in areas with softer water, particularly in original Green Valley homes where fixtures have been in service for 30 or more years.",
  },
  {
    question: "Can a toilet leak at the base indicate a slab leak?",
    answer:
      "A toilet leaking at the base is most commonly a wax ring failure rather than a slab leak. However, persistent moisture near the base of a toilet after a wax ring has been replaced, or water appearing on the floor without a clear connection to the toilet itself, can sometimes indicate a supply line or drain leak beneath the slab. If a base leak recurs after wax ring replacement or moisture appears in unexpected locations, a professional slab leak assessment is a reasonable next step.",
  },
  {
    question:
      "Does Red Carpet Plumbing serve Green Valley for toilet repair and installation?",
    answer:
      "Yes. Red Carpet Plumbing provides toilet repair and installation throughout Green Valley and the Henderson area. Green Valley is a community within the incorporated City of Henderson, and our Nevada Contractor License #0048585A covers plumbing work throughout Henderson including Green Valley and surrounding neighborhoods. Call (702) 567-9172 to request service or confirm coverage for your address.",
  },
];

// ---------------------------------------------------------------------------
// JSON-LD payloads. areaServed Place (Green Valley, Nevada) -> City (Henderson)
// -> State (Nevada). No sameAs on the service-location page. Provider carries a
// PostalAddress per the P45 brief variant. Breadcrumb is 3-level.
// ---------------------------------------------------------------------------
const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Toilet Repair and Installation in Green Valley, Henderson, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides toilet repair and installation for homes in Green Valley, Henderson, NV. Running toilets, base leaks, wax ring replacement, toilet clogs, and new toilet installation. Licensed plumbers. NV #0048585A.",
  url: "https://redcarpetplumbing.com/green-valley/toilet-repair-installation/",
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
      name: "Green Valley Plumbing Services",
      item: "https://redcarpetplumbing.com/green-valley-plumbing-services/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Toilet Repair and Installation in Green Valley",
      item: "https://redcarpetplumbing.com/green-valley/toilet-repair-installation/",
    },
  ],
};

// FLAG: VERIFY — telephone in serviceSchema (carried forward from existing
// pages). Provider includes PostalAddress per the P45 brief variant.
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Toilet Repair and Installation in Green Valley",
  serviceType: "Toilet Repair and Installation",
  description:
    "Toilet repair and installation for homes in Green Valley, Henderson, NV. Running toilet repair, base leak repair, wax ring replacement, toilet clog clearing, toilet replacement, and new toilet installation. Nevada Contractor License #0048585A.",
  areaServed: {
    "@type": "Place",
    name: "Green Valley, Nevada",
    containedInPlace: {
      "@type": "City",
      name: "Henderson",
      containedInPlace: {
        "@type": "State",
        name: "Nevada",
      },
    },
  },
  provider: {
    "@type": "Plumber",
    name: "Red Carpet Plumbing",
    telephone: "+17025679172",
    address: {
      "@type": "PostalAddress",
      streetAddress: "3330 W. Hacienda Ave Ste. 405",
      addressLocality: "Las Vegas",
      addressRegion: "NV",
      postalCode: "89118",
    },
  },
};

// HowTo schema included because Section 7 renders the matching visible numbered
// process steps. Derived from GV_TOILET_STEPS for a guaranteed text match.
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How We Handle Toilet Service in Green Valley",
  step: GV_TOILET_STEPS.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.name,
    text: s.body,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: GV_TOILET_FAQS.map((faq) => ({
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

export default function GreenValleyToiletPage() {
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
              label: "Green Valley Plumbing Services",
              href: "/green-valley-plumbing-services/",
            },
            { label: "Toilet Repair and Installation in Green Valley" },
          ]}
        />

        {/* SECTION 1: HERO */}
        {/* TODO: card.webp does not exist for this service; using hero.webp.
            Add a dedicated card/hero asset if a higher-res hero is desired. */}
        <HeroSection
          headingLevel="h1"
          headline="Toilet Repair and Installation in Green Valley, Henderson, NV"
          subheading="From running toilets and base leaks to full toilet replacement, Red Carpet Plumbing handles toilet repair and installation for homes throughout Green Valley and Henderson."
          primaryCTA={{
            label: "Call Now: (702) 567-9172",
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
            alt: "Toilet repair and installation in Green Valley, Henderson, NV",
          }}
        />

        {/* SECTION 2: TRUST STRIP */}
        <section
          aria-label="Why Green Valley customers choose Red Carpet Plumbing for toilet service"
          className="bg-brand-primary text-white"
        >
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-10 xl:px-12">
            <ul className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
              {GV_TOILET_TRUST.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <svg
                    aria-hidden="true"
                    className="h-4 w-4 flex-shrink-0 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm font-semibold">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 3: COMMON TOILET PROBLEMS */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Common Toilet Problems in Green Valley Homes
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                These are the most common toilet problems we see in Green Valley
                area homes. If you are experiencing any of the following, contact a
                licensed plumber for a professional assessment.
              </p>
            </div>
            <div className="mt-8 rounded-2xl border-l-4 border-brand-primary bg-brand-surface-alt p-6 sm:p-8">
              <ul className="space-y-3">
                {GV_TOILET_PROBLEMS.map((problem) => (
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

        {/* SECTION 4: WHY GREEN VALLEY HOMES HAVE TOILET PROBLEMS */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Why Green Valley Homes Have Toilet Problems
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Toilet problems in Green Valley homes are tied to a consistent set
                of local factors. For an overview of toilet repair and installation
                services across the Las Vegas Valley, visit our{" "}
                <Link
                  href="/toilet-repair-installation/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  toilet repair and installation services
                </Link>{" "}
                page.
              </p>
            </div>
            <div className="mt-10 space-y-6">
              {GV_TOILET_CAUSES.map((cause) => (
                <article
                  key={cause.title}
                  className="relative bg-white rounded-2xl p-6 pl-7 ring-1 ring-brand-surface-alt before:absolute before:bottom-6 before:left-0 before:top-6 before:w-1 before:rounded-full before:bg-brand-primary sm:p-8 sm:pl-9"
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
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Toilet Repair and Installation Services in Green Valley
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing provides a full range of toilet repair and
                installation services for Green Valley homes and properties.
              </p>
            </div>
            <ul className="mt-10 space-y-5">
              {GV_TOILET_SERVICES.map((s) => (
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
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Toilet Repair or Replacement: What Makes Sense for Your Green
                Valley Home?
              </h2>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
              {GV_TOILET_DECISION.map((d) => (
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
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    How We Handle Toilet Service in Green Valley
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    This is our standard process for toilet repair and installation
                    in Green Valley area homes.
                  </p>
                </div>
              </SectionRevealItem>
              <SectionRevealItem className="mt-12">
                <ol className="space-y-8">
                  {GV_TOILET_STEPS.map((step, index) => (
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

        {/* SECTION 8: WHY CHOOSE RED CARPET PLUMBING */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Why Green Valley Homeowners Choose Red Carpet Plumbing for Toilet
                Service
              </h2>
            </div>
            <ul className="mt-8 space-y-4">
              {GV_TOILET_WHY.map((item) => (
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
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Toilet Trouble in Your Green Valley Home?
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/80">
                  Red Carpet Plumbing handles running toilets, base leaks, clogs,
                  replacements, and new installations throughout Green Valley and
                  Henderson. Call now and describe what your toilet is doing, or
                  request service online.
                </p>
              </div>
              <div className="flex flex-col items-start gap-4 lg:items-end">
                <a
                  href="tel:+17025679172"
                  className="inline-flex min-h-14 items-center justify-center rounded-lg bg-brand-primary px-8 text-lg font-semibold text-white shadow-sm hover:bg-brand-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary motion-safe:transition-colors motion-safe:active:scale-[0.97]"
                >
                  Call Now: (702) 567-9172
                </a>
                <Link
                  href="/contact/"
                  className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/60 px-6 py-3 text-base font-semibold text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-safe:transition-colors motion-safe:active:scale-[0.97]"
                >
                  Request Service
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 9: SERVICE AREA */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Toilet Repair and Installation Across Green Valley and Henderson
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing provides toilet repair and installation
                throughout Green Valley and the surrounding Henderson area. For a
                full list of plumbing services available in Green Valley, visit our{" "}
                <Link
                  href="/green-valley-plumbing-services/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  Green Valley plumbing services
                </Link>{" "}
                hub.
              </p>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                We also serve the broader Henderson community and the Las Vegas
                Valley. For full Henderson coverage, see{" "}
                <Link
                  href="/henderson-plumbing-services/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  Henderson plumbing services
                </Link>
                .
              </p>
            </div>
            <ul className="mt-8 flex flex-wrap gap-3">
              {GV_TOILET_SUBAREAS.map((area) => (
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
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Frequently Asked Questions About Toilet Repair and Installation in
                Green Valley
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {GV_TOILET_FAQS.map((faq) => (
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
          headline="Toilet Problem in Your Green Valley Home? We Can Help."
          body="Red Carpet Plumbing handles running toilets, base leaks, clogs, replacements, and new installations for Green Valley and Henderson homeowners. Transparent pricing and licensed plumbers."
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
