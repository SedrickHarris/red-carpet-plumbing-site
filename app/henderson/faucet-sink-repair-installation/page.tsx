// FLAG: VERIFY before publishing:
// - Telephone +17025679172: project-established value; confirm before launch.
// - License #0048585A, C-1 Plumbing and Heating: project-established value;
//   confirm before launch.
// - "Transparent pricing with no hidden fees": source-site claim; confirm
//   before launch.
// - "4.8-star rated" in the hero subheading: visible text only, matching the
//   sibling pages. Deliberately NOT expressed as rating or review schema: no
//   verified review count or source has been provided.
// - Why-choose item about careful installation that protects finishes and
//   countertops (qualitative claim).
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
// Hero uses the shared Faucet and Sink Repair and Installation service hero asset, also used by the core
// page and the other city variants. No Henderson-specific image exists.

import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { HeroSection } from "@/components/HeroSection";
import { JsonLd } from "@/components/JsonLd";
import { QuoteFormPlaceholder } from "@/components/QuoteFormPlaceholder";
import { SectionReveal, SectionRevealItem } from "@/components/SectionReveal";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";

export const metadata: Metadata = {
  // FLAG: VERIFY license #0048585A in the description before publishing.
  title: "Faucet and Sink Repair and Installation in Henderson, NV | Red Carpet Plumbing",
  description:
    "Faucet and sink repair and installation in Henderson, NV. Leaks, drips, low pressure, and new fixtures. NV #0048585A. Call (702) 567-9172.",
  alternates: {
    canonical: "https://redcarpetplumbing.com/henderson/faucet-sink-repair-installation/",
  },
  openGraph: {
    title: "Faucet and Sink Repair and Installation in Henderson, NV | Red Carpet Plumbing",
    description:
      "Faucet and sink repair and installation in Henderson, NV. Leaks, drips, low pressure, and new fixtures. NV #0048585A. Call (702) 567-9172.",
    url: "https://redcarpetplumbing.com/henderson/faucet-sink-repair-installation/",
    siteName: "Red Carpet Plumbing",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

type LinkSeg = string | { href: string; text: string };

// FLAG: VERIFY "4.8-star rated" before publishing. Visible text only, not in schema.
const HERO_SUBHEADING =
  "Red Carpet Plumbing repairs and installs faucets and sinks for Henderson homes and businesses. Dripping faucets, low pressure, under-sink leaks, and new kitchen and bathroom fixtures. Licensed plumbers, 4.8-star rated. Call (702) 567-9172.";

const HERO_TRUST_ITEMS = [
  // FLAG: VERIFY license #0048585A before publishing.
  "NV Licensed, #0048585A",
  "Faucet and Sink Repair and Installation",
  "Serving All Henderson Communities",
  // FLAG: VERIFY transparent pricing claim before publishing.
  "Transparent Pricing, No Hidden Fees",
];

// Direct answer.
const DIRECT_ANSWER = {
  heading: "Faucet and Sink Problems in Henderson, and How We Fix Them",
  p1: "A dripping faucet, weak flow from one tap, a stiff handle, a slow drain, or water under the sink usually has one specific cause. Red Carpet Plumbing finds it, repairs worn faucet parts or replaces the fixture, installs kitchen and bathroom sinks, and fixes under-sink leaks. Call (702) 567-9172 to schedule service.",
  // FLAG: VERIFY license #0048585A before publishing.
  // FLAG: VERIFY transparent pricing claim before publishing.
  p2: "Red Carpet Plumbing is a Nevada C-1 licensed plumbing contractor (#0048585A). We explain your options before work begins and provide transparent pricing with no hidden fees.",
  p3: "Need faucet or sink service in Henderson? Same-day service is available, subject to scheduling. Call (702) 567-9172 to get on the schedule.",
};

// Problems list.
const PROBLEMS_HEADING = "Common Faucet and Sink Problems in Henderson Homes";
const PROBLEMS_INTRO = "If you notice any of the following, contact a licensed plumber for an assessment.";
const PROBLEMS = [
  "Dripping or leaking faucet",
  "Low water pressure at one faucet while others are normal",
  "Faucet handles that are stiff or difficult to turn",
  "Sink that drains slowly or not at all",
  "Water leaking under the sink or damp items in the sink cabinet",
];

// Local causes (H3 article cards).
const CAUSES_HEADING = "Why Henderson Faucets and Sinks Need Service";
const CAUSES_INTRO: LinkSeg[] = ["For an overview of faucet and sink services across the Las Vegas Valley, visit our ", { href: "/faucet-sink-repair-installation/", text: "faucet and sink repair and installation" }, " page."];
const CAUSES: { title: string; body: string; tail?: LinkSeg[] }[] = [
  {
    title: "Lake Mead Hard Water and Cartridge Wear",
    body: "Henderson receives the same Lake Mead water as the rest of the Las Vegas Valley. Its minerals clog aerators, which lowers pressure at the spout, and they wear out cartridges and washers, which causes drips and stiff handles. Many faucet problems come from these small parts, not the whole fixture.",
  },
  {
    title: "Remodeled and Newer Kitchens and Baths",
    body: "Henderson's newer communities and remodeled homes often have high-arc, pull-down, and specialty-finish faucets, and undermount sinks set in stone or solid-surface countertops. These fixtures call for careful removal and installation so the finish, the countertop, and the connections are protected.",
    tail: [" If your kitchen sink has a disposal, see our ", { href: "/henderson/garbage-disposal-repair-installation/", text: "Henderson garbage disposal repair and installation" }, " page."],
  },
  {
    title: "Aging Fixtures and Under-Sink Valves in Original Green Valley Homes",
    body: "Homes built in Green Valley from roughly 1985 through 1995 are now 30 to 40 years old. Faucets, shut-off valves, and supply lines that were never replaced can stiffen, drip, or leak under the sink. Replacing worn valves and supply lines at the same time as the faucet is often practical.",
    tail: [" Green Valley homeowners can also see our ", { href: "/green-valley/faucet-sink-repair-installation/", text: "Green Valley faucet and sink repair and installation" }, " page."],
  },
];

// Services (H3 article cards).
const SERVICES_HEADING = "Faucet and Sink Repair and Installation Services in Henderson";
const SERVICES_INTRO = "Red Carpet Plumbing provides a full range of faucet and sink services for Henderson homes and properties.";
const SERVICES: { title: string; body: string; tail?: LinkSeg[] }[] = [
  {
    title: "Dripping Faucet Repair",
    body: "Diagnosis and repair of dripping and leaking faucets, including cartridge, washer, and seal replacement.",
  },
  {
    title: "Faucet Replacement and Installation",
    body: "Replacement of worn, corroded, or repeatedly failing faucets, and installation of new faucets in kitchens, bathrooms, and utility areas, with supply line connection and leak testing.",
    tail: [" For other fixtures, see our ", { href: "/plumbing-fixture-repair-replacement-installation/", text: "plumbing fixture repair, replacement, and installation" }, " page."],
  },
  {
    title: "Kitchen Sink Installation",
    body: "Installation of kitchen sinks, including undermount and drop-in styles, with drain and supply connections.",
    tail: [" If your sink has a disposal, see our ", { href: "/henderson/garbage-disposal-repair-installation/", text: "Henderson garbage disposal repair and installation" }, " page."],
  },
  {
    title: "Bathroom Sink Installation",
    body: "Installation of bathroom sinks, including undermount, vessel, pedestal, and vanity-top configurations.",
  },
  {
    title: "Under-Sink Leak Repair",
    body: "Repair of leaks at supply lines, shut-off valves, drain connections, and traps beneath kitchen and bathroom sinks.",
    tail: [" For leaks you cannot see, see our ", { href: "/henderson/leak-detection-repair/", text: "Henderson leak detection and repair" }, " page."],
  },
  {
    title: "Aerator, Cartridge, and Drain Trap Service",
    body: "Cleaning or replacement of clogged aerators, replacement of worn faucet cartridges, and repair of drain traps that leak or slow drainage.",
  },
];

// Repair or replace (two H3 blocks).
const DECISION_HEADING = "Faucet Repair or Replacement: What Makes Sense for Your Henderson Home?";
const DECISION_BLOCKS: { title: string; body: string }[] = [
  {
    title: "When repair is the right choice",
    body: "Repair is usually the practical choice when the faucet body is sound and the problem is a worn cartridge, washer, seal, or clogged aerator. These repairs restore a faucet that is otherwise in good condition.",
  },
  {
    title: "When replacement makes more sense",
    body: "Replacement is the better option when the faucet is corroded, the finish is failing, parts are no longer available, or the same faucet keeps failing. It is also the natural time to replace worn shut-off valves and supply lines, and we explain the options before you decide.",
  },
];

// Mid-page CTA band (charcoal).
const MID_CTA = {
  headline: "Faucet or Sink Trouble in Your Henderson Home?",
  body: "Red Carpet Plumbing handles dripping faucets, low pressure, under-sink leaks, and sink installation throughout Henderson. Call now and describe what is happening, or request service online.",
};

// Process. Single source for the visible steps and the HowTo schema.
const PROCESS_HEADING = "How We Handle Faucet and Sink Service in Henderson";
const PROCESS_INTRO = "This is our standard process for faucet and sink repair and installation in Henderson homes.";
const PROCESS_STEPS: { name: string; body: string }[] = [
  {
    name: "Call and describe the issue.",
    body: "Call (702) 567-9172 and describe what the faucet or sink is doing. If water is leaking under the sink, close the shut-off valve under the sink first.",
  },
  {
    name: "Inspection and diagnosis.",
    body: "A licensed plumber inspects the faucet, supply lines, shut-off valves, drain, and trap to find the exact cause.",
  },
  {
    name: "Review options and approve.",
    body: "We explain what we found and whether repair or replacement is the more practical choice. You approve the work before anything is done.",
  },
  {
    name: "Repair or installation with final check.",
    body: "Our plumber completes the repair or installs the new fixture, tests for leaks, checks pressure and drainage, and cleans up before leaving.",
  },
];

// Why choose.
const WHY_CHOOSE_HEADING = "Why Henderson Homeowners Choose Red Carpet Plumbing";
const WHY_CHOOSE_ITEMS = [
  // FLAG: VERIFY license #0048585A before publishing.
  "Licensed Nevada plumbers, NV License #0048585A, C-1 Plumbing and Heating",
  // FLAG: VERIFY qualitative installation-care claim before publishing.
  "Careful fixture installation that protects your finishes and countertops",
  "Familiar with Henderson's original Green Valley homes and newer communities",
  "Clear options explained before work begins",
  // FLAG: VERIFY transparent pricing claim before publishing.
  "Transparent pricing with no hidden fees",
];

// Areas. Chips are plain text; cross-links are in the paragraph.
const AREAS_HEADING = "Faucet and Sink Repair and Installation Across Henderson";
const AREAS_INTRO = "Red Carpet Plumbing provides faucet and sink repair and installation throughout Henderson, including Green Valley, Anthem, Inspirada, and all Henderson communities. Call (702) 567-9172 to confirm coverage for your address.";
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
const AREAS_CROSS_LINKS: LinkSeg[] = ["We also provide faucet and sink repair and installation in ", { href: "/green-valley/faucet-sink-repair-installation/", text: "Green Valley" }, " and ", { href: "/las-vegas/faucet-sink-repair-installation/", text: "Las Vegas" }, ". For every service we offer in your community, visit our ", { href: "/henderson-plumbing-services/", text: "Henderson plumbing services" }, " page."];

// FAQs. Single source for the visible accordion and the FAQPage schema.
const FAQS: { question: string; answer: string }[] = [
  {
    question: "Why is my faucet dripping?",
    answer: "A drip usually comes from a worn cartridge, washer, or seal inside the faucet. Hard water minerals speed up that wear. Most dripping faucets can be repaired by replacing the worn part, and a plumber can tell you whether repair or replacement makes more sense.",
  },
  {
    question: "Why is the water pressure low at only one faucet?",
    answer: "Low pressure at a single faucet most often means a clogged aerator or a partly closed or failing shut-off valve. Hard water minerals collect in the aerator and restrict flow. If other faucets are normal, the cause is local to that fixture.",
  },
  {
    question: "Should I repair or replace a leaky faucet?",
    answer: "Repair makes sense when the faucet is sound and only a cartridge, washer, or seal has worn out. Replacement is better when the faucet is corroded, the finish is failing, or the same faucet keeps failing. We explain both options before you decide.",
  },
  {
    question: "Can Henderson's hard water damage faucets?",
    answer: "Yes. Mineral buildup from Lake Mead water clogs aerators, wears out cartridges and washers, and can stiffen handles over time. Cleaning aerators and replacing worn parts early keeps a faucet working longer, and heavily scaled fixtures may be better replaced.",
  },
  {
    question: "Do you install kitchen and bathroom sinks in Henderson?",
    answer: "Yes. Red Carpet Plumbing installs kitchen and bathroom sinks, including undermount, drop-in, vessel, pedestal, and vanity-top styles, with drain and supply connections. We check the shut-off valves and supply lines during installation and replace them if needed.",
  },
  {
    question: "What causes leaks under the sink?",
    answer: "The most common causes are loose or worn supply line connections, failing shut-off valves, a leaking drain trap, and a leaking faucet base. Because a small leak can damage the cabinet over time, it is best to have it repaired early.",
  },
  {
    question: "Do you offer same-day faucet and sink repair in Henderson?",
    answer: "Same-day faucet and sink repair is available in Henderson, subject to scheduling. Call (702) 567-9172 to check same-day availability for your address. When you call, tell us what the fixture is doing, such as dripping, leaking, or draining slowly, so we can schedule the right visit.",
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
    label: "Garbage Disposal Repair and Installation in Henderson",
    href: "/henderson/garbage-disposal-repair-installation/",
  },
  {
    label: "Toilet Repair and Installation in Henderson",
    href: "/henderson/toilet-repair-installation/",
  },
  {
    label: "Faucet and Sink Repair and Installation (all of the Las Vegas Valley)",
    href: "/faucet-sink-repair-installation/",
  },
];

// Final CTA.
const FINAL_CTA = {
  headline: "Faucet or Sink Problem in Henderson? We Can Help.",
  // FLAG: VERIFY transparent pricing claim before publishing.
  body: "Red Carpet Plumbing provides faucet repair, sink installation, and under-sink leak repair for Henderson homes and businesses. Transparent pricing and licensed plumbers.",
};

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Faucet and Sink Repair and Installation in Henderson, NV | Red Carpet Plumbing",
  url: "https://redcarpetplumbing.com/henderson/faucet-sink-repair-installation/",
  description:
    "Faucet and sink repair and installation in Henderson, NV. Leaks, drips, low pressure, and new fixtures. NV #0048585A. Call (702) 567-9172.",
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
      name: "Faucet and Sink Repair and Installation in Henderson",
      item: "https://redcarpetplumbing.com/henderson/faucet-sink-repair-installation/",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Faucet and Sink Repair and Installation",
  serviceType: "Faucet and Sink Repair and Installation",
  // FLAG: VERIFY license #0048585A in the description before publishing.
  description:
    "Red Carpet Plumbing provides dripping faucet repair, faucet replacement and installation, kitchen and bathroom sink installation, under-sink leak repair, and aerator, cartridge, and drain trap service for homes and businesses in Henderson, NV. Nevada Contractor License #0048585A.",
  provider: {
    "@type": "Plumber",
    name: "Red Carpet Plumbing",
    url: "https://redcarpetplumbing.com",
    // FLAG: VERIFY telephone before publishing.
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

// HowTo schema included because the process section renders the matching visible
// numbered steps. Derived from PROCESS_STEPS so the schema text always matches the page text.
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How We Handle Faucet and Sink Service in Henderson",
  description: "The process Red Carpet Plumbing follows for faucet and sink repair and installation in Henderson, NV.",
  step: PROCESS_STEPS.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.name,
    text: s.body,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

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

export default function HendersonFaucetSinkPage() {
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
            { label: "Faucet and Sink Repair and Installation in Henderson" },
          ]} variant="dark" />}
          headingLevel="h1"
          headline={
            <>
              Faucet and Sink Repair and Installation
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
          formSlot={<QuoteFormPlaceholder title="Get Faucet and Sink Help" />}
          backgroundImage={{
            src: "/images/services/faucet-sink-repair-installation/red-carpet-plumbing-las-vegas-faucet-sink-repair-hero.webp",
            alt: "Faucet and Sink Repair and Installation in Henderson, NV",
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
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
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
                  <CheckMark />
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
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Frequently Asked Questions
                <br className="hidden sm:block" /> About Faucet and Sink Repair and Installation in Henderson, NV
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {FAQS.map((faq) => (
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
