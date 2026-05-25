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
  title: "Leak Detection and Repair in Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Suspect a hidden water leak in Las Vegas? Red Carpet Plumbing detects and repairs visible and hidden leaks for homes and businesses throughout the Las Vegas Valley.",
  alternates: {
    canonical: "https://redcarpetplumbing.com/leak-detection-repair/",
  },
  openGraph: {
    title: "Leak Detection and Repair in Las Vegas, NV | Red Carpet Plumbing",
    description:
      "Hidden leak, damp walls, or unexplained water bill in Las Vegas? Red Carpet Plumbing locates and repairs water leaks for homes and businesses throughout the Las Vegas Valley.",
    url: "https://redcarpetplumbing.com/leak-detection-repair/",
    siteName: "Red Carpet Plumbing",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

// ---------------------------------------------------------------------------
// FAQ source of truth. The visible FAQ section AND the FAQPage JSON-LD
// schema both derive from this list, guaranteeing character-for-character
// match. Do not edit one without the other.
// ---------------------------------------------------------------------------
const LEAK_DETECTION_FAQS = [
  {
    question: "How do I know if I have a hidden water leak?",
    answer:
      "Common signs of a hidden water leak include an unexplained increase in your monthly water bill without a change in usage, damp or discolored patches on walls or ceilings, warm spots on the floor that may indicate a leak beneath a slab, a drop in water pressure throughout the home, the sound of running water when all fixtures are turned off, and musty or mildew odors in areas that are not exposed to moisture. Any of these signs is worth having a plumber evaluate.",
  },
  {
    question:
      "Can a plumber detect a leak without opening walls or floors?",
    answer:
      "In most cases, professional leak detection can locate the source of a hidden leak using specialized equipment without requiring major demolition of walls or floors. The goal is to pinpoint the location accurately before any repair work begins, which minimizes unnecessary damage to the structure. Some repairs may still require access to the pipe, but the detection phase itself is typically non-invasive or minimally invasive.",
  },
  {
    question: "What happens if a water leak is left unrepaired?",
    answer:
      "An unrepaired water leak can cause progressive damage over time. Water that escapes into wall cavities, under flooring, or beneath a concrete slab can weaken structural materials, promote mold and mildew growth, damage insulation and drywall, and in the case of slab leaks, create voids beneath the foundation. Water bills continue to increase for as long as the leak remains active. Early detection and repair reduces both the repair cost and the risk of secondary damage.",
  },
  {
    question: "Is a hidden water leak considered a plumbing emergency?",
    answer:
      "Whether a hidden leak qualifies as an emergency depends on its severity and location. A slow hidden leak that has been developing gradually can typically be scheduled for a service appointment. A leak that is actively causing visible water damage, affecting structural materials, or associated with a significant pressure drop should be treated with more urgency. If you are unsure, it is better to contact a plumber promptly rather than wait.",
  },
  {
    question:
      "What is the difference between leak detection and slab leak detection?",
    answer:
      "Leak detection covers the full range of hidden and visible water leaks throughout a home or building, including supply lines, drain lines, fixtures, walls, ceilings, and floors. Slab leak detection is a specialized subset that focuses specifically on leaks in pipes that run beneath a concrete slab foundation. Because slab leaks are harder to access and require specific techniques to locate and repair, they are handled as a distinct service. Red Carpet Plumbing provides both general leak detection and specialized slab leak detection and repair.",
  },
  {
    question:
      "Does Red Carpet Plumbing provide leak detection outside of Las Vegas?",
    answer:
      "Yes. Red Carpet Plumbing provides leak detection and repair throughout the Las Vegas Valley including Henderson, North Las Vegas, Summerlin, Spring Valley, Enterprise, Paradise, Green Valley, and surrounding communities.",
  },
];

const TRUST_STRIP_ITEMS = [
  "Leak Detection and Repair",
  "Serving Las Vegas and the Las Vegas Valley",
  "Residential and Commercial Service",
  // SOURCE-SITE CLAIM: verify before publish
  "Transparent Pricing",
  // SOURCE-SITE CLAIM: verify before publish
  "Customer Satisfaction Focus",
];

const DIRECT_ANSWER_BULLETS = [
  "Locates hidden leaks in walls, floors, ceilings, and underground supply lines",
  "Identifies the cause of unexplained water bill increases",
  "Pinpoints leaks without unnecessary wall or floor damage where possible",
  "Covers pipe leaks, supply line leaks, and fixture connection leaks",
  "Includes repair once the source is confirmed and the scope is understood",
  "Serves both residential and commercial properties throughout the Las Vegas Valley",
];

const SIGNS_LIST = [
  "Your monthly water bill has increased noticeably without a change in usage",
  "You can hear running water inside walls or under the floor when all fixtures are off",
  "Walls, ceilings, or floors have damp patches, stains, or soft spots",
  "A specific area of flooring feels warm or unusually soft underfoot",
  "You detect a musty or mildew smell in a room without an obvious moisture source",
  "Your water pressure has dropped throughout the home without explanation",
  "Paint or wallpaper is bubbling, peeling, or warping on an interior wall",
  "Your water meter continues to move when all fixtures and appliances are turned off",
];

const SERVICE_COVERS = [
  "Hidden leak location using specialized detection equipment",
  "Visible pipe and fitting leak assessment and repair",
  "Supply line leak detection for water supply pipes throughout the home",
  "Ceiling and wall moisture investigation for leaks above living spaces",
  "Under-floor moisture detection for slab-adjacent and crawl space properties",
  "Water meter test to confirm active water loss before inspection",
  "Pipe repair or section replacement once the leak source is confirmed",
  "Referral to slab leak detection service for confirmed or suspected slab leaks",
];

type RelatedServiceLink = {
  label: string;
  href: string;
  description: string;
  exists: boolean;
};

const RELATED_SERVICES: RelatedServiceLink[] = [
  {
    label: "Slab Leak Detection and Repair",
    href: "/slab-leak-detection-repair/",
    description:
      "Specialized detection and repair for leaks beneath concrete slab foundations",
    exists: false,
  },
  {
    label: "Water Pipe Repair and Replacement",
    href: "/water-pipe-repair-replacement/",
    description:
      "Repair and replacement of damaged or deteriorating water supply pipes",
    exists: false,
  },
  {
    label: "Emergency Plumbing",
    href: "/emergency-plumbing/",
    description:
      "Urgent leak situations that cannot wait for a scheduled appointment",
    exists: true,
  },
  {
    label: "Video Camera Plumbing Inspections",
    href: "/video-camera-plumbing-inspections/",
    description:
      "Camera inspection to see inside pipes and confirm leak location or pipe condition",
    exists: false,
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
  name: "Leak Detection and Repair in Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing detects and repairs visible and hidden water leaks for homes and businesses throughout Las Vegas, Henderson, North Las Vegas, Summerlin, and surrounding Las Vegas Valley communities.",
  url: "https://redcarpetplumbing.com/leak-detection-repair/",
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
        name: "Leak Detection and Repair",
        item: "https://redcarpetplumbing.com/leak-detection-repair/",
      },
    ],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Leak Detection and Repair",
  serviceType: "Leak Detection and Repair",
  description:
    "Professional leak detection and repair for visible and hidden water leaks in residential and commercial properties throughout Las Vegas, Henderson, North Las Vegas, Summerlin, Spring Valley, Enterprise, Paradise, and Green Valley.",
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
  mainEntity: LEAK_DETECTION_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function LeakDetectionRepairPage() {
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
            { label: "Leak Detection and Repair" },
          ]}
        />

        {/* EYEBROW (above the hero so the H1 stays a clean single-string heading for SEO/AEO) */}
        <div className="bg-white pt-10 sm:pt-12 lg:pt-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 xl:px-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-primary">
              Leak Detection and Repair in Las Vegas
            </p>
          </div>
        </div>

        {/* SECTION 1: HERO */}
        <HeroSection
          headingLevel="h1"
          headline="Leak Detection and Repair in Las Vegas, NV"
          subheading="A hidden water leak can cause significant damage before you ever see a visible sign. Red Carpet Plumbing provides professional leak detection and repair for homes and businesses throughout Las Vegas and the Las Vegas Valley. Whether you have noticed damp walls, an unexplained increase in your water bill, or a pressure drop you cannot explain, our team can locate the source and help you understand the repair options."
          primaryCTA={{
            label: "Request Leak Detection Service",
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
              title="Request Leak Detection Service"
              includeZip
              submitLabel="Request Service"
            />
          }
          backgroundImage={{
            src: "/images/services/leak-detection-repair/hero.webp",
            alt: "Licensed plumber locating a hidden water leak in a Las Vegas home",
          }}
        />

        {/* SECTION 2: TRUST STRIP (dark bg) */}
        <section
          aria-labelledby="leak-detection-trust-label"
          className="bg-brand-charcoal text-white"
        >
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-10 xl:px-12">
            <p id="leak-detection-trust-label" className="sr-only">
              Why Las Vegas Customers Choose Red Carpet Plumbing for Leak Detection
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
              What Is Leak Detection and Repair?
            </h2>
            <p className="mt-6 text-lg leading-8 text-brand-dark/80">
              Leak detection is the process of locating the source of a water
              leak, including leaks that are not visible from the surface.
              Professional leak detection uses specialized equipment to
              identify where water is escaping from a pipe, fitting, or
              supply line without requiring unnecessary damage to walls,
              floors, or foundations. Once the source is confirmed, leak
              repair addresses the damaged pipe or component. Red Carpet
              Plumbing provides both leak detection and repair for
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

        {/* SECTION 4: SIGNS YOU HAVE A HIDDEN LEAK */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
              Signs You May Have a Hidden Water Leak
            </h2>
            <p className="mt-6 text-lg leading-8 text-brand-dark/80">
              Hidden leaks are not always obvious. Many develop gradually and
              show indirect signs before the damage becomes visible. Contact
              a plumber if you notice any of the following.
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

        {/* SECTION 5: WHAT THE SERVICE COVERS */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
              What Our Leak Detection and Repair Service Covers
            </h2>
            <p className="mt-6 text-lg leading-8 text-brand-dark/80">
              Red Carpet Plumbing provides leak detection and repair for a
              range of leak types and property conditions throughout the Las
              Vegas Valley.
            </p>
            {/* FLAG: CLIENT MUST CONFIRM specific leak detection equipment and methods used before launch */}
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

        {/* SECTION 6: LOCAL LAS VEGAS CONTEXT */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
              Why Las Vegas Homes Are Prone to Hidden Leaks
            </h2>
            <p className="mt-6 text-lg leading-8 text-brand-dark/80">
              Most homes in Las Vegas are built on concrete slabs rather than
              raised foundations. Water supply pipes are routed beneath the
              slab and through the walls of the home, which means that when
              a pipe develops a small failure, the water escapes into areas
              that are not visible without detection equipment. Because the
              leak is hidden beneath concrete or inside wall cavities, it
              can continue for weeks or months before the homeowner notices
              a symptom at the surface. By the time damp flooring, a warm
              spot, or a stained ceiling appears, significant water damage
              may already be present in the structure.
            </p>
            <p className="mt-4 text-lg leading-8 text-brand-dark/80">
              Las Vegas hard water and the {"region's"} extreme temperature
              cycling between hot summers and cooler nights also place added
              stress on pipe joints, fittings, and supply line connections
              throughout the home. Older homes in central Las Vegas, North
              Las Vegas, Henderson, and Green Valley may have pipe materials
              that are more susceptible to pinhole leaks and joint failures
              as they age. Catching a hidden leak early reduces the risk of
              structural damage, mold growth, and foundation complications
              that become significantly more expensive to address the longer
              they go undetected. Red Carpet Plumbing serves the{" "}
              <Link
                href="/service-areas/"
                className="font-semibold text-brand-primary hover:text-brand-primary-hover"
              >
                Las Vegas Valley
              </Link>{" "}
              including Summerlin, Spring Valley, Enterprise, and
              surrounding communities. If you suspect a leak, do not wait to
              have it evaluated.
            </p>
          </div>
        </section>

        {/* SECTION 7: PROCESS (5 numbered steps; NOT HowTo schema) */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
              How Our Leak Detection and Repair Process Works
            </h2>
            <p className="mt-6 text-lg leading-8 text-brand-dark/80">
              When you contact Red Carpet Plumbing for leak detection, here
              is what to expect.
            </p>
            {/* FLAG: CLIENT MUST CONFIRM detection methods, equipment used, and process scope before launch */}
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
                    We will confirm your appointment. For situations where
                    visible damage is progressing, we will advise on urgency
                    and any steps to take before arrival.
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
                    Site assessment.
                  </h3>
                  <p className="mt-2 text-base leading-7 text-brand-dark/80">
                    Our plumber will review the symptoms, check accessible
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
                    Detection.
                  </h3>
                  <p className="mt-2 text-base leading-7 text-brand-dark/80">
                    Using specialized equipment, we will locate the source
                    of the leak. In most cases this process is performed
                    without requiring major demolition of walls or floors.
                    The goal is to pinpoint the location accurately before
                    any repair work begins.
                  </p>
                </div>
              </li>

              {/* Step 5 — contains inline forward link to /slab-leak-detection-repair/ */}
              <li className="flex items-start gap-4">
                <span
                  aria-hidden="true"
                  className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-full bg-brand-primary text-base font-semibold text-white"
                >
                  5
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-brand-dark">
                    Repair and report.
                  </h3>
                  <p className="mt-2 text-base leading-7 text-brand-dark/80">
                    Once the source is confirmed, we will explain the repair
                    options and complete the work. If a slab leak is
                    identified, we will refer you to our{" "}
                    <Link
                      // TODO-BATCH-NEXT: /slab-leak-detection-repair/ not yet built
                      href="/slab-leak-detection-repair/"
                      className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                    >
                      slab leak detection and repair
                    </Link>{" "}
                    service for the appropriate follow-up.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        {/* SECTION 8: MID-PAGE CTA */}
        <CTASection
          background="red"
          headline="Think You Have a Leak?"
          body="Contact Red Carpet Plumbing for professional leak detection and repair in Las Vegas and the surrounding Las Vegas Valley."
          primaryCTA={{
            label: "Request Leak Detection Service",
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
              Leak detection often connects to related plumbing services
              depending on what is found. Red Carpet Plumbing provides a
              full range of services to address leaks and any underlying
              pipe conditions.
            </p>
            <ul className="mt-8 space-y-3">
              {RELATED_SERVICES.map((service) => (
                <li
                  key={service.href}
                  className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-brand-surface-alt"
                >
                  <Link
                    // /emergency-plumbing/ and /plumbing-services/ are live; the other 3 are forward links.
                    // TODO-BATCH-NEXT: /slab-leak-detection-repair/ /water-pipe-repair-replacement/ /video-camera-plumbing-inspections/ not yet built
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
            {/* - Leak Detection in Las Vegas: /las-vegas/leak-detection-repair/ */}
            {/* - Leak Detection in Henderson: /henderson/leak-detection-repair/ */}
            {/* - Leak Detection in North Las Vegas: /north-las-vegas/leak-detection-repair/ */}
            {/* - Leak Detection in Summerlin: /summerlin/leak-detection-repair/ */}
            {/* - Leak Detection in Spring Valley: /spring-valley/leak-detection-repair/ */}
            {/* - Leak Detection in Enterprise: /enterprise/leak-detection-repair/ */}
            {/* - Leak Detection in Green Valley: /green-valley/leak-detection-repair/ */}
          </div>
        </section>

        {/* SECTION 10: FAQ */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Leak Detection Questions Answered
              </h2>
            </div>
            <dl className="mt-12 space-y-4">
              {LEAK_DETECTION_FAQS.map((faq) => (
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
          headline="Contact Red Carpet Plumbing for Leak Detection in Las Vegas"
          body="If you suspect a water leak in your Las Vegas home or business, do not wait for the damage to become visible. Contact Red Carpet Plumbing to schedule a leak detection service and get a clear picture of what is happening inside your plumbing system."
          primaryCTA={{
            label: "Request Leak Detection Service",
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
