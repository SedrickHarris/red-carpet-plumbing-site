import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: "https://redcarpetplumbing.com/",
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
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
      url: "https://redcarpetplumbing.com/re-piping/",
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
}
