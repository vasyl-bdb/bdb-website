"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Building2,
  Briefcase,
  Heart,
  Users,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import Container from "@/core/layout/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import BdbButton from "@/core/bdb/ui/BdbButton";

const businessTypes = [
  {
    id: "tov",
    title: "ТОВ",
    icon: Building2,
    description: "Товариства з обмеженою відповідальністю",
  },
  {
    id: "fop",
    title: "ФОП",
    icon: Briefcase,
    description: "Фізичні особи-підприємці",
  },
  {
    id: "ngo",
    title: "ГО",
    icon: Users,
    description: "Громадські організації",
  },
  {
    id: "charity",
    title: "Благодійний фонд",
    icon: Heart,
    description: "Благодійні фонди та неприбуткові організації",
  },
];

const calculationFactors = [
  "система оподаткування",
  "кількість працівників",
  "обсяг первинних документів",
  "додаткові послуги",
];

export default function CalculatorPreview() {
  const [selected, setSelected] = useState("tov");

  const selectedBusiness = businessTypes.find(
    (business) => business.id === selected
  );

  return (
    <Section background="light">
      <Container>
        <SectionTitle
          badge="Калькулятор"
          title="Дізнайтеся орієнтовну вартість супроводу"
          subtitle="Оберіть тип організації та перейдіть до детального калькулятора. Розрахунок формується з урахуванням особливостей вашого бізнесу."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          {/* Вибір типу бізнесу */}
          <div className="rounded-[28px] border border-[var(--color-border)] bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-7">
              <div className="text-sm font-semibold text-[var(--color-primary)]">
                Крок 1
              </div>

              <h3 className="mt-2 text-2xl font-bold text-[var(--color-primary)]">
                Оберіть тип організації
              </h3>

              <p className="mt-2 text-sm leading-6 text-[var(--color-text-light)]">
                Це допоможе визначити відповідний формат бухгалтерського
                супроводу.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {businessTypes.map((item) => {
                const Icon = item.icon;
                const isSelected = selected === item.id;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelected(item.id)}
                    aria-pressed={isSelected}
                    className={`group relative rounded-2xl border p-5 text-left transition-all duration-300 ${
                      isSelected
                        ? "border-[var(--color-secondary)] bg-[var(--color-secondary)]/7 shadow-sm"
                        : "border-[var(--color-border)] bg-white hover:-translate-y-0.5 hover:border-[var(--color-secondary)]/50 hover:shadow-md"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-xl transition-colors ${
                          isSelected
                            ? "bg-[var(--color-secondary)]/15 text-[var(--color-primary)]"
                            : "bg-[var(--color-primary)]/7 text-[var(--color-primary)]"
                        }`}
                      >
                        <Icon
                          size={21}
                          strokeWidth={1.8}
                          aria-hidden="true"
                        />
                      </div>

                      {isSelected && (
                        <CheckCircle2
                          size={20}
                          className="text-[var(--color-secondary)]"
                          aria-hidden="true"
                        />
                      )}
                    </div>

                    <h4 className="mt-5 font-bold text-[var(--color-primary)]">
                      {item.title}
                    </h4>

                    <p className="mt-1.5 text-xs leading-5 text-[var(--color-text-light)]">
                      {item.description}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Інформаційна панель */}
          <motion.div
            key={selected}
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35 }}
            className="relative overflow-hidden rounded-[28px] bg-[var(--color-primary)] p-7 text-white sm:p-9"
          >
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full border border-white/10" />

            <div className="relative z-10 flex h-full flex-col">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
                Обрано
              </div>

              <h3 className="mt-3 text-3xl font-bold sm:text-4xl">
                {selectedBusiness?.title}
              </h3>

              <p className="mt-4 max-w-lg text-[15px] leading-7 text-white/75">
                Для розрахунку вартості бухгалтерського супроводу враховуються
                особливості діяльності та фактичний обсяг роботи.
              </p>

              <div className="mt-8 border-t border-white/10 pt-7">
                <div className="text-sm font-semibold text-white/90">
                  Вартість залежить від:
                </div>

                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {calculationFactors.map((factor) => (
                    <li
                      key={factor}
                      className="flex items-start gap-2.5 text-sm text-white/70"
                    >
                      <CheckCircle2
                        size={17}
                        className="mt-0.5 shrink-0 text-[var(--color-secondary)]"
                        aria-hidden="true"
                      />
                      <span>{factor}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-9">
                <div className="flex flex-col gap-3 sm:flex-row">
                  <BdbButton href="/calculator">
                    Відкрити калькулятор
                  </BdbButton>

                  <Link
                    href="/contacts"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white/40 hover:bg-white/10"
                  >
                    Консультація
                    <ArrowRight size={17} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-8 max-w-3xl text-center"
        >
          <p className="text-sm leading-6 text-[var(--color-text-light)]">
            Остаточна вартість визначається після уточнення обсягу роботи та
            особливостей вашої діяльності.
          </p>
        </motion.div>
      </Container>
    </Section>
  );
}