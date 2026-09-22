import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  FileCheck2,
  MessageCircleQuestion,
  ShieldCheck,
  WalletCards,
} from "lucide-react";

import SiteLayout from "@/core/bdb/layout/SiteLayout";
import Container from "@/core/layout/Container";

import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

import BdbButton from "@/core/bdb/ui/BdbButton";

const faq = [
  {
    question: "Як розпочинається співпраця?",
    answer:
      "Спочатку обговорюємо вашу діяльність, систему оподаткування, обсяг роботи та поточний стан бухгалтерського обліку. Після цього визначаємо необхідний перелік послуг, формат роботи та вартість супроводу.",
  },
  {
    question: "Чи можна перейти до вас від іншого бухгалтера?",
    answer:
      "Так. Допоможу прийняти бухгалтерський облік, проаналізувати документи та звітність, визначити можливі проблеми й організувати подальше ведення обліку.",
  },
  {
    question: "Як передаються документи?",
    answer:
      "Основний формат роботи — дистанційний. Документи можна передавати в електронному вигляді через погоджений канал зв'язку. Конкретний порядок залежить від особливостей вашого бізнесу.",
  },
  {
    question: "Чи потрібно передавати оригінали документів?",
    answer:
      "Не завжди. Значну частину поточних документів можна передавати в електронному вигляді. Необхідність роботи з оригіналами визначається залежно від конкретного документа та ситуації.",
  },
  {
    question: "Хто контролює строки подання звітності та сплати податків?",
    answer:
      "У межах погодженого бухгалтерського супроводу контролюю строки подання звітності та обов'язкових платежів, готую необхідні документи та повідомляю про суми і строки сплати.",
  },
  {
    question: "Чи подаєте ви звітність?",
    answer:
      "Так, якщо подання звітності входить до погодженого переліку послуг. Звітність готується на підставі даних бухгалтерського та податкового обліку.",
  },
  {
    question: "Чи можна замовити тільки окрему послугу?",
    answer:
      "Так. Не обов'язково замовляти повний бухгалтерський супровід. Можна замовити окрему бухгалтерську або податкову послугу чи разову роботу.",
  },
  {
    question: "Від чого залежить вартість бухгалтерського супроводу?",
    answer:
      "Вартість залежить від форми бізнесу, системи оподаткування, кількості операцій, працівників, обсягу первинних документів, необхідності кадрового супроводу та інших особливостей роботи.",
  },
  {
    question: "Чи є фіксована щомісячна оплата?",
    answer:
      "Так. Для постійного супроводу можна погодити фіксовану щомісячну вартість відповідно до обсягу послуг. Якщо обсяг роботи істотно змінюється, умови можуть бути переглянуті за погодженням.",
  },
  {
    question: "Чи можна спочатку отримати консультацію?",
    answer:
      "Так. Можна звернутися за разовою консультацією щодо бухгалтерського обліку, оподаткування, звітності, документів або організації роботи.",
  },
  {
    question: "Чи працюєте ви дистанційно?",
    answer:
      "Так. Основний формат роботи — дистанційний. Робочі питання можна вирішувати телефоном, електронною поштою та через месенджери.",
  },
  {
    question: "Що потрібно для початку роботи?",
    answer:
      "Необхідний перелік інформації та документів залежить від вашої ситуації. Після первинної консультації надам конкретний список того, що потрібно для початку роботи.",
  },
];

const quickInfo = [
  {
    icon: MessageCircleQuestion,
    title: "Консультація",
    text: "Допоможу розібратися з бухгалтерськими та податковими питаннями.",
  },
  {
    icon: FileCheck2,
    title: "Документи",
    text: "Організуємо зручний порядок передачі та опрацювання документів.",
  },
  {
    icon: ShieldCheck,
    title: "Контроль",
    text: "Контроль строків звітності, платежів та важливих бухгалтерських питань.",
  },
  {
    icon: WalletCards,
    title: "Прозора вартість",
    text: "Вартість визначається відповідно до реального обсягу роботи.",
  },
];

export default function FAQPage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <Section background="white">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)]/10 px-4 py-2 text-sm font-semibold text-[var(--color-primary)]">
                <MessageCircleQuestion size={17} />
                Поширені запитання
              </div>

              <h1 className="text-4xl font-bold leading-tight text-[var(--color-primary)] sm:text-5xl lg:text-6xl">
                Відповіді на поширені
                <br className="hidden sm:block" />
                запитання
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-[var(--color-text-light)] sm:text-lg sm:leading-8">
                Відповіді на основні питання щодо бухгалтерського супроводу,
                документів, звітності, вартості та організації дистанційної
                роботи.
              </p>
            </div>
          </Reveal>

          {/* QUICK INFO */}
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {quickInfo.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.06}>
                  <div className="h-full rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-primary)] text-white">
                      <Icon size={21} />
                    </div>

                    <h2 className="mt-5 text-lg font-bold text-[var(--color-primary)]">
                      {item.title}
                    </h2>

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

      {/* FAQ */}
      <Section background="light">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-secondary)]">
                FAQ
              </span>

              <h2 className="mt-3 text-3xl font-bold text-[var(--color-primary)] sm:text-4xl">
                Питання та відповіді
              </h2>

              <p className="mt-4 text-base leading-7 text-[var(--color-text-light)]">
                Якщо ви не знайшли відповіді на своє питання — зверніться за
                консультацією.
              </p>
            </div>
          </Reveal>

          <div className="mx-auto mt-10 max-w-4xl">
            <div className="space-y-4">
              {faq.map((item, index) => (
                <Reveal key={item.question} delay={index * 0.025}>
                  <article className="rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-sm transition-all duration-300 hover:border-[var(--color-secondary)] hover:shadow-md sm:p-7">
                    <div className="flex items-start gap-4">
                      <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                        <CheckCircle2 size={18} />
                      </div>

                      <div>
                        <h3 className="text-lg font-bold leading-7 text-[var(--color-primary)]">
                          {item.question}
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-[var(--color-text-light)] sm:text-base">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* EXPERIENCE */}
      <Section background="white">
        <Container>
          <Reveal>
            <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl border border-[var(--color-border)] bg-white p-6">
                <div className="flex items-center gap-3">
                  <Clock3
                    size={22}
                    className="text-[var(--color-secondary)]"
                  />
                  <span className="font-semibold text-[var(--color-primary)]">
                    Досвід
                  </span>
                </div>

                <p className="mt-4 text-2xl font-bold text-[var(--color-primary)]">
                  15 років
                </p>

                <p className="mt-1 text-sm leading-6 text-[var(--color-text-light)]">
                  професійного досвіду у бухгалтерському обліку.
                </p>
              </div>

              <div className="rounded-2xl border border-[var(--color-border)] bg-white p-6">
                <div className="flex items-center gap-3">
                  <ShieldCheck
                    size={22}
                    className="text-[var(--color-secondary)]"
                  />
                  <span className="font-semibold text-[var(--color-primary)]">
                    Формат роботи
                  </span>
                </div>

                <p className="mt-4 text-2xl font-bold text-[var(--color-primary)]">
                  100% онлайн
                </p>

                <p className="mt-1 text-sm leading-6 text-[var(--color-text-light)]">
                  Дистанційна взаємодія з клієнтами по всій Україні.
                </p>
              </div>

              <div className="rounded-2xl border border-[var(--color-border)] bg-white p-6 sm:col-span-2 lg:col-span-1">
                <div className="flex items-center gap-3">
                  <MessageCircleQuestion
                    size={22}
                    className="text-[var(--color-secondary)]"
                  />
                  <span className="font-semibold text-[var(--color-primary)]">
                    Індивідуальний підхід
                  </span>
                </div>

                <p className="mt-4 text-2xl font-bold text-[var(--color-primary)]">
                  Під ваш бізнес
                </p>

                <p className="mt-1 text-sm leading-6 text-[var(--color-text-light)]">
                  Обсяг послуг визначається відповідно до реальних потреб.
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* CTA */}
      <Section background="primary">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <span className="inline-flex rounded-full border border-[var(--color-secondary)]/30 bg-[var(--color-secondary)]/10 px-4 py-2 text-sm font-semibold text-[var(--color-secondary)]">
                Маєте інше питання?
              </span>

              <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Обговоримо вашу ситуацію
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
                Напишіть або зателефонуйте. Обговоримо вашу ситуацію,
                визначимо необхідний обсяг роботи та підберемо зручний формат
                бухгалтерського супроводу.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <BdbButton href="/contacts">
                  Отримати консультацію
                </BdbButton>

                <a
                  href="/calculator"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/15"
                >
                  Розрахувати вартість
                  <ArrowRight size={17} />
                </a>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </SiteLayout>
  );
}