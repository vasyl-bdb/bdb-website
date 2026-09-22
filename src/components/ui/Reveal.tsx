"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface RevealProps {
  children: ReactNode;

  delay?: number;

  duration?: number;

  y?: number;

  x?: number;

  scale?: number;

  once?: boolean;

  className?: string;
}

export default function Reveal({
  children,
  delay = 0,
  duration = 0.5,
  y = 40,
  x = 0,
  scale = 1,
  once = true,
  className,
}: RevealProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y,
        x,
        scale,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
      }}
      viewport={{
        once,
        amount: 0.2,
      }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

