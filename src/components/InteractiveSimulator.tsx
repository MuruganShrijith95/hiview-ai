"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  AlertTriangle, 
  CheckCircle2, 
  Cpu, 
  ArrowRight, 
  RefreshCw, 
  ShieldCheck, 
  TrendingUp, 
  Clock, 
  FileText, 
  Sparkles,
  Zap
} from "lucide-react";

interface Scenario {
  id: string;
  category: string;
  title: string;
  badge: string;
  severity: "CRITICAL" | "HIGH" | "WARNING";
  anomaly: {
    rawSignal: string;
    rootCause: string;
    impactRisk: string;
    potentialLoss: string;
  };
  aiAction: {
    confidence: string;
    model: string;
    executionSteps: string[];
    outcome: string;
    costAvoided: string;
    timeSaved: string;
  };
}

const SCENARIOS: Scenario[] = [
  {
    id: "port-dwell",
    category: "Ocean & Port Visibility",
    title: "Port of Long Beach 72-Hour Berth Congestion",
    badge: "IQUA / Platform Sentinel",
    severity: "CRITICAL",
    anomaly: {
      rawSignal: "AIS Marine Beacon #9421 + Terminal Queue Wait Index: 8.4 days",
      rootCause: "Berth allocation delay at Pier G affecting Container HVIU-882194.",
      impactRisk: "3 manufacturing assembly lines face part starvation in 18 hours.",
      potentialLoss: "$145,000 detention & demurrage + $280,000 line stoppage"
    },
    aiAction: {
      confidence: "98.7%",
      model: "HiView Multi-Modal Transit Neural Predictor v4",
      executionSteps: [
        "Identified impending berth bottleneck 48 hrs before pilot vessel docking",
        "Queried pre-cleared bonded drayage carrier with immediate chassis availability",
        "Autonomous off-dock terminal gate pass generated via API connector",
        "Re-routed inland rail segment to dedicated expedited team-driver tractor"
      ],
      outcome: "Container cleared terminal 54 hours ahead of standard queue. Line stoppage fully averted.",
      costAvoided: "$425,000",
      timeSaved: "54 Hours"
    }
  },
  {
    id: "edi-healing",
    category: "B2B Transaction Intelligence",
    title: "Mismatched 856 ASN Schema & Invalid SCAC Carrier Code",
    badge: "EDIFAI Autonomous Self-Healing",
    severity: "HIGH",
    anomaly: {
      rawSignal: "Inbound ANSI X12 856 payload rejected by SAP S/4HANA staging table",
      rootCause: "Tier-1 supplier updated UOM segment from 'EA' to 'CS' without notifying master data catalog.",
      impactRisk: "Warehouse receiving dock gridlock; 120 pallets blocked from yard check-in.",
      potentialLoss: "$38,000 chargebacks & 14 hours manual IT cross-ticketing"
    },
    aiAction: {
      confidence: "99.4%",
      model: "EDIFAI Semantic Adaptive Transformer Engine",
      executionSteps: [
        "Detected schema syntax mismatch in LIN/SN1 sub-elements before downstream parse",
        "Cross-referenced historical purchase order #PO-99120 and product catalog ratios",
        "Autonomously synthesized payload correction layer applying 1:12 carton conversion",
        "Posted validated payload to ERP and automatically notified vendor EDI admin"
      ],
      outcome: "Payload healed and ingested in 180ms. Warehouse receiving proceeded with zero pause.",
      costAvoided: "$38,000",
      timeSaved: "14 Hours"
    }
  },
  {
    id: "temp-excursion",
    category: "Pharma & Cold Chain",
    title: "Temperature Excursion (+5.8°C Spike in Biologic Reefer)",
    badge: "IQUA Cold-Chain Guard",
    severity: "CRITICAL",
    anomaly: {
      rawSignal: "IoT Sensor #TM-8812 reporting 7.8°C (Threshold Max: 2.0°C - 4.0°C)",
      rootCause: "Auxiliary reefer generator compressor tripped during highway transit on I-75.",
      impactRisk: "450 vials of temperature-sensitive oncology biologics facing irreversible thermal degradation.",
      potentialLoss: "$620,000 cargo loss + GxP compliance breach"
    },
    aiAction: {
      confidence: "99.9%",
      model: "IQUA Thermal Inertia & Degradation Predictor",
      executionSteps: [
        "Calculated remaining thermal buffer: 64 minutes before critical protein breakdown",
        "Identified certified cold-storage depot at Exit 142 (11 miles from current GPS)",
        "Dispatched emergency dry-ice protocol and notified receiving hospital pharmacy",
        "Generated compliant GxP audit certificate with continuous sensor timestamp log"
      ],
      outcome: "Cargo transferred to cold storage within 28 minutes. 100% medication efficacy preserved.",
      costAvoided: "$620,000",
      timeSaved: "100% Spoilage Averted"
    }
  },
  {
    id: "inventory-shock",
    category: "Multi-Echelon Inventory",
    title: "Regional Surge Stockout vs. Central Overstock Imbalance",
    badge: "MIST Multi-Echelon Balancing",
    severity: "WARNING",
    anomaly: {
      rawSignal: "Southeast DC stockout velocity 4.2x vs Midwest DC carrying 68 days of excess buffer",
      rootCause: "Sudden regional retail promotional spike combined with supplier lead-time extension.",
      impactRisk: "Missed retail order fulfillment SLA and $85,000 customer cancellation penalties.",
      potentialLoss: "$110,000 lost revenue + 12% drop in quarterly vendor score"
    },
    aiAction: {
      confidence: "97.8%",
      model: "MIST Network Optimization & Dynamic Safety Stock Engine",
      executionSteps: [
        "Simulated 500+ inter-hub transfer permutations against diesel freight rates",
        "Calculated optimal transfer of 4,200 units from Midwest DC to Atlanta DC",
        "Triggered automated transfer order directly into Manhattan WMOS",
        "Dynamically tuned safety stock threshold from 14 days to 22 days for next quarter"
      ],
      outcome: "99.8% OTIF maintained across all Southeast retail partners without placing emergency OEM orders.",
      costAvoided: "$110,000",
      timeSaved: "3 Weeks"
    }
  }
];

export default function InteractiveSimulator() {
  const [activeScenarioId, setActiveScenarioId] = useState<string>("port-dwell");
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [stepIndex, setStepIndex] = useState<number>(3); // All complete by default

  const currentScenario = SCENARIOS.find((s) => s.id === activeScenarioId) || SCENARIOS[0];

  const handleSimulate = (id: string) => {
    setActiveScenarioId(id);
    setIsRunning(true);
    setStepIndex(0);

    const interval = setInterval(() => {
      setStepIndex((prev) => {
        if (prev >= 3) {
          clearInterval(interval);
          setIsRunning(false);
          return 3;
        }
        return prev + 1;
      });
    }, 450);
  };

  return (
    <div className="relative rounded-3xl border border-white/10 bg-slate-950/80 p-6 md:p-10 backdrop-blur-2xl shadow-2xl overflow-hidden">
      {/* Decorative background glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 -bottom-20 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />

      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-white/10">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/50 px-3 py-1 text-xs font-semibold text-emerald-300">
            <Cpu className="h-3.5 w-3.5 text-emerald-400 animate-spin" style={{ animationDuration: "6s" }} />
            <span>Interactive Disruption Simulator</span>
          </div>
          <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
            See How HiView AI <span className="bg-gradient-to-r from-emerald-400 to-amber-400 bg-clip-text text-transparent">Scores, Then Acts</span> In Real-Time
          </h3>
          <p className="mt-1 text-sm text-slate-400">
            Select a live enterprise disruption scenario to watch the autonomous AI engine identify, triage, and resolve anomalies.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {SCENARIOS.map((s) => {
            const isSelected = s.id === activeScenarioId;
            return (
              <button
                key={s.id}
                onClick={() => handleSimulate(s.id)}
                className={`rounded-xl px-3.5 py-2 text-xs font-semibold transition-all duration-200 flex items-center gap-2 ${
                  isSelected
                    ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/25 border border-emerald-400/50"
                    : "bg-slate-900/80 text-slate-300 hover:bg-slate-800 border border-white/5"
                }`}
              >
                <span className={`h-2 w-2 rounded-full ${isSelected ? "bg-white" : "bg-emerald-400"}`} />
                {s.category}
              </button>
            );
          })}
        </div>
      </div>

      {/* Simulation Playground */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Anomaly Ingestion & Threat Analysis */}
        <div className="lg:col-span-5 space-y-4">
          <div className="rounded-2xl border border-red-500/20 bg-red-950/20 p-5 backdrop-blur-md">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-rose-400">
                <AlertTriangle className="h-4 w-4 text-rose-400" />
                Live Ingestion Stream
              </span>
              <span className="rounded-full bg-rose-500/20 px-2.5 py-0.5 text-xs font-mono font-semibold text-rose-300">
                {currentScenario.severity}
              </span>
            </div>

            <h4 className="mt-3 text-lg font-bold text-white">
              {currentScenario.title}
            </h4>
            
            <div className="mt-4 space-y-2 text-xs">
              <div className="rounded-lg bg-black/40 p-3 font-mono text-slate-300 border border-white/5">
                <span className="text-rose-400 font-semibold">SIGNAL:</span> {currentScenario.anomaly.rawSignal}
              </div>
              <div className="rounded-lg bg-black/40 p-3 font-mono text-slate-300 border border-white/5">
                <span className="text-amber-400 font-semibold">ROOT CAUSE:</span> {currentScenario.anomaly.rootCause}
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-red-500/20 grid grid-cols-2 gap-3">
              <div>
                <div className="text-[11px] uppercase font-bold text-slate-400">Operational Risk</div>
                <div className="mt-0.5 text-xs font-medium text-slate-200">{currentScenario.anomaly.impactRisk}</div>
              </div>
              <div>
                <div className="text-[11px] uppercase font-bold text-rose-400">Potential Loss</div>
                <div className="mt-0.5 text-sm font-mono font-bold text-rose-400">{currentScenario.anomaly.potentialLoss}</div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/5 bg-slate-900/50 p-4 text-xs text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              Governed by Human-in-the-Loop Policies
            </span>
            <span className="font-mono text-emerald-400">SOC 2 TYPE II</span>
          </div>
        </div>

        {/* Right Column: Autonomous Action Engine */}
        <div className="lg:col-span-7">
          <div className="rounded-2xl border border-emerald-500/30 bg-slate-900/90 p-6 backdrop-blur-xl relative overflow-hidden shadow-xl">
            {/* Header info */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-emerald-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-300 font-mono">
                  {currentScenario.badge}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-slate-400 font-mono">
                  Confidence: <strong className="text-emerald-400">{currentScenario.aiAction.confidence}</strong>
                </span>
                <button
                  onClick={() => handleSimulate(activeScenarioId)}
                  disabled={isRunning}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 px-2.5 py-1 text-xs font-medium transition"
                >
                  <RefreshCw className={`h-3 w-3 ${isRunning ? "animate-spin" : ""}`} />
                  Re-Run
                </button>
              </div>
            </div>

            {/* Execution Steps */}
            <div className="mt-5 space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Autonomous Action Steps
              </div>

              {currentScenario.aiAction.executionSteps.map((step, idx) => {
                const isExecuted = stepIndex >= idx;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: isExecuted ? 1 : 0.4, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex items-start gap-3 rounded-xl p-3 text-xs transition-all ${
                      isExecuted
                        ? "bg-slate-800/80 border border-emerald-500/30 text-slate-200"
                        : "bg-slate-950/40 border border-white/5 text-slate-500"
                    }`}
                  >
                    <div className="mt-0.5">
                      {isExecuted ? (
                        <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                      ) : (
                        <div className="h-4 w-4 rounded-full border border-slate-600 flex items-center justify-center text-[9px] text-slate-500">
                          {idx + 1}
                        </div>
                      )}
                    </div>
                    <div className="flex-1 font-mono">{step}</div>
                  </motion.div>
                );
              })}
            </div>

            {/* Final Outcome Card */}
            <AnimatePresence>
              {stepIndex >= 3 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="mt-6 rounded-xl border border-emerald-500/40 bg-emerald-950/30 p-4 text-xs"
                >
                  <div className="flex items-center gap-2 text-emerald-400 font-bold uppercase tracking-wider">
                    <Sparkles className="h-4 w-4 text-emerald-400" />
                    Verified Execution Outcome
                  </div>
                  <p className="mt-1 text-slate-200 font-medium">
                    {currentScenario.aiAction.outcome}
                  </p>

                  <div className="mt-4 pt-3 border-t border-emerald-500/20 grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400">Hard Cost Avoided</span>
                      <div className="font-mono text-xl font-extrabold text-emerald-400">
                        {currentScenario.aiAction.costAvoided}
                      </div>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400">Time Saved / Disruption Prevented</span>
                      <div className="font-mono text-xl font-extrabold text-emerald-400">
                        {currentScenario.aiAction.timeSaved}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
