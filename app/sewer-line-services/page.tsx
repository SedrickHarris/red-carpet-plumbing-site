import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { HeroSection } from "@/components/HeroSection";
import { JsonLd } from "@/components/JsonLd";
import { QuoteFormPlaceholder } from "@/components/QuoteFormPlaceholder";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Sewer Line Services in Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides sewer line inspection, cleaning, repair, and replacement for homes and businesses in Las Vegas, NV. Request service today.",
  alternates: {
    canonical: "https://redcarpetplumbing.com/sewer-line-services/",
  },
  openGraph: {
    title: "Sewer Line Services in Las Vegas, NV | Red Carpet Plumbing",
    description:
      "Red Carpet Plumbing offers sewer line inspection, drain cleaning, root intrusion treatment, sewer repair, and line replacement throughout Las Vegas and the Las Vegas Valley. Contact us to schedule service.",
    url: "https://redcarpetplumbing.com/sewer-line-services/",
    siteName: "Red Carpet Plumbing",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

// ---------------------------------------------------------------------------
// FAQ source of truth. Both the visible FAQ section AND the FAQPage JSON-LD
// schema derive from this list, guaranteeing character-for-character match.
// Do not edit one without the other.
// ---------------------------------------------------------------------------
const SEWER_LINE_FAQS = [
  {
    question: "What does a sewer line service include?",
    answer:
      "Sewer line services include camera inspection to diagnose the problem, drain cleaning or hydro jetting to clear blockages, root intrusion treatment and removal, sewer line repair for cracks or damaged sections, and full or partial sewer line replacement when needed. Red Carpet Plumbing provides sewer line services for homes and businesses throughout Las Vegas and the Las Vegas Valley.",
  },
  {
    question: "How do I know if I have a sewer line problem?",
    answer:
      "Common signs of a sewer line problem include multiple slow drains in the home at the same time, gurgling sounds from toilets or drains, sewage odors inside or near the foundation, sewage backing up into tubs or toilets when using other fixtures, and wet or unusually green patches in the yard. If you notice more than one of these signs, contact a plumber for a sewer line evaluation.",
  },
  {
    question: "What causes sewer line problems in Las Vegas?",
    answer:
      "The most common causes of sewer line problems in Las Vegas include tree and shrub root intrusion, aging clay or cast iron pipes in older neighborhoods, ground shifting from desert soil conditions, and debris buildup over time. Homes built before 2000 in areas such as North Las Vegas, East Las Vegas, Paradise, and Henderson are more likely to have older sewer line materials that are susceptible to these issues.",
  },
  {
    question: "Does Red Carpet Plumbing offer sewer line inspections?",
    answer:
      "Yes, Red Carpet Plumbing offers sewer line inspections using video camera technology. A sewer scope inspection allows our team to see inside the pipe, identify the location and cause of any problem, and recommend the appropriate repair or cleaning approach. Sewer scope inspections are also available for pre-purchase property assessments.",
  },
  {
    question: "Can tree roots really damage a sewer line?",
    answer:
      "Yes, tree and shrub roots are one of the leading causes of sewer line damage. Roots enter sewer lines through small cracks or joint gaps and expand over time inside the pipe. As roots grow, they restrict flow, cause blockages, and can eventually cause the pipe wall to crack or collapse. Root intrusion is particularly common in Las Vegas neighborhoods with mature trees and older underground pipe materials.",
  },
  {
    question: "Does sewer line repair require digging up the yard?",
    answer:
      "Not always. The appropriate approach depends on the location, extent, and type of damage found during inspection. Some repairs can be completed with targeted access points rather than full excavation. Our team evaluates each situation based on the actual inspection findings and recommends the least disruptive repair method that correctly addresses the problem.",
  },
  {
    question: "Does Red Carpet Plumbing serve my area for sewer line service?",
    answer:
      "Red Carpet Plumbing provides sewer line services throughout the Las Vegas Valley, including Las Vegas, Henderson, North Las Vegas, Paradise, Summerlin, Spring Valley, Enterprise, Boulder City, Green Valley, and Lake Las Vegas. Contact us to confirm service availability in your neighborhood.",
  },
];

const HERO_TRUST_BULLETS = [
  "Residential and commercial sewer line service",
  "Sewer line inspections, cleaning, and repair",
  "Las Vegas Valley service area",
  "Emergency sewer backup response available",
];

type SignItem = { heading: string; body: string };

const SIGNS_LIST: SignItem[] = [
  {
    heading: "Multiple drains draining slowly",
    body: "When more than one drain in your home is slow at the same time, the problem is usually in the main sewer line rather than an individual fixture drain. Kitchen sinks, bathroom sinks, showers, and toilets are all connected to the same main line, so a blockage or restriction downstream affects all of them.",
  },
  {
    heading: "Gurgling sounds from drains or toilets",
    body: "Air trapped in a partially blocked sewer line creates bubbling or gurgling sounds when water drains. If you hear unusual sounds from your toilet when using a sink, or from your shower drain after flushing, this may indicate a sewer line obstruction.",
  },
  {
    heading: "Sewage odors inside or outside the home",
    body: "A properly functioning sewer system is sealed. Foul or sulfur-like odors coming from drains, near your foundation, or in the yard can indicate a cracked, broken, or badly clogged sewer line that is allowing sewer gases to escape.",
  },
  {
    heading: "Sewage backing up into fixtures",
    body: "When sewage or dirty water backs up into a tub, shower, or toilet when you use another fixture, this is a clear sign of a main sewer line blockage. This situation requires prompt professional attention to prevent further damage.",
  },
  {
    heading: "Wet patches or unusually green areas in the yard",
    body: "A broken or leaking sewer line underground can saturate surrounding soil with nutrient-rich wastewater. Unusually lush patches of grass, soggy ground, or persistent wet spots in the yard with no recent rain can indicate a sewer line leak beneath the surface.",
  },
  {
    heading: "Slow flushing or toilet that frequently backs up",
    body: "A toilet that is slow to flush, requires multiple flushes, or regularly backs up when it should not may be the first fixture showing the effects of a developing sewer line restriction or blockage.",
  },
];

type ServiceCoverItem = { heading: string; body: string };

const SERVICE_COVERS: ServiceCoverItem[] = [
  {
    heading: "Sewer line inspection",
    body: "Video camera inspections allow our team to see inside your sewer line and identify the exact location and nature of any problem. Inspections are used to diagnose blockages, cracks, root intrusion, pipe collapse, and corrosion without excavation.",
  },
  {
    heading: "Sewer line cleaning and drain clearing",
    body: "Hydro jetting and mechanical drain cleaning remove grease buildup, debris accumulation, and minor root intrusion from sewer lines. Regular cleaning can help prevent full blockages and extend the life of an older sewer line system.",
  },
  {
    heading: "Root intrusion treatment and removal",
    body: "Tree and shrub roots are one of the most common causes of sewer line damage in Las Vegas, particularly in older neighborhoods with mature landscaping. Roots enter sewer lines through small cracks and expand over time, eventually causing full blockages or pipe damage.",
  },
  {
    heading: "Sewer line repair",
    body: "Cracks, breaks, and joint separations in sewer lines can often be repaired without full replacement. Our team diagnoses the location and extent of the damage before recommending the most appropriate repair method.",
  },
  {
    heading: "Sewer line replacement",
    body: "When a sewer line is severely damaged, collapsed, or past serviceable condition, full or partial replacement may be necessary. We evaluate the condition of the line and provide straightforward recommendations based on what we find during inspection.",
  },
  {
    heading: "Pre-purchase and property inspection sewer scopes",
    body: "A sewer scope inspection before purchasing a home can identify hidden problems with the sewer line before you close escrow. Many Las Vegas homes built before 2000 have clay, cast iron, or older PVC sewer lines that may show signs of wear, root intrusion, or deterioration.",
  },
];

type ProcessStep = { heading: string; body: string };

// NOTE: Approved heading text contains em dashes ("Step 1 — Initial assessment").
// Preserved exactly per HARD SEPARATION RULE; flagged in Gate 5 report.
const PROCESS_STEPS: ProcessStep[] = [
  {
    heading: "Step 1 — Initial assessment",
    body: "We start with questions about the symptoms you are experiencing, how long they have been occurring, and which fixtures are affected. This helps our team arrive prepared with the right equipment.",
  },
  {
    heading: "Step 2 — Camera inspection when appropriate",
    body: "For sewer line problems, a video inspection gives us a real-time view inside the pipe. We locate blockages, cracks, root intrusion, or pipe collapse and determine the best approach to resolve the issue.",
  },
  {
    heading: "Step 3 — Diagnosis and recommendation",
    body: "After inspecting the line, we explain what we found in plain language, describe your options, and provide a clear recommendation. You understand the scope and the reason before any work begins.",
  },
  {
    heading: "Step 4 — Service and repair",
    body: "We complete the approved service, whether that is drain cleaning, root removal, targeted repair, or line replacement. We aim to minimize disruption to your property throughout the job.",
  },
  {
    heading: "Step 5 — Post-service confirmation",
    body: "After the work is complete, we confirm the line is clear and functioning correctly. We walk you through what was done and answer any questions about maintaining your sewer line going forward.",
  },
];

type RelatedServiceLink = {
  label: string;
  href: string;
  description: string;
  exists: boolean;
};

const RELATED_SERVICES: RelatedServiceLink[] = [
  {
    label: "Drain Cleaning",
    href: "/drain-cleaning/",
    description:
      "Mechanical drain clearing and hydro jetting for slow or blocked drains throughout the home",
    exists: true,
  },
  {
    label: "Video Camera Plumbing Inspections",
    href: "/video-camera-plumbing-inspections/",
    description:
      "Camera inspections to see inside sewer lines and confirm the location and cause of a problem",
    exists: false,
  },
  {
    label: "Emergency Plumbing",
    href: "/emergency-plumbing/",
    description:
      "Urgent plumbing situations that cannot wait for a scheduled appointment",
    exists: true,
  },
  {
    label: "Trenchless Piping",
    href: "/trenchless-piping/",
    description:
      "Pipe repair and replacement methods that minimize excavation",
    exists: false,
  },
  {
    label: "Water Pipe Repair and Replacement",
    href: "/water-pipe-repair-replacement/",
    description:
      "Repair and replacement of damaged or deteriorating water supply pipes",
    exists: false,
  },
];

// ---------------------------------------------------------------------------
// JSON-LD payloads
// ---------------------------------------------------------------------------

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Sewer Line Services in Las Vegas, NV | Red Carpet Plumbing",
  url: "https://redcarpetplumbing.com/sewer-line-services/",
  description:
    "Red Carpet Plumbing provides sewer line inspection, cleaning, repair, and replacement for homes and businesses in Las Vegas, NV.",
  isPartOf: {
    "@type": "WebSite",
    name: "Red Carpet Plumbing",
    url: "https://redcarpetplumbing.com",
  },
  about: {
    "@type": "Service",
    name: "Sewer Line Services",
    serviceType: "Sewer Line Services",
    areaServed: {
      "@type": "City",
      name: "Las Vegas",
      sameAs: "https://en.wikipedia.org/wiki/Las_Vegas",
    },
  },
  breadcrumb: {
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
        name: "Plumbing Services",
        item: "https://redcarpetplumbing.com/plumbing-services/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Sewer Line Services",
        item: "https://redcarpetplumbing.com/sewer-line-services/",
      },
    ],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Sewer Line Services",
  serviceType: "Sewer Line Services",
  description:
    "Sewer line inspection, cleaning, repair, and replacement for residential and commercial properties in Las Vegas, Nevada and the Las Vegas Valley.",
  provider: {
    "@type": "Plumber",
    name: "Red Carpet Plumbing",
    url: "https://redcarpetplumbing.com",
    // FLAG: ADD telephone field once phone number is confirmed
  },
  areaServed: [
    { "@type": "City", name: "Las Vegas" },
    { "@type": "City", name: "Henderson" },
    { "@type": "City", name: "North Las Vegas" },
    { "@type": "City", name: "Paradise" },
    { "@type": "City", name: "Summerlin" },
    { "@type": "City", name: "Spring Valley" },
    { "@type": "City", name: "Enterprise" },
    { "@type": "City", name: "Boulder City" },
    { "@type": "City", name: "Green Valley" },
    { "@type": "City", name: "Lake Las Vegas" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Sewer Line Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Sewer Line Inspection" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Sewer Line Cleaning" },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Root Intrusion Treatment and Removal",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Sewer Line Repair" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Sewer Line Replacement" },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pre-Purchase Sewer Scope Inspection",
        },
      },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: SEWER_LINE_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function SewerLineServicesPage() {
  return (
    <>
      <JsonLd data={webPageSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />

      <SiteHeader />

      <main id="main" className="flex-1 bg-white">
        {/* BREADCRUMBS */}
        <Breadcrumbs
          trail={[
            { label: "Home", href: "/" },
            { label: "Plumbing Services", href: "/plumbing-services/" },
            { label: "Sewer Line Services" },
          ]}
        />

        {/* EYEBROW (above the hero so the H1 stays a clean single-string heading for SEO/AEO) */}
        <div className="bg-white pt-10 sm:pt-12 lg:pt-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 xl:px-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-primary">
              Sewer Line Services in Las Vegas
            </p>
          </div>
        </div>

        {/* SECTION 1: HERO */}
        {/* TODO: Add approved Sewer Line Services hero image when available. Approved alt text: Sewer line inspection and repair service in Las Vegas */}
        {/* SOURCE-SITE CLAIM: Emergency availability is referenced on the live Red Carpet Plumbing site. Verify supporting documentation before final launch. */}
        <HeroSection
          headingLevel="h1"
          headline="Sewer Line Services in Las Vegas, NV"
          subheading="Sewer line inspection, cleaning, repair, and replacement for homes and businesses throughout Las Vegas and the Las Vegas Valley."
          trustItems={HERO_TRUST_BULLETS}
          primaryCTA={{
            label: "Request Plumbing Service",
            href: "/contact/",
          }}
          /* FLAG: CLIENT MUST CONFIRM PHONE NUMBER BEFORE LAUNCH — do not invent */
          secondaryCTA={{
            label: "Call Now",
            href: "#",
            disabled: true,
          }}
          formSlot={
            <QuoteFormPlaceholder
              title="Request Plumbing Service"
              includeZip
              submitLabel="Request Service"
            />
          }
        />

        {/* SECTION 2: DIRECT ANSWER */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
              What Are Sewer Line Services?
            </h2>
            <p className="mt-6 text-lg leading-8 text-brand-dark/80">
              Red Carpet Plumbing provides sewer line services in Las Vegas,
              Nevada for residential and commercial properties. Services
              include sewer line inspection, drain cleaning, root intrusion
              treatment, sewer line repair, and sewer line replacement
              throughout the Las Vegas Valley.
            </p>
            <p className="mt-4 text-lg leading-8 text-brand-dark/80">
              Sewer line services cover the inspection, cleaning, repair, and
              replacement of the underground pipes that carry wastewater away
              from your home or building. When a sewer line is clogged,
              damaged, or failing, it can affect every drain in the property
              at once. Red Carpet Plumbing provides sewer line diagnostics
              and repair for residential and commercial properties throughout
              Las Vegas and the surrounding communities.
            </p>
            <p className="mt-4 text-lg leading-8 text-brand-dark/80">
              A sewer line problem left unaddressed can cause sewage backups
              inside the home, damage to the surrounding soil and foundation,
              and foul odors that are difficult to trace without proper
              inspection equipment. Early diagnosis and professional service
              help prevent minor issues from becoming major repairs.
            </p>
          </div>
        </section>

        {/* SECTION 3: SIGNS YOU MAY HAVE A SEWER LINE PROBLEM */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
              Signs You May Have a Sewer Line Problem
            </h2>
            <p className="mt-6 text-lg leading-8 text-brand-dark/80">
              Sewer line issues do not always announce themselves
              immediately. Several warning signs can indicate a developing
              problem in your main sewer line before a full backup occurs.
            </p>
            <div className="mt-8 space-y-6">
              {SIGNS_LIST.map((sign) => (
                <div
                  key={sign.heading}
                  className="rounded-2xl border-l-4 border-brand-primary bg-white p-6 shadow-sm ring-1 ring-brand-surface-alt"
                >
                  <h3 className="text-lg font-semibold text-brand-dark sm:text-xl">
                    {sign.heading}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-brand-dark/80">
                    {sign.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: WHAT SEWER LINE SERVICES INCLUDE */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
              What Sewer Line Services Include
            </h2>
            <p className="mt-6 text-lg leading-8 text-brand-dark/80">
              Red Carpet Plumbing provides a range of sewer line services for
              residential and commercial properties in Las Vegas.
            </p>
            <div className="mt-8 space-y-6">
              {SERVICE_COVERS.map((item) => (
                <div
                  key={item.heading}
                  className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-brand-surface-alt"
                >
                  <h3 className="text-lg font-semibold text-brand-dark sm:text-xl">
                    {item.heading}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-brand-dark/80">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: LOCAL LAS VEGAS RELEVANCE */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
              Sewer Line Challenges in Las Vegas
            </h2>
            <p className="mt-6 text-lg leading-8 text-brand-dark/80">
              Las Vegas sewer lines face a combination of factors that are
              common throughout the valley. Older neighborhoods in areas
              like North Las Vegas, East Las Vegas, and established parts of
              Henderson and Paradise contain homes built in the 1960s
              through the 1990s with clay or cast iron sewer lines that are
              now at or past their expected lifespan. These materials are
              more susceptible to cracking, root intrusion, and joint
              separation than modern pipe materials.
            </p>
            <p className="mt-4 text-lg leading-8 text-brand-dark/80">
              Desert soil conditions also contribute to sewer line stress.
              The clay-heavy soils common in the{" "}
              <Link
                href="/service-areas/"
                className="font-semibold text-brand-primary hover:text-brand-primary-hover"
              >
                Las Vegas Valley
              </Link>{" "}
              shift and settle with changes in temperature and moisture.
              These soil movements can cause gradual shifts in underground
              pipes, leading to joint separations, low spots where debris
              collects, and eventually blockages or pipe damage.
            </p>
            <p className="mt-4 text-lg leading-8 text-brand-dark/80">
              Mature trees in established Las Vegas neighborhoods produce
              root systems that seek moisture underground. Sewer lines,
              which carry water continuously, attract root growth. Even
              small cracks in a sewer line can allow roots to enter and
              expand over years until the line is partially or fully
              blocked.
            </p>
            <p className="mt-4 text-lg leading-8 text-brand-dark/80">
              For newer construction in master-planned communities such as
              Summerlin, Henderson, and Enterprise, sewer line issues are
              less common but can still occur, particularly related to
              ground settling in newer developments, construction debris
              left in lines, or early root intrusion from fast-growing
              landscape plantings.
            </p>
          </div>
        </section>

        {/* SECTION 6: PROCESS */}
        {/* NOTE: Step headings contain em dashes per approved copy. Preserved exactly per HARD SEPARATION RULE; flagged in Gate 5 report. */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
              How Red Carpet Plumbing Handles Sewer Line Service
            </h2>
            <p className="mt-6 text-lg leading-8 text-brand-dark/80">
              Every sewer line service call follows a clear process so you
              understand what is happening and what to expect at each step.
            </p>
            <ol className="mt-8 space-y-6">
              {PROCESS_STEPS.map((step) => (
                <li
                  key={step.heading}
                  className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-brand-surface-alt"
                >
                  <h3 className="text-lg font-semibold text-brand-dark sm:text-xl">
                    {step.heading}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-brand-dark/80">
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* SECTION 7: WHY CHOOSE RED CARPET PLUMBING */}
        {/* SOURCE-SITE CLAIM: Licensed plumbers claim appears on the live Red Carpet Plumbing site. Verify licensing documentation before final launch. */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
              Why Choose Red Carpet Plumbing for Sewer Line Service in Las Vegas
            </h2>
            <p className="mt-6 text-lg leading-8 text-brand-dark/80">
              Red Carpet Plumbing is a local Las Vegas plumbing company
              serving residential and commercial customers throughout the
              Las Vegas Valley. Our team is familiar with the sewer line
              materials, soil conditions, and infrastructure age patterns
              common throughout the valley.
            </p>
            <p className="mt-4 text-lg leading-8 text-brand-dark/80">
              We use camera inspection technology to diagnose sewer line
              problems accurately before recommending repairs. This approach
              means we recommend what the situation actually requires, based
              on what we see, not assumptions.
            </p>
            <p className="mt-4 text-lg leading-8 text-brand-dark/80">
              We communicate clearly throughout every job. Before any
              repair or replacement begins, we explain what the inspection
              found, what your options are, and what each option involves.
              Our goal is for every customer to leave the interaction fully
              informed.
            </p>
          </div>
        </section>

        {/* SECTION 8: MID-PAGE CTA */}
        <CTASection
          background="red"
          headline="Request Sewer Line Service in Las Vegas"
          body="Contact Red Carpet Plumbing to schedule sewer line inspection, cleaning, or repair service for your home or business in Las Vegas and the Las Vegas Valley."
          primaryCTA={{
            label: "Request Plumbing Service",
            href: "/contact/",
          }}
        />

        {/* SECTION 9: RELATED SERVICES */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
              Related Plumbing Services
            </h2>
            <p className="mt-6 text-lg leading-8 text-brand-dark/80">
              Sewer line problems often connect to other plumbing needs.
              Red Carpet Plumbing handles a full range of diagnostic and
              repair services.
            </p>
            <ul className="mt-8 space-y-3">
              {RELATED_SERVICES.map((service) => (
                <li
                  key={service.href}
                  className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-brand-surface-alt"
                >
                  <Link
                    // /drain-cleaning/ and /emergency-plumbing/ are live.
                    // TODO-BATCH-NEXT: /video-camera-plumbing-inspections/ not yet built
                    // TODO-BATCH-NEXT: /trenchless-piping/ not yet built
                    // TODO-BATCH-NEXT: /water-pipe-repair-replacement/ not yet built
                    href={service.href}
                    className="flex items-start gap-3 text-base text-brand-dark/80 hover:text-brand-primary"
                  >
                    <span aria-hidden="true" className="text-brand-primary">
                      →
                    </span>
                    <span>
                      <span className="font-semibold text-brand-dark">
                        {service.label}
                      </span>{" "}
                      - {service.description}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            {/* TODO-BATCH-NEXT: Add these service-location links once pages are live: */}
            {/* - Las Vegas sewer line service: /las-vegas/sewer-line-services/ */}
            {/* - Henderson sewer line service: /henderson/sewer-line-services/ */}
            {/* - North Las Vegas sewer line service: /north-las-vegas/sewer-line-services/ */}
          </div>
        </section>

        {/* SECTION 10: FAQ */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Sewer Line Service Questions Answered
              </h2>
            </div>
            <dl className="mt-12 space-y-4">
              {SEWER_LINE_FAQS.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-brand-surface-alt sm:p-8"
                >
                  <dt>
                    <h3 className="text-lg font-semibold text-brand-dark sm:text-xl">
                      {faq.question}
                    </h3>
                  </dt>
                  <dd className="mt-3 text-base leading-7 text-brand-dark/80">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* SECTION 11: FINAL CTA */}
        <CTASection
          background="red"
          headline="Request Sewer Line Service in Las Vegas"
          body="Contact Red Carpet Plumbing to schedule sewer line inspection, cleaning, or repair service for your home or business in Las Vegas and the Las Vegas Valley."
          primaryCTA={{
            label: "Request Plumbing Service",
            href: "/contact/",
          }}
          /* FLAG: CLIENT MUST CONFIRM PHONE NUMBER BEFORE LAUNCH — do not invent */
          secondaryCTA={{
            label: "Call Now",
            href: "#",
            disabled: true,
          }}
        />
      </main>

      <SiteFooter />
    </>
  );
}
