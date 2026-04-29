"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  Clock,
  MessageSquare,
  Briefcase,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { budgetRanges, projectTypes } from "@/lib/contact-options";

const contactMeta = [
  {
    icon: Clock,
    title: "Fast Response",
    body: "We reply within 24 hours — usually much sooner.",
  },
  {
    icon: MessageSquare,
    title: "Free Consultation",
    body: "No commitment. Just a conversation about your idea.",
  },
  {
    icon: Briefcase,
    title: "Flexible Engagement",
    body: "Project-based, retainer, or staff augmentation — your call.",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const selectOption = (field: "projectType" | "budget", value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field] === value ? "" : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = (await response.json().catch(() => null)) as {
        error?: string;
      } | null;

      if (!response.ok) {
        throw new Error(
          result?.error || "We could not send your message. Please try again."
        );
      }

      setSubmitted(true);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "We could not send your message. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-28 bg-[#F7F9FC] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />

      {/* Background wash */}
      <div className="absolute pointer-events-none inset-0">
        <div className="absolute inset-x-0 top-0 h-72 bg-[linear-gradient(180deg,rgba(255,106,0,0.06),rgba(247,249,252,0))]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Left — Info */}
          <div className="lg:col-span-2 space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#FF6A00]">
                Get In Touch
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-[#111827] leading-tight">
                Start Your{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #FF6A00, #ffb347)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Project
                </span>
              </h2>
              <p className="text-[#667085] text-lg leading-relaxed">
                Tell us about your idea and we&apos;ll get back to you with a
                tailored plan — no strings attached.
              </p>
            </motion.div>

            {/* Contact meta cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-4"
            >
              {contactMeta.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="flex items-start gap-4 p-4 rounded-xl border border-[#E6E9EF] bg-white shadow-[0_14px_40px_rgba(15,23,42,0.05)]"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#FF6A00]/10 border border-[#FF6A00]/20 flex items-center justify-center flex-shrink-0">
                      <Icon size={17} className="text-[#FF6A00]" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#111827]">
                        {item.title}
                      </div>
                      <div className="text-xs text-[#667085] leading-relaxed mt-0.5">
                        {item.body}
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>

            {/* Direct contact */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="space-y-3 pt-2"
            >
              <a
                href="mailto:himnexsolutions.np@gmail.com"
                id="contact-email-link"
                className="flex items-center gap-3 text-sm text-[#667085] hover:text-[#FF6A00] transition-colors duration-200"
              >
                <Mail size={15} className="text-[#FF6A00] flex-shrink-0" />
                himnexsolutions.np@gmail.com
              </a>
              <a
                href="tel:+9779869100969"
                id="contact-phone-link"
                className="flex items-center gap-3 text-sm text-[#667085] hover:text-[#FF6A00] transition-colors duration-200"
              >
                <Phone size={15} className="text-[#FF6A00] flex-shrink-0" />
                +977 9869100969
              </a>
              <a
                href="tel:+9779815253061"
                id="contact-phone-link-secondary"
                className="flex items-center gap-3 text-sm text-[#667085] hover:text-[#FF6A00] transition-colors duration-200"
              >
                <Phone size={15} className="text-[#FF6A00] flex-shrink-0" />
                +977 9815253061
              </a>
              <div className="flex items-center gap-3 text-sm text-[#667085]">
                <MapPin size={15} className="text-[#FF6A00] flex-shrink-0" />
                Imadol, Lalitpur 44705, Nepal
              </div>
            </motion.div>
          </div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-3"
          >
            <div className="rounded-2xl border border-[#E6E9EF] bg-white p-8 shadow-[0_30px_80px_rgba(15,23,42,0.10)]">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center justify-center text-center py-12 gap-5"
                >
                  <div className="w-16 h-16 rounded-full bg-[#FF6A00]/15 border border-[#FF6A00]/30 flex items-center justify-center">
                    <CheckCircle size={32} className="text-[#FF6A00]" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-[#111827]">
                      Message Sent!
                    </h3>
                    <p className="text-[#667085] max-w-sm leading-relaxed">
                      Thanks for reaching out. We&apos;ll get back to you
                      within 24 hours with a tailored response.
                    </p>
                  </div>
                  <Button
                    onClick={() => {
                      setSubmitted(false);
                      setSubmitError("");
                      setFormData({
                        name: "",
                        email: "",
                        company: "",
                        projectType: "",
                        budget: "",
                        message: "",
                      });
                    }}
                    variant="outline"
                    className="border-[#D0D5DD] bg-white hover:bg-[#F7F9FC] text-[#111827] text-sm mt-2"
                  >
                    Send another message
                  </Button>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  id="contact-form"
                  className="space-y-6"
                >
                  {/* Name + Email */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="contact-name"
                        className="text-xs font-semibold text-[#667085] uppercase tracking-wide"
                      >
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Jane Smith"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#D0D5DD] text-[#111827] text-sm placeholder-[#98A2B3] focus:outline-none focus:border-[#FF6A00]/60 focus:bg-white transition-all duration-200 shadow-[0_1px_2px_rgba(16,24,40,0.04)]"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label
                        htmlFor="contact-email"
                        className="text-xs font-semibold text-[#667085] uppercase tracking-wide"
                      >
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="jane@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#D0D5DD] text-[#111827] text-sm placeholder-[#98A2B3] focus:outline-none focus:border-[#FF6A00]/60 focus:bg-white transition-all duration-200 shadow-[0_1px_2px_rgba(16,24,40,0.04)]"
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-company"
                      className="text-xs font-semibold text-[#667085] uppercase tracking-wide"
                    >
                      Company / Project Name
                    </label>
                    <input
                      id="contact-company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Acme Corp"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#D0D5DD] text-[#111827] text-sm placeholder-[#98A2B3] focus:outline-none focus:border-[#FF6A00]/60 focus:bg-white transition-all duration-200 shadow-[0_1px_2px_rgba(16,24,40,0.04)]"
                    />
                  </div>

                  {/* Project type */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-[#667085] uppercase tracking-wide">
                      Project Type
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {projectTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => selectOption("projectType", type)}
                          className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 ${
                            formData.projectType === type
                              ? "bg-[#FF6A00]/15 border-[#FF6A00]/50 text-[#FF6A00]"
                              : "bg-[#F7F9FC] border-[#E6E9EF] text-[#667085] hover:border-[#D0D5DD] hover:text-[#111827]"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-[#667085] uppercase tracking-wide">
                      Budget Range
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {budgetRanges.map((range) => (
                        <button
                          key={range}
                          type="button"
                          onClick={() => selectOption("budget", range)}
                          className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 ${
                            formData.budget === range
                              ? "bg-[#FF6A00]/15 border-[#FF6A00]/50 text-[#FF6A00]"
                              : "bg-[#F7F9FC] border-[#E6E9EF] text-[#667085] hover:border-[#D0D5DD] hover:text-[#111827]"
                          }`}
                        >
                          {range}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-message"
                      className="text-xs font-semibold text-[#667085] uppercase tracking-wide"
                    >
                      Tell Us About Your Project *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe what you're building, the problem it solves, and any technical requirements you have in mind..."
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#D0D5DD] text-[#111827] text-sm placeholder-[#98A2B3] focus:outline-none focus:border-[#FF6A00]/60 focus:bg-white transition-all duration-200 resize-none leading-relaxed shadow-[0_1px_2px_rgba(16,24,40,0.04)]"
                    />
                  </div>

                  {/* Submit */}
                  {submitError ? (
                    <p
                      role="alert"
                      className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
                    >
                      {submitError}
                    </p>
                  ) : null}

                  <Button
                    type="submit"
                    disabled={loading}
                    id="contact-submit-btn"
                    className="w-full bg-[#FF6A00] hover:bg-[#ff8533] text-[#fff] font-bold text-base h-12 gap-2 transition-all duration-200 hover:scale-[1.01] hover:shadow-[0_18px_35px_rgba(255,106,0,0.26)] disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-[#111827]/30 border-t-[#111827] rounded-full animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={17} />
                      </>
                    )}
                  </Button>

                  <p className="text-center text-xs text-[#98A2B3]">
                    We&apos;ll never share your information. Reply within 24 hrs guaranteed.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
