"use client";

import React from "react";
import Link from "next/link";
import HiViewLogo from "@/components/HiViewLogo";
import { PRODUCTS, COMPANY_INFO, INDUSTRIES } from "@/lib/constants";
import { 
  ShieldCheck, 
  Award, 
  MapPin, 
  ArrowUpRight 
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-300/10 bg-slate-950/95 text-slate-400 overflow-hidden">
      {/* Subtle top ambient glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-64 w-[600px] rounded-full bg-sky-500/10 blur-3xl" />

      {/* Main Multi-Column Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Recognition Column */}
          <div className="lg:col-span-4 space-y-4">
            <HiViewLogo size="lg" />

            <p className="text-xs leading-relaxed text-slate-400">
              The autonomous supply chain platform that <span className="text-ink font-semibold">scores, then acts</span>. Turning fragmented logistics signals into predictive decisions across suppliers, carriers, and distribution centers.
            </p>

            {/* Recognition Badge */}
            <div className="rounded-xl border border-sky-500/30 bg-sky-950/30 p-3 text-xs text-slate-300 flex items-start gap-2.5">
              <Award className="h-4 w-4 text-sky-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-ink">TAG 2026 Top 40</strong> Most Innovative Technology Company in Georgia.
              </div>
            </div>

            {/* Compliance Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-2 text-[10px] font-mono text-slate-500">
              <span className="rounded border border-slate-300/10 px-2 py-1 bg-slate-900/60 flex items-center gap-1">
                <ShieldCheck className="h-3 w-3 text-sky-400" /> SOC 2 TYPE II
              </span>
              <span className="rounded border border-slate-300/10 px-2 py-1 bg-slate-900/60">
                ISO 27001
              </span>
              <span className="rounded border border-slate-300/10 px-2 py-1 bg-slate-900/60">
                GxP / FDA 21 CFR
              </span>
            </div>
          </div>

          {/* Products Column */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-ink">
              Platform Modules
            </div>
            <ul className="space-y-2 text-xs">
              {PRODUCTS.map((prod) => (
                <li key={prod.id}>
                  <Link
                    href={prod.href}
                    className="hover:text-sky-300 transition flex items-center justify-between group"
                  >
                    <span>{prod.name}</span>
                    <span className="text-[10px] text-slate-600 group-hover:text-sky-400 font-mono">
                      {prod.badge}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Column */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-ink">
              Industry Solutions
            </div>
            <ul className="space-y-2 text-xs">
              {INDUSTRIES.map((ind) => (
                <li key={ind.id}>
                  <Link href="/solutions" className="hover:text-sky-300 transition">
                    {ind.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-slate-300/5">
                <Link href="/platform" className="hover:text-sky-300 transition flex items-center gap-1 text-sky-400 font-semibold">
                  Autonomous Control Tower <ArrowUpRight className="h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-ink">
              Company
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about" className="hover:text-sky-300 transition">
                  About Us & Team
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-sky-300 transition flex items-center justify-between">
                  <span>Careers</span>
                  <span className="rounded bg-sky-950 px-1.5 py-0.5 text-[9px] font-mono text-sky-400">
                    We&apos;re Hiring
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-sky-300 transition">
                  Blog & Whitepapers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-sky-300 transition">
                  Global Offices
                </Link>
              </li>
              <li>
                <Link href="/demo" className="hover:text-sky-300 transition text-sky-400 font-semibold">
                  Request Live Demo
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Global Offices Strip */}
        <div className="mt-12 pt-8 border-t border-slate-300/10">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-4 flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 text-sky-400" />
            Global Hubs & Footprint
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            {COMPANY_INFO.offices.map((office, idx) => (
              <div key={idx} className="rounded-xl border border-slate-300/5 bg-slate-900/40 p-3.5">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-ink">{office.city}</span>
                  <span className="text-[9px] font-mono rounded bg-slate-800 px-1.5 py-0.5 text-sky-400">
                    {office.badge}
                  </span>
                </div>
                <div className="mt-1 text-[11px] text-slate-400 line-clamp-2">
                  {office.address}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-slate-300/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-sky-400 animate-pulse" />
            <span className="font-mono text-slate-400">All Systems Operational • 99.99% SLA Uptime</span>
          </div>

          <div className="text-center sm:text-right">
            &copy; {new Date().getFullYear()} HiView AI, Inc. All rights reserved. Architected for intelligent supply chains.
          </div>
        </div>
      </div>
    </footer>
  );
}
