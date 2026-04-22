"use client";

import Image from "next/image";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

// Brand SVG icons (Lucide removed Github/Linkedin/Twitter in newer versions)
function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function TwitterXIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

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
    icon: TwitterXIcon,
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
