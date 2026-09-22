"use client";

import Link from "next/link";
import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  Clock3,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";

import SiteLayout from "@/core/bdb/layout/SiteLayout";
import Container from "@/core/layout/Container";
import Section from "@/components/ui/Section";
import BdbButton from "@/core/bdb/ui/BdbButton";

const contactItems = [
  {
    icon: Phone,
    label: "Телефон",
    value: "096 859 00 66",
    href: "tel:+380968590066",
    description: "Зателефонуйте для короткої консультації",
  },
  {
    icon: Mail,
    label: "Email",
    value: "1303bida@ukr.net",
    href: "mailto:1303bida@ukr.net",
    description: "Напишіть — відповімо та узгодимо подальші кроки",
  },
  {
    icon: MapPin,
    label: "Формат роботи",
    value: "Онлайн по всій Україні",
    href: null,
    description: "Працюємо дистанційно з клієнтами з усієї України",
  },
];

const steps = [
  {
    number: "01",
    title: "Зв'язуємось",
    text: "Коротко обговорюємо ваш бізнес, поточну ситуацію та завдання.",
  },
  {
    number: "02",
    title: "Аналізуємо",
    text: "Визначаємо необхідний обсяг бухгалтерського та податкового супроводу.",
  },
  {
    number: "03",
    title: "Пропонуємо рішення",
    text: "Погоджуємо формат роботи, перелік послуг та вартість супроводу.",
  },
];

export default function ContactsPage() {
  return (
    <SiteLayout>
      <main className="overflow-hidden bg-[var(--color-background)]">
        {/* HERO */}
        <Section className="pt-20 lg:pt-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <span className="inline-flex rounded-full bg-[var(--color-secondary)]/10 px-4 py-2 text-sm font-semibold text-[var(--color-primary)]">
                Контакти
              </span>

              <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-[var(--color-primary)] sm:text-5xl lg:text-6xl">
                Давайте обговоримо
                <span className="block text-[var(--color-secondary)]">
                  ваш бізнес
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--color-text-light)]">
                Розкажіть, з яким завданням ви звертаєтесь. Разом визначимо
                оптимальний формат бухгалтерського супроводу та наступні
                кроки.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <BdbButton href="tel:+380968590066">
                  <Phone size={18} />
                  Зателефонувати
                </BdbButton>

                <BdbButton href="mailto:1303bida@ukr.net" variant="outline">
                  <Mail size={18} />
                  Написати email
                </BdbButton>
              </div>

              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[var(--color-text-light)]">
                <div className="flex items-center gap-2">
                  <CheckCircle2
                    size={17}
                    className="text-[var(--color-secondary)]"
                  />
                  <span>Конфіденційність</span>
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2
                    size={17}
                    className="text-[var(--color-secondary)]"
                  />
                  <span>Онлайн по всій Україні</span>
                </div>
              </div>
            </motion.div>

            {/* CONTACT CARD */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <div className="rounded-3xl bg-[var(--color-primary)] p-7 shadow-[0_20px_60px_rgba(30,55,40,0.12)] lg:p-9">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <div className="text-sm font-medium uppercase tracking-[0.15em] text-white/60">
                      BDB
                    </div>

                    <h2 className="mt-2 text-2xl font-bold text-white lg:text-3xl">
                      Зв'яжіться з нами
                    </h2>
                  </div>

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-secondary)]/15 text-[var(--color-secondary)]">
                    <MessageCircle size={24} />
                  </div>
                </div>

                <p className="mt-5 leading-7 text-white/75">
                  Перший контакт не зобов'язує до співпраці. Спочатку
                  розберемося у вашій ситуації та визначимо, чим можемо бути
                  корисними.
                </p>

                <div className="mt-7 space-y-3">
                  {contactItems.map((item) => {
                    const Icon = item.icon;

                    const content = (
                      <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-white/20 hover:bg-white/10">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-secondary)]/15 text-[var(--color-secondary)]">
                          <Icon size={19} />
                        </div>

                        <div className="min-w-0">
                          <div className="text-xs font-medium uppercase tracking-wider text-white/60">
                            {item.label}
                          </div>

                          <div className="mt-1 text-base font-semibold text-white">
                            {item.value}
                          </div>

                          <div className="mt-1 text-sm leading-5 text-white/65">
                            {item.description}
                          </div>
                        </div>
                      </div>
                    );

                    if (item.href) {
                      return (
                        <a
                          key={item.label}
                          href={item.href}
                          className="block"
                        >
                          {content}
                        </a>
                      );
                    }

                    return (
                      <div key={item.label}>
                        {content}
                      </div>
                    );
                  })}
                </div>

                <div className="mt-5 flex items-center gap-3 rounded-2xl border border-[var(--color-secondary)]/25 bg-[var(--color-secondary)]/10 px-4 py-3.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--color-secondary)]/15">
                    <Clock3
                      size={17}
                      className="text-[var(--color-secondary)]"
                    />
                  </div>

                  <div>
                    <div className="text-sm font-semibold text-white">
                      Зручний формат спілкування
                    </div>

                    <div className="mt-0.5 text-xs text-white/65">
                      Телефон, email або онлайн-консультація
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Section>

        {/* HOW IT WORKS */}
        <Section className="border-y border-[var(--color-border)] bg-white">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-[var(--color-secondary)]/10 px-4 py-2 text-sm font-semibold text-[var(--color-primary)]">
              Як починається співпраця
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-[var(--color-primary)] sm:text-4xl lg:text-5xl">
              Просто. Зрозуміло. Без зайвої бюрократії.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[var(--color-text-light)]">
              Щоб почати роботу, достатньо звернутися із вашим запитом. Далі
              разом визначимо оптимальний формат співпраці.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
                className="group rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-secondary)] hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-primary)] text-sm font-bold text-white">
                    {step.number}
                  </div>

                  {index < steps.length - 1 && (
                    <ArrowRight
                      size={19}
                      className="hidden text-[var(--color-secondary)] md:block"
                    />
                  )}
                </div>

                <h3 className="mt-6 text-xl font-bold text-[var(--color-primary)]">
                  {step.title}
                </h3>

                <p className="mt-3 leading-7 text-[var(--color-text-light)]">
                  {step.text}
                </p>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* EXPERIENCE / TRUST */}
        <Section>
          <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <span className="inline-flex rounded-full bg-[var(--color-secondary)]/10 px-4 py-2 text-sm font-semibold text-[var(--color-primary)]">
                BDB
              </span>

              <h2 className="mt-5 text-3xl font-bold leading-tight text-[var(--color-primary)] sm:text-4xl">
                Бухгалтерія, на яку можна покластися
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-[var(--color-border)] bg-white p-6">
                <div className="text-3xl font-bold text-[var(--color-secondary)]">
                  15
                </div>

                <div className="mt-2 font-semibold text-[var(--color-primary)]">
                  років професійного досвіду
                </div>

                <p className="mt-2 text-sm leading-6 text-[var(--color-text-light)]">
                  Практичний досвід у бухгалтерському обліку та податковому
                  супроводі.
                </p>
              </div>

              <div className="rounded-2xl border border-[var(--color-border)] bg-white p-6">
                <div className="text-3xl font-bold text-[var(--color-secondary)]">
                  100%
                </div>

                <div className="mt-2 font-semibold text-[var(--color-primary)]">
                  Дистанційний формат
                </div>

                <p className="mt-2 text-sm leading-6 text-[var(--color-text-light)]">
                  Працюємо онлайн без прив'язки до офісу чи міста.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* FINAL CTA */}
        <Section className="pt-4 lg:pt-8">
          <div className="relative overflow-hidden rounded-3xl bg-[var(--color-primary)] px-7 py-12 text-center sm:px-10 lg:px-16 lg:py-16">
            <div className="relative z-10 mx-auto max-w-3xl">
              <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white">
                Готові почати?
              </span>

              <h2 className="mt-6 text-3xl font-bold leading-tight text-[var(--color-secondary)] sm:text-4xl lg:text-5xl">
                Ви розвиваєте бізнес —
                <span className="block">ми подбаємо про бухгалтерію</span>
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/75">
                Обговоримо ваш бізнес, визначимо необхідний обсяг супроводу та
                підберемо оптимальний формат співпраці.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a
                  href="tel:+380968590066"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-[var(--color-primary)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <Phone size={18} />
                  Отримати консультацію
                  <ArrowRight size={18} />
                </a>

                <Link
                  href="/calculator"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-white hover:text-[var(--color-primary)]"
                >
                  Розрахувати вартість
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </Section>
      </main>
    </SiteLayout>
  );
}