"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down past 500px
  const toggleVisibility = () => {
    if (window.scrollY > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#FF6A00] text-white shadow-[0_8px_30px_rgba(255,106,0,0.25)] transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-[#ff8533] hover:shadow-[0_12px_40px_rgba(255,106,0,0.4)] focus:outline-none focus:ring-2 focus:ring-[#FF6A00]/40 focus:ring-offset-2 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8 pointer-events-none"
      }`}
    >
      <ArrowUp size={22} strokeWidth={2.5} />
    </button>
  );
}
