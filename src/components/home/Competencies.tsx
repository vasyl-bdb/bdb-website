"use client";

import { motion } from "framer-motion";
import {
  Calculator,
  Landmark,
  Users,
  Building2,
  Briefcase,
  Heart,
  Factory,
  Truck,
  ArrowUpRight,
} from "lucide-react";

import Container from "@/core/layout/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

const competencies = [
  {
    icon: Calculator,
    title: "Бухгалтерський облік",
    description:
      "Комплексне ведення бухгалтерського обліку відповідно до чинного законодавства України.",
  },
  {
    icon: Landmark,
    title: "Податковий облік",
    description:
      "Підготовка декларацій, контроль податкових зобов'язань та супровід податкової звітності.",
  },
  {
    icon: Users,
    title: "Заробітна плата та кадри",
    description:
      "Нарахування заробітної плати, кадровий облік та кадрова документація.",
  },
  {
    icon: Building2,
    title: "ТОВ",
    description:
      "Повний бухгалтерський та податковий супровід товариств з обмеженою відповідальністю.",
  },
  {
    icon: Briefcase,
    title: "ФОП",
    description:
      "Бухгалтерський супровід фізичних осіб-підприємців з урахуванням системи оподаткування та виду діяльності.",
  },
  {
    icon: Heart,
    title: "Неприбуткові організації",
    description:
      "Супровід громадських організацій, благодійних фондів, грантів та цільового фінансування.",
  },
  {
    icon: Factory,
    title: "Виробництво",
    description:
      "Облік матеріалів, виробництва, собівартості та готової продукції.",
  },
  {
    icon: Truck,
    title: "Логістика",
    description:
      "Бухгалтерський супровід транспортних та логістичних компаній.",
  },
];

export default function Competencies() {
  return (
    <Section background="white">
      <Container>
        <SectionTitle
          badge="Компетенції"
          title="Професійний супровід для різних видів діяльності"
          subtitle="Поєдную практичний досвід у бухгалтерському та податковому обліку з розумінням специфіки різних сфер бізнесу."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {competencies.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                }}
                className="group relative flex min-h-[250px] flex-col overflow-hidden rounded-[24px] border border-[var(--color-border)] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-secondary)]/40 hover:shadow-[0_18px_45px_rgba(0,0,0,0.07)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-primary)]/7 text-[var(--color-primary)] transition-colors duration-300 group-hover:bg-[var(--color-secondary)]/15">
                    <Icon size={23} strokeWidth={1.8} aria-hidden="true" />
                  </div>

                  <span className="text-xs font-semibold tracking-[0.12em] text-[var(--color-primary)]/20">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-bold leading-snug text-[var(--color-primary)]">
                  {item.title}
                </h3>

                <p className="mt-3 flex-1 text-[14px] leading-6 text-[var(--color-text-light)]">
                  {item.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-[var(--color-primary)]">
                  <span>Компетенція BDB</span>
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </div>

                <div className="absolute bottom-0 left-6 right-6 h-px origin-left scale-x-0 bg-[var(--color-secondary)] transition-transform duration-300 group-hover:scale-x-100" />
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-12 overflow-hidden rounded-[28px] border border-[var(--color-border)] bg-[var(--color-background)] p-7 sm:p-8 lg:p-10"
        >
          <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
            <div className="max-w-3xl">
              <div className="inline-flex rounded-full border border-[var(--color-secondary)]/20 bg-white px-4 py-2 text-sm font-semibold text-[var(--color-primary)]">
                Практичний підхід
              </div>

              <h3 className="mt-5 text-2xl font-bold leading-tight text-[var(--color-primary)] sm:text-3xl">
                Облік із розумінням специфіки вашого бізнесу
              </h3>

              <p className="mt-4 text-[15px] leading-7 text-[var(--color-text-light)]">
                Важливо не просто вести документи та подавати звітність, а
                розуміти, як працює конкретний бізнес, які операції він
                здійснює та які облікові рішення для нього потрібні.
              </p>
            </div>

            <div className="grid shrink-0 gap-3 sm:grid-cols-3 lg:w-[390px]">
              <div className="rounded-2xl border border-[var(--color-border)] bg-white p-4">
                <div className="text-lg font-bold text-[var(--color-primary)]">
                  ТОВ
                </div>
                <div className="mt-1 text-xs leading-5 text-[var(--color-text-light)]">
                  бізнес та компанії
                </div>
              </div>

              <div className="rounded-2xl border border-[var(--color-border)] bg-white p-4">
                <div className="text-lg font-bold text-[var(--color-primary)]">
                  ФОП
                </div>
                <div className="mt-1 text-xs leading-5 text-[var(--color-text-light)]">
                  підприємці
                </div>
              </div>

              <div className="rounded-2xl border border-[var(--color-border)] bg-white p-4">
                <div className="text-lg font-bold text-[var(--color-primary)]">
                  ГО / БФ
                </div>
                <div className="mt-1 text-xs leading-5 text-[var(--color-text-light)]">
                  неприбуткові
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}