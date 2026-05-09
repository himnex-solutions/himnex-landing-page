import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LandingPage from "@/components/LandingPage";
import { isSectionSlug, sectionSlugs } from "@/lib/section-routes";
import { createPageMetadata, sectionSeo } from "@/lib/seo";

type SectionPageProps = {
  params: Promise<{
    section: string;
  }>;
};

export function generateStaticParams() {
  return sectionSlugs.map((section) => ({ section }));
}

export async function generateMetadata({
  params,
}: SectionPageProps): Promise<Metadata> {
  const { section } = await params;

  if (!isSectionSlug(section)) {
    return {};
  }

  const seo = sectionSeo[section];

  return createPageMetadata({
    title: seo.title,
    description: seo.description,
    path: seo.path,
  });
}

export default async function SectionPage({ params }: SectionPageProps) {
  const { section } = await params;

  if (!isSectionSlug(section)) {
    notFound();
  }

  return <LandingPage />;
}
