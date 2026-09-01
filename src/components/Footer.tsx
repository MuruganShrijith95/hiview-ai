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
    <footer className="relative border-t border-[#e4edf8] bg-[#f8fafc] text-[#6b7a99] overflow-hidden">
      {/* Subtle top ambient glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-64 w-[600px] rounded-full bg-[#1D9AE1]/5 blur-3xl" />

      {/* Main Multi-Column Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Recognition Column */}
          <div className="lg:col-span-4 space-y-4">
            <HiViewLogo size="lg" />

            <p className="text-xs leading-relaxed text-[#6b7a99]">
              The autonomous supply chain platform that <span className="text-[#0e1b34] font-bold">scores, then acts</span>. Turning fragmented logistics signals into predictive decisions across suppliers, carriers, and distribution centers.
            </p>

            {/* Recognition Badge */}
            <div className="rounded-xl border border-[#cfe6ff] bg-white p-3.5 text-xs text-[#33456b] flex items-start gap-2.5 shadow-sm">
              <Award className="h-4 w-4 text-[#1D9AE1] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#0e1b34]">TAG 2026 Top 40</strong> Most Innovative Technology Company in Georgia.
              </div>
            </div>

            {/* Compliance Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-[10px] font-mono text-[#6b7a99]">
              <span className="rounded-md border border-[#e4edf8] px-2.5 py-1 bg-white flex items-center gap-1 font-semibold text-[#33456b] shadow-xs">
                <ShieldCheck className="h-3 w-3 text-[#1D9AE1]" /> SOC 2 TYPE II
              </span>
              <span className="rounded-md border border-[#e4edf8] px-2.5 py-1 bg-white font-semibold text-[#33456b] shadow-xs">
                ISO 27001
              </span>
              <span className="rounded-md border border-[#e4edf8] px-2.5 py-1 bg-white font-semibold text-[#33456b] shadow-xs">
                GxP / FDA 21 CFR
              </span>
            </div>
          </div>

          {/* Products Column */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#0e1b34]">
              Platform Modules
            </div>
            <ul className="space-y-2 text-xs">
              {PRODUCTS.map((prod) => (
                <li key={prod.id}>
                  <Link
                    href={prod.href}
                    className="hover:text-[#1D9AE1] transition flex items-center justify-between group"
                  >
                    <span className="font-medium text-[#33456b] group-hover:text-[#1D9AE1]">{prod.name}</span>
                    <span className="text-[10px] text-[#6b7a99] group-hover:text-[#1D9AE1] font-mono">
                      {prod.badge}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Column */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#0e1b34]">
              Industry Solutions
            </div>
            <ul className="space-y-2 text-xs">
              {INDUSTRIES.map((ind) => (
                <li key={ind.id}>
                  <Link href="/solutions" className="hover:text-[#1D9AE1] transition text-[#33456b]">
                    {ind.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-[#eef4fc]">
                <Link href="/platform" className="hover:text-[#0e1b34] transition flex items-center gap-1 text-[#1D9AE1] font-bold">
                  Autonomous Control Tower <ArrowUpRight className="h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#0e1b34]">
              Company
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about" className="hover:text-[#1D9AE1] transition text-[#33456b]">
                  About Us & Team
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-[#1D9AE1] transition flex items-center justify-between text-[#33456b]">
                  <span>Careers</span>
                  <span className="rounded bg-[#e8f3ff] px-1.5 py-0.5 text-[9px] font-mono text-[#1D9AE1] border border-[#cfe6ff] font-bold">
                    Hiring
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#1D9AE1] transition text-[#33456b]">
                  Blog & Whitepapers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#1D9AE1] transition text-[#33456b]">
                  Global Offices
                </Link>
              </li>
              <li>
                <Link href="/demo" className="hover:text-[#0e1b34] transition text-[#1D9AE1] font-bold">
                  Request Live Demo
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Global Offices Strip */}
        <div className="mt-12 pt-8 border-t border-[#e4edf8]">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#0e1b34] mb-4 flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 text-[#1D9AE1]" />
            Global Hubs & Footprint
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            {COMPANY_INFO.offices.map((office, idx) => (
              <div key={idx} className="rounded-xl border border-[#e4edf8] bg-white p-3.5 shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[#0e1b34]">{office.city}</span>
                  <span className="text-[9px] font-mono rounded bg-[#e8f3ff] px-1.5 py-0.5 text-[#1D9AE1] border border-[#cfe6ff] font-semibold">
                    {office.badge}
                  </span>
                </div>
                <div className="mt-1 text-[11px] text-[#6b7a99] line-clamp-2">
                  {office.address}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-[#e4edf8] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6b7a99]">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-[#1fb877] animate-pulse" />
            <span className="font-mono text-[#33456b]">All Systems Operational • 99.99% SLA Uptime</span>
          </div>

          <div className="text-center sm:text-right">
            &copy; {new Date().getFullYear()} HiView AI, Inc. All rights reserved. Architected for intelligent supply chains.
          </div>
        </div>
      </div>
    </footer>
  );
}
