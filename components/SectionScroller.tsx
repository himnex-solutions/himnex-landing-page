"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { getSectionIdFromPath, isSectionSlug } from "@/lib/section-routes";

const HEADER_OFFSET = 88;

function scrollToSection(sectionId: string) {
  const section = document.getElementById(sectionId);

  if (!section) {
    return;
  }

  const top =
    section.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;

  window.scrollTo({
    top: Math.max(top, 0),
    behavior: "smooth",
  });
}

export default function SectionScroller() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const legacyHash = window.location.hash.slice(1);

    if (isSectionSlug(legacyHash)) {
      router.replace(`/${legacyHash}`, { scroll: false });
      return;
    }

    const sectionId = getSectionIdFromPath(pathname);

    if (!sectionId) {
      return;
    }

    const animationFrame = window.requestAnimationFrame(() => {
      scrollToSection(sectionId);
    });
    const layoutSettledScroll = window.setTimeout(() => {
      scrollToSection(sectionId);
    }, 160);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.clearTimeout(layoutSettledScroll);
    };
  }, [pathname, router]);

  return null;
}
