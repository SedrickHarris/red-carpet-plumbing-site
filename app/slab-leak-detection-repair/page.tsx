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
  title:
    "Slab Leak Detection and Repair Las Vegas | Red Carpet Plumbing",
  description:
    "Suspect a slab leak in your Las Vegas home? Red Carpet Plumbing detects and repairs slab leaks throughout the Las Vegas Valley. Contact us today.",
  alternates: {
    canonical:
      "https://redcarpetplumbing.com/slab-leak-detection-repair/",
  },
  openGraph: {
    title:
      "Slab Leak Detection and Repair in Las Vegas, NV | Red Carpet Plumbing",
    description:
      "A possible slab leak can cause hidden water damage beneath your Las Vegas home. Red Carpet Plumbing locates and repairs slab leaks throughout the Las Vegas Valley.",
    url: "https://redcarpetplumbing.com/slab-leak-detection-repair/",
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
const SLAB_LEAK_FAQS = [
  {
    question: "How do I know if I have a slab leak?",
    answer:
      "A slab leak is often suggested by a combination of signs rather than a single obvious symptom. Common indicators include a warm spot on the floor that does not have an obvious source, the sound of running water when all fixtures are turned off, an unexplained increase in your monthly water bill, a drop in water pressure throughout the home, damp or discolored flooring, and musty or mildew odors in rooms without a visible moisture source. Any of these signs is worth having a plumber evaluate, since slab leaks tend to become more disruptive the longer they remain undetected.",
  },
  {
    question: "How is a slab leak located without breaking up the floor?",
    answer:
      "Slab leak detection focuses on locating the source of the leak with as little disruption to the property as possible before any repair work begins. The exact methods depend on the layout of the home and the location of the suspected leak. The goal of the detection phase is to pinpoint the affected pipe so that any repair work can be planned around the actual leak location, rather than guessing. Some repair work may still require access to the pipe, depending on the location and condition of the leak.",
  },
  {
    question: "What happens if a slab leak is left unrepaired?",
    answer:
      "A slab leak that is left unrepaired can cause progressive damage over time. Water escaping beneath the slab can affect flooring, interior finishes, insulation, and other building materials, and can create persistent moisture conditions that contribute to mold and mildew. Your water bill will continue to increase for as long as the leak remains active. Addressing a slab leak earlier reduces the risk of secondary damage and gives you more flexibility in choosing a repair approach.",
  },
  {
    question: "Is a slab leak considered a plumbing emergency?",
    answer:
      "Whether a slab leak should be treated as an emergency depends on its severity and on how quickly it is causing visible damage. A slow leak that has been developing gradually may be handled with a scheduled appointment, while a leak that is actively causing significant water damage or a sharp pressure drop should be addressed with more urgency. If you are unsure, it is better to contact a plumber promptly rather than wait.",
  },
  {
    question:
      "What is the difference between slab leak detection and general leak detection?",
    answer:
      "General leak detection covers the full range of hidden and visible water leaks in a home or building, including supply lines, drain lines, fixtures, walls, ceilings, and floors. Slab leak detection is a focused subset of this work that addresses leaks in pipes running beneath a concrete slab foundation. Slab leaks require specific techniques to locate and repair because the pipe is hidden under concrete. Red Carpet Plumbing provides both general leak detection and specialized slab leak detection and repair.",
  },
  {
    question:
      "Does Red Carpet Plumbing provide slab leak detection outside of Las Vegas?",
    answer:
      "Yes. Red Carpet Plumbing provides slab leak detection and repair throughout the Las Vegas Valley including Henderson, North Las Vegas, Summerlin, Spring Valley, Enterprise, Paradise, Green Valley, and surrounding communities.",
  },
];

const TRUST_STRIP_ITEMS = [
  "Slab Leak Detection and Repair",
  "Serving Las Vegas and the Las Vegas Valley",
  "Residential and Commercial Service",
  // SOURCE-SITE CLAIM: verify supporting documentation before final launch
  "Transparent Pricing",
  // SOURCE-SITE CLAIM: verify supporting documentation before final launch
  "Customer Satisfaction Focus",
];

const DIRECT_ANSWER_BULLETS = [
  "Locates water leaks in pipes that run beneath a concrete slab foundation",
  "Identifies the affected pipe section before any repair work begins",
  "Aims to pinpoint the leak location with as little disruption as possible",
  "Covers detection and the appropriate repair option, depending on the location and condition of the pipe",
  "Serves residential and commercial properties throughout the Las Vegas Valley",
];

const SIGNS_LIST = [
  "A specific area of flooring feels warm or unusually hot underfoot",
  "You hear the sound of running water when all fixtures and appliances are turned off",
  "Your monthly water bill has increased noticeably without a change in water usage",
  "Damp patches, discoloration, or soft spots appear on flooring or at the base of interior walls",
  "Water pressure has dropped throughout the home without an obvious cause",
  "Musty or mildew odors are present in rooms without an obvious moisture source",
  "New cracks appear in flooring, baseboards, or interior walls. Cracks can have multiple causes and warrant a professional assessment",
  "Your water meter continues to register usage when no water is being used inside the home",
];

const SERVICE_COVERS = [
  "Initial assessment of symptoms and accessible areas of the property",
  "Water meter test to confirm whether active water loss is present when no fixtures are running",
  "Slab leak location work using methods appropriate for the property and pipe layout",
  "Evaluation of the affected pipe section once the leak is located",
  "Discussion of repair options based on the location, condition of the pipe, and accessibility",
  "Repair or replacement of the affected pipe section when repair or replacement is needed",
  "Coordination with related services such as water pipe repair or re-piping when appropriate",
  "Service for residential and commercial properties throughout Las Vegas and the Las Vegas Valley",
];

type RelatedServiceLink = {
  label: string;
  href: string;
  description: string;
  exists: boolean;
};

const RELATED_SERVICES: RelatedServiceLink[] = [
  {
    label: "Leak Detection and Repair",
    href: "/leak-detection-repair/",
    description:
      "General leak detection for hidden and visible water leaks throughout the home",
    exists: true,
  },
  {
    label: "Water Pipe Repair and Replacement",
    href: "/water-pipe-repair-replacement/",
    description:
      "Repair and replacement of damaged or deteriorating water supply pipes",
    exists: false,
  },
  {
    label: "Re-Piping",
    href: "/re-piping/",
    description:
      "Full or partial replacement of supply piping in a home or building",
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
    label: "Plumbing Services",
    href: "/plumbing-services/",
    description:
      "Full list of residential and commercial plumbing services",
    exists: true,
  },
];

// ---------------------------------------------------------------------------
// JSON-LD payloads
// ---------------------------------------------------------------------------

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Slab Leak Detection and Repair in Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing detects and repairs slab leaks for homes and businesses throughout Las Vegas, Henderson, North Las Vegas, Summerlin, and surrounding Las Vegas Valley communities.",
  url: "https://redcarpetplumbing.com/slab-leak-detection-repair/",
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
        name: "Slab Leak Detection and Repair",
        item: "https://redcarpetplumbing.com/slab-leak-detection-repair/",
      },
    ],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Slab Leak Detection and Repair",
  serviceType: "Slab Leak Detection and Repair",
  description:
    "Professional slab leak detection and repair for water leaks in pipes beneath the concrete slab foundation of residential and commercial properties throughout Las Vegas, Henderson, North Las Vegas, Summerlin, Spring Valley, Enterprise, Paradise, and Green Valley.",
  provider: {
    "@type": "Plumber",
    name: "Red Carpet Plumbing",
    url: "https://redcarpetplumbing.com",
    // FLAG: ADD telephone field to Service provider once phone number is confirmed
  },
  areaServed: [
    {
      "@type": "City",
      name: "Las Vegas",
      sameAs: "https://www.wikidata.org/wiki/Q23768",
    },
    { "@type": "City", name: "Henderson" },
    { "@type": "City", name: "North Las Vegas" },
    { "@type": "City", name: "Summerlin" },
    { "@type": "City", name: "Spring Valley" },
    { "@type": "City", name: "Enterprise" },
    { "@type": "City", name: "Paradise" },
    { "@type": "City", name: "Green Valley" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: SLAB_LEAK_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function SlabLeakDetectionRepairPage() {
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
            { label: "Slab Leak Detection and Repair" },
          ]}
        />

        {/* EYEBROW (above the hero so the H1 stays a clean single-string heading for SEO/AEO) */}
        <div className="bg-white pt-10 sm:pt-12 lg:pt-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 xl:px-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-primary">
              Slab Leak Detection and Repair in Las Vegas
            </p>
          </div>
        </div>

        {/* SECTION 1: HERO */}
        {/* TODO: Replace card.webp hero substitution with a dedicated high-resolution slab leak hero image when available */}
        <HeroSection
          headingLevel="h1"
          headline="Slab Leak Detection and Repair in Las Vegas, NV"
          subheading={
            <>
              A slab leak is a water leak in a pipe that runs beneath your{" "}
              {"home's"} concrete foundation. Because the leak is hidden under
              the slab, the damage may not be visible until water, moisture,
              warm spots, or an unexplained water bill appear at the surface.
              Red Carpet Plumbing provides slab leak detection and repair for
              homes and businesses throughout Las Vegas and the Las Vegas
              Valley. If you suspect a slab leak, contact us so we can evaluate
              the issue before damage spreads.
            </>
          }
          primaryCTA={{
            label: "Request Slab Leak Detection Service",
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
              title="Request Slab Leak Detection Service"
              includeZip
              submitLabel="Request Service"
            />
          }
          backgroundImage={{
            src: "/images/services/slab-leak-detection-repair/card.webp",
            alt: "Licensed plumber inspecting a residential floor for a possible slab leak in a Las Vegas home",
          }}
        />

        {/* SECTION 2: TRUST STRIP (dark bg) */}
        <section
          aria-labelledby="slab-leak-trust-label"
          className="bg-brand-charcoal text-white"
        >
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-10 xl:px-12">
            <p id="slab-leak-trust-label" className="sr-only">
              Why Las Vegas Customers Choose Red Carpet Plumbing for Slab Leak Detection
            </p>
            {/* FLAG: VERIFY TRANSPARENT PRICING CLAIM BEFORE PUBLISH */}
            {/* FLAG: VERIFY CUSTOMER SATISFACTION FOCUS CLAIM BEFORE PUBLISH */}
            <ul className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3 lg:grid-cols-5">
              {TRUST_STRIP_ITEMS.map((item) => (
                <li
                  key={item}
                  className="flex items-center justify-center gap-2 text-center"
                >
                  <CheckIcon className="h-5 w-5 flex-none text-brand-primary" />
                  <span className="text-sm font-medium text-white">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 3: DIRECT ANSWER */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
              What Is a Slab Leak?
            </h2>
            <p className="mt-6 text-lg leading-8 text-brand-dark/80">
              A slab leak is a water leak that occurs in a pipe running beneath
              the concrete slab foundation of a home or building. Because the
              pipe is hidden under the slab, the leak is not visible from above
              and can continue for an extended period before any symptom
              appears at the surface. Slab leak detection is the process of
              locating the source of the leak using methods appropriate for
              the property. Slab leak repair addresses the affected section of
              pipe once the location and condition of the leak are understood.
              Red Carpet Plumbing provides slab leak detection and repair for
              residential and commercial properties throughout Las Vegas and
              the Las Vegas Valley.
            </p>
            <ul className="mt-6 space-y-3">
              {DIRECT_ANSWER_BULLETS.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <BulletIcon className="mt-1.5 h-2 w-2 flex-none text-brand-primary" />
                  <span className="text-base leading-7 text-brand-dark/80">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 4: SIGNS YOU MAY HAVE A SLAB LEAK */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
              Signs You May Have a Slab Leak
            </h2>
            <p className="mt-6 text-lg leading-8 text-brand-dark/80">
              Slab leaks are often hidden for weeks or months before they
              become obvious. Several indirect signs can suggest a leak
              beneath the slab. Contact a plumber if you notice any of the
              following.
            </p>
            <ol className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
              {SIGNS_LIST.map((sign, index) => (
                <li
                  key={sign}
                  className="flex items-start gap-4 rounded-2xl border-l-4 border-brand-primary bg-white p-5 shadow-sm ring-1 ring-brand-surface-alt"
                >
                  <span
                    aria-hidden="true"
                    className="inline-flex h-8 w-8 flex-none items-center justify-center rounded-full bg-brand-primary/10 text-sm font-semibold text-brand-primary"
                  >
                    {index + 1}
                  </span>
                  <span className="text-base leading-7 text-brand-dark/80">
                    {sign}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* SECTION 5: WHAT THE SERVICE INCLUDES */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
              What Our Slab Leak Detection and Repair Service Includes
            </h2>
            <p className="mt-6 text-lg leading-8 text-brand-dark/80">
              Red Carpet Plumbing provides slab leak detection and repair for
              a range of slab leak situations across the Las Vegas Valley. The
              exact scope of work depends on the location and condition of
              the affected pipe.
            </p>
            {/* FLAG: CLIENT MUST CONFIRM specific slab leak detection methods, equipment used, and repair scope before launch */}
            <ul className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-2">
              {SERVICE_COVERS.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-lg bg-white p-4 shadow-sm ring-1 ring-brand-surface-alt"
                >
                  <CheckIcon className="mt-1 h-5 w-5 flex-none text-brand-primary" />
                  <span className="text-base leading-7 text-brand-dark/80">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 6: LOCAL LAS VEGAS RELEVANCE */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
              Why Slab Leaks Matter in Las Vegas Homes
            </h2>
            <p className="mt-6 text-lg leading-8 text-brand-dark/80">
              Most homes in the Las Vegas Valley are built on concrete slab
              foundations rather than raised foundations with crawl spaces.
              Water supply pipes are routed beneath the slab, which means that
              when a pipe fails, the water escapes into an area that is not
              visible without detection equipment. Because the leak is hidden
              beneath concrete, it can continue for weeks or even months
              before a homeowner notices a symptom at the surface. By the
              time damp flooring, a warm spot, or an unexplained water bill
              appears, the leak may have been active for some time.
            </p>
            <p className="mt-4 text-lg leading-8 text-brand-dark/80">
              Local soil and climate conditions in southern Nevada can
              contribute to slab leak risk over time. Las Vegas hard water
              places mineral stress on pipes and fittings, and the region
              experiences large temperature swings between hot summers and
              cooler nights that affect plumbing components throughout the
              home. Older homes in central Las Vegas, North Las Vegas,
              Henderson, and Green Valley may have pipe materials that are
              more susceptible to pinhole leaks and joint failures as they
              age. Catching a slab leak early reduces the risk of additional
              water damage and helps with planning the appropriate repair
              before damage spreads. Red Carpet Plumbing serves the{" "}
              <Link
                href="/service-areas/"
                className="font-semibold text-brand-primary hover:text-brand-primary-hover"
              >
                Las Vegas Valley
              </Link>{" "}
              including Summerlin, Spring Valley, Enterprise, and surrounding
              communities. If you suspect a slab leak, do not wait to have it
              evaluated.
            </p>
          </div>
        </section>

        {/* SECTION 7: PROCESS (5 numbered steps; NOT HowTo schema) */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
              How Our Slab Leak Detection and Repair Process Works
            </h2>
            <p className="mt-6 text-lg leading-8 text-brand-dark/80">
              When you contact Red Carpet Plumbing about a possible slab
              leak, here is what to expect. The exact steps depend on the
              layout of the property and the location of the suspected leak.
            </p>
            {/* FLAG: CLIENT MUST CONFIRM slab leak detection methods, equipment used, and repair scope before launch */}
            <ol className="mt-8 space-y-6">
              {/* Step 1 */}
              <li className="flex items-start gap-4">
                <span
                  aria-hidden="true"
                  className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-full bg-brand-primary text-base font-semibold text-white"
                >
                  1
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-brand-dark">
                    Contact us.
                  </h3>
                  <p className="mt-2 text-base leading-7 text-brand-dark/80">
                    Describe the symptoms you have noticed, including where
                    the issue appears to be located and how long it has been
                    occurring. The more detail you can provide, the better
                    prepared our plumber will be.
                  </p>
                </div>
              </li>

              {/* Step 2 */}
              <li className="flex items-start gap-4">
                <span
                  aria-hidden="true"
                  className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-full bg-brand-primary text-base font-semibold text-white"
                >
                  2
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-brand-dark">
                    Schedule service.
                  </h3>
                  <p className="mt-2 text-base leading-7 text-brand-dark/80">
                    We will confirm your appointment. If visible water damage
                    is progressing, we will advise on urgency and any steps
                    to take before arrival.
                  </p>
                </div>
              </li>

              {/* Step 3 */}
              <li className="flex items-start gap-4">
                <span
                  aria-hidden="true"
                  className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-full bg-brand-primary text-base font-semibold text-white"
                >
                  3
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-brand-dark">
                    On-site assessment.
                  </h3>
                  <p className="mt-2 text-base leading-7 text-brand-dark/80">
                    Our plumber will review the symptoms, inspect accessible
                    areas, and run a water meter test to confirm whether
                    active water loss is present.
                  </p>
                </div>
              </li>

              {/* Step 4 */}
              <li className="flex items-start gap-4">
                <span
                  aria-hidden="true"
                  className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-full bg-brand-primary text-base font-semibold text-white"
                >
                  4
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-brand-dark">
                    Slab leak detection.
                  </h3>
                  <p className="mt-2 text-base leading-7 text-brand-dark/80">
                    Using methods appropriate for the property, we will work
                    to locate the source of the leak with as little
                    disruption as possible. The goal of the detection phase
                    is to pinpoint the affected pipe before any repair work
                    begins.
                  </p>
                </div>
              </li>

              {/* Step 5 — contains inline forward links to /water-pipe-repair-replacement/ and /re-piping/ */}
              <li className="flex items-start gap-4">
                <span
                  aria-hidden="true"
                  className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-full bg-brand-primary text-base font-semibold text-white"
                >
                  5
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-brand-dark">
                    Repair planning and work.
                  </h3>
                  <p className="mt-2 text-base leading-7 text-brand-dark/80">
                    Once the source is confirmed, we will explain the repair
                    options that apply, depending on the location and
                    condition of the pipe, and complete the appropriate
                    work. For larger pipe issues we may recommend related
                    services such as{" "}
                    <Link
                      // TODO-BATCH-NEXT: /water-pipe-repair-replacement/ not yet built
                      href="/water-pipe-repair-replacement/"
                      className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                    >
                      water pipe repair and replacement
                    </Link>{" "}
                    or{" "}
                    <Link
                      // TODO-BATCH-NEXT: /re-piping/ not yet built
                      href="/re-piping/"
                      className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                    >
                      re-piping
                    </Link>
                    .
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        {/* SECTION 8: MID-PAGE CTA */}
        <CTASection
          background="red"
          headline="Suspect a Slab Leak?"
          body="Contact Red Carpet Plumbing for slab leak detection and repair in Las Vegas and the surrounding Las Vegas Valley before damage spreads."
          primaryCTA={{
            label: "Request Slab Leak Detection Service",
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
              Slab leak situations often connect to related plumbing services
              depending on what is found. Red Carpet Plumbing provides a full
              range of services to address slab leaks and the conditions that
              surround them.
            </p>
            <ul className="mt-8 space-y-3">
              {RELATED_SERVICES.map((service) => (
                <li
                  key={service.href}
                  className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-brand-surface-alt"
                >
                  <Link
                    // /leak-detection-repair/, /emergency-plumbing/, and /plumbing-services/ are live.
                    // TODO-BATCH-NEXT: /water-pipe-repair-replacement/ not yet built
                    // TODO-BATCH-NEXT: /re-piping/ not yet built
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
            {/* - Slab Leak Detection in Las Vegas: /las-vegas-slab-leak-detection-repair/ */}
            {/* - Slab Leak Detection in Henderson: /henderson-slab-leak-detection-repair/ */}
            {/* - Slab Leak Detection in North Las Vegas: /north-las-vegas-slab-leak-detection-repair/ */}
            {/* - Slab Leak Detection in Summerlin: /summerlin-slab-leak-detection-repair/ */}
          </div>
        </section>

        {/* SECTION 10: FAQ */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Slab Leak Questions Answered
              </h2>
            </div>
            <dl className="mt-12 space-y-4">
              {SLAB_LEAK_FAQS.map((faq) => (
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
          headline="Contact Red Carpet Plumbing for Slab Leak Detection in Las Vegas"
          body="If you suspect a slab leak in your Las Vegas home or business, do not wait for the damage to spread. Contact Red Carpet Plumbing to schedule a slab leak detection service and get a clear picture of what is happening beneath your foundation."
          primaryCTA={{
            label: "Request Slab Leak Detection Service",
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

// ---------------------------------------------------------------------------
// Local icon helpers (decorative, aria-hidden)
// ---------------------------------------------------------------------------

type IconProps = { className?: string };

function CheckIcon({ className = "" }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  );
}

function BulletIcon({ className = "" }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 8 8"
      className={className}
      fill="currentColor"
    >
      <circle cx="4" cy="4" r="4" />
    </svg>
  );
}
