import type { Metadata } from "next";

import {
  Calculator,
  BadgeCheck,
  FileText,
  Users,
  Clock3,
  ShieldCheck,
} from "lucide-react";

import SiteLayout from "@/core/bdb/layout/SiteLayout";
import Container from "@/core/layout/Container";

import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";

import PriceCalculator from "@/components/calculator/PriceCalculator";
import BdbButton from "@/core/bdb/ui/BdbButton";

export const metadata: Metadata = {
  title: "Калькулятор вартості бухгалтерських послуг",
  description:
    "Розрахуйте орієнтовну вартість бухгалтерського супроводу для ФОП, ТОВ, ГО та благодійних фондів. 15 років професійного досвіду.",
  alternates: {
    canonical: "/calculator",
  },
};

const includedServices = [
  "Ведення бухгалтерського обліку",
  "Податковий облік",
  "Підготовка та подання звітності",
  "Контроль строків",
  "Робота з первинними документами",
  "Нарахування заробітної плати",
  "Кадровий облік",
  "Фінансова звітність",
  "Бухгалтерські консультації",
  "Постійна онлайн-підтримка",
];

const packages = [
  {
    name: "START",
    title: "Базовий супровід",
    text:
      "Для бізнесу з невеликим обсягом операцій, якому потрібен стабільний бухгалтерський та податковий облік.",
  },
  {
    name: "BUSINESS",
    title: "Розширений супровід",
    text:
      "Для бізнесу, якому потрібен комплексний бухгалтерський супровід та додаткові послуги.",
    popular: true,
  },
  {
    name: "PRO",
    title: "Комплексний супровід",
    text:
      "Розширений рівень супроводу з бухгалтерським, податковим та управлінським обліком.",
  },
];

const steps = [
  {
    number: "01",
    icon: <BriefcaseIcon />,
    title: "Оберіть форму бізнесу",
    text:
      "ФОП, ТОВ, громадська організація або благодійний фонд.",
  },
  {
    number: "02",
    icon: <Users size={26} />,
    title: "Вкажіть параметри",
    text:
      "Оберіть пакет, кількість працівників, документообіг та додаткові послуги.",
  },
  {
    number: "03",
    icon: <Calculator size={26} />,
    title: "Отримайте розрахунок",
    text:
      "Калькулятор покаже орієнтовну щомісячну вартість бухгалтерського супроводу.",
  },
];

function BriefcaseIcon() {
  return <FileText size={26} />;
}

export default function CalculatorPage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <Section background="white">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-5xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)]/10 px-5 py-2 text-sm font-semibold text-[var(--color-primary)]">
                <Calculator size={18} />
                Калькулятор бухгалтерських послуг
              </div>

              <h1 className="text-5xl font-bold leading-tight text-[var(--color-primary)] lg:text-6xl">
                Розрахуйте орієнтовну
                <br />
                вартість бухгалтерського супроводу
              </h1>

              <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[var(--color-text-light)]">
                Оберіть форму бізнесу, рівень супроводу та основні параметри
                діяльності. Калькулятор автоматично сформує орієнтовну
                щомісячну вартість бухгалтерських послуг.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-[var(--color-text-light)]">
                <span>✓ ФОП</span>
                <span>✓ ТОВ</span>
                <span>✓ ГО та БФ</span>
                <span>✓ 15 років досвіду</span>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* CALCULATOR */}
      <Section background="light">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-6xl">
              <div className="rounded-[36px] border border-[var(--color-border)] bg-white p-4 shadow-sm sm:p-6 lg:p-8">
                <PriceCalculator />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mx-auto mt-10 max-w-5xl rounded-3xl border border-[var(--color-secondary)]/20 bg-[var(--color-secondary)]/5 px-6 py-5">
              <div className="flex items-start gap-4">
                <ShieldCheck
                  size={24}
                  className="mt-0.5 shrink-0 text-[var(--color-secondary)]"
                />

                <p className="text-sm leading-7 text-[var(--color-text-light)]">
                  <span className="font-semibold text-[var(--color-primary)]">
                    Важливо:
                  </span>{" "}
                  калькулятор формує попередню оцінку вартості. Остаточна
                  вартість бухгалтерського супроводу визначається після аналізу
                  обсягу операцій, документообігу та особливостей вашого
                  бізнесу.
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* INCLUDED SERVICES */}
      <Section background="white">
        <Container>
          <SectionTitle
            badge="Бухгалтерський супровід"
            title="Не просто звітність — комплексна підтримка бізнесу"
            subtitle="Перелік послуг залежить від обраного рівня супроводу та особливостей вашої діяльності."
          />

          <div className="mt-20 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <Reveal>
              <div className="rounded-[36px] bg-[var(--color-background)] p-10 lg:p-12">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--color-primary)] text-white">
                  <ShieldCheck size={28} />
                </div>

                <h3 className="mt-8 text-3xl font-bold text-[var(--color-primary)]">
                  Підбираємо супровід під ваш бізнес
                </h3>

                <p className="mt-6 leading-8 text-[var(--color-text-light)]">
                  Немає необхідності оплачувати послуги, які вам не потрібні.
                  Рівень бухгалтерського супроводу можна визначити відповідно
                  до кількості операцій, працівників, документообігу та
                  специфіки діяльності.
                </p>

                <div className="mt-8 flex items-center gap-4 rounded-2xl bg-white p-5">
                  <div className="text-4xl font-black text-[var(--color-primary)]">
                    15
                  </div>

                  <div className="text-sm leading-6 text-[var(--color-text-light)]">
                    років професійного досвіду
                    <br />
                    у бухгалтерському та податковому обліку
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="grid gap-4 sm:grid-cols-2">
                {includedServices.map((item) => (
                  <div
                    key={item}
                    className="group flex items-center gap-4 rounded-2xl border border-[var(--color-border)] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-secondary)] hover:shadow-lg"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-white transition-colors duration-300 group-hover:bg-[var(--color-secondary)]">
                      <BadgeCheck size={18} />
                    </div>

                    <span className="text-sm font-medium leading-6 text-[var(--color-primary)]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* PACKAGES */}
      <Section background="light">
        <Container>
          <SectionTitle
            badge="Пакети"
            title="Оберіть рівень супроводу"
            subtitle="У калькуляторі доступні різні рівні бухгалтерського супроводу — від базового до комплексного."
          />

          <div className="mt-20 grid gap-8 lg:grid-cols-3">
            {packages.map((item, index) => (
              <Reveal key={item.name} delay={index * 0.08}>
                <div
                  className={`relative h-full rounded-[32px] border p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                    item.popular
                      ? "border-[var(--color-secondary)] bg-[var(--color-primary)]"
                      : "border-[var(--color-border)] bg-white"
                  }`}
                >
                  {item.popular && (
                    <span className="absolute -top-3 left-7 rounded-full bg-[var(--color-secondary)] px-4 py-1 text-xs font-bold text-white">
                      ПОПУЛЯРНИЙ
                    </span>
                  )}

                  <div className="text-sm font-bold tracking-[0.18em] text-[var(--color-secondary)]">
                    {item.name}
                  </div>

                  <h3
                    className={`mt-5 text-2xl font-bold ${
                      item.popular
                        ? "text-white"
                        : "text-[var(--color-primary)]"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`mt-5 leading-7 ${
                      item.popular
                        ? "text-white/75"
                        : "text-[var(--color-text-light)]"
                    }`}
                  >
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* HOW IT WORKS */}
      <Section background="white">
        <Container>
          <SectionTitle
            badge="Як це працює"
            title="Три прості кроки"
            subtitle="Попередній розрахунок вартості займає лише кілька хвилин."
          />

          <div className="mt-20 grid gap-8 lg:grid-cols-3">
            {steps.map((step, index) => (
              <Reveal key={step.number} delay={index * 0.08}>
                <div className="h-full rounded-[32px] border border-[var(--color-border)] bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-secondary)] hover:shadow-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--color-primary)] text-white">
                      {step.icon}
                    </div>

                    <span className="text-5xl font-black text-[var(--color-primary)]/5">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-8 text-2xl font-bold text-[var(--color-primary)]">
                    {step.title}
                  </h3>

                  <p className="mt-4 leading-7 text-[var(--color-text-light)]">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* WHAT AFFECTS PRICE */}
      <Section background="light">
        <Container>
          <SectionTitle
            badge="Вартість"
            title="Що впливає на ціну бухгалтерського супроводу"
            subtitle="Кінцева вартість залежить не лише від форми бізнесу, а й від фактичного обсягу бухгалтерської роботи."
          />

          <div className="mx-auto mt-20 grid max-w-5xl gap-6 md:grid-cols-2">
            {[
              {
                icon: <Users size={24} />,
                title: "Кількість працівників",
                text: "Кількість працівників впливає на обсяг розрахунків, кадрового та зарплатного обліку.",
              },
              {
                icon: <FileText size={24} />,
                title: "Документообіг",
                text: "Кількість первинних документів та господарських операцій визначає обсяг щоденної роботи.",
              },
              {
                icon: <Calculator size={24} />,
                title: "Система оподаткування",
                text: "Перелік податків і звітності залежить від обраної системи оподаткування.",
              },
              {
                icon: <Clock3 size={24} />,
                title: "Специфіка діяльності",
                text: "Логістика, виробництво, торгівля та інші напрями можуть мати різний обсяг облікових операцій.",
              },
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <div className="flex gap-5 rounded-[28px] border border-[var(--color-border)] bg-white p-7">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-primary)] text-white">
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[var(--color-primary)]">
                      {item.title}
                    </h3>

                    <p className="mt-3 leading-7 text-[var(--color-text-light)]">
                      {item.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section background="primary">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <span className="inline-flex rounded-full border border-[var(--color-secondary)]/30 bg-[var(--color-secondary)]/10 px-5 py-2 text-sm font-semibold text-[var(--color-secondary)]">
                Індивідуальний підхід
              </span>

              <h2 className="mt-8 text-4xl font-bold leading-tight text-white lg:text-5xl">
                Потрібен точний розрахунок?
              </h2>

              <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/75">
                Калькулятор дає орієнтовну вартість. Якщо у вас нестандартна
                структура бізнесу або великий документообіг — зв'яжіться зі
                мною, щоб обговорити ваші потреби.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <BdbButton href="/contacts">
                  Отримати консультацію
                </BdbButton>

                <BdbButton href="/services" variant="secondary">
                  Переглянути послуги
                </BdbButton>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </SiteLayout>
  );
}