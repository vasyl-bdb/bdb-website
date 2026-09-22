"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

interface Props {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
}

export default function Card({
  children,
  className,
  hover = true,
  padding = "lg",
}: Props) {
  const paddingClass = {
    sm: "p-5",
    md: "p-7",
    lg: "p-9",
  }[padding];

  return (
    <motion.div
      whileHover={
        hover
          ? {
              y: -8,
              scale: 1.02,
            }
          : undefined
      }
      transition={{
        duration: 0.25,
      }}
      className={clsx(
        "rounded-3xl border border-[var(--color-border)] bg-white shadow-sm transition-all duration-300",
        hover &&
          "hover:border-[var(--color-secondary)] hover:shadow-2xl",
        paddingClass,
        className
      )}
    >
      {children}
    </motion.div>
  );
}

