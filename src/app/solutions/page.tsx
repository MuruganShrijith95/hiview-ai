"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import GlowCard from "@/components/GlowCard";
import StatsCounter from "@/components/StatsCounter";
import { INDUSTRIES } from "@/lib/constants";
import { 
  Factory, 
  HeartPulse, 
  ShoppingBag, 
  Car, 
  Cpu, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  TrendingUp, 
  Clock, 
  Award,
  Layers
} from "lucide-react";

export default function SolutionsPage() {
  const [activeTab, setActiveTab] = useState<string>("manufacturing");

  const icons: Record<string, any> = {
    manufacturing: Factory,
    pharma: HeartPulse,
    retail: ShoppingBag,
    automotive: Car,
    electronics: Cpu
  };

  const detailedIndustries = [
    {
      id: "manufacturing",
      name: "Manufacturing & Industrial",
      headline: "Prevent Catastrophic Production Stoppages with Multi-Tier BOM Visibility",
      desc: "Coordinate tier-1 and tier-2 supplier part deliveries with real-time PO milestone tracking to prevent plant downtime and component starvation.",
      stats: [
        { value: "40%", label: "Reduction in Production Delays" },
        { value: "99.4%", label: "Supplier Reliability Accuracy" },
        { value: "$280K", label: "Average Stoppage Cost Saved / Line" }
      ],
      solutionsProvided: [
        "Multi-tier purchase order tracking from OEM to raw material supplier",
        "Predictive parts shortage sentinel with 15-day advanced warning",
        "Dynamic supplier OTIF reliability scoring based on lead-time variance",
        "Automated expedited freight triggering when components risk transit delay"
      ]
    },
    {
      id: "pharma",
      name: "Pharmaceuticals & Healthcare",
      headline: "Zero Spoilage & Full GxP / FDA 21 CFR Part 11 Cold Chain Compliance",
      desc: "Continuous telematics tracking for temperature-sensitive biologics and vaccines with automated digital audit vaults and rapid thermal excursion alerts.",
      stats: [
        { value: "99.2%", label: "Cold-Chain Integrity SLA" },
        { value: "100%", label: "Immutable GxP Audit Trail" },
        { value: "$620K", label: "Vaccine Spoilage Averted / Incident" }
      ],
      solutionsProvided: [
        "Continuous IoT sensor integration across Air, Ocean & Reefer ground transport",
        "Real-time thermal degradation modeling with automated dry-ice re-icing alerts",
        "Multi-stakeholder federation uniting customs brokers, airlines, and cold storage",
        "Certified digital document vault storing phytosanitary & FDA declarations"
      ]
    },
    {
      id: "retail",
      name: "Retail & Omnichannel E-Commerce",
      headline: "Dynamic Multi-Node Inventory Balancing & Peak Season Fulfillment Agility",
      desc: "SKU-level demand sensing and dynamic safety stock reallocation across regional distribution centers, stores, and fulfillment hubs.",
      stats: [
        { value: "99.5%", label: "Order Fulfillment OTIF" },
        { value: "32%", label: "Working Capital Buffer Unlocked" },
        { value: "4.2x", label: "Faster Inventory Velocity" }
      ],
      solutionsProvided: [
        "Point-of-Sale (POS) real-time demand sensing capturing promotion spikes",
        "Multi-echelon inventory balancing preventing regional stock imbalances",
        "Autonomous wave planning and pick path optimization in high-velocity DCs",
        "Last-mile carrier delivery exception management with proactive customer alerts"
      ]
    },
    {
      id: "automotive",
      name: "Automotive Just-In-Time (JIT)",
      headline: "Precision Transit Milestones & Supplier Reliability Scoring for JIT Plants",
      desc: "Strict JIT delivery monitoring with automated carrier re-routing to avoid severe assembly line stoppage penalties and sequencing errors.",
      stats: [
        { value: "65%", label: "Faster Exception Resolution" },
        { value: "0", label: "Unplanned Assembly Line Halts" },
        { value: "180ms", label: "EDI 856 ASN Validation Latency" }
      ],
      solutionsProvided: [
        "Sub-minute geofence trip tracking from supplier gate to plant dock door",
        "Automated self-healing for EDI 856 ASNs preventing yard check-in bottlenecks",
        "Dynamic alternative lane assignment during severe highway weather incidents",
        "Carrier detention risk sentinel alerting drayage teams before fee penalties"
      ]
    },
    {
      id: "electronics",
      name: "High-Tech & Consumer Electronics",
      headline: "Protect Landed Gross Margins Across Global Multimodal Freight Lanes",
      desc: "End-to-end ocean container tracking, port terminal dwell monitoring, and item-level tariff/accessorial landed cost protection.",
      stats: [
        { value: "4.2%", label: "Gross Margin Protection" },
        { value: "54 hrs", label: "Port Terminal Dwell Reduced" },
        { value: "100%", label: "Landed Cost Auditability" }
      ],
      solutionsProvided: [
        "Port of entry congestion forecasting (AIS vessel + berth queue index)",
        "Item-level true landed cost allocation (freight, duties, demurrage)",
        "Automated carrier invoice reconciliation against agreed contract tariffs",
        "Executive P&L dashboards visualizing profitability per supplier and lane"
      ]
    }
  ];

  const currentInd = detailedIndustries.find((i) => i.id === activeTab) || detailedIndustries[0];
  const IconComponent = icons[currentInd.id] || Factory;

  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      {/* Hero */}
      <section className="relative pt-12 pb-16 text-center">
        <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[750px] rounded-full bg-emerald-500/15 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-4 py-1.5 text-xs font-semibold text-emerald-300 backdrop-blur-md mb-6">
            <Layers className="h-3.5 w-3.5 text-emerald-400" />
            <span>Tailored Enterprise Solutions</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
            Engineered For Your Industry&apos;s{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-amber-400 bg-clip-text text-transparent">
              Specific Supply Chain Vulnerabilities
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
            Discover how HiView AI addresses unique compliance, transit, inventory, and margin challenges across manufacturing, healthcare, automotive, retail, and tech.
          </p>
        </div>
      </section>

      {/* Industry Tabs Selector & Deep Dive */}
      <AnimatedSection className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Horizontal Industry Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-3 pb-8 border-b border-white/10">
          {detailedIndustries.map((ind) => {
            const isSelected = activeTab === ind.id;
            const TabIcon = icons[ind.id] || Factory;
            return (
              <button
                key={ind.id}
                onClick={() => setActiveTab(ind.id)}
                className={`flex items-center gap-2.5 rounded-2xl px-5 py-3 text-xs font-bold transition-all duration-300 ${
                  isSelected
                    ? "bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/25"
                    : "bg-slate-900/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-white/5"
                }`}
              >
                <TabIcon className="h-4 w-4" />
                <span>{ind.name}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <div className="mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentInd.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-10"
            >
              {/* Main Headline & Description */}
              <div className="rounded-3xl border border-emerald-500/30 bg-slate-900/80 p-8 sm:p-12 backdrop-blur-2xl shadow-2xl">
                <div className="flex items-center gap-3 text-emerald-400 pb-4 border-b border-white/10">
                  <IconComponent className="h-6 w-6" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider">
                    {currentInd.name} Solution Blueprint
                  </span>
                </div>

                <h2 className="mt-5 text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  {currentInd.headline}
                </h2>

                <p className="mt-4 text-base text-slate-300 leading-relaxed max-w-3xl">
                  {currentInd.desc}
                </p>

                {/* Hard Metrics */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 rounded-2xl border border-white/10 bg-slate-950/60 p-6">
                  {currentInd.stats.map((st, i) => (
                    <StatsCounter key={i} value={st.value} label={st.label} />
                  ))}
                </div>

                {/* Specific Capabilities Delivered */}
                <div className="mt-10 pt-8 border-t border-white/10">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-4">
                    Enterprise Capabilities Delivered
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {currentInd.solutionsProvided.map((sol, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 rounded-xl border border-white/5 bg-slate-950/40 p-4 text-xs text-slate-200"
                      >
                        <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{sol}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action CTA */}
                <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <div className="text-xs text-slate-400 flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-emerald-400" />
                    <span>Includes industry-specific pre-built connectors & compliance presets.</span>
                  </div>
                  <Link
                    href="/demo"
                    className="hover-shine inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 px-6 py-3 text-xs font-bold text-white shadow-lg shadow-emerald-500/25"
                  >
                    <span>Request Industry Blueprint Demo</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/50 via-slate-950/80 to-amber-950/50 p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Don&apos;t See Your Exact Vertical?
          </h2>
          <p className="mt-3 text-sm text-slate-300 max-w-2xl mx-auto">
            HiView AI adapts to any multi-tier supply chain network with configurable rules and custom connectors.
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="hover-shine inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 px-6 py-3 text-xs font-bold text-white shadow-lg"
            >
              <span>Speak With A Supply Chain Architect</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
