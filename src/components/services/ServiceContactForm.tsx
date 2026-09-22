"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  Clock3,
  ShieldCheck,
} from "lucide-react";

import Container from "@/core/layout/Container";
import BdbButton from "@/core/bdb/ui/BdbButton";

export default function ServiceContactForm() {
  return (
    <section className="bg-[var(--color-background)] py-24">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">

          {/* Ліва колонка */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-4 inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-[var(--color-primary)]">
              Консультація
            </span>

            <h2 className="mb-8 text-5xl font-bold text-[var(--color-primary)]">
              Потрібна допомога?
            </h2>

            <p className="mb-12 text-lg leading-8 text-[var(--color-text-light)]">
              Заповніть форму, і ми зв'яжемося з вами найближчим часом,
              відповімо на ваші запитання та допоможемо підібрати
              оптимальний формат бухгалтерського супроводу.
            </p>

            <div className="space-y-8">

              <InfoCard
                icon={<Phone size={28} />}
                title="Телефон"
                text="+38 (0__) ___-__-__"
              />

              <InfoCard
                icon={<Mail size={28} />}
                title="Email"
                text="info@bdb.ua"
              />

              <InfoCard
                icon={<Clock3 size={28} />}
                title="Час відповіді"
                text="Зазвичай відповідаємо протягом робочого дня."
              />

              <InfoCard
                icon={<ShieldCheck size={28} />}
                title="Конфіденційність"
                text="Усі надані дані використовуються виключно для зв'язку з вами."
              />

            </div>
          </motion.div>

          {/* Права колонка */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-white p-10 shadow-xl"
          >
            <form className="space-y-7">

              <div>
                <label className="mb-2 block font-semibold">
                  Ім'я
                </label>

                <input
                  type="text"
                  placeholder="Ваше ім'я"
                  className="w-full rounded-xl border border-[var(--color-border)] px-5 py-4 outline-none transition focus:border-[var(--color-primary)]"
                />
              </div>

              <div>
                <label className="mb-2 block font-semibold">
                  Телефон
                </label>

                <input
                  type="tel"
                  placeholder="+380..."
                  className="w-full rounded-xl border border-[var(--color-border)] px-5 py-4 outline-none transition focus:border-[var(--color-primary)]"
                />
              </div>

              <div>
                <label className="mb-2 block font-semibold">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="w-full rounded-xl border border-[var(--color-border)] px-5 py-4 outline-none transition focus:border-[var(--color-primary)]"
                />
              </div>

              <div>
                <label className="mb-2 block font-semibold">
                  Повідомлення
                </label>

                <textarea
                  rows={6}
                  placeholder="Коротко опишіть ваше питання..."
                  className="w-full rounded-xl border border-[var(--color-border)] px-5 py-4 outline-none transition focus:border-[var(--color-primary)]"
                />
              </div>

              <BdbButton href="#">
                Надіслати заявку
              </BdbButton>

            </form>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  text: string;
}

function InfoCard({
  icon,
  title,
  text,
}: InfoCardProps) {
  return (
    <div className="flex items-start gap-5">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--color-primary)] text-white">
        {icon}
      </div>

      <div>
        <h3 className="mb-2 text-xl font-bold text-[var(--color-primary)]">
          {title}
        </h3>

        <p className="leading-7 text-[var(--color-text-light)]">
          {text}
        </p>
      </div>
    </div>
  );
}

