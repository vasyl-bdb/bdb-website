"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  Search,
  Calculator,
  Handshake,
} from "lucide-react";

import Container from "@/core/layout/Container";

interface ProcessItem {
  step: string;
  title: string;
  text: string;
}

interface ServiceProcessProps {
  title: string;
  description: string;
  process: ProcessItem[];
}

const icons = [
  MessageCircle,
  Search,
  Calculator,
  Handshake,
];

export default function ServiceProcess({
  title,
  description,
  process,
}: ServiceProcessProps) {
  return (
    <section className="bg-white py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="mb-4 inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-[var(--color-primary)]">
            Етапи роботи
          </span>

          <h2 className="mb-6 text-5xl font-bold text-[var(--color-primary)]">
            {title}
          </h2>

          <p className="text-lg leading-8 text-[var(--color-text-light)]">
            {description}
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-6xl">

          {/* Лінія таймлайну */}

          <div className="absolute left-8 top-0 hidden h-full w-1 rounded-full bg-[var(--color-border)] lg:block" />

          <div className="space-y-10">
            {process.map((item, index) => {
              const Icon = icons[index % icons.length];

              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="relative flex flex-col gap-6 rounded-3xl border border-[var(--color-border)] bg-[var(--color-background)] p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl lg:flex-row lg:items-center"
                >
                  <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-white shadow-lg">
                    <Icon size={30} />
                  </div>

                  <div className="flex-1">
                    <div className="mb-2 flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-[var(--color-secondary)] px-3 py-1 text-sm font-bold text-white">
                        Крок {item.step}
                      </span>

                      <h3 className="text-2xl font-bold text-[var(--color-primary)]">
                        {item.title}
                      </h3>
                    </div>

                    <p className="leading-8 text-[var(--color-text-light)]">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

