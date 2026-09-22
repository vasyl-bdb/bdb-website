"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  BriefcaseBusiness,
  Landmark,
  Building2,
  Factory,
  Truck,
} from "lucide-react";

import Container from "@/core/layout/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

const timeline = [
  {
    year: "2005–2010",
    title:
      "Київський національний економічний університет імені Вадима Гетьмана",
    description:
      "Навчання за спеціальністю «Фінанси». Здобуття фундаментальних знань у сфері фінансів, бухгалтерського обліку та оподаткування.",
    icon: GraduationCap,
  },
  {
    year: "2010–2014",
    title: "Державна податкова інспекція, м. Київ",
    description:
      "Робота ревізором-інспектором. Проведення документальних перевірок юридичних осіб, аналіз бухгалтерського та податкового обліку, перевірка правильності нарахування та сплати податків.",
    icon: Landmark,
  },
  {
    year: "2014–2015",
    title: "Бухгалтер на виробництві",
    description:
      "Робота бухгалтером на виробничому підприємстві. Ведення бухгалтерського обліку, робота з первинною документацією та облік господарських операцій підприємства.",
    icon: Factory,
  },
  {
    year: "2015–2018",
    title: "Бухгалтер на виробничому підприємстві",
    description:
      "Ведення обліку матеріалів, виробничих операцій, готової продукції та первинної документації. Практичний досвід роботи з виробничим обліком.",
    icon: Factory,
  },
  {
    year: "2018–2021",
    title: "Головний бухгалтер в аутсорсинговій компанії",
    description:
      "Організація та ведення бухгалтерського і податкового обліку клієнтів, підготовка та подання звітності, контроль податкових зобов'язань і супровід бухгалтерських процесів.",
    icon: BriefcaseBusiness,
  },
  {
    year: "2021–2024",
    title: "Головний бухгалтер логістичної компанії",
    description:
      "Організація бухгалтерського та податкового обліку компанії, що здійснювала перевезення вантажів залізничним транспортом.",
    icon: Truck,
  },
  {
    year: "З 2024 року",
    title: "Бухгалтерський та фінансовий супровід",
    description:
      "Професійний досвід у бухгалтерському обліку, оподаткуванні, звітності та роботі з майном і документами. Практичне розуміння бухгалтерських процесів та відповідальності за облікові дані.",
    icon: Building2,
  },
];

export default function CareerTimeline() {
  return (
    <Section background="light">
      <Container>
        <SectionTitle
          badge="Професійний шлях"
          title="Понад 15 років практичного досвіду"
          subtitle="Досвід у бухгалтерському обліку, оподаткуванні, виробництві, аутсорсингу та логістиці."
        />

        <div className="relative mx-auto mt-16 max-w-5xl">
          {/* Центральна лінія */}
          <div className="pointer-events-none absolute bottom-0 left-[27px] top-0 hidden w-px bg-[var(--color-border)] md:block" />

          <div className="space-y-5">
            {timeline.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={`${item.year}-${item.title}`}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    margin: "-60px",
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                  }}
                  className="relative flex gap-5 md:gap-7"
                >
                  {/* Точка / іконка */}
                  <div className="relative z-10 hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[var(--color-secondary)]/25 bg-white text-[var(--color-primary)] shadow-sm md:flex">
                    <Icon size={23} strokeWidth={1.8} aria-hidden="true" />
                  </div>

                  {/* Контент */}
                  <div className="min-w-0 flex-1 rounded-[24px] border border-[var(--color-border)] bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-secondary)]/40 hover:shadow-lg sm:p-7">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                      <h3 className="text-xl font-bold leading-snug text-[var(--color-primary)] sm:text-2xl">
                        {item.title}
                      </h3>

                      <div className="order-first shrink-0 self-start rounded-full bg-[var(--color-secondary)]/10 px-3.5 py-1.5 text-xs font-bold tracking-wide text-[var(--color-primary)] sm:order-none">
                        {item.year}
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

        {/* Підсумок */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-12 max-w-5xl rounded-[28px] border border-[var(--color-border)] bg-white p-7 shadow-sm sm:p-8"
        >
          <div className="flex flex-col gap-7 md:flex-row md:items-center md:gap-8">
            <div className="shrink-0 md:min-w-[150px]">
              <div className="text-4xl font-black tracking-tight text-[var(--color-primary)]">
                15+
              </div>

              <div className="mt-1 text-sm font-medium text-[var(--color-text-light)]">
                років професійного досвіду
              </div>
            </div>

            <div className="hidden h-14 w-px bg-[var(--color-border)] md:block" />

            <p className="max-w-3xl text-[15px] leading-7 text-[var(--color-text-light)]">
              Поєднання досвіду у бухгалтерському та податковому обліку,
              виробничому секторі, аутсорсингу та логістиці допомагає
              комплексно розуміти фінансові процеси бізнесу, контролювати
              облікові операції та своєчасно виконувати податкові
              зобов'язання.
            </p>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}