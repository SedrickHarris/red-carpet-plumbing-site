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
//
// DEVIATION (approved): the Section 2 intro's "...dissolved minerals — among..."
// em dash was changed to a comma per the no-em-dash copy rule, matching the
// comma phrasing already used for the same fact in GV_DRAIN_FACTORS[0]. Approved
// by the user before build.

export const metadata: Metadata = {
  title: "Drain Cleaning in Green Valley, Henderson, NV | Red Carpet Plumbing",
  // FLAG: description below is the approved brief string (~213 chars). It
  // exceeds the site's ≤160 meta-description standard; kept as approved pending
  // a trim decision. See build report.
  description:
    "Professional drain cleaning in Green Valley, Henderson, NV. Red Carpet Plumbing clears kitchen drains, bathroom drains, and main sewer lines for original Green Valley and Green Valley Ranch homes. Call (702) 567-9172.",
  alternates: {
    canonical: "https://redcarpetplumbing.com/green-valley/drain-cleaning/",
  },
  openGraph: {
    title:
      "Drain Cleaning in Green Valley, Henderson, NV | Red Carpet Plumbing",
    description:
      "Licensed drain cleaning for Green Valley and Green Valley Ranch homes. Original copper lines, hard water mineral buildup, and first-service-cycle pipes. Call (702) 567-9172.",
    url: "https://redcarpetplumbing.com/green-valley/drain-cleaning/",
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
const GV_DRAIN_FAQS = [
  {
    question: "Why do drains clog faster in Green Valley homes?",
    answer:
      "Drains in Green Valley homes clog faster because Las Vegas hard water leaves calcium and magnesium deposits inside pipe walls that narrow the pipe and create rough surfaces that trap grease and soap scum. In original Green Valley neighborhoods built from the late 1970s through mid-1990s, these deposits have been accumulating for 30 to 45 years, making drain clog formation faster and more stubborn than in newer construction. Green Valley receives the same Lake Mead municipal supply as the rest of the Las Vegas Valley, which carries 17 to 24 grains per gallon of dissolved minerals.",
  },
  {
    question: "Is hydro jetting safe for older Green Valley pipes?",
    answer:
      "Hydro jetting can be highly effective on Green Valley pipes in good condition, but for original Green Valley copper lines that have been under hard water stress for 30 to 45 years, we assess pipe condition before recommending high-pressure methods. A video camera inspection helps us determine whether the line can handle hydro jetting pressure or whether cable clearing is the safer approach. We do not apply hydro jetting to lines showing signs of significant corrosion or thinning.",
  },
  {
    question: "How do I know if I need professional drain cleaning in Green Valley?",
    answer:
      "Call a plumber when multiple drains are slow at the same time, when you have a complete blockage, when drains produce sewage or sulfur odors, or when you hear gurgling sounds from toilets or other fixtures. Multiple affected drains usually indicate a main sewer line problem that requires professional clearing rather than a store-bought solution.",
  },
  {
    question: "How often should Green Valley homeowners have their drains cleaned?",
    answer:
      "Most Green Valley homeowners benefit from professional drain cleaning every one to two years. Homes in original Green Valley neighborhoods with 30 to 45 year old copper pipes and accumulated hard water mineral buildup may benefit from annual cleaning. Green Valley Ranch homes are entering their first major service cycle and benefit from inspection and cleaning as lines reach the 20 to 30 year mark.",
  },
  {
    question: "Does Red Carpet Plumbing serve Green Valley Ranch?",
    answer:
      "Yes. Red Carpet Plumbing provides drain cleaning throughout Green Valley, including Green Valley Ranch, as well as the surrounding Henderson communities. Green Valley is part of the incorporated City of Henderson, and we serve all Green Valley neighborhoods.",
  },
  {
    question: "How much does drain cleaning cost in Green Valley?",
    answer:
      "Drain cleaning costs vary based on the type of drain, the severity of the clog, and the method required to clear it. Red Carpet Plumbing provides transparent pricing before work begins. Call (702) 567-9172 for a quote.",
  },
];

// ---------------------------------------------------------------------------
// Why Green Valley drains clog — two-era cause factors.
// Cause 1 leads with hard water mineral bonding (established site pattern).
// Causes 2-3 are Green Valley era-specific (original copper vs. GV Ranch).
// Cause 4 is tree root intrusion (supporting, not leading).
// ---------------------------------------------------------------------------
const GV_DRAIN_FACTORS: { label: string; body: string }[] = [
  {
    label: "Hard water mineral bonding to grease inside pipe walls",
    body: "Green Valley receives the same Lake Mead municipal supply as the rest of the Las Vegas Valley. This supply carries 17 to 24 grains per gallon of dissolved calcium and magnesium, among the highest concentrations in the United States. These minerals deposit inside drain pipe walls over time, narrowing the pipe interior and creating a rough surface that catches and holds grease, soap scum, and debris. In Green Valley homes, the combination of hard water minerals and cooking grease causes kitchen drains in particular to accumulate buildup faster than in cities with softer water.",
  },
  {
    label:
      "Original Green Valley copper drain lines with 30 to 45 years of mineral accumulation",
    body: "Homes in the original Green Valley neighborhoods, developed from the late 1970s through the mid-1990s, have copper drain and supply lines that have been under hard water stress for three to four decades. Mineral deposits have had a full generation to build up inside these pipes, narrowing the interior diameter and making clogs form faster and more completely. Some homes from this era also have polybutylene supply lines, which can add an additional layer of vulnerability to the overall plumbing system. Original Green Valley homes represent the highest concentration of drain cleaning candidates in the Henderson area.",
  },
  {
    label:
      "Green Valley Ranch first-service-cycle copper reaching the maintenance window",
    body: "Green Valley Ranch, developed primarily from the mid-1990s through the mid-2000s, has homes that are now 20 to 30 years old. These homes are entering the age range where original copper drain lines begin showing the effects of sustained hard water exposure. While mineral accumulation in Green Valley Ranch pipes is less severe than in the original neighborhoods, these homes are reaching their first major service cycle, and drain cleaning, water heater maintenance, and pressure regulator inspection are all becoming relevant service needs.",
  },
  {
    label: "Tree root intrusion in established Green Valley properties",
    body: "Green Valley's established landscaping includes mature trees with root systems that actively seek moisture. Underground sewer lines are a reliable moisture source, and small cracks or aging joints in older Green Valley sewer line connections give roots an entry point. Root intrusion causes recurring blockages in older Green Valley properties that cable clearing addresses temporarily. A video camera inspection can identify root intrusion and guide a more permanent repair.",
  },
];

// ---------------------------------------------------------------------------
// Drain cleaning services offered in Green Valley.
// Two cards carry inline links to live core service pages per established pattern.
// ---------------------------------------------------------------------------
const GV_DRAIN_SERVICES: {
  label: string;
  body: string;
  link?: { href: string; text: string };
}[] = [
  {
    label: "Kitchen drain cleaning",
    body: "Grease, cooking oils, and food particles build up inside kitchen drain lines, and Green Valley hard water accelerates the mineral bonding process. We clear kitchen drains completely from the sink trap to the main connection.",
  },
  {
    label: "Bathroom drain cleaning",
    body: "Hair, soap scum, and personal care product residue accumulate in bathroom sink, shower, and tub drains. We clear bathroom drains and verify full flow is restored.",
  },
  {
    label: "Main sewer line cleaning",
    body: "When multiple drains are slow or backing up simultaneously, the blockage is usually in the main sewer line. We clear main sewer lines using cable machines and hydro jetting matched to the type and location of the blockage.",
    link: { href: "/sewer-line-services/", text: "sewer line services" },
  },
  {
    label: "Hydro jetting",
    body: "Hydro jetting uses high-pressure water to scour the interior walls of drain and sewer lines, removing grease, mineral scale, and debris from the pipe walls rather than just clearing a path through the clog. For Green Valley homes with significant hard water mineral buildup, hydro jetting provides a more thorough and longer-lasting result than cable clearing alone. Note: we assess pipe condition before recommending hydro jetting on original Green Valley copper lines that may have thinned from years of hard water exposure.",
  },
  {
    label: "Video camera drain inspection",
    body: "A video camera inspection lets us see exactly what is inside your drain or sewer line before and after cleaning. We identify blockage type and location, confirm the line is fully clear after cleaning, and check for root intrusion, pipe damage, or structural issues that could cause future problems.",
    link: {
      href: "/video-camera-plumbing-inspections/",
      text: "video camera plumbing inspections",
    },
  },
  {
    label: "Floor drain cleaning",
    body: "Floor drains in garages, utility rooms, and laundry areas collect debris, sediment, and mineral buildup over time. We clear floor drains and inspect the line for structural issues.",
  },
];

// ---------------------------------------------------------------------------
// HowTo steps — must match the visible numbered process on the page exactly.
// ---------------------------------------------------------------------------
const GV_DRAIN_STEPS: { name: string; body: string }[] = [
  {
    name: "Assess the drain and identify the source of the clog",
    body: "We start by gathering information about which drains are affected, how long the problem has been present, and whether multiple fixtures are involved. In Green Valley homes, we also note the likely build era, which helps us anticipate pipe material and condition before we start work.",
  },
  {
    name: "Select the right clearing method for the pipe and clog type",
    body: "Not every clog requires the same approach. Soft clogs respond well to cable machines. Hard mineral scale and grease buildup benefit from hydro jetting where pipe condition allows. For original Green Valley copper lines with decades of hard water exposure, we assess pipe condition before recommending high-pressure methods.",
  },
  {
    name: "Clear the blockage completely",
    body: "We clear the drain line fully, not just enough to restore partial flow. For main sewer line cleaning, we work from cleanout access points to clear the entire line. For branch drains, we address the specific fixture and verify the line is clear to the main connection.",
  },
  {
    name: "Verify full flow is restored",
    body: "After clearing, we run water through the line to confirm full flow is restored and no partial blockage remains. If we used a camera inspection to identify the clog, we confirm the line is clear on camera before completing the job.",
  },
];

// ---------------------------------------------------------------------------
// Related services block. All Green Valley sibling routes are built and linked.
// ---------------------------------------------------------------------------
const RELATED_SERVICES: { label: string; href?: string }[] = [
  {
    label: "Green Valley Plumbing Services",
    href: "/green-valley-plumbing-services/",
  },
  {
    label: "Henderson Plumbing Services",
    href: "/henderson-plumbing-services/",
  },
  {
    label: "Drain Cleaning Services",
    href: "/drain-cleaning/",
  },
  {
    label: "Henderson Drain Cleaning",
    href: "/henderson/drain-cleaning/",
  },
  {
    label: "Sewer Line Services",
    href: "/sewer-line-services/",
  },
  {
    label: "Video Camera Plumbing Inspections",
    href: "/video-camera-plumbing-inspections/",
  },
  {
    // ACTIVATED: P31 built and staged
    label: "Green Valley Water Heater Repair",
    href: "/green-valley/water-heater-repair-installation/",
  },
  {
    // ACTIVATED: P32 built and staged
    label: "Green Valley Leak Detection and Repair",
    href: "/green-valley/leak-detection-repair/",
  },
];

// ---------------------------------------------------------------------------
// Communities grid — Green Valley sub-areas and nearby Henderson communities.
// Live links to confirmed hubs only. All sub-area names are plain text chips.
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

// Hero trust strip. FLAG comments retained per established sibling pattern.
const HERO_TRUST_ITEMS = [
  // FLAG: verify before publishing.
  "4.8 stars, 76 Google reviews",
  // FLAG: verify before final launch.
  "NV Licensed Plumbers, #0048585A",
  // FLAG: verify before publishing.
  "Over 40 years serving the Las Vegas Valley",
  // FLAG: source-site claim — verify before final launch.
  "Transparent pricing, no hidden fees",
  // FLAG: source-site claim — verify before final launch.
  "Emergency plumbing service available",
];

// ---------------------------------------------------------------------------
// JSON-LD payloads. Green Valley is a community within the incorporated City of
// Henderson, so Service.areaServed uses Place (Green Valley) -> containedInPlace
// City (Henderson) -> containedInPlace State (Nevada). Do NOT use City for
// Green Valley. Do NOT use AdministrativeArea. Do NOT use Clark County.
// ---------------------------------------------------------------------------
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Drain Cleaning in Green Valley",
  serviceType: "Drain Cleaning",
  description:
    "Professional drain cleaning for homes and businesses in Green Valley, Henderson, NV. Kitchen drain cleaning, bathroom drain cleaning, main sewer line cleaning, hydro jetting, and video camera drain inspection. Nevada Contractor License #0048585A, C-1 Plumbing and Heating.",
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
      name: "Drain Cleaning in Green Valley",
      item: "https://redcarpetplumbing.com/green-valley/drain-cleaning/",
    },
  ],
};

// HowTo schema included because Section 6 renders the matching visible
// step-by-step process (titles + body) on the page.
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Red Carpet Plumbing Cleans Your Drains in Green Valley",
  description:
    "The drain cleaning process used by Red Carpet Plumbing for Green Valley, Henderson homes and businesses.",
  step: GV_DRAIN_STEPS.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.name,
    text: s.body,
  })),
};

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Drain Cleaning in Green Valley, Henderson, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides professional drain cleaning for homes in Green Valley, Henderson, NV. Original Green Valley copper lines, Green Valley Ranch first-service cycle, and hard water mineral buildup. Licensed plumbers.",
  url: "https://redcarpetplumbing.com/green-valley/drain-cleaning/",
  isPartOf: {
    "@type": "WebSite",
    name: "Red Carpet Plumbing",
    url: "https://redcarpetplumbing.com",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: GV_DRAIN_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function GreenValleyDrainCleaningPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={howToSchema} />
      <JsonLd data={webpageSchema} />
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
            { label: "Drain Cleaning in Green Valley" },
          ]}
        />

        {/* SECTION 1: HERO */}
        <HeroSection
          headingLevel="h1"
          headline="Drain Cleaning in Green Valley, Henderson, NV"
          subheading="Red Carpet Plumbing provides professional drain cleaning for homes and businesses throughout Green Valley, part of Henderson, NV. From slow kitchen drains and bathroom clogs to main sewer line blockages, our licensed plumbers clear the problem and restore full flow."
          trustItems={HERO_TRUST_ITEMS}
          primaryCTA={{
            label: "Call (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{
            label: "Request Drain Cleaning Service",
            href: "/contact/",
          }}
          // FLAG: source-site claim — verify before final launch.
          ctaNote="Licensed plumbers. Transparent pricing. No hidden fees."
          formSlot={<QuoteFormPlaceholder title="Get Drain Cleaning Help" />}
          backgroundImage={{
            src: "/images/services/drain-cleaning/hero.webp",
            alt: "drain cleaning service in Green Valley, Henderson, NV",
          }}
        />

        {/* SECTION 2: WHY GREEN VALLEY DRAINS CLOG */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Why Drains Clog Faster in Green Valley Homes
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Drains in Green Valley homes clog faster because Las Vegas
                    hard water leaves calcium and magnesium deposits inside pipe
                    walls that narrow the pipe and create surfaces that trap
                    grease and soap scum. Green Valley receives the same Lake Mead
                    municipal supply as the rest of the Las Vegas Valley, carrying
                    17 to 24 grains per gallon of dissolved minerals, among the
                    highest concentrations in the United States. For more on Green
                    Valley plumbing conditions, see our{" "}
                    <Link
                      href="/green-valley-plumbing-services/"
                      className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                    >
                      Green Valley plumbing services
                    </Link>{" "}
                    page.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-10">
                <div className="space-y-6">
                  {GV_DRAIN_FACTORS.map((factor) => (
                    <article
                      key={factor.label}
                      className="relative pl-6 before:absolute before:bottom-0 before:left-0 before:top-0 before:w-1 before:rounded-full before:bg-brand-primary"
                    >
                      <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                        {factor.label}
                      </h3>
                      <p className="mt-3 text-base leading-7 text-brand-dark/80">
                        {factor.body}
                      </p>
                    </article>
                  ))}
                </div>
              </SectionRevealItem>
            </SectionReveal>
          </div>
        </section>

        {/* SECTION 3: TWO-ERA HOUSING CONTEXT */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Original Green Valley and Green Valley Ranch: Two Pipe Eras, Two
                Service Profiles
              </h2>
              <div className="mt-6 space-y-6 text-lg leading-8 text-brand-dark/80">
                <p>
                  Green Valley is not a single era of construction. The original
                  Green Valley neighborhoods, developed from the late 1970s
                  through the mid-1990s, have plumbing systems that are 30 to 45
                  years old. These homes have the highest concentration of drain
                  cleaning candidates in Henderson, with copper drain lines that
                  have spent decades under hard water mineral stress. Some
                  original Green Valley homes also contain polybutylene supply
                  lines, which add additional vulnerability to the overall
                  plumbing system.
                </p>
                <p>
                  Green Valley Ranch, developed primarily from the mid-1990s
                  through the mid-2000s, represents a newer chapter in the
                  community. Homes here are now 20 to 30 years old and are
                  entering their first major service cycle. While the drain clog
                  risk is less acute than in the original neighborhoods, hard
                  water mineral buildup is active and progressing. Drain cleaning,
                  water heater maintenance, and plumbing inspection become
                  relevant service needs as these homes age. For a full overview
                  of plumbing services throughout Henderson, visit our{" "}
                  <Link
                    href="/henderson-plumbing-services/"
                    className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                  >
                    Henderson plumbing services
                  </Link>{" "}
                  page.
                </p>
                <p>
                  Homeowners in original Green Valley neighborhoods also face
                  higher slab leak risk due to aging copper lines under caliche
                  soil conditions, a topic covered in detail on our{" "}
                  <Link
                    href="/green-valley/slab-leak-detection-repair/"
                    className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                  >
                    Green Valley slab leak detection
                  </Link>{" "}
                  page.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: DIRECT ANSWER / SERVICE DESCRIPTION */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Drain Cleaning for Green Valley Homes and Businesses
              </h2>
              <div className="mt-6 space-y-6 text-lg leading-8 text-brand-dark/80">
                <p>
                  Red Carpet Plumbing provides professional{" "}
                  <Link
                    href="/drain-cleaning/"
                    className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                  >
                    drain cleaning services
                  </Link>{" "}
                  for residential and commercial properties throughout Green
                  Valley, Henderson, NV. Whether you have a slow kitchen drain, a
                  completely blocked bathroom sink, a backed-up floor drain, or a
                  main sewer line clog affecting the entire home, our licensed
                  plumbers diagnose the problem, select the right clearing method,
                  and restore full flow.
                </p>
                <p>
                  Green Valley homes benefit from professional drain cleaning
                  because store-bought chemical treatments do not address the
                  mineral buildup that drives recurring clogs in this area.
                  Professional clearing removes the entire blockage and the
                  contributing buildup, not just enough to restore temporary flow.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: SERVICES OFFERED */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Drain Cleaning Services We Provide in Green Valley
              </h2>
            </div>
            <ul className="mt-10 space-y-5">
              {GV_DRAIN_SERVICES.map((s) => (
                <li
                  key={s.label}
                  className="rounded-2xl bg-white p-6 ring-1 ring-brand-surface-alt"
                >
                  <p className="text-base leading-7 text-brand-dark/80">
                    <strong className="font-semibold text-brand-dark">
                      {s.label}.
                    </strong>{" "}
                    {s.body}
                    {s.link ? (
                      <>
                        {" "}
                        Learn more about our{" "}
                        <Link
                          href={s.link.href}
                          className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                        >
                          {s.link.text}
                        </Link>
                        .
                      </>
                    ) : null}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 6: PROCESS (HowTo) */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    How Red Carpet Plumbing Cleans Your Drains in Green Valley
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    When you call Red Carpet Plumbing for a drain cleaning in
                    Green Valley, our licensed plumbers follow a consistent
                    process to make sure the problem is fully resolved, not just
                    temporarily cleared. For older Green Valley homes, that
                    includes factoring in pipe age and condition before selecting
                    the clearing method.
                  </p>
                </div>
              </SectionRevealItem>
              <SectionRevealItem className="mt-12">
                <ol className="space-y-8">
                  {GV_DRAIN_STEPS.map((step, index) => (
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
                  Clogged Drain in Green Valley?
                </h2>
                {/* FLAG: source-site claim — verify emergency availability before final launch */}
                <p className="mt-6 text-lg leading-8 text-white/80">
                  Hard water mineral buildup and aging copper lines in original
                  Green Valley neighborhoods cause clogs that return quickly if
                  not cleared completely. Red Carpet Plumbing assesses the line,
                  selects the right clearing method, and restores full flow. Call
                  us to get started.
                </p>
              </div>
              <div className="flex flex-col items-start gap-4 lg:items-end">
                <a
                  href="tel:+17025679172"
                  className="inline-flex min-h-14 items-center justify-center rounded-lg bg-brand-primary px-8 text-lg font-semibold text-white shadow-sm hover:bg-brand-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary motion-safe:transition-colors motion-safe:active:scale-[0.97]"
                >
                  Call (702) 567-9172
                </a>
                {/* FLAG: source-site claim — verify before final launch */}
                <p className="text-sm text-white/70">
                  Licensed plumbers. Transparent pricing.
                </p>
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
                Red Carpet Plumbing provides drain cleaning throughout Green
                Valley, part of the incorporated City of Henderson. We serve both
                the original Green Valley neighborhoods and Green Valley Ranch,
                along with nearby Henderson communities. For full Henderson
                plumbing service details, see our{" "}
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

            <div className="mt-12">
              <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                Related Plumbing Services
              </h3>
              <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {RELATED_SERVICES.map((s) =>
                  s.href ? (
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
                  ) : (
                    // Fallback render branch for href-less related items (currently unused).
                    <li key={s.label}>
                      <span className="flex items-center gap-2 rounded-lg bg-brand-surface-alt px-4 py-3 text-base font-medium text-brand-dark/70 ring-1 ring-brand-surface-alt">
                        <span aria-hidden="true" className="text-brand-primary">
                          &rarr;
                        </span>
                        {s.label}
                      </span>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 9: FAQ */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Drain Cleaning FAQs for Green Valley Homeowners
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {GV_DRAIN_FAQS.map((faq) => (
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
          headline={<>Clogged Drain<br />in Green Valley, Henderson?</>}
          body="Do not let a slow or blocked drain get worse. Call Red Carpet Plumbing at (702) 567-9172 or request service online. We provide professional drain cleaning throughout Green Valley and Henderson."
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
