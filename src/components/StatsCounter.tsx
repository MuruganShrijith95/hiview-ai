"use client";

import React, { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface StatsCounterProps {
  value: string;
  label: string;
  sublabel?: string;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export default function StatsCounter({
  value,
  label,
  sublabel,
  prefix = "",
  suffix = "",
  className = ""
}: StatsCounterProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    // Check if value has a number
    const numericMatch = value.match(/[\d.]+/);
    if (!numericMatch) {
      setDisplayValue(value);
      return;
    }

    const targetNum = parseFloat(numericMatch[0]);
    const duration = 1600; // ms
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentNum = targetNum * easeProgress;

      // Determine decimals
      const hasDecimals = value.includes(".");
      const formatted = hasDecimals ? currentNum.toFixed(1) : Math.round(currentNum).toString();
      
      const fullFormatted = value.replace(numericMatch[0], formatted);
      setDisplayValue(fullFormatted);

      if (frame >= totalFrames) {
        clearInterval(timer);
        setDisplayValue(value);
      }
    }, frameRate);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={ref} className={`text-center md:text-left ${className}`}>
      <div className="font-mono text-3xl font-extrabold tracking-tight text-white md:text-4xl lg:text-5xl">
        <span className="text-emerald-400">{prefix}</span>
        <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
          {displayValue}
        </span>
        <span className="text-emerald-400">{suffix}</span>
      </div>
      <div className="mt-1 text-sm font-semibold tracking-wide text-slate-300 md:text-base">
        {label}
      </div>
      {sublabel && (
        <div className="mt-0.5 text-xs text-slate-500">{sublabel}</div>
      )}
    </div>
  );
}
