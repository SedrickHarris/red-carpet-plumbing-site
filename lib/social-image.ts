// Shared Open Graph image for every page that defines its own `openGraph` object.
//
// Next.js replaces a parent's `openGraph` with a child's rather than merging, so the
// file-based app/opengraph-image.jpg only reaches routes without their own openGraph.
// Pages pass this array as `openGraph.images`. The relative url resolves against
// `metadataBase` in app/layout.tsx. The alt must match app/opengraph-image.alt.txt.
export const OG_IMAGES = [
  {
    url: "/opengraph-image.jpg",
    width: 1200,
    height: 630,
    alt: "Red Carpet Plumbing logo",
  },
];
