import { execFileSync } from "node:child_process";
import type { MetadataRoute } from "next";
import routeManifest from "@/docs/seo/route-manifest.json";

export const dynamic = "force-static";

const BASE_URL = "https://redcarpetplumbing.com";

// Never listed, whatever the manifest contains. A thank-you page is a
// conversion confirmation, not indexable content.
const EXCLUDED_ROUTES = new Set(["/thank-you"]);

// Listed first, in this order. Everything else follows alphabetically, so the
// output only changes when a route or a file date really changes.
const CORE_ROUTES = [
  "/",
  "/about",
  "/plumbing-services",
  "/service-areas",
  "/contact",
];

// Last commit date per source file. lastModified reflects the page file only,
// not shared components such as HeroSection or SiteHeader, so it is a
// conservative signal: a shared change does not bump every page. The date is
// omitted when git cannot answer (no git binary, shallow clone, untracked
// file). It is never replaced with the build time, which would change every
// URL on every build.
const dateCache = new Map<string, string | undefined>();

function lastCommitDate(sourceFile: string): string | undefined {
  if (dateCache.has(sourceFile)) return dateCache.get(sourceFile);
  let date: string | undefined;
  try {
    const out = execFileSync(
      "git",
      ["log", "-1", "--format=%cI", "--", sourceFile],
      { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] },
    ).trim();
    date = out === "" ? undefined : out;
  } catch {
    date = undefined;
  }
  dateCache.set(sourceFile, date);
  return date;
}

function toUrl(route: string): string {
  return route === "/" ? `${BASE_URL}/` : `${BASE_URL}${route}/`;
}

function sortRoutes(a: string, b: string): number {
  const ai = CORE_ROUTES.indexOf(a);
  const bi = CORE_ROUTES.indexOf(b);
  if (ai !== -1 || bi !== -1) {
    if (ai === -1) return 1;
    if (bi === -1) return -1;
    return ai - bi;
  }
  return a < b ? -1 : a > b ? 1 : 0;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries = routeManifest.routes
    .filter((r) => !EXCLUDED_ROUTES.has(r.route))
    .sort((a, b) => sortRoutes(a.route, b.route));

  const result: MetadataRoute.Sitemap = entries.map((r) => {
    const lastModified = lastCommitDate(r.sourceFile);
    return lastModified
      ? { url: toUrl(r.route), lastModified }
      : { url: toUrl(r.route) };
  });

  const undated = result.filter((e) => e.lastModified === undefined).length;
  if (result.length > 0 && undated / result.length > 0.5) {
    console.warn(
      `sitemap: ${undated} of ${result.length} URLs have no lastModified. ` +
        "Git history is probably unavailable, for example a shallow clone. " +
        "The build continues without those dates.",
    );
  }

  return result;
}
