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
    desc: "Shape our dark-mode glassmorphic control tower interface, data visualizations, and scrollytelling experiences."
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
    <div className="space-y-24 sm:space-y-32 pb-24">
      {/* Hero */}
      <section className="relative pt-12 pb-16 text-center">
        <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[750px] rounded-full bg-sky-500/15 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-950/40 px-4 py-1.5 text-xs font-semibold text-sky-300 backdrop-blur-md mb-6">
            <Users className="h-3.5 w-3.5 text-sky-400" />
            <span>Join Our Global Team</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-ink tracking-tight leading-[1.15]">
            Build The Future Of{" "}
            <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Autonomous Logistics AI
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
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

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <GlowCard className="p-6 space-y-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/20 text-sky-400">
              <Zap className="h-5 w-5" />
            </div>
            <h4 className="text-base font-bold text-ink">Innovation First</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              We apply bleeding-edge transformer models and agentic workflows to industries historically neglected by modern technology.
            </p>
          </GlowCard>

          <GlowCard className="p-6 space-y-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400">
              <Sparkles className="h-5 w-5" />
            </div>
            <h4 className="text-base font-bold text-ink">Execution Over Talk</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              We measure our platform not by vanity dashboard metrics, but by hard millions saved in detention, spoilage, and downtime.
            </p>
          </GlowCard>

          <GlowCard className="p-6 space-y-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/20 text-sky-400">
              <Heart className="h-5 w-5" />
            </div>
            <h4 className="text-base font-bold text-ink">Customer Obsession</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              We build alongside supply chain operators on the warehouse floor and logistics managers in dispatch control towers.
            </p>
          </GlowCard>

          <GlowCard className="p-6 space-y-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400">
              <Globe2 className="h-5 w-5" />
            </div>
            <h4 className="text-base font-bold text-ink">Global Collaboration</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
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
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 pb-6 border-b border-slate-300/10">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setSelectedDept(dept)}
              className={`rounded-xl px-4 py-2 text-xs font-semibold transition ${
                selectedDept === dept
                  ? "bg-sky-500 text-slate-950 font-bold"
                  : "bg-slate-900 text-slate-400 hover:text-ink border border-slate-300/5"
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
                  <h4 className="text-base font-bold text-ink">{role.title}</h4>
                  <span className="rounded bg-sky-950 px-2 py-0.5 text-[10px] font-mono text-sky-300 border border-sky-500/30">
                    {role.type}
                  </span>
                </div>
                <div className="text-xs text-slate-400 flex items-center gap-3">
                  <span className="text-sky-400 font-mono">{role.department}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><MapPin className="h-3 w-3 text-slate-500" /> {role.location}</span>
                </div>
                <p className="text-xs text-slate-300 mt-2 max-w-2xl">{role.desc}</p>
              </div>

              <a
                href={`mailto:careers@hiview.ai?subject=Application for ${encodeURIComponent(role.title)}`}
                className="inline-flex items-center gap-1.5 rounded-xl bg-slate-800 hover:bg-sky-500 hover:text-slate-950 px-5 py-2.5 text-xs font-bold text-slate-200 transition shrink-0"
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
