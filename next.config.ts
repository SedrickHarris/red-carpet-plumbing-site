import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export required for Cloudflare Pages static deployment.
  // Produces an `out/` directory at `next build` time.
  output: "export",
  trailingSlash: true,
  // Required when `output: "export"` is set — Next.js Image Optimization
  // is a runtime feature and cannot run in a static export.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
