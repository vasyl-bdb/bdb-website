import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Building2,
  Calculator,
  CheckCircle2,
  Clock3,
  FileText,
  ShieldCheck,
  Users,
} from "lucide-react";

import SiteLayout from "@/core/bdb/layout/SiteLayout";
import Container from "@/core/layout/Container";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import BdbButton from "@/core/bdb/ui/BdbButton";

export const metadata: Metadata = {
  title: "Бухгалтер для ТОВ",
  description:
    "Комплексний бухгалтерський супровід ТОВ: бухгалтерський і податковий облік, ПДВ, зарплата, звітність та первинні документи. Понад 15 років професійного досвіду.",
  alternates: {
    canonical: "/services/tov",
  },
};

const features = [
  {
    icon: Calculator,
    title: "Бухгалтерський облік",
    description:
      "Організація та ведення бухгалтерського обліку, обробка первинних документів і відображення господарських операцій.",
  },
  {
    icon: FileText,
    title: "Податкова та фінансова звітність",
    description:
      "Підготовка, перевірка та своєчасне подання необхідної податкової і фінансової звітності.",
  },
  {
    icon: ShieldCheck,
    title: "Податковий облік",
    description:
      "Контроль податкових зобов'язань, ПДВ, податків із заробітної плати та інших платежів підприємства.",
  },
  {
    icon: BarChart3,
    title: "Фінансова інформація",
    description:
      "Підготовка облікової та фінансової інформації, необхідної керівнику для контролю діяльності підприємства.",
  },
];

const advantages = [
  "Понад 15 років професійного досвіду",
  "Досвід роботи з ТОВ різних напрямів діяльності",
  "Дистанційний бухгалтерський супровід по всій Україні",
  "Контроль строків подання звітності та сплати податків",
  "Оперативний зв'язок і консультації",
  "Робота з електронним документообігом",
];

const clients = [
  {
    icon: Building2,
    title: "Новостворені ТОВ",
    description:
      "Допомога з організацією бухгалтерського обліку, документообігу та облікових процесів із початку діяльності.",
  },
  {
    icon: Users,
    title: "Малий та середній бізнес",
    description:
      "Комплексний бухгалтерський і податковий супровід підприємств із працівниками та регулярними господарськими операціями.",
  },
  {
    icon: Clock3,
    title: "Керівники, які хочуть зосередитися на бізнесі",
    description:
      "Поточні бухгалтерські процеси, звітність і контроль податкових строків — під професійним супроводом.",
  },
];

const steps = [
  {
    number: "01",
    title: "Знайомство",
    description:
      "Обговорюємо діяльність підприємства, систему оподаткування, кількість працівників та основні бухгалтерські завдання.",
  },
  {
    number: "02",
    title: "Аналіз",
    description:
      "Перевіряю поточний стан обліку, документи, звітність та питання, які потребують уваги.",
  },
  {
    number: "03",
    title: "Організація роботи",
    description:
      "Узгоджуємо формат співпраці, підписуємо договір та організовуємо передачу документів і доступів.",
  },
  {
    number: "04",
    title: "Постійний супровід",
    description:
      "Веду облік, готую звітність, контролюю строки та надаю оперативні бухгалтерські консультації.",
  },
];

const faq = [
  {
    question:
      "Чи можна передати бухгалтерський облік, якщо підприємство вже працює?",
    answer:
      "Так. Спочатку проводиться аналіз поточного стану обліку та документів. За необхідності визначаються питання, які потрібно виправити або відновити, після чого організовується подальше ведення обліку.",
  },
  {
    question: "Чи працюєте ви дистанційно?",
    answer:
      "Так. Співпраця може повністю здійснюватися онлайн. Документообіг, звітність та робочі питання організовуються через електронні сервіси, електронну пошту та месенджери.",
  },
  {
    question: "Чи працюєте з ПДВ?",
    answer:
      "Так. Можу вести бухгалтерський і податковий облік підприємств — платників ПДВ, контролювати податкові зобов'язання та готувати необхідну звітність.",
  },
  {
    question: "Від чого залежить вартість бухгалтерського супроводу?",
    answer:
      "Вартість визначається індивідуально та залежить від системи оподаткування, кількості працівників, кількості господарських операцій і первинних документів, наявності ПДВ та специфіки діяльності підприємства.",
  },
];

export default function AccountingTovPage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <Section background="white" spacing="sm">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-secondary)]/25 bg-[var(--color-secondary)]/10 px-5 py-2 text-sm font-semibold text-[var(--color-primary)]">
                <Building2 size={17} aria-hidden="true" />
                Для товариств з обмеженою відповідальністю
              </span>

              <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-[-1px] text-[var(--color-primary)] sm:text-5xl lg:text-6xl">
                Бухгалтерський супровід
                <span className="block text-[var(--color-secondary)]">
                  ТОВ без зайвих складнощів
                </span>
              </h1>

              <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-[var(--color-text-light)]">
                Бухгалтерський та податковий облік, ПДВ, заробітна плата,
                первинні документи та звітність. Ви керуєте бізнесом — я
                забезпечую порядок у бухгалтерії.
              </p>

              <div className="mt-9 flex flex-wrap justify-center gap-4">
                <BdbButton href="/contacts">
                  Отримати консультацію
                  <ArrowRight size={17} aria-hidden="true" />
                </BdbButton>

                <BdbButton href="/calculator" variant="outline">
                  Розрахувати вартість
                  <Calculator size={17} aria-hidden="true" />
                </BdbButton>
              </div>

              <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-[var(--color-text-light)]">
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2
                    size={17}
                    className="text-[var(--color-secondary)]"
                    aria-hidden="true"
                  />
                  Понад 15 років досвіду
                </span>

                <span className="inline-flex items-center gap-2">
                  <CheckCircle2
                    size={17}
                    className="text-[var(--color-secondary)]"
                    aria-hidden="true"
                  />
                  Дистанційна робота
                </span>

                <span className="inline-flex items-center gap-2">
                  <CheckCircle2
                    size={17}
                    className="text-[var(--color-secondary)]"
                    aria-hidden="true"
                  />
                  Персональний супровід
                </span>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* FEATURES */}
      <Section background="light" spacing="sm">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex rounded-full bg-[var(--color-secondary)]/10 px-4 py-2 text-sm font-semibold text-[var(--color-primary)]">
                Що входить у супровід
              </span>

              <h2 className="mt-5 text-4xl font-bold leading-tight tracking-[-1px] text-[var(--color-primary)] sm:text-5xl">
                Основні напрямки роботи
              </h2>

              <p className="mt-5 text-[17px] leading-8 text-[var(--color-text-light)]">
                Формат супроводу визначається відповідно до діяльності та
                потреб конкретного підприємства.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <Reveal key={feature.title} delay={index * 0.07}>
                  <div className="group h-full rounded-[26px] border border-[var(--color-border)] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-secondary)]/40 hover:shadow-[0_18px_45px_rgba(0,0,0,0.07)] sm:p-8">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-primary)]/7 text-[var(--color-primary)] transition-colors duration-300 group-hover:bg-[var(--color-secondary)] group-hover:text-[var(--color-primary)]">
                      <Icon size={23} aria-hidden="true" />
                    </div>

                    <h3 className="mt-6 text-xl font-bold text-[var(--color-primary)]">
                      {feature.title}
                    </h3>

                    <p className="mt-3 text-[15px] leading-7 text-[var(--color-text-light)]">
                      {feature.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-14 rounded-[28px] border border-[var(--color-border)] bg-white p-7 sm:p-9">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-sm">
                  <span className="text-sm font-semibold text-[var(--color-secondary)]">
                    Додаткові переваги
                  </span>

                  <h3 className="mt-3 text-2xl font-bold text-[var(--color-primary)]">
                    Що важливо для керівника
                  </h3>
                </div>

                <div className="grid flex-1 gap-x-8 gap-y-4 sm:grid-cols-2 lg:max-w-3xl">
                  {advantages.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <BadgeCheck
                        size={19}
                        className="mt-0.5 shrink-0 text-[var(--color-secondary)]"
                        aria-hidden="true"
                      />

                      <span className="text-[15px] leading-6 text-[var(--color-text-light)]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* FOR WHOM */}
      <Section background="white" spacing="sm">
        <Container>
          <Reveal>
            <div className="max-w-3xl">
              <span className="inline-flex rounded-full bg-[var(--color-secondary)]/10 px-4 py-2 text-sm font-semibold text-[var(--color-primary)]">
                Для кого
              </span>

              <h2 className="mt-5 text-4xl font-bold leading-tight tracking-[-1px] text-[var(--color-primary)] sm:text-5xl">
                Кому підійде супровід BDB
              </h2>

              <p className="mt-5 max-w-2xl text-[17px] leading-8 text-[var(--color-text-light)]">
                Підбираємо формат бухгалтерського обслуговування відповідно до
                особливостей діяльності та обсягу роботи.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {clients.map((client, index) => {
              const Icon = client.icon;

              return (
                <Reveal key={client.title} delay={index * 0.08}>
                  <div className="h-full rounded-[26px] border border-[var(--color-border)] bg-white p-7 shadow-sm">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]">
                      <Icon size={23} aria-hidden="true" />
                    </div>

                    <h3 className="mt-6 text-xl font-bold text-[var(--color-primary)]">
                      {client.title}
                    </h3>

                    <p className="mt-3 text-[15px] leading-7 text-[var(--color-text-light)]">
                      {client.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.15}>
            <div className="mt-12 rounded-[28px] border border-[var(--color-border)] bg-[var(--color-background)] p-8 sm:p-10">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-primary)] text-white">
                  <ShieldCheck size={23} aria-hidden="true" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[var(--color-primary)]">
                    Дистанційний бухгалтерський супровід
                  </h3>

                  <p className="mt-2 max-w-3xl leading-7 text-[var(--color-text-light)]">
                    Документообіг, звітність та робочі питання організовуються
                    онлайн, що дозволяє працювати з підприємствами по всій
                    Україні.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* PROCESS */}
      <Section background="light" spacing="sm">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex rounded-full bg-[var(--color-secondary)]/10 px-4 py-2 text-sm font-semibold text-[var(--color-primary)]">
                Етапи роботи
              </span>

              <h2 className="mt-5 text-4xl font-bold leading-tight tracking-[-1px] text-[var(--color-primary)] sm:text-5xl">
                Як проходить співпраця
              </h2>

              <p className="mt-5 text-[17px] leading-8 text-[var(--color-text-light)]">
                Простий та зрозумілий процес від першої розмови до постійного
                бухгалтерського супроводу.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-4 lg:grid-cols-4">
            {steps.map((step, index) => (
              <Reveal key={step.number} delay={index * 0.07}>
                <div className="relative h-full rounded-[24px] border border-[var(--color-border)] bg-white p-7">
                  <div className="text-sm font-bold tracking-[0.15em] text-[var(--color-secondary)]">
                    {step.number}
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-[var(--color-primary)]">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-[15px] leading-7 text-[var(--color-text-light)]">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* VALUE */}
      <Section background="white" spacing="sm">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
            <Reveal>
              <div>
                <span className="inline-flex rounded-full bg-[var(--color-secondary)]/10 px-4 py-2 text-sm font-semibold text-[var(--color-primary)]">
                  Переваги
                </span>

                <h2 className="mt-5 text-4xl font-bold leading-[1.1] tracking-[-1px] text-[var(--color-primary)] sm:text-5xl">
                  Ви керуєте бізнесом.
                  <span className="block text-[var(--color-secondary)]">
                    Я контролюю бухгалтерію.
                  </span>
                </h2>

                <p className="mt-6 text-[17px] leading-8 text-[var(--color-text-light)]">
                  Мета бухгалтерського супроводу — не просто підготувати
                  звітність, а забезпечити порядок в обліку та своєчасність
                  виконання бухгалтерських і податкових завдань.
                </p>

                <div className="mt-8">
                  <BdbButton href="/contacts">
                    Обговорити співпрацю
                    <ArrowRight size={17} aria-hidden="true" />
                  </BdbButton>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Персональний бухгалтерський супровід",
                  "Контроль строків звітності",
                  "Оперативні консультації",
                  "Порядок у первинних документах",
                  "Електронний документообіг",
                  "Понад 15 років професійного досвіду",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-[var(--color-border)] bg-white p-5"
                  >
                    <CheckCircle2
                      size={20}
                      className="mt-0.5 shrink-0 text-[var(--color-secondary)]"
                      aria-hidden="true"
                    />

                    <span className="text-[15px] leading-6 text-[var(--color-primary)]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section background="light" spacing="sm">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex rounded-full bg-[var(--color-secondary)]/10 px-4 py-2 text-sm font-semibold text-[var(--color-primary)]">
                FAQ
              </span>

              <h2 className="mt-5 text-4xl font-bold leading-tight tracking-[-1px] text-[var(--color-primary)] sm:text-5xl">
                Поширені запитання
              </h2>

              <p className="mt-5 text-[17px] leading-8 text-[var(--color-text-light)]">
                Відповіді на питання, які часто виникають перед початком
                співпраці.
              </p>
            </div>
          </Reveal>

          <div className="mx-auto mt-14 max-w-4xl space-y-3">
            {faq.map((item, index) => (
              <Reveal key={item.question} delay={index * 0.06}>
                <div className="rounded-[24px] border border-[var(--color-border)] bg-white p-7">
                  <h3 className="text-lg font-bold leading-7 text-[var(--color-primary)]">
                    {item.question}
                  </h3>

                  <p className="mt-3 text-[15px] leading-7 text-[var(--color-text-light)]">
                    {item.answer}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section background="primary" spacing="sm">
        <Container>
          <Reveal>
            <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[32px] border border-white/10 bg-white/5 px-8 py-14 text-center sm:px-12 lg:px-16 lg:py-16">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-28 -top-28 h-64 w-64 rounded-full border border-white/10"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full border border-[var(--color-secondary)]/20"
              />

              <div className="relative">
                <span className="inline-flex rounded-full border border-[var(--color-secondary)]/40 bg-[var(--color-secondary)]/10 px-5 py-2 text-sm font-semibold text-[var(--color-secondary)]">
                  Почнемо співпрацю
                </span>

                <h2 className="mt-7 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                  Потрібен бухгалтер
                  <span className="block text-[var(--color-secondary)]">
                    для вашого ТОВ?
                  </span>
                </h2>

                <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
                  Розкажіть про підприємство та поточні бухгалтерські завдання.
                  Обговоримо формат співпраці та обсяг необхідного супроводу.
                </p>

                <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                  <Link
                    href="/contacts"
                    className="inline-flex items-center justify-center gap-3 rounded-xl bg-white px-7 py-4 font-semibold text-[var(--color-primary)] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    Отримати консультацію
                    <ArrowRight size={17} aria-hidden="true" />
                  </Link>

                  <Link
                    href="/calculator"
                    className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/60 px-7 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[var(--color-primary)]"
                  >
                    Розрахувати вартість
                    <Calculator size={17} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </SiteLayout>
  );
}