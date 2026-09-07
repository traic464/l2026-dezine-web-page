"use client";

import { motion } from "framer-motion";

const tickerItems = [
  "Creative Content",
  "Online & OOH Advertising",
  "Arabic Localization",
  "Ads Optimization",
  "Creative + Performance",
  "Website Design & Dev",
  "Static Post Content",
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-[76px]">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-accent2/20 blur-[140px]" />
      <div className="pointer-events-none absolute top-20 right-0 h-[360px] w-[360px] rounded-full bg-accent/10 blur-[120px]" />
      <div className="noise-overlay" />

      <div className="container-x relative flex flex-col items-start gap-8 pb-20 pt-20 md:pb-28 md:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-1.5 font-body text-xs text-muted"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Currently taking on new projects · 2026
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[13vw] leading-[0.98] font-semibold tracking-tight md:text-[6.4vw]"
        >
          Creative that <span className="text-accent">performs</span>
          <br />
          not just <span className="text-outline">looks good</span> 👋
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-xl font-body text-base text-muted md:text-lg"
        >
          De Zine Studio is built for brands and marketing teams looking for a creative
          partner who takes real ownership of results — not just a studio that delivers
          beautiful work and walks away.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 font-body text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
          >
            Start your project
            <span aria-hidden>→</span>
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3.5 font-body text-sm font-medium text-paper transition-colors hover:bg-white/5"
          >
            See our work
          </a>
        </motion.div>
      </div>

      <div className="relative border-y border-line py-4">
        <div className="flex w-max animate-marquee gap-10 font-display text-sm font-medium tracking-[0.2em] text-muted">
          {[...tickerItems, ...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="flex items-center gap-10 whitespace-nowrap">
              {item}
              <span className="text-accent">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
