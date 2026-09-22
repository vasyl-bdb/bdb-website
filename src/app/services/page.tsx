import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Briefcase,
  HeartHandshake,
  Calculator,
  CheckCircle2,
  FileText,
  ShieldCheck,
  Clock3,
} from "lucide-react";

import SiteLayout from "@/core/bdb/layout/SiteLayout";
import Container from "@/core/layout/Container";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import BdbButton from "@/core/bdb/ui/BdbButton";

const services = [
  {
    icon: Building2,
    number: "01",
    label: "Для компаній",
    title: "Бухгалтерський супровід ТОВ",
    description:
      "Повне ведення бухгалтерського та податкового обліку: ПДВ, заробітна плата, кадровий облік, фінансова звітність, первинні документи та консультації.",
    href: "/services/tov",
  },
  {
    icon: Briefcase,
    number: "02",
    label: "Для підприємців",
    title: "Бухгалтерський супровід ФОП",
    description:
      "Облік та звітність ФОП, контроль податків, робота з первинними документами та консультації щодо оподаткування і ведення підприємницької діяльності.",
    href: "/services/fop",
  },
  {
    icon: HeartHandshake,
    number: "03",
    label: "Для неприбуткових організацій",
    title: "ГО та благодійні фонди",
    description:
      "Бухгалтерський супровід громадських організацій і благодійних фондів, облік грантів, благодійних внесків, цільового фінансування та звітності.",
    href: "/services/ngo",
  },
];

const advantages = [
  "Ведення бухгалтерського та податкового обліку",
  "Підготовка та подання звітності",
  "Робота з первинними документами",
  "Контроль податкових зобов'язань",
  "Контроль строків подання звітності",
  "Оперативні консультації з бухгалтерських питань",
  "Дистанційна робота по всій Україні",
  "Понад 15 років практичного професійного досвіду",
];

const principles = [
  {
    icon: ShieldCheck,
    title: "Відповідальність",
    text: "Контроль обліку, звітності та податкових зобов'язань.",
  },
  {
    icon: Clock3,
    title: "Пунктуальність",
    text: "Дотримання строків і своєчасне виконання бухгалтерських задач.",
  },
  {
    icon: FileText,
    title: "Системність",
    text: "Зрозумілий порядок роботи з документами та обліковими даними.",
  },
];

export default function ServicesPage() {
  return (
    <SiteLayout>
      <Section background="white" spacing="sm">
        <Container>
          {/* HERO */}
          <div className="mx-auto max-w-4xl text-center">
            <Reveal>
              <span className="inline-flex items-center rounded-full border border-[var(--color-secondary)]/25 bg-[var(--color-secondary)]/10 px-5 py-2 text-sm font-semibold text-[var(--color-primary)]">
                Послуги BDB
              </span>

              <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-[-1px] text-[var(--color-primary)] sm:text-5xl lg:text-6xl">
                Бухгалтерський супровід,
                <span className="block text-[var(--color-secondary)]">
                  на який можна покластися
                </span>
              </h1>

              <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-[var(--color-text-light)]">
                Беру на себе бухгалтерський та податковий супровід, щоб ви
                могли зосередитися на розвитку бізнесу. Працюємо дистанційно
                по всій Україні.
              </p>
            </Reveal>
          </div>

          {/* MAIN SERVICES */}
          <div className="mt-16 grid gap-5 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <Reveal key={service.title} delay={index * 0.08}>
                  <Link
                    href={service.href}
                    className="group relative flex h-full min-h-[390px] flex-col overflow-hidden rounded-[28px] border border-[var(--color-border)] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-secondary)]/50 hover:shadow-[0_20px_55px_rgba(0,0,0,0.08)] sm:p-8"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--color-primary)]/7 text-[var(--color-primary)] transition-all duration-300 group-hover:bg-[var(--color-secondary)] group-hover:text-[var(--color-primary)]">
                        <Icon size={27} strokeWidth={1.8} aria-hidden="true" />
                      </div>

                      <span className="text-sm font-semibold tracking-[0.14em] text-[var(--color-primary)]/20">
                        {service.number}
                      </span>
                    </div>

                    <div className="mt-8">
                      <span className="text-sm font-semibold text-[var(--color-secondary)]">
                        {service.label}
                      </span>

                      <h2 className="mt-3 text-2xl font-bold leading-tight text-[var(--color-primary)]">
                        {service.title}
                      </h2>

                      <p className="mt-5 text-[15px] leading-7 text-[var(--color-text-light)]">
                        {service.description}
                      </p>
                    </div>

                    <div className="mt-auto pt-8">
                      <div className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)]">
                        <span>Детальніше</span>
                        <ArrowRight
                          size={17}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-8 right-8 h-px origin-left scale-x-0 bg-[var(--color-secondary)] transition-transform duration-300 group-hover:scale-x-100" />
                  </Link>
                </Reveal>
              );
            })}
          </div>

          {/* CALCULATOR */}
          <Reveal delay={0.15}>
            <div className="mt-16 overflow-hidden rounded-[30px] border border-[var(--color-border)] bg-[var(--color-background)]">
              <div className="grid items-center gap-8 p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:p-12">
                <div className="max-w-3xl">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]">
                      <Calculator size={21} aria-hidden="true" />
                    </div>

                    <span className="text-sm font-semibold text-[var(--color-primary)]">
                      Калькулятор вартості
                    </span>
                  </div>

                  <h2 className="mt-5 text-3xl font-bold leading-tight text-[var(--color-primary)] sm:text-4xl">
                    Хочете дізнатися
                    <span className="block text-[var(--color-secondary)]">
                      орієнтовну вартість?
                    </span>
                  </h2>

                  <p className="mt-4 max-w-2xl text-[16px] leading-7 text-[var(--color-text-light)]">
                    Вкажіть основні параметри вашого бізнесу — калькулятор
                    допоможе отримати орієнтовну вартість бухгалтерського
                    супроводу.
                  </p>
                </div>

                <div className="shrink-0">
                  <BdbButton href="/calculator">
                    Розрахувати вартість
                    <ArrowRight size={17} aria-hidden="true" />
                  </BdbButton>
                </div>
              </div>
            </div>
          </Reveal>

          {/* WHAT YOU GET */}
          <div className="mt-24 grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-20">
            <Reveal>
              <div>
                <span className="inline-flex rounded-full bg-[var(--color-secondary)]/10 px-4 py-2 text-sm font-semibold text-[var(--color-primary)]">
                  Що ви отримуєте
                </span>

                <h2 className="mt-5 text-4xl font-bold leading-[1.1] tracking-[-1px] text-[var(--color-primary)] sm:text-5xl">
                  Більше часу
                  <span className="block text-[var(--color-secondary)]">
                    для розвитку бізнесу
                  </span>
                </h2>

                <p className="mt-6 max-w-xl text-[17px] leading-8 text-[var(--color-text-light)]">
                  Ви займаєтеся бізнесом, а поточні бухгалтерські та податкові
                  питання перебувають під професійним контролем.
                </p>

                <div className="mt-8">
                  <BdbButton href="/contacts">
                    Отримати консультацію
                    <ArrowRight size={17} aria-hidden="true" />
                  </BdbButton>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="grid gap-3 sm:grid-cols-2">
                {advantages.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-[var(--color-border)] bg-white p-5 transition-all duration-300 hover:border-[var(--color-secondary)]/40 hover:shadow-md"
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

          {/* PRINCIPLES */}
          <Reveal delay={0.15}>
            <div className="mt-24 border-t border-[var(--color-border)] pt-16">
              <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
                <div>
                  <span className="inline-flex rounded-full border border-[var(--color-secondary)]/25 bg-[var(--color-secondary)]/10 px-4 py-2 text-sm font-semibold text-[var(--color-primary)]">
                    Принципи роботи
                  </span>

                  <h2 className="mt-5 text-3xl font-bold leading-tight text-[var(--color-primary)] sm:text-4xl">
                    Професійний супровід
                    <span className="block text-[var(--color-secondary)]">
                      без зайвих складнощів
                    </span>
                  </h2>

                  <p className="mt-5 max-w-md leading-7 text-[var(--color-text-light)]">
                    Дисципліна, пунктуальність та оперативність — основа
                    щоденної роботи BDB.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  {principles.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="rounded-2xl border border-[var(--color-border)] bg-white p-6"
                      >
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-primary)]/7 text-[var(--color-primary)]">
                          <Icon size={21} aria-hidden="true" />
                        </div>

                        <h3 className="mt-5 font-bold text-[var(--color-primary)]">
                          {item.title}
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-[var(--color-text-light)]">
                          {item.text}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </Reveal>

          {/* CTA */}
          <Reveal delay={0.2}>
            <div className="relative mt-24 overflow-hidden rounded-[32px] bg-[var(--color-primary)] px-8 py-14 sm:px-12 lg:px-20 lg:py-16">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full border border-white/10"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-40 -left-28 h-80 w-80 rounded-full border border-[var(--color-secondary)]/20"
              />

              <div className="relative mx-auto max-w-3xl text-center">
                <span className="inline-flex rounded-full border border-[var(--color-secondary)]/40 bg-[var(--color-secondary)]/10 px-5 py-2 text-sm font-semibold text-[var(--color-secondary)]">
                  Потрібна консультація?
                </span>

                <h2 className="mt-7 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                  <span className="block text-white">
                    Ви розвиваєте бізнес —
                  </span>

                  <span className="mt-2 block text-[var(--color-secondary)]">
                    я подбаю про бухгалтерію
                  </span>
                </h2>

                <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
                  Розкажіть про свій бізнес, і ми визначимо формат
                  бухгалтерського супроводу, який відповідає вашим потребам.
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