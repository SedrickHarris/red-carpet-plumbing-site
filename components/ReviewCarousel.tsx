import Link from "next/link";
import { ReviewCard } from "@/components/ReviewCard";
import { ReviewCarouselController } from "@/components/ReviewCarouselController";
import { carouselReviews } from "@/lib/reviews";

// Homepage review section. The cards render on the server, so every review is
// in the HTML on first load. Only the controls and timer are client code.
export function ReviewCarousel() {
  return (
    <section className="bg-brand-surface-warm">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
        <div className="max-w-3xl text-left">
          <h2 className="text-3xl tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
            What Las Vegas Customers Say About Red Carpet Plumbing
          </h2>
          <p className="mt-6 text-lg leading-8 text-brand-dark/80">
            Selected reviews customers posted on Google, shown as written.
          </p>
        </div>

        <div className="mt-12">
          <ReviewCarouselController
            slides={carouselReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          />
        </div>

        <p className="mt-10">
          <Link
            href="/reviews/"
            className="inline-flex min-h-11 items-center text-base font-semibold text-brand-primary underline underline-offset-4 hover:text-brand-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
          >
            Read all reviews
          </Link>
        </p>
      </div>
    </section>
  );
}
