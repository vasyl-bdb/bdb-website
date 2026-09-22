
import type { Metadata } from "next";
import {
  Factory,
  Calculator,
  FileText,
  Package,
  BarChart3,
  ShieldCheck,
  ClipboardCheck,
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
  title: "Бухгалтер для виробничого підприємства",
  description:
    "Бухгалтерський супровід виробничих підприємств: облік матеріалів, виробничих витрат, собівартості, готової продукції, первинних документів та звітності. 15 років професійного досвіду.",
  alternates: {
    canonical: "/services/manufacturing",
  },
};

const services = [
  {
    icon: <Calculator size={28} />,
    title: "Бухгалтерський облік виробництва",
    description:
      "Ведення бухгалтерського обліку виробничого підприємства з урахуванням особливостей його діяльності та документообігу.",
  },
  {
    icon: <Package size={28} />,
    title: "Облік матеріалів",
    description:
      "Облік придбання, оприбуткування, руху та використання сировини, матеріалів, комплектуючих та інших запасів.",
  },
  {
    icon: <BarChart3 size={28} />,
    title: "Облік собівартості",
    description:
      "Облік виробничих витрат та формування собівартості продукції відповідно до організації виробничого процесу.",
  },
  {
    icon: <FileText size={28} />,
    title: "Первинні документи",
    description:
      "Контроль та опрацювання первинних документів, пов'язаних із придбанням, виробництвом, рухом матеріалів та реалізацією продукції.",
  },
];

const focusAreas = [
  "Придбання та облік матеріалів",
  "Передача матеріалів у виробництво",
  "Облік виробничих витрат",
  "Формування собівартості продукції",
  "Облік готової продукції",
  "Контроль руху матеріальних цінностей",
  "Податкова та фінансова звітність",
  "Консультації з бухгалтерського та податкового обліку",
];

const clients = [
  {
    icon: <Factory size={28} />,
    title: "Виробничі підприємства",
    description:
      "Бухгалтерський супровід підприємств, які здійснюють виробництво продукції та мають власні виробничі процеси.",
  },
  {
    icon: <Package size={28} />,
    title: "Бізнес із матеріальними запасами",
    description:
      "Облік підприємств зі значним обсягом сировини, матеріалів, комплектуючих та готової продукції.",
  },
  {
    icon: <Calculator size={28} />,
    title: "Підприємства, що зростають",
    description:
      "Допомога в упорядкуванні бухгалтерського обліку та отриманні достовірної інформації про витрати і фінансовий результат.",
  },
];

const steps = [
  {
    number: "01",
    title: "Аналіз",
    description:
      "Обговорюємо діяльність підприємства, виробничі процеси, документообіг та поточний стан бухгалтерського обліку.",
  },
  {
    number: "02",
    title: "Організація",
    description:
      "Визначаємо порядок обліку матеріалів, виробничих витрат, готової продукції та необхідного документообігу.",
  },
  {
    number: "03",
    title: "Ведення обліку",
    description:
      "Своєчасно відображаю господарські операції, контролюю документи та забезпечую системний бухгалтерський облік.",
  },
  {
    number: "04",
    title: "Звітність",
    description:
      "Готую та подаю необхідну звітність, контролюю податкові зобов'язання та консультую з поточних питань.",
  },
];

const faq = [
  {
    question: "Чи працюєте ви з виробничими підприємствами?",
    answer:
      "Так. Надаю бухгалтерський супровід виробничим підприємствам з урахуванням особливостей виробничого процесу, документообігу та обліку матеріалів.",
  },
  {
    question: "Чи ведете облік матеріалів та сировини?",
    answer:
      "Так. Облік може включати придбання, оприбуткування, рух, передачу у виробництво та списання матеріалів відповідно до господарських операцій і первинних документів.",
  },
  {
    question: "Чи займаєтеся обліком виробничих витрат?",
    answer:
      "Так. Виробничі витрати відображаються в бухгалтерському обліку відповідно до характеру операцій та організації виробничого процесу.",
  },
  {
    question: "Чи допомагаєте з формуванням собівартості?",
    answer:
      "Так. Порядок формування собівартості визначається з урахуванням виду продукції, виробничого процесу та прийнятої на підприємстві системи обліку.",
  },
  {
    question: "Чи можна передати бухгалтерію виробничого підприємства на аутсорсинг?",
    answer:
      "Так. Бухгалтерський супровід може здійснюватися дистанційно, а документи та необхідна інформація передаватися в електронному вигляді.",
  },
  {
    question: "Від чого залежить вартість бухгалтерського супроводу?",
    answer:
      "Вартість залежить від обсягу операцій, кількості первинних документів, номенклатури матеріалів, особливостей виробництва, кількості працівників та необхідного обсягу послуг.",
  },
];

export default function ManufacturingPage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <Section background="white">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-5xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)]/10 px-5 py-2 text-sm font-semibold text-[var(--color-primary)]">
                <Factory size={18} />
                Бухгалтерія для виробництва
              </div>

              <h1 className="text-5xl font-bold leading-tight text-[var(--color-primary)] lg:text-6xl">
                Бухгалтерський супровід
                <br />
                виробничих підприємств
              </h1>

              <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[var(--color-text-light)]">
                Допомагаю виробничим підприємствам вести бухгалтерський облік,
                контролювати матеріали, виробничі витрати, собівартість,
                готову продукцію та своєчасно подавати звітність.
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
                <span>✓ Виробничий облік</span>
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
            title="Комплексний бухгалтерський супровід виробництва"
            subtitle="Беру на себе облік матеріалів, виробничих витрат, готової продукції, первинних документів та звітності."
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
            badge="Специфіка виробництва"
            title="Особлива увага — матеріалам, витратам та собівартості"
            subtitle="Виробничий облік має відображати реальний рух матеріальних цінностей та витрати, пов'язані з виготовленням продукції."
          />

          <div className="mt-20 grid gap-10 lg:grid-cols-2 lg:items-start">
            <Reveal>
              <div className="rounded-[36px] border border-[var(--color-border)] bg-white p-10 shadow-sm lg:p-12">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--color-primary)] text-white">
                  <Package size={28} />
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
                  Виробничий документообіг
                </h3>

                <p className="mt-6 leading-8 text-[var(--color-text-light)]">
                  Важливо, щоб придбання матеріалів, їх передача у виробництво,
                  випуск продукції та інші господарські операції були належним
                  чином підтверджені первинними документами.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    "Накладні",
                    "Акти",
                    "Вимоги на відпуск",
                    "Документи на матеріали",
                    "Документи виробництва",
                    "Документи на готову продукцію",
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
            title="Супровід виробничого бізнесу"
            subtitle="Формат та обсяг послуг визначаються залежно від виду виробництва, кількості операцій та потреб конкретного підприємства."
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
            subtitle="Послідовно організовуємо бухгалтерський супровід — від аналізу поточного стану обліку до постійної роботи."
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
            title="Порядок у виробничому обліку"
            subtitle="Ви отримуєте системний бухгалтерський супровід та актуальну інформацію про матеріали, витрати і фінансовий результат."
          />

          <div className="mx-auto mt-20 max-w-5xl">
            <Reveal>
              <div className="rounded-[36px] border border-[var(--color-border)] bg-white p-10 shadow-sm lg:p-14">
                <div className="grid gap-6 md:grid-cols-2">
                  {[
                    "Облік матеріалів та запасів",
                    "Контроль виробничих витрат",
                    "Формування собівартості",
                    "Облік готової продукції",
                    "Контроль первинних документів",
                    "Податкова та фінансова звітність",
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
            subtitle="Короткі відповіді на основні питання щодо бухгалтерського супроводу виробничих підприємств."
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
                Бухгалтерія для виробництва
              </span>

              <h2 className="mt-8 text-4xl font-bold leading-tight text-white lg:text-5xl">
                Потрібен бухгалтерський супровід?
              </h2>

              <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/75">
                Обговоримо діяльність вашого підприємства, поточний стан
                обліку та формат подальшої співпраці.
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