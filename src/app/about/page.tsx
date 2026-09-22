"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  GraduationCap,
  BriefcaseBusiness,
  Landmark,
  Factory,
  Truck,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Target,
  Clock3,
  MessageCircle,
} from "lucide-react";

import SiteLayout from "@/core/bdb/layout/SiteLayout";
import Container from "@/core/layout/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import BdbButton from "@/core/bdb/ui/BdbButton";

const timeline = [
  {
    period: "2005–2010",
    title:
      "Київський національний економічний університет імені Вадима Гетьмана",
    description:
      "Вища освіта за спеціальністю «Фінанси».",
    icon: GraduationCap,
  },
  {
    period: "2010–2014",
    title: "Державна податкова інспекція, м. Київ",
    description:
      "Робота ревізором-інспектором: документальні перевірки юридичних осіб, аналіз бухгалтерського та податкового обліку, перевірка правильності нарахування та сплати податків.",
    icon: Landmark,
  },
  {
    period: "2014–2018",
    title: "Бухгалтер на виробничих підприємствах",
    description:
      "Практичний досвід роботи з матеріалами, виробничими операціями, готовою продукцією, розрахунками та первинною документацією.",
    icon: Factory,
  },
  {
    period: "2018–2021",
    title: "Головний бухгалтер в аутсорсинговій компанії",
    description:
      "Організація та ведення бухгалтерського і податкового обліку підприємств-клієнтів, підготовка звітності та контроль податкових зобов'язань.",
    icon: BriefcaseBusiness,
  },
  {
    period: "2021–2024",
    title: "Головний бухгалтер у логістичній компанії",
    description:
      "Організація бухгалтерського та податкового обліку компанії у сфері транспортної та залізничної логістики.",
    icon: Truck,
  },
];

const principles = [
  {
    icon: ShieldCheck,
    title: "Відповідальність",
    description:
      "Уважне ставлення до документів, облікових даних та строків виконання роботи.",
  },
  {
    icon: Clock3,
    title: "Пунктуальність",
    description:
      "Своєчасна підготовка звітності та виконання поточних бухгалтерських завдань.",
  },
  {
    icon: MessageCircle,
    title: "Зрозуміла комунікація",
    description:
      "Складні бухгалтерські та податкові питання пояснюю простою і зрозумілою мовою.",
  },
  {
    icon: Target,
    title: "Практичний підхід",
    description:
      "Рішення орієнтовані на реальні операції та особливості конкретного бізнесу.",
  },
];

const advantages = [
  "Понад 15 років практичного досвіду",
  "Досвід роботи у податковій службі",
  "Практика бухгалтерського обліку у виробництві",
  "Досвід головного бухгалтера",
  "Робота з аутсорсинговим обліком",
  "Розуміння специфіки транспортної та логістичної сфери",
];

export default function AboutPage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <Section background="light" spacing="sm">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="min-w-0"
            >
              <div className="inline-flex items-center rounded-full border border-[var(--color-secondary)]/25 bg-white px-4 py-2 text-sm font-semibold text-[var(--color-primary)] shadow-sm">
                Про BDB
              </div>

              <h1 className="mt-6 max-w-3xl text-5xl font-bold leading-[1.08] tracking-[-1.5px] text-[var(--color-primary)] sm:text-6xl">
                Бухгалтерський досвід,
                <span className="block text-[var(--color-secondary)]">
                  на який можна покластися
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--color-text-light)] lg:text-[19px]">
                Я Василь Біда — бухгалтер та засновник BDB. Маю понад 15
                років практичного досвіду у бухгалтерському обліку,
                оподаткуванні та фінансах.
              </p>

              <p className="mt-5 max-w-2xl text-[16px] leading-8 text-[var(--color-text-light)]">
                Працював у податковій службі, на виробничих підприємствах,
                в аутсорсинговій та логістичній компаніях. Сьогодні
                використовую цей досвід для комплексного супроводу бізнесу
                та неприбуткових організацій.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <BdbButton href="/contacts">
                  Отримати консультацію
                </BdbButton>

                <a
                  href="#experience"
                  className="group inline-flex items-center gap-2 rounded-xl border border-[var(--color-border)] bg-white px-6 py-4 font-semibold text-[var(--color-primary)] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-secondary)] hover:shadow-md"
                >
                  Професійний шлях
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-[var(--color-border)] pt-7">
                <div>
                  <div className="text-2xl font-bold text-[var(--color-primary)]">
                    15+
                  </div>
                  <div className="mt-1 text-xs text-[var(--color-text-light)]">
                    років досвіду
                  </div>
                </div>

                <div className="hidden h-10 w-px bg-[var(--color-border)] sm:block" />

                <div>
                  <div className="text-2xl font-bold text-[var(--color-primary)]">
                    ТОВ
                  </div>
                  <div className="mt-1 text-xs text-[var(--color-text-light)]">
                    ФОП • ГО • БФ
                  </div>
                </div>

                <div className="hidden h-10 w-px bg-[var(--color-border)] sm:block" />

                <div>
                  <div className="text-2xl font-bold text-[var(--color-primary)]">
                    100%
                  </div>
                  <div className="mt-1 text-xs text-[var(--color-text-light)]">
                    дистанційний формат
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative mx-auto w-full max-w-[520px]"
            >
              <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full border border-[var(--color-secondary)]/20" />
              <div className="pointer-events-none absolute -bottom-10 -right-10 h-48 w-48 rounded-full border border-[var(--color-primary)]/10" />
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[75%] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-secondary)]/10 blur-3xl" />

              <div className="relative z-10 overflow-hidden rounded-[32px] border border-white/80 bg-white p-2 shadow-[0_30px_80px_rgba(0,0,0,0.12)]">
                <div className="overflow-hidden rounded-[26px]">
                  <Image
                    src="/images/hero/vasyl.webp"
                    alt="Василь Біда — бухгалтер і засновник BDB"
                    width={700}
                    height={900}
                    priority
                    className="block h-auto w-full"
                  />
                </div>
              </div>

              <div className="absolute -bottom-6 -left-5 z-20 rounded-2xl border border-white/80 bg-white/95 px-5 py-4 shadow-xl backdrop-blur-md sm:-left-8">
                <div className="text-3xl font-black tracking-tight text-[var(--color-primary)]">
                  15+
                </div>
                <div className="mt-1 text-sm font-semibold text-[var(--color-primary)]">
                  років професійного досвіду
                </div>
                <div className="mt-0.5 text-xs text-[var(--color-text-light)]">
                  бухгалтерія • податки • фінанси
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* APPROACH */}
      <Section background="white">
        <Container>
          <SectionTitle
            badge="Мій підхід"
            title="Бухгалтерія має бути зрозумілою та системною"
            subtitle="Мета бухгалтерського супроводу — не просто подати звітність, а забезпечити порядок в обліку та дати власнику зрозумілу інформацію про фінансові процеси."
          />

          <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {principles.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.06,
                  }}
                  className="rounded-[24px] border border-[var(--color-border)] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-secondary)]/40 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-primary)]/7 text-[var(--color-primary)]">
                    <Icon size={23} strokeWidth={1.8} aria-hidden="true" />
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-[var(--color-primary)]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[var(--color-text-light)]">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience" background="light">
        <Container>
          <SectionTitle
            badge="Професійний шлях"
            title="15+ років досвіду у бухгалтерії та фінансах"
            subtitle="Від фундаментальної фінансової освіти та податкового контролю — до роботи головним бухгалтером і розвитку власного бухгалтерського сервісу."
          />

          <div className="relative mx-auto mt-14 max-w-5xl">
            <div className="pointer-events-none absolute bottom-0 left-[27px] top-0 hidden w-px bg-[var(--color-border)] md:block" />

            <div className="space-y-5">
              {timeline.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={`${item.period}-${item.title}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.05,
                    }}
                    className="relative flex gap-5 md:gap-7"
                  >
                    <div className="relative z-10 hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[var(--color-secondary)]/25 bg-white text-[var(--color-primary)] shadow-sm md:flex">
                      <Icon size={23} strokeWidth={1.8} aria-hidden="true" />
                    </div>

                    <div className="min-w-0 flex-1 rounded-[24px] border border-[var(--color-border)] bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-secondary)]/40 hover:shadow-lg sm:p-7">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <h3 className="text-xl font-bold leading-snug text-[var(--color-primary)] sm:text-2xl">
                          {item.title}
                        </h3>

                        <div className="order-first shrink-0 self-start rounded-full bg-[var(--color-secondary)]/10 px-3.5 py-1.5 text-xs font-bold tracking-wide text-[var(--color-primary)] sm:order-none">
                          {item.period}
                        </div>
                      </div>

                      <p className="mt-4 max-w-3xl text-[15px] leading-7 text-[var(--color-text-light)]">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      {/* WHAT I BRING */}
      <Section background="white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-20">
            <div>
              <div className="inline-flex rounded-full bg-[var(--color-secondary)]/10 px-4 py-2 text-sm font-semibold text-[var(--color-primary)]">
                Досвід у роботі
              </div>

              <h2 className="mt-5 text-3xl font-bold leading-tight text-[var(--color-primary)] sm:text-4xl">
                Практичні знання, які можна застосувати до вашого бізнесу
              </h2>

              <p className="mt-5 leading-7 text-[var(--color-text-light)]">
                Різні сфери роботи дали можливість побачити бухгалтерський
                облік з різних сторін — від податкового контролю до
                щоденної роботи підприємства.
              </p>
            </div>

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
          </div>
        </Container>
      </Section>

      {/* EDUCATION */}
      <Section background="light">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl rounded-[28px] border border-[var(--color-border)] bg-white p-7 shadow-sm sm:p-9 lg:p-10"
          >
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-7">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-primary)] text-white">
                <GraduationCap size={27} aria-hidden="true" />
              </div>

              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-secondary)]">
                  Освіта
                </div>

                <h2 className="mt-2 text-2xl font-bold leading-tight text-[var(--color-primary)] sm:text-3xl">
                  Київський національний економічний університет
                </h2>

                <p className="mt-2 text-[16px] text-[var(--color-text-light)]">
                  імені Вадима Гетьмана • спеціальність «Фінанси»
                </p>

                <p className="mt-5 leading-7 text-[var(--color-text-light)]">
                  Вища фінансова освіта стала фундаментом для подальшого
                  професійного розвитку у сфері бухгалтерського обліку,
                  оподаткування та фінансів.
                </p>
              </div>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* CTA */}
      <Section background="white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-[30px] border border-[var(--color-border)] bg-[var(--color-background)] p-8 sm:p-10 lg:p-12"
          >
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
              <div className="max-w-3xl">
                <div className="inline-flex rounded-full border border-[var(--color-secondary)]/20 bg-white px-4 py-2 text-sm font-semibold text-[var(--color-primary)]">
                  BDB — бухгалтерія для бізнесу
                </div>

                <h2 className="mt-5 text-3xl font-bold leading-tight text-[var(--color-primary)] sm:text-4xl">
                  Потрібен бухгалтерський супровід?
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-[var(--color-text-light)]">
                  Розкажіть про свій бізнес та поточні завдання. Обговоримо
                  формат співпраці та необхідний комплекс бухгалтерських
                  послуг.
                </p>
              </div>

              <div className="shrink-0">
                <BdbButton href="/contacts">
                  Отримати консультацію
                  <ArrowRight size={17} aria-hidden="true" />
                </BdbButton>
              </div>
            </div>
          </motion.div>
        </Container>
      </Section>
    </SiteLayout>
  );
}