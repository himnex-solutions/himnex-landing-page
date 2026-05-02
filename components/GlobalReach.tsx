"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useReducedMotion } from "framer-motion";
import {
  Globe,
  Star,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";
import ReactCountryFlag from "react-country-flag";

type Stat = {
  icon: LucideIcon;
  target: number;
  label: string;
  suffix: string;
  decimals?: number;
  duration: number;
};

const stats: Stat[] = [
  {
    icon: Globe,
    target: 15,
    suffix: "+",
    label: "Countries Served",
    duration: 2.2,
  },
  {
    icon: Users,
    target: 50,
    suffix: "+",
    label: "Happy Clients",
    duration: 2.35,
  },
  {
    icon: Star,
    target: 4.9,
    suffix: "★",
    label: "Client Rating",
    decimals: 1,
    duration: 2.5,
  },
  {
    icon: TrendingUp,
    target: 3,
    suffix: "×",
    label: "Avg. ROI Boost",
    duration: 2.25,
  },
];

const countries = [
  { code: "NP", name: "Nepal" },
  { code: "US", name: "United States" },
  { code: "GB", name: "United Kingdom" },
  { code: "AU", name: "Australia" },
  { code: "SG", name: "Singapore" },
  { code: "DE", name: "Germany" },
  { code: "CA", name: "Canada" },
  { code: "NL", name: "Netherlands" },
];
const tickerCopies = [0, 1, 2];

function AnimatedStatValue({
  target,
  suffix,
  decimals = 0,
  duration,
}: Omit<Stat, "icon" | "label">) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.75 });
  const prefersReducedMotion = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    if (prefersReducedMotion) {
      const frameId = window.requestAnimationFrame(() => {
        setValue(target);
      });

      return () => window.cancelAnimationFrame(frameId);
    }

    const controls = animate(0, target, {
      duration,
      ease: "easeOut",
      onUpdate(latest) {
        setValue(latest);
      },
    });

    return () => controls.stop();
  }, [duration, isInView, prefersReducedMotion, target]);

  const formattedValue =
    decimals > 0
      ? value.toFixed(decimals)
      : Math.round(value).toLocaleString("en-US");

  return (
    <div
      ref={ref}
      className="relative inline-flex items-center justify-center tabular-nums"
    >
      <motion.span
        aria-hidden="true"
        className="absolute inset-0 text-[#FF6A00]/20 blur-[1px]"
        initial={{ opacity: 0, scale: 0.96, y: 8 }}
        animate={
          isInView && !prefersReducedMotion
            ? { opacity: 1, scale: 1.03, y: [-4, 0] }
            : { opacity: 0, scale: 1, y: 0 }
        }
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {formattedValue}
        {suffix}
      </motion.span>

      <motion.span
        className="relative"
        animate={
          isInView && !prefersReducedMotion
            ? {
              scale: [0.98, 1.03, 1],
              y: [10, 0],
              opacity: [0, 1, 1],
            }
            : { scale: 1, y: 0, opacity: 1 }
        }
        transition={{
          duration: 1.1,
          ease: "easeOut",
        }}
      >
        {formattedValue}
        {suffix}
      </motion.span>
    </div>
  );
}

export default function GlobalReach() {
  const prefersReducedMotion = useReducedMotion();
  const [isTickerPaused, setIsTickerPaused] = useState(false);

  return (
    <section
      id="global-reach"
      className="py-28 relative overflow-hidden bg-[#F7F9FC]"
    >
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />

      {/* Background wash */}
      <div className="absolute pointer-events-none inset-0">
        <div className="absolute inset-x-0 top-0 h-72 bg-[linear-gradient(180deg,rgba(255,106,0,0.055),rgba(247,249,252,0))]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#E6E9EF] bg-white/90 px-6 py-12 shadow-[0_24px_80px_rgba(15,23,42,0.06)] backdrop-blur-sm sm:px-10 sm:py-14 lg:px-14">
          <div className="text-center space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16 space-y-4"
            >
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#FF6A00]">
                Global Reach
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-[#111827] py-2">
                Global Software,{" "}
                Built in <span className="text-[#FF6A00]">Nepal</span>
              </h2>
              <p className="text-[#667085] text-lg max-w-l mx-auto leading-relaxed">
                Born in the heart of Nepal and built for a global stage, we collaborate with startups and enterprises across the US, UK, Australia, Singapore, and beyond—delivering software solutions that transcend borders.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-6"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.08 }}
                    className="group relative overflow-hidden rounded-[1.6rem] border border-[#E6E9EF] bg-[linear-gradient(180deg,#FFFFFF_0%,#FCFCFD_100%)] p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#FF6A00]/25 hover:shadow-[0_24px_55px_rgba(15,23,42,0.08)]"
                  >
                    <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#FF6A00]/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="flex justify-center mb-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#FF6A00]/18 bg-[#FF6A00]/8 transition-all duration-300 group-hover:bg-[#FF6A00]/14">
                        <Icon size={18} className="text-[#FF6A00]" />
                      </div>
                    </div>
                    <div className="mb-1 text-3xl font-black text-[#111827]">
                      <AnimatedStatValue
                        target={stat.target}
                        suffix={stat.suffix}
                        decimals={stat.decimals}
                        duration={stat.duration}
                      />
                    </div>
                    <div className="text-sm font-medium tracking-[0.01em] text-[#667085]">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Country flags row */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="pt-6"
            >
              <div className="mb-4 text-center">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#98A2B3]">
                  Trusted Across Markets
                </p>
              </div>

              <div
                className="relative overflow-hidden rounded-full border border-[#E6E9EF] bg-[#F9FAFB] px-3 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]"
                onMouseEnter={() => setIsTickerPaused(true)}
                onMouseLeave={() => setIsTickerPaused(false)}
              >
                <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#F9FAFB] to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#F9FAFB] to-transparent" />

                {prefersReducedMotion ? (
                  <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                    {countries.map((country) => (
                      <div
                        key={country.code}
                        className="flex min-w-[72px] items-center justify-center rounded-full border border-white bg-white px-4 py-2 shadow-sm"
                        title={country.name}
                      >
                        <ReactCountryFlag
                          countryCode={country.code}
                          svg
                          aria-label={country.name}
                          title={country.name}
                          style={{ width: "1.75rem", height: "1.75rem" }}
                          className="sm:[width:2rem] sm:[height:2rem]"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div
                    className="global-reach-marquee flex w-max items-center"
                    style={{
                      animationPlayState: isTickerPaused ? "paused" : "running",
                    }}
                  >
                    {tickerCopies.map((row) => (
                      <div
                        key={row}
                        aria-hidden={row > 0}
                        className="flex shrink-0 items-center gap-3 sm:gap-4"
                      >
                        {countries.map((country) => (
                          <div
                            key={`${country.code}-${row}`}
                            className="flex min-w-[72px] items-center justify-center rounded-full border border-white bg-white px-4 py-2 shadow-[0_10px_24px_rgba(15,23,42,0.05)]"
                            title={country.name}
                          >
                            <ReactCountryFlag
                              countryCode={country.code}
                              svg
                              aria-label={country.name}
                              title={country.name}
                              style={{ width: "1.75rem", height: "1.75rem" }}
                              className="sm:[width:2rem] sm:[height:2rem]"
                            />
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
