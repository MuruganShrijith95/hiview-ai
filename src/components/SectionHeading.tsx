"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlightText?: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({
  badge,
  title,
  highlightText,
  subtitle,
  centered = true,
  className = ""
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-3xl ${centered ? "mx-auto text-center" : "text-left"} ${className}`}
    >
      {badge && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-300 backdrop-blur-md ${centered ? "mx-auto" : ""} mb-4`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span>{badge}</span>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl"
      >
        {title}{" "}
        {highlightText && (
          <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-amber-400 bg-clip-text text-transparent">
            {highlightText}
          </span>
        )}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
