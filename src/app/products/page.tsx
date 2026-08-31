"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import GlowCard from "@/components/GlowCard";
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
  Sparkles,
  Layers
} from "lucide-react";

export default function ProductsPage() {
  const productIcons: Record<string, any> = {
    edifai: Network,
    iqua: ThermometerSnowflake,
    fairmiles: Truck,
    mist: Boxes,
    "demand-forecasting": TrendingUp,
    wms: Warehouse,
    "po-tracker": Receipt
  };

  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      {/* Hero */}
      <section className="relative pt-12 pb-16 text-center">
        <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[750px] rounded-full bg-sky-500/15 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-950/40 px-4 py-1.5 text-xs font-semibold text-sky-300 backdrop-blur-md mb-6">
            <Layers className="h-3.5 w-3.5 text-sky-400" />
            <span>The HiView AI Product Suite</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-ink tracking-tight leading-[1.15]">
            Seven Specialized Engines.{" "}
            <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
              One Unified Control Tower.
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
            From self-healing B2B EDI transactions and cold-chain perishable visibility to multi-echelon safety stock balancing and order margin protection.
          </p>
        </div>
      </section>

      {/* Product List Grid */}
      <AnimatedSection className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((prod) => {
            const IconComponent = productIcons[prod.id] || Network;
            return (
              <GlowCard key={prod.id} className="group flex flex-col justify-between h-full p-8">
                <div>
                  {/* Product photo header with hover zoom */}
                  <div className="img-zoom relative -mx-8 -mt-8 mb-6 aspect-[21/9]">
                    <img
                      src={prod.image}
                      alt={`${prod.name} — ${prod.tagline}`}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-800 text-sky-400 border border-slate-300/10">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    {prod.badge && (
                      <span className="text-[10px] font-mono font-bold uppercase rounded-full bg-sky-950/80 px-3 py-1 text-sky-300 border border-sky-500/30">
                        {prod.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-ink">
                    {prod.name}
                  </h3>
                  <div className="mt-1 text-xs font-semibold text-sky-400">
                    {prod.tagline}
                  </div>

                  <p className="mt-3 text-xs leading-relaxed text-slate-300">
                    {prod.description}
                  </p>

                  <div className="mt-6 pt-5 border-t border-slate-300/5 space-y-2.5">
                    {prod.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="h-3.5 w-3.5 text-sky-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-300/10 flex items-center justify-between">
                  <div className="text-xs font-mono font-bold text-sky-400">
                    {prod.metrics[0]?.value} {prod.metrics[0]?.label}
                  </div>
                  <Link
                    href={prod.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-400 hover:text-sky-300 transition group"
                  >
                    <span>Product Specs</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </GlowCard>
            );
          })}
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-sky-500/30 bg-gradient-to-r from-sky-950/50 via-slate-950/80 to-amber-950/50 p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-ink">
            Need a Tailored Multi-Product Deployment?
          </h2>
          <p className="mt-3 text-sm text-slate-300 max-w-2xl mx-auto">
            Our solution architects will design a custom platform package suited for your specific enterprise supply chain footprint.
          </p>
          <div className="mt-6">
            <Link
              href="/demo"
              className="hover-shine inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-3 text-xs font-bold text-white shadow-lg"
            >
              <span>Schedule Custom Solution Review</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
