import type { MetadataRoute } from "next";
import { sectionSeo, siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...Object.values(sectionSeo).map((section) => ({
      url: `${siteUrl}${section.path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: section.path === "/contact" ? 0.9 : 0.8,
    })),
  ];
}
