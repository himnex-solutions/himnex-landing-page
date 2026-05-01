"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Clock3, TrendingUp } from "lucide-react";

type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  industry: string;
  timeline: string;
  outcome: string;
  metric: string;
  link?: string;
};

const projects: Project[] = [
  {
    id: "pixltools",
    title: "PixlTools",
    category: "Web Application",
    description:
      "A professional-grade, 100% private online image processing toolkit powered by Sharp, offering 30+ tools completely free.",
    image: "/images/pixltool.png",
    tags: ["Node.js", "Sharp", "React"],
    industry: "SaaS / Utilities",
    timeline: "Ongoing",
    outcome:
      "Built a secure, fast, and account-free platform used by hundreds of thousands of creators and developers every month.",
    metric: "100K+ Users/mo",
    link: "https://www.pixltools.com/",
  },
  {
    id: "raadhya-ethnica",
    title: "Raadhya Ethnica",
    category: "eCommerce Platform",
    description:
      "A modern, premium women's kurtas online store featuring real-time cart updates, Razorpay checkout, and advanced SEO optimization.",
    image: "/images/raadhya.png",
    tags: ["Next.js 14", "Zustand", "Tailwind CSS"],
    industry: "Fashion Retail",
    timeline: "8 weeks",
    outcome:
      "Delivered a high-performance, responsive store with schema markup, beautiful UI, and WhatsApp support integration.",
    metric: "Production Ready",
    link: "https://www.raadhyaethnica.com/",
  },
  {
    id: "fintech-app",
    title: "FinTech Mobile App",
    category: "App Development",
    description:
      "A cross-platform fintech app with KYC, wallet features, and AI-powered spending insights for a UK-based startup.",
    image: "/images/portfolio-fintech.jpg",
    tags: ["React Native", "Node.js", "MongoDB"],
    industry: "FinTech",
    timeline: "12 weeks",
    outcome:
      "Secure onboarding, wallet workflows, and analytics shipped for MVP validation.",
    metric: "MVP launched",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-28 bg-white relative">
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14"
        >
          <div className="space-y-4">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#FF6A00]">
              Our Work
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#111827]">
              Featured Projects
            </h2>
            <p className="text-[#667085] text-lg max-w-md leading-relaxed">
              Real solutions built for real businesses — across industries and
              continents.
            </p>
          </div>
          <Link
            href="/contact"
            className="flex items-center gap-2 text-sm font-semibold text-[#FF6A00] hover:text-[#ffb347] transition-colors duration-200 whitespace-nowrap"
          >
            Start your project
            <ArrowUpRight size={16} />
          </Link>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              id={`portfolio-${project.id}`}
              variants={cardVariants}
              onClick={() => project.link && window.open(project.link, "_blank")}
              className={`group relative overflow-hidden rounded-2xl border border-[#E6E9EF] bg-white transition-all duration-400 hover:-translate-y-2 hover:border-[#FF6A00]/30 hover:shadow-[0_30px_80px_rgba(15,23,42,0.12)] ${project.link ? "cursor-pointer" : ""}`}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden bg-[#F2F4F7]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-[#111827]/55 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center">
                  <div className="flex items-center gap-2 rounded-full bg-[#FF6A00] px-5 py-2.5 text-sm font-bold text-white">
                    <span>{project.link ? "Visit Website" : "Case Study"}</span>
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-5 bg-white p-6">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF6A00] mb-1.5 block">
                      {project.category}
                    </span>
                    <h3 className="text-lg font-bold text-[#111827] leading-tight">
                      {project.title}
                    </h3>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-[#98A2B3] group-hover:text-[#FF6A00] transition-colors duration-300 mt-1 flex-shrink-0"
                  />
                </div>
                <p className="text-sm text-[#667085] leading-relaxed">
                  {project.description}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="rounded-xl border border-[#E6E9EF] bg-[#F7F9FC] p-3">
                    <div className="mb-1 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#98A2B3]">
                      <Clock3 size={12} className="text-[#FF6A00]" />
                      Timeline
                    </div>
                    <div className="text-sm font-bold text-[#111827]">
                      {project.timeline}
                    </div>
                  </div>
                  <div className="rounded-xl border border-[#E6E9EF] bg-[#F7F9FC] p-3">
                    <div className="mb-1 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#98A2B3]">
                      <TrendingUp size={12} className="text-[#FF6A00]" />
                      Result
                    </div>
                    <div className="text-sm font-bold text-[#111827]">
                      {project.metric}
                    </div>
                  </div>
                </div>
                <div className="rounded-xl border border-[#E6E9EF] bg-white p-3">
                  <div className="mb-1.5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[#475467]">
                    <CheckCircle2 size={14} className="text-[#16A34A]" />
                    Outcome
                  </div>
                  <p className="text-xs leading-relaxed text-[#667085]">
                    {project.outcome}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#FFF4EC] text-[#FF6A00] border border-[#FED7AA]">
                    {project.industry}
                  </span>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#F2F4F7] text-[#667085] border border-[#E6E9EF]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
