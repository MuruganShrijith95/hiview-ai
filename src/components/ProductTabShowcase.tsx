"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PRODUCTS } from "@/lib/constants";
import { 
  Network, 
  ThermometerSnowflake, 
  Truck, 
  Boxes, 
  TrendingUp, 
  Warehouse, 
  Receipt,
  ArrowRight,
  CheckCircle2,
  Sparkles
} from "lucide-react";
import Link from "next/link";

const productIcons: Record<string, React.ElementType> = {
  edifai: Network,
  iqua: ThermometerSnowflake,
  fairmiles: Truck,
  mist: Boxes,
  "demand-forecasting": TrendingUp,
  wms: Warehouse,
  "po-tracker": Receipt
};

export default function ProductTabShowcase() {
  const [activeId, setActiveId] = useState<string>(PRODUCTS[0].id);
  const activeProduct = PRODUCTS.find((p) => p.id === activeId) || PRODUCTS[0];
  const ActiveIcon = productIcons[activeProduct.id] || Network;

  return (
    <div className="rounded-3xl border border-[#cfe6ff] bg-gradient-to-b from-[#f8fbff] to-white p-6 sm:p-8 md:p-10 shadow-[0_12px_36px_-18px_rgba(29,154,225,0.14)]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Side: Product Selector Tabs */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-2">
          <div className="space-y-2">
            {PRODUCTS.map((prod) => {
              const isSelected = prod.id === activeId;
              const Icon = productIcons[prod.id] || Network;
              return (
                <button
                  key={prod.id}
                  onClick={() => setActiveId(prod.id)}
                  onMouseEnter={() => setActiveId(prod.id)}
                  className={`w-full text-left p-3.5 sm:p-4 rounded-2xl transition-all duration-200 flex items-center justify-between group cursor-pointer ${
                    isSelected
                      ? "bg-[#e0efff] border-2 border-[#1D9AE1] shadow-md shadow-sky-500/15 scale-[1.01]"
                      : "bg-[#edf5fd] border border-[#cfe6ff] hover:bg-[#e4f0fc] hover:border-[#b8dcff]"
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors ${
                      isSelected
                        ? "bg-[#1D9AE1] text-white"
                        : "bg-[#dcedfc] text-[#1D9AE1] group-hover:bg-[#1D9AE1] group-hover:text-white"
                    }`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="truncate">
                      <div className="flex items-center gap-2">
                        <span className={`text-sm font-extrabold ${isSelected ? "text-[#0e1b34]" : "text-[#1e3256]"}`}>
                          {prod.name}
                        </span>
                        <span className="hidden sm:inline-block rounded-full bg-[#e8f3ff] px-2 py-0.5 text-[9px] font-mono font-bold text-[#1D9AE1]">
                          {prod.badge}
                        </span>
                      </div>
                      <p className="text-xs text-[#547099] truncate mt-0.5">
                        {prod.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 ml-2">
                    <span className={`text-xs font-mono font-bold ${isSelected ? "text-[#1D9AE1]" : "text-[#547099]"}`}>
                      {prod.metrics[0]?.value}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-[#cfe6ff] flex items-center justify-between text-xs text-[#547099]">
            <span className="flex items-center gap-1.5 font-medium">
              <Sparkles className="h-3.5 w-3.5 text-[#1D9AE1]" />
              Deploy standalone or unified
            </span>
            <Link href="/products" className="text-[#1D9AE1] font-bold hover:underline flex items-center gap-1">
              All 7 Products <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>

        {/* Right Side: Active Product Dynamic Cockpit */}
        <div className="lg:col-span-7 flex flex-col">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProduct.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="flex-1 flex flex-col justify-between rounded-3xl border-2 border-[#cfe6ff] bg-gradient-to-b from-[#f4f9ff] via-[#f8fbff] to-white p-6 sm:p-7 shadow-sm"
            >
              <div>
                {/* Product Image Frame */}
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-[#cfe6ff] bg-[#f8fafc]">
                  <img
                    src={activeProduct.image}
                    alt={activeProduct.name}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#cfe6ff] bg-white/95 px-3 py-1 text-xs font-mono font-bold text-[#1D9AE1] shadow-sm backdrop-blur-md">
                      <span className="h-2 w-2 rounded-full bg-[#1D9AE1] animate-pulse" />
                      {activeProduct.badge}
                    </span>
                  </div>
                </div>

                {/* Title & Tagline */}
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-extrabold text-[#0e1b34]">
                      {activeProduct.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-bold text-[#1D9AE1] font-mono mt-0.5">
                      {activeProduct.tagline}
                    </p>
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e8f3ff] text-[#1D9AE1] border border-[#cfe6ff] shrink-0">
                    <ActiveIcon className="h-6 w-6" />
                  </div>
                </div>

                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#547099]">
                  {activeProduct.description}
                </p>

                {/* Key Capabilities with Blue Box Styling */}
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-3 border-t border-[#cfe6ff]">
                  {activeProduct.features.slice(0, 4).map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 rounded-2xl border border-[#cfe6ff] bg-[#eef6ff] p-3.5 text-xs font-bold text-[#0e1b34] shadow-sm hover:bg-[#e4f0fc] hover:border-[#b8dcff] transition-colors">
                      <CheckCircle2 className="h-4 w-4 text-[#1fb877] shrink-0 mt-0.5" />
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metrics Strip & Deep Dive CTA */}
              <div className="mt-6 pt-4 border-t border-[#cfe6ff] flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  {activeProduct.metrics.map((m, idx) => (
                    <div key={idx} className="rounded-lg bg-[#e8f3ff] px-3 py-1.5 border border-[#cfe6ff]">
                      <div className="text-xs font-mono font-extrabold text-[#1D9AE1]">{m.value}</div>
                      <div className="text-[10px] text-[#6b7a99] font-medium">{m.label}</div>
                    </div>
                  ))}
                </div>

                <Link
                  href={activeProduct.href}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-b from-[#7CC8F1] to-[#1D9AE1] px-5 py-2.5 text-xs font-bold text-white shadow-[0_8px_20px_-6px_rgba(29,154,225,0.55)] hover:shadow-[0_12px_24px_-6px_rgba(29,154,225,0.7)] transition"
                >
                  <span>Explore {activeProduct.name}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
