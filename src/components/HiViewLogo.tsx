"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface HiViewLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  href?: string;
  showWordmark?: boolean;
}

export default function HiViewLogo({
  size = "md",
  className = "",
  href = "/"
}: HiViewLogoProps) {
  const sizeMap = {
    sm: "h-7 sm:h-8",
    md: "h-9 sm:h-10",
    lg: "h-11 sm:h-12",
    xl: "h-14 sm:h-16"
  };

  const currentHeight = sizeMap[size] || sizeMap.md;

  const LogoContent = (
    <motion.div 
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 350, damping: 22 }}
      className={`relative inline-flex items-center group cursor-pointer select-none ${className}`}
    >
      {/* Subtle Ambient Glowing Aura Behind Globe on Hover */}
      <div className="pointer-events-none absolute -left-1 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-gradient-to-r from-[#1D9AE1]/30 via-[#7CC8F1]/20 to-[#9333ea]/15 blur-md opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <img
        src="/images/hiview-logo.png"
        alt="hiview AI"
        className={`${currentHeight} w-auto object-contain transition-all duration-300 drop-shadow-[0_2px_8px_rgba(29,154,225,0.08)] group-hover:drop-shadow-[0_4px_16px_rgba(29,154,225,0.25)]`}
      />
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex items-center">
        {LogoContent}
      </Link>
    );
  }

  return LogoContent;
}
