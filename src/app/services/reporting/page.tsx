import type { Metadata } from "next";

import {
  FileText,
  Calculator,
  CalendarCheck,
  ShieldCheck,
  Landmark,
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
  title: "Податкова та фінансова звітність",
  description:
    "Підготовка та подання податкової, фінансової та іншої звітності для ФОП, ТОВ, ГО та благодійних фондів. Розрахунок податків, контроль строків і перевірка звітності. 15 років професійного досвіду.",
  alternates: {
    canonical: "/services/reporting",
  },
};

const services = [
  {
    icon: <FileText size={28} />,
    title: "Підготовка звітності",
    description:
      "Підготовка та подання податкової, фінансової та іншої обов'язкової звітності відповідно до вимог законодавства України.",
  },
  {
    icon: <Calculator size={28} />,
    title: "Розрахунок податків",
    description:
      "Розрахунок податкових зобов'язань, ЄСВ та інших обов'язкових платежів перед поданням звітності.",
  },
  {
    icon: <CalendarCheck size={28} />,
    title: "Контроль строків",
    description:
      "Контроль строків подання звітності та сплати податків, щоб своєчасно виконувати податкові обов'язки.",
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Перевірка звітності",
    description:
      "Перевірка показників та документів перед поданням, виявлення можливих помилок і невідповідностей.",
  },
];

const reportingAreas = [
  "Податкова звітність",
  "Фінансова звітність",
  "Звітність щодо працівників",
  "ЄСВ та заробітна плата",
  "Звітність ФОП",
  "Звітність ТОВ",
  "Звітність неприбуткових організацій",
  "Контроль строків подання",
];

const clients = [
  {
    icon: <Landmark size={28} />,
    title: "ТОВ",
    description:
      "Підготовка та подання податкової і фінансової звітності товариств з обмеженою відповідальністю.",
  },
  {
    icon: <Calculator size={28} />,
    title: "ФОП",
    description:
      "Підготовка звітності фізичних осіб — підприємців відповідно до системи оподаткування та виду діяльності.",
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Неприбуткові організації",
    description:
      "Звітність громадських організацій, благодійних фондів та інших неприбуткових організацій.",
  },
];

const steps = [
  {
    number: "01",
    title: "Отримання документів",
    description:
      "Отримую необхідні документи та інформацію для формування звітності.",
  },
  {
    number: "02",
    title: "Перевірка даних",
    description:
      "Перевіряю облікові дані, показники та правильність відображення операцій.",
  },
  {
    number: "03",
    title: "Формування",
    description:
      "Розраховую податкові зобов'язання та формую необхідні звіти.",
  },
  {
    number: "04",
    title: "Подання",
    description:
      "Подаю звітність до контролюючих органів та контролюю отримання квитанцій.",
  },
];

const faq = [
  {
    question: "Яку звітність ви готуєте?",
    answer:
      "Готую податкову, фінансову та іншу обов'язкову звітність для ФОП, ТОВ та неприбуткових організацій відповідно до їхньої системи оподаткування та виду діяльності.",
  },
  {
    question: "Чи контролюєте ви строки подання звітності?",
    answer:
      "Так. Контроль строків подання звітності та сплати податків є частиною бухгалтерського супроводу.",
  },
  {
    question: "Чи можна замовити тільки підготовку звітності?",
    answer:
      "Так. Можна замовити окрему послугу з підготовки та подання звітності або комплексний бухгалтерський супровід.",
  },
  {
    question: "Чи перевіряєте ви звітність перед поданням?",
    answer:
      "Так. Перед поданням перевіряю основні показники, відповідність даних бухгалтерського обліку та можливі помилки.",
  },
  {
    question: "Як передавати документи?",
    answer:
      "Співпраця здійснюється дистанційно. Документи можна передавати в електронному вигляді, а поточні питання вирішувати телефоном або в месенджерах.",
  },
];

export default function ReportingPage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <Section background="white">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-5xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)]/10 px-5 py-2 text-sm font-semibold text-[var(--color-primary)]">
                <FileText size={18} />
                Податкова та фінансова звітність
              </div>

              <h1 className="text-5xl font-bold leading-tight text-[var(--color-primary)] lg:text-6xl">
                Податкова та фінансова
                <br />
                звітність без зайвих турбот
              </h1>

              <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[var(--color-text-light)]">
                Підготовка та подання звітності для ФОП, ТОВ та
                неприбуткових організацій. Контролюю строки, перевіряю
                показники та допомагаю своєчасно виконувати податкові
                зобов'язання.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-[var(--color-text-light)]">
                <span>✓ Податкова та фінансова звітність</span>
                <span>✓ Дистанційна робота</span>
                <span>✓ Персональний супровід</span>
                <span>✓ 15 років досвіду</span>
              </div>

              <div className="mt-10 flex flex-wrap justify-center gap-5">
                <BdbButton href="/contacts">
                  Отримати консультацію
                </BdbButton>

                <BdbButton href="/services" variant="outline">
                  Усі послуги
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
            title="Комплексний супровід звітності"
            subtitle="Беру на себе підготовку, перевірку та подання необхідної звітності, а також контроль податкових строків."
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
            title="Основні напрямки звітності"
            subtitle="Перелік звітності залежить від організаційно-правової форми, системи оподаткування, виду діяльності та наявності працівників."
          />

          <div className="mt-20 grid gap-10 lg:grid-cols-2">
            <Reveal>
              <div className="rounded-[36px] border border-[var(--color-border)] bg-white p-10 shadow-sm lg:p-12">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--color-primary)] text-white">
                  <FileText size={28} />
                </div>

                <h3 className="mt-8 text-3xl font-bold text-[var(--color-primary)]">
                  Працюю з різними видами звітності
                </h3>

                <div className="mt-8 space-y-5">
                  {reportingAreas.map((item) => (
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
                  <CalendarCheck size={28} />
                </div>

                <h3 className="mt-8 text-3xl font-bold text-[var(--color-primary)]">
                  Контроль строків
                </h3>

                <p className="mt-6 leading-8 text-[var(--color-text-light)]">
                  Податкова звітність потребує системного контролю строків
                  подання та сплати податків. Допомагаю організувати цей
                  процес, щоб необхідні звіти та платежі виконувалися
                  своєчасно.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    "Строки подання",
                    "Податкові платежі",
                    "Перевірка даних",
                    "Квитанції",
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
            title="Звітність для різних форм бізнесу"
            subtitle="Формат роботи та перелік звітності визначаються відповідно до вашої діяльності, системи оподаткування та особливостей обліку."
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
                    Документи можна передавати в електронному вигляді, а
                    поточні питання вирішувати телефоном, у месенджерах або
                    онлайн.
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
            title="Як проходить підготовка звітності"
            subtitle="Простий та зрозумілий процес від отримання документів до подання звітності."
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
            title="Звітність під контролем"
            subtitle="Ви передаєте мені бухгалтерську частину роботи, а самі можете зосередитися на бізнесі."
          />

          <div className="mx-auto mt-20 max-w-5xl">
            <Reveal>
              <div className="rounded-[36px] border border-[var(--color-border)] bg-white p-10 shadow-sm lg:p-14">
                <div className="grid gap-6 md:grid-cols-2">
                  {[
                    "Своєчасна підготовка звітності",
                    "Контроль податкових строків",
                    "Перевірка показників перед поданням",
                    "Розрахунок податкових зобов'язань",
                    "Подання звітності в електронному вигляді",
                    "Контроль отримання квитанцій",
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
                      Практичний бухгалтерський супровід різних напрямів
                      діяльності.
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
            subtitle="Відповіді на основні питання щодо підготовки та подання звітності."
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
                Бухгалтерська звітність
              </span>

              <h2 className="mt-8 text-4xl font-bold leading-tight text-white lg:text-5xl">
                Потрібна допомога зі звітністю?
              </h2>

              <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/75">
                Обговоримо вашу систему оподаткування, вид діяльності,
                перелік звітності та формат подальшої співпраці.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <BdbButton href="/contacts">
                  Отримати консультацію
                </BdbButton>

                <BdbButton href="/services" variant="secondary">
                  Усі послуги
                </BdbButton>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </SiteLayout>
  );
}