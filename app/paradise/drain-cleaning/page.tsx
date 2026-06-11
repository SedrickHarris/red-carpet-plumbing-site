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
//   - 24/7 emergency drain availability (hero sub-label) — source-site claim
//   - 4.8-star rating, 76 Google reviews — verify before publishing
//   - "Over 40 years" serving the area — verify before publishing
// License #0048585A (C-1 Plumbing and Heating) is the established project value.
// Schema follows the brief: Service.areaServed uses Place -> AdministrativeArea
// (Clark County) -> State (Nevada), NOT City, because Paradise is unincorporated
// Clark County. No AggregateRating. No standalone LocalBusiness schema.

export const metadata: Metadata = {
  title: "Drain Cleaning in Paradise, NV | Red Carpet Plumbing",
  description:
    "Professional drain cleaning in Paradise, NV. Hard water mineral buildup, grease clogs, restaurant drain service, and main line backups. Red Carpet Plumbing. Call (702) 567-9172.",
  alternates: {
    canonical: "https://redcarpetplumbing.com/paradise/drain-cleaning/",
  },
  openGraph: {
    title: "Drain Cleaning in Paradise, NV | Red Carpet Plumbing",
    description:
      "Drain cleaning for homes and businesses in Paradise, NV. Hard water clogs, grease drain service, hydro jetting, and main line clearing. Call (702) 567-9172.",
    url: "https://redcarpetplumbing.com/paradise/drain-cleaning/",
    siteName: "Red Carpet Plumbing",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

// ---------------------------------------------------------------------------
// FAQ source of truth. The visible FAQ section AND the FAQPage JSON-LD schema
// both derive from this single array, guaranteeing a character-for-character
// match. Do not edit one without the other. FLAG comments live in this source
// only and are NOT part of the visible/schema answer text.
// ---------------------------------------------------------------------------
const PARADISE_DRAIN_FAQS = [
  {
    question: "What causes drains to clog faster in Paradise, NV?",
    answer:
      "Las Vegas Valley water carries 17 to 24 grains per gallon of dissolved minerals, which is among the highest in the United States. These minerals bond with grease and soap residue inside drain pipes, creating a dense scale that accumulates faster than in cities with soft water. Restaurant and commercial properties near the Strip add high-volume grease to the equation. Older cast iron and galvanized drain lines in mid-century residential neighborhoods also trap debris more readily due to corroded interior surfaces.",
  },
  {
    question:
      "Can I use store-bought drain cleaner for a clogged drain in Paradise?",
    answer:
      "Store-bought chemical drain cleaners may temporarily clear a minor clog, but they do not remove the mineral scale and bonded grease that cause recurring clogs in Las Vegas Valley drain lines. Repeated chemical use can also damage older cast iron and galvanized pipe interiors. For a clog that keeps coming back, professional clearing and a camera inspection identify the actual cause.",
  },
  {
    question:
      "What is hydro jetting and is it safe for older pipes in Paradise?",
    answer:
      "Hydro jetting uses high-pressure water to flush grease, mineral scale, and root debris from drain lines. It is highly effective for grease-heavy commercial drain lines and mineral scale buildup. For older cast iron or galvanized pipes, we inspect pipe condition before using hydro jetting. High-pressure methods are not appropriate for severely corroded or fragile older lines.",
  },
  {
    question:
      "Does Red Carpet Plumbing clear restaurant and commercial grease drain lines near the Strip?",
    answer:
      "Yes. Red Carpet Plumbing provides commercial drain clearing for restaurants, hotel kitchens, bars, and commercial food service properties throughout Paradise including the Strip corridor. Commercial grease drain lines require specialized clearing methods and regular maintenance. Red Carpet Plumbing holds Nevada Contractor License #0048585A, C-1 Plumbing and Heating.",
  },
  {
    question: "When is a slow drain actually a sewer line problem?",
    answer:
      "If multiple drains in the home or building are slow or backing up at the same time, or if you see sewage backing up into floor drains or tubs when you flush a toilet, the problem is likely in the main sewer line rather than an individual drain. Main line backups require clearing from the cleanout. Red Carpet Plumbing provides sewer line services throughout Paradise and the Las Vegas Valley.",
  },
  {
    question: "How do I request drain cleaning service in Paradise, NV?",
    answer:
      "Call Red Carpet Plumbing at (702) 567-9172 or submit a service request online at our contact page. For emergency drain backups in Paradise, calling directly is the fastest option.",
  },
];

const HERO_SUBHEADING =
  "Red Carpet Plumbing provides professional drain cleaning for homes and businesses throughout Paradise, NV. Las Vegas Valley hard water causes mineral deposits to bond with grease and soap residue inside drain lines faster than in most cities. Whether you have a slow kitchen drain, a recurring bathroom clog, a restaurant grease line backup near the Strip, or a main line blockage, our licensed plumbers clear it completely. Call us or request service online.";

const HERO_TRUST_ITEMS = [
  "Licensed: Nevada Contractor License #0048585A, C-1 Plumbing and Heating",
  "Residential and commercial drain cleaning in Paradise",
  // FLAG: VERIFY rating and review count before publishing.
  "4.8-star rating, 76 Google reviews",
  // FLAG: VERIFY "over 40 years" before publishing.
  "Serving Paradise and the Las Vegas Valley for over 40 years",
];

// FLAG: source-site claim (24/7 emergency drain availability) — verify before
// final launch.
const HERO_CTA_NOTE = "For emergency drain service, we are available 24/7";

// Section 2 — visible <ul>, AEO featured-snippet target. Hard water mineral
// bonding leads the list per the established pattern.
const DRAIN_CLOG_CAUSES = [
  "Hard water mineral deposits bond with grease and soap residue, creating a dense buildup inside drain lines that standard drain cleaners cannot dissolve",
  "Restaurant and commercial properties near the Las Vegas Strip generate high-volume grease and food waste that accumulates faster in drain lines than residential use",
  "Older residential properties near UNLV and along the Tropicana and Flamingo corridors have cast iron or galvanized drain lines that are 40 to 60 years old, with corroded interior surfaces that trap debris more readily",
  "Tree roots in older Paradise neighborhoods seek moisture and can penetrate aging drain line joints, causing partial blockages that worsen over time",
  "Desert dust and sediment that enters drain systems during wind events can combine with grease and mineral scale to form hardened blockages",
];

// Section 3 — drain services rendered as labeled card blocks (bold label +
// description), same pattern as the established sibling drain pages. The grease
// card carries a TODO-BATCH-6 note for the future /paradise/commercial-plumbing/
// link; it links to the live core /commercial-plumbing/ page for now.
const DRAIN_SERVICES: {
  label: string;
  body: string;
  link?: { href: string; text: string };
}[] = [
  {
    label: "Cable and Snake Drain Clearing",
    body: "Standard cable machines and hand snakes break through and pull out organic clogs in kitchen, bathroom, and utility drains. This method works well for most residential clogs and is gentler on older pipe materials.",
  },
  {
    label: "Hydro Jetting",
    body: "High-pressure water jetting flushes mineral scale, grease accumulation, and root intrusion from drain lines. We assess pipe condition before using hydro jetting. Older cast iron or galvanized lines are inspected first to confirm they can handle the pressure. Hydro jetting is especially effective for grease-heavy restaurant drain lines and main line clearing.",
  },
  {
    label: "Main Line Clearing",
    body: "Blockages in the main sewer line require clearing from the cleanout. We clear main line backups using cable machines or hydro jetting depending on the obstruction type and pipe condition.",
    link: { href: "/sewer-line-services/", text: "sewer line services" },
  },
  {
    label: "Video Camera Drain Inspection",
    body: "When a drain backs up repeatedly or the cause is unknown, a camera inspection identifies the exact location and type of blockage, including root intrusion, pipe collapse, or grease accumulation.",
    link: {
      href: "/video-camera-plumbing-inspections/",
      text: "video camera plumbing inspections",
    },
  },
  {
    // TODO-BATCH-6: link "commercial plumbing" to /paradise/commercial-plumbing/
    // when that page is built. For now this links to the live core page.
    label: "Restaurant and Commercial Grease Drain Service",
    body: "High-volume grease drain lines in restaurants and commercial kitchens near the Las Vegas Strip require specialized clearing. We provide grease line service for commercial properties throughout Paradise. For commercial plumbing, see our",
    link: { href: "/commercial-plumbing/", text: "commercial plumbing" },
  },
  {
    label: "Floor Drain Clearing",
    body: "Utility room floor drains, garage floor drains, and commercial floor drains accumulate sediment and mineral scale. We clear and restore flow to floor drains throughout Paradise.",
  },
];

// Section 5 — visible <ol>, HowTo schema source.
const DRAIN_STEPS = [
  {
    name: "Contact and Assessment",
    body: "Call (702) 567-9172 or request service online. We confirm your location in Paradise and schedule a visit. When we arrive, we assess the drain type, clog location, and pipe condition before selecting the clearing method.",
  },
  {
    name: "Method Selection and Clearing",
    body: "We match the method to the clog and pipe condition. Cable clearing handles most residential clogs. Hydro jetting is used for grease buildup, mineral scale, and main line clearing where pipe condition supports it. Older cast iron or galvanized lines are inspected before high-pressure work.",
  },
  {
    name: "Camera Inspection (When Needed)",
    body: "For recurring clogs, main line backups, or unknown causes, we run a camera through the line to identify the exact issue. Root intrusion, partial pipe collapse, and grease accumulation are all visible on camera.",
  },
  {
    name: "Restore Flow and Recommend",
    body: "After clearing, we confirm full flow is restored and provide a clear assessment of drain condition. If recurring issues suggest a larger pipe problem, we explain the options and next steps.",
  },
];

// Section 7 — area chips, no links (established location-page pattern).
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
  name: "Drain Cleaning in Paradise, NV | Red Carpet Plumbing",
  description:
    "Professional drain cleaning in Paradise, NV. Hard water mineral buildup, grease clogs, restaurant drain service, and main line backups. Red Carpet Plumbing. Call (702) 567-9172.",
  url: "https://redcarpetplumbing.com/paradise/drain-cleaning/",
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
      name: "Drain Cleaning in Paradise, NV",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Drain Cleaning in Paradise, NV",
  serviceType: "Drain Cleaning",
  description:
    "Professional drain cleaning for homes and businesses in Paradise, NV. Cable clearing, hydro jetting, main line service, camera inspection, and restaurant grease drain clearing.",
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

// HowTo schema included because Section 5 renders the matching visible
// step-by-step process (titles + body) on the page.
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How We Clear Drains in Paradise, NV",
  step: DRAIN_STEPS.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.name,
    text: s.body,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: PARADISE_DRAIN_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function ParadiseDrainCleaningPage() {
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
            { label: "Drain Cleaning in Paradise, NV" },
          ]}
        />

        {/* SECTION 1: HERO */}
        {/* TODO: no /images/locations/paradise/ assets exist yet — using the */}
        {/* drain-cleaning service card as the fallback per the image plan. */}
        {/* Swap to a Paradise-specific hero when the client supplies one. */}
        <HeroSection
          headingLevel="h1"
          headline="Drain Cleaning in Paradise, NV"
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
          formSlot={<QuoteFormPlaceholder title="Get Drain Cleaning Help" />}
          backgroundImage={{
            src: "/images/services/drain-cleaning/card.webp",
            alt: "Drain cleaning service in Paradise, NV",
          }}
        />

        {/* SECTION 2: WHAT CAUSES DRAINS TO CLOG FASTER (AEO target) */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                What Causes Drains to Clog Faster in Paradise, NV?
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Las Vegas Valley water ranks among the hardest municipal water in
                the United States, carrying 17 to 24 grains per gallon of
                dissolved minerals. In Paradise, this combines with other local
                factors to create drain buildup conditions that are more
                aggressive than most cities.
              </p>
            </div>
            <div className="mt-8 rounded-2xl border-l-4 border-brand-primary bg-brand-surface-alt p-6 sm:p-8">
              <ul className="space-y-3">
                {DRAIN_CLOG_CAUSES.map((item) => (
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

        {/* SECTION 3: DRAIN CLEANING SERVICES (labeled card blocks) */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Drain Cleaning Services We Provide in Paradise, NV
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing matches the clearing method to the specific
                clog type and pipe condition. Our licensed plumbers provide the
                following drain cleaning services in Paradise. For our full range
                of{" "}
                <Link
                  href="/drain-cleaning/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  drain cleaning services
                </Link>
                , see our core service page.
              </p>
            </div>
            <ul className="mt-10 space-y-5">
              {DRAIN_SERVICES.map((s) => (
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
                        {s.label === "Restaurant and Commercial Grease Drain Service" ? (
                          <>
                            {" "}
                            <Link
                              href={s.link.href}
                              className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                            >
                              {s.link.text}
                            </Link>{" "}
                            page.
                          </>
                        ) : (
                          <>
                            {" "}
                            Learn more about{" "}
                            <Link
                              href={s.link.href}
                              className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                            >
                              {s.link.text}
                            </Link>
                            .
                          </>
                        )}
                      </>
                    ) : null}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 4: PARADISE-SPECIFIC DRAIN RISKS */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Drain Conditions Specific to Paradise, NV
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Paradise presents a combination of drain risk factors that
                    differ from newer Las Vegas Valley communities. Understanding
                    the specific conditions helps homeowners and business owners
                    know when a slow drain is more than a simple clog.
                  </p>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-10">
                <div className="space-y-6">
                  {/* TODO-BATCH-6: link "commercial drain clearing" to */}
                  {/* /paradise/commercial-plumbing/ when that page is built. */}
                  <article className="rounded-2xl bg-brand-surface-alt p-6 ring-1 ring-brand-surface-alt sm:p-8">
                    <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                      Strip Corridor Restaurant and Commercial Drains
                    </h3>
                    <p className="mt-3 text-base leading-7 text-brand-dark/80">
                      The Las Vegas Strip runs almost entirely through Paradise,
                      NV. The density of restaurants, hotel kitchens, bars, and
                      commercial food service operations in this corridor creates
                      drain conditions unlike any residential area. Grease
                      accumulates in commercial drain lines faster than in
                      residential systems. Combined with hard water mineral
                      bonding, grease clogs in commercial drain lines can become
                      complete blockages within weeks if lines are not maintained.
                      Red Carpet Plumbing provides commercial drain clearing
                      throughout Paradise.
                    </p>
                  </article>

                  <article className="rounded-2xl bg-brand-surface-alt p-6 ring-1 ring-brand-surface-alt sm:p-8">
                    <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                      Older Residential Drain Lines
                    </h3>
                    <p className="mt-3 text-base leading-7 text-brand-dark/80">
                      Residential neighborhoods near UNLV and along the Tropicana
                      and Flamingo corridors in Paradise include homes built in
                      the 1960s through 1980s. Many of these properties still have
                      original cast iron or galvanized steel drain lines. The
                      interior surfaces of these older materials corrode over time,
                      creating rough textures that trap grease, hair, and soap
                      residue more easily than smooth PVC. Recurring clogs in older
                      homes are often a sign the drain line needs inspection, not
                      just clearing.
                    </p>
                  </article>

                  <article className="rounded-2xl bg-brand-surface-alt p-6 ring-1 ring-brand-surface-alt sm:p-8">
                    <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                      Hard Water and Mineral Scale
                    </h3>
                    <p className="mt-3 text-base leading-7 text-brand-dark/80">
                      At 17 to 24 grains per gallon, Las Vegas Valley water creates
                      mineral scale that bonds to grease and soap residue inside
                      drain pipes. This scale is not dissolved by standard drain
                      cleaners. It requires mechanical or hydro jetting removal.
                      Mineral bonding accelerates clog formation in both
                      residential and commercial drain lines throughout Paradise.
                    </p>
                  </article>

                  <article className="rounded-2xl bg-brand-surface-alt p-6 ring-1 ring-brand-surface-alt sm:p-8">
                    <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                      Main Line Root Intrusion
                    </h3>
                    <p className="mt-3 text-base leading-7 text-brand-dark/80">
                      Older Paradise neighborhoods with mature trees have root
                      systems that seek moisture from drain lines. Tree roots enter
                      drain pipes through aging joints and hairline cracks, causing
                      partial blockages that worsen gradually. Camera inspection
                      identifies root intrusion before a complete backup occurs.
                      For emergency drain situations, see{" "}
                      <Link
                        href="/paradise/emergency-plumbing/"
                        className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                      >
                        emergency plumbing in Paradise
                      </Link>
                      .
                    </p>
                  </article>
                </div>
              </SectionRevealItem>
            </SectionReveal>
          </div>
        </section>

        {/* SECTION 5: HOW WE CLEAR DRAINS (HowTo) */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    How We Clear Drains in Paradise, NV
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    When you contact Red Carpet Plumbing for drain cleaning in
                    Paradise, here is our process.
                  </p>
                </div>
              </SectionRevealItem>
              <SectionRevealItem className="mt-12">
                <ol className="space-y-8">
                  {DRAIN_STEPS.map((step, index) => (
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

        {/* SECTION 6: MID-PAGE CTA (charcoal band) */}
        <section className="bg-brand-charcoal text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Slow Drain or Recurring Backup in Paradise, NV?
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/80">
                  Hard water buildup and grease accumulation make drain clogs in
                  Paradise worse over time. Call Red Carpet Plumbing to clear it
                  completely. For emergency drain backups, see{" "}
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

        {/* SECTION 7: AREAS WE SERVE */}
        <section className="bg-brand-charcoal text-white">
          <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10 lg:pb-24 xl:px-12">
            <div className="max-w-3xl text-left">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Drain Cleaning Service Areas in Paradise, NV
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/85">
                Red Carpet Plumbing provides drain cleaning throughout Paradise
                and the surrounding Las Vegas Valley. Service areas within
                Paradise include:
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
              coverage. For broader Las Vegas Valley plumbing services, see{" "}
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

        {/* SECTION 8: FAQ */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Frequently Asked Questions About Drain Cleaning in Paradise, NV
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {PARADISE_DRAIN_FAQS.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-brand-surface-alt open:border-l-4 open:border-brand-primary open:pl-4 sm:p-8"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-brand-dark sm:text-xl [&::-webkit-details-marker]:hidden">
                    <span>{faq.question}</span>
                    <FaqChevron />
                  </summary>
                  {faq.question === "When is a slow drain actually a sewer line problem?" ? (
                    <p className="mt-4 text-base leading-7 text-brand-dark/80">
                      If multiple drains in the home or building are slow or
                      backing up at the same time, or if you see sewage backing up
                      into floor drains or tubs when you flush a toilet, the
                      problem is likely in the main sewer line rather than an
                      individual drain. Main line backups require clearing from the
                      cleanout. Red Carpet Plumbing provides{" "}
                      <Link
                        href="/sewer-line-services/"
                        className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                      >
                        sewer line services
                      </Link>{" "}
                      throughout Paradise and the Las Vegas Valley.
                    </p>
                  ) : (
                    <p className="mt-4 text-base leading-7 text-brand-dark/80">
                      {faq.answer}
                    </p>
                  )}
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 9: FINAL CTA */}
        <CTASection
          background="red"
          headline="Ready to Clear Your Drain in Paradise, NV?"
          body="Do not let a slow drain turn into a complete backup. Red Carpet Plumbing provides professional drain cleaning throughout Paradise and the Las Vegas Valley. Call now or request service online."
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
