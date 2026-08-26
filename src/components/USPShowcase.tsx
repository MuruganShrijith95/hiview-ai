"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CORE_USPS } from "@/lib/constants";
import { 
  Cpu, 
  TrendingUp, 
  Bot, 
  Layers, 
  BellRing, 
  CheckCircle, 
  ArrowRight,
  ShieldCheck,
  Activity,
  Zap
} from "lucide-react";
import Link from "next/link";

const ICONS = [Activity, TrendingUp, Bot, Layers, BellRing];

export default function USPShowcase() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const currentUsp = CORE_USPS[activeTab];
  const IconComponent = ICONS[activeTab] || Activity;

  return (
    <div className="relative rounded-3xl border border-white/10 bg-slate-900/40 p-6 md:p-10 backdrop-blur-xl">
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
                  ? "bg-slate-800/90 border border-emerald-500/40 shadow-lg shadow-emerald-500/10"
                  : "bg-slate-950/40 border border-white/5 hover:bg-slate-900/60 hover:border-white/15"
              }`}
            >
              <div
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-colors ${
                  isSelected
                    ? "bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/30"
                    : "bg-slate-800 text-slate-400 group-hover:text-emerald-400"
                }`}
              >
                <TabIcon className="h-4 w-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase">
                  USP {usp.number}
                </div>
                <div className={`mt-0.5 text-xs font-bold truncate transition-colors ${isSelected ? "text-white" : "text-slate-300"}`}>
                  {usp.title}
                </div>
              </div>

              {isSelected && (
                <motion.div
                  layoutId="active-usp-indicator"
                  className="absolute -bottom-[33px] left-1/2 -translate-x-1/2 hidden lg:block h-2 w-2 rotate-45 bg-emerald-400"
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
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Left Description Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3 py-1 text-xs font-semibold text-emerald-300">
                <IconComponent className="h-3.5 w-3.5" />
                <span>{currentUsp.badge}</span>
              </div>

              <h3 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl leading-tight">
                {currentUsp.headline}
              </h3>

              <p className="text-base leading-relaxed text-slate-300">
                {currentUsp.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {currentUsp.keyPoints.map((point, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 rounded-xl border border-white/5 bg-slate-950/50 p-3 text-xs text-slate-200"
                  >
                    <CheckCircle className="h-4 w-4 shrink-0 text-emerald-400 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-4">
                <Link
                  href="/platform"
                  className="hover-shine inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 px-5 py-2.5 text-xs font-bold text-white shadow-lg shadow-emerald-500/25 hover:from-emerald-400 hover:to-teal-500 transition"
                >
                  Explore Platform Architecture
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-slate-900/60 px-5 py-2.5 text-xs font-bold text-slate-300 hover:bg-slate-800 hover:text-white transition"
                >
                  Request Live Proof
                </Link>
              </div>
            </div>

            {/* Right Visual Metric Card */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-slate-900/90 via-slate-950/90 to-slate-900/90 p-8 shadow-2xl backdrop-blur-2xl">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-emerald-500/20 blur-2xl pointer-events-none" />
                
                <div className="flex items-center justify-between text-xs text-slate-400 pb-4 border-b border-white/10 font-mono">
                  <span>METRIC VERIFICATION</span>
                  <span className="text-emerald-400 font-bold">TAG 2026 BENCHMARK</span>
                </div>

                <div className="my-8 text-center">
                  <div className="font-mono text-6xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-400 bg-clip-text text-transparent">
                    {currentUsp.stat}
                  </div>
                  <div className="mt-3 text-sm font-semibold tracking-wide text-white">
                    {currentUsp.statLabel}
                  </div>
                </div>

                <div className="rounded-xl bg-slate-950/60 p-4 border border-white/5 text-xs text-slate-400 space-y-2">
                  <div className="flex items-center justify-between">
                    <span>Autonomous Execution SLA</span>
                    <span className="font-mono text-emerald-400">99.98%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Real-Time Latency</span>
                    <span className="font-mono text-emerald-400">&lt;150ms</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Audit Trail Compliance</span>
                    <span className="font-mono text-amber-400">100% Immutable</span>
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
