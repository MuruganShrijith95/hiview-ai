"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import GlowCard from "@/components/GlowCard";
import { StaggerGroup, StaggerItem } from "@/components/Stagger";
import StatsCounter from "@/components/StatsCounter";
import SectionHeading from "@/components/SectionHeading";
import InteractiveSimulator from "@/components/InteractiveSimulator";
import USPShowcase from "@/components/USPShowcase";
import IntegrationOrbit from "@/components/IntegrationOrbit";
import ROICalculator from "@/components/ROICalculator";
import AnimatedVisual from "@/components/AnimatedVisual";
import HeroBackgroundEffects from "@/components/HeroBackgroundEffects";
import ProductTabShowcase from "@/components/ProductTabShowcase";
import { PRODUCTS, CORE_USPS, COMPANY_INFO } from "@/lib/constants";
import { 
  ArrowRight, 
  Sparkles, 
  Cpu, 
  ShieldCheck, 
  Zap, 
  Award, 
  CheckCircle2, 
  Play, 
  Network,
  Boxes,
  Truck,
  ThermometerSnowflake,
  TrendingUp,
  Warehouse,
  Receipt,
  Layers,
  Activity,
  ChevronRight
} from "lucide-react";

export default function HomePage() {
  const productIcons: Record<string, any> = {
    edifai: Network,
    iqua: ThermometerSnowflake,
    fairmiles: Truck,
    mist: Boxes,
    "demand-forecasting": TrendingUp,
    wms: Warehouse,
    "po-tracker": Receipt
  };

  return (
    <div className="space-y-12 sm:space-y-16 pb-16 overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[75vh] flex items-center justify-center pt-4 pb-8 overflow-hidden">
        {/* Dynamic Flowing Background Effects & Floating Glass Cockpits */}
        <HeroBackgroundEffects variant="home" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          {/* Announcement Pill */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#cfe6ff] bg-[#e8f3ff] px-4 py-1.5 text-xs font-bold text-[#1D9AE1] shadow-sm mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1D9AE1] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1D9AE1]"></span>
            </span>
            <span>2026 TAG Top 40 Innovative Technology Company</span>
            <span className="hidden sm:inline text-[#7CC8F1]">•</span>
            <span className="hidden sm:inline text-[#6b7a99]">Autonomous Supply Chain Intelligence 2.0</span>
            <ChevronRight className="h-3.5 w-3.5 text-[#1D9AE1]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-6 space-y-3"
          >
            {/* BIGGEST PRIMARY TITLE */}
            <h1 className="mx-auto max-w-5xl text-4xl font-extrabold tracking-tight text-[#0e1b34] sm:text-5xl md:text-6xl lg:text-7xl leading-[1.12]">
              Intelligent Supply Chain Execution
            </h1>

            {/* SUB-HEADING */}
            <div>
              <span className="inline-block text-xl sm:text-2xl md:text-3xl font-bold tracking-tight bg-gradient-to-r from-[#1D9AE1] via-[#59b4ff] to-[#1D9AE1] bg-clip-text text-transparent">
                One Platform. Every System in Sync.
              </span>
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-4 max-w-3xl text-base text-[#6b7a99] sm:text-lg md:text-xl leading-relaxed font-normal"
          >
            Where data meets decisive action. HiView brings performance scoring, predictive forecasting, self-healing EDI, and execution together—so disruptions surface before they cost you, and your team always commands the next move.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/demo"
              className="w-full sm:w-auto hover-shine inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-[#7CC8F1] to-[#1D9AE1] px-7 py-3.5 text-sm font-bold text-white shadow-[0_10px_24px_-8px_rgba(29,154,225,0.55),inset_0_1px_0_rgba(255,255,255,0.45)] hover:shadow-[0_18px_32px_-10px_rgba(29,154,225,0.7)] hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>Book Live Enterprise Demo</span>
              <ArrowRight className="h-4 w-4 text-white" />
            </Link>

            <Link
              href="#simulator"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-[#e4edf8] bg-white px-7 py-3.5 text-sm font-bold text-[#0e1b34] hover:text-[#1D9AE1] hover:border-[#cfe6ff] hover:-translate-y-0.5 shadow-[0_6px_16px_-12px_rgba(16,42,86,0.35)] transition-all duration-200"
            >
              <Play className="h-4 w-4 text-[#1D9AE1] fill-[#1D9AE1]" />
              <span>Try Interactive Simulator</span>
            </Link>
          </motion.div>

          {/* Hero 3D Animated Image Showcase */}
          <div className="mt-10 max-w-5xl mx-auto">
            <AnimatedVisual
              src="/images/futuristic-ai-warehouse.jpg"
              alt="HiView AI-Driven Supply Chain Management in a Futuristic Warehouse"
              badgeText="AUTONOMOUS CONTROL TOWER 2.0 • LIVE STREAM"
              aspectRatio="wide"
              glowColor="rgba(29, 154, 225, 0.25)"
              floatingBadges={[
                { title: "AI Model Sentinel", value: "99.98% Confidence", position: "top-right", icon: Sparkles },
                { title: "Autonomous AGV Routing", value: "Real-Time Optimized", position: "bottom-left", icon: Activity },
                { title: "EDI Self-Healing", value: "180ms Payload Fix", position: "bottom-right", icon: Zap }
              ]}
            />
          </div>

          {/* Hard Stats Strip with Light Blue Theme */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 rounded-3xl border border-[#cfe6ff] bg-gradient-to-b from-[#eef6ff] via-[#f5f9ff] to-white p-5 sm:p-6 md:p-8 shadow-[0_12px_32px_-16px_rgba(29,154,225,0.18)]"
          >
            <StatsCounter value="70%" label="EDI Workload Reduction" sublabel="Autonomous self-healing" />
            <StatsCounter value="95%+" label="Prediction Accuracy" sublabel="Neural transit models" />
            <StatsCounter value="150+" label="Live Metrics Scored" sublabel="Continuous reliability score" />
            <StatsCounter value="100+" label="Pre-Built Connectors" sublabel="SAP, Oracle, Manhattan, TMS" />
            <div className="col-span-2 sm:col-span-1">
              <StatsCounter value="65%" label="Faster Issue Resolution" sublabel="24/7 AI exception agents" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── STRATEGIC PILLARS ─────────────────────────────────────────── */}
      <AnimatedSection className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section label row */}
        <div className="mb-6 flex flex-col items-center text-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#cfe6ff] bg-[#e8f3ff] px-3.5 py-1 text-[11px] font-bold uppercase tracking-widest text-[#1D9AE1]">
            <Sparkles className="h-3 w-3 text-[#1D9AE1]" />
            The HiView Execution Architecture
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0e1b34]">
            Three Strategic Pillars of Intelligent Action
          </h2>
          <p className="max-w-2xl text-xs sm:text-sm text-[#547099]">
            Transforming fragmented operational data into connected, margin-protecting intelligence.
          </p>
        </div>

        {/* 3-column Bento grid with Light Blue Boxes */}
        <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6" stagger={0.12}>

          {/* ── CARD 1 ── */}
          <StaggerItem className="h-full">
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="relative h-full overflow-hidden rounded-3xl border border-[#cfe6ff] bg-gradient-to-b from-[#eef6ff] via-[#f5f9ff] to-white p-7 shadow-[0_8px_24px_-12px_rgba(29,154,225,0.16)] hover:border-[#1D9AE1] hover:shadow-[0_16px_32px_-12px_rgba(29,154,225,0.25)]"
            >
              <div className="relative flex h-full flex-col justify-between">
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#dcedfc] text-[#1D9AE1] border border-[#cfe6ff]">
                    <Cpu className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-[11px] font-black tracking-widest text-[#1D9AE1]">01</span>
                </div>

                <div className="mt-5 flex-1">
                  <p className="text-[10px] font-mono font-bold uppercase tracking-[0.22em] text-[#1D9AE1]">
                    Decisive Intelligence
                  </p>
                  <h3 className="mt-2 text-lg sm:text-xl font-extrabold text-[#0e1b34] leading-snug">
                    Where Data Meets Decisions
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#547099]">
                    Data is everywhere—knowing what to do with it is what protects your margins. HiView transforms fragmented operational data into connected intelligence, helping businesses identify what matters and take the right action at the right time.
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-2 border-t border-[#cfe6ff] pt-4 text-[11px] font-mono font-bold text-[#1D9AE1]">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#1fb877] shrink-0" />
                  Right Action • Right Time
                </div>
              </div>
            </motion.div>
          </StaggerItem>

          {/* ── CARD 2 ── */}
          <StaggerItem className="h-full">
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="relative h-full overflow-hidden rounded-3xl border border-[#cfe6ff] bg-gradient-to-b from-[#eef6ff] via-[#f5f9ff] to-white p-7 shadow-[0_8px_24px_-12px_rgba(29,154,225,0.16)] hover:border-[#1D9AE1] hover:shadow-[0_16px_32px_-12px_rgba(29,154,225,0.25)]"
            >
              <div className="relative flex h-full flex-col justify-between">
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#dcedfc] text-[#1D9AE1] border border-[#cfe6ff]">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-[11px] font-black tracking-widest text-[#1D9AE1]">02</span>
                </div>

                <div className="mt-5 flex-1">
                  <p className="text-[10px] font-mono font-bold uppercase tracking-[0.22em] text-[#1D9AE1]">
                    Predictive Outcomes
                  </p>
                  <h3 className="mt-2 text-lg sm:text-xl font-extrabold text-[#0e1b34] leading-snug">
                    Think Beyond Data
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#547099]">
                    Data tells you what is happening. HiView helps you understand why it matters and what to do next. By connecting business data with AI, processes, and people, we turn information into intelligent action before disruptions cascade.
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-2 border-t border-[#cfe6ff] pt-4 text-[11px] font-mono font-bold text-[#1D9AE1]">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#1fb877] shrink-0" />
                  Contextual Root Cause • Next Move
                </div>
              </div>
            </motion.div>
          </StaggerItem>

          {/* ── CARD 3 ── */}
          <StaggerItem className="h-full">
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="relative h-full overflow-hidden rounded-3xl border border-[#cfe6ff] bg-gradient-to-b from-[#eef6ff] via-[#f5f9ff] to-white p-7 shadow-[0_8px_24px_-12px_rgba(29,154,225,0.16)] hover:border-[#1D9AE1] hover:shadow-[0_16px_32px_-12px_rgba(29,154,225,0.25)]"
            >
              <div className="relative flex h-full flex-col justify-between">
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#dcedfc] text-[#1D9AE1] border border-[#cfe6ff]">
                    <Network className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-[11px] font-black tracking-widest text-[#1D9AE1]">03</span>
                </div>

                <div className="mt-5 flex-1">
                  <p className="text-[10px] font-mono font-bold uppercase tracking-[0.22em] text-[#1D9AE1]">
                    Unified Operations
                  </p>
                  <h3 className="mt-2 text-lg sm:text-xl font-extrabold text-[#0e1b34] leading-snug">
                    Connect the Dots.<br className="hidden sm:block" /> See the Difference.
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#547099]">
                    HiView connects data, systems, processes, and people to create a complete 360° view of your operations. With intelligent automation and AI-powered insights, we help businesses identify opportunities and act with total confidence.
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-2 border-t border-[#cfe6ff] pt-4 text-[11px] font-mono font-bold text-[#1D9AE1]">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#1fb877] shrink-0" />
                  360° Operations • Flawless Execution
                </div>
              </div>
            </motion.div>
          </StaggerItem>

        </StaggerGroup>
      </AnimatedSection>

      {/* 2. THE INTELLIGENCE GAP: PROBLEM VS HIVIEW */}
      <AnimatedSection className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Why Traditional Tools Fail"
          title="Bridging The Critical"
          highlightText="Supply Chain Intelligence Gap"
          subtitle="Enterprises invest billions in legacy ERPs and static visibility maps, yet teams remain trapped in daily spreadsheet firefighting."
        />

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Legacy Column */}
          <div className="rounded-2xl border border-[#fddad2] bg-[#fff8f6] p-8 shadow-[0_1px_2px_rgba(16,42,86,0.04)]">
            <div className="flex items-center justify-between pb-4 border-b border-[#fddad2]">
              <span className="text-xs font-bold uppercase tracking-wider text-[#f0603a] font-mono">
                The Legacy Supply Chain Chaos
              </span>
              <span className="rounded-full bg-[#fddad2] px-2.5 py-0.5 text-[10px] font-mono text-[#f0603a] font-bold">
                FRAGILE & REACTIVE
              </span>
            </div>

            <ul className="mt-6 space-y-4 text-sm text-[#6b7a99]">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#f0603a] shrink-0" />
                <span><strong className="text-[#0e1b34]">Delayed GPS Pins:</strong> Passive dots on maps tell you a vessel is late only after port demurrage fees have accrued.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#f0603a] shrink-0" />
                <span><strong className="text-[#0e1b34]">Fragile EDI Transactions:</strong> A single missing segment in an 856 ASN locks warehouse receiving for hours with manual IT tickets.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#f0603a] shrink-0" />
                <span><strong className="text-[#0e1b34]">Alert Fatigue:</strong> Operators receive 10,000 pings daily with no indication of which 5 will cost $200k+ in plant downtime.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#f0603a] shrink-0" />
                <span><strong className="text-[#0e1b34]">Static Buffers:</strong> Rigid manual min/max safety stock rules lock up millions in working capital while still suffering stockouts.</span>
              </li>
            </ul>
          </div>

          {/* HiView Autonomous Column */}
          <div className="rounded-2xl border border-[#cfe6ff] bg-[#f4f9ff] p-8 shadow-[0_12px_32px_-12px_rgba(29,154,225,0.18)]">
            <div className="flex items-center justify-between pb-4 border-b border-[#cfe6ff]">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1D9AE1] font-mono">
                The HiView AI Autonomous Engine
              </span>
              <span className="rounded-full bg-[#e8f3ff] px-2.5 py-0.5 text-[10px] font-mono text-[#1D9AE1] border border-[#cfe6ff] font-bold">
                SCORE, THEN ACT
              </span>
            </div>

            <ul className="mt-6 space-y-4 text-sm text-[#33456b]">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#1fb877] shrink-0 mt-0.5" />
                <span><strong className="text-[#0e1b34]">Predictive Resolution:</strong> Evaluates port queues, AIS weather signals, and driver hours to re-route freight before delays happen.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#1fb877] shrink-0 mt-0.5" />
                <span><strong className="text-[#0e1b34]">Self-Healing EDI (EDIFAI):</strong> AI dynamically patches broken schemas in-flight (180ms) and posts valid transactions directly to ERP.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#1fb877] shrink-0 mt-0.5" />
                <span><strong className="text-[#0e1b34]">Intelligent Signal Sentinel:</strong> Filters 10,000 noise alerts down to the 12 high-impact exceptions with ready-to-execute resolution playbooks.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#1fb877] shrink-0 mt-0.5" />
                <span><strong className="text-[#0e1b34]">Dynamic Inventory Tuning:</strong> MIST continuously calculates multi-echelon safety stock, cutting working capital while holding 99.5% OTIF.</span>
              </li>
            </ul>
          </div>
        </div>
      </AnimatedSection>

      {/* 3. INTERACTIVE SIMULATOR */}
      <AnimatedSection id="simulator" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <InteractiveSimulator />
      </AnimatedSection>

      {/* 4. CORE USPs SECTION */}
      <AnimatedSection className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Distinct Advantages"
          title="Architected For"
          highlightText="Predictive Autonomous Execution"
          subtitle="Explore the five technological pillars that set HiView apart from legacy logistics software."
        />

        <div className="mt-10">
          <USPShowcase />
        </div>
      </AnimatedSection>

      {/* 5. SEVEN POWERHOUSE PRODUCTS (COMPACT INTERACTIVE TABBED HUB) */}
      <AnimatedSection className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Product Ecosystem"
          title="One Intelligent Platform."
          highlightText="Seven Specialized Powerhouses."
          subtitle="Deploy individually as modular solutions or together as a unified autonomous supply chain control tower."
        />

        <div className="mt-8">
          <ProductTabShowcase />
        </div>
      </AnimatedSection>

      {/* 6. ECOSYSTEM & 100+ ENTERPRISE CONNECTORS */}
      <AnimatedSection className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Zero Rip & Replace"
          title="Connects Seamlessly With"
          highlightText="100+ Enterprise Systems"
          subtitle="Deploy HiView on top of your existing tech stack without disrupting daily logistics operations."
        />

        <div className="mt-10">
          <IntegrationOrbit />
        </div>
      </AnimatedSection>

      {/* 7. INTERACTIVE ROI CALCULATOR */}
      <AnimatedSection className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Quantified Impact"
          title="Calculate Your Enterprise"
          highlightText="Return On Investment"
          subtitle="See the projected annual cost savings in detention fees, EDI ticketing, and working capital optimization."
        />

        <div className="mt-10">
          <ROICalculator />
        </div>
      </AnimatedSection>

      {/* 8. GLOBAL RECOGNITION & TRUST STRIP */}
      <AnimatedSection className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-[#cfe6ff] bg-gradient-to-b from-[#eef6ff] via-[#f5f9ff] to-white p-8 md:p-12 shadow-[0_12px_32px_-16px_rgba(29,154,225,0.18)] relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#cfe6ff] bg-[#e8f3ff] px-3 py-1 text-xs font-semibold text-[#1D9AE1]">
                <Award className="h-4 w-4 text-[#1D9AE1]" />
                <span>Industry Recognition</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0e1b34]">
                Recognized Among Georgia&apos;s Top 40 Most Innovative Tech Companies (TAG 2026)
              </h3>
              <p className="text-sm leading-relaxed text-[#6b7a99] max-w-2xl">
                Founded by Manhattan Associates alumni and senior supply chain software researchers, HiView AI is trusted across North America, the Middle East, and Asia-Pacific to safeguard enterprise margins.
              </p>
              <div className="flex flex-wrap gap-4 pt-2 text-xs font-mono text-[#33456b]">
                <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-[#1D9AE1]" /> SOC 2 Type II Certified</span>
                <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-[#1D9AE1]" /> ISO 27001 Validated</span>
                <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-[#1D9AE1]" /> GxP / FDA 21 CFR Part 11 Compliant</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <Link
                href="/about"
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-white border border-[#e4edf8] px-6 py-3.5 text-xs font-bold text-[#0e1b34] hover:text-[#1D9AE1] hover:border-[#cfe6ff] transition text-center shadow-sm"
              >
                Meet Executive Leadership & Team
              </Link>
              <Link
                href="/demo"
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-[#7CC8F1] to-[#1D9AE1] px-6 py-3.5 text-xs font-bold text-white shadow-[0_10px_24px_-8px_rgba(29,154,225,0.55)] hover:shadow-[0_18px_32px_-10px_rgba(29,154,225,0.7)] transition text-center"
              >
                Request Enterprise Sandbox
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* 9. BOTTOM HIGH-CONVERSION CTA */}
      <AnimatedSection className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-[#cfe6ff] bg-gradient-to-b from-[#eaf4ff] via-[#ffffff] to-[#eef6ff] p-8 sm:p-14 text-center shadow-[0_24px_48px_-18px_rgba(23,72,143,0.18)]">
          <div className="relative z-10 max-w-3xl mx-auto space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#cfe6ff] bg-[#e8f3ff] px-4 py-1.5 text-xs font-semibold text-[#1D9AE1] shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-[#1D9AE1]" />
              <span>Ready to Transform Your Supply Chain?</span>
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0e1b34] tracking-tight">
              See HiView AI In Action With Your Own Data
            </h2>

            <p className="text-base text-[#6b7a99] leading-relaxed">
              Schedule a personalized 30-minute demonstration. We will connect sample ERP or EDI payloads to demonstrate how the platform scores risks and automates resolutions.
            </p>

            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/demo"
                className="w-full sm:w-auto hover-shine inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-[#7CC8F1] to-[#1D9AE1] px-8 py-3.5 text-sm font-bold text-white shadow-[0_10px_24px_-8px_rgba(29,154,225,0.55),inset_0_1px_0_rgba(255,255,255,0.45)] hover:shadow-[0_18px_32px_-10px_rgba(29,154,225,0.7)] hover:-translate-y-0.5 transition"
              >
                <span>Book Live Demonstration</span>
                <ArrowRight className="h-4 w-4 text-white" />
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-[#e4edf8] bg-white px-8 py-3.5 text-sm font-bold text-[#0e1b34] hover:text-[#1D9AE1] hover:border-[#cfe6ff] transition shadow-sm"
              >
                <span>Contact Global Sales Team</span>
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
