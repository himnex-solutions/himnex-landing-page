"use client";

import { motion, type Variants } from "framer-motion";
import { Globe, Code2, Puzzle, Server, ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    id: "web-development",
    icon: Globe,
    title: "Web Development",
    description:
      "Modern, performant websites and web apps built with Next.js, React, and cutting-edge technologies. SEO-ready and conversion-optimized by default.",
    tags: ["Next.js", "React", "TypeScript"],
  },
  {
    id: "software-development",
    icon: Code2,
    title: "Software Development",
    description:
      "End-to-end software solutions crafted for scale. From MVP to enterprise-grade platforms — clean architecture, tested, and maintainable.",
    tags: ["Node.js", "Python", "Go"],
  },
  {
    id: "custom-solutions",
    icon: Puzzle,
    title: "Custom Solutions",
    description:
      "Tailored software built exactly around your business needs. No templates, no shortcuts — just purpose-built engineering that solves real problems.",
    tags: ["Consulting", "Architecture", "Strategy"],
  },
  {
    id: "api-backend",
    icon: Server,
    title: "API & Backend Development",
    description:
      "Robust, secure, and lightning-fast APIs and backend systems. GraphQL, REST, microservices — built to handle whatever your users throw at them.",
    tags: ["REST", "GraphQL", "Microservices"],
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Services() {
  return (
    <section id="services" className="py-28 bg-white relative">
      {/* Subtle top gradient */}
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#FF6A00]">
            What We Offer
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#111827]">
            Our Services
          </h2>
          <p className="text-[#667085] text-lg max-w-xl mx-auto leading-relaxed">
            Everything you need to take your digital product from idea to
            production — and beyond.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.id} variants={cardVariants}>
                <Card
                  id={`service-card-${service.id}`}
                  className="group relative h-full bg-white border border-[#E6E9EF] hover:border-[#FF6A00]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.10)] cursor-pointer overflow-hidden"
                >
                  {/* Orange glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#FF6A00]/0 to-[#FF6A00]/0 group-hover:from-[#FF6A00]/5 group-hover:to-transparent transition-all duration-300 pointer-events-none" />

                  <CardContent className="p-6 flex flex-col h-full gap-5">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-[#FF6A00]/10 border border-[#FF6A00]/20 flex items-center justify-center group-hover:bg-[#FF6A00]/20 group-hover:border-[#FF6A00]/40 transition-all duration-300">
                      <Icon
                        size={22}
                        className="text-[#FF6A00] group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-2.5">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-base font-bold text-[#111827] leading-tight">
                          {service.title}
                        </h3>
                        <ArrowUpRight
                          size={16}
                          className="text-[#98A2B3] group-hover:text-[#FF6A00] transition-colors duration-300 mt-0.5 flex-shrink-0"
                        />
                      </div>
                      <p className="text-sm text-[#667085] leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full bg-[#F2F4F7] text-[#667085] group-hover:bg-[#FF6A00]/10 group-hover:text-[#FF6A00] transition-all duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
