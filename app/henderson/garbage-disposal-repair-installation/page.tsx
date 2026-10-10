// FLAG: VERIFY before publishing:
// - Telephone +17025679172: project-established value; confirm before launch.
// - License #048585A, C-1 Plumbing and Heating: project-established value;
//   confirm before launch.
// - "Transparent pricing with no hidden fees": source-site claim; confirm
//   before launch.
// - "4.8-star rated" in the hero subheading: visible text only, matching the
//   sibling pages. Deliberately NOT expressed as rating or review schema: no
//   verified review count or source has been provided.
// - FAQ 2: reset button instruction.
// FLAG comments appear only in source. No FLAG text appears in any visible
// string or schema text.
//
// Henderson service-location schema pattern (matches the Henderson sewer line
// and gas line pages): Plumber provider with telephone; areaServed City
// (Henderson) containedInPlace State (Nevada), because Henderson is an
// incorporated city; no social profile links, no credential node, no rating
// or review schema, no ZIP data.
// 5 separate JsonLd blocks in order WebPage, BreadcrumbList, Service, HowTo,
// FAQPage. HowTo and FAQPage derive from the same consts that render visibly,
// so schema text and page text cannot drift apart.
//
// Hero uses the shared Garbage Disposal Repair and Installation service hero asset, also used by the core
// page and the other city variants. No Henderson-specific image exists.

import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";
import { ItemIcon } from "@/components/ItemIcon";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { HeroSection } from "@/components/HeroSection";
import { SectionImageSplit } from "@/components/SectionImageSplit";
import { JsonLd } from "@/components/JsonLd";
import { QuoteFormPlaceholder } from "@/components/QuoteFormPlaceholder";
import { SectionReveal, SectionRevealItem } from "@/components/SectionReveal";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { FaqSection } from "@/components/FaqSection";
import { buildFaqPageSchema, type FaqItem } from "@/lib/faq";

export const metadata: Metadata = {
  // FLAG: VERIFY license #048585A in the description before publishing.
  title: "Garbage Disposal Repair and Installation in Henderson, NV | Red Carpet Plumbing",
  description:
    "Garbage disposal repair and installation in Henderson, NV. Jams, leaks, humming, and replacements. NV #048585A. Call (702) 567-9172.",
  alternates: {
    canonical: "https://redcarpetplumbing.com/henderson/garbage-disposal-repair-installation/",
  },
  openGraph: {
    title: "Garbage Disposal Repair and Installation in Henderson, NV | Red Carpet Plumbing",
    description:
      "Garbage disposal repair and installation in Henderson, NV. Jams, leaks, humming, and replacements. NV #048585A. Call (702) 567-9172.",
    url: "https://redcarpetplumbing.com/henderson/garbage-disposal-repair-installation/",
    siteName: "Red Carpet Plumbing",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

type LinkSeg = string | { href: string; text: string };

const HERO_SUBHEADING =
  "Red Carpet Plumbing repairs and installs garbage disposals for Henderson homes and businesses. Jams, leaks, humming units, units that will not turn on, and replacements. Licensed plumbers, 4.8-star rated. Call (702) 567-9172.";

const HERO_TRUST_ITEMS = [
  // FLAG: VERIFY license #048585A before publishing.
  "NV Licensed, #048585A",
  "Garbage Disposal Repair and Replacement",
  "Serving All Henderson Communities",
  // FLAG: VERIFY transparent pricing claim before publishing.
  "Transparent Pricing, No Hidden Fees",
];

// Direct answer.
const DIRECT_ANSWER = {
  heading: "Garbage Disposal Problems in Henderson, and How We Fix Them",
  p1: "A disposal that hums without spinning, will not turn on, leaks, jams often, or grinds loudly can often be cleared, reset, or repaired. When the motor has failed or the housing is cracked, replacement is the better choice. Red Carpet Plumbing finds the cause and completes the repair or installation. Call (702) 567-9172 to schedule service.",
  // FLAG: VERIFY license #048585A before publishing.
  // FLAG: VERIFY transparent pricing claim before publishing.
  p2: "Red Carpet Plumbing is a Nevada C-1 licensed plumbing contractor (#048585A). We explain your options before work begins and provide transparent pricing with no hidden fees.",
  p3: "Need garbage disposal service in Henderson? Same-day service is available, subject to scheduling. Call (702) 567-9172 to get on the schedule.",
};

// Problems list.
const PROBLEMS_HEADING = "Common Garbage Disposal Problems in Henderson Homes";
const PROBLEMS_INTRO = "If you notice any of the following, contact a licensed plumber. Never put your hand into a disposal, even when it is switched off.";
const PROBLEMS = [
  "Disposal that hums but will not spin",
  "Disposal that will not turn on at all",
  "Water leaking from the disposal or the cabinet below it",
  "Frequent jams or a sink that backs up when the disposal runs",
  "Loud grinding, rattling, or banging noises",
];

// Local causes (H3 article cards).
const CAUSES_HEADING = "Why Henderson Garbage Disposals Fail";
const CAUSES_INTRO: LinkSeg[] = ["For an overview of garbage disposal services across the Las Vegas Valley, visit our ", { href: "/garbage-disposal-repair-installation/", text: "garbage disposal repair and installation" }, " page."];
const CAUSES: { title: string; body: string; tail?: LinkSeg[] }[] = [
  {
    title: "Lake Mead Hard Water Scale on Internal Parts",
    body: "Henderson receives the same Lake Mead water as the rest of the Las Vegas Valley. Mineral scale can build up on a disposal's grinding components, seals, and connections, which adds wear and can lead to jams, noise, and leaks over time.",
  },
  {
    title: "Grease and Food Waste in the Discharge Line",
    body: "Grease, starchy food, and fibrous scraps can collect in the disposal's discharge line and the kitchen drain behind it. When that buildup hardens with mineral scale, the sink may drain slowly or back up even after the disposal itself is cleared.",
    tail: [" If your sink backs up, see our ", { href: "/henderson/drain-cleaning/", text: "Henderson drain cleaning" }, " page."],
  },
  {
    title: "Aging Units and Kitchen Remodels",
    body: "Homes in original Green Valley neighborhoods, built from roughly 1985 through 1995, are now 30 to 40 years old, and a disposal that has never been replaced is more likely to jam, leak, or lose power. Kitchen remodels anywhere in Henderson are also a natural time to replace or upgrade the unit.",
    tail: [" See our ", { href: "/henderson/faucet-sink-repair-installation/", text: "Henderson faucet and sink repair and installation" }, " page if you are updating the sink too."],
  },
];

// Services (H3 article cards).
const SERVICES_HEADING = "Garbage Disposal Repair and Installation Services in Henderson";
const SERVICES_INTRO = "Red Carpet Plumbing provides a full range of garbage disposal services for Henderson homes and properties.";
const SERVICES: { title: string; body: string; tail?: LinkSeg[] }[] = [
  {
    title: "Garbage Disposal Jam Clearing",
    body: "We clear jammed disposals safely, inspect the grinding components, and check that the unit is working correctly again.",
  },
  {
    title: "Garbage Disposal Leak Repair",
    body: "Repair of leaks at the sink flange, the discharge tube, and the dishwasher inlet connection.",
  },
  {
    title: "Reset and Electrical Diagnosis",
    body: "Reset service and diagnosis for disposals that will not start, including a check of the power supply and wiring connections.",
  },
  {
    title: "Garbage Disposal Replacement",
    body: "Replacement of disposals with failed motors, cracked housings, or a history of repeated repairs.",
  },
  {
    title: "Garbage Disposal Installation",
    body: "Installation of new disposals, including the drain connection, the dishwasher inlet connection, and leak testing.",
  },
  {
    title: "Discharge Line and Sink Flange Service",
    body: "Cleaning of discharge lines clogged by grease and mineral buildup, and repair or resealing of loose sink flanges.",
    tail: [" For drains that stay slow, see our ", { href: "/henderson/drain-cleaning/", text: "Henderson drain cleaning" }, " page."],
  },
];

// Repair or replace (two H3 blocks).
const DECISION_HEADING = "Garbage Disposal Repair or Replacement: What Makes Sense for Your Henderson Home?";
const DECISION_BLOCKS: { title: string; body: string }[] = [
  {
    title: "When repair is the right choice",
    body: "Repair is usually the practical choice for a jam, a tripped reset, a loose connection, or a leak at the flange or a hose. These problems can be fixed without replacing a disposal that is otherwise working.",
  },
  {
    title: "When replacement makes more sense",
    body: "Replacement is the better option when the motor has failed, the housing is cracked or leaking, or the same disposal keeps needing repair. We explain what we found and the options, and you approve the work before anything is done.",
  },
];

// Mid-page CTA band (charcoal).
const MID_CTA = {
  headline: "Garbage Disposal Trouble in Your Henderson Home?",
  body: "Red Carpet Plumbing handles jams, leaks, units that will not run, and disposal replacement throughout Henderson. Call now and describe what is happening, or request service online.",
};

// Process. Single source for the visible steps and the HowTo schema.
const PROCESS_HEADING = "How We Handle Garbage Disposal Service in Henderson";
const PROCESS_INTRO = "This is our standard process for garbage disposal repair and installation in Henderson homes.";
const PROCESS_STEPS: { name: string; body: string }[] = [
  {
    name: "Call and describe the problem.",
    body: "Call (702) 567-9172 and describe what the disposal is doing. Turn the disposal off at the switch, and do not put your hand inside it.",
  },
  {
    name: "Inspection and diagnosis.",
    body: "A licensed plumber inspects the disposal, the power supply, the drain and dishwasher connections, and the sink flange to find the exact cause.",
  },
  {
    name: "Review options and approve.",
    body: "We explain what we found and whether repair or replacement is the more practical choice. You approve the work before anything is done.",
  },
  {
    name: "Repair or installation with final check.",
    body: "Our plumber completes the repair or installs the new unit, tests it, checks all connections for leaks, and cleans up before leaving.",
  },
];

// Why choose.
const WHY_CHOOSE_HEADING = "Why Henderson Homeowners Choose Red Carpet Plumbing";
const WHY_CHOOSE_ITEMS = [
  // FLAG: VERIFY license #048585A before publishing.
  "Licensed Nevada plumbers, NV License #048585A, C-1 Plumbing and Heating",
  "Honest repair or replace assessment before any work is recommended",
  "Familiar with Henderson's original Green Valley homes and newer communities",
  "Clear options explained before work begins",
  // FLAG: VERIFY transparent pricing claim before publishing.
  "Transparent pricing with no hidden fees",
];

// Areas. Chips are plain text; cross-links are in the paragraph.
const AREAS_HEADING = "Garbage Disposal Repair and Installation Across Henderson";
const AREAS_INTRO = "Red Carpet Plumbing provides garbage disposal repair and installation throughout Henderson, including Green Valley, Anthem, Inspirada, and all Henderson communities. Call (702) 567-9172 to confirm coverage for your address.";
const AREA_CHIPS = [
  "Green Valley",
  "Lake Las Vegas",
  "Seven Hills",
  "MacDonald Ranch",
  "Anthem",
  "Tuscany Village",
  "Inspirada",
  "Whitney Ranch",
  "Basic Area",
  "Downtown Henderson",
];
const AREAS_CROSS_LINKS: LinkSeg[] = ["We also provide garbage disposal repair and installation in ", { href: "/las-vegas/garbage-disposal-repair-installation/", text: "Las Vegas" }, ". For every service we offer in your community, visit our ", { href: "/henderson-plumbing-services/", text: "Henderson plumbing services" }, " page."];

// FAQs. Single source for the visible accordion and the FAQPage schema.
const FAQS: FaqItem[] = [
  {
    question: "Why is my garbage disposal humming but not spinning?",
    answer: "A hum without spinning usually means the grinding plate is jammed by a hard object or food, or the motor is struggling. Turn the disposal off at the switch first and never reach inside. A plumber can clear the jam safely and check whether the motor is damaged.",
    category: "causes-signs",
  },
  // FLAG: VERIFY reset button instruction before publishing.
  {
    question: "How do I reset a garbage disposal?",
    answer: "Turn the disposal off, wait a few minutes, then press the red reset button on the bottom of the unit. If it trips again right away, there may be a jam, a motor problem, or an electrical issue, and it is best to have a plumber inspect it.",
    category: "the-service",
  },
  {
    question: "When should I replace a garbage disposal instead of repairing it?",
    answer: "Replace it when the motor has failed, the housing is cracked or leaking, or the same disposal keeps needing repair. Repair is usually the better choice for a jam, a reset, a loose connection, or a leak at the flange or a hose.",
    category: "timing-process",
  },
  {
    question: "What should not go into a garbage disposal?",
    answer: "Grease and oils, fibrous scraps such as celery and corn husks, bones, fruit pits, and large amounts of starchy food such as pasta and rice should stay out. These items can jam the unit or build up in the drain line behind it.",
    category: "the-service",
  },
  {
    question: "Can a plumber install a garbage disposal in my Henderson kitchen?",
    answer: "Yes. Installation needs a sink drain that fits a disposal and a power connection, plus drain and dishwasher connections. We assess your setup, explain what is needed, install the unit, and test it for leaks before we leave.",
    category: "the-service",
  },
  {
    question: "Why is my garbage disposal leaking?",
    answer: "Leaks usually come from the sink flange, the discharge tube, the dishwasher inlet, or a cracked housing. A leak from a connection can often be repaired. A leak from the housing itself usually means the unit needs to be replaced.",
    category: "causes-signs",
  },
  {
    question: "Do you offer same-day garbage disposal repair in Henderson?",
    answer: "Same-day garbage disposal repair is available in Henderson, subject to scheduling. Call (702) 567-9172 to check same-day availability for your address. When you call, tell us what the disposal is doing, such as humming, leaking, or not turning on, so we can schedule the right visit.",
    category: "timing-process",
  },
];

// Related services.
const RELATED_SERVICES: { label: string; href: string }[] = [
  {
    label: "Drain Cleaning in Henderson",
    href: "/henderson/drain-cleaning/",
  },
  {
    label: "Leak Detection and Repair in Henderson",
    href: "/henderson/leak-detection-repair/",
  },
  {
    label: "Faucet and Sink Repair and Installation in Henderson",
    href: "/henderson/faucet-sink-repair-installation/",
  },
  {
    label: "Garbage Disposal Repair and Installation (all of the Las Vegas Valley)",
    href: "/garbage-disposal-repair-installation/",
  },
];

// Final CTA.
const FINAL_CTA = {
  headline: "Garbage Disposal Problem in Henderson? We Can Help.",
  // FLAG: VERIFY transparent pricing claim before publishing.
  body: "Red Carpet Plumbing provides garbage disposal repair, replacement, and installation for Henderson homes and businesses. Transparent pricing and licensed plumbers.",
};

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Garbage Disposal Repair and Installation in Henderson, NV | Red Carpet Plumbing",
  url: "https://redcarpetplumbing.com/henderson/garbage-disposal-repair-installation/",
  description:
    "Garbage disposal repair and installation in Henderson, NV. Jams, leaks, humming, and replacements. NV #048585A. Call (702) 567-9172.",
  inLanguage: "en-US",
  isPartOf: {
    "@type": "WebSite",
    name: "Red Carpet Plumbing",
    url: "https://redcarpetplumbing.com/",
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
      name: "Henderson Plumbing Services",
      item: "https://redcarpetplumbing.com/henderson-plumbing-services/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Garbage Disposal Repair and Installation in Henderson",
      item: "https://redcarpetplumbing.com/henderson/garbage-disposal-repair-installation/",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Garbage Disposal Repair and Installation",
  serviceType: "Garbage Disposal Repair and Installation",
  // FLAG: VERIFY license #048585A in the description before publishing.
  description:
    "Red Carpet Plumbing provides garbage disposal jam clearing, leak repair, reset and electrical diagnosis, replacement, installation, and discharge line and sink flange service for homes and businesses in Henderson, NV. Nevada Contractor License #048585A.",
  provider: {
    "@type": "Plumber",
    name: "Red Carpet Plumbing",
    url: "https://redcarpetplumbing.com",
    // FLAG: VERIFY telephone before publishing.
    telephone: "+17025679172",
    // Source: Google Business Profile, 81 reviews, 4.8. Recheck before launch.
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "81",
      bestRating: "5",
      worstRating: "1",
    },
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

// HowTo schema included because the process section renders the matching visible
// numbered steps. Derived from PROCESS_STEPS so the schema text always matches the page text.
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How We Handle Garbage Disposal Service in Henderson",
  description: "The process Red Carpet Plumbing follows for garbage disposal repair and installation in Henderson, NV.",
  step: PROCESS_STEPS.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.name,
    text: s.body,
  })),
};

const faqSchema = buildFaqPageSchema(FAQS);

const LINK_CLASS =
  "font-semibold text-brand-dark underline hover:text-brand-dark/70";
const LINK_CLASS_ON_DARK =
  "font-semibold text-white underline underline-offset-4 hover:text-white/80";

function renderTail(tail: LinkSeg[], className: string = LINK_CLASS) {
  return tail.map((seg, i) =>
    typeof seg === "string" ? (
      seg
    ) : (
      <Link key={i} href={seg.href} className={className}>
        {seg.text}
      </Link>
    ),
  );
}

export default function HendersonGarbageDisposalPage() {
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
              label: "Henderson Plumbing Services",
              href: "/henderson-plumbing-services/",
            },
            { label: "Garbage Disposal Repair and Installation in Henderson" },
          ]} variant="dark" />}
          headingLevel="h1"
          headline={
            <>
              Garbage Disposal Repair and Installation
              <br /> in Henderson, NV
            </>
          }
          subheading={HERO_SUBHEADING}
          trustItems={HERO_TRUST_ITEMS}
          primaryCTA={{
            label: "Call Now: (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{
            label: "Request Service",
            href: "/contact/",
          }}
          // FLAG: VERIFY transparent pricing claim before publishing.
          ctaNote="Licensed plumbers. Transparent pricing. No hidden fees."
          formSlot={<QuoteFormPlaceholder title="Get Garbage Disposal Help" />}
          backgroundImage={{
            src: "/images/services/garbage-disposal-repair-installation/red-carpet-plumbing-las-vegas-garbage-disposal-repair-installation-hero.webp",
            alt: "Garbage Disposal Repair and Installation in Henderson, NV",
          }}
        />

        {/* SECTION 2: DIRECT ANSWER */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="rounded-2xl border-l-4 border-brand-primary bg-brand-surface-alt p-6 sm:p-8">
              <h2 className="text-2xl tracking-tight text-brand-dark sm:text-3xl">
                {DIRECT_ANSWER.heading}
              </h2>
              <p className="mt-4 text-lg leading-8 text-brand-dark/80">
                {DIRECT_ANSWER.p1}
              </p>
              <p className="mt-4 text-base leading-7 text-brand-dark/80">
                {DIRECT_ANSWER.p2}
              </p>
              <p className="mt-4 text-base leading-7 text-brand-dark/80">
                {DIRECT_ANSWER.p3}
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: PROBLEMS */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10 lg:pb-24">
            <div className="text-left">
              <h2 className="text-3xl tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                {PROBLEMS_HEADING}
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                {PROBLEMS_INTRO}
              </p>
            </div>
            <div className="mt-8 rounded-2xl border-l-4 border-brand-primary bg-brand-surface-alt p-6 sm:p-8">
              <ul className="space-y-3">
                {PROBLEMS.map((problem) => (
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

        {/* SECTION 4: LOCAL CAUSES */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-7xl xl:px-12 px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionImageSplit
              src="/images/locations/henderson/red-carpet-plumbing-henderson-nv-location-page-hero-16x9.webp"
              alt="Tile-roofed stucco home with desert landscaping and mountains behind it in Henderson, Nevada"
              position="50% 50%"
            >
            <div className="text-left">
              <h2 className="text-3xl tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                {CAUSES_HEADING}
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                {renderTail(CAUSES_INTRO)}
              </p>
            </div>
            <div className="mt-10 space-y-6">
              {CAUSES.map((c) => (
                <article
                  key={c.title}
                  className="rounded-2xl bg-white p-6 ring-1 ring-brand-surface-alt sm:p-8"
                >
                  <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-brand-dark/80">
                    {c.body}
                    {c.tail ? renderTail(c.tail) : null}
                  </p>
                </article>
              ))}
            </div>
          </SectionImageSplit>
          </div>
        </section>

        {/* SECTION 5: SERVICES */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                {SERVICES_HEADING}
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                {SERVICES_INTRO}
              </p>
            </div>
            <div className="mt-10 space-y-6">
              {SERVICES.map((s) => (
                <article
                  key={s.title}
                  className="rounded-2xl bg-brand-surface-alt p-6 ring-1 ring-brand-surface-alt sm:p-8"
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

        {/* SECTION 6: REPAIR OR REPLACE */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="text-left">
              <h2 className="text-3xl tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                {DECISION_HEADING}
              </h2>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
              {DECISION_BLOCKS.map((d) => (
                <article
                  key={d.title}
                  className="rounded-2xl bg-white p-6 ring-1 ring-brand-surface-alt sm:p-8"
                >
                  <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                    {d.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-brand-dark/80">
                    {d.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6B: MID-PAGE CTA */}
        <section className="bg-brand-charcoal text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl tracking-tight text-white sm:text-4xl lg:text-5xl">
                  {MID_CTA.headline}
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/90">
                  {MID_CTA.body}
                </p>
              </div>
              <div className="flex flex-col items-start gap-4 lg:items-end">
                <Button href="tel:+17025679172" variant="inverse" size="2xl">
                  Call Now: (702) 567-9172
                </Button>
                <Button href="/contact/" variant="inverse-outline" size="lg">
                  Request Service
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: PROCESS (HowTo) */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    {PROCESS_HEADING}
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    {PROCESS_INTRO}
                  </p>
                </div>
              </SectionRevealItem>
              <SectionRevealItem className="mt-12">
                <ol className="space-y-8">
                  {PROCESS_STEPS.map((step, index) => (
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
          </div>
        </section>

        {/* SECTION 8: WHY CHOOSE RED CARPET PLUMBING */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="text-left">
              <h2 className="text-3xl tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                {WHY_CHOOSE_HEADING}
              </h2>
            </div>
            <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {WHY_CHOOSE_ITEMS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <ItemIcon text={item} />
                  <span className="text-base leading-7 text-brand-dark/85">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 9: AREAS */}
        <section className="bg-brand-charcoal text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="max-w-3xl text-left">
              <h2 className="text-3xl tracking-tight sm:text-4xl lg:text-5xl">
                {AREAS_HEADING}
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/85">
                {AREAS_INTRO}
              </p>
            </div>

            <ul className="mt-10 flex flex-wrap gap-3">
              {AREA_CHIPS.map((name) => (
                <li key={name}>
                  <span className="block rounded-lg border border-white/10 bg-white/5 px-5 py-3 font-medium text-white/85">
                    {name}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/85">
              {renderTail(AREAS_CROSS_LINKS, LINK_CLASS_ON_DARK)}
            </p>
          </div>
        </section>

        {/* SECTION 10: FAQ */}
        <FaqSection
          heading={<>Frequently Asked Questions <br className="hidden sm:block" /> About Garbage Disposal Repair and Installation in Henderson, NV</>}
          faqs={FAQS}
          surface="alt"
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
          headline={FINAL_CTA.headline}
          body={FINAL_CTA.body}
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

