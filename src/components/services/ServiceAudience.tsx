"use client";

import { motion } from "framer-motion";
import { Building2, Briefcase, Landmark, Users } from "lucide-react";

import Container from "@/core/layout/Container";

interface AudienceItem {
  title: string;
  text: string;
}

interface ServiceAudienceProps {
  title: string;
  description: string;
  audience: AudienceItem[];
}

const icons = [
  Building2,
  Briefcase,
  Landmark,
  Users,
];

export default function ServiceAudience({
  title,
  description,
  audience,
}: ServiceAudienceProps) {
  return (
    <section className="bg-[var(--color-background)] py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="mb-4 inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-[var(--color-primary)]">
            Р”Р»СЏ РєРѕРіРѕ
          </span>

          <h2 className="mb-6 text-5xl font-bold text-[var(--color-primary)]">
            {title}
          </h2>

          <p className="text-lg leading-8 text-[var(--color-text-light)]">
            {description}
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {audience.map((item, index) => {
            const Icon = icons[index % icons.length];

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
                className="group rounded-3xl border border-[var(--color-border)] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--color-primary)] transition-transform duration-300 group-hover:scale-110">
                  <Icon
                    size={30}
                    className="text-white"
                  />
                </div>

                <h3 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
                  {item.title}
                </h3>

                <p className="leading-8 text-[var(--color-text-light)]">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

