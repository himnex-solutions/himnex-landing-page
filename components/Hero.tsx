"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Code2,
  Globe2,
  Layers3,
  LineChart,
  LockKeyhole,
  Network,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay },
  }),
};

const trustStats = [
  { value: "50+", label: "products shipped" },
  { value: "15+", label: "markets reached" },
  { value: "98%", label: "client satisfaction" },
];

const capabilities = [
  "Platform engineering",
  "Secure APIs",
  "Conversion-ready web apps",
];

const deliveryLanes = [
  { label: "Discovery", width: "41%", tone: "bg-[#111827]" },
  { label: "Prototype", width: "64%", tone: "bg-brand-orange" },
  { label: "Launch", width: "83%", tone: "bg-[#16A34A]" },
];

const systemNodes = [
  { label: "Web", icon: Globe2, position: "left-[8%] top-[18%]" },
  { label: "API", icon: Code2, position: "right-[10%] top-[22%]" },
  { label: "Data", icon: Layers3, position: "left-[15%] bottom-[16%]" },
  { label: "Scale", icon: Network, position: "right-[14%] bottom-[14%]" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[98svh] items-center overflow-hidden bg-[#FBFCFE] pt-24 pb-10 sm:pt-28 sm:pb-14 lg:pt-32"
    >
      <div
        className="absolute inset-0 -z-20 opacity-80"
        style={{
          backgroundImage: `linear-gradient(rgba(17,24,39,0.055) 1px, transparent 1px),
            linear-gradient(90deg, rgba(17,24,39,0.055) 1px, transparent 1px)`,
          backgroundSize: "56px 56px",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(116deg,rgba(255,255,255,0.92)_0%,rgba(255,255,255,0.76)_44%,rgba(255,106,0,0.08)_44.2%,rgba(255,106,0,0.02)_64%,rgba(17,24,39,0.05)_64.2%,rgba(255,255,255,0.84)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-28 bg-linear-to-t from-white to-transparent" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14 lg:px-8">
        <div className="max-w-2xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.12}
            className="space-y-5"
          >
            <h1 className="max-w-5xl text-4xl font-black leading-[1.03] tracking-tight text-[#111827] sm:text-6xl lg:text-6xl">
            Custom software
              <span className="block text-brand-orange">for Ambitious Teams</span>
            </h1>
            <p className="max-w-xl text-base leading-8 text-[#5F6B7A] sm:text-lg">
            Himnex Solutions works with growing companies to design and build web platforms, systems, and APIs that genuinely help move the business forward and scale with confidence.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.26}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
          >
            <Button
              asChild
              size="lg"
              className="h-12 rounded-lg bg-brand-orange px-6 text-base font-bold text-white shadow-[0_18px_40px_rgba(255,106,0,0.28)] transition-all duration-200 hover:scale-[1.02] hover:bg-[#ff8533]"
            >
              <Link href="/contact" id="hero-get-quote-btn">
                Start a Project
                <ArrowRight size={18} />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-lg border-[#D0D5DD] bg-white px-6 text-base font-semibold text-[#111827] shadow-[0_12px_30px_rgba(15,23,42,0.07)] hover:bg-[#F7F9FC]"
            >
              <Link href="/contact" id="hero-book-call-btn">
                <Calendar size={17} />
                Book Strategy Call
              </Link>
            </Button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.4}
            className="mt-7 grid max-w-xl grid-cols-3 divide-x divide-[#E6E9EF] rounded-lg border border-[#E6E9EF] bg-white/88 shadow-[0_18px_50px_rgba(15,23,42,0.07)] backdrop-blur"
          >
            {trustStats.map((stat) => (
              <div key={stat.label} className="px-3 py-3.5 sm:px-4">
                <div className="text-xl font-black tracking-tight text-[#111827] sm:text-2xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-[11px] font-semibold uppercase leading-4 tracking-[0.12em] text-[#667085]">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.52}
            className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium text-[#667085]"
          >
            {capabilities.map((capability) => (
              <span key={capability} className="inline-flex items-center gap-1.5">
                <ChevronRight size={14} className="text-brand-orange" />
                {capability}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 34, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.85, ease: "easeOut", delay: 0.18 }}
          className="hidden lg:block"
        >
          <DeliveryConsole />
        </motion.div>
      </div>
    </section>
  );
}

function DeliveryConsole() {
  return (
    <div className="relative ml-auto aspect-[1.05/1] w-full max-w-155">
      <div className="absolute inset-0 rounded-4xl border border-[#111827]/10 bg-white/86 shadow-[0_34px_90px_rgba(15,23,42,0.14)] backdrop-blur-xl" />
      <div className="absolute inset-3 rounded-3xl border border-[#E6E9EF] bg-[#FCFDFE]" />

      <div className="absolute left-8 right-8 top-8 flex items-center justify-between border-b border-[#E6E9EF] pb-5">
        <div>
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-brand-orange">
            Himnex Delivery OS
          </div>
          <div className="mt-1 text-2xl font-black tracking-tight text-[#111827]">
            Launch command
          </div>
        </div>
        <div className="flex items-center gap-2 rounded-lg border border-[#BBF7D0] bg-[#F0FDF4] px-3 py-2 text-xs font-bold text-[#15803D]">
          <CheckCircle2 size={15} />
          Production-ready
        </div>
      </div>

      <div className="absolute left-8 top-32 w-[43%] space-y-4">
        <div className="rounded-xl border border-[#E6E9EF] bg-white p-4 shadow-[0_18px_44px_rgba(15,23,42,0.07)]">
          <div className="mb-4 flex items-center justify-between">
            <div className="text-sm font-bold text-[#111827]">
              Delivery velocity
            </div>
            <LineChart size={17} className="text-brand-orange" />
          </div>
          <div className="flex h-24 items-end gap-2">
            {[28, 44, 38, 61, 55, 78, 68, 92].map((height, index) => (
              <motion.div
                key={height}
                initial={{ height: 0 }}
                animate={{ height: `${height}%` }}
                transition={{ duration: 0.7, delay: 0.55 + index * 0.06 }}
                className="w-full rounded-t-md bg-brand-orange"
                style={{ opacity: 0.3 + index * 0.08 }}
              />
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-[#E6E9EF] bg-white p-4 shadow-[0_18px_44px_rgba(15,23,42,0.06)]">
          <div className="mb-4 flex items-center gap-2 text-sm font-bold text-[#111827]">
            <ShieldCheck size={17} className="text-[#16A34A]" />
            Build integrity
          </div>
          <div className="space-y-3">
            {deliveryLanes.map((lane) => (
              <div key={lane.label}>
                <div className="mb-1.5 flex items-center justify-between text-xs font-semibold text-[#667085]">
                  <span>{lane.label}</span>
                  <span>{lane.width}</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-[#EEF2F6]">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: lane.width }}
                    transition={{ duration: 0.9, ease: "easeOut", delay: 0.7 }}
                    className={`h-full rounded-full ${lane.tone}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute right-8 top-32 h-67.5 w-[47%] overflow-hidden rounded-xl border border-[#E6E9EF] bg-[#111827] shadow-[0_28px_70px_rgba(17,24,39,0.22)]">
        <div className="flex h-11 items-center justify-between border-b border-white/10 px-4">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-brand-orange" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
          </div>
          <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/50">
            architecture
          </div>
        </div>

        <div className="relative h-[calc(100%-2.75rem)]">
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 320 260"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M76 64 C132 64 128 128 160 128 C192 128 188 64 244 64"
              stroke="rgba(255,255,255,0.18)"
              strokeWidth="1.5"
            />
            <path
              d="M76 194 C128 194 127 132 160 132 C193 132 192 194 244 194"
              stroke="rgba(255,255,255,0.18)"
              strokeWidth="1.5"
            />
            <path
              d="M86 76 L234 184"
              stroke="rgba(255,106,0,0.34)"
              strokeWidth="1.5"
              strokeDasharray="6 8"
            />
            <path
              d="M86 184 L234 76"
              stroke="rgba(255,106,0,0.24)"
              strokeWidth="1.5"
              strokeDasharray="6 8"
            />
          </svg>

          <motion.div
            animate={{ scale: [1, 1.08, 1], opacity: [0.72, 1, 0.72] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-brand-orange/50 bg-brand-orange text-[#111827] shadow-[0_0_50px_rgba(255,106,0,0.46)]"
          >
            <Zap size={30} fill="currentColor" />
          </motion.div>

          {systemNodes.map((node) => {
            const Icon = node.icon;
            return (
              <div
                key={node.label}
                className={`absolute ${node.position} flex min-w-20 flex-col items-center gap-2 rounded-xl border border-white/10 bg-white/8 px-3 py-3 text-white shadow-[0_16px_36px_rgba(0,0,0,0.2)] backdrop-blur`}
              >
                <Icon size={18} className="text-[#FFB347]" />
                <span className="text-xs font-bold">{node.label}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-8 left-8 right-8 grid grid-cols-3 gap-3">
        {[
          { label: "Security", value: "A-grade", icon: LockKeyhole },
          { label: "Latency", value: "Fast", icon: Zap },
          { label: "Roadmap", value: "Clear", icon: CheckCircle2 },
        ].map((metric) => {
          const Icon = metric.icon;
          return (
            <div
              key={metric.label}
              className="rounded-xl border border-[#E6E9EF] bg-white p-4 shadow-[0_14px_34px_rgba(15,23,42,0.06)]"
            >
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-[#FFF4EC] text-brand-orange">
                <Icon size={17} />
              </div>
              <div className="text-lg font-black text-[#111827]">
                {metric.value}
              </div>
              <div className="text-xs font-semibold uppercase tracking-[0.13em] text-[#667085]">
                {metric.label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
