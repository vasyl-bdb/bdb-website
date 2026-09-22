"use client";

import { ReactNode } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

interface IconBoxProps {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "light";
  className?: string;
}

export default function IconBox({
  children,
  size = "md",
  variant = "primary",
  className,
}: IconBoxProps) {
  const sizes = {
    sm: "h-12 w-12 rounded-xl text-base",
    md: "h-16 w-16 rounded-2xl text-xl",
    lg: "h-20 w-20 rounded-3xl text-2xl",
  };

  const variants = {
    primary:
      "bg-[var(--color-primary)] text-white shadow-lg hover:bg-[var(--color-secondary)]",

    secondary:
      "bg-[var(--color-secondary)] text-white shadow-lg hover:bg-[var(--color-primary)]",

    light:
      "border border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-primary)] hover:border-[var(--color-secondary)]",
  };

  return (
    <motion.div
      whileHover={{
        scale: 1.08,
        rotate: -3,
      }}
      transition={{
        duration: 0.25,
      }}
      className={clsx(
        "inline-flex items-center justify-center transition-all duration-300",
        sizes[size],
        variants[variant],
        className
      )}
    >
      {children}
    </motion.div>
  );
}

