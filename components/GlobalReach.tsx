"use client";

import { motion } from "framer-motion";
import { Globe, Users, Star, TrendingUp } from "lucide-react";

const stats = [
  { icon: Globe, value: "15+", label: "Countries Served" },
  { icon: Users, value: "50+", label: "Happy Clients" },
  { icon: Star, value: "4.9★", label: "Client Rating" },
  { icon: TrendingUp, value: "3×", label: "Avg. ROI Boost" },
];

export default function GlobalReach() {
  return (
    <section
      id="global-reach"
      className="py-28 relative overflow-hidden bg-white"
    >
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,#FFFFFF_0%,#F7F9FC_52%,#FFFFFF_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#FF6A00]">
              Global Reach
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#111827] leading-tight"
          >
            Serving{" "}
            <span className="text-[#FF6A00]">Nepal 🇳🇵</span>
            <br />
            &amp; the World{" "}
            <span className="text-[#FF6A00]">🌍</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#667085] text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Founded in the heart of Nepal, built for a global stage. We partner
            with startups and enterprises across the US, UK, Australia,
            Singapore, and beyond — delivering software solutions without
            borders.
          </motion.p>

          {/* Trust bar */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-24 h-px bg-gradient-to-r from-transparent via-[#FF6A00] to-transparent mx-auto"
          />

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-4"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.08 }}
                  className="group relative p-6 rounded-2xl border border-[#E6E9EF] bg-white hover:border-[#FF6A00]/30 hover:bg-[#FFF8F3] transition-all duration-300 text-center hover:shadow-[0_22px_55px_rgba(15,23,42,0.08)]"
                >
                  <div className="flex justify-center mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#FF6A00]/10 border border-[#FF6A00]/20 flex items-center justify-center group-hover:bg-[#FF6A00]/20 transition-all duration-300">
                      <Icon size={18} className="text-[#FF6A00]" />
                    </div>
                  </div>
                  <div className="text-3xl font-black text-[#111827] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[#667085] font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Country flags row */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex justify-center items-center gap-3 flex-wrap pt-4"
          >
            {["🇳🇵", "🇺🇸", "🇬🇧", "🇦🇺", "🇸🇬", "🇩🇪", "🇨🇦", "🇳🇱"].map(
              (flag, i) => (
                <motion.span
                  key={i}
                  animate={{ y: [0, -4, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.15,
                    ease: "easeInOut",
                  }}
                  className="text-2xl sm:text-3xl cursor-default"
                  title="Country served"
                >
                  {flag}
                </motion.span>
              )
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
