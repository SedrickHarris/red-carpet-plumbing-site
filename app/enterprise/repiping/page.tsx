import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { FaqSection } from "@/components/FaqSection";
import { HeroSection } from "@/components/HeroSection";
import { JsonLd } from "@/components/JsonLd";
import { QuoteFormPlaceholder } from "@/components/QuoteFormPlaceholder";
import { SectionReveal, SectionRevealItem } from "@/components/SectionReveal";
import { ServiceCard } from "@/components/ServiceCard";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { buildFaqPageSchema, type FaqItem } from "@/lib/faq";

// FLAG: VERIFY before publishing — rating (4.8 stars / 76 Google reviews)
// and "Over 40 years" trust claims are source-site claims shown on this page.
// License #0048585A, permit handling, and transparent-pricing are also
// source-site claims. Confirm before launch.
//
// SCHEMA NOTE: Enterprise is an unincorporated Clark County community (not an
// incorporated city), so Service.areaServed uses Place -> AdministrativeArea
// (Clark County) -> State (Nevada), NOT City. Matches the Enterprise emergency,
// drain-cleaning, water-heater, leak-detection, and slab-leak siblings. No
// AggregateRating/Review. No sameAs. No hasCredential. Provider Plumber (name,
// url, telephone). 5 separate JsonLd blocks. HowTo included because Section 7
// renders the matching visible numbered process steps.
//
// CONTENT NOTE: The Enterprise repiping story is first-service-cycle copper
// (20-to-25-year-old Rhodes Ranch / Mountain's Edge homes) and Kitec, NOT
// galvanized steel. Galvanized is intentionally framed as uncommon in
// Enterprise due to the community's newer development timeline.

export const metadata: Metadata = {
  title: "Repiping Services in Enterprise, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides whole-house and partial repiping in Enterprise, NV. Copper, Kitec, and polybutylene replacement for Rhodes Ranch and Mountain's Edge homes. Clark County permits pulled. Licensed plumbers. Call (702) 567-9172.",
  alternates: {
    canonical: "https://redcarpetplumbing.com/enterprise/repiping/",
  },
  openGraph: {
    title: "Repiping Services in Enterprise, NV | Red Carpet Plumbing",
    description:
      "Whole-house and partial repiping throughout Enterprise, NV. First-service-cycle copper replacement, Kitec replacement, and polybutylene replacement for Southwest Las Vegas homes. Clark County permits pulled. Licensed plumbers.",
    url: "https://redcarpetplumbing.com/enterprise/repiping/",
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
const ENTERPRISE_REPIPE_FAQS: FaqItem[] = [
  {
    question: "What are the signs I need to repipe my Enterprise home?",
    answer:
      "Common signs include recurring leaks in multiple locations, rust-colored or discolored water, consistently low water pressure throughout the home, frequent pinhole leaks in copper pipes, known Kitec plumbing with corroding brass fittings, or polybutylene supply lines installed before 1998. Multiple slab leaks on the same system are also a strong indicator that repiping is more practical than continued repairs.",
    category: "causes-signs",
  },
  {
    question:
      "What pipe materials are most common in Enterprise homes that need replacement?",
    answer:
      "Enterprise was developed primarily in the late 1990s and 2000s, so the most common repiping situations involve first-service-cycle copper supply lines now 20 to 25 years old that have been thinned by Las Vegas Valley hard water, and Kitec plumbing installed from the late 1990s through approximately 2005. Kitec is identifiable by orange or blue flexible pipes with brass fittings. Galvanized steel pipe is uncommon in Enterprise due to the community's newer development timeline.",
    category: "causes-signs",
  },
  {
    question: "Does repiping in Enterprise require a permit?",
    answer:
      "Yes. Whole-house repiping in Enterprise requires a Clark County building permit. Enterprise is an unincorporated Clark County community, so the permit jurisdiction is Clark County rather than the City of Las Vegas. Red Carpet Plumbing files the permit before work begins and coordinates the final inspection for sign-off.",
    category: "timing-process",
  },
  {
    question: "What is the difference between PEX and copper repiping?",
    answer:
      "PEX is a flexible pipe that resists hard water scale buildup, requires fewer fittings, and installs with less drywall disruption than rigid pipe. In Las Vegas, PEX pipe runs through attic spaces require proper insulation because attic temperatures can exceed 150 degrees Fahrenheit. Red Carpet Plumbing installs PEX to current Clark County code including required attic insulation. Copper is a proven, durable material that is naturally resistant to bacteria growth and provides excellent water quality. Red Carpet Plumbing installs Type L copper, the standard for residential plumbing in the Las Vegas Valley.",
    category: "the-service",
  },
  {
    question: "How long does a whole-house repipe take in Enterprise?",
    answer:
      "Most single-story Enterprise homes are re-piped in one to two days. For multi-day projects, water is restored to the home each evening. The timeline depends on the size of the home, the pipe materials being replaced, and the scope of work involved.",
    category: "timing-process",
  },
  {
    question:
      "Does Red Carpet Plumbing serve Rhodes Ranch and Mountain's Edge for repiping?",
    answer:
      "Yes. Red Carpet Plumbing provides repiping services throughout Enterprise including Rhodes Ranch, Mountain's Edge, and the broader Southwest Las Vegas area. Call (702) 567-9172 to schedule an assessment.",
    category: "the-service",
  },
];

const HERO_SUBHEADING =
  "Red Carpet Plumbing provides whole-house and partial repiping services throughout Enterprise, Nevada and the Southwest Las Vegas area. Whether your home has first-service-cycle copper supply lines showing signs of hard water wear, Kitec plumbing with failing brass fittings, or polybutylene pipe that has degraded over time, our licensed plumbers evaluate the full system and recommend the right solution. Nevada Contractor License #0048585A, C-1 Plumbing and Heating.";

const TRUST_STRIP_ITEMS = [
  "Licensed Plumbers, NV #0048585A",
  // FLAG: VERIFY "over 40 years" before publishing.
  "Over 40 Years Serving Las Vegas Valley",
  // FLAG: VERIFY rating and review count before publishing.
  "4.8-Star Rating, 76 Google Reviews",
  "Clark County Permits Pulled",
  "Transparent Pricing, No Hidden Fees",
];

// Section 4 — visible <ul> warning signs.
const REPIPE_SIGNS = [
  "Recurring leaks in multiple locations throughout the home",
  "Rust-colored or discolored water from the taps",
  "Consistently low water pressure throughout the home",
  "Frequent pinhole leaks in copper pipes",
  "Known Kitec plumbing with brass fittings showing corrosion",
  "Polybutylene supply lines installed before 1998",
  "Multiple slab leaks on the same plumbing system",
  "Reduced water quality affecting taste, odor, or appearance",
];

// Section 6 — repiping service cards (non-linked, descriptive). Rendered with
// ServiceCard built={false} so titles render as plain text with no link and the
// ServiceImagePlaceholder fallback is used (no image prop).
const REPIPE_SERVICES = [
  {
    label: "Whole-house repiping",
    body: "Whole-house repiping replaces all supply lines throughout the home from the main water line through to each fixture connection. This is the most comprehensive solution for Enterprise homes with system-wide pipe thinning, known Kitec plumbing, or aging first-service-cycle copper showing recurring problems throughout multiple areas of the home.",
  },
  {
    label: "Partial repiping",
    body: "When only a section of the plumbing system is failing or has been identified as containing a problem material, partial repiping replaces the affected lines without repiping the entire home. Partial repipes are common when a specific area of an Enterprise home has developed recurring problems while the rest of the system remains in good condition.",
  },
  {
    label: "Kitec pipe replacement",
    body: "Kitec has brass fittings that corrode in mineral-rich Las Vegas water and fail at connection points. Kitec is identifiable by orange or blue flexible pipes with brass fittings. Red Carpet Plumbing replaces Kitec plumbing in Enterprise homes and condominiums, including properties built from the late 1990s through approximately 2005.",
  },
  {
    label: "Polybutylene pipe replacement",
    body: "Polybutylene degrades in chlorinated water and can fail without warning. Red Carpet Plumbing replaces polybutylene supply lines with PEX or copper to eliminate the risk of sudden failure in Enterprise homes and older properties built before 1998.",
  },
  {
    label: "PEX and copper repiping",
    body: "PEX is a flexible pipe that resists hard water scale buildup, requires fewer fittings, and installs with less drywall disruption than rigid pipe. In Enterprise, PEX pipe runs through attic spaces require proper insulation because Las Vegas attic temperatures can exceed 150 degrees Fahrenheit. Red Carpet Plumbing installs PEX to current Clark County code including required attic insulation. Copper is a proven, durable material that is naturally resistant to bacteria growth and provides excellent water quality. Red Carpet Plumbing installs Type L copper, the standard for residential plumbing in the Las Vegas Valley.",
  },
];

// Section 7 — visible <ol>, HowTo schema source.
const REPIPE_STEPS = [
  {
    name: "System Assessment and Pipe Identification",
    body: "A licensed Red Carpet Plumbing plumber assesses your Enterprise home's plumbing system, identifies the pipe materials present, checks for signs of system-wide thinning or defective materials, and documents the scope of work needed. We identify whether Kitec, polybutylene, first-service-cycle copper, or other materials are present and explain the findings to the homeowner before any work begins.",
  },
  {
    name: "Review Scope and Approve the Work",
    body: "We explain what we found, what the repiping project involves, and what pipe material options are available. You approve the full scope before any work begins. No surprises and no hidden fees.",
  },
  {
    name: "Clark County Permit Filing",
    body: "Whole-house repiping in Enterprise requires a Clark County building permit. Red Carpet Plumbing files the permit before work begins, ensuring the project is performed to code and documented correctly. Permit jurisdiction for Enterprise is Clark County, not the City of Las Vegas.",
  },
  {
    name: "Repiping with Minimal Disruption",
    body: "Our licensed plumbers complete the repiping project with care to limit disruption to finished walls and ceilings wherever possible. Most single-story Enterprise homes are re-piped in one to two days. For multi-day projects, water is restored to the home each evening.",
  },
  {
    name: "Final Inspection and Sign-Off",
    body: "After repiping is complete, we coordinate the Clark County inspection for final sign-off. A completed re-pipe with closed permits provides documentation of the work for homeowners and future buyers.",
  },
];

// Section 8 — why choose (bulleted list). FLAGged items per brief.
const WHY_CHOOSE_ITEMS = [
  // FLAG: VERIFY "over 40 years" before publishing.
  "Over 40 years serving the Las Vegas Valley",
  "Local, family-owned, not a national franchise",
  "Nevada Contractor License #0048585A, C-1 Plumbing and Heating",
  // FLAG: VERIFY rating and review count before publishing.
  "4.8-star rating across 76 Google reviews",
  "Clark County permits pulled and inspections scheduled",
  "Transparent pricing, no hidden fees",
  // FLAG: source-site claim — verify before final launch.
  "24/7 emergency plumbing service",
];

// Section 9 — neighborhood chips (plain text only; no Enterprise sub-area
// routes are built).
const ENTERPRISE_AREAS = [
  "Rhodes Ranch",
  "Mountain's Edge",
  "Southwest Las Vegas 215 Corridor",
  "Silverado Ranch Area",
  "Southern Highlands Area",
  "Enterprise Commercial Parks",
  "Inspirada Adjacent",
  "Southwest Enterprise",
];

// ---------------------------------------------------------------------------
// JSON-LD payloads. Service.areaServed uses Place -> AdministrativeArea (Clark
// County) -> State (Nevada) because Enterprise is unincorporated. Do NOT use
// "@type": "City".
// ---------------------------------------------------------------------------
const RELATED_SERVICES = [
  {
    label: "Emergency Plumbing",
    href: "/enterprise/emergency-plumbing/",
  },
  {
    label: "Drain Cleaning",
    href: "/enterprise/drain-cleaning/",
  },
  {
    label: "Leak Detection and Repair",
    href: "/enterprise/leak-detection-repair/",
  },
  {
    label: "Water Heater Repair and Installation",
    href: "/enterprise/water-heater-repair-installation/",
  },
  {
    label: "Slab Leak Detection and Repair",
    href: "/enterprise/slab-leak-detection-repair/",
  },
  {
    label: "Commercial Plumbing",
    href: "/enterprise/commercial-plumbing/",
  },
  {
    label: "Repiping in Las Vegas",
    href: "/las-vegas/repiping/",
  },
];

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Repiping Services in Enterprise, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides whole-house and partial repiping in Enterprise, NV. Copper, Kitec, and polybutylene replacement for Southwest Las Vegas homes. Clark County permits pulled.",
  url: "https://redcarpetplumbing.com/enterprise/repiping/",
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
      name: "Enterprise Plumbing Services",
      item: "https://redcarpetplumbing.com/enterprise-plumbing-services/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Repiping Services in Enterprise",
      item: "https://redcarpetplumbing.com/enterprise/repiping/",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Repiping Services in Enterprise, NV",
  serviceType: "Repiping",
  description:
    "Red Carpet Plumbing provides whole-house and partial repiping for Enterprise homes, including copper, Kitec, polybutylene, PEX, and copper repiping with Clark County permits pulled and inspections scheduled.",
  provider: {
    "@type": "Plumber",
    name: "Red Carpet Plumbing",
    url: "https://redcarpetplumbing.com",
    // FLAG: VERIFY telephone (carried forward from existing pages).
    telephone: "+17025679172",
  },
  areaServed: {
    "@type": "Place",
    name: "Enterprise, Nevada",
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

// HowTo schema included because Section 7 renders the matching visible
// step-by-step process (titles + body) on the page.
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Red Carpet Plumbing Handles Repiping in Enterprise",
  description:
    "The process Red Carpet Plumbing follows for repiping projects in Enterprise, NV.",
  step: REPIPE_STEPS.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.name,
    text: s.body,
  })),
};

const faqSchema = buildFaqPageSchema(ENTERPRISE_REPIPE_FAQS);

export default function EnterpriseRePipingPage() {
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
              label: "Enterprise Plumbing Services",
              href: "/enterprise-plumbing-services/",
            },
            { label: "Repiping Services in Enterprise" },
          ]} variant="dark" />}
          headingLevel="h1"
          headline={
            <>
              Repiping Services
              <br /> in Enterprise, NV
            </>
          }
          subheading={HERO_SUBHEADING}
          trustItems={TRUST_STRIP_ITEMS}
          primaryCTA={{
            label: "Call (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{
            label: "Request Service",
            href: "/contact/",
          }}
          ctaNote="Licensed plumbers. Transparent pricing. No hidden fees."
          formSlot={<QuoteFormPlaceholder title="Get a Repiping Assessment" />}
          backgroundImage={{
            src: "/images/services/re-piping/hero.webp",
            alt: "repiping services in Enterprise, NV",
          }}
        />

        {/* SECTION 2: DIRECT ANSWER BLOCK */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Repiping Services in Enterprise: What Homeowners Need to Know
              </h2>
              <div className="mt-6 space-y-6 text-lg leading-8 text-brand-dark/80">
                <p>
                  Enterprise, Nevada is a growing community with a distinctly
                  different plumbing history than older Las Vegas neighborhoods.
                  Most Enterprise residential development began in the late 1990s
                  and continued through the 2000s and 2010s, meaning the oldest
                  homes here are now 20 to 25 years old rather than 40 to 50.
                  That changes the repiping conversation.
                </p>
                <p>
                  The primary repiping concern in Enterprise is not galvanized
                  steel pipe from the 1960s or 1970s. It is first-service-cycle
                  copper supply lines installed during the Rhodes Ranch and
                  Mountain&apos;s Edge build-outs, now showing the effects of 20
                  to 25 years of exposure to Las Vegas Valley hard water. It is
                  also Kitec plumbing, installed in many Las Vegas area homes
                  from the late 1990s through approximately 2005, where brass
                  fittings corrode in mineral-rich water and eventually fail at
                  connection points.
                </p>
                <p>
                  Red Carpet Plumbing is a licensed local plumbing company
                  serving Enterprise and the Southwest Las Vegas area. Our Nevada
                  Contractor License #0048585A covers plumbing work throughout
                  Clark County, which is the permit jurisdiction for Enterprise.
                  For a full overview of our services in this community, visit
                  our{" "}
                  <Link
                    href="/enterprise-plumbing-services/"
                    className="font-semibold text-brand-dark underline hover:text-brand-dark/70"
                  >
                    Enterprise plumbing services
                  </Link>{" "}
                  page.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: PIPE MATERIAL GUIDE */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Pipe Materials in Enterprise Homes: What to Know
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Enterprise&apos;s development history creates a clear picture of
                which pipe materials are present by neighborhood era.
                Understanding what is in your home&apos;s walls is the first step
                in evaluating whether repiping is the right decision.
              </p>
            </div>

            <div className="mt-10 space-y-6">
              <article className="rounded-2xl bg-white p-6 ring-1 ring-brand-surface-alt sm:p-8">
                <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                  First-Service-Cycle Copper in Rhodes Ranch and Mountain&apos;s
                  Edge Homes
                </h3>
                <div className="mt-3 space-y-4 text-base leading-7 text-brand-dark/80">
                  <p>
                    Homes built in Enterprise&apos;s earliest master-planned
                    communities, including Rhodes Ranch and Mountain&apos;s Edge,
                    were constructed primarily in the late 1990s and early 2000s
                    with copper supply lines. These pipes are now 20 to 25 years
                    old and have been exposed to Las Vegas Valley hard water
                    throughout their service life. Las Vegas Valley water carries
                    approximately 280 parts per million of dissolved minerals,
                    among the hardest municipal water in the United States. Hard
                    water causes pitting corrosion inside copper pipe walls,
                    thinning them continuously from the inside out. When pipe
                    walls thin sufficiently, pinhole leaks develop. Multiple
                    pinhole leaks appearing in different locations of a home
                    indicate that the pipe walls have thinned throughout the
                    system rather than at isolated points, making repiping a
                    more practical long-term solution than continued spot
                    repairs.
                  </p>
                  <p>
                    For repiping information across the Las Vegas Valley, visit
                    our{" "}
                    <Link
                      href="/repiping/"
                      className="font-semibold text-brand-dark underline hover:text-brand-dark/70"
                    >
                      repiping services
                    </Link>{" "}
                    page.
                  </p>
                </div>
              </article>

              <article className="rounded-2xl bg-white p-6 ring-1 ring-brand-surface-alt sm:p-8">
                <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                  Kitec Pipe in Late 1990s to Early 2000s Homes
                </h3>
                <p className="mt-3 text-base leading-7 text-brand-dark/80">
                  Kitec plumbing was installed in homes and condominiums built
                  primarily from the late 1990s through approximately 2005.
                  Enterprise homes and attached housing developments built during
                  this period may contain Kitec. Kitec has brass fittings that
                  corrode when exposed to the minerals in Las Vegas hard water,
                  eventually failing at connection points. Kitec is identifiable
                  by orange or blue flexible pipes with brass fittings. If you
                  have Kitec plumbing in your Enterprise home, having it
                  evaluated and replaced is strongly recommended.
                </p>
              </article>

              <article className="rounded-2xl bg-white p-6 ring-1 ring-brand-surface-alt sm:p-8">
                <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                  Polybutylene Pipe in Late 1990s Builds
                </h3>
                <p className="mt-3 text-base leading-7 text-brand-dark/80">
                  Polybutylene pipe was widely installed in Las Vegas Valley
                  residential construction from approximately 1975 through 1995.
                  Some Enterprise properties built in the late 1990s on the older
                  end of the community&apos;s development timeline may contain
                  polybutylene. Polybutylene degrades in chlorinated municipal
                  water over time, becoming brittle from the inside out in a
                  process that is not visible during routine inspection.
                  Polybutylene leaks can occur without prior warning, often
                  inside walls or beneath slabs. If your home was built between
                  1985 and 1998 and has not been re-piped, a plumber can confirm
                  whether polybutylene supply lines are present.
                </p>
              </article>

              <article className="rounded-2xl bg-white p-6 ring-1 ring-brand-surface-alt sm:p-8">
                <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                  Hard Water Scale Across All Enterprise Eras
                </h3>
                <p className="mt-3 text-base leading-7 text-brand-dark/80">
                  Regardless of build era, all Enterprise homes receive the same
                  Las Vegas Valley hard water supply. The combination of mineral
                  corrosion, caliche soil movement beneath slab foundations, and
                  closed-loop system pressure cycling creates ongoing pipe stress
                  throughout Enterprise. Homes where a professional assessment
                  identifies system-wide pipe thinning, regardless of pipe
                  vintage, are repiping candidates.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* SECTION 4: SIGNS YOU MAY NEED RE-PIPING */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Signs Your Enterprise Home May Need Repiping
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                If you are seeing one or more of these signs in your Enterprise
                home, call Red Carpet Plumbing at (702) 567-9172 or request
                service online for a professional evaluation.
              </p>
            </div>
            <div className="mt-8 rounded-2xl border-l-4 border-brand-primary bg-brand-surface-alt p-6 sm:p-8">
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
          </div>
        </section>

        {/* SECTION 5: REPAIR VS. REPIPE DECISION */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                When to Repair vs. When to Repipe Your Enterprise Home
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Spot pipe repair is the right call when the damage is isolated,
                the pipe material is otherwise in good condition, and no broader
                system deterioration has been identified. Repiping is the right
                call when the damage is recurring, the pipe material is known to
                fail throughout, or a professional assessment identifies
                system-wide pipe wall thinning.
              </p>
            </div>

            <div className="mt-10 space-y-6">
              <article className="rounded-2xl bg-white p-6 ring-1 ring-brand-surface-alt sm:p-8">
                <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                  When Spot Repair Makes Sense
                </h3>
                <p className="mt-3 text-base leading-7 text-brand-dark/80">
                  A single pinhole leak in a copper supply line on a home that is
                  otherwise showing no additional warning signs may be addressed
                  with a targeted spot repair. If the rest of the system is in
                  good condition, repiping the entire home is not necessary. Red
                  Carpet Plumbing evaluates the full system during any service
                  call and advises accordingly. See our{" "}
                  <Link
                    href="/water-pipe-repair-replacement/"
                    className="font-semibold text-brand-dark underline hover:text-brand-dark/70"
                  >
                    water pipe repair and replacement
                  </Link>{" "}
                  page for targeted pipe repair options.
                </p>
              </article>

              <article className="rounded-2xl bg-white p-6 ring-1 ring-brand-surface-alt sm:p-8">
                <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                  When Repiping Is the Right Call
                </h3>
                <div className="mt-3 space-y-4 text-base leading-7 text-brand-dark/80">
                  <p>
                    Repiping is appropriate when multiple leaks have appeared in
                    different locations, the pipe material is known to fail
                    (Kitec, polybutylene), a professional assessment finds that
                    pipe walls have thinned throughout the system, or an
                    Enterprise home has experienced multiple slab leaks on the
                    same aging copper line. For homes where slab leaks have
                    already been detected, see our slab leak detection and repair
                    {" "}
                    page.
                  </p>
                  <p>
                    For Enterprise homes in Rhodes Ranch and Mountain&apos;s Edge
                    where copper supply lines are now 20 to 25 years old and hard
                    water corrosion has been ongoing throughout, repiping
                    typically makes more long-term financial sense than continued
                    spot repairs, particularly when a second or third slab leak
                    has already occurred on the same system.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* SECTION 6: RE-PIPING SERVICES */}
        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="max-w-4xl text-left">
              <h2 className="text-3xl tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Repiping Services for Enterprise Homes
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing provides the following repiping services for
                Enterprise homeowners and property managers.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {REPIPE_SERVICES.map((service) => (
                <ServiceCard
                  key={service.label}
                  title={service.label}
                  description={service.body}
                  href="#"
                  built={false}
                />
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 7: OUR RE-PIPING PROCESS (HowTo) */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Our Repiping Process in Enterprise
                  </h2>
                </div>
              </SectionRevealItem>
              <SectionRevealItem className="mt-12">
                <ol className="space-y-8">
                  {REPIPE_STEPS.map((step, index) => (
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

            {/* Mid-section emergency CTA */}
            <div className="mt-12 rounded-2xl border-l-4 border-brand-primary bg-white p-6 sm:p-8">
              <p className="text-base leading-7 text-brand-dark/80">
                For emergency plumbing in Enterprise, call Red Carpet Plumbing
                at{" "}
                <a
                  href="tel:+17025679172"
                  className="font-semibold text-brand-dark underline hover:text-brand-dark/70"
                >
                  (702) 567-9172
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 8: WHY CHOOSE */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="text-left">
              <h2 className="text-3xl tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Why Enterprise Homeowners Choose Red Carpet Plumbing
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing is a local, family-owned plumbing company
                serving Enterprise and the Southwest Las Vegas area. We hold
                Nevada Contractor License #0048585A under the C-1 Plumbing and
                Heating classification, covering residential and commercial
                plumbing work throughout Clark County including Enterprise.
              </p>
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
            <p className="mt-8 text-base leading-7 text-brand-dark/80">
              Our office is located at{" "}
              <a
                href="https://www.google.com/maps/place/3330+W+Hacienda+Ave+%23405,+Las+Vegas,+NV+89118/@36.0943375,-115.1870907,17z/data=!3m1!4b1!4m6!3m5!1s0x80c8c5d697faaaab:0x3db74ab4815ec72a!8m2!3d36.0943375!4d-115.1845158!16s%2Fg%2F11nynzwdy4?entry=ttu&g_ep=EgoyMDI0MDkxOC4xIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-brand-dark underline hover:text-brand-dark/70"
                aria-label="Get directions to Red Carpet Plumbing on Google Maps"
              >
                3330 W. Hacienda Ave Ste. 405, Las Vegas, NV 89118
              </a>
              . Office hours are Monday through Friday, 7:30 AM to 4:30
              PM.
            </p>
            <p className="mt-4 text-base leading-7 text-brand-dark/80">
              For our full range of plumbing services, visit our{" "}
              <Link
                href="/plumbing-services/"
                className="font-semibold text-brand-dark underline hover:text-brand-dark/70"
              >
                plumbing services
              </Link>{" "}
              page.
            </p>
          </div>
        </section>

        {/* SECTION 9: NEIGHBORHOODS WE SERVE */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Enterprise Neighborhoods and Communities We Serve
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing serves homes and businesses throughout
                Enterprise and the Southwest Las Vegas area. Call (702) 567-9172
                to confirm coverage for your neighborhood.
              </p>
            </div>
            <ul className="mt-8 flex flex-wrap gap-3">
              {ENTERPRISE_AREAS.map((area) => (
                <li
                  key={area}
                  className="rounded-full bg-white px-4 py-2 text-sm font-medium text-brand-dark/80 ring-1 ring-brand-surface-alt"
                >
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 10: FAQ */}
        <FaqSection
          heading="Repiping FAQs for Enterprise Homeowners"
          faqs={ENTERPRISE_REPIPE_FAQS}
          surface="light"
        />

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
          headline={<>Ready to Schedule Repiping<br />in Enterprise?</>}
          body="Red Carpet Plumbing provides licensed repiping services throughout Enterprise and the Southwest Las Vegas area. Clark County permits pulled. Transparent pricing. No hidden fees."
          primaryCTA={{
            label: "Call (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{
            label: "Request Service Online",
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
