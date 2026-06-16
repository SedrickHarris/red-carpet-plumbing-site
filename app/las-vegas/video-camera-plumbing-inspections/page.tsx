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
//   - "Transparent Pricing, No Hidden Fees" trust items + Why-Choose bullet —
//     source-site claims, VERIFY.
//   - License #0048585A is a verified business claim.
//
// Las Vegas cluster pattern: 5 separate JsonLd blocks WebPage -> BreadcrumbList
// -> Service -> HowTo -> FAQPage. areaServed `City` (Las Vegas) -> `State`
// (Nevada). BreadcrumbList = 3 items. No AggregateRating / Review. HowTo +
// FAQPage derive from a single const. Hero trustItems + separate red trust band.
// Use cases, Las Vegas factors, and services render as H3 article cards.
//
// Hero uses video-camera-plumbing-inspections/hero.webp (104KB; the only asset
// — no card.webp). Service provider includes a PostalAddress per the approved
// P53 Service schema. Body copy uses the approved on-page prose (which includes
// the drain/sewer/trenchless/commercial internal links).
//
// NOTE: links to /las-vegas/sewer-line-services/ (P47) — staged in the same
// working tree and builds (route resolves); committed alongside this page. The
// approved-copy link target. This is the final page of the LV cluster (P47-P53).
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title:
    "Video Camera Plumbing Inspections in Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing performs sewer and drain camera inspections in Las Vegas, NV. Root intrusion, pipe belly detection, pre-purchase inspections, post-cleaning confirmation. NV #0048585A. Call (702) 567-9172.",
  alternates: {
    canonical:
      "https://redcarpetplumbing.com/las-vegas/video-camera-plumbing-inspections/",
  },
  openGraph: {
    title:
      "Video Camera Plumbing Inspections in Las Vegas, NV | Red Carpet Plumbing",
    description:
      "Licensed sewer and drain camera inspections in Las Vegas. Caliche pipe belly detection, root intrusion, pre-purchase inspections. NV #0048585A.",
    url: "https://redcarpetplumbing.com/las-vegas/video-camera-plumbing-inspections/",
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
const LV_CAMERA_FAQS = [
  {
    question: "What does a sewer camera inspection show?",
    answer:
      "A sewer camera inspection shows the inside condition of your sewer line or drain pipe in real time. The camera can identify root intrusion from trees seeking moisture inside the pipe, pipe bellies or sags where waste collects and causes repeated clogs, offset or separated pipe joints from soil movement, cracked or collapsed pipe sections, hard water scale or grease buildup narrowing the line, and foreign object blockages. The footage provides a clear diagnosis before any repair decision is made.",
  },
  {
    question:
      "When do I need a video camera plumbing inspection in Las Vegas?",
    answer:
      "A camera inspection is useful when drain cleaning does not fully resolve a recurring clog, when you want to confirm a drain line is clear after hydro jetting, when you are experiencing unexplained sewer odors or slow drains throughout the house, before buying a home to document the sewer line condition, or when a plumber suspects root intrusion or pipe damage. In Las Vegas, caliche soil and mature desert landscaping create specific pipe stress conditions that make camera inspection a practical diagnostic step for homes with older sewer lines.",
  },
  {
    question: "How long does a sewer camera inspection take?",
    answer:
      "A standard sewer camera inspection typically takes thirty minutes to one hour for a single line, depending on the length of the line, the presence of obstructions, and the access point available. If a cleanout is not already installed, additional time may be needed to establish access. Red Carpet Plumbing can provide an accurate time estimate when you call to schedule.",
  },
  {
    question:
      "Should I get a sewer inspection before buying a home in Las Vegas?",
    answer:
      "Yes. A pre-purchase sewer camera inspection documents the condition of the sewer line before closing and can identify root intrusion, pipe belly, cracked sections, or offset joints that would otherwise be unknown. In Las Vegas, caliche soil movement and aging sewer infrastructure in neighborhoods built before the 1990s make sewer line condition a meaningful variable in home purchase decisions. The recorded footage can also support repair negotiations if problems are found.",
  },
  {
    question: "Can a camera inspection find root intrusion?",
    answer:
      "Yes. Root intrusion is one of the most common findings in sewer camera inspections throughout Las Vegas. Desert trees including mesquite, olive, and some ornamental trees send roots into sewer lines seeking moisture, and those roots can partially or fully block the line over time. A camera inspection shows the location and extent of root intrusion so the plumber can recommend the appropriate clearing or repair approach.",
  },
  {
    question: "What is a pipe belly and how does a camera find it?",
    answer:
      "A pipe belly is a section of sewer line that has sagged below the surrounding grade, creating a low point where waste and water collect instead of flowing through. In Las Vegas, caliche soil and uneven desert ground conditions contribute to pipe belly formation, particularly in older sewer lines. A camera inspection shows these low spots in real time, and the sonde locator can mark the surface position of the sag for targeted repair.",
  },
];

// ---------------------------------------------------------------------------
// Process steps — HowTo schema source of truth. Visible numbered steps and the
// HowTo JSON-LD both derive from this array.
// ---------------------------------------------------------------------------
const LV_CAMERA_STEPS = [
  {
    name: "Call and schedule",
    body: "Call Red Carpet Plumbing at (702) 567-9172 and describe what you are experiencing or what you need inspected. We schedule a licensed plumber equipped with video camera inspection equipment.",
  },
  {
    name: "Access and camera setup",
    body: "The plumber accesses the sewer line or drain pipe through an existing cleanout or suitable access point. If no cleanout is available, we discuss installation options before the inspection begins.",
  },
  {
    name: "Live camera inspection",
    body: "The waterproof camera is fed through the pipe on a flexible cable. The plumber monitors the live feed and identifies any root intrusion, blockages, pipe bellies, offset joints, cracks, or scale buildup. The sonde locator marks surface positions of any problem areas.",
  },
  {
    name: "Review findings and recommend next steps",
    body: "We walk you through what the camera found, explain the condition of the line, and recommend the appropriate next steps, whether that is drain cleaning, targeted repair, or continued monitoring. You have the information needed to make a confident decision.",
  },
];

// FLAG: VERIFY before publishing — license number and transparent pricing are
// source-site claims. Confirm before launch.
const WHY_CHOOSE = [
  "Local Las Vegas plumbing company familiar with caliche soil pipe belly formation, desert landscaping root intrusion, and aging sewer infrastructure in Las Vegas neighborhoods",
  "Licensed plumbers (NV License #0048585A)",
  "Sonde locator equipment to mark surface positions of pipe bellies and problem areas from above ground",
  "Camera inspection as the first step for all sewer line diagnostics before any repair recommendation",
  "Residential and commercial camera inspection service throughout Las Vegas",
  "Pre-purchase sewer inspections scheduled around your due diligence timeline",
  "Transparent pricing with no hidden fees",
];

// Red brand-primary trust band (Section 2).
const LV_CAMERA_TRUST_STRIP = [
  "NV Licensed Plumbers, #0048585A",
  "Sewer and Drain Camera Inspections",
  "Serving Las Vegas and the Valley",
  "Transparent Pricing, No Hidden Fees",
];

const LV_CAMERA_NEIGHBORHOODS = [
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
// Section 3 — when a camera inspection makes sense (H3 article cards). Recurring
// clog and older-homes cards carry inline links per the approved copy.
// ---------------------------------------------------------------------------
const LV_CAMERA_USE_CASES: { title: string; body: string; tail?: LinkSeg[] }[] =
  [
    {
      title: "Recurring drain clogs that will not stay cleared",
      body: "If a drain backs up repeatedly after cleaning, the cause may be root intrusion, a pipe belly collecting waste, or a partial blockage further down the line that a snake cannot fully clear. A camera inspection identifies the exact cause and location before any additional work is done.",
      tail: [
        " For drain cleaning and hydro jetting service, see ",
        {
          href: "/las-vegas/drain-cleaning/",
          text: "drain cleaning in Las Vegas",
        },
        ".",
      ],
    },
    {
      title: "Before buying a home in Las Vegas",
      body: "A pre-purchase sewer camera inspection documents the condition of the sewer line before closing. In Las Vegas, where caliche soil movement and aging sewer infrastructure are common in neighborhoods built before the 1990s, sewer line condition is a meaningful variable in home purchase decisions. The recorded footage can support repair negotiations or price adjustments if problems are found.",
    },
    {
      title: "Confirm a line is clear after drain cleaning",
      body: "A camera inspection after hydro jetting or drain cleaning confirms the line is fully clear and checks for structural issues that may have been masked by the blockage. Post-cleaning confirmation is particularly valuable when the original clog was in the main sewer line.",
    },
    {
      title: "Unexplained sewer odors or slow drains throughout the house",
      body: "Persistent sewer smells or slow drains across multiple fixtures without an obvious cause often point to a crack, offset joint, or partial blockage in the main sewer line. A camera inspection identifies the source and location so the right repair can be made.",
    },
    {
      title: "Older homes with aging sewer infrastructure",
      body: "Homes built before the 1990s in Las Vegas may have original clay or cast iron sewer lines. A camera inspection assesses the condition of these older materials and identifies corrosion, cracks, or root intrusion before they cause a failure or a sewage backup.",
      tail: [
        " For sewer line repair and replacement, see ",
        {
          href: "/las-vegas/sewer-line-services/",
          text: "sewer line services in Las Vegas",
        },
        ".",
      ],
    },
  ];

// ---------------------------------------------------------------------------
// Section 4 — why camera inspections matter in Las Vegas (H3 article cards).
// Caliche/pipe-belly card carries a trenchless link.
// ---------------------------------------------------------------------------
const LV_CAMERA_FACTORS: { title: string; body: string; tail?: LinkSeg[] }[] = [
  {
    title: "Caliche soil and pipe belly formation",
    body: "The Las Vegas Valley sits on caliche-rich desert soil that compresses and shifts unevenly as it dries and re-wets through cycles of desert heat and periodic rain. This soil movement displaces sewer lines over time, creating bellies where the pipe has dropped below the surrounding grade. Waste and water collect in these low points instead of flowing through, causing recurring clogs that drain cleaning alone will not permanently resolve. A camera inspection with a sonde locator identifies the location and depth of pipe bellies from above ground, allowing for targeted repair without unnecessary excavation.",
    tail: [
      " For trenchless repair options, see ",
      { href: "/trenchless-piping/", text: "trenchless piping services" },
      ".",
    ],
  },
  {
    title: "Root intrusion from desert landscaping",
    body: "Desert-adapted trees and shrubs including mesquite, olive trees, and some ornamental varieties have aggressive root systems that seek moisture in dry conditions. Sewer lines in Las Vegas neighborhoods with mature landscaping are a common target. Roots enter through small cracks and joint gaps, then grow inside the pipe until they partially or fully block flow. Camera inspections show root intrusion in real time and allow the plumber to assess whether hydro jetting can clear the roots or whether a structural repair is needed.",
  },
  {
    title: "Pre-purchase inspections in an active real estate market",
    body: "The Las Vegas residential real estate market moves quickly, and many properties for sale were built in the 1980s and 1990s when older pipe materials were still in common use. A pre-purchase sewer camera inspection documents the condition of the sewer line and can identify root intrusion, pipe belly, cracked sections, or offset joints before the buyer closes. The recorded footage provides a permanent record and can support price negotiation or repair requests. Scheduling an inspection before the due diligence period closes is the most effective timing.",
  },
  {
    title: "Hard water scale visible inside pipes",
    body: "Las Vegas hard water deposits calcium and magnesium scale inside drain pipes and sewer lines over time, particularly in older sections with slower flow. A camera inspection can show the extent of mineral buildup inside the line. Scale buildup that significantly narrows the pipe diameter is a long-term flow restriction that cleaning alone will not eliminate, and camera documentation informs the decision between drain cleaning, pipe lining, or section replacement.",
  },
];

// ---------------------------------------------------------------------------
// Section 5 — video camera inspection services (H3 article cards). Sewer, drain,
// pipe-belly, and commercial cards carry inline links.
// ---------------------------------------------------------------------------
const LV_CAMERA_SERVICES: { title: string; body: string; tail?: LinkSeg[] }[] = [
  {
    title: "Sewer Line Camera Inspection",
    body: "Full video inspection of the main sewer line to identify root intrusion, pipe bellies, offset joints, cracks, and blockages.",
    tail: [
      " For sewer line repair and replacement, see ",
      {
        href: "/las-vegas/sewer-line-services/",
        text: "sewer line services in Las Vegas",
      },
      ".",
    ],
  },
  {
    title: "Drain Line Camera Inspection",
    body: "Camera inspection of kitchen, bathroom, and utility drain lines to locate blockages and confirm line condition after cleaning.",
    tail: [
      " For drain cleaning and hydro jetting, see ",
      { href: "/las-vegas/drain-cleaning/", text: "drain cleaning in Las Vegas" },
      ".",
    ],
  },
  {
    title: "Pre-Purchase Sewer Inspection",
    body: "Sewer camera inspection for home buyers to document sewer line condition before closing on a Las Vegas property. Recorded footage documents findings for negotiation or repair requests.",
  },
  {
    title: "Root Intrusion Inspection and Assessment",
    body: "Camera inspection to identify and locate root intrusion from trees and landscaping in sewer lines. Findings inform whether hydro jetting or structural repair is the right approach.",
  },
  {
    title: "Pipe Belly and Offset Joint Detection",
    body: "Camera inspection to identify sags, bellies, and offset joints caused by caliche soil movement in Las Vegas sewer lines. Sonde locator marks surface positions for targeted repair.",
    tail: [
      " For trenchless repair, see ",
      { href: "/trenchless-piping/", text: "trenchless piping services" },
      ".",
    ],
  },
  {
    title: "Post-Cleaning Confirmation Inspection",
    body: "Camera inspection after drain cleaning or hydro jetting to confirm the line is fully clear and free of structural damage that was masked by the blockage.",
  },
  {
    title: "Commercial Pipe Camera Inspection",
    body: "Video camera inspection of commercial sewer and drain lines for businesses, restaurants, and property managers throughout Las Vegas.",
    tail: [
      " For commercial plumbing service, see our ",
      {
        href: "/las-vegas/commercial-plumbing/",
        text: "Las Vegas commercial plumbing",
      },
      " page.",
    ],
  },
  {
    title: "Cleanout Installation and Inspection",
    body: "Installation of sewer cleanout access points where none exist, followed by camera inspection of the line. Clark County recommends two-way cleanouts for sewer line maintenance access.",
  },
];

// ---------------------------------------------------------------------------
// JSON-LD payloads. areaServed `City` (Las Vegas) -> `State` (Nevada). No
// AggregateRating, no sameAs.
// ---------------------------------------------------------------------------
const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Video Camera Plumbing Inspections in Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing performs sewer and drain camera inspections in Las Vegas, NV. Root intrusion, pipe belly detection, pre-purchase inspections, post-cleaning confirmation. NV #0048585A.",
  url: "https://redcarpetplumbing.com/las-vegas/video-camera-plumbing-inspections/",
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
      name: "Video Camera Plumbing Inspections in Las Vegas, NV",
      item: "https://redcarpetplumbing.com/las-vegas/video-camera-plumbing-inspections/",
    },
  ],
};

// FLAG: VERIFY — telephone carried from sibling pattern. Confirm before launch.
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Video Camera Plumbing Inspections in Las Vegas",
  serviceType: "Video Camera Plumbing Inspection",
  description:
    "Red Carpet Plumbing performs video camera plumbing inspections for residential and commercial properties in Las Vegas, NV, including sewer line camera inspection, drain line inspection, pre-purchase sewer inspection, root intrusion assessment, pipe belly detection with sonde locator, post-cleaning confirmation, and cleanout installation. NV License #0048585A.",
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

// HowTo schema included because Section 6 renders the matching visible numbered
// process steps. Derived from LV_CAMERA_STEPS for a guaranteed text match.
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Red Carpet Plumbing Handles Video Camera Plumbing Inspections in Las Vegas",
  step: LV_CAMERA_STEPS.map((step, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: step.name,
    text: step.body,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: LV_CAMERA_FAQS.map((faq) => ({
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

export default function LasVegasVideoCameraInspectionPage() {
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
            {
              label: "Video Camera Plumbing Inspections in Las Vegas, NV",
            },
          ]}
        />

        {/* SECTION 1: HERO */}
        <HeroSection
          headingLevel="h1"
          headline="Video Camera Plumbing Inspections in Las Vegas, NV"
          subheading="Red Carpet Plumbing performs video camera plumbing inspections for homes and businesses throughout Las Vegas. Whether you have a recurring clog, suspect root intrusion or a pipe belly, want to confirm a drain line is clear after cleaning, or need a pre-purchase sewer inspection before closing, our licensed plumbers provide accurate camera diagnostics with no guesswork."
          trustItems={LV_CAMERA_TRUST_STRIP}
          primaryCTA={{
            label: "Call (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{
            label: "Schedule a Camera Inspection",
            href: "/contact/",
          }}
          ctaNote="Licensed plumbers. Transparent pricing. No hidden fees."
          formSlot={
            <QuoteFormPlaceholder title="Get a Camera Inspection Quote" />
          }
          backgroundImage={{
            src: "/images/services/video-camera-plumbing-inspections/hero.webp",
            alt: "Video camera plumbing inspection service in Las Vegas, NV",
          }}
        />

        {/* SECTION 2: TRUST STRIP */}
        <TrustStrip
          items={LV_CAMERA_TRUST_STRIP}
          ariaLabel="Why Las Vegas customers choose Red Carpet Plumbing for camera inspections"
        />

        {/* SECTION 3: WHEN A VIDEO CAMERA INSPECTION MAKES SENSE */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                When a Video Camera Inspection Makes Sense
              </h2>
            </div>
            <div className="mt-8 rounded-2xl border-l-4 border-brand-primary bg-brand-surface-alt p-6 sm:p-8">
              <p className="text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing performs video camera plumbing inspections for
                homes and businesses throughout the Las Vegas Valley.
                A camera inspection lets a licensed plumber see inside sewer lines,
                drain pipes, and supply connections to identify blockages, root
                intrusion, pipe damage, and other issues without excavation.
              </p>
            </div>
            <div className="mt-8 space-y-6">
              {LV_CAMERA_USE_CASES.map((useCase) => (
                <article
                  key={useCase.title}
                  className="rounded-2xl bg-brand-surface-alt p-6 ring-1 ring-brand-surface-alt sm:p-8"
                >
                  <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                    {useCase.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-brand-dark/80">
                    {useCase.body}
                    {useCase.tail ? renderTail(useCase.tail) : null}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: WHY CAMERA INSPECTIONS MATTER IN LAS VEGAS */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Why Camera Inspections Matter in Las Vegas
              </h2>
            </div>
            <div className="mt-10 space-y-6">
              {LV_CAMERA_FACTORS.map((f) => (
                <article
                  key={f.title}
                  className="rounded-2xl bg-white p-6 ring-1 ring-brand-surface-alt sm:p-8"
                >
                  <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                    {f.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-brand-dark/80">
                    {f.body}
                    {f.tail ? renderTail(f.tail) : null}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: VIDEO CAMERA INSPECTION SERVICES WE PROVIDE */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Video Camera Inspection Services in Las Vegas
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing handles the full range of video camera
                inspection services for residential and commercial sewer and drain
                lines throughout Las Vegas. For complete service details, see our{" "}
                <Link
                  href="/video-camera-plumbing-inspections/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  core video camera plumbing inspections page
                </Link>
                .
              </p>
            </div>
            <div className="mt-10 space-y-6">
              {LV_CAMERA_SERVICES.map((s) => (
                <article
                  key={s.title}
                  className="rounded-2xl bg-brand-surface-alt p-6 ring-1 ring-brand-surface-alt sm:p-8"
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

        {/* SECTION 6: OUR CAMERA INSPECTION PROCESS (HowTo) */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Our Camera Inspection Process
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Here is how Red Carpet Plumbing approaches a sewer or drain
                    camera inspection in Las Vegas.
                  </p>
                </div>
              </SectionRevealItem>
              <SectionRevealItem className="mt-12">
                <ol className="space-y-8">
                  {LV_CAMERA_STEPS.map((step, index) => (
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

        {/* SECTION 7: MID-PAGE CTA */}
        <section className="bg-brand-charcoal text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Need a Sewer Camera Inspection in Las Vegas?
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/80">
                  Red Carpet Plumbing performs video camera plumbing inspections
                  for homes and businesses throughout the Las Vegas Valley. NV
                  Contractor License #0048585A.
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
                  Schedule a Camera Inspection
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8: WHY CHOOSE RED CARPET PLUMBING */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Why Choose Red Carpet Plumbing for Camera Inspections
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

        {/* SECTION 9: SERVICE AREAS */}
        <section className="bg-brand-charcoal text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="max-w-3xl text-left">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Camera Inspection Service Areas in Las Vegas
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/85">
                Red Carpet Plumbing provides video camera plumbing inspections
                throughout Las Vegas and the surrounding communities of the Las
                Vegas Valley. We serve homeowners, home buyers, property managers,
                and commercial customers across the city.
              </p>
              <p className="mt-6 text-lg leading-8 text-white/85">
                We commonly inspect sewer lines in older Las Vegas neighborhoods
                where clay and cast iron pipes are more likely to show root
                intrusion, caliche-related pipe bellies, and mineral scale buildup.
                We also provide pre-purchase inspections for home buyers throughout
                Las Vegas, Henderson, Summerlin, and surrounding areas on flexible
                scheduling. For all Las Vegas plumbing services, visit our{" "}
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
              {LV_CAMERA_NEIGHBORHOODS.map((name) => (
                <li key={name}>
                  <span className="block rounded-lg border border-white/10 bg-white/5 px-5 py-3 font-medium text-white/85">
                    {name}
                  </span>
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
                Frequently Asked Questions About Video Camera Plumbing Inspections
                in Las Vegas
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {LV_CAMERA_FAQS.map((faq) => (
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
          headline={<>Ready to Schedule a Camera Inspection<br />in Las Vegas?</>}
          body="Red Carpet Plumbing provides sewer and drain camera inspections throughout the Las Vegas Valley. Licensed, local, transparent pricing. NV #0048585A."
          primaryCTA={{
            label: "Call (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{
            label: "Schedule a Camera Inspection",
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
