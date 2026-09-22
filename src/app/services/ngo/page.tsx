import type { Metadata } from "next";
import {
  HeartHandshake,
  Calculator,
  FileText,
  ShieldCheck,
  BadgeCheck,
  Gift,
  Landmark,
  Users,
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
  title: "Бухгалтер для ГО та благодійних фондів",
  description:
    "Бухгалтерський супровід громадських організацій, благодійних фондів та інших неприбуткових організацій. Облік, внески, гранти, цільове фінансування, документи та звітність. 15 років досвіду.",
  alternates: {
    canonical: "/services/ngo",
  },
};

const services = [
  {
    icon: <Calculator size={28} />,
    title: "Бухгалтерський облік",
    description:
      "Ведення бухгалтерського обліку з урахуванням особливостей діяльності неприбуткової організації.",
  },
  {
    icon: <FileText size={28} />,
    title: "Звітність",
    description:
      "Підготовка та подання необхідної фінансової, податкової та іншої звітності.",
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Неприбутковий статус",
    description:
      "Облік операцій та документальне оформлення з урахуванням вимог до неприбуткових організацій.",
  },
  {
    icon: <FileText size={28} />,
    title: "Первинні документи",
    description:
      "Перевірка та організація договорів, актів, накладних, платіжних та інших первинних документів.",
  },
];

const focusAreas = [
  "Членські внески та пожертви",
  "Благодійна допомога",
  "Грантове фінансування",
  "Цільове фінансування",
  "Використання коштів за призначенням",
  "Документальне підтвердження витрат",
];

const clients = [
  {
    icon: <HeartHandshake size={28} />,
    title: "Громадські організації",
    description:
      "Облік членських внесків, пожертв, грантів, благодійної допомоги та витрат на статутну діяльність.",
  },
  {
    icon: <Gift size={28} />,
    title: "Благодійні фонди",
    description:
      "Бухгалтерський облік надходжень, благодійних програм, витрат та передачі допомоги.",
  },
  {
    icon: <Users size={28} />,
    title: "Інші неприбуткові організації",
    description:
      "Супровід організацій, які мають неприбутковий статус та працюють відповідно до статутних цілей.",
  },
];

const steps = [
  {
    number: "01",
    title: "Знайомство",
    description:
      "Обговорюємо діяльність організації, джерела фінансування, працівників та поточний стан обліку.",
  },
  {
    number: "02",
    title: "Аналіз",
    description:
      "Перевіряю документи, облік, звітність та порядок оформлення господарських операцій.",
  },
  {
    number: "03",
    title: "Організація",
    description:
      "Узгоджуємо документообіг, порядок передачі інформації та правила ведення обліку.",
  },
  {
    number: "04",
    title: "Супровід",
    description:
      "Веду облік, контролюю документи, готую звітність та консультую з поточних питань.",
  },
];

const faq = [
  {
    question: "Чи працюєте ви з громадськими організаціями?",
    answer:
      "Так. Надаю бухгалтерський супровід громадським організаціям, у тому числі організаціям без працівників та організаціям, які отримують внески, пожертви, благодійну допомогу або грантове фінансування.",
  },
  {
    question: "Чи працюєте ви з благодійними фондами?",
    answer:
      "Так. Допомагаю організувати бухгалтерський облік благодійного фонду, документувати операції, відображати надходження та витрати і готувати необхідну звітність.",
  },
  {
    question: "Чи допомагаєте з грантовим фінансуванням?",
    answer:
      "Так. Допомагаю організувати облік грантового фінансування, документальне оформлення операцій та контроль використання коштів відповідно до умов фінансування.",
  },
  {
    question: "Чи можна передати вам бухгалтерію організації, яка вже працює?",
    answer:
      "Так. Спочатку аналізую поточний стан обліку та документів, після чого узгоджуємо порядок передачі бухгалтерії та подальшого супроводу.",
  },
  {
    question: "Від чого залежить вартість супроводу?",
    answer:
      "Вартість залежить від обсягу операцій, кількості первинних документів, наявності працівників, джерел фінансування, грантових проєктів та інших особливостей діяльності.",
  },
];

export default function NgoPage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <Section background="white">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-5xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)]/10 px-5 py-2 text-sm font-semibold text-[var(--color-primary)]">
                <HeartHandshake size={18} />
                Бухгалтерський супровід ГО та БФ
              </div>

              <h1 className="text-5xl font-bold leading-tight text-[var(--color-primary)] lg:text-6xl">
                Бухгалтерський супровід
                <br />
                громадських та благодійних організацій
              </h1>

              <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[var(--color-text-light)]">
                Допомагаю громадським організаціям, благодійним фондам та
                іншим неприбутковим організаціям вести облік, працювати з
                внесками та грантами, контролювати документи і своєчасно
                подавати звітність.
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
                <span>✓ ГО та БФ</span>
                <span>✓ Грантове фінансування</span>
                <span>✓ Дистанційна робота</span>
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
            title="Бухгалтерія без зайвої складності"
            subtitle="Беру на себе бухгалтерський облік, документи та звітність, щоб керівництво організації могло зосередитися на своїх проєктах і статутній діяльності."
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
            badge="Специфіка ГО та БФ"
            title="Особлива увага — надходженням і використанню коштів"
            subtitle="Для неприбуткових організацій важливо не лише відобразити операцію в обліку, а й мати належне документальне підтвердження."
          />

          <div className="mt-20 grid gap-10 lg:grid-cols-2 lg:items-start">
            <Reveal>
              <div className="rounded-[36px] border border-[var(--color-border)] bg-white p-10 shadow-sm lg:p-12">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--color-primary)] text-white">
                  <Landmark size={28} />
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
                  Організовую облік так, щоб господарські операції мали
                  належне документальне підтвердження та могли бути коректно
                  відображені у бухгалтерському обліку і звітності.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    "Договори",
                    "Акти",
                    "Накладні",
                    "Платіжні документи",
                    "Грантові документи",
                    "Кошториси",
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
            title="Супровід неприбуткових організацій"
            subtitle="Формат роботи та обсяг послуг визначаються залежно від діяльності та потреб конкретної організації."
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
            title="Порядок в обліку та документах"
            subtitle="Ви отримуєте системний бухгалтерський супровід і розуміння того, що відбувається з обліком організації."
          />

          <div className="mx-auto mt-20 max-w-5xl">
            <Reveal>
              <div className="rounded-[36px] border border-[var(--color-border)] bg-white p-10 shadow-sm lg:p-14">
                <div className="grid gap-6 md:grid-cols-2">
                  {[
                    "Ведення бухгалтерського обліку",
                    "Контроль строків подання звітності",
                    "Перевірка первинних документів",
                    "Облік благодійних надходжень",
                    "Облік грантового та цільового фінансування",
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
            subtitle="Короткі відповіді на основні питання щодо бухгалтерського супроводу ГО та БФ."
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
                Бухгалтерія для ГО та БФ
              </span>

              <h2 className="mt-8 text-4xl font-bold leading-tight text-white lg:text-5xl">
                Потрібен бухгалтерський супровід?
              </h2>

              <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/75">
                Обговоримо діяльність вашої організації, поточний стан обліку
                та формат подальшої співпраці.
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