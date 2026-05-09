"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "@/components/icons/brand-icons";

const footerLinks = {
  Services: [
    { label: "Web Development in Nepal", href: "/services" },
    { label: "Software Development", href: "/services" },
    { label: "SaaS & Custom Solutions", href: "/services" },
    { label: "API & Backend Development", href: "/services" },
  ],
  Company: [
    { label: "Our Process", href: "/process" },
    { label: "Technology Stack", href: "/tech-stack" },
    { label: "Our Work", href: "/portfolio" },
    { label: "Why Choose Us", href: "/why-us" },
    { label: "Client Reviews", href: "/testimonials" },
    { label: "FAQ", href: "/faq" },
    { label: "Get a Quote", href: "/contact" },
  ],
};

const socials = [
  {
    icon: FacebookIcon,
    href: "https://www.facebook.com/people/Himnex-Solutions/61560646745719/?rdid=0fddHi5xTy58mV30&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CXGegJxs9%2F%3Fref%3D1",
    label: "Facebook",
    id: "footer-facebook",
  },
  {
    icon: LinkedinIcon,
    href: "https://linkedin.com/company/himnexsolutions",
    label: "LinkedIn",
    id: "footer-linkedin",
  },
  {
    icon: InstagramIcon,
    href: "https://instagram.com/himnexsolutions",
    label: "Instagram",
    id: "footer-instagram",
  },
];

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#F7F9FC] border-t border-[#E6E9EF] relative">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />

      {/* Contact & Brand block */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-5">
            <Link
              href="/"
              className="inline-flex items-center transition-opacity duration-200 hover:opacity-85"
              aria-label="Himnex Solutions home"
            >
              <Image
                src="/images/logo.png"
                alt="Himnex Solutions"
                width={250}
                height={99}
                className="h-16 w-auto object-contain"
              />
            </Link>

            <p className="text-sm text-[#667085] leading-relaxed max-w-sm">
              Himnex Solutions is a software development company in Nepal trusted
              by Nepali and international clients for scalable websites, web
              apps, APIs, SaaS products, and mobile apps.
            </p>

            {/* Contact info */}
            <div className="space-y-2.5">
              <a
                href="mailto:himnexsolutions.np@gmail.com"
                id="footer-email"
                className="flex items-center gap-2.5 text-sm text-[#667085] hover:text-[#FF6A00] transition-colors duration-200 group"
              >
                <Mail size={14} className="text-[#FF6A00] flex-shrink-0" />
                himnexsolutions.np@gmail.com
              </a>
              <a
                href="tel:+9779869100969"
                id="footer-phone"
                className="flex items-center gap-2.5 text-sm text-[#667085] hover:text-[#FF6A00] transition-colors duration-200"
              >
                <Phone size={14} className="text-[#FF6A00] flex-shrink-0" />
                +977 9869100969
              </a>
              <a
                href="tel:+9779815253061"
                id="footer-phone-secondary"
                className="flex items-center gap-2.5 text-sm text-[#667085] hover:text-[#FF6A00] transition-colors duration-200"
              >
                <Phone size={14} className="text-[#FF6A00] flex-shrink-0" />
                +977 9815253061
              </a>
              <div className="flex items-center gap-2.5 text-sm text-[#667085]">
                <MapPin size={14} className="text-[#FF6A00] flex-shrink-0" />
                Imadol, Lalitpur 44705, Nepal
              </div>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.id}
                    id={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-9 h-9 rounded-lg border border-[#E6E9EF] bg-white flex items-center justify-center text-[#667085] hover:text-[#FF6A00] hover:border-[#FF6A00]/30 hover:bg-[#FF6A00]/5 transition-all duration-200 shadow-[0_8px_24px_rgba(15,23,42,0.04)]"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
              <a
                href="https://himnexsolutions.com"
                target="_blank"
                rel="noopener noreferrer"
                id="footer-website"
                className="w-9 h-9 rounded-lg border border-[#E6E9EF] bg-white flex items-center justify-center text-[#667085] hover:text-[#FF6A00] hover:border-[#FF6A00]/30 hover:bg-[#FF6A00]/5 transition-all duration-200 shadow-[0_8px_24px_rgba(15,23,42,0.04)]"
                aria-label="Website"
              >
                <ExternalLink size={16} />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading} className="space-y-4">
              <h4 className="text-sm font-bold text-[#111827] tracking-wide">
                {heading}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#667085] hover:text-[#FF6A00] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-[#E6E9EF] flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-[#98A2B3]">
            © {new Date().getFullYear()} Himnex Solutions. All rights reserved.
          </p>
          <p className="text-xs text-[#98A2B3]">
            Built in Nepal, serving the world.
          </p>
        </div>
      </div>
    </footer>
  );
}
