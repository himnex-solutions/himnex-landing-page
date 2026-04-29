"use client";

import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
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
      "We map your goals, users, workflows, integrations, and success metrics before writing code.",
    deliverable: "Scope, roadmap, and technical plan",
  },
  {
    id: "design",
    icon: PenTool,
    title: "Product Design",
    description:
      "We shape clean user flows and interfaces that make the product simple to understand and easy to use.",
    deliverable: "Wireframes, UI direction, and clickable flows",
  },
  {
    id: "development",
    icon: Code2,
    title: "Agile Development",
    description:
      "We build in focused sprints with clear updates, code reviews, and working demos along the way.",
    deliverable: "Production-ready features",
  },
  {
    id: "quality",
    icon: ShieldCheck,
    title: "QA & Security",
    description:
      "We test key journeys, performance, forms, permissions, and release risks before launch.",
    deliverable: "Tested build and launch checklist",
  },
  {
    id: "launch",
    icon: Rocket,
    title: "Launch & Handover",
    description:
      "We deploy, document the system, and make sure your team understands how to operate it.",
    deliverable: "Live product, docs, and source code",
  },
  {
    id: "support",
    icon: LifeBuoy,
    title: "Support & Growth",
    description:
      "We stay available for maintenance, improvements, monitoring, and new product phases.",
    deliverable: "Ongoing support options",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.58, ease: "easeOut" },
  },
};

export default function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-[#F7F9FC] py-28"
    >
      <div className="absolute left-0 right-0 top-0 h-px section-divider" />
      <div className="absolute inset-x-0 top-0 h-72 bg-[linear-gradient(180deg,rgba(255,106,0,0.06),rgba(247,249,252,0))] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#FF6A00]">
            How We Work
          </span>
          <h2 className="mt-4 text-4xl font-bold text-[#111827] sm:text-5xl">
            A Clear Delivery Process
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#667085]">
            Professional software projects need more than code. We use a
            structured process so timelines, ownership, and outcomes stay clear
            from day one.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {processSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.id}
                id={`process-${step.id}`}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-2xl border border-[#E6E9EF] bg-white p-6 shadow-[0_18px_44px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#FF6A00]/35 hover:shadow-[0_26px_64px_rgba(15,23,42,0.09)]"
              >
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#FF6A00]/20 bg-[#FF6A00]/10 text-[#FF6A00] transition-colors duration-300 group-hover:bg-[#FF6A00]/15">
                    <Icon size={22} />
                  </div>
                  <div className="text-4xl font-black leading-none text-[#111827]/10 transition-colors duration-300 group-hover:text-[#FF6A00]/35">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[#111827]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#667085]">
                  {step.description}
                </p>

                <div className="mt-6 flex items-center gap-2 border-t border-[#E6E9EF] pt-4 text-xs font-bold uppercase tracking-[0.12em] text-[#475467]">
                  <ArrowRight size={14} className="text-[#FF6A00]" />
                  {step.deliverable}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
