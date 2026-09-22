"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Clock3,
  MessagesSquare,
  Lock,
  BadgeCheck,
  TrendingUp,
} from "lucide-react";

import Container from "@/core/layout/Container";

interface ServiceBenefitsProps {
  title: string;
  description: string;
  benefits: string[];
}

const icons = [
  ShieldCheck,
  Clock3,
  MessagesSquare,
  Lock,
  BadgeCheck,
  TrendingUp,
];

export default function ServiceBenefits({
  title,
  description,
  benefits,
}: ServiceBenefitsProps) {
  return (
    <section className="bg-[var(--color-background)] py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="mb-4 inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-[var(--color-primary)]">
            Переваги
          </span>

          <h2 className="mb-6 text-5xl font-bold text-[var(--color-primary)]">
            {title}
          </h2>

          <p className="text-lg leading-8 text-[var(--color-text-light)]">
            {description}
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = icons[index % icons.length];

            return (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
                className="group rounded-3xl border border-[var(--color-border)] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--color-primary)] transition-transform duration-300 group-hover:scale-110">
                  <Icon
                    size={30}
                    className="text-white"
                  />
                </div>

                <h3 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
                  {benefit}
                </h3>

                <p className="leading-8 text-[var(--color-text-light)]">
                  {getDescription(benefit)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function getDescription(title: string): string {
  switch (title) {
    case "Індивідуальний підхід":
      return "Враховуємо особливості вашого бізнесу та підбираємо оптимальний формат бухгалтерського супроводу.";

    case "Конфіденційність":
      return "Гарантуємо захист фінансової інформації та дотримуємося принципів професійної етики.";

    case "Контроль строків":
      return "Слідкуємо за календарем звітності та податкових зобов'язань, щоб уникнути штрафів.";

    case "Оперативний зв'язок":
      return "Швидко відповідаємо на запитання та допомагаємо у вирішенні робочих ситуацій.";

    default:
      return "Надійний бухгалтерський супровід із фокусом на якість, відповідальність і довгострокову співпрацю.";
  }
}

