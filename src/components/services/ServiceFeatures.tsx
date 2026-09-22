"use client";

import { motion } from "framer-motion";
import {
  Calculator,
  FileText,
  Wallet,
  Users,
  ShieldCheck,
  ClipboardList,
  Landmark,
  BadgeCheck,
  Receipt,
} from "lucide-react";

import Container from "@/core/layout/Container";

interface ServiceFeaturesProps {
  title: string;
  description: string;
  features: string[];
}

const icons = [
  Calculator,
  FileText,
  Wallet,
  Users,
  ShieldCheck,
  ClipboardList,
  Landmark,
  BadgeCheck,
  Receipt,
];

export default function ServiceFeatures({
  title,
  description,
  features,
}: ServiceFeaturesProps) {
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
            Послуга
          </span>

          <h2 className="mb-6 text-5xl font-bold text-[var(--color-primary)]">
            {title}
          </h2>

          <p className="text-lg leading-8 text-[var(--color-text-light)]">
            {description}
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = icons[index % icons.length];

            return (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
                className="group rounded-3xl border border-[var(--color-border)] bg-[var(--color-background)] p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--color-primary)] transition-all duration-300 group-hover:scale-110">
                  <Icon className="text-white" size={30} />
                </div>

                <h3 className="text-xl font-bold leading-8 text-[var(--color-primary)]">
                  {feature}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}