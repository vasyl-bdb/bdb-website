"use client";

import { motion } from "framer-motion";

export default function Stagger({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: .15,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

