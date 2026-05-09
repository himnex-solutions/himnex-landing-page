"use client";

import { motion, type Variants } from "framer-motion";
import {
  Zap,
  Shield,
  Award,
  MessageCircle,
} from "lucide-react";

const reasons = [
  {
    id: "fast-delivery",
    icon: Zap,
    title: "Fast Delivery",
    description:
      "We move fast without cutting corners. Agile sprints, weekly updates, and on-time launches — every time.",
  },
  {
    id: "clean-code",
    icon: Shield,
    title: "Clean & Scalable Code",
    description:
      "TypeScript-first, fully tested, documented code that your future team will thank us for. Built to grow with your business.",
  },
  {
    id: "international-quality",
    icon: Award,
    title: "International Quality",
    description:
      "Global delivery standards with the cost advantage of a software development team based in Nepal.",
  },
  {
    id: "reliable-communication",
    icon: MessageCircle,
    title: "Reliable Communication",
    description:
      "Clear English communication, scheduled calls, written updates, and timezone-friendly collaboration for local and international clients.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-28 bg-[#F7F9FC] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />

      {/* Background wash */}
      <div className="absolute pointer-events-none inset-0">
        <div className="absolute inset-x-0 top-0 h-72 bg-[linear-gradient(180deg,rgba(255,106,0,0.055),rgba(247,249,252,0))]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#FF6A00]">
            Our Advantage
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#111827]">
            Why Choose a{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #FF6A00, #ffb347)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Nepal Software Company?
            </span>
          </h2>
          <p className="text-[#667085] text-lg max-w-xl mx-auto leading-relaxed">
            We combine Nepal-based engineering value with the product discipline international clients expect.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.id}
                id={`why-us-${reason.id}`}
                variants={itemVariants}
                className="group relative p-7 rounded-2xl bg-white border border-[#E6E9EF] hover:border-[#FF6A00]/30 hover:bg-[#FFF8F3] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(15,23,42,0.08)]"
              >
                {/* Number */}
                <div className="absolute top-5 right-5 text-5xl font-black text-[#111827]/[0.1] group-hover:text-[#FF6A00]/40 transition-colors duration-300 select-none leading-none">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Icon */}
                <div className="mb-5 w-11 h-11 rounded-xl bg-[#FF6A00]/10 border border-[#FF6A00]/20 flex items-center justify-center group-hover:bg-[#FF6A00]/20 transition-all duration-300">
                  <Icon size={20} className="text-[#FF6A00]" />
                </div>

                {/* Text */}
                <h3 className="text-base font-bold text-[#111827] mb-2.5">
                  {reason.title}
                </h3>
                <p className="text-sm text-[#667085] leading-relaxed">
                  {reason.description}
                </p>

                {/* Bottom bar */}
                <div className="mt-5 h-px w-0 group-hover:w-full bg-gradient-to-r from-[#FF6A00] to-transparent transition-all duration-500" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
