import type { MetadataRoute } from "next";

// Static export: this must be prerendered at build time, same as sitemap.ts.
export const dynamic = "force-static";

// Every value here is reused from something already established in the
// codebase rather than newly written:
//   name / short_name  -> the root layout title and the siteName used in every
//                         page's openGraph block ("Red Carpet Plumbing").
//   description        -> the root layout metadata description, verbatim.
//   theme_color        -> --color-brand-primary (#981C1E) from globals.css.
//   background_color   -> --color-brand-surface (#FFFFFF), the page background
//                         every layout actually renders on.
// The 192 and 512 icons are the existing android-chrome files. Note that
// site-icon-512x512.png is byte-identical to android-chrome-512x512.png, so
// only one is referenced.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Red Carpet Plumbing",
    short_name: "Red Carpet Plumbing",
    description:
      "Trusted plumbing services in Las Vegas, NV and surrounding Clark County communities.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#981C1E",
    icons: [
      {
        src: "/images/brand/favicon/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/brand/favicon/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
