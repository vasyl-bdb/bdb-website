"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import Container from "@/core/layout/Container";
import BdbButton from "@/core/bdb/ui/BdbButton";

export default function Hero() {
  return (
    <section
      className="
        relative
        w-full
        min-w-0
        overflow-hidden
        bg-[#FAF8F4]
        pt-32
        pb-16
        sm:pt-36
        sm:pb-20
        lg:pt-44
        lg:pb-28
      "
    >
      {/* Фоновий grid */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
          opacity-40
        "
      >
        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(rgba(47,75,58,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(47,75,58,0.05)_1px,transparent_1px)]
            bg-[size:48px_48px]
          "
        />
      </div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="
            relative
            w-full
            min-w-0
            max-w-3xl
          "
        >
          {/* Badge */}

          <div
            className="
              mb-8
              flex
              w-fit
              max-w-full
              min-w-0
              items-center
              gap-3
              rounded-full
              border
              border-[#E9E5DD]
              bg-white/85
              px-5
              py-3
              shadow-[0_8px_25px_rgba(0,0,0,0.05)]
              backdrop-blur-sm
            "
          >
            <span className="shrink-0 text-[#C8A45D]">
              ★
            </span>

            <span
              className="
                min-w-0
                max-w-full
                text-sm
                font-semibold
                leading-snug
                text-[#2F4B3A]
              "
            >
              Професійний бухгалтерський супровід
            </span>
          </div>

          {/* Заголовок */}

          <h1
            className="
              m-0
              w-full
              min-w-0
              max-w-full
              text-[46px]
              font-bold
              leading-[0.98]
              tracking-[-0.035em]
              text-[#2F4B3A]
              sm:text-[64px]
              sm:leading-[0.96]
              lg:text-[88px]
              lg:leading-[0.92]
            "
          >
            Ваш
            <br />

            <span className="text-[#C8A45D]">
              фінансовий
            </span>

            <br />

            партнер
          </h1>

          {/* Опис */}

          <p
            className="
              mt-7
              block
              w-full
              min-w-0
              max-w-full
              text-[17px]
              leading-[1.65]
              text-[#666C69]
              sm:mt-8
              sm:max-w-2xl
              sm:text-[20px]
              sm:leading-[1.7]
              lg:text-[21px]
            "
          >
            Комплексний бухгалтерський, податковий та кадровий супровід для
            малого і середнього бізнесу. Працюємо дистанційно по всій Україні
            та допомагаємо власникам компаній зосередитися на розвитку
            бізнесу.
          </p>

          {/* Кнопки */}

          <div
            className="
              mt-8
              flex
              w-full
              min-w-0
              flex-col
              gap-4
              sm:w-auto
              sm:flex-row
            "
          >
            <div className="w-full max-w-full sm:w-auto">
              <BdbButton href="#contacts">
                Отримати консультацію
              </BdbButton>
            </div>

            <Link
              href="/services"
              className="
                inline-flex
                min-h-[48px]
                w-full
                max-w-full
                items-center
                justify-center
                rounded-full
                border
                border-[#E9E5DD]
                bg-white/80
                px-6
                text-center
                text-sm
                font-semibold
                text-[#2F4B3A]
                transition-all
                duration-300
                hover:border-[#C8A45D]
                hover:text-[#C8A45D]
                sm:w-auto
              "
            >
              Переглянути послуги
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

