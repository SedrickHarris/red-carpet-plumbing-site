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
//   - 24/7 availability for toilet emergencies (Why-Choose + mid-page sub-note)
//     — VERIFY.
//   - SNWA rebate/incentive availability (Section 4 water-conservation factor) —
//     VERIFY current program before publishing.
//   - License #0048585A is a verified business claim.
//
// Las Vegas cluster pattern (matches app/las-vegas/re-piping/page.tsx):
// 5 separate JsonLd blocks WebPage -> BreadcrumbList -> Service -> HowTo ->
// FAQPage. areaServed `City` (Las Vegas) -> `State` (Nevada) — NOT Place, NOT
// AdministrativeArea. BreadcrumbList = 3 items. No AggregateRating / Review.
// HowTo + FAQPage both derive from a single const (visible = schema). Hero
// carries trustItems AND a separate red trust band (Section 2). Warning signs,
// Las Vegas factors, and services render as H3 article cards.
//
// Hero uses toilet-repair-installation/hero.webp (70KB; the only asset — no
// card.webp). Service provider includes a PostalAddress per the approved P49
// Service schema. Body copy uses the approved on-page prose (which includes the
// drain/emergency internal links and the closing sentences) rather than the
// abbreviated build-prompt consts.
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title: "Toilet Repair and Installation in Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing repairs, replaces, and installs toilets throughout Las Vegas, NV. Running toilets, base leaks, wax ring replacement, clogs, and new installations. NV #0048585A. Call (702) 567-9172.",
  alternates: {
    canonical:
      "https://redcarpetplumbing.com/las-vegas/toilet-repair-installation/",
  },
  openGraph: {
    title:
      "Toilet Repair and Installation in Las Vegas, NV | Red Carpet Plumbing",
    description:
      "Licensed toilet repair and installation in Las Vegas. Running toilets, base leaks, wax ring replacement, hard water buildup, new installs. NV #0048585A.",
    url: "https://redcarpetplumbing.com/las-vegas/toilet-repair-installation/",
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
const LV_TOILET_FAQS = [
  {
    question: "Why does my toilet keep running in Las Vegas?",
    answer:
      "A running toilet is usually caused by a faulty flapper valve that no longer seals properly after flushing, a fill valve that does not shut off once the tank is full, or a float set too high that allows water to flow continuously into the overflow tube. Las Vegas hard water can accelerate wear on rubber flapper valves and fill valve components, making these repairs more common here than in areas with softer water. A running toilet can waste hundreds of gallons per day. A licensed plumber can identify and repair the specific component causing the problem.",
  },
  {
    question: "Why is my toilet leaking at the base?",
    answer:
      "A toilet leaking at the base is most often caused by a failed wax ring, the seal between the toilet and the floor flange. In Las Vegas homes, heat cycling between extreme summer temperatures and cooler winters can degrade wax rings faster than in moderate climates, especially in older properties where the seal has been in place for decades. A base leak is not just a water damage issue. It can also allow sewer gases to enter the home and should be repaired promptly.",
  },
  {
    question: "Should I repair or replace my toilet?",
    answer:
      "Repair is usually the right choice for a running toilet, a base leak, a weak flush from mineral buildup, or most clog situations. Replacement makes more sense when the toilet has a cracked tank or bowl, requires repeated repairs for the same problem, has severe mineral buildup blocking siphon jets that cannot be cleared, or is an older pre-1994 model that wastes significantly more water per flush than a modern efficient design. A plumber can assess the condition and recommend the more practical option.",
  },
  {
    question: "Can hard water damage my toilet?",
    answer:
      "Yes. Las Vegas has some of the hardest municipal water in the country. The mineral content builds up inside toilet siphon jets, rim holes, and the siphon tube over time, restricting water flow and weakening the flush. Hard water scale also accelerates wear on flapper valves and fill valves, meaning toilet components may need replacement more frequently in Las Vegas homes than in areas with softer water. Periodic cleaning and inspection of toilet internals helps extend the service life of Las Vegas toilets.",
  },
  {
    question: "How long does toilet installation take?",
    answer:
      "A standard toilet installation typically takes one to two hours for a licensed plumber. This includes removing the old toilet, inspecting the flange condition, setting the new wax ring, positioning and securing the toilet, and connecting the supply line. If the flange is damaged and needs repair, the job may take longer. Red Carpet Plumbing handles the full installation process and disposes of the old toilet.",
  },
  {
    question: "What should I do if my toilet is overflowing?",
    answer:
      "If your toilet is overflowing and will not stop, locate the shutoff valve at the base of the toilet and turn it clockwise to stop the water supply. If the valve is inaccessible or not working, turn off the main water supply to the home. Do not continue to flush. Call Red Carpet Plumbing at (702) 567-9172. A toilet overflow that cannot be controlled with the shutoff valve may indicate a blockage in the main sewer line. See our Las Vegas emergency plumbing page for more information.",
  },
];

// ---------------------------------------------------------------------------
// Process steps — HowTo schema source of truth. Visible numbered steps and the
// HowTo JSON-LD both derive from this array.
// ---------------------------------------------------------------------------
const LV_TOILET_STEPS = [
  {
    name: "Call and describe the problem",
    body: "Call Red Carpet Plumbing at (702) 567-9172 and describe what your toilet is doing. If the toilet is overflowing and will not stop, shut off the water at the valve behind the toilet first, then call us.",
  },
  {
    name: "Inspection and diagnosis",
    body: "A licensed plumber inspects the toilet, tank components, base seal, flange, supply line, and drain connection to identify the exact cause of the problem. We check for hard water mineral buildup, seal failures, and component wear before recommending a solution.",
  },
  {
    name: "Review options and approve the work",
    body: "We explain what we found and present the repair or replacement options for your situation. You approve the work before anything is done.",
  },
  {
    name: "Repair or installation with final check",
    body: "Our licensed plumber completes the repair or installs the new toilet, checks all connections, confirms the flush is operating correctly, and cleans up the work area before leaving.",
  },
];

// FLAG: VERIFY before publishing — license number, transparent pricing, and
// 24/7 availability are source-site claims. Confirm all before launch.
const WHY_CHOOSE = [
  "Local Las Vegas plumbing company familiar with hard water conditions and desert heat cycling that affect toilet performance and component life",
  "Licensed plumbers (NV License #0048585A)",
  "Residential and commercial toilet repair and installation throughout Las Vegas",
  "Full range of toilet services: running toilet repair, base leaks, wax ring replacement, clog clearing, and new installations",
  "Transparent pricing with no hidden fees",
  "24/7 availability for toilet emergencies",
];

// Red brand-primary trust band (Section 2).
const LV_TOILET_TRUST_STRIP = [
  "NV Licensed Plumbers, #0048585A",
  "Toilet Repair and Installation",
  "Serving Las Vegas and the Valley",
  "Transparent Pricing, No Hidden Fees",
];

const LV_TOILET_NEIGHBORHOODS = [
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
// Section 3 — signs your toilet needs a plumber (H3 article cards). Clog and
// overflow cards carry inline links per the approved copy.
// ---------------------------------------------------------------------------
const LV_TOILET_WARNING_SIGNS: {
  title: string;
  body: string;
  tail?: LinkSeg[];
}[] = [
  {
    title: "Toilet running constantly",
    body: "A toilet that keeps running after flushing is usually a failing flapper valve, a fill valve that will not shut off after the tank refills, or a float set too high that allows water to run continuously into the overflow tube. Beyond the noise, a running toilet can waste hundreds of gallons per day and increase your Las Vegas water bill significantly. The problem is typically a straightforward repair once the faulty component is identified.",
  },
  {
    title: "Toilet leaking at the base",
    body: "Water pooling around the base of a toilet usually means the wax ring has failed. In Las Vegas, heat cycling between extreme summer temperatures and cooler winters can degrade wax rings faster than in moderate climates, especially in older homes where the seal has been in place for decades. A base leak also allows sewer gases to enter the home and should not be left unaddressed.",
  },
  {
    title: "Frequent clogs or weak flush",
    body: "A toilet that clogs repeatedly with normal use, or that flushes weakly and does not clear waste in a single flush, often has mineral deposits from Las Vegas hard water blocking the siphon jets or rim holes. These deposits narrow the water passage and reduce flush force over time. A plumber can assess whether the problem is mineral buildup, a partial clog deeper in the drain line, or a component that needs replacement.",
    tail: [
      " For clogs in the main drain line, see ",
      { href: "/las-vegas/drain-cleaning/", text: "drain cleaning in Las Vegas" },
      ".",
    ],
  },
  {
    title: "Toilet wobbling or unstable",
    body: "A toilet that rocks or moves when in use usually has loose floor bolts or a deteriorated flange. Ignoring instability can damage the wax ring and lead to a base leak.",
  },
  {
    title: "Overflowing toilet",
    body: "If your toilet is overflowing, shut off the water supply valve at the base of the toilet by turning it clockwise. If that valve is stuck or inaccessible, shut off the main water supply to the home. Do not continue to flush. Call (702) 567-9172. An overflow that cannot be stopped with the shutoff valve may indicate a main sewer line problem.",
    tail: [
      " See our ",
      {
        href: "/las-vegas/emergency-plumbing/",
        text: "emergency plumbing in Las Vegas",
      },
      " page for more.",
    ],
  },
];

// ---------------------------------------------------------------------------
// Section 4 — Las Vegas toilet issues (H3 article cards).
// ---------------------------------------------------------------------------
const LV_TOILET_FACTORS = [
  {
    title: "Hard water mineral buildup in siphon jets and rim holes",
    body: "Las Vegas has some of the hardest municipal water in the country. The high mineral content causes calcium and magnesium deposits to accumulate inside toilet siphon jets and rim holes over time, gradually restricting water flow and reducing flush strength. This buildup also accelerates wear on rubber flapper valves and fill valve components. Toilet parts in Las Vegas homes typically need replacement more frequently than in areas with softer water. Periodic cleaning and inspection of toilet internals is a practical step for any Las Vegas homeowner.",
  },
  {
    title: "Wax ring deterioration from desert heat cycling",
    body: "Las Vegas homes experience significant temperature swings between extreme summer heat and cooler winter periods. This repeated expansion and contraction stresses the wax ring seal between the toilet base and the floor flange. Combined with minor shifts in caliche soil beneath Las Vegas slab foundations, deteriorated wax rings are a common source of base leaks in the area. A toilet that leaks at the base or releases sewer odors near the floor is signaling that the wax ring needs replacement.",
  },
  {
    // FLAG: VERIFY — confirm current SNWA rebate availability before publishing.
    title: "Water conservation and efficient toilet upgrades",
    body: "The Southern Nevada Water Authority serves the Las Vegas Valley and actively supports water-efficient fixture upgrades as part of long-term conservation planning for the desert region. Toilets manufactured before 1994 use significantly more water per flush than modern low-flow and dual-flush models. Replacing an aging toilet with a current high-efficiency model reduces household water consumption and may qualify for SNWA rebates or incentives.",
  },
  {
    title: "Aging toilet components in older Las Vegas homes",
    body: "Many Las Vegas homes built in the 1970s through the 1990s still have original toilet fixtures with plastic and rubber components that have been degrading for decades. Original fill valves, flappers, and supply lines in older toilets are more prone to sudden failure than modern replacements. A thorough toilet inspection as part of general plumbing maintenance helps identify components that are near the end of their service life before they cause water damage or a disruptive failure.",
  },
];

// ---------------------------------------------------------------------------
// Section 5 — toilet services (H3 article cards). Clog card carries a drain link.
// ---------------------------------------------------------------------------
const LV_TOILET_SERVICES: { title: string; body: string; tail?: LinkSeg[] }[] =
  [
    {
      title: "Running Toilet Repair",
      body: "Diagnosis and repair of toilets that run continuously after flushing, including flapper, fill valve, and float replacement.",
    },
    {
      title: "Leaking Toilet Repair",
      body: "Repair of toilets leaking at the base, tank, or supply line connections, including wax ring and flange service.",
    },
    {
      title: "Toilet Clog Clearing",
      body: "Professional clearing of toilet clogs including stubborn or recurring blockages that a plunger cannot resolve.",
      tail: [
        " For main sewer line clogs, see ",
        {
          href: "/las-vegas/drain-cleaning/",
          text: "drain cleaning in Las Vegas",
        },
        ".",
      ],
    },
    {
      title: "Wax Ring and Flange Repair",
      body: "Replacement of failed wax rings and repair of damaged toilet flanges to stop base leaks and sewer gas entry.",
    },
    {
      title: "Toilet Tank Component Repair",
      body: "Repair and replacement of toilet tank internals including flappers, fill valves, flush valves, and floats.",
    },
    {
      title: "Toilet Replacement",
      body: "Full toilet replacement for cracked, damaged, or aging toilets that are no longer repairable or efficient.",
    },
    {
      title: "New Toilet Installation",
      body: "Professional installation of new toilets for bathroom renovations, additions, and upgrades throughout Las Vegas. We work with customer-supplied toilets and can advise on comfort-height and water-efficient designs.",
    },
  ];

// ---------------------------------------------------------------------------
// JSON-LD payloads. areaServed `City` (Las Vegas) -> `State` (Nevada). No
// AggregateRating, no sameAs.
// ---------------------------------------------------------------------------
const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Toilet Repair and Installation in Las Vegas, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing repairs, replaces, and installs toilets throughout Las Vegas, NV. Running toilets, base leaks, wax ring replacement, clogs, and new installations. NV #0048585A.",
  url: "https://redcarpetplumbing.com/las-vegas/toilet-repair-installation/",
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
      name: "Toilet Repair and Installation in Las Vegas, NV",
      item: "https://redcarpetplumbing.com/las-vegas/toilet-repair-installation/",
    },
  ],
};

// FLAG: VERIFY — telephone carried from sibling pattern. Confirm before launch.
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Toilet Repair and Installation in Las Vegas",
  serviceType: "Toilet Repair and Installation",
  description:
    "Red Carpet Plumbing provides toilet repair, replacement, and installation for homes and businesses in Las Vegas, NV. Running toilet repair, base leak and wax ring repair, clog clearing, tank component replacement, and new toilet installation. NV License #0048585A.",
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
// process steps. Derived from LV_TOILET_STEPS for a guaranteed text match.
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Red Carpet Plumbing Handles Toilet Repair and Installation in Las Vegas",
  step: LV_TOILET_STEPS.map((step, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: step.name,
    text: step.body,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: LV_TOILET_FAQS.map((faq) => ({
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

export default function LasVegasToiletPage() {
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
            { label: "Toilet Repair and Installation in Las Vegas, NV" },
          ]}
        />

        {/* SECTION 1: HERO */}
        <HeroSection
          headingLevel="h1"
          headline="Toilet Repair and Installation in Las Vegas, NV"
          subheading="Red Carpet Plumbing repairs, replaces, and installs toilets for homes and businesses throughout Las Vegas. From running toilets and base leaks to wax ring replacements, clog clearing, and new toilet installations, our licensed plumbers handle the full job with transparent pricing and no hidden fees."
          trustItems={LV_TOILET_TRUST_STRIP}
          primaryCTA={{
            label: "Call (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{
            label: "Request Toilet Service",
            href: "/contact/",
          }}
          ctaNote="Licensed plumbers. Transparent pricing. No hidden fees."
          formSlot={<QuoteFormPlaceholder title="Get Toilet Repair Help" />}
          backgroundImage={{
            src: "/images/services/toilet-repair-installation/hero.webp",
            alt: "Toilet repair and installation service in Las Vegas, NV",
          }}
        />

        {/* SECTION 2: TRUST STRIP */}
        <TrustStrip
          items={LV_TOILET_TRUST_STRIP}
          ariaLabel="Why Las Vegas customers choose Red Carpet Plumbing for toilet repair"
        />

        {/* SECTION 3: SIGNS YOUR TOILET NEEDS A PLUMBER */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Signs Your Toilet Needs a Plumber
              </h2>
            </div>
            <div className="mt-8 rounded-2xl border-l-4 border-brand-primary bg-brand-surface-alt p-6 sm:p-8">
              <p className="text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing repairs, replaces, and installs toilets for
                homes and businesses throughout the Las Vegas Valley.
                Whether you have a running toilet, a base leak, a recurring clog,
                or need a new toilet installed, our licensed plumbers handle the
                full job.
              </p>
            </div>
            <div className="mt-8 space-y-6">
              {LV_TOILET_WARNING_SIGNS.map((sign) => (
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

        {/* SECTION 4: LAS VEGAS TOILET ISSUES */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Toilet Issues in Las Vegas Homes
              </h2>
            </div>
            <div className="mt-10 space-y-6">
              {LV_TOILET_FACTORS.map((f) => (
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

        {/* SECTION 5: TOILET SERVICES WE PROVIDE */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Toilet Services in Las Vegas
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing provides the full range of toilet repair,
                replacement, and installation services for residential and
                commercial properties throughout Las Vegas. For complete service
                details, see our{" "}
                <Link
                  href="/toilet-repair-installation/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  core toilet repair and installation page
                </Link>
                .
              </p>
            </div>
            <div className="mt-10 space-y-6">
              {LV_TOILET_SERVICES.map((s) => (
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

        {/* SECTION 6: OUR TOILET SERVICE PROCESS (HowTo) */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Our Toilet Service Process
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-brand-dark/80">
                    Here is how Red Carpet Plumbing approaches toilet service for
                    Las Vegas homes and businesses.
                  </p>
                </div>
              </SectionRevealItem>
              <SectionRevealItem className="mt-12">
                <ol className="space-y-8">
                  {LV_TOILET_STEPS.map((step, index) => (
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
                  Toilet Problem in Las Vegas? Call a Licensed Plumber.
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/80">
                  Red Carpet Plumbing handles running toilets, base leaks, clogs,
                  wax ring replacement, and full toilet replacement throughout the Las Vegas Valley. NV Contractor License #0048585A.
                </p>
                {/* FLAG: VERIFY — 24/7 availability is a source-site claim. */}
                <p className="mt-3 text-sm font-medium text-white/70">
                  Available 24/7 for toilet emergencies.
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
                  Request Toilet Service
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
                Why Choose Red Carpet Plumbing for Toilet Repair and Installation
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
                Toilet Service Areas in Las Vegas
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/85">
                Red Carpet Plumbing provides toilet repair and installation
                throughout Las Vegas and the surrounding communities of the Las
                Vegas Valley. We serve homeowners, landlords, property managers,
                and commercial customers across the city.
              </p>
              <p className="mt-6 text-lg leading-8 text-white/85">
                We commonly serve older Las Vegas neighborhoods where original
                toilet fixtures and aging wax rings are most likely to need
                service, as well as newer communities where new toilet
                installation and replacement are part of renovation and upgrade
                projects. For all Las Vegas plumbing services, visit our{" "}
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
              {LV_TOILET_NEIGHBORHOODS.map((name) => (
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
                Frequently Asked Questions About Toilet Repair and Installation in
                Las Vegas
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {LV_TOILET_FAQS.map((faq) => (
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
          headline={<>Need Toilet Repair or Installation<br />in Las Vegas?</>}
          body="Red Carpet Plumbing provides toilet repair, replacement, and installation throughout the Las Vegas Valley. Licensed, local, transparent pricing. NV #0048585A."
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
