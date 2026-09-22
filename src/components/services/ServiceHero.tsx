"use client";

import { motion } from "framer-motion";

import BdbButton from "@/core/bdb/ui/BdbButton";
import Container from "@/core/layout/Container";

interface ServiceHeroProps {
  badge: string;
  title: string;
  description: string;
}

export default function ServiceHero({
  badge,
  title,
  description,
}: ServiceHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[var(--color-background)] py-24 lg:py-32">
      {/* Фонові кола */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[var(--color-secondary)]/10 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[var(--color-primary)]/10 blur-3xl" />
      </div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-4xl text-center"
        >
          {/* Badge */}

          <span className="mb-5 inline-flex rounded-full bg-blue-50 px-5 py-2 text-sm font-semibold text-[var(--color-primary)]">
            {badge}
          </span>

          {/* Заголовок */}

          <h1 className="mb-8 text-5xl font-bold leading-tight text-[var(--color-primary)] lg:text-6xl">
            {title}
          </h1>

          {/* Опис */}

          <p className="mx-auto max-w-3xl text-lg leading-8 text-[var(--color-text-light)]">
            {description}
          </p>

          {/* Кнопки */}

          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <BdbButton href="/contacts">
              Отримати консультацію
            </BdbButton>

            <BdbButton
              href="/calculator"
              variant="secondary"
            >
              Розрахувати вартість
            </BdbButton>
          </div>

          {/* Статистика */}

          <div className="mt-20 grid gap-6 md:grid-cols-3">
            <StatCard
              value="15 років"
              label="років професійного досвіду"
            />

            <StatCard
              value="5"
              label="років головним бухгалтером"
            />

            <StatCard
              value="Дистанційно"
              label="працюємо по всій Україні"
            />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

interface StatCardProps {
  value: string;
  label: string;
}

function StatCard({
  value,
  label,
}: StatCardProps) {
  return (
    <div className="rounded-3xl border border-[var(--color-border)] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="mb-3 text-5xl font-bold text-[var(--color-secondary)]">
        {value}
      </div>

      <p className="text-[var(--color-text-light)]">
        {label}
      </p>
    </div>
  );
}


