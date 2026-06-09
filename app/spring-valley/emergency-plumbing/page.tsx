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

// FLAG: VERIFY before publishing — license #0048585A, "over 40 years", the
// 4.8/76 rating, the gas-line scope, and every emergency-availability statement
// (source-site claim) are source-site/project claims. Each visible instance
// carries an inline FLAG comment.
//
// SCHEMA NOTE: Spring Valley is a WHOLLY UNINCORPORATED Clark County community
// (not an incorporated city), so per this brief's emphatic instruction the
// Service.areaServed uses Place -> AdministrativeArea (Clark County) -> State
// (Nevada), NOT City. This matches the sibling Paradise unincorporated pages
// built earlier this batch. It intentionally diverges from the standing
// service-location-schema guardrail's "City + State" shape, which is written for
// incorporated cities and would be factually wrong for Spring Valley. The
// brief's flat "Spring Valley, Nevada" / "Clark County, Nevada" naming is
// normalized to clean names with a nested State "Nevada" node to match Paradise.
// No AggregateRating/Review. No sameAs.

export const metadata: Metadata = {
  title: "Emergency Plumbing in Spring Valley, NV | Red Carpet Plumbing",
  // FLAG: this description is the approved brief string (~180 chars). It exceeds
  // the site's <=160 meta-description standard; kept verbatim because page
  // metadata is approval-gated. Trim pending explicit approval.
  description:
    "Emergency plumbing in Spring Valley, NV. Burst pipes, slab leaks, sewer backups, water heater failures. Licensed plumbers serving Spring Valley and Clark County. Call (702) 567-9172.",
  alternates: {
    canonical:
      "https://redcarpetplumbing.com/spring-valley/emergency-plumbing/",
  },
  openGraph: {
    title: "Emergency Plumbing in Spring Valley, NV | Red Carpet Plumbing",
    description:
      "Emergency plumbing in Spring Valley, NV. Burst pipes, slab leaks, sewer backups, water heater failures. Licensed plumbers. Call (702) 567-9172.",
    url: "https://redcarpetplumbing.com/spring-valley/emergency-plumbing/",
    siteName: "Red Carpet Plumbing",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

// ---------------------------------------------------------------------------
// FAQ source of truth. The visible FAQ section AND the FAQPage JSON-LD schema
// both derive from this single array, guaranteeing a character-for-character
// match. FLAG comments live in this source only and are NOT part of the
// visible/schema answer text.
// ---------------------------------------------------------------------------
const SV_EMERGENCY_FAQS = [
  {
    question:
      "What should I do while waiting for an emergency plumber in Spring Valley?",
    answer:
      "Shut off the water at the nearest shutoff valve or at your main supply if a pipe has burst or a major leak is active. If you suspect a gas issue, leave the building and call your gas company. Do not use electrical switches near standing water. Call Red Carpet Plumbing at (702) 567-9172 to speak with a plumber while you wait.",
  },
  // FLAG: source-site claim (emergency availability) in this answer — verify before final launch.
  {
    question: "Is there a 24-hour plumber in Spring Valley, NV?",
    answer:
      "Red Carpet Plumbing provides emergency plumbing service in Spring Valley. Call (702) 567-9172 to reach our team.",
  },
  {
    question:
      "Are plumbing emergencies more common in older Spring Valley homes?",
    answer:
      "Yes. Homes in the Desert Inn and West Sahara corridors of northern Spring Valley were built primarily in the 1970s through 1990s and have plumbing systems that are now 30 to 50 years old. Galvanized steel supply lines from original construction corrode from the inside out under Las Vegas hard water conditions and can fail with little warning. Original copper lines from the same era have been thinned by decades of mineral corrosion. Older Spring Valley homes are among the higher-risk properties for plumbing emergencies in the Las Vegas Valley.",
  },
  {
    question:
      "What is Spring Valley, NV, and who handles plumbing permits there?",
    answer:
      "Spring Valley is an unincorporated community in Clark County, Nevada. It is governed by Clark County rather than the City of Las Vegas. Plumbing permits and inspections in Spring Valley are handled through Clark County. Red Carpet Plumbing holds NV License #0048585A and works within the applicable Clark County permit process.",
  },
  {
    question: "How much does emergency plumbing cost in Spring Valley?",
    answer:
      "Emergency plumbing costs vary based on the type of repair, the time of service, and the materials needed. Red Carpet Plumbing provides transparent pricing before work begins. Call (702) 567-9172 for a quote.",
  },
  {
    question:
      "Do you provide emergency plumbing for commercial properties in Spring Valley?",
    answer:
      "Yes. Red Carpet Plumbing provides emergency plumbing service for both residential and commercial properties throughout Spring Valley. Call (702) 567-9172 for commercial emergency response.",
  },
];

const HERO_SUBHEADING =
  "Red Carpet Plumbing provides emergency plumbing service for homes and businesses throughout Spring Valley, Nevada. Whether you are dealing with a burst pipe, sewer backup, slab leak, water heater failure, or gas line issue, our licensed plumbers are ready to help. Spring Valley is an unincorporated Clark County community and our Nevada Contractor License #0048585A covers plumbing work throughout Clark County. Call (702) 567-9172 now.";

const HERO_TRUST_ITEMS = [
  "NV Licensed Plumbers, #0048585A",
  // FLAG: source-site claim (emergency availability) — verify before final launch.
  "Emergency Plumbing Service Available",
  "Serving Spring Valley and Clark County",
  "Transparent Pricing, No Hidden Fees",
];

// Section 3 — common emergency problems (bold label + body). The slab item links
// the built core /slab-leak-detection-repair/ page; the Spring Valley slab page
// is not built yet (TODO-BATCH-6). The gas item carries a scope FLAG.
const COMMON_PROBLEMS: {
  label: string;
  body: string;
  link?: { pre: string; href: string; text: string; post: string };
}[] = [
  {
    label: "Burst pipes and failing galvanized supply lines in older homes",
    body: "Northern Spring Valley's Desert Inn and West Sahara corridor contains some of the most established residential neighborhoods in the Las Vegas Valley. Homes built along these corridors primarily in the 1970s through 1990s have plumbing systems that are now 30 to 50 years old. Many of these homes were built with galvanized steel supply lines that corrode from the inside out under Las Vegas Valley hard water conditions. As corrosion advances, galvanized pipe walls thin, water pressure drops, and eventually the pipe fails, sometimes suddenly. Homes in this corridor with original galvanized supply lines are at meaningful risk of pipe failure. Aging copper lines from the same era have also been thinned by decades of hard water mineral exposure and can develop pinhole leaks that escalate quickly.",
  },
  {
    // TODO-BATCH-6: /spring-valley/slab-leak-detection-repair/ not yet built — do
    // not link it. The live link below targets the built core service page.
    label: "Slab leaks in Spring Valley slab-foundation homes",
    body: "Spring Valley is built predominantly on concrete slab foundations, and the caliche and expansive clay soils beneath those slabs shift with temperature changes and seasonal rainfall. This soil movement stresses pipes embedded in and running beneath the slab over time. Combined with Las Vegas hard water mineral corrosion in older Spring Valley pipes, slab leaks are a recurring emergency in this community. Signs of a slab leak include warm spots on floors, unexplained water bill increases, and the sound of running water when all fixtures are off.",
    link: {
      pre: " For more information, see our ",
      href: "/slab-leak-detection-repair/",
      text: "slab leak detection and repair",
      post: " page.",
    },
  },
  {
    label: "Sewer line backups",
    body: "Sewer backups that cause sewage to rise into tubs, drains, or toilets are a health hazard requiring immediate response. In established Spring Valley neighborhoods with older sewer laterals, tree root intrusion and debris accumulation in aging lines are common causes of backups.",
  },
  {
    label: "Water heater failures",
    body: "Sudden loss of hot water, a leaking water heater tank, or unusual noises during the heating cycle are signs of an emergency requiring prompt service. Las Vegas hard water accelerates sediment buildup and anode rod depletion in Spring Valley water heaters, shortening their service life compared to national averages.",
  },
  {
    label: "Main water line breaks and major supply failures",
    body: "A sudden loss of water pressure throughout the home or visible water in the yard when no irrigation is running can indicate a main supply line break or failure that requires immediate professional assessment.",
  },
  {
    // FLAG: verify gas line scope before publishing.
    label: "Gas line issues",
    body: "If you smell gas in your Spring Valley home, leave the building immediately and call your gas company. After the utility has assessed the situation, Red Carpet Plumbing can inspect and repair gas line issues under NV License #0048585A.",
  },
];

// Section 4 — emergency services list. The sewer item carries an inline link;
// the gas item carries a scope FLAG.
const EMERGENCY_SERVICES: {
  lead: string;
  link?: { href: string; text: string };
}[] = [
  { lead: "Burst pipe detection and repair" },
  { lead: "Galvanized and copper supply line repair and replacement" },
  { lead: "Slab leak detection and emergency repair" },
  {
    lead: "Sewer backup clearing and ",
    link: { href: "/sewer-line-services/", text: "sewer line services" },
  },
  { lead: "Water heater emergency repair and replacement" },
  { lead: "Main water line repair" },
  { lead: "Fixture leak containment and repair" },
  // FLAG: verify gas line scope.
  {
    lead: "Gas line emergency response (leave building and call gas company first)",
  },
  { lead: "Leak shutoff assistance and water damage prevention guidance" },
  { lead: "Commercial emergency plumbing response" },
];

// Section 5 — what to do during a plumbing emergency (bold label + body).
const WHAT_TO_DO = [
  {
    label: "Shut off the water",
    body: "If a pipe has burst or a major leak is active, shut off the water at the nearest fixture shutoff valve or at your home's main supply shutoff. The main shutoff is typically near the water meter at the street or where the main supply enters the home.",
  },
  {
    label: "If you smell gas, leave immediately",
    body: "Do not use any electrical switches, open flames, or anything that could cause a spark. Leave the building, move away from the property, and call your gas company from a safe location. Call Red Carpet Plumbing after the gas company has assessed the situation.",
  },
  {
    label: "Do not use electricity near standing water",
    body: "If water has entered a room with electrical outlets, panels, or appliances, do not enter or use electrical switches until the power has been shut off at the breaker.",
  },
  {
    label: "Call Red Carpet Plumbing",
    body: "Call (702) 567-9172 to reach a plumber. Describe what you are seeing so we can advise you on immediate steps while our team responds.",
  },
];

// Section 6 — visible <ol>, HowTo schema source.
const EMERGENCY_STEPS = [
  {
    name: "Call and assess",
    body: "When you call (702) 567-9172, we gather information about what you are experiencing and advise you on immediate protective steps, including water shutoff and safety precautions, while our team prepares to respond.",
  },
  {
    name: "Diagnose on arrival",
    body: "We inspect the situation, identify the source and scope of the problem, and give you a clear assessment and pricing before any repair work begins.",
  },
  {
    name: "Complete the repair",
    body: "We repair the immediate problem completely, whether that is a burst pipe, a slab leak, a sewer backup, or a water heater failure, and verify that the repair is holding before we leave.",
  },
  {
    name: "Follow-up assessment",
    body: "We advise you on whether the emergency was an isolated event or a sign of a broader system issue requiring follow-up service, such as a full pipe assessment in an older Desert Inn corridor home or a slab leak evaluation for a Spring Valley property with aging copper supply lines.",
  },
];

// Section 7 — why choose (bulleted list). FLAGs on license, emergency
// availability, "over 40 years", and rating.
const WHY_CHOOSE = [
  "Local Las Vegas Valley plumbing company familiar with Spring Valley's older housing stock, Desert Inn and West Sahara corridor plumbing conditions, and Clark County permit requirements",
  // FLAG: VERIFY license number before publishing.
  "Licensed plumbers, NV License #0048585A",
  // FLAG: source-site claim (emergency availability) — verify before final launch.
  "Emergency plumbing service available",
  "Transparent pricing with no hidden fees",
  "Residential and commercial emergency plumbing throughout Spring Valley",
  // FLAG: VERIFY "over 40 years" before publishing.
  "Over 40 years serving the Las Vegas Valley",
  // FLAG: VERIFY rating and review count before publishing.
  "4.8-star rating across 76 Google reviews",
];

// ---------------------------------------------------------------------------
// JSON-LD payloads. Spring Valley is unincorporated Clark County, so the Service
// areaServed uses Place -> AdministrativeArea (Clark County) -> State (Nevada),
// matching the Paradise unincorporated pages. NOT City.
// ---------------------------------------------------------------------------
const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Emergency Plumbing in Spring Valley, NV | Red Carpet Plumbing",
  description:
    "Red Carpet Plumbing provides emergency plumbing service in Spring Valley, NV. Burst pipes, slab leaks, sewer backups, water heater failures. Licensed plumbers.",
  url: "https://redcarpetplumbing.com/spring-valley/emergency-plumbing/",
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
      name: "Spring Valley Plumbing Services",
      item: "https://redcarpetplumbing.com/spring-valley-plumbing-services/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Emergency Plumbing in Spring Valley",
      item: "https://redcarpetplumbing.com/spring-valley/emergency-plumbing/",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Emergency Plumbing in Spring Valley, NV",
  serviceType: "Emergency Plumbing",
  description:
    "Red Carpet Plumbing provides emergency plumbing service for homes and businesses in Spring Valley, NV, including burst pipe repair, slab leak detection and repair, sewer backup clearing, water heater emergency service, and commercial emergency plumbing response.",
  provider: {
    "@type": "Plumber",
    name: "Red Carpet Plumbing",
    url: "https://redcarpetplumbing.com",
    // FLAG: VERIFY telephone (carried forward from existing pages).
    telephone: "+17025679172",
  },
  areaServed: {
    "@type": "Place",
    name: "Spring Valley",
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

// HowTo schema included because Section 6 renders the matching visible
// step-by-step process (titles + body) on the page.
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Get Emergency Plumbing Help in Spring Valley NV",
  description:
    "The process Red Carpet Plumbing follows for emergency plumbing response in Spring Valley, NV.",
  step: EMERGENCY_STEPS.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.name,
    text: s.body,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: SV_EMERGENCY_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function SpringValleyEmergencyPlumbingPage() {
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
              label: "Spring Valley Plumbing Services",
              href: "/spring-valley-plumbing-services/",
            },
            { label: "Emergency Plumbing in Spring Valley" },
          ]}
        />

        {/* SECTION 1: HERO */}
        <HeroSection
          headingLevel="h1"
          headline="Emergency Plumbing in Spring Valley, NV"
          subheading={HERO_SUBHEADING}
          trustItems={HERO_TRUST_ITEMS}
          primaryCTA={{
            label: "Call (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{
            label: "Request Service",
            href: "/contact/",
          }}
          ctaNote="Licensed plumbers. Transparent pricing. No hidden fees."
          formSlot={<QuoteFormPlaceholder title="Get Emergency Plumbing Help" />}
          backgroundImage={{
            src: "/images/services/emergency-plumbing/hero.webp",
            alt: "Emergency plumbing service in Spring Valley, NV",
          }}
        />

        {/* SECTION 2: DIRECT ANSWER */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="rounded-2xl border-l-4 border-brand-primary bg-brand-surface-alt p-6 sm:p-8">
              <h2 className="text-2xl font-bold tracking-tight text-brand-dark sm:text-3xl">
                Emergency Plumbing Services in Spring Valley
              </h2>
              {/* FLAG: "over 40 years" claim below — verify before publishing. */}
              <p className="mt-4 text-lg leading-8 text-brand-dark/80">
                Red Carpet Plumbing is a local, family-owned plumbing company
                serving Spring Valley, Nevada and the Las Vegas Valley. We hold
                Nevada Contractor License #0048585A under the C-1 Plumbing and
                Heating classification. Spring Valley is an unincorporated Clark
                County community, and our license covers plumbing work throughout
                Clark County, including Spring Valley. We have been serving the Las
                Vegas Valley for over 40 years.
              </p>
              {/* FLAG: source-site claim (emergency availability) — verify before final launch. */}
              <p className="mt-4 text-base leading-7 text-brand-dark/80">
                We provide emergency plumbing service for residential and
                commercial properties throughout Spring Valley, including burst
                pipe repair, sewer line clearing, slab leak detection and repair,
                water heater emergency service, and gas line emergency response.
              </p>
              <p className="mt-4 text-base leading-7 text-brand-dark/70">
                For full-service plumbing in Spring Valley, visit our{" "}
                <Link
                  href="/spring-valley-plumbing-services/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  Spring Valley plumbing services
                </Link>{" "}
                page. For emergency plumbing information across the Las Vegas
                Valley, visit our{" "}
                <Link
                  href="/emergency-plumbing/"
                  className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                >
                  emergency plumbing services
                </Link>{" "}
                page.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: COMMON EMERGENCY PROBLEMS */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10 lg:pb-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    Common Emergency Plumbing Problems in Spring Valley
                  </h2>
                </div>
              </SectionRevealItem>

              <SectionRevealItem className="mt-10">
                <ul className="space-y-5">
                  {COMMON_PROBLEMS.map((c) => (
                    <li
                      key={c.label}
                      className="relative rounded-2xl bg-brand-surface-alt p-6 ring-1 ring-brand-surface-alt"
                    >
                      <p className="text-base leading-7 text-brand-dark/80">
                        <strong className="font-semibold text-brand-dark">
                          {c.label}.
                        </strong>{" "}
                        {c.body}
                        {c.link ? (
                          <>
                            {c.link.pre}
                            <Link
                              href={c.link.href}
                              className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                            >
                              {c.link.text}
                            </Link>
                            {c.link.post}
                          </>
                        ) : null}
                      </p>
                    </li>
                  ))}
                </ul>
              </SectionRevealItem>
            </SectionReveal>
          </div>
        </section>

        {/* SECTION 4: EMERGENCY SERVICES WE PROVIDE */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Emergency Plumbing Services We Provide in Spring Valley
              </h2>
            </div>
            <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {EMERGENCY_SERVICES.map((s) => (
                <li key={s.lead} className="flex items-start gap-3">
                  <CheckMark />
                  <span className="text-base leading-7 text-brand-dark/85">
                    {s.lead}
                    {s.link ? (
                      <Link
                        href={s.link.href}
                        className="font-semibold text-brand-primary hover:text-brand-primary-hover"
                      >
                        {s.link.text}
                      </Link>
                    ) : null}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 5: WHAT TO DO DURING A PLUMBING EMERGENCY */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                What to Do During a Plumbing Emergency
              </h2>
            </div>
            <ul className="mt-10 space-y-5">
              {WHAT_TO_DO.map((w) => (
                <li
                  key={w.label}
                  className="rounded-2xl bg-brand-surface-alt p-6 ring-1 ring-brand-surface-alt"
                >
                  <p className="text-base leading-7 text-brand-dark/80">
                    <strong className="font-semibold text-brand-dark">
                      {w.label}.
                    </strong>{" "}
                    {w.body}
                  </p>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <a
                href="tel:+17025679172"
                className="inline-flex min-h-14 items-center justify-center rounded-lg bg-brand-primary px-8 text-lg font-semibold text-white shadow-sm hover:bg-brand-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary motion-safe:transition-colors motion-safe:active:scale-[0.97]"
              >
                Call (702) 567-9172
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 6: OUR EMERGENCY RESPONSE PROCESS (HowTo) */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <SectionReveal>
              <SectionRevealItem>
                <div className="text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                    How We Handle Emergency Plumbing Calls in Spring Valley
                  </h2>
                </div>
              </SectionRevealItem>
              <SectionRevealItem className="mt-12">
                <ol className="space-y-8">
                  {EMERGENCY_STEPS.map((step, index) => (
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

        {/* SECTION 7: WHY CHOOSE */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Why Spring Valley Homeowners and Businesses Choose Red Carpet
                Plumbing
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
            <p className="mt-8 text-base leading-7 text-brand-dark/80">
              Red Carpet Plumbing provides full{" "}
              <Link
                href="/spring-valley-plumbing-services/"
                className="font-semibold text-brand-primary hover:text-brand-primary-hover"
              >
                Spring Valley plumbing services
              </Link>{" "}
              including drain cleaning, water heater repair, slab leak detection,
              and re-piping. We also serve communities near Spring Valley including{" "}
              <Link
                href="/las-vegas-plumbing-services/"
                className="font-semibold text-brand-primary hover:text-brand-primary-hover"
              >
                Las Vegas plumbing services
              </Link>{" "}
              and{" "}
              <Link
                href="/summerlin-plumbing-services/"
                className="font-semibold text-brand-primary hover:text-brand-primary-hover"
              >
                Summerlin plumbing services
              </Link>
              .
            </p>
          </div>
        </section>

        {/* SECTION 8: FAQ */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Emergency Plumbing in Spring Valley &mdash; Frequently Asked
                Questions
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {SV_EMERGENCY_FAQS.map((faq) => (
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

        {/* SECTION 9: FINAL CTA */}
        <CTASection
          background="red"
          headline="Need an Emergency Plumber in Spring Valley? Call Now."
          body="Red Carpet Plumbing provides emergency plumbing service throughout Spring Valley, NV, including the Desert Inn and West Sahara corridors and surrounding neighborhoods. Call (702) 567-9172 or request service online."
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
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12.5l4.5 4.5L19 7.5" />
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
