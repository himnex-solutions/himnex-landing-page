import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";
import StructuredData from "@/components/StructuredData";
import { createPageMetadata } from "@/lib/seo";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = createPageMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sora.className} ${sora.variable} antialiased bg-white text-[#111827]`}>
        <StructuredData />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
