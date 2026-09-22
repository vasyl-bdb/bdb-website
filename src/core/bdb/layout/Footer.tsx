"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

import Container from "@/core/layout/Container";

const navigation = [
  {
    label: "Головна",
    href: "/",
  },
  {
    label: "Про нас",
    href: "/about",
  },
  {
    label: "Послуги",
    href: "/services",
  },
  {
    label: "Калькулятор",
    href: "/calculator",
  },
  {
    label: "FAQ",
    href: "/faq",
  },
  {
    label: "Контакти",
    href: "/contacts",
  },
];

const services = [
  {
    label: "Бухгалтерський супровід",
    href: "/services",
  },
  {
    label: "Податковий облік",
    href: "/services/reporting",
  },
  {
    label: "Кадровий облік",
    href: "/services/payroll",
  },
  {
    label: "Фінансовий консалтинг",
    href: "/services",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[var(--color-primary)] text-white">
      {/* Decorative background */}

      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-white/5" />

      <div className="pointer-events-none absolute -bottom-48 -left-40 h-[500px] w-[500px] rounded-full border border-[var(--color-secondary)]/10" />

      <div className="pointer-events-none absolute right-[20%] top-[30%] h-40 w-40 rounded-full bg-[var(--color-secondary)]/5 blur-3xl" />

      <Container>
        {/* Main footer */}

        <div className="relative border-b border-white/10 py-14 lg:py-16">
          <div className="grid gap-12 lg:grid-cols-[1.5fr_0.8fr_1fr_1fr] lg:gap-10">
            {/* Brand */}

            <div className="max-w-md">
              <Link
                href="/"
                className="group inline-flex items-center gap-4"
              >
                <div className="flex items-center justify-center">
                  <span className="text-[42px] font-black tracking-[-2.5px] text-white transition-transform duration-300 group-hover:scale-105">
                    BDB
                  </span>
                </div>

                <div className="leading-none">
                  <div className="text-[22px] font-bold tracking-[-0.5px] text-white">
                    BDB
                  </div>

                  <div className="mt-2 whitespace-nowrap text-[11px] font-medium tracking-wide text-white/55">
                    Бухгалтерія для бізнесу
                  </div>
                </div>
              </Link>

              <p className="mt-6 text-[15px] leading-7 text-white/65">
                Фінансовий партнер для бізнесу. Допомагаю підприємцям,
                товариствам з обмеженою відповідальністю та неприбутковим
                організаціям вести бухгалтерський, податковий і фінансовий
                облік відповідно до законодавства України.
              </p>

              <Link
                href="/contacts"
                className="group mt-7 inline-flex items-center gap-4 rounded-2xl border border-white/20 bg-white/5 px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:border-[var(--color-secondary)] hover:bg-[var(--color-secondary)] hover:text-[var(--color-primary)]"
              >
                <span>Почати співпрацю</span>

                <ArrowUpRight
                  size={19}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>

            {/* Navigation */}

            <div>
              <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.16em] text-white/40">
                Навігація
              </h3>

              <nav className="flex flex-col gap-4">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group flex items-center gap-2 text-[15px] text-white/70 transition-colors duration-300 hover:text-white"
                  >
                    <span>{item.label}</span>

                    <ArrowRight
                      size={14}
                      className="translate-x-0 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                    />
                  </Link>
                ))}
              </nav>
            </div>

            {/* Services */}

            <div>
              <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.16em] text-white/40">
                Послуги
              </h3>

              <nav className="flex flex-col gap-4">
                {services.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="group flex items-center gap-2 text-[15px] text-white/70 transition-colors duration-300 hover:text-white"
                  >
                    <span>{item.label}</span>

                    <ArrowRight
                      size={14}
                      className="translate-x-0 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                    />
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contacts */}

            <div>
              <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.16em] text-white/40">
                Контакти
              </h3>

              <div className="space-y-6">
                {/* Phone */}

                <a
                  href="tel:+380968590066"
                  className="group flex gap-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] transition-colors duration-300 group-hover:bg-[var(--color-secondary)] group-hover:text-[var(--color-primary)]">
                    <Phone size={18} />
                  </div>

                  <div>
                    <div className="text-xs font-medium uppercase tracking-wider text-white/40">
                      Телефон
                    </div>

                    <div className="mt-1 text-[15px] font-semibold text-white">
                      096 859 00 66
                    </div>
                  </div>
                </a>

                {/* Email */}

                <a
                  href="mailto:1303bida@ukr.net"
                  className="group flex gap-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] transition-colors duration-300 group-hover:bg-[var(--color-secondary)] group-hover:text-[var(--color-primary)]">
                    <Mail size={18} />
                  </div>

                  <div>
                    <div className="text-xs font-medium uppercase tracking-wider text-white/40">
                      Email
                    </div>

                    <div className="mt-1 break-all text-[15px] font-semibold text-white">
                      1303bida@ukr.net
                    </div>
                  </div>
                </a>

                {/* Work format */}

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]">
                    <MapPin size={18} />
                  </div>

                  <div>
                    <div className="text-xs font-medium uppercase tracking-wider text-white/40">
                      Формат роботи
                    </div>

                    <div className="mt-1 text-[15px] font-semibold text-white">
                      Онлайн по всій Україні
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row */}

        <div className="flex flex-col gap-4 py-6 text-sm md:flex-row md:items-center md:justify-between">
          <div className="text-white/40">
            © {new Date().getFullYear()} BDB. Бухгалтерія для бізнесу.
          </div>

          <div className="flex flex-wrap items-center gap-5">
            <Link
              href="/privacy"
              className="text-white/40 transition-colors hover:text-white"
            >
              Політика конфіденційності
            </Link>

            <span className="hidden h-1 w-1 rounded-full bg-white/20 md:block" />

            <span className="text-white/40">
              Дистанційна робота по всій Україні
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}