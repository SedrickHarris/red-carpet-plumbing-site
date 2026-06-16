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
// SCHEMA NOTE: Spring Valley is an unincorporated Clark County community. Per
// the Batch 6 schema normalization, Service.areaServed uses Place ->
// AdministrativeArea (Clark County) -> State (Nevada), matching the Paradise and
// Summerlin pages and the spring-valley/emergency, drain-cleaning, water-heater,
// leak, and slab-leak siblings. Plain City is reserved for incorporated cities
// (Las Vegas, Henderson, North Las Vegas). Provider Plumber (name, url,
// telephone). No AggregateRating/Review. No sameAs.

export const metadata: Metadata = {
  title: "Re-Piping Services in Spring Valley, NV | Red Carpet Plumbing",
  description:
    "Professional re-piping services in Spring Valley, NV. Red Carpet Plumbing replaces galvanized, polybutylene, Kitec, and aging copper pipe throughout Spring Valley. PEX and copper repiping. Permits pulled through Clark County. Licensed plumbers.",
  alternates: {
    canonical: "https://redcarpetplumbing.com/spring-valley/re-piping/",
  },
  openGraph: {
    title: "Re-Piping Services in Spring Valley, NV | Red Carpet Plumbing",
    description:
      "Whole-house and partial repiping throughout Spring Valley, NV. Galvanized, polybutylene, Kitec, and copper pipe replacement. Clark County permits pulled. Licensed plumbers.",
    url: "https://redcarpetplumbing.com/spring-valley/re-piping/",
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
const SV_REPIPE_FAQS = [
  {
    question: "What are the signs I need to repipe my Spring Valley home?",
    answer:
      "The most common signs in Spring Valley homes include reduced water pressure throughout the home (a sign of galvanized pipe corrosion narrowing the pipe interior), discolored or rust-colored water from multiple fixtures, a metallic taste in the water, recurring leaks in different parts of the house, and visible signs of defective pipe materials such as gray polybutylene pipe or orange and blue Kitec pipes with brass fittings. For Spring Valley homes with original galvanized supply lines from the 1970s and 1980s, reduced pressure and water quality changes are often the earliest signs that the system is approaching end of life.",
  },
  {
    question: "How long does repiping take in Spring Valley?",
    answer:
      "Most Spring Valley single-story homes are repiped in one to two days. Two-story homes or homes with more complex layouts may take two to three days. Water is restored each evening on multi-day projects so your household is not without water overnight. The timeline also depends on the pipe material being replaced and the scope of the project, whether whole-house or partial.",
  },
  {
    question: "Does repiping require a permit in Spring Valley?",
    answer:
      "Yes. Whole-house repiping in Spring Valley requires a permit through Clark County, which is the permit jurisdiction for Spring Valley as an unincorporated Clark County community. Red Carpet Plumbing pulls the required permit and schedules the inspection as part of every whole-house repipe project. Do not hire a contractor who offers to skip the permit process.",
  },
  {
    question:
      "Is PEX pipe a good choice for Spring Valley hard water conditions?",
    answer:
      "Yes. PEX (cross-linked polyethylene) is the standard modern replacement material for residential repiping in the Las Vegas Valley, including Spring Valley. PEX is flexible, resistant to mineral scale buildup, and performs well in Las Vegas hard water conditions at 17 to 24 grains per gallon. One important installation requirement in Spring Valley: PEX pipe runs through attic spaces must be properly insulated because Las Vegas attic temperatures can exceed 150 degrees Fahrenheit. Red Carpet Plumbing installs PEX to current Clark County code including required attic insulation.",
  },
  {
    question: "Should I repair or repipe my Spring Valley home?",
    answer:
      "The answer depends on the pipe material and the extent of the problem. Spot repair is appropriate when a leak is isolated and the surrounding pipe is in good condition. For Spring Valley homes with original galvanized steel supply lines, a galvanized pipe failure is typically a sign of systemic corrosion throughout the remaining pipes, and a full repipe evaluation is warranted rather than relying on repeated spot repairs. For homes with polybutylene or Kitec supply lines, full replacement is the standard recommendation because these materials are defective throughout the system.",
  },
  {
    question:
      "What pipe material does Red Carpet Plumbing use to replace old pipes in Spring Valley?",
    answer:
      "Red Carpet Plumbing primarily uses PEX and Type L copper for residential repiping in Spring Valley. PEX is flexible, scale-resistant, and well-suited to Las Vegas hard water conditions, and is the most common replacement material for whole-house repipes. Copper is a proven, durable material that provides excellent water quality. The right choice for your Spring Valley home depends on your existing plumbing layout, household needs, and budget. We explain the options for each project before any work begins.",
  },
];

const HERO_SUBHEADING =
  "Red Carpet Plumbing provides whole-house and partial re-piping for homes and businesses in Spring Valley, Nevada. Spring Valley is one of the most densely populated unincorporated communities in the United States, and its established northern neighborhoods along the Desert Inn and West Sahara corridors contain some of the oldest residential plumbing in the Las Vegas Valley. Our licensed plumbers assess existing pipe conditions, explain material options, pull required Clark County permits, and complete repipe projects with minimal household disruption.";

const HERO_TRUST_ITEMS = [
  // FLAG: VERIFY rating and review count before publishing.
  "4.8 stars, 76 Google reviews",
  "NV Licensed #0048585A",
  // FLAG: VERIFY "over 40 years" before publishing.
  "Over 40 years serving the Las Vegas Valley",
  "Transparent pricing, no hidden fees",
];

// Section 3 — pipe material guide (four visible H3 blocks). The galvanized card
// closes with an inline link to the built core /re-piping/ page.
const PIPE_MATERIALS: {
  heading: string;
  body: string;
  link?: { pre: string; href: string; text: string; post: string };
}[] = [
  {
    heading:
      "Galvanized Steel Pipes (Desert Inn and West Sahara Corridor Homes, Built Before 1990)",
    body: "Galvanized steel supply lines were the standard material in Las Vegas Valley homes built before approximately 1975, and they remained in use in some construction through the late 1980s. Northern Spring Valley neighborhoods along the Desert Inn and West Sahara corridors have a high concentration of these older homes. Over decades of exposure to Las Vegas hard water, the zinc coating on galvanized steel pipes wears away and the pipe corrodes from the inside out. As corrosion advances, the pipe interior develops a rough, narrowing surface that reduces water pressure and water quality. Reduced water pressure throughout the home, discolored water, and a metallic taste are the most common indicators. Unlike copper pipe failures, galvanized pipe failures can occur suddenly without prior visible external signs. For Spring Valley homes with original galvanized supply lines, a full system evaluation is warranted.",
    link: {
      pre: " For our full re-piping service overview, see our ",
      href: "/re-piping/",
      text: "re-piping services",
      post: " page.",
    },
  },
  {
    heading: "Polybutylene Pipes (Homes Built 1975 to 1995)",
    body: "Polybutylene pipe was widely installed in Las Vegas Valley homes between approximately 1975 and 1995. It is a gray, flexible plastic material that degrades when exposed to chlorinated water and oxidants over time. Degraded polybutylene pipe develops micro-fractures that can cause leaks at fittings, joints, and along pipe runs. Polybutylene is identifiable by its gray color and is commonly found in utility rooms, under sinks, and inside walls in homes built during this period. If your Spring Valley home has polybutylene supply lines, repiping is the standard recommended course of action.",
  },
  {
    heading: "Kitec Pipes (Homes Built Late 1990s to Approximately 2005)",
    body: "Kitec piping was installed in the Las Vegas Valley from the late 1990s through approximately 2005. It is identifiable by orange pipes for hot water lines and blue pipes for cold water lines, with distinctive brass fittings. In Las Vegas's mineral-rich water, the brass fittings in Kitec systems corrode and become brittle over time, increasing the risk of fitting failure. Kitec was the subject of a class action settlement, and its use has been discontinued, but many Spring Valley properties built during this period still have Kitec installed. If you see orange or blue flexible pipes with brass fittings in your Spring Valley home, have the system evaluated.",
  },
  {
    heading: "Aging Copper Pipes (Homes Built 1975 to 2000)",
    body: "Copper pipes installed in Spring Valley homes built between approximately 1975 and 2000 have been exposed to 25 to 50 years of Las Vegas hard water mineral deposits and pitting corrosion. Las Vegas's hard water, at approximately 280 parts per million of dissolved minerals, thins copper pipe walls through a process called pitting corrosion. When pipe walls thin sufficiently, they develop pinhole leaks. Multiple pinhole leaks in different parts of the home indicate that pipe walls have thinned throughout the system, and repiping is typically more practical than continued spot repairs on a system-wide basis.",
  },
];

// Section 4 — re-piping services (bold label + body).
const REPIPE_SERVICES = [
  {
    label: "Whole-house re-piping",
    body: "We replace all supply lines throughout the home in a single coordinated project, from the main shutoff through all branch lines to every fixture. Whole-house repipes require a Clark County permit, which we pull and schedule for inspection as part of the project.",
  },
  {
    label: "Partial re-piping",
    body: "When only a specific area of the home has defective or failing pipe material, a targeted partial repipe replaces the affected runs without disturbing the rest of the system. We assess whether the remaining pipe materials are in acceptable condition before recommending a partial approach.",
  },
  {
    label: "Polybutylene pipe replacement",
    body: "We remove all polybutylene supply lines and replace them with PEX or copper installed to current code. Polybutylene pipe replacement is a complete material removal, not a repair.",
  },
  {
    label: "Kitec pipe replacement",
    body: "We identify all Kitec piping and fittings in your Spring Valley home and replace the full Kitec system. Partial Kitec replacement is not recommended because the brass fitting corrosion risk applies throughout the system.",
  },
  {
    label: "Galvanized steel pipe replacement",
    body: "For Spring Valley homes with original galvanized supply lines, we assess the full extent of the galvanized system, identify the areas of greatest corrosion and risk, and replace all galvanized supply lines as part of a whole-house or targeted repipe.",
  },
  {
    label: "PEX re-piping",
    body: "PEX (cross-linked polyethylene) is the standard modern replacement material for residential repiping in the Las Vegas Valley. It is flexible, resistant to mineral scale, and performs well in Las Vegas hard water conditions. In Spring Valley homes, PEX pipe runs through attic spaces require proper insulation because Las Vegas attic temperatures can exceed 150 degrees Fahrenheit. Red Carpet Plumbing installs PEX to current Clark County code including required attic insulation.",
  },
  {
    label: "Copper re-piping",
    body: "Copper is a proven, durable material that is naturally resistant to bacterial growth and provides excellent water quality. Red Carpet Plumbing installs Type L copper, the standard for residential plumbing in the Las Vegas Valley.",
  },
];

// Section 5 — repiping decision conditions (visible bulleted list).
const REPIPE_WHEN = [
  "The home has polybutylene or Kitec supply lines, which are defective materials throughout the system regardless of whether visible leaks have occurred yet",
  "Multiple leaks have occurred in different parts of the home, indicating system-wide pipe wall thinning in older copper systems",
  "Water pressure has dropped measurably throughout the home due to galvanized pipe corrosion narrowing the pipe interior",
  "A galvanized supply line has failed, and the assessment reveals widespread corrosion throughout the remaining system",
  "A slab leak has already required rerouting of a pipe run, and the remaining system shows similar corrosion progression",
];

// Section 6 — visible <ol>, HowTo schema source.
const REPIPE_STEPS = [
  {
    name: "Assess the existing plumbing system",
    body: "We identify the pipe materials present in your Spring Valley home, the age and condition of the system, and the scope of repiping needed. We assess which areas of the home are affected and whether a whole-house repipe or targeted partial repipe is the right approach. We also identify permit requirements, which apply to whole-house repipes under Clark County jurisdiction for Spring Valley properties.",
  },
  {
    name: "Present material options and approach",
    body: "We explain the options for replacement materials, typically PEX or copper for residential repipes, including the pros and cons of each for your specific Spring Valley home and hard water conditions. We present the scope of the project, the installation approach, and what the repiping will involve for your household before any work begins. We do not start work without your approval.",
  },
  {
    name: "Complete the repipe with minimal disruption",
    body: "We protect floors and furniture before cutting drywall access points. We install the new piping, connect all fixtures, and restore water service. Most Spring Valley single-story homes are repiped in one to two days. Water is restored each evening on multi-day projects so your household is not without water overnight.",
  },
  {
    name: "Permit inspection and sign-off",
    body: "We schedule the required inspection with Clark County, walk through the completed work with the inspector, and obtain final sign-off. A closed permit with final inspection documentation is important for homeowners and future buyers in Spring Valley.",
  },
];

// Section 7 — why choose (bulleted list). Multiple items carry FLAGs.
const WHY_CHOOSE = [
  // FLAG: verify before publishing.
  "Local Las Vegas Valley plumbing company familiar with Spring Valley's Desert Inn and West Sahara corridor homes, galvanized pipe conditions, and Clark County permit requirements",
  "Clark County permits pulled and inspections scheduled on every whole-house repipe",
  "PEX installed to current Clark County code including required attic insulation for Las Vegas attic temperature conditions",
  // FLAG: VERIFY license number before publishing.
  "Licensed plumbers, NV License #0048585A",
  "Transparent pricing with no hidden fees",
  // FLAG: VERIFY "over 40 years" before publishing.
  "Over 40 years serving the Las Vegas Valley",
  // FLAG: VERIFY rating and review count before publishing.
  "4.8-star rating across 76 Google reviews",
];

// Section 8 — coverage area chips (plain text only; no Spring Valley sub-area
// routes are built).
const SV_AREAS = [
  "Desert Inn / West Sahara Corridor",
  "West Flamingo Area",
  "Spring Valley Parkway Corridor",
  "Tropicana Corridor",
  "Rainbow Boulevard Area",
  "Decatur Boulevard Area",
  "Western Spring Valley",
  "Eastern Spring Valley",
];

// ---------------------------------------------------------------------------
// JSON-LD payloads. Service.areaServed uses Place -> AdministrativeArea (Clark
// County) -> State (Nevada) because Spring Valley is unincorporated. Do NOT use
// "@type": "City".
// ---------------------------------------------------------------------------
const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Re-Piping Services in Spring Valley, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides re-piping services in Spring Valley, NV. Galvanized, polybutylene, Kitec, and copper pipe replacement. Clark County permits pulled. Licensed plumbers.",
  url: "https://redcarpetplumbing.com/spring-valley/re-piping/",
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
      name: "Spring Valley Plumbing Services",
      item: "https://redcarpetplumbing.com/spring-valley-plumbing-services/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Re-Piping Services in Spring Valley",
      item: "https://redcarpetplumbing.com/spring-valley/re-piping/",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Re-Piping Services in Spring Valley, NV",
  serviceType: "Re-Piping",
  description:
    "Red Carpet Plumbing provides whole-house and partial re-piping services for homes and businesses in Spring Valley, NV. Services include galvanized steel pipe replacement, polybutylene pipe replacement, Kitec pipe replacement, PEX repiping, and copper repiping. Clark County permits pulled.",
  provider: {
    "@type": "Plumber",
    name: "Red Carpet Plumbing",
    url: "https://redcarpetplumbing.com",
    // FLAG: VERIFY telephone (carried forward from existing pages).
    telephone: "+17025679172",
  },
  areaServed: {
    "@type": "Place",
    name: "Spring Valley",
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
  name: "How Red Carpet Plumbing Handles Re-Piping in Spring Valley",
  description:
    "The process Red Carpet Plumbing follows for re-piping homes in Spring Valley, NV.",
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
  mainEntity: SV_REPIPE_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function SpringValleyRePipingPage() {
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
              label: "Spring Valley Plumbing Services",
              href: "/spring-valley-plumbing-services/",
            },
            { label: "Re-Piping Services in Spring Valley" },
          ]}
        />

        {/* SECTION 1: HERO */}
        <HeroSection
          headingLevel="h1"
          headline="Re-Piping Services in Spring Valley, NV"
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
          ctaNote="Licensed plumbers. Clark County permits pulled. Transparent pricing."
          formSlot={<QuoteFormPlaceholder title="Get Re-Piping Help" />}
          backgroundImage={{
            src: "/images/services/re-piping/hero.webp",
            alt: "Re-piping services in Spring Valley, NV",
          }}
        />

        {/* SECTION 2: OVERVIEW */}
        {/* Page 15 (/spring-valley/leak-detection-repair/) is built and */}
        {/* validated, so its anchor is activated in the closing paragraph. */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Re-Piping in Spring Valley, NV
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Homes in Spring Valley built before approximately 1990 face a
                different repiping situation than newer construction in other
                parts of the Las Vegas Valley. The northern Spring Valley
                neighborhoods along the Desert Inn Road and West Sahara Avenue
                corridors were built primarily in the 1970s through the 1990s
                with galvanized steel supply lines. Unlike copper pinhole leaks
                that develop slowly and give visible warning signs, galvanized
                pipe corrosion progresses from the inside out and can result in
                sudden pipe failure without prior external indication. When a
                galvanized supply line fails, the resulting water release can be
                significant.
              </p>
              <p className="mt-4 text-base leading-7 text-brand-dark/80">
                Las Vegas hard water accelerates this corrosion process. At 17 to
                24 grains per gallon (approximately 280 parts per million of
                dissolved minerals), Las Vegas municipal water is among the
                hardest in the United States. Decades of this mineral-rich water
                passing through aging galvanized pipes strips the zinc coating
                and corrodes the pipe walls.
              </p>
              <p className="mt-4 text-base leading-7 text-brand-dark/80">
                When multiple galvanized supply lines have already shown signs of
                failure, or when water pressure has dropped measurably throughout
                the home, repiping the full system is typically more practical
                than continued spot repairs. For non-invasive leak detection
                before committing to a repipe decision, see our{" "}
                <Link
                  href="/spring-valley/leak-detection-repair/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  leak detection in Spring Valley
                </Link>{" "}
                page.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: PIPE MATERIAL GUIDE (four visible H3 blocks) */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                What Pipe Materials Are in Spring Valley Homes?
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Understanding what is in your home&apos;s walls is the first step
                in evaluating whether re-piping is the right decision for your
                Spring Valley property.
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
                    {m.link ? (
                      <>
                        {m.link.pre}
                        <Link
                          href={m.link.href}
                          className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                        >
                          {m.link.text}
                        </Link>
                        {m.link.post}
                      </>
                    ) : null}
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
                Re-Piping Services We Provide in Spring Valley
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
        {/* Page 16 (/spring-valley/slab-leak-detection-repair/) is built and */}
        {/* validated, so its anchor is activated in the closing paragraph. */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                When Repair Is Right and When Repiping Makes More Sense
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Spot repair is the right call when a leak is isolated, the
                surrounding pipe material is in acceptable condition, and the pipe
                material is not known to be defective system-wide. For targeted
                pipe repair options, see our{" "}
                <Link
                  href="/water-pipe-repair-replacement/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  water pipe repair and replacement
                </Link>{" "}
                page.
              </p>
            </div>
            <div className="mt-8 rounded-2xl border-l-4 border-brand-primary bg-white p-6 sm:p-8">
              <p className="text-base font-semibold text-brand-dark">
                Repiping is typically the more practical long-term decision when:
              </p>
              <ul className="mt-4 space-y-3">
                {REPIPE_WHEN.map((item) => (
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
              For Spring Valley homes with original galvanized steel supply lines,
              spot repair addresses the immediate failure but does not resolve the
              systemic corrosion in the remaining pipes. In these cases, a full
              repipe evaluation is warranted after any galvanized pipe failure.
              See our{" "}
              <Link
                href="/spring-valley/slab-leak-detection-repair/"
                className="font-semibold text-brand-primary hover:text-brand-primary-hover"
              >
                slab leak detection and repair in Spring Valley
              </Link>{" "}
              page for related information on slab-level pipe failures in older
              Spring Valley homes.
            </p>
          </div>
        </section>

        {/* SECTION 6: OUR RE-PIPING PROCESS (HowTo) */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Our Re-Piping Process in Spring Valley
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
                Why Spring Valley Homeowners Choose Red Carpet Plumbing for
                Re-Piping
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
                href="/spring-valley-plumbing-services/"
                className="font-semibold text-brand-primary hover:text-brand-primary-hover"
              >
                Spring Valley plumbing services
              </Link>{" "}
              including emergency plumbing, drain cleaning, water heater repair,
              and slab leak detection. We also serve communities near Spring
              Valley including{" "}
              <Link
                href="/las-vegas-plumbing-services/"
                className="font-semibold text-brand-primary hover:text-brand-primary-hover"
              >
                Las Vegas plumbing services
              </Link>{" "}
              and{" "}
              <Link
                href="/summerlin-plumbing-services/"
                className="font-semibold text-brand-primary hover:text-brand-primary-hover"
              >
                Summerlin plumbing services
              </Link>
              .
            </p>
            <p className="mt-4 text-base leading-7 text-brand-dark/80">
              For emergency pipe failures in Spring Valley, see our{" "}
              <Link
                href="/spring-valley/emergency-plumbing/"
                className="font-semibold text-brand-primary hover:text-brand-primary-hover"
              >
                Spring Valley emergency plumbing
              </Link>{" "}
              page.
            </p>
          </div>
        </section>

        {/* SECTION 8: COVERAGE AREAS */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Spring Valley Re-Piping Coverage Areas
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing provides re-piping services throughout Spring
                Valley and its surrounding communities.
              </p>
            </div>
            <ul className="mt-8 flex flex-wrap gap-3">
              {SV_AREAS.map((area) => (
                <li
                  key={area}
                  className="rounded-full bg-brand-surface-alt px-4 py-2 text-sm font-medium text-brand-dark/80 ring-1 ring-brand-surface-alt"
                >
                  {area}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-base leading-7 text-brand-dark/80">
              For re-piping services across the Las Vegas Valley, see our{" "}
              <Link
                href="/las-vegas/re-piping/"
                className="font-semibold text-brand-primary hover:text-brand-primary-hover"
              >
                Las Vegas re-piping
              </Link>{" "}
              page.
            </p>
          </div>
        </section>

        {/* SECTION 9: FAQ */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Re-Piping FAQs for Spring Valley Homeowners
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {SV_REPIPE_FAQS.map((faq) => (
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
          headline={<>Schedule Re-Piping Service<br />in Spring Valley Today</>}
          body="Red Carpet Plumbing provides whole-house and partial re-piping throughout Spring Valley, NV, including the Desert Inn and West Sahara corridors and surrounding neighborhoods. Clark County permits pulled and inspections scheduled. Call (702) 567-9172 or request service online."
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
