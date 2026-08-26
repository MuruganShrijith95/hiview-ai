"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Sparkles, ShieldCheck, Activity, CheckCircle2 } from "lucide-react";

interface FloatingBadge {
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
  aspectRatio = "video",
  glowColor = "rgba(52, 211, 153, 0.2)",
  className = ""
}: AnimatedVisualProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [rotateX, setRotateX] = useState<number>(0);
  const [rotateY, setRotateY] = useState<number>(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // Subtle 3D tilt calculation
    setRotateX(-y * 0.025);
    setRotateY(x * 0.025);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const aspectClasses = {
    video: "aspect-video",
    wide: "aspect-[21/9]",
    square: "aspect-square",
    tall: "aspect-[4/3]"
  };

  const badgePositionClasses: Record<string, string> = {
    "top-left": "top-4 left-4",
    "top-right": "top-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "bottom-right": "bottom-4 right-4"
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
        perspective: 1000,
        transformStyle: "preserve-3d"
      }}
      className={`relative group ${className}`}
    >
      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute -inset-2 rounded-3xl opacity-40 blur-2xl transition-opacity duration-500 group-hover:opacity-75"
        style={{ background: glowColor }}
      />

      {/* Main Image Card with 3D Tilt */}
      <motion.div
        animate={{
          rotateX,
          rotateY
        }}
        transition={{ type: "spring", damping: 20, stiffness: 200 }}
        className={`relative overflow-hidden rounded-3xl border border-white/15 bg-slate-950/80 shadow-2xl backdrop-blur-xl ${aspectClasses[aspectRatio]}`}
      >
        {/* The Image with zoom on hover */}
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-90 contrast-110"
        />

        {/* Ambient Dark Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-transparent to-slate-950/60 opacity-60" />

        {/* Top Tag Pill */}
        {badgeText && (
          <div className="absolute top-4 left-4 z-20">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-slate-950/80 px-3 py-1 text-[11px] font-mono font-bold text-emerald-300 backdrop-blur-md shadow-lg">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {badgeText}
            </span>
          </div>
        )}

        {/* Floating Glassmorphic HUD Badges */}
        {floatingBadges.map((badge, idx) => {
          const posClass = badgePositionClasses[badge.position] || "bottom-4 left-4";
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + idx * 0.15 }}
              className={`absolute ${posClass} z-20 hidden sm:flex items-center gap-2.5 rounded-2xl border border-white/15 bg-slate-950/85 px-4 py-2.5 shadow-2xl backdrop-blur-xl`}
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400">
                {badge.icon ? <badge.icon className="h-4 w-4" /> : <Activity className="h-4 w-4" />}
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase font-bold text-slate-400 tracking-wider">
                  {badge.title}
                </div>
                <div className="text-xs font-mono font-extrabold text-white">
                  {badge.value}
                </div>
              </div>
            </motion.div>
          );
        })}

        {/* Dynamic Luminous Border Tracing */}
        <div className="pointer-events-none absolute inset-0 rounded-3xl border border-emerald-500/0 transition-colors duration-500 group-hover:border-emerald-500/40" />
      </motion.div>
    </motion.div>
  );
}
