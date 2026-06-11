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

// FLAG: VERIFY before publishing — source-site / project claims surfaced in the
// approved brief and shown on this page. Each instance carries an inline FLAG:
//   - 24/7 emergency leak availability (hero sub-label) — source-site claim
//   - 4.8-star rating, 76 Google reviews — verify before publishing
//   - "Over 40 years" serving the area — verify before publishing
// License #0048585A (C-1 Plumbing and Heating) is the established project value.
// Schema follows the brief: Service.areaServed uses Place -> AdministrativeArea
// (Clark County) -> State (Nevada), NOT City, because Paradise is unincorporated
// Clark County. No AggregateRating. No standalone LocalBusiness schema.

export const metadata: Metadata = {
  title: "Leak Detection and Repair in Paradise, NV | Red Carpet Plumbing",
  description:
    "Non-invasive leak detection and repair in Paradise, NV. Hidden pipe leaks, slab leaks, aging plumbing near UNLV, and hard water corrosion. Red Carpet Plumbing. Call (702) 567-9172.",
  alternates: {
    canonical: "https://redcarpetplumbing.com/paradise/leak-detection-repair/",
  },
  openGraph: {
    title: "Leak Detection and Repair in Paradise, NV | Red Carpet Plumbing",
    description:
      "Non-invasive leak detection for homes and businesses in Paradise, NV. Hidden leaks, slab leaks, aging pipe corrosion. Licensed plumbers. Call (702) 567-9172.",
    url: "https://redcarpetplumbing.com/paradise/leak-detection-repair/",
    siteName: "Red Carpet Plumbing",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

// ---------------------------------------------------------------------------
// FAQ source of truth. The visible FAQ section AND the FAQPage JSON-LD schema
// both derive from this single array, guaranteeing a character-for-character
// match (the established sibling pattern). Do not edit one without the other.
//
// NOTE on Q5: the brief's visible Section 9 answer ends with the sentence "See
// our slab leak detection and repair page for full information." while the
// brief's Block 5 schema text omits it. Guardrail 2 / CLAUDE.md require the
// FAQPage schema to match the VISIBLE FAQ text word-for-word, and the project
// rule treats visible content as the source of truth that schema mirrors. So we
// keep the full visible sentence and let the schema derive from it, which means
// the Q5 schema text carries one sentence more than the brief's Block 5. This is
// a deliberate, documented deviation to satisfy the exact-match requirement.
// Per the sibling pattern, FAQ answers are plain text with no embedded links.
// ---------------------------------------------------------------------------
const PARADISE_LEAK_FAQS = [
  {
    question: "How do I know if I have a hidden water leak in Paradise, NV?",
    answer:
      "The most common signs of a hidden water leak in Paradise include a water meter that keeps moving when all fixtures are off, an unexplained rise in your water bill, the sound of running water inside walls or under floors, warm or wet spots on the floor, and mold or discoloration in areas that are not normally wet. If you notice any of these, contact a licensed plumber for a professional leak inspection.",
  },
  {
    question:
      "How can I check for a water leak using my meter in Paradise, NV?",
    answer:
      "Turn off all water fixtures and appliances in the home. Locate your water meter, which is typically in a box near the street. Write down the current meter reading. Do not use any water for at least 30 minutes. Check the meter again. If the reading has changed or the meter dial has moved, water is flowing somewhere in the system and you likely have a leak. Call Red Carpet Plumbing at (702) 567-9172 for a professional inspection.",
  },
  {
    question:
      "Why are older homes near UNLV at higher risk for hidden leaks?",
    answer:
      "Residential neighborhoods near UNLV and along the Tropicana and Flamingo corridors in Paradise include homes built in the 1960s through 1980s. Plumbing systems in these homes are 40 to 60 years old. Decades of exposure to Las Vegas Valley hard water has thinned copper supply lines and accelerated corrosion in galvanized pipes. Caliche soil movement beneath older slab foundations adds additional stress. The combination of pipe age, hard water exposure, and soil movement makes hidden pipe leaks significantly more common in this housing stock.",
  },
  {
    question: "What is non-invasive leak detection and why does it matter?",
    answer:
      "Non-invasive leak detection uses acoustic listening equipment, thermal imaging cameras, and pressure testing to locate a hidden leak without opening walls, cutting into slabs, or removing flooring until the exact leak location is confirmed. This approach avoids unnecessary demolition and reduces repair scope and cost. Red Carpet Plumbing completes leak detection using non-invasive methods before any repair work begins.",
  },
  {
    question:
      "What is a slab leak and how is it different from other hidden leaks in Paradise?",
    answer:
      "A slab leak is a leak in a pipe running beneath the concrete slab foundation of a home or building. In Paradise, slab leaks are commonly caused by hard water mineral corrosion thinning copper pipes from the inside, and caliche soil movement stressing pipes from the outside. Signs of a slab leak include warm or wet spots on the floor, the sound of running water when all fixtures are off, and a sudden drop in water pressure. Slab leaks require acoustic detection and pressure testing before repair. See our slab leak detection and repair page for full information.",
  },
  {
    question: "Who issues permits for leak repair in Paradise, NV?",
    answer:
      "Plumbing permits in Paradise are issued by Clark County, Nevada. Paradise is an unincorporated community within Clark County, so the City of Las Vegas building department does not have jurisdiction over Paradise properties. For repairs that require a permit, Red Carpet Plumbing handles filing with Clark County.",
  },
];

const HERO_SUBHEADING =
  "Red Carpet Plumbing provides non-invasive leak detection and repair for homes and businesses throughout Paradise, NV. Hidden water leaks in Paradise properties are often caused by hard water mineral corrosion, caliche soil movement beneath slab foundations, and aging copper or galvanized supply lines in the area's mid-century residential neighborhoods. Our licensed plumbers use professional detection equipment to locate leaks without unnecessary demolition, then repair them correctly. Call us or request service online.";

const HERO_TRUST_ITEMS = [
  "Licensed: Nevada Contractor License #0048585A, C-1 Plumbing and Heating",
  "Non-invasive leak detection for homes and businesses in Paradise",
  // FLAG: VERIFY rating and review count before publishing.
  "4.8-star rating, 76 Google reviews",
  // FLAG: VERIFY "over 40 years" before publishing.
  "Serving Paradise and the Las Vegas Valley for over 40 years",
];

// FLAG: source-site claim (24/7 emergency leak availability) — verify before
// final launch.
const HERO_CTA_NOTE = "For emergency leaks, we are available 24/7";

// Section 2 — visible <ul>, AEO featured-snippet target.
const LEAK_WARNING_SIGNS = [
  "A water meter that continues to move when all fixtures are off",
  "An unexplained increase in your water bill without a change in usage",
  "The sound of running water inside walls or under floors when no fixture is on",
  "Warm or wet spots on the floor, particularly on slab-on-grade foundations",
  "Soft, discolored, or bubbling areas on walls, ceilings, or flooring",
  "Mold or mildew growth in areas that are not normally wet",
  "A sudden drop in water pressure throughout the home or building",
  "Rust-colored water from supply lines in older properties",
];

// Section 3 — detection methods (H3 + paragraph styled cards). The video camera
// card carries the inline slab-leak link per the brief.
const DETECTION_METHODS: {
  heading: string;
  body: string;
  link?: { href: string; text: string };
}[] = [
  {
    heading: "Acoustic Leak Detection",
    body: "Acoustic listening equipment detects the sound of water escaping from pressurized pipes beneath slabs, inside walls, and underground. This method allows our plumbers to pinpoint leak locations without opening walls or cutting into slabs until the exact location is confirmed.",
  },
  {
    heading: "Thermal Imaging",
    body: "Thermal cameras detect temperature differences in walls, floors, and ceilings that indicate moisture behind surfaces. This is particularly effective for detecting water accumulation inside wall cavities in Paradise's older residential properties near UNLV and the Tropicana and Flamingo corridors.",
  },
  {
    heading: "Pressure Testing",
    body: "Isolating sections of the plumbing system and testing pressure drop confirms whether a leak is present and helps identify which branch of the system is affected. Pressure testing is commonly used to confirm slab leak presence before acoustic pinpointing.",
  },
  {
    heading: "Video Camera Inspection",
    body: "When a leak is suspected in a drain line or sewer lateral rather than a supply line, we run a camera through the line to locate cracks, joint failures, or root intrusion causing the leak.",
    link: {
      href: "/slab-leak-detection-repair/",
      text: "slab leak detection and repair",
    },
  },
];

// Section 5 — leak detection and repair services (bold label + description
// cards). The slab card carries the inline slab-leak link per the brief.
const LEAK_SERVICES: {
  label: string;
  body: string;
  link?: { href: string; text: string };
}[] = [
  {
    label: "Hidden Supply Line Leak Detection and Repair",
    body: "We locate and repair leaks in supply lines inside walls, under floors, and beneath slabs. Detection is completed with professional equipment before any opening of surfaces.",
  },
  {
    label: "Slab Leak Detection and Repair",
    body: "Leaks in pipes running beneath concrete slab foundations require acoustic and pressure testing to pinpoint before repair. Repair options include spot repair, pipe rerouting, and epoxy pipe lining depending on pipe condition and leak location.",
    link: {
      href: "/slab-leak-detection-repair/",
      text: "slab leak detection and repair",
    },
  },
  {
    label: "Pipe Joint and Connection Leak Repair",
    body: "Deteriorating pipe joints, corroded fittings, and failed connections are located and repaired. In older Paradise properties with aging copper or galvanized lines, joint failure is a common cause of hidden leaks.",
  },
  {
    label: "Water Line Leak Repair",
    body: "We locate and repair leaks in main water supply lines serving the property from the street meter to the home or building.",
  },
  {
    label: "Commercial Leak Detection",
    body: "We provide leak detection and repair services for commercial properties throughout Paradise including properties near the Las Vegas Strip corridor.",
  },
];

// Section 6 — visible <ol>, HowTo schema source.
const LEAK_STEPS = [
  {
    name: "Assess Warning Signs and Call",
    body: "Call (702) 567-9172 or request service online. Describe the warning signs you have noticed. We confirm your location in Paradise and schedule a visit.",
  },
  {
    name: "Non-Invasive Detection",
    body: "When we arrive, we use acoustic listening equipment, thermal imaging, and pressure testing to locate the leak without opening walls or cutting into slabs until the precise location is confirmed. We explain what we find as we go.",
  },
  {
    name: "Pinpoint and Plan the Repair",
    body: "Once the leak is located, we explain the options. For supply line leaks, repair may involve replacing a section of pipe or a fitting. For slab leaks, we discuss spot repair, pipe rerouting, or epoxy lining depending on pipe condition and the extent of the damage.",
  },
  {
    // Permit jurisdiction: Clark County — not City of Las Vegas.
    name: "Complete the Repair and Confirm",
    body: "We complete the repair and test the system to confirm the leak is resolved and water pressure is restored. If the work requires a permit, we handle filing with Clark County.",
  },
];

// Section 8 — area chips, no links (established location-page pattern).
const SERVICE_AREAS = [
  "Las Vegas Strip Corridor",
  "UNLV Area",
  "Tropicana Corridor",
  "Flamingo Corridor",
  "Paradise Valley Estates",
  "East Harmon / Harmon Avenue Corridor",
  "Harry Reid Airport Area",
  "Paradise Road Corridor",
  "Swenson Street Corridor",
  "East Sahara Corridor",
];

// ---------------------------------------------------------------------------
// JSON-LD payloads (5 separate blocks; areaServed Place -> Clark County per
// brief, because Paradise is unincorporated Clark County).
// ---------------------------------------------------------------------------
const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Leak Detection and Repair in Paradise, NV | Red Carpet Plumbing",
  description:
    "Non-invasive leak detection and repair in Paradise, NV. Hidden pipe leaks, slab leaks, aging plumbing near UNLV, and hard water corrosion. Red Carpet Plumbing. Call (702) 567-9172.",
  url: "https://redcarpetplumbing.com/paradise/leak-detection-repair/",
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
      name: "Paradise Plumbing Services",
      item: "https://redcarpetplumbing.com/paradise-plumbing-services/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Leak Detection and Repair in Paradise, NV",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Leak Detection and Repair in Paradise, NV",
  serviceType: "Leak Detection and Repair",
  description:
    "Non-invasive leak detection and repair for homes and businesses in Paradise, NV. Hidden supply line leaks, slab leaks, pipe joint failures, and water line leak repair.",
  provider: {
    "@type": "Plumber",
    name: "Red Carpet Plumbing",
    // FLAG: VERIFY telephone and address (carried forward from approved brief).
    telephone: "+17025679172",
    address: {
      "@type": "PostalAddress",
      streetAddress: "3330 W. Hacienda Ave Ste. 405",
      addressLocality: "Las Vegas",
      addressRegion: "NV",
      postalCode: "89118",
      addressCountry: "US",
    },
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "license",
      name: "Nevada Contractor License #0048585A, C-1 Plumbing and Heating",
    },
  },
  areaServed: {
    "@type": "Place",
    name: "Paradise",
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
  name: "How We Detect and Repair Leaks in Paradise, NV",
  step: LEAK_STEPS.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.name,
    text: s.body,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: PARADISE_LEAK_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function ParadiseLeakDetectionPage() {
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
              label: "Paradise Plumbing Services",
              href: "/paradise-plumbing-services/",
            },
            { label: "Leak Detection and Repair in Paradise, NV" },
          ]}
        />

        {/* SECTION 1: HERO */}
        {/* TODO: no /images/locations/paradise/ assets exist yet — using the */}
        {/* leak-detection-repair service hero as the fallback per the image plan */}
        {/* (matches the sibling Henderson leak page). Swap to a Paradise-specific */}
        {/* hero when the client supplies one. */}
        <HeroSection
          headingLevel="h1"
          headline="Leak Detection and Repair in Paradise, NV"
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
          ctaNote={HERO_CTA_NOTE}
          formSlot={<QuoteFormPlaceholder title="Get Leak Detection Help" />}
          backgroundImage={{
            src: "/images/services/leak-detection-repair/hero.webp",
            alt: "Leak detection service in Paradise, NV",
          }}
        />

        {/* SECTION 2: WARNING SIGNS OF A HIDDEN LEAK (AEO target) */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Warning Signs of a Hidden Water Leak in Paradise, NV
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Hidden leaks in Paradise properties can develop slowly and cause
                significant damage before they become visible. If you notice any
                of the following, contact a licensed plumber for a leak
                inspection. For active or emergency leaks, see{" "}
                <Link
                  href="/emergency-plumbing/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  emergency plumbing
                </Link>
                .
              </p>
            </div>
            <div className="mt-8 rounded-2xl border-l-4 border-brand-primary bg-brand-surface-alt p-6 sm:p-8">
              <ul className="space-y-3">
                {LEAK_WARNING_SIGNS.map((item) => (
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

        {/* SECTION 3: HOW WE DETECT HIDDEN LEAKS (H3 + paragraph cards) */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                How We Detect Hidden Leaks in Paradise, NV
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Finding a hidden leak without unnecessary demolition requires
                professional equipment and a systematic process. Red Carpet
                Plumbing uses non-invasive detection methods that pinpoint the
                leak location before any repair work begins. For a full overview
                of our services, see our{" "}
                <Link
                  href="/leak-detection-repair/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  leak detection and repair
                </Link>{" "}
                page.
              </p>
            </div>
            <div className="mt-10 space-y-6">
              {DETECTION_METHODS.map((m) => (
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
                        {" "}
                        Learn more about{" "}
                        <Link
                          href={m.link.href}
                          className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                        >
                          {m.link.text}
                        </Link>
                        .
                      </>
                    ) : null}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: WHY PIPE LEAKS ARE COMMON (H3 + paragraph cards) */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Why Pipe Leaks Are Common in Paradise, NV
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Paradise, NV has a combination of factors that make hidden
                    pipe leaks more common than in newer Las Vegas Valley
                    communities. Understanding these factors helps homeowners
                    recognize early warning signs and act before a small leak
                    becomes a large repair.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-10">
                <div className="space-y-6">
                  <article className="rounded-2xl bg-brand-surface-alt p-6 ring-1 ring-brand-surface-alt sm:p-8">
                    <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                      Hard Water Mineral Corrosion
                    </h3>
                    <p className="mt-3 text-base leading-7 text-brand-dark/80">
                      Las Vegas Valley water carries 17 to 24 grains per gallon of
                      dissolved minerals, approximately 280 ppm. This is among the
                      hardest municipal water in the United States. Over time,
                      mineral deposits corrode the interior surfaces of copper and
                      galvanized supply lines from the inside, thinning pipe walls
                      and creating small leaks that expand over time. Hard water
                      corrosion is the leading cause of hidden leaks in Las Vegas
                      Valley residential plumbing.
                    </p>
                  </article>

                  <article className="rounded-2xl bg-brand-surface-alt p-6 ring-1 ring-brand-surface-alt sm:p-8">
                    <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                      Caliche and Expansive Clay Soil Movement
                    </h3>
                    <p className="mt-3 text-base leading-7 text-brand-dark/80">
                      Caliche and expansive clay soils throughout Clark County
                      shift with temperature changes and seasonal rainfall. This
                      ground movement stresses pipes embedded in or running
                      beneath concrete slab foundations. Paradise properties sit
                      on the same soil conditions as the broader Las Vegas Valley.
                      Repeated soil movement over years causes micro-fractures in
                      copper and older pipe materials that eventually develop into
                      active leaks.
                    </p>
                  </article>

                  <article className="rounded-2xl bg-brand-surface-alt p-6 ring-1 ring-brand-surface-alt sm:p-8">
                    <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                      Aging Plumbing in Mid-Century Paradise Neighborhoods
                    </h3>
                    <p className="mt-3 text-base leading-7 text-brand-dark/80">
                      Residential neighborhoods near the UNLV campus and along the
                      Tropicana and Flamingo corridors in Paradise include homes
                      built in the 1960s through 1980s. These properties have
                      plumbing systems 40 to 60 years old. Copper supply lines
                      installed in that era have thinned from decades of hard water
                      exposure. Some older properties in this area may still have
                      galvanized steel supply lines, which corrode from the inside
                      out and are well past typical service life. Properties with
                      aging plumbing are at significantly higher risk for hidden
                      pipe leaks and slab leaks. For properties with failing supply
                      lines, see our{" "}
                      <Link
                        href="/water-pipe-repair-replacement/"
                        className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                      >
                        water pipe repair and replacement
                      </Link>{" "}
                      services.
                    </p>
                  </article>

                  <article className="rounded-2xl bg-brand-surface-alt p-6 ring-1 ring-brand-surface-alt sm:p-8">
                    <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                      Closed-Loop Pressure System Stress
                    </h3>
                    <p className="mt-3 text-base leading-7 text-brand-dark/80">
                      Most Paradise homes operate on a closed-loop plumbing system
                      due to backflow preventers at the street meter. Without a
                      properly functioning thermal expansion tank, pressure spikes
                      caused by water heating cycles stress pipe joints and
                      connections repeatedly over time. This elevated, fluctuating
                      pressure is a contributing factor to pin-hole leaks and joint
                      failures in Paradise supply lines.
                    </p>
                  </article>
                </div>
              </SectionRevealItem>
            </SectionReveal>
          </div>
        </section>

        {/* SECTION 5: LEAK DETECTION AND REPAIR SERVICES (labeled card blocks) */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Leak Detection and Repair Services We Provide in Paradise, NV
              </h2>
            </div>
            <ul className="mt-10 space-y-5">
              {LEAK_SERVICES.map((s) => (
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
                        See our{" "}
                        <Link
                          href={s.link.href}
                          className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                        >
                          {s.link.text}
                        </Link>{" "}
                        page for full detail.
                      </>
                    ) : null}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 6: HOW WE DETECT AND REPAIR LEAKS (HowTo) */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    How We Detect and Repair Leaks in Paradise, NV
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    When you contact Red Carpet Plumbing for leak detection in
                    Paradise, here is our process.
                  </p>
                </div>
              </SectionRevealItem>
              <SectionRevealItem className="mt-12">
                <ol className="space-y-8">
                  {LEAK_STEPS.map((step, index) => (
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

        {/* SECTION 7: MID-PAGE CTA (charcoal band) */}
        <section className="bg-brand-charcoal text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Suspect a Hidden Water Leak in Paradise, NV?
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/80">
                  Do not wait on a suspected leak. Water damage from hidden leaks
                  gets worse over time and can cause mold, foundation damage, and
                  flooring loss. Red Carpet Plumbing provides non-invasive leak
                  detection throughout Paradise. For urgent or emergency leaks,
                  call now or see{" "}
                  <Link
                    href="/paradise/emergency-plumbing/"
                    className="font-semibold text-white underline underline-offset-4 hover:text-white/80"
                  >
                    emergency plumbing in Paradise
                  </Link>
                  .
                </p>
              </div>
              <div className="flex flex-col items-start gap-4 lg:items-end">
                <a
                  href="tel:+17025679172"
                  className="inline-flex min-h-14 items-center justify-center rounded-lg bg-brand-primary px-8 text-lg font-semibold text-white shadow-sm hover:bg-brand-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary motion-safe:transition-colors motion-safe:active:scale-[0.97]"
                >
                  Call Now: (702) 567-9172
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8: SERVICE AREAS */}
        <section className="bg-brand-charcoal text-white">
          <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10 lg:pb-24 xl:px-12">
            <div className="max-w-3xl text-left">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Leak Detection Service Areas in Paradise, NV
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/85">
                Red Carpet Plumbing provides leak detection and repair throughout
                Paradise and the surrounding Las Vegas Valley. Service areas
                within Paradise include:
              </p>
            </div>

            <ul className="mt-10 flex flex-wrap gap-3">
              {SERVICE_AREAS.map((area) => (
                <li key={area}>
                  <span className="block rounded-lg border border-white/10 bg-white/5 px-5 py-3 font-medium text-white/85">
                    {area}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-base leading-7 text-white/80">
              If your neighborhood is not listed, call (702) 567-9172 to confirm
              coverage. For related services, see{" "}
              <Link
                href="/paradise/drain-cleaning/"
                className="font-semibold text-white underline underline-offset-4 hover:text-white/80"
              >
                drain cleaning in Paradise
              </Link>{" "}
              and{" "}
              <Link
                href="/paradise/water-heater-repair-installation/"
                className="font-semibold text-white underline underline-offset-4 hover:text-white/80"
              >
                water heater repair in Paradise
              </Link>
              . For broader coverage, see{" "}
              <Link
                href="/las-vegas-plumbing-services/"
                className="font-semibold text-white underline underline-offset-4 hover:text-white/80"
              >
                Las Vegas plumbing services
              </Link>{" "}
              and our{" "}
              <Link
                href="/paradise-plumbing-services/"
                className="font-semibold text-white underline underline-offset-4 hover:text-white/80"
              >
                Paradise plumbing services
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
                Frequently Asked Questions About Leak Detection in Paradise, NV
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {PARADISE_LEAK_FAQS.map((faq) => (
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
          headline="Ready for Non-Invasive Leak Detection in Paradise, NV?"
          body="Do not let a hidden leak cause more damage. Red Carpet Plumbing provides professional, non-invasive leak detection and repair throughout Paradise and the Las Vegas Valley. Call now or request service online."
          primaryCTA={{
            label: "Call Now: (702) 567-9172",
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
