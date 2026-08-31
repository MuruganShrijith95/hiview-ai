"use client";

import React, { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import GlowCard from "@/components/GlowCard";
import { COMPANY_INFO } from "@/lib/constants";
import { 
  MapPin, 
  Mail, 
  Phone, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Globe2, 
  Send,
  MessageSquare
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: ""
  });
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      {/* Hero */}
      <section className="relative pt-12 pb-16 text-center">
        <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[750px] rounded-full bg-sky-500/15 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-950/40 px-4 py-1.5 text-xs font-semibold text-sky-300 backdrop-blur-md mb-6">
            <Globe2 className="h-3.5 w-3.5 text-sky-400" />
            <span>Global Presence & Support</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-ink tracking-tight leading-[1.15]">
            Connect With Our Global{" "}
            <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Supply Chain Team
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Reach out to our executive headquarters in Alpharetta, GA or connect with our specialized Engineering & R&D hubs across Dubai, Bhubaneswar, and Coimbatore.
          </p>
        </div>
      </section>

      {/* Main Grid: Direct Contact & Global Offices */}
      <AnimatedSection className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & Form */}
          <div className="lg:col-span-6 space-y-6">
            {/* Quick Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-slate-300/10 bg-slate-900/60 p-5 backdrop-blur-xl">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/20 text-sky-400 mb-3">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="text-[11px] font-mono uppercase font-bold text-slate-400">Direct Inquiries</div>
                <a href={`mailto:${COMPANY_INFO.contact.email}`} className="text-sm font-bold text-ink hover:text-sky-400 transition block mt-0.5">
                  {COMPANY_INFO.contact.email}
                </a>
                <div className="text-[11px] text-slate-500 mt-1">Average response &lt; 2 hrs</div>
              </div>

              <div className="rounded-2xl border border-slate-300/10 bg-slate-900/60 p-5 backdrop-blur-xl">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400 mb-3">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="text-[11px] font-mono uppercase font-bold text-slate-400">Phone Support</div>
                <a href={`tel:${COMPANY_INFO.contact.phone}`} className="text-sm font-bold text-ink hover:text-amber-400 transition block mt-0.5 font-mono">
                  {COMPANY_INFO.contact.phoneDisplay}
                </a>
                <div className="text-[11px] text-slate-500 mt-1">{COMPANY_INFO.contact.phone}</div>
              </div>
            </div>

            {/* Direct Message Form */}
            <div className="rounded-3xl border border-slate-300/10 bg-slate-950/80 p-8 backdrop-blur-xl shadow-2xl">
              <h3 className="text-xl font-bold text-ink mb-1">
                Send Us A Message
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Have a question about technical integrations, partnerships, or platform capabilities?
              </p>

              {submitted ? (
                <div className="text-center py-8 space-y-3">
                  <div className="flex h-12 w-12 mx-auto items-center justify-center rounded-full bg-sky-500/20 text-sky-400">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <h4 className="text-lg font-bold text-ink">Message Sent Successfully</h4>
                  <p className="text-xs text-slate-300">
                    Thank you, {formData.name}. Our enterprise logistics specialists will respond shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Alex Morgan"
                      className="w-full rounded-xl border border-slate-300/10 bg-slate-900 px-4 py-2.5 text-xs text-ink placeholder-slate-600 focus:border-sky-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Business Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="a.morgan@company.com"
                      className="w-full rounded-xl border border-slate-300/10 bg-slate-900 px-4 py-2.5 text-xs text-ink placeholder-slate-600 focus:border-sky-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Subject</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full rounded-xl border border-slate-300/10 bg-slate-900 px-4 py-2.5 text-xs text-ink focus:border-sky-400 focus:outline-none"
                    >
                      <option value="General Inquiry">General Enterprise Inquiry</option>
                      <option value="ERP / WMS Integration">Custom ERP / WMS Integration</option>
                      <option value="Partnership">Technology / Carrier Partnership</option>
                      <option value="Press & Analyst">Press & Industry Analyst Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Message</label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="How can our supply chain AI team assist you?"
                      className="w-full rounded-xl border border-slate-300/10 bg-slate-900 px-4 py-2.5 text-xs text-ink placeholder-slate-600 focus:border-sky-400 focus:outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 py-3 text-xs font-bold text-white shadow-lg hover:from-sky-400 hover:to-blue-500 transition"
                  >
                    <span>Send Message</span>
                    <Send className="h-3.5 w-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Global Office Hubs */}
          <div className="lg:col-span-6 space-y-4">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
              Global Office Hubs
            </div>

            {COMPANY_INFO.offices.map((office, idx) => (
              <GlowCard key={idx} className="p-6">
                <div className="flex items-center justify-between pb-3 border-b border-slate-300/10">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-sky-400" />
                    <span className="font-bold text-ink text-base">{office.city}</span>
                  </div>
                  <span className="text-[10px] font-mono font-bold rounded bg-slate-800 px-2.5 py-0.5 text-sky-400">
                    {office.badge}
                  </span>
                </div>

                <div className="mt-3 text-xs text-slate-300 font-mono">
                  {office.address}
                </div>

                <div className="mt-3 text-xs text-slate-400 bg-slate-950/60 p-3 rounded-xl border border-slate-300/5">
                  <strong className="text-slate-300 block text-[10px] uppercase font-mono mb-0.5">Primary Focus:</strong>
                  {office.focus}
                </div>
              </GlowCard>
            ))}

            <div className="rounded-2xl border border-slate-300/10 bg-slate-900/40 p-5 text-xs text-slate-400 space-y-2">
              <div className="font-bold text-ink">Partner & Field Presences:</div>
              <div className="flex flex-wrap gap-2 text-[11px] font-mono">
                {COMPANY_INFO.partnerPresences.map((p, i) => (
                  <span key={i} className="rounded bg-slate-800 px-2 py-1 text-slate-300">
                    {p.country} ({p.city})
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
