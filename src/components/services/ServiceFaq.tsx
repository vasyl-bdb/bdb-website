"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

import Container from "@/core/layout/Container";

interface FaqItem {
  question: string;
  answer: string;
}

interface ServiceFaqProps {
  title: string;
  description: string;
  faq: FaqItem[];
}

export default function ServiceFaq({
  title,
  description,
  faq,
}: ServiceFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  function toggle(index: number) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }

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
            FAQ
          </span>

          <h2 className="mb-6 text-5xl font-bold text-[var(--color-primary)]">
            {title}
          </h2>

          <p className="text-lg leading-8 text-[var(--color-text-light)]">
            {description}
          </p>
        </motion.div>

        <div className="mx-auto max-w-4xl space-y-5">
          {faq.map((item, index) => {
            const opened = openIndex === index;

            return (
              <motion.div
                key={item.question}
                layout
                transition={{ duration: 0.25 }}
                className="overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-background)]"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between gap-6 p-8 text-left transition-colors hover:bg-white"
                >
                  <h3 className="text-xl font-semibold text-[var(--color-primary)]">
                    {item.question}
                  </h3>

                  <motion.div
                    animate={{
                      rotate: opened ? 180 : 0,
                    }}
                    transition={{ duration: 0.25 }}
                    className="shrink-0"
                  >
                    <ChevronDown
                      size={26}
                      className="text-[var(--color-primary)]"
                    />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {opened && (
                    <motion.div
                      key="content"
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-[var(--color-border)] px-8 py-6">
                        <p className="leading-8 text-[var(--color-text-light)]">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

