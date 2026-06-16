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
// Las Vegas cluster pattern (matches app/las-vegas/toilet-repair-installation/
// page.tsx): 5 separate JsonLd blocks WebPage -> BreadcrumbList -> Service ->
// HowTo -> FAQPage. areaServed `City` (Las Vegas) -> `State` (Nevada) — NOT
// Place, NOT AdministrativeArea. BreadcrumbList = 3 items. No AggregateRating /
// Review. HowTo + FAQPage both derive from a single const (visible = schema).
// Hero carries trustItems AND a separate red trust band (Section 2). Warning
// signs, Las Vegas factors, and services render as H3 article cards.
//
// Hero uses faucet-sink-repair-installation/hero.webp (227KB; the only asset —
// no card.webp). Service provider includes a PostalAddress per the approved P50
// Service schema. Body copy uses the approved on-page prose (which includes the
// drain/leak internal links) rather than the abbreviated build-prompt consts.
//
// Section 9 (service areas) renders the approved on-page content verbatim, which
// contains only the Las Vegas hub link and no toilet-repair mention. The Step 10
// toilet cross-link was therefore not added (it would be net-new copy, and P49
// is staged-not-committed in any case).
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title:
    "Faucet and Sink Repair and Installation in Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing repairs, replaces, and installs faucets and sinks throughout Las Vegas, NV. Dripping faucets, low pressure, under-sink leaks, sink installation. NV #0048585A. Call (702) 567-9172.",
  alternates: {
    canonical:
      "https://redcarpetplumbing.com/las-vegas/faucet-sink-repair-installation/",
  },
  openGraph: {
    title:
      "Faucet and Sink Repair and Installation in Las Vegas, NV | Red Carpet Plumbing",
    description:
      "Licensed faucet and sink repair and installation in Las Vegas. Dripping faucets, aerator service, cartridge replacement, sink installs. Hard water specialists. NV #0048585A.",
    url: "https://redcarpetplumbing.com/las-vegas/faucet-sink-repair-installation/",
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
const LV_FAUCET_SINK_FAQS = [
  {
    question: "Why is my faucet dripping in Las Vegas?",
    answer:
      "A dripping faucet is almost always caused by a worn internal component. In cartridge faucets, a degraded cartridge or O-ring is the most common cause. In compression faucets, a worn rubber washer at the seat is typically to blame. In Las Vegas, hard water mineral deposits accelerate wear on these components, so faucets may develop drips sooner than they would in areas with softer water. A licensed plumber can diagnose the faucet type and replace the failing part.",
  },
  {
    question: "Why is my water pressure low at one faucet?",
    answer:
      "Low pressure at a single faucet is usually caused by a clogged aerator. The aerator is the small screen at the faucet tip that mixes air with water. In Las Vegas, mineral deposits from hard water build up inside aerators and restrict flow more quickly than in soft-water areas. Removing and cleaning or replacing the aerator restores normal pressure in most cases. If the aerator is clear and pressure is still low, the issue may be in the supply line or shut-off valve beneath the sink.",
  },
  {
    question: "Should I repair or replace a leaky faucet?",
    answer:
      "Repair is usually the right choice for a faucet that is less than ten years old and has a single failing component such as a cartridge, O-ring, or washer. Replacement makes more sense for a faucet that leaks from the body, requires repeated repairs, shows visible corrosion, or is an older model where replacement parts are difficult to source. In Las Vegas, mineral buildup inside older compression faucets can make cleaning and repair impractical, making replacement with a modern cartridge or ceramic disc faucet the more durable long-term option.",
  },
  {
    question: "Can hard water damage faucets in Las Vegas?",
    answer:
      "Yes. Las Vegas hard water contains high levels of calcium and magnesium that deposit inside faucet cartridges, aerators, and valve seats over time. This mineral buildup restricts water flow, accelerates wear on rubber O-rings and seals, and causes handles to stiffen. Faucets in Las Vegas homes typically require more frequent cartridge and aerator maintenance than faucets in soft-water markets. Regular aerator cleaning and timely cartridge replacement extends faucet life.",
  },
  {
    question: "How long does faucet installation take?",
    answer:
      "A standard faucet replacement typically takes one to two hours for a licensed plumber. This includes shutting off the supply, disconnecting and removing the old faucet, inspecting the supply lines and shut-off valves, installing the new faucet, and testing for leaks and proper operation. If the shut-off valves or supply lines are corroded and need replacement, the job may take longer. Red Carpet Plumbing handles the full installation and disposes of the old fixture.",
  },
  {
    question: "What causes leaks under the sink?",
    answer:
      "Leaks under a sink are most commonly caused by a loose or corroded drain connection, a failing P-trap seal, a worn supply line, or a deteriorated shut-off valve. In older Las Vegas homes, original supply lines and shut-off valves may be corroded from years of hard water exposure and can fail when disturbed during a faucet repair or replacement. A plumber should inspect under-sink connections as part of any faucet or sink service.",
  },
];

// ---------------------------------------------------------------------------
// Process steps — HowTo schema source of truth. Visible numbered steps and the
// HowTo JSON-LD both derive from this array.
// ---------------------------------------------------------------------------
const LV_FAUCET_SINK_STEPS = [
  {
    name: "Call and describe the issue",
    body: "Call Red Carpet Plumbing at (702) 567-9172 and describe what your faucet or sink is doing. Whether it is a drip, low pressure, a leak under the sink, or a new fixture you need installed, we schedule service for your Las Vegas home or business.",
  },
  {
    name: "Inspection and diagnosis",
    body: "A licensed plumber inspects the faucet, supply lines, shut-off valves, drain assembly, and under-sink connections. We identify the specific cause of the problem and check for related issues such as corroded valves or deteriorated supply lines before recommending a solution.",
  },
  {
    name: "Review options and approve the work",
    body: "We explain what we found, whether repair or replacement is the better option, and what the work involves. You approve everything before we start.",
  },
  {
    name: "Repair or installation with final check",
    body: "Our licensed plumber completes the repair or installation, tests all connections for leaks, confirms proper water pressure and flow, and cleans up before leaving.",
  },
];

// FLAG: VERIFY before publishing — license number and transparent pricing are
// source-site claims. Confirm before launch.
const WHY_CHOOSE = [
  "Local Las Vegas plumbing company familiar with hard water conditions and the aging fixture stock throughout the city",
  "Licensed plumbers (NV License #0048585A)",
  "Residential and commercial faucet and sink repair and installation throughout Las Vegas",
  "Full range of services: dripping faucet repair, cartridge and aerator service, faucet and sink replacement and installation, under-sink leak repair",
  "Under-sink supply line and shutoff valve inspection included with faucet service",
  "Transparent pricing with no hidden fees",
];

// Red brand-primary trust band (Section 2).
const LV_FAUCET_TRUST_STRIP = [
  "NV Licensed Plumbers, #0048585A",
  "Faucet and Sink Repair and Installation",
  "Serving Las Vegas and the Valley",
  "Transparent Pricing, No Hidden Fees",
];

const LV_FAUCET_NEIGHBORHOODS = [
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
// Section 3 — signs your faucet or sink needs a plumber (H3 article cards).
// Low-pressure, slow-drain, and under-sink-leak cards carry inline links per the
// approved copy.
// ---------------------------------------------------------------------------
const LV_FAUCET_WARNING_SIGNS: {
  title: string;
  body: string;
  tail?: LinkSeg[];
}[] = [
  {
    title: "Dripping or leaking faucet",
    body: "A faucet that drips when turned off wastes water and typically signals a worn cartridge, O-ring, or washer inside the valve. In Las Vegas, hard water mineral deposits accelerate wear on these components, so drips can develop sooner than in soft-water markets. Left unrepaired, even a slow drip adds up to significant water waste and a higher Las Vegas water bill over time.",
  },
  {
    title: "Low water pressure at the faucet",
    body: "Reduced pressure at a single faucet is most often a clogged aerator. The small screen at the faucet tip accumulates mineral deposits from Las Vegas hard water and restricts flow. Cleaning or replacing the aerator restores pressure in most cases. If the aerator is clear, the problem may be in the supply line or shut-off valve beneath the sink.",
    tail: [
      " For drain-related pressure or flow issues, see ",
      { href: "/las-vegas/drain-cleaning/", text: "drain cleaning in Las Vegas" },
      ".",
    ],
  },
  {
    title: "Faucet handles stiff or difficult to turn",
    body: "Handles that are hard to operate usually have mineral buildup inside the cartridge or around the valve stem. This is particularly common in Las Vegas kitchens and bathrooms where hard water has been running through the same fixtures for years without cartridge service.",
  },
  {
    title: "Sink draining slowly",
    body: "A slow-draining sink usually means a buildup of soap, grease, hair, or mineral scale in the drain or P-trap. If clearing the drain does not resolve the issue, the problem may be deeper in the drain line.",
    tail: [
      " See ",
      { href: "/las-vegas/drain-cleaning/", text: "drain cleaning in Las Vegas" },
      " for more.",
    ],
  },
  {
    title: "Leaking under the sink",
    body: "Water pooling in the cabinet under a sink points to a loose drain connection, a failing P-trap seal, a worn supply line, or a deteriorated shut-off valve. In older Las Vegas homes, original supply lines and shut-off valves may be corroded from years of hard water exposure and can fail when disturbed during a faucet repair or replacement.",
    tail: [
      " For hidden leaks behind walls or under the slab, see ",
      {
        href: "/las-vegas/leak-detection-repair/",
        text: "leak detection in Las Vegas",
      },
      ".",
    ],
  },
];

// ---------------------------------------------------------------------------
// Section 4 — Las Vegas faucet and sink issues (H3 article cards).
// ---------------------------------------------------------------------------
const LV_FAUCET_FACTORS = [
  {
    title: "Hard water and cartridge failure",
    body: "Las Vegas receives some of the most mineral-rich municipal water in the country. Calcium and magnesium deposits build up inside faucet cartridges and valve seats over time, causing increased friction, handle stiffness, and eventually a drip that tightening the handle will not stop. Faucets in Las Vegas homes typically need cartridge replacement sooner than the same models in soft-water markets. A plumber who knows which faucet type you have, whether cartridge, ball, compression, or ceramic disc, can diagnose and replace the right component quickly.",
  },
  {
    title: "Aerator clogging and low pressure",
    body: "The aerator is the small screen assembly at the tip of a faucet that mixes air with the water stream. In Las Vegas, mineral deposits from hard water accumulate inside aerators faster than in most US cities, gradually restricting flow and dropping pressure at the fixture. Many homeowners assume a pressure problem is a supply line or main issue when the actual cause is a clogged aerator that takes minutes to clean or replace. Regular aerator maintenance is a simple and effective way to keep faucet pressure at full capacity.",
  },
  {
    title: "Aging fixtures in Las Vegas tract homes",
    body: "The Las Vegas Valley has a large inventory of tract homes built between the late 1970s and early 2000s, many of which still have original kitchen and bathroom faucets. Original fixtures in this age range often use compression valve technology that requires more frequent washer replacement and is less durable under hard water conditions than modern cartridge and ceramic disc designs. Upgrading to a current faucet with a ceramic disc valve is a practical long-term improvement for older Las Vegas homes.",
  },
  {
    title: "Under-sink valves and supply lines in older properties",
    body: "A faucet repair in an older Las Vegas home often reveals corroded shut-off valves and deteriorated braided supply lines that have not been touched since original installation. Hard water accelerates corrosion at valve seats and fitting connections, and older valves may not close fully when turned off. A plumber servicing a faucet or sink should inspect the under-sink supply connections to confirm they are sound. A corroded valve that fails during a repair can turn a straightforward job into a water damage situation.",
  },
];

// ---------------------------------------------------------------------------
// Section 5 — faucet and sink services (H3 article cards). Under-sink leak and
// drain/P-trap cards carry inline links.
// ---------------------------------------------------------------------------
const LV_FAUCET_SERVICES: { title: string; body: string; tail?: LinkSeg[] }[] = [
  {
    title: "Dripping Faucet Repair",
    body: "Diagnosis and repair of dripping faucets including cartridge, O-ring, washer, and valve seat replacement for all faucet types.",
  },
  {
    title: "Faucet Replacement",
    body: "Full faucet replacement for worn, corroded, or repeatedly failing fixtures in kitchens, bathrooms, and utility areas.",
  },
  {
    title: "Faucet Installation",
    body: "Professional installation of new faucets including supply line connection, shut-off valve inspection, and leak testing.",
  },
  {
    title: "Kitchen Sink Installation",
    body: "Installation of drop-in, undermount, and farmhouse kitchen sinks including drain assembly, P-trap connection, and supply line hookup.",
  },
  {
    title: "Bathroom Sink Installation",
    body: "Bathroom sink installation for undermount, vessel, pedestal, and vanity-top configurations throughout Las Vegas homes.",
  },
  {
    title: "Under-Sink Leak Repair",
    body: "Repair of leaks under kitchen and bathroom sinks including drain connections, P-trap seals, supply lines, and shut-off valves.",
    tail: [
      " For leaks behind walls or under the slab, see ",
      {
        href: "/las-vegas/leak-detection-repair/",
        text: "leak detection in Las Vegas",
      },
      ".",
    ],
  },
  {
    title: "Aerator and Cartridge Service",
    body: "Cleaning and replacement of faucet aerators and cartridges to restore water pressure and stop drips caused by mineral buildup.",
  },
  {
    title: "Drain and P-Trap Repair",
    body: "Repair and replacement of sink drain assemblies, pop-up drain hardware, and P-trap connections.",
    tail: [
      " For main drain line blockages, see ",
      { href: "/las-vegas/drain-cleaning/", text: "drain cleaning in Las Vegas" },
      ".",
    ],
  },
];

// ---------------------------------------------------------------------------
// JSON-LD payloads. areaServed `City` (Las Vegas) -> `State` (Nevada). No
// AggregateRating, no sameAs.
// ---------------------------------------------------------------------------
const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Faucet and Sink Repair and Installation in Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing repairs, replaces, and installs faucets and sinks throughout Las Vegas, NV. Dripping faucets, low pressure, under-sink leaks, sink installation. NV #0048585A.",
  url: "https://redcarpetplumbing.com/las-vegas/faucet-sink-repair-installation/",
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
      name: "Faucet and Sink Repair and Installation in Las Vegas, NV",
      item: "https://redcarpetplumbing.com/las-vegas/faucet-sink-repair-installation/",
    },
  ],
};

// FLAG: VERIFY — telephone carried from sibling pattern. Confirm before launch.
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Faucet and Sink Repair and Installation in Las Vegas",
  serviceType: "Faucet and Sink Repair and Installation",
  description:
    "Red Carpet Plumbing provides faucet repair, faucet replacement, faucet installation, sink installation, aerator and cartridge service, and under-sink leak repair for residential and commercial properties in Las Vegas, NV. NV License #0048585A.",
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
// process steps. Derived from LV_FAUCET_SINK_STEPS for a guaranteed text match.
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Red Carpet Plumbing Handles Faucet and Sink Service in Las Vegas",
  step: LV_FAUCET_SINK_STEPS.map((step, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: step.name,
    text: step.body,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: LV_FAUCET_SINK_FAQS.map((faq) => ({
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

export default function LasVegasFaucetSinkPage() {
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
              label:
                "Faucet and Sink Repair and Installation in Las Vegas, NV",
            },
          ]}
        />

        {/* SECTION 1: HERO */}
        <HeroSection
          headingLevel="h1"
          headline="Faucet and Sink Repair and Installation in Las Vegas, NV"
          subheading="Red Carpet Plumbing repairs, replaces, and installs faucets and sinks for kitchens, bathrooms, and utility areas throughout Las Vegas. From dripping faucets and low pressure to under-sink leaks and full sink installations, our licensed plumbers handle the complete job with transparent pricing and no hidden fees."
          trustItems={LV_FAUCET_TRUST_STRIP}
          primaryCTA={{
            label: "Call (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{
            label: "Request Faucet Service",
            href: "/contact/",
          }}
          ctaNote="Licensed plumbers. Transparent pricing. No hidden fees."
          formSlot={<QuoteFormPlaceholder title="Get Faucet and Sink Help" />}
          backgroundImage={{
            src: "/images/services/faucet-sink-repair-installation/hero.webp",
            alt: "Faucet and sink repair and installation service in Las Vegas, NV",
          }}
        />

        {/* SECTION 2: TRUST STRIP */}
        <TrustStrip
          items={LV_FAUCET_TRUST_STRIP}
          ariaLabel="Why Las Vegas customers choose Red Carpet Plumbing for faucet and sink service"
        />

        {/* SECTION 3: SIGNS YOUR FAUCET OR SINK NEEDS A PLUMBER */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Signs Your Faucet or Sink Needs a Plumber
              </h2>
            </div>
            <div className="mt-8 rounded-2xl border-l-4 border-brand-primary bg-brand-surface-alt p-6 sm:p-8">
              <p className="text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing repairs, replaces, and installs faucets and
                sinks for kitchens, bathrooms, and utility areas throughout the
                Las Vegas Valley. Our licensed plumbers handle
                everything from a dripping faucet to a full sink installation.
              </p>
            </div>
            <div className="mt-8 space-y-6">
              {LV_FAUCET_WARNING_SIGNS.map((sign) => (
                <article
                  key={sign.title}
                  className="rounded-2xl bg-brand-surface-alt p-6 ring-1 ring-brand-surface-alt sm:p-8"
                >
                  <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                    {sign.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-brand-dark/80">
                    {sign.body}
                    {sign.tail ? renderTail(sign.tail) : null}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: LAS VEGAS FAUCET AND SINK ISSUES */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Faucet and Sink Issues in Las Vegas Homes
              </h2>
            </div>
            <div className="mt-10 space-y-6">
              {LV_FAUCET_FACTORS.map((f) => (
                <article
                  key={f.title}
                  className="rounded-2xl bg-white p-6 ring-1 ring-brand-surface-alt sm:p-8"
                >
                  <h3 className="text-xl font-semibold text-brand-dark sm:text-2xl">
                    {f.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-brand-dark/80">
                    {f.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: FAUCET AND SINK SERVICES WE PROVIDE */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Faucet and Sink Services in Las Vegas
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing provides the full range of faucet and sink
                repair, replacement, and installation for residential and
                commercial properties throughout Las Vegas. For complete service
                details, see our{" "}
                <Link
                  href="/faucet-sink-repair-installation/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  core faucet and sink repair page
                </Link>
                .
              </p>
            </div>
            <div className="mt-10 space-y-6">
              {LV_FAUCET_SERVICES.map((s) => (
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

        {/* SECTION 6: OUR FAUCET AND SINK SERVICE PROCESS (HowTo) */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Our Faucet and Sink Service Process
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Here is how Red Carpet Plumbing approaches faucet and sink
                    service for Las Vegas homes and businesses.
                  </p>
                </div>
              </SectionRevealItem>
              <SectionRevealItem className="mt-12">
                <ol className="space-y-8">
                  {LV_FAUCET_SINK_STEPS.map((step, index) => (
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
                  Faucet or Sink Problem in Las Vegas? Call a Licensed Plumber.
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/80">
                  Red Carpet Plumbing repairs, replaces, and installs faucets and
                  sinks for kitchens, bathrooms, and utility areas throughout the
                  Las Vegas Valley. Licensed plumbers, transparent
                  pricing. NV #0048585A.
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
                  Request Faucet Service
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8: WHY CHOOSE RED CARPET PLUMBING */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Why Choose Red Carpet Plumbing for Faucet and Sink Service
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
                Faucet and Sink Service Areas in Las Vegas
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/85">
                Red Carpet Plumbing provides faucet and sink repair and
                installation throughout Las Vegas and the surrounding communities
                of the Las Vegas Valley. We serve homeowners, landlords, property
                managers, and commercial customers in kitchens, bathrooms, and
                utility areas across the city.
              </p>
              <p className="mt-6 text-lg leading-8 text-white/85">
                We commonly service older Las Vegas homes where original
                compression faucets and corroded under-sink valves need
                replacement, as well as newer properties where kitchen and
                bathroom faucet upgrades and new sink installations are part of
                renovation projects. For all Las Vegas plumbing services, visit
                our{" "}
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
              {LV_FAUCET_NEIGHBORHOODS.map((name) => (
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
                Frequently Asked Questions About Faucet and Sink Repair in Las
                Vegas
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {LV_FAUCET_SINK_FAQS.map((faq) => (
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
          headline={<>Need Faucet or Sink Repair<br />in Las Vegas?</>}
          body="Red Carpet Plumbing provides faucet repair, faucet replacement, sink installation, and under-sink leak repair throughout the Las Vegas Valley. Licensed, local, transparent pricing. NV #0048585A."
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
