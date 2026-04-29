"use client";

import { AnimatePresence, motion, type Variants } from "framer-motion";
import { CheckCircle2, ChevronDown, MessageCircle } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    id: "timeline",
    question: "How long does a typical website or web app take?",
    answer:
      "A professional business website usually takes 2 to 5 weeks. A custom MVP or web application can take 6 to 12+ weeks depending on scope, integrations, and review cycles. We'll give you a clear timeline estimate after the initial discovery call.",
  },
  {
    id: "ownership",
    question: "Do clients own the source code?",
    answer:
      "Yes, always. After project completion and final payment, you receive full ownership of the agreed source code, assets, and deployment documentation. Your product, your IP — no lock-in, no exceptions.",
  },
  {
    id: "international",
    question: "Can you work with international clients?",
    answer:
      "Yes. We work remotely with teams across time zones using clear milestones, scheduled calls, shared project boards, and written progress updates. Most of our current clients are based outside Nepal.",
  },
  {
    id: "maintenance",
    question: "Do you provide maintenance after launch?",
    answer:
      "Yes. We offer ongoing support covering bug fixes, uptime monitoring, backups, content updates, performance improvements, and new feature development. Flexible plans are available based on your needs.",
  },
  {
    id: "nda",
    question: "Can you sign an NDA?",
    answer:
      "Yes. We can sign an NDA before discussing sensitive product details, technical architecture, or business workflows. Confidentiality is something we take seriously on every engagement.",
  },
  {
    id: "estimate",
    question: "What do you need to estimate a project?",
    answer:
      "A short brief is enough to start: your business goals, key features, target users, preferred timeline, budget range, and any existing design or technical assets. We'll turn that into a written scope within 48 hours.",
  },
];

const promises = [
  "Clear scope before development starts",
  "Weekly updates and milestone visibility",
  "Secure deployment and handover support",
];

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const listVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.48, ease: "easeOut" } },
};

const answerVariants: Variants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.32, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.24, ease: "easeIn" },
  },
};

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("timeline");

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section id="faq" className="relative overflow-hidden bg-[#F7F9FC] py-28">
      <div className="absolute left-0 right-0 top-0 h-px section-divider" />

      {/* Ambient blobs */}
      <div className="absolute -right-20 top-10 h-80 w-80 rounded-full bg-[#FF6A00]/5 blur-[80px] pointer-events-none" />
      <div className="absolute -left-20 bottom-10 h-64 w-64 rounded-full bg-[#FF6A00]/4 blur-[64px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          {/* Left — sticky label column */}
          <motion.div
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className=""
          >
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#FF6A00]">
              Questions
            </span>
            <h2 className="mt-5 text-4xl font-bold leading-tight text-[#111827] sm:text-5xl">
              Frequent Client{" "}
              <span className="text-gradient-orange">Inquiries</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[#667085]">
              Straight answers about timelines, cost, ownership, and how we
              collaborate with growing teams.
            </p>

            {/* Promises */}
            <div className="mt-10 space-y-3">
              {promises.map((promise, i) => (
                <motion.div
                  key={promise}
                  initial={{ opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.09, duration: 0.45 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#16A34A]/10">
                    <CheckCircle2 size={14} className="text-[#16A34A]" />
                  </div>
                  <span className="text-sm font-semibold text-[#111827]">
                    {promise}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Chat CTA */}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.55, duration: 0.5 }}
              className="mt-10 group flex items-center gap-3 rounded-2xl border border-[#FF6A00]/25 bg-white px-5 py-4 shadow-[0_4px_20px_rgba(255,106,0,0.1)] transition-all duration-300 hover:border-[#FF6A00]/50 hover:shadow-[0_12px_40px_rgba(255,106,0,0.18)] hover:-translate-y-0.5"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#FF6A00]/10 text-[#FF6A00] transition-colors duration-300 group-hover:bg-[#FF6A00]/15">
                <MessageCircle size={18} />
              </div>
              <div>
                <p className="text-sm font-bold text-[#111827]">
                  Still have questions?
                </p>
                <p className="text-xs text-[#667085]">
                  Send us a message — we reply within 24 hours.
                </p>
              </div>
            </motion.a>
          </motion.div>

          {/* Right — accordion */}
          <motion.div
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="space-y-3"
          >
            {faqs.map((faq) => {
              const isOpen = openId === faq.id;

              return (
                <motion.div
                  key={faq.id}
                  id={`faq-${faq.id}`}
                  variants={itemVariants}
                  className={`overflow-hidden rounded-2xl border bg-white shadow-[0_4px_20px_rgba(15,23,42,0.05)] transition-all duration-300 ${isOpen
                    ? "border-[#FF6A00]/35 shadow-[0_8px_36px_rgba(255,106,0,0.12)]"
                    : "border-[#E6E9EF] hover:border-[#FF6A00]/25 hover:shadow-[0_8px_28px_rgba(15,23,42,0.08)]"
                    }`}
                >
                  {/* Question trigger */}
                  <button
                    onClick={() => toggle(faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                    className="flex w-full items-start gap-4 px-6 py-5 text-left"
                  >
                    <div
                      className={`mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border transition-all duration-300 ${isOpen
                        ? "border-[#FF6A00]/40 bg-[#FF6A00]/12 text-[#FF6A00]"
                        : "border-[#E6E9EF] bg-[#F7F9FC] text-[#667085]"
                        }`}
                    >
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"
                          }`}
                      />
                    </div>

                    <span
                      className={`flex-1 text-base font-bold leading-snug transition-colors duration-300 ${isOpen ? "text-[#FF6A00]" : "text-[#111827]"
                        }`}
                    >
                      {faq.question}
                    </span>
                  </button>

                  {/* Answer */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${faq.id}`}
                        variants={answerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="overflow-hidden"
                      >
                        <div className="border-t border-[#F0F2F6] px-6 pb-5 pt-4">
                          <p className="pl-12 text-sm leading-relaxed text-[#667085]">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
