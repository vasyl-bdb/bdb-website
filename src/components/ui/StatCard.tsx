"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

interface StatCardProps {
  value: string;
  title: string;
  description?: string;
  className?: string;
}

export default function StatCard({
  value,
  title,
  description,
  className,
}: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{
        y: -8,
      }}
      className={clsx(
        "group relative overflow-hidden rounded-[32px] border border-[var(--color-border)] bg-white p-8 shadow-sm transition-all duration-300 hover:border-[var(--color-secondary)] hover:shadow-2xl",
        className
      )}
    >
      {/* Decorative glow */}
      <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-[var(--color-secondary)]/10 blur-3xl transition-opacity duration-300 group-hover:opacity-100 opacity-70" />

      {/* Number */}
      <div className="relative">
        <div className="text-5xl font-black tracking-tight text-[var(--color-primary)] md:text-6xl">
          {value}
        </div>

        <div className="mt-5 text-xl font-semibold text-[var(--color-primary)]">
          {title}
        </div>

        {description && (
          <p className="mt-3 leading-7 text-[var(--color-text-light)]">
            {description}
          </p>
        )}
      </div>
    </motion.div>
  );
}

