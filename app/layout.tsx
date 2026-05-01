import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Himnex Solutions — Scalable Software & Web Development",
  description:
    "Himnex Solutions builds scalable software and web applications for global businesses. Premium development services from Nepal — serving clients worldwide.",
  keywords: [
    "software development",
    "web development",
    "Nepal software company",
    "custom software",
    "API development",
    "Next.js development",
    "Himnex Solutions",
  ],
  authors: [{ name: "Himnex Solutions" }],
  creator: "Himnex Solutions",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://himnexsolutions.com",
    title: "Himnex Solutions — Scalable Software & Web Development",
    description:
      "Premium software and web development services for global businesses. Built from Nepal, trusted worldwide.",
    siteName: "Himnex Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Himnex Solutions — Scalable Software & Web Development",
    description:
      "Premium software and web development services for global businesses.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-white text-[#111827]`}>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
