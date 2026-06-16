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

// ---------------------------------------------------------------------------
// Active FLAGs for this page (source-only; none appear in rendered copy):
//   - telephone (+17025679172) in serviceSchema.provider — VERIFY before launch.
//   - "Transparent Pricing, No Hidden Fees" hero trust item + ctaNote —
//     source-site claim, VERIFY before final launch.
// NO 24/7 / emergency-availability claim on this drain-cleaning page (per brief).
//
// Schema follows the established site-wide service-location pattern: Plumber
// provider; areaServed Place (Aliante, North Las Vegas, Nevada) +
// containedInPlace City (North Las Vegas) + containedInPlace State Nevada;
// WebPage isPartOf WebSite; 5 separate JsonLd blocks; HowTo for the visible
// process steps. No AggregateRating schema. NO sameAs on this service-location
// page (sameAs lives only on the Aliante hub Plumber schema).
//
// Aliante is copper-only, 2000-2008 construction. Do NOT add galvanized,
// polybutylene, Kitec, or tree-root-intrusion content to this page.
//
// Hero uses the two-column QuoteFormPlaceholder form slot, matching the
// established two-column-hero standard and the Green Valley / P40 siblings.
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title:
    "Drain Cleaning in the Aliante Area of North Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Slow or clogged drain in the Aliante area of North Las Vegas? Red Carpet Plumbing provides professional drain cleaning for Aliante homes. Call (702) 567-9172.",
  alternates: {
    canonical:
      "https://redcarpetplumbing.com/north-las-vegas/aliante-area/drain-cleaning/",
  },
  openGraph: {
    title: "Drain Cleaning in the Aliante Area of North Las Vegas, NV",
    description:
      "Red Carpet Plumbing provides professional drain cleaning in the Aliante area of North Las Vegas. Kitchen drains, bathroom drains, main sewer lines, and hydro jetting for Aliante homes.",
    url: "https://redcarpetplumbing.com/north-las-vegas/aliante-area/drain-cleaning/",
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
const ALIANTE_DRAIN_FAQS = [
  {
    question: "Why do drains clog more often in Aliante homes?",
    answer:
      "Most Aliante homes were built between 2000 and 2008 and have copper drain lines that have accumulated 16 to 25 years of hard water mineral deposits. Las Vegas Valley water from Lake Mead measures 17 to 24 grains per gallon of dissolved minerals. These deposits narrow the pipe interior and create surfaces that grease, hair, and soap scum bond to more aggressively over time, making clogs form faster in older pipes than in newer ones.",
  },
  {
    question: "Does hard water cause drain problems in North Las Vegas?",
    answer:
      "Yes. Hard water from the Lake Mead municipal supply leaves calcium and magnesium deposits inside drain pipe walls over time. These deposits narrow the pipe, slow water flow, and give household drain materials like grease and hair a rough surface to adhere to. Hard water mineral buildup is a primary driver of recurring drain clogs throughout the Las Vegas Valley, including the Aliante area.",
  },
  {
    question:
      "What is the difference between cable drain cleaning and hydro jetting?",
    answer:
      "Cable drain cleaning uses a mechanical cable to break through or pull out a specific clog. It is effective for localized solid blockages like hair clogs. Hydro jetting uses high-pressure water to scour the entire interior of the pipe, removing mineral scale, grease, and debris from the pipe walls rather than just clearing a path through the blockage. For Aliante homes with hard water mineral accumulation, hydro jetting provides a more thorough and longer-lasting result.",
  },
  {
    question:
      "When should I call a plumber for a drain problem in my Aliante home?",
    answer:
      "Call a plumber when multiple drains are slow or backing up at the same time, when a drain is completely blocked, when you notice sewage odor from drains, when toilets gurgle when other fixtures drain, or when a drain that was recently cleared becomes slow again within a few weeks. These signs often indicate a blockage in the main sewer line or a recurring buildup issue that requires professional clearing.",
  },
  {
    question: "How long does professional drain cleaning take?",
    answer:
      "A single drain cleaning for a kitchen or bathroom drain typically takes one to two hours depending on the access and the severity of the blockage. Main sewer line cleaning takes longer, especially if hydro jetting or video camera inspection is needed. Red Carpet Plumbing will give you a time estimate based on the specific situation.",
  },
  {
    question:
      "Does Red Carpet Plumbing serve the Aliante area for drain cleaning?",
    answer:
      "Yes. Red Carpet Plumbing provides professional drain cleaning for homes throughout the Aliante area of North Las Vegas, including the Aliante Parkway area, Ann Road Corridor, Deer Springs Way area, Elkhorn Road area, and surrounding northwest North Las Vegas neighborhoods. Call (702) 567-9172 to schedule service.",
  },
];

// ---------------------------------------------------------------------------
// Drain cleaning services offered in the Aliante area. Two cards carry inline
// links to live core service pages per the established sibling pattern.
// ---------------------------------------------------------------------------
const ALIANTE_DRAIN_SERVICES: {
  label: string;
  body: string;
  link?: { href: string; text: string };
}[] = [
  {
    label: "Kitchen drain cleaning",
    body: "Grease, cooking oils, and food particles build up inside kitchen drain lines, and Aliante's hard water accelerates the mineral bonding process that makes these deposits adhere to pipe walls. We clear kitchen drains from the sink trap to the main connection.",
  },
  {
    label: "Bathroom drain cleaning",
    body: "Hair, soap scum, and personal care product residue accumulate in bathroom sink, shower, and tub drains. We clear all bathroom drain types and verify full flow is restored.",
  },
  {
    label: "Main sewer line cleaning",
    body: "When multiple drains throughout the home are slow or backing up, the blockage is typically in the main sewer line. We clear main sewer lines using cable machines and hydro jetting matched to the blockage type and location.",
    link: { href: "/sewer-line-services/", text: "sewer line services" },
  },
  {
    label: "Hydro jetting",
    body: "Hydro jetting uses high-pressure water to scour the interior walls of drain and sewer lines, removing grease, mineral scale, and debris from the pipe walls rather than just clearing a path through the clog. For Aliante homes with 16 to 25 years of hard water mineral accumulation, hydro jetting provides a more thorough and longer-lasting result than cable clearing alone. We assess pipe condition before recommending hydro jetting.",
  },
  {
    label: "Video camera drain inspection",
    body: "A video camera inspection lets us see exactly what is inside your drain or sewer line before and after cleaning. We identify the blockage type and location, confirm the line is fully clear after cleaning, and check for pipe damage or structural issues.",
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
// Why Aliante homes develop drain problems. Copper-only, 2000-2008 framing.
// No galvanized, no polybutylene, no tree root intrusion content.
// ---------------------------------------------------------------------------
const ALIANTE_DRAIN_CAUSES: { title: string; body: string }[] = [
  {
    title: "Hard Water Mineral Buildup Inside Drain Lines",
    body: "Las Vegas Valley water from Lake Mead is among the hardest municipal supplies in the United States, consistently measuring 17 to 24 grains per gallon. Calcium and magnesium dissolve into the water at the source and deposit on every interior surface the water contacts, including drain pipe walls. Over 16 to 25 years of daily water use in an Aliante home, this mineral layer narrows the pipe interior, reduces flow capacity, and creates a rough surface that grease, hair, and soap scum bond to much more aggressively than they would in a newer or cleaned pipe. Store-bought chemical treatments dissolve some of the clog material but rarely address the mineral layer driving recurring blockages.",
  },
  {
    title: "Copper Pipe at the First Major Service Cycle",
    body: "Most Aliante homes were plumbed with copper supply and drain lines during construction between 2000 and 2008. Copper is a durable material, but at 16 to 25 years of service under Las Vegas Valley hard water conditions, copper drain lines are reaching the age where mineral accumulation has meaningfully narrowed the pipe interior. This does not mean the pipes are failing, but it does mean drain cleaning is a more frequent maintenance need than it was in the first decade of the home's life.",
  },
  {
    title: "Grease and Hair as Recurring Contributors",
    body: "In any home, kitchen grease and bathroom hair are the two most consistent clog sources. In Aliante homes with hard water mineral buildup already narrowing the drain interior, these materials accumulate faster and hold more tightly to the pipe walls than they would in a freshly cleaned or newer pipe. Regular professional drain cleaning removes both the surface accumulation and the mineral deposit layer that makes recurrence more likely.",
  },
];

// ---------------------------------------------------------------------------
// HowTo steps — must match the visible numbered process on the page exactly.
// ---------------------------------------------------------------------------
const ALIANTE_DRAIN_STEPS: { name: string; body: string }[] = [
  {
    name: "Assess the drain and identify the source of the clog",
    body: "We start by gathering information about which drains are affected, how long the problem has been present, and whether multiple fixtures are involved. In Aliante homes, we also note the build era and likely pipe conditions to anticipate what we will encounter before we start work.",
  },
  {
    name: "Select the right clearing method for the pipe and clog type",
    body: "Not every clog requires the same approach. Soft clogs respond well to cable machines. Hard mineral scale and grease buildup benefit from hydro jetting where pipe condition supports it. We choose the method based on the specific drain, clog type, and pipe age.",
  },
  {
    name: "Clear the blockage completely",
    body: "We clear the drain line fully, not just enough to restore partial flow, working from cleanout access points for main sewer lines and floor drains.",
  },
  {
    name: "Verify full flow is restored",
    body: "We run water through the line to confirm full flow is restored and no partial blockage remains.",
  },
];

// ---------------------------------------------------------------------------
// Aliante sub-areas served (plain-text chips, matching the hub page style).
// ---------------------------------------------------------------------------
const ALIANTE_DRAIN_SUBAREAS = [
  "Aliante Parkway Area",
  "Aliante Nature Discovery Park Area",
  "Ann Road Corridor",
  "Deer Springs Way Area",
  "Elkhorn Road Area",
  "Northwest North Las Vegas",
];

// ---------------------------------------------------------------------------
// Section 9 -- related services. All cards link directly to built
// Aliante-specific routes (emergency P40, water heater P42, leak P43, slab P44).
// ---------------------------------------------------------------------------
const ALIANTE_DRAIN_RELATED = [
  {
    title: "Emergency Plumbing",
    description:
      "Fast response to burst pipes, sewer backups, water heater failures, and other plumbing emergencies in the Aliante area.",
    // P40 built — linking directly to Aliante-specific route
    href: "/north-las-vegas/aliante-area/emergency-plumbing/",
    image: "/images/services/emergency-plumbing/card.webp",
    imageAlt: "Emergency plumbing service in the Aliante area",
  },
  {
    title: "Water Heater Repair and Installation",
    description:
      "Water heater diagnosis, repair, and installation for Aliante area homes where hard water sediment shortens equipment life.",
    // ACTIVATED: P42 built and staged
    href: "/north-las-vegas/aliante-area/water-heater-repair-installation/",
    image: "/images/services/water-heater-repair-installation/card.webp",
    imageAlt: "Water heater repair and installation in the Aliante area",
  },
  {
    title: "Leak Detection and Repair",
    description:
      "Accurate detection and repair of visible and hidden leaks in Aliante area homes, including pinhole leaks in copper lines.",
    // ACTIVATED: P43 built and staged
    href: "/north-las-vegas/aliante-area/leak-detection-repair/",
    image: "/images/services/leak-detection-repair/card.webp",
    imageAlt: "Leak detection and repair in the Aliante area",
  },
  {
    title: "Slab Leak Detection and Repair",
    description:
      "Detection and repair of supply line leaks beneath slab foundations in Aliante area homes.",
    // ACTIVATED: P44 built and staged
    href: "/north-las-vegas/aliante-area/slab-leak-detection-repair/",
    image: "/images/services/slab-leak-detection-repair/card.webp",
    imageAlt: "Slab leak detection and repair in the Aliante area",
  },
];

// Hero trust strip.
const HERO_TRUST_ITEMS = [
  // FLAG: source-site claim — verify before final launch.
  "NV Licensed Plumbers, #0048585A",
  "Kitchen, Bathroom, and Main Line Drain Cleaning",
  "Serving Aliante and North Las Vegas",
  // FLAG: source-site claim — verify before final launch.
  "Transparent Pricing, No Hidden Fees",
];

// ---------------------------------------------------------------------------
// JSON-LD payloads. Aliante is a community within the incorporated City of
// North Las Vegas, so Service.areaServed uses Place (Aliante, North Las Vegas,
// Nevada) -> containedInPlace City (North Las Vegas) -> containedInPlace State
// (Nevada). Do NOT use AdministrativeArea. Do NOT use Clark County. Do NOT add
// sameAs on this service-location page.
// ---------------------------------------------------------------------------
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Drain Cleaning in the Aliante Area of North Las Vegas",
  serviceType: "Drain Cleaning",
  description:
    "Red Carpet Plumbing provides professional drain cleaning for homes in the Aliante area of North Las Vegas, NV, including kitchen drain cleaning, bathroom drain cleaning, main sewer line cleaning, hydro jetting, and video camera drain inspection.",
  provider: {
    "@type": "Plumber",
    name: "Red Carpet Plumbing",
    url: "https://redcarpetplumbing.com",
    // FLAG: VERIFY telephone (carried forward from existing pages).
    telephone: "+17025679172",
  },
  areaServed: {
    "@type": "Place",
    name: "Aliante, North Las Vegas, Nevada",
    containedInPlace: {
      "@type": "City",
      name: "North Las Vegas",
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
      name: "North Las Vegas Plumbing Services",
      item: "https://redcarpetplumbing.com/north-las-vegas-plumbing-services/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Aliante Area Plumbing Services",
      item: "https://redcarpetplumbing.com/north-las-vegas/aliante-area-plumbing/",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Drain Cleaning in the Aliante Area",
      item: "https://redcarpetplumbing.com/north-las-vegas/aliante-area/drain-cleaning/",
    },
  ],
};

// HowTo schema included because Section 6 renders the matching visible
// step-by-step process (titles + body) on the page.
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Red Carpet Plumbing Cleans Drains in the Aliante Area of North Las Vegas",
  step: ALIANTE_DRAIN_STEPS.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.name,
    text: s.body,
  })),
};

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Drain Cleaning in the Aliante Area of North Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides professional drain cleaning in the Aliante area of North Las Vegas, NV. Kitchen drains, bathroom drains, main sewer lines, and hydro jetting for Aliante homes. Licensed plumbers, NV License #0048585A.",
  url: "https://redcarpetplumbing.com/north-las-vegas/aliante-area/drain-cleaning/",
  isPartOf: {
    "@type": "WebSite",
    name: "Red Carpet Plumbing",
    url: "https://redcarpetplumbing.com",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: ALIANTE_DRAIN_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function AlianteDrainCleaningPage() {
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
              label: "North Las Vegas Plumbing Services",
              href: "/north-las-vegas-plumbing-services/",
            },
            {
              label: "Aliante Area Plumbing Services",
              href: "/north-las-vegas/aliante-area-plumbing/",
            },
            { label: "Drain Cleaning in the Aliante Area" },
          ]}
        />

        {/* SECTION 1: HERO */}
        <HeroSection
          headingLevel="h1"
          headline="Drain Cleaning in the Aliante Area of North Las Vegas, NV"
          subheading="Red Carpet Plumbing provides professional drain cleaning for homes throughout the Aliante area of North Las Vegas, NV. Whether you have a slow kitchen drain, a clogged bathroom sink, or a main sewer line backup, our licensed plumbers diagnose the problem, select the right clearing method, and restore full flow. Call (702) 567-9172. NV Contractor License #0048585A."
          trustItems={HERO_TRUST_ITEMS}
          primaryCTA={{
            label: "Call (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{
            label: "Request Service",
            href: "/contact/",
          }}
          // FLAG: source-site claim — verify before final launch.
          ctaNote="Licensed plumbers. Transparent pricing. No hidden fees."
          formSlot={<QuoteFormPlaceholder title="Get Drain Cleaning Help" />}
          backgroundImage={{
            src: "/images/services/drain-cleaning/hero.webp",
            alt: "drain cleaning service in the Aliante area of North Las Vegas, NV",
          }}
        />

        {/* SECTION 2: DIRECT ANSWER — WHAT CAUSES DRAIN CLOGS IN ALIANTE HOMES */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                What Causes Drain Clogs in Aliante Homes?
              </h2>
              <div className="mt-6 space-y-6 text-lg leading-8 text-brand-dark/80">
                <p>
                  Drain clogs in Aliante homes are caused by a combination of
                  hard water mineral deposits, the normal accumulation of grease,
                  hair, and soap scum over time, and the age of the housing stock.
                  Most Aliante homes were built between 2000 and 2008, placing
                  them in the 16 to 25 year range. At this age, copper drain lines
                  have accumulated years of hard water mineral deposits on their
                  interior walls, narrowing the pipe and creating rough surfaces
                  that trap debris more quickly than they did when the home was
                  new.
                </p>
                <p>
                  The Las Vegas Valley municipal water supply from Lake Mead
                  measures consistently at 17 to 24 grains per gallon of dissolved
                  minerals. These minerals deposit on every surface that water
                  contacts, including the inside of drain lines. Over 16 to 25
                  years of daily water use in an Aliante home, this buildup
                  compounds the effect of everyday drain use, turning normal
                  household drain loads into recurring clog sources.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: WHEN TO CALL A PLUMBER */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                When to Call a Plumber for a Drain Problem
              </h2>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div className="rounded-2xl bg-white p-6 ring-1 ring-brand-surface-alt sm:p-8">
                <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                  Call a plumber when:
                </h3>
                <ul className="mt-4 space-y-3 text-base leading-7 text-brand-dark/80">
                  {[
                    "Multiple drains are slow or backing up at the same time (main sewer line issue)",
                    "A drain is completely blocked with no water movement",
                    "You notice sewage odor or sulfur smell from drains",
                    "Toilets gurgle or bubble when water drains elsewhere in the home",
                    "Water backs up into tubs, showers, or floor drains",
                    "A drain that was recently cleared is slow again within weeks",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-1 text-brand-primary"
                      >
                        &rarr;
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-6 ring-1 ring-brand-surface-alt sm:p-8">
                <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                  You may be able to monitor if:
                </h3>
                <ul className="mt-4 space-y-3 text-base leading-7 text-brand-dark/80">
                  {[
                    "A single bathroom drain is slightly slow with no odor and no other affected fixtures",
                    "You have recently cleaned the drain trap and the issue is minor",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-1 text-brand-primary"
                      >
                        &rarr;
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: SERVICES OFFERED */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Drain Cleaning Services We Provide in the Aliante Area
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                For our full{" "}
                <Link
                  href="/drain-cleaning/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  drain cleaning services
                </Link>{" "}
                overview, see the core service page.
              </p>
            </div>
            <ul className="mt-10 space-y-5">
              {ALIANTE_DRAIN_SERVICES.map((s) => (
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

        {/* SECTION 5: WHY ALIANTE HOMES DEVELOP DRAIN PROBLEMS */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Why Aliante Homes Develop Drain Problems
                  </h2>
                </div>
              </SectionRevealItem>
              <SectionRevealItem className="mt-10">
                <div className="space-y-6">
                  {ALIANTE_DRAIN_CAUSES.map((cause) => (
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
              </SectionRevealItem>
            </SectionReveal>
          </div>
        </section>

        {/* SECTION 6: PROCESS (HowTo) */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    How Red Carpet Plumbing Cleans Your Drains in the Aliante Area
                  </h2>
                </div>
              </SectionRevealItem>
              <SectionRevealItem className="mt-12">
                <ol className="space-y-8">
                  {ALIANTE_DRAIN_STEPS.map((step, index) => (
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
                  Clogged Drain in the Aliante Area?
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/80">
                  Hard water mineral buildup and 16 to 25 years of daily drain
                  use in Aliante homes make recurring clogs a common maintenance
                  issue. Red Carpet Plumbing assesses the line, selects the right
                  clearing method, and restores full flow. Call us to get started.
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
                  className="text-base font-semibold text-white underline-offset-4 hover:underline"
                >
                  Request Service
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8: SUB-AREAS SERVED */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Aliante Sub-Areas We Serve
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing provides drain cleaning throughout the
                Aliante community and surrounding northwest North Las Vegas
                neighborhoods. For{" "}
                <Link
                  href="/north-las-vegas/aliante-area-plumbing/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  Aliante area plumbing services
                </Link>{" "}
                or our full{" "}
                <Link
                  href="/north-las-vegas-plumbing-services/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  North Las Vegas plumbing services
                </Link>
                , see the area hub pages. We also provide{" "}
                <Link
                  href="/north-las-vegas/drain-cleaning/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  drain cleaning throughout North Las Vegas
                </Link>
                .
              </p>
            </div>
            <ul className="mt-8 flex flex-wrap gap-3">
              {ALIANTE_DRAIN_SUBAREAS.map((area) => (
                <li key={area}>
                  <span className="block rounded-lg border border-brand-surface-alt bg-white px-5 py-3 font-medium text-brand-dark/80">
                    {area}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 9: RELATED SERVICES */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="max-w-3xl text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Related Plumbing Services in the Aliante Area
              </h2>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {ALIANTE_DRAIN_RELATED.map((service) => (
                <ServiceCard
                  key={service.title}
                  title={service.title}
                  description={service.description}
                  href={service.href}
                  image={service.image}
                  imageAlt={service.imageAlt}
                  built
                />
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 10: FAQ */}
        <section className="bg-white">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Drain Cleaning FAQs for Aliante Area Homeowners
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {ALIANTE_DRAIN_FAQS.map((faq) => (
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
          headline={<>Need Drain Cleaning<br />in the Aliante Area?</>}
          body="Red Carpet Plumbing serves the Aliante community and surrounding North Las Vegas neighborhoods. Call (702) 567-9172 or request service online."
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
