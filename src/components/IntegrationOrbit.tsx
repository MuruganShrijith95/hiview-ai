"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { INTEGRATIONS } from "@/lib/constants";
import { Database, Warehouse, Radio, Truck, Network, Layers, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const CATEGORIES = ["ALL", "ERP", "WMS", "Telematics", "IoT Fleet", "EDI Protocols", "Data Lake"];

export default function IntegrationOrbit() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  const filteredIntegrations = selectedCategory === "ALL"
    ? INTEGRATIONS
    : INTEGRATIONS.filter((item) => item.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 md:p-10 backdrop-blur-xl">
      {/* Category Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 pb-8 border-b border-white/10">
        {CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-xl px-4 py-2 text-xs font-semibold transition-all duration-200 ${
                isSelected
                  ? "bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/25 font-bold"
                  : "bg-slate-900/80 text-slate-400 hover:bg-slate-800 hover:text-white border border-white/5"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Integration Grid */}
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {filteredIntegrations.map((item, idx) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25, delay: idx * 0.03 }}
            className="group flex flex-col items-center justify-center rounded-2xl border border-white/5 bg-slate-900/40 p-5 text-center transition-all duration-300 hover:border-emerald-500/30 hover:bg-slate-800/80 hover:shadow-lg hover:shadow-emerald-500/10"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
              {item.category === "ERP" && <Database className="h-6 w-6" />}
              {item.category === "WMS" && <Warehouse className="h-6 w-6" />}
              {item.category === "Telematics" && <Radio className="h-6 w-6" />}
              {item.category === "IoT Fleet" && <Truck className="h-6 w-6" />}
              {item.category === "EDI Protocols" && <Network className="h-6 w-6" />}
              {item.category === "Data Lake" && <Layers className="h-6 w-6" />}
            </div>
            <div className="mt-3 text-xs font-bold text-slate-200 group-hover:text-white">
              {item.name}
            </div>
            <div className="mt-0.5 text-[10px] font-mono text-slate-500 uppercase">
              {item.category}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer reassurance banner */}
      <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4 text-emerald-400" />
          <span>Don&apos;t see your ERP/WMS? HiView builds bespoke connectors with guaranteed 14-day SLA.</span>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold"
        >
          Request Integration Specs <ArrowRight className="h-3 w-3" />
        </Link>
      </div>
    </div>
  );
}
