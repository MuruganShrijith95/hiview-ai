"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  Activity, 
  Zap, 
  ShieldCheck, 
  Globe2, 
  Ship, 
  Plane, 
  Truck, 
  Network, 
  CheckCircle2, 
  Cpu, 
  TrendingUp 
} from "lucide-react";

type ControlTowerMode = "maritime" | "air" | "ground" | "edifai";

interface TelemetryNode {
  id: string;
  title: string;
  subtitle: string;
  metric: string;
  status: "nominal" | "healed" | "optimized" | "active";
  icon: any;
  coordinates: { x: number; y: number }; // percentage on grid
  detail: string;
  badge: string;
}

const MODES: { id: ControlTowerMode; label: string; icon: any; accentColor: string }[] = [
  { id: "maritime", label: "Global Maritime", icon: Ship, accentColor: "#0284c7" },
  { id: "air", label: "Cold-Chain Air", icon: Plane, accentColor: "#3b82f6" },
  { id: "ground", label: "Intermodal Freight", icon: Truck, accentColor: "#0ea5e9" },
  { id: "edifai", label: "EDIFAI Data Neural", icon: Network, accentColor: "#1d4ed8" }
];

const MODE_TELEMETRY: Record<ControlTowerMode, {
  image: string;
  headline: string;
  subhead: string;
  nodes: TelemetryNode[];
  liveStats: { label: string; value: string }[];
}> = {
  maritime: {
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1600",
    headline: "Pacific & Atlantic Container Corridor Sentinel",
    subhead: "Real-time vessel tracking across 450+ global deepwater terminals with predictive demurrage avoidance.",
    nodes: [
      {
        id: "m-1",
        title: "Port of Long Beach",
        subtitle: "Vessel: EVER GOLDEN (Voyage 042W)",
        metric: "-54 hrs Dwell Averted",
        status: "optimized",
        icon: Ship,
        coordinates: { x: 25, y: 40 },
        detail: "Autonomous drayage appointment rescheduled to avoid terminal holiday gate queue.",
        badge: "AUTONOMOUS RE-ROUTE"
      },
      {
        id: "m-2",
        title: "Rotterdam Deepwater Hub",
        subtitle: "Container: MSKU-8492019",
        metric: "100% Landed Margin Maintained",
        status: "nominal",
        icon: ShieldCheck,
        coordinates: { x: 74, y: 35 },
        detail: "Customs clear-in-advance passed via automated digital phytosanitary vault.",
        badge: "CUSTOMS PRE-CLEARED"
      },
      {
        id: "m-3",
        title: "Malacca Strait Corridor",
        subtitle: "Neural Weather Forecast",
        metric: "Proactive Disruption Warning",
        status: "active",
        icon: Sparkles,
        coordinates: { x: 50, y: 70 },
        detail: "Typhoon buffer lane plotted +1.8 knots faster arrival.",
        badge: "AI SENTINEL ACTIVE"
      }
    ],
    liveStats: [
      { label: "Active TEU Tracked", value: "482,920" },
      { label: "Demurrage Saved (MTD)", value: "$1,840,000" },
      { label: "ETA Confidence", value: "99.4%" },
      { label: "Dwell Elimination Rate", value: "65.4%" }
    ]
  },
  air: {
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=1600",
    headline: "GxP Pharmaceutical Cold-Chain Bio-Sentinel",
    subhead: "Sub-minute IoT telematics monitoring for vaccines, biologics, and clinical trials with zero thermal breach.",
    nodes: [
      {
        id: "a-1",
        title: "Frankfurt (FRA) -> Boston (BOS)",
        subtitle: "Air Waybill: 020-94819201",
        metric: "2.8°C (Nominal ±0.2°)",
        status: "nominal",
        icon: Activity,
        coordinates: { x: 28, y: 35 },
        detail: "Thermal buffer model verifies 14 hours dry-ice reserve on tarmac transfer.",
        badge: "GxP AUDIT PASSED"
      },
      {
        id: "a-2",
        title: "Narita (NRT) Reefer Hub",
        subtitle: "Lot #8401 Oncology Batch",
        metric: "0.0% Spoilage Risk",
        status: "healed",
        icon: ShieldCheck,
        coordinates: { x: 78, y: 45 },
        detail: "Emergency dry-ice refresh protocol completed within 22 minutes.",
        badge: "SLA RECOVERY COMPLETE"
      },
      {
        id: "a-3",
        title: "FDA 21 CFR Part 11 Vault",
        subtitle: "Immutable Telematics Chain",
        metric: "100% Audit Verified",
        status: "active",
        icon: Sparkles,
        coordinates: { x: 48, y: 68 },
        detail: "Blockchain-anchored sensor logs signed by certified QMS officer.",
        badge: "GxP CERTIFIED"
      }
    ],
    liveStats: [
      { label: "Active Bio-Shipments", value: "14,820" },
      { label: "Thermal Excursions", value: "0 (100% SLA)" },
      { label: "Telemetry Latency", value: "<1.2s" },
      { label: "Regulatory Compliance", value: "FDA / EMA Ready" }
    ]
  },
  ground: {
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1600",
    headline: "FairMiles Intermodal & Carrier Margin Command",
    subhead: "Dynamic load matching, deadhead optimization, and instant rate confirmation parsing across 50,000+ trucks.",
    nodes: [
      {
        id: "g-1",
        title: "I-80 Midwest Corridor",
        subtitle: "Fleet: 84 Power Units",
        metric: "+$0.48 / mi Net Yield",
        status: "optimized",
        icon: TrendingUp,
        coordinates: { x: 26, y: 42 },
        detail: "Multi-stop load backhaul automatically coupled with zero deadhead miles.",
        badge: "MARGIN MAXIMIZER"
      },
      {
        id: "g-2",
        title: "Atlanta Crossdock Terminal",
        subtitle: "Trailer Drop & Hook",
        metric: "18 Min Turnaround",
        status: "healed",
        icon: Zap,
        coordinates: { x: 70, y: 55 },
        detail: "Automated geofence dispatch triggered forklift crew before yard check-in.",
        badge: "DOCK BOT ACTIVE"
      },
      {
        id: "g-3",
        title: "Carrier Rate Con Engine",
        subtitle: "OCR Contract Match",
        metric: "1-Click Sign-Off",
        status: "nominal",
        icon: CheckCircle2,
        coordinates: { x: 48, y: 28 },
        detail: "Accessorial surcharge audit verified against signed Master Services Agreement.",
        badge: "0 DETENTION FEES"
      }
    ],
    liveStats: [
      { label: "Active Power Units", value: "12,400" },
      { label: "Deadhead Miles Cut", value: "45.2%" },
      { label: "Fleet Margin Boost", value: "+14.8%" },
      { label: "Automated Dispatch Rate", value: "92.6%" }
    ]
  },
  edifai: {
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1600",
    headline: "EDIFAI Self-Healing Transaction Engine",
    subhead: "AI-native electronic data interchange that patches broken EDI 850/856/214 payloads in-flight without IT tickets.",
    nodes: [
      {
        id: "e-1",
        title: "ANSI X12 856 ASN Stream",
        subtitle: "Partner: Global Retail Giant",
        metric: "180ms In-Flight Fix",
        status: "healed",
        icon: Zap,
        coordinates: { x: 25, y: 38 },
        detail: "Missing HL parent segment predicted and dynamically patched before ERP rejection.",
        badge: "SELF-HEALED"
      },
      {
        id: "e-2",
        title: "EDI 850 Purchase Order Ingest",
        subtitle: "SAP S/4HANA Connector",
        metric: "99.98% First-Pass Yield",
        status: "nominal",
        icon: Network,
        coordinates: { x: 75, y: 45 },
        detail: "Unit of measure ambiguity auto-resolved using historical trading partner catalog.",
        badge: "0 DATA REJECTIONS"
      },
      {
        id: "e-3",
        title: "EDIFACT DESADV Gateway",
        subtitle: "Automotive JIT Supplier",
        metric: "0 Latency Bottleneck",
        status: "active",
        icon: Cpu,
        coordinates: { x: 50, y: 68 },
        detail: "High-throughput stream processing 140,000 transaction sets per minute.",
        badge: "NEURAL PARSER"
      }
    ],
    liveStats: [
      { label: "Daily EDI Transactions", value: "8,500,000+" },
      { label: "Workload Reduction", value: "70.4%" },
      { label: "Mean Time to Heal", value: "180ms" },
      { label: "ERP Integration", value: "100+ Connectors" }
    ]
  }
};

export default function HeroParallaxTower() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeMode, setActiveMode] = useState<ControlTowerMode>("maritime");
  const [selectedNode, setSelectedNode] = useState<TelemetryNode | null>(null);
  const [rotateX, setRotateX] = useState<number>(0);
  const [rotateY, setRotateY] = useState<number>(0);
  const [livePulse, setLivePulse] = useState<number>(142); // ms latency simulation

  const currentModeData = MODE_TELEMETRY[activeMode];

  // Subtle 3D gyroscope tilt on mouse hover
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotateX(-y * 0.018);
    setRotateY(x * 0.018);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setSelectedNode(null);
  };

  // Pulse latency simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setLivePulse(Math.floor(135 + Math.random() * 18));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-5xl mx-auto select-none">
      {/* 1. Mode Switcher Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 px-2">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400"></span>
          </span>
          <span className="font-mono text-xs font-black uppercase tracking-wider text-cyan-300">
            AUTONOMOUS CONTROL TOWER 2.0 • LIVE SIMULATION
          </span>
        </div>

        {/* Mode Selector Tabs */}
        <div className="flex items-center gap-1.5 rounded-2xl border border-slate-300/10 bg-slate-950/80 p-1.5 backdrop-blur-xl shadow-lg">
          {MODES.map((mode) => {
            const isSelected = activeMode === mode.id;
            const Icon = mode.icon;
            return (
              <button
                key={mode.id}
                onClick={() => {
                  setActiveMode(mode.id);
                  setSelectedNode(null);
                }}
                className={`flex items-center gap-2 rounded-xl px-3 py-1.5 text-xs font-mono font-bold transition-all duration-200 ${
                  isSelected
                    ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30 font-black"
                    : "text-slate-400 hover:text-ink hover:bg-slate-900/60"
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">{mode.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Main 3D Parallax Command Center Card */}
      <motion.div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          perspective: 1200,
          transformStyle: "preserve-3d"
        }}
        className="relative group"
      >
        {/* Ambient Luminous Multi-Color Backlight */}
        <div className="pointer-events-none absolute -inset-3 rounded-3xl bg-gradient-to-r from-cyan-500/20 via-blue-600/20 to-purple-600/20 opacity-50 blur-3xl transition-opacity duration-500 group-hover:opacity-80" />

        {/* 3D Tilted Viewport Canvas */}
        <motion.div
          animate={{
            rotateX,
            rotateY
          }}
          transition={{ type: "spring", damping: 25, stiffness: 220 }}
          className="relative overflow-hidden rounded-3xl border border-slate-300/15 bg-slate-950 shadow-[0_1px_2px_rgba(11,27,58,0.05),0_14px_36px_rgba(11,27,58,0.09)] aspect-[16/10] sm:aspect-[16/9] md:aspect-[21/10] flex flex-col justify-between p-6 sm:p-8 backdrop-blur-2xl"
        >
          {/* Background High-Res Photographic Asset with Smooth Mode Fade */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeMode}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 z-0"
            >
              <img
                src={currentModeData.image}
                alt={currentModeData.headline}
                className="h-full w-full object-cover object-center filter brightness-[0.4] contrast-125 saturate-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-slate-950/80" />
            </motion.div>
          </AnimatePresence>

          {/* Cyber Scanning Radar Grid & Sweep Line */}
          <div className="pointer-events-none absolute inset-0 z-10 grid-pattern opacity-40" />
          <div className="pointer-events-none absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50 animate-pulse" />

          {/* Top HUD Telemetry Bar */}
          <div className="relative z-20 flex flex-wrap items-start justify-between gap-4">
            <div className="space-y-1 max-w-xl text-left">
              <div className="inline-flex items-center gap-2 rounded-md border border-cyan-500/40 bg-slate-950/85 px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-300 shadow-md backdrop-blur-md">
                <Cpu className="h-3 w-3 text-cyan-400" />
                <span>SENTINEL AI ENGINE • {livePulse}ms LATENCY</span>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-black text-ink tracking-tight drop-shadow-md">
                {currentModeData.headline}
              </h3>
              <p className="text-xs text-slate-300 font-medium hidden sm:block leading-relaxed">
                {currentModeData.subhead}
              </p>
            </div>

            {/* Live System Status Widget */}
            <div className="hidden lg:flex items-center gap-3 rounded-2xl border border-slate-300/15 bg-slate-950/85 p-3 backdrop-blur-xl shadow-xl font-mono text-xs text-left">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                <Globe2 className="h-4 w-4 animate-pulse" />
              </div>
              <div>
                <div className="text-[10px] uppercase font-bold text-slate-400">Autonomous Sentinel</div>
                <div className="font-extrabold text-cyan-300">150+ METRICS SCORED</div>
              </div>
            </div>
          </div>

          {/* Interactive Floating Telemetry Hotspots */}
          <div className="relative z-20 my-auto w-full h-full min-h-[120px]">
            {currentModeData.nodes.map((node) => {
              const isSelected = selectedNode?.id === node.id;
              return (
                <div
                  key={node.id}
                  style={{
                    left: `${node.coordinates.x}%`,
                    top: `${node.coordinates.y}%`
                  }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-30"
                >
                  {/* Ping Animation Rings */}
                  <button
                    onClick={() => setSelectedNode(isSelected ? null : node)}
                    className="relative flex items-center justify-center group/node"
                  >
                    <span className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-cyan-400/40 opacity-75" />
                    <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-slate-950 border-2 border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.8)] transition-transform duration-200 group-hover/node:scale-125">
                      <node.icon className="h-3.5 w-3.5" />
                    </span>
                  </button>

                  {/* Floating Telemetry Box */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`mt-2 min-w-[190px] sm:min-w-[220px] rounded-2xl border bg-slate-950/90 p-3 shadow-2xl backdrop-blur-2xl text-left transition-all duration-200 ${
                      isSelected
                        ? "border-cyan-400 shadow-[0_0_20px_rgba(0,240,255,0.4)] scale-105"
                        : "border-slate-300/15 hover:border-cyan-500/40"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 pb-1 border-b border-slate-300/10 font-mono text-[9px] font-bold">
                      <span className="text-slate-400 uppercase tracking-wider truncate">{node.title}</span>
                      <span className="rounded bg-cyan-950 px-1.5 py-0.5 text-cyan-300 border border-cyan-500/30 shrink-0">
                        {node.badge}
                      </span>
                    </div>

                    <div className="mt-1.5 font-mono text-xs font-black text-ink">
                      {node.metric}
                    </div>

                    <div className="text-[10px] text-slate-300 mt-0.5 font-medium line-clamp-2">
                      {node.detail}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* Bottom Live Metrics Cockpit Strip */}
          <div className="relative z-20 grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-slate-300/10 bg-slate-950/80 -mx-6 -mb-6 sm:-mx-8 sm:-mb-8 p-4 sm:p-5 backdrop-blur-xl text-left">
            {currentModeData.liveStats.map((stat, i) => (
              <div key={i} className="space-y-0.5">
                <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                  {stat.label}
                </div>
                <div className="font-mono text-xs sm:text-sm font-black text-cyan-300">
                  {stat.value}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
