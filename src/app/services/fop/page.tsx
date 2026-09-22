import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Calculator,
  CheckCircle2,
  CreditCard,
  FileText,
  Landmark,
  Receipt,
  ShieldCheck,
  Users,
} from "lucide-react";

import SiteLayout from "@/core/bdb/layout/SiteLayout";
import Container from "@/core/layout/Container";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import BdbButton from "@/core/bdb/ui/BdbButton";

export const metadata: Metadata = {
  title: "Бухгалтер для ФОП",
  description:
    "Бухгалтерський супровід ФОП: облік, податки, звітність, ЄСВ, РРО та ПРРО, первинні документи. Понад 15 років професійного досвіду.",
  alternates: {
    canonical: "/services/fop",
  },
};

const features = [
  {
    icon: Calculator,
    title: "Бухгалтерський облік",
    description:
      "Ведення обліку та контроль господарських операцій відповідно до особливостей вашої діяльності.",
  },
  {
    icon: FileText,
    title: "Податкова звітність",
    description:
      "Підготовка та своєчасне подання необхідної податкової звітності, декларацій та інших документів.",
  },
  {
    icon: Receipt,
    title: "Первинні документи",
    description:
      "Консультації щодо оформлення документів та правильного відображення операцій у підприємницькій діяльності.",
  },
  {
    icon: CreditCard,
    title: "РРО та ПРРО",
    description:
      "Консультації щодо застосування РРО та ПРРО, розрахункових операцій і пов'язаних бухгалтерських питань.",
  },
];

const advantages = [
  "ФОП 2 та 3 групи",
  "Загальна система оподаткування",
  "ФОП із працівниками",
  "Контроль строків сплати податків",
  "Підготовка та подання звітності",
  "Дистанційний бухгалтерський супровід",
];

const clients = [
  {
    icon: BriefcaseBusiness,
    title: "Підприємці-початківці",
    description:
      "Допомога з організацією обліку, вибором системи оподаткування, документообігом та основними бухгалтерськими питаннями на старті.",
  },
  {
    icon: Calculator,
    title: "Діючі ФОП",
    description:
      "Постійний бухгалтерський супровід, контроль податків, звітності, документів та поточних облікових питань.",
  },
  {
    icon: Users,
    title: "ФОП із працівниками",
    description:
      "Нарахування заробітної плати, кадрові питання, відпустки, лікарняні та звітність, пов'язана з працівниками.",
  },
];

const steps = [
  {
    number: "01",
    title: "Знайомство",
    description:
      "Обговорюємо вид діяльності, систему оподаткування, наявність працівників, РРО/ПРРО та основні бухгалтерські завдання.",
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
      "Узгоджуємо формат співпраці, порядок передачі документів та організовуємо дистанційну роботу.",
  },
  {
    number: "04",
    title: "Постійний супровід",
    description:
      "Веду облік, контролюю податкові строки, готую звітність та консультую з поточних питань.",
  },
];

const faq = [
  {
    question: "Чи працюєте ви з ФОП на єдиному податку?",
    answer:
      "Так. Супроводжую ФОП 2 та 3 групи, допомагаю вести облік, контролюю строки сплати податків і готую необхідну звітність.",
  },
  {
    question: "Чи працюєте ви з ФОП на загальній системі?",
    answer:
      "Так. Можу вести облік доходів і витрат, працювати з первинними документами, допомагати з розрахунком податків та підготовкою звітності.",
  },
  {
    question: "Чи допомагаєте з РРО та ПРРО?",
    answer:
      "Так. Надаю консультації щодо застосування РРО та ПРРО, розрахункових операцій та пов'язаних із ними бухгалтерських питань.",
  },
  {
    question: "Чи працюєте з ФОП, у якого є працівники?",
    answer:
      "Так. Супровід може включати нарахування заробітної плати, кадрові питання, відпустки, лікарняні та відповідну звітність.",
  },
  {
    question: "Як відбувається співпраця?",
    answer:
      "Працюю дистанційно. Документи можна передавати в електронному вигляді, а робочі питання вирішувати телефоном, електронною поштою або через месенджери.",
  },
  {
    question: "Від чого залежить вартість супроводу?",
    answer:
      "Вартість визначається індивідуально та залежить від системи оподаткування, кількості операцій, наявності працівників, РРО/ПРРО та обсягу необхідних послуг.",
  },
];

export default function FopPage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <Section background="white" spacing="sm">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-secondary)]/25 bg-[var(--color-secondary)]/10 px-5 py-2 text-sm font-semibold text-[var(--color-primary)]">
                <BriefcaseBusiness size={17} aria-hidden="true" />
                Для фізичних осіб-підприємців
              </span>

              <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-[-1px] text-[var(--color-primary)] sm:text-5xl lg:text-6xl">
                Бухгалтерський супровід
                <span className="block text-[var(--color-secondary)]">
                  ФОП без зайвих складнощів
                </span>
              </h1>

              <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-[var(--color-text-light)]">
                Облік, податки, звітність, ЄСВ, первинні документи та
                консультації щодо РРО/ПРРО. Професійний бухгалтерський
                супровід ФОП дистанційно по всій Україні.
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
                  ФОП 2 та 3 групи
                </span>

                <span className="inline-flex items-center gap-2">
                  <CheckCircle2
                    size={17}
                    className="text-[var(--color-secondary)]"
                    aria-hidden="true"
                  />
                  Дистанційна робота
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
                Формат супроводу визначається відповідно до системи
                оподаткування, виду діяльності та потреб конкретного ФОП.
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
                    Формати роботи
                  </span>

                  <h3 className="mt-3 text-2xl font-bold text-[var(--color-primary)]">
                    Супровід відповідно до вашої ситуації
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
                Підтримка підприємців на різних етапах — від початку
                діяльності до постійного бухгалтерського супроводу.
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
                    Документи, звітність та робочі питання можна організувати
                    онлайн. Працюємо з ФОП незалежно від місця ведення
                    підприємницької діяльності.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* IMPORTANT FOP AREAS */}
      <Section background="light" spacing="sm">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex rounded-full bg-[var(--color-secondary)]/10 px-4 py-2 text-sm font-semibold text-[var(--color-primary)]">
                Основні питання
              </span>

              <h2 className="mt-5 text-4xl font-bold leading-tight tracking-[-1px] text-[var(--color-primary)] sm:text-5xl">
                Що контролюємо в роботі ФОП
              </h2>

              <p className="mt-5 text-[17px] leading-8 text-[var(--color-text-light)]">
                Залежно від вашої системи оподаткування та виду діяльності
                увага приділяється різним ділянкам обліку.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Landmark,
                title: "Податки",
                text: "Контроль строків нарахування та сплати обов'язкових платежів.",
              },
              {
                icon: FileText,
                title: "Звітність",
                text: "Підготовка та своєчасне подання необхідної звітності.",
              },
              {
                icon: Receipt,
                title: "Документи",
                text: "Порядок у первинних документах та облікових операціях.",
              },
              {
                icon: CreditCard,
                title: "РРО / ПРРО",
                text: "Консультації щодо розрахункових операцій та їх обліку.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.06}>
                  <div className="h-full rounded-[24px] border border-[var(--color-border)] bg-white p-6">
                    <Icon
                      size={22}
                      className="text-[var(--color-secondary)]"
                      aria-hidden="true"
                    />

                    <h3 className="mt-5 font-bold text-[var(--color-primary)]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[var(--color-text-light)]">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* PROCESS */}
      <Section background="white" spacing="sm">
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
                Простий та зрозумілий процес від першої консультації до
                постійного бухгалтерського супроводу.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-4 lg:grid-cols-4">
            {steps.map((step, index) => (
              <Reveal key={step.number} delay={index * 0.07}>
                <div className="h-full rounded-[24px] border border-[var(--color-border)] bg-white p-7">
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
      <Section background="light" spacing="sm">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
            <Reveal>
              <div>
                <span className="inline-flex rounded-full bg-[var(--color-secondary)]/10 px-4 py-2 text-sm font-semibold text-[var(--color-primary)]">
                  Переваги
                </span>

                <h2 className="mt-5 text-4xl font-bold leading-[1.1] tracking-[-1px] text-[var(--color-primary)] sm:text-5xl">
                  Менше рутини.
                  <span className="block text-[var(--color-secondary)]">
                    Більше часу для бізнесу.
                  </span>
                </h2>

                <p className="mt-6 text-[17px] leading-8 text-[var(--color-text-light)]">
                  Я беру на себе основні бухгалтерські та податкові питання,
                  контролюю важливі строки та допомагаю підтримувати порядок в
                  обліку.
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
                  "Контроль строків сплати податків",
                  "Підготовка та подання звітності",
                  "Оперативні консультації",
                  "Порядок у первинних документах",
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
      <Section background="white" spacing="sm">
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
                Відповіді на питання, які часто виникають у підприємців перед
                початком співпраці.
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
                    для вашого ФОП?
                  </span>
                </h2>

                <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
                  Розкажіть про свою діяльність та поточні бухгалтерські
                  питання. Обговоримо формат співпраці та необхідний обсяг
                  супроводу.
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