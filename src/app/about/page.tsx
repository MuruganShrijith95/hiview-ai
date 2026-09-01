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

import HeroBackgroundEffects from "@/components/HeroBackgroundEffects";

export default function AboutPage() {
  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative pt-10 pb-12 text-center overflow-hidden">
        {/* Animated Network Stream & Floating Flank Cockpits */}
        <HeroBackgroundEffects variant="about" />

        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#cfe6ff] bg-[#e8f3ff] px-4 py-1.5 text-xs font-bold text-[#1D9AE1] shadow-sm mb-6">
            <Users className="h-3.5 w-3.5 text-[#1D9AE1]" />
            <span>Built by Supply Chain Veterans. Powered by AI Researchers.</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0e1b34] tracking-tight leading-[1.15]">
            Architecting The Decision Infrastructure For{" "}
            <span className="bg-gradient-to-r from-[#1D9AE1] via-[#59b4ff] to-[#1D9AE1] bg-clip-text text-transparent">
              Autonomous Supply Chains
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#547099] leading-relaxed max-w-3xl mx-auto">
            HiView AI was founded to bridge the massive intelligence gap in enterprise logistics. We help global companies turn chaotic data silos into resilient, automated execution networks that protect margins and eliminate blind spots.
          </p>

          {/* 3D Visual Showcase */}
          <div className="mt-10 max-w-4xl mx-auto">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <GlowCard className="p-7 sm:p-8 space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e8f3ff] text-[#1D9AE1] border border-[#cfe6ff]">
              <Target className="h-6 w-6" />
            </div>
            <div className="text-xs font-mono font-bold text-[#1D9AE1] uppercase tracking-wider">
              Our Core Mission
            </div>
            <h3 className="text-2xl font-extrabold text-[#0e1b34]">
              Precision Decision Infrastructure
            </h3>
            <p className="text-sm leading-relaxed text-[#547099]">
              {COMPANY_INFO.mission} We believe enterprise logistics teams should spend their time orchestrating strategy rather than firefighting manual errors and parsing broken EDI transactions.
            </p>
          </GlowCard>

          <GlowCard className="p-7 sm:p-8 space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff8ec] text-[#8c5000] border border-[#fcdba8]">
              <Sparkles className="h-6 w-6" />
            </div>
            <div className="text-xs font-mono font-bold text-[#8c5000] uppercase tracking-wider">
              Our Long-Term Vision
            </div>
            <h3 className="text-2xl font-extrabold text-[#0e1b34]">
              Intelligent Execution Networks
            </h3>
            <p className="text-sm leading-relaxed text-[#547099]">
              {COMPANY_INFO.vision} Transforming traditional supply chains from reactive cost centers into self-healing, predictive networks governed by verified machine learning and transparent business logic.
            </p>
          </GlowCard>
        </div>
      </AnimatedSection>

      {/* Founding Story & TAG Award */}
      <AnimatedSection className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border-2 border-[#cfe6ff] bg-gradient-to-b from-[#f4f9ff] via-[#f8fbff] to-white p-7 sm:p-12 shadow-[0_12px_36px_-18px_rgba(29,154,225,0.18)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#cfe6ff] bg-[#e8f3ff] px-3.5 py-1 text-xs font-bold text-[#1D9AE1]">
                <Award className="h-4 w-4 text-[#1D9AE1]" />
                <span>TAG 2026 Top 40 Tech Innovator</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0e1b34]">
                The Story Behind HiView AI
              </h2>
              <p className="text-sm leading-relaxed text-[#547099]">
                Having spent decades leading supply chain architectures at industry leaders like Manhattan Associates and top Fortune 500 enterprises, our founding team observed a recurring paradox: companies were spending millions on ERPs, TMS, and GPS trackers, yet logistics managers still operated in the dark.
              </p>
              <p className="text-sm leading-relaxed text-[#547099]">
                HiView AI was engineered to solve this exact problem: creating a platform that doesn&apos;t just visualize the supply chain, but actively scores supplier reliability, models transit anomalies, and executes resolutions in real time.
              </p>
            </div>

            <div className="lg:col-span-4 rounded-2xl border border-[#cfe6ff] bg-[#eef6ff] p-6 text-center space-y-3 shadow-sm">
              <div className="font-mono text-5xl font-black text-[#1D9AE1]">
                2026
              </div>
              <div className="text-xs uppercase font-extrabold text-[#0e1b34] tracking-wider">
                Top 40 Innovative Companies Award
              </div>
              <p className="text-xs text-[#547099]">
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

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {COMPANY_INFO.leadership.map((leader, idx) => (
            <GlowCard key={idx} className="p-6 flex flex-col justify-between h-full">
              <div>
                <div className="h-48 w-full rounded-xl overflow-hidden bg-[#e8f3ff] relative mb-5 border border-[#cfe6ff]">
                  <img
                    src={leader.avatar}
                    alt={leader.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase rounded bg-white/95 px-2.5 py-1 text-[#1D9AE1] border border-[#cfe6ff] shadow-sm">
                      Leadership
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-extrabold text-[#0e1b34]">
                  {leader.name}
                </h3>
                <div className="text-xs font-bold text-[#1D9AE1] mt-0.5 font-mono">
                  {leader.role}
                </div>

                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#547099]">
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

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COMPANY_INFO.offices.map((office, idx) => (
            <GlowCard key={idx} className="p-6">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold uppercase rounded bg-[#e8f3ff] px-2.5 py-1 text-[#1D9AE1] border border-[#cfe6ff]">
                  {office.badge}
                </span>
                <Globe2 className="h-4 w-4 text-[#1D9AE1]" />
              </div>

              <h4 className="mt-4 text-lg font-extrabold text-[#0e1b34]">
                {office.city}
              </h4>
              <div className="text-xs text-[#547099] font-medium mt-0.5">
                {office.region}
              </div>

              <div className="mt-3 text-xs text-[#0e1b34] border-t border-[#cfe6ff] pt-3">
                <strong className="text-[#547099] block text-[11px] uppercase">Focus:</strong>
                {office.focus}
              </div>

              <div className="mt-3 text-[11px] text-[#547099] font-mono">
                {office.address}
              </div>
            </GlowCard>
          ))}
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-[#cfe6ff] bg-gradient-to-b from-[#eaf4ff] via-[#ffffff] to-[#eef6ff] p-8 sm:p-14 text-center shadow-[0_24px_48px_-18px_rgba(23,72,143,0.18)]">
          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0e1b34]">
              Join the Next Evolution of Supply Chain Intelligence
            </h2>
            <p className="text-sm sm:text-base text-[#547099] max-w-2xl mx-auto leading-relaxed">
              Discover how HiView AI can be rapidly deployed on top of your existing logistics operations without disruption.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/demo"
                className="hover-shine inline-flex items-center gap-2 rounded-xl bg-gradient-to-b from-[#7CC8F1] to-[#1D9AE1] px-7 py-3.5 text-xs font-bold text-white shadow-[0_10px_24px_-8px_rgba(29,154,225,0.55)] hover:shadow-[0_18px_32px_-10px_rgba(29,154,225,0.7)] transition"
              >
                <span>Book An Executive Briefing</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/careers"
                className="inline-flex items-center gap-2 rounded-xl border border-[#cfe6ff] bg-white px-6 py-3.5 text-xs font-bold text-[#0e1b34] hover:text-[#1D9AE1] hover:border-[#b8dcff] shadow-sm transition"
              >
                <span>Explore Open Careers</span>
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
