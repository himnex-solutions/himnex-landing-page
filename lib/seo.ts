import type { Metadata } from "next";

export const siteUrl = "https://www.himnexsolutions.com";
export const siteName = "Himnex Solutions";
export const defaultTitle =
  "Software Development Company in Nepal | Himnex Solutions";
export const defaultDescription =
  "Himnex Solutions is a top software development company in Nepal — building custom web apps, SaaS platforms, APIs, mobile apps, and cloud systems for Nepali and international clients.";

export const seoKeywords = [
  "software development company in Nepal",
  "custom software development Nepal",
  "web development company Nepal",
  "hire software developers in Nepal",
  "Nepal software outsourcing company",
  "software company Kathmandu",
  "software company Lalitpur",
  "SaaS development Nepal",
  "Next.js development Nepal",
  "React development Nepal",
  "API development Nepal",
  "mobile app development Nepal",
  "cloud DevOps Nepal",
  "best software company in Nepal",
  "affordable software development Nepal",
  "Himnex Solutions",
];

export const sectionSeo = {
  services: {
    title: "Software Development Services in Nepal | Himnex Solutions",
    description:
      "Explore Himnex Solutions services: custom software, web development, SaaS platforms, mobile apps, secure APIs, and cloud DevOps from Nepal for global teams.",
    path: "/services",
  },
  process: {
    title: "Software Development Process | Himnex Solutions Nepal",
    description:
      "See how Himnex Solutions plans, designs, builds, tests, launches, and supports custom software projects for Nepali and international clients.",
    path: "/process",
  },
  "tech-stack": {
    title: "Modern Web, API, Mobile, and Cloud Tech Stack | Himnex",
    description:
      "Himnex Solutions builds with modern technologies including Next.js, React, TypeScript, Node.js, cloud platforms, and production-grade tooling.",
    path: "/tech-stack",
  },
  portfolio: {
    title: "Software Projects Built from Nepal | Himnex Portfolio",
    description:
      "Review software, ecommerce, SaaS, fintech, and web application projects delivered by Himnex Solutions for clients in Nepal and worldwide.",
    path: "/portfolio",
  },
  "why-us": {
    title: "Why Hire Himnex Solutions | Nepal Software Company",
    description:
      "Learn why startups, SMEs, and international teams hire Himnex Solutions for clear communication, scalable code, and reliable delivery from Nepal.",
    path: "/why-us",
  },
  testimonials: {
    title: "Client Reviews | Himnex Software Development Nepal",
    description:
      "Read client feedback from businesses that worked with Himnex Solutions on web applications, SaaS products, backend systems, and software platforms.",
    path: "/testimonials",
  },
  "global-reach": {
    title: "Software Development from Nepal for Global Clients | Himnex",
    description:
      "Himnex Solutions serves clients in Nepal, the United States, United Kingdom, Australia, Singapore, Germany, Canada, and other international markets.",
    path: "/global-reach",
  },
  faq: {
    title: "Software Development FAQ | Himnex Solutions Nepal",
    description:
      "Answers about software project timelines, source-code ownership, international collaboration, support, NDAs, and project estimates.",
    path: "/faq",
  },
  contact: {
    title: "Contact Himnex Solutions | Hire Software Developers in Nepal",
    description:
      "Contact Himnex Solutions to discuss a website, web app, SaaS platform, mobile app, API, or cloud project with a Nepal-based software team.",
    path: "/contact",
  },
} as const;

export type SeoSectionSlug = keyof typeof sectionSeo;

export function createPageMetadata({
  title = defaultTitle,
  description = defaultDescription,
  path = "/",
}: {
  title?: string;
  description?: string;
  path?: string;
} = {}): Metadata {
  const url = new URL(path, siteUrl).toString();
  const canonicalUrl = `${siteUrl}${path === "/" ? "" : path}`;

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    keywords: seoKeywords,
    authors: [{ name: siteName, url: siteUrl }],
    creator: siteName,
    publisher: siteName,
    applicationName: siteName,
    generator: "Next.js",
    referrer: "origin-when-cross-origin",
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "en-US": canonicalUrl,
        "en-NP": canonicalUrl,
        "ne-NP": canonicalUrl,
        "x-default": canonicalUrl,
      },
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      alternateLocale: ["en_NP", "ne_NP"],
      url,
      title,
      description,
      siteName,
      images: [
        {
          url: "/images/og_banner.png",
          width: 1200,
          height: 630,
          alt: "Himnex Solutions — Software Development Company in Nepal",
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      site: "@himnexsolutions",
      creator: "@himnexsolutions",
      images: ["/images/og_banner.png"],
    },
    category: "technology",
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

