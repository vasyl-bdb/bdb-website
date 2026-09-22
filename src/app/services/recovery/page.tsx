import type { Metadata } from "next";

import {
  SearchCheck,
  FileCheck,
  Calculator,
  ShieldCheck,
  BriefcaseBusiness,
  BadgeCheck,
} from "lucide-react";

import SiteLayout from "@/core/bdb/layout/SiteLayout";
import Container from "@/core/layout/Container";

import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";

import FeatureCard from "@/core/bdb/cards/FeatureCard";
import BdbButton from "@/core/bdb/ui/BdbButton";

export const metadata: Metadata = {
  title: "Відновлення бухгалтерського обліку",
  description:
    "Відновлення бухгалтерського та податкового обліку: аналіз документів, виправлення помилок, відновлення операцій, перевірка звітності та систематизація обліку. 15 років професійного досвіду.",
  alternates: {
    canonical: "/services/recovery",
  },
};

const services = [
  {
    icon: <SearchCheck size={28} />,
    title: "Аналіз стану обліку",
    description:
      "Перевіряю поточний стан бухгалтерського та податкового обліку, документи, звітність і визначаю проблемні ділянки.",
  },
  {
    icon: <FileCheck size={28} />,
    title: "Відновлення документів",
    description:
      "Систематизую наявні первинні документи та визначаю, яких документів бракує для повноцінного ведення обліку.",
  },
  {
    icon: <Calculator size={28} />,
    title: "Відновлення обліку",
    description:
      "Відновлюю бухгалтерські операції за необхідний період та приводжу облік у відповідність до фактичних господарських операцій.",
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Перевірка ризиків",
    description:
      "Виявляю можливі податкові ризики, помилки у звітності та розбіжності, які потребують виправлення.",
  },
];

const focusAreas = [
  "Відновлення бухгалтерського обліку за минулі періоди",
  "Аналіз первинних документів",
  "Перевірка податкової звітності",
  "Виявлення помилок та розбіжностей",
  "Підготовка виправленої звітності",
  "Систематизація бухгалтерських документів",
  "Перевірка взаєморозрахунків",
  "Рекомендації щодо подальшого ведення обліку",
];

const clients = [
  {
    icon: <BriefcaseBusiness size={28} />,
    title: "Після зміни бухгалтера",
    description:
      "Якщо попередній бухгалтер звільнився, а облік залишився неповним, неструктурованим або містить помилки.",
  },
  {
    icon: <FileCheck size={28} />,
    title: "Облік не вівся",
    description:
      "Якщо бухгалтерський облік певний час фактично не вівся або вівся лише частково.",
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Перед перевіркою",
    description:
      "Якщо необхідно перевірити стан обліку перед податковою перевіркою, аудитом або іншою важливою подією.",
  },
];

const steps = [
  {
    number: "01",
    title: "Аналіз",
    description:
      "Визначаємо період, обсяг роботи та аналізуємо наявні документи, бази, банківські операції й звітність.",
  },
  {
    number: "02",
    title: "Перевірка",
    description:
      "Виявляю відсутні документи, помилки, розбіжності та проблемні ділянки бухгалтерського і податкового обліку.",
  },
  {
    number: "03",
    title: "Відновлення",
    description:
      "Відновлюю господарські операції, систематизую документи та виправляю виявлені помилки.",
  },
  {
    number: "04",
    title: "Контроль",
    description:
      "Перевіряю результат, податкові показники та надаю рекомендації щодо подальшого ведення обліку.",
  },
];

const faq = [
  {
    question: "За який період можна відновити облік?",
    answer:
      "Період визначається після аналізу стану обліку та наявних документів. Обсяг роботи залежить від кількості операцій, документів і характеру виявлених проблем.",
  },
  {
    question: "Чи можна відновити облік, якщо попередній бухгалтер не передав усі документи?",
    answer:
      "Так. Спочатку визначається, які документи та дані наявні, чого бракує та які операції можна підтвердити іншими доступними джерелами.",
  },
  {
    question: "Чи перевіряєте ви подану раніше звітність?",
    answer:
      "Так. У межах відновлення обліку можна перевірити відповідність звітності даним обліку та виявити помилки або розбіжності.",
  },
  {
    question: "Чи можна замовити лише аналіз стану обліку?",
    answer:
      "Так. Спочатку можна провести аналіз поточного стану обліку, після чого визначити необхідний обсяг подальших робіт.",
  },
  {
    question: "Як передавати документи?",
    answer:
      "Співпраця здійснюється дистанційно. Документи можна передавати в електронному вигляді, а поточні питання вирішувати телефоном або в месенджерах.",
  },
];

export default function RecoveryPage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <Section background="white">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-5xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)]/10 px-5 py-2 text-sm font-semibold text-[var(--color-primary)]">
                <SearchCheck size={18} />
                Відновлення бухгалтерського обліку
              </div>

              <h1 className="text-5xl font-bold leading-tight text-[var(--color-primary)] lg:text-6xl">
                Відновлення
                <br />
                бухгалтерського обліку
              </h1>

              <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[var(--color-text-light)]">
                Допоможу відновити бухгалтерський та податковий облік,
                систематизувати документи, виправити помилки та привести облік
                до належного стану.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-[var(--color-text-light)]">
                <span>✓ Аналіз стану обліку</span>
                <span>✓ Відновлення документів</span>
                <span>✓ Виправлення помилок</span>
                <span>✓ 15 років досвіду</span>
              </div>

              <div className="mt-10 flex flex-wrap justify-center gap-5">
                <BdbButton href="/contacts">
                  Отримати консультацію
                </BdbButton>

                <BdbButton href="/calculator" variant="outline">
                  Розрахувати вартість
                </BdbButton>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* SERVICES */}
      <Section background="light">
        <Container>
          <SectionTitle
            badge="Послуги"
            title="Комплексне відновлення обліку"
            subtitle="Спочатку визначаємо стан обліку та проблемні ділянки, після чого послідовно відновлюємо необхідні дані й документи."
          />

          <div className="mt-20 grid gap-8 md:grid-cols-2">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.08}>
                <FeatureCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* SPECIFICS */}
      <Section background="white">
        <Container>
          <SectionTitle
            badge="Що входить"
            title="Основні напрямки роботи"
            subtitle="Обсяг відновлення визначається індивідуально після аналізу документів, облікової системи та стану звітності."
          />

          <div className="mt-20 grid gap-10 lg:grid-cols-2 lg:items-start">
            <Reveal>
              <div className="rounded-[36px] border border-[var(--color-border)] bg-white p-10 shadow-sm lg:p-12">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--color-primary)] text-white">
                  <Calculator size={28} />
                </div>

                <h3 className="mt-8 text-3xl font-bold text-[var(--color-primary)]">
                  Що може входити у відновлення
                </h3>

                <div className="mt-8 space-y-5">
                  {focusAreas.map((item) => (
                    <div key={item} className="flex items-start gap-4">
                      <BadgeCheck
                        size={22}
                        className="mt-1 shrink-0 text-[var(--color-secondary)]"
                      />

                      <span className="leading-7 text-[var(--color-text-light)]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="rounded-[36px] bg-[var(--color-background)] p-10 lg:p-12">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--color-secondary)] text-white">
                  <FileCheck size={28} />
                </div>

                <h3 className="mt-8 text-3xl font-bold text-[var(--color-primary)]">
                  Не знаєте, з чого почати?
                </h3>

                <p className="mt-6 leading-8 text-[var(--color-text-light)]">
                  Не обов'язково самостійно визначати всі помилки та проблеми
                  в обліку. На первинній консультації можна визначити поточний
                  стан обліку та зрозуміти, які дії необхідні саме у вашій
                  ситуації.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    "Аналіз документів",
                    "Перевірка обліку",
                    "Пошук помилок",
                    "План відновлення",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl bg-white px-5 py-4 text-sm font-semibold text-[var(--color-primary)]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* CLIENTS */}
      <Section background="light">
        <Container>
          <SectionTitle
            badge="Для кого"
            title="Коли варто відновити бухгалтерський облік"
            subtitle="Відновлення обліку потрібне не лише після зміни бухгалтера. Причиною може бути відсутність обліку, помилки або необхідність перевірити його стан."
          />

          <div className="mt-20 grid gap-8 lg:grid-cols-3">
            {clients.map((client, index) => (
              <Reveal key={client.title} delay={index * 0.08}>
                <FeatureCard
                  icon={client.icon}
                  title={client.title}
                  description={client.description}
                />
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.25}>
            <div className="mt-16 rounded-[36px] bg-[var(--color-primary)] p-10 text-white lg:p-14">
              <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <h3 className="text-3xl font-bold">
                    Працюю дистанційно по всій Україні
                  </h3>

                  <p className="mt-5 max-w-2xl leading-8 text-white/75">
                    Документи та облікову інформацію можна передавати в
                    електронному вигляді. Поточні питання вирішуємо телефоном,
                    у месенджерах або онлайн.
                  </p>
                </div>

                <div className="rounded-3xl bg-white/10 px-8 py-7 text-center">
                  <div className="text-5xl font-black">15</div>

                  <div className="mt-2 text-white/75">
                    років професійного досвіду
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* STEPS */}
      <Section background="white">
        <Container>
          <SectionTitle
            badge="Етапи роботи"
            title="Як відбувається відновлення обліку"
            subtitle="Послідовно визначаємо проблему, відновлюємо облік та перевіряємо результат."
          />

          <div className="mt-20 grid gap-8 lg:grid-cols-4">
            {steps.map((step, index) => (
              <Reveal key={step.number} delay={index * 0.08}>
                <div className="h-full rounded-[32px] border border-[var(--color-border)] bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-secondary)] hover:shadow-lg">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--color-primary)] text-lg font-bold text-white">
                    {step.number}
                  </div>

                  <h3 className="mt-7 text-2xl font-bold text-[var(--color-primary)]">
                    {step.title}
                  </h3>

                  <p className="mt-4 leading-7 text-[var(--color-text-light)]">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* WHAT YOU GET */}
      <Section background="light">
        <Container>
          <SectionTitle
            badge="Результат"
            title="Облік знову під контролем"
            subtitle="Мета роботи — не просто внести операції в облікову систему, а отримати зрозумілий та контрольований облік."
          />

          <div className="mx-auto mt-20 max-w-5xl">
            <Reveal>
              <div className="rounded-[36px] border border-[var(--color-border)] bg-white p-10 shadow-sm lg:p-14">
                <div className="grid gap-6 md:grid-cols-2">
                  {[
                    "Відновлений бухгалтерський облік",
                    "Систематизовані первинні документи",
                    "Виявлені та виправлені помилки",
                    "Перевірені податкові показники",
                    "Актуальна інформація про стан обліку",
                    "Рекомендації щодо подальшого ведення",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-4 rounded-2xl bg-[var(--color-background)] p-5"
                    >
                      <BadgeCheck
                        size={22}
                        className="mt-1 shrink-0 text-[var(--color-secondary)]"
                      />

                      <span className="leading-7 text-[var(--color-primary)]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex flex-col gap-6 rounded-3xl bg-[var(--color-primary)] p-8 text-white sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="text-2xl font-bold">
                      15 років професійного досвіду
                    </div>

                    <p className="mt-2 text-white/70">
                      Практичний досвід у бухгалтерському та податковому
                      обліку.
                    </p>
                  </div>

                  <ShieldCheck
                    size={46}
                    className="shrink-0 text-[var(--color-secondary)]"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section background="white">
        <Container>
          <SectionTitle
            badge="FAQ"
            title="Поширені запитання"
            subtitle="Відповіді на основні питання щодо відновлення бухгалтерського обліку."
          />

          <div className="mx-auto mt-20 max-w-4xl space-y-5">
            {faq.map((item, index) => (
              <Reveal key={item.question} delay={index * 0.06}>
                <div className="rounded-[28px] border border-[var(--color-border)] bg-white p-8 transition-all duration-300 hover:border-[var(--color-secondary)] hover:shadow-md">
                  <h3 className="text-xl font-bold text-[var(--color-primary)]">
                    {item.question}
                  </h3>

                  <p className="mt-4 leading-8 text-[var(--color-text-light)]">
                    {item.answer}
                  </p>
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
                Відновлення бухгалтерського обліку
              </span>

              <h2 className="mt-8 text-4xl font-bold leading-tight text-white lg:text-5xl">
                Потрібно відновити бухгалтерський облік?
              </h2>

              <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/75">
                Розкажіть про стан вашого обліку. Обговоримо ситуацію,
                необхідний період та можливий обсяг роботи.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <BdbButton href="/contacts">
                  Отримати консультацію
                </BdbButton>

                <BdbButton href="/calculator" variant="secondary">
                  Розрахувати вартість
                </BdbButton>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </SiteLayout>
  );
}