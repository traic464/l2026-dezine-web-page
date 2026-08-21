"use client";

import { motion, useAnimationControls } from "framer-motion";

type Item = {
  label: string;
  glyph: string;
  className: string;
  rot: number;
};

const items: Item[] = [
  {
    label: "Brand Identity",
    glyph: "✳",
    className: "bg-accent text-ink",
    rot: -4,
  },
  {
    label: "Web & UI/UX",
    glyph: "◍",
    className: "border border-accent2/60 bg-accent2/20 text-paper",
    rot: 3,
  },
  {
    label: "Digital Marketing",
    glyph: "◆",
    className: "bg-paper text-ink",
    rot: -2,
  },
  {
    label: "Motion & Content",
    glyph: "▶",
    className: "border border-line bg-white/5 text-paper",
    rot: 5,
  },
  {
    label: "Packaging Design",
    glyph: "◗",
    className: "bg-accent2/80 text-paper",
    rot: -5,
  },
  {
    label: "Art Direction",
    glyph: "✦",
    className: "border-2 border-accent text-accent",
    rot: 2,
  },
];

function ServiceChip({ item, index }: { item: Item; index: number }) {
  const controls = useAnimationControls();

  const drop = () =>
    controls.start({
      y: 0,
      opacity: 1,
      rotate: item.rot,
      transition: {
        type: "spring",
        bounce: 0.55,
        duration: 1.1,
        delay: index * 0.09,
      },
    });

  const bounce = () =>
    controls.start({
      y: [0, -26, 0, -9, 0],
      scale: [1, 1.1, 0.96, 1.03, 1],
      rotate: [item.rot, item.rot + 9, item.rot - 6, item.rot + 3, item.rot],
      transition: {
        duration: 0.75,
        times: [0, 0.22, 0.48, 0.72, 1],
        ease: "easeOut",
      },
    });

  return (
    <motion.button
      type="button"
      onClick={bounce}
      initial={{ y: -130, opacity: 0, rotate: item.rot - 22 }}
      animate={controls}
      onViewportEnter={drop}
      viewport={{ once: true, margin: "-80px" }}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.94 }}
      className={`inline-flex items-center gap-2 rounded-full px-5 py-3 font-body text-sm font-medium shadow-lg shadow-black/20 ${item.className}`}
    >
      <span aria-hidden className="text-base leading-none">
        {item.glyph}
      </span>
      {item.label}
    </motion.button>
  );
}

export default function WhatWeDo() {
  return (
    <div className="relative overflow-hidden rounded-[2.5rem] border border-line bg-white/[0.03] px-8 py-14 md:px-16 md:py-20">
      <div className="relative z-10 max-w-2xl">
        <span className="font-body text-sm text-accent">What we do</span>
        <h2 className="mt-4 font-display text-5xl font-semibold tracking-tight text-paper md:text-7xl">
          Our Services
        </h2>
        <p className="mt-6 max-w-md font-body text-base leading-relaxed text-muted md:text-lg">
          We design digital products around real customer insight and solid
          UX/UI practice — helping you take an app or a website from a rough
          idea all the way to launch.
        </p>
      </div>

      <div className="relative z-10 mt-14 flex flex-wrap items-center gap-3 md:mt-20 md:gap-4">
        {items.map((item, i) => (
          <ServiceChip key={item.label} item={item} index={i} />
        ))}
      </div>
    </div>
  );
}
