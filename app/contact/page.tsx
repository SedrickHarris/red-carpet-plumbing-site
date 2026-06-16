import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { ContactFormPlaceholder } from "@/components/ContactFormPlaceholder";
import { HeroSection } from "@/components/HeroSection";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Contact a Las Vegas Plumber | Red Carpet Plumbing",
  description:
    "Contact Red Carpet Plumbing to request plumbing service in Las Vegas and the Las Vegas Valley. Call or submit a service request for residential and commercial plumbing.",
  alternates: {
    canonical: "https://redcarpetplumbing.com/contact/",
  },
  openGraph: {
    title: "Contact a Las Vegas Plumber | Red Carpet Plumbing",
    description:
      "Request plumbing service, ask about service areas, or get a quote from Red Carpet Plumbing. Serving Las Vegas, Henderson, North Las Vegas, Summerlin, and the Las Vegas Valley.",
    url: "https://redcarpetplumbing.com/contact/",
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
const CONTACT_FAQS = [
  {
    question: "How do I request plumbing service from Red Carpet Plumbing?",
    answer:
      "You can request plumbing service by calling Red Carpet Plumbing directly or by submitting a service request through the online form on this page. For emergency plumbing situations, calling is recommended for the fastest response.",
  },
  {
    question: "What areas does Red Carpet Plumbing serve?",
    answer:
      "Red Carpet Plumbing serves Las Vegas, Henderson, North Las Vegas, Paradise, Summerlin, Spring Valley, Enterprise, Boulder City, Green Valley, Lake Las Vegas, and surrounding communities throughout the Las Vegas Valley.",
  },
  {
    question: "What happens after I submit a service request?",
    answer:
      "After you submit a service request, a member of the Red Carpet Plumbing team will contact you to confirm your request, gather details about your plumbing situation, and schedule your service appointment.",
  },
  {
    question: "Can I call instead of using the online form?",
    answer:
      "Yes, you can call Red Carpet Plumbing directly to request service, ask about availability, or get answers to your plumbing questions. For emergency plumbing situations, calling directly is the fastest way to reach us.",
  },
  {
    question: "Does Red Carpet Plumbing handle emergency plumbing calls?",
    answer:
      "Yes, Red Carpet Plumbing provides emergency plumbing services for urgent situations including burst pipes, severe leaks, sewer backups, and water heater failures. Contact us directly for emergency plumbing assistance.",
  },
  {
    question:
      "What information should I have ready when I contact Red Carpet Plumbing?",
    answer:
      "When contacting Red Carpet Plumbing, it helps to have your address or ZIP code, a description of the plumbing issue, and any relevant details such as when the problem started or whether it is an emergency. This helps our team prepare for your service appointment.",
  },
  {
    question: "Does Red Carpet Plumbing serve my neighborhood?",
    answer:
      "Red Carpet Plumbing serves communities throughout the Las Vegas Valley. If you are not sure whether we serve your area, contact us and we will confirm your service area. You can also visit our Service Areas page for a full list of communities we serve.",
  },
  {
    question: "Does Red Carpet Plumbing offer plumbing services for businesses?",
    answer:
      "Yes, Red Carpet Plumbing provides commercial plumbing services for businesses, property managers, and commercial operators throughout the Las Vegas Valley. Contact us to discuss your commercial plumbing needs.",
  },
];

const PROCESS_STEPS = [
  {
    heading: "You Reach Out",
    body: "Call us directly or submit a service request through the form on this page. Include your ZIP code and a brief description of your plumbing issue.",
  },
  {
    heading: "We Confirm Your Request",
    body: "A member of our team will contact you to confirm your request, ask any follow-up questions, and schedule your service appointment.",
  },
  {
    heading: "We Come to You",
    body: "A Red Carpet Plumbing professional will arrive at your location to assess and address your plumbing situation.",
  },
  {
    heading: "Your Plumbing Is Handled",
    body: "We complete your plumbing service with clear communication throughout, so you know exactly what was done and what to expect.",
  },
];

const SERVICE_QUICK_LINKS = [
  { label: "Emergency Plumbing", href: "/emergency-plumbing/" },
  { label: "Drain Cleaning", href: "/drain-cleaning/" },
  { label: "Leak Detection and Repair", href: "/leak-detection-repair/" },
  {
    label: "Water Heater Repair and Installation",
    href: "/water-heater-repair-installation/",
  },
  {
    label: "Slab Leak Detection and Repair",
    href: "/slab-leak-detection-repair/",
  },
  { label: "Sewer Line Services", href: "/sewer-line-services/" },
  { label: "Re-Piping", href: "/re-piping/" },
  {
    label: "Water Pipe Repair and Replacement",
    href: "/water-pipe-repair-replacement/",
  },
  { label: "Gas Line Plumbing", href: "/gas-line-plumbing/" },
  { label: "Commercial Plumbing", href: "/commercial-plumbing/" },
  {
    label: "Toilet Repair and Installation",
    href: "/toilet-repair-installation/",
  },
  {
    label: "Faucet and Sink Repair and Installation",
    href: "/faucet-sink-repair-installation/",
  },
  {
    label: "Garbage Disposal Repair and Installation",
    href: "/garbage-disposal-repair-installation/",
  },
  { label: "Backflow Prevention", href: "/backflow-prevention/" },
  {
    label: "Video Camera Plumbing Inspections",
    href: "/video-camera-plumbing-inspections/",
  },
  { label: "Trenchless Piping", href: "/trenchless-piping/" },
  {
    label: "Water Meter and Pressure Regulator Services",
    href: "/water-meter-pressure-regulator-services/",
  },
];

// ---------------------------------------------------------------------------
// JSON-LD payloads
// ---------------------------------------------------------------------------

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Contact a Las Vegas Plumber | Red Carpet Plumbing",
  url: "https://redcarpetplumbing.com/contact/",
  description:
    "Contact Red Carpet Plumbing to request plumbing service in the Las Vegas Valley.",
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
        name: "Contact",
        item: "https://redcarpetplumbing.com/contact/",
      },
    ],
  },
};

const plumberSchema = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  name: "Red Carpet Plumbing",
  url: "https://redcarpetplumbing.com",
  telephone: "+17025679172",
  address: {
    "@type": "PostalAddress",
    streetAddress: "3330 W. Hacienda Ave Ste. 405",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89118",
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "07:30",
      closes: "16:30",
    },
  ],
  sameAs: ["https://share.google/oY5LcfC0lhWJXVjJj"],
  description:
    "Red Carpet Plumbing provides residential and commercial plumbing services throughout the Las Vegas Valley, including emergency plumbing, drain cleaning, leak detection, water heater repair, slab leak detection, sewer line services, re-piping, and more.",
  areaServed: [
    "Las Vegas, NV",
    "Henderson, NV",
    "North Las Vegas, NV",
    "Paradise, NV",
    "Summerlin, NV",
    "Spring Valley, NV",
    "Enterprise, NV",
    "Boulder City, NV",
    "Green Valley, NV",
    "Lake Las Vegas, NV",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: "+17025679172",
    areaServed: "Las Vegas Valley, NV",
    availableLanguage: "English",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: CONTACT_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={webPageSchema} />
      <JsonLd data={plumberSchema} />
      <JsonLd data={faqSchema} />

      <SiteHeader />

      <main id="main" className="flex-1 bg-white">
        {/* SECTION 1: BREADCRUMBS */}
        <Breadcrumbs
          trail={[
            { label: "Home", href: "/" },
            { label: "Contact" },
          ]}
        />

        {/* SECTION 2: HERO (two-column with form) */}
        <HeroSection
          headingLevel="h1"
          headline="Contact a Las Vegas Plumber"
          subheading={
            <>
              <span className="block">
                Red Carpet Plumbing is available to help with plumbing service
                throughout the Las Vegas Valley. Whether you have
                an urgent plumbing situation or want to schedule a service
                appointment, you can reach us by phone or by submitting a
                request through the form on this page.
              </span>
              <span className="mt-4 block">
                We serve Las Vegas, Henderson, North Las Vegas, Paradise,
                Summerlin, Spring Valley, Enterprise, Boulder City, Green
                Valley, Lake Las Vegas, and surrounding communities.
              </span>
            </>
          }
          primaryCTA={{
            label: "Call (702) 567-9172",
            href: "tel:+17025679172",
          }}
          secondaryCTA={{
            label: "View Service Areas",
            // /service-areas/ is built and live on main
            href: "/service-areas/",
          }}
          formSlot={<ContactFormPlaceholder />}
        />

        {/* SECTION 3: CONTACT DETAILS CARD */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Plumbing Service in the Las Vegas Valley
              </h2>
            </div>
            <dl className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Phone */}
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-brand-surface-alt">
                <dt className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-brand-muted">
                  <PhoneIcon className="h-4 w-4 text-brand-primary" />
                  Phone
                </dt>
                <dd className="mt-3 text-base text-brand-dark/80">
                  <a
                    href="tel:+17025679172"
                    className="font-medium text-brand-dark hover:text-brand-primary"
                  >
                    (702) 567-9172
                  </a>
                </dd>
              </div>

              {/* Email */}
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-brand-surface-alt">
                <dt className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-brand-muted">
                  <MailIcon className="h-4 w-4 text-brand-primary" />
                  Email
                </dt>
                <dd className="mt-3 text-base text-brand-dark/80">
                  <a
                    href="mailto:info@redcarpetplumbing.com"
                    className="font-medium text-brand-dark hover:text-brand-primary"
                  >
                    info@redcarpetplumbing.com
                  </a>
                </dd>
              </div>

              {/* Hours */}
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-brand-surface-alt">
                <dt className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-brand-muted">
                  <ClockIcon className="h-4 w-4 text-brand-primary" />
                  Hours
                </dt>
                <dd className="mt-3 text-base text-brand-dark/80">
                  <span className="block">
                    Monday through Friday: 7:30 AM to 4:30 PM
                  </span>
                  <span className="mt-1 block">
                    Saturday and Sunday: Closed
                  </span>
                  <span className="mt-2 block">
                    24/7 emergency service available, call{" "}
                    <a
                      href="tel:+17025679172"
                      className="font-medium text-brand-dark hover:text-brand-primary"
                    >
                      (702) 567-9172
                    </a>
                  </span>
                </dd>
              </div>

              {/* Address */}
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-brand-surface-alt sm:col-span-2 lg:col-span-2">
                <dt className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-brand-muted">
                  <PinIcon className="h-4 w-4 text-brand-primary" />
                  Address
                </dt>
                <dd className="mt-3 text-base text-brand-dark/80">
                  <a
                    href="https://www.google.com/maps/place/3330+W+Hacienda+Ave+%23405,+Las+Vegas,+NV+89118/@36.0943375,-115.1870907,17z/data=!3m1!4b1!4m6!3m5!1s0x80c8c5d697faaaab:0x3db74ab4815ec72a!8m2!3d36.0943375!4d-115.1845158!16s%2Fg%2F11nynzwdy4?entry=ttu&g_ep=EgoyMDI0MDkxOC4xIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block transition-colors hover:text-brand-primary hover:underline"
                    aria-label="Get directions to Red Carpet Plumbing on Google Maps"
                  >
                    <span className="block">3330 W. Hacienda Ave Ste. 405</span>
                    <span className="mt-1 block">Las Vegas, NV 89118</span>
                  </a>
                </dd>
              </div>

              {/* Emergency Plumbing */}
              {/* SOURCE-SITE CLAIM: verify 24/7 availability before making that specific claim */}
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-brand-surface-alt">
                <dt className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-brand-muted">
                  <AlertIcon className="h-4 w-4 text-brand-primary" />
                  Emergency Plumbing
                </dt>
                <dd className="mt-3 text-base text-brand-dark/80">
                  Contact us directly for emergency plumbing assistance
                </dd>
              </div>
            </dl>
          </div>
        </section>

        {/* SECTION 4: WHAT HAPPENS NEXT (4 process steps) */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                What Happens After You Contact Us
              </h2>
            </div>
            <ol className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {PROCESS_STEPS.map((step, index) => (
                <li
                  key={step.heading}
                  className="flex flex-col gap-3 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-brand-surface-alt"
                >
                  <span
                    aria-hidden="true"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary text-base font-semibold text-white"
                  >
                    {index + 1}
                  </span>
                  <h3 className="text-lg font-semibold text-brand-dark">
                    {step.heading}
                  </h3>
                  <p className="text-base leading-7 text-brand-dark/80">
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* SECTION 5: SERVICE AREA SUMMARY */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
              Areas We Serve
            </h2>
            <p className="mt-6 text-lg leading-8 text-brand-dark/80">
              Red Carpet Plumbing serves residential and commercial customers
              throughout the Las Vegas Valley. Our service area includes Las
              Vegas, Henderson, North Las Vegas, Paradise, Summerlin, Spring
              Valley, Enterprise, Boulder City, Green Valley, Lake Las Vegas,
              and surrounding communities.
            </p>
            <div className="mt-8">
              <Link
                // /service-areas/ is built and live on main
                href="/service-areas/"
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-brand-primary px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-brand-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
              >
                See Full Service Area List
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 6: MAP PLACEHOLDER */}
        {/* TODO: Replace this map placeholder with a live Google Maps embed when one of the following is confirmed: */}
        {/* 1. Client confirms a public street address for embedding */}
        {/* 2. Client confirms an approved service area map embed URL */}
        {/* FLAG: Do not embed a map without client confirmation — do not invent coordinates or address */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-10 xl:px-12">
            <div
              role="img"
              aria-label="Map loading area"
              className="flex aspect-[4/3] w-full items-center justify-center rounded-2xl bg-brand-surface-alt sm:aspect-[16/6]"
            >
              <p className="text-base font-medium text-brand-muted">
                Map Coming Soon
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 7: SERVICES QUICK LINKS */}
        <section className="bg-brand-surface-alt">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
              Plumbing Services Available in Las Vegas
            </h2>
            <p className="mt-6 text-lg leading-8 text-brand-dark/80">
              Red Carpet Plumbing provides a full range of residential and
              commercial plumbing services throughout the Las Vegas Valley.
              Contact us to request any of the following services.
            </p>
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {SERVICE_QUICK_LINKS.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="flex items-center gap-2 rounded-lg bg-white px-4 py-3 text-base font-medium text-brand-dark shadow-sm ring-1 ring-brand-surface-alt transition hover:text-brand-primary hover:shadow-md"
                  >
                    <span aria-hidden="true" className="text-brand-primary">
                      →
                    </span>
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-10 text-center">
              <Link
                // /plumbing-services/ is built and live on main
                href="/plumbing-services/"
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-brand-primary px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-brand-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
              >
                See All Plumbing Services
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 8: FAQ */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
                Contact FAQs
              </h2>
            </div>
            <dl className="mt-12 space-y-4">
              {CONTACT_FAQS.map((faq) => (
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

        {/* SECTION 9: EMERGENCY CTA STRIP (text + disabled CTA only — no second form) */}
        {/* SOURCE-SITE CLAIM: verify 24/7 availability documentation before final launch */}
        <CTASection
          background="red"
          headline={<>Plumbing Emergency<br />in Las Vegas?</>}
          body="For urgent plumbing situations including burst pipes, severe leaks, sewer backups, and water heater failures, call Red Carpet Plumbing directly for the fastest response."
          primaryCTA={{
            label: "Call (702) 567-9172",
            href: "tel:+17025679172",
          }}
        />
      </main>

      <SiteFooter />
    </>
  );
}

// ---------------------------------------------------------------------------
// Inline icon helpers (decorative, aria-hidden)
// ---------------------------------------------------------------------------

type IconProps = { className?: string };

function PhoneIcon({ className = "" }: IconProps) {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon({ className = "" }: IconProps) {
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
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function ClockIcon({ className = "" }: IconProps) {
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function PinIcon({ className = "" }: IconProps) {
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
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function AlertIcon({ className = "" }: IconProps) {
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
      <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}
