"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import clsx from "clsx";

interface FeatureCardProps {
  icon?: ReactNode;

  title: string;

  description: string;

  href?: string;

  buttonText?: string;

  className?: string;

  accent?: boolean;

  hover?: boolean;
}

export default function FeatureCard({
  icon,
  title,
  description,
  href,
  buttonText = "Детальніше",
  className,
  accent = false,
  hover = true,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={
        hover
          ? {
              y: -8,
              scale: 1.02,
            }
          : undefined
      }
      transition={{
        duration: 0.35,
      }}
      className={clsx(
        "group relative overflow-hidden rounded-[32px] border bg-white p-8 lg:p-10",
        "shadow-[0_10px_40px_rgba(0,0,0,0.05)]",
        "transition-all duration-500",
        "flex h-full flex-col",
        accent
          ? "border-[var(--color-secondary)]"
          : "border-[var(--color-border)]",
        hover &&
          "hover:border-[var(--color-secondary)] hover:shadow-[0_25px_70px_rgba(0,0,0,0.08)]",
        className
      )}
    >
      {/* Декоративне світіння */}
      <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[var(--color-secondary)]/10 blur-3xl transition-all duration-500 group-hover:scale-125" />

      {/* Іконка */}
      {icon && (
        <div className="relative z-10 mb-8 flex h-16 w-16 items-center justify-center rounded-3xl bg-[var(--color-primary)] text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-[var(--color-secondary)]">
          {icon}
        </div>
      )}

      {/* Заголовок */}
      <h3 className="relative z-10 text-2xl font-bold leading-tight text-[var(--color-primary)]">
        {title}
      </h3>

      {/* Опис */}
      <p className="relative z-10 mt-5 flex-1 leading-8 text-[var(--color-text-light)]">
        {description}
      </p>

      {/* Лінія */}
      <div className="relative z-10 mt-8 h-1 w-14 rounded-full bg-[var(--color-secondary)] transition-all duration-500 group-hover:w-24" />

      {/* Кнопка */}
      {href && (
        <Link
          href={href}
          className="relative z-10 mt-8 inline-flex items-center gap-3 font-semibold text-[var(--color-primary)] transition-all duration-300 hover:gap-5"
        >
          {buttonText}

          <ArrowRight size={18} />
        </Link>
      )}

      {/* Декоративний елемент */}
      <div className="pointer-events-none absolute bottom-0 right-6 select-none text-[120px] font-black leading-none text-[var(--color-primary)]/[0.03] transition-all duration-500 group-hover:text-[var(--color-primary)]/[0.06]">
        ✦
      </div>
    </motion.div>
  );
}

