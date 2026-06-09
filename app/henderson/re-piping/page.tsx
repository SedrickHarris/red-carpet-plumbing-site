import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { HeroSection } from "@/components/HeroSection";
import { JsonLd } from "@/components/JsonLd";
import { QuoteFormPlaceholder } from "@/components/QuoteFormPlaceholder";
import { SectionReveal, SectionRevealItem } from "@/components/SectionReveal";
import { ServiceCard } from "@/components/ServiceCard";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";

// FLAG: VERIFY before publishing — the rating (4.8 stars / 76 Google reviews)
// and "Over 40 years" trust claims are source-site claims surfaced in the
// approved brief and shown on this page. License #0048585A, permit handling,
// and transparent-pricing are also source-site claims. Confirm before launch.
// Schema follows the established site-wide service-location pattern (Plumber
// provider; areaServed City Henderson + containedInPlace State Nevada, no
// sameAs; WebPage isPartOf WebSite; separate JsonLd blocks; HowTo for the
// visible process steps), per the standing guardrail. Like siblings P13/P14/P15
// and unlike the core /re-piping/ page, this service-location page omits
// AggregateRating (Guardrail 4) and hasCredential.

export const metadata: Metadata = {
  title: "Re-Piping Services in Henderson, NV | Red Carpet Plumbing",
  description:
    "Professional re-piping services in Henderson, NV. Red Carpet Plumbing replaces polybutylene, Kitec, galvanized, and aging copper pipe throughout Henderson. Serving Green Valley, Lake Las Vegas, and all Henderson communities. Permits pulled.",
  alternates: {
    canonical: "https://redcarpetplumbing.com/henderson/re-piping/",
  },
  openGraph: {
    title: "Re-Piping Services in Henderson, NV | Red Carpet Plumbing",
    description:
      "Whole-house and partial repiping throughout Henderson, NV. Green Valley polybutylene and copper replacement. Green Valley Ranch Kitec replacement. Permits pulled. Licensed plumbers.",
    url: "https://redcarpetplumbing.com/henderson/re-piping/",
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
// ---------------------------------------------------------------------------
const HENDERSON_REPIPE_FAQS = [
  {
    question: "What are the signs I need to repipe my Henderson home?",
    answer:
      "Common signs include recurring leaks in multiple locations, rust-colored or discolored water from the taps, consistently low water pressure throughout the home, frequent pinhole leaks in copper pipes, known defective pipe materials such as polybutylene or Kitec, a home built before 1990 that still has original plumbing, or multiple slab leaks on the same plumbing system. When multiple signs appear together, repiping is typically the more practical long-term solution than continued repairs.",
  },
  {
    question:
      "What pipe materials are most likely to fail in Henderson, NV homes?",
    answer:
      "Green Valley original homes built from the mid-1980s through the mid-1990s may have polybutylene pipe that degrades in chlorinated water and can fail without warning, as well as aging copper pipe thinned by 30 to 40 years of hard water mineral corrosion. Green Valley Ranch condominiums and HOA communities built from the late 1990s through approximately 2005 may have Kitec pipe with brass fittings that corrode in mineral-rich Las Vegas Valley water. Kitec is identifiable by orange or blue flexible pipes with brass fittings.",
  },
  {
    question: "Do I need a permit to repipe my house in Henderson?",
    answer:
      "Yes. A permit is required for whole-house repiping in Henderson. Repiping without a permit can create issues with home sales and insurance claims. Red Carpet Plumbing pulls the required permits and schedules the city inspection as part of the repiping project. A closed permit with final inspection sign-off is important documentation for Henderson homeowners.",
  },
  {
    question: "Are Green Valley homes good candidates for repiping?",
    answer:
      "Yes. Green Valley's original neighborhoods, built from the mid-1980s through the mid-1990s, have the highest concentration of repiping candidates in Henderson. These homes have copper supply lines with 30 to 40 years of hard water mineral exposure and some contain polybutylene pipe. When original Green Valley homes begin developing recurring leaks or have had multiple slab leaks on the same line, repiping is often the more practical long-term solution than continued repairs.",
  },
  {
    question:
      "What is the difference between PEX and copper repiping in Henderson?",
    answer:
      "PEX is flexible, resists hard water scale buildup, requires fewer fittings, and is faster to install with less drywall disruption. In Henderson, PEX runs through attic spaces require proper insulation because attic temperatures can exceed 150 degrees Fahrenheit. Copper is a proven material that is durable, naturally resistant to bacteria growth, and provides excellent water quality. Red Carpet Plumbing can help you evaluate which material is the better fit for your specific home.",
  },
  {
    question: "How long does whole-house repiping take in Henderson?",
    answer:
      "Most single-story Henderson homes can be repiped in one to two days. Water is restored each evening on multi-day projects so the household is not without water overnight. Multi-story homes, condominiums, and larger properties take longer. Red Carpet Plumbing will provide a timeline estimate based on your home's size and plumbing layout before work begins.",
  },
];

const HERO_SUBHEADING =
  "Henderson homes have elevated pipe failure rates driven by Green Valley's aging copper and polybutylene supply lines, Kitec pipe in Green Valley Ranch condominiums and HOA communities, and the Las Vegas Valley's hard water conditions. Red Carpet Plumbing provides whole-house and partial repiping using PEX or copper, replaces all failing pipe materials, and pulls all required permits as part of the project.";

// FLAG: VERIFY rating and "40 years" claims before publishing (see top).
const HERO_TRUST_ITEMS = [
  "4.8 stars, 76 Google reviews",
  "NV Licensed, #0048585A",
  "Over 40 years serving the Las Vegas Valley",
  "Permits pulled and inspections scheduled",
  "Transparent pricing, no hidden fees",
];

// 1b colored strip. Items are factual restatements of brief content (services
// offered, license, permit handling, materials) — no new business claims —
// consistent with the derived strips used on siblings P13/P14/P15.
const REPIPE_TRUST_STRIP = [
  "Whole-House and Partial Repiping",
  "NV Licensed, #0048585A",
  "Permits Pulled and Inspections Scheduled",
  "PEX and Copper Repiping",
];

const REPIPING_SIGNS = [
  "Recurring leaks in multiple locations throughout the home",
  "Rust-colored or discolored water from the taps",
  "Consistently low water pressure throughout the home",
  "Frequent pinhole leaks in copper pipes",
  "Known defective pipe materials such as polybutylene or Kitec",
  "A home built before 1990 that still has original plumbing",
  "Multiple slab leaks on the same plumbing system",
  "Reduced water quality affecting taste, odor, or appearance",
];

// Routed through string consts so the apostrophes ("home's", "valley's",
// "Green Valley's") do not trip react/no-unescaped-entities as JSX text.
const SIGNS_INTRO =
  "Repiping becomes the right solution when pipe problems are widespread rather than isolated. These are the signs that indicate a home's plumbing system is failing throughout rather than at a single point.";
const SIGNS_FOLLOW =
  "A single leak or isolated pressure issue may be repaired without repiping. When multiple signs appear together, or when the same line develops repeated failures, repiping is typically the more practical long-term solution. Red Carpet Plumbing assesses your Henderson home's plumbing system honestly and recommends the right approach for your specific situation.";
const PIPE_GUIDE_INTRO =
  "Henderson homes built across different eras contain different pipe materials, and each has its own failure profile under the valley's hard water conditions. Green Valley's development history creates a concentration of high-risk pipe materials in specific neighborhood eras.";

const PIPE_MATERIALS = [
  {
    title:
      "Polybutylene and Aging Copper in Green Valley's Original Neighborhoods (1985 to 1995)",
    body: "Green Valley's original neighborhoods, developed from the mid-1980s through the mid-1990s, contain the highest concentration of repiping candidates in Henderson. Homes from this era were built with copper supply lines that have now been exposed to Las Vegas Valley hard water for 30 to 40 years. The sustained mineral exposure thins copper pipe walls through pitting corrosion, producing the pinhole leaks that signal system-wide pipe thinning. Some homes from this same era also contain polybutylene pipe, a gray plastic material that degrades in chlorinated municipal water and can fail without warning. In a Green Valley original home where polybutylene is present alongside copper, both materials warrant evaluation.",
  },
  {
    title:
      "Kitec Pipe in Green Valley Ranch and Henderson Condominiums (Late 1990s to 2005)",
    body: "Green Valley Ranch, developed from the mid-1990s through the mid-2000s, includes a significant number of condominiums and HOA-managed communities built during the period when Kitec plumbing was in widespread use. Kitec has brass fittings that corrode when exposed to the minerals in hard water, eventually failing at connection points. The corrosion is accelerated by Las Vegas Valley hard water. Kitec is identifiable by orange or blue flexible pipes with brass fittings. Green Valley Ranch condo and HOA community owners and property managers who have not confirmed their pipe material should have the plumbing assessed.",
  },
  {
    title: "Hard Water Mineral Corrosion Across All Henderson Homes",
    body: "Henderson receives Las Vegas Valley municipal water from Lake Mead, which measures 17 to 24 grains per gallon of dissolved minerals (approximately 280 parts per million). This hard water accelerates pitting corrosion inside copper pipe walls throughout Henderson, regardless of neighborhood era. Homes built between approximately 1975 and 2000 with original copper supply lines are subject to 25 to 40 years of this corrosion. Multiple pinhole leaks in different locations in a Henderson home indicate pipe walls have thinned throughout the system rather than at isolated points.",
  },
  {
    title: "Galvanized Steel Pipe in Older Henderson Properties",
    body: "Some older Henderson properties, particularly commercial buildings and multi-unit residential properties built before the mid-1970s, may still have original galvanized steel supply pipe. Galvanized steel corrodes from the inside out under hard water conditions, progressively narrowing the pipe interior and reducing flow and water quality. Discolored water, reduced pressure, and a metallic taste are the most common indicators that galvanized pipe has deteriorated to the point where replacement is the practical solution.",
  },
];

// Section 4 service cards. Rendered as non-linked descriptive cards
// (built={false}) — the brief assigns no destination routes to these cards and
// the internal-link table includes none — matching the core /re-piping/ page
// and sibling P15 treatment. href is required by the component type but is not
// rendered when built is false.
const REPIPE_SERVICES = [
  {
    title: "Whole-House Repiping",
    description:
      "Whole-house repiping replaces all supply lines throughout the home from the main water line through to each fixture connection. This is the most comprehensive solution for Henderson homes with aging, failing, or defective pipe materials. Red Carpet Plumbing performs whole-house repipes using PEX or copper depending on the home's conditions and the homeowner's preferences.",
  },
  {
    title: "Partial Repiping",
    description:
      "When only a section of the plumbing system is failing or has been identified as a problem material, partial repiping replaces the affected lines without repiping the entire home. Partial repipes are common in Henderson when a specific area has developed recurring problems or when only one pipe material type needs replacement.",
  },
  {
    title: "Polybutylene Pipe Replacement",
    description:
      "Polybutylene pipe in Green Valley original homes built between 1985 and 1995 degrades in chlorinated water and can fail without warning. Red Carpet Plumbing replaces polybutylene supply lines with PEX or copper to eliminate the risk of sudden failure.",
  },
  {
    title: "Kitec Pipe Replacement",
    description:
      "Kitec pipe in Green Valley Ranch condominiums and HOA communities has brass fittings that corrode in mineral-rich Henderson water and fail at connection points. Red Carpet Plumbing replaces Kitec plumbing for Henderson homeowners, condo owners, and property managers.",
  },
  {
    title: "Galvanized Steel Pipe Replacement",
    description:
      "Galvanized steel pipes in older Henderson properties corrode from the inside out, narrowing the pipe interior and reducing pressure and water quality. Red Carpet Plumbing replaces galvanized steel with PEX or copper to restore full flow and water quality.",
  },
  {
    title: "PEX Repiping",
    description:
      "PEX is a flexible pipe that resists hard water scale buildup, requires fewer fittings, and is faster to install with less drywall disruption. In Henderson, PEX runs through attic spaces require proper insulation because attic temperatures can exceed 150 degrees Fahrenheit. Red Carpet Plumbing installs PEX to current Clark County code including required insulation.",
  },
  {
    title: "Copper Repiping",
    description:
      "Copper is a proven material that is durable, naturally resistant to bacteria growth, and provides excellent water quality. Red Carpet Plumbing installs Type L copper, the standard for residential plumbing in the Las Vegas Valley, for Henderson homeowners who prefer a traditional material.",
  },
];

const REPAIR_VS_REPIPE_DIRECT =
  "Spot repair is the right call when a leak is isolated, the surrounding pipe is in good condition, and the pipe material is not known to be defective. Repiping is the right call when multiple leaks have appeared in different locations, the pipe material is known to fail, or a professional assessment finds that pipe walls have thinned throughout the system.";

const HENDERSON_REPIPE_STEPS = [
  {
    name: "Assess the Existing Plumbing System",
    body: "We start by identifying the pipe materials present in your home, the age and condition of the system, and the scope of any repiping needed. We assess whether a whole-house repipe or targeted partial repipe is the right approach. We also identify permit requirements, which apply to whole-house repipes in Henderson.",
  },
  {
    name: "Present Material Options and Approach",
    body: "We explain the options for replacement materials, typically PEX or copper for residential repipes, including the pros and cons of each for your specific Henderson home and Las Vegas Valley hard water conditions. We present the project scope and installation approach before any work begins. We do not start work without your approval.",
  },
  {
    name: "Complete the Repipe with Minimal Disruption",
    body: "We protect floors and furniture before cutting drywall access points. We install the new piping, connect all fixtures, and restore water service. Most Henderson single-story homes are repiped in one to two days, and water is restored each evening on multi-day projects so you are not without water overnight.",
  },
  {
    name: "Test, Pull Permits, and Close Out the Work",
    body: "After installation, we pressure-test the entire new plumbing system to confirm it is leak-free. We pull the required permits for whole-house repipes in Henderson and schedule the city inspection. A closed permit with final inspection sign-off is important documentation for homeowners and a positive factor in home resale evaluations.",
  },
];

const COMMUNITIES_INTRO =
  "Repiping needs in Henderson are concentrated in Green Valley's original neighborhoods (polybutylene and aging copper) and Green Valley Ranch condominiums and HOA communities (Kitec). Red Carpet Plumbing serves all Henderson communities across all pipe material types.";

// Henderson communities. Green Valley and Lake Las Vegas link to their built
// hubs; the remainder render as crawlable text chips. Order matches the brief.
const COMMUNITIES: { name: string; href?: string }[] = [
  { name: "Green Valley", href: "/green-valley-plumbing-services/" },
  { name: "Lake Las Vegas", href: "/lake-las-vegas-plumbing-services/" },
  { name: "Green Valley Ranch" },
  { name: "Seven Hills" },
  { name: "MacDonald Ranch" },
  { name: "Anthem" },
  { name: "Tuscany Village" },
  { name: "Inspirada" },
  { name: "Whitney Ranch" },
  { name: "Downtown Henderson" },
];

// ---------------------------------------------------------------------------
// JSON-LD payloads (established site-wide shape; see NOTE at top of file).
// ---------------------------------------------------------------------------
const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Re-Piping Services in Henderson, NV | Red Carpet Plumbing",
  description:
    "Professional re-piping services in Henderson, NV. Red Carpet Plumbing replaces polybutylene, Kitec, galvanized, and aging copper pipe. Serving Green Valley, Lake Las Vegas, and all Henderson communities. Permits pulled.",
  url: "https://redcarpetplumbing.com/henderson/re-piping/",
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
      name: "Henderson Plumbing",
      item: "https://redcarpetplumbing.com/henderson-plumbing-services/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Re-Piping",
      item: "https://redcarpetplumbing.com/henderson/re-piping/",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Re-Piping Services",
  serviceType: "Re-Piping",
  description:
    "Professional re-piping services in Henderson, NV. Red Carpet Plumbing provides whole-house and partial repiping, polybutylene replacement, Kitec replacement, galvanized replacement, and PEX or copper installation throughout Henderson.",
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

// HowTo schema included because Section 6 renders the matching visible
// step-by-step process (titles + body) on the page.
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Red Carpet Plumbing Handles Repiping in Henderson",
  step: HENDERSON_REPIPE_STEPS.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.name,
    text: s.body,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: HENDERSON_REPIPE_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function HendersonRePipingPage() {
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
              label: "Henderson Plumbing",
              href: "/henderson-plumbing-services/",
            },
            { label: "Re-Piping" },
          ]}
        />

        {/* SECTION 1: HERO */}
        <HeroSection
          headingLevel="h1"
          headline="Re-Piping Services in Henderson, NV"
          subheading={HERO_SUBHEADING}
          trustItems={HERO_TRUST_ITEMS}
          primaryCTA={{
            label: "Call (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{
            label: "Request Repiping Service",
            href: "/contact/",
          }}
          ctaNote="Licensed plumbers. Permits pulled. All options explained before work begins."
          formSlot={<QuoteFormPlaceholder title="Get Repiping Help" />}
          backgroundImage={{
            src: "/images/services/re-piping/hero.webp",
            alt: "re-piping service in Henderson, NV",
          }}
        />

        {/* SECTION 1b: TRUST STRIP */}
        <section
          aria-label="Why Henderson customers choose Red Carpet Plumbing for repiping"
          className="bg-brand-primary text-white"
        >
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-10 xl:px-12">
            <ul className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
              {REPIPE_TRUST_STRIP.map((item) => (
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

        {/* SECTION 2: SIGNS YOU NEED REPIPING */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Signs Your Henderson Home May Need Repiping
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                {SIGNS_INTRO}
              </p>
            </div>
            <div className="mt-8 rounded-2xl border-l-4 border-brand-primary bg-brand-surface-alt p-6 sm:p-8">
              <ul className="space-y-3">
                {REPIPING_SIGNS.map((sign) => (
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
            <p className="mt-6 text-base leading-7 text-brand-dark/80">
              {SIGNS_FOLLOW}
            </p>
          </div>
        </section>

        {/* SECTION 3: HENDERSON PIPE MATERIAL GUIDE */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Pipe Materials That Fail in Henderson Homes
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                {PIPE_GUIDE_INTRO} For a broader overview, see our{" "}
                <Link
                  href="/re-piping/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  re-piping services
                </Link>
                .
              </p>
            </div>
            <div className="mt-10 space-y-6">
              {PIPE_MATERIALS.map((m) => (
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

        {/* SECTION 4: REPIPING SERVICES */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <SectionReveal>
              <SectionRevealItem>
                <div className="max-w-3xl text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Henderson Repiping Services
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Red Carpet Plumbing provides the full range of repiping
                    services for residential and commercial properties
                    throughout Henderson. We assess your existing pipe materials
                    and recommend the right solution for your home or building.
                    For help locating hidden water leaks first, see our{" "}
                    <Link
                      href="/henderson/leak-detection-repair/"
                      className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                    >
                      Henderson leak detection
                    </Link>{" "}
                    services.
                  </p>
                </div>
              </SectionRevealItem>
              <SectionRevealItem className="mt-14">
                {/* TODO: Replace ServiceImagePlaceholder with approved repiping service images when available. */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {REPIPE_SERVICES.map((card) => (
                    <ServiceCard
                      key={card.title}
                      title={card.title}
                      description={card.description}
                      href="/henderson/re-piping/"
                      built={false}
                    />
                  ))}
                </div>
              </SectionRevealItem>
            </SectionReveal>
          </div>
        </section>

        {/* SECTION 5: REPAIR VS. REPIPE */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                When to Repair and When to Repipe in Henderson
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                {REPAIR_VS_REPIPE_DIRECT}
              </p>
            </div>
            <div className="mt-10 space-y-6">
              <article className="rounded-2xl bg-white p-6 ring-1 ring-brand-surface-alt sm:p-8">
                <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                  When Spot Repair Is Appropriate
                </h3>
                <p className="mt-3 text-base leading-7 text-brand-dark/80">
                  A single pinhole leak in a copper pipe that is otherwise in
                  sound condition is a candidate for spot repair. An isolated
                  fitting failure in a plumbing system with no history of
                  recurring problems can often be repaired without repiping. Red
                  Carpet Plumbing will tell you honestly when a targeted repair
                  is the right solution.
                </p>
              </article>
              <article className="rounded-2xl bg-white p-6 ring-1 ring-brand-surface-alt sm:p-8">
                <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                  When Repiping Is the Right Call
                </h3>
                <p className="mt-3 text-base leading-7 text-brand-dark/80">
                  Repiping is the more practical long-term solution when the
                  same line has developed multiple leaks, when a Green Valley
                  home has polybutylene or Kitec pipe that has been flagged for
                  replacement, when copper pipe walls have thinned enough to
                  produce multiple pinhole leaks throughout the system, or when
                  a home has had multiple slab leaks on the same line. In
                  original Green Valley homes where slab leaks have been
                  repaired, the under-slab pipe condition often warrants a
                  conversation about whether pipe rerouting or repiping is the
                  right next step. Learn more about our{" "}
                  <Link
                    href="/henderson/slab-leak-detection-repair/"
                    className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                  >
                    Henderson slab leak detection
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/water-pipe-repair-replacement/"
                    className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                  >
                    water pipe repair and replacement
                  </Link>{" "}
                  services.
                </p>
              </article>
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
                    How Red Carpet Plumbing Handles Repiping in Henderson
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Here is what to expect when you call Red Carpet Plumbing for
                    repiping service in Henderson.
                  </p>
                </div>
              </SectionRevealItem>
              <SectionRevealItem className="mt-12">
                <ol className="space-y-8">
                  {HENDERSON_REPIPE_STEPS.map((step, index) => (
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
                  Ready to Repipe Your Henderson Home?
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/80">
                  Red Carpet Plumbing provides professional repiping services
                  throughout Henderson, including polybutylene replacement,
                  Kitec replacement, and whole-house PEX or copper repipes for
                  Green Valley, Green Valley Ranch, Lake Las Vegas, and all
                  Henderson communities. Permits pulled and inspections
                  scheduled as part of every whole-house project. For
                  around-the-clock help, see our{" "}
                  <Link
                    href="/henderson/emergency-plumbing/"
                    className="font-semibold text-white underline underline-offset-4 hover:text-white/80"
                  >
                    Henderson emergency plumbing
                  </Link>{" "}
                  services.
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
                  Request Repiping Service
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8: HENDERSON COMMUNITIES */}
        <section className="bg-brand-charcoal text-white">
          <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10 lg:pb-24 xl:px-12">
            <div className="max-w-3xl text-left">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Henderson Communities We Serve for Repiping
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/85">
                {COMMUNITIES_INTRO} For full coverage details, see our{" "}
                <Link
                  href="/henderson-plumbing-services/"
                  className="font-semibold text-white underline underline-offset-4 hover:text-white/80"
                >
                  Henderson plumbing services
                </Link>{" "}
                page.
              </p>
            </div>

            <ul className="mt-10 flex flex-wrap gap-3">
              {COMMUNITIES.map((c) => (
                <li key={c.name}>
                  {c.href ? (
                    <Link
                      href={c.href}
                      className="block rounded-lg bg-white px-5 py-3 font-semibold text-brand-charcoal shadow-sm transition-colors hover:bg-brand-surface-alt focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                      {c.name}
                    </Link>
                  ) : (
                    <span className="block rounded-lg border border-white/10 bg-white/5 px-5 py-3 font-medium text-white/85">
                      {c.name}
                    </span>
                  )}
                </li>
              ))}
            </ul>

            <p className="mt-8 text-base leading-7 text-white/80">
              For Las Vegas repiping service, visit our{" "}
              <Link
                href="/las-vegas/re-piping/"
                className="font-semibold text-white underline underline-offset-4 hover:text-white/80"
              >
                Las Vegas re-piping
              </Link>{" "}
              page.
            </p>

            <div className="mt-8 text-left">
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

        {/* SECTION 9: FAQ */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Frequently Asked Questions About Repiping in Henderson
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {HENDERSON_REPIPE_FAQS.map((faq) => (
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
          headline="Re-Piping Services Throughout Henderson, NV"
          body="Red Carpet Plumbing provides professional repiping services throughout Henderson, including whole-house and partial repipes, polybutylene replacement, Kitec replacement, and PEX or copper installation for Green Valley, Green Valley Ranch, Lake Las Vegas, and all Henderson communities. Permits pulled and inspections scheduled as part of every whole-house project."
          primaryCTA={{
            label: "Call (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{
            label: "Request Repiping Service",
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
