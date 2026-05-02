"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Bell,
  CheckCircle2,
  CheckSquare,
  Code2,
  Eye,
  Gauge,
  GitBranch,
  Globe,
  LayoutDashboard,
  Link2,
  Lock,
  Cloud,
  Database,
  Server,
  ShieldCheck,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";
import {
  siClickhouse,
  siDocker,
  siExpo,
  siGithubactions,
  siGraphql,
  siMongodb,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siPython,
  siReact,
  siSupabase,
  siTailwindcss,
  siTypescript,
  siVercel,
} from "simple-icons";

/* ── Tiny inline SVG renderer for simple-icons ── */
function SiIcon({
  icon,
  size = 18,
  color,
}: {
  icon: { path: string; hex: string };
  size?: number;
  color?: string;
}) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={color ?? `#${icon.hex}`}
    >
      <path d={icon.path} />
    </svg>
  );
}

/* ── AWS custom SVG (not in simple-icons) ── */
const AwsIcon = ({ size = 20 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="#FF9900">
    <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .407-.758.777.777 0 0 0-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.743.167-1.158.167z" />
  </svg>
);

/* ── Lucide icon wrapper for tool cards ── */
function LuIcon({ icon: Icon, size = 18, color = "#667085" }: { icon: LucideIcon; size?: number; color?: string }) {
  return <Icon size={size} color={color} />;
}

/* ── Types ── */
type Tool = { name: string; detail: string; icon: React.ReactNode };
type Category = {
  id: string;
  label: string;
  tabIcon: LucideIcon;
  description: string;
  tools: Tool[];
};

/* ── Category & tool data ── */
const categories: Category[] = [
  {
    id: "frontend",
    label: "Frontend",
    tabIcon: LayoutDashboard,
    description:
      "Fast, accessible, and beautiful interfaces for websites, portals, and web applications that users actually enjoy.",
    tools: [
      { name: "Next.js", detail: "Full-stack React framework", icon: <SiIcon icon={siNextdotjs} size={18} /> },
      { name: "React", detail: "Component-based UI library", icon: <SiIcon icon={siReact} size={18} /> },
      { name: "TypeScript", detail: "Type-safe development", icon: <SiIcon icon={siTypescript} size={18} /> },
      { name: "Tailwind CSS", detail: "Utility-first styling", icon: <SiIcon icon={siTailwindcss} size={18} /> },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    tabIcon: Server,
    description:
      "Reliable APIs, business logic, authentication flows, and third-party integrations built for long-term stability.",
    tools: [
      { name: "Node.js", detail: "JavaScript runtime", icon: <SiIcon icon={siNodedotjs} size={18} /> },
      { name: "Python", detail: "Versatile backend language", icon: <SiIcon icon={siPython} size={18} /> },
      { name: "REST APIs", detail: "Standard HTTP API design", icon: <LuIcon icon={Globe} size={18} color="#0EA5E9" /> },
      { name: "GraphQL", detail: "Flexible data querying", icon: <SiIcon icon={siGraphql} size={18} /> },
    ],
  },
  {
    id: "data",
    label: "Data",
    tabIcon: Database,
    description:
      "Structured storage, analytics foundations, data migrations, and reporting pipelines built to scale.",
    tools: [
      { name: "PostgreSQL", detail: "Reliable relational database", icon: <SiIcon icon={siPostgresql} size={18} /> },
      { name: "Supabase", detail: "Open-source Firebase alt.", icon: <SiIcon icon={siSupabase} size={18} /> },
      { name: "MongoDB", detail: "Flexible document storage", icon: <SiIcon icon={siMongodb} size={18} /> },
      { name: "ClickHouse", detail: "High-performance analytics", icon: <SiIcon icon={siClickhouse} size={18} /> },
    ],
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    tabIcon: Cloud,
    description:
      "Scalable deployments, CI/CD pipelines, environment management, and infrastructure monitoring that keeps you live.",
    tools: [
      { name: "Vercel", detail: "Instant frontend deployments", icon: <SiIcon icon={siVercel} size={18} /> },
      { name: "AWS", detail: "Full cloud infrastructure", icon: <AwsIcon size={20} /> },
      { name: "Docker", detail: "Container orchestration", icon: <SiIcon icon={siDocker} size={18} /> },
      { name: "CI/CD", detail: "Automated build & release", icon: <SiIcon icon={siGithubactions} size={18} /> },
    ],
  },
  {
    id: "mobile",
    label: "Mobile",
    tabIcon: Smartphone,
    description:
      "Cross-platform mobile products with smooth UX and real-time features, connected to secure, scalable backends.",
    tools: [
      { name: "React Native", detail: "Cross-platform mobile", icon: <SiIcon icon={siReact} size={18} /> },
      { name: "Expo", detail: "Rapid mobile development", icon: <SiIcon icon={siExpo} size={18} /> },
      { name: "Push Notifications", detail: "Real-time user alerts", icon: <LuIcon icon={Bell} size={18} color="#F59E0B" /> },
      { name: "App APIs", detail: "Mobile-optimized endpoints", icon: <LuIcon icon={Link2} size={18} color="#8B5CF6" /> },
    ],
  },
  {
    id: "quality",
    label: "Quality",
    tabIcon: ShieldCheck,
    description:
      "Code reviews, security audits, performance testing, and maintainability checks that give you release confidence.",
    tools: [
      { name: "Code Review", detail: "Peer-reviewed pull requests", icon: <LuIcon icon={Eye} size={18} color="#0EA5E9" /> },
      { name: "QA Testing", detail: "Functional & regression tests", icon: <LuIcon icon={CheckSquare} size={18} color="#16A34A" /> },
      { name: "Security Audit", detail: "OWASP-aware practices", icon: <LuIcon icon={Lock} size={18} color="#DC2626" /> },
      { name: "Performance", detail: "Core Web Vitals optimized", icon: <LuIcon icon={Gauge} size={18} color="#FF6A00" /> },
    ],
  },
];

const commitments = [
  { icon: Code2, label: "Source code ownership", sub: "Always yours after delivery" },
  { icon: GitBranch, label: "Git workflow & reviews", sub: "Structured version control" },
  { icon: ShieldCheck, label: "Security-first builds", sub: "Best practices by default" },
];

export default function TechStack() {
  const [activeId, setActiveId] = useState("frontend");
  const active = categories.find((c) => c.id === activeId)!;
  const TabIcon = active.tabIcon;

  return (
    <section id="tech-stack" className="relative overflow-hidden bg-[#F7F9FC] py-28">
      <div className="absolute left-0 right-0 top-0 h-px section-divider" />

      {/* Background wash */}
      <div className="absolute pointer-events-none inset-0">
        <div className="absolute inset-x-0 top-0 h-72 bg-[linear-gradient(180deg,rgba(255,106,0,0.055),rgba(247,249,252,0))]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-5xl mx-auto text-center"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.22em] text-[#FF6A00] mb-3">
            Tech Stack
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#111827] mb-4">
            Simple. Smart. Technology.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#667085]">
            We select proven tech that supports fast launches, easy maintenance, and long-term growth.
          </p>
        </motion.div>

        {/* Tab bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="mb-6 mx-auto flex w-fit flex-wrap items-center justify-center gap-1.5 rounded-2xl border border-[#E6E9EF] bg-[#F7F9FC] p-1.5"
        >
          {categories.map((cat) => {
            const CatIcon = cat.tabIcon;
            const isActive = cat.id === activeId;
            return (
              <button
                key={cat.id}
                id={`tech-tab-${cat.id}`}
                onClick={() => setActiveId(cat.id)}
                className={`relative flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors duration-200 ${isActive ? "text-white" : "text-[#667085] hover:text-[#111827]"
                  }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="tech-tab-pill"
                    className="absolute inset-0 rounded-xl bg-[#FF6A00] shadow-[0_4px_18px_rgba(255,106,0,0.38)]"
                    transition={{ type: "spring", bounce: 0.22, duration: 0.48 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  <CatIcon size={14} />
                  {cat.label}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Content panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="grid gap-6 rounded-3xl border border-[#E6E9EF] bg-white p-8 shadow-[0_8px_56px_rgba(15,23,42,0.08)] lg:grid-cols-[1fr_1.5fr]"
          >
            {/* Left — category detail */}
            <div className="flex flex-col gap-6">
              <div className="inline-flex h-20 w-20 items-center justify-center rounded-2xl border border-[#FF6A00]/25 bg-gradient-to-br from-[#FF6A00]/15 to-[#FF6A00]/5 shadow-[0_8px_32px_rgba(255,106,0,0.18)] text-[#FF6A00]">
                <TabIcon size={36} />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-[#111827]">{active.label}</h3>
                <p className="mt-3 text-base leading-relaxed text-[#667085]">{active.description}</p>
              </div>
              <div className="mt-auto flex items-center gap-3 rounded-xl border border-[#E6E9EF] bg-[#F7F9FC] px-4 py-3.5">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-[#FF6A00]/10 text-[#FF6A00]">
                  <CheckCircle2 size={17} />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#111827]">
                    {active.tools.length} core technologies
                  </p>
                  <p className="text-xs text-[#667085]">Production-tested & actively maintained</p>
                </div>
              </div>
            </div>

            {/* Right — tool cards with real icons */}
            <div className="grid grid-cols-2 gap-3">
              {active.tools.map((tool, i) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.94, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.3, ease: "easeOut" }}
                  className="group flex flex-col gap-3 rounded-2xl border border-[#E6E9EF] bg-[#F7F9FC] p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#FF6A00]/35 hover:bg-white hover:shadow-[0_16px_40px_rgba(255,106,0,0.1)]"
                >
                  {/* Icon box */}
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E6E9EF] bg-white shadow-[0_2px_8px_rgba(15,23,42,0.06)] transition-all duration-300 group-hover:border-[#FF6A00]/20 group-hover:shadow-[0_4px_16px_rgba(255,106,0,0.12)]">
                    {tool.icon}
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-[#111827] group-hover:text-[#FF6A00] transition-colors duration-300">
                      {tool.name}
                    </span>
                    <span className="block text-xs text-[#667085] mt-0.5">{tool.detail}</span>
                  </div>
                  {/* Animated accent bar */}
                  <div className="h-0.5 w-6 rounded-full bg-[#FF6A00]/25 transition-all duration-300 group-hover:w-full group-hover:bg-[#FF6A00]/40" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom commitments */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.55 }}
          className="mt-5 grid gap-4 sm:grid-cols-3"
        >
          {commitments.map((item) => {
            const CIcon = item.icon;
            return (
              <div
                key={item.label}
                className="flex items-center gap-4 rounded-2xl border border-[#E6E9EF] bg-white px-5 py-4 shadow-[0_4px_16px_rgba(15,23,42,0.04)] transition-all duration-300 hover:border-[#FF6A00]/25 hover:shadow-[0_8px_28px_rgba(255,106,0,0.08)]"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#FF6A00]/10 text-[#FF6A00]">
                  <CIcon size={19} />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#111827]">{item.label}</p>
                  <p className="text-xs text-[#667085]">{item.sub}</p>
                </div>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
