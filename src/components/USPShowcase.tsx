"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CORE_USPS } from "@/lib/constants";
import { 
  TrendingUp, 
  Bot, 
  Layers, 
  BellRing, 
  CheckCircle, 
  ArrowRight, 
  Activity, 
  Sparkles,
  ShieldCheck
} from "lucide-react";
import Link from "next/link";

const ICONS = [Activity, TrendingUp, Bot, Layers, BellRing];

export default function USPShowcase() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const currentUsp = CORE_USPS[activeTab];
  const IconComponent = ICONS[activeTab] || Activity;

  return (
    <div className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900/90 via-[#0B0F19]/95 to-[#070A12]/95 p-6 md:p-10 backdrop-blur-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_16px_40px_rgba(0,0,0,0.5)]">
      {/* Top USP Tab Switcher */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3 pb-8 border-b border-white/10">
        {CORE_USPS.map((usp, idx) => {
          const isSelected = activeTab === idx;
          const TabIcon = ICONS[idx];
          return (
            <button
              key={usp.id}
              onClick={() => setActiveTab(idx)}
              className={`group flex items-start gap-3 rounded-2xl p-4 text-left transition-all duration-300 relative ${
                isSelected
                  ? "bg-slate-850/95 border border-cyan-400/50 shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_8px_24px_rgba(0,240,255,0.15)]"
                  : "bg-slate-950/60 border border-white/5 hover:bg-slate-900/80 hover:border-white/15"
              }`}
            >
              <div
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-all duration-200 ${
                  isSelected
                    ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30"
                    : "bg-slate-800 text-slate-400 group-hover:text-cyan-400"
                }`}
              >
                <TabIcon className="h-4 w-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className={`text-[10px] font-mono font-extrabold tracking-wider uppercase transition-colors ${isSelected ? "text-cyan-400" : "text-slate-500"}`}>
                  USP {usp.number}
                </div>
                <div className={`mt-0.5 text-xs font-black truncate transition-colors ${isSelected ? "text-white" : "text-slate-300"}`}>
                  {usp.title}
                </div>
              </div>

              {isSelected && (
                <motion.div
                  layoutId="active-usp-indicator"
                  className="absolute -bottom-[33px] left-1/2 -translate-x-1/2 hidden lg:block h-2.5 w-2.5 rotate-45 bg-cyan-400 shadow-[0_0_10px_rgba(0,240,255,0.8)]"
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Main Tab Content Display */}
      <div className="mt-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentUsp.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Left Description Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/60 px-3.5 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.15)]">
                <IconComponent className="h-3.5 w-3.5" />
                <span>{currentUsp.badge}</span>
              </div>

              <h3 className="text-2xl font-black text-white sm:text-3xl lg:text-4xl leading-tight">
                {currentUsp.headline}
              </h3>

              <p className="text-base leading-relaxed text-slate-300">
                {currentUsp.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {currentUsp.keyPoints.map((point, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 rounded-xl border border-white/10 bg-slate-950/70 p-3.5 text-xs font-medium text-slate-200 shadow-sm"
                  >
                    <CheckCircle className="h-4 w-4 shrink-0 text-cyan-400 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-4">
                <Link
                  href="/platform"
                  className="hover-shine inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-xs font-black text-white shadow-lg shadow-cyan-500/25 hover:from-cyan-400 hover:to-blue-500 transition"
                >
                  <span>Explore Platform Architecture</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-slate-900/80 px-6 py-3 text-xs font-black text-slate-200 hover:bg-slate-800 hover:text-white transition"
                >
                  <span>Request Live Proof</span>
                </Link>
              </div>
            </div>

            {/* Right Visual Metric Card */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-slate-900 via-[#0B0F19] to-slate-950 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_16px_40px_rgba(0,0,0,0.6)] backdrop-blur-2xl">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-500/20 blur-2xl pointer-events-none" />
                
                <div className="flex items-center justify-between text-xs text-slate-400 pb-4 border-b border-white/10 font-mono font-bold">
                  <span>METRIC VERIFICATION</span>
                  <span className="text-cyan-400 font-extrabold">TAG 2026 BENCHMARK</span>
                </div>

                <div className="my-8 text-center">
                  <div className="font-mono text-6xl sm:text-7xl font-black tracking-tight bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 bg-clip-text text-transparent">
                    {currentUsp.stat}
                  </div>
                  <div className="mt-3 text-sm font-bold tracking-wide text-white">
                    {currentUsp.statLabel}
                  </div>
                </div>

                <div className="rounded-xl bg-slate-950/80 p-4 border border-white/10 text-xs text-slate-300 space-y-2.5 font-mono">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Autonomous Execution SLA</span>
                    <span className="text-cyan-400 font-bold">99.98%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Real-Time Latency</span>
                    <span className="text-cyan-400 font-bold">&lt;150ms</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Audit Trail Compliance</span>
                    <span className="text-emerald-400 font-bold">100% Immutable</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
