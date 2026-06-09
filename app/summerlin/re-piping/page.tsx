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

// FLAG: VERIFY before publishing — license #0048585A, "over 40 years", and the
// 4.8/76 rating are source-site/project claims. Each visible instance carries an
// inline FLAG comment.
//
// SCHEMA NOTE: Summerlin is a master-planned community spanning both the City of
// Las Vegas and unincorporated Clark County; it is not itself an incorporated
// city. Per the Batch 6 schema normalization, Service.areaServed for
// non-incorporated communities uses Place -> AdministrativeArea (Clark County) ->
// State (Nevada), matching the Paradise and Spring Valley pages. Plain City is
// reserved for incorporated cities (Las Vegas, Henderson, North Las Vegas).
// Provider Plumber (name, url, telephone). No AggregateRating/Review. No sameAs.

export const metadata: Metadata = {
  title: "Re-Piping Services in Summerlin, NV | Red Carpet Plumbing",
  description:
    "Professional re-piping in Summerlin, NV. Copper, polybutylene, Kitec, and PEX repiping for Summerlin homes. Permits pulled. NV #0048585A. (702) 567-9172.",
  alternates: {
    canonical: "https://redcarpetplumbing.com/summerlin/re-piping/",
  },
  openGraph: {
    title: "Re-Piping Services in Summerlin, NV | Red Carpet Plumbing",
    description:
      "Professional re-piping in Summerlin, NV. Copper, polybutylene, Kitec, and PEX repiping for Summerlin homes. Permits pulled. NV #0048585A. (702) 567-9172.",
    url: "https://redcarpetplumbing.com/summerlin/re-piping/",
    siteName: "Red Carpet Plumbing",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

// ---------------------------------------------------------------------------
// FAQ source of truth. The visible FAQ section AND the FAQPage JSON-LD schema
// both derive from this single array, guaranteeing a character-for-character
// match.
// ---------------------------------------------------------------------------
const SUMMERLIN_REPIPE_FAQS = [
  {
    question: "What are the signs I need to repipe my Summerlin home?",
    answer:
      "Common signs include recurring leaks in multiple locations throughout the home, rust-colored or discolored water from the taps, consistently low water pressure throughout the home, frequent pinhole leaks in copper pipes, known defective pipe materials such as polybutylene or Kitec, a home built before 2000 that still has original plumbing, or multiple slab leaks on the same plumbing system. When multiple signs appear together in an original Summerlin village home, repiping is typically the more practical long-term solution than continued repairs.",
  },
  {
    question: "What pipe materials fail in Summerlin homes?",
    answer:
      "The most common materials in Summerlin homes that require replacement are aging copper supply lines in original 1990s village homes where 25 to 35 years of hard water corrosion has thinned the pipe walls, polybutylene pipe in homes built between 1975 and 1995 that degrades in chlorinated water and can fail without warning, and Kitec pipe in some Summerlin South homes and condominiums built from the late 1990s through approximately 2005, which has brass fittings that corrode in Las Vegas hard water. Kitec is identifiable by orange or blue flexible pipes with brass fittings.",
  },
  {
    question:
      "What is the difference between PEX and copper repiping in Summerlin?",
    answer:
      "PEX is flexible, resists hard water scale buildup, requires fewer fittings, and installs with less drywall disruption than rigid pipe. In Summerlin, PEX pipe runs through attic spaces require proper insulation because Las Vegas attic temperatures can exceed 150 degrees Fahrenheit. Copper is a proven material that is durable, naturally resistant to bacteria growth, and provides excellent water quality. Red Carpet Plumbing can help you evaluate which material is the better fit for your specific Summerlin home and conditions.",
  },
  {
    question: "How long does whole-house repiping take in Summerlin?",
    answer:
      "Most single-story Summerlin homes can be repiped in one to two days. Water is restored each evening on multi-day projects so your household is not without water overnight. Multi-story homes and larger properties take longer. Red Carpet Plumbing will give you a timeline estimate based on your home's size and plumbing layout before work begins.",
  },
  {
    question: "Do I need a permit to repipe my house in Summerlin?",
    answer:
      "Yes. A permit is required for whole-house repiping. Permit jurisdiction in Summerlin depends on which side of the city boundary the property sits, as Summerlin spans both the City of Las Vegas and unincorporated Clark County. Red Carpet Plumbing identifies the applicable jurisdiction, pulls the required permits, and schedules the inspection as part of the repiping project. A closed permit with final inspection sign-off is important documentation for homeowners and future buyers.",
  },
  {
    question: "Does repiping increase home value in Summerlin?",
    answer:
      "A documented whole-house repipe with closed permits and final inspection sign-off removes a significant concern for home buyers and inspectors. Summerlin original village homes with known defective materials such as polybutylene or Kitec, or with aging copper pipe systems that have produced multiple leaks, can face challenges during the sale process. A completed repipe with proper permits and documentation provides buyers with confidence in the plumbing system and can support the home's value in the transaction.",
  },
];

const HERO_SUBHEADING =
  "Red Carpet Plumbing provides whole-house and partial re-piping throughout Summerlin, Nevada, including Summerlin North, Summerlin South, and all Summerlin villages. From aging copper supply lines in original 1990s village homes to polybutylene and Kitec replacement, our licensed plumbers repipe Summerlin homes with permits pulled and inspections scheduled. NV Contractor License #0048585A.";

const HERO_TRUST_ITEMS = [
  "NV Licensed, #0048585A",
  "Whole-House and Partial Repiping",
  "Permits Pulled and Inspections Scheduled",
  "Transparent Pricing, No Hidden Fees",
];

// Section 2 — visible <ul> signs list.
const REPIPE_SIGNS = [
  "Recurring leaks in multiple locations throughout the home",
  "Rust-colored or discolored water from the taps",
  "Consistently low water pressure throughout the home",
  "Frequent pinhole leaks in copper pipes",
  "Known defective pipe materials such as polybutylene or Kitec",
  "A home built before 2000 that still has original plumbing",
  "Multiple slab leaks on the same plumbing system",
  "Reduced water quality affecting taste, odor, or appearance",
];

// Section 3 — pipe material guide (four visible H3 blocks per guardrail 10).
const PIPE_MATERIALS = [
  {
    heading: "Aging Copper in Original Summerlin Villages (1990s Builds)",
    body: "Homes built in Summerlin's original western villages, including The Hills, The Trails, The Arbors, and The Canyons, were constructed primarily in the 1990s with copper supply lines. These pipes have now been exposed to Las Vegas Valley hard water for 25 to 35 years. Las Vegas Valley water carries approximately 280 parts per million of dissolved minerals, among the hardest municipal water in the United States. Hard water causes pitting corrosion inside copper pipe walls, thinning them continuously from the inside out. When copper pipe walls thin sufficiently, pinhole leaks develop. Multiple pinhole leaks in different locations of an original Summerlin village home indicate that the pipe walls have thinned throughout the system rather than at isolated points, making repiping a more practical long-term solution than continued spot repairs.",
  },
  {
    heading: "Polybutylene Pipe (Homes Built 1975 to 1995)",
    body: "Polybutylene pipe was widely used in Las Vegas Valley residential construction from approximately 1975 through 1995. Some original Summerlin village homes and older properties on Summerlin's fringe that predate the master-planned development may contain polybutylene. Polybutylene degrades in chlorinated municipal water over time, becoming brittle from the inside out in a process that is not visible during routine inspection. Polybutylene leaks can occur without prior warning, often inside walls or beneath slabs. If your home was built between 1975 and 1995 and has not been re-piped, a plumber can confirm whether polybutylene supply lines are present.",
  },
  {
    heading:
      "Kitec Pipe in Summerlin South and Attached Communities (Late 1990s to 2005)",
    body: "Kitec plumbing was installed in homes and condominiums built primarily from the late 1990s through approximately 2005. Some Summerlin South communities and attached housing developments built during this period may contain Kitec. Kitec has brass fittings that corrode when exposed to the minerals in Las Vegas hard water, eventually failing at connection points. Kitec is identifiable by orange or blue flexible pipes with brass fittings. If you have Kitec plumbing in your Summerlin home or condo, having it evaluated and replaced is strongly recommended.",
  },
  {
    heading: "Hard Water Mineral Corrosion Across All Summerlin Eras",
    body: "Regardless of build era, all Summerlin homes receive the same Las Vegas Valley hard water supply. The combination of mineral corrosion, caliche soil movement beneath slab foundations, and closed-loop system pressure cycling creates ongoing pipe stress throughout Summerlin. Homes where a professional assessment identifies system-wide pipe thinning, regardless of pipe vintage, are re-piping candidates.",
  },
];

// Section 4 — re-piping services (bold label + body).
const REPIPE_SERVICES = [
  {
    label: "Whole-house repiping",
    body: "Whole-house repiping replaces all supply lines throughout the home from the main water line through to each fixture connection. This is the most comprehensive solution for Summerlin original village homes with aging copper pipe systems thinned by decades of hard water exposure. Red Carpet Plumbing performs whole-house repipes using PEX or copper depending on the home's specific conditions and the homeowner's preferences.",
  },
  {
    label: "Partial repiping",
    body: "When only a section of the plumbing system is failing or has been identified as containing a problem material, partial repiping replaces the affected lines without repiping the entire home. Partial repipes are common when a specific area of a Summerlin home, such as the hot water distribution system or the kitchen supply lines, has developed recurring problems.",
  },
  {
    label: "Polybutylene pipe replacement",
    body: "Polybutylene degrades in chlorinated water and can fail without warning. Red Carpet Plumbing replaces polybutylene supply lines with PEX or copper to eliminate the risk of sudden failure in Summerlin homes and older properties in the area built between 1975 and 1995.",
  },
  {
    label: "Kitec pipe replacement",
    body: "Kitec has brass fittings that corrode in mineral-rich Las Vegas water and fail at connection points. Kitec is identifiable by orange or blue flexible pipes with brass fittings. Red Carpet Plumbing replaces Kitec plumbing in Summerlin homes and condominiums, including Summerlin South properties built from the late 1990s through approximately 2005.",
  },
  {
    label: "PEX and copper repiping",
    body: "PEX is a flexible pipe that resists hard water scale buildup, requires fewer fittings, and installs with less drywall disruption than rigid pipe. In Summerlin, PEX pipe runs through attic spaces require proper insulation because Las Vegas attic temperatures can exceed 150 degrees Fahrenheit. Red Carpet Plumbing installs PEX to current Clark County code including required attic insulation. Copper is a proven, durable material that is naturally resistant to bacteria growth and provides excellent water quality. Red Carpet Plumbing installs Type L copper, the standard for residential plumbing in the Las Vegas Valley.",
  },
];

// Section 6 — visible <ol>, HowTo schema source.
const REPIPE_STEPS = [
  {
    name: "Assess the existing plumbing system",
    body: "We identify the pipe materials present in your Summerlin home, the age and condition of the system, and the scope of repiping needed. We confirm whether a whole-house repipe or targeted partial repipe is the right approach and identify permit requirements, which apply to whole-house repipes in both the City of Las Vegas and Clark County jurisdictions that cover Summerlin.",
  },
  {
    name: "Present material options and approach",
    body: "We explain the options for replacement materials, typically PEX or copper for residential repipes, including the pros and cons of each for your specific Summerlin home and hard water conditions. We present the scope of the project and what the repiping will involve for your household before any work begins. We do not start work without your approval.",
  },
  {
    name: "Complete the repipe with minimal disruption",
    body: "We protect floors and furniture before cutting drywall access points. We install the new piping, connect all fixtures, and restore water service. Most Summerlin single-story homes are repiped in one to two days. Water is restored each evening on multi-day projects so your household is not without water overnight.",
  },
  {
    name: "Permit inspection and sign-off",
    body: "We schedule the required inspection with the applicable jurisdiction, walk through the completed work with the inspector, and obtain final sign-off. A closed permit with final inspection documentation is important for homeowners and future buyers.",
  },
];

// Section 7 — why choose (bulleted list). Three items carry FLAGs.
const WHY_CHOOSE = [
  "Local Las Vegas Valley plumbing company familiar with Summerlin's original village pipe systems, Kitec presence in Summerlin South, and hard water repiping conditions",
  "Permits pulled and inspections scheduled on every whole-house repipe",
  "PEX installed to current Clark County code including required attic insulation for Las Vegas attic temperature conditions",
  // FLAG: VERIFY license number before publishing.
  "Licensed plumbers, NV License #0048585A",
  "Transparent pricing with no hidden fees",
  // FLAG: VERIFY "over 40 years" before publishing.
  "Over 40 years serving the Las Vegas Valley",
  // FLAG: VERIFY rating and review count before publishing.
  "4.8-star rating across 76 Google reviews",
];

// ---------------------------------------------------------------------------
// JSON-LD payloads. Service schema uses the site-wide service-location pattern
// (areaServed City -> State "Nevada"), overriding the brief's Block 3 variant.
// ---------------------------------------------------------------------------
const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Re-Piping Services in Summerlin, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides whole-house and partial re-piping in Summerlin, NV. Copper, polybutylene, Kitec, and PEX repiping for Summerlin homes. Permits pulled.",
  url: "https://redcarpetplumbing.com/summerlin/re-piping/",
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
      name: "Summerlin Plumbing Services",
      item: "https://redcarpetplumbing.com/summerlin-plumbing-services/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Re-Piping Services in Summerlin",
      item: "https://redcarpetplumbing.com/summerlin/re-piping/",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Re-Piping Services in Summerlin, NV",
  serviceType: "Re-Piping",
  description:
    "Red Carpet Plumbing provides whole-house and partial re-piping for Summerlin homes, including copper, polybutylene, Kitec, galvanized, PEX, and copper repiping with permits pulled and inspections scheduled.",
  provider: {
    "@type": "Plumber",
    name: "Red Carpet Plumbing",
    url: "https://redcarpetplumbing.com",
    // FLAG: VERIFY telephone (carried forward from existing pages).
    telephone: "+17025679172",
  },
  areaServed: {
    "@type": "Place",
    name: "Summerlin",
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

// HowTo schema included because Section 6 renders the matching visible
// step-by-step process (titles + body) on the page.
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Red Carpet Plumbing Handles Re-Piping in Summerlin",
  description:
    "The process Red Carpet Plumbing follows for re-piping projects in Summerlin, NV.",
  step: REPIPE_STEPS.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.name,
    text: s.body,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: SUMMERLIN_REPIPE_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function SummerlinRePipingPage() {
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
              label: "Summerlin Plumbing Services",
              href: "/summerlin-plumbing-services/",
            },
            { label: "Re-Piping Services in Summerlin" },
          ]}
        />

        {/* SECTION 1: HERO */}
        <HeroSection
          headingLevel="h1"
          headline="Re-Piping Services in Summerlin, NV"
          subheading={HERO_SUBHEADING}
          trustItems={HERO_TRUST_ITEMS}
          primaryCTA={{
            label: "Call (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{
            label: "Request Service",
            href: "/contact/",
          }}
          ctaNote="Licensed plumbers. Transparent pricing. No hidden fees."
          formSlot={<QuoteFormPlaceholder title="Get Re-Piping Help" />}
          backgroundImage={{
            src: "/images/services/re-piping/hero.webp",
            alt: "Re-piping services in Summerlin, NV",
          }}
        />

        {/* SECTION 2: DIRECT ANSWER + SIGNS LIST */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="rounded-2xl border-l-4 border-brand-primary bg-brand-surface-alt p-6 sm:p-8">
              <h2 className="text-2xl font-bold tracking-tight text-brand-dark sm:text-3xl">
                Re-Piping Services in Summerlin
              </h2>
              {/* FLAG: "over 40 years" claim below — verify before publishing. */}
              <p className="mt-4 text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing is a local, family-owned plumbing company
                serving Summerlin, Nevada and the Las Vegas Valley. We hold Nevada
                Contractor License #0048585A under the C-1 Plumbing and Heating
                classification and have been serving the Las Vegas Valley for over
                40 years.
              </p>
              <p className="mt-4 text-base leading-7 text-brand-dark/80">
                We provide whole-house and partial re-piping throughout Summerlin,
                replacing aging copper, polybutylene, Kitec, and galvanized pipe
                with PEX or copper installed to current code. Permits are pulled
                and inspections scheduled as part of every whole-house repipe.
              </p>
              <p className="mt-4 text-base leading-7 text-brand-dark/70">
                For full-service plumbing in Summerlin, visit our{" "}
                <Link
                  href="/summerlin-plumbing-services/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  Summerlin plumbing services
                </Link>{" "}
                page. For re-piping information across the Las Vegas Valley, visit
                our{" "}
                <Link
                  href="/re-piping/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  re-piping services
                </Link>{" "}
                page.
              </p>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                Signs Your Summerlin Home May Need Re-Piping
              </h3>
              <div className="mt-6 rounded-2xl border-l-4 border-brand-primary bg-brand-surface-alt p-6 sm:p-8">
                <ul className="space-y-3">
                  {REPIPE_SIGNS.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-2 inline-block h-2 w-2 flex-none rounded-full bg-brand-primary"
                      />
                      <span className="text-base leading-7 text-brand-dark/80">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="mt-8 text-base leading-7 text-brand-dark/80">
                If you are seeing multiple signs on this list in your Summerlin
                home, call Red Carpet Plumbing at (702) 567-9172 or{" "}
                <Link
                  href="/contact/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  request service online
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: PIPE MATERIAL GUIDE (four visible H3 blocks) */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Pipe Materials in Summerlin Homes: What to Know
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Summerlin&apos;s development history creates a clear picture of
                which pipe materials are present by neighborhood era. Understanding
                what is in your home&apos;s walls is the first step in evaluating
                whether re-piping is the right decision.
              </p>
            </div>
            <div className="mt-10 space-y-6">
              {PIPE_MATERIALS.map((m) => (
                <article
                  key={m.heading}
                  className="rounded-2xl bg-white p-6 ring-1 ring-brand-surface-alt sm:p-8"
                >
                  <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                    {m.heading}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-brand-dark/80">
                    {m.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: RE-PIPING SERVICES WE PROVIDE */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Re-Piping Services We Provide in Summerlin
              </h2>
            </div>
            <ul className="mt-10 space-y-5">
              {REPIPE_SERVICES.map((s) => (
                <li
                  key={s.label}
                  className="rounded-2xl bg-brand-surface-alt p-6 ring-1 ring-brand-surface-alt"
                >
                  <p className="text-base leading-7 text-brand-dark/80">
                    <strong className="font-semibold text-brand-dark">
                      {s.label}.
                    </strong>{" "}
                    {s.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 5: REPAIR VS. REPIPE */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                When Repair Is Right and When Repiping Makes More Sense
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Spot repair is the right call when a leak is isolated, the
                surrounding pipe is in good condition, and the pipe material is not
                known to be defective. See our{" "}
                <Link
                  href="/water-pipe-repair-replacement/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  water pipe repair and replacement
                </Link>{" "}
                page for targeted pipe repair options.
              </p>
              {/* /summerlin/slab-leak-detection-repair/ (Page 10) is built and
                  QA-passed, so per Page 11 brief guardrail 3 the slab anchor below
                  is ACTIVATED to the Summerlin-specific page (href repointed; the
                  visible anchor text is unchanged from the approved copy). */}
              <p className="mt-4 text-lg leading-8 text-brand-dark/80">
                Repiping is the right call when multiple leaks have appeared in
                different locations, the pipe material is known to fail, a
                professional assessment finds that pipe walls have thinned
                throughout the system, or a Summerlin home has experienced multiple
                slab leaks on the same aging line. For homes where slab leaks have
                already been detected, see our{" "}
                <Link
                  href="/summerlin/slab-leak-detection-repair/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  slab leak detection and repair
                </Link>{" "}
                page.
              </p>
              <p className="mt-4 text-lg leading-8 text-brand-dark/80">
                For original Summerlin village homes in The Hills, The Trails, The
                Arbors, and The Canyons where copper supply lines are now 25 to 35
                years old and hard water corrosion has been ongoing throughout,
                repiping typically makes more long-term financial sense than
                continued spot repairs, particularly when a second or third slab
                leak has already occurred on the same system.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 6: OUR RE-PIPING PROCESS (HowTo) */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Our Re-Piping Process in Summerlin
                  </h2>
                </div>
              </SectionRevealItem>
              <SectionRevealItem className="mt-12">
                <ol className="space-y-8">
                  {REPIPE_STEPS.map((step, index) => (
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

        {/* SECTION 7: WHY CHOOSE */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Why Summerlin Homeowners Choose Red Carpet Plumbing for Re-Piping
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
            <p className="mt-8 text-base leading-7 text-brand-dark/80">
              Red Carpet Plumbing provides full{" "}
              <Link
                href="/summerlin-plumbing-services/"
                className="font-semibold text-brand-primary hover:text-brand-primary-hover"
              >
                Summerlin plumbing services
              </Link>{" "}
              including emergency plumbing, drain cleaning, water heater repair,
              slab leak detection, and leak detection. We also serve communities
              near Summerlin including{" "}
              <Link
                href="/las-vegas-plumbing-services/"
                className="font-semibold text-brand-primary hover:text-brand-primary-hover"
              >
                Las Vegas plumbing services
              </Link>{" "}
              and{" "}
              <Link
                href="/spring-valley-plumbing-services/"
                className="font-semibold text-brand-primary hover:text-brand-primary-hover"
              >
                Spring Valley plumbing services
              </Link>
              .
            </p>
          </div>
        </section>

        {/* SECTION 8: FAQ */}
        <section className="bg-white">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Re-Piping in Summerlin &mdash; Frequently Asked Questions
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {SUMMERLIN_REPIPE_FAQS.map((faq) => (
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

        {/* SECTION 9: FINAL CTA */}
        <CTASection
          background="red"
          headline="Schedule Re-Piping Service in Summerlin Today"
          body="Red Carpet Plumbing provides whole-house and partial re-piping throughout Summerlin, NV, including Summerlin North, Summerlin South, The Hills, The Trails, The Arbors, The Canyons, and all Summerlin villages. Permits pulled and inspections scheduled. Call (702) 567-9172 or request service online."
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
