export const sectionRoutes = {
  services: "services",
  portfolio: "portfolio",
  "why-us": "why-us",
  testimonials: "testimonials",
  "global-reach": "global-reach",
  contact: "contact",
} as const;

export type SectionSlug = keyof typeof sectionRoutes;

export const sectionSlugs = Object.keys(sectionRoutes) as SectionSlug[];

export function isSectionSlug(slug: string): slug is SectionSlug {
  return slug in sectionRoutes;
}

export function getSectionIdFromPath(pathname: string) {
  const slug = pathname.split("/").filter(Boolean)[0];

  if (!slug || !isSectionSlug(slug)) {
    return null;
  }

  return sectionRoutes[slug];
}
