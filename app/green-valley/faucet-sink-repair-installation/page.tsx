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
// Active FLAGs for this page (source-only):
//   - telephone (+17025679172) in serviceSchema.provider — VERIFY before launch.
//   - "Transparent Pricing, No Hidden Fees" trust strip item + ctaNote and the
//     Why-Choose pricing bullet — source-site claims, VERIFY before launch.
//   - License #0048585A is a verified business claim.
//
// Schema follows the established site-wide service-location pattern with the
// P46 brief variant for the Service block (provider includes PostalAddress per
// brief): Plumber provider; areaServed Place (Green Valley, Nevada) ->
// containedInPlace City (Henderson) -> containedInPlace State Nevada; WebPage
// isPartOf WebSite; 5 separate JsonLd blocks in order WebPage -> BreadcrumbList
// -> Service -> HowTo -> FAQPage; HowTo for the visible process steps. No
// AggregateRating schema. NO sameAs on this service-location page.
//
// Green Valley is a community within the incorporated City of Henderson. It is
// never described as a city or unincorporated area. areaServed Place ->
// City (Henderson) -> State (Nevada). NOT AdministrativeArea, NOT Clark County.
// Breadcrumb is 3-level (Home -> Green Valley hub -> current).
//
// Hero uses hero.webp (the only asset present for this service; card.webp does
// not exist). TODO: dedicated card asset if a separate one is desired.
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title:
    "Faucet and Sink Repair and Installation in Green Valley, Henderson, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing repairs, replaces, and installs faucets and sinks in Green Valley, Henderson, NV. Dripping faucets, low pressure, under-sink leaks, and new sink installation. NV License #0048585A. (702) 567-9172.",
  alternates: {
    canonical:
      "https://redcarpetplumbing.com/green-valley/faucet-sink-repair-installation/",
  },
  openGraph: {
    title:
      "Faucet and Sink Repair and Installation in Green Valley, Henderson, NV | Red Carpet Plumbing",
    description:
      "Licensed faucet and sink repair and installation for Green Valley homes. Dripping faucets, cartridge service, sink installs, and under-sink leak repair. Henderson, NV. Call (702) 567-9172.",
    url: "https://redcarpetplumbing.com/green-valley/faucet-sink-repair-installation/",
    siteName: "Red Carpet Plumbing",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

// Trust strip (4 items) rendered as a red brand-primary band, matching the GV
// cluster pattern.
const GV_FAUCET_SINK_TRUST = [
  "NV Licensed, #0048585A",
  "Faucet and Sink Repair and Installation",
  "Serving Green Valley and Henderson",
  // FLAG: VERIFY — "Transparent Pricing, No Hidden Fees" is a source-site claim.
  "Transparent Pricing, No Hidden Fees",
];

// ---------------------------------------------------------------------------
// Section 3 -- common faucet and sink problems (plain list).
// ---------------------------------------------------------------------------
const GV_FAUCET_SINK_PROBLEMS = [
  "Faucet that drips or leaks when turned off",
  "Low water pressure at a single faucet or throughout the home",
  "Faucet handles that are stiff, difficult to turn, or stuck",
  "Slow-draining sink or standing water in the basin",
  "Water pooling in the cabinet under the sink",
];

// ---------------------------------------------------------------------------
// Section 4 -- why Green Valley homes have faucet and sink problems (three H3
// causes). No inline links inside the cause bodies.
// ---------------------------------------------------------------------------
type LinkSeg = string | { href: string; text: string };

const GV_FAUCET_SINK_CAUSES: { title: string; body: string }[] = [
  {
    title: "Hard Water Mineral Buildup",
    body: "The Las Vegas Valley receives municipal water from Lake Mead at 17 to 24 grains per gallon (approximately 280 parts per million), placing it among the hardest municipal water supplies in the United States. Mineral deposits from this hard water accumulate inside faucet cartridges, aerators, and valve seats over time, restricting flow, accelerating wear on rubber O-rings and seals, and causing handles to stiffen. Faucets in Green Valley homes typically require more frequent cartridge replacement and aerator cleaning than faucets in soft-water markets. This effect is most pronounced in original Green Valley homes where fixtures have been in service for decades.",
  },
  {
    title:
      "Aging Fixtures and Supply Lines in Original Green Valley Neighborhoods",
    body: "Original Green Valley homes, built from the late 1970s through the mid-1990s, are now 30 to 45 years old. Many still have original supply lines, shut-off valves, and faucet bodies that have been corroding under hard water exposure since construction. Original braided supply lines and compression shut-off valves in homes of this age are at elevated risk of sudden failure, particularly when disturbed during a faucet repair or replacement. A plumber servicing a faucet in an original Green Valley home should always inspect the supply lines and valves beneath the sink as part of the job.",
  },
  {
    title: "Drain and P-Trap Deterioration",
    body: "Kitchen and bathroom sinks in original Green Valley homes have drain assemblies and P-traps that may be original to the home or from early replacement cycles. P-trap slip joints and drain basket seals in older fixtures deteriorate with age, especially in kitchens where grease and food waste accelerate seal wear. A slow drain that does not respond to clearing often has a partially blocked or damaged P-trap rather than a deeper line obstruction.",
  },
];

// ---------------------------------------------------------------------------
// Section 5 -- faucet and sink services (six cards). Cards 5 and 6 carry inline
// links.
// ---------------------------------------------------------------------------
const GV_FAUCET_SINK_SERVICES: {
  label: string;
  body: string;
  tail?: LinkSeg[];
}[] = [
  {
    label: "Dripping Faucet Repair",
    body: "Diagnosis and repair of dripping faucets including cartridge, O-ring, washer, and valve seat replacement for all faucet types. Las Vegas hard water accelerates wear on these internal components, making drips more common in Green Valley homes than in soft-water areas.",
  },
  {
    label: "Faucet Replacement",
    body: "Full faucet replacement for worn, corroded, or repeatedly failing fixtures in kitchens, bathrooms, and utility areas. We handle disconnection of the old faucet, supply line and shut-off valve inspection, and installation of the new fixture.",
  },
  {
    label: "Faucet Installation",
    body: "Professional installation of new faucets including supply line connection, shut-off valve inspection, and leak testing. We confirm full pressure and proper operation before completing the job.",
  },
  {
    label: "Kitchen and Bathroom Sink Installation",
    body: "Installation of kitchen and bathroom sinks including drain assembly, P-trap connection, and supply line hookup. We work with drop-in, undermount, vessel, pedestal, and vanity-top configurations.",
  },
  {
    label: "Under-Sink Leak Repair",
    body: "Repair of leaks under kitchen and bathroom sinks including drain connections, P-trap seals, supply lines, and shut-off valves.",
    tail: [
      " For persistent moisture that suggests a supply line leak beyond the sink area, see our ",
      {
        href: "/green-valley/leak-detection-repair/",
        text: "leak detection in Green Valley",
      },
      " page.",
    ],
  },
  {
    label: "Aerator, Cartridge, and Drain Service",
    body: "Cleaning and replacement of faucet aerators and cartridges to restore water pressure and stop drips caused by mineral buildup. Also includes repair and replacement of sink drain assemblies, pop-up drain hardware, and P-trap connections.",
    tail: [
      " For drain line obstructions beyond the P-trap, see our ",
      {
        href: "/green-valley/drain-cleaning/",
        text: "Green Valley drain cleaning",
      },
      " and ",
      { href: "/drain-cleaning/", text: "drain cleaning services" },
      " pages.",
    ],
  },
];

// ---------------------------------------------------------------------------
// Section 6 -- process (HowTo schema source of truth). Visible numbered steps
// and the HowTo JSON-LD both derive from this array.
// ---------------------------------------------------------------------------
const GV_FAUCET_SINK_STEPS = [
  {
    name: "Call and describe the problem",
    body: "Call Red Carpet Plumbing at (702) 567-9172 and describe what you are experiencing. For active leaks under a sink, shut off the supply at the valve beneath the sink before calling.",
  },
  {
    name: "Inspection and diagnosis",
    body: "A licensed plumber inspects the faucet, supply lines, shut-off valves, drain connections, and under-sink plumbing to identify the exact cause of the problem. We check for hard water mineral buildup, worn cartridges, corroded supply lines, and failed seals specific to Green Valley homes.",
  },
  {
    name: "Review options and approve",
    body: "We explain what we found and whether repair or replacement is the more practical choice for your faucet or sink. You approve the work before anything is done.",
  },
  {
    name: "Repair or installation with final check",
    body: "Our licensed plumber completes the repair or installation, checks all connections and supply lines for leaks, confirms full water pressure and drain flow, and cleans up before leaving.",
  },
];

// ---------------------------------------------------------------------------
// Section 7 -- why Green Valley homeowners choose Red Carpet Plumbing.
// ---------------------------------------------------------------------------
// FLAG: VERIFY — license number and transparent pricing are source-site claims.
const GV_FAUCET_SINK_WHY = [
  "Local Las Vegas Valley plumbing company familiar with Green Valley homes and the hard water conditions that accelerate faucet and fixture wear",
  "Transparent assessment of repair vs. replacement before any work is recommended",
  "Supply line and shut-off valve inspection included as part of every faucet service in original Green Valley homes",
  "Licensed plumbers, NV License #0048585A, C-1 Plumbing and Heating",
  "Transparent pricing with no hidden fees",
  "Faucet and sink service throughout Green Valley and Henderson",
];

// ---------------------------------------------------------------------------
// Section 8 -- Green Valley sub-areas served (plain-text chips, no built routes).
// ---------------------------------------------------------------------------
const GV_FAUCET_SINK_SUBAREAS = [
  "Original Green Valley",
  "Green Valley Ranch",
  "Green Valley Parkway Corridor",
  "Eastern Avenue Corridor",
  "Sunset Road Area",
  "Gibson Road Area",
];

// ---------------------------------------------------------------------------
// Section 9 -- FAQ (FAQPage schema source of truth). The visible FAQ section
// AND the FAQPage JSON-LD both derive from this single array, guaranteeing a
// character-for-character match. Do not edit one without the other.
// ---------------------------------------------------------------------------
const GV_FAUCET_SINK_FAQS = [
  {
    question: "Why is my faucet dripping in my Green Valley home?",
    answer:
      "A dripping faucet in a Green Valley home is almost always caused by a worn internal component. In cartridge faucets, a degraded cartridge or O-ring is the most common cause. In compression faucets, a worn rubber washer at the seat is typically to blame. Las Vegas Valley hard water at 17 to 24 grains per gallon accelerates wear on these components, so faucets in Green Valley homes may develop drips sooner than expected. A licensed plumber can diagnose the faucet type and replace the failing part.",
  },
  {
    question: "Why is my water pressure low at one faucet?",
    answer:
      "Low pressure at a single faucet is usually caused by a clogged aerator. The aerator is the small screen at the faucet tip that mixes air with water. In Green Valley, mineral deposits from Las Vegas Valley hard water build up inside aerators and restrict flow. Cleaning or replacing the aerator restores normal pressure in most cases. If the aerator is clear and pressure is still low, the issue may be in the supply line or shut-off valve beneath the sink.",
  },
  {
    question: "Should I repair or replace a leaky faucet in Green Valley?",
    answer:
      "Repair is usually the right choice for a faucet that is less than ten years old and has a single failing component such as a cartridge, O-ring, or washer. Replacement makes more sense for a faucet that leaks from the body, requires repeated repairs, shows visible corrosion, or is an older model where replacement parts are difficult to source. In original Green Valley homes, faucets that have been in service for 30 or more years and have significant mineral buildup inside the valve body are often more practical to replace than repair.",
  },
  {
    question: "What causes leaks under the sink?",
    answer:
      "Leaks under a sink are most commonly caused by a loose or corroded drain connection, a failing P-trap seal, a worn supply line, or a deteriorated shut-off valve. In original Green Valley homes, supply lines and shut-off valves that have been in place since the late 1970s through mid-1990s may be corroded from decades of hard water exposure and can fail when disturbed during faucet service. A plumber should inspect all under-sink connections as part of any faucet or sink repair.",
  },
  {
    question:
      "Does Red Carpet Plumbing install kitchen and bathroom sinks in Green Valley?",
    answer:
      "Yes. Red Carpet Plumbing installs kitchen sinks, bathroom sinks, and utility sinks for homes throughout Green Valley and Henderson. Sink installation includes connecting water supply lines, installing the drain assembly and P-trap, and confirming all connections are leak-free. We work with drop-in, undermount, vessel, pedestal, and vanity-top sink configurations and can advise on the plumbing requirements for your specific installation.",
  },
  {
    question:
      "Does Red Carpet Plumbing serve Green Valley for faucet and sink repair?",
    answer:
      "Yes. Red Carpet Plumbing provides faucet and sink repair and installation throughout Green Valley and the Henderson area. Green Valley is a community within the incorporated City of Henderson, and our Nevada Contractor License #0048585A covers plumbing work throughout Henderson including Green Valley and surrounding neighborhoods. Call (702) 567-9172 to request service or confirm coverage for your address.",
  },
];

// ---------------------------------------------------------------------------
// JSON-LD payloads. areaServed Place (Green Valley, Nevada) -> City (Henderson)
// -> State (Nevada). No sameAs on the service-location page. Provider carries a
// PostalAddress per the P46 brief variant. Breadcrumb is 3-level.
// ---------------------------------------------------------------------------
const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Faucet and Sink Repair and Installation in Green Valley, Henderson, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing repairs, replaces, and installs faucets and sinks for homes in Green Valley, Henderson, NV. Dripping faucets, low pressure, under-sink leaks, and new sink installation. Licensed plumbers. NV #0048585A.",
  url: "https://redcarpetplumbing.com/green-valley/faucet-sink-repair-installation/",
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
      name: "Faucet and Sink Repair and Installation in Green Valley",
      item: "https://redcarpetplumbing.com/green-valley/faucet-sink-repair-installation/",
    },
  ],
};

// FLAG: VERIFY — telephone in serviceSchema (carried forward from existing
// pages). Provider includes PostalAddress per the P46 brief variant.
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Faucet and Sink Repair and Installation in Green Valley",
  serviceType: "Faucet and Sink Repair and Installation",
  description:
    "Faucet and sink repair and installation for homes in Green Valley, Henderson, NV. Dripping faucet repair, cartridge and aerator service, faucet replacement, kitchen and bathroom sink installation, under-sink leak repair, and P-trap service. Nevada Contractor License #0048585A.",
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

// HowTo schema included because Section 6 renders the matching visible numbered
// process steps. Derived from GV_FAUCET_SINK_STEPS for a guaranteed text match.
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How We Handle Faucet and Sink Service in Green Valley",
  step: GV_FAUCET_SINK_STEPS.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.name,
    text: s.body,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: GV_FAUCET_SINK_FAQS.map((faq) => ({
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

export default function GreenValleyFaucetSinkPage() {
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
            {
              label: "Faucet and Sink Repair and Installation in Green Valley",
            },
          ]}
        />

        {/* SECTION 1: HERO */}
        {/* TODO: card.webp does not exist for this service; using hero.webp.
            Add a dedicated card asset if a separate one is desired. */}
        <HeroSection
          headingLevel="h1"
          headline="Faucet and Sink Repair and Installation in Green Valley, Henderson, NV"
          subheading="From dripping faucets and low water pressure to new sink installation, Red Carpet Plumbing handles faucet and sink repair and installation for homes throughout Green Valley and Henderson."
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
          formSlot={<QuoteFormPlaceholder title="Get Faucet and Sink Help" />}
          backgroundImage={{
            src: "/images/services/faucet-sink-repair-installation/hero.webp",
            alt: "Faucet and sink repair and installation in Green Valley, Henderson, NV",
          }}
        />

        {/* SECTION 2: TRUST STRIP */}
        <TrustStrip
          items={GV_FAUCET_SINK_TRUST}
          ariaLabel="Why Green Valley customers choose Red Carpet Plumbing for faucet and sink service"
        />

        {/* SECTION 3: COMMON PROBLEMS */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Common Faucet and Sink Problems in Green Valley Homes
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                These are the most common faucet and sink problems we see in Green
                Valley area homes. If you are experiencing any of the following,
                contact a licensed plumber for a professional assessment.
              </p>
            </div>
            <div className="mt-8 rounded-2xl border-l-4 border-brand-primary bg-brand-surface-alt p-6 sm:p-8">
              <ul className="space-y-3">
                {GV_FAUCET_SINK_PROBLEMS.map((problem) => (
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

        {/* SECTION 4: WHY GREEN VALLEY HOMES HAVE FAUCET AND SINK PROBLEMS */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Why Green Valley Homes Have Faucet and Sink Problems
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Faucet and sink problems in Green Valley homes are tied to a
                consistent set of local factors. For an overview of faucet and sink
                repair and installation services across the Las Vegas Valley, visit
                our{" "}
                <Link
                  href="/faucet-sink-repair-installation/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  faucet and sink repair and installation services
                </Link>{" "}
                page.
              </p>
            </div>
            <div className="mt-10 space-y-6">
              {GV_FAUCET_SINK_CAUSES.map((cause) => (
                <article
                  key={cause.title}
                  className="relative bg-white rounded-2xl p-6 pl-7 ring-1 ring-brand-surface-alt before:absolute before:bottom-6 before:left-0 before:top-6 before:w-1 before:rounded-full before:bg-brand-primary sm:p-8 sm:pl-9"
                >
                  <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                    {cause.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-brand-dark/80">
                    {cause.body}
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
                Faucet and Sink Repair and Installation Services in Green Valley
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing provides a full range of faucet and sink repair
                and installation services for Green Valley homes and properties.
              </p>
            </div>
            <ul className="mt-10 space-y-5">
              {GV_FAUCET_SINK_SERVICES.map((s) => (
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

        {/* SECTION 6: PROCESS (HowTo) */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    How We Handle Faucet and Sink Service in Green Valley
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    This is our standard process for faucet and sink repair and
                    installation in Green Valley area homes.
                  </p>
                </div>
              </SectionRevealItem>
              <SectionRevealItem className="mt-12">
                <ol className="space-y-8">
                  {GV_FAUCET_SINK_STEPS.map((step, index) => (
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

        {/* SECTION 7: WHY CHOOSE RED CARPET PLUMBING */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Why Green Valley Homeowners Choose Red Carpet Plumbing for Faucet
                and Sink Service
              </h2>
            </div>
            <ul className="mt-8 space-y-4">
              {GV_FAUCET_SINK_WHY.map((item) => (
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
                  Faucet or Sink Trouble in Your Green Valley Home?
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/80">
                  Red Carpet Plumbing handles dripping faucets, low water pressure,
                  under-sink leaks, and new sink installation throughout Green
                  Valley and Henderson. Call now and describe what you are seeing,
                  or request service online.
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

        {/* SECTION 8: SERVICE AREA */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Faucet and Sink Repair and Installation Across Green Valley and
                Henderson
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing provides faucet and sink repair and
                installation throughout Green Valley and the surrounding Henderson
                area. For a full list of plumbing services available in Green
                Valley, visit our{" "}
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
                . For other fixture services in Green Valley, see our{" "}
                <Link
                  href="/green-valley/toilet-repair-installation/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  toilet repair and installation in Green Valley
                </Link>{" "}
                page.
              </p>
            </div>
            <ul className="mt-8 flex flex-wrap gap-3">
              {GV_FAUCET_SINK_SUBAREAS.map((area) => (
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

        {/* SECTION 9: FAQ */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Frequently Asked Questions About Faucet and Sink Repair and
                Installation in Green Valley
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {GV_FAUCET_SINK_FAQS.map((faq) => (
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

        {/* SECTION 10: FINAL CTA */}
        <CTASection
          background="red"
          headline="Faucet or Sink Problem in Your Green Valley Home? We Can Help."
          body="Red Carpet Plumbing handles dripping faucets, low pressure, under-sink leaks, and new sink installation for Green Valley and Henderson homeowners. Transparent pricing and licensed plumbers."
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
