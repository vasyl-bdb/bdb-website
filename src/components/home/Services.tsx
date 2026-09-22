"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Briefcase,
  FileText,
  Users,
  HeartHandshake,
  Factory,
  Truck,
  Calculator,
  RefreshCw,
} from "lucide-react";

import Container from "@/core/layout/Container";
import BdbButton from "@/core/bdb/ui/BdbButton";
import services from "@/data/services";

const icons = {
  building2: Building2,
  briefcase: Briefcase,
  filetext: FileText,
  users: Users,
  heart: HeartHandshake,
  factory: Factory,
  truck: Truck,
  calculator: Calculator,
  refresh: RefreshCw,
} as const;

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[var(--color-background)] py-24 lg:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-40 top-20 h-[420px] w-[420px] rounded-full bg-[var(--color-secondary)]/5 blur-3xl" />

      <div className="pointer-events-none absolute -left-40 bottom-20 h-[420px] w-[420px] rounded-full bg-[var(--color-primary)]/5 blur-3xl" />

      <Container>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center rounded-full border border-[var(--color-secondary)]/25 bg-white px-4 py-2 text-sm font-semibold text-[var(--color-primary)] shadow-sm">
            Наші послуги
          </div>

          <h2 className="text-4xl font-bold leading-[1.12] tracking-[-1px] text-[var(--color-primary)] sm:text-5xl">
            Бухгалтерський супровід
            <span className="block text-[var(--color-secondary)]">
              для вашого бізнесу
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-8 text-[var(--color-text-light)]">
            Бухгалтерський аутсорсинг для ТОВ, ФОП, громадських організацій
            та благодійних фондів. Облік, звітність, податки та кадровий
            супровід — дистанційно по всій Україні.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon =
              icons[service.icon as keyof typeof icons] ?? Building2;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
                className="group"
              >
                <Link
                  href={service.href}
                  className="relative flex h-full flex-col overflow-hidden rounded-[26px] border border-[var(--color-border)] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-secondary)]/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
                >
                  {/* Number */}
                  <div className="absolute right-6 top-6 text-xs font-semibold tracking-[0.12em] text-[var(--color-primary)]/20">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Icon */}
                  <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--color-primary)]/7 text-[var(--color-primary)] transition-all duration-300 group-hover:bg-[var(--color-secondary)] group-hover:text-[var(--color-primary)]">
                    <Icon
                      size={27}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="max-w-[90%] text-xl font-bold leading-snug text-[var(--color-primary)]">
                    {service.title}
                  </h3>

                  <p className="mt-4 flex-1 text-[15px] leading-7 text-[var(--color-text-light)]">
                    {service.text}
                  </p>

                  <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)]">
                    <span>Детальніше</span>

                    <ArrowRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </div>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-7 right-7 h-px origin-left scale-x-0 bg-[var(--color-secondary)] transition-transform duration-300 group-hover:scale-x-100" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom information */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-14 flex flex-col gap-6 rounded-[28px] border border-[var(--color-border)] bg-white p-7 shadow-sm sm:p-8 lg:flex-row lg:items-center lg:justify-between"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]">
              <Calculator size={22} aria-hidden="true" />
            </div>

            <div>
              <h3 className="font-bold text-[var(--color-primary)]">
                Не знаєте, який формат супроводу вам потрібен?
              </h3>

              <p className="mt-1 text-sm leading-6 text-[var(--color-text-light)]">
                Розберемо вашу ситуацію та підберемо необхідний комплекс
                бухгалтерських послуг.
              </p>
            </div>
          </div>

          <div className="shrink-0">
            <BdbButton href="/contacts">
              Отримати консультацію
              <ArrowRight size={17} aria-hidden="true" />
            </BdbButton>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}