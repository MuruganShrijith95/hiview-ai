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
  glowColor = "rgba(52, 211, 153, 0.15)",
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
      whileHover={interactive ? { y: -5, scale: 1.015, transition: { duration: 0.25 } } : {}}
      className={`relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-xl transition-colors duration-300 hover:border-emerald-400/30 hover:shadow-[0_12px_40px_rgba(52,211,153,0.12)] ${className}`}
    >
      {interactive && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300"
          style={{
            opacity,
            background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, ${glowColor}, transparent 80%)`
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
