"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

import Container from "@/core/layout/Container";
import testimonials from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section className="bg-[var(--color-background)] py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="mb-4 inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-[var(--color-primary)]">
            Відгуки клієнтів
          </span>

          <h2 className="mb-6 text-5xl font-bold text-[var(--color-primary)]">
            Нам довіряють
          </h2>

          <p className="text-lg leading-8 text-[var(--color-text-light)]">
            Ми цінуємо довгострокову співпрацю та відповідально ставимося до
            кожного клієнта.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{ y: -8 }}
              className="rounded-3xl border border-[var(--color-border)] bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--color-primary)]">
                <Quote className="h-6 w-6 text-white" />
              </div>

              <p className="mb-8 leading-8 text-[var(--color-text-light)]">
                «{item.text}»
              </p>

              <div className="border-t border-[var(--color-border)] pt-6">
                <h3 className="font-bold text-[var(--color-primary)]">
                  {item.name}
                </h3>

                <p className="text-sm text-[var(--color-text-light)]">
                  {item.position}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}

