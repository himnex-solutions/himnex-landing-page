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
      // Section slugs → home-page hash anchors (permanent 308).
      // These routes render identical content to "/" — they are scroll anchors,
      // not independent pages. Redirecting prevents Google from flagging them
      // as duplicate content and consolidates all authority to the home page.
      // NOTE: www→non-www canonicalization is handled in Vercel Domain Settings,
      // NOT here — a Next.js host-based redirect conflicts with Vercel's own
      // domain routing and causes ERR_TOO_MANY_REDIRECTS.
      ...sectionSlugs.map((slug) => ({
        source: `/${slug}`,
        destination: `/#${slug}`,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
