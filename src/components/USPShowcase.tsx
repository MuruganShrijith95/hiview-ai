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
    <div className="relative rounded-3xl border border-[#cfe6ff] bg-gradient-to-b from-[#f4f9ff] via-[#f8fbff] to-white p-6 md:p-10 shadow-[0_12px_36px_-18px_rgba(29,154,225,0.14)]">
      {/* Top USP Tab Switcher */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3 pb-7 border-b border-[#cfe6ff]">
        {CORE_USPS.map((usp, idx) => {
          const isSelected = activeTab === idx;
          const TabIcon = ICONS[idx];
          return (
            <button
              key={usp.id}
              onClick={() => setActiveTab(idx)}
              onMouseEnter={() => setActiveTab(idx)}
              className={`group flex items-start gap-3 rounded-2xl p-3.5 text-left transition-all duration-200 relative cursor-pointer ${
                isSelected
                  ? "bg-[#e0efff] border-2 border-[#1D9AE1] shadow-md shadow-sky-500/15 scale-[1.02]"
                  : "bg-[#edf5fd] border border-[#cfe6ff] hover:bg-[#e4f0fc] hover:border-[#b8dcff]"
              }`}
            >
              <div
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-all duration-200 ${
                  isSelected
                    ? "bg-[#1D9AE1] text-white shadow-sm font-bold"
                    : "bg-[#dcedfc] text-[#1D9AE1] group-hover:bg-[#1D9AE1] group-hover:text-white"
                }`}
              >
                <TabIcon className="h-4 w-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className={`text-[10px] font-mono font-bold tracking-wider uppercase transition-colors ${isSelected ? "text-[#1D9AE1]" : "text-[#547099]"}`}>
                  USP {usp.number}
                </div>
                <div className={`mt-0.5 text-xs font-extrabold truncate transition-colors ${isSelected ? "text-[#0e1b34]" : "text-[#1e3256]"}`}>
                  {usp.title}
                </div>
              </div>

              {isSelected && (
                <motion.div
                  layoutId="active-usp-indicator"
                  className="absolute -bottom-[29px] left-1/2 -translate-x-1/2 hidden lg:block h-2.5 w-2.5 rotate-45 bg-[#1D9AE1]"
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
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#cfe6ff] bg-[#e2f0fd] px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#1D9AE1]">
                <IconComponent className="h-3.5 w-3.5" />
                <span>{currentUsp.badge}</span>
              </div>

              <h3 className="text-2xl font-extrabold text-[#0e1b34] sm:text-3xl lg:text-4xl leading-tight">
                {currentUsp.headline}
              </h3>

              <p className="text-base leading-relaxed text-[#547099]">
                {currentUsp.description}
              </p>

              {/* 4 Feature Checklist Boxes with Light Blue Background */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {currentUsp.keyPoints.map((point, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 rounded-2xl border border-[#cfe6ff] bg-[#eef6ff] p-4 text-xs font-bold text-[#0e1b34] shadow-sm hover:bg-[#e4f0fc] hover:border-[#b8dcff] transition-colors"
                  >
                    <CheckCircle className="h-4 w-4 shrink-0 text-[#1fb877] mt-0.5" />
                    <span className="leading-snug">{point}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 flex flex-wrap items-center gap-4">
                <Link
                  href="/platform"
                  className="hover-shine inline-flex items-center gap-2 rounded-xl bg-gradient-to-b from-[#7CC8F1] to-[#1D9AE1] px-6 py-3 text-xs font-bold text-white shadow-[0_10px_24px_-8px_rgba(29,154,225,0.55)] hover:shadow-[0_18px_32px_-10px_rgba(29,154,225,0.7)] transition"
                >
                  <span>Explore Platform Architecture</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-2 rounded-xl border border-[#cfe6ff] bg-[#eef6ff] px-6 py-3 text-xs font-bold text-[#0e1b34] hover:text-[#1D9AE1] hover:bg-[#e4f0fc] transition shadow-sm"
                >
                  <span>Request Live Proof</span>
                </Link>
              </div>
            </div>

            {/* Right Visual Metric Card */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-3xl border-2 border-[#b9dcff] bg-gradient-to-b from-[#e3f1ff] via-[#edf6ff] to-[#f4f9ff] p-7 sm:p-8 shadow-[0_12px_32px_-12px_rgba(29,154,225,0.25)]">
                <div className="flex items-center justify-between text-xs text-[#547099] pb-4 border-b border-[#cfe6ff] font-mono font-bold">
                  <span>METRIC VERIFICATION</span>
                  <span className="text-[#1D9AE1] font-extrabold">TAG 2026 BENCHMARK</span>
                </div>

                <div className="my-6 text-center">
                  <div className="font-mono text-5xl sm:text-6xl font-black tracking-tight text-[#1D9AE1]">
                    {currentUsp.stat}
                  </div>
                  <div className="mt-2 text-sm font-extrabold tracking-wide text-[#0e1b34]">
                    {currentUsp.statLabel}
                  </div>
                </div>

                <div className="rounded-2xl bg-white/90 p-4 border border-[#cfe6ff] text-xs text-[#33456b] space-y-2.5 font-mono shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-[#547099]">Autonomous Execution SLA</span>
                    <span className="text-[#1D9AE1] font-bold">99.98%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#547099]">Real-Time Latency</span>
                    <span className="text-[#1fb877] font-bold">&lt;150ms</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#547099]">Audit Trail Compliance</span>
                    <span className="text-[#0e1b34] font-bold">100% Immutable</span>
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
