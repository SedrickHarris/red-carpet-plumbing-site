import type { Review } from "@/lib/reviews";

// Decorative stars. The accessible rating is the sr-only line in the card, so
// the SVGs are hidden from assistive technology. The fill is the brand red
// token (#981C1E), which measures 8.6:1 against the white card.
function Stars() {
  return (
    <div aria-hidden="true" className="flex gap-1 text-brand-primary">
      {[0, 1, 2, 3, 4].map((n) => (
        <svg
          key={n}
          viewBox="0 0 20 20"
          className="h-5 w-5 flex-none"
          fill="currentColor"
          focusable="false"
        >
          <path d="M10 1.5l2.6 5.5 6 .8-4.4 4.2 1.1 5.9L10 15l-5.3 2.9 1.1-5.9L1.4 7.8l6-.8L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

type ReviewCardProps = {
  review: Pick<Review, "displayName" | "text">;
};

// Review text is customer data and is rendered exactly as stored. No headings,
// dates, avatars, or logos live inside the card.
export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border-t-4 border-brand-primary bg-white p-6 shadow-sm ring-1 ring-brand-dark/10 sm:p-7">
      <Stars />
      <p className="sr-only">5 out of 5 stars</p>
      <blockquote className="mt-4 grow">
        <p className="text-base leading-7 text-brand-dark">{review.text}</p>
      </blockquote>
      <figcaption className="mt-5 flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 border-t border-brand-dark/10 pt-4 text-sm">
        <cite className="font-semibold not-italic text-brand-dark">
          {review.displayName}
        </cite>
        <span className="text-brand-muted">Google review</span>
      </figcaption>
    </figure>
  );
}
