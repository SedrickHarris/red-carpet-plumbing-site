import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

// This page deliberately does not use HeroSection. That component assumes a
// marketing hero shape (breadcrumbs, trust strip, dual CTAs, optional form
// slot) that does not belong on a post-form confirmation page. What is copied
// here is only its background treatment: an aria-hidden absolutely-positioned
// Image plus the same flat bg-brand-charcoal/65 scrim, so this page matches
// every other scrimmed section on the site without inheriting hero structure.
// Text colors below were switched from the dark-on-white originals to the
// white-on-scrim values HeroSection uses, since the copy now sits on charcoal.

export const metadata: Metadata = {
  title: "Thank You | Red Carpet Plumbing",
  description:
    "Your plumbing service request has been received. Red Carpet Plumbing will be in touch shortly.",
  robots: { index: false, follow: false },
};

export default function ThankYou() {
  return (
    <>
      <SiteHeader />

      <main id="main" className="flex-1 bg-white">
        <section className="relative isolate overflow-hidden bg-brand-charcoal">
          <div className="absolute inset-0 -z-10" aria-hidden="true">
            <Image
              src="/images/company/thank-you/red-carpet-plumbing-las-vegas-service-request-thank-you.webp"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            {/* Same flat scrim value every other scrimmed section uses, so text
                contrast here is predictable rather than image-dependent. */}
            <div className="absolute inset-0 bg-brand-charcoal/65" />
          </div>
          <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6 sm:py-32 lg:px-10">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-9 w-9 text-emerald-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.25}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12.5l4.5 4.5L19 7.5"
                  />
                </svg>
              </div>

              <h1 className="mt-8 text-4xl tracking-tight text-white sm:text-5xl">
                Thank You for Contacting Red Carpet Plumbing
              </h1>

              <p className="mt-6 text-lg leading-8 text-white/90">
                We received your request and will be in touch shortly. For
                immediate assistance, call us directly.
              </p>

              <div className="mt-10 flex flex-col items-center gap-4">
                <Button
                  href="tel:+17025679172"
                  variant="inverse-charcoal"
                  size="lg"
                >
                  Call (702) 567-9172
                </Button>

                <Link
                  href="/"
                  className="text-sm font-medium text-white/85 underline-offset-4 transition-colors hover:text-white hover:underline"
                >
                  Return to Home
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
