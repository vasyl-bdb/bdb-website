"use client";

import { motion } from "framer-motion";

export default function HoverButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      whileHover={{
        y: -2,
        scale: 1.03,
      }}
      whileTap={{
        scale: .98,
      }}
      transition={{
        duration: .2,
      }}
    >
      {children}
    </motion.div>
  );
}

