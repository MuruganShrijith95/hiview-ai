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
          ? "bg-slate-950/80 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl"
          : "bg-transparent py-5"
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
              <button className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-slate-300 hover:text-white transition">
                <span>Products</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === "products" ? "rotate-180 text-emerald-400" : ""}`} />
              </button>

              <AnimatePresence>
                {activeDropdown === "products" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[680px] rounded-2xl border border-white/10 bg-slate-950/95 p-5 shadow-2xl backdrop-blur-2xl grid grid-cols-2 gap-3"
                  >
                    {PRODUCTS.map((prod) => {
                      const IconComponent = productIcons[prod.id] || Network;
                      return (
                        <Link
                          key={prod.id}
                          href={prod.href}
                          className="flex items-start gap-3 rounded-xl p-3 hover:bg-slate-900 transition border border-transparent hover:border-white/5 group"
                        >
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-850 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                            <IconComponent className="h-4 w-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-bold text-white group-hover:text-emerald-300 transition-colors">
                                {prod.name}
                              </span>
                              {prod.badge && (
                                <span className="text-[9px] font-mono font-semibold rounded bg-emerald-950/60 px-1.5 py-0.5 text-emerald-400 border border-emerald-500/20">
                                  {prod.badge}
                                </span>
                              )}
                            </div>
                            <p className="mt-0.5 text-[11px] text-slate-400 line-clamp-1">
                              {prod.tagline}
                            </p>
                          </div>
                        </Link>
                      );
                    })}

                    <div className="col-span-2 mt-2 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 px-2">
                      <span className="flex items-center gap-1.5">
                        <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
                        All products unified by the Autonomous Control Tower
                      </span>
                      <Link href="/products" className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1">
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
              className={`link-underline px-3 py-2 text-sm font-medium transition ${
                pathname === "/platform" ? "text-emerald-400" : "text-slate-300 hover:text-white"
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
              <button className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-slate-300 hover:text-white transition">
                <span>Solutions</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === "solutions" ? "rotate-180 text-emerald-400" : ""}`} />
              </button>

              <AnimatePresence>
                {activeDropdown === "solutions" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[520px] rounded-2xl border border-white/10 bg-slate-950/95 p-4 shadow-2xl backdrop-blur-2xl space-y-2"
                  >
                    {INDUSTRIES.map((ind) => (
                      <Link
                        key={ind.id}
                        href="/solutions"
                        className="flex items-start gap-3 rounded-xl p-2.5 hover:bg-slate-900 transition border border-transparent hover:border-white/5 group"
                      >
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-white group-hover:text-emerald-300 transition-colors">
                              {ind.name}
                            </span>
                            <span className="text-[10px] font-mono text-emerald-400 font-semibold">
                              {ind.impact}
                            </span>
                          </div>
                          <p className="mt-0.5 text-[11px] text-slate-400">
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
              <button className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-slate-300 hover:text-white transition">
                <span>Company</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === "company" ? "rotate-180 text-emerald-400" : ""}`} />
              </button>

              <AnimatePresence>
                {activeDropdown === "company" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                    className="absolute right-0 top-full mt-2 w-56 rounded-2xl border border-white/10 bg-slate-950/95 p-2 shadow-2xl backdrop-blur-2xl space-y-1"
                  >
                    <Link
                      href="/about"
                      className="block rounded-xl px-3 py-2 text-xs font-semibold text-slate-300 hover:bg-slate-900 hover:text-white transition"
                    >
                      About Us & Leadership
                    </Link>
                    <Link
                      href="/careers"
                      className="flex items-center justify-between rounded-xl px-3 py-2 text-xs font-semibold text-slate-300 hover:bg-slate-900 hover:text-white transition"
                    >
                      <span>Careers</span>
                      <span className="rounded bg-emerald-950 px-1.5 py-0.5 text-[9px] font-mono text-emerald-400 border border-emerald-500/20">
                        Hiring
                      </span>
                    </Link>
                    <Link
                      href="/blog"
                      className="block rounded-xl px-3 py-2 text-xs font-semibold text-slate-300 hover:bg-slate-900 hover:text-white transition"
                    >
                      Insights & Whitepapers
                    </Link>
                    <Link
                      href="/contact"
                      className="block rounded-xl px-3 py-2 text-xs font-semibold text-slate-300 hover:bg-slate-900 hover:text-white transition"
                    >
                      Global Offices & Contact
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/contact"
              className={`link-underline px-3 py-2 text-sm font-medium transition ${
                pathname === "/contact" ? "text-emerald-400" : "text-slate-300 hover:text-white"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Right CTA Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/40 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-amber-500/10 px-4 py-2 text-xs font-bold text-emerald-300 hover:border-emerald-400 hover:text-white transition shadow-lg shadow-emerald-500/10"
            >
              <span>Explore Sandbox</span>
            </Link>
            <Link
              href="/demo"
              className="hover-shine inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 px-4 py-2 text-xs font-bold text-white shadow-lg shadow-emerald-500/25 hover:from-emerald-400 hover:to-teal-500 transition"
            >
              <span>Book Live Demo</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-slate-300 hover:text-white border border-white/10"
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
            className="lg:hidden border-b border-white/10 bg-slate-950/95 backdrop-blur-2xl overflow-hidden"
          >
            <div className="px-5 py-6 space-y-4 max-h-[80vh] overflow-y-auto">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                Products
              </div>
              <div className="grid grid-cols-1 gap-2 pl-2">
                {PRODUCTS.map((p) => (
                  <Link
                    key={p.id}
                    href={p.href}
                    className="flex items-center justify-between py-1 text-sm font-medium text-slate-200"
                  >
                    <span>{p.name}</span>
                    <span className="text-xs text-slate-500">{p.badge}</span>
                  </Link>
                ))}
              </div>

              <div className="pt-2 border-t border-white/10">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Navigation
                </div>
                <div className="space-y-2 pl-2">
                  <Link href="/platform" className="block text-sm font-medium text-slate-200">Platform</Link>
                  <Link href="/solutions" className="block text-sm font-medium text-slate-200">Solutions</Link>
                  <Link href="/about" className="block text-sm font-medium text-slate-200">About & Leadership</Link>
                  <Link href="/careers" className="block text-sm font-medium text-slate-200">Careers</Link>
                  <Link href="/blog" className="block text-sm font-medium text-slate-200">Blog</Link>
                  <Link href="/contact" className="block text-sm font-medium text-slate-200">Contact</Link>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-2">
                <Link
                  href="/demo"
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 py-2.5 text-xs font-bold text-white shadow-lg"
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
