"use client";

import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

import Container from "@/core/layout/Container";
import contacts from "@/data/contacts";

import BdbButton from "@/core/bdb/ui/BdbButton";

export default function Contacts() {
  return (
    <section
      id="contacts"
      className="bg-[var(--color-background)] py-28"
    >
      <Container>
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="mb-4 inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-[var(--color-primary)]">
            Контакти
          </span>

          <h2 className="mb-6 text-5xl font-bold text-[var(--color-primary)]">
            Зв'яжіться з нами
          </h2>

          <p className="mx-auto max-w-2xl text-lg leading-8 text-[var(--color-text-light)]">
            Ми завжди готові відповісти на ваші запитання та допомогти з
            бухгалтерським, податковим або фінансовим супроводом бізнесу.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Ліва колонка */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <ContactCard
              icon={<Phone size={22} />}
              title="Телефон"
              value={contacts.phone}
              href={contacts.phoneLink}
            />

            <ContactCard
              icon={<Mail size={22} />}
              title="Email"
              value={contacts.email}
            />

            <ContactCard
              icon={<Send size={22} />}
              title="Telegram"
              value={contacts.telegram}
            />

            <ContactCard
              icon={<MapPin size={22} />}
              title="Локація"
              value={contacts.location}
            />
          </motion.div>

          {/* Права колонка */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-[var(--color-border)] bg-white p-10 shadow-sm"
          >
            <h3 className="mb-6 text-3xl font-bold text-[var(--color-primary)]">
              Безкоштовна консультація
            </h3>

            <p className="mb-8 leading-8 text-[var(--color-text-light)]">
              Опишіть коротко свою ситуацію телефоном або повідомленням.
              Допоможемо визначити оптимальне рішення та запропонуємо формат
              співпраці.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>

                <span>Консультації онлайн по всій Україні</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>

                <span>Працюємо з ТОВ, ФОП, ГО та благодійними фондами</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>

                <span>Індивідуальний підхід до кожного клієнта</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>

                <span>Конфіденційність гарантована</span>
              </div>
            </div>

            <div className="mt-10">
              <BdbButton
                href={contacts.phoneLink}
                className="w-full"
              >
                Зателефонувати
              </BdbButton>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  href?: string;
}

function ContactCard({
  icon,
  title,
  value,
  href,
}: ContactCardProps) {
  return (
    <div className="flex items-start gap-5 rounded-3xl border border-[var(--color-border)] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--color-primary)] text-white">
        {icon}
      </div>

      <div>
        <h3 className="mb-2 font-semibold text-[var(--color-primary)]">
          {title}
        </h3>

        {href ? (
          <a
            href={href}
            className="text-lg font-medium text-[var(--color-primary)] hover:underline"
          >
            {value}
          </a>
        ) : (
          <p className="leading-7 text-[var(--color-text-light)]">
            {value}
          </p>
        )}
      </div>
    </div>
  );
}

