"use client";

import Image from "next/image";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/icons/brand-icons";

const footerLinks = {
  Services: [
    { label: "Web Development", href: "#services" },
    { label: "Software Development", href: "#services" },
    { label: "Custom Solutions", href: "#services" },
    { label: "API & Backend", href: "#services" },
  ],
  Company: [
    { label: "Our Work", href: "#portfolio" },
    { label: "Why Choose Us", href: "#why-us" },
    { label: "Client Reviews", href: "#testimonials" },
    { label: "Global Reach", href: "#global-reach" },
    { label: "Get a Quote", href: "#contact" },
  ],
};

const socials = [
  {
    icon: GithubIcon,
    href: "https://github.com/himnexsolutions",
    label: "GitHub",
    id: "footer-github",
  },
  {
    icon: LinkedinIcon,
    href: "https://linkedin.com/company/himnexsolutions",
    label: "LinkedIn",
    id: "footer-linkedin",
  },
  {
    icon: XIcon,
    href: "https://x.com/himnexsolutions",
    label: "X (Twitter)",
    id: "footer-twitter",
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
            <a
              href="#"
              className="inline-flex items-center transition-opacity duration-200 hover:opacity-85"
              aria-label="Himnex Solutions home"
            >
              <Image
                src="/images/my-logo.png"
                alt="Himnex Solutions"
                width={250}
                height={99}
                className="h-16 w-auto object-contain"
              />
            </a>

            <p className="text-sm text-[#667085] leading-relaxed max-w-sm">
              Premium software and web development services from Nepal — trusted
              by businesses worldwide. We turn ideas into scalable digital
              products.
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
                Kathmandu 44600, Nepal
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
                    <a
                      href={link.href}
                      className="text-sm text-[#667085] hover:text-[#FF6A00] transition-colors duration-200"
                    >
                      {link.label}
                    </a>
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
            Built with ❤️ in Nepal, serving the world.
          </p>
        </div>
      </div>
    </footer>
  );
}
