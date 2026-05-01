"use client";

import { motion, type Variants } from "framer-motion";
import { Star, Quote } from "lucide-react";
import ReactCountryFlag from "react-country-flag";

const testimonials = [
  {
    id: "testimonial-1",
    name: "James Whitfield",
    role: "CTO, VaultPay",
    countryCode: "GB",
    image: "https://i.pravatar.cc/150?u=james",
    rating: 5,
    quote:
      "Himnex delivered our fintech MVP in record time — clean code, zero bugs at launch, and they were available whenever we needed them. Best technical partner we've ever worked with.",
  },
  {
    id: "testimonial-2",
    name: "Sarah Kim",
    role: "Founder, GrowthStack",
    countryCode: "US",
    image: "https://i.pravatar.cc/150?u=sarah",
    rating: 5,
    quote:
      "I was skeptical hiring a team from Nepal, but these guys absolutely blew me away. Top-tier React & Node skills, excellent communication, and they truly understood our product vision.",
  },
  {
    id: "testimonial-3",
    name: "Lucas Bauer",
    role: "Product Lead, Nexify",
    countryCode: "DE",
    image: "https://i.pravatar.cc/150?u=lucas",
    rating: 5,
    quote:
      "Three projects in, and every single one delivered on time and above spec. They don't just write code — they solve problems. Himnex is our permanent development partner.",
  },
  {
    id: "testimonial-4",
    name: "Priya Nanda",
    role: "CEO, ClearRoute",
    countryCode: "SG",
    image: "https://i.pravatar.cc/150?u=priya",
    rating: 5,
    quote:
      "The SaaS dashboard they built handles millions of events a day without a hiccup. Professional, transparent, and genuinely invested in our success. Highly recommend.",
  },
  {
    id: "testimonial-5",
    name: "Tom Hargreaves",
    role: "Engineering Manager, ShipBase",
    countryCode: "AU",
    image: "https://i.pravatar.cc/150?u=tom",
    rating: 5,
    quote:
      "Himnex overhauled our legacy backend and migrated us to a microservices architecture — took 6 weeks, zero downtime. Extraordinary work.",
  },
  {
    id: "testimonial-6",
    name: "Anabela Costa",
    role: "Head of Product, Loopify",
    countryCode: "CA",
    image: "https://i.pravatar.cc/150?u=anabela",
    rating: 5,
    quote:
      "We had a tight timeline and an impossible feature list. Himnex made it possible — and even suggested optimizations we hadn't thought of. True partners, not just contractors.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-28 bg-[#F7F9FC] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />

      {/* Background wash */}
      <div className="absolute pointer-events-none inset-0">
        <div className="absolute inset-x-0 top-0 h-72 bg-[linear-gradient(180deg,rgba(255,106,0,0.055),rgba(247,249,252,0))]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#FF6A00]">
            Client Stories
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#111827]">
            What Our Clients Say
          </h2>
          <p className="text-[#667085] text-lg max-w-xl mx-auto leading-relaxed">
            Don&apos;t take our word for it — hear from the businesses we&apos;ve helped scale.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.id}
              id={t.id}
              variants={cardVariants}
              className="group relative p-7 rounded-2xl bg-white border border-[#E6E9EF] hover:border-[#FF6A00]/30 hover:bg-[#FFF8F3] transition-all duration-300 flex flex-col gap-5 hover:shadow-[0_22px_55px_rgba(15,23,42,0.08)]"
            >
              {/* Quote icon */}
              <div className="absolute top-5 right-5 opacity-25 group-hover:opacity-40 transition-opacity duration-300">
                <Quote size={36} className="text-[#FF6A00]" />
              </div>

              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="text-[#FF6A00] fill-[#FF6A00]"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-[#475467] leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-[#E6E9EF]">
                {/* Avatar */}
                <div className="w-9 h-9 rounded-full overflow-hidden border border-[#E6E9EF] flex-shrink-0">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-bold text-[#111827] truncate">
                      {t.name}
                    </span>
                    <ReactCountryFlag
                      countryCode={t.countryCode}
                      svg
                      style={{
                        width: '1.2em',
                        height: '1.2em',
                        borderRadius: '2px',
                      }}
                      title={t.countryCode}
                    />
                  </div>
                  <span className="text-xs text-[#667085]">{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
