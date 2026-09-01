"use client";

import React, { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import GlowCard from "@/components/GlowCard";
import { PRODUCTS, INDUSTRIES } from "@/lib/constants";
import { 
  Sparkles, 
  CheckCircle2, 
  Calendar, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  Cpu, 
  Award,
  Zap
} from "lucide-react";

import HeroBackgroundEffects from "@/components/HeroBackgroundEffects";

export default function DemoPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    workEmail: "",
    company: "",
    jobTitle: "",
    phone: "",
    primaryInterest: "EDIFAI",
    industry: "Manufacturing",
    annualSpend: "$25M - $50M",
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      {/* Hero */}
      <section className="relative pt-10 pb-12 text-center overflow-hidden">
        {/* Animated Network Stream & Floating Flank Cockpits */}
        <HeroBackgroundEffects variant="demo" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#cfe6ff] bg-[#e8f3ff] px-4 py-1.5 text-xs font-bold text-[#1D9AE1] shadow-sm mb-6">
            <Sparkles className="h-3.5 w-3.5 text-[#1D9AE1]" />
            <span>Personalized 1-on-1 Enterprise Demonstration</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0e1b34] tracking-tight leading-[1.15]">
            See HiView AI In Action With{" "}
            <span className="bg-gradient-to-r from-[#1D9AE1] via-[#59b4ff] to-[#1D9AE1] bg-clip-text text-transparent">
              Your Supply Chain Data
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#547099] leading-relaxed max-w-2xl mx-auto">
            Schedule a 30-minute demonstration with our senior supply chain AI architects. We will connect sample ERP or EDI payloads to demonstrate automated scoring and exception resolution.
          </p>
        </div>
      </section>

      {/* Main Interactive Form & Value Props */}
      <AnimatedSection className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: What to Expect */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl border-2 border-[#cfe6ff] bg-gradient-to-b from-[#f4f9ff] via-[#f8fbff] to-white p-7 sm:p-8 shadow-[0_12px_36px_-18px_rgba(29,154,225,0.18)] space-y-6">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#1D9AE1]">
                What to Expect During Your Demo
              </div>

              <ul className="space-y-4 text-xs sm:text-sm text-[#547099]">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#1D9AE1] shrink-0 mt-0.5" />
                  <span><strong className="text-[#0e1b34]">Live Anomaly Simulation:</strong> Watch the AI identify and autonomously resolve EDI schema failures or temperature excursions in real time.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#1D9AE1] shrink-0 mt-0.5" />
                  <span><strong className="text-[#0e1b34]">Custom ROI Assessment:</strong> Review a calculated estimate of hard cost savings across detention, demurrage, and working capital.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#1D9AE1] shrink-0 mt-0.5" />
                  <span><strong className="text-[#0e1b34]">Integration Architecture Review:</strong> Review our pre-built bi-directional connectors for your specific SAP, Oracle, or Manhattan WMS instances.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#1D9AE1] shrink-0 mt-0.5" />
                  <span><strong className="text-[#0e1b34]">Human-in-the-Loop Governance:</strong> See how your team sets confidence thresholds and rules via the Natural Language Policy Engine.</span>
                </li>
              </ul>

              <div className="pt-4 border-t border-[#cfe6ff] space-y-2.5 text-xs text-[#547099]">
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-[#1D9AE1]" />
                  <span>TAG 2026 Top 40 Most Innovative Technology Company</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-[#1D9AE1]" />
                  <span>SOC 2 Type II Certified & GxP / FDA 21 CFR Compliant</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Booking Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border-2 border-[#cfe6ff] bg-gradient-to-b from-[#f4f9ff] via-[#f8fbff] to-white p-7 sm:p-10 shadow-[0_12px_36px_-18px_rgba(29,154,225,0.18)] relative overflow-hidden">
              {isSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="flex h-16 w-16 mx-auto items-center justify-center rounded-full bg-[#e8f3ff] text-[#1D9AE1] border border-[#cfe6ff]">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#0e1b34]">
                    Demonstration Request Received!
                  </h3>
                  <p className="text-sm text-[#547099] max-w-md mx-auto">
                    Thank you, {formData.firstName}. A HiView Supply Chain Solutions Architect will reach out within 2 business hours to confirm your meeting slot.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 rounded-xl bg-white border border-[#cfe6ff] px-6 py-2.5 text-xs font-bold text-[#0e1b34] hover:bg-[#eef6ff] shadow-xs cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[#cfe6ff]">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#547099]">
                      Step 1 of 1: Enterprise Information
                    </span>
                    <span className="text-xs text-[#1D9AE1] font-mono font-bold">
                      Fast 30-Min Briefing
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#0e1b34] mb-1">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        placeholder="Sarah"
                        className="w-full rounded-xl border border-[#cfe6ff] bg-white px-4 py-2.5 text-xs text-[#0e1b34] placeholder-slate-400 focus:border-[#1D9AE1] focus:outline-none shadow-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#0e1b34] mb-1">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        placeholder="Jenkins"
                        className="w-full rounded-xl border border-[#cfe6ff] bg-white px-4 py-2.5 text-xs text-[#0e1b34] placeholder-slate-400 focus:border-[#1D9AE1] focus:outline-none shadow-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#0e1b34] mb-1">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.workEmail}
                        onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                        placeholder="s.jenkins@enterprise.com"
                        className="w-full rounded-xl border border-[#cfe6ff] bg-white px-4 py-2.5 text-xs text-[#0e1b34] placeholder-slate-400 focus:border-[#1D9AE1] focus:outline-none shadow-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#0e1b34] mb-1">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Global Logistics Corp"
                        className="w-full rounded-xl border border-[#cfe6ff] bg-white px-4 py-2.5 text-xs text-[#0e1b34] placeholder-slate-400 focus:border-[#1D9AE1] focus:outline-none shadow-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#0e1b34] mb-1">
                        Job Title
                      </label>
                      <input
                        type="text"
                        value={formData.jobTitle}
                        onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                        placeholder="VP of Supply Chain"
                        className="w-full rounded-xl border border-[#cfe6ff] bg-white px-4 py-2.5 text-xs text-[#0e1b34] placeholder-slate-400 focus:border-[#1D9AE1] focus:outline-none shadow-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#0e1b34] mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 019-2834"
                        className="w-full rounded-xl border border-[#cfe6ff] bg-white px-4 py-2.5 text-xs text-[#0e1b34] placeholder-slate-400 focus:border-[#1D9AE1] focus:outline-none shadow-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#0e1b34] mb-1">
                        Primary Product Focus
                      </label>
                      <select
                        value={formData.primaryInterest}
                        onChange={(e) => setFormData({ ...formData, primaryInterest: e.target.value })}
                        className="w-full rounded-xl border border-[#cfe6ff] bg-white px-4 py-2.5 text-xs text-[#0e1b34] focus:border-[#1D9AE1] focus:outline-none shadow-xs"
                      >
                        {PRODUCTS.map((p) => (
                          <option key={p.id} value={p.name}>
                            {p.name} — {p.tagline}
                          </option>
                        ))}
                        <option value="All">Full Autonomous Control Tower Suite</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0e1b34] mb-1">
                        Industry Vertical
                      </label>
                      <select
                        value={formData.industry}
                        onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                        className="w-full rounded-xl border border-[#cfe6ff] bg-white px-4 py-2.5 text-xs text-[#0e1b34] focus:border-[#1D9AE1] focus:outline-none shadow-xs"
                      >
                        {INDUSTRIES.map((ind) => (
                          <option key={ind.id} value={ind.name}>
                            {ind.name}
                          </option>
                        ))}
                        <option value="Other">Other Enterprise Industry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0e1b34] mb-1">
                      Current Supply Chain Bottleneck or Objective (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="e.g. Experiencing high demurrage fees at West Coast ports and frequent EDI 856 ASN transaction failures..."
                      className="w-full rounded-xl border border-[#cfe6ff] bg-white px-4 py-2.5 text-xs text-[#0e1b34] placeholder-slate-400 focus:border-[#1D9AE1] focus:outline-none resize-none shadow-xs"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-[#7CC8F1] to-[#1D9AE1] py-3.5 text-xs font-bold text-white shadow-[0_10px_24px_-8px_rgba(29,154,225,0.55)] hover:shadow-[0_18px_32px_-10px_rgba(29,154,225,0.7)] transition cursor-pointer"
                  >
                    <span>Confirm Live Demonstration</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
