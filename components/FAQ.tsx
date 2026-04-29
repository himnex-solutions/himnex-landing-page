"use client";

import { motion, type Variants } from "framer-motion";
import { CheckCircle2, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How long does a typical website or web app take?",
    answer:
      "A professional business website usually takes 2 to 5 weeks. A custom MVP or web application can take 6 to 12+ weeks depending on scope, integrations, and review cycles.",
  },
  {
    question: "Do clients own the source code?",
    answer:
      "Yes. After project completion and final payment, you receive ownership of the agreed source code, assets, and deployment documentation.",
  },
  {
    question: "Can you work with international clients?",
    answer:
      "Yes. We work remotely with teams across time zones using clear milestones, scheduled calls, shared boards, and written progress updates.",
  },
  {
    question: "Do you provide maintenance after launch?",
    answer:
      "Yes. We can support bug fixes, uptime monitoring, backups, content updates, performance improvements, and new feature development.",
  },
  {
    question: "Can you sign an NDA?",
    answer:
      "Yes. We can sign an NDA before discussing sensitive product details, technical architecture, or business workflows.",
  },
  {
    question: "What do you need to estimate a project?",
    answer:
      "A short brief is enough to begin: business goals, key features, target users, preferred timeline, budget range, and any existing design or technical assets.",
  },
];

const promises = [
  "Clear scope before development starts",
  "Weekly updates and milestone visibility",
  "Secure deployment and handover support",
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.52, ease: "easeOut" },
  },
};

export default function FAQ() {
  return (
    <section id="faq" className="relative overflow-hidden bg-white py-28">
      <div className="absolute left-0 right-0 top-0 h-px section-divider" />
      <div className="absolute inset-x-0 top-0 h-72 bg-[linear-gradient(180deg,rgba(255,106,0,0.05),rgba(255,255,255,0))] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-28"
          >
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#FF6A00]">
              Questions
            </span>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-[#111827] sm:text-5xl">
              What Clients Usually Ask
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#667085]">
              A few straight answers about cost, timelines, ownership, and how
              we collaborate with growing teams.
            </p>

            <div className="mt-8 space-y-3">
              {promises.map((promise) => (
                <div
                  key={promise}
                  className="flex items-center gap-3 text-sm font-bold text-[#111827]"
                >
                  <CheckCircle2 size={18} className="text-[#16A34A]" />
                  {promise}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid gap-4"
          >
            {faqs.map((faq) => (
              <motion.div
                key={faq.question}
                variants={itemVariants}
                className="rounded-2xl border border-[#E6E9EF] bg-white p-6 shadow-[0_18px_44px_rgba(15,23,42,0.05)]"
              >
                <div className="flex gap-4">
                  <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-[#FF6A00]/10 text-[#FF6A00]">
                    <HelpCircle size={18} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold leading-snug text-[#111827]">
                      {faq.question}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#667085]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
