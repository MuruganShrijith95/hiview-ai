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
    <div className="rounded-2xl border border-[#e4edf8] bg-white p-6 md:p-10 shadow-[0_1px_2px_rgba(16,42,86,0.04),0_8px_24px_-18px_rgba(16,42,86,0.18)]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Interactive Sliders */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <div className="flex items-center justify-between text-sm font-bold text-[#0e1b34]">
              <span>Annual Freight & Logistics Spend</span>
              <span className="font-mono text-[#1D9AE1] font-extrabold">${annualSpend}M / yr</span>
            </div>
            <input
              type="range"
              min={5}
              max={150}
              step={5}
              value={annualSpend}
              onChange={(e) => setAnnualSpend(Number(e.target.value))}
              className="mt-3 w-full accent-[#1D9AE1] cursor-pointer h-2 bg-[#eef4fc] rounded-lg"
            />
            <div className="mt-1 flex justify-between text-[10px] font-mono text-[#6b7a99]">
              <span>$5M</span>
              <span>$75M</span>
              <span>$150M+</span>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between text-sm font-bold text-[#0e1b34]">
              <span>Monthly Shipments / Transactions</span>
              <span className="font-mono text-[#1D9AE1] font-extrabold">{shipmentsPerMonth.toLocaleString()} / mo</span>
            </div>
            <input
              type="range"
              min={500}
              max={25000}
              step={500}
              value={shipmentsPerMonth}
              onChange={(e) => setShipmentsPerMonth(Number(e.target.value))}
              className="mt-3 w-full accent-[#1D9AE1] cursor-pointer h-2 bg-[#eef4fc] rounded-lg"
            />
            <div className="mt-1 flex justify-between text-[10px] font-mono text-[#6b7a99]">
              <span>500</span>
              <span>12,500</span>
              <span>25,000+</span>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between text-sm font-bold text-[#0e1b34]">
              <span>Operating Distribution Hubs / Plants</span>
              <span className="font-mono text-[#1D9AE1] font-extrabold">{facilitiesCount} Nodes</span>
            </div>
            <input
              type="range"
              min={1}
              max={30}
              step={1}
              value={facilitiesCount}
              onChange={(e) => setFacilitiesCount(Number(e.target.value))}
              className="mt-3 w-full accent-[#1D9AE1] cursor-pointer h-2 bg-[#eef4fc] rounded-lg"
            />
            <div className="mt-1 flex justify-between text-[10px] font-mono text-[#6b7a99]">
              <span>1 Node</span>
              <span>15 Nodes</span>
              <span>30+ Nodes</span>
            </div>
          </div>
        </div>

        {/* Right Calculated ROI Card */}
        <div className="lg:col-span-6">
          <div className="rounded-2xl border border-[#cfe6ff] bg-[#f4f9ff] p-6 md:p-8 shadow-[0_12px_32px_-12px_rgba(29,154,225,0.18)] relative overflow-hidden">
            <div className="flex items-center justify-between text-xs text-[#6b7a99] pb-4 border-b border-[#e4edf8] font-mono font-bold">
              <span>ESTIMATED ANNUAL ENTERPRISE ROI</span>
              <span className="text-[#1D9AE1] font-extrabold">PROVEN RAPID PAYBACK</span>
            </div>

            <div className="my-6">
              <div className="text-xs uppercase font-bold text-[#6b7a99]">Total Projected Annual Value</div>
              <div className="mt-1 font-mono text-4xl sm:text-5xl font-black text-[#0e1b34]">
                <span className="text-[#1D9AE1]">$</span>{totalAnnualValue}
              </div>
            </div>

            <div className="space-y-3 text-xs border-t border-[#e4edf8] pt-4">
              <div className="flex items-center justify-between">
                <span className="text-[#33456b] flex items-center gap-2 font-medium">
                  <DollarSign className="h-3.5 w-3.5 text-[#1D9AE1]" />
                  Detention & Demurrage Averted
                </span>
                <span className="font-mono font-bold text-[#0e1b34]">${annualDetentionDemurrageCut}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#33456b] flex items-center gap-2 font-medium">
                  <Clock className="h-3.5 w-3.5 text-[#f0a63a]" />
                  EDI & Operations Admin Hours Saved
                </span>
                <span className="font-mono font-bold text-[#0e1b34]">${annualEDIWorkloadSavings}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#33456b] flex items-center gap-2 font-medium">
                  <TrendingUp className="h-3.5 w-3.5 text-[#1fb877]" />
                  Working Capital Buffer Unlocked
                </span>
                <span className="font-mono font-bold text-[#0e1b34]">${workingCapitalFreed}</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#e4edf8]">
              <Link
                href="/demo"
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-[#7CC8F1] to-[#1D9AE1] py-3.5 text-xs font-bold text-white shadow-[0_10px_24px_-8px_rgba(29,154,225,0.55)] hover:shadow-[0_18px_32px_-10px_rgba(29,154,225,0.7)] transition"
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
