import { defaultDescription, defaultTitle, siteName, siteUrl } from "@/lib/seo";

const services = [
  "Custom software development",
  "Web application development",
  "SaaS product development",
  "Mobile app development",
  "API and backend development",
  "Cloud and DevOps",
];

const faqItems = [
  {
    question: "How long does a typical website or web app take?",
    answer:
      "A professional business website usually takes 2 to 5 weeks. A custom MVP or web application can take 6 to 12+ weeks depending on scope, integrations, and review cycles.",
  },
  {
    question: "Do clients own the source code?",
    answer:
      "Yes. After project completion and final payment, clients receive full ownership of the agreed source code, assets, and deployment documentation.",
  },
  {
    question: "Can you work with international clients?",
    answer:
      "Yes. Himnex Solutions works remotely with teams across time zones using clear milestones, scheduled calls, shared project boards, and written progress updates.",
  },
  {
    question: "Do you provide maintenance after launch?",
    answer:
      "Yes. Himnex Solutions offers ongoing support covering bug fixes, uptime monitoring, backups, content updates, performance improvements, and new feature development.",
  },
  {
    question: "Can you sign an NDA?",
    answer:
      "Yes. Himnex Solutions can sign an NDA before discussing sensitive product details, technical architecture, or business workflows.",
  },
  {
    question: "What do you need to estimate a project?",
    answer:
      "A short brief is enough to start: business goals, key features, target users, preferred timeline, budget range, and any existing design or technical assets.",
  },
];

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#business`,
        name: siteName,
        url: siteUrl,
        image: `${siteUrl}/images/logo.png`,
        logo: `${siteUrl}/images/logo.png`,
        description: defaultDescription,
        telephone: "+9779869100969",
        email: "himnexsolutions.np@gmail.com",
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Imadol",
          addressLocality: "Lalitpur",
          postalCode: "44705",
          addressCountry: "NP",
        },
        areaServed: [
          "Nepal",
          "United States",
          "United Kingdom",
          "Australia",
          "Singapore",
          "Germany",
          "Canada",
          "Netherlands",
        ],
        knowsAbout: services,
        sameAs: [
          "https://linkedin.com/company/himnexsolutions",
          "https://instagram.com/himnexsolutions",
          "https://www.facebook.com/people/Himnex-Solutions/61560646745719/",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: siteName,
        description: defaultTitle,
        publisher: {
          "@id": `${siteUrl}/#business`,
        },
        inLanguage: "en",
      },
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: siteName,
        url: siteUrl,
        logo: `${siteUrl}/images/logo.png`,
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+9779869100969",
          contactType: "sales",
          areaServed: ["NP", "US", "GB", "AU", "SG", "DE", "CA", "NL"],
          availableLanguage: ["English", "Nepali"],
        },
      },
      {
        "@type": "ItemList",
        "@id": `${siteUrl}/#services`,
        name: "Software development services",
        itemListElement: services.map((service, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: service,
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/#faq`,
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
      }}
    />
  );
}
