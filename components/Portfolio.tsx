"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { ExternalLink, ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    category: "Web Development",
    description:
      "Full-stack e-commerce solution with real-time inventory, payment integration, and a CMS — handling 10K+ daily users.",
    image: "/images/portfolio-ecommerce.jpg",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
  },
  {
    id: "fintech-app",
    title: "FinTech Mobile App",
    category: "App Development",
    description:
      "A cross-platform fintech app with KYC, wallet features, and AI-powered spending insights for a UK-based startup.",
    image: "/images/portfolio-fintech.jpg",
    tags: ["React Native", "Node.js", "MongoDB"],
  },
  {
    id: "saas-dashboard",
    title: "SaaS Analytics Dashboard",
    category: "Software Development",
    description:
      "Real-time analytics platform for a US SaaS company — processing 5M+ events/day with sub-second query performance.",
    image: "/images/portfolio-saas.jpg",
    tags: ["React", "Go", "ClickHouse"],
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
          <a
            href="#contact"
            className="flex items-center gap-2 text-sm font-semibold text-[#FF6A00] hover:text-[#ffb347] transition-colors duration-200 whitespace-nowrap"
          >
            Start your project
            <ArrowUpRight size={16} />
          </a>
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
              className="group relative rounded-2xl overflow-hidden border border-[#E6E9EF] bg-white hover:border-[#FF6A00]/30 transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(15,23,42,0.12)]"
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
                  <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FF6A00] text-[#111827] font-bold text-sm">
                    <span>View Project</span>
                    <ExternalLink size={14} />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 bg-white space-y-3">
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
                <div className="flex flex-wrap gap-1.5 pt-1">
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
