"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { DollarSign, TrendingUp, Clock, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ROICalculator() {
  const [annualSpend, setAnnualSpend] = useState<number>(25); // In Millions
  const [shipmentsPerMonth, setShipmentsPerMonth] = useState<number>(4000);
  const [facilitiesCount, setFacilitiesCount] = useState<number>(6);

  // Calculated estimates based on HiView benchmark data
  const annualDetentionDemurrageCut = (annualSpend * 1000000 * 0.032).toLocaleString("en-US", { maximumFractionDigits: 0 });
  const annualEDIWorkloadSavings = ((shipmentsPerMonth * 12 * 8.5) * 0.7).toLocaleString("en-US", { maximumFractionDigits: 0 });
  const workingCapitalFreed = (annualSpend * 1000000 * 0.045).toLocaleString("en-US", { maximumFractionDigits: 0 });
  const totalAnnualValue = ((annualSpend * 1000000 * 0.077) + (shipmentsPerMonth * 12 * 8.5 * 0.7)).toLocaleString("en-US", { maximumFractionDigits: 0 });

  return (
    <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 md:p-10 backdrop-blur-xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Interactive Sliders */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <div className="flex items-center justify-between text-sm font-semibold text-white">
              <span>Annual Freight & Logistics Spend</span>
              <span className="font-mono text-emerald-400 font-bold">${annualSpend}M / yr</span>
            </div>
            <input
              type="range"
              min={5}
              max={150}
              step={5}
              value={annualSpend}
              onChange={(e) => setAnnualSpend(Number(e.target.value))}
              className="mt-3 w-full accent-emerald-400 cursor-pointer h-2 bg-slate-800 rounded-lg"
            />
            <div className="mt-1 flex justify-between text-[10px] font-mono text-slate-500">
              <span>$5M</span>
              <span>$75M</span>
              <span>$150M+</span>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between text-sm font-semibold text-white">
              <span>Monthly Shipments / Transactions</span>
              <span className="font-mono text-emerald-400 font-bold">{shipmentsPerMonth.toLocaleString()} / mo</span>
            </div>
            <input
              type="range"
              min={500}
              max={25000}
              step={500}
              value={shipmentsPerMonth}
              onChange={(e) => setShipmentsPerMonth(Number(e.target.value))}
              className="mt-3 w-full accent-emerald-400 cursor-pointer h-2 bg-slate-800 rounded-lg"
            />
            <div className="mt-1 flex justify-between text-[10px] font-mono text-slate-500">
              <span>500</span>
              <span>12,500</span>
              <span>25,000+</span>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between text-sm font-semibold text-white">
              <span>Operating Distribution Hubs / Plants</span>
              <span className="font-mono text-emerald-400 font-bold">{facilitiesCount} Nodes</span>
            </div>
            <input
              type="range"
              min={1}
              max={30}
              step={1}
              value={facilitiesCount}
              onChange={(e) => setFacilitiesCount(Number(e.target.value))}
              className="mt-3 w-full accent-emerald-400 cursor-pointer h-2 bg-slate-800 rounded-lg"
            />
            <div className="mt-1 flex justify-between text-[10px] font-mono text-slate-500">
              <span>1 Node</span>
              <span>15 Nodes</span>
              <span>30+ Nodes</span>
            </div>
          </div>
        </div>

        {/* Right Calculated ROI Card */}
        <div className="lg:col-span-6">
          <div className="rounded-2xl border border-emerald-500/30 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 p-6 md:p-8 shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between text-xs text-slate-400 pb-4 border-b border-white/10 font-mono">
              <span>ESTIMATED ANNUAL ENTERPRISE ROI</span>
              <span className="text-emerald-400 font-bold">PROVEN PAYBACK &lt; 90 DAYS</span>
            </div>

            <div className="my-6">
              <div className="text-xs uppercase font-bold text-slate-400">Total Projected Annual Value</div>
              <div className="mt-1 font-mono text-4xl sm:text-5xl font-extrabold text-white">
                <span className="text-emerald-400">$</span>{totalAnnualValue}
              </div>
            </div>

            <div className="space-y-3 text-xs border-t border-white/10 pt-4">
              <div className="flex items-center justify-between">
                <span className="text-slate-300 flex items-center gap-2">
                  <DollarSign className="h-3.5 w-3.5 text-emerald-400" />
                  Detention & Demurrage Averted
                </span>
                <span className="font-mono font-bold text-white">${annualDetentionDemurrageCut}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-300 flex items-center gap-2">
                  <Clock className="h-3.5 w-3.5 text-amber-400" />
                  EDI & Operations Admin Hours Saved
                </span>
                <span className="font-mono font-bold text-white">${annualEDIWorkloadSavings}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-300 flex items-center gap-2">
                  <TrendingUp className="h-3.5 w-3.5 text-emerald-400" />
                  Working Capital Buffer Unlocked
                </span>
                <span className="font-mono font-bold text-white">${workingCapitalFreed}</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10">
              <Link
                href="/demo"
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 py-3 text-xs font-bold text-white shadow-lg shadow-emerald-500/25 hover:from-emerald-400 hover:to-teal-500 transition"
              >
                Validate ROI with Your Historical Data
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
