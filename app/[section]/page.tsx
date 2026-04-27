import { notFound } from "next/navigation";
import LandingPage from "@/components/LandingPage";
import { isSectionSlug, sectionSlugs } from "@/lib/section-routes";

type SectionPageProps = {
  params: Promise<{
    section: string;
  }>;
};

export function generateStaticParams() {
  return sectionSlugs.map((section) => ({ section }));
}

export default async function SectionPage({ params }: SectionPageProps) {
  const { section } = await params;

  if (!isSectionSlug(section)) {
    notFound();
  }

  return <LandingPage />;
}
