"use client";

import React from "react";
import Link from "next/link";

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
    <div className={`inline-flex items-center group cursor-pointer select-none ${className}`}>
      <img
        src="/images/hiview-logo.png"
        alt="hiview AI"
        className={`${currentHeight} w-auto object-contain transition-transform duration-200 group-hover:scale-[1.03]`}
      />
    </div>
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
