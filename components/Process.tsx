"use client";

import { motion, type Variants } from "framer-motion";
import {
  Code2,
  LifeBuoy,
  PenTool,
  Rocket,
  SearchCheck,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

type ProcessStep = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  deliverable: string;
};

const processSteps: ProcessStep[] = [
  {
    id: "discovery",
    icon: SearchCheck,
    title: "Discovery & Planning",
    description:
      "We map your goals, users, workflows, and success metrics before writing a single line of code.",
    deliverable: "Scope & technical roadmap",
  },
  {
    id: "design",
    icon: PenTool,
    title: "Product Design",
    description:
      "Clean user flows and interfaces — simple to understand, delightful to use, and built to convert.",
    deliverable: "Wireframes & clickable flows",
  },
  {
    id: "development",
    icon: Code2,
    title: "Agile Development",
    description:
      "Focused sprints with live demos, code reviews, and production-ready features shipped continuously.",
    deliverable: "Working software, every sprint",
  },
  {
    id: "quality",
    icon: ShieldCheck,
    title: "QA & Security",
    description:
      "Rigorous testing of user journeys, performance, forms, permissions, and every edge case before launch.",
    deliverable: "Tested build & launch checklist",
  },
  {
    id: "launch",
    icon: Rocket,
    title: "Launch & Handover",
    description:
      "We deploy, write documentation, and ensure your team is confident and fully operational from day one.",
    deliverable: "Live product, docs & source code",
  },
  {
    id: "support",
    icon: LifeBuoy,
    title: "Support & Growth",
    description:
      "Continuous maintenance, monitoring, and new feature development as your product scales and evolves.",
    deliverable: "Ongoing support retainer",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut", delay: i * 0.09 },
  }),
};

export default function Process() {
  return (
    <section id="process" className="relative overflow-hidden py-24 bg-[#F7F9FC]">
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />
      
      {/* Background wash */}
      <div className="absolute pointer-events-none inset-0">
        <div className="absolute inset-x-0 top-0 h-72 bg-[linear-gradient(180deg,rgba(255,106,0,0.055),rgba(247,249,252,0))]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.24em] text-[#FF6A00] mb-3">
            How We Work
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#111827] leading-tight">
            Our Build Process
          </h2>
          <p className="text-[#667085] text-lg max-w-l mx-auto leading-relaxed">
            Building software is complex, so we keep everything clear and organized.
          </p>
        </motion.div>

        {/* ── Premium Step progress track ── */}
        <div className="mb-16 hidden lg:block relative">
          <div className="mx-6 relative">
            {/* Background dashed line */}
            <div className="absolute left-0 right-0 top-[22px] h-[2px] -translate-y-1/2 rounded-full opacity-50" 
                 style={{ backgroundImage: "linear-gradient(90deg, #D0D5DD 50%, transparent 50%)", backgroundSize: "12px 100%" }} />
            
            {/* Animated fill line */}
            <motion.div 
              className="absolute left-0 top-[22px] h-[2px] -translate-y-1/2 rounded-full bg-gradient-to-r from-[#FF6A00]/80 to-[#FF8533]"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
            >
              {/* Glowing lead particle */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 h-2.5 w-8 bg-[#FF6A00] blur-[6px] rounded-full" />
            </motion.div>

            <div className="relative flex items-center justify-between">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.2 }}
                  className="relative z-10 flex flex-col items-center group cursor-default"
                >
                  {/* Node Container */}
                  <div className="relative flex h-[44px] w-[44px] items-center justify-center rounded-full bg-white p-[4px] shadow-[0_4px_16px_rgba(15,23,42,0.05)] border border-[#E6E9EF] group-hover:border-[#FF6A00]/30 group-hover:shadow-[0_8px_25px_rgba(255,106,0,0.15)] transition-all duration-300">
                    <motion.div 
                      className="absolute inset-0 rounded-full bg-[#FF6A00]/10"
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1.5, opacity: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, delay: 0.8 + i * 0.2, repeat: Infinity, repeatDelay: 4 }}
                    />
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.5 + i * 0.2 }}
                      className="relative flex h-full w-full items-center justify-center rounded-full text-[13px] font-black text-white shadow-inner"
                      style={{ background: "linear-gradient(135deg, #FF6A00, #FF8533)" }}
                    >
                      {i + 1}
                    </motion.div>
                  </div>
                  
                  {/* Step Label */}
                  <div className="absolute top-[52px] flex flex-col items-center text-center">
                    <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#111827] transition-colors duration-300 group-hover:text-[#FF6A00] whitespace-nowrap">
                      {step.title.split(" ")[0]}
                    </span>
                    <span className="mt-1.5 text-[10px] font-semibold text-[#667085] opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 whitespace-nowrap">
                      Phase 0{i + 1}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Cards grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {processSteps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.id}
                id={`process-${step.id}`}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="group relative overflow-hidden rounded-2xl bg-white border border-[#E8ECF0] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#FF6A00]/25 hover:shadow-[0_16px_48px_rgba(255,106,0,0.10)]"
              >
                {/* Big faded step number — background watermark */}
                <span
                  className="absolute -top-3 -right-1 text-8xl font-black leading-none select-none pointer-events-none transition-colors duration-300"
                  style={{ color: "rgba(255,106,0,0.06)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Icon badge */}
                <div
                  className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,106,0,0.12), rgba(255,133,51,0.06))",
                    border: "1px solid rgba(255,106,0,0.18)",
                  }}
                >
                  <Icon size={22} className="text-[#FF6A00]" />
                </div>

                {/* Step number pill */}
                <div className="mb-3">
                  <span className="inline-block rounded-full bg-[#FF6A00]/8 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-[0.18em] text-[#FF6A00]">
                    Step {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mb-2 text-base font-extrabold text-[#111827] group-hover:text-[#FF6A00] transition-colors duration-300">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mb-5 text-sm leading-relaxed text-[#667085]">
                  {step.description}
                </p>

                {/* Deliverable tag */}
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#FF6A00]" />
                  <span className="text-xs font-semibold text-[#475467]">
                    {step.deliverable}
                  </span>
                </div>

                {/* Bottom hover accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FF6A00] to-[#FF8533] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-2xl" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
