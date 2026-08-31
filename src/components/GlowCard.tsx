"use client";

import React, { useRef, useState, ReactNode } from "react";
import { motion } from "framer-motion";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  interactive?: boolean;
}

export default function GlowCard({
  children,
  className = "",
  glowColor = "rgba(0, 240, 255, 0.2)",
  interactive = true
}: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !interactive) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    if (!interactive) return;
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    if (!interactive) return;
    setOpacity(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={interactive ? { y: -4, transition: { duration: 0.2, ease: "easeOut" } } : {}}
      className={`group relative overflow-hidden rounded-2xl border border-slate-300/10 bg-gradient-to-b from-white via-white to-slate-900 p-6 backdrop-blur-2xl shadow-[0_1px_2px_rgba(11,27,58,0.05),0_14px_36px_rgba(11,27,58,0.09)] transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_1px_2px_rgba(11,27,58,0.05),0_14px_36px_rgba(11,27,58,0.09)] ${className}`}
    >
      {/* Top Edge Razor Highlight */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Dynamic Cursor Spotlight */}
      {interactive && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300"
          style={{
            opacity,
            background: `radial-gradient(450px circle at ${position.x}px ${position.y}px, ${glowColor}, transparent 75%)`
          }}
        />
      )}

      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
