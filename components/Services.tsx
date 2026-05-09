"use client";

import { motion, type Variants } from "framer-motion";
import {
  Globe,
  Code2,
  Puzzle,
  Server,
  Smartphone,
  Cloud,
} from "lucide-react";

const services = [
  {
    id: "web-development",
    icon: Globe,
    title: "Web Development",
    description:
      "SEO-ready websites and web apps built with Next.js and React for companies in Nepal, the US, UK, Australia, and other global markets.",
    featured: false,
    iconGradient: "linear-gradient(135deg, #00BCD4, #0097A7)",
  },
  {
    id: "software-development",
    icon: Code2,
    title: "Software Development",
    description:
      "Custom software development from Nepal, from MVPs to enterprise-grade platforms with clean architecture, testing, and long-term maintainability.",
    featured: true,
    iconGradient: "linear-gradient(135deg, #FF6A00, #FF3C00)",
  },
  {
    id: "custom-solutions",
    icon: Puzzle,
    title: "Custom Solutions",
    description:
      "Purpose-built dashboards, booking systems, CRM tools, automation, and business software shaped around your exact workflow.",
    featured: false,
    iconGradient: "linear-gradient(135deg, #5C6BC0, #3949AB)",
  },
  {
    id: "mobile-apps",
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Cross-platform iOS and Android apps built with React Native for startups, service businesses, ecommerce brands, and internal teams.",
    featured: false,
    iconGradient: "linear-gradient(135deg, #FF9800, #F57C00)",
  },
  {
    id: "api-backend",
    icon: Server,
    title: "API & Backend",
    description:
      "Secure REST, GraphQL, integrations, auth, payments, and backend systems built to support real traffic and business growth.",
    featured: false,
    iconGradient: "linear-gradient(135deg, #7C4DFF, #651FFF)",
  },
  {
    id: "cloud-devops",
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "CI/CD, cloud infrastructure, monitoring, and scalable deployments on AWS, GCP, and Azure for reliable production software.",
    featured: false,
    iconGradient: "linear-gradient(135deg, #26A69A, #00897B)",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut", delay: i * 0.1 },
  }),
};

export default function Services() {
  return (
    <section id="services" className="py-20 bg-[#F7F9FC] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />
      
      {/* Background wash */}
      <div className="absolute pointer-events-none inset-0">
        <div className="absolute inset-x-0 top-0 h-72 bg-[linear-gradient(180deg,rgba(255,106,0,0.055),rgba(247,249,252,0))]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.22em] text-[#FF6A00] mb-3">
            What We Offer
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#111827] mb-4">
            Software Development Services from Nepal
          </h2>
          <p className="text-[#667085] text-lg max-w-l mx-auto leading-relaxed">
            Everything you need to build, launch, and scale a serious digital product with a Nepal-based software team.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                id={`service-card-${service.id}`}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className={`relative flex flex-col items-center text-center rounded-2xl px-6 pb-7 pt-12 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${service.featured
                  ? "bg-gradient-to-br from-[#FF6A00] to-[#FF8533] scale-[1.02] shadow-[0_12px_40px_rgba(255,106,0,0.25)] z-10"
                  : "bg-white"
                  }`}
              >
                {/* Floating icon badge */}
                <div
                  className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 flex items-center justify-center shadow-lg"
                  style={{
                    background: service.iconGradient,
                    borderRadius: "50% 50% 50% 50% / 65% 65% 35% 35%",
                  }}
                >
                  <Icon size={26} className="text-white" />
                </div>

                {/* Title */}
                <h3
                  className={`text-base font-extrabold mb-2 leading-snug ${service.featured ? "text-white" : "text-[#111827]"
                    }`}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className={`text-sm leading-relaxed ${service.featured ? "text-white/80" : "text-[#667085]"
                    }`}
                >
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
