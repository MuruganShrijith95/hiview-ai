"use client";

import React, { ReactNode } from "react";
import { motion, MotionProps, useReducedMotion } from "framer-motion";

interface AnimatedSectionProps extends MotionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  id,
  ...props
}: AnimatedSectionProps) {
  const reduce = useReducedMotion();

  return (
    <motion.section
      id={id}
      // Content must still arrive under reduced motion — it just fades
      // in place instead of travelling.
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: reduce ? 0.3 : 0.7,
        delay: reduce ? 0 : delay,
        ease: [0.16, 1, 0.3, 1]
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.section>
  );
}
