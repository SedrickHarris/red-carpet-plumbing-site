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
import TrustStrip from "@/components/TrustStrip";

// FLAG: VERIFY before publishing. "emergency plumbing service available" and
// "transparent pricing, no hidden fees" are source-site claims. License
// #0048585A is a verified business claim. Telephone +17025679172 is carried
// from existing pages. VERIFY before launch.
// SCHEMA NOTE: North Las Vegas is an incorporated city.
// Service.areaServed uses City (North Las Vegas) -> State (Nevada).
// NOT Place. NOT AdministrativeArea. NOT Clark County.
// No AggregateRating schema. FAQPage derives from NLV_SLAB_FAQS and
// HowTo from NLV_SLAB_STEPS (character-for-character with visible text).
// Hero backgroundImage uses the slab-leak card.webp (higher-res than the
// low-res hero.webp), matching app/las-vegas/slab-leak-detection-repair.

export const metadata: Metadata = {
  title: "Slab Leak Detection and Repair in North Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Slab leak detection and repair in North Las Vegas, NV. Red Carpet Plumbing uses acoustic sensors, pressure testing, and thermal imaging to locate slab leaks in older galvanized and Aliante-era copper pipe homes. Call (702) 567-9172.",
  alternates: {
    canonical: "https://redcarpetplumbing.com/north-las-vegas/slab-leak-detection-repair/",
  },
  openGraph: {
    title: "Slab Leak Detection and Repair in North Las Vegas, NV | Red Carpet Plumbing",
    description:
      "Licensed slab leak detection and repair throughout North Las Vegas, NV. Galvanized pipe and copper line expertise. Acoustic sensors, pressure testing, thermal imaging. Call (702) 567-9172.",
    url: "https://redcarpetplumbing.com/north-las-vegas/slab-leak-detection-repair/",
    siteName: "Red Carpet Plumbing",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const NLV_SLAB_TRUST = [
  "Nevada Contractor License #0048585A, C-1 Plumbing and Heating",
  "Non-Invasive Slab Leak Detection",
  "All Repair Options Explained",
  "Serving North Las Vegas and the Las Vegas Valley",
];

const NLV_SLAB_SIGNS: { label: string; body: string }[] = [
  {
    label: "Warm or hot spots on the floor",
    body: "A warm area on a tile or concrete floor when the heating system is not running is a common sign of a hot water supply line leaking beneath the slab. The leak heats the concrete directly above it.",
  },
  {
    label: "The sound of running water when all fixtures are off",
    body: "If you can hear water moving inside the walls or floor when no faucets, toilets, or appliances are in use, a leak beneath the slab may be the source. The sound is caused by pressurized water escaping through a breach in the pipe.",
  },
  {
    label: "Unexplained increase in your water bill",
    body: "A sudden or gradual increase in water usage on your bill without a change in household habits can indicate a slow slab leak that is releasing water steadily beneath the foundation.",
  },
  {
    label: "Cracks in flooring, baseboards, or walls",
    body: "Water escaping beneath the slab saturates the soil and can cause the foundation to shift slightly. This movement can produce cracks in floor tile, separation at baseboards, or hairline cracks in drywall near floor level.",
  },
  {
    label: "Wet or damp flooring with no surface source",
    body: "Moisture appearing on flooring surfaces that cannot be traced to a spill, condensation, or surface leak may be wicking up from a slab leak below.",
  },
  {
    label: "Mold or mildew smell at floor level",
    body: "A persistent mold or mildew odor at floor level, particularly in areas without an obvious moisture source, can indicate water accumulating beneath flooring materials from an undetected slab leak.",
  },
];

const NLV_SLAB_CAUSES: { title: string; body: string }[] = [
  {
    title: "Galvanized Steel Pipe in Older Central North Las Vegas",
    body: "Homes in the central and southern portions of North Las Vegas, built from the 1960s through the 1980s, often still have original galvanized steel supply lines. Galvanized steel corrodes from the inside out under Las Vegas Valley hard water conditions. As decades of corrosion build up, the pipe wall thins and develops leak points at joints, fittings, and straight runs beneath the slab. Unlike copper pinhole leaks that often develop slowly, galvanized pipe failures beneath the slab can release significant water before any surface sign appears. Homes with original galvanized lines that have experienced a first slab area leak are strong candidates for full re-piping rather than repeated spot repairs on a line that is corroded throughout.",
  },
  {
    title: "Aliante and Mid-2000s Homes Entering Their First Service Cycle",
    body: "The Aliante master-planned community and other North Las Vegas neighborhoods developed between 2000 and 2008 now have homes that are 16 to 25 years old. These homes were built with copper supply lines rather than galvanized steel, but they are entering the age range where the first signs of hard water mineral corrosion appear in the pipe walls. A first slab leak in an Aliante home is often an early indicator that the copper pipe walls have thinned, making a professional pipe condition assessment worthwhile alongside the repair.",
  },
  {
    title: "Hard Water Mineral Corrosion Throughout North Las Vegas",
    body: "North Las Vegas receives Las Vegas Valley municipal water from Lake Mead, which measures 17 to 24 grains per gallon of dissolved minerals. This places North Las Vegas among the hardest municipal water supplies in the United States. Over years of exposure, calcium and magnesium deposits thin copper pipe walls from the inside and accelerate corrosion in galvanized lines, increasing the risk of slab leak failure in both older and mid-age North Las Vegas homes.",
  },
  {
    title: "Caliche Soil Movement and Slab Foundation Stress",
    body: "Caliche and expansive clay soils beneath North Las Vegas slab foundations shift with temperature changes and seasonal rainfall. This soil movement creates ongoing mechanical stress on pipes embedded in and running beneath concrete, contributing to joint separation and stress fractures over years of cycling. This effect compounds the existing corrosion risk in older homes with galvanized or thinning copper lines.",
  },
];

const NLV_SLAB_DETECTION: { label: string; body: string }[] = [
  {
    label: "Acoustic leak detection",
    body: "Acoustic sensors placed on the slab surface amplify the sound of water escaping under pressure from a pipe breach. This method allows Red Carpet Plumbing to narrow the location of the leak to a specific area of the slab without any cutting or demolition.",
  },
  {
    label: "Pressure testing",
    body: "Pressure testing isolates which section of the plumbing system is losing pressure and confirms an active leak. It identifies which line is affected before any detection equipment is deployed, directing the investigation to the correct pipe.",
  },
  {
    label: "Thermal imaging",
    body: "For hot water line leaks, thermal imaging identifies temperature differences on floor surfaces caused by escaping hot water heating the concrete above the breach. Thermal imaging narrows the search area before acoustic sensors pinpoint the exact location.",
  },
  {
    label: "Electronic leak detection",
    body: "Electronic detection equipment amplifies the sound of water movement through flooring and concrete surfaces, supporting acoustic detection in homes where slab thickness or pipe depth makes surface listening more difficult.",
  },
];

const NLV_SLAB_REPAIR_OPTIONS: {
  heading: string;
  body: string;
  linkPre?: string;
  linkHref?: string;
  linkText?: string;
  linkPost?: string;
}[] = [
  {
    heading: "Spot Repair Through Concrete",
    body: "Spot repair involves cutting the concrete slab directly above the confirmed leak location, repairing or replacing the damaged pipe section, and patching the concrete. This is a focused approach appropriate for an isolated leak in a pipe that is otherwise in good condition. For Aliante-era copper homes where the surrounding pipe is assessed as sound, spot repair can be the right choice for a first-time localized failure.",
    linkPre: " See our ",
    linkHref: "/water-pipe-repair-replacement/",
    linkText: "water pipe repair and replacement",
    linkPost: " services.",
  },
  {
    heading: "Pipe Rerouting",
    body: "Pipe rerouting bypasses the damaged section entirely by running a new supply line through walls, ceilings, or accessible above-slab pathways, removing the aging pipe from beneath the foundation. For older North Las Vegas homes where galvanized lines are corroded throughout, or where the pipe condition assessment shows thinning consistent with decades of hard water exposure, rerouting is often the more durable long-term solution.",
    linkPre: " See our ",
    linkHref: "/re-piping/",
    linkText: "re-piping services",
    linkPost: " for homes where the full supply system may be approaching similar condition.",
  },
  {
    heading: "Epoxy Pipe Lining",
    body: "Epoxy pipe lining applies a specialized coating to the interior of the existing pipe, sealing cracks and restoring pipe integrity from the inside without excavation. This method is less invasive than concrete cutting and works best for pipes with localized damage where the overall pipe structure is still intact.",
  },
];

const NLV_SLAB_STEPS: { name: string; body: string }[] = [
  {
    name: "Call and gather information",
    body: "Call (702) 567-9172 to reach Red Carpet Plumbing. We ask about your symptoms, the age and type of your home, and any prior plumbing history to help us prepare the right detection equipment before we arrive.",
  },
  {
    name: "Confirm and isolate the leak",
    body: "A licensed plumber arrives at your North Las Vegas property and performs pressure testing to confirm an active leak and isolate which line is affected. For homes with galvanized supply lines, we note the pipe material and age context as part of the assessment.",
  },
  {
    name: "Locate the leak precisely",
    body: "We deploy acoustic sensors, thermal imaging, and electronic detection equipment to locate the leak to a specific area of the slab without cutting. Precise location is essential for minimizing concrete disturbance during any repair.",
  },
  {
    name: "Present repair options",
    body: "We explain what we found, what repair options apply to your specific leak location and pipe condition, and what each option involves. For older North Las Vegas homes with galvanized lines, we discuss whether the surrounding pipe condition suggests a targeted repair or a broader approach is more appropriate.",
  },
  {
    name: "Complete the repair and verify",
    body: "We complete the approved repair, pressure-test the repaired line to confirm it holds, and restore the work area. If a permit is required for the work performed, we handle filing with the City of North Las Vegas.",
  },
];

const NLV_SLAB_COMMUNITIES: { name: string; href?: string }[] = [
  { name: "Aliante Area", href: "/north-las-vegas/aliante-area-plumbing/" },
  { name: "Central North Las Vegas" },
  { name: "Craig Road Corridor" },
  { name: "Cheyenne Avenue Area" },
  { name: "Carey Area" },
  { name: "Simmons Street Corridor" },
  { name: "Losee Road Area" },
  { name: "Downtown North Las Vegas" },
  { name: "Northwest North Las Vegas" },
];

const NLV_SLAB_RELATED = [
  {
    title: "Emergency Plumbing in North Las Vegas",
    description:
      "Fast response to burst pipes, active slab leaks, sewer backups, and other plumbing emergencies throughout North Las Vegas.",
    href: "/north-las-vegas/emergency-plumbing/",
    image: "/images/services/emergency-plumbing/card.webp",
    imageAlt: "Emergency plumbing service in North Las Vegas, NV",
  },
  {
    title: "Leak Detection and Repair in North Las Vegas",
    description:
      "Non-invasive leak detection and repair for hidden leaks in North Las Vegas homes. Acoustic sensors, pressure testing, and thermal imaging.",
    href: "/north-las-vegas/leak-detection-repair/",
    image: "/images/services/leak-detection-repair/card.webp",
    imageAlt: "Leak detection and repair in North Las Vegas, NV",
  },
  {
    title: "Drain Cleaning in North Las Vegas",
    description:
      "Professional drain cleaning for North Las Vegas homes including older galvanized drain systems in central neighborhoods.",
    href: "/north-las-vegas/drain-cleaning/",
    image: "/images/services/drain-cleaning/card.webp",
    imageAlt: "Drain cleaning in North Las Vegas, NV",
  },
  {
    title: "Water Heater Repair and Installation in North Las Vegas",
    description:
      "Tank and tankless water heater repair and installation for North Las Vegas homes under hard water conditions.",
    href: "/north-las-vegas/water-heater-repair-installation/",
    image: "/images/services/water-heater-repair-installation/card.webp",
    imageAlt: "Water heater repair and installation in North Las Vegas, NV",
  },
];

const NLV_SLAB_FAQS = [
  {
    question: "Does Red Carpet Plumbing serve North Las Vegas for slab leak detection and repair?",
    answer:
      "Yes. Red Carpet Plumbing provides slab leak detection and repair throughout North Las Vegas, NV, including older central neighborhoods, the Aliante area, and the Craig Road and Cheyenne Avenue corridors. Call (702) 567-9172 to schedule service.",
  },
  {
    question: "What causes slab leaks in North Las Vegas homes?",
    answer:
      "The most common causes in North Las Vegas are hard water mineral corrosion and caliche soil movement. Homes in central and southern North Las Vegas built from the 1960s through the 1980s often still have original galvanized steel supply lines, which corrode from the inside out under hard water conditions. Aliante-area homes built between 2000 and 2008 have copper lines now entering their first service cycle. Las Vegas Valley water from Lake Mead measures 17 to 24 grains per gallon, which accelerates pipe wall thinning in both materials.",
  },
  {
    question: "How is a slab leak detected without tearing up the floor?",
    answer:
      "Red Carpet Plumbing uses acoustic sensors, pressure testing, and thermal imaging to locate slab leaks without cutting concrete. Acoustic sensors amplify the sound of pressurized water escaping through a pipe breach. Pressure testing confirms which line is losing pressure. Thermal imaging identifies hot water line leaks by detecting temperature differences on the floor surface above the breach. These methods allow us to pinpoint the leak location before any repair work begins.",
  },
  {
    question: "What are my repair options for a slab leak in North Las Vegas?",
    answer:
      "The three main repair options are spot repair through concrete, pipe rerouting above the slab, and epoxy pipe lining. Spot repair is appropriate for an isolated leak in a pipe that is otherwise in good condition. Pipe rerouting bypasses the damaged section entirely and is often the better long-term solution for older North Las Vegas homes with galvanized lines corroded throughout. Epoxy lining seals the interior of the existing pipe without excavation. Red Carpet Plumbing explains all options before any work begins.",
  },
  {
    question: "Are older North Las Vegas homes at higher risk for slab leaks?",
    answer:
      "Yes. Homes in central and southern North Las Vegas built from the 1960s through the 1980s with original galvanized steel supply lines are at elevated slab leak risk. Galvanized pipe corrodes from the inside out under Las Vegas Valley hard water, thinning pipe walls over decades until failure points develop at joints and fittings beneath the slab. Aliante-area homes built between 2000 and 2008 with copper lines are entering the age range where first-service-cycle slab leaks begin appearing.",
  },
  {
    question: "Is there an emergency slab leak plumber available in North Las Vegas?",
    // FLAG: VERIFY 24/7 availability before final launch.
    answer:
      "Red Carpet Plumbing provides emergency plumbing service for North Las Vegas including slab leak response. Call (702) 567-9172 to reach a plumber.",
  },
  {
    question: "Who issues plumbing permits for slab leak repairs in North Las Vegas?",
    answer:
      "Plumbing permits for North Las Vegas properties, including slab leak repair work, are issued by the City of North Las Vegas. Red Carpet Plumbing holds Nevada Contractor License #0048585A and handles permit filing with the City of North Las Vegas for permitted repair work.",
  },
  {
    question: "How much does slab leak repair cost in North Las Vegas?",
    // FLAG: VERIFY transparent pricing claim before final launch.
    answer:
      "Slab leak repair costs vary based on the location of the leak, the pipe material, the repair method selected, and the extent of concrete work required. Red Carpet Plumbing provides transparent pricing after detection and before any repair work begins. Call (702) 567-9172 for more information.",
  },
];

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Slab Leak Detection and Repair in North Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides non-invasive slab leak detection and repair for homes in North Las Vegas, NV. Acoustic sensors, pressure testing, and thermal imaging. Galvanized pipe and copper line expertise. Nevada Contractor License #0048585A.",
  url: "https://redcarpetplumbing.com/north-las-vegas/slab-leak-detection-repair/",
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
    { "@type": "ListItem", position: 1, name: "Home", item: "https://redcarpetplumbing.com/" },
    { "@type": "ListItem", position: 2, name: "North Las Vegas Plumbing Services", item: "https://redcarpetplumbing.com/north-las-vegas-plumbing-services/" },
    { "@type": "ListItem", position: 3, name: "Slab Leak Detection and Repair in North Las Vegas", item: "https://redcarpetplumbing.com/north-las-vegas/slab-leak-detection-repair/" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Slab Leak Detection and Repair in North Las Vegas, NV",
  serviceType: "Slab Leak Detection and Repair",
  description:
    "Red Carpet Plumbing provides non-invasive slab leak detection and repair for homes in North Las Vegas, NV. Acoustic sensors, pressure testing, and thermal imaging locate leaks without demolition. Repair options include spot repair, pipe rerouting, and epoxy pipe lining. Nevada Contractor License #0048585A, C-1 Plumbing and Heating.",
  provider: {
    "@type": "Plumber",
    name: "Red Carpet Plumbing",
    url: "https://redcarpetplumbing.com",
    // FLAG: VERIFY telephone before launch.
    telephone: "+17025679172",
  },
  areaServed: {
    "@type": "City",
    name: "North Las Vegas",
    containedInPlace: {
      "@type": "State",
      name: "Nevada",
    },
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Red Carpet Plumbing Handles a Slab Leak Call in North Las Vegas",
  description:
    "The slab leak detection and repair process used by Red Carpet Plumbing for North Las Vegas, NV homes.",
  step: NLV_SLAB_STEPS.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.name,
    text: s.body,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: NLV_SLAB_FAQS.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function NorthLasVegasSlabLeakPage() {
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
            { label: "North Las Vegas Plumbing Services", href: "/north-las-vegas-plumbing-services/" },
            { label: "Slab Leak Detection and Repair in North Las Vegas" },
          ]}
        />

        {/* SECTION 1: HERO */}
        <HeroSection
          headingLevel="h1"
          headline="Slab Leak Detection and Repair in North Las Vegas, NV"
          subheading="Red Carpet Plumbing provides non-invasive slab leak detection and repair for homes throughout North Las Vegas, NV. Older central neighborhoods with galvanized steel lines, Aliante-area copper homes, and every vintage in between. Acoustic sensors, pressure testing, and thermal imaging. Call (702) 567-9172."
          trustItems={NLV_SLAB_TRUST}
          primaryCTA={{ label: "Call (702) 567-9172", href: "tel:+17025679172" }}
          secondaryCTA={{ label: "Request Service", href: "/contact/" }}
          ctaNote="Licensed plumbers. Serving North Las Vegas, NV."
          formSlot={<QuoteFormPlaceholder title="Get Slab Leak Help" />}
          backgroundImage={{
            // hero.webp is a low-res asset (18KB); card.webp is the higher-res image.
            // TODO: swap to a dedicated high-res slab-leak hero when available.
            src: "/images/services/slab-leak-detection-repair/card.webp",
            alt: "Slab leak detection in North Las Vegas, NV",
          }}
        />

        {/* SECTION 2: TRUST STRIP */}
        <TrustStrip
          variant="red"
          items={NLV_SLAB_TRUST}
          ariaLabel="Why North Las Vegas customers choose Red Carpet Plumbing for slab leak service"
        />

        {/* SECTION 3: AEO DIRECT ANSWER */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                What Is a Slab Leak?
              </h2>
              <div className="mt-6 rounded-r-xl border-l-4 border-brand-primary bg-brand-surface-alt p-6">
                <p className="text-lg leading-8 text-brand-dark/80">
                  A slab leak is a water leak in a supply or drain line running
                  beneath or through a concrete slab foundation. In North Las
                  Vegas, slab leaks are caused by hard water mineral corrosion
                  in galvanized steel and copper supply lines, mechanical stress
                  from caliche and expansive clay soil movement beneath slab
                  foundations, and the natural aging of pipe materials over
                  decades of service. Red Carpet Plumbing provides slab leak
                  detection and repair throughout North Las Vegas using acoustic
                  sensors, pressure testing, and thermal imaging. For general
                  slab leak information, see our{" "}
                  <Link
                    href="/slab-leak-detection-repair/"
                    className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                  >
                    slab leak detection and repair
                  </Link>{" "}
                  page.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: SIGNS */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                  Signs of a Slab Leak in Your North Las Vegas Home
                </h2>
              </SectionRevealItem>
              <SectionRevealItem className="mt-10">
                <ul className="space-y-5">
                  {NLV_SLAB_SIGNS.map((s) => (
                    <li
                      key={s.label}
                      className="rounded-2xl bg-white p-6 ring-1 ring-brand-surface-alt"
                    >
                      <p className="text-base leading-7 text-brand-dark/80">
                        <strong className="font-semibold text-brand-dark">
                          {s.label}.
                        </strong>{" "}
                        {s.body}
                      </p>
                    </li>
                  ))}
                </ul>
              </SectionRevealItem>
            </SectionReveal>
          </div>
        </section>

        {/* SECTION 5: CAUSES */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                  What Causes Slab Leaks in North Las Vegas Homes
                </h2>
              </SectionRevealItem>
              <SectionRevealItem className="mt-12 space-y-10">
                {NLV_SLAB_CAUSES.map((cause) => (
                  <article
                    key={cause.title}
                    className="relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:rounded-full before:bg-brand-primary"
                  >
                    <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                      {cause.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-brand-dark/80">
                      {cause.body}
                    </p>
                  </article>
                ))}
              </SectionRevealItem>
            </SectionReveal>
          </div>
        </section>

        {/* SECTION 6: DETECTION METHODS */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                  Slab Leak Detection Methods We Use
                </h2>
              </SectionRevealItem>
              <SectionRevealItem className="mt-10">
                <ul className="space-y-5">
                  {NLV_SLAB_DETECTION.map((d) => (
                    <li
                      key={d.label}
                      className="rounded-2xl bg-white p-6 ring-1 ring-brand-surface-alt"
                    >
                      <p className="text-base leading-7 text-brand-dark/80">
                        <strong className="font-semibold text-brand-dark">
                          {d.label}.
                        </strong>{" "}
                        {d.body}
                      </p>
                    </li>
                  ))}
                </ul>
              </SectionRevealItem>
            </SectionReveal>
          </div>
        </section>

        {/* SECTION 7: REPAIR OPTIONS */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                  Slab Leak Repair Options for North Las Vegas Homes
                </h2>
              </SectionRevealItem>
              <SectionRevealItem className="mt-10">
                <ul className="space-y-5">
                  {NLV_SLAB_REPAIR_OPTIONS.map((opt) => (
                    <li
                      key={opt.heading}
                      className="rounded-2xl bg-brand-surface-alt p-6 ring-1 ring-brand-surface-alt"
                    >
                      <h3 className="text-xl font-semibold text-brand-dark">
                        {opt.heading}
                      </h3>
                      <p className="mt-3 text-base leading-7 text-brand-dark/80">
                        {opt.body}
                        {opt.linkPre && opt.linkHref && opt.linkText ? (
                          <>
                            {opt.linkPre}
                            <Link
                              href={opt.linkHref}
                              className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                            >
                              {opt.linkText}
                            </Link>
                            {opt.linkPost}
                          </>
                        ) : null}
                      </p>
                    </li>
                  ))}
                </ul>
              </SectionRevealItem>
            </SectionReveal>
          </div>
        </section>

        {/* SECTION 8: MID-PAGE CTA */}
        <section className="bg-brand-charcoal text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Suspected Slab Leak in Your North Las Vegas Home?
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/80">
                  Red Carpet Plumbing locates slab leaks precisely before
                  recommending a repair approach and presents all options clearly
                  before any work begins. Call (702) 567-9172 to schedule
                  detection service.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row lg:flex-col xl:flex-row">
                <a
                  href="tel:+17025679172"
                  className="inline-flex min-h-12 items-center justify-center rounded-lg bg-brand-primary px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-brand-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary motion-safe:transition-transform motion-safe:active:scale-[0.97]"
                >
                  Call (702) 567-9172
                </a>
                <Link
                  href="/contact/"
                  className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/30 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Request Service
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 9: HOWTO PROCESS STEPS */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                  How Red Carpet Plumbing Handles a Slab Leak Call in North Las
                  Vegas
                </h2>
              </SectionRevealItem>
              <SectionRevealItem className="mt-12">
                <ol className="space-y-8">
                  {NLV_SLAB_STEPS.map((step, index) => (
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

        {/* SECTION 10: SERVICE AREA NOTE */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Serving North Las Vegas for Slab Leak Detection and Repair
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                North Las Vegas is an incorporated city in Clark County, Nevada.
                Red Carpet Plumbing serves the full city including central and
                southern neighborhoods with older galvanized pipe housing stock,
                the Aliante master-planned community in the northwest, and the
                Craig Road and Cheyenne Avenue corridors. Plumbing permits for
                North Las Vegas properties, including slab leak repair work, are
                issued by the City of North Las Vegas.
              </p>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                For a full list of plumbing services available in North Las
                Vegas, visit our{" "}
                <Link
                  href="/north-las-vegas-plumbing-services/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  North Las Vegas plumbing services
                </Link>{" "}
                hub. For Aliante-specific service information, see our{" "}
                <Link
                  href="/north-las-vegas/aliante-area-plumbing/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  Aliante area plumbing
                </Link>{" "}
                page.
              </p>
            </div>
            <ul className="mt-8 flex flex-wrap gap-3">
              {NLV_SLAB_COMMUNITIES.map((area) =>
                area.href ? (
                  <li key={area.name}>
                    <Link
                      href={area.href}
                      className="block rounded-lg bg-brand-surface-alt px-5 py-3 text-sm font-medium text-brand-primary ring-1 ring-brand-surface-alt hover:bg-brand-surface-alt/80"
                    >
                      {area.name}
                    </Link>
                  </li>
                ) : (
                  <li key={area.name}>
                    <span className="block rounded-lg bg-brand-surface-alt px-5 py-3 text-sm font-medium text-brand-dark/80 ring-1 ring-brand-surface-alt">
                      {area.name}
                    </span>
                  </li>
                )
              )}
            </ul>
          </div>
        </section>

        {/* SECTION 11: RELATED SERVICE CARDS */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <SectionReveal>
              <SectionRevealItem>
                <div className="max-w-3xl text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Related Plumbing Services in North Las Vegas
                  </h2>
                </div>
              </SectionRevealItem>
              <SectionRevealItem className="mt-14">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {NLV_SLAB_RELATED.map((card) => (
                    <ServiceCard
                      key={card.href}
                      title={card.title}
                      description={card.description}
                      href={card.href}
                      image={card.image}
                      imageAlt={card.imageAlt}
                      built={true}
                    />
                  ))}
                </div>
              </SectionRevealItem>
            </SectionReveal>
          </div>
        </section>

        {/* SECTION 12: FAQ */}
        <section className="bg-white">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Slab Leak Questions for North Las Vegas Homeowners
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {NLV_SLAB_FAQS.map((faq) => (
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

        {/* SECTION 13: FINAL CTA */}
        <CTASection
          background="red"
          headline="Slab Leak in Your North Las Vegas Home? We Can Help."
          primaryCTA={{ label: "Call (702) 567-9172", href: "tel:+17025679172" }}
          secondaryCTA={{ label: "Request Service", href: "/contact/" }}
        />
      </main>

      <StickyMobileCTA />
      <SiteFooter />
    </>
  );
}

function FaqChevron() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-5 w-5 flex-none transition-transform duration-200 group-open:rotate-180"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}
