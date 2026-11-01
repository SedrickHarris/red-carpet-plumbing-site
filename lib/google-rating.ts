// Single source for the Google Business Profile rating used in JSON-LD.
// Verified on the Google Business Profile: 4.8 rating, 81 Google reviews.
// Attach only to the top-level Plumber (LocalBusiness) node, and only on pages
// that visibly show the rating. Never nest it inside provider or other objects.
export const GOOGLE_RATING = {
  ratingValue: 4.8,
  reviewCount: 81,
  bestRating: 5,
  worstRating: 1,
} as const;

export const GOOGLE_AGGREGATE_RATING = {
  "@type": "AggregateRating",
  ...GOOGLE_RATING,
} as const;
