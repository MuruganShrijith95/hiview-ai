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
  glowColor = "rgba(31, 184, 119, 0.12)",
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
      whileHover={interactive ? { y: -3, transition: { duration: 0.2, ease: "easeOut" } } : {}}
      className={`group relative overflow-hidden rounded-2xl border border-[#cfe6ff] bg-gradient-to-b from-[#f4f9ff] via-[#f8fbff] to-white p-6 shadow-[0_1px_2px_rgba(16,42,86,0.04),0_8px_24px_-18px_rgba(16,42,86,0.18)] transition-all duration-300 hover:border-[#1fb877] hover:shadow-[0_16px_36px_-12px_rgba(31,184,119,0.28)] hover:from-[#f0fdf4] hover:via-[#f7fdf9] hover:to-white ${className}`}
    >
      {/* Top Edge Razor Green Highlight */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#1fb877] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

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
