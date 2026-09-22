"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

import Section from "@/components/ui/Section";
import Container from "@/core/layout/Container";
import BdbButton from "@/core/bdb/ui/BdbButton";

export default function CTA() {
  return (
    <Section
      background="primary"
      className="relative overflow-hidden"
    >
      {/* Фонове світіння */}
      <div className="absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full bg-[var(--color-secondary)]/10 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-[420px] w-[420px] rounded-full bg-white/5 blur-3xl" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 px-8 py-14 backdrop-blur-xl lg:px-20 lg:py-20"
        >
          {/* Декоративні елементи */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[var(--color-secondary)]/10 blur-3xl" />

            <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-white/5 blur-3xl" />

            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: `
                  linear-gradient(to right, white 1px, transparent 1px),
                  linear-gradient(to bottom, white 1px, transparent 1px)
                `,
                backgroundSize: "48px 48px",
              }}
            />

            <div className="absolute right-20 top-16 h-40 w-40 rounded-full border border-white/10" />

            <div className="absolute bottom-12 left-16 h-24 w-24 rounded-full border border-[var(--color-secondary)]/20" />
          </div>

          {/* Акценти */}
          <div className="pointer-events-none absolute left-8 top-8 h-2 w-16 rounded-full bg-[var(--color-secondary)]/70" />

          <div className="pointer-events-none absolute right-8 bottom-8 h-2 w-16 rounded-full bg-[var(--color-secondary)]/40" />

          <div className="pointer-events-none absolute right-10 top-10 h-3 w-3 rounded-full bg-[var(--color-secondary)]" />

          <div className="pointer-events-none absolute bottom-10 left-10 h-3 w-3 rounded-full bg-white/40" />

          <div className="pointer-events-none absolute inset-0 rounded-[40px] ring-1 ring-inset ring-white/10" />

          {/* Контент */}
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="inline-flex rounded-full border border-[var(--color-secondary)]/30 bg-[var(--color-secondary)]/10 px-5 py-2 text-sm font-semibold tracking-wide text-[var(--color-secondary)]"
            >
              Фінансовий партнер для бізнесу
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mx-auto mt-8 max-w-3xl text-4xl font-bold leading-tight text-white lg:text-6xl"
            >
              Передайте бухгалтерію
              <br />
              професіоналу
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/80"
            >
              Понад <strong className="text-white">15 років досвіду</strong> у
              бухгалтерському та податковому обліку.
              <br />
              Працюю з <strong className="text-white">ТОВ</strong>,
              <strong className="text-white"> ФОП</strong> та
              <strong className="text-white">
                {" "}неприбутковими організаціями
              </strong>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row"
            >
              <BdbButton
                href="#contacts"
                size="lg"
                className="min-w-[250px]"
              >
                Отримати консультацію
                <ArrowRight size={20} />
              </BdbButton>

              <a
                href="tel:+380XXXXXXXXX"
                className="inline-flex min-w-[250px] items-center justify-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur transition-all duration-300 hover:border-[var(--color-secondary)] hover:bg-white/15"
              >
                <Phone size={20} />
                Зателефонувати
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.55 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-white/70"
            >
              <span>✓ Безкоштовна первинна консультація</span>
              <span>✓ Конфіденційність</span>
              <span>✓ Онлайн по всій Україні</span>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}

