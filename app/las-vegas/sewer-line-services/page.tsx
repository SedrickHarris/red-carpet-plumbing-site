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

// ---------------------------------------------------------------------------
// Active FLAGs for this page (source-only; none appear as unverified claims in
// rendered copy beyond those noted):
//   - telephone (+17025679172) in serviceSchema.provider — VERIFY before launch.
//   - "Transparent Pricing, No Hidden Fees" / "no hidden fees" trust items +
//     ctaNote + Why-Choose pricing bullet — source-site claims, VERIFY.
//   - 24/7 availability for sewer emergencies (Why-Choose bullet) — VERIFY.
//   - Sewer line replacement permit/inspection claim (Section 4 card 5) — VERIFY
//     against current business operations.
//   - License #0048585A is a verified business claim.
//
// Las Vegas cluster pattern (matches app/las-vegas/drain-cleaning/page.tsx):
// 5 separate JsonLd blocks in order WebPage -> BreadcrumbList -> Service ->
// HowTo -> FAQPage. areaServed `City` (Las Vegas) -> containedInPlace `State`
// (Nevada) — NOT Place, NOT AdministrativeArea. BreadcrumbList = 3 items. No
// AggregateRating / Review schema. HowTo + FAQPage both derive from a single
// const (visible = schema). Hero carries trustItems AND a separate red trust
// band (Section 2), per the LV cluster.
//
// Hero has no backgroundImage: no sewer-line-services image asset exists
// (public/images/services/sewer-line-services/ is absent, and the core sewer
// page also ships without a hero image). HeroSection renders its gradient.
// TODO: add a dedicated /images/services/sewer-line-services/ hero asset.
//
// Service schema provider includes a PostalAddress (locality/region/country)
// per the approved P47 Service schema; the LV drain sibling omits the address.
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title: "Sewer Line Services in Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides sewer line inspection, cleaning, repair, and replacement in Las Vegas, NV. Camera inspection before repair. Licensed plumbers. NV #0048585A. Call (702) 567-9172.",
  alternates: {
    canonical: "https://redcarpetplumbing.com/las-vegas/sewer-line-services/",
  },
  openGraph: {
    title: "Sewer Line Services in Las Vegas, NV | Red Carpet Plumbing",
    description:
      "Licensed sewer line inspection, cleaning, repair, and replacement in Las Vegas. Camera inspection before all repairs. Hydro jetting. Trenchless options. NV #0048585A.",
    url: "https://redcarpetplumbing.com/las-vegas/sewer-line-services/",
    siteName: "Red Carpet Plumbing",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

type LinkSeg = string | { href: string; text: string };

// ---------------------------------------------------------------------------
// FAQ source of truth. The visible FAQ section AND the FAQPage JSON-LD schema
// both derive from this single array, guaranteeing a character-for-character
// match. Do not edit one without the other.
// ---------------------------------------------------------------------------
const LV_SEWER_FAQS = [
  {
    question: "What are the signs of a sewer line problem in Las Vegas?",
    answer:
      "The most common signs of a sewer line problem are multiple drains backing up or running slowly at the same time, gurgling sounds coming from drains or toilets after water use, sewage odor inside the home or near outdoor cleanouts, wet or sunken patches in the yard above the sewer line, and toilets that bubble when you run water elsewhere in the house. When more than one drain is affected, the problem is usually in the main sewer line rather than a branch drain.",
  },
  {
    question: "What causes sewer line damage in Las Vegas?",
    answer:
      "The most common causes of sewer line damage in Las Vegas are root intrusion from desert-adapted trees in established yards, hard water mineral buildup that narrows and roughens the pipe interior, caliche soil movement that shifts pipe joints and creates offsets, and aging cast iron or galvanized pipe in homes built between the 1970s and early 1990s. A camera inspection is the most accurate way to identify which cause is responsible for a specific sewer line problem.",
  },
  {
    question: "What is a sewer camera inspection?",
    answer:
      "A sewer camera inspection uses a waterproof camera attached to a flexible cable to view the interior of the sewer line from a cleanout or access point. The camera sends real-time video to a monitor, allowing us to see blockages, root intrusion, cracks, pipe offsets, collapsed sections, and mineral buildup that cannot be assessed from outside. We use camera inspection as the starting point for sewer line diagnostics so we can recommend the right repair method based on what is actually inside the pipe.",
  },
  {
    question: "Can a sewer line be repaired without digging?",
    answer:
      "In many cases, yes. Trenchless repair methods such as CIPP pipe lining and pipe bursting allow sewer line repair and replacement with minimal excavation. CIPP lining installs a structural resin liner inside the existing pipe from small access points, creating a new pipe within the old one without removing the soil above it. Pipe bursting pulls new pipe through the old line while fracturing it outward. Whether a trenchless method is appropriate depends on the condition of the existing pipe, the type of damage, and the pipe's location.",
  },
  {
    question: "What is hydro jetting a sewer line?",
    answer:
      "Hydro jetting uses a high-pressure water nozzle inserted into the sewer line to scour the interior pipe walls, removing grease, mineral scale, root tendrils, and debris. Unlike cable clearing, which punches a hole through a blockage, hydro jetting cleans the pipe walls from the inside. Hydro jetting is particularly effective for Las Vegas homes with hard water mineral buildup and for commercial properties with grease accumulation in kitchen drain lines.",
  },
  {
    question: "What happens if a sewer backup is not repaired?",
    answer:
      "Ignoring a sewer backup allows sewage to back up into the home or business, which creates a health hazard, damages flooring and walls, and can require extensive cleanup and remediation. A recurring sewer backup that is only partially cleared by cable cleaning will worsen over time, especially if the underlying cause is root intrusion, pipe damage, or a collapsed section. Addressing a sewer problem early, before a full backup occurs, is significantly less costly than emergency cleanup and repair after a sewage overflow.",
  },
];

// ---------------------------------------------------------------------------
// Process steps — HowTo schema source of truth. Visible numbered steps and the
// HowTo JSON-LD both derive from this array.
// ---------------------------------------------------------------------------
const LV_SEWER_STEPS = [
  {
    name: "Schedule a sewer camera inspection",
    body: "Call (702) 567-9172 or request service online and describe the symptoms you are experiencing. We schedule a camera inspection as the first step for all sewer line diagnostics. A camera inspection shows us exactly what is inside the line so we can give you an accurate assessment and explain your repair options before any work begins.",
  },
  {
    name: "Review the inspection findings and repair options",
    body: "After the camera inspection, we review the findings with you and explain the condition of the sewer line. We present the repair or cleaning options appropriate for the problem, explain the pros and cons of each, and answer your questions before any work is approved.",
  },
  {
    name: "Complete the repair, cleaning, or replacement",
    body: "We complete the approved service using the correct equipment and method for the job. For hydro jetting and cable clearing, we work from cleanout access points. For trenchless repair, we work from minimal access excavations. For open repair or replacement, we coordinate permit requirements and inspections as needed.",
  },
  {
    name: "Verify the sewer line is clear and functioning",
    body: "After the repair or cleaning is complete, we verify the result using a camera or flow test as appropriate. We confirm the line is clear, the repair is intact, and the sewer system is functioning correctly before we complete the job.",
  },
];

// FLAG: VERIFY before publishing — license number, transparent pricing, and
// 24/7 availability are source-site claims. Confirm all before launch.
const WHY_CHOOSE = [
  "Local Las Vegas plumbing company familiar with hard water conditions, caliche soil, and aging sewer pipe systems throughout the city",
  "Licensed plumbers (NV License #0048585A)",
  "Camera inspection before all sewer line repair recommendations",
  "Full range of sewer services: cleaning, hydro jetting, repair, trenchless lining, and replacement",
  "Residential and commercial sewer line service throughout Las Vegas",
  "Transparent pricing with no hidden fees",
  "24/7 availability for sewer emergencies",
];

// Red brand-primary trust band (Section 2).
const LV_SEWER_TRUST_STRIP = [
  "NV Licensed, #0048585A",
  "Sewer Line Camera Inspection",
  "Serving the Las Vegas Valley",
  "Transparent Pricing, No Hidden Fees",
];

const LV_SEWER_NEIGHBORHOODS = [
  "Downtown Las Vegas",
  "Desert Inn / West Sahara",
  "Desert Shores",
  "Sunrise Manor",
  "Whitney",
  "Winchester",
  "Southwest Las Vegas",
  "Spring Valley Adjacent",
  "Summerlin Adjacent",
  "Eastern Las Vegas",
];

// ---------------------------------------------------------------------------
// Why Las Vegas homes need sewer line service (Section 3) — strong-inline label
// + body, matching the LV cluster cause pattern.
// ---------------------------------------------------------------------------
const LV_SEWER_CAUSES = [
  {
    label: "Hard water mineral buildup inside sewer lines",
    body: "Las Vegas receives some of the hardest municipal water in the country. The dissolved mineral content in water supplied throughout the Las Vegas Valley coats the interior of sewer and drain lines over time, narrowing the pipe bore and creating rough surfaces that trap grease, soap, and debris. In older Las Vegas homes, this process accelerates on aging galvanized and cast iron pipe walls that have already developed internal corrosion, leading to recurring blockages that clearing alone cannot permanently resolve.",
  },
  {
    label: "Caliche soil and ground movement around sewer lines",
    body: "The caliche-heavy soil common throughout Las Vegas is dense, poorly draining, and subject to ground movement during temperature cycles. Sewer lines buried in caliche soil experience joint stress and offset settling that can open gaps at pipe connections, allow root intrusion, and create low spots where solids accumulate. Camera inspection is the most reliable way to identify these conditions because they are not visible from the surface.",
  },
  {
    label: "Aging sewer pipe in 1970 to 1990 Las Vegas housing stock",
    body: "A large portion of Las Vegas homes were built between the 1970s and early 1990s. Many still have original cast iron or galvanized sewer laterals that are approaching or past typical service life. These pipes corrode from the inside out, scale over with mineral deposits, and eventually fracture or collapse. When main sewer lines in these homes begin showing repeated blockages or backup symptoms, a camera inspection often reveals the underlying pipe condition that cable clearing has been masking.",
  },
  {
    label: "Tree root intrusion in established Las Vegas properties",
    body: "Desert-adapted trees planted in Las Vegas yards over the past 30 to 40 years have developed root systems that actively search for moisture through aging sewer line joints and cracks. Root intrusion is one of the most common causes of sewer line blockages and damage in established Las Vegas neighborhoods. Recurring blockages that come back within weeks of cable clearing are often a sign that root intrusion has not been addressed at the source.",
  },
];

// ---------------------------------------------------------------------------
// Sewer line services (Section 4). Inline links carried in approved copy.
// ---------------------------------------------------------------------------
const LV_SEWER_SERVICES: { label: string; body: string; tail?: LinkSeg[] }[] = [
  {
    label: "Sewer Camera Inspection",
    body: "A sewer camera inspection is the starting point for all sewer line diagnostics. We run a high-resolution camera through the sewer line from the cleanout or access point to identify blockages, root intrusion, pipe offsets, cracks, collapsed sections, or buildup that cannot be assessed from the outside. Camera inspection removes guesswork from sewer line diagnosis and gives you a clear picture of the line condition before any repair work begins.",
    tail: [
      " See our ",
      {
        href: "/video-camera-plumbing-inspections/",
        text: "video camera plumbing inspections",
      },
      " page for more detail.",
    ],
  },
  {
    label: "Sewer Line Cleaning and Hydro Jetting",
    body: "We clear sewer lines using cable machines for standard blockages and hydro jetting for more thorough cleaning. Hydro jetting uses high-pressure water to scour the interior walls of the sewer line, removing grease, mineral scale, root tendrils, and debris from the pipe walls rather than just clearing a path through the clog. For Las Vegas homes with hard water mineral buildup and for commercial properties with heavy drain use, hydro jetting provides a more thorough and longer-lasting result than cable clearing alone.",
    tail: [
      " For more on drain and sewer cleaning, see ",
      { href: "/las-vegas/drain-cleaning/", text: "drain cleaning in Las Vegas" },
      ".",
    ],
  },
  {
    label: "Sewer Line Repair",
    body: "When camera inspection reveals cracks, offset joints, root damage, or localized collapse, we repair the affected section of sewer line. Repair options depend on the location and extent of damage, the pipe material, and the depth of the line. For lines that retain their approximate shape, trenchless repair methods such as CIPP pipe lining offer a no-dig option. For more severe or extended damage, open repair or pipe bursting may be required. We explain all options before work begins.",
  },
  {
    label: "Trenchless Sewer Line Repair and Replacement",
    body: "For sewer lines that qualify, trenchless methods avoid the cost and disruption of full excavation. CIPP lining installs a structural liner inside the existing pipe from access points, creating a new pipe within the old one. Pipe bursting pulls new pipe through the old line while fracturing it outward. Trenchless methods are particularly valuable in Las Vegas where caliche soil makes excavation difficult and expensive.",
    tail: [
      " See our ",
      { href: "/trenchless-piping/", text: "trenchless piping services" },
      " page for full details.",
    ],
  },
  {
    // FLAG: VERIFY — permit-pulling and inspection claim should be confirmed
    // against current business operations.
    label: "Sewer Line Replacement",
    body: "When the sewer line is collapsed, severely offset, or too degraded for repair, full replacement is the appropriate solution. We replace sewer laterals from the home to the city connection, pulling permits and scheduling inspections as required by Clark County and the City of Las Vegas.",
  },
  {
    label: "Commercial Sewer Line Services",
    body: "Red Carpet Plumbing provides sewer line services for commercial properties throughout Las Vegas, including restaurants, retail, multi-unit residential, and commercial facilities. Commercial sewer lines handle higher volumes and require regular inspection and cleaning schedules to prevent facility disruptions. We provide camera inspection, hydro jetting, and repair services for commercial sewer lines.",
  },
];

// Related services — all five targets are built (LV drain, LV emergency, LV
// re-piping, core video-camera, core trenchless).
const RELATED_SERVICES = [
  { label: "Drain Cleaning in Las Vegas", href: "/las-vegas/drain-cleaning/" },
  {
    label: "Emergency Plumbing in Las Vegas",
    href: "/las-vegas/emergency-plumbing/",
  },
  { label: "Re-Piping in Las Vegas", href: "/las-vegas/re-piping/" },
  {
    label: "Video Camera Plumbing Inspections",
    href: "/video-camera-plumbing-inspections/",
  },
  { label: "Trenchless Piping Services", href: "/trenchless-piping/" },
];

// ---------------------------------------------------------------------------
// JSON-LD payloads. areaServed `City` (Las Vegas) -> `State` (Nevada). No
// AggregateRating, no sameAs.
// ---------------------------------------------------------------------------
const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Sewer Line Services in Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides sewer line inspection, cleaning, repair, and replacement in Las Vegas, NV. Licensed plumbers. Camera inspection before repair. NV #0048585A.",
  url: "https://redcarpetplumbing.com/las-vegas/sewer-line-services/",
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
      name: "Las Vegas Plumbing Services",
      item: "https://redcarpetplumbing.com/las-vegas-plumbing-services/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Sewer Line Services in Las Vegas, NV",
      item: "https://redcarpetplumbing.com/las-vegas/sewer-line-services/",
    },
  ],
};

// FLAG: VERIFY — telephone carried from sibling pattern. Confirm before launch.
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Sewer Line Services in Las Vegas",
  serviceType: "Sewer Line Services",
  description:
    "Red Carpet Plumbing provides sewer line inspection, camera inspection, cleaning, hydro jetting, repair, trenchless lining, and replacement for residential and commercial properties in Las Vegas, NV.",
  provider: {
    "@type": "Plumber",
    name: "Red Carpet Plumbing",
    url: "https://redcarpetplumbing.com",
    telephone: "+17025679172",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Las Vegas",
      addressRegion: "NV",
      addressCountry: "US",
    },
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

// HowTo schema included because Section 5 renders the matching visible numbered
// process steps. Derived from LV_SEWER_STEPS for a guaranteed text match.
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Red Carpet Plumbing Handles Sewer Line Service in Las Vegas",
  step: LV_SEWER_STEPS.map((step, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: step.name,
    text: step.body,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: LV_SEWER_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

function renderTail(tail: LinkSeg[]) {
  return tail.map((seg, i) =>
    typeof seg === "string" ? (
      seg
    ) : (
      <Link
        key={i}
        href={seg.href}
        className="font-semibold text-brand-primary hover:text-brand-primary-hover"
      >
        {seg.text}
      </Link>
    ),
  );
}

export default function LasVegasSewerLinePage() {
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
              label: "Las Vegas Plumbing Services",
              href: "/las-vegas-plumbing-services/",
            },
            { label: "Sewer Line Services in Las Vegas, NV" },
          ]}
        />

        {/* SECTION 1: HERO */}
        {/* TODO: no /images/services/sewer-line-services/ hero asset exists;
            hero renders its gradient background. Add a dedicated hero image when
            available and pass it via backgroundImage. */}
        <HeroSection
          headingLevel="h1"
          headline="Sewer Line Services in Las Vegas, NV"
          subheading="Red Carpet Plumbing provides sewer line inspection, cleaning, repair, and replacement for homes and businesses throughout Las Vegas. From recurring backups and slow drains to root intrusion, damaged lines, and complete sewer replacements, our licensed plumbers start with a camera inspection so you know exactly what you are dealing with before any work begins."
          trustItems={[
            // FLAG: VERIFY — license number is a source-site claim.
            "NV Licensed Plumbers, #0048585A",
            "Sewer Line Camera Inspection",
            "Serving Las Vegas and the Valley",
            "Transparent Pricing, No Hidden Fees",
          ]}
          primaryCTA={{
            label: "Call (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{
            label: "Request Sewer Line Service",
            href: "/contact/",
          }}
          ctaNote="Licensed plumbers. Transparent pricing. No hidden fees."
          formSlot={<QuoteFormPlaceholder title="Get Sewer Line Help" />}
        />

        {/* SECTION 2: TRUST STRIP */}
        <TrustStrip
          items={LV_SEWER_TRUST_STRIP}
          ariaLabel="Why Las Vegas customers choose Red Carpet Plumbing for sewer line services"
        />

        {/* SECTION 3: WHY LAS VEGAS HOMES NEED SEWER LINE SERVICE */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Why Las Vegas Homes Need Sewer Line Service
                  </h2>
                </div>
              </SectionRevealItem>
              <SectionRevealItem className="mt-10">
                <ul className="space-y-5">
                  {LV_SEWER_CAUSES.map((c) => (
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
              <SectionRevealItem className="mt-8">
                <p className="text-base leading-7 text-brand-dark/70">
                  When multiple drains are slow, backing up, or producing odor at
                  the same time, the problem is typically in the main sewer line. A
                  professional camera inspection is the most reliable way to
                  identify the cause and the right repair approach.
                </p>
              </SectionRevealItem>
            </SectionReveal>
          </div>
        </section>

        {/* SECTION 4: SEWER LINE SERVICES WE PROVIDE */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Sewer Line Services in Las Vegas
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing provides the full range of sewer line services
                for residential and commercial properties throughout Las Vegas. We
                diagnose before we recommend.
              </p>
            </div>
            <ul className="mt-10 space-y-5">
              {LV_SEWER_SERVICES.map((s) => (
                <li
                  key={s.label}
                  className="rounded-2xl bg-white p-6 ring-1 ring-brand-surface-alt"
                >
                  <p className="text-base leading-7 text-brand-dark/80">
                    <strong className="font-semibold text-brand-dark">
                      {s.label}.
                    </strong>{" "}
                    {s.body}
                    {s.tail ? renderTail(s.tail) : null}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 5: OUR SEWER LINE SERVICE PROCESS (HowTo) */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Our Sewer Line Service Process
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Here is how Red Carpet Plumbing approaches sewer line service
                    for Las Vegas homes and businesses.
                  </p>
                </div>
              </SectionRevealItem>
              <SectionRevealItem className="mt-12">
                <ol className="space-y-8">
                  {LV_SEWER_STEPS.map((step, index) => (
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

        {/* SECTION 6: MID-PAGE CTA */}
        <section className="bg-brand-charcoal text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Sewer Line Problem in Las Vegas?
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/80">
                  Red Carpet Plumbing provides sewer line inspection, cleaning,
                  repair, and replacement throughout the Las Vegas
                  Valley. We start with a camera inspection so you know exactly
                  what you are dealing with before any work begins.
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
                  Request Sewer Line Service
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: WHY CHOOSE RED CARPET PLUMBING */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Why Choose Red Carpet Plumbing for Sewer Line Services
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
          </div>
        </section>

        {/* SECTION 8: SERVICE AREAS */}
        <section className="bg-brand-charcoal text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="max-w-3xl text-left">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Sewer Line Service Areas in Las Vegas
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/85">
                Red Carpet Plumbing provides sewer line services throughout Las
                Vegas and the surrounding communities of the Las Vegas Valley. We
                serve residential and commercial customers across the city,
                including neighborhoods with older housing stock that is most
                likely to need sewer line inspection and repair.
              </p>
              <p className="mt-6 text-lg leading-8 text-white/85">
                Las Vegas neighborhoods we commonly serve for sewer line services
                include Desert Inn / West Sahara, Desert Shores, Sunrise Manor,
                Whitney, Winchester, Southwest Las Vegas, and communities
                throughout the city. For sewer services in Henderson, see our core{" "}
                <Link
                  href="/sewer-line-services/"
                  className="font-semibold text-white underline underline-offset-4 hover:text-white/80"
                >
                  sewer line services
                </Link>{" "}
                page.
              </p>
              <p className="mt-6 text-lg leading-8 text-white/85">
                For all Las Vegas plumbing services, visit our{" "}
                <Link
                  href="/las-vegas-plumbing-services/"
                  className="font-semibold text-white underline underline-offset-4 hover:text-white/80"
                >
                  Las Vegas plumbing services
                </Link>{" "}
                hub.
              </p>
            </div>

            <ul className="mt-12 flex flex-wrap gap-3">
              {LV_SEWER_NEIGHBORHOODS.map((name) => (
                <li key={name}>
                  <span className="block rounded-lg border border-white/10 bg-white/5 px-5 py-3 font-medium text-white/85">
                    {name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 9: RELATED SERVICES */}
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

        {/* SECTION 10: FAQ */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Frequently Asked Questions About Sewer Line Services in Las Vegas
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {LV_SEWER_FAQS.map((faq) => (
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
        {/* FLAG: VERIFY — license number and trust claims in the body are
            source-site claims; confirm all before publishing. */}
        <CTASection
          background="red"
          headline={<>Ready to Schedule Sewer Line Service<br />in Las Vegas?</>}
          body="Red Carpet Plumbing is available for sewer line inspection, cleaning, repair, and replacement throughout the Las Vegas Valley. Licensed plumbers, transparent pricing. NV #0048585A."
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
