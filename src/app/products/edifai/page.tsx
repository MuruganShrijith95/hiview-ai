"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import GlowCard from "@/components/GlowCard";
import StatsCounter from "@/components/StatsCounter";
import AnimatedVisual from "@/components/AnimatedVisual";
import { PRODUCTS } from "@/lib/constants";
import { 
  Network, 
  Sparkles, 
  ShieldCheck, 
  Activity, 
  Layers, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  FileCheck2, 
  Clock, 
  Database,
  Cpu
} from "lucide-react";

export default function EdifaiProductPage() {
  const product = PRODUCTS.find((p) => p.id === "edifai")!;

  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      {/* Hero */}
      <section className="relative pt-12 pb-16 text-center">
        <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[750px] rounded-full bg-sky-500/15 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-950/40 px-4 py-1.5 text-xs font-semibold text-sky-300 backdrop-blur-md mb-6">
            <Network className="h-3.5 w-3.5 text-sky-400" />
            <span>AI-Native EDI Intelligence</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
            {product.detailedContent.heroTitle}
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
            {product.detailedContent.heroSubtitle}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/demo"
              className="hover-shine inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 px-8 py-3.5 text-xs font-extrabold text-white shadow-lg shadow-sky-500/25 hover:from-sky-400 hover:to-blue-500 transition"
            >
              <span>Test Self-Healing EDI Live</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Animated 3D Visual Showcase */}
          <div className="mt-12 max-w-4xl mx-auto">
            <AnimatedVisual
              src={product.image}
              alt="EDIFAI AI Data Stream & Schema Ingestion"
              badgeText="EDIFAI NEURAL MAPPING ENGINE • ACTIVE"
              aspectRatio="wide"
              floatingBadges={[
                { title: "Schema Autocorrection", value: "99.4% Precision", position: "top-right", icon: Sparkles },
                { title: "ANSI X12 856 ASN", value: "180ms Payload Fix", position: "bottom-left", icon: Zap },
                { title: "ERP Sync", value: "0 Downtime", position: "bottom-right", icon: ShieldCheck }
              ]}
            />
          </div>

          {/* Hard Metrics Strip */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 rounded-3xl border border-white/10 bg-slate-950/60 p-6 backdrop-blur-2xl">
            {product.metrics.map((m, i) => (
              <StatsCounter key={i} value={m.value} label={m.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Problem vs AI Solution */}
      <AnimatedSection className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-3xl border border-red-500/20 bg-red-950/10 p-8 backdrop-blur-xl">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-rose-400">
              The Legacy EDI Bottleneck
            </div>
            <h3 className="mt-2 text-2xl font-bold text-white">
              Rigid Translators Cause Silent Dock Stoppages
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              {product.detailedContent.coreProblem}
            </p>
          </div>

          <div className="rounded-3xl border border-sky-500/30 bg-sky-950/20 p-8 backdrop-blur-xl shadow-2xl">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-sky-300">
              The EDIFAI AI Solution
            </div>
            <h3 className="mt-2 text-2xl font-bold text-white">
              Autonomous In-Flight Payload Self-Healing
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-200">
              {product.detailedContent.aiSolution}
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Core Capabilities */}
      <AnimatedSection className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Product Capabilities"
          title="Deep Architectural"
          highlightText="EDI Intelligence"
          subtitle="Engineered for high-volume enterprise B2B transaction streams."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {product.detailedContent.capabilities.map((cap, i) => (
            <GlowCard key={i} className="p-6 space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/20 text-sky-400 border border-sky-500/30">
                <Cpu className="h-5 w-5" />
              </div>
              <h4 className="text-lg font-bold text-white">{cap.title}</h4>
              <p className="text-xs leading-relaxed text-slate-300">{cap.desc}</p>
            </GlowCard>
          ))}
        </div>
      </AnimatedSection>

      {/* 4-Step Workflow */}
      <AnimatedSection className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="How It Works"
          title="From Raw Transmission To"
          highlightText="Validated ERP Posting"
          subtitle="4-step automated processing pipeline operating in sub-200ms."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {product.detailedContent.workflowSteps.map((ws, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-slate-900/40 p-6 relative">
              <div className="font-mono text-3xl font-extrabold text-sky-400/40">
                {ws.step}
              </div>
              <h5 className="mt-3 text-sm font-bold text-white">{ws.title}</h5>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">{ws.detail}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-sky-500/30 bg-gradient-to-r from-sky-950/50 via-slate-950/80 to-amber-950/50 p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Eliminate 70% of Manual EDI Ticketing This Quarter
          </h2>
          <p className="mt-3 text-sm text-slate-300 max-w-2xl mx-auto">
            Book a 30-minute sandbox run with your sample EDI X12 or EDIFACT transaction files.
          </p>
          <div className="mt-6">
            <Link
              href="/demo"
              className="hover-shine inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-3 text-xs font-bold text-white shadow-lg"
            >
              <span>Schedule EDIFAI Sandbox Demo</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
