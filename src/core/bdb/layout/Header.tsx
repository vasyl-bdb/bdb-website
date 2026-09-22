"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

import Container from "@/core/layout/Container";

const navItems = [
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

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-3">
      <Container>
        <div className="relative">
          {/* Main header */}

          <div className="flex h-[72px] items-center rounded-full border border-white/80 bg-white/95 px-5 shadow-[0_12px_40px_rgba(30,50,40,0.08)] backdrop-blur-xl md:px-8">
            {/* Logo */}

            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="group flex shrink-0 items-center gap-3"
            >
              <div className="flex items-center justify-center">
                <span className="text-[26px] font-black tracking-[-1.5px] text-[var(--color-primary)] transition-transform duration-300 group-hover:scale-105">
                  BDB
                </span>
              </div>

              <div className="hidden leading-none sm:block">
                <div className="text-[20px] font-bold tracking-[-0.5px] text-[var(--color-primary)]">
                  BDB
                </div>

                <div className="mt-1 whitespace-nowrap text-[11px] font-medium tracking-wide text-[var(--color-text-light)]">
                  Бухгалтерія для бізнесу
                </div>
              </div>
            </Link>

            {/* Desktop navigation */}

            <nav className="mx-auto hidden items-center gap-7 lg:flex">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group relative py-2 text-[15px] font-semibold text-[var(--color-primary)] transition-colors duration-300 hover:text-[var(--color-secondary)]"
                >
                  {item.label}

                  <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[var(--color-secondary)] transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}

            <Link
              href="/contacts"
              className="hidden shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] px-7 py-3 text-sm font-semibold !text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg lg:inline-flex"
            >
              Отримати консультацію
            </Link>

            {/* Mobile menu button */}

            <button
              type="button"
              aria-label={
                mobileMenuOpen
                  ? "Закрити меню"
                  : "Відкрити меню"
              }
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="ml-auto flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-light)] text-[var(--color-primary)] transition-all duration-300 hover:bg-[var(--color-primary)] hover:text-white lg:hidden"
            >
              {mobileMenuOpen ? (
                <X size={22} />
              ) : (
                <Menu size={22} />
              )}
            </button>
          </div>

          {/* Mobile menu */}

          {mobileMenuOpen && (
            <div className="absolute left-0 right-0 top-[82px] overflow-hidden rounded-[28px] border border-[var(--color-border)] bg-white p-5 shadow-[0_20px_60px_rgba(30,50,40,0.12)] lg:hidden">
              <nav className="flex flex-col">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between border-b border-[var(--color-border)] py-4 text-[16px] font-semibold text-[var(--color-primary)] transition-colors hover:text-[var(--color-secondary)]"
                  >
                    <span>{item.label}</span>

                    <ArrowRight
                      size={18}
                      className="text-[var(--color-secondary)]"
                    />
                  </Link>
                ))}
              </nav>

              {/* Mobile CTA */}

              <Link
                href="/contacts"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-5 flex w-full items-center justify-center rounded-full bg-[var(--color-primary)] px-6 py-4 text-sm font-semibold !text-white transition-all hover:opacity-90"
              >
                Отримати консультацію
              </Link>
            </div>
          )}
        </div>
      </Container>
    </header>
  );
}