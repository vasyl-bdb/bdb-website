"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";

import BdbButton from "@/core/bdb/ui/BdbButton";

const services = [
  {
    number: "01",
    title: "Бухгалтерський супровід",
    description:
      "Комплексне ведення бухгалтерського та податкового обліку для малого й середнього бізнесу. Беру на себе всю рутинну роботу, щоб ви могли зосередитися на розвитку компанії.",
    href: "/services/tov",
  },
  {
    number: "02",
    title: "Податковий супровід",
    description:
      "Підготовка та подання звітності, консультації з оподаткування, ПДВ, взаємодія з контролюючими органами та супровід перевірок.",
    href: "/services/tov",
  },
  {
    number: "03",
    title: "Кадровий облік",
    description:
      "Оформлення працівників, кадрова документація, нарахування заробітної плати, лікарняних, відпусток та повний кадровий супровід.",
    href: "/services/tov",
  },
  {
    number: "04",
    title: "Фінансовий консалтинг",
    description:
      "Фінансовий аналіз, управлінський облік, бюджетування та підтримка керівника у прийнятті ефективних бізнес-рішень.",
    href: "/calculator",
  },
];

export default function ServicesPreview() {
  return (
    <Section background="light">
      <SectionTitle
        badge="Послуги"
        title="Бухгалтерський та фінансовий супровід бізнесу"
        subtitle="Допомагаю власникам бізнесу працювати впевнено: від щоденного бухгалтерського обліку до стратегічних фінансових рішень."
      />

      <div className="mt-20 space-y-8">
        {services.map((service, index) => (
          <Reveal
            key={service.number}
            delay={index * 0.08}
          >
            <div className="group rounded-[36px] border border-[var(--color-border)] bg-white p-10 transition-all duration-300 hover:border-[var(--color-secondary)] hover:shadow-2xl">
              <div className="grid gap-10 lg:grid-cols-[140px_1fr_auto] lg:items-center">
                
                {/* Номер */}
                <div className="text-7xl font-black leading-none tracking-tight text-[var(--color-secondary)]/70">
                  {service.number}
                </div>

                {/* Контент */}
                <div>
                  <h3 className="text-3xl font-bold text-[var(--color-primary)]">
                    {service.title}
                  </h3>

                  <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--color-text-light)]">
                    {service.description}
                  </p>
                </div>

                {/* Посилання */}
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-3 font-semibold text-[var(--color-primary)] transition-all duration-300 group-hover:gap-5"
                >
                  Детальніше
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* CTA */}
      <Reveal delay={0.35}>
        <div className="mt-20 overflow-hidden rounded-[40px] bg-[var(--color-primary)] p-10 lg:p-14">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            
            <div className="max-w-3xl">
              <div className="mb-4 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white">
                Індивідуальний підхід
              </div>

              <h3 className="text-4xl font-bold leading-tight text-white">
                Не знайшли потрібну послугу?
              </h3>

              <p className="mt-5 text-lg leading-8 text-white/80">
                Кожен бізнес має свої особливості. Я підберу оптимальний формат
                бухгалтерського супроводу саме для вашої компанії та допоможу
                організувати облік так, щоб він працював на розвиток бізнесу.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <BdbButton href="/contacts">
                Отримати консультацію
              </BdbButton>

              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[var(--color-primary)]"
              >
                Усі послуги
              </Link>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Кнопка всіх послуг */}
      <div className="mt-16 text-center">
        <BdbButton href="/services">
          Переглянути всі послуги
        </BdbButton>
      </div>
    </Section>
  );
}

