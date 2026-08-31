"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Sparkles, ShieldCheck, Activity, CheckCircle2, Zap } from "lucide-react";
import MagnifierImage from "./MagnifierImage";

export interface FloatingBadge {
  title: string;
  value: string;
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  icon?: any;
  color?: string;
}

interface AnimatedVisualProps {
  src: string;
  alt: string;
  badgeText?: string;
  floatingBadges?: FloatingBadge[];
  aspectRatio?: "video" | "wide" | "square" | "tall";
  glowColor?: string;
  className?: string;
}

export default function AnimatedVisual({
  src,
  alt,
  badgeText,
  floatingBadges = [],
  aspectRatio = "wide",
  glowColor = "rgba(2, 132, 199, 0.18)",
  className = ""
}: AnimatedVisualProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [rotateX, setRotateX] = useState<number>(0);
  const [rotateY, setRotateY] = useState<number>(0);
  const [zooming, setZooming] = useState<boolean>(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || zooming) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // Smooth 3D Parallax Tilt
    setRotateX(-y * 0.022);
    setRotateY(x * 0.022);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const aspectClasses = {
    video: "aspect-video",
    wide: "aspect-[16/9] md:aspect-[21/9]",
    square: "aspect-square",
    tall: "aspect-[4/3]"
  };

  const badgePositionClasses: Record<string, string> = {
    "top-left": "top-6 left-6",
    "top-right": "top-6 right-6",
    "bottom-left": "bottom-6 left-6",
    "bottom-right": "bottom-6 right-6"
  };

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7 }}
      style={{
        perspective: 1200,
        transformStyle: "preserve-3d"
      }}
      className={`relative group ${className}`}
    >
      {/* Dynamic 3D Ambient Luminous Aura */}
      <div
        className="pointer-events-none absolute -inset-3 rounded-3xl opacity-50 blur-3xl transition-opacity duration-500 group-hover:opacity-80"
        style={{ background: glowColor }}
      />

      {/* 3D Tilted Viewport Card */}
      <motion.div
        animate={{
          rotateX: zooming ? 0 : rotateX,
          rotateY: zooming ? 0 : rotateY
        }}
        transition={{ type: "spring", damping: 22, stiffness: 220 }}
        className={`relative overflow-hidden rounded-3xl border border-slate-300/15 bg-slate-950 shadow-[0_1px_2px_rgba(11,27,58,0.05),0_14px_36px_rgba(11,27,58,0.09)] backdrop-blur-2xl ${aspectClasses[aspectRatio]}`}
      >
        {/* Photographic background — hover (or press-and-hold) to magnify */}
        <MagnifierImage
          src={src}
          alt={alt}
          className="absolute inset-0"
          imgClassName={`h-full w-full object-cover object-center transition-transform duration-700 ease-out filter contrast-105 ${
            zooming ? "" : "group-hover:scale-105"
          }`}
          onActiveChange={setZooming}
        />

        {/* Ambient Dark Overlay Gradients */}
        <div
          className={`pointer-events-none absolute inset-0 bg-gradient-to-t from-white/80 via-white/15 to-transparent transition-opacity duration-300 ${
            zooming ? "opacity-0" : "opacity-100"
          }`}
        />

        {/* Cyber Scanning Grid Overlay */}
        <div className={`pointer-events-none absolute inset-0 grid-pattern transition-opacity duration-300 ${zooming ? "opacity-0" : "opacity-30"}`} />

        {/* Top Razor Sheen Line */}
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60 animate-pulse" />

        {/* Top Tag Pill */}
        {badgeText && (
          <div className="pointer-events-none absolute top-4 left-4 sm:top-6 sm:left-6 z-20">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-slate-950/85 px-3.5 py-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-cyan-300 backdrop-blur-xl shadow-xl">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
              </span>
              <span>{badgeText}</span>
            </span>
          </div>
        )}

        {/* Floating Glassmorphic HUD Badges with Keyframe Floating Bob */}
        {floatingBadges.map((badge, idx) => {
          const posClass = badgePositionClasses[badge.position] || "bottom-6 left-6";
          const floatDelay = idx * 0.4;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              animate={{ y: [0, -6, 0] }}
              transition={{
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: floatDelay
                },
                opacity: { duration: 0.4, delay: 0.2 + idx * 0.1 }
              }}
              className={`pointer-events-none absolute ${posClass} z-20 hidden sm:flex items-center gap-3 rounded-2xl border border-slate-300/15 bg-slate-950/90 p-3.5 shadow-2xl backdrop-blur-2xl transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(0,240,255,0.25)]`}
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                {badge.icon ? <badge.icon className="h-4 w-4" /> : <Activity className="h-4 w-4" />}
              </div>
              <div className="text-left">
                <div className="text-[10px] font-mono uppercase font-bold text-slate-400 tracking-wider">
                  {badge.title}
                </div>
                <div className="text-xs sm:text-sm font-mono font-black text-ink">
                  {badge.value}
                </div>
              </div>
            </motion.div>
          );
        })}

        {/* Dynamic Luminous Border Tracing */}
        <div className="pointer-events-none absolute inset-0 rounded-3xl border border-cyan-500/0 transition-colors duration-500 group-hover:border-cyan-500/40" />
      </motion.div>
    </motion.div>
  );
}
