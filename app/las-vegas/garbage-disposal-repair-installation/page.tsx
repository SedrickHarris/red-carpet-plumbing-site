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
// Las Vegas cluster pattern (matches app/las-vegas/faucet-sink-repair-
// installation/page.tsx): 5 separate JsonLd blocks WebPage -> BreadcrumbList ->
// Service -> HowTo -> FAQPage. areaServed `City` (Las Vegas) -> `State`
// (Nevada) — NOT Place, NOT AdministrativeArea. BreadcrumbList = 3 items. No
// AggregateRating / Review. HowTo + FAQPage both derive from a single const
// (visible = schema). Hero carries trustItems AND a separate red trust band.
// Warning signs, Las Vegas factors, and services render as H3 article cards.
//
// Hero uses garbage-disposal-repair-installation/hero.webp (251KB; the only
// asset — no card.webp). Service provider includes a PostalAddress per the
// approved P51 Service schema. Body copy uses the approved on-page prose (which
// includes the drain/leak internal links) rather than the abbreviated consts.
//
// NOTE: Section 9 links to /las-vegas/faucet-sink-repair-installation/ (P50),
// which is staged in the same working tree and builds (route resolves); it will
// be committed alongside this page. This is the approved-copy link target.
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title:
    "Garbage Disposal Repair and Installation in Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing repairs, replaces, and installs garbage disposals throughout Las Vegas, NV. Jammed, leaking, or not working. Discharge line cleaning. NV #0048585A. Call (702) 567-9172.",
  alternates: {
    canonical:
      "https://redcarpetplumbing.com/las-vegas/garbage-disposal-repair-installation/",
  },
  openGraph: {
    title:
      "Garbage Disposal Repair and Installation in Las Vegas, NV | Red Carpet Plumbing",
    description:
      "Licensed garbage disposal repair and installation in Las Vegas. Jam clearing, leak repair, motor diagnosis, replacement, and discharge line cleaning. Hard water specialists. NV #0048585A.",
    url: "https://redcarpetplumbing.com/las-vegas/garbage-disposal-repair-installation/",
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
const LV_DISPOSAL_FAQS = [
  {
    question:
      "Why is my garbage disposal humming but not spinning in Las Vegas?",
    answer:
      "A humming disposal that will not spin has a jammed impeller. Something lodged between the impeller plate and the grinding ring is preventing the motor from turning. The motor strains, overheats, and trips the internal overload protector, which causes it to hum without grinding. In Las Vegas, hard water mineral deposits can also build up on impeller components and increase jam frequency over time. A plumber can safely clear the jam, test the motor, and confirm the unit is operating correctly.",
  },
  {
    question: "How do I reset a garbage disposal?",
    answer:
      "Most garbage disposals have a red or black reset button on the bottom of the unit under the sink. If the disposal stopped working suddenly, the motor may have overloaded and tripped the reset. Press the reset button firmly until you feel it click. Then run cold water and turn the disposal on. If it still does not work after resetting, the cause is likely a jam, a wiring issue, or a failing motor that requires a plumber to diagnose.",
  },
  {
    question:
      "When should I replace a garbage disposal instead of repairing it?",
    answer:
      "Replacement is usually the better choice when the disposal is leaking from the bottom housing, which typically means the internal seals have failed. Other replacement indicators include a unit that is eight to twelve years old with a failing motor, one that jams repeatedly despite normal use, or one that requires repairs that approach the cost of a new unit. Red Carpet Plumbing can assess your disposal and give you an honest recommendation on repair versus replacement.",
  },
  {
    question: "What should not go into a garbage disposal?",
    answer:
      "Garbage disposals are not designed to handle grease or cooking oil, fibrous foods like celery and onion skins, starchy foods like potato peels and pasta, hard items like bones and fruit pits, eggshells in large quantities, or non-food items of any kind. In Las Vegas, grease is a particular concern because it combines with hard water calcium deposits to form thick buildup in discharge lines, increasing the risk of clogs and drain backups behind the disposal.",
  },
  {
    question: "How long do garbage disposals last in Las Vegas?",
    answer:
      "The average garbage disposal lasts eight to twelve years with normal use. Units in Las Vegas homes may reach end of life sooner due to hard water mineral stress on internal components. Disposals in high-use households, investment properties, and short-term rentals typically have shorter lifespans than units in single-occupancy homes. If your disposal is approaching ten years old and starting to have problems, replacement is often more cost-effective than continued repair.",
  },
  {
    question: "Why is my garbage disposal leaking?",
    answer:
      "Garbage disposal leaks most commonly come from three locations: the sink flange at the top where the disposal meets the sink drain, the discharge tube on the side where water exits to the drain pipe, or the bottom of the housing where internal seals have failed. Leaks at the flange or discharge tube are usually repairable. Leaks from the bottom of the housing typically indicate failed internal seals and usually mean the unit needs replacement.",
  },
];

// ---------------------------------------------------------------------------
// Process steps — HowTo schema source of truth. Visible numbered steps and the
// HowTo JSON-LD both derive from this array.
// ---------------------------------------------------------------------------
const LV_DISPOSAL_STEPS = [
  {
    name: "Call and describe the problem",
    body: "Call Red Carpet Plumbing at (702) 567-9172 and describe what the disposal is doing. Whether it is humming, leaking, not starting, or making unusual noises, we can schedule a licensed plumber to inspect the unit.",
  },
  {
    name: "Inspection and diagnosis",
    body: "A licensed plumber inspects the disposal, motor, impeller, flange seal, discharge tube connection, and under-sink drain setup. We identify the specific cause and assess whether repair or replacement is the right call for your situation.",
  },
  {
    name: "Review options and approve the work",
    body: "We explain what we found and what the repair or replacement involves. If the unit needs replacing, we walk you through suitable options. You approve the scope before any work begins.",
  },
  {
    name: "Repair or installation with final check",
    body: "Our licensed plumber completes the repair or installs the new disposal, tests all connections for leaks, runs the unit with water to confirm proper operation, and cleans up before leaving.",
  },
];

// FLAG: VERIFY before publishing — license number and transparent pricing are
// source-site claims. Confirm before launch.
const WHY_CHOOSE = [
  "Local Las Vegas plumbing company familiar with hard water mineral wear, grease-calcium buildup, and the high-use kitchen conditions common in Las Vegas rental and investment properties",
  "Licensed plumbers (NV License #0048585A)",
  "Honest repair-vs-replace assessment for every disposal service call",
  "Residential and commercial garbage disposal service throughout Las Vegas",
  "Full service: jam clearing, leak repair, reset, motor diagnosis, discharge line cleaning, replacement, and installation",
  "Transparent pricing with no hidden fees",
];

// Red brand-primary trust band (Section 2).
const LV_DISPOSAL_TRUST_STRIP = [
  "NV Licensed Plumbers, #0048585A",
  "Garbage Disposal Repair and Installation",
  "Serving Las Vegas and the Valley",
  "Transparent Pricing, No Hidden Fees",
];

const LV_DISPOSAL_NEIGHBORHOODS = [
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
// Section 3 — signs your garbage disposal needs attention (H3 article cards).
// Leaking and frequent-jam cards carry inline links per the approved copy.
// ---------------------------------------------------------------------------
const LV_DISPOSAL_WARNING_SIGNS: {
  title: string;
  body: string;
  tail?: LinkSeg[];
}[] = [
  {
    title: "Disposal hums but will not spin",
    body: "A disposal that hums without grinding has a jammed impeller. Something is preventing the motor from turning, causing it to overheat and trip the internal overload protector. This is the most common garbage disposal complaint and is usually repairable, though hard water mineral buildup on internal components can make Las Vegas units more prone to jamming over time.",
  },
  {
    title: "Disposal will not turn on",
    body: "If the disposal does not respond at all, start by pressing the reset button on the bottom of the unit under the sink. If resetting does not restore function, the cause may be a wiring issue, a tripped circuit breaker, or a failed motor that requires a plumber to diagnose.",
  },
  {
    title: "Disposal is leaking",
    body: "Leaks from a garbage disposal can come from the sink flange at the top, the discharge tube on the side, or the bottom of the housing. Flange and discharge tube leaks are usually repairable. A leak from the bottom of the unit typically means internal seals have failed and replacement is the practical next step.",
    tail: [
      " For hidden leaks behind walls or under the slab, see ",
      {
        href: "/las-vegas/leak-detection-repair/",
        text: "leak detection in Las Vegas",
      },
      ".",
    ],
  },
  {
    title: "Frequent jams or recurring clogs",
    body: "A disposal that jams repeatedly with normal use may have dull impellers, buildup narrowing the discharge line, or internal wear that has reduced grinding efficiency. In Las Vegas, grease combined with hard water calcium deposits in discharge lines is a common cause of recurring drain slowdowns behind the disposal.",
    tail: [
      " See ",
      { href: "/las-vegas/drain-cleaning/", text: "drain cleaning in Las Vegas" },
      " for discharge line and kitchen drain service.",
    ],
  },
  {
    title: "Loud grinding or rattling noises",
    body: "Grinding, rattling, or scraping sounds usually mean a foreign object has entered the chamber or a component has come loose internally. Do not continue running the disposal if you hear metallic grinding. Turn it off and call a plumber to inspect the unit before further damage occurs.",
  },
];

// ---------------------------------------------------------------------------
// Section 4 — why disposals wear out faster in Las Vegas (H3 article cards).
// Grease-buildup card carries a drain link.
// ---------------------------------------------------------------------------
const LV_DISPOSAL_FACTORS: { title: string; body: string; tail?: LinkSeg[] }[] =
  [
    {
      title: "Hard water mineral scale on internal components",
      body: "Las Vegas municipal water is among the hardest in the United States, with high concentrations of calcium and magnesium. These minerals deposit on garbage disposal impellers, grinding rings, and internal seals over time, increasing friction and reducing grinding efficiency. A disposal operating in Las Vegas conditions experiences more internal wear per year than the same unit in a soft-water market, which can shorten the practical lifespan and increase the frequency of jams. Regular maintenance and knowing the age of your unit helps decide whether repair or replacement is the smarter investment.",
    },
    {
      title: "Grease and hard water buildup in discharge lines",
      body: "Grease from cooking does not stay liquid in drain pipes. It cools and hardens, and in Las Vegas hard water conditions, grease reacts with dissolved calcium to form thick deposits that narrow the inside of discharge lines and drain pipes. This buildup forces the disposal to work harder against restricted drainage, increases jam frequency, and eventually causes drain backups that appear to come from the disposal but originate further down the line. Running cold water during and after disposal use helps, but professional drain cleaning is needed once buildup is established.",
      tail: [
        " See ",
        {
          href: "/las-vegas/drain-cleaning/",
          text: "drain cleaning in Las Vegas",
        },
        " for discharge line service.",
      ],
    },
    {
      title: "High-use and short-term rental properties",
      body: "Las Vegas has one of the highest concentrations of short-term rental properties and investment homes in the country. Kitchens in these properties typically receive above-average use from rotating occupants and may go longer between inspections and maintenance. Garbage disposals in high-use settings reach the end of their practical service life sooner than units in single-family owner-occupied homes. If you manage a rental property in the Las Vegas Valley, a disposal showing signs of wear is worth replacing proactively before a tenant reports a failure.",
    },
    {
      title: "Aging units in Las Vegas tract homes",
      body: "Many Las Vegas homes built between the 1990s and early 2000s still have original garbage disposals installed during construction. Units in this age range are approaching or past the average disposal lifespan of eight to twelve years. Older disposals with smaller motors and worn impellers are more susceptible to jams, leaks at aged flange seals, and gradual power loss. If your home was built before 2010 and you have never had the disposal replaced, having a plumber assess its condition is a practical step before an inconvenient failure.",
    },
  ];

// ---------------------------------------------------------------------------
// Section 5 — garbage disposal services (H3 article cards). Leak-repair and
// discharge-line cards carry inline links.
// ---------------------------------------------------------------------------
const LV_DISPOSAL_SERVICES: { title: string; body: string; tail?: LinkSeg[] }[] =
  [
    {
      title: "Garbage Disposal Jam Clearing",
      body: "Safe clearing of jammed disposal impellers, including inspection of the flywheel, grinding ring, and motor after clearing.",
    },
    {
      title: "Garbage Disposal Leak Repair",
      body: "Repair of disposal leaks at the sink flange, discharge tube, and dishwasher inlet connections.",
      tail: [
        " For leaks beneath the slab or behind walls, see ",
        {
          href: "/las-vegas/leak-detection-repair/",
          text: "leak detection in Las Vegas",
        },
        ".",
      ],
    },
    {
      title: "Garbage Disposal Reset and Electrical Diagnosis",
      body: "Reset service and electrical diagnosis for disposals that will not start, including breaker checks and wiring inspection.",
    },
    {
      title: "Garbage Disposal Replacement",
      body: "Full disposal replacement for units with failed motors, cracked housings, or repeated repair history.",
    },
    {
      title: "Garbage Disposal Installation",
      body: "Professional installation of new garbage disposals including drain connection, dishwasher inlet hookup, and leak testing.",
    },
    {
      title: "Discharge Line Cleaning and Repair",
      body: "Cleaning and repair of garbage disposal discharge lines clogged by grease and mineral buildup.",
      tail: [
        " For complete kitchen drain service, see ",
        {
          href: "/las-vegas/drain-cleaning/",
          text: "drain cleaning in Las Vegas",
        },
        ".",
      ],
    },
    {
      title: "Sink Flange and Mounting Repair",
      body: "Repair and resealing of disposal sink flanges that have loosened or developed leaks at the sink drain connection.",
    },
    {
      title: "Disposal Upgrade and Swap",
      body: "Upgrade service for older, underpowered, or inefficient disposals with installation of a new unit suited to your kitchen use.",
    },
  ];

// ---------------------------------------------------------------------------
// JSON-LD payloads. areaServed `City` (Las Vegas) -> `State` (Nevada). No
// AggregateRating, no sameAs.
// ---------------------------------------------------------------------------
const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Garbage Disposal Repair and Installation in Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing repairs, replaces, and installs garbage disposals throughout Las Vegas, NV. Jammed, leaking, or not working. Discharge line cleaning. NV #0048585A.",
  url: "https://redcarpetplumbing.com/las-vegas/garbage-disposal-repair-installation/",
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
      name: "Garbage Disposal Repair and Installation in Las Vegas, NV",
      item: "https://redcarpetplumbing.com/las-vegas/garbage-disposal-repair-installation/",
    },
  ],
};

// FLAG: VERIFY — telephone carried from sibling pattern. Confirm before launch.
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Garbage Disposal Repair and Installation in Las Vegas",
  serviceType: "Garbage Disposal Repair and Installation",
  description:
    "Red Carpet Plumbing repairs, replaces, and installs garbage disposals for residential and commercial kitchens in Las Vegas, NV. Services include jam clearing, leak repair, motor diagnosis, discharge line cleaning, full replacement, and new installation. NV License #0048585A.",
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
// process steps. Derived from LV_DISPOSAL_STEPS for a guaranteed text match.
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Red Carpet Plumbing Handles Garbage Disposal Service in Las Vegas",
  step: LV_DISPOSAL_STEPS.map((step, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: step.name,
    text: step.body,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: LV_DISPOSAL_FAQS.map((faq) => ({
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

export default function LasVegasGarbageDisposalPage() {
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
                "Garbage Disposal Repair and Installation in Las Vegas, NV",
            },
          ]}
        />

        {/* SECTION 1: HERO */}
        <HeroSection
          headingLevel="h1"
          headline="Garbage Disposal Repair and Installation in Las Vegas, NV"
          subheading="Red Carpet Plumbing repairs, replaces, and installs garbage disposals for kitchens throughout Las Vegas. Whether your disposal is jammed, leaking, not starting, or needs replacing, our licensed plumbers diagnose the problem accurately and complete the repair or installation with transparent pricing and no hidden fees."
          trustItems={LV_DISPOSAL_TRUST_STRIP}
          primaryCTA={{
            label: "Call (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{
            label: "Request Disposal Service",
            href: "/contact/",
          }}
          ctaNote="Licensed plumbers. Transparent pricing. No hidden fees."
          formSlot={<QuoteFormPlaceholder title="Get Garbage Disposal Help" />}
          backgroundImage={{
            src: "/images/services/garbage-disposal-repair-installation/hero.webp",
            alt: "Garbage disposal repair and installation service in Las Vegas, NV",
          }}
        />

        {/* SECTION 2: TRUST STRIP */}
        <TrustStrip
          items={LV_DISPOSAL_TRUST_STRIP}
          ariaLabel="Why Las Vegas customers choose Red Carpet Plumbing for garbage disposal service"
        />

        {/* SECTION 3: SIGNS YOUR GARBAGE DISPOSAL NEEDS ATTENTION */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Signs Your Garbage Disposal Needs Attention
              </h2>
            </div>
            <div className="mt-8 rounded-2xl border-l-4 border-brand-primary bg-brand-surface-alt p-6 sm:p-8">
              <p className="text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing repairs, replaces, and installs garbage
                disposals for kitchens throughout the Las Vegas Valley. Our
                licensed plumbers diagnose jammed, leaking, and
                non-functioning units and handle full disposal replacements when
                repair is no longer practical.
              </p>
            </div>
            <div className="mt-8 space-y-6">
              {LV_DISPOSAL_WARNING_SIGNS.map((sign) => (
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

        {/* SECTION 4: WHY GARBAGE DISPOSALS WEAR OUT FASTER IN LAS VEGAS */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Why Garbage Disposals Wear Out Faster in Las Vegas
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Hard water, grease buildup, high-use rental properties, and aging
                tract-home fixtures together drive faster wear on garbage disposals
                in Las Vegas than in most other markets. Knowing how these factors
                affect your unit helps you plan ahead.
              </p>
            </div>
            <div className="mt-10 space-y-6">
              {LV_DISPOSAL_FACTORS.map((f) => (
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

        {/* SECTION 5: GARBAGE DISPOSAL SERVICES WE PROVIDE */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Garbage Disposal Services in Las Vegas
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing handles the full range of garbage disposal
                repair, replacement, and installation for residential and
                commercial kitchens throughout Las Vegas. For complete service
                details, see our{" "}
                <Link
                  href="/garbage-disposal-repair-installation/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  core garbage disposal repair page
                </Link>
                .
              </p>
            </div>
            <div className="mt-10 space-y-6">
              {LV_DISPOSAL_SERVICES.map((s) => (
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

        {/* SECTION 6: OUR GARBAGE DISPOSAL SERVICE PROCESS (HowTo) */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Our Garbage Disposal Service Process
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Garbage disposal work is part diagnosis, part judgment call
                    between repair and replacement. Here is how Red Carpet Plumbing
                    handles disposal service for Las Vegas homes and businesses.
                  </p>
                </div>
              </SectionRevealItem>
              <SectionRevealItem className="mt-12">
                <ol className="space-y-8">
                  {LV_DISPOSAL_STEPS.map((step, index) => (
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
                  Garbage Disposal Problem in Las Vegas?
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/80">
                  Red Carpet Plumbing handles disposal jams, leaks, replacements,
                  and new installations throughout the Las Vegas Valley. Licensed
                  plumbers, transparent pricing. NV Contractor License #0048585A.
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
                  Request Disposal Service
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
                Why Choose Red Carpet Plumbing for Garbage Disposal Service
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
                Garbage Disposal Service Areas in Las Vegas
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/85">
                Red Carpet Plumbing provides garbage disposal repair and
                installation throughout Las Vegas and the surrounding communities
                of the Las Vegas Valley. We serve homeowners, property managers,
                landlords, and short-term rental operators across the city.
              </p>
              <p className="mt-6 text-lg leading-8 text-white/85">
                We commonly service Las Vegas kitchens in older tract homes where
                original disposal units are approaching end of life, and high-use
                investment and rental properties where proactive replacement
                prevents inconvenient failures. For kitchen drain and faucet
                service, see{" "}
                <Link
                  href="/las-vegas/faucet-sink-repair-installation/"
                  className="font-semibold text-white underline underline-offset-4 hover:text-white/80"
                >
                  faucet and sink repair in Las Vegas
                </Link>
                . For all Las Vegas plumbing services, visit our{" "}
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
              {LV_DISPOSAL_NEIGHBORHOODS.map((name) => (
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
                Frequently Asked Questions About Garbage Disposal Repair in Las
                Vegas
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {LV_DISPOSAL_FAQS.map((faq) => (
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
          headline={<>Need Garbage Disposal Repair or Installation<br />in Las Vegas?</>}
          body="Red Carpet Plumbing provides garbage disposal repair, replacement, and installation throughout the Las Vegas Valley. Licensed, local, transparent pricing. NV #0048585A."
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
