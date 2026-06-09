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
// "Over 40 years," and "24/7 emergency service" trust claims, plus license
// #0048585A and transparent-pricing, are source-site claims surfaced in the
// approved brief and shown on this page. Confirm before final launch.
// Schema follows the established site-wide service-location pattern (Plumber
// provider; areaServed City + containedInPlace State Nevada, no sameAs; WebPage
// isPartOf WebSite; separate JsonLd blocks; HowTo for the visible process steps),
// per the standing guardrail.

export const metadata: Metadata = {
  title:
    "Slab Leak Detection and Repair in Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Professional slab leak detection and repair in Las Vegas, NV. Red Carpet Plumbing locates slab leaks non-invasively using acoustic sensors, pressure testing, and thermal imaging. Serving older Las Vegas neighborhoods and the greater Las Vegas Valley.",
  alternates: {
    canonical:
      "https://redcarpetplumbing.com/las-vegas/slab-leak-detection-repair/",
  },
  openGraph: {
    title:
      "Slab Leak Detection and Repair in Las Vegas, NV | Red Carpet Plumbing",
    description:
      "Non-invasive slab leak detection and repair throughout Las Vegas, NV. Acoustic sensors, pressure testing, thermal imaging, and all repair options explained.",
    url: "https://redcarpetplumbing.com/las-vegas/slab-leak-detection-repair/",
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
const LV_SLAB_FAQS = [
  {
    question: "What are the signs of a slab leak in a Las Vegas home?",
    answer:
      "The most common signs of a slab leak in a Las Vegas home are warm or hot spots on floors, the sound of running water when all fixtures are off, an unexplained increase in your water bill, damp or wet flooring without an obvious source, cracks appearing in walls or flooring, low water pressure throughout the home, and mold or mildew odor at floor level. These signs appear because the leak is beneath the slab and cannot be seen directly.",
  },
  {
    question: "What causes slab leaks in Las Vegas homes?",
    answer:
      "The primary causes in Las Vegas are hard water mineral corrosion that thins copper pipe walls over decades of exposure, caliche and expansive clay soil movement that stresses pipes beneath slab foundations, aging copper and polybutylene pipes in homes built before 2000, and pressure stress from closed-loop plumbing systems. Las Vegas has some of the highest rates of slab leaks in the country due to these compounding conditions.",
  },
  {
    question: "How is a slab leak detected without breaking up the floor?",
    answer:
      "Professional slab leak detection uses acoustic sensors that amplify the sound of pressurized water escaping beneath the slab, pressure testing to confirm and isolate water loss to a specific line, and thermal imaging to identify temperature differences caused by hot water leaks. These non-invasive methods locate the leak precisely before any concrete cutting begins.",
  },
  {
    question: "What are my options for slab leak repair in Las Vegas?",
    answer:
      "The three main options are spot repair through concrete, which involves cutting the slab at the leak location and repairing the damaged pipe section; pipe rerouting, which bypasses the damaged pipe entirely by running a new line through walls or above-slab pathways; and epoxy pipe lining, which seals cracks from the inside without excavation. The right option depends on the leak location, pipe age, pipe condition, and what is above the repair area.",
  },
  {
    question:
      "Should I choose pipe rerouting or spot repair for a slab leak in Las Vegas?",
    answer:
      "For an isolated leak in a pipe that is otherwise in good condition, spot repair can be appropriate. For older Las Vegas homes where original copper or polybutylene pipes have been thinned by decades of hard water corrosion, pipe rerouting is often the more durable long-term solution because it removes the aging pipe from beneath the slab entirely and eliminates the source of future slab leaks on that line. Red Carpet Plumbing assesses pipe condition and presents both options before any repair begins.",
  },
  {
    question: "How long does slab leak repair take in Las Vegas?",
    answer:
      "Detection typically takes a few hours. Spot repair through concrete usually takes one to two days including concrete patching. Pipe rerouting typically takes one to three days depending on the plumbing layout and the length of line being bypassed. Epoxy lining timelines vary based on pipe length and configuration. Red Carpet Plumbing will provide a timeline estimate before work begins.",
  },
];

const HERO_SUBHEADING =
  "Slab leaks in Las Vegas homes are more common than in most cities due to the valley's extreme hard water, desert soil movement, and aging pipe materials in older neighborhoods. Red Carpet Plumbing locates slab leaks non-invasively using acoustic sensors, pressure testing, and thermal imaging, and presents all repair options before any work begins.";

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
    body: "Electronic acoustic sensors amplify the sound of pressurized water escaping from pipes beneath the slab. Trained technicians use this equipment to listen through the floor surface and identify the leak location to within a few inches without any cutting or demolition.",
  },
  {
    title: "Pressure Testing",
    body: "Pressure testing isolates which section of the plumbing system is losing pressure, confirming an active leak and identifying which line is affected. For homes with multiple potential failure points, pressure testing helps narrow the detection area before acoustic work begins.",
  },
  {
    title: "Thermal Imaging",
    body: "Hot water line slab leaks release heat that travels upward through the slab and creates temperature differences visible on the floor surface. Thermal imaging cameras detect these warm spots, helping narrow the search area before acoustic sensors confirm the precise location.",
  },
];

const CAUSES_INTRO =
  "Las Vegas has some of the highest rates of slab leaks in the country. Four compounding factors drive this elevated risk throughout the Las Vegas Valley.";

const LV_SLAB_CAUSES = [
  {
    title: "Hard Water Mineral Corrosion in Embedded Pipes",
    body: "Las Vegas water measures approximately 280 parts per million of dissolved minerals, making it among the hardest municipal water in the United States. Most Las Vegas homes built from the 1960s through the 1990s have copper water lines embedded in or running beneath the concrete slab. Over decades of exposure to this hard water, calcium and magnesium deposits build up inside the pipe walls, thinning them from the inside out. When the pipe wall becomes thin enough, the pressure of the water supply causes it to crack or develop a pinhole leak beneath the slab.",
  },
  {
    title: "Caliche and Expansive Clay Soil Movement",
    body: "The Las Vegas Valley sits on caliche and expansive clay soils that shift significantly with temperature changes, rare rainfall, and soil saturation. This soil movement puts constant stress on pipes buried beneath and embedded in concrete foundations. Even small soil shifts create friction points where pipe contacts concrete rebar or aggregate, eventually wearing through the pipe wall. Soil settlement also stresses pipe joints and connections beneath the slab.",
  },
  {
    title: "Aging Copper and Polybutylene Pipes",
    body: "Many Las Vegas homes built before 2000 still have original copper plumbing. After 30 to 50 years of exposure to Las Vegas hard water, these pipes have been continuously thinned by mineral corrosion. Homes built between the mid-1970s and mid-1990s may also have polybutylene pipes, which are particularly prone to sudden failure. When aging pipe materials develop their first slab leak, it is often a sign that the rest of the line is approaching similar failure.",
  },
  {
    title: "Pressure Stress from Closed-Loop Systems",
    body: "Most Las Vegas homes operate on closed-loop plumbing systems due to backflow preventers at the street meter. Thermal expansion from water heating causes repeated pressure spikes that stress pipe walls and joints. Over years of exposure, these pressure cycles accelerate pipe fatigue, particularly in pipes already thinned by hard water corrosion.",
  },
];

const REPAIR_OPTIONS_INTRO =
  "The right slab leak repair approach depends on the leak location, pipe condition, pipe age, and what sits above the leak. Red Carpet Plumbing presents all options and explains the tradeoffs before any work begins.";

// Routed through a string const so the apostrophe in "home's" does not trip
// react/no-unescaped-entities in inline JSX.
const WARNING_SIGNS_INTRO =
  "Slab leaks occur when water or sewer pipes running beneath your home's concrete foundation develop cracks or holes. Because the pipe is under the slab, early signs appear indirectly. Recognizing them early limits foundation damage and repair costs.";

const LV_SLAB_STEPS = [
  {
    name: "Detect and Locate the Slab Leak Precisely",
    body: "We use acoustic sensors, pressure testing, and thermal imaging to locate the slab leak to within a few inches. Precise location before repair selection avoids unnecessary concrete cutting and ensures the repair targets the actual failure point.",
  },
  {
    name: "Assess Pipe Condition",
    body: "After locating the leak, we assess the condition of the surrounding pipe. For older Las Vegas homes with aging copper or polybutylene lines, understanding the pipe condition around the leak informs whether a spot repair or a more comprehensive approach is the better long-term choice.",
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

// Older Las Vegas neighborhoods with the highest slab leak risk, plus served
// lower-risk areas. Crawlable text grid (not image-only).
const NEIGHBORHOODS = [
  "Desert Inn / West Sahara Corridor",
  "Desert Shores",
  "Sunrise Manor",
  "Whitney",
  "Winchester",
  "Southwest Las Vegas",
  "Downtown Las Vegas",
  "The Lakes",
  "Summerlin (newer construction, lower risk but served)",
  "Spring Valley",
];

// Related services. All live (Batch 5 Pages 7, 4).
const RELATED_SERVICES = [
  {
    label: "Water Heater Repair and Installation in Las Vegas",
    href: "/las-vegas/water-heater-repair-installation/",
  },
  {
    label: "Drain Cleaning in Las Vegas",
    href: "/las-vegas/drain-cleaning/",
  },
];

// ---------------------------------------------------------------------------
// JSON-LD payloads (established site-wide shape; see NOTE at top of file).
// ---------------------------------------------------------------------------
const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Slab Leak Detection and Repair in Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Professional slab leak detection and repair in Las Vegas, NV. Red Carpet Plumbing locates slab leaks non-invasively using acoustic sensors, pressure testing, and thermal imaging.",
  url: "https://redcarpetplumbing.com/las-vegas/slab-leak-detection-repair/",
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
      name: "Las Vegas Plumbing",
      item: "https://redcarpetplumbing.com/las-vegas-plumbing-services/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Slab Leak Detection and Repair",
      item: "https://redcarpetplumbing.com/las-vegas/slab-leak-detection-repair/",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Slab Leak Detection and Repair",
  serviceType: "Slab Leak Detection and Repair",
  description:
    "Professional non-invasive slab leak detection and repair in Las Vegas, NV. Red Carpet Plumbing locates slab leaks using acoustic sensors, pressure testing, and thermal imaging and presents all repair options before work begins.",
  provider: {
    "@type": "Plumber",
    name: "Red Carpet Plumbing",
    url: "https://redcarpetplumbing.com",
    // FLAG: VERIFY telephone (carried forward from existing pages).
    telephone: "+17025679172",
  },
  areaServed: {
    "@type": "City",
    name: "Las Vegas",
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
  name: "How Red Carpet Plumbing Handles Slab Leaks in Las Vegas",
  step: LV_SLAB_STEPS.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.name,
    text: s.body,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: LV_SLAB_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function LasVegasSlabLeakPage() {
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
              label: "Las Vegas Plumbing",
              href: "/las-vegas-plumbing-services/",
            },
            { label: "Slab Leak Detection and Repair" },
          ]}
        />

        {/* SECTION 1: HERO */}
        <HeroSection
          headingLevel="h1"
          headline="Slab Leak Detection and Repair in Las Vegas, NV"
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
            alt: "Slab leak detection in Las Vegas, NV",
          }}
        />

        {/* SECTION 1b: TRUST STRIP */}
        <section
          aria-label="Why Las Vegas customers choose Red Carpet Plumbing for slab leak service"
          className="bg-brand-primary text-white"
        >
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-10 xl:px-12">
            <ul className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
              {SLAB_TRUST_STRIP.map((item) => (
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

        {/* SECTION 2: WARNING SIGNS */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Signs of a Slab Leak in Your Las Vegas Home
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
              If you notice any of these signs in your Las Vegas home, do not
              wait. Slab leaks that are left undetected cause ongoing soil
              erosion beneath the foundation and can lead to structural damage.
              Call Red Carpet Plumbing at (702) 567-9172 for a professional slab
              leak inspection.
            </p>
          </div>
        </section>

        {/* SECTION 3: DETECTION METHODS */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                How Non-Invasive Slab Leak Detection Works in Las Vegas
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
                  href="/las-vegas/leak-detection-repair/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  Las Vegas leak detection
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

        {/* SECTION 4: LAS VEGAS SLAB LEAK CAUSES */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Why Slab Leaks Are Common in Las Vegas, NV
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    {CAUSES_INTRO}
                  </p>
                </div>
              </SectionRevealItem>
              <SectionRevealItem className="mt-10">
                <ul className="space-y-5">
                  {LV_SLAB_CAUSES.map((c) => (
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
                Slab Leak Repair Options in Las Vegas
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
                  the leak location, repairing or replacing the damaged pipe
                  section, and patching the concrete. This is a focused approach
                  appropriate for an isolated leak in a pipe that is otherwise in
                  good condition. For older Las Vegas homes where the surrounding
                  pipe has been thinned by decades of hard water corrosion, a
                  single spot repair may be followed by another leak on the same
                  aging line. Learn more about our{" "}
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
              {/* ACTIVATED: /las-vegas/re-piping/ built (P15) */}
              <article className="rounded-2xl bg-white p-6 ring-1 ring-brand-surface-alt sm:p-8">
                <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                  Pipe Rerouting
                </h3>
                <p className="mt-3 text-base leading-7 text-brand-dark/80">
                  Pipe rerouting bypasses the damaged pipe section entirely by
                  running a new line through walls, ceilings, or an accessible
                  path above the slab. This approach eliminates the aging
                  under-slab pipe from the system and is often the more durable
                  long-term solution for older Las Vegas homes where original
                  copper or polybutylene lines are at or near the end of their
                  service life. Pipe rerouting avoids ongoing concrete cutting
                  and removes the source of future slab leaks on the affected
                  line. Learn more about our{" "}
                  <Link
                    href="/las-vegas/re-piping/"
                    className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                  >
                    re-piping
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
                  Epoxy pipe lining applies a specialized coating to the interior
                  of the existing pipe, sealing cracks and restoring pipe
                  integrity from the inside without excavation. This method is
                  less invasive than concrete cutting and works best for pipes
                  with localized damage where the overall pipe structure is still
                  intact. It is not appropriate for pipes with extensive
                  corrosion or where the pipe diameter has been significantly
                  narrowed by mineral buildup.
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
                    How Red Carpet Plumbing Handles Slab Leaks in Las Vegas
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Here is what to expect when you call Red Carpet Plumbing for
                    slab leak service in Las Vegas.
                  </p>
                </div>
              </SectionRevealItem>
              <SectionRevealItem className="mt-12">
                <ol className="space-y-8">
                  {LV_SLAB_STEPS.map((step, index) => (
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
                  Suspected Slab Leak in Las Vegas?
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/80">
                  Red Carpet Plumbing provides professional slab leak detection
                  and repair throughout Las Vegas. We locate leaks precisely
                  before recommending a repair approach and present all options
                  clearly before any work begins. For around-the-clock help, see
                  our{" "}
                  <Link
                    href="/las-vegas/emergency-plumbing/"
                    className="font-semibold text-white underline underline-offset-4 hover:text-white/80"
                  >
                    Las Vegas emergency plumbing
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

        {/* SECTION 8: LAS VEGAS NEIGHBORHOODS */}
        <section className="bg-brand-charcoal text-white">
          <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10 lg:pb-24 xl:px-12">
            <div className="max-w-3xl text-left">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Las Vegas Neighborhoods We Serve for Slab Leak Detection
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/85">
                Slab leak risk is highest in Las Vegas neighborhoods built during
                the rapid growth periods of the 1970s through the 1990s. These
                homes have original pipe materials that have now been exposed to
                Las Vegas hard water for 30 to 50 years. Red Carpet Plumbing
                serves older and newer Las Vegas neighborhoods throughout the
                city. For full coverage details, see our{" "}
                <Link
                  href="/las-vegas-plumbing-services/"
                  className="font-semibold text-white underline underline-offset-4 hover:text-white/80"
                >
                  Las Vegas plumbing services
                </Link>{" "}
                page.
              </p>
            </div>

            <ul className="mt-10 flex flex-wrap gap-3">
              {NEIGHBORHOODS.map((n) => (
                <li key={n}>
                  <span className="block rounded-lg border border-white/10 bg-white/5 px-5 py-3 font-medium text-white/85">
                    {n}
                  </span>
                </li>
              ))}
            </ul>

            {/* ACTIVATED: /henderson/slab-leak-detection-repair/ built (P14) */}
            <p className="mt-8 text-base leading-7 text-white/80">
              For Henderson slab leak detection and repair, visit our{" "}
              <Link
                href="/henderson/slab-leak-detection-repair/"
                className="font-semibold text-white underline underline-offset-4 hover:text-white/80"
              >
                Henderson slab leak page
              </Link>
              .
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
                Frequently Asked Questions About Slab Leaks in Las Vegas
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {LV_SLAB_FAQS.map((faq) => (
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

        {/* SECTION 9b: RELATED SERVICES */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Related Plumbing Services
              </h2>
            </div>
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {RELATED_SERVICES.map((s) => (
                <li key={s.href}>
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
        </section>

        {/* SECTION 10: FINAL CTA */}
        <CTASection
          background="red"
          headline="Slab Leak Detection and Repair Throughout Las Vegas, NV"
          body="Red Carpet Plumbing provides professional slab leak detection and repair throughout Las Vegas. We locate slab leaks non-invasively, present all repair options clearly, and complete repairs to confirmed hold-pressure standards."
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
