export interface ProductItem {
  id: string;
  name: string;
  badge?: string;
  tagline: string;
  description: string;
  href: string;
  iconName: string;
  color: string;
  image: string;
  features: string[];
  metrics: { value: string; label: string }[];
  detailedContent: {
    heroTitle: string;
    heroSubtitle: string;
    coreProblem: string;
    aiSolution: string;
    capabilities: { title: string; desc: string; icon: string }[];
    workflowSteps: { step: string; title: string; detail: string }[];
  };
}

export const PRODUCTS: ProductItem[] = [
  {
    id: "edifai",
    name: "EDIFAI",
    badge: "AI-Native EDI",
    tagline: "Proactive, Self-Healing B2B EDI Intelligence",
    description: "Go beyond rigid message translation. EDIFAI embeds AI into the transaction lifecycle for automatic schema validation, continuous anomaly detection, and automated error recovery.",
    href: "/products/edifai",
    iconName: "Network",
    color: "from-emerald-500 to-teal-600",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200",
    features: [
      "AI-Assisted Adaptive Data Mapping (X12, EDIFACT, XML, JSON)",
      "Pre-processing schema validation & code mismatch prevention",
      "Automated root-cause error correction & self-healing workflows",
      "End-to-end transaction observability & milestone tracking"
    ],
    metrics: [
      { value: "70%", label: "Manual EDI Workload Reduction" },
      { value: "65%", label: "Faster Issue Resolution" },
      { value: "50%", label: "Fewer Transaction Failures" }
    ],
    detailedContent: {
      heroTitle: "Stop Transaction Failures Before They Reach Your ERP",
      heroSubtitle: "Traditional EDI tools only translate formatted strings. EDIFAI inspects semantic data integrity, detects anomalies, and heals broken segments in flight.",
      coreProblem: "Legacy EDI translation relies on rigid schemas. When a supplier sends a slightly misformatted 856 ASN or an outdated carrier SCAC code, the transaction silently fails—causing dock delays, stockout penalties, and hours of manual IT ticketing.",
      aiSolution: "EDIFAI's neural mapping engine cross-references historical transaction payloads, supplier catalogs, and ERP tables to detect anomalies in pre-flight. It applies verified heuristic fixes and updates downstream systems with zero downtime.",
      capabilities: [
        { title: "Adaptive Schema Learning", desc: "No more rebuilding maps for each vendor variant. AI automatically adapts schemas based on incoming message patterns.", icon: "Sparkles" },
        { title: "Autonomous Self-Healing", desc: "When missing mandatory segments or misaligned UOMs occur, EDIFAI applies historical correction algorithms.", icon: "ShieldCheck" },
        { title: "Live Anomaly Sentinel", desc: "Monitors 150+ operational metrics per transaction, flagging price discrepancies, duplicate POs, and delayed 997/990 acknowledgments.", icon: "Activity" },
        { title: "Universal Interop Hub", desc: "Native support for ANSI X12 (204, 210, 214, 850, 855, 856, 810), EDIFACT, AS2, SFTP, and modern REST APIs.", icon: "Layers" }
      ],
      workflowSteps: [
        { step: "01", title: "Ingestion & Stream Validation", detail: "Transactions stream via AS2/SFTP/API and undergo immediate pre-flight syntax and semantic inspection." },
        { step: "02", title: "AI Anomaly Triage", detail: "Neural classifier flags errors like mismatched part numbers, invalid warehouse codes, or price variations." },
        { step: "03", title: "Automated Self-Correction", detail: "Heuristic AI agents patch the payload according to configured enterprise business rules with full audit trails." },
        { step: "04", title: "ERP/WMS Safe Write-Back", detail: "Clean data is posted to SAP, Oracle, or Manhattan WMS with real-time status visibility across dashboards." }
      ]
    }
  },
  {
    id: "iqua",
    name: "IQUA",
    badge: "Cold Chain & Perishables",
    tagline: "End-to-End Visibility for Temperature-Sensitive Cargo",
    description: "Multimodal perishable and fresh/frozen tracking with real-time predictive ETAs, IoT temperature excursion alerts, and multi-stakeholder customs compliance.",
    href: "/products/iqua",
    iconName: "ThermometerSnowflake",
    color: "from-teal-500 to-teal-600",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=1200",
    features: [
      "Real-time predictive ETA monitoring across Air, Ocean & Reefer",
      "Multi-stakeholder federation (Airlines, Shipping Lines, Drayage, Cold Storage)",
      "Automated split-shipment linking & tracking",
      "Proactive alerts for temperature excursions & port demurrage risk"
    ],
    metrics: [
      { value: "99.2%", label: "Cold-Chain Integrity SLA" },
      { value: "4.8 hrs", label: "Early ETA Disruption Warning" },
      { value: "35%", label: "Demurrage & Spoilage Cost Cut" }
    ],
    detailedContent: {
      heroTitle: "Zero Spoilage. Flawless Cold Chain Compliance.",
      heroSubtitle: "Continuous sensor telematics and predictive port dwell analytics designed specifically for pharmaceutical, seafood, produce, and frozen goods supply chains.",
      coreProblem: "Perishable cargo moves through dozens of uncoordinated hands. A 4-hour delay on a customs ramp or a disconnected reefer plug can wipe out hundreds of thousands of dollars in value without warning.",
      aiSolution: "IQUA unifies IoT sensor telematics, ocean vessel AIS feeds, airline schedules, and customs broker APIs into a single predictive dashboard that proactively re-routes shipments before thermal degradation occurs.",
      capabilities: [
        { title: "Continuous Telematics Tracking", desc: "Live integration with Emerson, Tive, Sensitech, and onboard reefer sensors for temperature, humidity, and shock.", icon: "Activity" },
        { title: "Split-Shipment Re-Aggregation", desc: "Automatically unifies split containers and partial air bills to ensure complete order fulfillment at destination.", icon: "GitMerge" },
        { title: "Demurrage Risk Sentinel", desc: "Predicts port congestion and gate dwell times to alert drayage dispatchers before detention penalties incur.", icon: "Clock" },
        { title: "Digital Compliance Vault", desc: "Automated storage and validation of phytosanitary certificates, FDA declarations, and bill of lading documents.", icon: "FileText" }
      ],
      workflowSteps: [
        { step: "01", title: "Multi-Carrier Telematics Stream", detail: "Air cargo, ocean containers, and reefer trucks report continuous GPS, temperature, and customs hold milestones." },
        { step: "02", title: "Predictive ETA Recalculation", detail: "AI incorporates weather patterns, port congestion, and border wait times to forecast arrival within minutes." },
        { step: "03", title: "Thermal Excursion Alerting", detail: "If temperatures deviate beyond acceptable thresholds, instant alerts notify field handlers and trigger contingency re-icing." },
        { step: "04", title: "Proof of Quality Delivery", detail: "Certified audit logs and temperature compliance histories are automatically attached to the final delivery confirmation." }
      ]
    }
  },
  {
    id: "fairmiles",
    name: "FairMiles",
    badge: "Logistics Execution",
    tagline: "Intelligent Load Discovery, Booking & Margin Optimization",
    description: "Empower carriers and logistics teams to discover profitable loads, optimize per-mile net revenue, eliminate empty deadheads, and automate dispatch validation.",
    href: "/products/fairmiles",
    iconName: "Truck",
    color: "from-emerald-500 to-teal-600",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1200",
    features: [
      "AI-powered load matching based on equipment, lane preference & deadhead",
      "Dynamic per-mile revenue & net margin profitability calculator",
      "Automated rate confirmation verification & instant booking",
      "Geofence-triggered milestone trip tracking from pickup to POD"
    ],
    metrics: [
      { value: "+18%", label: "Net Revenue Per Mile" },
      { value: "45%", label: "Reduction in Empty Deadhead" },
      { value: "3x", label: "Faster Booking Execution" }
    ],
    detailedContent: {
      heroTitle: "Maximize Net Profit On Every Single Mile Driven",
      heroSubtitle: "FairMiles transforms freight procurement and dispatch from guesswork into a data-backed precision science.",
      coreProblem: "Brokers and carriers lose margin on concealed costs: rising fuel surcharges, unpaid detention, empty backhaul deadheads, and tedious manual rate negotiations.",
      aiSolution: "FairMiles scans private and public load networks, simulates true trip expenses (fuel, tolls, driver hours, detention probability), and instantly surfaces the highest net-yield loads.",
      capabilities: [
        { title: "True Margin Simulator", desc: "Calculates net profit per mile before you commit, factoring in diesel prices, toll roads, and dwell risks.", icon: "DollarSign" },
        { title: "AI Load Radar", desc: "Matches available tractors and reefers with optimal backhaul loads in real-time, eliminating deadhead miles.", icon: "Compass" },
        { title: "Instant Rate Con Parser", desc: "Parses PDF rate confirmations using OCR and LLMs to instantly verify terms and prevent billing discrepancies.", icon: "FileCheck" },
        { title: "Autonomous Geofence Tracking", desc: "Triggers automated driver check-ins and departure notifications upon crossing warehouse geofences.", icon: "MapPin" }
      ],
      workflowSteps: [
        { step: "01", title: "Fleet & Lane Positioning", detail: "FairMiles tracks current tractor coordinates, driver HOS (Hours of Service), and destination preferences." },
        { step: "02", title: "Margin Scoring & Matching", detail: "AI evaluates hundreds of available loads, ranking them by true net earnings after operating expenses." },
        { step: "03", title: "1-Click Rate Con Verification", detail: "Automated document parser extracts accessorials, detention terms, and rate details for instant dispatch sign-off." },
        { step: "04", title: "Automated POD & QuickPay", detail: "Geofence-verified delivery unlocks instantaneous POD generation and streamlined carrier factoring." }
      ]
    }
  },
  {
    id: "mist",
    name: "MIST",
    badge: "Inventory Intelligence",
    tagline: "Dynamic Inventory Optimization & Multi-Echelon Balancing",
    description: "Eliminate stockouts and slash excess working capital. MIST continuously recalculates dynamic safety stock levels across manufacturing plants and distribution hubs.",
    href: "/products/mist",
    iconName: "Boxes",
    color: "from-amber-500 to-orange-600",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1200",
    features: [
      "Dynamic safety stock recalculation using lead-time variability modeling",
      "Multi-echelon inventory balancing across plants and regional DCs",
      "Pre-emptive stockout and overstock early warning indicators",
      "Supplier fulfillment performance & lead-time scoring"
    ],
    metrics: [
      { value: "32%", label: "Working Capital Freed" },
      { value: "40%", label: "Fewer Production Downtimes" },
      { value: "99.5%", label: "Order Fulfillment OTIF" }
    ],
    detailedContent: {
      heroTitle: "Perfect Inventory Levels Across Every Node in Your Network",
      heroSubtitle: "Stop relying on static 30-day min/max spreadsheets. MIST dynamically tunes safety stock buffers based on actual supplier lead-time fluctuations.",
      coreProblem: "Supply volatility causes companies to over-purchase safety stock, locking up millions in working capital while still suffering stockouts on critical components.",
      aiSolution: "MIST continuously monitors supplier fulfillment reliability, transit delays, and consumption velocity to dynamically balance inventory across multi-echelon networks.",
      capabilities: [
        { title: "Dynamic Safety Stock Engine", desc: "Replaces static buffers with statistical models adjusting daily for demand volatility and supplier lead-time risk.", icon: "Sliders" },
        { title: "Multi-Echelon Balancing", desc: "Identifies inter-facility inventory transfer opportunities before triggering expensive emergency rush orders.", icon: "Share2" },
        { title: "Supplier Lead-Time Sentinel", desc: "Scores vendor reliability based on actual historical delivery variance rather than theoretical contract dates.", icon: "CheckCircle2" },
        { title: "Obsolescence & Expiry Safeguard", desc: "Identifies slow-moving SKUs and recommends markdown or redistribution strategies before write-downs occur.", icon: "AlertTriangle" }
      ],
      workflowSteps: [
        { step: "01", title: "Network ERP Ingestion", detail: "Pulls SKU-level on-hand inventory, open purchase orders, and daily consumption logs from SAP/Oracle." },
        { step: "02", title: "Variance Modeling", detail: "AI calculates supplier lead-time confidence intervals and demand seasonality across every distribution node." },
        { step: "03", title: "Dynamic Buffer Optimization", detail: "Recommends exact reorder points and inter-hub transfers to balance regional stock holding." },
        { step: "04", title: "Automated PO Triggering", detail: "Generates PO requisitions directly into ERP systems when inventory crosses AI-calculated thresholds." }
      ]
    }
  },
  {
    id: "demand-forecasting",
    name: "Demand Forecasting",
    badge: "Predictive Planning",
    tagline: "AI Demand Sensing at SKU, Plant & Channel Resolution",
    description: "Move from gut feelings to algorithmic precision. Combine historical sales trends, macroeconomic signals, weather forecasts, and promotions for hyper-accurate planning.",
    href: "/products/demand-forecasting",
    iconName: "TrendingUp",
    color: "from-amber-500 to-orange-600",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    features: [
      "SKU, manufacturing plant, and distribution channel level forecasting",
      "Seasonality, macroeconomic, and promotional spike modeling",
      "Real-time demand sensing via Point-of-Sale (POS) & channel ingestion",
      "Scenario planning & simulation for supply shock resilience"
    ],
    metrics: [
      { value: "95%+", label: "Forecast Accuracy" },
      { value: "28%", label: "Reduction in Finished Goods Waste" },
      { value: "15 Days", label: "Advanced Disruption Horizon" }
    ],
    detailedContent: {
      heroTitle: "Anticipate Market Demand Before It Happens",
      heroSubtitle: "Transform planning from a monthly guesswork ritual into continuous algorithmic demand sensing.",
      coreProblem: "Traditional demand forecasting relies on outdated historical moving averages that fail during market shifts, promotional surges, or supply shocks.",
      aiSolution: "HiView's machine learning models synthesize hundreds of external signals—POS feeds, market indices, seasonal weather, and competitor actions—for unmatched forecast fidelity.",
      capabilities: [
        { title: "Multivariate Neural Models", desc: "Combines time-series algorithms with deep learning to capture nonlinear demand trends.", icon: "Cpu" },
        { title: "Channel-Specific Granularity", desc: "Forecasts by specific retail partner, direct-to-consumer channel, and regional warehouse facility.", icon: "Target" },
        { title: "Interactive 'What-If' Sandbox", desc: "Simulate price elasticity, promotional discounts, and supply constraints with real-time outcome curves.", icon: "BarChart3" },
        { title: "Continuous S&OP Alignment", desc: "Directly syncs forecasted demand with manufacturing schedules and procurement pipelines.", icon: "RefreshCw" }
      ],
      workflowSteps: [
        { step: "01", title: "Holistic Signal Ingestion", detail: "Pulls historical sales, active CRM pipeline, retail sell-through POS, and external market indices." },
        { step: "02", title: "Algorithmic Pattern Modeling", detail: "Neural ensemble models evaluate multiple forecast scenarios across SKU and plant hierarchies." },
        { step: "03", title: "Collaborative S&OP Review", detail: "Planners adjust promotional multipliers and review AI confidence intervals in an intuitive visual canvas." },
        { step: "04", title: "Automated Production Scheduling", detail: "Finalized demand plans feed directly into MRP and WMS schedules for flawless operational execution." }
      ]
    }
  },
  {
    id: "wms",
    name: "WMS Execution Layer",
    badge: "Warehouse Intelligence",
    tagline: "Unify Disparate Warehouses with Smart Execution Workflows",
    description: "Federate multi-site legacy and cloud WMS systems (Manhattan, Blue Yonder, HighJump, SAP EWM) into a unified operational control layer with dynamic pick path optimization.",
    href: "/products/wms",
    iconName: "Warehouse",
    color: "from-teal-600 to-emerald-600",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=1200",
    features: [
      "Multi-site WMS federation into a single pane of operational glass",
      "Dynamic pick path optimization & automated wave planning",
      "Barcode & RFID automated pallet tracking and dock door scheduling",
      "Strict FIFO, FEFO, lot control & quarantine policy enforcement"
    ],
    metrics: [
      { value: "24%", label: "Pick & Pack Throughput Boost" },
      { value: "99.9%", label: "Inventory Location Accuracy" },
      { value: "30%", label: "Dock Turnaround Speedup" }
    ],
    detailedContent: {
      heroTitle: "Intelligent Warehouse Execution Across Every Facility",
      heroSubtitle: "A modern software orchestration layer that integrates on top of existing Manhattan, SAP, and Blue Yonder WMS deployments.",
      coreProblem: "Enterprises with multiple acquisitions and legacy distribution centers suffer from fragmented WMS platforms with no standardized visibility or optimization.",
      aiSolution: "HiView sits on top of your existing WMS infrastructure, analyzing warehouse throughput, optimizing worker travel paths, and streamlining dock door appointments.",
      capabilities: [
        { title: "Universal WMS Federation", desc: "Single operational cockpit bridging Manhattan WMOS/Active, SAP EWM, Blue Yonder, and legacy systems.", icon: "Grid" },
        { title: "Dynamic Wave Orchestration", desc: "Optimizes order batching and picking routes based on real-time carrier arrival schedules and dock availability.", icon: "FastForward" },
        { title: "Strict FEFO / Lot Tracking", desc: "Guarantees expired or quarantined lots are never released for packing, safeguarding compliance.", icon: "ShieldAlert" },
        { title: "Live Dock Door Scheduler", desc: "Coordinates inbound carrier arrival slots with warehouse labor availability to eliminate trailer yard gridlock.", icon: "Calendar" }
      ],
      workflowSteps: [
        { step: "01", title: "Multi-WMS Ingestion", detail: "Continuous bi-directional sync with all facility WMS databases via standardized API connectors." },
        { step: "02", title: "Intelligent Wave Generation", detail: "AI groups open orders by carrier cutoff times, SKU proximity, and picker congestion levels." },
        { step: "03", title: "Real-time Path Guidance", detail: "Directs warehouse floor staff along optimized pick routes, reducing travel distance by up to 35%." },
        { step: "04", title: "Carrier Dock Hand-Off", detail: "Synchronizes stage completion with inbound trailer check-in for frictionless trailer loading." }
      ]
    }
  },
  {
    id: "po-tracker",
    name: "PO & P&L Profitability Tracker",
    badge: "Financial Intelligence",
    tagline: "Real-Time Order Profitability & True Landed Cost Visibility",
    description: "Monitor purchase order lifecycles from issuance to final settlement. Uncover hidden accessorial fees, demurrage, and tariff impacts to protect gross margins.",
    href: "/products/po-tracker",
    iconName: "Receipt",
    color: "from-teal-500 to-emerald-600",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=1200",
    features: [
      "End-to-end PO lifecycle tracking from manufacturer to billing settlement",
      "Dynamic true landed cost allocation (freight tariffs, demurrage, accessorials)",
      "Margin erosion early warning sentinel before invoice generation",
      "Supplier invoice reconciliation against contract rate agreements"
    ],
    metrics: [
      { value: "4.2%", label: "Gross Margin Protection" },
      { value: "100%", label: "Landed Cost Auditability" },
      { value: "85%", label: "Faster Freight Invoice Audit" }
    ],
    detailedContent: {
      heroTitle: "Protect Your Profit Margins on Every Purchase Order",
      heroSubtitle: "Stop unexpected freight surcharges and detention fees from quietly destroying your gross margins.",
      coreProblem: "Supply chain managers rarely see the true landed cost of goods until weeks after delivery when carrier invoices arrive with hidden accessorial penalties.",
      aiSolution: "The PO & P&L Tracker continuously allocates transportation expenses, customs duties, and detention fees to individual PO line items in real-time.",
      capabilities: [
        { title: "Item-Level Landed Costing", desc: "Accurately distributes freight, tariff, and insurance costs down to individual SKU units.", icon: "Calculator" },
        { title: "Margin Erosion Alerting", desc: "Flags orders where expedited transit or container dwell has eroded profitability below target margins.", icon: "TrendingDown" },
        { title: "Automated Freight Invoice Audit", desc: "Compares carrier billing against agreed rate contracts, automatically flagging overcharges.", icon: "FileCheck2" },
        { title: "Executive P&L Cockpit", desc: "Interactive dashboards visualizing realized gross margins across suppliers, lanes, and customer accounts.", icon: "PieChart" }
      ],
      workflowSteps: [
        { step: "01", title: "PO Creation Sync", detail: "Pulls purchase order line items, expected unit costs, and target margins directly from ERP." },
        { step: "02", title: "Real-time Expense Accrual", detail: "Streams carrier freight bills, customs duties, and demurrage accruals in real-time as transit occurs." },
        { step: "03", title: "Margin Vulnerability Flagging", detail: "AI calculates projected landed margin and triggers alerts if costs exceed safety thresholds." },
        { step: "04", title: "Automated Invoice Reconciliation", detail: "Cross-checks final carrier invoices against milestone data and approves clean bills for AP payout." }
      ]
    }
  }
];

export const CORE_USPS = [
  {
    id: "score-act",
    number: "01",
    badge: "The HiView Differentiator",
    title: "The Platform That Scores, Then Acts",
    headline: "Machine Learning That Doesn't Just Show Data — It Executes Decisions.",
    description: "Most supply chain tools are passive dashboards that display delayed GPS pins. HiView evaluates operations across 150+ metrics, calculates reliability scores, and autonomously triggers corrective workflows.",
    keyPoints: [
      "150+ Continuous operational health metrics",
      "Dynamic supplier, carrier & DC reliability scoring",
      "Autonomous AI agent execution with human-in-the-loop governance",
      "Natural language policy engine for custom rule creation"
    ],
    stat: "150+",
    statLabel: "Live Operational Metrics Scored"
  },
  {
    id: "predictive-intelligence",
    number: "02",
    badge: "Predictive Forecasting",
    title: "Predictive Analytics, Not Just Reactive Alerts",
    headline: "Anticipate Logistics Bottlenecks 15 Days Before They Cascade.",
    description: "Stop fighting fires after goods are delayed. HiView analyzes thousands of live data points—port congestion, weather, AIS ocean traffic, supplier lead times—to resolve disruptions in advance.",
    keyPoints: [
      "95%+ Forecast & ETA prediction accuracy",
      "Multi-variable AI demand sensing at SKU and plant level",
      "Demurrage and detention risk forecasting before vessel arrival",
      "Dynamic lane re-routing and carrier fallback automation"
    ],
    stat: "95%+",
    statLabel: "Predictive ETA & Planning Accuracy"
  },
  {
    id: "autonomous-agents",
    number: "03",
    badge: "Agentic Automation",
    title: "Autonomous AI Agents Working 24/7",
    headline: "Zero-Touch Exception Management That Heals Supply Chains.",
    description: "Empower your team with AI agents that handle routine tasks automatically: auto-correcting malformed EDI files, re-balancing regional warehouse inventory, and filing detention claims.",
    keyPoints: [
      "Automated EDI self-healing and schema patch application",
      "Autonomous safety stock dynamic rebalancing across facilities",
      "Automated rate confirmation parsing and instant dispatch confirmation",
      "Confidence-scored action recommendations for logistics managers"
    ],
    stat: "70%",
    statLabel: "Reduction in Manual Administrative Workload"
  },
  {
    id: "universal-connectivity",
    number: "04",
    badge: "Ecosystem Interop",
    title: "100+ Enterprise Connectors (Zero Rip & Replace)",
    headline: "Seamless Integration With Your Existing Tech Stack in Days.",
    description: "Keep your existing SAP, Oracle, Manhattan WMS, and FourKites systems. HiView sits as an intelligent orchestration layer on top with pre-built bi-directional connectors.",
    keyPoints: [
      "Pre-built connectors for SAP S/4HANA, Oracle Cloud, NetSuite, Dynamics 365",
      "Certified interoperability with Manhattan WMOS, Blue Yonder, HighJump",
      "Native ingestion of telematics (Samsara, Geotab, FourKites, Project44)",
      "Standard ANSI X12, EDIFACT, AS2, SFTP, and modern REST webhooks"
    ],
    stat: "100+",
    statLabel: "Pre-Built Enterprise Integrations"
  },
  {
    id: "intelligent-alerting",
    number: "05",
    badge: "Signal Over Noise",
    title: "Intelligent Alerting: Filter 10,000 Alerts to the 12 That Matter",
    headline: "End Alert Fatigue. Focus Only on Critical Margin & OTIF Threats.",
    description: "Supply chain managers drown in thousands of daily pings. HiView's AI sentinel filters operational noise, scoring each event by revenue impact and presenting prioritized, actionable decisions.",
    keyPoints: [
      "Revenue-weighted priority alert scoring",
      "Root-cause grouping of related downstream delay events",
      "Actionable resolution playbooks attached to every high-priority alert",
      "Slack, Teams, SMS, and Email instant webhook notifications"
    ],
    stat: "65%",
    statLabel: "Faster Issue Resolution Times"
  }
];

export const COMPANY_INFO = {
  name: "HiView AI",
  tagline: "The supply chain platform that scores, then acts.",
  recognition: "Recognized as one of the 2026 Top 40 Innovative Companies in Georgia by the Technology Association of Georgia (TAG).",
  mission: "To architect the decision infrastructure that enables enterprises to operate their supply chains with clarity, discipline, and intelligence.",
  vision: "Transform supply chains into intelligent execution networks that improve performance, resilience, and profitability.",
  leadership: [
    {
      name: "Venkatesh Damodaran",
      role: "CEO & Founder",
      bio: "Over 20+ years of deep domain experience in enterprise supply chain technology and Manhattan Associates software ecosystems. Leads overall corporate vision, product architecture, and enterprise go-to-market strategy.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Shubhendu Shrivastava",
      role: "Executive Advisor, Technology & Strategy",
      bio: "Over 25+ years of product engineering experience scaling enterprise B2B SaaS platforms and high-throughput data architectures across global operations.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Sreedharan Rathamanoharan",
      role: "Strategic Advisor",
      bio: "Over 19+ years of enterprise systems integration leadership, advising on ecosystem interoperability and mission-critical client deployments.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400"
    }
  ],
  offices: [
    {
      region: "Global Headquarters",
      city: "Alpharetta, GA (USA)",
      address: "2440 Old Milton Parkway, Suite 115, Alpharetta, GA 30009, USA",
      focus: "Executive Leadership, Product Strategy, North American Enterprise GTM",
      badge: "HQ"
    },
    {
      region: "Middle East & North Africa",
      city: "Dubai (UAE)",
      address: "Dubai Internet City, Dubai, United Arab Emirates",
      focus: "MENA Operations, Global Trade Lanes, Energy & Retail Logistics",
      badge: "Regional Hub"
    },
    {
      region: "Engineering & Innovation Hub",
      city: "Bhubaneswar (India)",
      address: "Technology Corridor, Bhubaneswar, Odisha, India",
      focus: "Core Platform Architecture, Distributed Systems & Cloud Infrastructure",
      badge: "Engineering"
    },
    {
      region: "R&D & Machine Learning Hub",
      city: "Coimbatore (India)",
      address: "Tidel Park / IT SEZ, Coimbatore, Tamil Nadu, India",
      focus: "AI/ML Research, Predictive Models & Neural Data Pipelines",
      badge: "R&D Center"
    }
  ],
  partnerPresences: [
    { country: "Canada", city: "Oakville, ON" },
    { country: "Germany", city: "Berlin" },
    { country: "Australia", city: "Sydney" },
    { country: "India", city: "Bangalore & Hyderabad" }
  ],
  contact: {
    email: "info@hiview.ai",
    phone: "+1 (848) 344-8439",
    phoneDisplay: "+1 848-3HiView",
    salesEmail: "sales@hiview.ai",
    supportEmail: "support@hiview.ai"
  }
};

export const INDUSTRIES = [
  {
    id: "manufacturing",
    name: "Manufacturing & Industrial",
    tagline: "Prevent Assembly Line Stoppages with Multi-Tier BOM Visibility",
    desc: "Coordinate tier-1 and tier-2 supplier part deliveries with real-time PO tracking to prevent catastrophic production line downtime.",
    impact: "40% reduction in production delays",
    icon: "Factory"
  },
  {
    id: "pharma",
    name: "Pharmaceuticals & Healthcare",
    tagline: "Zero Spoilage & Full FDA/GxP Cold Chain Compliance",
    desc: "Continuous telematics tracking for temperature-sensitive biologics and vaccines with automated digital audit vaults.",
    impact: "99.2% cold chain integrity SLA",
    icon: "HeartPulse"
  },
  {
    id: "retail",
    name: "Retail & Omnichannel E-Commerce",
    tagline: "Dynamic Multi-Node Inventory Balancing & Peak Season Agility",
    desc: "SKU-level demand sensing and dynamic safety stock reallocation across regional distribution centers and stores.",
    impact: "99.5% order fulfillment OTIF",
    icon: "ShoppingBag"
  },
  {
    id: "automotive",
    name: "Automotive Just-In-Time (JIT)",
    tagline: "Precision Transit Milestones & Supplier Reliability Scoring",
    desc: "Strict JIT delivery monitoring with automated carrier re-routing to avoid severe assembly line stoppage penalties.",
    impact: "65% faster exception resolution",
    icon: "Car"
  },
  {
    id: "electronics",
    name: "High-Tech & Consumer Electronics",
    tagline: "Protect Landed Gross Margins Across Global Multimodal Lanes",
    desc: "End-to-end container tracking, port dwell monitoring, and item-level tariff/accessorial landed cost protection.",
    impact: "4.2% margin protection",
    icon: "Cpu"
  }
];

export const INTEGRATIONS = [
  { name: "SAP S/4HANA & ECC", category: "ERP", icon: "Database" },
  { name: "Oracle Cloud ERP", category: "ERP", icon: "Database" },
  { name: "Microsoft Dynamics 365", category: "ERP", icon: "Database" },
  { name: "NetSuite", category: "ERP", icon: "Database" },
  { name: "Manhattan Associates", category: "WMS", icon: "Warehouse" },
  { name: "Blue Yonder (JDA)", category: "WMS", icon: "Warehouse" },
  { name: "Körber / HighJump", category: "WMS", icon: "Warehouse" },
  { name: "FourKites", category: "Telematics", icon: "Radio" },
  { name: "Project44", category: "Telematics", icon: "Radio" },
  { name: "Samsara", category: "IoT Fleet", icon: "Truck" },
  { name: "ANSI X12 / EDIFACT", category: "EDI Protocols", icon: "Network" },
  { name: "Snowflake & Databricks", category: "Data Lake", icon: "Layers" }
];
