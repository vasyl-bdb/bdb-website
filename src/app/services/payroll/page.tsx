import type { Metadata } from "next";
import {
  Calculator,
  FileText,
  Users,
  ShieldCheck,
  CalendarDays,
  BadgeCheck,
  BriefcaseBusiness,
  Landmark,
} from "lucide-react";

import SiteLayout from "@/core/bdb/layout/SiteLayout";
import Container from "@/core/layout/Container";

import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";

import FeatureCard from "@/core/bdb/cards/FeatureCard";
import BdbButton from "@/core/bdb/ui/BdbButton";

export const metadata: Metadata = {
  title: "Заробітна плата та кадровий облік",
  description:
    "Розрахунок заробітної плати, відпускних і лікарняних, кадровий облік, контроль податків та звітність. Дистанційний супровід ТОВ, ФОП та організацій. 15 років професійного досвіду.",
  alternates: {
    canonical: "/services/payroll",
  },
};

const services = [
  {
    icon: <Calculator size={28} />,
    title: "Нарахування заробітної плати",
    description:
      "Розрахунок заробітної плати працівників з урахуванням відпрацьованого часу, виплат, утримань та обов'язкових нарахувань.",
  },
  {
    icon: <FileText size={28} />,
    title: "Зарплатна звітність",
    description:
      "Підготовка та подання необхідної звітності щодо заробітної плати, податків та інших обов'язкових платежів.",
  },
  {
    icon: <CalendarDays size={28} />,
    title: "Відпустки та лікарняні",
    description:
      "Розрахунок відпускних, лікарняних та інших виплат працівникам відповідно до чинних вимог.",
  },
  {
    icon: <Users size={28} />,
    title: "Кадровий облік",
    description:
      "Допомога в організації кадрового документообігу, оформленні прийняття, звільнення, переведення та інших кадрових операцій.",
  },
];

const focusAreas = [
  "Розрахунок заробітної плати",
  "Розрахунок відпускних",
  "Розрахунок лікарняних",
  "Контроль податків із заробітної плати",
  "Кадровий документообіг",
  "Підготовка необхідної звітності",
  "Контроль строків виплати заробітної плати",
  "Консультації щодо трудових відносин",
];

const clients = [
  {
    icon: <BriefcaseBusiness size={28} />,
    title: "ТОВ та компанії",
    description:
      "Для підприємств із працівниками, яким необхідний професійний розрахунок заробітної плати та кадровий супровід.",
  },
  {
    icon: <Users size={28} />,
    title: "ФОП із працівниками",
    description:
      "Допомога підприємцям у веденні зарплатного та кадрового обліку і виконанні обов'язків роботодавця.",
  },
  {
    icon: <Landmark size={28} />,
    title: "Організації та фонди",
    description:
      "Супровід нарахування виплат працівникам та підготовки відповідної звітності.",
  },
];

const steps = [
  {
    number: "01",
    title: "Аналіз",
    description:
      "Обговорюємо кількість працівників, систему оплати праці, кадрові документи та особливості вашого підприємства.",
  },
  {
    number: "02",
    title: "Організація",
    description:
      "Визначаємо порядок передачі інформації, документообіг та формат зарплатного і кадрового супроводу.",
  },
  {
    number: "03",
    title: "Розрахунок",
    description:
      "Проводжу розрахунок заробітної плати, відпусток, лікарняних та інших виплат працівникам.",
  },
  {
    number: "04",
    title: "Звітність",
    description:
      "Готую необхідну звітність, контролюю строки сплати податків та консультую щодо поточних кадрових питань.",
  },
];

const faq = [
  {
    question: "Чи можете ви вести зарплату дистанційно?",
    answer:
      "Так. Співпраця може здійснюватися дистанційно: інформація та документи передаються в електронному вигляді, а поточні питання вирішуються онлайн.",
  },
  {
    question: "Чи працюєте ви з підприємствами, де є наймані працівники?",
    answer:
      "Так. Можу супроводжувати розрахунок заробітної плати та кадровий облік для ТОВ, ФОП та інших організацій.",
  },
  {
    question: "Чи розраховуєте ви відпускні та лікарняні?",
    answer:
      "Так. Розрахунок відповідних виплат може входити до комплексного зарплатного супроводу.",
  },
  {
    question: "Чи допомагаєте з кадровими документами?",
    answer:
      "Так. Допомагаю організувати кадровий документообіг та консультую щодо оформлення основних кадрових операцій.",
  },
  {
    question: "Чи готуєте звітність щодо працівників?",
    answer:
      "Так. До супроводу може входити підготовка та подання необхідної звітності щодо працівників і нарахованих виплат.",
  },
  {
    question: "Від чого залежить вартість послуги?",
    answer:
      "Вартість залежить від кількості працівників, обсягу операцій, складності нарахувань, кадрового документообігу та необхідного обсягу супроводу.",
  },
];

export default function PayrollPage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <Section background="white">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-5xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)]/10 px-5 py-2 text-sm font-semibold text-[var(--color-primary)]">
                <Users size={18} />
                Заробітна плата та кадри
              </div>

              <h1 className="text-5xl font-bold leading-tight text-[var(--color-primary)] lg:text-6xl">
                Заробітна плата
                <br />
                та кадровий облік
              </h1>

              <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[var(--color-text-light)]">
                Комплексний супровід розрахунку заробітної плати та кадрового
                обліку. Допомагаю правильно нараховувати виплати працівникам,
                контролювати податки, оформлювати кадрові документи та
                своєчасно подавати необхідну звітність.
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
                <span>✓ Заробітна плата та кадри</span>
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
            title="Комплексний супровід зарплати та кадрів"
            subtitle="Беру на себе розрахунок виплат працівникам, кадровий облік, контроль податків та підготовку необхідної звітності."
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
            badge="Що контролюємо"
            title="Зарплата та кадровий облік без зайвої бюрократії"
            subtitle="Важливо своєчасно проводити розрахунки, контролювати податки та забезпечувати належне оформлення кадрових операцій."
          />

          <div className="mt-20 grid gap-10 lg:grid-cols-2 lg:items-start">
            <Reveal>
              <div className="rounded-[36px] border border-[var(--color-border)] bg-white p-10 shadow-sm lg:p-12">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--color-primary)] text-white">
                  <Calculator size={28} />
                </div>

                <h3 className="mt-8 text-3xl font-bold text-[var(--color-primary)]">
                  Основні напрямки
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
                  <FileText size={28} />
                </div>

                <h3 className="mt-8 text-3xl font-bold text-[var(--color-primary)]">
                  Кадрові документи
                </h3>

                <p className="mt-6 leading-8 text-[var(--color-text-light)]">
                  Кадровий облік потребує системного оформлення прийняття,
                  переведення, відпусток, звільнення та інших кадрових
                  операцій.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    "Прийняття",
                    "Звільнення",
                    "Переведення",
                    "Відпустки",
                    "Лікарняні",
                    "Кадрові документи",
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
            title="Кому потрібен зарплатний та кадровий супровід"
            subtitle="Послуга підходить підприємствам та організаціям, які мають працівників і хочуть системно вести зарплатний та кадровий облік."
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
                    Інформацію та документи можна передавати в електронному
                    вигляді. Поточні питання вирішуються телефоном, у
                    месенджерах або онлайн.
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
            title="Як організовується робота"
            subtitle="Послідовно організовуємо процес — від аналізу вихідних даних до регулярного розрахунку зарплати та звітності."
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
            title="Усе необхідне для системного зарплатного обліку"
            subtitle="Ви отримуєте контрольований процес розрахунку виплат, кадрового документообігу та звітності."
          />

          <div className="mx-auto mt-20 max-w-5xl">
            <Reveal>
              <div className="rounded-[36px] border border-[var(--color-border)] bg-white p-10 shadow-sm lg:p-14">
                <div className="grid gap-6 md:grid-cols-2">
                  {[
                    "Розрахунок заробітної плати",
                    "Контроль строків виплати",
                    "Розрахунок відпускних та лікарняних",
                    "Контроль податків та нарахувань",
                    "Кадровий документообіг",
                    "Підготовка необхідної звітності",
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
            subtitle="Короткі відповіді на основні питання щодо зарплатного та кадрового супроводу."
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
                Заробітна плата та кадри
              </span>

              <h2 className="mt-8 text-4xl font-bold leading-tight text-white lg:text-5xl">
                Потрібен зарплатний та кадровий супровід?
              </h2>

              <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/75">
                Обговоримо кількість працівників, поточний стан обліку та
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