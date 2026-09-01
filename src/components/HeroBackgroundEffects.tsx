"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Zap, 
  ShieldCheck, 
  TrendingUp, 
  CheckCircle2, 
  Radio,
  Building2,
  Users,
  Award,
  FileText,
  Cpu,
  Clock,
  Sparkles,
  Boxes,
  BarChart3,
  Layers,
  FileCheck,
  Truck,
  Ship,
  ThermometerSnowflake,
  Warehouse,
  Crosshair,
  Activity,
  MapPin,
  HelpCircle
} from "lucide-react";

export type HeroVariant = 
  | "home"
  | "platform"
  | "products"
  | "edifai"
  | "iqua"
  | "fairmiles"
  | "mist"
  | "po-tracker"
  | "demand-forecasting"
  | "wms"
  | "solutions"
  | "about"
  | "contact"
  | "demo"
  | "careers"
  | "blog";

export interface TelemetryCardConfig {
  iconName: string;
  title: string;
  badge: string;
  badgeType?: "live" | "neutral" | "success" | "accent";
  subtitle: string;
  metric: string;
  metricPrefix?: string;
  metricSub?: string;
  footerLeft: string;
  footerRight: string;
  sparkline?: boolean;
}

export interface HeroBackgroundEffectsProps {
  variant?: HeroVariant;
  customCards?: {
    topLeft?: TelemetryCardConfig;
    bottomLeft?: TelemetryCardConfig;
    topRight?: TelemetryCardConfig;
    bottomRight?: TelemetryCardConfig;
  };
}

const VARIANT_CONFIGS: Record<HeroVariant, {
  topLeft: TelemetryCardConfig;
  bottomLeft: TelemetryCardConfig;
  topRight: TelemetryCardConfig;
  bottomRight: TelemetryCardConfig;
}> = {
  home: {
    topLeft: {
      iconName: "Zap",
      title: "EDIFAI Sentinel",
      badge: "LIVE",
      badgeType: "live",
      subtitle: "X12 856 ASN Stream",
      metric: "180ms Payload Fix",
      metricSub: "Zero Failures",
      footerLeft: "Auto-Patched",
      footerRight: "99.4% Uptime",
      sparkline: true
    },
    bottomLeft: {
      iconName: "ShieldCheck",
      title: "Margin Guard 2.0",
      badge: "TAG 2026",
      badgeType: "accent",
      subtitle: "Averted Demurrage",
      metricPrefix: "$",
      metric: "620,000+",
      footerLeft: "0 Stoppages",
      footerRight: "Port of LB Queue"
    },
    topRight: {
      iconName: "Radio",
      title: "Fleet Telematics",
      badge: "AIS LIVE",
      badgeType: "accent",
      subtitle: "Active Ocean & Drayage",
      metric: "4,200 TEU Live",
      metricSub: "<150ms Sync",
      footerLeft: "● Route Optimized",
      footerRight: "ETA: On Schedule"
    },
    bottomRight: {
      iconName: "TrendingUp",
      title: "Predictive Scoring",
      badge: "150+ Metrics",
      badgeType: "success",
      subtitle: "Target OTIF Reliability",
      metric: "99.8%",
      metricSub: "+4.2% Lift",
      footerLeft: "Autonomous Playbooks",
      footerRight: "Active"
    }
  },
  contact: {
    topLeft: {
      iconName: "Clock",
      title: "Global Response Desk",
      badge: "24/7 LIVE",
      badgeType: "live",
      subtitle: "Enterprise SLA Routing",
      metric: "< 15 Min Response",
      metricSub: "Zero Queue",
      footerLeft: "● On Duty Engineers",
      footerRight: "Tier-1 Priority"
    },
    bottomLeft: {
      iconName: "Building2",
      title: "Executive HQ",
      badge: "ALPHARETTA",
      badgeType: "accent",
      subtitle: "US Corporate Center",
      metric: "Georgia Tech Hub",
      metricSub: "TAG Top 40",
      footerLeft: "● North America",
      footerRight: "EST Timezone"
    },
    topRight: {
      iconName: "MapPin",
      title: "Global Footprint",
      badge: "4 HUBS LIVE",
      badgeType: "accent",
      subtitle: "Dubai • Bhubaneswar • CBE",
      metric: "100% Multi-Region",
      metricSub: "24/7 Active",
      footerLeft: "● Follow-the-Sun",
      footerRight: "Global Support"
    },
    bottomRight: {
      iconName: "Users",
      title: "Dedicated Architects",
      badge: "DIRECT",
      badgeType: "success",
      subtitle: "Custom Solutions Team",
      metric: "1-on-1 Consultation",
      metricSub: "Verified",
      footerLeft: "SOC 2 Type II",
      footerRight: "Direct Access"
    }
  },
  about: {
    topLeft: {
      iconName: "Award",
      title: "TAG 2026 Winner",
      badge: "TOP 40",
      badgeType: "accent",
      subtitle: "Technology Association of GA",
      metric: "Top 40 Innovator",
      metricSub: "Ranked",
      footerLeft: "● Most Innovative",
      footerRight: "State of Georgia"
    },
    bottomLeft: {
      iconName: "Cpu",
      title: "Autonomous Engine",
      badge: "PATENTED",
      badgeType: "success",
      subtitle: "Score-Then-Act Workflow",
      metric: "< 200ms Decision",
      metricSub: "Zero Lag",
      footerLeft: "● Human-in-the-Loop",
      footerRight: "Safe AI Governance"
    },
    topRight: {
      iconName: "ShieldCheck",
      title: "Enterprise Compliance",
      badge: "CERTIFIED",
      badgeType: "accent",
      subtitle: "SOC 2 Type II • ISO 27001",
      metric: "99.99% Uptime",
      metricSub: "Audit Verified",
      footerLeft: "● GxP / FDA 21 CFR",
      footerRight: "Enterprise Tier"
    },
    bottomRight: {
      iconName: "Boxes",
      title: "Global R&D Labs",
      badge: "ACTIVE",
      badgeType: "live",
      subtitle: "Alpharetta • Dubai • India",
      metric: "4 Engineering Hubs",
      metricSub: "Specialized",
      footerLeft: "● AI & Math Ph.Ds",
      footerRight: "Supply Chain First"
    }
  },
  demo: {
    topLeft: {
      iconName: "Sparkles",
      title: "Interactive Sandbox",
      badge: "READY",
      badgeType: "live",
      subtitle: "Live Enterprise Simulation",
      metric: "30-Min Deep Dive",
      metricSub: "Instant Access",
      footerLeft: "● Tailored Data",
      footerRight: "Zero Setup Cost"
    },
    bottomLeft: {
      iconName: "TrendingUp",
      title: "Projected ROI Model",
      badge: "VALIDATED",
      badgeType: "accent",
      subtitle: "Demurrage & EDI Savings",
      metricPrefix: "$",
      metric: "400K+ Annual ROI",
      metricSub: "Payback < 90d",
      footerLeft: "● Hard Dollar Savings",
      footerRight: "Custom Calculator"
    },
    topRight: {
      iconName: "Layers",
      title: "Pre-Built Connectors",
      badge: "100+ PLUGINS",
      badgeType: "accent",
      subtitle: "SAP • Oracle • Manhattan",
      metric: "In-Flight Data Sync",
      metricSub: "< 150ms",
      footerLeft: "● Native REST & EDI",
      footerRight: "Zero Disruption"
    },
    bottomRight: {
      iconName: "ShieldCheck",
      title: "Security & Governance",
      badge: "SOC 2 TYPE II",
      badgeType: "success",
      subtitle: "Role-Based Access Guard",
      metric: "256-Bit Encrypted",
      metricSub: "Bank-Grade",
      footerLeft: "● Audit Trail Active",
      footerRight: "Compliant"
    }
  },
  careers: {
    topLeft: {
      iconName: "Users",
      title: "Engineering Roles",
      badge: "HIRING",
      badgeType: "live",
      subtitle: "AI, Frontend & Platform",
      metric: "6 Open Positions",
      metricSub: "Global",
      footerLeft: "● Remote & Hybrid",
      footerRight: "Fast-Track Review"
    },
    bottomLeft: {
      iconName: "Award",
      title: "TAG Top 40 Innovator",
      badge: "GROWTH",
      badgeType: "accent",
      subtitle: "High-Growth AI Startup",
      metric: "Top 1% Talent Hub",
      metricSub: "Equity + Perks",
      footerLeft: "● High Autonomy",
      footerRight: "Merit-Driven"
    },
    topRight: {
      iconName: "Cpu",
      title: "Modern Tech Stack",
      badge: "CUTTING-EDGE",
      badgeType: "accent",
      subtitle: "Next.js • PyTorch • Rust",
      metric: "Distributed Neural",
      metricSub: "Low Latency",
      footerLeft: "● Real-Time Systems",
      footerRight: "Zero Legacy Tech"
    },
    bottomRight: {
      iconName: "Building2",
      title: "Global Collaboration",
      badge: "4 HUBS",
      badgeType: "success",
      subtitle: "Alpharetta • Dubai • India",
      metric: "Global Impact Team",
      metricSub: "Inclusive",
      footerLeft: "● Hackathons & Labs",
      footerRight: "Continuous Learning"
    }
  },
  blog: {
    topLeft: {
      iconName: "FileText",
      title: "Whitepaper Spotlight",
      badge: "RESEARCH",
      badgeType: "live",
      subtitle: "Autonomous Control Towers",
      metric: "6 Min Deep Dive",
      metricSub: "By CEO",
      footerLeft: "● Beyond Dashboards",
      footerRight: "August 2026"
    },
    bottomLeft: {
      iconName: "Zap",
      title: "Self-Healing EDI",
      badge: "TECHNICAL",
      badgeType: "accent",
      subtitle: "Neural Schema Translation",
      metric: "70% Less Ticketing",
      metricSub: "180ms Fix",
      footerLeft: "● X12 & EDIFACT",
      footerRight: "Whitepaper"
    },
    topRight: {
      iconName: "ThermometerSnowflake",
      title: "Cold Chain Telematics",
      badge: "PHARMA GxP",
      badgeType: "accent",
      subtitle: "Biologics Spoilage Model",
      metric: "Zero Cargo Spoilage",
      metricSub: "Predictive",
      footerLeft: "● Thermal Buffer AI",
      footerRight: "Case Study"
    },
    bottomRight: {
      iconName: "BarChart3",
      title: "Multi-Echelon Study",
      badge: "INVENTORY",
      badgeType: "success",
      subtitle: "Working Capital Balancing",
      metric: "OTIF 99.8% Goal",
      metricSub: "+4.2% Lift",
      footerLeft: "● Safety Stock AI",
      footerRight: "Peer Reviewed"
    }
  },
  platform: {
    topLeft: {
      iconName: "Layers",
      title: "5-Layer Architecture",
      badge: "L1 - L5 STACK",
      badgeType: "live",
      subtitle: "From Signal to Autonomous Act",
      metric: "Closed-Loop AI",
      metricSub: "< 200ms Loop",
      footerLeft: "● Full Stack Sync",
      footerRight: "Continuous"
    },
    bottomLeft: {
      iconName: "Cpu",
      title: "Policy Engine",
      badge: "NL RULES",
      badgeType: "accent",
      subtitle: "Human-in-the-Loop Guard",
      metric: "100% Policy Bound",
      metricSub: "Zero Drifts",
      footerLeft: "● SOC 2 Type II",
      footerRight: "Audited Actions"
    },
    topRight: {
      iconName: "Activity",
      title: "Neural Scoring Engine",
      badge: "150+ SIGNALS",
      badgeType: "accent",
      subtitle: "Multi-Modal Disruption Risk",
      metric: "98.7% Confidence",
      metricSub: "Real-Time",
      footerLeft: "● AIS, Weather & ERP",
      footerRight: "Sub-Second"
    },
    bottomRight: {
      iconName: "Zap",
      title: "Automated Triggers",
      badge: "SELF-HEALING",
      badgeType: "success",
      subtitle: "Pre-Configured Playbooks",
      metric: "180ms Execution",
      metricSub: "Zero Downtime",
      footerLeft: "● Bi-Directional API",
      footerRight: "Auto-Dispatched"
    }
  },
  products: {
    topLeft: {
      iconName: "Boxes",
      title: "Unified AI Suite",
      badge: "7 MODULES",
      badgeType: "live",
      subtitle: "End-to-End Supply Chain",
      metric: "Modular Architecture",
      metricSub: "Unified UI",
      footerLeft: "● Zero Data Silos",
      footerRight: "Autonomous"
    },
    bottomLeft: {
      iconName: "Zap",
      title: "EDIFAI Self-Healing",
      badge: "B2B AI",
      badgeType: "accent",
      subtitle: "Schema Mismatch Repair",
      metric: "180ms Payload Fix",
      metricSub: "Zero Failures",
      footerLeft: "● X12 850/856/810",
      footerRight: "Auto-Ingest"
    },
    topRight: {
      iconName: "Radio",
      title: "IQUA & FairMiles",
      badge: "VISIBILITY",
      badgeType: "accent",
      subtitle: "Cold Chain & Ocean Fleet",
      metric: "4,200 TEU Live",
      metricSub: "AIS Stream",
      footerLeft: "● Spoilage Averted",
      footerRight: "Demurrage Guard"
    },
    bottomRight: {
      iconName: "Warehouse",
      title: "MIST & AI WMS",
      badge: "OPTIMIZED",
      badgeType: "success",
      subtitle: "Inventory & DC Orchestration",
      metric: "99.8% Target OTIF",
      metricSub: "Capital Freed",
      footerLeft: "● Dynamic Waves",
      footerRight: "Multi-Echelon"
    }
  },
  edifai: {
    topLeft: {
      iconName: "Zap",
      title: "EDIFAI Sentinel",
      badge: "LIVE",
      badgeType: "live",
      subtitle: "X12 856 / 850 / 810 Stream",
      metric: "180ms Payload Fix",
      metricSub: "Zero Failures",
      footerLeft: "Auto-Patched",
      footerRight: "99.4% Accuracy",
      sparkline: true
    },
    bottomLeft: {
      iconName: "Cpu",
      title: "Neural Schema Engine",
      badge: "SELF-HEALING",
      badgeType: "accent",
      subtitle: "Adaptive Segment Translation",
      metric: "70% Less Ticketing",
      metricSub: "Zero Queue",
      footerLeft: "● In-Flight Correction",
      footerRight: "SAP Staging Ready"
    },
    topRight: {
      iconName: "FileCheck",
      title: "Item Master Mapping",
      badge: "AUTO-SYNC",
      badgeType: "accent",
      subtitle: "UOM & Carton Multipliers",
      metric: "99.9% Match Rate",
      metricSub: "Instant Cross-Ref",
      footerLeft: "● Auto-Conversion",
      footerRight: "ERP Validated"
    },
    bottomRight: {
      iconName: "ShieldCheck",
      title: "ASN Chargeback Shield",
      badge: "PROTECTED",
      badgeType: "success",
      subtitle: "Late & Mismatched Penalty Guard",
      metricPrefix: "$",
      metric: "140,000+ Saved",
      metricSub: "Zero Penalties",
      footerLeft: "● Receiving Dock Unlocked",
      footerRight: "Auto-Cleared"
    }
  },
  iqua: {
    topLeft: {
      iconName: "ThermometerSnowflake",
      title: "IQUA Cold-Chain Guard",
      badge: "PHARMA GxP",
      badgeType: "live",
      subtitle: "Biologics Reefer Telematics",
      metric: "2.0°C - 4.0°C Buffer",
      metricSub: "Active Tracking",
      footerLeft: "● Zero Spoilage",
      footerRight: "Continuous"
    },
    bottomLeft: {
      iconName: "Activity",
      title: "Thermal Inertia Model",
      badge: "PREDICTIVE",
      badgeType: "accent",
      subtitle: "Degradation Rate Forecaster",
      metric: "64 Min Buffer Alert",
      metricSub: "Re-Routed",
      footerLeft: "● Emergency Dry-Ice",
      footerRight: "100% Potency"
    },
    topRight: {
      iconName: "Radio",
      title: "IoT Sensor Fleet",
      badge: "CELLULAR + GPS",
      badgeType: "accent",
      subtitle: "Real-Time Reefer Beacon",
      metric: "10,000+ Trackers",
      metricSub: "< 60s Sync",
      footerLeft: "● Global Roaming",
      footerRight: "Battery 30+ Days"
    },
    bottomRight: {
      iconName: "ShieldCheck",
      title: "FDA 21 CFR Part 11",
      badge: "GxP VAULT",
      badgeType: "success",
      subtitle: "Immutable Cryptographic Log",
      metric: "100% Audit Ready",
      metricSub: "Verified",
      footerLeft: "● Digital Signature",
      footerRight: "Compliant"
    }
  },
  fairmiles: {
    topLeft: {
      iconName: "Ship",
      title: "Ocean AIS Sentinel",
      badge: "VESSEL LIVE",
      badgeType: "live",
      subtitle: "Satellite AIS Dwell Predictor",
      metric: "120 Global Ports",
      metricSub: "Queue Scored",
      footerLeft: "● Berth Congestion AI",
      footerRight: "Real-Time"
    },
    bottomLeft: {
      iconName: "ShieldCheck",
      title: "Demurrage Shield",
      badge: "SAVINGS",
      badgeType: "accent",
      subtitle: "Off-Dock Drayage Bypass",
      metricPrefix: "$",
      metric: "620,000+ Saved",
      metricSub: "0 Line Stops",
      footerLeft: "● Auto-Gate Pass",
      footerRight: "Bonded Carrier"
    },
    topRight: {
      iconName: "Truck",
      title: "Multimodal Telematics",
      badge: "INTERMODAL",
      badgeType: "accent",
      subtitle: "Ocean • Rail • Dedicated Drayage",
      metric: "4,200 TEU Live",
      metricSub: "< 150ms Sync",
      footerLeft: "● Real-Time ETA",
      footerRight: "Exception Radar"
    },
    bottomRight: {
      iconName: "TrendingUp",
      title: "Carrier SLA Engine",
      badge: "AUDITED",
      badgeType: "success",
      subtitle: "Contract vs Actual Transit Time",
      metric: "99.8% Compliance",
      metricSub: "Scorecarded",
      footerLeft: "● Detention Guard",
      footerRight: "Auto-Reconciled"
    }
  },
  mist: {
    topLeft: {
      iconName: "Boxes",
      title: "MIST Multi-Echelon",
      badge: "AI BALANCING",
      badgeType: "live",
      subtitle: "Dynamic Safety Stock Engine",
      metric: "500+ Simulations",
      metricSub: "Real-Time",
      footerLeft: "● Inter-Hub Optimization",
      footerRight: "Zero Stockouts"
    },
    bottomLeft: {
      iconName: "BarChart3",
      title: "Working Capital Freed",
      badge: "CAPITAL",
      badgeType: "accent",
      subtitle: "Buffer Inventory Rationalization",
      metric: "18% Stock Reduction",
      metricSub: "High Turns",
      footerLeft: "● Cash Released",
      footerRight: "Dynamic Min/Max"
    },
    topRight: {
      iconName: "Truck",
      title: "Automated Rebalancing",
      badge: "DISPATCHED",
      badgeType: "accent",
      subtitle: "Midwest to Atlanta DC Lane",
      metric: "4,200 Units Transferred",
      metricSub: "Freight Optimized",
      footerLeft: "● Diesel Route Minimized",
      footerRight: "Direct WMS Order"
    },
    bottomRight: {
      iconName: "TrendingUp",
      title: "Network OTIF Rate",
      badge: "TARGET",
      badgeType: "success",
      subtitle: "Retail Partner Delivery Score",
      metric: "99.8% Maintained",
      metricSub: "+4.2% Lift",
      footerLeft: "● Zero OEM Expedite",
      footerRight: "Protected"
    }
  },
  "po-tracker": {
    topLeft: {
      iconName: "FileText",
      title: "PO Line Sentinel",
      badge: "SKU-LEVEL",
      badgeType: "live",
      subtitle: "Real-Time Purchase Order Tracking",
      metric: "100% SKU Visibility",
      metricSub: "Vendor Synced",
      footerLeft: "● Ex-Factory to Dock",
      footerRight: "Continuous"
    },
    bottomLeft: {
      iconName: "ShieldCheck",
      title: "Landed Cost Guardian",
      badge: "MARGIN PROVED",
      badgeType: "accent",
      subtitle: "Tariff & Accessorial Audit",
      metric: "Real-Time Margin",
      metricSub: "Zero Variance",
      footerLeft: "● True Landed Cost",
      footerRight: "P&L Protected"
    },
    topRight: {
      iconName: "Clock",
      title: "Milestone Variance AI",
      badge: "48HR ADVANCE",
      badgeType: "accent",
      subtitle: "Predictive Factory Milestone",
      metric: "Dynamic ETA Update",
      metricSub: "99.4% Accuracy",
      footerLeft: "● Proactive Alerts",
      footerRight: "Supplier Scored"
    },
    bottomRight: {
      iconName: "FileCheck",
      title: "3-Way Invoice Match",
      badge: "AUTOMATED",
      badgeType: "success",
      subtitle: "PO vs ASN vs Carrier Invoice",
      metric: "100% Reconciled",
      metricSub: "Zero Overpay",
      footerLeft: "● Dispute Shield",
      footerRight: "Auto-Approved"
    }
  },
  "demand-forecasting": {
    topLeft: {
      iconName: "Activity",
      title: "SKU Demand Sensing",
      badge: "NEURAL ML",
      badgeType: "live",
      subtitle: "POS & Promotion Velocity Stream",
      metric: "99.2% Accuracy",
      metricSub: "Multi-Factor",
      footerLeft: "● Weather & Macro Inputs",
      footerRight: "Real-Time"
    },
    bottomLeft: {
      iconName: "TrendingUp",
      title: "Surge Stockout Shield",
      badge: "AVERTED",
      badgeType: "accent",
      subtitle: "Seasonal Peak Spike Predictor",
      metric: "0 Lost Sales",
      metricSub: "Buffer Tuned",
      footerLeft: "● Dynamic Safety Stock",
      footerRight: "OTIF Protected"
    },
    topRight: {
      iconName: "Cpu",
      title: "Lead Time Variance",
      badge: "ADAPTIVE",
      badgeType: "accent",
      subtitle: "Supplier Delivery Fluctuation",
      metric: "Dynamic MRP Sync",
      metricSub: "Auto-Tuned",
      footerLeft: "● Buffer Realignment",
      footerRight: "Vendor Reliability"
    },
    bottomRight: {
      iconName: "BarChart3",
      title: "Hierarchical Forecast",
      badge: "GRANULAR",
      badgeType: "success",
      subtitle: "Store • DC • Channel Level",
      metric: "Daily Forecasting",
      metricSub: "Multi-Tier",
      footerLeft: "● ERP Bi-Directional",
      footerRight: "Continuous"
    }
  },
  wms: {
    topLeft: {
      iconName: "Warehouse",
      title: "Autonomous Wave Engine",
      badge: "AI WMS",
      badgeType: "live",
      subtitle: "Dynamic Wave Picking Sequencing",
      metric: "3.2x Pick Velocity",
      metricSub: "Zero Gridlock",
      footerLeft: "● Real-Time Waves",
      footerRight: "Orchestrated"
    },
    bottomLeft: {
      iconName: "Truck",
      title: "Dock & Yard Control",
      badge: "OPTIMIZED",
      badgeType: "accent",
      subtitle: "Trailer Turnaround & Check-in",
      metric: "28 Min Turnaround",
      metricSub: "Fast Gate",
      footerLeft: "● Yard Staging AI",
      footerRight: "Zero Detention"
    },
    topRight: {
      iconName: "Cpu",
      title: "Robotics & AS/RS",
      badge: "AMR / AGV SYNC",
      badgeType: "accent",
      subtitle: "Autonomous Vehicle Fleet Dispatch",
      metric: "100% Synchronized",
      metricSub: "< 100ms Sync",
      footerLeft: "● Zero Congestion",
      footerRight: "Robotic Fleet"
    },
    bottomRight: {
      iconName: "Boxes",
      title: "Cross-Docking Velocity",
      badge: "HIGH SPEED",
      badgeType: "success",
      subtitle: "Inbound Directly to Outbound",
      metric: "85% Direct Ship",
      metricSub: "Floor Space Saved",
      footerLeft: "● Fast Putaway",
      footerRight: "Inventory Turns 5x"
    }
  },
  solutions: {
    topLeft: {
      iconName: "Layers",
      title: "Industry Blueprints",
      badge: "5 VERTICALS",
      badgeType: "live",
      subtitle: "Pharma, Auto, Retail & Mfg",
      metric: "Pre-Built AI Logic",
      metricSub: "Instant Deploy",
      footerLeft: "● Tailored Workflows",
      footerRight: "Battle-Tested"
    },
    bottomLeft: {
      iconName: "Crosshair",
      title: "Cross-Node Visibility",
      badge: "MULTI-TIER",
      badgeType: "accent",
      subtitle: "Suppliers, Plants & Carriers",
      metric: "100% Transparent",
      metricSub: "Zero Blindspots",
      footerLeft: "● Sub-Tier Suppliers",
      footerRight: "Deep Telematics"
    },
    topRight: {
      iconName: "TrendingUp",
      title: "Predictive OTIF Standard",
      badge: "150+ METRICS",
      badgeType: "accent",
      subtitle: "Cross-Industry Risk Scoring",
      metric: "99.8% Reliability",
      metricSub: "+4.2% Lift",
      footerLeft: "● Automated Triage",
      footerRight: "Active Guard"
    },
    bottomRight: {
      iconName: "Boxes",
      title: "Universal ERP Connectors",
      badge: "PLUG & PLAY",
      badgeType: "success",
      subtitle: "SAP • Oracle • Manhattan • EDI",
      metric: "Bi-Directional Sync",
      metricSub: "< 150ms",
      footerLeft: "● Zero Legacy Disruption",
      footerRight: "Certified"
    }
  }
};

function renderIcon(iconName: string) {
  const props = { className: "h-3.5 w-3.5" };
  switch (iconName) {
    case "Zap": return <Zap {...props} />;
    case "ShieldCheck": return <ShieldCheck {...props} />;
    case "TrendingUp": return <TrendingUp {...props} />;
    case "Radio": return <Radio {...props} />;
    case "Building2": return <Building2 {...props} />;
    case "Users": return <Users {...props} />;
    case "Award": return <Award {...props} />;
    case "FileText": return <FileText {...props} />;
    case "Cpu": return <Cpu {...props} />;
    case "Clock": return <Clock {...props} />;
    case "Sparkles": return <Sparkles {...props} />;
    case "Boxes": return <Boxes {...props} />;
    case "BarChart3": return <BarChart3 {...props} />;
    case "Layers": return <Layers {...props} />;
    case "FileCheck": return <FileCheck {...props} />;
    case "Truck": return <Truck {...props} />;
    case "Ship": return <Ship {...props} />;
    case "ThermometerSnowflake": return <ThermometerSnowflake {...props} />;
    case "Warehouse": return <Warehouse {...props} />;
    case "Crosshair": return <Crosshair {...props} />;
    case "Activity": return <Activity {...props} />;
    case "MapPin": return <MapPin {...props} />;
    default: return <Activity {...props} />;
  }
}

function TelemetryCardItem({ card }: { card: TelemetryCardConfig }) {
  const isLiveBadge = card.badgeType === "live";
  const isSuccessBadge = card.badgeType === "success";
  const isAccentBadge = card.badgeType === "accent";

  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#e8f3ff] text-[#1D9AE1] border border-[#cfe6ff]">
            {renderIcon(card.iconName)}
          </div>
          <span className="text-[11px] font-bold text-[#0e1b34] truncate max-w-[130px]">{card.title}</span>
        </div>

        {isLiveBadge ? (
          <span className="inline-flex items-center gap-1 rounded-full bg-[#e7f8f1] px-2 py-0.5 text-[9px] font-bold text-[#128a58] font-mono shrink-0">
            <span className="h-1.5 w-1.5 rounded-full bg-[#1fb877] animate-pulse" />
            {card.badge}
          </span>
        ) : isSuccessBadge ? (
          <span className="text-[10px] font-mono font-bold text-[#1fb877] shrink-0">{card.badge}</span>
        ) : isAccentBadge ? (
          <span className="inline-flex items-center gap-1 rounded-full bg-[#e8f3ff] px-2 py-0.5 text-[9px] font-bold text-[#1D9AE1] font-mono border border-[#cfe6ff] shrink-0">
            {card.badge}
          </span>
        ) : (
          <span className="text-[10px] font-mono font-bold text-[#547099] shrink-0">{card.badge}</span>
        )}
      </div>

      <div className="mt-3">
        <div className="text-[10px] font-medium text-[#6b7a99] truncate">{card.subtitle}</div>
        <div className="flex items-baseline justify-between mt-0.5">
          <span className="text-sm font-extrabold font-mono text-[#0e1b34] truncate">
            {card.metricPrefix && <span className="text-[#1D9AE1]">{card.metricPrefix}</span>}
            {card.metric}
          </span>
          {card.metricSub && (
            <span className="text-[10px] font-mono font-bold text-[#1fb877] shrink-0 ml-1">
              {card.metricSub}
            </span>
          )}
        </div>
      </div>

      {card.sparkline ? (
        <div className="mt-2.5 flex items-center gap-1.5 border-t border-[#eef4fc] pt-2">
          <div className="flex gap-1 h-3.5 items-end flex-1">
            {[40, 65, 45, 80, 55, 90, 70, 95, 85].map((h, i) => (
              <span 
                key={i} 
                className="w-full bg-[#1D9AE1]/40 rounded-t-xs"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <span className="text-[9px] font-mono font-bold text-[#1D9AE1] shrink-0">{card.footerLeft}</span>
        </div>
      ) : (
        <div className="mt-2.5 flex items-center justify-between border-t border-[#eef4fc] pt-2 text-[10px] text-[#6b7a99] font-mono">
          <span className="text-[#128a58] font-bold truncate max-w-[130px]">{card.footerLeft}</span>
          <span className="truncate max-w-[100px] text-right">{card.footerRight}</span>
        </div>
      )}
    </div>
  );
}

export default function HeroBackgroundEffects({ variant = "home", customCards }: HeroBackgroundEffectsProps) {
  const config = VARIANT_CONFIGS[variant] || VARIANT_CONFIGS.home;
  const topLeftCard = customCards?.topLeft || config.topLeft;
  const bottomLeftCard = customCards?.bottomLeft || config.bottomLeft;
  const topRightCard = customCards?.topRight || config.topRight;
  const bottomRightCard = customCards?.bottomRight || config.bottomRight;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden select-none z-0">
      {/* ── 1. ATMOSPHERIC AMBIENT AURORA GLOWS ── */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1100px] h-[550px] rounded-full bg-gradient-to-b from-[#1D9AE1]/12 via-[#7CC8F1]/8 to-transparent blur-3xl" />
      <div className="absolute top-[20%] left-[-5%] w-[450px] h-[450px] rounded-full bg-[#1D9AE1]/8 blur-3xl" />
      <div className="absolute top-[25%] right-[-5%] w-[450px] h-[450px] rounded-full bg-[#7CC8F1]/8 blur-3xl" />

      {/* ── 2. HIGH-TECH BLUEPRINT GRID & DOT MATRIX ── */}
      <div 
        className="absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(29, 154, 225, 0.15) 1px, transparent 0), linear-gradient(to right, rgba(228, 237, 248, 0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(228, 237, 248, 0.4) 1px, transparent 1px)",
          backgroundSize: "32px 32px, 64px 64px, 64px 64px"
        }}
      />

      {/* ── 3. ANIMATED FLOWING SVG NETWORK LINES & DATA PULSES ── */}
      <svg
        className="absolute inset-0 h-full w-full opacity-60"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="streamGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1D9AE1" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#7CC8F1" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#1D9AE1" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="streamGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1D9AE1" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#59b4ff" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#1D9AE1" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Path 1: Left Flank to Center & Across */}
        <motion.path
          d="M -100 220 C 300 220, 350 480, 720 450 C 1090 420, 1140 180, 1540 180"
          fill="none"
          stroke="url(#streamGrad1)"
          strokeWidth="1.5"
          strokeDasharray="6 8"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: -120 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />

        {/* Path 2: Right Flank Flowing Diagonally */}
        <motion.path
          d="M -100 580 C 400 550, 480 180, 800 220 C 1120 260, 1200 620, 1540 590"
          fill="none"
          stroke="url(#streamGrad2)"
          strokeWidth="1.5"
          strokeDasharray="8 12"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: 140 }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        />

        {/* Path 3: Subtle Transverse Line */}
        <path
          d="M 120 100 C 450 300, 990 300, 1320 100"
          fill="none"
          stroke="#cfe6ff"
          strokeWidth="1"
          strokeDasharray="4 6"
          opacity="0.5"
        />

        {/* Pinging Trade Nodes */}
        <circle cx="360" cy="380" r="4" fill="#1D9AE1" />
        <circle cx="360" cy="380" r="10" fill="#1D9AE1" opacity="0.25" className="animate-ping" />

        <circle cx="1080" cy="360" r="4" fill="#7CC8F1" />
        <circle cx="1080" cy="360" r="12" fill="#7CC8F1" opacity="0.25" className="animate-ping" style={{ animationDelay: "1.2s" }} />

        <circle cx="720" cy="450" r="5" fill="#1D9AE1" />
      </svg>

      {/* ── 4. FLOATING INTERACTIVE GLASS DATA COCKPITS (LEFT & RIGHT) ── */}
      <div className="pointer-events-auto mx-auto max-w-[1440px] h-full relative hidden xl:block">

        {/* ─── LEFT FLANK CARDS ─── */}

        {/* Top Left Cockpit */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0, y: [0, -8, 0] }}
          transition={{ 
            opacity: { duration: 0.8, delay: 0.2 },
            x: { duration: 0.8, delay: 0.2 },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-[8%] left-[1%] w-[265px] rounded-2xl border border-[#cfe6ff] bg-white/95 p-4 shadow-[0_16px_36px_-18px_rgba(16,42,86,0.18),0_1px_2px_rgba(16,42,86,0.04)] backdrop-blur-md hover:border-[#1D9AE1] hover:scale-105 transition-all duration-300 group"
        >
          <TelemetryCardItem card={topLeftCard} />
        </motion.div>

        {/* Bottom Left Cockpit */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0, y: [0, 8, 0] }}
          transition={{ 
            opacity: { duration: 0.8, delay: 0.4 },
            x: { duration: 0.8, delay: 0.4 },
            y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }
          }}
          className="absolute top-[42%] left-[0.5%] w-[265px] rounded-2xl border border-[#cfe6ff] bg-white/95 p-4 shadow-[0_16px_36px_-18px_rgba(16,42,86,0.18),0_1px_2px_rgba(16,42,86,0.04)] backdrop-blur-md hover:border-[#1D9AE1] hover:scale-105 transition-all duration-300"
        >
          <TelemetryCardItem card={bottomLeftCard} />
        </motion.div>

        {/* ─── RIGHT FLANK CARDS ─── */}

        {/* Top Right Cockpit */}
        <motion.div
          initial={{ opacity: 0, x: 35 }}
          animate={{ opacity: 1, x: 0, y: [0, -9, 0] }}
          transition={{ 
            opacity: { duration: 0.8, delay: 0.3 },
            x: { duration: 0.8, delay: 0.3 },
            y: { duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
          }}
          className="absolute top-[8%] right-[1%] w-[265px] rounded-2xl border border-[#cfe6ff] bg-white/95 p-4 shadow-[0_16px_36px_-18px_rgba(16,42,86,0.18),0_1px_2px_rgba(16,42,86,0.04)] backdrop-blur-md hover:border-[#1D9AE1] hover:scale-105 transition-all duration-300"
        >
          <TelemetryCardItem card={topRightCard} />
        </motion.div>

        {/* Bottom Right Cockpit */}
        <motion.div
          initial={{ opacity: 0, x: 35 }}
          animate={{ opacity: 1, x: 0, y: [0, 8, 0] }}
          transition={{ 
            opacity: { duration: 0.8, delay: 0.5 },
            x: { duration: 0.8, delay: 0.5 },
            y: { duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }
          }}
          className="absolute top-[42%] right-[0.5%] w-[265px] rounded-2xl border border-[#cfe6ff] bg-white/95 p-4 shadow-[0_16px_36px_-18px_rgba(16,42,86,0.18),0_1px_2px_rgba(16,42,86,0.04)] backdrop-blur-md hover:border-[#1D9AE1] hover:scale-105 transition-all duration-300"
        >
          <TelemetryCardItem card={bottomRightCard} />
        </motion.div>

      </div>
    </div>
  );
}
