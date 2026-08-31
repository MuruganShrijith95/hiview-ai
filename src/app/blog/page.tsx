"use client";

import React from "react";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import GlowCard from "@/components/GlowCard";
import { 
  BookOpen, 
  Sparkles, 
  ArrowRight, 
  Clock, 
  Tag, 
  FileText, 
  TrendingUp, 
  Cpu 
} from "lucide-react";

interface Article {
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  author: string;
  featured?: boolean;
}

const ARTICLES: Article[] = [
  {
    title: "The Autonomous Control Tower: Why Passive Visibility Dashboards Are Dead",
    category: "AI & Strategy",
    readTime: "6 min read",
    date: "August 2026",
    excerpt: "Tracking dots on maps doesn't stop port demurrage. How next-generation AI platforms score risk across 150+ metrics and execute automated resolutions before disruptions cascade.",
    author: "Venkatesh Damodaran (CEO)",
    featured: true
  },
  {
    title: "Self-Healing EDI: How Neural Schema Mapping Eliminates 70% of B2B Supply Chain Ticketing",
    category: "EDI & Integration",
    readTime: "8 min read",
    date: "July 2026",
    excerpt: "A deep technical dive into how EDIFAI inspects ANSI X12 semantic payloads, catches syntax mismatches, and patches payloads in-flight with zero downstream ERP downtime.",
    author: "HiView Engineering Team"
  },
  {
    title: "Cold Chain Telematics: Predicting Thermal Degradation in Biologics Transit",
    category: "Cold Chain / Pharma",
    readTime: "5 min read",
    date: "June 2026",
    excerpt: "Combining multimodal IoT sensor telematics with vessel AIS queue modeling to achieve zero spoilage in pharmaceutical and fresh perishable logistics.",
    author: "IQUA Product Team"
  },
  {
    title: "Multi-Echelon Inventory Balancing: Unlocking Working Capital in Volatile Markets",
    category: "Inventory & Planning",
    readTime: "7 min read",
    date: "May 2026",
    excerpt: "Why static min/max buffer rules fail during supply shocks, and how dynamic lead-time variance algorithms protect order OTIF while freeing millions in cash.",
    author: "Supply Chain Research Group"
  }
];

export default function BlogPage() {
  const featuredArticle = ARTICLES[0];
  const otherArticles = ARTICLES.slice(1);

  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      {/* Hero */}
      <section className="relative pt-12 pb-16 text-center">
        <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[750px] rounded-full bg-sky-500/15 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-950/40 px-4 py-1.5 text-xs font-semibold text-sky-300 backdrop-blur-md mb-6">
            <BookOpen className="h-3.5 w-3.5 text-sky-400" />
            <span>Research & Industry Insights</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-ink tracking-tight leading-[1.15]">
            Supply Chain AI{" "}
            <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Whitepapers & Thought Leadership
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Deep technical architecture guides, operational research, and case studies on autonomous supply chain execution.
          </p>
        </div>
      </section>

      {/* Featured Whitepaper */}
      <AnimatedSection className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <GlowCard className="p-8 sm:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-sky-500/20 px-3 py-1 text-xs font-mono font-bold text-sky-300 border border-sky-500/30">
                  FEATURED WHITEPAPER
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                  <Clock className="h-3.5 w-3.5" /> {featuredArticle.readTime}
                </span>
                <span className="text-xs text-slate-500 font-mono">• {featuredArticle.date}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-ink leading-tight">
                {featuredArticle.title}
              </h2>

              <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
                {featuredArticle.excerpt}
              </p>

              <div className="text-xs text-sky-400 font-semibold pt-2">
                By {featuredArticle.author}
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-end">
              <Link
                href="/demo"
                className="hover-shine inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-3.5 text-xs font-bold text-white shadow-lg"
              >
                <span>Read Full Whitepaper</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </GlowCard>
      </AnimatedSection>

      {/* Articles Grid */}
      <AnimatedSection className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {otherArticles.map((art, idx) => (
            <GlowCard key={idx} className="p-6 flex flex-col justify-between h-full space-y-4">
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 pb-3 border-b border-slate-300/5 font-mono">
                  <span className="text-sky-400 font-semibold">{art.category}</span>
                  <span>{art.readTime}</span>
                </div>

                <h3 className="mt-4 text-lg font-bold text-ink leading-snug">
                  {art.title}
                </h3>

                <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                  {art.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-300/5 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-mono">{art.date}</span>
                <Link href="/demo" className="text-sky-400 hover:text-sky-300 font-bold flex items-center gap-1">
                  <span>Read</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </GlowCard>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}
