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
// Active FLAGs for this page (source-only unless noted):
//   - telephone (+17025679172) in serviceSchema.provider — VERIFY before launch.
//   - "Transparent Pricing, No Hidden Fees" hero trust item + ctaNote and the
//     Why-Choose pricing bullet — source-site claims, VERIFY before launch.
//   - License #0048585A is a verified business claim.
//
// Schema follows the established site-wide service-location pattern with the
// P44 brief variant for the Service block (provider includes PostalAddress per
// brief): Plumber provider; areaServed Place (Aliante, North Las Vegas, Nevada)
// + containedInPlace City (North Las Vegas) + containedInPlace State Nevada;
// WebPage isPartOf WebSite; 5 separate JsonLd blocks in order WebPage ->
// BreadcrumbList -> Service -> HowTo -> FAQPage; HowTo for the visible process
// steps. No AggregateRating schema. NO sameAs on this service-location page.
//
// Aliante is copper-only, 2000-2008 construction. Do NOT add galvanized,
// polybutylene, Kitec, dual-vintage, or commercial-corridor (Craig Road /
// Cheyenne / Losee) content. Permit/jurisdiction references are the City of
// North Las Vegas, not Clark County.
//
// Title, WebPage schema name, OG title, H1, and breadcrumb #4 all use the
// consistent "in the Aliante Area of North Las Vegas, NV" form (approved).
//
// Hero uses card.webp: hero.webp for this service is the low-res 18KB asset per
// the implementation log; card.webp (92KB) is the larger asset, consistent with
// the Las Vegas / Henderson slab siblings. TODO: dedicated high-resolution hero.
//
// Section 9 NLV slab parent link: /north-las-vegas/slab-leak-detection-repair/
// is NOT present in the repo (Gate 1 confirmed). Using the core
// /slab-leak-detection-repair/ route as the fallback with a TODO note.
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title:
    "Slab Leak Detection and Repair in the Aliante Area of North Las Vegas, NV | Red Carpet Plumbing",
  // NOTE: approved description exceeds the ~160 char SEO target (~218 chars).
  // Used verbatim per the approved brief; flag for trim consideration at launch.
  description:
    "Red Carpet Plumbing provides non-invasive slab leak detection and repair in the Aliante area of North Las Vegas, NV. Acoustic sensors, thermal imaging, and all repair options explained. NV License #0048585A. (702) 567-9172.",
  alternates: {
    canonical:
      "https://redcarpetplumbing.com/north-las-vegas/aliante-area/slab-leak-detection-repair/",
  },
  openGraph: {
    title:
      "Slab Leak Detection and Repair in the Aliante Area of North Las Vegas, NV | Red Carpet Plumbing",
    description:
      "Non-invasive slab leak detection for Aliante area homes in North Las Vegas. Spot repair, pipe rerouting, and epoxy lining options explained. First-service-cycle copper plumbing. Licensed plumbers. Call (702) 567-9172.",
    url: "https://redcarpetplumbing.com/north-las-vegas/aliante-area/slab-leak-detection-repair/",
    siteName: "Red Carpet Plumbing",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

// Hero trust strip (4 items). Rendered inside the hero via trustItems, matching
// the P40-P43 Aliante cluster pattern.
const ALIANTE_SLAB_TRUST = [
  "Non-Invasive Detection",
  "NV Licensed, #0048585A",
  "All Repair Options Explained",
  // FLAG: VERIFY — "Transparent Pricing, No Hidden Fees" is a source-site claim.
  "Transparent Pricing, No Hidden Fees",
];

// ---------------------------------------------------------------------------
// Section 3 -- slab leak warning signs (plain list).
// ---------------------------------------------------------------------------
const ALIANTE_SLAB_SIGNS = [
  "Warm or hot spots on your floors, particularly on tile or concrete",
  "The sound of running water when all fixtures and appliances are off",
  "An unexplained and persistent increase in your water bill",
  "Damp or wet flooring without an obvious visible source",
  "Cracks appearing in walls, floors, or at the base of walls",
  "Low water pressure throughout the home with no other explanation",
  "Mold or mildew odor at floor level",
];

// ---------------------------------------------------------------------------
// Section 4 -- non-invasive detection methods (three titled H3 cards).
// ---------------------------------------------------------------------------
const DETECTION_METHODS: { title: string; body: string }[] = [
  {
    title: "Acoustic Sensors",
    body: "Acoustic leak detection equipment amplifies the sound of pressurized water escaping from pipes beneath the slab. We use this equipment to identify the leak location to within a few inches through the floor surface without any cutting or demolition. Acoustic detection is the primary method for most copper pipe slab leaks in Aliante homes.",
  },
  {
    title: "Thermal Imaging",
    body: "Hot water line slab leaks release heat that travels upward through the slab and creates detectable temperature differences on floor surfaces. Thermal imaging cameras identify these warm spots, helping narrow the detection area before acoustic sensors confirm the precise location. Thermal imaging is particularly useful in Aliante homes where the slab surface provides a consistent reference temperature.",
  },
  {
    title: "Pressure Testing",
    body: "Pressure testing isolates which section of the plumbing system is losing pressure, confirming an active leak and identifying which supply line is affected. For Aliante homes with multiple aging copper pipe runs, pressure testing helps narrow the detection area efficiently and confirms the leak is resolved after repair.",
  },
];

// ---------------------------------------------------------------------------
// Section 5 -- what causes slab leaks in Aliante copper plumbing (four H3
// articles). Copper-only 2000-2008 framing; no galvanized/polybutylene.
// ---------------------------------------------------------------------------
const ALIANTE_SLAB_CAUSES: { title: string; body: string }[] = [
  {
    title: "Hard Water Mineral Corrosion in First-Service-Cycle Copper",
    body: "Aliante homes were built primarily between 2000 and 2008. The copper supply lines installed during construction have now been exposed to Las Vegas Valley hard water for 17 to 25 years. At 17 to 24 grains per gallon (approximately 280 parts per million), Las Vegas Valley municipal water is among the hardest in the United States. Over time, mineral deposits accumulate inside copper pipe walls, thinning them from the inside out. For under-slab copper lines in Aliante homes, this ongoing corrosion process creates the conditions for pinhole leaks and stress fractures at the weakest points in the pipe.",
  },
  {
    title: "Caliche Soil Movement Beneath Slab Foundations",
    body: "The Aliante area sits on caliche and expansive soil common throughout the Las Vegas Valley. Caliche contracts and expands with seasonal temperature changes, and the soil beneath slab foundations in North Las Vegas shifts gradually over time. This ground movement creates ongoing mechanical stress on copper supply lines embedded in and running beneath the slab. Friction points where pipe contacts concrete, rebar, or aggregate wear into pipe walls over years of repeated movement.",
  },
  {
    title: "Closed-Loop Pressure and Thermal Expansion",
    body: "Most Aliante homes operate on closed-loop plumbing systems due to backflow preventers installed at the street meter. In a closed-loop system, thermal expansion from the water heater has nowhere to go unless a properly installed thermal expansion tank is in place. Without one, repeated pressure spikes cycle through the supply system each time the water heater fires. Over 17 to 25 years, this cumulative pressure cycling stresses pipe walls and fittings beneath the slab.",
  },
  {
    title: "Pipe Joint and Fitting Stress",
    body: "The original mechanical joints, elbow connections, and transition fittings in the under-slab supply line system of Aliante homes have now been subject to two decades of pressure cycling, thermal expansion, and soil movement. These connection points are often the first location where under-slab failures develop, producing slab leak warning signs identical to those caused by pipe wall failures.",
  },
];

// ---------------------------------------------------------------------------
// Section 6 -- repair options. REPAIR_OPTIONS array shape follows the Green
// Valley slab sibling exactly. Spot repair links to water-pipe-repair; rerouting
// links to core /re-piping/ (no Aliante-specific re-piping page exists); epoxy
// has no link.
// ---------------------------------------------------------------------------
const REPAIR_OPTIONS: {
  heading: string;
  body: string;
  linkPre?: string;
  linkHref?: string;
  linkText?: string;
  linkPost?: string;
}[] = [
  {
    heading: "Spot repair through concrete",
    body: "Spot repair involves cutting the concrete slab directly above the leak location, repairing or replacing the damaged pipe section, and patching the concrete. This is a focused approach appropriate for an isolated leak in a pipe that is otherwise in good condition. For Aliante homes where the surrounding copper pipe has been thinned by 17 to 25 years of hard water corrosion, we assess the pipe condition before recommending spot repair to confirm a second failure on the same aging line is not likely.",
    linkPre: " See our ",
    linkHref: "/water-pipe-repair-replacement/",
    linkText: "water pipe repair and replacement",
    linkPost: " page for information on targeted pipe repairs.",
  },
  {
    heading: "Pipe rerouting",
    body: "Pipe rerouting bypasses the damaged section entirely by running a new supply line through walls, ceilings, or accessible above-slab pathways, removing the aging copper pipe from beneath the foundation. For Aliante homes where the pipe condition assessment reveals that the surrounding copper has been thinned by years of hard water exposure, or where a second leak on the same line is a reasonable concern, rerouting is often the more durable long-term solution because it eliminates the source of future slab leaks on that line.",
    linkPre: " See our ",
    // No Aliante-specific re-piping page exists yet. Using core /re-piping/ as the appropriate fallback.
    linkHref: "/re-piping/",
    linkText: "re-piping services",
    linkPost: " page for information on full and partial pipe replacement options.",
  },
  {
    heading: "Epoxy pipe lining",
    body: "Epoxy pipe lining applies a specialized coating to the interior of the existing copper pipe, sealing cracks and restoring pipe integrity from the inside without concrete cutting. This method is less invasive than slab access and works best for pipes with localized damage where the overall pipe structure is still intact. It is not appropriate for pipes with extensive corrosion or significantly narrowed interior diameter. We assess pipe condition before recommending epoxy lining as the repair approach.",
  },
];

// ---------------------------------------------------------------------------
// Section 7 -- detection and repair process (HowTo schema source of truth).
// Visible numbered steps and the HowTo JSON-LD both derive from this array.
// ---------------------------------------------------------------------------
const ALIANTE_SLAB_STEPS = [
  {
    name: "Detect and locate the slab leak precisely",
    body: "We use acoustic sensors, pressure testing, and thermal imaging to locate the slab leak to within a few inches. Accurate location before repair selection avoids unnecessary concrete cutting and ensures the repair targets the actual failure point.",
  },
  {
    name: "Assess the pipe condition and repair options",
    body: "We assess the age and condition of the affected copper pipe, the severity of the leak, whether additional failure points are likely on the same line, and what sits above the leak location. This assessment determines the most appropriate repair approach for your Aliante home.",
  },
  {
    name: "Present all repair options clearly before starting work",
    body: "We explain each applicable repair option, including what it involves, how long it takes, what access is required, and what the job will cost, before any work begins. No repair starts without your approval.",
  },
  {
    name: "Complete the repair and confirm the line holds pressure",
    body: "After completing the repair, we pressure test the affected line to confirm it holds pressure and the leak is fully resolved. We do not close up the work area until testing confirms the repair is complete.",
  },
];

// ---------------------------------------------------------------------------
// Section 8 -- why Aliante homeowners choose Red Carpet Plumbing for slab work.
// ---------------------------------------------------------------------------
// FLAG: VERIFY — license number and transparent pricing are source-site claims.
const ALIANTE_SLAB_WHY = [
  "Local Las Vegas Valley plumbing company familiar with Aliante area homes and the first-service-cycle copper plumbing conditions common in 2000 to 2008 construction",
  "Non-invasive detection methods that locate slab leaks before any concrete cutting begins",
  "All repair options explained clearly before any work starts",
  "Licensed plumbers, NV License #0048585A, C-1 Plumbing and Heating",
  "Transparent pricing with no hidden fees",
  "Slab leak detection and repair service throughout Aliante and North Las Vegas",
];

// ---------------------------------------------------------------------------
// Section 9 -- Aliante sub-areas served (plain-text chips, no neighborhood-level
// routes built).
// ---------------------------------------------------------------------------
const ALIANTE_SLAB_SUBAREAS = [
  "Aliante Parkway Area",
  "Aliante Nature Discovery Park Area",
  "Ann Road Corridor",
  "Deer Springs Way Area",
  "Elkhorn Road Area",
  "Northwest North Las Vegas",
];

// ---------------------------------------------------------------------------
// Related services. All four point to built Aliante-specific routes (P40-P43).
// ---------------------------------------------------------------------------
const ALIANTE_SLAB_RELATED = [
  {
    title: "Emergency Plumbing in the Aliante Area",
    description:
      "Fast response to burst pipes, active leaks, slab leaks, and other plumbing emergencies in the Aliante area.",
    href: "/north-las-vegas/aliante-area/emergency-plumbing/",
    image: "/images/services/emergency-plumbing/card.webp",
    imageAlt: "Emergency plumbing service in the Aliante area",
  },
  {
    title: "Drain Cleaning in the Aliante Area",
    description:
      "Professional drain cleaning for Aliante area homes where hard water mineral buildup drives recurring clogs.",
    href: "/north-las-vegas/aliante-area/drain-cleaning/",
    image: "/images/services/drain-cleaning/card.webp",
    imageAlt: "Drain cleaning service in the Aliante area",
  },
  {
    title: "Water Heater Repair and Installation in the Aliante Area",
    description:
      "Water heater diagnosis, repair, and installation for Aliante area homes affected by hard water sediment.",
    href: "/north-las-vegas/aliante-area/water-heater-repair-installation/",
    image: "/images/services/water-heater-repair-installation/card.webp",
    imageAlt: "Water heater repair and installation in the Aliante area",
  },
  {
    title: "Leak Detection and Repair in the Aliante Area",
    description:
      "Detection and repair of visible and hidden leaks in Aliante area homes, including pinhole leaks in copper supply lines.",
    href: "/north-las-vegas/aliante-area/leak-detection-repair/",
    image: "/images/services/leak-detection-repair/card.webp",
    imageAlt: "Leak detection and repair in the Aliante area",
  },
];

// ---------------------------------------------------------------------------
// Section 10 -- FAQ (FAQPage schema source of truth). The visible FAQ section
// AND the FAQPage JSON-LD both derive from this single array, guaranteeing a
// character-for-character match. Do not edit one without the other.
// ---------------------------------------------------------------------------
const ALIANTE_SLAB_FAQS = [
  {
    question: "What are the signs of a slab leak in an Aliante area home?",
    answer:
      "Common signs of a slab leak in an Aliante area home include warm or hot spots on the floors, the sound of running water when all fixtures are off, an unexplained increase in your water bill, damp or wet flooring without an obvious source, cracks appearing in walls or floors, low water pressure throughout the home, and mold or mildew odor at floor level. Because slab leaks develop beneath the concrete foundation, these signs often appear before any visible pipe damage is accessible.",
  },
  {
    question: "Why do slab leaks happen in Aliante area homes?",
    answer:
      "Most Aliante area homes were built between 2000 and 2008, placing the copper supply lines beneath the slab at 17 to 25 years old. Las Vegas Valley hard water at 17 to 24 grains per gallon accelerates interior corrosion in copper pipe walls over time, thinning them from the inside out. Caliche soil movement beneath slab foundations adds mechanical stress to pipes that have already been weakened by corrosion. Closed-loop plumbing pressure cycles from thermal expansion contribute further pipe fatigue at joints and fittings. At this age and with these local conditions, Aliante homes are entering the first major service cycle for under-slab copper failures.",
  },
  {
    question: "How is a slab leak detected without breaking up the floor?",
    answer:
      "Professional slab leak detection uses acoustic sensors that amplify the sound of pressurized water escaping beneath the slab, pressure testing to confirm and isolate water loss to a specific plumbing line, and thermal imaging to identify temperature differences on the floor surface caused by hot water leaks. These non-invasive methods locate the slab leak precisely before any concrete cutting begins. Red Carpet Plumbing uses all three methods as part of its standard slab leak detection process in Aliante area homes.",
  },
  {
    question: "What are the slab leak repair options for Aliante homes?",
    answer:
      "Red Carpet Plumbing presents three slab leak repair options depending on the leak location, pipe condition, and what sits above the repair area. Spot repair involves cutting the concrete above the leak, repairing the pipe section, and patching the concrete. Pipe rerouting bypasses the damaged section by running a new supply line through walls or ceilings, eliminating the aging copper pipe from beneath the slab. Epoxy pipe lining coats the interior of the existing pipe to seal the damage without concrete cutting. The appropriate option depends on the pipe age, condition, and leak specifics. Red Carpet Plumbing explains all options before any work begins.",
  },
  {
    question:
      "Should I choose spot repair or pipe rerouting for a slab leak in Aliante?",
    answer:
      "For an isolated leak in a copper pipe that is otherwise in good condition, spot repair can be appropriate. For Aliante homes where copper supply lines have been thinned by 17 to 25 years of hard water corrosion, and where a second leak on the same aging line is a reasonable concern, pipe rerouting is often the more durable long-term solution because it removes the failing pipe from beneath the slab entirely. Red Carpet Plumbing assesses pipe condition and presents both options with a clear explanation of the tradeoffs before any repair begins.",
  },
  {
    question:
      "Does Red Carpet Plumbing serve the Aliante area for slab leak repair?",
    answer:
      "Yes. Red Carpet Plumbing provides slab leak detection and repair throughout the Aliante area of North Las Vegas. Aliante is a master-planned community within the City of North Las Vegas, and our Nevada Contractor License #0048585A covers plumbing work throughout North Las Vegas including the Aliante community and surrounding neighborhoods. Call (702) 567-9172 to confirm coverage for your address or to request service.",
  },
];

// ---------------------------------------------------------------------------
// JSON-LD payloads. areaServed uses Place (Aliante, North Las Vegas, Nevada) ->
// City (North Las Vegas) -> State (Nevada). No sameAs on the service-location
// page. Do NOT use AdministrativeArea. Do NOT use Clark County. The Service
// provider carries a PostalAddress per the P44 brief variant.
// ---------------------------------------------------------------------------
const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Slab Leak Detection and Repair in the Aliante Area of North Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides professional slab leak detection and repair in the Aliante area of North Las Vegas, NV. Non-invasive acoustic sensor detection, thermal imaging, and pressure testing. Spot repair, pipe rerouting, and epoxy pipe lining options explained. Licensed plumbers.",
  url: "https://redcarpetplumbing.com/north-las-vegas/aliante-area/slab-leak-detection-repair/",
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
      name: "Slab Leak Detection and Repair in the Aliante Area of North Las Vegas, NV",
    },
  ],
};

// FLAG: VERIFY — telephone in serviceSchema (carried forward from existing
// pages). Provider includes PostalAddress per the P44 brief variant.
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Slab Leak Detection and Repair in the Aliante Area of North Las Vegas",
  serviceType: "Slab Leak Detection and Repair",
  description:
    "Professional slab leak detection and repair for homes in the Aliante area of North Las Vegas, NV. Non-invasive acoustic sensor detection, thermal imaging, and pressure testing. Repair options include spot repair, pipe rerouting, and epoxy pipe lining.",
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

// HowTo schema included because Section 7 renders the matching visible numbered
// process steps. Derived from ALIANTE_SLAB_STEPS for a guaranteed text match.
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How We Handle Slab Leak Detection and Repair in Aliante",
  step: ALIANTE_SLAB_STEPS.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.name,
    text: s.body,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: ALIANTE_SLAB_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function AlianteSlabLeakPage() {
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
                "Slab Leak Detection and Repair in the Aliante Area of North Las Vegas, NV",
            },
          ]}
        />

        {/* SECTION 1: HERO (trust strip rendered inside via trustItems) */}
        {/* TODO: Replace with a dedicated high-resolution hero asset when
            available. hero.webp for this service is the low-res 18KB asset per
            the implementation log; using card.webp here. */}
        <HeroSection
          headingLevel="h1"
          headline="Slab Leak Detection and Repair in the Aliante Area of North Las Vegas, NV"
          subheading="Most Aliante area homes were built between 2000 and 2008. The copper supply lines beneath those slab foundations are now 17 to 25 years old. Red Carpet Plumbing uses non-invasive detection to locate slab leaks in Aliante homes and explains all repair options before any work begins."
          trustItems={ALIANTE_SLAB_TRUST}
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
          formSlot={<QuoteFormPlaceholder title="Get Slab Leak Help" />}
          backgroundImage={{
            src: "/images/services/slab-leak-detection-repair/card.webp",
            alt: "Slab leak detection and repair in the Aliante area of North Las Vegas, NV",
          }}
        />

        {/* SECTION 3: WARNING SIGNS */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Signs of a Slab Leak in Your Aliante Area Home
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Slab leaks in Aliante area homes develop beneath the concrete
                foundation, which means the signs often appear indirectly. If you
                notice any of the following, contact a licensed plumber for a
                professional inspection.
              </p>
            </div>
            <div className="mt-8 rounded-2xl border-l-4 border-brand-primary bg-brand-surface-alt p-6 sm:p-8">
              <ul className="space-y-3">
                {ALIANTE_SLAB_SIGNS.map((sign) => (
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

        {/* SECTION 4: DETECTION METHODS */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                How We Detect Slab Leaks in Aliante Area Homes
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing uses non-invasive methods to locate slab leaks
                in Aliante area homes before any concrete cutting begins. Our
                detection process typically draws on three complementary methods
                depending on the nature and location of the leak. For general
                hidden leak detection or leaks not related to the slab, see our{" "}
                <Link
                  href="/north-las-vegas/aliante-area/leak-detection-repair/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  Leak Detection and Repair in the Aliante Area
                </Link>{" "}
                page. For an overview of our broader slab leak services, visit our{" "}
                <Link
                  href="/slab-leak-detection-repair/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  slab leak detection and repair
                </Link>{" "}
                page.
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

        {/* SECTION 5: CAUSES */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    What Causes Slab Leaks in Aliante Area Copper Plumbing
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Slab leaks in Aliante area homes trace back to a predictable
                    set of causes connected to the age and material of the housing
                    stock and the local water and soil conditions. Understanding
                    the causes helps homeowners recognize early warning signs and
                    make informed decisions about repair options.
                  </p>
                </div>
              </SectionRevealItem>
              <SectionRevealItem className="mt-10">
                <ul className="space-y-5">
                  {ALIANTE_SLAB_CAUSES.map((c) => (
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

        {/* SECTION 6: REPAIR OPTIONS */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Slab Leak Repair Options in the Aliante Area
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing presents all applicable repair options before
                any work begins. The right option depends on the leak location,
                the age and condition of the affected copper pipe, whether
                additional failure points are likely on the same line, and what
                sits above the repair area.
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
                    {o.linkHref ? (
                      <>
                        {o.linkPre}
                        <Link
                          href={o.linkHref}
                          className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                        >
                          {o.linkText}
                        </Link>
                        {o.linkPost}
                      </>
                    ) : null}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 7: PROCESS (HowTo) */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    How We Handle Slab Leak Detection and Repair in Aliante
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    This is our standard process for slab leak detection and repair
                    in Aliante area homes. Every job begins with precise location
                    before any repair method is selected.
                  </p>
                </div>
              </SectionRevealItem>
              <SectionRevealItem className="mt-12">
                <ol className="space-y-8">
                  {ALIANTE_SLAB_STEPS.map((step, index) => (
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

        {/* SECTION 8: WHY CHOOSE RED CARPET PLUMBING */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Why Aliante Homeowners Choose Red Carpet Plumbing for Slab Leak
                Work
              </h2>
            </div>
            <ul className="mt-8 space-y-4">
              {ALIANTE_SLAB_WHY.map((item) => (
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
                  Suspected Slab Leak in Your Aliante Home?
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/80">
                  Slab leaks cause ongoing water loss beneath your foundation and
                  can lead to structural damage if left undetected. Red Carpet
                  Plumbing provides non-invasive slab leak detection throughout the
                  Aliante area and North Las Vegas. Call now or request service
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

        {/* SECTION 9: SERVICE AREA */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Slab Leak Services Across the Aliante Area and North Las Vegas
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing provides slab leak detection and repair
                throughout the Aliante area and across North Las Vegas. For a full
                list of plumbing services we offer in the Aliante community, visit
                our{" "}
                <Link
                  href="/north-las-vegas/aliante-area-plumbing/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  Aliante area plumbing services
                </Link>{" "}
                hub.
              </p>
              {/* TODO: When /north-las-vegas/slab-leak-detection-repair/ is confirmed built, update this link. */}
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                We also serve the broader North Las Vegas community. For our full
                North Las Vegas service coverage, see{" "}
                <Link
                  href="/north-las-vegas-plumbing-services/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  North Las Vegas plumbing services
                </Link>{" "}
                or visit our{" "}
                <Link
                  href="/slab-leak-detection-repair/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  slab leak detection and repair
                </Link>{" "}
                page.
              </p>
            </div>
            <ul className="mt-8 flex flex-wrap gap-3">
              {ALIANTE_SLAB_SUBAREAS.map((area) => (
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
              {ALIANTE_SLAB_RELATED.map((service) => (
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
                Frequently Asked Questions About Slab Leaks in the Aliante Area
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {ALIANTE_SLAB_FAQS.map((faq) => (
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
          headline="Slab Leak in Your Aliante Home? Start with Accurate Detection."
          body="Red Carpet Plumbing uses non-invasive methods to locate slab leaks in Aliante area homes before recommending any repair work. We explain all repair options clearly before anything is opened or cut."
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
