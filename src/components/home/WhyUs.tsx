"use client";

import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import StatCard from "@/components/ui/StatCard";

export default function WhyUs() {
  return (
    <Section background="white">
      <SectionTitle
        badge="Довіра"
        title="Чому мені довіряють"
        subtitle="Бухгалтерія — це більше, ніж звітність. Це відповідальність, системність та партнерство, на яке можна покластися."
      />

      <div className="mt-16 grid gap-8 lg:grid-cols-2">
        <StatCard
          value="15 років"
          title="років професійного досвіду"
          description="Практичний досвід роботи з виробництвом, логістикою, торгівлею, сферою послуг та неприбутковими організаціями."
        />

        <StatCard
          value="ТОВ"
          title="ФОП • Неприбуткові організації"
          description="Комплексний бухгалтерський супровід бізнесу відповідно до чинного законодавства України."
        />

        <StatCard
          value="Дистанційно"
          title="Працюю по всій Україні"
          description="Дистанційна співпраця, сучасні цифрові сервіси та постійний зв'язок незалежно від вашого місцезнаходження."
        />

        <StatCard
          value="100%"
          title="Конфіденційність"
          description="Ваші фінансові документи, звітність та внутрішня інформація залишаються захищеними."
        />
      </div>

      <Reveal delay={0.2}>
        <div className="mx-auto mt-20 max-w-4xl rounded-[36px] border border-[var(--color-border)] bg-[var(--color-background)] p-10 text-center">
          <h3 className="text-3xl font-bold text-[var(--color-primary)]">
            Моє завдання — зробити бухгалтерію зрозумілою та передбачуваною
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[var(--color-text-light)]">
            Ви займаєтеся розвитком бізнесу, а я забезпечую правильний облік,
            своєчасну звітність та професійну підтримку. Такий підхід дозволяє
            керівникам приймати рішення, спираючись на точні фінансові дані.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}



