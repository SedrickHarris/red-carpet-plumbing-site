import type { MetadataRoute } from "next";
import routeManifest from "@/docs/seo/route-manifest.json";

export const dynamic = "force-static";

const BASE_URL = "https://redcarpetplumbing.com";

// Never listed, whatever the manifest contains. A thank-you page is a
// conversion confirmation, not indexable content.
const EXCLUDED_ROUTES = new Set(["/thank-you"]);

// Strip the domain and any trailing slash so a curated `url` and a manifest
// `route` compare as the same key. The root stays "/".
function toRoutePath(url: string): string {
  const path = url.startsWith(BASE_URL) ? url.slice(BASE_URL.length) : url;
  if (path === "" || path === "/") return "/";
  return path.endsWith("/") ? path.slice(0, -1) : path;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Curated entries keep their hand-tuned priority and changeFrequency.
  // Order here is preserved in the output.
  const curated: MetadataRoute.Sitemap = [
    {
      url: "https://redcarpetplumbing.com/",
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: "https://redcarpetplumbing.com/about/",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://redcarpetplumbing.com/plumbing-services/",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://redcarpetplumbing.com/service-areas/",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://redcarpetplumbing.com/las-vegas-plumbing-services/",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://redcarpetplumbing.com/henderson-plumbing-services/",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://redcarpetplumbing.com/north-las-vegas-plumbing-services/",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://redcarpetplumbing.com/paradise-plumbing-services/",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://redcarpetplumbing.com/summerlin-plumbing-services/",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://redcarpetplumbing.com/spring-valley-plumbing-services/",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://redcarpetplumbing.com/enterprise-plumbing-services/",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://redcarpetplumbing.com/boulder-city-plumbing-services/",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://redcarpetplumbing.com/green-valley-plumbing-services/",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://redcarpetplumbing.com/lake-las-vegas-plumbing-services/",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://redcarpetplumbing.com/north-las-vegas/aliante-area-plumbing/",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://redcarpetplumbing.com/contact/",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://redcarpetplumbing.com/emergency-plumbing/",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://redcarpetplumbing.com/drain-cleaning/",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://redcarpetplumbing.com/leak-detection-repair/",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://redcarpetplumbing.com/water-heater-repair-installation/",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://redcarpetplumbing.com/slab-leak-detection-repair/",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://redcarpetplumbing.com/sewer-line-services/",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://redcarpetplumbing.com/repiping/",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://redcarpetplumbing.com/gas-line-plumbing/",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://redcarpetplumbing.com/commercial-plumbing/",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://redcarpetplumbing.com/toilet-repair-installation/",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://redcarpetplumbing.com/faucet-sink-repair-installation/",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://redcarpetplumbing.com/garbage-disposal-repair-installation/",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://redcarpetplumbing.com/backflow-prevention/",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://redcarpetplumbing.com/video-camera-plumbing-inspections/",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://redcarpetplumbing.com/plumbing-fixture-repair-replacement-installation/",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://redcarpetplumbing.com/trenchless-piping/",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://redcarpetplumbing.com/water-pipe-repair-replacement/",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://redcarpetplumbing.com/water-meter-pressure-regulator-services/",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  // Everything else in the manifest is generated. Dedupe on the normalized
  // route path rather than the full URL string: the curated Aliante hub
  // (/north-las-vegas/aliante-area-plumbing) and the Aliante sub-location
  // pages (/north-las-vegas/aliante-area/*) differ only in path shape and
  // must not collide.
  const seen = new Set(curated.map((entry) => toRoutePath(entry.url)));

  const generated: MetadataRoute.Sitemap = routeManifest.routes
    .map((entry) => entry.route)
    .filter((route) => {
      if (EXCLUDED_ROUTES.has(route) || seen.has(route)) return false;
      seen.add(route);
      return true;
    })
    .sort((a, b) => a.localeCompare(b))
    .map((route) => ({
      url: `${BASE_URL}${route}/`,
      lastModified,
      changeFrequency: "monthly" as const,
      // Sub-location pages (/city/area/service) sit one level below the
      // standard location-service pages (/city/service).
      priority: route.split("/").filter(Boolean).length > 2 ? 0.55 : 0.6,
    }));

  return [...curated, ...generated];
}
