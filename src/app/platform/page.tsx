"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import GlowCard from "@/components/GlowCard";
import StatsCounter from "@/components/StatsCounter";
import IntegrationOrbit from "@/components/IntegrationOrbit";
import { 
  Layers, 
  Cpu, 
  ShieldCheck, 
  Zap, 
  Database, 
  Activity, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Bot, 
  GitBranch, 
  Sliders,
  Terminal,
  FileCheck2
} from "lucide-react";

interface Layer {
  layerNumber: string;
  name: string;
  badge: string;
  headline: string;
  description: string;
  techComponents: string[];
  metrics: string;
  icon: any;
}

const LAYERS: Layer[] = [
  {
    layerNumber: "01",
    name: "Universal Ingestion & Telematics Stream",
    badge: "Continuous Ingestion Layer",
    headline: "Unified Ingestion Across Every ERP, WMS, TMS, EDI & IoT Endpoint",
    description: "High-throughput distributed ingestion pipelines processing millions of daily events: GPS telematics, AIS ocean tracking, port terminal queue telemetry, EDI ANSI X12/EDIFACT streams, and warehouse RF scanner logs.",
    techComponents: [
      "Real-time Kafka / EventBridge streaming ingestion",
      "Native connectors for SAP, Oracle Cloud, Manhattan WMOS, FourKites",
      "Sub-second parser for ANSI X12 (204, 210, 214, 850, 856, 810)",
      "Continuous IoT sensor streams (Temperature, Shock, Geofence)"
    ],
    metrics: "< 50ms Ingestion Latency",
    icon: Database
  },
  {
    layerNumber: "02",
    name: "150+ Operational Metric Scoring Sentinel",
    badge: "Continuous Scoring Engine",
    headline: "Real-Time Scoring of Suppliers, Carriers & Distribution Centers",
    description: "Rather than treating data as passive logs, HiView continuously evaluates operational health against 150+ standardized KPIs. Every supplier, shipping lane, and warehouse receives a dynamic reliability score.",
    techComponents: [
      "Continuous Supplier On-Time In-Full (OTIF) scoring",
      "Carrier lane velocity & detention risk index",
      "Warehouse dock door turnaround & picker throughput metrics",
      "True landed cost & gross margin erosion tracking"
    ],
    metrics: "150+ Real-Time KPIs Evaluated",
    icon: Activity
  },
  {
    layerNumber: "03",
    name: "Predictive Neural Modeling & Anomaly Detection",
    badge: "AI Prediction Engine",
    headline: "Anticipate Disruption Cascades Proactively Before Impact",
    description: "Deep learning neural networks and multivariate time-series models detect nonlinear patterns that human planners miss: impending port terminal congestion, reefer temperature decay curves, and seasonal demand spikes.",
    techComponents: [
      "Transformer-based transit milestone ETA predictor",
      "SKU-level neural demand sensing & market signal integration",
      "Port dwell and demurrage probabilistic forecast models",
      "Supplier lead-time variability distribution modeling"
    ],
    metrics: "95%+ Forecast & ETA Precision",
    icon: Cpu
  },
  {
    layerNumber: "04",
    name: "Autonomous AI Agents & Self-Healing Execution",
    badge: "Agentic Automation Layer",
    headline: "Zero-Touch Exception Resolution Governed by Your Policies",
    description: "When an anomaly or risk threshold is crossed, autonomous AI agents execute corrective workflows: dynamically re-routing shipments, patching malformed EDI schemas in flight, or rebalancing multi-echelon safety stock.",
    techComponents: [
      "EDIFAI autonomous schema self-healing & patch generator",
      "Automated load matching and rate confirmation verification",
      "Dynamic safety stock buffer recalculator (MIST)",
      "Carrier escalation & emergency re-routing dispatch"
    ],
    metrics: "70% Reduction in Manual Workloads",
    icon: Bot
  },
  {
    layerNumber: "05",
    name: "Enterprise Governance & Auditability",
    badge: "Compliance & Safety Layer",
    headline: "Human-in-the-Loop Safeguards & Immutable Audit Trails",
    description: "Every automated decision, score recalculation, and system write-back is strictly governed by enterprise role-based access control, confidence threshold gates, and SOC 2 / GxP compliant immutable logs.",
    techComponents: [
      "Configurable confidence threshold gates for human sign-off",
      "Natural language policy rule builder",
      "SOC 2 Type II, ISO 27001, GxP / FDA 21 CFR Part 11 audit vault",
      "Enterprise SSO (SAML / Okta / Azure AD) with RBAC permissions"
    ],
    metrics: "100% Immutable Audit Trail",
    icon: ShieldCheck
  }
];

export default function PlatformPage() {
  const [selectedLayerIndex, setSelectedLayerIndex] = useState<number>(0);
  const activeLayer = LAYERS[selectedLayerIndex];

  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      {/* Hero Section */}
      <section className="relative pt-12 pb-16 text-center">
        <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[800px] rounded-full bg-sky-500/15 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-950/40 px-4 py-1.5 text-xs font-semibold text-sky-300 backdrop-blur-md mb-6">
            <Cpu className="h-3.5 w-3.5 text-sky-400" />
            <span>The Autonomous Control Tower 2.0</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-ink tracking-tight leading-[1.15]">
            The 5-Layer Architecture of an{" "}
            <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Intelligent Execution Network
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
            Explore how HiView AI converts fragmented supply chain signals into scored, predictive decisions and automated enterprise execution.
          </p>
        </div>
      </section>

      {/* 5-Layer Interactive Architecture Stack */}
      <AnimatedSection className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Architecture Stack"
          title="Inside The 5-Layer"
          highlightText="Autonomous Platform"
          subtitle="Click on any architectural layer below to explore its neural components, data ingestion models, and execution capabilities."
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Layer Selector Stack (Left) */}
          <div className="lg:col-span-5 space-y-3">
            {LAYERS.map((layer, idx) => {
              const isSelected = selectedLayerIndex === idx;
              const LayerIcon = layer.icon;
              return (
                <button
                  key={layer.layerNumber}
                  onClick={() => setSelectedLayerIndex(idx)}
                  className={`w-full flex items-start gap-4 rounded-2xl p-5 text-left transition-all duration-300 relative ${
                    isSelected
                      ? "bg-slate-900 border border-sky-500/50 shadow-xl shadow-sky-500/10"
                      : "bg-slate-950/50 border border-slate-300/5 hover:bg-slate-900/60 hover:border-slate-300/15"
                  }`}
                >
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors ${
                      isSelected
                        ? "bg-sky-500 text-slate-950 font-bold"
                        : "bg-slate-850 text-slate-400"
                    }`}
                  >
                    <LayerIcon className="h-5 w-5" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold tracking-wider text-sky-400 uppercase">
                        LAYER {layer.layerNumber}
                      </span>
                      <span className="text-[10px] font-mono text-slate-500">
                        {layer.metrics}
                      </span>
                    </div>
                    <div className={`mt-1 text-sm font-bold truncate ${isSelected ? "text-ink" : "text-slate-300"}`}>
                      {layer.name}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Layer Deep Dive Visualizer (Right) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLayer.layerNumber}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl border border-sky-500/30 bg-slate-900/80 p-8 backdrop-blur-2xl shadow-2xl relative overflow-hidden"
              >
                <div className="flex items-center justify-between pb-4 border-b border-slate-300/10">
                  <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-950/50 px-3 py-1 text-xs font-semibold text-sky-300">
                    <span>{activeLayer.badge}</span>
                  </div>
                  <span className="font-mono text-xs text-sky-400 font-bold">
                    {activeLayer.metrics}
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-bold text-ink leading-snug">
                  {activeLayer.headline}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {activeLayer.description}
                </p>

                <div className="mt-6 pt-6 border-t border-slate-300/10 space-y-3">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                    Core Technical Components & Protocols
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeLayer.techComponents.map((comp, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 rounded-xl border border-slate-300/5 bg-slate-950/60 p-3 text-xs text-slate-200"
                      >
                        <CheckCircle2 className="h-4 w-4 text-sky-400 shrink-0 mt-0.5" />
                        <span>{comp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-300/10 flex items-center justify-between">
                  <span className="text-xs text-slate-400">
                    Protected by Multi-Tier Security
                  </span>
                  <Link
                    href="/demo"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-400 hover:text-sky-300 transition"
                  >
                    <span>Test This Layer In Sandbox</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </AnimatedSection>

      {/* Natural Language Policy Engine Showcase */}
      <AnimatedSection className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-300/10 bg-slate-950/80 p-8 sm:p-12 backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-950/50 px-3 py-1 text-xs font-semibold text-amber-300">
                <Terminal className="h-3.5 w-3.5" />
                <span>Natural Language Policy Engine</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-ink">
                Create Complex Supply Chain Rules in Plain English
              </h2>
              <p className="text-sm leading-relaxed text-slate-300">
                Forget writing brittle SQL scripts or configuring convoluted ERP workflows. With HiView&apos;s Natural Language Policy Engine, supply chain managers define business policies using simple prompts.
              </p>
              <div className="space-y-2 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-400" />
                  <span>Automatically translated into executable Python & event triggers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-400" />
                  <span>Real-time simulation testing against historical shipment data</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-amber-500/30 bg-slate-900/90 p-6 font-mono text-xs shadow-2xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-300/10 text-slate-400">
                  <span className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400 animate-pulse" />
                    POLICY EDITOR
                  </span>
                  <span className="text-amber-400 font-bold">READY TO DEPLOY</span>
                </div>

                <div className="rounded-xl bg-slate-950 p-4 border border-amber-500/20 text-amber-300">
                  <span className="text-slate-500 font-bold block mb-1">PROMPT:</span>
                  &quot;If an ocean container dwell at Port of Long Beach exceeds 48 hours and contains tier-1 automotive components, notify the logistics broker, reserve priority team-driver drayage, and expedite Inland Rail delivery.&quot;
                </div>

                <div className="rounded-xl bg-slate-950 p-4 border border-slate-300/5 text-slate-300 space-y-1.5 text-[11px]">
                  <div className="text-sky-400 font-bold">✓ COMPILED INTO 3 AUTOMATED EVENT AGENTS:</div>
                  <div>• Event Trigger: AIS Port Dwell &gt; 48.0 hrs on BOM Class &apos;Tier-1&apos;</div>
                  <div>• Action 1: Dispatched API Webhook to Drayage Partner #CH-9912</div>
                  <div>• Action 2: Triggered Priority Rail Slot Reservation in ERP</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Integration Orbit */}
      <AnimatedSection className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Interoperability"
          title="Universal Compatibility With"
          highlightText="Your Existing Enterprise Stack"
          subtitle="Pre-built bi-directional connectors for leading ERP, WMS, TMS, and telematics platforms."
        />

        <div className="mt-12">
          <IntegrationOrbit />
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-sky-500/30 bg-gradient-to-r from-sky-950/50 via-slate-950/80 to-amber-950/50 p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-ink">
            Ready to Experience the Autonomous Platform?
          </h2>
          <p className="mt-3 text-sm text-slate-300 max-w-2xl mx-auto">
            Schedule a technical deep dive with our solutions architects.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/demo"
              className="hover-shine inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-3 text-xs font-bold text-white shadow-lg"
            >
              <span>Schedule Architecture Demo</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
