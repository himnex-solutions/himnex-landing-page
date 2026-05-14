import type { NextConfig } from "next";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = dirname(fileURLToPath(import.meta.url));

const sectionSlugs = [
  "services",
  "process",
  "tech-stack",
  "portfolio",
  "why-us",
  "testimonials",
  "global-reach",
  "faq",
  "contact",
] as const;

const nextConfig: NextConfig = {
  turbopack: {
    root: projectRoot,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
    ],
  },
  async redirects() {
    return [
      // Canonicalise: www → non-www (permanent 308)
      {
        source: "/:path*",
        has: [{ type: "host" as const, value: "www.himnexsolutions.com" }],
        destination: "https://himnexsolutions.com/:path*",
        permanent: true,
      },
      // Section slugs → home-page hash anchors (permanent 308)
      // These routes render identical content to "/" so they are scroll anchors,
      // not independent pages. Redirecting prevents Google from flagging them as
      // duplicate content and consolidates all authority to the home page.
      ...sectionSlugs.map((slug) => ({
        source: `/${slug}`,
        destination: `/#${slug}`,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
