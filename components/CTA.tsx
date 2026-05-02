"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section id="cta" className="py-24 bg-[#F7F9FC] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />

      {/* Background wash */}
      <div className="absolute pointer-events-none inset-0">
        <div className="absolute inset-x-0 top-0 h-72 bg-[linear-gradient(180deg,rgba(255,106,0,0.055),rgba(247,249,252,0))]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          {/* Icon */}
          <div className="flex justify-center">
            <div className="w-14 h-14 rounded-2xl bg-[#FF6A00]/15 border border-[#FF6A00]/30 flex items-center justify-center">
              <Sparkles size={26} className="text-[#FF6A00]" />
            </div>
          </div>

          {/* Headline */}
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#111827] leading-tight">
              Let&apos;s Build Your
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #FF6A00, #ffb347)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Next Project
              </span>
            </h2>
            <p className="text-lg text-[#667085] max-w-xl mx-auto leading-relaxed">
              Ready to turn your idea into a product the world can use? Let&apos;s
              talk — it all starts with a conversation.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-[#FF6A00] hover:bg-[#ff8533] text-[#fff] font-bold text-base px-8 h-13 gap-2 transition-all duration-200 hover:scale-[1.04] hover:shadow-[0_20px_42px_rgba(255,106,0,0.28)]"
            >
              <Link href="/contact" id="cta-start-project-btn">
                Start a Project
                <ArrowRight size={18} />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-[#D0D5DD] bg-white hover:bg-[#F7F9FC] text-[#111827] font-semibold text-base px-8 h-13 shadow-[0_10px_24px_rgba(15,23,42,0.06)]"
            >
              <Link href="/contact" id="cta-book-call-btn">
                Schedule a Free Call
              </Link>
            </Button>
          </div>

          {/* Trust note */}
          <p className="text-sm text-[#98A2B3] flex items-center justify-center gap-2">
            <span className="w-1 h-1 rounded-full bg-green-400 inline-block" />
            No commitment required &nbsp;·&nbsp; Free initial consultation
          </p>
        </motion.div>
      </div>
    </section>
  );
}
