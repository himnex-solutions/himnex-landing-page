"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#portfolio" },
  { label: "Why Us", href: "#why-us" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-[#E6E9EF] shadow-[0_12px_40px_rgba(15,23,42,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#"
            className="flex items-center transition-opacity duration-200 hover:opacity-85"
            aria-label="Himnex Solutions home"
          >
            <Image
              src="/images/my-logo.png"
              alt="Himnex Solutions"
              width={230}
              height={91}
              loading="eager"
              fetchPriority="high"
              className="h-12 w-auto object-contain md:h-14"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#475467] hover:text-[#111827] transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#FF6A00] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              asChild
              variant="ghost"
              className="text-[#475467] hover:text-[#111827] hover:bg-[#F2F4F7] text-sm"
            >
              <a href="#contact">Book a Call</a>
            </Button>
            <Button
              asChild
              className="bg-[#FF6A00] hover:bg-[#ff8533] text-white font-semibold text-sm px-5 transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_14px_30px_rgba(255,106,0,0.25)]"
            >
              <a href="#contact">Get a Quote</a>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-[#475467] hover:text-[#111827] hover:bg-[#F2F4F7] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-b border-[#E6E9EF] shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2.5 text-sm font-medium text-[#475467] hover:text-[#111827] hover:bg-[#F2F4F7] rounded-lg transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex gap-2 mt-3 pt-3 border-t border-[#E6E9EF]">
                <Button
                  asChild
                  variant="outline"
                  className="flex-1 text-sm border-[#D0D5DD] bg-white text-[#475467] hover:text-[#111827] hover:bg-[#F2F4F7]"
                >
                  <a href="#contact" onClick={() => setMobileOpen(false)}>
                    Book a Call
                  </a>
                </Button>
                <Button
                  asChild
                  className="flex-1 bg-[#FF6A00] hover:bg-[#ff8533] text-[#111827] font-semibold text-sm"
                >
                  <a href="#contact" onClick={() => setMobileOpen(false)}>
                    Get a Quote
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
