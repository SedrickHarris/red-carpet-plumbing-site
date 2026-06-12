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

// FLAG: VERIFY before publishing. "Transparent pricing, no hidden fees" is a
// source-site claim shown on this page. License #0048585A is a verified
// business claim.
// SCHEMA NOTE: Lake Las Vegas is a master-planned community within the
// incorporated City of Henderson, so Service.areaServed uses the Green Valley
// pattern: Place (Lake Las Vegas, Nevada) -> containedInPlace City (Henderson)
// -> containedInPlace State (Nevada). NOT AdministrativeArea. NOT Clark County.
// Permit jurisdiction: City of Henderson. Code jurisdiction: Clark County.
// No AggregateRating schema. FAQPage schema derives from LLV_SLAB_FAQS and
// HowTo from LLV_SLAB_STEPS (character-for-character with visible text).
// Non-invasive framing appears in the hero subheading, the trust strip, the
// Section 2 intro, the Section 3 H2, FAQ Q3, and the final CTA.
// CONTENT NOTE: Lake Las Vegas homes are 2000-2010 copper only -- a
// first-service-cycle slab leak narrative. No galvanized or polybutylene copy
// is present. Lake Las Vegas is never described as a city or as unincorporated.
// Hero image uses card.webp (hero.webp is the low-res Batch-3 asset), per the
// established LV / Henderson / Enterprise slab leak page precedent.

export const metadata: Metadata = {
  title:
    "Slab Leak Detection and Repair in Lake Las Vegas, Henderson, NV | Red Carpet Plumbing",
  // FLAG: approved brief description (~235 chars) exceeds the site's ≤160
  // meta-description standard; kept as approved pending a trim decision.
  description:
    "Non-invasive slab leak detection and repair in Lake Las Vegas, Henderson, NV. Red Carpet Plumbing uses acoustic sensors, pressure testing, and thermal imaging. All repair options explained. Licensed plumbers. Call (702) 567-9172.",
  alternates: {
    canonical:
      "https://redcarpetplumbing.com/lake-las-vegas/slab-leak-detection-repair/",
  },
  openGraph: {
    title:
      "Slab Leak Detection and Repair in Lake Las Vegas, Henderson, NV | Red Carpet Plumbing",
    description:
      "Non-invasive slab leak detection for Lake Las Vegas homes. Acoustic sensors, pressure testing, thermal imaging. Spot repair, pipe rerouting, and epoxy lining options explained. Licensed plumbers.",
    url: "https://redcarpetplumbing.com/lake-las-vegas/slab-leak-detection-repair/",
    siteName: "Red Carpet Plumbing",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

// Hero trust strip (slab-specific pattern). "All Repair Options Explained"
// required per brief.
const LLV_SLAB_TRUST = [
  "Non-Invasive Detection",
  "NV Licensed, #0048585A",
  "All Repair Options Explained",
  "Serving Lake Las Vegas and Henderson",
];

// Section 2 -- visible <ul> slab-specific warning signs.
const LLV_SLAB_WARNING_SIGNS = [
  "Warm or hot spots on your floors",
  "The sound of running water when all fixtures are off",
  "An unexplained increase in your water bill",
  "Damp or wet carpet or flooring without an obvious source",
  "Cracks appearing in walls, floors, or the home's foundation",
  "Low water pressure throughout the home with no other explanation",
  "Mold or mildew odor at floor level",
];

// ---------------------------------------------------------------------------
// Non-invasive detection methods (Section 3). Three titled cards.
// ---------------------------------------------------------------------------
const LLV_SLAB_METHODS = [
  {
    title: "Acoustic Electronic Detection",
    body: "Electronic acoustic sensors amplify the sound of pressurized water escaping from pipes beneath the slab. This equipment identifies the leak location to within a few inches through the floor surface without cutting or demolition. In Lake Las Vegas homes with copper lines running in slab chases, acoustic detection provides a precise leak location before any repair discussion begins.",
  },
  {
    title: "Pressure Testing",
    body: "Pressure testing isolates which section of the plumbing system is losing pressure, confirming an active slab leak and identifying which specific line is affected. For Lake Las Vegas homes with closed-loop systems, pressure testing is a critical first step in confirming that the water loss is originating from a sub-slab line rather than an above-slab connection.",
  },
  {
    title: "Thermal Imaging",
    body: "Thermal imaging cameras detect temperature differences caused by water escaping from hot water supply lines beneath the slab. This method is particularly effective for locating hot water slab leaks in Lake Las Vegas homes where the temperature contrast between the escaping water and the surrounding slab surface can be measured through the floor covering without any physical intrusion.",
  },
];

// ---------------------------------------------------------------------------
// Cause factors (Section 4). Copper first-service-cycle leads; the 2000-2010
// era has no galvanized/polybutylene risk, stated explicitly.
// NOTE: the approved Cause Factor 1 title used a double hyphen
// ("Mineral Corrosion -- First Service Cycle"); changed to a comma per the
// no-double-hyphen copy rule (same resolution the user approved for em dashes
// on Page 30). Flagged in the build report.
// ---------------------------------------------------------------------------
const LLV_SLAB_CAUSES = [
  {
    title: "Copper Pipe Mineral Corrosion, First Service Cycle",
    body: "Lake Las Vegas homes were built between 2000 and 2010 using copper plumbing. Unlike older Las Vegas Valley communities, Lake Las Vegas homes do not have galvanized steel or polybutylene pipe. What they do have is 15 to 25 years of continuous exposure to Lake Mead hard water measuring 17 to 24 grains per gallon. Dissolved calcium and magnesium deposit inside copper pipe walls over time, thinning them gradually. Homes in this age range are entering the first major slab leak window for their pipe generation.",
  },
  {
    title: "Caliche Soil and Slab Foundation Movement",
    body: "The Las Vegas Valley, including Lake Las Vegas, sits on caliche and expansive clay soils that shift with seasonal temperature changes and occasional rainfall. This soil movement places ongoing mechanical stress on copper pipes running beneath concrete slab foundations, creating friction points where pipe contacts concrete or rebar and stressing joints and fittings. The combination of mineral-thinned pipe walls and external soil stress increases the risk of sub-slab failure.",
  },
  {
    title: "Closed-Loop Pressure Cycling",
    body: "Most Lake Las Vegas homes operate on a closed-loop plumbing system due to backflow preventers at the street meter. Thermal expansion from water heating creates pressure increases in the closed system that stress pipe walls and joints. Repeated pressure cycling over 15 to 25 years accelerates fatigue in copper pipes already thinned by hard water mineral corrosion, contributing to slab leak failures at elbows, straight runs, and fitting connections beneath the slab.",
  },
];

// ---------------------------------------------------------------------------
// Repair options (Section 5). Spot repair links to water-pipe-repair-replacement;
// pipe rerouting links to re-piping (core route -- no Lake Las Vegas re-piping
// page exists). Epoxy has no link.
// ---------------------------------------------------------------------------
const LLV_SLAB_REPAIR_OPTIONS: {
  heading: string;
  body: string;
  linkPre?: string;
  linkHref?: string;
  linkText?: string;
  linkPost?: string;
}[] = [
  {
    heading: "Spot Repair Through Concrete",
    body: "Spot repair involves cutting the concrete slab directly above the confirmed leak location, repairing or replacing the damaged pipe section, and patching the concrete. This is a focused approach appropriate for an isolated leak in a pipe that is otherwise in good condition. For Lake Las Vegas homes where the surrounding copper pipe is assessed as sound, spot repair can be the right choice for a first-time localized failure.",
    linkPre: " See our ",
    linkHref: "/water-pipe-repair-replacement/",
    linkText: "water pipe repair and replacement",
    linkPost: " services.",
  },
  {
    heading: "Pipe Rerouting",
    body: "Pipe rerouting bypasses the damaged section entirely by running a new supply line through walls, ceilings, or accessible above-slab pathways, removing the aging copper from beneath the foundation. For Lake Las Vegas homes where the pipe condition assessment shows thinning consistent with 15 to 25 years of hard water exposure, or where the first slab leak suggests other failure points may develop on the same line, rerouting is often the more durable long-term solution.",
    linkPre: " See our ",
    linkHref: "/re-piping/",
    linkText: "re-piping services",
    linkPost:
      " for homes where the full supply system may be approaching similar condition.",
  },
  {
    heading: "Epoxy Pipe Lining",
    body: "Epoxy pipe lining applies a specialized coating to the interior of the existing pipe, sealing cracks and restoring pipe integrity from the inside without excavation. This method is less invasive than concrete cutting and works best for pipes with localized damage where the overall pipe structure is still intact. It is not appropriate for pipes with extensive corrosion or significantly narrowed interior diameter.",
  },
];

// ---------------------------------------------------------------------------
// Process steps -- HowTo schema source of truth.
// ---------------------------------------------------------------------------
const LLV_SLAB_STEPS = [
  {
    name: "Detect and locate the slab leak precisely",
    body: "We use acoustic sensors, pressure testing, and thermal imaging to locate the slab leak to within a few inches. Precise detection is essential because the repair method and scope of work depend on knowing the exact location and the condition of the affected pipe beneath the slab.",
  },
  {
    name: "Assess pipe condition and repair options",
    body: "We assess the age and condition of the affected pipe, the severity and location of the leak, and whether the surrounding pipe condition suggests additional failure points are likely on the same line. For Lake Las Vegas homes with 2000-2010 copper, we evaluate the mineral corrosion level before recommending a repair approach.",
  },
  {
    name: "Present repair options clearly before starting work",
    body: "We explain each applicable repair option, including what it involves, how long it takes, what access is required, and what the job will cost before any work begins. We do not start a slab leak repair without your understanding and approval of the approach.",
  },
  {
    name: "Complete the repair and verify the line holds pressure",
    body: "After completing the repair, we pressure test the affected line to confirm it holds pressure and the leak is fully resolved. We restore the concrete where cutting was required and clean up the work area before leaving. If a permit is required for the work performed, we handle filing with the City of Henderson.",
  },
];

// ---------------------------------------------------------------------------
// FAQ -- FAQPage schema source of truth.
// ---------------------------------------------------------------------------
const LLV_SLAB_FAQS = [
  {
    question: "What are the signs of a slab leak in a Lake Las Vegas home?",
    answer:
      "The most common signs of a slab leak in a Lake Las Vegas home are warm or hot spots on floors, the sound of running water when all fixtures are off, an unexplained increase in your water bill, damp or wet flooring without an obvious source, cracks appearing in walls or flooring, low water pressure throughout the home, and mold or mildew odor at floor level. These signs appear because the leak is beneath the concrete slab and cannot be seen directly from inside the home.",
  },
  {
    question: "Why do slab leaks happen in Lake Las Vegas homes?",
    answer:
      "Lake Las Vegas homes were built between 2000 and 2010 using copper plumbing. The Las Vegas Valley water supply from Lake Mead measures 17 to 24 grains per gallon, which is considered very hard. Over 15 to 25 years of continuous exposure, dissolved minerals corrode copper pipe walls from the inside, thinning them until failures develop beneath the slab. Caliche soil movement beneath the foundation adds mechanical stress to those pipes. Unlike older Las Vegas Valley communities, Lake Las Vegas homes do not have galvanized steel or polybutylene pipe, so copper mineral corrosion is the primary cause factor.",
  },
  {
    question:
      "How is a slab leak detected in Lake Las Vegas without breaking up the floor?",
    answer:
      "Professional slab leak detection uses acoustic sensors that amplify the sound of pressurized water escaping beneath the slab, pressure testing to confirm and isolate water loss to a specific line, and thermal imaging to identify temperature differences caused by hot water leaks. These non-invasive methods locate the slab leak precisely before any concrete cutting begins.",
  },
  {
    question: "What are my options for slab leak repair in Lake Las Vegas?",
    answer:
      "The three main repair options are spot repair through concrete, which involves cutting the slab at the leak location and repairing the damaged pipe section; pipe rerouting, which bypasses the damaged pipe entirely by running a new supply line through walls or above-slab pathways; and epoxy pipe lining, which seals cracks from the inside without excavation. The right option depends on the leak location, the age and condition of the surrounding pipe, and what is above the repair area. Red Carpet Plumbing explains all three options before any work begins.",
  },
  {
    question:
      "Should I choose pipe rerouting or spot repair for a slab leak in my Lake Las Vegas home?",
    answer:
      "For an isolated leak in a pipe that is otherwise in good condition, spot repair can be appropriate. For Lake Las Vegas homes where the surrounding copper pipe has been assessed and shows signs of thinning from 15 to 25 years of hard water exposure, or where the first slab leak suggests other failure points may develop on the same aging line, pipe rerouting is often the more durable long-term solution because it removes the aging pipe from beneath the slab entirely. Red Carpet Plumbing assesses pipe condition and presents both options before any repair begins.",
  },
  {
    question: "Who handles slab leak repair permits in Lake Las Vegas?",
    answer:
      "Slab leak repair permits in Lake Las Vegas are issued by the City of Henderson, which is the governing jurisdiction for the Lake Las Vegas community. Red Carpet Plumbing holds Nevada Contractor License #0048585A and handles all applicable City of Henderson permit and inspection requirements.",
  },
];

// ---------------------------------------------------------------------------
// Related-services rerouting cards. All three cluster siblings are built and
// linked directly (no TODO fallbacks).
// ---------------------------------------------------------------------------
const LLV_SLAB_REROUTING = [
  {
    title: "Leak Detection and Repair",
    body: "If the slab leak investigation reveals additional hidden leaks in walls, ceilings, or underground supply lines, Red Carpet Plumbing provides full leak detection and repair services for Lake Las Vegas homes.",
    // ACTIVATED: /lake-las-vegas/leak-detection-repair/ built (P38)
    linkHref: "/lake-las-vegas/leak-detection-repair/",
    linkText: "Lake Las Vegas leak detection and repair",
  },
  {
    title: "Emergency Plumbing",
    body: "If an active slab leak is causing water damage or requires immediate response, emergency plumbing support is available for Lake Las Vegas and Henderson homes.",
    // ACTIVATED: /lake-las-vegas/emergency-plumbing/ built (P36)
    linkHref: "/lake-las-vegas/emergency-plumbing/",
    linkText: "Lake Las Vegas emergency plumbing",
  },
  {
    title: "Drain Cleaning",
    body: "Hard water mineral deposits affect drain lines as well as supply lines. If drain issues are present alongside a slab leak investigation, Red Carpet Plumbing provides professional drain cleaning throughout Lake Las Vegas and Henderson.",
    // ACTIVATED: /lake-las-vegas/drain-cleaning/ built (P35)
    linkHref: "/lake-las-vegas/drain-cleaning/",
    linkText: "Lake Las Vegas drain cleaning",
  },
];

// ---------------------------------------------------------------------------
// JSON-LD payloads. areaServed uses Place (Lake Las Vegas) -> City (Henderson)
// -> State (Nevada). Do NOT use City for Lake Las Vegas directly. Do NOT use
// AdministrativeArea. Do NOT use Clark County.
// ---------------------------------------------------------------------------
const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Slab Leak Detection and Repair in Lake Las Vegas, Henderson, NV | Red Carpet Plumbing",
  description:
    "Non-invasive slab leak detection and repair for homes in Lake Las Vegas, Henderson, NV. Acoustic sensors, pressure testing, and thermal imaging. Spot repair, pipe rerouting, and epoxy lining options explained. Nevada Contractor License #0048585A.",
  url: "https://redcarpetplumbing.com/lake-las-vegas/slab-leak-detection-repair/",
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
      name: "Lake Las Vegas Plumbing Services",
      item: "https://redcarpetplumbing.com/lake-las-vegas-plumbing-services/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Slab Leak Detection and Repair in Lake Las Vegas",
      item: "https://redcarpetplumbing.com/lake-las-vegas/slab-leak-detection-repair/",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Slab Leak Detection and Repair in Lake Las Vegas, Henderson, NV",
  serviceType: "Slab Leak Detection and Repair",
  description:
    "Non-invasive slab leak detection and repair for homes in Lake Las Vegas, Henderson, NV. Acoustic sensors, pressure testing, and thermal imaging locate leaks precisely before any concrete cutting. Spot repair, pipe rerouting, and epoxy pipe lining options explained. Nevada Contractor License #0048585A, C-1 Plumbing and Heating.",
  provider: {
    "@type": "Plumber",
    name: "Red Carpet Plumbing",
    url: "https://redcarpetplumbing.com",
    // FLAG: VERIFY telephone (carried forward from existing pages).
    telephone: "+17025679172",
  },
  areaServed: {
    "@type": "Place",
    name: "Lake Las Vegas, Nevada",
    containedInPlace: {
      "@type": "City",
      name: "Henderson",
      containedInPlace: {
        "@type": "State",
        name: "Nevada",
      },
    },
  },
};

// HowTo schema included because Section 6 renders the matching visible numbered
// process steps.
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Red Carpet Plumbing Handles a Slab Leak in Lake Las Vegas",
  description:
    "The slab leak detection and repair process used by Red Carpet Plumbing for Lake Las Vegas, Henderson, NV homes.",
  step: LLV_SLAB_STEPS.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.name,
    text: s.body,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: LLV_SLAB_FAQS.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.answer,
    },
  })),
};

export default function LakeLasVegasSlabLeakPage() {
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
              label: "Lake Las Vegas Plumbing Services",
              href: "/lake-las-vegas-plumbing-services/",
            },
            { label: "Slab Leak Detection and Repair in Lake Las Vegas" },
          ]}
        />

        {/* SECTION 1: HERO */}
        <HeroSection
          headingLevel="h1"
          headline="Slab Leak Detection and Repair in Lake Las Vegas, Henderson, NV"
          subheading="Red Carpet Plumbing provides non-invasive slab leak detection and repair throughout Lake Las Vegas and Henderson, NV. Lake Las Vegas homes built between 2000 and 2010 are entering the first major service cycle for their copper plumbing, and hard water mineral corrosion is the primary cause of slab leaks in this community. We use acoustic sensors, pressure testing, and thermal imaging to locate slab leaks precisely before any concrete is cut, and we explain all repair options before work begins. NV Contractor License #0048585A."
          trustItems={LLV_SLAB_TRUST}
          primaryCTA={{
            label: "Call (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{
            label: "Request Slab Leak Detection",
            href: "/contact/",
          }}
          ctaNote="Licensed plumbers. Non-invasive detection. All repair options explained."
          formSlot={<QuoteFormPlaceholder title="Get Slab Leak Help" />}
          backgroundImage={{
            src: "/images/services/slab-leak-detection-repair/card.webp",
            alt: "slab leak detection and repair in Lake Las Vegas, Henderson, NV",
          }}
        />

        {/* SECTION 2: AEO DIRECT ANSWER + WARNING SIGNS */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Signs of a Slab Leak in Your Lake Las Vegas Home
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Warm or hot spots on your floors are one of the earliest and most
                reliable signs of a slab leak, and they are especially common in
                Lake Las Vegas homes where copper supply lines beneath the slab
                are now 15 to 25 years old. Because the leak is beneath the
                concrete foundation, it may be active for weeks or months before
                any visible surface damage appears inside the home. If you notice
                any of the signs listed below, a professional non-invasive
                inspection can confirm whether a slab leak is present and locate
                it precisely. For general information on slab leak detection, see
                our{" "}
                <Link
                  href="/slab-leak-detection-repair/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  slab leak detection and repair services
                </Link>{" "}
                page.
              </p>
            </div>

            <div className="mt-10">
              <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                Common Signs of a Slab Leak in Lake Las Vegas
              </h3>
              <div className="mt-4 rounded-2xl border-l-4 border-brand-primary bg-brand-surface-alt p-6 sm:p-8">
                <ul className="space-y-3">
                  {LLV_SLAB_WARNING_SIGNS.map((sign) => (
                    <li key={sign} className="flex items-start gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-2 inline-block h-2 w-2 flex-none rounded-full bg-brand-primary"
                      />
                      <span className="text-base leading-7 text-brand-dark/80">
                        {sign}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: DETECTION METHODS */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Non-Invasive Slab Leak Detection Methods Used in Lake Las Vegas
              </h2>
            </div>
            <div className="mt-10 space-y-6">
              {LLV_SLAB_METHODS.map((m) => (
                <article
                  key={m.title}
                  className="rounded-2xl bg-white p-6 ring-1 ring-brand-surface-alt sm:p-8"
                >
                  <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                    {m.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-brand-dark/80">
                    {m.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: CAUSE FACTORS */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    What Causes Slab Leaks in Lake Las Vegas Homes?
                  </h2>
                </div>
              </SectionRevealItem>
              <SectionRevealItem className="mt-10">
                <ul className="space-y-5">
                  {LLV_SLAB_CAUSES.map((c) => (
                    <li
                      key={c.title}
                      className="rounded-2xl bg-brand-surface-alt p-6 ring-1 ring-brand-surface-alt sm:p-8"
                    >
                      <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                        {c.title}
                      </h3>
                      <p className="mt-3 text-base leading-7 text-brand-dark/80">
                        {c.body}
                      </p>
                    </li>
                  ))}
                </ul>
              </SectionRevealItem>
            </SectionReveal>
          </div>
        </section>

        {/* SECTION 5: REPAIR OPTIONS */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Slab Leak Repair Options for Lake Las Vegas Homes
              </h2>
            </div>
            <div className="mt-10 space-y-6">
              {LLV_SLAB_REPAIR_OPTIONS.map((o) => (
                <article
                  key={o.heading}
                  className="rounded-2xl bg-white p-6 ring-1 ring-brand-surface-alt sm:p-8"
                >
                  <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                    {o.heading}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-brand-dark/80">
                    {o.body}
                    {o.linkHref ? (
                      <>
                        {o.linkPre}
                        <Link
                          href={o.linkHref}
                          className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                        >
                          {o.linkText}
                        </Link>
                        {o.linkPost}
                      </>
                    ) : null}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6: PROCESS STEPS (HowTo) */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    How Red Carpet Plumbing Handles a Slab Leak in Lake Las Vegas
                  </h2>
                </div>
              </SectionRevealItem>
              <SectionRevealItem className="mt-12">
                <ol className="space-y-8">
                  {LLV_SLAB_STEPS.map((step, index) => (
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

        {/* SECTION 7: SERVICE AREA NOTE */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Serving Lake Las Vegas as Part of Henderson, NV
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Lake Las Vegas is a master-planned resort community within the
                incorporated City of Henderson, Nevada. Slab leak repair permits
                in Lake Las Vegas are issued by the City of Henderson. All work
                meets Clark County plumbing code requirements. Red Carpet Plumbing
                serves Lake Las Vegas as part of its broader Henderson service
                area. For a full list of plumbing services available in this area,
                visit our{" "}
                <Link
                  href="/lake-las-vegas-plumbing-services/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  Lake Las Vegas plumbing services
                </Link>{" "}
                page or our{" "}
                <Link
                  href="/henderson-plumbing-services/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  Henderson plumbing services
                </Link>{" "}
                page.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 8: FAQ */}
        <section className="bg-white">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Slab Leak Questions for Lake Las Vegas Homeowners
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {LLV_SLAB_FAQS.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl bg-brand-surface-alt p-6 shadow-sm ring-1 ring-brand-surface-alt open:border-l-4 open:border-brand-primary open:pl-4 sm:p-8"
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

        {/* SECTION 9: RELATED SERVICES (rerouting cards) */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="max-w-4xl text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Related Plumbing Services in Lake Las Vegas
              </h2>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {LLV_SLAB_REROUTING.map((card) => (
                <article
                  key={card.title}
                  className="flex flex-col rounded-2xl bg-white p-6 ring-1 ring-brand-surface-alt sm:p-8"
                >
                  <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                    {card.title}
                  </h3>
                  <p className="mt-3 flex-1 text-base leading-7 text-brand-dark/80">
                    {card.body}
                  </p>
                  <Link
                    href={card.linkHref}
                    className="mt-4 inline-flex items-center font-semibold text-brand-primary hover:text-brand-primary-hover"
                  >
                    {card.linkText}
                    <span aria-hidden="true" className="ml-1">
                      &rarr;
                    </span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 10: FINAL CTA */}
        <CTASection
          background="red"
          headline="Suspect a Slab Leak in Your Lake Las Vegas Home?"
          body="Red Carpet Plumbing provides non-invasive slab leak detection and repair for homes throughout Lake Las Vegas and Henderson, NV. Acoustic sensors, pressure testing, and thermal imaging locate the leak precisely before any concrete is cut. All repair options explained before work begins. Licensed plumbers. Call us or request service online."
          primaryCTA={{
            label: "Call (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{
            label: "Request Slab Leak Detection",
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
