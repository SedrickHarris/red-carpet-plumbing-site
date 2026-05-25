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
  title: "Emergency Plumber in Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Need an emergency plumber in Las Vegas? Red Carpet Plumbing provides emergency plumbing support for burst pipes, backups, major leaks, and urgent plumbing problems throughout the Las Vegas Valley.",
  alternates: {
    canonical: "https://redcarpetplumbing.com/emergency-plumbing/",
  },
  openGraph: {
    title: "Emergency Plumber in Las Vegas, NV | Red Carpet Plumbing",
    description:
      "Burst pipe, sewage backup, or major plumbing leak in Las Vegas? Red Carpet Plumbing provides emergency plumbing support for homes and businesses throughout the Las Vegas Valley.",
    url: "https://redcarpetplumbing.com/emergency-plumbing/",
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
const EMERGENCY_FAQS = [
  {
    question: "What counts as a plumbing emergency?",
    answer:
      "A plumbing emergency is any situation where a plumbing failure poses an immediate risk of water damage, property damage, or a health hazard. Not every plumbing problem is an emergency. A slow drain or a dripping faucet can usually wait for a scheduled appointment. Common emergencies include burst pipes, sewage backups, major active leaks, a complete loss of water pressure, and overflowing toilets that cannot be stopped with a shutoff valve.",
  },
  {
    question: "What should I do first when a pipe bursts?",
    answer:
      "Shut off the main water supply to your home or building as quickly as possible. The main shutoff valve is typically located near the water meter or where the main line enters the building. Once the water is off, contact a plumber to assess and repair the damage.",
  },
  {
    question: "Can a plumber help with sewage backups?",
    answer:
      "Yes. Sewage backups are a serious plumbing concern that should be addressed by a professional. A plumber can clear the blockage, assess the cause, and recommend any needed repairs to prevent the problem from happening again.",
  },
  {
    question: "How do I reduce water damage while waiting for a plumber?",
    answer:
      "Shut off the main water supply if you have not already done so. Move valuables away from the affected area if it is safe. Do not use electrical outlets or appliances near standing water. If a ceiling is leaking, place buckets to collect dripping water and avoid the affected space until a plumber arrives.",
  },
  {
    question: "Does Red Carpet Plumbing serve areas outside of Las Vegas?",
    answer:
      "Yes. Red Carpet Plumbing serves communities throughout the Las Vegas Valley including Henderson, North Las Vegas, Summerlin, Spring Valley, Enterprise, Paradise, and surrounding areas.",
  },
  {
    question:
      "What plumbing problems should never wait for a scheduled appointment?",
    answer:
      "Contact a plumber promptly for actively flowing water from a broken pipe, sewage backing up into fixtures, a complete loss of water pressure, water pooling near the foundation or under a slab, and any situation where water is making contact with electrical components or structural materials.",
  },
];

const TRUST_STRIP_ITEMS = [
  "Emergency Plumbing Support",
  "Serving Las Vegas and the Las Vegas Valley",
  // SOURCE-SITE CLAIM: verify before publish
  "Transparent Pricing",
  // SOURCE-SITE CLAIM: verify before publish
  "Customer Satisfaction Focus",
  "Residential and Commercial Service",
];

const WHAT_IS_BULLETS = [
  "Burst or broken pipes with active water flow",
  "Sewage backing up into drains, toilets, or other fixtures",
  "Major leaks inside walls, under floors, or near the foundation",
  "Complete loss of hot water in your home or building",
  "Overflowing toilets that cannot be controlled with a shutoff valve",
];

const WHAT_TO_DO_STEPS = [
  "Shut off the main water supply immediately if water is actively flowing. The main shutoff valve is typically near your water meter or where the main line enters the building.",
  "Move valuables and belongings away from the affected area if it is safe to do so.",
  "Stay away from electrical outlets, panels, or appliances that are near standing water.",
  "Contact a plumber as soon as possible and describe the problem clearly, including where the issue is and whether you were able to shut off the water.",
];

const SIGNS_LIST = [
  "Water is actively spraying or flooding from a broken pipe",
  "A toilet is overflowing and cannot be stopped with the shutoff valve",
  "Your main water line has lost pressure suddenly and completely",
  "Sewage is backing up through drains, toilets, or floor fixtures",
  "Water is visibly pooling under a slab, wall, or ceiling",
  "You smell gas near a plumbing connection or water heater",
  "Your hot water system has completely stopped working",
  "A water leak is actively causing damage to walls, flooring, or cabinetry",
];

const SERVICE_COVERS = [
  "Burst pipe assessment, water shutoff support, and repair",
  "Sewage backup assessment and drain clearing",
  "Major water leak detection and containment",
  "Emergency water heater evaluation",
  "Overflowing toilet repair and shutoff assistance",
  "Slab leak emergency assessment",
  "Main water line pressure evaluation",
  "Coordination of follow-up repairs after emergency stabilization",
];

const PROCESS_STEPS = [
  {
    heading: "Contact us.",
    body: "Reach out by phone or through our online contact form. Describe the problem and where it is located in your home or building.",
  },
  {
    heading: "Describe the situation.",
    body: "Tell us whether water is actively flowing, whether you have been able to reach the main shutoff valve, and how long the problem has been occurring.",
  },
  {
    heading: "Receive next steps.",
    body: "Our team will respond to your request and communicate what to expect, including any steps you can take to reduce damage while waiting.",
  },
  {
    heading: "On-site diagnosis.",
    body: "Our plumber will inspect the affected area, identify the source of the problem, and explain the repair options clearly before any work begins.",
  },
  {
    heading: "Repair or stabilization.",
    body: "We will complete the repair or stabilize the situation to prevent additional damage. If follow-up work is needed, we will explain the plan and timeline.",
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
      "Drain blockages and backups that triggered or followed the emergency",
    exists: false,
  },
  {
    label: "Leak Detection and Repair",
    href: "/leak-detection-repair/",
    description: "Hidden leaks that caused or developed after the emergency",
    exists: false,
  },
  {
    label: "Slab Leak Detection and Repair",
    href: "/slab-leak-detection-repair/",
    description:
      "Slab leaks requiring specialized detection and repair",
    exists: false,
  },
  {
    label: "Water Heater Repair and Installation",
    href: "/water-heater-repair-installation/",
    description: "Water heater failures that disrupted hot water supply",
    exists: false,
  },
  {
    label: "Plumbing Services",
    href: "/plumbing-services/",
    description: "Full list of residential and commercial plumbing services",
    exists: true,
  },
];

// ---------------------------------------------------------------------------
// JSON-LD payloads
// ---------------------------------------------------------------------------

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Emergency Plumber in Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides emergency plumbing support for burst pipes, major leaks, sewage backups, and urgent plumbing problems in Las Vegas and throughout the Las Vegas Valley.",
  url: "https://redcarpetplumbing.com/emergency-plumbing/",
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
        name: "Emergency Plumbing",
        item: "https://redcarpetplumbing.com/emergency-plumbing/",
      },
    ],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Emergency Plumbing",
  serviceType: "Emergency Plumbing",
  description:
    "Emergency plumbing support for burst pipes, sewage backups, major leaks, overflowing toilets, and urgent plumbing problems in Las Vegas, Henderson, North Las Vegas, Summerlin, Spring Valley, Enterprise, Paradise, and surrounding Las Vegas Valley communities.",
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
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: EMERGENCY_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function EmergencyPlumbingPage() {
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
            { label: "Emergency Plumbing" },
          ]}
        />

        {/* SECTION 1: HERO — eyebrow text rendered above the hero so the H1 stays a clean, single-string heading for SEO/AEO. */}
        <div className="bg-white pt-10 sm:pt-12 lg:pt-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 xl:px-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-primary">
              Emergency Plumbing Support in Las Vegas
            </p>
          </div>
        </div>
        <HeroSection
          headingLevel="h1"
          headline="Emergency Plumber in Las Vegas, NV"
          subheading="When a plumbing emergency strikes your Las Vegas home or business, every minute counts. Red Carpet Plumbing provides emergency plumbing support for burst pipes, major leaks, sewage backups, overflowing toilets, and other urgent plumbing problems that cannot wait. Contact our team now to get help."
          primaryCTA={{
            label: "Request Emergency Plumbing Help",
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
              title="Request Emergency Plumbing Help"
              includeZip
              submitLabel="Request Service"
            />
          }
          backgroundImage={{
            src: "/images/services/emergency-plumbing/hero.webp",
            alt: "Red Carpet Plumbing technician performing an emergency plumbing diagnosis in Las Vegas",
          }}
        />

        {/* SECTION 2: TRUST STRIP (dark bg) */}
        <section
          aria-labelledby="emergency-trust-label"
          className="bg-brand-charcoal text-white"
        >
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-10 xl:px-12">
            <p
              id="emergency-trust-label"
              className="sr-only"
            >
              Why Las Vegas Customers Choose Red Carpet Plumbing for Emergency Service
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
              What Is an Emergency Plumber?
            </h2>
            <p className="mt-6 text-lg leading-8 text-brand-dark/80">
              An emergency plumber responds to urgent plumbing situations that
              pose an immediate risk of water damage, property damage, or
              health hazards. Red Carpet Plumbing provides emergency plumbing
              support for homes and businesses throughout Las Vegas and the
              Las Vegas Valley when a plumbing problem cannot wait for a
              regular appointment.
            </p>
            <ul className="mt-6 space-y-3">
              {WHAT_IS_BULLETS.map((bullet) => (
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

        {/* SECTION 4: WHAT TO DO RIGHT NOW (4 numbered steps; NOT HowTo schema) */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
              What to Do When You Have a Plumbing Emergency
            </h2>
            <p className="mt-6 text-lg leading-8 text-brand-dark/80">
              If you are dealing with a plumbing emergency, take these steps
              while you wait for a plumber.
            </p>
            <ol className="mt-8 space-y-6">
              {WHAT_TO_DO_STEPS.map((step, index) => (
                <li key={step} className="flex items-start gap-4">
                  <span
                    aria-hidden="true"
                    className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-full bg-brand-primary text-base font-semibold text-white"
                  >
                    {index + 1}
                  </span>
                  <p className="text-base leading-7 text-brand-dark/80">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* SECTION 5: SIGNS YOU NEED AN EMERGENCY PLUMBER */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
              Signs You Need an Emergency Plumber
            </h2>
            <p className="mt-6 text-lg leading-8 text-brand-dark/80">
              Some plumbing problems can wait for a scheduled appointment.
              Others need attention right away. Contact a plumber promptly if
              you notice any of these situations.
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

        {/* SECTION 6: WHAT THE SERVICE COVERS */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
              Emergency Plumbing Services We Provide
            </h2>
            <p className="mt-6 text-lg leading-8 text-brand-dark/80">
              Red Carpet Plumbing provides emergency plumbing support for a
              wide range of urgent problems in homes and businesses throughout
              the Las Vegas Valley.
            </p>
            {/* FLAG: CLIENT MUST CONFIRM emergency service scope and response availability before launch */}
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

        {/* SECTION 7: LOCAL LAS VEGAS CONTEXT */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
              Why Las Vegas Homes Face Emergency Plumbing Risks
            </h2>
            <p className="mt-6 text-lg leading-8 text-brand-dark/80">
              Las Vegas has some of the hardest water in the country. High
              mineral content in the local water supply causes scale and
              sediment buildup inside pipes over time, narrowing water lines
              and putting added stress on joints, fittings, and fixtures.
              Combined with extreme summer heat that expands pipe materials
              and cooler winter nights that cause contraction, Las Vegas homes
              experience pipe stress cycles that can accelerate wear and
              increase the risk of sudden failures.
            </p>
            <p className="mt-4 text-lg leading-8 text-brand-dark/80">
              Most Las Vegas homes are built on concrete slabs rather than
              crawl spaces or raised foundations. When a pipe beneath a slab
              fails, the leak can go undetected for weeks before visible signs
              appear at the surface. By the time a homeowner notices warm
              spots on the floor, unexplained water bills, or damp carpeting,
              significant damage may already be underway. Red Carpet Plumbing
              serves Las Vegas, Henderson, North Las Vegas, Summerlin, Spring
              Valley, Enterprise, and surrounding communities throughout the{" "}
              <Link
                href="/service-areas/"
                className="font-semibold text-brand-primary hover:text-brand-primary-hover"
              >
                Las Vegas Valley
              </Link>
              . If you are unsure whether your area is covered, visit our
              service areas page.
            </p>
          </div>
        </section>

        {/* SECTION 8: PROCESS (5 numbered steps; NOT HowTo schema) */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
              How Our Emergency Plumbing Process Works
            </h2>
            <p className="mt-6 text-lg leading-8 text-brand-dark/80">
              When you contact Red Carpet Plumbing with an emergency plumbing
              problem, here is what you can expect.
            </p>
            {/* FLAG: CLIENT MUST CONFIRM response time language and emergency arrival scope before launch */}
            <ol className="mt-8 space-y-6">
              {PROCESS_STEPS.map((step, index) => (
                <li key={step.heading} className="flex items-start gap-4">
                  <span
                    aria-hidden="true"
                    className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-full bg-brand-primary text-base font-semibold text-white"
                  >
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-brand-dark">
                      {step.heading}
                    </h3>
                    <p className="mt-2 text-base leading-7 text-brand-dark/80">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* SECTION 9: MID-PAGE CTA */}
        <CTASection
          background="red"
          headline="Ready to Get Help?"
          body="Contact Red Carpet Plumbing for emergency plumbing support in Las Vegas and the Las Vegas Valley."
          primaryCTA={{
            label: "Request Service",
            href: "/contact/",
          }}
        />

        {/* SECTION 10: RELATED SERVICES */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
              Related Plumbing Services
            </h2>
            <p className="mt-6 text-lg leading-8 text-brand-dark/80">
              Emergency plumbing often connects to other repair and diagnostic
              needs. Red Carpet Plumbing handles a full range of plumbing
              services so you can resolve the immediate problem and address
              any underlying issues.
            </p>
            <ul className="mt-8 space-y-3">
              {RELATED_SERVICES.map((service) => (
                <li
                  key={service.href}
                  className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-brand-surface-alt"
                >
                  <Link
                    // TODO-BATCH-NEXT: service.href service route not yet built (except /plumbing-services/ which is live)
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
            {/* - Emergency Plumbing in Las Vegas: /las-vegas/emergency-plumbing/ */}
            {/* - Emergency Plumbing in Henderson: /henderson/emergency-plumbing/ */}
            {/* - Emergency Plumbing in North Las Vegas: /north-las-vegas/emergency-plumbing/ */}
            {/* - Emergency Plumbing in Summerlin: /summerlin/emergency-plumbing/ */}
          </div>
        </section>

        {/* SECTION 11: FAQ */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Emergency Plumbing Questions Answered
              </h2>
            </div>
            <dl className="mt-12 space-y-4">
              {EMERGENCY_FAQS.map((faq) => (
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

        {/* SECTION 12: FINAL CTA */}
        <CTASection
          background="red"
          headline="Contact Red Carpet Plumbing for Emergency Plumbing Help"
          body="If you are dealing with a plumbing emergency in Las Vegas or the surrounding area, do not wait. Contact Red Carpet Plumbing now to describe your situation and reach our team."
          primaryCTA={{
            label: "Request Emergency Plumbing Help",
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
