"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
};

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: custom, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Reveal({ children, delay = 0, className }: RevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      custom={delay}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
