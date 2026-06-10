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
// SCHEMA NOTE: Spring Valley is an unincorporated Clark County community; it is
// not an incorporated city. Per the Batch 6 schema normalization,
// Service.areaServed uses Place -> AdministrativeArea (Clark County) -> State
// (Nevada), matching the Paradise and Summerlin pages. Plain City is reserved
// for incorporated cities (Las Vegas, Henderson, North Las Vegas). Provider
// Plumber (name, url, telephone). No AggregateRating/Review. No sameAs.

export const metadata: Metadata = {
  title:
    "Slab Leak Detection and Repair in Spring Valley, NV | Red Carpet Plumbing",
  description:
    "Slab leak detection and repair in Spring Valley, NV. Non-invasive detection, all repair options explained. Galvanized pipe slab leaks. NV #0048585A. (702) 567-9172.",
  alternates: {
    canonical:
      "https://redcarpetplumbing.com/spring-valley/slab-leak-detection-repair/",
  },
  openGraph: {
    title:
      "Slab Leak Detection and Repair in Spring Valley, NV | Red Carpet Plumbing",
    description:
      "Slab leak detection and repair in Spring Valley, NV. Non-invasive detection, all repair options explained. Galvanized pipe slab leaks. NV #0048585A. (702) 567-9172.",
    url: "https://redcarpetplumbing.com/spring-valley/slab-leak-detection-repair/",
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
const SV_SLAB_FAQS = [
  {
    question: "What are the signs of a slab leak in a Spring Valley home?",
    answer:
      "The most common signs of a slab leak in a Spring Valley home are warm or hot spots on floors, the sound of running water when all fixtures are off, an unexplained increase in your water bill, damp or wet flooring without an obvious source, cracks appearing in walls or flooring, low water pressure throughout the home, and mold or mildew odor at floor level. In older Desert Inn and West Sahara corridor homes with galvanized supply lines, a slab leak can develop and release significant water faster than a copper pinhole leak, making these warning signs important to act on promptly.",
  },
  {
    question: "What causes slab leaks in Spring Valley homes?",
    answer:
      "The primary causes in Spring Valley are galvanized steel supply line corrosion in older Desert Inn and West Sahara corridor homes built in the 1970s through 1990s, where decades of internal corrosion have thinned pipe walls to the point of failure; hard water mineral corrosion thinning copper supply lines in same-era homes over 30 to 45 years; caliche and expansive clay soil movement beneath slab foundations that stresses pipes over time; and closed-loop pressure cycling that adds fatigue stress to already-weakened pipe materials.",
  },
  {
    question: "How is a slab leak detected without breaking up the floor?",
    answer:
      "Professional slab leak detection uses acoustic sensors that amplify the sound of pressurized water escaping beneath the slab, pressure testing to confirm and isolate water loss to a specific line, and thermal imaging to identify temperature differences caused by hot water leaks. These non-invasive methods locate the leak precisely before any concrete cutting begins.",
  },
  {
    question: "What are my options for slab leak repair in Spring Valley?",
    answer:
      "The three main options are spot repair through concrete, which involves cutting the slab at the leak location and repairing the damaged pipe section; pipe rerouting, which bypasses the damaged pipe entirely by running a new line through walls or above-slab pathways; and epoxy pipe lining, which seals cracks from the inside without excavation. For older Spring Valley homes with galvanized supply lines, pipe rerouting is typically the more durable long-term solution because it removes the corroded galvanized line from beneath the slab entirely rather than leaving the remaining corroded pipe in place.",
  },
  {
    question:
      "Should I choose pipe rerouting or spot repair for a slab leak in an older Spring Valley home with galvanized pipes?",
    answer:
      "For older Spring Valley homes with galvanized supply lines that have been in place for 30 to 50 years, pipe rerouting is typically the more durable recommendation. When a galvanized line beneath the slab fails, the surrounding pipe shares the same corrosion history; a spot repair addresses the active leak but leaves the rest of the corroded system beneath the slab, where additional failures are likely. Pipe rerouting removes the galvanized line from beneath the foundation entirely and eliminates it as a source of future slab leaks. Red Carpet Plumbing will assess your specific situation and explain both options before any work begins.",
  },
  {
    question: "Does slab leak repair in Spring Valley require a permit?",
    answer:
      "Slab leak repair involving concrete cutting and pipe repair or rerouting typically requires a permit. Spring Valley is an unincorporated community in Clark County, Nevada, so permits and inspections are handled through Clark County, not the City of Las Vegas. Red Carpet Plumbing holds NV License #0048585A and works within the applicable Clark County permit process for your address.",
  },
];

const HERO_SUBHEADING =
  "Red Carpet Plumbing provides non-invasive slab leak detection and repair throughout Spring Valley, Nevada, including the Desert Inn and West Sahara corridors and surrounding neighborhoods. We use acoustic sensors, pressure testing, and thermal imaging to locate slab leaks precisely before any repair begins, and we explain all repair options before starting work. NV Contractor License #0048585A.";

const HERO_TRUST_ITEMS = [
  "NV Licensed, #0048585A",
  "Non-Invasive Slab Leak Detection",
  "All Repair Options Explained",
  "Transparent Pricing, No Hidden Fees",
];

// Section 2 — visible <ul>, slab-leak-specific warning signs (distinct from the
// general hidden-leak list on the leak-detection page).
const SLAB_WARNING_SIGNS = [
  "Warm or hot spots on the floor, particularly on concrete or tile",
  "The sound of running water when all fixtures and appliances are off",
  "An unexplained and persistent increase in your water bill",
  "Damp or wet flooring without an obvious visible source",
  "Cracks appearing in walls or flooring",
  "Low water pressure throughout the home with no other explanation",
  "Mold or mildew odor at floor level",
];

// Section 3 — non-invasive detection methods (bold label + body). Galvanized
// context per the Spring Valley brief.
const DETECTION_METHODS = [
  {
    label: "Acoustic sensors",
    body: "Acoustic detection equipment amplifies the sound of pressurized water escaping from pipes beneath the slab. For older Spring Valley homes with galvanized supply lines, acoustic sensors help identify the active failure point precisely along a line that may have multiple points of corrosion-related weakness.",
  },
  {
    label: "Pressure testing",
    body: "Pressure testing isolates which section of the plumbing system is losing pressure and confirms an active leak. For homes with multiple potential failure points across an aging galvanized system, pressure testing narrows the detection area before acoustic work begins.",
  },
  {
    label: "Thermal imaging",
    body: "Hot water line slab leaks release heat that travels upward through the slab. Thermal imaging cameras detect these warm spots, helping narrow the search area before acoustic sensors confirm the precise location.",
  },
];

// Section 4 — what causes slab leaks (bold label + body). Galvanized leads as the
// primary Spring Valley differentiator.
const SLAB_CAUSES = [
  {
    label: "Galvanized steel pipe corrosion beneath the slab",
    body: "Homes built along the Desert Inn and West Sahara corridors primarily in the 1970s through 1990s were often constructed with galvanized steel supply lines, including lines running beneath and embedded in the concrete slab. Galvanized pipe corrodes from the inside out. After 30 to 50 years of exposure to Las Vegas Valley hard water, the pipe walls in these systems have thinned significantly throughout their length. When a galvanized supply line beneath the slab reaches the end of its service life, it can fail with relatively little external warning, and the volume of water released by a failed galvanized line can be greater than from a copper pinhole leak. This makes galvanized pipe slab leaks among the more serious plumbing events in older Spring Valley homes. A slab leak on a galvanized system is a strong indicator that the broader supply system needs assessment, as the surrounding pipe shares the same corrosion history.",
  },
  {
    label: "Hard water mineral corrosion in copper supply lines",
    body: "Spring Valley homes built in the 1980s and 1990s that have copper supply lines have been exposed to Las Vegas Valley hard water for 30 to 45 years. Las Vegas Valley water carries approximately 280 parts per million of dissolved minerals, among the hardest municipal water in the United States. Calcium and magnesium deposits thin copper pipe walls continuously from the inside out, eventually causing pinhole failures in lines running beneath the slab.",
  },
  {
    label: "Caliche and expansive clay soil movement",
    body: "Caliche and expansive clay soils beneath Spring Valley slab foundations shift with temperature changes and seasonal rainfall. This soil movement creates ongoing mechanical stress on pipes beneath the slab, contributing to pipe joint separation and stress fractures over years of cycling. This effect compounds the existing corrosion risk in older Spring Valley homes.",
  },
  {
    label: "Closed-loop pressure cycling",
    body: "Most Spring Valley homes operate on a closed-loop plumbing system due to backflow preventers at the street meter. Thermal expansion from water heating and pressure spikes in closed systems create repeated stress on pipe joints and connections beneath the slab, accelerating fatigue in pipes already weakened by internal corrosion.",
  },
];

// Section 5 — repair options (H3 + body, optional inline link). Rendered as three
// visible H3 sections per guardrail 11. Galvanized context adjusts the spot
// repair and rerouting guidance. Both inline links target built CORE service
// pages; the Spring Valley-specific re-piping page is not built yet (TODO-BATCH-6,
// do not link it).
const REPAIR_OPTIONS: {
  heading: string;
  body: string;
  link?: { pre: string; href: string; text: string; post: string };
}[] = [
  {
    heading: "Spot repair through concrete",
    body: "Spot repair involves cutting the concrete slab directly above the leak location, repairing or replacing the damaged pipe section, and patching the concrete. For isolated leaks in pipes that are otherwise in good condition, spot repair is a focused and cost-effective approach. For older Spring Valley homes with galvanized supply lines that have been in place for 30 to 50 years, spot repair is typically not the recommended long-term solution. When a galvanized line beneath the slab fails, the surrounding pipe shares the same decades of corrosion history; a spot repair addresses the active leak but leaves the rest of the corroded galvanized system in place beneath the slab.",
    link: {
      pre: " See our ",
      href: "/water-pipe-repair-replacement/",
      text: "water pipe repair and replacement",
      post: " page for targeted pipe repair options where appropriate.",
    },
  },
  {
    // /spring-valley/re-piping/ (Page 17) is now built and committed, so per the
    // Page 17 brief this rerouting link is activated to the Spring Valley-specific
    // re-piping page. The visible anchor text is unchanged.
    heading: "Pipe rerouting",
    body: "Pipe rerouting bypasses the failed section entirely by running a new supply line through walls or above-slab pathways, removing the aging pipe from beneath the foundation. For older Spring Valley homes where galvanized supply lines have been corroding beneath the slab for 30 to 50 years, pipe rerouting is the more durable long-term solution. It eliminates the corroded galvanized line as a source of future slab leaks and avoids leaving a system of compromised pipe in place underground.",
    link: {
      pre: " See our ",
      href: "/spring-valley/re-piping/",
      text: "re-piping",
      post: " page for homes where the full supply system is ready for replacement.",
    },
  },
  {
    heading: "Epoxy pipe lining",
    body: "Epoxy lining seals cracks and pinhole leaks from inside the pipe without excavation. This method works best for pipes with localized damage where the overall pipe structure is still intact. For heavily corroded galvanized lines with significant interior narrowing, epoxy lining is generally not appropriate.",
  },
];

// Section 6 — visible <ol>, HowTo schema source.
const SLAB_STEPS = [
  {
    name: "Detect and locate the slab leak precisely",
    body: "We use acoustic sensors, pressure testing, and thermal imaging to locate the slab leak to within a few inches. For older Spring Valley homes with galvanized supply lines, accurate detection is essential because the repair approach depends significantly on the pipe material and the extent of corrosion along the affected line.",
  },
  {
    name: "Assess the pipe condition and repair options",
    body: "We assess the age and material of the affected pipe, the severity of the leak, whether additional failure points are likely on the same line, and what sits above the leak location. For galvanized supply lines in older Spring Valley homes, this assessment shapes a materially different repair recommendation than for copper-pipe homes of the same age.",
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
  "Local Las Vegas Valley plumbing company familiar with Spring Valley's galvanized supply line conditions, Desert Inn and West Sahara corridor pipe vintage, and caliche soil slab leak risks",
  "Non-invasive detection using acoustic sensors, pressure testing, and thermal imaging",
  "Honest repair option guidance that accounts for galvanized pipe condition, not a one-size-fits-all approach",
  // FLAG: VERIFY license number before publishing.
  "Licensed plumbers, NV License #0048585A",
  "Transparent pricing with no hidden fees",
  // FLAG: VERIFY "over 40 years" before publishing.
  "Over 40 years serving the Las Vegas Valley",
  // FLAG: VERIFY rating and review count before publishing.
  "4.8-star rating across 76 Google reviews",
];

// ---------------------------------------------------------------------------
// JSON-LD payloads. Service.areaServed uses Place -> AdministrativeArea (Clark
// County) -> State (Nevada) because Spring Valley is unincorporated. Do NOT use
// "@type": "City".
// ---------------------------------------------------------------------------
const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Slab Leak Detection and Repair in Spring Valley, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides slab leak detection and repair in Spring Valley, NV. Non-invasive detection, all repair options explained. Galvanized pipe slab leaks. Licensed plumbers.",
  url: "https://redcarpetplumbing.com/spring-valley/slab-leak-detection-repair/",
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
      name: "Slab Leak Detection and Repair in Spring Valley",
      item: "https://redcarpetplumbing.com/spring-valley/slab-leak-detection-repair/",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Slab Leak Detection and Repair in Spring Valley, NV",
  serviceType: "Slab Leak Detection and Repair",
  description:
    "Red Carpet Plumbing provides slab leak detection and repair for Spring Valley homes using acoustic sensors, pressure testing, and thermal imaging. Repair options include spot repair, pipe rerouting, and epoxy pipe lining.",
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
  name: "How Red Carpet Plumbing Handles Slab Leaks in Spring Valley",
  description:
    "The process Red Carpet Plumbing follows for slab leak detection and repair in Spring Valley, NV.",
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
  mainEntity: SV_SLAB_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function SpringValleySlabLeakPage() {
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
            { label: "Slab Leak Detection and Repair in Spring Valley" },
          ]}
        />

        {/* SECTION 1: HERO */}
        <HeroSection
          headingLevel="h1"
          headline="Slab Leak Detection and Repair in Spring Valley, NV"
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
            alt: "Slab leak detection and repair in Spring Valley, NV",
          }}
        />

        {/* SECTION 2: WARNING SIGNS (slab-leak-specific) */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Signs of a Slab Leak in Your Spring Valley Home
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Slab leaks in Spring Valley occur when supply lines running
                beneath the concrete slab develop failures. In older Desert Inn
                and West Sahara corridor homes with galvanized supply lines, a
                slab leak can release more water more quickly than a copper
                pinhole leak, making prompt detection especially important.
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
              If you notice any of these signs in your Spring Valley home, call
              Red Carpet Plumbing at (702) 567-9172 or{" "}
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
                How Non-Invasive Slab Leak Detection Works in Spring Valley
              </h2>
              {/* Page 15 (/spring-valley/leak-detection-repair/) is built and */}
              {/* validated, so its anchor is activated below per the brief. */}
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Locating a slab leak does not require breaking open large
                sections of concrete to search. Red Carpet Plumbing uses
                professional non-invasive detection methods to pinpoint the leak
                location before recommending a repair approach. For a broader
                overview of our detection services, see our{" "}
                <Link
                  href="/slab-leak-detection-repair/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  slab leak detection and repair
                </Link>{" "}
                page and our{" "}
                <Link
                  href="/spring-valley/leak-detection-repair/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  leak detection in Spring Valley
                </Link>{" "}
                services.
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

        {/* SECTION 4: WHAT CAUSES SLAB LEAKS IN SPRING VALLEY */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    What Causes Slab Leaks in Spring Valley Homes
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
                Slab Leak Repair Options in Spring Valley
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing presents all applicable repair options before
                any work begins. The right option depends on the leak location,
                the pipe material and its overall condition, whether additional
                failure points are likely on the same line, and what sits above
                the repair area.
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
                    How Red Carpet Plumbing Handles Slab Leaks in Spring Valley
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
                Why Spring Valley Homeowners Choose Red Carpet Plumbing for Slab
                Leak Service
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
            {/* Pages 13, 14, and 15 are built and validated, so drain cleaning, */}
            {/* water heater repair, and leak detection in Spring Valley are all */}
            {/* activated anchors below alongside emergency plumbing. */}
            <p className="mt-8 text-base leading-7 text-brand-dark/80">
              Red Carpet Plumbing provides full{" "}
              <Link
                href="/spring-valley-plumbing-services/"
                className="font-semibold text-brand-primary hover:text-brand-primary-hover"
              >
                Spring Valley plumbing services
              </Link>{" "}
              including{" "}
              <Link
                href="/spring-valley/emergency-plumbing/"
                className="font-semibold text-brand-primary hover:text-brand-primary-hover"
              >
                emergency plumbing in Spring Valley
              </Link>
              ,{" "}
              <Link
                href="/spring-valley/drain-cleaning/"
                className="font-semibold text-brand-primary hover:text-brand-primary-hover"
              >
                drain cleaning in Spring Valley
              </Link>
              ,{" "}
              <Link
                href="/spring-valley/water-heater-repair-installation/"
                className="font-semibold text-brand-primary hover:text-brand-primary-hover"
              >
                water heater repair in Spring Valley
              </Link>
              , and{" "}
              <Link
                href="/spring-valley/leak-detection-repair/"
                className="font-semibold text-brand-primary hover:text-brand-primary-hover"
              >
                leak detection in Spring Valley
              </Link>
              . We also serve communities near Spring Valley including{" "}
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
          </div>
        </section>

        {/* SECTION 8: FAQ */}
        <section className="bg-white">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Slab Leak Detection and Repair in Spring Valley &mdash;
                Frequently Asked Questions
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {SV_SLAB_FAQS.map((faq) => (
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
          headline="Suspected Slab Leak in Spring Valley? Call Red Carpet Plumbing."
          body="Red Carpet Plumbing provides non-invasive slab leak detection and repair throughout Spring Valley, NV, including the Desert Inn and West Sahara corridors and surrounding neighborhoods. Call (702) 567-9172 or request service online."
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
