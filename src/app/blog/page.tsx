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

import HeroBackgroundEffects from "@/components/HeroBackgroundEffects";

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
    <div className="space-y-12 sm:space-y-16 pb-16">
      {/* Hero */}
      <section className="relative pt-10 pb-12 text-center overflow-hidden">
        {/* Animated Network Stream & Floating Flank Cockpits */}
        <HeroBackgroundEffects variant="blog" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#cfe6ff] bg-[#e8f3ff] px-4 py-1.5 text-xs font-bold text-[#1D9AE1] shadow-sm mb-6">
            <BookOpen className="h-3.5 w-3.5 text-[#1D9AE1]" />
            <span>Research & Industry Insights</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0e1b34] tracking-tight leading-[1.15]">
            Supply Chain AI{" "}
            <span className="bg-gradient-to-r from-[#1D9AE1] via-[#59b4ff] to-[#1D9AE1] bg-clip-text text-transparent">
              Whitepapers & Thought Leadership
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#547099] leading-relaxed max-w-2xl mx-auto">
            Deep technical architecture guides, operational research, and case studies on autonomous supply chain execution.
          </p>
        </div>
      </section>

      {/* Featured Whitepaper */}
      <AnimatedSection className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <GlowCard className="p-7 sm:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-[#e8f3ff] px-3.5 py-1 text-xs font-mono font-bold text-[#1D9AE1] border border-[#cfe6ff]">
                  FEATURED WHITEPAPER
                </span>
                <span className="text-xs text-[#547099] flex items-center gap-1 font-mono font-medium">
                  <Clock className="h-3.5 w-3.5 text-[#1D9AE1]" /> {featuredArticle.readTime}
                </span>
                <span className="text-xs text-[#547099] font-mono">• {featuredArticle.date}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0e1b34] leading-tight">
                {featuredArticle.title}
              </h2>

              <p className="text-sm text-[#547099] leading-relaxed max-w-2xl">
                {featuredArticle.excerpt}
              </p>

              <div className="text-xs text-[#1D9AE1] font-bold pt-2">
                By {featuredArticle.author}
              </div>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <Link
                href="/demo"
                className="hover-shine inline-flex items-center gap-2 rounded-xl bg-gradient-to-b from-[#7CC8F1] to-[#1D9AE1] px-6 py-3.5 text-xs font-bold text-white shadow-[0_10px_24px_-8px_rgba(29,154,225,0.55)] hover:shadow-[0_18px_32px_-10px_rgba(29,154,225,0.7)] transition"
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {otherArticles.map((art, idx) => (
            <GlowCard key={idx} className="p-6 flex flex-col justify-between h-full space-y-4">
              <div>
                <div className="flex items-center justify-between text-xs text-[#547099] pb-3 border-b border-[#cfe6ff] font-mono">
                  <span className="text-[#1D9AE1] font-bold">{art.category}</span>
                  <span>{art.readTime}</span>
                </div>

                <h3 className="mt-4 text-lg font-extrabold text-[#0e1b34] leading-snug">
                  {art.title}
                </h3>

                <p className="mt-2.5 text-xs sm:text-sm text-[#547099] leading-relaxed">
                  {art.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-[#cfe6ff] flex items-center justify-between text-xs">
                <span className="text-[#547099] font-mono">{art.date}</span>
                <Link href="/demo" className="text-[#1D9AE1] hover:text-[#0e1b34] font-bold flex items-center gap-1">
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
