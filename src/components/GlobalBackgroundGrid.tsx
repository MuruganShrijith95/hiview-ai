"use client";

import React from "react";
import { motion } from "framer-motion";

export default function GlobalBackgroundGrid() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* 1. Global Ambient Radial Aurora Orbs */}
      <div 
        className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-[#7CC8F1]/20 via-[#1D9AE1]/15 to-transparent blur-3xl opacity-70 animate-pulse" 
        style={{ animationDuration: "8s" }}
      />
      <div 
        className="absolute top-1/4 -right-40 h-[700px] w-[700px] rounded-full bg-gradient-to-bl from-[#1D9AE1]/15 via-[#7CC8F1]/10 to-transparent blur-3xl opacity-60 animate-pulse"
        style={{ animationDuration: "12s" }}
      />
      <div 
        className="absolute top-2/3 left-1/3 -translate-x-1/2 h-[800px] w-[900px] rounded-full bg-gradient-to-tr from-[#e0efff]/60 via-[#ebf5ff]/40 to-transparent blur-3xl opacity-50"
      />

      {/* 2. Micro Dot-Matrix Supply Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage: `radial-gradient(#1D9AE1 1px, transparent 1px)`,
          backgroundSize: "28px 28px"
        }}
      />

      {/* 3. Subtle Animated SVG Curved Network Stream Lines */}
      <svg
        className="absolute inset-0 h-full w-full opacity-40"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="globalLineGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1D9AE1" stopOpacity="0.0" />
            <stop offset="30%" stopColor="#1D9AE1" stopOpacity="0.35" />
            <stop offset="70%" stopColor="#7CC8F1" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#1D9AE1" stopOpacity="0.0" />
          </linearGradient>
          <linearGradient id="globalLineGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#7CC8F1" stopOpacity="0.0" />
            <stop offset="40%" stopColor="#1D9AE1" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#1D9AE1" stopOpacity="0.0" />
          </linearGradient>
        </defs>

        <path
          d="M -100,180 C 350,120 700,380 1200,220 S 1800,320 2200,160"
          fill="none"
          stroke="url(#globalLineGrad1)"
          strokeWidth="1.5"
          strokeDasharray="6 8"
        />

        <path
          d="M -50,600 C 400,750 850,520 1350,680 S 1900,540 2300,700"
          fill="none"
          stroke="url(#globalLineGrad2)"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
}
