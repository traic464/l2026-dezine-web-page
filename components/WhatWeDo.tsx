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
    label: "Creative Content",
    glyph: "▶",
    className: "bg-accent text-ink",
    rot: -4,
  },
  {
    label: "Online & OOH Advertising",
    glyph: "◆",
    className: "border border-accent2/60 bg-accent2/20 text-paper",
    rot: 3,
  },
  {
    label: "Arabic Localization",
    glyph: "✳",
    className: "bg-paper text-ink",
    rot: -2,
  },
  {
    label: "Ads Optimization",
    glyph: "◍",
    className: "border border-line bg-white/5 text-paper",
    rot: 5,
  },
  {
    label: "Creative + Performance",
    glyph: "✦",
    className: "bg-accent2/80 text-paper",
    rot: -5,
  },
  {
    label: "Website Design & Dev",
    glyph: "◗",
    className: "border-2 border-accent text-accent",
    rot: 2,
  },
  {
    label: "Static Post Content",
    glyph: "◆",
    className: "bg-accent/20 border border-accent/50 text-accent",
    rot: -3,
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
          From creative content and advertising to performance optimization
          and Arabic localization — everything your brand needs under one roof,
          built to perform, not just look good.
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
