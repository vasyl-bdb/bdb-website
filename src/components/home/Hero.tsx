"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calculator,
  CheckCircle2,
  ShieldCheck,
  BriefcaseBusiness,
} from "lucide-react";

import Container from "@/core/layout/Container";
import BdbButton from "@/core/bdb/ui/BdbButton";

const advantages = [
  "Понад 15 років професійного досвіду",
  "Комплексний бухгалтерський супровід бізнесу",
  "Дистанційна робота по всій Україні",
];

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-[var(--color-background)]"
      aria-labelledby="hero-title"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-[var(--color-secondary)]/8 blur-3xl" />
        <div className="absolute -right-48 top-20 h-[560px] w-[560px] rounded-full bg-[var(--color-primary)]/5 blur-3xl" />
      </div>

      <Container>
        <div className="relative grid min-h-[calc(100vh-72px)] items-center gap-14 py-28 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-20">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10 min-w-0"
          >
            <div className="mb-7 inline-flex items-center rounded-full border border-[var(--color-secondary)]/25 bg-white/80 px-5 py-2.5 text-sm font-semibold text-[var(--color-primary)] shadow-sm backdrop-blur-sm">
              Бухгалтерія для бізнесу
            </div>

            <h1
              id="hero-title"
              className="max-w-3xl text-5xl font-bold leading-[1.08] tracking-[-1.5px] text-[var(--color-primary)] sm:text-6xl lg:text-[68px]"
            >
              Бухгалтерія,
              <span className="block text-[var(--color-secondary)]">
                якій можна довірити бізнес
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--color-text-light)] lg:text-[19px]">
              Бухгалтерський аутсорсинг для ТОВ, ФОП, громадських організацій
              та благодійних фондів. Облік, звітність і податковий супровід —
              чітко, своєчасно та дистанційно по всій Україні.
            </p>

            <div className="mt-8 space-y-3.5">
              {advantages.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-[16px] text-[var(--color-text-light)]"
                >
                  <CheckCircle2
                    size={20}
                    strokeWidth={2}
                    className="shrink-0 text-[var(--color-secondary)]"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <BdbButton href="/contacts">
                Отримати консультацію
              </BdbButton>

              <Link
                href="/calculator"
                className="group inline-flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-white px-6 py-4 font-semibold text-[var(--color-primary)] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-secondary)] hover:shadow-lg"
              >
                <Calculator
                  size={19}
                  className="text-[var(--color-secondary)]"
                  aria-hidden="true"
                />

                <span>Розрахувати вартість</span>

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-[var(--color-border)] pt-7">
              <div>
                <div className="text-2xl font-bold text-[var(--color-primary)]">
                  15+
                </div>
                <div className="mt-1 text-xs text-[var(--color-text-light)]">
                  років досвіду
                </div>
              </div>

              <div className="hidden h-10 w-px bg-[var(--color-border)] sm:block" />

              <div>
                <div className="text-2xl font-bold text-[var(--color-primary)]">
                  100%
                </div>
                <div className="mt-1 text-xs text-[var(--color-text-light)]">
                  дистанційний формат
                </div>
              </div>

              <div className="hidden h-10 w-px bg-[var(--color-border)] sm:block" />

              <div>
                <div className="text-2xl font-bold text-[var(--color-primary)]">
                  Україна
                </div>
                <div className="mt-1 text-xs text-[var(--color-text-light)]">
                  працюємо по всій країні
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative min-w-0"
          >
            <div className="relative mx-auto w-full max-w-[540px]">
              {/* Decorative elements */}
              <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full border border-[var(--color-secondary)]/20 sm:-right-12 sm:-top-12 sm:h-44 sm:w-44" />

              <div className="pointer-events-none absolute -bottom-10 -left-10 h-44 w-44 rounded-full border border-[var(--color-primary)]/10" />

              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-secondary)]/10 blur-3xl" />

              {/* Main image */}
              <div className="relative z-10 overflow-hidden rounded-[32px] border border-white/80 bg-white p-2 shadow-[0_30px_80px_rgba(0,0,0,0.12)]">
                <div className="overflow-hidden rounded-[26px]">
                  <Image
                    src="/images/hero/vasyl.webp"
                    alt="Василь Біда — бухгалтер і засновник BDB"
                    width={1000}
                    height={1250}
                    priority
                    className="block h-auto w-full"
                  />
                </div>
              </div>

              {/* Trust card */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="absolute -bottom-6 -left-5 z-20 rounded-2xl border border-white/80 bg-white/95 px-5 py-4 shadow-xl backdrop-blur-md sm:-left-8"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]">
                    <ShieldCheck size={22} aria-hidden="true" />
                  </div>

                  <div>
                    <div className="text-sm font-semibold text-[var(--color-primary)]">
                      Надійний супровід
                    </div>

                    <div className="mt-0.5 text-xs text-[var(--color-text-light)]">
                      Конфіденційність та точність
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Business card */}
              <motion.div
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="absolute -right-4 top-8 z-20 hidden rounded-2xl border border-white/80 bg-white/95 px-5 py-4 shadow-xl backdrop-blur-md sm:block lg:-right-8"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--color-primary)]/8 text-[var(--color-primary)]">
                    <BriefcaseBusiness size={21} aria-hidden="true" />
                  </div>

                  <div>
                    <div className="text-sm font-semibold text-[var(--color-primary)]">
                      Для бізнесу
                    </div>

                    <div className="mt-0.5 text-xs text-[var(--color-text-light)]">
                      ТОВ • ФОП • ГО • БФ
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}