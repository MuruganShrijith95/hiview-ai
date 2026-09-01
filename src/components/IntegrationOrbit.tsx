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
    <div className="rounded-2xl border border-[#e4edf8] bg-white p-6 md:p-10 shadow-[0_1px_2px_rgba(16,42,86,0.04),0_8px_24px_-18px_rgba(16,42,86,0.18)]">
      {/* Category Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 pb-7 border-b border-[#eef4fc]">
        {CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-xl px-4 py-2 text-xs font-bold transition-all duration-200 ${
                isSelected
                  ? "bg-[#1D9AE1] text-white shadow-sm font-bold"
                  : "bg-white text-[#33456b] hover:bg-[#f8fafc] hover:border-[#cfe6ff] border border-[#e4edf8]"
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
            className="group flex flex-col items-center justify-center rounded-xl border border-[#e4edf8] bg-[#f8fafc] p-5 text-center transition-all duration-200 hover:border-[#cfe6ff] hover:bg-white hover:shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e8f3ff] text-[#1D9AE1] group-hover:bg-[#1D9AE1] group-hover:text-white transition-colors">
              {item.category === "ERP" && <Database className="h-6 w-6" />}
              {item.category === "WMS" && <Warehouse className="h-6 w-6" />}
              {item.category === "Telematics" && <Radio className="h-6 w-6" />}
              {item.category === "IoT Fleet" && <Truck className="h-6 w-6" />}
              {item.category === "EDI Protocols" && <Network className="h-6 w-6" />}
              {item.category === "Data Lake" && <Layers className="h-6 w-6" />}
            </div>
            <div className="mt-3 text-xs font-extrabold text-[#0e1b34] group-hover:text-[#1D9AE1] transition-colors">
              {item.name}
            </div>
            <div className="mt-0.5 text-[10px] font-mono text-[#6b7a99] uppercase font-bold">
              {item.category}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer reassurance banner */}
      <div className="mt-8 pt-6 border-t border-[#eef4fc] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6b7a99]">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4 text-[#1fb877]" />
          <span>Don&apos;t see your ERP/WMS? HiView rapidly delivers bespoke connectors tailored to your enterprise architecture.</span>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center gap-1.5 text-[#1D9AE1] hover:text-[#0e1b34] font-bold"
        >
          Request Integration Specs <ArrowRight className="h-3 w-3" />
        </Link>
      </div>
    </div>
  );
}
