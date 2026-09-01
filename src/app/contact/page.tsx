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

import HeroBackgroundEffects from "@/components/HeroBackgroundEffects";

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
    <div className="space-y-12 sm:space-y-16 pb-16">
      {/* Hero */}
      <section className="relative pt-10 pb-12 text-center overflow-hidden">
        {/* Animated Network Stream & Floating Flank Cockpits */}
        <HeroBackgroundEffects variant="contact" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#cfe6ff] bg-[#e8f3ff] px-4 py-1.5 text-xs font-bold text-[#1D9AE1] shadow-sm mb-6">
            <Globe2 className="h-3.5 w-3.5 text-[#1D9AE1]" />
            <span>Global Presence & Support</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0e1b34] tracking-tight leading-[1.15]">
            Connect With Our Global{" "}
            <span className="bg-gradient-to-r from-[#1D9AE1] via-[#59b4ff] to-[#1D9AE1] bg-clip-text text-transparent">
              Supply Chain Team
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#547099] leading-relaxed max-w-2xl mx-auto">
            Reach out to our executive headquarters in Alpharetta, GA or connect with our specialized Engineering & R&D hubs across Dubai, Bhubaneswar, and Coimbatore.
          </p>
        </div>
      </section>

      {/* Main Grid: Direct Contact & Global Offices */}
      <AnimatedSection className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info & Form */}
          <div className="lg:col-span-6 space-y-6">
            {/* Quick Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-[#cfe6ff] bg-gradient-to-b from-[#eef6ff] to-white p-5 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e8f3ff] text-[#1D9AE1] border border-[#cfe6ff] mb-3">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="text-[11px] font-mono uppercase font-bold text-[#547099]">Direct Inquiries</div>
                <a href={`mailto:${COMPANY_INFO.contact.email}`} className="text-sm font-extrabold text-[#0e1b34] hover:text-[#1D9AE1] transition block mt-0.5">
                  {COMPANY_INFO.contact.email}
                </a>
                <div className="text-[11px] text-[#547099] mt-1">Average response &lt; 2 hrs</div>
              </div>

              <div className="rounded-2xl border border-[#cfe6ff] bg-gradient-to-b from-[#eef6ff] to-white p-5 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fff8ec] text-[#8c5000] border border-[#fcdba8] mb-3">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="text-[11px] font-mono uppercase font-bold text-[#547099]">Phone Support</div>
                <a href={`tel:${COMPANY_INFO.contact.phone}`} className="text-sm font-extrabold text-[#0e1b34] hover:text-[#1D9AE1] transition block mt-0.5 font-mono">
                  {COMPANY_INFO.contact.phoneDisplay}
                </a>
                <div className="text-[11px] text-[#547099] mt-1">{COMPANY_INFO.contact.phone}</div>
              </div>
            </div>

            {/* Direct Message Form */}
            <div className="rounded-3xl border-2 border-[#cfe6ff] bg-gradient-to-b from-[#f4f9ff] via-[#f8fbff] to-white p-7 sm:p-8 shadow-[0_12px_36px_-18px_rgba(29,154,225,0.18)]">
              <h3 className="text-xl font-extrabold text-[#0e1b34] mb-1">
                Send Us A Message
              </h3>
              <p className="text-xs text-[#547099] mb-6">
                Have a question about technical integrations, partnerships, or platform capabilities?
              </p>

              {submitted ? (
                <div className="text-center py-8 space-y-3">
                  <div className="flex h-12 w-12 mx-auto items-center justify-center rounded-full bg-[#e8f3ff] text-[#1D9AE1] border border-[#cfe6ff]">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <h4 className="text-lg font-extrabold text-[#0e1b34]">Message Sent Successfully</h4>
                  <p className="text-xs text-[#547099]">
                    Thank you, {formData.name}. Our enterprise logistics specialists will respond shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-[#0e1b34] mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Alex Morgan"
                      className="w-full rounded-xl border border-[#cfe6ff] bg-white px-4 py-2.5 text-xs text-[#0e1b34] placeholder-slate-400 focus:border-[#1D9AE1] focus:outline-none shadow-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0e1b34] mb-1">Business Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="a.morgan@company.com"
                      className="w-full rounded-xl border border-[#cfe6ff] bg-white px-4 py-2.5 text-xs text-[#0e1b34] placeholder-slate-400 focus:border-[#1D9AE1] focus:outline-none shadow-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0e1b34] mb-1">Subject</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full rounded-xl border border-[#cfe6ff] bg-white px-4 py-2.5 text-xs text-[#0e1b34] focus:border-[#1D9AE1] focus:outline-none shadow-xs"
                    >
                      <option value="General Inquiry">General Enterprise Inquiry</option>
                      <option value="ERP / WMS Integration">Custom ERP / WMS Integration</option>
                      <option value="Partnership">Technology / Carrier Partnership</option>
                      <option value="Press & Analyst">Press & Industry Analyst Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0e1b34] mb-1">Message</label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="How can our supply chain AI team assist you?"
                      className="w-full rounded-xl border border-[#cfe6ff] bg-white px-4 py-2.5 text-xs text-[#0e1b34] placeholder-slate-400 focus:border-[#1D9AE1] focus:outline-none resize-none shadow-xs"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-[#7CC8F1] to-[#1D9AE1] py-3 text-xs font-bold text-white shadow-[0_10px_24px_-8px_rgba(29,154,225,0.55)] hover:shadow-[0_18px_32px_-10px_rgba(29,154,225,0.7)] transition cursor-pointer"
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
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#547099] mb-2">
              Global Office Hubs
            </div>

            {COMPANY_INFO.offices.map((office, idx) => (
              <GlowCard key={idx} className="p-6">
                <div className="flex items-center justify-between pb-3 border-b border-[#cfe6ff]">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-[#1D9AE1]" />
                    <span className="font-extrabold text-[#0e1b34] text-base">{office.city}</span>
                  </div>
                  <span className="text-[10px] font-mono font-bold rounded bg-[#e8f3ff] px-2.5 py-0.5 text-[#1D9AE1] border border-[#cfe6ff]">
                    {office.badge}
                  </span>
                </div>

                <div className="mt-3 text-xs text-[#547099] font-mono">
                  {office.address}
                </div>

                <div className="mt-3 text-xs text-[#0e1b34] bg-[#edf5fd] p-3 rounded-xl border border-[#cfe6ff]">
                  <strong className="text-[#547099] block text-[10px] uppercase font-mono mb-0.5">Primary Focus:</strong>
                  {office.focus}
                </div>
              </GlowCard>
            ))}

            <div className="rounded-2xl border border-[#cfe6ff] bg-gradient-to-b from-[#eef6ff] to-white p-5 text-xs text-[#547099] space-y-2">
              <div className="font-extrabold text-[#0e1b34]">Partner & Field Presences:</div>
              <div className="flex flex-wrap gap-2 text-[11px] font-mono">
                {COMPANY_INFO.partnerPresences.map((p, i) => (
                  <span key={i} className="rounded-lg bg-white border border-[#cfe6ff] px-2.5 py-1 text-[#0e1b34] font-bold shadow-xs">
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
