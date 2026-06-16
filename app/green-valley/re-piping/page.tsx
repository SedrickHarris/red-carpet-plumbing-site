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
import TrustStrip from "@/components/TrustStrip";

// FLAG: VERIFY before publishing — the rating (4.8 stars / 76 Google reviews),
// "Over 40 years," and "24/7 emergency service" trust claims are source-site
// claims surfaced in the approved brief and shown on this page. License
// #0048585A and transparent-pricing are also source-site claims. Confirm all
// before final launch.
// Schema follows the established site-wide service-location pattern (Plumber
// provider; areaServed Place (Green Valley) + containedInPlace City (Henderson)
// + containedInPlace State Nevada; WebPage isPartOf WebSite; 5 separate JsonLd
// blocks; HowTo for the visible process steps). No AggregateRating schema.
// Green Valley is a community within the incorporated City of Henderson — never
// described as a city or unincorporated community.
// NOTE: /green-valley/slab-leak-detection-repair/ (P33) is built, and its
// rerouting and related-services links to /green-valley/re-piping/ are active.

export const metadata: Metadata = {
  title: "Re-Piping Services in Green Valley, Henderson, NV | Red Carpet Plumbing",
  // FLAG: description below is the approved brief string (~172 chars). It
  // exceeds the site's ≤160 meta-description standard; kept as approved pending
  // a trim decision. See build report.
  description:
    "Whole-house and partial re-piping in Green Valley, Henderson, NV. Polybutylene, Kitec, and aging copper pipe replacement. PEX and copper. Permits pulled. Call (702) 567-9172.",
  alternates: {
    canonical: "https://redcarpetplumbing.com/green-valley/re-piping/",
  },
  openGraph: {
    title:
      "Re-Piping Services in Green Valley, Henderson, NV | Red Carpet Plumbing",
    description:
      "Licensed re-piping for original Green Valley and Green Valley Ranch homes. Polybutylene, Kitec, aging copper replacement. PEX and copper installations. Permits pulled. Call (702) 567-9172.",
    url: "https://redcarpetplumbing.com/green-valley/re-piping/",
    siteName: "Red Carpet Plumbing",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

// ---------------------------------------------------------------------------
// FAQ source of truth. Visible FAQ section AND FAQPage JSON-LD both derive
// from this single array. Character-for-character match required.
// ---------------------------------------------------------------------------
const GV_REPIPE_FAQS = [
  {
    question: "What are the signs I need to repipe my Green Valley home?",
    answer:
      "Common signs include recurring leaks in multiple locations, rust-colored or discolored water from the taps, consistently low water pressure throughout the home, frequent pinhole leaks in copper pipes, known defective pipe materials such as polybutylene or Kitec, a home built before 1990 that still has original plumbing, or multiple slab leaks on the same plumbing system. When multiple signs appear together, repiping is typically the more practical long-term solution than continued repairs.",
  },
  {
    question: "What pipe materials fail in Green Valley homes?",
    answer:
      "Green Valley original homes built from the late 1970s through the mid-1990s may have polybutylene pipe that degrades in chlorinated water and can fail without warning, as well as aging copper pipe thinned by 30 to 45 years of hard water mineral corrosion. Green Valley Ranch condominiums and HOA communities built from the late 1990s through approximately 2005 may have Kitec pipe with brass fittings that corrode in mineral-rich Las Vegas Valley water. Kitec is identifiable by orange or blue flexible pipes with brass fittings.",
  },
  {
    question: "Do I need a permit to repipe my house in Green Valley?",
    answer:
      "Yes. A permit is required for whole-house repiping in Green Valley. Permits are pulled through the City of Henderson, which has jurisdiction over Green Valley. Repiping without a permit can create issues with home sales and insurance claims. Red Carpet Plumbing pulls the required permits and schedules the city inspection as part of the repiping project. A closed permit with final inspection sign-off is important documentation for Green Valley homeowners.",
  },
  {
    question: "Are Green Valley homes good candidates for repiping?",
    answer:
      "Yes. Green Valley's original neighborhoods, built from the late 1970s through the mid-1990s, have the highest concentration of repiping candidates in Henderson. These homes have copper supply lines with 30 to 45 years of hard water mineral exposure and some contain polybutylene pipe. When original Green Valley homes begin developing recurring leaks or have had multiple slab leaks on the same line, repiping is often the more practical long-term solution than continued repairs.",
  },
  {
    question:
      "What is the difference between PEX and copper repiping in Green Valley?",
    answer:
      "PEX is flexible, resists hard water scale buildup, requires fewer fittings, and is faster to install with less drywall disruption. In Green Valley, PEX runs through attic spaces require proper insulation because attic temperatures can exceed 150 degrees Fahrenheit. Copper is a proven material that is durable, naturally resistant to bacteria growth, and provides excellent water quality. Red Carpet Plumbing can help you evaluate which material is the better fit for your specific home.",
  },
  {
    question: "How long does whole-house repiping take in Green Valley?",
    answer:
      "Most single-story Green Valley homes can be repiped in one to two days. Water is restored each evening on multi-day projects so the household is not without water overnight. Multi-story homes, condominiums, and larger properties take longer. Red Carpet Plumbing will provide a timeline estimate based on your home's size and plumbing layout before work begins.",
  },
];

// ---------------------------------------------------------------------------
// Signs that repiping is needed — visible <ul> in Section 2. 8 items.
// ---------------------------------------------------------------------------
const REPIPING_SIGNS: string[] = [
  "Recurring leaks in multiple locations throughout the home",
  "Rust-colored or discolored water from the taps",
  "Consistently low water pressure throughout the home",
  "Frequent pinhole leaks in copper pipes",
  "Known defective pipe materials such as polybutylene or Kitec",
  "A home built before 1990 that still has original plumbing",
  "Multiple slab leaks on the same plumbing system",
  "Reduced water quality affecting taste, odor, or appearance",
];

// ---------------------------------------------------------------------------
// Pipe material guide — Section 3. Four H3 title + body blocks.
// Original GV polybutylene/copper leads; timeline extended to late 1970s.
// ---------------------------------------------------------------------------
const GV_PIPE_MATERIALS: { title: string; body: string }[] = [
  {
    title:
      "Polybutylene and Aging Copper in Green Valley's Original Neighborhoods (Late 1970s to 1995)",
    body: "Green Valley's original neighborhoods, developed from the late 1970s through the mid-1990s, contain the highest concentration of repiping candidates in Henderson. Homes from this era were built with copper supply lines that have now been exposed to Las Vegas Valley hard water for 30 to 45 years. The sustained mineral exposure thins copper pipe walls through pitting corrosion, producing the pinhole leaks that signal system-wide pipe thinning. Some homes from this same era also contain polybutylene pipe, a gray plastic material that degrades in chlorinated municipal water and can fail without warning. In a Green Valley original home where polybutylene is present alongside copper, both materials warrant evaluation.",
  },
  {
    title:
      "Kitec Pipe in Green Valley Ranch and Henderson Condominiums (Late 1990s to 2005)",
    body: "Green Valley Ranch, developed from the mid-1990s through the mid-2000s, includes a significant number of condominiums and HOA-managed communities built during the period when Kitec plumbing was in widespread use. Kitec has brass fittings that corrode when exposed to the minerals in hard water, eventually failing at connection points. The corrosion is accelerated by Las Vegas Valley hard water. Kitec is identifiable by orange or blue flexible pipes with brass fittings. Green Valley Ranch condo and HOA community owners and property managers who have not confirmed their pipe material should have the plumbing assessed.",
  },
  {
    title: "Hard Water Mineral Corrosion Across All Green Valley Homes",
    body: "Green Valley receives Las Vegas Valley municipal water from Lake Mead, measuring 17 to 24 grains per gallon of dissolved minerals (approximately 280 parts per million). This hard water accelerates pitting corrosion inside copper pipe walls throughout Green Valley, regardless of neighborhood era. Homes built between approximately 1975 and 2000 with original copper supply lines are subject to 25 to 45 years of this corrosion. Multiple pinhole leaks in different locations indicate pipe walls have thinned throughout the system rather than at isolated points.",
  },
  {
    title: "Galvanized Steel Pipe in Older Green Valley Properties",
    body: "Some older Green Valley properties and commercial buildings built before the mid-1970s may still have original galvanized steel supply pipe. Galvanized steel corrodes from the inside out under hard water conditions, progressively narrowing the pipe interior and reducing flow and water quality. Discolored water, reduced pressure, and a metallic taste are the most common indicators that galvanized pipe has deteriorated to the point where replacement is the practical solution.",
  },
];

// ---------------------------------------------------------------------------
// Service cards — Section 4. Non-linked descriptive cards (built={false})
// matching the established pattern on core /re-piping/ and all sibling pages.
// No route assignments for these cards — they are descriptive only.
// ---------------------------------------------------------------------------
const GV_REPIPE_SERVICES = [
  {
    title: "Whole-House Repiping",
    description:
      "Whole-house repiping replaces all supply lines throughout the home from the main water line through to each fixture connection. This is the most comprehensive solution for Green Valley homes with aging, failing, or defective pipe materials. Red Carpet Plumbing performs whole-house repipes using PEX or copper depending on the home's conditions and the homeowner's preferences.",
  },
  {
    title: "Partial Repiping",
    description:
      "When only a section of the plumbing system is failing or has been identified as a problem material, partial repiping replaces the affected lines without repiping the entire home. Partial repipes are common in Green Valley when a specific area has developed recurring problems or when only one pipe material type needs replacement.",
  },
  {
    title: "Polybutylene Pipe Replacement",
    description:
      "Polybutylene pipe in original Green Valley homes built from the late 1970s through mid-1995 degrades in chlorinated water and can fail without warning. Red Carpet Plumbing replaces polybutylene supply lines with PEX or copper to eliminate the risk of sudden failure.",
  },
  {
    title: "Kitec Pipe Replacement",
    description:
      "Kitec pipe in Green Valley Ranch condominiums and HOA communities has brass fittings that corrode in mineral-rich Henderson water and fail at connection points. Red Carpet Plumbing replaces Kitec plumbing for Green Valley Ranch homeowners, condo owners, and property managers.",
  },
  {
    title: "Galvanized Steel Pipe Replacement",
    description:
      "Galvanized steel pipes in older Green Valley properties corrode from the inside out, narrowing the pipe interior and reducing pressure and water quality. Red Carpet Plumbing replaces galvanized steel with PEX or copper to restore full flow and water quality.",
  },
  {
    title: "PEX Repiping",
    description:
      "PEX is a flexible pipe that resists hard water scale buildup, requires fewer fittings, and is faster to install with less drywall disruption. In Green Valley, PEX runs through attic spaces require proper insulation because attic temperatures can exceed 150 degrees Fahrenheit. Red Carpet Plumbing installs PEX to current Clark County code including required insulation.",
  },
  {
    title: "Copper Repiping",
    description:
      "Copper is a proven material that is durable, naturally resistant to bacteria growth, and provides excellent water quality. Red Carpet Plumbing installs Type L copper, the standard for residential plumbing in the Las Vegas Valley, for Green Valley homeowners who prefer a traditional material.",
  },
];

// ---------------------------------------------------------------------------
// HowTo steps — must match the visible numbered process exactly.
// ---------------------------------------------------------------------------
const GV_REPIPE_STEPS: { name: string; body: string }[] = [
  {
    name: "Assess the Existing Plumbing System",
    body: "We start by identifying the pipe materials present in your home, the age and condition of the system, and the scope of any repiping needed. We assess whether a whole-house repipe or targeted partial repipe is the right approach. We also identify permit requirements, which apply to whole-house repipes in Green Valley, with permits pulled through the City of Henderson.",
  },
  {
    name: "Present Material Options and Approach",
    body: "We explain the options for replacement materials, typically PEX or copper for residential repipes, including the pros and cons of each for your specific Green Valley home and Las Vegas Valley hard water conditions. We present the project scope and installation approach before any work begins. We do not start work without your approval.",
  },
  {
    name: "Complete the Repipe with Minimal Disruption",
    body: "We protect floors and furniture before cutting drywall access points. We install the new piping, connect all fixtures, and restore water service. Most Green Valley single-story homes are repiped in one to two days, and water is restored each evening on multi-day projects so you are not without water overnight.",
  },
  {
    name: "Test, Pull Permits, and Close Out the Work",
    body: "After installation, we pressure-test the entire new plumbing system to confirm it is leak-free. We pull the required permits for whole-house repipes in Green Valley through the City of Henderson and schedule the city inspection. A closed permit with final inspection sign-off is important documentation for homeowners and a positive factor in home resale evaluations.",
  },
];

// ---------------------------------------------------------------------------
// Trust strip — 4 items matching Henderson re-piping sibling pattern.
// ---------------------------------------------------------------------------
const REPIPE_TRUST_STRIP: string[] = [
  "Whole-House and Partial Repiping",
  // FLAG: verify before final launch.
  "NV Licensed, #0048585A",
  "Permits Pulled and Inspections Scheduled",
  "PEX and Copper Repiping",
];

// ---------------------------------------------------------------------------
// Related services block. All four GV cluster siblings (P30-P33) are built.
// All render as live links — no TODO-BATCH-6 entries remain.
// ---------------------------------------------------------------------------
const RELATED_SERVICES: { label: string; href: string }[] = [
  {
    label: "Green Valley Plumbing Services",
    href: "/green-valley-plumbing-services/",
  },
  {
    label: "Henderson Plumbing Services",
    href: "/henderson-plumbing-services/",
  },
  { label: "Re-Piping Services", href: "/re-piping/" },
  { label: "Henderson Re-Piping", href: "/henderson/re-piping/" },
  {
    label: "Green Valley Slab Leak Detection and Repair",
    href: "/green-valley/slab-leak-detection-repair/",
  },
  {
    label: "Green Valley Leak Detection and Repair",
    href: "/green-valley/leak-detection-repair/",
  },
  {
    label: "Green Valley Drain Cleaning",
    href: "/green-valley/drain-cleaning/",
  },
  {
    label: "Green Valley Water Heater Repair",
    href: "/green-valley/water-heater-repair-installation/",
  },
];

// ---------------------------------------------------------------------------
// Communities grid.
// ---------------------------------------------------------------------------
const GV_COMMUNITIES: { name: string; href?: string }[] = [
  { name: "Green Valley", href: "/green-valley-plumbing-services/" },
  { name: "Green Valley Ranch" },
  { name: "Duck Creek Area" },
  { name: "Paseo Verde Parkway Area" },
  { name: "Warm Springs Area" },
  { name: "Seven Hills" },
  { name: "Anthem" },
  { name: "Lake Las Vegas", href: "/lake-las-vegas-plumbing-services/" },
  { name: "Henderson", href: "/henderson-plumbing-services/" },
];

const HERO_TRUST_ITEMS = [
  // FLAG: verify before publishing.
  "4.8 stars, 76 Google reviews",
  // FLAG: verify before final launch.
  "NV Licensed, #0048585A",
  // FLAG: verify before publishing.
  "Over 40 years serving the Las Vegas Valley",
  "Permits pulled and inspections scheduled",
  // FLAG: source-site claim — verify before final launch.
  "Transparent pricing, no hidden fees",
];

// Pipe guide intro and repair-vs-repipe direct answer — stored as consts to
// avoid react/no-unescaped-entities lint errors on apostrophes in JSX text.
const PIPE_GUIDE_INTRO =
  "Green Valley homes built across different eras contain different pipe materials, and each has its own failure profile under the Las Vegas Valley's hard water conditions. Green Valley's development history creates a concentration of high-risk pipe materials in specific neighborhood eras.";

const SIGNS_INTRO =
  "Repiping becomes the right solution when pipe problems are widespread rather than isolated. These are the signs that a home's plumbing system is failing throughout rather than at a single point.";

const SIGNS_FOLLOW =
  "A single leak or isolated pressure issue may be repaired without repiping. When multiple signs appear together, or when the same line develops repeated failures, repiping is typically the more practical long-term solution. Red Carpet Plumbing assesses your Green Valley home's plumbing system honestly and recommends the right approach for your specific situation.";

const REPAIR_VS_REPIPE_DIRECT =
  "Spot repair is the right call when a leak is isolated, the surrounding pipe is in good condition, and the pipe material is not known to be defective. Repiping is the right call when multiple leaks have appeared in different locations, the pipe material is known to fail, or a professional assessment finds that pipe walls have thinned throughout the system.";

// ---------------------------------------------------------------------------
// JSON-LD payloads. Green Valley is a community within the incorporated City of
// Henderson, so Service.areaServed uses Place (Green Valley) -> containedInPlace
// City (Henderson) -> containedInPlace State (Nevada). Do NOT use City for
// Green Valley. Do NOT use AdministrativeArea. Do NOT use Clark County.
// ---------------------------------------------------------------------------
const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Re-Piping Services in Green Valley, Henderson, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides whole-house and partial re-piping services for homes in Green Valley, Henderson, NV. Polybutylene, Kitec, galvanized, and aging copper pipe replacement. PEX and copper installations. Permits pulled.",
  url: "https://redcarpetplumbing.com/green-valley/re-piping/",
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
      name: "Re-Piping in Green Valley",
      item: "https://redcarpetplumbing.com/green-valley/re-piping/",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Re-Piping Services in Green Valley",
  serviceType: "Re-Piping",
  description:
    "Whole-house and partial re-piping services for homes in Green Valley, Henderson, NV. Polybutylene pipe replacement, Kitec pipe replacement, galvanized steel replacement, PEX repiping, and copper repiping. Nevada Contractor License #0048585A. Permits pulled and inspections scheduled.",
  provider: {
    "@type": "Plumber",
    name: "Red Carpet Plumbing",
    url: "https://redcarpetplumbing.com",
    // FLAG: VERIFY telephone (carried forward from existing pages).
    telephone: "+17025679172",
  },
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
};

// HowTo schema included because Section 6 renders the matching visible
// step-by-step process (titles + body) on the page.
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Red Carpet Plumbing Handles a Repipe in Green Valley",
  description:
    "The re-piping process used by Red Carpet Plumbing for Green Valley, Henderson homes.",
  step: GV_REPIPE_STEPS.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.name,
    text: s.body,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: GV_REPIPE_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function GreenValleyRePipingPage() {
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
            { label: "Re-Piping in Green Valley" },
          ]}
        />

        {/* SECTION 1: HERO */}
        <HeroSection
          headingLevel="h1"
          headline="Re-Piping Services in Green Valley, Henderson, NV"
          subheading="Green Valley homes have elevated pipe failure rates driven by the original neighborhoods' aging copper and polybutylene supply lines, Kitec pipe in Green Valley Ranch condominiums and HOA communities, and the Las Vegas Valley's hard water conditions. Red Carpet Plumbing provides whole-house and partial repiping using PEX or copper, replaces all failing pipe materials, and pulls all required permits through the City of Henderson as part of the project."
          trustItems={HERO_TRUST_ITEMS}
          primaryCTA={{
            label: "Call (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{
            label: "Request Re-Piping Service",
            href: "/contact/",
          }}
          // FLAG: source-site claim — verify before final launch.
          ctaNote="Licensed plumbers. Permits pulled and inspections scheduled."
          formSlot={<QuoteFormPlaceholder title="Get Re-Piping Help" />}
          backgroundImage={{
            src: "/images/services/re-piping/hero.webp",
            alt: "re-piping service in Green Valley, Henderson, NV",
          }}
        />

        {/* SECTION 1b: TRUST STRIP */}
        <TrustStrip
          items={REPIPE_TRUST_STRIP}
          ariaLabel="Why Green Valley customers choose Red Carpet Plumbing for re-piping"
        />

        {/* SECTION 2: SIGNS YOU NEED REPIPING */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Signs You May Need to Repipe Your Green Valley Home
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
            <p className="mt-8 text-base leading-7 text-brand-dark/80">
              {SIGNS_FOLLOW}
            </p>
          </div>
        </section>

        {/* SECTION 3: PIPE MATERIAL GUIDE */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Pipe Materials in Green Valley Homes
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                {PIPE_GUIDE_INTRO}
              </p>
              <p className="mt-4 text-lg leading-8 text-brand-dark/80">
                For a broader overview, see our{" "}
                <Link
                  href="/re-piping/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  re-piping services
                </Link>{" "}
                page and our{" "}
                <Link
                  href="/green-valley-plumbing-services/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  Green Valley plumbing services
                </Link>{" "}
                page.
              </p>
            </div>
            <div className="mt-10 space-y-6">
              {GV_PIPE_MATERIALS.map((m) => (
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

        {/* SECTION 4: SERVICES OFFERED */}
        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="max-w-4xl text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Re-Piping Services We Provide in Green Valley
              </h2>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {GV_REPIPE_SERVICES.map((service) => (
                <ServiceCard
                  key={service.title}
                  title={service.title}
                  description={service.description}
                  href="#"
                  built={false}
                />
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: REPAIR VS. REPIPE */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                When to Repair and When to Repipe in Green Valley
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                {REPAIR_VS_REPIPE_DIRECT}
              </p>
            </div>
            <div className="mt-10 space-y-6">
              <article className="rounded-2xl bg-white p-6 ring-1 ring-brand-surface-alt sm:p-8">
                <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                  When repair is the right call
                </h3>
                <p className="mt-3 text-base leading-7 text-brand-dark/80">
                  Repair is usually the right call when a leak is isolated, the
                  affected pipe is otherwise in good condition, and the pipe
                  material is not known to be defective. For Green Valley homes
                  where a single pinhole has appeared in a section of pipe that
                  has otherwise performed well, targeted repair through our{" "}
                  <Link
                    href="/water-pipe-repair-replacement/"
                    className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                  >
                    water pipe repair and replacement
                  </Link>{" "}
                  services is often the practical first step.
                </p>
              </article>
              <article className="rounded-2xl bg-white p-6 ring-1 ring-brand-surface-alt sm:p-8">
                <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                  When repiping is the right call
                </h3>
                <p className="mt-3 text-base leading-7 text-brand-dark/80">
                  Repiping is the right call when multiple leaks have appeared in
                  different locations, the pipe material is known to fail, a
                  professional assessment finds that pipe walls have thinned
                  throughout the system, or a Green Valley home has experienced
                  multiple slab leaks on the same aging line. For homes where slab
                  leaks have already been detected, see our{" "}
                  <Link
                    href="/green-valley/slab-leak-detection-repair/"
                    className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                  >
                    Green Valley slab leak detection and repair
                  </Link>{" "}
                  page.
                </p>
              </article>
            </div>
            <p className="mt-8 text-base leading-7 text-brand-dark/80">
              For original Green Valley homes built from the late 1970s through
              the mid-1990s where copper supply lines are now 30 to 45 years old
              and hard water corrosion has been ongoing throughout, repiping
              typically makes more long-term financial sense than continued spot
              repairs, particularly when a second or third leak has already
              occurred on the same system. Red Carpet Plumbing also provides{" "}
              <Link
                href="/green-valley/leak-detection-repair/"
                className="font-semibold text-brand-primary hover:text-brand-primary-hover"
              >
                Green Valley leak detection and repair
              </Link>{" "}
              to help homeowners understand the condition of their plumbing before
              deciding on a repair or repipe approach.
            </p>
          </div>
        </section>

        {/* SECTION 6: PROCESS (HowTo) */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    How Red Carpet Plumbing Handles a Repipe in Green Valley
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    When you call Red Carpet Plumbing for a repiping project in
                    Green Valley, our licensed plumbers follow a consistent
                    process from assessment through inspection close-out.
                  </p>
                </div>
              </SectionRevealItem>
              <SectionRevealItem className="mt-12">
                <ol className="space-y-8">
                  {GV_REPIPE_STEPS.map((step, index) => (
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
                  Re-Piping in Green Valley?
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/80">
                  Red Carpet Plumbing provides whole-house and partial repiping
                  for Green Valley and Green Valley Ranch homes using PEX or
                  copper. We pull all required permits through the City of
                  Henderson and schedule the city inspection as part of the
                  project. Call or request service online.
                </p>
              </div>
              <div className="flex flex-col items-start gap-4 lg:items-end">
                <a
                  href="tel:+17025679172"
                  className="inline-flex min-h-14 items-center justify-center rounded-lg bg-brand-primary px-8 text-lg font-semibold text-white shadow-sm hover:bg-brand-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary motion-safe:transition-colors motion-safe:active:scale-[0.97]"
                >
                  Call (702) 567-9172
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8: SERVICE AREA / COMMUNITIES */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Green Valley and Nearby Henderson Communities We Serve
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing provides re-piping throughout Green Valley,
                part of the incorporated City of Henderson. We serve both the
                original Green Valley neighborhoods and Green Valley Ranch, along
                with nearby Henderson communities. For full Henderson plumbing
                service details, see our{" "}
                <Link
                  href="/henderson-plumbing-services/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  Henderson plumbing services
                </Link>{" "}
                page.
              </p>
            </div>

            <ul className="mt-8 flex flex-wrap gap-3">
              {GV_COMMUNITIES.map((c) => (
                <li key={c.name}>
                  {c.href ? (
                    <Link
                      href={c.href}
                      className="block rounded-lg bg-brand-surface-alt px-5 py-3 font-semibold text-brand-primary shadow-sm ring-1 ring-brand-surface-alt transition-colors hover:text-brand-primary-hover hover:shadow-md"
                    >
                      {c.name}
                    </Link>
                  ) : (
                    <span className="block rounded-lg border border-brand-surface-alt bg-white px-5 py-3 font-medium text-brand-dark/80">
                      {c.name}
                    </span>
                  )}
                </li>
              ))}
            </ul>

            <p className="mt-8 text-base leading-7 text-brand-dark/80">
              For Henderson-wide re-piping services, see our{" "}
              <Link
                href="/henderson/re-piping/"
                className="font-semibold text-brand-primary hover:text-brand-primary-hover"
              >
                Henderson re-piping
              </Link>{" "}
              page.
            </p>

            <div className="mt-12">
              <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                Related Plumbing Services
              </h3>
              <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {RELATED_SERVICES.map((s) => (
                  <li key={s.label}>
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
          </div>
        </section>

        {/* SECTION 9: FAQ */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Re-Piping FAQs for Green Valley Homeowners
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {GV_REPIPE_FAQS.map((faq) => (
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
          headline={<>Re-Piping Services<br />in Green Valley, Henderson?</>}
          body="Do not let aging or defective pipe materials become a recurring repair problem. Call Red Carpet Plumbing at (702) 567-9172 or request service online. We provide whole-house and partial repiping throughout Green Valley and Henderson with all permits pulled and inspections scheduled."
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
