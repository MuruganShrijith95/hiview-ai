"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import HiViewLogo from "@/components/HiViewLogo";
import { PRODUCTS, INDUSTRIES } from "@/lib/constants";
import { 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight, 
  Sparkles, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  Zap, 
  Network,
  Boxes,
  Truck,
  ThermometerSnowflake,
  TrendingUp,
  Warehouse,
  Receipt
} from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  }, [pathname]);

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/92 backdrop-blur-md border-b border-[#e4edf8] py-2.5 shadow-[0_16px_36px_-22px_rgba(16,42,86,0.15)]"
          : "bg-transparent py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <HiViewLogo size="md" />

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("products")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1.5 px-3 py-2 text-[13.5px] font-semibold text-[#0f1420] hover:text-[#1D9AE1] transition">
                <span>Products</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === "products" ? "rotate-180 text-[#1D9AE1]" : ""}`} />
              </button>

              <AnimatePresence>
                {activeDropdown === "products" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[680px] rounded-2xl border border-[#e4edf8] bg-white p-5 shadow-[0_24px_48px_-12px_rgba(16,42,86,0.18)] grid grid-cols-2 gap-3"
                  >
                    {PRODUCTS.map((prod) => {
                      const IconComponent = productIcons[prod.id] || Network;
                      return (
                        <Link
                          key={prod.id}
                          href={prod.href}
                          className="flex items-start gap-3 rounded-xl p-3 hover:bg-[#f4f9ff] transition border border-transparent hover:border-[#cfe6ff] group"
                        >
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#e8f3ff] text-[#1D9AE1] group-hover:bg-[#1D9AE1] group-hover:text-white transition-colors">
                            <IconComponent className="h-4 w-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-bold text-[#0e1b34] group-hover:text-[#1D9AE1] transition-colors">
                                {prod.name}
                              </span>
                              {prod.badge && (
                                <span className="text-[9px] font-mono font-semibold rounded bg-[#e8f3ff] px-1.5 py-0.5 text-[#1D9AE1] border border-[#cfe6ff]">
                                  {prod.badge}
                                </span>
                              )}
                            </div>
                            <p className="mt-0.5 text-[11px] text-[#6b7a99] line-clamp-1">
                              {prod.tagline}
                            </p>
                          </div>
                        </Link>
                      );
                    })}

                    <div className="col-span-2 mt-2 pt-3 border-t border-[#eef4fc] flex items-center justify-between text-xs text-[#6b7a99] px-2">
                      <span className="flex items-center gap-1.5">
                        <Sparkles className="h-3.5 w-3.5 text-[#1D9AE1]" />
                        All products unified by the Autonomous Control Tower
                      </span>
                      <Link href="/products" className="text-[#1D9AE1] hover:text-[#0e1b34] font-bold flex items-center gap-1">
                        View Product Matrix <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Platform */}
            <Link
              href="/platform"
              className={`px-3 py-2 text-[13.5px] font-semibold transition ${
                pathname === "/platform" ? "text-[#1D9AE1]" : "text-[#0f1420] hover:text-[#1D9AE1]"
              }`}
            >
              Platform
            </Link>

            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("solutions")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1.5 px-3 py-2 text-[13.5px] font-semibold text-[#0f1420] hover:text-[#1D9AE1] transition">
                <span>Solutions</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === "solutions" ? "rotate-180 text-[#1D9AE1]" : ""}`} />
              </button>

              <AnimatePresence>
                {activeDropdown === "solutions" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[520px] rounded-2xl border border-[#e4edf8] bg-white p-4 shadow-[0_24px_48px_-12px_rgba(16,42,86,0.18)] space-y-2"
                  >
                    {INDUSTRIES.map((ind) => (
                      <Link
                        key={ind.id}
                        href="/solutions"
                        className="flex items-start gap-3 rounded-xl p-2.5 hover:bg-[#f4f9ff] transition border border-transparent hover:border-[#cfe6ff] group"
                      >
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-[#0e1b34] group-hover:text-[#1D9AE1] transition-colors">
                              {ind.name}
                            </span>
                            <span className="text-[10px] font-mono text-[#1D9AE1] font-semibold">
                              {ind.impact}
                            </span>
                          </div>
                          <p className="mt-0.5 text-[11px] text-[#6b7a99]">
                            {ind.tagline}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Company Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("company")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1.5 px-3 py-2 text-[13.5px] font-semibold text-[#0f1420] hover:text-[#1D9AE1] transition">
                <span>Company</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === "company" ? "rotate-180 text-[#1D9AE1]" : ""}`} />
              </button>

              <AnimatePresence>
                {activeDropdown === "company" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                    className="absolute right-0 top-full mt-2 w-56 rounded-2xl border border-[#e4edf8] bg-white p-2 shadow-[0_24px_48px_-12px_rgba(16,42,86,0.18)] space-y-1"
                  >
                    <Link
                      href="/about"
                      className="block rounded-xl px-3 py-2 text-xs font-semibold text-[#33456b] hover:bg-[#f4f9ff] hover:text-[#1D9AE1] transition"
                    >
                      About Us & Leadership
                    </Link>
                    <Link
                      href="/careers"
                      className="flex items-center justify-between rounded-xl px-3 py-2 text-xs font-semibold text-[#33456b] hover:bg-[#f4f9ff] hover:text-[#1D9AE1] transition"
                    >
                      <span>Careers</span>
                      <span className="rounded bg-[#e8f3ff] px-1.5 py-0.5 text-[9px] font-mono text-[#1D9AE1] border border-[#cfe6ff]">
                        Hiring
                      </span>
                    </Link>
                    <Link
                      href="/blog"
                      className="block rounded-xl px-3 py-2 text-xs font-semibold text-[#33456b] hover:bg-[#f4f9ff] hover:text-[#1D9AE1] transition"
                    >
                      Insights & Whitepapers
                    </Link>
                    <Link
                      href="/contact"
                      className="block rounded-xl px-3 py-2 text-xs font-semibold text-[#33456b] hover:bg-[#f4f9ff] hover:text-[#1D9AE1] transition"
                    >
                      Global Offices & Contact
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/contact"
              className={`px-3 py-2 text-[13.5px] font-semibold transition ${
                pathname === "/contact" ? "text-[#1D9AE1]" : "text-[#0f1420] hover:text-[#1D9AE1]"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Right CTA Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/demo"
              className="hover-shine inline-flex items-center gap-2 rounded-lg bg-gradient-to-b from-[#7CC8F1] to-[#1D9AE1] px-4 py-2 text-xs font-bold text-white shadow-[0_10px_24px_-8px_rgba(29,154,225,0.55),inset_0_1px_0_rgba(255,255,255,0.45)] hover:shadow-[0_18px_32px_-10px_rgba(29,154,225,0.7)] hover:-translate-y-0.5 transition"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>Live Demo</span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-[#e4edf8] bg-white px-4 py-2 text-xs font-semibold text-[#0f1420] hover:text-[#1D9AE1] hover:border-[#cfe6ff] shadow-sm transition"
            >
              <span>Get in Touch</span>
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#0e1b34] hover:text-[#1D9AE1] border border-[#e4edf8] shadow-sm"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-b border-[#e4edf8] bg-white/98 backdrop-blur-2xl overflow-hidden shadow-xl"
          >
            <div className="px-5 py-6 space-y-4 max-h-[80vh] overflow-y-auto">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#6b7a99]">
                Products
              </div>
              <div className="grid grid-cols-1 gap-2 pl-2">
                {PRODUCTS.map((p) => (
                  <Link
                    key={p.id}
                    href={p.href}
                    className="flex items-center justify-between py-1 text-sm font-semibold text-[#0e1b34] hover:text-[#1D9AE1]"
                  >
                    <span>{p.name}</span>
                    <span className="text-xs text-[#1D9AE1] font-mono">{p.badge}</span>
                  </Link>
                ))}
              </div>

              <div className="pt-2 border-t border-[#eef4fc]">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#6b7a99] mb-2">
                  Navigation
                </div>
                <div className="space-y-2 pl-2">
                  <Link href="/platform" className="block text-sm font-semibold text-[#0e1b34] hover:text-[#1D9AE1]">Platform</Link>
                  <Link href="/solutions" className="block text-sm font-semibold text-[#0e1b34] hover:text-[#1D9AE1]">Solutions</Link>
                  <Link href="/about" className="block text-sm font-semibold text-[#0e1b34] hover:text-[#1D9AE1]">About & Leadership</Link>
                  <Link href="/careers" className="block text-sm font-semibold text-[#0e1b34] hover:text-[#1D9AE1]">Careers</Link>
                  <Link href="/blog" className="block text-sm font-semibold text-[#0e1b34] hover:text-[#1D9AE1]">Blog</Link>
                  <Link href="/contact" className="block text-sm font-semibold text-[#0e1b34] hover:text-[#1D9AE1]">Contact</Link>
                </div>
              </div>

              <div className="pt-4 border-t border-[#eef4fc] space-y-2">
                <Link
                  href="/demo"
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-[#7CC8F1] to-[#1D9AE1] py-3 text-xs font-bold text-white shadow-[0_10px_24px_-8px_rgba(29,154,225,0.55)]"
                >
                  Book Live Demo
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
