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
import TrustStrip from "@/components/TrustStrip";

// FLAG: VERIFY before publishing — the rating (4.8 stars / 76 Google reviews),
// "Over 40 years," and "24/7 emergency service" trust claims, plus license
// #0048585A and transparent-pricing, are source-site claims surfaced in the
// approved brief and shown on this page. Confirm before final launch.
// Schema follows the established site-wide service-location pattern (Plumber
// provider; areaServed City Henderson + containedInPlace State Nevada, no
// sameAs; WebPage isPartOf WebSite; separate JsonLd blocks; HowTo for the
// visible process steps), per the standing guardrail. The brief's combined
// schema array is rendered as separate blocks accordingly.

export const metadata: Metadata = {
  title:
    "Slab Leak Detection and Repair in Henderson, NV | Red Carpet Plumbing",
  description:
    "Professional slab leak detection and repair in Henderson, NV. Red Carpet Plumbing locates slab leaks non-invasively using acoustic sensors, pressure testing, and thermal imaging. Serving Green Valley, Lake Las Vegas, and all Henderson communities.",
  alternates: {
    canonical:
      "https://redcarpetplumbing.com/henderson/slab-leak-detection-repair/",
  },
  openGraph: {
    title:
      "Slab Leak Detection and Repair in Henderson, NV | Red Carpet Plumbing",
    description:
      "Non-invasive slab leak detection and repair throughout Henderson, NV. Serving Green Valley, Lake Las Vegas, and all Henderson communities.",
    url: "https://redcarpetplumbing.com/henderson/slab-leak-detection-repair/",
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
const HENDERSON_SLAB_FAQS = [
  {
    question: "What are the signs of a slab leak in a Henderson home?",
    answer:
      "The most common signs of a slab leak in a Henderson home are warm or hot spots on floors, the sound of running water when all fixtures are off, an unexplained increase in your water bill, damp or wet flooring without an obvious source, cracks appearing in walls or flooring, low water pressure throughout the home, and mold or mildew odor at floor level. These signs appear because the leak is beneath the slab and cannot be seen directly.",
  },
  {
    question: "Why are slab leaks common in Henderson, NV homes?",
    answer:
      "Henderson's slab leak risk is driven by aging copper and polybutylene pipes in Green Valley's original neighborhoods, which have been exposed to Las Vegas Valley hard water for 30 to 40 years. Hard water mineral corrosion thins pipe walls continuously over that period. Caliche and expansive clay soil movement beneath Henderson slab foundations adds mechanical stress to those pipes. Closed-loop system pressure cycling accelerates pipe fatigue in pipes already compromised by corrosion.",
  },
  {
    question:
      "Are slab leaks more common in Green Valley than in newer Henderson neighborhoods?",
    answer:
      "Yes. Green Valley's original neighborhoods, built from the mid-1980s through the mid-1990s, have copper supply lines with 30 to 40 years of hard water mineral exposure, and some homes contain polybutylene pipe that is prone to sudden failure. These conditions make original Green Valley homes significantly more susceptible to slab leaks than newer Henderson construction. Green Valley Ranch homes, built from the mid-1990s through the mid-2000s, carry a lower but still present risk as they reach 20 to 30 years of age.",
  },
  {
    question:
      "How is a slab leak detected in Henderson without breaking up the floor?",
    answer:
      "Professional slab leak detection uses acoustic sensors that amplify the sound of pressurized water escaping beneath the slab, pressure testing to confirm and isolate water loss to a specific line, and thermal imaging to identify temperature differences caused by hot water leaks. These non-invasive methods locate the slab leak precisely before any concrete cutting begins.",
  },
  {
    question:
      "Should I choose pipe rerouting or spot repair for a slab leak in Henderson?",
    answer:
      "For an isolated leak in a pipe that is otherwise in good condition, spot repair can be appropriate. For original Green Valley homes where copper or polybutylene lines have been thinned by decades of hard water corrosion, pipe rerouting is often the more durable long-term solution because it removes the aging pipe from beneath the slab entirely and eliminates the source of future slab leaks on that line. Red Carpet Plumbing assesses pipe condition and presents both options before any repair begins.",
  },
  {
    question: "How long does slab leak repair take in Henderson?",
    answer:
      "Detection typically takes a few hours. Spot repair through concrete usually takes one to two days including concrete patching. Pipe rerouting typically takes one to three days depending on the plumbing layout and the length of line being bypassed. Epoxy lining timelines vary based on pipe length and configuration. Red Carpet Plumbing will provide a timeline estimate before work begins.",
  },
];

const HERO_SUBHEADING =
  "Slab leaks are among the most common and damaging plumbing problems in Henderson, particularly in Green Valley's original neighborhoods where aging copper and polybutylene pipes have been under hard water stress for 30 to 40 years. Red Carpet Plumbing locates slab leaks non-invasively using acoustic sensors, pressure testing, and thermal imaging, and presents all repair options before any work begins.";

// FLAG: VERIFY rating, "40 years," and 24/7 claims before publishing (see top).
const HERO_TRUST_ITEMS = [
  "4.8 stars, 76 Google reviews",
  "NV Licensed, #0048585A",
  "Over 40 years serving the Las Vegas Valley",
  "24/7 emergency service",
  "Transparent pricing, no hidden fees",
];

const SLAB_TRUST_STRIP = [
  "Non-Invasive Detection",
  "NV Licensed, #0048585A",
  "All Repair Options Explained",
  "Residential and Commercial",
];

const WARNING_SIGNS = [
  "Warm or hot spots on your floors",
  "The sound of running water when all fixtures are off",
  "An unexplained increase in your water bill",
  "Damp or wet carpet or flooring without an obvious source",
  "Cracks appearing in walls, floors, or the home's foundation",
  "Low water pressure throughout the home with no other explanation",
  "Mold or mildew odor at floor level",
];

const DETECTION_METHODS = [
  {
    title: "Acoustic Electronic Detection",
    body: "Electronic acoustic sensors amplify the sound of pressurized water escaping from pipes beneath the slab. Trained technicians use this equipment to identify the leak location to within a few inches through the floor surface without cutting or demolition.",
  },
  {
    title: "Pressure Testing",
    body: "Pressure testing isolates which section of the plumbing system is losing pressure, confirming an active leak and identifying which line is affected. For Henderson homes with multiple aging pipe runs, pressure testing helps narrow the detection area efficiently.",
  },
  {
    title: "Thermal Imaging",
    body: "Hot water line slab leaks release heat that travels upward through the slab and creates temperature differences visible on floor surfaces. Thermal imaging cameras detect these warm spots, helping narrow the search area before acoustic sensors confirm the precise location.",
  },
];

const CAUSES_INTRO =
  "Henderson's combination of aging pipe materials in older neighborhoods, hard water, and desert soil conditions creates elevated slab leak risk, particularly in Green Valley's original communities.";

const HENDERSON_SLAB_CAUSES = [
  {
    title: "Aging Pipes in Green Valley's Original Neighborhoods",
    body: "Green Valley's original neighborhoods, developed from the mid-1980s through the mid-1990s, carry the highest slab leak risk in Henderson. Homes built during this period now have copper supply lines that have been exposed to Las Vegas Valley hard water for 30 to 40 years. Over that period, dissolved minerals have continuously thinned pipe walls from the inside out, creating conditions where under-slab failures are increasingly common. Some homes from this era also contain polybutylene pipe, a gray plastic material widely installed from the late 1970s through the mid-1990s that is prone to sudden failure without warning. Green Valley Ranch, developed from the mid-1990s through the mid-2000s, carries a lower but still present slab leak risk as those homes now reach 20 to 30 years of age and enter their first major service cycle.",
  },
  {
    title: "Caliche and Expansive Clay Soil Movement",
    body: "Henderson, like the rest of the Las Vegas Valley, sits on caliche and expansive clay soils that shift with temperature changes and rainfall. This soil movement places ongoing mechanical stress on pipes running beneath concrete slab foundations, creating friction points where pipe contacts rebar or aggregate and stressing joints and connections under the slab. Original Green Valley neighborhoods, where pipes are already thinned by hard water corrosion, carry the highest combined risk from this factor.",
  },
  {
    title: "Hard Water Mineral Corrosion",
    body: "Henderson receives Las Vegas Valley municipal water from Lake Mead, which measures 17 to 24 grains per gallon of dissolved minerals (approximately 280 parts per million). This places Henderson among the hardest municipal water supplies in the United States. Sustained hard water exposure accelerates corrosion inside copper pipe walls, thinning them faster than in cities with softer water and contributing to higher rates of under-slab failures throughout Henderson.",
  },
  {
    title: "Closed-Loop System Pressure Stress",
    body: "Most Henderson homes operate on closed-loop plumbing systems due to backflow preventers at the street meter. Thermal expansion from water heating creates repeated pressure spikes that stress pipe walls and joints beneath the slab. Over years of exposure, these pressure cycles accelerate pipe fatigue in pipes already compromised by mineral corrosion.",
  },
];

const REPAIR_OPTIONS_INTRO =
  "The right repair approach depends on the leak location, pipe condition, pipe age, and what sits above the leak. Red Carpet Plumbing presents all options and explains the tradeoffs before any work begins.";

// Routed through a string const so the apostrophe in "home's" does not trip
// react/no-unescaped-entities in inline JSX.
const WARNING_SIGNS_INTRO =
  "Slab leaks occur when water or sewer pipes running beneath your home's concrete foundation develop cracks or holes. Because the pipe is under the slab, signs appear indirectly. Recognizing them early limits foundation damage and repair costs.";

const HENDERSON_SLAB_STEPS = [
  {
    name: "Detect and Locate the Slab Leak Precisely",
    body: "We use acoustic sensors, pressure testing, and thermal imaging to locate the slab leak to within a few inches. Precise location before repair selection avoids unnecessary concrete cutting and ensures the repair targets the actual failure point.",
  },
  {
    name: "Assess Pipe Condition",
    body: "After locating the leak, we assess the condition of the surrounding pipe. For original Green Valley homes with aging copper or polybutylene lines, pipe condition assessment informs whether a spot repair or a more comprehensive approach is the better long-term choice.",
  },
  {
    name: "Present Repair Options",
    body: "We present the applicable repair options for your specific leak location, pipe type, and condition. We explain the tradeoffs of each approach clearly before any work begins. No repair starts without your approval.",
  },
  {
    name: "Complete the Repair and Confirm",
    body: "We complete the approved repair and use pressure testing to confirm the line holds pressure after work is finished. We clean up the work area, including any concrete cutting debris, before leaving.",
  },
];

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
  name: "Slab Leak Detection and Repair in Henderson, NV | Red Carpet Plumbing",
  description:
    "Professional slab leak detection and repair in Henderson, NV. Red Carpet Plumbing locates slab leaks non-invasively using acoustic sensors, pressure testing, and thermal imaging. Serving Green Valley, Lake Las Vegas, and all Henderson communities.",
  url: "https://redcarpetplumbing.com/henderson/slab-leak-detection-repair/",
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
      name: "Slab Leak Detection and Repair",
      item: "https://redcarpetplumbing.com/henderson/slab-leak-detection-repair/",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Slab Leak Detection and Repair",
  serviceType: "Slab Leak Detection and Repair",
  description:
    "Professional non-invasive slab leak detection and repair in Henderson, NV. Red Carpet Plumbing locates slab leaks using acoustic sensors, pressure testing, and thermal imaging and presents all repair options before work begins.",
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
  name: "How Red Carpet Plumbing Handles Slab Leaks in Henderson",
  step: HENDERSON_SLAB_STEPS.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.name,
    text: s.body,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: HENDERSON_SLAB_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function HendersonSlabLeakPage() {
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
            { label: "Slab Leak Detection and Repair" },
          ]}
        />

        {/* SECTION 1: HERO */}
        <HeroSection
          headingLevel="h1"
          headline="Slab Leak Detection and Repair in Henderson, NV"
          subheading={HERO_SUBHEADING}
          trustItems={HERO_TRUST_ITEMS}
          primaryCTA={{
            label: "Call (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{
            label: "Request a Free Quote",
            href: "/contact/",
          }}
          ctaNote="Licensed plumbers. Non-invasive detection. All repair options explained."
          formSlot={<QuoteFormPlaceholder title="Get Slab Leak Help" />}
          backgroundImage={{
            // hero.webp is a low-res asset; card.webp is the higher-res image.
            // TODO: swap to a dedicated high-res slab-leak hero when available.
            src: "/images/services/slab-leak-detection-repair/card.webp",
            alt: "slab leak detection in Henderson, NV",
          }}
        />

        {/* SECTION 1b: TRUST STRIP */}
        <TrustStrip
          items={SLAB_TRUST_STRIP}
          ariaLabel="Why Henderson customers choose Red Carpet Plumbing for slab leak service"
        />

        {/* SECTION 2: WARNING SIGNS */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Signs of a Slab Leak in Your Henderson Home
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                {WARNING_SIGNS_INTRO}
              </p>
            </div>
            <div className="mt-8 rounded-2xl border-l-4 border-brand-primary bg-brand-surface-alt p-6 sm:p-8">
              <ul className="space-y-3">
                {WARNING_SIGNS.map((sign) => (
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
              If you notice any of these signs in your Henderson home, do not
              wait. Slab leaks cause ongoing soil erosion beneath the foundation
              and can lead to structural damage if left undetected. Call Red
              Carpet Plumbing at (702) 567-9172 for a professional slab leak
              inspection.
            </p>
          </div>
        </section>

        {/* SECTION 3: DETECTION METHODS */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                How Non-Invasive Slab Leak Detection Works in Henderson
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Locating a slab leak does not require breaking open large
                sections of concrete to search. Red Carpet Plumbing uses
                professional non-invasive detection methods to pinpoint the leak
                location before recommending a repair approach. For a broader
                overview, see our{" "}
                <Link
                  href="/slab-leak-detection-repair/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  slab leak detection and repair
                </Link>{" "}
                services and our{" "}
                <Link
                  href="/henderson/leak-detection-repair/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  Henderson leak detection
                </Link>{" "}
                services.
              </p>
            </div>
            <div className="mt-10 space-y-6">
              {DETECTION_METHODS.map((m) => (
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

        {/* SECTION 4: HENDERSON SLAB LEAK CAUSES */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Why Slab Leaks Are Common in Henderson, NV
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    {CAUSES_INTRO}
                  </p>
                </div>
              </SectionRevealItem>
              <SectionRevealItem className="mt-10">
                <ul className="space-y-5">
                  {HENDERSON_SLAB_CAUSES.map((c) => (
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
                Slab Leak Repair Options in Henderson
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                {REPAIR_OPTIONS_INTRO}
              </p>
            </div>
            <div className="mt-10 space-y-6">
              {/* Spot repair card */}
              <article className="rounded-2xl bg-white p-6 ring-1 ring-brand-surface-alt sm:p-8">
                <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                  Spot Repair Through Concrete
                </h3>
                <p className="mt-3 text-base leading-7 text-brand-dark/80">
                  Spot repair involves cutting the concrete slab directly above
                  the leak, repairing or replacing the damaged pipe section, and
                  patching the concrete. This is a focused approach appropriate
                  for an isolated leak in a pipe that is otherwise in good
                  condition. For older Green Valley homes where surrounding pipe
                  has been thinned by decades of hard water corrosion, a single
                  spot repair may be followed by another leak on the same aging
                  line. Learn more about our{" "}
                  <Link
                    href="/water-pipe-repair-replacement/"
                    className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                  >
                    water pipe repair and replacement
                  </Link>{" "}
                  services.
                </p>
              </article>

              {/* Pipe rerouting card */}
              {/* ACTIVATED: /henderson/re-piping/ built (P16) */}
              <article className="rounded-2xl bg-white p-6 ring-1 ring-brand-surface-alt sm:p-8">
                <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                  Pipe Rerouting
                </h3>
                <p className="mt-3 text-base leading-7 text-brand-dark/80">
                  Pipe rerouting bypasses the damaged pipe section by running a
                  new line through walls, ceilings, or an accessible path above
                  the slab. This approach eliminates the aging under-slab pipe
                  from the system and is often the more durable long-term
                  solution for original Green Valley homes where copper or
                  polybutylene lines are at or near the end of their service
                  life. Pipe rerouting avoids repeated concrete cutting and
                  removes the source of future slab leaks on the affected line.
                  Learn more about our{" "}
                  <Link
                    href="/henderson/re-piping/"
                    className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                  >
                    Henderson re-piping
                  </Link>{" "}
                  services.
                </p>
              </article>

              {/* Epoxy lining card */}
              <article className="rounded-2xl bg-white p-6 ring-1 ring-brand-surface-alt sm:p-8">
                <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                  Epoxy Pipe Lining
                </h3>
                <p className="mt-3 text-base leading-7 text-brand-dark/80">
                  Epoxy pipe lining applies a specialized coating to the
                  interior of the existing pipe, sealing cracks and restoring
                  pipe integrity from the inside without excavation. This method
                  is less invasive than concrete cutting and works best for
                  pipes with localized damage where the overall pipe structure
                  is still intact. It is not appropriate for pipes with
                  extensive corrosion or significantly narrowed interior
                  diameter.
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
                    How Red Carpet Plumbing Handles Slab Leaks in Henderson
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Here is what to expect when you call Red Carpet Plumbing for
                    slab leak service in Henderson.
                  </p>
                </div>
              </SectionRevealItem>
              <SectionRevealItem className="mt-12">
                <ol className="space-y-8">
                  {HENDERSON_SLAB_STEPS.map((step, index) => (
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
                  Suspected Slab Leak in Henderson?
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/80">
                  Red Carpet Plumbing provides professional slab leak detection
                  and repair throughout Henderson, including Green Valley, Lake
                  Las Vegas, and Seven Hills. We locate leaks precisely and
                  present all repair options before any work begins. For
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
                  Request a Free Quote
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
                Henderson Communities We Serve for Slab Leak Detection
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/85">
                Red Carpet Plumbing provides slab leak detection and repair
                throughout Henderson and its communities. Slab leak risk is
                highest in original Green Valley neighborhoods, but we serve all
                Henderson areas. For full coverage details, see our{" "}
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
              For Las Vegas slab leak detection and repair, visit our{" "}
              <Link
                href="/las-vegas/slab-leak-detection-repair/"
                className="font-semibold text-white underline underline-offset-4 hover:text-white/80"
              >
                Las Vegas slab leak detection
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
                Frequently Asked Questions About Slab Leaks in Henderson
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {HENDERSON_SLAB_FAQS.map((faq) => (
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
          headline={<>Slab Leak Detection and Repair<br />Throughout Henderson, NV</>}
          body="Red Carpet Plumbing provides professional slab leak detection and repair throughout Henderson, including Green Valley, Lake Las Vegas, and all Henderson communities. We locate slab leaks non-invasively, present all repair options clearly, and complete repairs to confirmed hold-pressure standards."
          primaryCTA={{
            label: "Call (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{
            label: "Request a Free Quote",
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
