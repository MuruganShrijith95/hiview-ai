"use client";

import React from "react";
import Link from "next/link";

interface HiViewLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  showWordmark?: boolean;
  className?: string;
  href?: string;
}

export default function HiViewLogo({
  size = "md",
  showWordmark = true,
  className = "",
  href = "/"
}: HiViewLogoProps) {
  const sizeMap = {
    sm: { icon: 28, text: "text-base", badge: "text-[10px]" },
    md: { icon: 36, text: "text-xl", badge: "text-xs" },
    lg: { icon: 44, text: "text-2xl", badge: "text-sm" },
    xl: { icon: 56, text: "text-3xl", badge: "text-base" }
  };

  const currentSize = sizeMap[size];

  const LogoContent = (
    <div className={`flex items-center gap-3 group cursor-pointer select-none ${className}`}>
      {/* Precision HiView Geometric Eye / Horizon Apex Vector Icon */}
      <div className="relative shrink-0 flex items-center justify-center">
        {/* Ambient Glow */}
        <div className="absolute inset-0 rounded-xl bg-sky-400/20 blur-md transition-all duration-300 group-hover:bg-sky-400/35 group-hover:blur-lg" />

        <svg
          width={currentSize.icon}
          height={currentSize.icon}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10 transition-transform duration-300 group-hover:scale-105"
        >
          <defs>
            {/* Primary Cyan-to-Blue Linear Gradient */}
            <linearGradient id="hvGradientPrimary" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="50%" stopColor="#0077ff" />
              <stop offset="100%" stopColor="#1d4ed8" />
            </linearGradient>

            {/* Accent Glowing Gradient */}
            <linearGradient id="hvGradientAccent" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#38bdf8" />
            </linearGradient>

            {/* Dark Shield Container Fill */}
            <linearGradient id="hvBgFill" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0f172a" />
              <stop offset="100%" stopColor="#020617" />
            </linearGradient>
          </defs>

          {/* Rounded Hexagonal / Shield Outer Base */}
          <rect
            x="2"
            y="2"
            width="44"
            height="44"
            rx="12"
            fill="url(#hvBgFill)"
            stroke="url(#hvGradientPrimary)"
            strokeWidth="1.5"
            strokeOpacity="0.8"
          />

          {/* High-Altitude Horizon Sight Line (HiView Vision) */}
          <path
            d="M8 24H40"
            stroke="rgba(255, 255, 255, 0.12)"
            strokeWidth="1"
            strokeDasharray="2 2"
          />

          {/* Stylized 'H' Left Pillar */}
          <path
            d="M14 13V35"
            stroke="url(#hvGradientAccent)"
            strokeWidth="3.2"
            strokeLinecap="round"
          />

          {/* Stylized 'V' Chevron Apex (High Vision) */}
          <path
            d="M14 24L24 35L34 13"
            stroke="url(#hvGradientPrimary)"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Stylized 'H' Right Pillar */}
          <path
            d="M34 22V35"
            stroke="url(#hvGradientAccent)"
            strokeWidth="3.2"
            strokeLinecap="round"
          />

          {/* Real-time AI Sentinel Pulse Node at Horizon Intersect */}
          <circle cx="24" cy="24" r="3" fill="#38bdf8" />
          <circle cx="24" cy="24" r="5" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.5" className="animate-ping" style={{ transformOrigin: "24px 24px" }} />
        </svg>
      </div>

      {/* HiView AI Wordmark */}
      {showWordmark && (
        <div className="flex items-center gap-1.5 font-sans tracking-tight">
          <div className={`font-extrabold ${currentSize.text} text-ink flex items-center`}>
            <span>Hi</span>
            <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-slate-100 bg-clip-text text-transparent">
              View
            </span>
          </div>
          <div className="flex items-center">
            <span className={`font-mono font-bold ${currentSize.badge} rounded-md bg-sky-950/80 px-1.5 py-0.5 text-sky-400 border border-sky-500/30 shadow-sm shadow-sky-500/20`}>
              .ai
            </span>
          </div>
        </div>
      )}
    </div>
  );

  if (href) {
    return <Link href={href}>{LogoContent}</Link>;
  }

  return LogoContent;
}
