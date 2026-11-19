import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/Button";
import { JsonLd } from "@/components/JsonLd";
import { ReviewCard } from "@/components/ReviewCard";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import routeManifest from "@/docs/seo/route-manifest.json";
import { GOOGLE_PROFILE_URL, GOOGLE_REVIEW_URL, reviews } from "@/lib/reviews";
import { OG_IMAGES } from "@/lib/social-image";

const TITLE = "Red Carpet Plumbing Reviews | Las Vegas, NV";
const DESCRIPTION =
  "Read Google reviews from Las Vegas customers about water heater, leak, drain, faucet, and repair work from Red Carpet Plumbing. Call (702) 567-9172.";
const OG_DESCRIPTION =
  "Customer reviews of Red Carpet Plumbing, posted on Google by Las Vegas homeowners and property owners.";
const CANONICAL = "https://redcarpetplumbing.com/reviews/";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: CANONICAL,
  },
  openGraph: {
    title: TITLE,
    description: OG_DESCRIPTION,
    url: CANONICAL,
    siteName: "Red Carpet Plumbing",
    locale: "en_US",
    type: "website",
    images: OG_IMAGES,
  },
  robots: { index: true, follow: true },
};

// Service pages named in approved copy. Each link resolves against the route
// manifest at build time and an entry whose route does not exist is dropped.
const SERVICE_LINKS: ReadonlyArray<{ route: string; label: string }> = [
  { route: "/water-heater-repair-installation", label: "Water heater repair and installation" },
  { route: "/leak-detection-repair", label: "Leak detection and repair" },
  { route: "/slab-leak-detection-repair", label: "Slab leak detection and repair" },
  { route: "/drain-cleaning", label: "Drain cleaning" },
  { route: "/toilet-repair-installation", label: "Toilet repair and installation" },
  { route: "/faucet-sink-repair-installation", label: "Faucet and sink repair and installation" },
  { route: "/garbage-disposal-repair-installation", label: "Garbage disposal repair and installation" },
  { route: "/gas-line-plumbing", label: "Gas line plumbing" },
  { route: "/emergency-plumbing", label: "Emergency plumbing" },
  { route: "/commercial-plumbing", label: "Commercial plumbing" },
];

const manifestRoutes = new Set(routeManifest.routes.map((r) => r.route));
const serviceLinks = SERVICE_LINKS.filter((s) => manifestRoutes.has(s.route));

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Red Carpet Plumbing Reviews in Las Vegas, NV",
  description: DESCRIPTION,
  url: CANONICAL,
  isPartOf: {
    "@type": "WebSite",
    name: "Red Carpet Plumbing",
    url: "https://redcarpetplumbing.com",
  },
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
        name: "Reviews",
        item: CANONICAL,
      },
    ],
  },
};

const H2_CLASS = "text-3xl tracking-tight text-brand-dark sm:text-4xl";
const TEXT_LINK_CLASS =
  "font-semibold text-brand-primary underline underline-offset-4 hover:text-brand-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary";

export default function ReviewsPage() {
  return (
    <>
      <JsonLd data={webPageSchema} />
      <SiteHeader />
      <main id="main" className="flex-1 bg-white">
        <div className="bg-brand-surface-warm">
          <Breadcrumbs
            trail={[{ label: "Home", href: "/" }, { label: "Reviews" }]}
          />
          <div className="mx-auto max-w-7xl px-4 pb-12 pt-4 sm:px-6 lg:px-10 xl:px-12">
            <div className="max-w-3xl">
              <h1 className="text-4xl tracking-tight text-brand-dark sm:text-5xl">
                Red Carpet Plumbing Reviews in Las Vegas, NV
              </h1>
              <p className="mt-6 text-base leading-7 text-brand-dark/80 sm:text-lg sm:leading-8">
                These are reviews Las Vegas customers have posted about Red
                Carpet Plumbing on Google. They are shown here as written, with
                spelling and punctuation left as the customer wrote them. We
                show selected five-star reviews on this page. You can read every
                review, including all ratings, on our Google Business Profile.
              </p>
              {GOOGLE_PROFILE_URL ? (
                <p className="mt-4">
                  <a
                    href={GOOGLE_PROFILE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={TEXT_LINK_CLASS}
                    aria-label="See all reviews on Google (opens in a new tab)"
                  >
                    See all reviews on Google
                  </a>
                </p>
              ) : null}
            </div>
            <div className="mt-8 max-w-3xl rounded-r-xl border-l-4 border-brand-primary bg-white p-6 sm:p-8">
              <p className="text-base leading-7 text-brand-dark/80">
                Red Carpet Plumbing is a licensed plumbing company serving Las
                Vegas, NV. Customers who review the company on Google describe
                water heater replacements, leak repairs, drain problems, faucet
                and toilet work, and emergency calls.
              </p>
            </div>
          </div>
        </div>

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
            <h2 className={H2_CLASS}>What Customers Say About Red Carpet Plumbing</h2>
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {reviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          </div>
        </section>

        {serviceLinks.length > 0 ? (
          <section className="bg-brand-surface-warm">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
              <h2 className={H2_CLASS}>Plumbing Jobs Customers Mention</h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-brand-dark/80">
                Customers wrote about many kinds of plumbing work. Here are the
                services they mention most, with a link to each service page.
              </p>
              <ul className="mt-8 grid grid-cols-1 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
                {serviceLinks.map((service) => (
                  <li key={service.route}>
                    <Link
                      href={`${service.route}/`}
                      className="flex min-h-11 items-center py-1 text-base leading-6 text-brand-dark underline underline-offset-2 hover:text-brand-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
                    >
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ) : null}

        {GOOGLE_REVIEW_URL ? (
          <section className="bg-white">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
              <h2 className={H2_CLASS}>Leave a Google Review</h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-brand-dark/80">
                Worked with Red Carpet Plumbing? Your review helps other Las
                Vegas homeowners choose a plumber.
              </p>
              <div className="mt-8">
                <a
                  href={GOOGLE_REVIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Leave a Google review (opens in a new tab)"
                  className="inline-flex min-h-12 items-center justify-center rounded-lg bg-brand-primary px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-brand-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
                >
                  Leave a Google review
                </a>
              </div>
            </div>
          </section>
        ) : null}

        <section className="bg-brand-primary text-white">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-14 lg:px-10 lg:py-24 xl:px-12">
            <div className="min-w-0">
              <h2 className="text-3xl tracking-tight text-white sm:text-4xl lg:text-5xl">
                Need a Plumber in Las Vegas?
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/90 sm:text-xl">
                Call Red Carpet Plumbing or send a quote request and we will
                follow up about your plumbing issue.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button href="tel:+17025679172" variant="inverse" size="xl">
                  Call (702) 567-9172
                </Button>
                <Button href="/contact/" variant="inverse-outline" size="xl">
                  Request a Quote
                </Button>
              </div>
            </div>
            <div className="min-w-0 rounded-2xl bg-white p-6 text-brand-dark shadow-sm sm:p-8 lg:max-w-xl lg:justify-self-end">
              <p className="text-base font-semibold">Red Carpet Plumbing</p>
              <p className="mt-3 text-base leading-7">
                <a
                  href="tel:+17025679172"
                  className="font-semibold underline underline-offset-4 hover:text-brand-primary"
                >
                  (702) 567-9172
                </a>
              </p>
              <address className="mt-3 text-base not-italic leading-7 text-brand-dark/80">
                3330 W. Hacienda Ave Ste. 405
                <br />
                Las Vegas, NV 89118
              </address>
              <p className="mt-3 text-base leading-7 text-brand-dark/80">
                24/7 emergency plumbing available
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />

      {/* Spacer so the fixed sticky mobile CTA never covers footer content. */}
      <div className="h-16 lg:hidden" aria-hidden="true" />

      <StickyMobileCTA />
    </>
  );
}
