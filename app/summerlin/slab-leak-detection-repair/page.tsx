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
  title:
    "Slab Leak Detection and Repair in Summerlin, NV | Red Carpet Plumbing",
  description:
    "Slab leak detection and repair in Summerlin, NV. Non-invasive detection, all repair options explained. Licensed plumbers. NV #0048585A. (702) 567-9172.",
  alternates: {
    canonical:
      "https://redcarpetplumbing.com/summerlin/slab-leak-detection-repair/",
  },
  openGraph: {
    title:
      "Slab Leak Detection and Repair in Summerlin, NV | Red Carpet Plumbing",
    description:
      "Slab leak detection and repair in Summerlin, NV. Non-invasive detection, all repair options explained. Licensed plumbers. NV #0048585A. (702) 567-9172.",
    url: "https://redcarpetplumbing.com/summerlin/slab-leak-detection-repair/",
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
const SUMMERLIN_SLAB_FAQS = [
  {
    question: "What are the signs of a slab leak in a Summerlin home?",
    answer:
      "The most common signs of a slab leak in a Summerlin home are warm or hot spots on floors, the sound of running water when all fixtures are off, an unexplained increase in your water bill, damp or wet flooring without an obvious source, cracks appearing in walls or flooring, low water pressure throughout the home, and mold or mildew odor at floor level. These signs appear because the leak is beneath the slab and cannot be seen directly.",
  },
  {
    question: "What causes slab leaks in Summerlin homes?",
    answer:
      "The primary causes in Summerlin are hard water mineral corrosion that has thinned copper pipe walls in original 1990s village homes over 25 to 35 years of exposure, caliche and expansive clay soil movement that stresses pipes beneath slab foundations, aging pipe materials in homes built before 2000, and pressure stress from closed-loop plumbing systems. The combination of these factors makes original Summerlin village homes, including those in The Hills, The Trails, The Arbors, and The Canyons, more vulnerable to slab leaks than newer Summerlin construction.",
  },
  {
    question: "How is a slab leak detected without breaking up the floor?",
    answer:
      "Professional slab leak detection uses acoustic sensors that amplify the sound of pressurized water escaping beneath the slab, pressure testing to confirm and isolate water loss to a specific line, and thermal imaging to identify temperature differences caused by hot water leaks. These non-invasive methods locate the leak precisely before any concrete cutting begins.",
  },
  {
    question: "What are my options for slab leak repair in Summerlin?",
    answer:
      "The three main options are spot repair through concrete, which involves cutting the slab at the leak location and repairing the damaged pipe section; pipe rerouting, which bypasses the damaged pipe entirely by running a new line through walls or above-slab pathways; and epoxy pipe lining, which seals cracks from the inside without excavation. The right option depends on the leak location, pipe age, pipe condition, and what is above the repair area.",
  },
  {
    question:
      "Should I choose pipe rerouting or spot repair for a slab leak in a Summerlin original village home?",
    answer:
      "For an isolated leak in a pipe that is otherwise in good condition, spot repair can be appropriate. For original Summerlin village homes where copper supply lines have been thinned by 25 to 35 years of hard water corrosion, pipe rerouting is often the more durable long-term solution because it removes the aging pipe from beneath the slab entirely and eliminates the source of future slab leaks on that line. Red Carpet Plumbing will assess your specific situation and explain both options before any work begins.",
  },
  {
    question: "Does slab leak repair in Summerlin require a permit?",
    answer:
      "Slab leak repair involving concrete cutting and pipe repair or rerouting typically requires a permit in both the City of Las Vegas and unincorporated Clark County. Permit jurisdiction in Summerlin depends on which side of the city boundary the property sits. Red Carpet Plumbing holds NV License #0048585A and works within the applicable permit process for your address.",
  },
];

const HERO_SUBHEADING =
  "Red Carpet Plumbing provides non-invasive slab leak detection and repair throughout Summerlin, Nevada, including Summerlin North, Summerlin South, and all Summerlin villages. We use acoustic sensors, pressure testing, and thermal imaging to locate slab leaks precisely before any repair begins, and we explain all repair options before starting work. NV Contractor License #0048585A.";

const HERO_TRUST_ITEMS = [
  "NV Licensed, #0048585A",
  "Non-Invasive Slab Leak Detection",
  "All Repair Options Explained",
  "Transparent Pricing, No Hidden Fees",
];

// Section 2 — visible <ul>, slab-leak-specific warning signs (distinct from the
// general hidden-leak list on the leak-detection page).
const SLAB_WARNING_SIGNS = [
  "Warm or hot spots on the floor, particularly on concrete or tile floors",
  "The sound of running water when all fixtures and appliances are off",
  "An unexplained and persistent increase in your water bill",
  "Damp or wet flooring without an obvious visible source",
  "Cracks appearing in walls or flooring",
  "Low water pressure throughout the home with no other explanation",
  "Mold or mildew odor at floor level",
];

// Section 3 — non-invasive detection methods (bold label + body).
const DETECTION_METHODS = [
  {
    label: "Acoustic sensors",
    body: "Acoustic leak detection equipment amplifies the sound of pressurized water escaping from pipes beneath the slab. Trained technicians use this equipment to listen through the floor surface and identify the leak location to within a few inches without any cutting or demolition.",
  },
  {
    label: "Pressure testing",
    body: "Pressure testing isolates which section of the plumbing system is losing pressure, confirming an active leak and identifying which line is affected. For homes with multiple potential failure points, pressure testing helps narrow the detection area before acoustic work begins.",
  },
  {
    label: "Thermal imaging",
    body: "Hot water line slab leaks release heat that travels upward through the slab and creates temperature differences visible on the floor surface. Thermal imaging cameras detect these warm spots, helping narrow the search area before acoustic sensors confirm the precise location.",
  },
];

// Section 4 — what causes slab leaks (bold label + body).
const SLAB_CAUSES = [
  {
    label: "Hard water mineral corrosion in embedded pipes",
    body: "Las Vegas Valley water measures approximately 280 parts per million of dissolved minerals, making it among the hardest municipal water in the United States. Homes in Summerlin's original western villages, including The Hills, The Trails, The Arbors, and The Canyons, were built in the 1990s with copper supply lines that have now experienced 25 to 35 years of continuous hard water exposure. Calcium and magnesium deposits build up inside the pipe walls and thin them from the inside out. When the pipe wall becomes thin enough, the pressure of the water supply causes it to crack or develop a pinhole leak beneath the slab. This process is the primary driver of slab leaks in original Summerlin village homes.",
  },
  {
    label: "Caliche and expansive clay soil movement",
    body: "Caliche and expansive clay soils beneath Summerlin's slab foundations shift with temperature changes and seasonal rainfall. This soil movement creates ongoing mechanical stress on pipes buried beneath and embedded in concrete foundations. Even small soil shifts create friction points where pipe contacts concrete rebar or aggregate, eventually wearing through the pipe wall. Original Summerlin village homes with copper lines running under caliche-heavy soils carry a higher combined risk from this factor.",
  },
  {
    label: "Aging pipe materials approaching end of service life",
    body: "Homes built in Summerlin's first decade of development now have plumbing systems that are 25 to 35 years old. Original copper plumbing in these homes has been continuously thinned by hard water mineral corrosion throughout that period. Some older Summerlin-area homes built before 1995 may also contain polybutylene pipe, which degrades in chlorinated water and is prone to sudden failure without external corrosion. When aging pipe materials develop a first slab leak, it often signals that additional failure points exist on the same aging line.",
  },
  {
    label: "Pressure stress from closed-loop systems",
    body: "Most Summerlin homes operate on a closed-loop plumbing system due to backflow preventers at the street meter. Thermal expansion from water heating and pressure spikes in closed systems create repeated stress on pipe joints and embedded connections over years of cycling. This pressure stress accelerates pipe fatigue in pipes already thinned by hard water corrosion, compounding the risk in original village homes.",
  },
];

// Section 5 — repair options (H3 + body, optional inline link). Rendered as three
// visible H3 sections per guardrail 9.
const REPAIR_OPTIONS: {
  heading: string;
  body: string;
  link?: { pre: string; href: string; text: string; post: string };
}[] = [
  {
    heading: "Spot repair through concrete",
    body: "Spot repair involves cutting the concrete slab directly above the leak location, repairing or replacing the damaged pipe section, and patching the concrete. This is a focused approach appropriate for an isolated leak in a pipe that is otherwise in good condition. For original Summerlin village homes where the surrounding pipe has been thinned by decades of hard water corrosion, a single spot repair may be followed by another leak on the same aging line.",
    link: {
      pre: " See our ",
      href: "/water-pipe-repair-replacement/",
      text: "water pipe repair and replacement",
      post: " page for more on targeted pipe repairs.",
    },
  },
  {
    // /summerlin/re-piping/ (Batch 6 Page 11) is now built, so per the Page 11
    // brief (Files Allowed to Edit #3) the re-piping anchor is ACTIVATED to the
    // Summerlin-specific page. Only the href changed; the visible anchor text
    // ("re-piping") is unchanged from the approved copy.
    heading: "Pipe rerouting",
    body: "Pipe rerouting bypasses the damaged section entirely by running a new supply line through walls or above-slab pathways, removing the aging pipe from beneath the foundation. For original Summerlin village homes where copper supply lines have been exposed to hard water for 25 to 35 years, rerouting is often the more durable long-term solution because it eliminates the source of future slab leaks on that line.",
    link: {
      pre: " See our ",
      href: "/summerlin/re-piping/",
      text: "re-piping",
      post: " page for homes where the full supply system may be approaching similar age and condition.",
    },
  },
  {
    heading: "Epoxy pipe lining",
    body: "Epoxy lining seals cracks and pinhole leaks from inside the pipe without excavation. This method is less invasive than concrete cutting and works best for pipes with localized damage where the overall pipe structure is still intact. It is not appropriate for pipes with extensive corrosion or significantly narrowed interior diameter.",
  },
];

// Section 6 — visible <ol>, HowTo schema source.
const SLAB_STEPS = [
  {
    name: "Detect and locate the slab leak precisely",
    body: "We use acoustic sensors, pressure testing, and thermal imaging to locate the slab leak to within a few inches. Accurate location is essential because the repair method depends on the leak's position relative to the foundation, the pipe routing, and the structures above. We do not begin any repair until we have confirmed the exact leak location.",
  },
  {
    name: "Assess the pipe condition and repair options",
    body: "We assess the age and material of the affected pipe, the severity of the leak, whether additional failure points are likely on the same line, and what sits above the leak location. This assessment determines whether spot repair, pipe rerouting, or epoxy lining is the most appropriate solution for your specific Summerlin home.",
  },
  {
    name: "Present repair options clearly before starting work",
    body: "We explain each applicable repair option, including what it involves, how long it takes, what access is required, and what the job will cost, before any work begins. We do not start a slab leak repair without your understanding and approval of the approach.",
  },
  {
    name: "Complete the repair and verify the line holds pressure",
    body: "After completing the repair, we pressure test the affected line to confirm it holds pressure and the leak is fully resolved. We do not close up the work area until testing confirms the repair is complete.",
  },
];

// Section 7 — why choose (bulleted list). Three items carry FLAGs.
const WHY_CHOOSE = [
  "Local Las Vegas Valley plumbing company familiar with Summerlin's original village copper pipe systems, hard water conditions, and caliche soil slab leak risks",
  "Non-invasive detection using acoustic sensors, pressure testing, and thermal imaging",
  "All repair options explained before work begins, with no pressure to choose a specific approach",
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
  name: "Slab Leak Detection and Repair in Summerlin, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides slab leak detection and repair in Summerlin, NV. Non-invasive detection, all repair options explained. Licensed plumbers.",
  url: "https://redcarpetplumbing.com/summerlin/slab-leak-detection-repair/",
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
      name: "Slab Leak Detection and Repair in Summerlin",
      item: "https://redcarpetplumbing.com/summerlin/slab-leak-detection-repair/",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Slab Leak Detection and Repair in Summerlin, NV",
  serviceType: "Slab Leak Detection and Repair",
  description:
    "Red Carpet Plumbing provides slab leak detection and repair for Summerlin homes using acoustic sensors, pressure testing, and thermal imaging. Repair options include spot repair, pipe rerouting, and epoxy pipe lining.",
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
  name: "How Red Carpet Plumbing Handles Slab Leaks in Summerlin",
  description:
    "The process Red Carpet Plumbing follows for slab leak detection and repair in Summerlin, NV.",
  step: SLAB_STEPS.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.name,
    text: s.body,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: SUMMERLIN_SLAB_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function SummerlinSlabLeakPage() {
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
            { label: "Slab Leak Detection and Repair in Summerlin" },
          ]}
        />

        {/* SECTION 1: HERO */}
        <HeroSection
          headingLevel="h1"
          headline="Slab Leak Detection and Repair in Summerlin, NV"
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
          formSlot={<QuoteFormPlaceholder title="Get Slab Leak Help" />}
          backgroundImage={{
            src: "/images/services/slab-leak-detection-repair/card.webp",
            alt: "Slab leak detection and repair in Summerlin, NV",
          }}
        />

        {/* SECTION 2: WARNING SIGNS (slab-leak-specific) */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Signs of a Slab Leak in Your Summerlin Home
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Slab leaks occur beneath the concrete foundation and cannot be
                seen directly. Recognizing the warning signs helps Summerlin
                homeowners act before a slab leak causes foundation erosion or
                structural damage. The warning signs of a slab leak are distinct
                from general pipe leaks.
              </p>
            </div>
            <div className="mt-8 rounded-2xl border-l-4 border-brand-primary bg-brand-surface-alt p-6 sm:p-8">
              <ul className="space-y-3">
                {SLAB_WARNING_SIGNS.map((item) => (
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
              Slab leaks can cause ongoing soil erosion beneath the foundation and
              lead to structural damage if left undetected. If you notice any of
              these signs in your Summerlin home, call Red Carpet Plumbing at (702)
              567-9172 or{" "}
              <Link
                href="/contact/"
                className="font-semibold text-brand-primary hover:text-brand-primary-hover"
              >
                request service online
              </Link>
              .
            </p>
          </div>
        </section>

        {/* SECTION 3: HOW NON-INVASIVE SLAB LEAK DETECTION WORKS */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                How Non-Invasive Slab Leak Detection Works in Summerlin
              </h2>
              {/* TODO-BATCH-6: activate /summerlin/leak-detection-repair/ link */}
              {/* once Page 9 is confirmed built. (Page 9 is now built, but the */}
              {/* approved copy below contains no anchor phrase for it, so no link */}
              {/* is injected without approval — the core link remains.) */}
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Locating a slab leak does not require breaking open large sections
                of concrete to search. Red Carpet Plumbing uses professional
                non-invasive detection methods to pinpoint the leak location before
                recommending a repair approach. For a broader overview of our
                detection services, see our{" "}
                <Link
                  href="/slab-leak-detection-repair/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  slab leak detection and repair
                </Link>{" "}
                page.
              </p>
            </div>
            <ul className="mt-10 space-y-5">
              {DETECTION_METHODS.map((m) => (
                <li
                  key={m.label}
                  className="rounded-2xl bg-white p-6 ring-1 ring-brand-surface-alt"
                >
                  <p className="text-base leading-7 text-brand-dark/80">
                    <strong className="font-semibold text-brand-dark">
                      {m.label}.
                    </strong>{" "}
                    {m.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 4: WHAT CAUSES SLAB LEAKS IN SUMMERLIN */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    What Causes Slab Leaks in Summerlin Homes
                  </h2>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-10">
                <ul className="space-y-5">
                  {SLAB_CAUSES.map((c) => (
                    <li
                      key={c.label}
                      className="relative rounded-2xl bg-brand-surface-alt p-6 ring-1 ring-brand-surface-alt"
                    >
                      <p className="text-base leading-7 text-brand-dark/80">
                        <strong className="font-semibold text-brand-dark">
                          {c.label}.
                        </strong>{" "}
                        {c.body}
                      </p>
                    </li>
                  ))}
                </ul>
              </SectionRevealItem>
            </SectionReveal>
          </div>
        </section>

        {/* SECTION 5: SLAB LEAK REPAIR OPTIONS (three visible H3 options) */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Slab Leak Repair Options in Summerlin
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing presents all applicable repair options before
                any work begins. The right option depends on the leak location, the
                age and condition of the affected pipe, whether additional failure
                points are likely on the same line, and what sits above the repair
                area.
              </p>
            </div>
            <div className="mt-10 space-y-6">
              {REPAIR_OPTIONS.map((o) => (
                <article
                  key={o.heading}
                  className="rounded-2xl bg-white p-6 ring-1 ring-brand-surface-alt sm:p-8"
                >
                  <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                    {o.heading}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-brand-dark/80">
                    {o.body}
                    {o.link ? (
                      <>
                        {o.link.pre}
                        <Link
                          href={o.link.href}
                          className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                        >
                          {o.link.text}
                        </Link>
                        {o.link.post}
                      </>
                    ) : null}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6: OUR SLAB LEAK SERVICE PROCESS (HowTo) */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    How Red Carpet Plumbing Handles Slab Leaks in Summerlin
                  </h2>
                </div>
              </SectionRevealItem>
              <SectionRevealItem className="mt-12">
                <ol className="space-y-8">
                  {SLAB_STEPS.map((step, index) => (
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
                Why Summerlin Homeowners Choose Red Carpet Plumbing for Slab Leak
                Service
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
              and re-piping. We also serve communities near Summerlin including{" "}
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
                Slab Leak Detection and Repair in Summerlin &mdash; Frequently
                Asked Questions
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {SUMMERLIN_SLAB_FAQS.map((faq) => (
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
          headline={<>Suspected Slab Leak<br />in Summerlin? Call Red Carpet Plumbing.</>}
          body="Red Carpet Plumbing provides non-invasive slab leak detection and repair throughout Summerlin, NV, including Summerlin North, Summerlin South, The Hills, The Trails, The Arbors, The Canyons, and all Summerlin villages. Call (702) 567-9172 or request service online."
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
