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
    <div className="space-y-12 sm:space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative pt-10 pb-12 text-center">
        <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[800px] rounded-full bg-gradient-to-tr from-[#1D9AE1]/10 via-[#7CC8F1]/10 to-transparent blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#cfe6ff] bg-[#e8f3ff] px-4 py-1.5 text-xs font-bold text-[#1D9AE1] shadow-sm mb-6">
            <Cpu className="h-3.5 w-3.5 text-[#1D9AE1]" />
            <span>The Autonomous Control Tower 2.0</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0e1b34] tracking-tight leading-[1.15]">
            The 5-Layer Architecture of an{" "}
            <span className="bg-gradient-to-r from-[#1D9AE1] via-[#59b4ff] to-[#1D9AE1] bg-clip-text text-transparent">
              Intelligent Execution Network
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#547099] leading-relaxed max-w-3xl mx-auto">
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
          subtitle="Hover over or click on any architectural layer below to explore its neural components, data ingestion models, and execution capabilities."
        />

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Layer Selector Stack (Left) */}
          <div className="lg:col-span-5 space-y-3">
            {LAYERS.map((layer, idx) => {
              const isSelected = selectedLayerIndex === idx;
              const LayerIcon = layer.icon;
              return (
                <button
                  key={layer.layerNumber}
                  onClick={() => setSelectedLayerIndex(idx)}
                  onMouseEnter={() => setSelectedLayerIndex(idx)}
                  className={`w-full flex items-start gap-4 rounded-2xl p-4 sm:p-5 text-left transition-all duration-200 relative cursor-pointer ${
                    isSelected
                      ? "bg-[#e0efff] border-2 border-[#1D9AE1] shadow-md shadow-sky-500/15 scale-[1.02]"
                      : "bg-[#edf5fd] border border-[#cfe6ff] hover:bg-[#e4f0fc] hover:border-[#b8dcff]"
                  }`}
                >
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all duration-200 ${
                      isSelected
                        ? "bg-[#1D9AE1] text-white shadow-sm font-bold"
                        : "bg-[#dcedfc] text-[#1D9AE1] group-hover:bg-[#1D9AE1] group-hover:text-white"
                    }`}
                  >
                    <LayerIcon className="h-5 w-5" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold tracking-wider text-[#1D9AE1] uppercase">
                        LAYER {layer.layerNumber}
                      </span>
                      <span className="text-[10px] font-mono font-bold text-[#547099]">
                        {layer.metrics}
                      </span>
                    </div>
                    <div className={`mt-1 text-sm font-extrabold truncate ${isSelected ? "text-[#0e1b34]" : "text-[#1e3256]"}`}>
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
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="rounded-3xl border-2 border-[#cfe6ff] bg-gradient-to-b from-[#f4f9ff] via-[#f8fbff] to-white p-6 sm:p-8 shadow-[0_12px_36px_-18px_rgba(29,154,225,0.18)] relative overflow-hidden"
              >
                <div className="flex items-center justify-between pb-4 border-b border-[#cfe6ff]">
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#cfe6ff] bg-[#e2f0fd] px-3.5 py-1 text-xs font-bold text-[#1D9AE1]">
                    <span>{activeLayer.badge}</span>
                  </div>
                  <span className="font-mono text-xs text-[#1D9AE1] font-extrabold">
                    {activeLayer.metrics}
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-extrabold text-[#0e1b34] leading-snug">
                  {activeLayer.headline}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[#547099]">
                  {activeLayer.description}
                </p>

                {/* 4 Technical Component Boxes with Blue Theme */}
                <div className="mt-6 pt-5 border-t border-[#cfe6ff] space-y-3">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#547099]">
                    Core Technical Components & Protocols
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeLayer.techComponents.map((comp, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 rounded-2xl border border-[#cfe6ff] bg-[#eef6ff] p-4 text-xs font-bold text-[#0e1b34] shadow-sm hover:bg-[#e4f0fc] hover:border-[#b8dcff] transition-colors"
                      >
                        <CheckCircle2 className="h-4 w-4 text-[#1fb877] shrink-0 mt-0.5" />
                        <span className="leading-snug">{comp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-[#cfe6ff] flex items-center justify-between text-xs text-[#547099]">
                  <span className="font-medium">
                    Protected by Multi-Tier Security
                  </span>
                  <Link
                    href="/demo"
                    className="inline-flex items-center gap-1.5 font-bold text-[#1D9AE1] hover:text-[#0e1b34] transition"
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
        <div className="rounded-3xl border border-[#cfe6ff] bg-gradient-to-b from-[#f4f9ff] via-[#f8fbff] to-white p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#fcdba8] bg-[#fff8ec] px-3.5 py-1 text-xs font-bold text-[#8c5000]">
                <Terminal className="h-3.5 w-3.5" />
                <span>Natural Language Policy Engine</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0e1b34]">
                Create Complex Supply Chain Rules in Plain English
              </h2>
              <p className="text-sm leading-relaxed text-[#547099]">
                Forget writing brittle SQL scripts or configuring convoluted ERP workflows. With HiView&apos;s Natural Language Policy Engine, supply chain managers define business policies using simple prompts.
              </p>
              <div className="space-y-2 pt-2 text-xs font-medium text-[#0e1b34]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#1fb877]" />
                  <span>Automatically translated into executable Python & event triggers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#1fb877]" />
                  <span>Real-time simulation testing against historical shipment data</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-[#cfe6ff] bg-[#edf5fd] p-6 font-mono text-xs shadow-sm space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#cfe6ff] text-[#547099]">
                  <span className="flex items-center gap-2 font-bold text-[#0e1b34]">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#f0a63a] animate-pulse" />
                    POLICY EDITOR
                  </span>
                  <span className="text-[#1D9AE1] font-extrabold">READY TO DEPLOY</span>
                </div>

                <div className="rounded-xl bg-white p-4 border border-[#cfe6ff] text-[#0e1b34] font-medium leading-relaxed shadow-xs">
                  <span className="text-[#1D9AE1] font-bold block mb-1">PROMPT:</span>
                  &quot;If an ocean container dwell at Port of Long Beach exceeds 48 hours and contains tier-1 automotive components, notify the logistics broker, reserve priority team-driver drayage, and expedite Inland Rail delivery.&quot;
                </div>

                <div className="rounded-xl bg-[#e0efff] p-4 border border-[#cfe6ff] text-[#0e1b34] space-y-1.5 text-[11px] font-medium">
                  <div className="text-[#1D9AE1] font-bold">✓ COMPILED INTO 3 AUTOMATED EVENT AGENTS:</div>
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

        <div className="mt-8">
          <IntegrationOrbit />
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-[#cfe6ff] bg-gradient-to-b from-[#eaf4ff] via-[#ffffff] to-[#eef6ff] p-8 sm:p-14 text-center shadow-[0_24px_48px_-18px_rgba(23,72,143,0.18)]">
          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#cfe6ff] bg-[#e8f3ff] px-4 py-1.5 text-xs font-semibold text-[#1D9AE1] shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-[#1D9AE1]" />
              <span>Experience The Future of SCM</span>
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0e1b34]">
              Ready to Experience the Autonomous Platform?
            </h2>
            <p className="text-sm sm:text-base text-[#547099] max-w-2xl mx-auto leading-relaxed">
              Schedule a technical deep dive with our solutions architects to explore sample payloads and autonomous workflows.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/demo"
                className="hover-shine inline-flex items-center gap-2 rounded-xl bg-gradient-to-b from-[#7CC8F1] to-[#1D9AE1] px-7 py-3 text-xs font-bold text-white shadow-[0_10px_24px_-8px_rgba(29,154,225,0.55)] hover:shadow-[0_18px_32px_-10px_rgba(29,154,225,0.7)] transition"
              >
                <span>Schedule Architecture Demo</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
