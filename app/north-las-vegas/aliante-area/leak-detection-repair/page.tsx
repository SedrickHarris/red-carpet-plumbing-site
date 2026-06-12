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
// Active FLAGs for this page (source-only; none appear as unverified claims in
// rendered copy beyond those noted):
//   - telephone (+17025679172) in serviceSchema.provider — VERIFY before launch.
//   - "Transparent Pricing, No Hidden Fees" hero trust item + ctaNote and the
//     Why-Choose pricing bullet — source-site claims, VERIFY before launch.
//   - License #0048585A is a verified business claim.
//
// Schema follows the established site-wide service-location pattern with the
// P43 brief variant for the Service block (provider includes PostalAddress per
// brief): Plumber provider; areaServed Place (Aliante, North Las Vegas, Nevada)
// + containedInPlace City (North Las Vegas) + containedInPlace State Nevada;
// WebPage isPartOf WebSite; 5 separate JsonLd blocks in order WebPage ->
// BreadcrumbList -> Service -> HowTo -> FAQPage; HowTo for the visible process
// steps. No AggregateRating schema. NO sameAs on this service-location page.
//
// Aliante is copper-only, 2000-2008 construction. This is an Aliante-only
// refinement of the NLV leak-detection parent: single-segment copper /
// first-service-cycle narrative. Do NOT add galvanized, polybutylene, Kitec,
// dual-vintage, or commercial-corridor (Craig Road / Cheyenne / Losee) content.
// Permit/jurisdiction references are the City of North Las Vegas, not Clark
// County.
//
// Title, WebPage schema name, OG title, H1, and breadcrumb #4 all use the
// consistent "in the Aliante Area of North Las Vegas, NV" form (approved).
//
// Hero uses hero.webp: for leak-detection-repair, hero.webp (118KB) is the
// higher-resolution asset and card.webp (15KB) is the smaller card asset, so
// hero.webp is correct here (unlike the WH/emergency siblings where hero.webp
// was the low-res Batch 3 asset).
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title:
    "Leak Detection and Repair in the Aliante Area of North Las Vegas, NV | Red Carpet Plumbing",
  // NOTE: approved description exceeds the ~160 char SEO target (~234 chars).
  // Used verbatim per the approved brief; flag for trim consideration at launch.
  description:
    "Red Carpet Plumbing provides non-invasive leak detection and repair in the Aliante area of North Las Vegas, NV. Acoustic sensor detection, thermal imaging, and pressure testing for copper pipe leaks. NV License #0048585A. (702) 567-9172.",
  alternates: {
    canonical:
      "https://redcarpetplumbing.com/north-las-vegas/aliante-area/leak-detection-repair/",
  },
  openGraph: {
    title:
      "Leak Detection and Repair in the Aliante Area of North Las Vegas, NV | Red Carpet Plumbing",
    description:
      "Non-invasive leak detection for Aliante area homes in North Las Vegas. Copper pipe leaks, underground supply lines, wall and ceiling leaks, and slab leak detection. Licensed plumbers. Call (702) 567-9172.",
    url: "https://redcarpetplumbing.com/north-las-vegas/aliante-area/leak-detection-repair/",
    siteName: "Red Carpet Plumbing",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

// Hero trust strip (4 items). Rendered inside the hero via trustItems, matching
// the P40-P42 Aliante cluster pattern.
const ALIANTE_LEAK_TRUST = [
  "Non-Invasive Detection",
  "NV Licensed, #0048585A",
  "Serving Aliante and North Las Vegas",
  // FLAG: VERIFY — "Transparent Pricing, No Hidden Fees" is a source-site claim.
  "Transparent Pricing, No Hidden Fees",
];

// ---------------------------------------------------------------------------
// Section 3 -- why copper pipes leak in Aliante homes (H3 title + body).
// Copper-only 2000-2008 framing; no galvanized/dual-vintage narrative.
// ---------------------------------------------------------------------------
const ALIANTE_LEAK_CAUSES = [
  {
    title: "Hard Water Mineral Corrosion in First-Service-Cycle Copper",
    body: "The Las Vegas Valley receives municipal water from Lake Mead at 17 to 24 grains per gallon (approximately 280 parts per million), placing it among the hardest municipal water supplies in the United States. Over time, mineral buildup inside copper pipe walls accelerates interior corrosion. For Aliante homes now in the 17 to 25 year range, this sustained hard water exposure thins pipe walls gradually, creating conditions for pinhole leaks and supply line failures that are not visible from the surface.",
  },
  {
    title: "Pinhole Leaks as an Early Warning Signal",
    body: "Pinhole leaks are small but significant. A single pinhole leak in a copper supply line running beneath a slab or inside a wall may not produce obvious water staining right away, but it can cause ongoing damage to insulation, framing, and foundation materials before any visible sign appears. In Aliante homes, where the copper plumbing is reaching a predictable age-related thinning threshold, a pinhole leak is often the first sign that the surrounding pipe section has been degraded by hard water corrosion and deserves professional assessment.",
  },
  {
    title: "Caliche Soil Movement and Slab Foundation Stress",
    body: "The Aliante area sits on caliche and expansive soil common throughout the Las Vegas Valley. Caliche hardens and contracts with temperature and moisture changes, and the soil beneath slab foundations in North Las Vegas shifts seasonally. This movement stresses pipes running beneath and through concrete slab foundations, contributing to micro-fractures and fitting stress over years of repeated ground movement.",
  },
  {
    title: "Closed-Loop Pressure and Thermal Expansion",
    body: "Most Aliante homes operate on closed-loop plumbing systems due to backflow preventers installed at the street meter. In a closed-loop system, thermal expansion from the water heater has nowhere to go when the water heater heats a tank. Without a thermal expansion tank in place, repeated pressure spikes cycle through the supply system each time the water heater fires. Over 17 to 25 years, this cumulative pressure stress contributes to fitting fatigue and pipe wall weakening.",
  },
];

// ---------------------------------------------------------------------------
// Section 4 -- non-invasive leak detection services (bold label + body).
// The slab card links to the built Aliante slab leak page
// (/north-las-vegas/aliante-area/slab-leak-detection-repair/).
// ---------------------------------------------------------------------------
const ALIANTE_LEAK_SERVICES: {
  label: string;
  body: string;
  link?: { pre: string; href: string; text: string; post: string };
}[] = [
  {
    label: "Electronic Leak Detection",
    body: "We use professional acoustic sensor equipment to listen for the acoustic signature of active water leaks beneath slabs, inside walls and ceilings, and in underground supply lines. Acoustic detection locates leaks to within a few inches without opening surfaces unnecessarily.",
  },
  {
    label: "Wall and Ceiling Leak Detection",
    body: "Corroded supply line fittings and failed pipe connections inside wall and ceiling cavities can cause ongoing structural and moisture damage before any surface sign appears. We use acoustic and moisture detection methods to locate wall and ceiling leaks precisely.",
  },
  {
    label: "Underground Supply Line Leak Detection",
    body: "Underground supply lines connect the meter to the home and run through the yard and under the foundation. Leaks on these lines increase water bills steadily without any visible interior sign. We use acoustic sensors and pressure testing to locate underground supply line leaks in copper plumbing.",
  },
  {
    label: "Slab Leak Detection",
    body: "Slab leaks in Aliante homes are most often copper supply line failures beneath the concrete foundation. We use acoustic sensors, thermal imaging, and pressure testing to locate slab leaks precisely.",
    // ACTIVATED: P44 built and staged
    link: {
      pre: " See our ",
      href: "/north-las-vegas/aliante-area/slab-leak-detection-repair/",
      text: "slab leak detection and repair",
      post: " services for more information.",
    },
  },
  {
    label: "Pressure Testing and Leak Confirmation",
    body: "Pressure testing isolates plumbing zones to confirm whether a leak is active and to help narrow the location when other detection signals are inconclusive. We use pressure testing as part of our standard detection process and as a standalone service when homeowners need confirmation of a suspected leak.",
  },
];

// ---------------------------------------------------------------------------
// Section 5 -- detection process (HowTo schema source of truth). Visible
// numbered steps and the HowTo JSON-LD both derive from this single array.
// ---------------------------------------------------------------------------
const ALIANTE_LEAK_STEPS = [
  {
    name: "Inspect visible plumbing and confirm symptoms",
    body: "We review the symptoms you are seeing, inspect accessible fixtures, meter readings, and any visible signs of moisture or staining to identify where the leak is most likely occurring.",
  },
  {
    name: "Apply non-invasive detection equipment",
    body: "We use acoustic sensors, thermal imaging, and pressure testing to locate the hidden leak without opening walls, ceilings, or concrete until we know the exact target area.",
  },
  {
    name: "Confirm the leak location",
    body: "We confirm the leak location to within a few inches and assess the surrounding pipe condition before recommending a repair approach.",
  },
  {
    name: "Present repair options and complete the repair",
    body: "We explain the repair options, confirm the approach with you, and complete the repair to Nevada contractor standards.",
  },
];

// ---------------------------------------------------------------------------
// Section 6 -- warning signs of a hidden leak (plain list).
// ---------------------------------------------------------------------------
const ALIANTE_LEAK_SIGNS = [
  "Unexplained increase in your monthly water bill",
  "Sound of running water when all fixtures are off",
  "Warm or wet spots on floors",
  "Discoloration, staining, or soft spots on walls or ceilings",
  "Musty or mildew smell in areas without known moisture sources",
  "Meter continues to move when all water use is stopped",
];

// ---------------------------------------------------------------------------
// Section 7 -- why Aliante homeowners choose Red Carpet Plumbing.
// ---------------------------------------------------------------------------
// FLAG: VERIFY — license number and transparent pricing are source-site claims.
const ALIANTE_LEAK_WHY = [
  "Local Las Vegas Valley plumbing company familiar with Aliante area homes and the first-service-cycle plumbing conditions common in 2000 to 2008 construction",
  "Non-invasive detection methods that locate leaks before any surface is opened",
  "Licensed plumbers, NV License #0048585A, C-1 Plumbing and Heating",
  "Transparent pricing with no hidden fees",
  "Detection and repair for copper supply lines, underground lines, wall and ceiling leaks, and slab leaks",
  "Residential plumbing service throughout Aliante and North Las Vegas",
];

// ---------------------------------------------------------------------------
// Section 8 -- Aliante sub-areas served (plain-text chips, no neighborhood-level
// routes built).
// ---------------------------------------------------------------------------
const ALIANTE_LEAK_SUBAREAS = [
  "Aliante Parkway Area",
  "Aliante Nature Discovery Park Area",
  "Ann Road Corridor",
  "Deer Springs Way Area",
  "Elkhorn Road Area",
  "Northwest North Las Vegas",
];

// ---------------------------------------------------------------------------
// Related services. All cards link directly to built Aliante-specific routes
// (emergency P40, drain cleaning P41, water heater P42, slab leak P44).
// ---------------------------------------------------------------------------
const ALIANTE_LEAK_RELATED = [
  {
    title: "Emergency Plumbing in the Aliante Area",
    description:
      "Fast response to burst pipes, active leaks, slab leaks, and other plumbing emergencies in the Aliante area.",
    // P40 built — linking directly to Aliante-specific route
    href: "/north-las-vegas/aliante-area/emergency-plumbing/",
    image: "/images/services/emergency-plumbing/card.webp",
    imageAlt: "Emergency plumbing service in the Aliante area",
  },
  {
    title: "Drain Cleaning in the Aliante Area",
    description:
      "Professional drain cleaning for Aliante area homes where hard water mineral buildup drives recurring clogs.",
    // P41 built — linking directly to Aliante-specific route
    href: "/north-las-vegas/aliante-area/drain-cleaning/",
    image: "/images/services/drain-cleaning/card.webp",
    imageAlt: "Drain cleaning service in the Aliante area",
  },
  {
    title: "Water Heater Repair and Installation in the Aliante Area",
    description:
      "Water heater diagnosis, repair, and installation for Aliante area homes affected by hard water sediment.",
    // P42 built — linking directly to Aliante-specific route
    href: "/north-las-vegas/aliante-area/water-heater-repair-installation/",
    image: "/images/services/water-heater-repair-installation/card.webp",
    imageAlt: "Water heater repair and installation in the Aliante area",
  },
  {
    title: "Slab Leak Detection and Repair",
    description:
      "Detection and repair of copper supply line leaks beneath slab foundations in Aliante area homes.",
    // ACTIVATED: P44 built and staged
    href: "/north-las-vegas/aliante-area/slab-leak-detection-repair/",
    image: "/images/services/slab-leak-detection-repair/card.webp",
    imageAlt: "Slab leak detection and repair in the Aliante area",
  },
];

// ---------------------------------------------------------------------------
// Section 9 -- FAQ (FAQPage schema source of truth). The visible FAQ section
// AND the FAQPage JSON-LD both derive from this single array, guaranteeing a
// character-for-character match. Do not edit one without the other.
// ---------------------------------------------------------------------------
const ALIANTE_LEAK_FAQS = [
  {
    question: "How do plumbers find hidden leaks without digging?",
    answer:
      "Red Carpet Plumbing uses acoustic sensor equipment, thermal imaging, and pressure testing to locate hidden leaks without opening walls, ceilings, or concrete unnecessarily. Acoustic sensors detect the sound signature of an active water leak through solid materials. Thermal imaging identifies temperature differences caused by moisture. Pressure testing isolates plumbing zones to confirm leak activity. These non-invasive methods let us locate the leak precisely before any surface work begins.",
  },
  {
    question: "Why are Aliante area homes at risk for hidden pipe leaks?",
    answer:
      "Most Aliante area homes were built between 2000 and 2008, placing the copper plumbing systems at 17 to 25 years old. Las Vegas Valley hard water, measuring 17 to 24 grains per gallon, accelerates interior corrosion in copper pipe walls over time. At the 17 to 25 year mark, Aliante homes are entering the first major service cycle for this combination of pipe age and water hardness, which creates a higher likelihood of pinhole leaks and supply line failures.",
  },
  {
    question: "What are the signs of a hidden water leak in my home?",
    answer:
      "Common signs of a hidden water leak include an unexplained increase in your water bill, the sound of running water when all fixtures are off, warm or wet spots on floors, soft spots or staining on walls or ceilings, and a musty smell in areas without a known moisture source. If your water meter continues to move when all water use in the home is stopped, that is a strong indicator that a leak is active.",
  },
  {
    question:
      "What is the difference between leak detection and slab leak detection?",
    answer:
      "Leak detection covers the full range of hidden leaks in a home, including supply lines inside walls and ceilings, underground lines connecting the meter to the home, and fixtures and connection fittings. Slab leak detection is a specific application focused on leaks occurring in pipes that run beneath or through a concrete slab foundation. We use similar non-invasive detection methods for both, but slab leaks require additional assessment of the foundation and repair options that account for concrete cutting, pipe rerouting, or epoxy lining.",
  },
  {
    question: "Does Red Carpet Plumbing serve the Aliante area?",
    answer:
      "Yes. Red Carpet Plumbing provides leak detection and repair throughout the Aliante area of North Las Vegas. Aliante is a master-planned community within the City of North Las Vegas, and our Nevada Contractor License #0048585A covers plumbing work throughout North Las Vegas including the Aliante community and surrounding neighborhoods. Call (702) 567-9172 to confirm coverage for your address.",
  },
  {
    question: "How long does leak detection take?",
    answer:
      "Most leak detection visits for a single suspected leak in a residential home take between one and two hours depending on the type of leak, how accessible the plumbing is, and how clearly the symptoms point to a specific area. Underground supply line leaks and slab leak detection may take longer depending on the size of the property and the number of zones that need to be tested.",
  },
];

// ---------------------------------------------------------------------------
// JSON-LD payloads. areaServed uses Place (Aliante, North Las Vegas, Nevada) ->
// City (North Las Vegas) -> State (Nevada). No sameAs on the service-location
// page. Do NOT use AdministrativeArea. Do NOT use Clark County. The Service
// provider carries a PostalAddress per the P43 brief variant.
// ---------------------------------------------------------------------------
const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Leak Detection and Repair in the Aliante Area of North Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides professional leak detection and repair in the Aliante area of North Las Vegas, NV. Non-invasive acoustic sensor detection, thermal imaging, pressure testing, and copper pipe leak repair for Aliante homes. Licensed plumbers.",
  url: "https://redcarpetplumbing.com/north-las-vegas/aliante-area/leak-detection-repair/",
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
      name: "Leak Detection and Repair in the Aliante Area of North Las Vegas, NV",
    },
  ],
};

// FLAG: VERIFY — telephone in serviceSchema (carried forward from existing
// pages). Provider includes PostalAddress per the P43 brief variant.
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Leak Detection and Repair in the Aliante Area of North Las Vegas",
  serviceType: "Leak Detection and Repair",
  description:
    "Professional leak detection and repair for homes in the Aliante area of North Las Vegas, NV. Services include electronic leak detection using acoustic sensors, thermal imaging, pressure testing, wall and ceiling leak detection, underground supply line detection, and slab leak detection.",
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
  provider: {
    "@type": "Plumber",
    name: "Red Carpet Plumbing",
    telephone: "+17025679172",
    address: {
      "@type": "PostalAddress",
      streetAddress: "3330 W. Hacienda Ave Ste. 405",
      addressLocality: "Las Vegas",
      addressRegion: "NV",
      postalCode: "89118",
    },
  },
};

// HowTo schema included because Section 5 renders the matching visible numbered
// process steps. Derived from ALIANTE_LEAK_STEPS for a guaranteed text match.
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How We Detect a Hidden Leak in Your Aliante Home",
  step: ALIANTE_LEAK_STEPS.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.name,
    text: s.body,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: ALIANTE_LEAK_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function AlianteLeakDetectionRepairPage() {
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
            {
              label:
                "Leak Detection and Repair in the Aliante Area of North Las Vegas, NV",
            },
          ]}
        />

        {/* SECTION 1: HERO (trust strip rendered inside via trustItems) */}
        <HeroSection
          headingLevel="h1"
          headline="Leak Detection and Repair in the Aliante Area of North Las Vegas, NV"
          subheading="Most homes in the Aliante area were built between 2000 and 2008, placing copper plumbing systems in their first major service cycle. Red Carpet Plumbing uses non-invasive detection to locate hidden leaks in Aliante homes without unnecessary disruption."
          trustItems={ALIANTE_LEAK_TRUST}
          primaryCTA={{
            label: "Call Now: (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{
            label: "Request Service",
            href: "/contact/",
          }}
          // FLAG: VERIFY — transparent pricing is a source-site claim.
          ctaNote="NV Licensed, #0048585A. Transparent pricing, no hidden fees."
          formSlot={<QuoteFormPlaceholder title="Get Leak Detection Help" />}
          backgroundImage={{
            src: "/images/services/leak-detection-repair/hero.webp",
            alt: "Leak detection service in the Aliante area of North Las Vegas, NV",
          }}
        />

        {/* SECTION 3: WHY COPPER PIPES LEAK IN ALIANTE AREA HOMES */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Why Copper Pipes Leak in Aliante Area Homes
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Most hidden leaks in the Aliante area trace back to a predictable
                set of causes tied to the age and material of the housing stock.
                Aliante homes were built primarily between 2000 and 2008, and the
                copper supply lines installed during that period are now 17 to 25
                years old. At this age, with Las Vegas Valley hard water in play,
                these pipes are entering the first major service cycle.
                Understanding what causes leaks in Aliante homes helps explain why
                detection is worth doing carefully. For an overview of our broader
                leak detection and repair services, visit our{" "}
                <Link
                  href="/leak-detection-repair/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  leak detection and repair services
                </Link>{" "}
                page.
              </p>
            </div>
            <div className="mt-10 space-y-6">
              {ALIANTE_LEAK_CAUSES.map((cause) => (
                <article
                  key={cause.title}
                  className="relative bg-brand-surface-alt rounded-2xl p-6 pl-7 ring-1 ring-brand-surface-alt before:absolute before:bottom-6 before:left-0 before:top-6 before:w-1 before:rounded-full before:bg-brand-primary sm:p-8 sm:pl-9"
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
          </div>
        </section>

        {/* SECTION 4: NON-INVASIVE LEAK DETECTION SERVICES */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Non-Invasive Leak Detection Services in the Aliante Area
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing uses non-invasive detection methods to locate
                hidden leaks in Aliante area homes before recommending any repair
                work. Our detection services cover the full range of leak types
                found in Aliante properties.
              </p>
            </div>
            <ul className="mt-10 space-y-5">
              {ALIANTE_LEAK_SERVICES.map((s) => (
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
                        {s.link.pre}
                        <Link
                          href={s.link.href}
                          className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                        >
                          {s.link.text}
                        </Link>
                        {s.link.post}
                      </>
                    ) : null}
                  </p>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-base leading-7 text-brand-dark/80">
              For visually confirming pipe condition alongside detection work, ask
              about our{" "}
              <Link
                href="/video-camera-plumbing-inspections/"
                className="font-semibold text-brand-primary hover:text-brand-primary-hover"
              >
                video camera plumbing inspections
              </Link>
              .
            </p>
          </div>
        </section>

        {/* SECTION 5: HOW WE DETECT A HIDDEN LEAK (HowTo) */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    How We Detect a Hidden Leak in Your Aliante Home
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    This is our standard process for locating hidden leaks in
                    Aliante area homes. Every detection job begins with a thorough
                    review of your symptoms before any equipment is used.
                  </p>
                </div>
              </SectionRevealItem>
              <SectionRevealItem className="mt-12">
                <ol className="space-y-8">
                  {ALIANTE_LEAK_STEPS.map((step, index) => (
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

        {/* SECTION 6: WARNING SIGNS */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Signs You May Have a Hidden Leak in Your Aliante Area Home
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                These are the most common warning signs of a hidden water leak in
                an Aliante area home. If you notice any of the following, contact a
                licensed plumber for a professional inspection. For urgent or
                active water loss, see our{" "}
                <Link
                  href="/north-las-vegas/aliante-area/emergency-plumbing/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  emergency plumbing in the Aliante area
                </Link>{" "}
                page.
              </p>
            </div>
            <div className="mt-8 rounded-2xl border-l-4 border-brand-primary bg-white p-6 sm:p-8">
              <ul className="space-y-3">
                {ALIANTE_LEAK_SIGNS.map((sign) => (
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
          </div>
        </section>

        {/* SECTION 7: WHY ALIANTE HOMEOWNERS CHOOSE RED CARPET PLUMBING */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Why Aliante Homeowners Choose Red Carpet Plumbing
              </h2>
            </div>
            <ul className="mt-8 space-y-4">
              {ALIANTE_LEAK_WHY.map((item) => (
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

        {/* SECTION: MID-PAGE CTA */}
        <section className="bg-brand-charcoal text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Suspect a Hidden Leak in Your Aliante Home?
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/80">
                  Red Carpet Plumbing uses non-invasive detection to pinpoint
                  hidden leaks in Aliante area homes before any surface is opened.
                  Call now and describe what you are seeing, or request service
                  online.
                </p>
              </div>
              <div className="flex flex-col items-start gap-4 lg:items-end">
                <a
                  href="tel:+17025679172"
                  className="inline-flex min-h-14 items-center justify-center rounded-lg bg-brand-primary px-8 text-lg font-semibold text-white shadow-sm hover:bg-brand-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary motion-safe:transition-colors motion-safe:active:scale-[0.97]"
                >
                  Call Now: (702) 567-9172
                </a>
                <Link
                  href="/contact/"
                  className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/60 px-6 py-3 text-base font-semibold text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-safe:transition-colors motion-safe:active:scale-[0.97]"
                >
                  Request Service
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8: SERVICE AREA */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Leak Detection Services Across the Aliante Area and North Las Vegas
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing provides leak detection and repair throughout
                the Aliante area and across North Las Vegas. For a full list of
                plumbing services we offer in the Aliante community, visit our{" "}
                <Link
                  href="/north-las-vegas/aliante-area-plumbing/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  Aliante area plumbing services
                </Link>{" "}
                hub.
              </p>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                We also serve the broader North Las Vegas community. For our full
                North Las Vegas service coverage, see{" "}
                <Link
                  href="/north-las-vegas-plumbing-services/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  North Las Vegas plumbing services
                </Link>{" "}
                or visit our dedicated{" "}
                <Link
                  href="/north-las-vegas/leak-detection-repair/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  Leak Detection and Repair in North Las Vegas
                </Link>{" "}
                page.
              </p>
            </div>
            <ul className="mt-8 flex flex-wrap gap-3">
              {ALIANTE_LEAK_SUBAREAS.map((area) => (
                <li
                  key={area}
                  className="rounded-full bg-brand-surface-alt px-4 py-2 text-sm font-medium text-brand-dark/80 ring-1 ring-brand-surface-alt"
                >
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION: RELATED SERVICES */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="max-w-3xl text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Related Plumbing Services in the Aliante Area
              </h2>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {ALIANTE_LEAK_RELATED.map((service) => (
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

        {/* SECTION 9: FAQ */}
        <section className="bg-white">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Frequently Asked Questions About Leak Detection in the Aliante Area
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {ALIANTE_LEAK_FAQS.map((faq) => (
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
          headline="Ready to Locate That Leak Without the Guesswork?"
          body="Red Carpet Plumbing uses non-invasive detection methods to find hidden leaks in Aliante area homes accurately and efficiently. Whether you are seeing higher water bills, hearing running water, or have a known leak that needs pinpointing before repair, we can help."
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
      className="mt-1 h-5 w-5 flex-none text-brand-primary"
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
