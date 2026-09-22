import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";

import SiteLayout from "@/core/bdb/layout/SiteLayout";
import Container from "@/core/layout/Container";
import Section from "@/components/ui/Section";

const sections = [
  {
    title: "1. Загальні положення",
    text: (
      <>
        Ця Політика конфіденційності визначає порядок збору, використання та
        захисту інформації, яку користувач може надати під час користування
        вебсайтом BDB — «Бухгалтерія для бізнесу».
      </>
    ),
  },
  {
    title: "2. Яку інформацію ми можемо отримувати",
    text: (
      <>
        Під час звернення через сайт користувач може добровільно надати ім&apos;я,
        номер телефону, адресу електронної пошти та іншу інформацію, необхідну
        для опрацювання звернення та надання консультації.
      </>
    ),
  },
  {
    title: "3. Мета використання інформації",
    text: (
      <>
        Надана інформація використовується для зв&apos;язку з користувачем,
        опрацювання запитів, підготовки консультацій та організації
        бухгалтерського обслуговування.
      </>
    ),
  },
  {
    title: "4. Захист персональних даних",
    text: (
      <>
        Ми вживаємо необхідних організаційних і технічних заходів для захисту
        отриманої інформації від несанкціонованого доступу, зміни, розкриття
        або знищення.
      </>
    ),
  },
  {
    title: "5. Передача інформації третім особам",
    text: (
      <>
        Персональні дані не передаються третім особам без законних підстав або
        згоди користувача, крім випадків, передбачених законодавством України.
      </>
    ),
  },
  {
    title: "6. Термін зберігання інформації",
    text: (
      <>
        Інформація зберігається протягом строку, необхідного для досягнення
        визначеної мети її обробки, якщо інший строк не встановлений
        законодавством.
      </>
    ),
  },
  {
    title: "7. Файли cookie",
    text: (
      <>
        Сайт може використовувати технічні файли cookie, необхідні для його
        коректної роботи, покращення взаємодії з користувачем та аналізу
        відвідуваності.
      </>
    ),
  },
  {
    title: "8. Посилання на сторонні ресурси",
    text: (
      <>
        Сайт може містити посилання на сторонні вебресурси або сервіси
        комунікації. Ми не несемо відповідальності за політику конфіденційності
        таких ресурсів.
      </>
    ),
  },
  {
    title: "9. Права користувача",
    text: (
      <>
        Користувач має право звернутися щодо уточнення, зміни або видалення
        наданої ним інформації, якщо це не суперечить вимогам законодавства
        України щодо її зберігання.
      </>
    ),
  },
  {
    title: "10. Зміни до Політики конфіденційності",
    text: (
      <>
        Ця Політика може періодично оновлюватися. Актуальна редакція завжди
        доступна на цій сторінці.
      </>
    ),
  },
  {
    title: "11. Контакти",
    text: (
      <>
        Якщо у вас виникли питання щодо обробки персональних даних або цієї
        Політики, ви можете звернутися через{" "}
        <Link
          href="/contacts"
          className="font-medium text-[var(--color-primary)] underline underline-offset-4 transition-opacity hover:opacity-70"
        >
          сторінку контактів
        </Link>
        .
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <SiteLayout>
      <Section background="light" spacing="lg">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-4 py-2 text-sm font-medium text-[var(--color-primary)]">
              <ShieldCheck size={17} />
              Конфіденційність
            </div>

            <h1 className="max-w-3xl font-serif text-4xl font-semibold leading-tight tracking-tight text-[var(--color-primary)] sm:text-5xl">
              Політика конфіденційності
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-7 text-[var(--color-text-light)] sm:text-lg">
              Ця політика пояснює, яку інформацію ми можемо отримувати під час
              користування сайтом BDB, для чого вона використовується та як
              забезпечується її захист.
            </p>
          </div>
        </Container>
      </Section>

      <Section background="white" spacing="lg">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="space-y-5">
              {sections.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-sm sm:p-7"
                >
                  <h2 className="text-lg font-semibold text-[var(--color-primary)] sm:text-xl">
                    {item.title}
                  </h2>

                  <div className="mt-3 text-sm leading-7 text-[var(--color-text-light)] sm:text-base">
                    {item.text}
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="mt-0.5 shrink-0">
                  <CheckCircle2
                    size={22}
                    className="text-[var(--color-primary)]"
                  />
                </div>

                <div>
                  <h2 className="text-lg font-semibold text-[var(--color-primary)]">
                    Важливо
                  </h2>

                  <p className="mt-2 text-sm leading-7 text-[var(--color-text-light)] sm:text-base">
                    Інформація на сайті має загальний інформаційний характер і
                    не є індивідуальною юридичною або податковою консультацією.
                    Для отримання консультації з конкретної ситуації
                    рекомендуємо звернутися до спеціаліста.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <Link
                href="/contacts"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] transition-opacity hover:opacity-70"
              >
                Зв&apos;язатися з нами
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </SiteLayout>
  );
}