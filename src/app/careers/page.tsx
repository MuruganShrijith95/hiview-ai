"use client";

import React, { useState } from "react";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import GlowCard from "@/components/GlowCard";
import { 
  Users, 
  Sparkles, 
  MapPin, 
  Briefcase, 
  ArrowRight, 
  CheckCircle2, 
  Cpu, 
  Heart, 
  Zap, 
  Globe2 
} from "lucide-react";

import HeroBackgroundEffects from "@/components/HeroBackgroundEffects";

interface Role {
  title: string;
  department: string;
  location: string;
  type: string;
  desc: string;
}

const OPEN_ROLES: Role[] = [
  {
    title: "Senior AI / ML Research Engineer",
    department: "AI Research & Deep Learning",
    location: "Coimbatore, India (R&D Hub) / Remote",
    type: "Full-Time",
    desc: "Develop time-series neural predictors and NLP policy transformers for multimodal logistics networks."
  },
  {
    title: "Staff Distributed Systems Engineer (Kafka / Go)",
    department: "Core Platform Engineering",
    location: "Bhubaneswar, India / Remote",
    type: "Full-Time",
    desc: "Scale our sub-50ms universal ingestion stream processing millions of daily telematics and EDI events."
  },
  {
    title: "Enterprise Solutions Architect (Supply Chain / SAP)",
    department: "Customer Engineering & GTM",
    location: "Alpharetta, GA (USA) / Hybrid",
    type: "Full-Time",
    desc: "Design and implement custom ERP/WMS connectors and autonomous policy blueprints for Fortune 500 clients."
  },
  {
    title: "Lead EDI Integration Engineer (X12 / EDIFACT)",
    department: "EDIFAI Engineering",
    location: "Coimbatore / Bhubaneswar, India",
    type: "Full-Time",
    desc: "Architect the next generation of adaptive schema mappings and automated self-healing EDI heuristics."
  },
  {
    title: "Principal Product Designer (Design Systems)",
    department: "Product & UI/UX",
    location: "Alpharetta, GA / Remote",
    type: "Full-Time",
    desc: "Shape our modern control tower interface, data visualizations, and scrollytelling experiences."
  },
  {
    title: "Regional Sales Director — MENA",
    department: "Global Sales",
    location: "Dubai, United Arab Emirates (UAE)",
    type: "Full-Time",
    desc: "Lead enterprise client acquisition across Middle East energy, cold-chain, and retail distribution accounts."
  }
];

export default function CareersPage() {
  const [selectedDept, setSelectedDept] = useState<string>("ALL");

  const departments = ["ALL", "AI Research & Deep Learning", "Core Platform Engineering", "Customer Engineering & GTM", "EDIFAI Engineering", "Product & UI/UX", "Global Sales"];

  const filteredRoles = selectedDept === "ALL"
    ? OPEN_ROLES
    : OPEN_ROLES.filter((r) => r.department === selectedDept);

  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      {/* Hero */}
      <section className="relative pt-10 pb-12 text-center overflow-hidden">
        {/* Animated Network Stream & Floating Flank Cockpits */}
        <HeroBackgroundEffects variant="careers" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#cfe6ff] bg-[#e8f3ff] px-4 py-1.5 text-xs font-bold text-[#1D9AE1] shadow-sm mb-6">
            <Users className="h-3.5 w-3.5 text-[#1D9AE1]" />
            <span>Join Our Global Team</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0e1b34] tracking-tight leading-[1.15]">
            Build The Future Of{" "}
            <span className="bg-gradient-to-r from-[#1D9AE1] via-[#59b4ff] to-[#1D9AE1] bg-clip-text text-transparent">
              Autonomous Logistics AI
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#547099] leading-relaxed max-w-2xl mx-auto">
            We are solving the hardest computational challenges in global supply chains. Join a world-class team of distributed systems engineers and AI researchers.
          </p>
        </div>
      </section>

      {/* Values & Culture Bento */}
      <AnimatedSection className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Company Values"
          title="What Drives Us At"
          highlightText="HiView AI"
          subtitle="Our principles shape how we build algorithms, ship software, and collaborate globally."
        />

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <GlowCard className="p-6 space-y-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e8f3ff] text-[#1D9AE1] border border-[#cfe6ff]">
              <Zap className="h-5 w-5" />
            </div>
            <h4 className="text-base font-extrabold text-[#0e1b34]">Innovation First</h4>
            <p className="text-xs sm:text-sm text-[#547099] leading-relaxed">
              We apply bleeding-edge transformer models and agentic workflows to industries historically neglected by modern technology.
            </p>
          </GlowCard>

          <GlowCard className="p-6 space-y-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fff8ec] text-[#8c5000] border border-[#fcdba8]">
              <Sparkles className="h-5 w-5" />
            </div>
            <h4 className="text-base font-extrabold text-[#0e1b34]">Execution Over Talk</h4>
            <p className="text-xs sm:text-sm text-[#547099] leading-relaxed">
              We measure our platform not by vanity dashboard metrics, but by hard millions saved in detention, spoilage, and downtime.
            </p>
          </GlowCard>

          <GlowCard className="p-6 space-y-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e8f3ff] text-[#1D9AE1] border border-[#cfe6ff]">
              <Heart className="h-5 w-5" />
            </div>
            <h4 className="text-base font-extrabold text-[#0e1b34]">Customer Obsession</h4>
            <p className="text-xs sm:text-sm text-[#547099] leading-relaxed">
              We build alongside supply chain operators on the warehouse floor and logistics managers in dispatch control towers.
            </p>
          </GlowCard>

          <GlowCard className="p-6 space-y-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e8f3ff] text-[#1D9AE1] border border-[#cfe6ff]">
              <Globe2 className="h-5 w-5" />
            </div>
            <h4 className="text-base font-extrabold text-[#0e1b34]">Global Collaboration</h4>
            <p className="text-xs sm:text-sm text-[#547099] leading-relaxed">
              Seamlessly operating across Atlanta HQ, Dubai, and our R&D centers in Coimbatore and Bhubaneswar.
            </p>
          </GlowCard>
        </div>
      </AnimatedSection>

      {/* Open Positions List */}
      <AnimatedSection className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Current Openings"
          title="Open Positions Across"
          highlightText="Engineering, AI & GTM"
          subtitle="Explore available roles and help shape the next decade of intelligent supply chain infrastructure."
        />

        {/* Filter Pills */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 pb-6 border-b border-[#cfe6ff]">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setSelectedDept(dept)}
              className={`rounded-xl px-4 py-2 text-xs font-bold transition cursor-pointer ${
                selectedDept === dept
                  ? "bg-[#e0efff] text-[#0e1b34] border-2 border-[#1D9AE1] shadow-xs"
                  : "bg-[#edf5fd] text-[#1e3256] border border-[#cfe6ff] hover:bg-[#e4f0fc]"
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Roles Grid */}
        <div className="mt-8 space-y-4">
          {filteredRoles.map((role, idx) => (
            <GlowCard key={idx} className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h4 className="text-base font-extrabold text-[#0e1b34]">{role.title}</h4>
                  <span className="rounded-md bg-[#e8f3ff] px-2.5 py-0.5 text-[10px] font-mono font-bold text-[#1D9AE1] border border-[#cfe6ff]">
                    {role.type}
                  </span>
                </div>
                <div className="text-xs text-[#547099] flex items-center gap-3 font-medium">
                  <span className="text-[#1D9AE1] font-mono font-bold">{role.department}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><MapPin className="h-3 w-3 text-[#1D9AE1]" /> {role.location}</span>
                </div>
                <p className="text-xs sm:text-sm text-[#547099] mt-2 max-w-2xl">{role.desc}</p>
              </div>

              <a
                href={`mailto:careers@hiview.ai?subject=Application for ${encodeURIComponent(role.title)}`}
                className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-b from-[#7CC8F1] to-[#1D9AE1] px-5 py-2.5 text-xs font-bold text-white shadow-[0_10px_24px_-8px_rgba(29,154,225,0.55)] hover:shadow-[0_18px_32px_-10px_rgba(29,154,225,0.7)] transition shrink-0"
              >
                <span>Apply Now</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </GlowCard>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}
