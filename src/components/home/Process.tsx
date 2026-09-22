"use client";

import { motion } from "framer-motion";

import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

const steps = [
  {
    number: "01",
    title: "Знайомство",
    description:
      "Безкоштовна консультація, знайомство з вашим бізнесом та визначення основних потреб у бухгалтерському супроводі.",
  },
  {
    number: "02",
    title: "Аналіз",
    description:
      "Оцінка поточного стану бухгалтерського обліку, документів, звітності та можливих податкових ризиків.",
  },
  {
    number: "03",
    title: "Початок співпраці",
    description:
      "Узгодження умов роботи, підписання договору та налаштування процесів бухгалтерського супроводу.",
  },
  {
    number: "04",
    title: "Постійний супровід",
    description:
      "Регулярне ведення обліку, підготовка та подання звітності, контроль податкових зобов'язань та оперативні консультації.",
  },
];

export default function Process() {
  return (
    <Section background="white">
      <SectionTitle
        badge="Процес роботи"
        title="Як проходить співпраця"
        subtitle="Простий і зрозумілий процес, який дозволяє швидко розпочати роботу та бути впевненим у бухгалтерському супроводі."
      />

      <div className="relative mt-20">
        {/* Лінія процесу */}
        <div className="absolute left-0 right-0 top-10 hidden lg:block">
          <div className="h-px bg-[var(--color-border)]">
            <div className="h-full w-full bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-primary)] opacity-30" />
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
              }}
              className="group relative"
            >
              {/* Точка на лінії */}
              <div className="absolute left-0 top-8 hidden -translate-x-3 lg:block">
                <div
                  aria-hidden="true"
                  className="flex h-6 w-6 items-center justify-center rounded-full border-4 border-white bg-[var(--color-secondary)] shadow-lg"
                />
              </div>

              <div className="relative overflow-hidden rounded-[32px] border border-[var(--color-border)] bg-white p-8 shadow-sm transition-all duration-300 group-hover:-translate-y-2 group-hover:border-[var(--color-secondary)] group-hover:shadow-2xl">
                {/* Верхня частина */}
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-5xl font-black leading-none text-[var(--color-primary)]/15 transition-all duration-300 group-hover:text-[var(--color-primary)]/25">
                    {step.number}
                  </span>

                  <div
                    aria-hidden="true"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-primary)]/5 transition-colors duration-300 group-hover:bg-[var(--color-secondary)]/10"
                  >
                    <div className="h-3 w-3 rounded-full bg-[var(--color-secondary)] transition-transform duration-300 group-hover:scale-125" />
                  </div>
                </div>

                {/* Заголовок */}
                <h3 className="text-2xl font-bold text-[var(--color-primary)]">
                  {step.title}
                </h3>

                {/* Опис */}
                <p className="mt-5 leading-8 text-[var(--color-text-light)]">
                  {step.description}
                </p>

                {/* Акцент */}
                <div
                  aria-hidden="true"
                  className="mt-8 h-1 w-14 rounded-full bg-[var(--color-secondary)] transition-all duration-300 group-hover:w-24"
                />

                {/* Фоновий номер */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-4 right-6 select-none text-[110px] font-black leading-none text-[var(--color-primary)]/[0.03] transition-all duration-500 group-hover:text-[var(--color-primary)]/[0.06]"
                >
                  {step.number}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Пояснення */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.3,
          }}
          className="mx-auto mt-20 max-w-3xl text-center"
        >
          <p className="text-lg leading-8 text-[var(--color-text-light)]">
            Від першої консультації до повного бухгалтерського супроводу —
            кожен етап організований так, щоб ви могли зосередитися на
            розвитку свого бізнесу, а не на поточній бухгалтерській роботі.
          </p>
        </motion.div>
      </div>
    </Section>
  );
}


