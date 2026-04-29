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
  accent: string;
};

const processSteps: ProcessStep[] = [
  {
    id: "discovery",
    icon: SearchCheck,
    title: "Discovery & Planning",
    description:
      "We map your goals, users, workflows, integrations, and success metrics before writing a single line of code.",
    deliverable: "Scope, roadmap & technical plan",
    accent: "#FF6A00",
  },
  {
    id: "design",
    icon: PenTool,
    title: "Product Design",
    description:
      "We shape clean user flows and interfaces that make the product simple to understand and delightful to use.",
    deliverable: "Wireframes, UI direction & clickable flows",
    accent: "#FF6A00",
  },
  {
    id: "development",
    icon: Code2,
    title: "Agile Development",
    description:
      "We build in focused sprints with clear updates, code reviews, and working demos shipped along the way.",
    deliverable: "Production-ready features, every sprint",
    accent: "#FF6A00",
  },
  {
    id: "quality",
    icon: ShieldCheck,
    title: "QA & Security",
    description:
      "We test key journeys, performance, forms, permissions, and release risks thoroughly before launch.",
    deliverable: "Tested build & launch checklist",
    accent: "#FF6A00",
  },
  {
    id: "launch",
    icon: Rocket,
    title: "Launch & Handover",
    description:
      "We deploy, document the system, and ensure your team fully understands how to operate it confidently.",
    deliverable: "Live product, docs & source code",
    accent: "#FF6A00",
  },
  {
    id: "support",
    icon: LifeBuoy,
    title: "Support & Growth",
    description:
      "We stay available for maintenance, improvements, monitoring, and new product phases as you scale.",
    deliverable: "Ongoing support options",
    accent: "#FF6A00",
  },
];

const lineVariants: Variants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: { duration: 1.2, ease: "easeInOut", delay: 0.3 },
  },
};

const stepVariants: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: "easeOut", delay: i * 0.1 },
  }),
};

export default function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-[#F7F9FC] py-28"
    >
      <div className="absolute left-0 right-0 top-0 h-px section-divider" />

      {/* Top gradient wash */}
      <div className="absolute inset-x-0 top-0 h-80 bg-[linear-gradient(180deg,rgba(255,106,0,0.06),rgba(247,249,252,0))] pointer-events-none" />

      {/* Decorative blobs */}
      <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-[#FF6A00]/5 blur-3xl pointer-events-none" />
      <div className="absolute -left-32 bottom-20 h-72 w-72 rounded-full bg-[#FF6A00]/4 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-20 max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#FF6A00]/25 bg-[#FF6A00]/8 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#FF6A00]">
            How We Work
          </span>
          <h2 className="mt-5 text-4xl font-bold text-[#111827] sm:text-5xl">
            A Clear{" "}
            <span className="text-gradient-orange">Delivery Process</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#667085]">
            Professional software projects need more than code. We use a
            structured process so timelines, ownership, and outcomes stay
            crystal-clear from day one.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-4xl">
          {/* Vertical connector line */}
          <motion.div
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="absolute left-[27px] top-8 bottom-8 w-px origin-top"
            style={{
              background:
                "linear-gradient(180deg, #FF6A00 0%, rgba(255,106,0,0.15) 100%)",
            }}
          />

          <div className="relative space-y-4">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isLast = index === processSteps.length - 1;

              return (
                <motion.div
                  key={step.id}
                  id={`process-${step.id}`}
                  custom={index}
                  variants={stepVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  className="group relative flex gap-6"
                >
                  {/* Step dot + icon */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-[#FF6A00]/30 bg-white shadow-[0_8px_24px_rgba(255,106,0,0.15)] transition-all duration-300 group-hover:border-[#FF6A00] group-hover:shadow-[0_12px_32px_rgba(255,106,0,0.28)] group-hover:scale-110">
                      <Icon
                        size={22}
                        className="text-[#FF6A00] transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    {/* Step number badge */}
                    <div className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#FF6A00] text-[10px] font-black text-white shadow-sm">
                      {index + 1}
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className={`flex-1 rounded-2xl border border-[#E6E9EF] bg-white p-6 shadow-[0_4px_24px_rgba(15,23,42,0.05)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#FF6A00]/30 group-hover:shadow-[0_16px_48px_rgba(15,23,42,0.1)] ${
                      isLast ? "" : "mb-0"
                    }`}
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-[#111827] group-hover:text-[#FF6A00] transition-colors duration-300">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-[#667085]">
                          {step.description}
                        </p>
                      </div>

                      {/* Phase label */}
                      <span className="self-start whitespace-nowrap rounded-full bg-[#F7F9FC] px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] text-[#111827]/40 sm:ml-4">
                        Phase {index + 1}
                      </span>
                    </div>

                    {/* Deliverable */}
                    <div className="mt-5 flex items-center gap-2 border-t border-[#E6E9EF] pt-4">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FF6A00]/10">
                        <ArrowRight size={12} className="text-[#FF6A00]" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#475467]">
                        {step.deliverable}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
