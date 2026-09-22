"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  GraduationCap,
  BriefcaseBusiness,
  CircleCheck,
  ArrowRight,
} from "lucide-react";

import Container from "@/core/layout/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import BdbButton from "@/core/bdb/ui/BdbButton";

const specializations = [
  "Товариства з обмеженою відповідальністю",
  "Фізичні особи-підприємці",
  "Громадські організації",
  "Благодійні фонди та неприбуткові організації",
];

export default function AboutPreview() {
  return (
    <Section background="white">
      <Container>
        <SectionTitle
          badge="Про BDB"
          title="Бухгалтерія, на яку можна покластися"
          subtitle="Професійний бухгалтерський, податковий та фінансовий супровід для бізнесу й неприбуткових організацій. Дистанційна робота по всій Україні."
        />

        <div className="mt-16 grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Фото */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto w-full max-w-[520px]"
          >
            <div className="pointer-events-none absolute -left-8 -top-8 h-36 w-36 rounded-full border border-[var(--color-secondary)]/20" />

            <div className="pointer-events-none absolute -bottom-8 -right-8 h-44 w-44 rounded-full border border-[var(--color-primary)]/10" />

            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[75%] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-secondary)]/10 blur-3xl" />

            <div className="relative z-10 overflow-hidden rounded-[32px] border border-white/80 bg-white p-2 shadow-[0_25px_70px_rgba(0,0,0,0.12)]">
              <div className="overflow-hidden rounded-[26px]">
                <Image
                  src="/images/hero/vasyl.webp"
                  alt="Василь Біда — бухгалтер і засновник BDB"
                  width={700}
                  height={900}
                  className="block h-auto w-full"
                />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-6 -right-4 z-20 rounded-2xl border border-white/80 bg-white/95 px-5 py-4 shadow-xl backdrop-blur-md sm:-right-8"
            >
              <div className="text-3xl font-black tracking-tight text-[var(--color-primary)]">
                15+
              </div>

              <div className="mt-1 text-sm font-semibold text-[var(--color-primary)]">
                років досвіду
              </div>

              <div className="mt-0.5 text-xs text-[var(--color-text-light)]">
                бухгалтерія • податки • фінанси
              </div>
            </motion.div>
          </motion.div>

          {/* Текст */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="min-w-0"
          >
            <div className="inline-flex items-center rounded-full border border-[var(--color-secondary)]/25 bg-[var(--color-secondary)]/10 px-4 py-2 text-sm font-semibold text-[var(--color-primary)]">
              Василь Біда
            </div>

            <h2 className="mt-5 max-w-2xl text-4xl font-bold leading-[1.12] tracking-[-1px] text-[var(--color-primary)] sm:text-5xl">
              Професійний облік
              <span className="block text-[var(--color-secondary)]">
                без зайвих складнощів
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-[17px] leading-8 text-[var(--color-text-light)]">
              Маю понад 15 років професійного досвіду у сфері бухгалтерського
              обліку, оподаткування та фінансів. Допомагаю підприємцям і
              компаніям організувати зрозумілий та системний облік,
              своєчасно виконувати податкові зобов'язання й контролювати
              фінансові процеси.
            </p>

            <p className="mt-5 max-w-2xl text-[17px] leading-8 text-[var(--color-text-light)]">
              BDB — це бухгалтерський аутсорсинг, побудований на дисципліні,
              пунктуальності та оперативності. Я беру на себе поточну
              бухгалтерську роботу та звітність, щоб власник бізнесу міг
              зосередитися на розвитку своєї справи.
            </p>

            {/* Освіта / досвід */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]">
                    <GraduationCap size={20} aria-hidden="true" />
                  </div>

                  <h3 className="font-semibold text-[var(--color-primary)]">
                    Освіта
                  </h3>
                </div>

                <p className="mt-4 text-sm leading-6 text-[var(--color-text-light)]">
                  Київський національний економічний університет
                  імені Вадима Гетьмана
                </p>
              </div>

              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-primary)]/8 text-[var(--color-primary)]">
                    <BriefcaseBusiness size={20} aria-hidden="true" />
                  </div>

                  <h3 className="font-semibold text-[var(--color-primary)]">
                    Досвід
                  </h3>
                </div>

                <p className="mt-4 text-sm leading-6 text-[var(--color-text-light)]">
                  Понад 15 років у бухгалтерському обліку, оподаткуванні
                  та фінансах.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <BdbButton href="/about">
                Дізнатися більше
                <ArrowRight size={17} aria-hidden="true" />
              </BdbButton>
            </div>
          </motion.div>
        </div>

        {/* Кому допомагаю */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mt-20 border-t border-[var(--color-border)] pt-16"
        >
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-20">
            <div>
              <div className="inline-flex rounded-full bg-[var(--color-secondary)]/10 px-4 py-2 text-sm font-semibold text-[var(--color-primary)]">
                Спеціалізація
              </div>

              <h3 className="mt-5 text-3xl font-bold leading-tight text-[var(--color-primary)] sm:text-4xl">
                Кому допомагаю
              </h3>

              <p className="mt-4 max-w-md leading-7 text-[var(--color-text-light)]">
                Підбираю формат бухгалтерського супроводу відповідно до
                особливостей діяльності та потреб конкретної організації.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {specializations.map((item) => (
                <div
                  key={item}
                  className="group flex items-start gap-3 rounded-2xl border border-[var(--color-border)] bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-secondary)] hover:shadow-md"
                >
                  <CircleCheck
                    size={21}
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
        </motion.div>

        {/* Мій підхід */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mt-20 overflow-hidden rounded-[32px] border border-[var(--color-border)] bg-[var(--color-background)] p-8 sm:p-10 lg:p-12"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
            <div className="max-w-3xl">
              <div className="inline-flex rounded-full border border-[var(--color-secondary)]/20 bg-white px-4 py-2 text-sm font-semibold text-[var(--color-primary)]">
                Мій підхід
              </div>

              <h3 className="mt-5 text-3xl font-bold leading-tight text-[var(--color-primary)] sm:text-4xl">
                Бухгалтерія має допомагати бізнесу розвиватися
              </h3>

              <p className="mt-5 text-[16px] leading-8 text-[var(--color-text-light)]">
                Системний облік, своєчасна звітність, контроль податків та
                зрозумілі пояснення допомагають власнику краще орієнтуватися
                у фінансових процесах і приймати обґрунтовані рішення.
              </p>
            </div>

            <div className="shrink-0">
              <BdbButton href="/contacts">
                Почати співпрацю
                <ArrowRight size={17} aria-hidden="true" />
              </BdbButton>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}