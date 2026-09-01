"use client";

import React from "react";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import GlowCard from "@/components/GlowCard";
import StatsCounter from "@/components/StatsCounter";
import AnimatedVisual from "@/components/AnimatedVisual";
import HeroBackgroundEffects from "@/components/HeroBackgroundEffects";
import { PRODUCTS } from "@/lib/constants";
import { 
  Warehouse, 
  ArrowRight, 
  CheckCircle2, 
  Grid, 
  FastForward, 
  ShieldAlert, 
  Calendar,
  Zap,
  TrendingUp
} from "lucide-react";

export default function WmsProductPage() {
  const product = PRODUCTS.find((p) => p.id === "wms")!;

  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      {/* Hero */}
      <section className="relative pt-10 pb-12 text-center overflow-hidden">
        {/* Animated Network Stream & Floating Flank Cockpits */}
        <HeroBackgroundEffects variant="wms" />

        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#cfe6ff] bg-[#e8f3ff] px-4 py-1.5 text-xs font-bold text-[#1D9AE1] shadow-sm mb-6">
            <Warehouse className="h-3.5 w-3.5 text-[#1D9AE1]" />
            <span>Warehouse Execution Layer</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0e1b34] tracking-tight leading-[1.15]">
            {product.detailedContent.heroTitle}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#547099] leading-relaxed max-w-3xl mx-auto">
            {product.detailedContent.heroSubtitle}
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/demo"
              className="hover-shine inline-flex items-center gap-2 rounded-xl bg-gradient-to-b from-[#7CC8F1] to-[#1D9AE1] px-8 py-3.5 text-xs font-bold text-white shadow-[0_10px_24px_-8px_rgba(29,154,225,0.55)] hover:shadow-[0_18px_32px_-10px_rgba(29,154,225,0.7)] transition"
            >
              <span>Test Multi-Site WMS Federation</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Animated 3D Visual Showcase */}
          <div className="mt-10 max-w-4xl mx-auto">
            <AnimatedVisual
              src={product.image}
              alt="HiView WMS Execution Layer Multi-Site Federation"
              badgeText="WMS EXECUTION OVERLAY • ACTIVE"
              aspectRatio="wide"
              glowColor="rgba(6, 182, 212, 0.25)"
              floatingBadges={[
                { title: "Pick & Pack Boost", value: "+24% Throughput", position: "top-right", icon: TrendingUp },
                { title: "Dock Turnaround", value: "30% Faster Dwell", position: "bottom-left", icon: FastForward },
                { title: "Location Accuracy", value: "99.9% Real-Time", position: "bottom-right", icon: CheckCircle2 }
              ]}
            />
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 rounded-3xl border border-[#cfe6ff] bg-gradient-to-b from-[#eef6ff] via-[#f5f9ff] to-white p-6 sm:p-8 shadow-[0_12px_32px_-16px_rgba(29,154,225,0.18)]">
            {product.metrics.map((m, i) => (
              <StatsCounter key={i} value={m.value} label={m.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Problem vs AI Solution */}
      <AnimatedSection className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div className="rounded-3xl border border-[#fecaca] bg-gradient-to-b from-[#fff5f5] via-[#fffbfb] to-white p-7 sm:p-8 shadow-sm">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#e11d48]">
              The Multi-Site Warehouse Silo
            </div>
            <h3 className="mt-2 text-2xl font-extrabold text-[#0e1b34]">
              Fragmented Legacy WMS Software
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#6b7a99]">
              {product.detailedContent.coreProblem}
            </p>
          </div>

          <div className="rounded-3xl border-2 border-[#cfe6ff] bg-gradient-to-b from-[#eef6ff] via-[#f5f9ff] to-white p-7 sm:p-8 shadow-[0_12px_32px_-16px_rgba(29,154,225,0.18)]">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#1D9AE1]">
              The HiView Execution Overlay
            </div>
            <h3 className="mt-2 text-2xl font-extrabold text-[#0e1b34]">
              Universal Orchestration & Dynamic Pick Optimization
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#547099]">
              {product.detailedContent.aiSolution}
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Capabilities */}
      <AnimatedSection className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Product Capabilities"
          title="Engineered For"
          highlightText="High-Throughput DCs"
          subtitle="Dynamic wave orchestration, FEFO enforcement, and dock appointment synchronization."
        />

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {product.detailedContent.capabilities.map((cap, i) => (
            <GlowCard key={i} className="p-6 space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e8f3ff] text-[#1D9AE1] border border-[#cfe6ff]">
                <Grid className="h-5 w-5" />
              </div>
              <h4 className="text-lg font-extrabold text-[#0e1b34]">{cap.title}</h4>
              <p className="text-xs sm:text-sm leading-relaxed text-[#547099]">{cap.desc}</p>
            </GlowCard>
          ))}
        </div>
      </AnimatedSection>

      {/* Workflow */}
      <AnimatedSection className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="DC Workflow"
          title="From Multi-WMS Ingestion To"
          highlightText="Carrier Dock Hand-Off"
          subtitle="Synchronizing wave planning with actual carrier arrival schedules."
        />

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {product.detailedContent.workflowSteps.map((ws, i) => (
            <div key={i} className="rounded-3xl border border-[#cfe6ff] bg-gradient-to-b from-[#edf5fd] via-[#f5f9ff] to-white p-6 relative shadow-sm hover:border-[#1D9AE1] hover:shadow-md transition-all">
              <div className="font-mono text-3xl font-black text-[#1D9AE1]/40">
                {ws.step}
              </div>
              <h5 className="mt-3 text-sm font-extrabold text-[#0e1b34]">{ws.title}</h5>
              <p className="mt-2 text-xs leading-relaxed text-[#547099]">{ws.detail}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-[#cfe6ff] bg-gradient-to-b from-[#eaf4ff] via-[#ffffff] to-[#eef6ff] p-8 sm:p-14 text-center shadow-[0_24px_48px_-18px_rgba(23,72,143,0.18)]">
          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0e1b34]">
              Unify Your Multi-Facility Distribution Network
            </h2>
            <p className="text-sm sm:text-base text-[#547099] max-w-2xl mx-auto leading-relaxed">
              Federate Manhattan, SAP EWM, and Blue Yonder into one operational cockpit.
            </p>
            <div className="pt-2">
              <Link
                href="/demo"
                className="hover-shine inline-flex items-center gap-2 rounded-xl bg-gradient-to-b from-[#7CC8F1] to-[#1D9AE1] px-7 py-3.5 text-xs font-bold text-white shadow-[0_10px_24px_-8px_rgba(29,154,225,0.55)] hover:shadow-[0_18px_32px_-10px_rgba(29,154,225,0.7)] transition"
              >
                <span>Schedule WMS Overlay Demo</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
