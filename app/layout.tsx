import type { Metadata, Viewport } from "next";
import { Sora } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";
import StructuredData from "@/components/StructuredData";
import { createPageMetadata } from "@/lib/seo";

const GA_ID = "G-9ETJE0JRMC";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = createPageMetadata();

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#111827" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-NP">
      <body className={`${sora.className} ${sora.variable} antialiased bg-white text-[#111827]`}>
        <StructuredData />
        {children}
        <ScrollToTop />

        {/* Google Analytics 4 */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', { page_path: window.location.pathname });
          `}
        </Script>
      </body>
    </html>
  );
}
