"use client";

import { motion } from "framer-motion";

import Container from "@/core/layout/Container";
import faq from "@/data/faq";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/core/ui/accordion";

export default function FAQ() {
  return (
    <section id="faq" className="bg-white py-28">
      <Container>
        {/* Заголовок */}

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
            Часті запитання
          </h2>

          <p className="text-lg leading-8 text-[var(--color-text-light)]">
            Зібрали відповіді на запитання, які нам ставлять найчастіше.
          </p>
        </motion.div>

        {/* Accordion */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Accordion className="mx-auto max-w-4xl space-y-5">
            {faq.map((item, index) => (
              <AccordionItem
                key={item.question}
                value={`faq-${index}`}
                className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white px-8 shadow-sm"
              >
                <AccordionTrigger className="py-6 text-left text-lg font-semibold text-[var(--color-primary)] hover:no-underline">
                  {item.question}
                </AccordionTrigger>

                <AccordionContent className="pb-6 leading-8 text-[var(--color-text-light)]">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </Container>
    </section>
  );
}

