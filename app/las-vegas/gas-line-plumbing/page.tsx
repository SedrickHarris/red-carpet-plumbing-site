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
//   - License #0048585A + C-1 Plumbing and Heating classification — verified
//     business claim, but confirm the C-1 gas authorization language at launch.
//   - "Transparent Pricing, No Hidden Fees" trust items + Why-Choose bullet —
//     source-site claims, VERIFY.
//   - 24/7 availability for gas line emergencies (Why-Choose, Section 4
//     emergency card, mid-page CTA sub-note) — VERIFY.
//   - Outdoor extension permit-pulling / inspection claim (Section 4 card 4) —
//     VERIFY against current business operations.
//
// Las Vegas cluster pattern (matches app/las-vegas/re-piping/page.tsx):
// 5 separate JsonLd blocks WebPage -> BreadcrumbList -> Service -> HowTo ->
// FAQPage. areaServed `City` (Las Vegas) -> `State` (Nevada) — NOT Place, NOT
// AdministrativeArea. BreadcrumbList = 3 items. No AggregateRating / Review.
// HowTo + FAQPage both derive from a single const (visible = schema). Hero
// carries trustItems AND a separate red trust band (Section 2). Causes and
// services render as H3 article cards (re-piping sibling pattern).
//
// Hero uses gas-line-plumbing/hero.webp (358KB; the only asset present — no
// card.webp). Service provider includes a PostalAddress per the approved P48
// Service schema.
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title: "Gas Line Plumbing in Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides licensed gas line repair, installation, inspection, and emergency service in Las Vegas, NV. NV C-1 License #0048585A. Call (702) 567-9172.",
  alternates: {
    canonical: "https://redcarpetplumbing.com/las-vegas/gas-line-plumbing/",
  },
  openGraph: {
    title: "Gas Line Plumbing in Las Vegas, NV | Red Carpet Plumbing",
    description:
      "Licensed gas line repair, installation, and inspection in Las Vegas. CSST, black iron pipe, appliance hookup, permitted outdoor extensions. NV C-1 License #0048585A.",
    url: "https://redcarpetplumbing.com/las-vegas/gas-line-plumbing/",
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
// ---------------------------------------------------------------------------
const LV_GAS_LINE_FAQS = [
  {
    question: "What are the signs of a gas line leak in Las Vegas?",
    answer:
      "The most common sign of a gas line leak is a rotten egg or sulfur smell near a gas appliance, line, or meter. Mercaptan is added to natural gas specifically so leaks can be detected by smell. Other signs include a hissing or whistling sound near a gas line or connection, dead or dying patches of vegetation above a buried gas line, and an unexplained spike in your monthly gas bill. If you smell gas, leave the building immediately and call Southwest Gas before calling a plumber.",
  },
  {
    question: "Who is licensed to repair gas lines in Las Vegas and Nevada?",
    answer:
      "In Nevada, gas line repair and installation must be performed by a licensed contractor. Red Carpet Plumbing holds Nevada Contractor License #0048585A under the C-1 Plumbing and Heating classification, which authorizes gas line work throughout Clark County and the Las Vegas Valley. Always verify a contractor's license before allowing gas line work on your property. The Nevada State Contractors Board website allows you to search active license records.",
  },
  {
    question:
      "Should I call the gas company or a plumber for a gas line problem in Las Vegas?",
    answer:
      "If you smell gas or suspect an active leak, call Southwest Gas at 1-800-935-4748 from outside your home first. Southwest Gas is responsible for the gas line from the street up to and including your meter. Once they clear the area and confirm it is safe, call a licensed plumber like Red Carpet Plumbing for the inspection, repair, and safety test on the lines from the meter into your home and throughout the property.",
  },
  {
    question:
      "Can a plumber install a gas line for an outdoor grill, fire pit, or outdoor kitchen in Las Vegas?",
    answer:
      "Yes. Red Carpet Plumbing installs permitted gas line extensions for outdoor grills, fire pits, patio heaters, pool heaters, and outdoor kitchens throughout Las Vegas. This work requires a licensed contractor and typically requires a permit from Clark County or the City of Las Vegas depending on the property location. We handle the permit coordination and safety testing as part of the installation.",
  },
  {
    question: "Why do gas lines fail in Las Vegas homes?",
    answer:
      "Gas lines in Las Vegas face several stress factors not common in other regions. Summer heat regularly exceeds 110 degrees, and attic temperatures can go much higher, stressing CSST flexible tubing at exposed connections. Older homes have aging black iron pipe with threaded fittings sealed with compound that dries out over decades of heat cycles. Caliche soil throughout the Las Vegas Valley shifts seasonally, placing stress on buried line joints. Regular inspection is the most reliable way to identify these issues before they become hazards.",
  },
  {
    question:
      "Does Red Carpet Plumbing handle gas line emergencies in Las Vegas?",
    answer:
      "Yes. Red Carpet Plumbing provides emergency gas line service throughout Las Vegas. If you smell gas or suspect an active leak, leave the building immediately and call Southwest Gas first. Once the utility clears the area, call us at (702) 567-9172 and we will dispatch a licensed plumber for the inspection, repair, and safety verification. We are licensed for gas line work under NV C-1 License #0048585A and serve Las Vegas, Henderson, Summerlin, Paradise, and surrounding communities.",
  },
];

// ---------------------------------------------------------------------------
// Process steps — HowTo schema source of truth. Visible numbered steps and the
// HowTo JSON-LD both derive from this array.
// ---------------------------------------------------------------------------
const LV_GAS_LINE_STEPS = [
  {
    name: "Call and describe the issue",
    body: "Call Red Carpet Plumbing at (702) 567-9172 and describe what you are experiencing. If you smell gas or suspect an active leak, leave the property immediately, call Southwest Gas first, and then call us once the area is declared safe. For non-emergency service, describe the appliance, installation, or inspection you need.",
  },
  {
    name: "Licensed inspection and diagnosis",
    body: "A licensed plumber arrives to inspect your gas supply lines, connections, fittings, and appliance hookups. We use pressure testing and professional detection equipment to locate the source of any issue. We explain exactly what we found before any work begins.",
  },
  {
    name: "Review options and approve the work",
    body: "We present the repair, installation, or replacement options appropriate for the problem and explain what each involves. You approve the scope before any work begins. For permitted installations or extensions, we outline the permit requirements and timeline.",
  },
  {
    name: "Professional repair or installation with safety test",
    body: "Our licensed plumber completes the repair or installation and performs a final pressure test and safety check before the gas supply is restored. We verify all connections meet code requirements before leaving the job.",
  },
];

// FLAG: VERIFY before publishing — license number, C-1 classification,
// transparent pricing, and 24/7 availability are source-site claims. Confirm
// all before launch.
const WHY_CHOOSE = [
  "Local Las Vegas plumbing company familiar with CSST heat stress, caliche soil conditions, and aging gas line systems in Las Vegas homes",
  "Nevada Contractor License #0048585A, C-1 Plumbing and Heating classification, authorizing gas line work throughout Clark County",
  "Residential and commercial gas line service throughout Las Vegas",
  "Full range of gas line services: inspection, repair, replacement, appliance hookup, permitted extensions, and emergency response",
  "Transparent pricing with no hidden fees",
  "24/7 availability for gas line emergencies",
];

// Red brand-primary trust band (Section 2).
const LV_GAS_TRUST_STRIP = [
  "NV Licensed Gas Line Plumbers, #0048585A",
  "C-1 Plumbing and Heating License",
  "Serving Las Vegas and the Valley",
  "Transparent Pricing, No Hidden Fees",
];

const LV_GAS_NEIGHBORHOODS = [
  "Downtown Las Vegas",
  "Desert Inn / West Sahara",
  "Desert Shores",
  "Sunrise Manor",
  "Summerlin Adjacent",
  "Paradise Adjacent",
  "Spring Valley Adjacent",
  "Southwest Las Vegas",
  "Winchester",
  "Whitney",
];

// ---------------------------------------------------------------------------
// Why Las Vegas gas lines need specialized attention (Section 3) — H3 article
// cards (re-piping sibling pattern).
// ---------------------------------------------------------------------------
const LV_GAS_CAUSES = [
  {
    title: "Desert heat and CSST connector stress",
    body: "Las Vegas summers regularly exceed 110 degrees Fahrenheit, and temperatures inside attics and crawl spaces can reach significantly higher. Flexible CSST (corrugated stainless steel tubing) used in many Las Vegas homes is particularly vulnerable to heat stress at exposed connections and fittings. Extreme temperature swings between summer and winter also expand and contract metal pipe joints, weakening seals over time. Periodic inspection of exposed CSST connections is an important part of gas line maintenance for Las Vegas homeowners.",
  },
  {
    title: "Aging black iron pipe in older Las Vegas homes",
    body: "Homes built before the 1990s in the Las Vegas area often have original black iron gas pipe with threaded fittings sealed with pipe dope compound. Over decades of heat cycles and minor ground movement, that sealant can dry out and fitting connections can loosen. An annual inspection is the most reliable way to identify these issues before they become safety hazards. Homes in older Las Vegas neighborhoods and properties acquired through estate sales or long-term rentals benefit most from a full gas line assessment.",
  },
  {
    title: "Caliche soil and buried gas line joint stress",
    body: "The Las Vegas Valley sits on caliche-rich desert soil that shifts during dry periods and heavy rain events. Buried gas lines are subject to this ground movement over time, which can stress pipe joints and connections below grade. This is especially relevant in established Las Vegas neighborhoods where buried lines have been in place for several decades. A licensed plumber can pressure-test your gas system to identify any loss of pressure that might indicate a buried line issue.",
  },
  {
    title: "Outdoor living additions and permitted gas extensions",
    body: "Las Vegas homeowners frequently add outdoor gas appliances including built-in grills, fire pits, patio heaters, pool heaters, and outdoor kitchens. These additions require permitted gas line extensions installed by a licensed contractor. Red Carpet Plumbing handles the full process from planning the line route to coordinating permit requirements and completing the final safety test. Unpermitted gas line work creates safety risks and complicates future property transactions.",
  },
];

// ---------------------------------------------------------------------------
// Gas line services (Section 4) — H3 article cards. Inline links carried in
// approved copy.
// ---------------------------------------------------------------------------
const LV_GAS_SERVICES: { title: string; body: string; tail?: LinkSeg[] }[] = [
  {
    title: "Gas Leak Detection and Repair",
    body: "If you smell gas, hear a hissing sound near a gas line, or have noticed unexplained increases in your gas bill, we inspect and pressure-test the system to identify the source. Once Southwest Gas has cleared the area for an active leak, our licensed plumbers locate and repair the problem. We do not begin gas leak work until the area has been cleared by the utility.",
  },
  {
    title: "Gas Line Inspection and Pressure Testing",
    body: "Annual gas line inspections are recommended for Las Vegas homes, especially those with aging black iron pipe, CSST connections in attics or crawl spaces, or recent appliance additions. We inspect all accessible gas lines, fittings, and appliance connections and perform a pressure test to verify the system is operating safely.",
  },
  {
    title: "Gas Appliance Hookup and Connection",
    body: "A licensed plumber is required to connect gas supply lines to appliances including stoves, dryers, water heaters, furnaces, and pool heaters. Red Carpet Plumbing handles new appliance connections and reconnections after appliance replacement or renovation work.",
    tail: [
      " For gas water heater service, see our ",
      {
        href: "/las-vegas/water-heater-repair-installation/",
        text: "water heater repair and installation in Las Vegas",
      },
      " page.",
    ],
  },
  {
    // FLAG: VERIFY — permit-pulling and inspection claim should be confirmed
    // against current business operations.
    title: "Outdoor Gas Line Extensions and Permitted Installations",
    body: "We install permitted gas line extensions for outdoor grills, fire pits, patio heaters, and outdoor kitchens throughout Las Vegas. All outdoor gas line work is permitted and inspected as required by Clark County and the City of Las Vegas.",
  },
  {
    title: "Gas Line Repair and Replacement",
    body: "We repair and replace damaged, corroded, or aging gas supply lines for residential and commercial properties. This includes replacing aging black iron pipe runs, repairing CSST connections, and addressing corrosion or damage identified during inspection.",
  },
  {
    // FLAG: VERIFY — 24/7 emergency availability is a source-site claim.
    title: "Emergency Gas Line Service",
    body: "For gas line emergencies, call (702) 567-9172. If you smell gas or suspect an active leak, leave the building immediately and call Southwest Gas before calling us. Once the utility clears the area, we respond to perform the inspection, repair, and safety test.",
    tail: [
      " For all plumbing emergencies in Las Vegas, see our ",
      {
        href: "/las-vegas/emergency-plumbing/",
        text: "emergency plumbing in Las Vegas",
      },
      " page.",
    ],
  },
];

// ---------------------------------------------------------------------------
// JSON-LD payloads. areaServed `City` (Las Vegas) -> `State` (Nevada). No
// AggregateRating, no sameAs.
// ---------------------------------------------------------------------------
const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Gas Line Plumbing in Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides licensed gas line repair, installation, inspection, and emergency service in Las Vegas, NV. NV C-1 License #0048585A. Call (702) 567-9172.",
  url: "https://redcarpetplumbing.com/las-vegas/gas-line-plumbing/",
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
      name: "Gas Line Plumbing in Las Vegas, NV",
      item: "https://redcarpetplumbing.com/las-vegas/gas-line-plumbing/",
    },
  ],
};

// FLAG: VERIFY — telephone carried from sibling pattern. Confirm before launch.
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Gas Line Plumbing in Las Vegas",
  serviceType: "Gas Line Plumbing",
  description:
    "Red Carpet Plumbing provides licensed gas line repair, installation, inspection, pressure testing, appliance hookup, and emergency service for residential and commercial properties in Las Vegas, NV. NV C-1 Plumbing and Heating License #0048585A.",
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

// HowTo schema included because Section 5 renders the matching visible numbered
// process steps. Derived from LV_GAS_LINE_STEPS for a guaranteed text match.
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Red Carpet Plumbing Handles Gas Line Service in Las Vegas",
  step: LV_GAS_LINE_STEPS.map((step, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: step.name,
    text: step.body,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: LV_GAS_LINE_FAQS.map((faq) => ({
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

export default function LasVegasGasLinePage() {
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
            { label: "Gas Line Plumbing in Las Vegas, NV" },
          ]}
        />

        {/* SECTION 1: HERO */}
        <HeroSection
          headingLevel="h1"
          headline="Gas Line Plumbing in Las Vegas, NV"
          subheading="Red Carpet Plumbing provides licensed gas line repair, installation, inspection, and emergency service for homes and businesses throughout Las Vegas. Our plumbers hold Nevada Contractor License #0048585A under the C-1 Plumbing and Heating classification, which authorizes gas line work throughout Clark County and the Las Vegas Valley."
          trustItems={LV_GAS_TRUST_STRIP}
          primaryCTA={{
            label: "Call (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{
            label: "Request Gas Line Service",
            href: "/contact/",
          }}
          // FLAG: VERIFY — license number / C-1 classification are source-site claims.
          ctaNote="Licensed gas line plumbers. NV C-1 License #0048585A."
          formSlot={<QuoteFormPlaceholder title="Get Gas Line Help" />}
          backgroundImage={{
            src: "/images/services/gas-line-plumbing/hero.webp",
            alt: "Licensed gas line plumbing service in Las Vegas, NV",
          }}
        />

        {/* SECTION 2: TRUST STRIP */}
        <section
          aria-label="Why Las Vegas customers choose Red Carpet Plumbing for gas line plumbing"
          className="bg-brand-primary text-white"
        >
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-10 xl:px-12">
            <ul className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
              {LV_GAS_TRUST_STRIP.map((item) => (
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

        {/* SECTION 3: WHY LAS VEGAS GAS LINES NEED SPECIALIZED ATTENTION */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Why Las Vegas Gas Lines Need Specialized Attention
              </h2>
            </div>
            <div className="mt-10 space-y-6">
              {LV_GAS_CAUSES.map((c) => (
                <article
                  key={c.title}
                  className="rounded-2xl bg-brand-surface-alt p-6 ring-1 ring-brand-surface-alt sm:p-8"
                >
                  <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-brand-dark/80">
                    {c.body}
                  </p>
                </article>
              ))}
            </div>
            <p className="mt-8 text-base leading-7 text-brand-dark/70">
              Gas line issues that are caught during an annual inspection are
              significantly less disruptive and less costly than emergency repairs
              after a fitting failure or line rupture. Red Carpet Plumbing
              recommends inspections for all Las Vegas homes with aging pipe, CSST
              in attics or crawl spaces, or recent appliance or outdoor kitchen
              additions.
            </p>
          </div>
        </section>

        {/* SECTION 4: GAS LINE SERVICES WE PROVIDE */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Gas Line Services in Las Vegas
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing provides the full range of residential and
                commercial gas line services throughout Las Vegas. All gas line
                work is performed under NV Contractor License #0048585A. For full
                service details, see our{" "}
                <Link
                  href="/gas-line-plumbing/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  core gas line plumbing page
                </Link>
                .
              </p>
            </div>
            <div className="mt-10 space-y-6">
              {LV_GAS_SERVICES.map((s) => (
                <article
                  key={s.title}
                  className="rounded-2xl bg-white p-6 ring-1 ring-brand-surface-alt sm:p-8"
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

        {/* SECTION 5: OUR GAS LINE SERVICE PROCESS (HowTo) */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Our Gas Line Service Process
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Here is how Red Carpet Plumbing approaches gas line service for
                    Las Vegas homes and businesses.
                  </p>
                </div>
              </SectionRevealItem>
              <SectionRevealItem className="mt-12">
                <ol className="space-y-8">
                  {LV_GAS_LINE_STEPS.map((step, index) => (
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

        {/* SECTION 6: MID-PAGE CTA */}
        <section className="bg-brand-charcoal text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Gas Line Problem? Call a Licensed Las Vegas Plumber.
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/80">
                  Red Carpet Plumbing is licensed for gas line work throughout the
                  Las Vegas Valley. NV Contractor License #0048585A, C-1 Plumbing
                  and Heating.
                </p>
                {/* FLAG: VERIFY — 24/7 availability is a source-site claim. */}
                <p className="mt-3 text-sm font-medium text-white/70">
                  Available 24/7 for gas line emergencies.
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
                  Request Gas Line Service
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: WHY CHOOSE RED CARPET PLUMBING */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Why Choose Red Carpet Plumbing for Gas Line Services
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

        {/* SECTION 8: SERVICE AREAS */}
        <section className="bg-brand-charcoal text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="max-w-3xl text-left">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Gas Line Service Areas in Las Vegas
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/85">
                Red Carpet Plumbing provides licensed gas line services throughout
                Las Vegas and the surrounding communities of the Las Vegas Valley.
                We serve homeowners, property managers, restaurants, and commercial
                facilities across the city.
              </p>
              <p className="mt-6 text-lg leading-8 text-white/85">
                Common service calls come from older Las Vegas neighborhoods with
                aging black iron pipe, Summerlin communities with outdoor living
                additions requiring permitted extensions, and the Paradise and
                Strip corridor for commercial gas line inspection and repair. For
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
              {LV_GAS_NEIGHBORHOODS.map((name) => (
                <li key={name}>
                  <span className="block rounded-lg border border-white/10 bg-white/5 px-5 py-3 font-medium text-white/85">
                    {name}
                  </span>
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
                Frequently Asked Questions About Gas Line Plumbing in Las Vegas
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {LV_GAS_LINE_FAQS.map((faq) => (
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
        {/* FLAG: VERIFY — license number and trust claims in the body are
            source-site claims; confirm all before publishing. */}
        <CTASection
          background="red"
          headline="Ready to Schedule Gas Line Service in Las Vegas?"
          body="Red Carpet Plumbing provides licensed gas line inspection, repair, installation, and emergency service throughout Las Vegas and the Las Vegas Valley. NV License #0048585A, C-1 Plumbing and Heating."
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
