import routeManifest from "@/docs/seo/route-manifest.json";

// Link groups for the HTML sitemap page at /sitemap/. Everything is derived from
// docs/seo/route-manifest.json so the page cannot drift from the real routes.
// A route that fits no group, or a slug missing from the maps below, throws at
// build time. Nothing is silently dropped and no label is invented.

export type SitemapLink = { href: string; label: string };

export type CityGroup = {
  city: string;
  links: SitemapLink[];
  // Only North Las Vegas has a nested Aliante Area group.
  aliante?: SitemapLink[];
};

export type SitemapPageData = {
  main: SitemapLink[];
  services: SitemapLink[];
  hubs: SitemapLink[];
  cities: CityGroup[];
  legal: SitemapLink[];
};

// Not listed on the page: the page itself and the conversion confirmation.
const EXCLUDED_ROUTES = new Set(["/thank-you", "/sitemap"]);

const MAIN_PAGES: SitemapLink[] = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/plumbing-services/", label: "Plumbing Services" },
  { href: "/service-areas/", label: "Service Areas" },
  { href: "/contact/", label: "Contact" },
];

const LEGAL_PAGES: SitemapLink[] = [
  { href: "/privacy-policy/", label: "Privacy Policy" },
  { href: "/terms-and-conditions/", label: "Terms and Conditions" },
];

// Slug to label, in display order.
const SERVICES: ReadonlyArray<readonly [string, string]> = [
  ["emergency-plumbing", "Emergency Plumbing"],
  ["drain-cleaning", "Drain Cleaning"],
  ["leak-detection-repair", "Leak Detection and Repair"],
  ["water-heater-repair-installation", "Water Heater Repair and Installation"],
  ["slab-leak-detection-repair", "Slab Leak Detection and Repair"],
  ["sewer-line-services", "Sewer Line Services"],
  ["repiping", "Repiping"],
  ["water-pipe-repair-replacement", "Water Pipe Repair and Replacement"],
  ["gas-line-plumbing", "Gas Line Plumbing"],
  ["commercial-plumbing", "Commercial Plumbing"],
  ["toilet-repair-installation", "Toilet Repair and Installation"],
  ["faucet-sink-repair-installation", "Faucet and Sink Repair and Installation"],
  [
    "garbage-disposal-repair-installation",
    "Garbage Disposal Repair and Installation",
  ],
  ["backflow-prevention", "Backflow Prevention"],
  ["video-camera-plumbing-inspections", "Video Camera Plumbing Inspections"],
  [
    "plumbing-fixture-repair-replacement-installation",
    "Plumbing Fixture Repair, Replacement and Installation",
  ],
  ["trenchless-piping", "Trenchless Piping"],
  [
    "water-meter-pressure-regulator-services",
    "Water Meter and Pressure Regulator Services",
  ],
];

// Slug to city name, in display order.
const CITIES: ReadonlyArray<readonly [string, string]> = [
  ["las-vegas", "Las Vegas"],
  ["henderson", "Henderson"],
  ["north-las-vegas", "North Las Vegas"],
  ["paradise", "Paradise"],
  ["summerlin", "Summerlin"],
  ["spring-valley", "Spring Valley"],
  ["enterprise", "Enterprise"],
  ["boulder-city", "Boulder City"],
  ["green-valley", "Green Valley"],
  ["lake-las-vegas", "Lake Las Vegas"],
];

const ALIANTE_HUB_ROUTE = "/north-las-vegas/aliante-area-plumbing";
const ALIANTE_PREFIX = "/north-las-vegas/aliante-area/";
const HUB_SUFFIX = "-plumbing-services";

const serviceLabel = new Map(SERVICES);
const cityName = new Map(CITIES);

const href = (route: string) => (route === "/" ? "/" : `${route}/`);

function fail(route: string, needs: string): never {
  throw new Error(
    `sitemap-page-data: route "${route}" is not covered. ${needs} in lib/sitemap-page-data.ts.`,
  );
}

export function getSitemapPageData(): SitemapPageData {
  const routes = new Set(
    routeManifest.routes
      .map((r) => r.route)
      .filter((route) => !EXCLUDED_ROUTES.has(route)),
  );

  const mainRoutes = new Set(MAIN_PAGES.map((l) => l.href.replace(/(.)\/$/, "$1")));
  const legalRoutes = new Set(LEGAL_PAGES.map((l) => l.href.replace(/\/$/, "")));

  const serviceRoutes = new Set<string>();
  const hubRoutes = new Set<string>();
  const cityLinks = new Map<string, Set<string>>();
  const alianteRoutes = new Set<string>();

  for (const route of routes) {
    const segments = route.split("/").filter(Boolean);

    if (mainRoutes.has(route) || legalRoutes.has(route)) continue;

    if (route === ALIANTE_HUB_ROUTE) {
      hubRoutes.add(route);
      continue;
    }

    if (segments.length === 1) {
      const [slug] = segments;
      if (serviceLabel.has(slug)) {
        serviceRoutes.add(route);
      } else if (slug.endsWith(HUB_SUFFIX)) {
        const citySlug = slug.slice(0, -HUB_SUFFIX.length);
        if (!cityName.has(citySlug)) {
          fail(route, `Add the city slug "${citySlug}" to the CITIES map`);
        }
        hubRoutes.add(route);
      } else {
        fail(
          route,
          `Add the slug "${slug}" to the SERVICES map, or to MAIN_PAGES or LEGAL_PAGES`,
        );
      }
      continue;
    }

    if (route.startsWith(ALIANTE_PREFIX) && segments.length === 3) {
      const slug = segments[2];
      if (!serviceLabel.has(slug)) {
        fail(route, `Add the service slug "${slug}" to the SERVICES map`);
      }
      alianteRoutes.add(route);
      continue;
    }

    if (segments.length === 2) {
      const [citySlug, slug] = segments;
      if (!cityName.has(citySlug)) {
        fail(route, `Add the city slug "${citySlug}" to the CITIES map`);
      }
      if (!serviceLabel.has(slug)) {
        fail(route, `Add the service slug "${slug}" to the SERVICES map`);
      }
      let set = cityLinks.get(citySlug);
      if (!set) {
        set = new Set();
        cityLinks.set(citySlug, set);
      }
      set.add(route);
      continue;
    }

    fail(route, "Add a group for this route shape");
  }

  for (const link of [...MAIN_PAGES, ...LEGAL_PAGES]) {
    const route = link.href === "/" ? "/" : link.href.replace(/\/$/, "");
    if (!routes.has(route)) {
      fail(route, "This page is listed in MAIN_PAGES or LEGAL_PAGES but missing from the route manifest");
    }
  }

  const services: SitemapLink[] = SERVICES.filter(([slug]) =>
    serviceRoutes.has(`/${slug}`),
  ).map(([slug, label]) => ({ href: href(`/${slug}`), label }));

  const hubs: SitemapLink[] = [
    ...CITIES.filter(([slug]) => hubRoutes.has(`/${slug}${HUB_SUFFIX}`)).map(
      ([slug, name]) => ({ href: href(`/${slug}${HUB_SUFFIX}`), label: name }),
    ),
    ...(hubRoutes.has(ALIANTE_HUB_ROUTE)
      ? [{ href: href(ALIANTE_HUB_ROUTE), label: "Aliante Area" }]
      : []),
  ];

  const cities: CityGroup[] = CITIES.map(([citySlug, name]) => {
    const group: CityGroup = {
      city: name,
      links: SERVICES.filter(([slug]) =>
        cityLinks.get(citySlug)?.has(`/${citySlug}/${slug}`),
      ).map(([slug, label]) => ({
        href: href(`/${citySlug}/${slug}`),
        label: `${label} in ${name}`,
      })),
    };
    if (citySlug === "north-las-vegas") {
      group.aliante = SERVICES.filter(([slug]) =>
        alianteRoutes.has(`${ALIANTE_PREFIX}${slug}`),
      ).map(([slug, label]) => ({
        href: href(`${ALIANTE_PREFIX}${slug}`),
        label: `${label} in Aliante Area`,
      }));
    }
    return group;
  });

  // Every route must land in exactly one group.
  const listed =
    MAIN_PAGES.length +
    LEGAL_PAGES.length +
    services.length +
    hubs.length +
    cities.reduce((n, c) => n + c.links.length + (c.aliante?.length ?? 0), 0);
  if (listed !== routes.size) {
    throw new Error(
      `sitemap-page-data: ${routes.size} routes in the manifest but ${listed} links built. A route was dropped or counted twice.`,
    );
  }

  return {
    main: MAIN_PAGES,
    services,
    hubs,
    cities,
    legal: LEGAL_PAGES,
  };
}
