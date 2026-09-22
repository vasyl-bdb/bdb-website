import type { Metadata } from "next";
import {
  Truck,
  Calculator,
  FileText,
  Route,
  Fuel,
  Receipt,
  ShieldCheck,
  BadgeCheck,
  ClipboardCheck,
} from "lucide-react";

import SiteLayout from "@/core/bdb/layout/SiteLayout";
import Container from "@/core/layout/Container";

import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";

import FeatureCard from "@/core/bdb/cards/FeatureCard";
import BdbButton from "@/core/bdb/ui/BdbButton";

export const metadata: Metadata = {
  title: "Бухгалтер для транспортних та логістичних компаній",
  description:
    "Бухгалтерський супровід транспортних і логістичних компаній: облік перевезень, первинні документи, доходи, витрати, розрахунки та звітність. 15 років професійного досвіду.",
  alternates: {
    canonical: "/services/logistics",
  },
};

const services = [
  {
    icon: <Calculator size={28} />,
    title: "Бухгалтерський облік",
    description:
      "Ведення бухгалтерського обліку транспортної або логістичної компанії з урахуванням специфіки діяльності.",
  },
  {
    icon: <FileText size={28} />,
    title: "Первинні документи",
    description:
      "Опрацювання та контроль документів за перевезеннями, послугами, витратами та розрахунками.",
  },
  {
    icon: <Route size={28} />,
    title: "Облік перевезень",
    description:
      "Документальне оформлення транспортних операцій, доходів та витрат за наданими послугами.",
  },
  {
    icon: <Receipt size={28} />,
    title: "Розрахунки з клієнтами",
    description:
      "Контроль взаєморозрахунків із замовниками та постачальниками, оплат і заборгованості.",
  },
];

const focusAreas = [
  "Доходи від транспортних послуг",
  "Витрати на перевезення",
  "Паливо та інші експлуатаційні витрати",
  "Розрахунки з клієнтами та постачальниками",
  "Первинні документи за господарськими операціями",
  "Податкова та фінансова звітність",
];

const clients = [
  {
    icon: <Truck size={28} />,
    title: "Транспортні компанії",
    description:
      "Бухгалтерський супровід компаній, які здійснюють вантажні або інші транспортні перевезення.",
  },
  {
    icon: <Route size={28} />,
    title: "Логістичні компанії",
    description:
      "Облік операцій, пов'язаних з організацією перевезень, логістичними та експедиторськими послугами.",
  },
  {
    icon: <Fuel size={28} />,
    title: "Компанії з власним автопарком",
    description:
      "Облік витрат, пов'язаних з експлуатацією транспортних засобів та організацією господарської діяльності.",
  },
];

const steps = [
  {
    number: "01",
    title: "Знайомство",
    description:
      "Обговорюємо діяльність компанії, види перевезень, документообіг, кількість операцій та поточний стан обліку.",
  },
  {
    number: "02",
    title: "Аналіз",
    description:
      "Перевіряю документи, облік доходів і витрат, взаєморозрахунки та порядок оформлення господарських операцій.",
  },
  {
    number: "03",
    title: "Організація",
    description:
      "Узгоджуємо порядок передачі документів, документообіг та формат подальшого бухгалтерського супроводу.",
  },
  {
    number: "04",
    title: "Супровід",
    description:
      "Веду облік, контролюю документи та розрахунки, готую звітність і консультую з поточних питань.",
  },
];

const faq = [
  {
    question: "Чи працюєте ви з транспортними компаніями?",
    answer:
      "Так. Надаю бухгалтерський супровід транспортним компаніям, які здійснюють вантажні та інші перевезення.",
  },
  {
    question: "Чи працюєте ви з логістичними та експедиторськими компаніями?",
    answer:
      "Так. Можу забезпечити бухгалтерський супровід логістичних та експедиторських компаній з урахуванням специфіки їх операцій.",
  },
  {
    question: "Чи можна передати бухгалтерію транспортної компанії на аутсорсинг?",
    answer:
      "Так. Бухгалтерський супровід може здійснюватися дистанційно: документи передаються в електронному вигляді, а облік і звітність ведуться системно.",
  },
  {
    question: "Чи враховуєте витрати на паливо та експлуатацію автотранспорту?",
    answer:
      "Так. Облік витрат, пов'язаних з транспортною діяльністю, організовується відповідно до характеру операцій та наявних первинних документів.",
  },
  {
    question: "Чи працюєте ви з компаніями з власним автопарком?",
    answer:
      "Так. Можу супроводжувати бухгалтерський облік компаній, які використовують власні транспортні засоби у господарській діяльності.",
  },
  {
    question: "Від чого залежить вартість супроводу?",
    answer:
      "Вартість залежить від кількості операцій, обсягу первинних документів, кількості транспортних засобів, працівників, контрагентів та необхідного обсягу бухгалтерських послуг.",
  },
];

export default function LogisticsPage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <Section background="white">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-5xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)]/10 px-5 py-2 text-sm font-semibold text-[var(--color-primary)]">
                <Truck size={18} />
                Бухгалтерія для логістики та транспорту
              </div>

              <h1 className="text-5xl font-bold leading-tight text-[var(--color-primary)] lg:text-6xl">
                Бухгалтерський супровід
                <br />
                транспортних і логістичних компаній
              </h1>

              <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[var(--color-text-light)]">
                Допомагаю транспортним та логістичним компаніям вести
                бухгалтерський облік, контролювати документи, доходи, витрати,
                розрахунки та своєчасно подавати звітність.
              </p>

              <div className="mt-12 flex flex-wrap justify-center gap-5">
                <BdbButton href="/contacts">
                  Отримати консультацію
                </BdbButton>

                <BdbButton href="/services" variant="outline">
                  Усі послуги
                </BdbButton>
              </div>

              <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-[var(--color-text-light)]">
                <span>✓ Транспорт і логістика</span>
                <span>✓ Дистанційна робота</span>
                <span>✓ Персональний супровід</span>
                <span>✓ 15 років досвіду</span>
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
            title="Бухгалтерія для транспортного та логістичного бізнесу"
            subtitle="Беру на себе бухгалтерський облік, документи та звітність, щоб керівник міг зосередитися на роботі та розвитку бізнесу."
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
            badge="Специфіка діяльності"
            title="Особлива увага — доходам, витратам та документам"
            subtitle="У транспортному та логістичному бізнесі важливо, щоб бухгалтерський облік відповідав реальним господарським операціям і мав належне документальне підтвердження."
          />

          <div className="mt-20 grid gap-10 lg:grid-cols-2 lg:items-start">
            <Reveal>
              <div className="rounded-[36px] border border-[var(--color-border)] bg-white p-10 shadow-sm lg:p-12">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--color-primary)] text-white">
                  <Route size={28} />
                </div>

                <h3 className="mt-8 text-3xl font-bold text-[var(--color-primary)]">
                  Що контролюємо
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
                  <ClipboardCheck size={28} />
                </div>

                <h3 className="mt-8 text-3xl font-bold text-[var(--color-primary)]">
                  Документальне підтвердження
                </h3>

                <p className="mt-6 leading-8 text-[var(--color-text-light)]">
                  Важливо, щоб перевезення, послуги, витрати та розрахунки були
                  підтверджені відповідними первинними документами. Допомагаю
                  організувати документообіг та відображення операцій в обліку.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    "Договори",
                    "Акти",
                    "Транспортні документи",
                    "Рахунки",
                    "Платіжні документи",
                    "Документи на витрати",
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
            title="Супровід транспортного та логістичного бізнесу"
            subtitle="Формат та обсяг послуг визначаються залежно від виду діяльності та потреб конкретної компанії."
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
                    Документи та інформацію можна передавати в електронному
                    вигляді. Консультації проводяться телефоном, у месенджерах
                    або онлайн.
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
            badge="Етапи співпраці"
            title="Як починаємо роботу"
            subtitle="Простий порядок передачі бухгалтерії без зайвої бюрократії."
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
            title="Порядок в обліку та розрахунках"
            subtitle="Ви отримуєте системний бухгалтерський супровід і актуальну інформацію про стан обліку компанії."
          />

          <div className="mx-auto mt-20 max-w-5xl">
            <Reveal>
              <div className="rounded-[36px] border border-[var(--color-border)] bg-white p-10 shadow-sm lg:p-14">
                <div className="grid gap-6 md:grid-cols-2">
                  {[
                    "Ведення бухгалтерського обліку",
                    "Контроль строків подання звітності",
                    "Перевірка первинних документів",
                    "Облік доходів та витрат",
                    "Контроль взаєморозрахунків",
                    "Консультації з поточних питань",
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
            subtitle="Короткі відповіді на основні питання щодо бухгалтерського супроводу транспортних та логістичних компаній."
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
                Бухгалтерія для логістики та транспорту
              </span>

              <h2 className="mt-8 text-4xl font-bold leading-tight text-white lg:text-5xl">
                Потрібен бухгалтерський супровід?
              </h2>

              <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/75">
                Обговоримо діяльність вашої компанії, поточний стан обліку та
                формат подальшої співпраці.
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