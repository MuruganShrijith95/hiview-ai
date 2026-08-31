"use client";

import React, { ReactNode } from "react";
import { motion, useReducedMotion, Variants } from "framer-motion";

/**
 * Cascade for grids and lists.
 *
 * Sections previously animated as a single block, so a seven-card grid
 * arrived all at once — one large movement rather than a sequence the
 * eye can follow. Staggering the children reads as considered without
 * adding any ornament.
 */

interface GroupProps {
  children: ReactNode;
  className?: string;
  /** gap between each child, seconds */
  stagger?: number;
  /** wait before the first child, seconds */
  delayChildren?: number;
}

export function StaggerGroup({
  children,
  className = "",
  stagger = 0.07,
  delayChildren = 0
}: GroupProps) {
  const reduce = useReducedMotion();

  const variants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduce ? 0 : stagger,
        delayChildren: reduce ? 0 : delayChildren
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-70px" }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface ItemProps {
  children: ReactNode;
  className?: string;
}

export function StaggerItem({ children, className = "" }: ItemProps) {
  const reduce = useReducedMotion();

  // Under reduced motion the content still arrives — it just fades
  // rather than travelling. Never suppress the reveal entirely, or the
  // element stays at opacity 0 and the content is simply lost.
  const variants: Variants = reduce
    ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } };

  return (
    <motion.div
      variants={variants}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
