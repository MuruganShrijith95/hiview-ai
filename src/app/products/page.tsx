"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import GlowCard from "@/components/GlowCard";
import HeroBackgroundEffects from "@/components/HeroBackgroundEffects";
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
    <div className="space-y-12 sm:space-y-16 pb-16">
      {/* Hero */}
      <section className="relative pt-10 pb-12 text-center overflow-hidden">
        {/* Animated Network Stream & Floating Flank Cockpits */}
        <HeroBackgroundEffects variant="products" />

        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#cfe6ff] bg-[#e8f3ff] px-4 py-1.5 text-xs font-bold text-[#1D9AE1] shadow-sm mb-6">
            <Layers className="h-3.5 w-3.5 text-[#1D9AE1]" />
            <span>The HiView AI Product Suite</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0e1b34] tracking-tight leading-[1.15]">
            Seven Specialized Engines.{" "}
            <span className="bg-gradient-to-r from-[#1D9AE1] via-[#59b4ff] to-[#1D9AE1] bg-clip-text text-transparent">
              One Unified Control Tower.
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#547099] leading-relaxed max-w-3xl mx-auto">
            From self-healing B2B EDI transactions and cold-chain perishable visibility to multi-echelon safety stock balancing and order margin protection.
          </p>
        </div>
      </section>

      {/* Product List Grid */}
      <AnimatedSection className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PRODUCTS.map((prod) => {
            const IconComponent = productIcons[prod.id] || Network;
            return (
              <GlowCard key={prod.id} className="group flex flex-col justify-between h-full p-6 sm:p-7">
                <div>
                  {/* Product photo header with hover zoom */}
                  <div className="img-zoom relative -mx-7 -mt-7 mb-5 aspect-[16/9] overflow-hidden rounded-t-2xl border-b border-[#cfe6ff] bg-[#f8fafc]">
                    <img
                      src={prod.image}
                      alt={`${prod.name} — ${prod.tagline}`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3">
                      <span className="inline-flex items-center gap-1.5 rounded-md border border-[#cfe6ff] bg-white/95 px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-[#1D9AE1] shadow-sm backdrop-blur-md">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#1D9AE1] animate-pulse" />
                        {prod.badge || "AI ENGINE"}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e8f3ff] text-[#1D9AE1] border border-[#cfe6ff]">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#547099]">
                      ENTERPRISE
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-extrabold text-[#0e1b34] group-hover:text-[#1D9AE1] transition-colors">
                    {prod.name}
                  </h3>
                  <div className="mt-1 text-xs font-bold text-[#1D9AE1] font-mono">
                    {prod.tagline}
                  </div>

                  <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-[#547099]">
                    {prod.description}
                  </p>

                  <div className="mt-5 pt-4 border-t border-[#cfe6ff] space-y-2">
                    {prod.features.slice(0, 3).map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs font-medium text-[#0e1b34]">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#1fb877] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#cfe6ff] flex items-center justify-between">
                  <div className="text-xs font-mono font-bold text-[#1D9AE1] bg-[#e8f3ff] px-2.5 py-1 rounded-lg border border-[#cfe6ff]">
                    {prod.metrics[0]?.value}
                  </div>
                  <Link
                    href={prod.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1D9AE1] hover:text-[#0e1b34] transition group/btn"
                  >
                    <span>Product Specs</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </GlowCard>
            );
          })}
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-[#cfe6ff] bg-gradient-to-b from-[#eaf4ff] via-[#ffffff] to-[#eef6ff] p-8 sm:p-14 text-center shadow-[0_24px_48px_-18px_rgba(23,72,143,0.18)]">
          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0e1b34]">
              Need a Tailored Multi-Product Deployment?
            </h2>
            <p className="text-sm sm:text-base text-[#547099] max-w-2xl mx-auto leading-relaxed">
              Our solution architects will design a custom platform package suited for your specific enterprise supply chain footprint.
            </p>
            <div className="pt-2">
              <Link
                href="/demo"
                className="hover-shine inline-flex items-center gap-2 rounded-xl bg-gradient-to-b from-[#7CC8F1] to-[#1D9AE1] px-7 py-3.5 text-xs font-bold text-white shadow-[0_10px_24px_-8px_rgba(29,154,225,0.55)] hover:shadow-[0_18px_32px_-10px_rgba(29,154,225,0.7)] transition"
              >
                <span>Schedule Custom Solution Review</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
