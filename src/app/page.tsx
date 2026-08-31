"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import GlowCard from "@/components/GlowCard";
import StatsCounter from "@/components/StatsCounter";
import SectionHeading from "@/components/SectionHeading";
import InteractiveSimulator from "@/components/InteractiveSimulator";
import USPShowcase from "@/components/USPShowcase";
import IntegrationOrbit from "@/components/IntegrationOrbit";
import ROICalculator from "@/components/ROICalculator";
import AnimatedVisual from "@/components/AnimatedVisual";
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
    <div className="space-y-24 sm:space-y-32 pb-24 overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-12 pb-16">
        {/* Ambient Top Glows */}
        <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[550px] w-[800px] rounded-full bg-gradient-to-tr from-sky-500/15 via-blue-600/15 to-amber-600/10 blur-3xl" />
        <div className="pointer-events-none absolute top-1/3 left-1/4 h-72 w-72 rounded-full bg-sky-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          {/* Announcement Pill */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-950/40 px-4 py-1.5 text-xs font-semibold text-sky-300 backdrop-blur-md shadow-lg shadow-sky-500/10 mb-8"
          >
            <Award className="h-3.5 w-3.5 text-sky-400" />
            <span>2026 TAG Top 40 Innovative Technology Company</span>
            <span className="hidden sm:inline text-sky-500">•</span>
            <span className="hidden sm:inline text-slate-400">Autonomous Supply Chain Intelligence 2.0</span>
            <ChevronRight className="h-3.5 w-3.5 text-sky-400" />
          </motion.div>

          {/* Eyebrow / Category Kicker — highlighter marker treatment.
              A chip would echo the award pill directly above, so the
              emphasis here is a wipe-in highlight plus flanking rules. */}
          <motion.div
            initial="hidden"
            animate="show"
            className="mb-6 flex items-center justify-center gap-3 sm:gap-4"
          >
            <motion.span
              aria-hidden="true"
              variants={{ hidden: { scaleX: 0, opacity: 0 }, show: { scaleX: 1, opacity: 1 } }}
              transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="hidden h-px w-8 origin-right bg-gradient-to-r from-transparent to-sky-400 sm:block sm:w-12"
            />

            <span className="relative inline-block">
              {/* Blue highlighter travelling above the words, left to
                  right and back. Separate from the text, so the letters
                  are never clipped and stay fully visible. */}
              <motion.span
                aria-hidden="true"
                variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
                transition={{ duration: 0.4, delay: 0.55 }}
                className="pointer-events-none absolute -top-2.5 left-0 right-0 h-[3px] overflow-hidden rounded-full bg-sky-400/15"
              >
                <span className="eyebrow-sweep absolute inset-y-0 left-0 w-1/3 rounded-full bg-gradient-to-r from-sky-400/0 via-sky-500 to-sky-400/0" />
              </motion.span>

              {/* Highlighter band, drawn left-to-right behind the words */}
              <motion.span
                aria-hidden="true"
                variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1 } }}
                transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-x-[-10px] bottom-[0.05em] h-[0.6em] origin-left rounded-[3px] bg-sky-400/20"
              />
              <motion.span
                variants={{ hidden: { opacity: 0, y: -6 }, show: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.55, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="relative inline-block text-xs font-extrabold uppercase tracking-[0.3em] text-sky-500 sm:text-sm"
              >
                Unified Supply Chain Execution
              </motion.span>
            </span>

            <motion.span
              aria-hidden="true"
              variants={{ hidden: { scaleX: 0, opacity: 0 }, show: { scaleX: 1, opacity: 1 } }}
              transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="hidden h-px w-8 origin-left bg-gradient-to-l from-transparent to-sky-400 sm:block sm:w-12"
            />
          </motion.div>

          {/* Main H1 Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mx-auto max-w-5xl text-4xl font-black tracking-tight text-ink sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1]"
          >
            One Intelligent Platform.{" "}
            <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 bg-clip-text text-transparent">
              Every System in Sync.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-6 max-w-3xl text-base text-slate-300 sm:text-lg md:text-xl leading-relaxed"
          >
            Where data meets decisive action. HiView brings performance scoring, predictive forecasting, self-healing EDI, and execution together—so disruptions surface before they cost you, and your team always commands the next move.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/demo"
              className="w-full sm:w-auto hover-shine inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 px-8 py-4 text-sm font-extrabold text-white shadow-xl shadow-cyan-500/25 hover:from-cyan-400 hover:via-sky-400 hover:to-blue-500 hover:scale-[1.02] transition-all duration-200"
            >
              <span>Book Live Enterprise Demo</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="#simulator"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-300/15 bg-slate-900/80 px-8 py-4 text-sm font-bold text-slate-200 hover:bg-slate-800 hover:text-ink hover:border-cyan-500/30 transition-all duration-200 backdrop-blur-xl"
            >
              <Play className="h-4 w-4 text-cyan-400 fill-cyan-400" />
              <span>Try Interactive Simulator</span>
            </Link>
          </motion.div>

          {/* Hero 3D Animated Image Background Showcase */}
          <div className="mt-14 max-w-5xl mx-auto">
            <AnimatedVisual
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1600"
              alt="HiView AI Global Supply Chain Autonomous Control Tower"
              badgeText="AUTONOMOUS CONTROL TOWER 2.0 • LIVE STREAM"
              aspectRatio="wide"
              glowColor="rgba(0, 240, 255, 0.25)"
              floatingBadges={[
                { title: "AI Model Sentinel", value: "99.98% Confidence", position: "top-right", icon: Sparkles },
                { title: "Port of Long Beach Dwell", value: "-54 hrs Averted", position: "bottom-left", icon: Activity },
                { title: "EDI Self-Healing", value: "180ms Payload Fix", position: "bottom-right", icon: Zap }
              ]}
            />
          </div>

          {/* Hard Stats Strip */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 rounded-3xl border border-slate-300/10 bg-slate-950/60 p-6 md:p-8 backdrop-blur-2xl shadow-2xl"
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

      {/* 2. THE THREE STRATEGIC PILLARS BENTO */}
      <AnimatedSection className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="The HiView Philosophy"
          title="From Fragmented Data To"
          highlightText="Intelligent Action"
          subtitle="Transforming raw operational noise into decisive, margin-protecting execution."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pillar 1 */}
          <GlowCard className="p-8 flex flex-col justify-between h-full">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                <Cpu className="h-6 w-6" />
              </div>
              <div className="mt-6 text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-400">
                DECISIVE INTELLIGENCE
              </div>
              <h3 className="mt-2 text-xl font-black text-ink tracking-tight">
                Where Data Meets Decisions
              </h3>
              <p className="mt-4 text-xs sm:text-sm leading-relaxed text-slate-300">
                Data is everywhere—knowing what to do with it is what protects your margins. HiView transforms fragmented operational data into connected intelligence, helping businesses understand their operations, identify what matters, and take the right action at the right time.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-300/10 flex items-center gap-2 text-xs font-mono font-bold text-cyan-300">
              <CheckCircle2 className="h-4 w-4 text-cyan-400" />
              <span>Right Action • Right Time</span>
            </div>
          </GlowCard>

          {/* Pillar 2 */}
          <GlowCard className="p-8 flex flex-col justify-between h-full">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/20 text-sky-400 border border-sky-500/30 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
                <Sparkles className="h-6 w-6" />
              </div>
              <div className="mt-6 text-[10px] font-mono font-bold uppercase tracking-wider text-sky-400">
                PREDICTIVE OUTCOMES
              </div>
              <h3 className="mt-2 text-xl font-black text-ink tracking-tight">
                Think Beyond Data
              </h3>
              <p className="mt-4 text-xs sm:text-sm leading-relaxed text-slate-300">
                Data tells you what is happening. HiView helps you understand why it matters and what to do next. By connecting business data with AI, processes, and people, we turn information into intelligent action before disruptions cascade.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-300/10 flex items-center gap-2 text-xs font-mono font-bold text-sky-300">
              <CheckCircle2 className="h-4 w-4 text-sky-400" />
              <span>Contextual Root Cause • Next Move</span>
            </div>
          </GlowCard>

          {/* Pillar 3 */}
          <GlowCard className="p-8 flex flex-col justify-between h-full">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/20 text-blue-400 border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                <Network className="h-6 w-6" />
              </div>
              <div className="mt-6 text-[10px] font-mono font-bold uppercase tracking-wider text-blue-400">
                UNIFIED OPERATIONS
              </div>
              <h3 className="mt-2 text-xl font-black text-ink tracking-tight">
                Connect the Dots. See the Difference.
              </h3>
              <p className="mt-4 text-xs sm:text-sm leading-relaxed text-slate-300">
                HiView connects data, systems, processes, and people to create a complete 360° view of your operations. With intelligent automation and AI-powered insights, we help businesses identify opportunities and act with total confidence.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-300/10 flex items-center gap-2 text-xs font-mono font-bold text-blue-300">
              <CheckCircle2 className="h-4 w-4 text-blue-400" />
              <span>360° Operations • Flawless Execution</span>
            </div>
          </GlowCard>
        </div>
      </AnimatedSection>

      {/* 2. THE INTELLIGENCE GAP: PROBLEM VS HIVIEW */}
      <AnimatedSection className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Why Traditional Tools Fail"
          title="Bridging The Critical"
          highlightText="Supply Chain Intelligence Gap"
          subtitle="Enterprises invest billions in legacy ERPs and static visibility maps, yet teams remain trapped in daily spreadsheet firefighting."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Legacy Column */}
          <div className="rounded-3xl border border-red-500/20 bg-gradient-to-b from-red-950/20 via-slate-950/60 to-slate-950/80 p-8 backdrop-blur-xl relative overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-red-500/20">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-400 font-mono">
                The Legacy Supply Chain Chaos
              </span>
              <span className="rounded-full bg-rose-950 px-2.5 py-0.5 text-[10px] font-mono text-rose-300 border border-rose-500/30">
                FRAGILE & REACTIVE
              </span>
            </div>

            <ul className="mt-6 space-y-4 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-rose-500 shrink-0" />
                <span><strong>Delayed GPS Pins:</strong> Passive dots on maps tell you a vessel is late only after port demurrage fees have accrued.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-rose-500 shrink-0" />
                <span><strong>Fragile EDI Transactions:</strong> A single missing segment in an 856 ASN locks warehouse receiving for hours with manual IT tickets.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-rose-500 shrink-0" />
                <span><strong>Alert Fatigue:</strong> Operators receive 10,000 pings daily with no indication of which 5 will cost $200k+ in plant downtime.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-rose-500 shrink-0" />
                <span><strong>Static Buffers:</strong> Rigid manual min/max safety stock rules lock up millions in working capital while still suffering stockouts.</span>
              </li>
            </ul>
          </div>

          {/* HiView Autonomous Column */}
          <div className="rounded-3xl border border-sky-500/30 bg-gradient-to-b from-sky-950/30 via-slate-950/60 to-slate-950/80 p-8 backdrop-blur-xl relative overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-sky-500/30">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-300 font-mono">
                The HiView AI Autonomous Engine
              </span>
              <span className="rounded-full bg-sky-950 px-2.5 py-0.5 text-[10px] font-mono text-sky-300 border border-sky-500/40">
                SCORE, THEN ACT
              </span>
            </div>

            <ul className="mt-6 space-y-4 text-sm text-slate-200">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-sky-400 shrink-0 mt-0.5" />
                <span><strong>Predictive Resolution:</strong> Evaluates port queues, AIS weather signals, and driver hours to re-route freight before delays happen.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-sky-400 shrink-0 mt-0.5" />
                <span><strong>Self-Healing EDI (EDIFAI):</strong> AI dynamically patches broken schemas in-flight (180ms) and posts valid transactions directly to ERP.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-sky-400 shrink-0 mt-0.5" />
                <span><strong>Intelligent Signal Sentinel:</strong> Filters 10,000 noise alerts down to the 12 high-impact exceptions with ready-to-execute resolution playbooks.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-sky-400 shrink-0 mt-0.5" />
                <span><strong>Dynamic Inventory Tuning:</strong> MIST continuously calculates multi-echelon safety stock, cutting working capital while holding 99.5% OTIF.</span>
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

        <div className="mt-12">
          <USPShowcase />
        </div>
      </AnimatedSection>

      {/* 5. SEVEN POWERHOUSE PRODUCTS */}
      <AnimatedSection className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Product Ecosystem"
          title="One Intelligent Platform."
          highlightText="Seven Specialized Powerhouses."
          subtitle="Deploy individually as modular solutions or together as a unified autonomous supply chain control tower."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((prod) => {
            const IconComponent = productIcons[prod.id] || Network;
            return (
              <GlowCard key={prod.id} className="group flex flex-col justify-between h-full p-6">
                <div>
                  {/* Crisp Product Photo Frame */}
                  <div className="relative -mx-6 -mt-6 mb-5 aspect-[16/9] overflow-hidden rounded-t-2xl border-b border-slate-300/10 bg-slate-950">
                    <img
                      src={prod.image}
                      alt={`${prod.name} — ${prod.tagline}`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 filter brightness-95 contrast-110"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-transparent" />
                    
                    {/* Floating live badge */}
                    <div className="absolute top-3 right-3">
                      <span className="inline-flex items-center gap-1.5 rounded-md border border-cyan-500/40 bg-slate-950/85 px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-300 shadow-md backdrop-blur-md">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                        {prod.badge || "AI MODULE"}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-cyan-400 border border-cyan-500/30 shadow-[0_0_12px_rgba(0,240,255,0.15)]">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                      ENTERPRISE ENGINE
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-black tracking-tight text-ink group-hover:text-cyan-300 transition-colors">
                    {prod.name}
                  </h3>
                  <div className="mt-1 text-xs font-bold text-cyan-400 font-mono tracking-tight">
                    {prod.tagline}
                  </div>

                  <p className="mt-3 text-xs leading-relaxed text-slate-300 font-normal">
                    {prod.description}
                  </p>

                  <div className="mt-5 pt-4 border-t border-slate-300/10 space-y-2">
                    {prod.features.slice(0, 3).map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-200">
                        <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1 font-medium">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-300/10 flex items-center justify-between">
                  <div className="rounded-lg bg-cyan-950/60 px-2.5 py-1 text-[11px] font-mono font-black text-cyan-300 border border-cyan-500/30 shadow-sm">
                    {prod.metrics[0]?.value} {prod.metrics[0]?.label}
                  </div>
                  <Link
                    href={prod.href}
                    className="inline-flex items-center gap-1.5 text-xs font-black text-cyan-400 hover:text-cyan-300 transition group/btn"
                  >
                    <span>Deep Dive</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </GlowCard>
            );
          })}
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

        <div className="mt-12">
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

        <div className="mt-12">
          <ROICalculator />
        </div>
      </AnimatedSection>

      {/* 8. GLOBAL RECOGNITION & TRUST STRIP */}
      <AnimatedSection className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-300/10 bg-slate-950/80 p-8 md:p-12 backdrop-blur-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-950/50 px-3 py-1 text-xs font-semibold text-sky-300">
                <Award className="h-4 w-4 text-sky-400" />
                <span>Industry Recognition</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-ink">
                Recognized Among Georgia&apos;s Top 40 Most Innovative Tech Companies (TAG 2026)
              </h3>
              <p className="text-sm leading-relaxed text-slate-300 max-w-2xl">
                Founded by Manhattan Associates alumni and senior supply chain software researchers, HiView AI is trusted across North America, the Middle East, and Asia-Pacific to safeguard enterprise margins.
              </p>
              <div className="flex flex-wrap gap-4 pt-2 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-sky-400" /> SOC 2 Type II Certified</span>
                <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-sky-400" /> ISO 27001 Validated</span>
                <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-sky-400" /> GxP / FDA 21 CFR Part 11 Compliant</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <Link
                href="/about"
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-slate-900 border border-slate-300/15 px-6 py-3.5 text-xs font-bold text-ink hover:bg-slate-800 transition text-center"
              >
                Meet Executive Leadership & Team
              </Link>
              <Link
                href="/demo"
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-3.5 text-xs font-bold text-white shadow-lg shadow-sky-500/25 hover:from-sky-400 hover:to-blue-500 transition text-center"
              >
                Request Enterprise Sandbox
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* 9. BOTTOM HIGH-CONVERSION CTA */}
      <AnimatedSection className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-sky-500/40 bg-gradient-to-br from-sky-950/60 via-slate-950/90 to-amber-950/60 p-8 sm:p-14 text-center shadow-2xl backdrop-blur-2xl">
          <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-sky-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 -bottom-20 h-80 w-80 rounded-full bg-amber-500/20 blur-3xl" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/40 bg-sky-950/60 px-4 py-1.5 text-xs font-semibold text-sky-300">
              <Sparkles className="h-3.5 w-3.5 text-sky-400" />
              <span>Ready to Transform Your Supply Chain?</span>
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink tracking-tight">
              See HiView AI In Action With Your Own Data
            </h2>

            <p className="text-base text-slate-300 leading-relaxed">
              Schedule a personalized 30-minute demonstration. We will connect sample ERP or EDI payloads to demonstrate how the platform scores risks and automates resolutions.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/demo"
                className="w-full sm:w-auto hover-shine inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 px-8 py-4 text-sm font-extrabold text-white shadow-xl shadow-sky-500/30 hover:from-sky-400 hover:to-blue-500 hover:scale-[1.02] transition"
              >
                <span>Book Live Demonstration</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-300/15 bg-slate-900/80 px-8 py-4 text-sm font-bold text-slate-200 hover:bg-slate-800 hover:text-ink transition"
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
