"use client";

import { motion, type Variants } from "framer-motion";
import {
  Cloud,
  Code2,
  Database,
  GitBranch,
  LayoutDashboard,
  Server,
  ShieldCheck,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

type StackGroup = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  tools: string[];
};

const stackGroups: StackGroup[] = [
  {
    id: "frontend",
    icon: LayoutDashboard,
    title: "Frontend",
    description: "Fast, accessible interfaces for websites, portals, and apps.",
    tools: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "backend",
    icon: Server,
    title: "Backend",
    description: "Reliable APIs, business logic, authentication, and integrations.",
    tools: ["Node.js", "Python", "REST", "GraphQL"],
  },
  {
    id: "data",
    icon: Database,
    title: "Data",
    description: "Structured storage, reporting, migrations, and analytics foundations.",
    tools: ["PostgreSQL", "Supabase", "MongoDB", "ClickHouse"],
  },
  {
    id: "cloud",
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Deployments, environments, monitoring, and scalable infrastructure.",
    tools: ["Vercel", "AWS", "Docker", "CI/CD"],
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile",
    description: "Cross-platform mobile products connected to secure backends.",
    tools: ["React Native", "Expo", "Push Notifications", "App APIs"],
  },
  {
    id: "quality",
    icon: ShieldCheck,
    title: "Quality",
    description: "Testing, security checks, maintainability, and release confidence.",
    tools: ["Code Review", "QA Testing", "Security", "Performance"],
  },
];

const highlights = [
  { icon: Code2, label: "Source code ownership" },
  { icon: GitBranch, label: "Git workflow and reviews" },
  { icon: ShieldCheck, label: "Security-conscious builds" },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export default function TechStack() {
  return (
    <section id="tech-stack" className="relative overflow-hidden bg-white py-28">
      <div className="absolute left-0 right-0 top-0 h-px section-divider" />
      <div
        className="absolute inset-0 pointer-events-none opacity-70"
        style={{
          backgroundImage: `linear-gradient(rgba(17,24,39,0.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(17,24,39,0.045) 1px, transparent 1px)`,
          backgroundSize: "52px 52px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-28"
          >
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#FF6A00]">
              Technology Stack
            </span>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-[#111827] sm:text-5xl">
              Modern Tools for Reliable Products
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#667085]">
              We choose proven technologies that help your product launch fast,
              stay maintainable, and scale when your business grows.
            </p>

            <div className="mt-8 grid gap-3">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 rounded-xl border border-[#E6E9EF] bg-white px-4 py-3 shadow-[0_12px_34px_rgba(15,23,42,0.05)]"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#FF6A00]/10 text-[#FF6A00]">
                      <Icon size={17} />
                    </div>
                    <span className="text-sm font-bold text-[#111827]">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid gap-5 sm:grid-cols-2"
          >
            {stackGroups.map((group) => {
              const Icon = group.icon;

              return (
                <motion.div
                  key={group.id}
                  id={`tech-stack-${group.id}`}
                  variants={cardVariants}
                  className="group rounded-2xl border border-[#E6E9EF] bg-white p-6 shadow-[0_18px_44px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#FF6A00]/35 hover:shadow-[0_26px_64px_rgba(15,23,42,0.09)]"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[#FF6A00]/20 bg-[#FF6A00]/10 text-[#FF6A00]">
                    <Icon size={21} />
                  </div>
                  <h3 className="text-lg font-bold text-[#111827]">
                    {group.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#667085]">
                    {group.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-[#E6E9EF] bg-[#F7F9FC] px-3 py-1 text-xs font-semibold text-[#475467] transition-colors duration-300 group-hover:border-[#FF6A00]/20 group-hover:bg-[#FF6A00]/8 group-hover:text-[#FF6A00]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
