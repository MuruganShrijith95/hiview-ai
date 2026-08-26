"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import GlowCard from "@/components/GlowCard";
import StatsCounter from "@/components/StatsCounter";
import AnimatedVisual from "@/components/AnimatedVisual";
import { COMPANY_INFO } from "@/lib/constants";
import { 
  Award, 
  CheckCircle2, 
  MapPin, 
  Mail, 
  Phone, 
  ArrowRight, 
  ShieldCheck, 
  Cpu, 
  Users, 
  Target, 
  Sparkles,
  Globe2
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      {/* Hero Section */}
      <section className="relative pt-12 pb-16 text-center">
        <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[700px] rounded-full bg-emerald-500/15 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-4 py-1.5 text-xs font-semibold text-emerald-300 backdrop-blur-md mb-6">
            <Users className="h-3.5 w-3.5 text-emerald-400" />
            <span>Built by Supply Chain Veterans. Powered by AI Researchers.</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
            Architecting The Decision Infrastructure For{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-amber-400 bg-clip-text text-transparent">
              Autonomous Supply Chains
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
            HiView AI was founded to bridge the massive intelligence gap in enterprise logistics. We help global companies turn chaotic data silos into resilient, automated execution networks that protect margins and eliminate blind spots.
          </p>

          {/* 3D Visual Showcase */}
          <div className="mt-12 max-w-4xl mx-auto">
            <AnimatedVisual
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200"
              alt="HiView AI Global Headquarters & Engineering Labs"
              badgeText="ALPHARETTA HQ • GLOBAL OPERATIONS COCKPIT"
              aspectRatio="wide"
              floatingBadges={[
                { title: "Founded By", value: "Manhattan Associates Alumni", position: "top-right", icon: Sparkles },
                { title: "TAG 2026", value: "Top 40 Tech Innovator", position: "bottom-left", icon: Award },
                { title: "Engineering Hubs", value: "USA • UAE • India", position: "bottom-right", icon: Globe2 }
              ]}
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision Bento */}
      <AnimatedSection className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <GlowCard className="p-8 space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              <Target className="h-6 w-6" />
            </div>
            <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
              Our Core Mission
            </div>
            <h3 className="text-2xl font-bold text-white">
              Precision Decision Infrastructure
            </h3>
            <p className="text-sm leading-relaxed text-slate-300">
              {COMPANY_INFO.mission} We believe enterprise logistics teams should spend their time orchestrating strategy rather than firefighting manual errors and parsing broken EDI transactions.
            </p>
          </GlowCard>

          <GlowCard className="p-8 space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
              <Sparkles className="h-6 w-6" />
            </div>
            <div className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
              Our Long-Term Vision
            </div>
            <h3 className="text-2xl font-bold text-white">
              Intelligent Execution Networks
            </h3>
            <p className="text-sm leading-relaxed text-slate-300">
              {COMPANY_INFO.vision} Transforming traditional supply chains from reactive cost centers into self-healing, predictive networks governed by verified machine learning and transparent business logic.
            </p>
          </GlowCard>
        </div>
      </AnimatedSection>

      {/* Founding Story & TAG Award */}
      <AnimatedSection className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-8 sm:p-12 backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/50 px-3.5 py-1 text-xs font-semibold text-emerald-300">
                <Award className="h-4 w-4 text-emerald-400" />
                <span>TAG 2026 Top 40 Tech Innovator</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                The Story Behind HiView AI
              </h2>
              <p className="text-sm leading-relaxed text-slate-300">
                Having spent decades leading supply chain architectures at industry leaders like Manhattan Associates and top Fortune 500 enterprises, our founding team observed a recurring paradox: companies were spending millions on ERPs, TMS, and GPS trackers, yet logistics managers still operated in the dark.
              </p>
              <p className="text-sm leading-relaxed text-slate-300">
                HiView AI was engineered to solve this exact problem: creating a platform that doesn&apos;t just visualize the supply chain, but actively scores supplier reliability, models transit anomalies, and executes resolutions in real time.
              </p>
            </div>

            <div className="lg:col-span-4 rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-6 text-center space-y-4">
              <div className="font-mono text-5xl font-extrabold text-emerald-400">
                2026
              </div>
              <div className="text-xs uppercase font-bold text-white tracking-wider">
                Top 40 Innovative Companies Award
              </div>
              <p className="text-xs text-slate-400">
                Awarded by the Technology Association of Georgia (TAG) for groundbreaking advancements in agentic supply chain AI.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Leadership Team */}
      <AnimatedSection className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Executive Leadership"
          title="Guided By Decades of"
          highlightText="Supply Chain & AI Expertise"
          subtitle="Our executive leadership combines decades of deep domain experience in enterprise logistics, distributed computing, and artificial intelligence."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {COMPANY_INFO.leadership.map((leader, idx) => (
            <GlowCard key={idx} className="p-6 flex flex-col justify-between h-full">
              <div>
                <div className="h-48 w-full rounded-xl overflow-hidden bg-slate-800 relative mb-5">
                  <img
                    src={leader.avatar}
                    alt={leader.name}
                    className="h-full w-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase rounded bg-emerald-950/80 px-2 py-0.5 text-emerald-300 border border-emerald-500/30">
                      Leadership
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white">
                  {leader.name}
                </h3>
                <div className="text-xs font-semibold text-emerald-400 mt-0.5">
                  {leader.role}
                </div>

                <p className="mt-3 text-xs leading-relaxed text-slate-300">
                  {leader.bio}
                </p>
              </div>
            </GlowCard>
          ))}
        </div>
      </AnimatedSection>

      {/* Global Presence & Offices */}
      <AnimatedSection className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Global Footprint"
          title="Engineered Globally."
          highlightText="Operating Everywhere."
          subtitle="Headquartered in Metro Atlanta with specialized Engineering and R&D Centers in India, plus regional hubs across the Middle East, Europe, and Asia-Pacific."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COMPANY_INFO.offices.map((office, idx) => (
            <GlowCard key={idx} className="p-6">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold uppercase rounded bg-slate-800 px-2 py-0.5 text-emerald-400">
                  {office.badge}
                </span>
                <Globe2 className="h-4 w-4 text-slate-500" />
              </div>

              <h4 className="mt-4 text-lg font-bold text-white">
                {office.city}
              </h4>
              <div className="text-xs text-slate-400 font-medium mt-0.5">
                {office.region}
              </div>

              <div className="mt-3 text-xs text-slate-300 border-t border-white/5 pt-3">
                <strong className="text-slate-400 block text-[11px] uppercase">Focus:</strong>
                {office.focus}
              </div>

              <div className="mt-3 text-[11px] text-slate-400 font-mono">
                {office.address}
              </div>
            </GlowCard>
          ))}
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/50 via-slate-950/80 to-amber-950/50 p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Join the Next Evolution of Supply Chain Intelligence
          </h2>
          <p className="mt-3 text-sm text-slate-300 max-w-2xl mx-auto">
            Discover how HiView AI can be deployed on top of your existing logistics operations in less than 30 days.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/demo"
              className="hover-shine inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 px-6 py-3 text-xs font-bold text-white shadow-lg"
            >
              <span>Book An Executive Briefing</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-slate-900 px-6 py-3 text-xs font-bold text-slate-300 hover:text-white"
            >
              <span>Explore Open Careers</span>
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
