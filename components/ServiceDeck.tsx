"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type Service = {
  no: string;
  title: string;
  desc: string;
  detail: string;
  tint: string;
};

const services: Service[] = [
  {
    no: "01",
    title: "Brand Identity",
    desc: "Logos, visual identity, and a communication style that's unmistakably you.",
    detail:
      "We start by digging into what actually makes your business different, then build the whole kit around it — logo, colour, type, and tone of voice. You walk away with guidelines your team can genuinely follow, not a PDF that gets forgotten.",
    tint: "#d9ff5c",
  },
  {
    no: "02",
    title: "Web & UI/UX Design",
    desc: "Websites and apps that are easy to use, good looking, and built around real people.",
    detail:
      "Research, wireframes, prototypes, and polished UI — the full path from a rough idea to something your developers can build. We test with real users along the way so the decisions are grounded in evidence, not opinion.",
    tint: "#8b7bff",
  },
  {
    no: "03",
    title: "Digital Marketing",
    desc: "Content strategy and digital campaigns that help your brand grow, steadily.",
    detail:
      "We plan the channels, the calendar, and the creative, then measure what's actually moving the needle. No vanity metrics — just a steady loop of making, learning, and making it better.",
    tint: "#6cd4ff",
  },
  {
    no: "04",
    title: "Motion & Content",
    desc: "Video, motion graphics, and social content that tells your story and gets noticed.",
    detail:
      "From short-form social cuts to full brand films and animated explainers. We handle concept, storyboard, production, and post, so the whole thing stays on-brand from first frame to last.",
    tint: "#ff9d6c",
  },
  {
    no: "05",
    title: "Packaging Design",
    desc: "Packaging that stands out on the shelf and speaks to what your brand's really about.",
    detail:
      "Structure, artwork, and print-ready files, designed with the shelf in mind. We think about how it photographs, how it opens, and how it holds up next to the competition.",
    tint: "#6cffb0",
  },
  {
    no: "06",
    title: "Art Direction",
    desc: "Art direction and photography that keep every campaign feeling consistently you.",
    detail:
      "Shoot direction, casting, styling, and a visual system that holds together across every channel. One coherent look, whether it lands on a billboard or a phone screen.",
    tint: "#ff6ca0",
  },
];

const CARD_W = 250;
const CARD_H = 340;
const EXP_W = 580;
const EXP_H = 400;
const SPREAD = 178;
const DESIGN_W = 1200;
const DECK_H = 500;
const TOP = 60;
const MID = (services.length - 1) / 2;

export default function ServiceDeck() {
  const [open, setOpen] = useState(false);
  const [staggerDone, setStaggerDone] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  const [active, setActive] = useState<number | null>(null);
  const [scale, setScale] = useState(1);

  const wrapRef = useRef<HTMLDivElement>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const measure = () => {
      const w = el.clientWidth;
      if (w > 0) setScale(Math.min(1, w / DESIGN_W));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const list = timers.current;
    return () => list.forEach(clearTimeout);
  }, []);

  const fanOut = () => {
    timers.current.push(
      setTimeout(() => {
        setOpen(true);
        timers.current.push(setTimeout(() => setStaggerDone(true), 1000));
      }, 420)
    );
  };

  return (
    <div className="mt-16">
      {/* ---------- desktop: card deck that fans open ---------- */}
      <div ref={wrapRef} className="hidden md:block">
        <motion.div
          onViewportEnter={fanOut}
          viewport={{ once: true, margin: "-120px" }}
          style={{ height: DECK_H * scale }}
          className="relative"
        >
          <div
            style={{
              transform: `scale(${scale})`,
              transformOrigin: "top center",
              height: DECK_H,
            }}
            className="relative w-full"
          >
            {active !== null && (
              <button
                aria-label="Close expanded service"
                onClick={() => setActive(null)}
                className="absolute inset-0 z-40 cursor-default"
              />
            )}

            {services.map((service, i) => {
              const offset = i - MID;
              const isActive = active === i;
              const isHover = hovered === i && active === null;
              const dimmed = active !== null && !isActive;

              const target = isActive
                ? {
                    x: -EXP_W / 2,
                    y: 10,
                    rotate: 0,
                    width: EXP_W,
                    height: EXP_H,
                    opacity: 1,
                    scale: 1,
                  }
                : open
                ? {
                    x: offset * SPREAD - CARD_W / 2,
                    y: Math.abs(offset) * 16 - (isHover ? 34 : 0),
                    rotate: isHover ? offset * 2 : offset * 6.5,
                    width: CARD_W,
                    height: CARD_H,
                    opacity: dimmed ? 0.22 : 1,
                    scale: isHover ? 1.06 : dimmed ? 0.92 : 1,
                  }
                : {
                    x: -CARD_W / 2,
                    y: i * -3,
                    rotate: offset * 1.6,
                    width: CARD_W,
                    height: CARD_H,
                    opacity: 1,
                    scale: 1,
                  };

              const lifted = isActive || isHover;

              return (
                <motion.div
                  key={service.no}
                  animate={target}
                  transition={{
                    type: "spring",
                    stiffness: 240,
                    damping: 28,
                    mass: 0.9,
                    delay: staggerDone ? 0 : i * 0.06,
                  }}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: TOP,
                    zIndex: isActive ? 60 : isHover ? 45 : i + 1,
                    borderColor: lifted ? `${service.tint}55` : undefined,
                  }}
                  className="overflow-hidden rounded-[1.75rem] border border-line bg-[#111114] shadow-2xl shadow-black/60"
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 top-0 h-40 opacity-70"
                    style={{
                      background: `radial-gradient(120% 100% at 50% 0%, ${service.tint}26 0%, transparent 70%)`,
                    }}
                  />

                  <div className="relative flex h-full flex-col p-7">
                    <div className="flex items-start justify-between">
                      <span
                        className="font-display text-sm font-medium"
                        style={{ color: service.tint }}
                      >
                        {service.no}
                      </span>
                      {isActive && (
                        <button
                          onClick={() => setActive(null)}
                          aria-label="Close"
                          className="relative z-10 -mr-1 -mt-1 flex h-8 w-8 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-paper/40 hover:text-paper"
                        >
                          ✕
                        </button>
                      )}
                    </div>

                    <h3
                      className={`mt-5 font-display font-semibold tracking-tight ${
                        isActive ? "text-3xl" : "text-2xl"
                      }`}
                    >
                      {service.title}
                    </h3>

                    <p
                      className={`mt-3 font-body leading-relaxed text-muted ${
                        isActive ? "max-w-xl text-base" : "text-sm"
                      }`}
                    >
                      {service.desc}
                    </p>

                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.18, duration: 0.4 }}
                        className="mt-5 max-w-xl"
                      >
                        <p className="font-body text-sm leading-relaxed text-paper/70">
                          {service.detail}
                        </p>
                      </motion.div>
                    )}

                    <div className="mt-auto pt-6">
                      {isActive ? (
                        <a
                          href="#contact"
                          onClick={() => setActive(null)}
                          className="relative z-10 inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-body text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
                          style={{ backgroundColor: service.tint }}
                        >
                          Start a project
                          <span aria-hidden>→</span>
                        </a>
                      ) : (
                        <span
                          className="font-body text-xs transition-opacity"
                          style={{
                            color: service.tint,
                            opacity: isHover ? 1 : 0,
                          }}
                        >
                          Click to read more →
                        </span>
                      )}
                    </div>
                  </div>

                  {!isActive && (
                    <button
                      onClick={() => setActive(i)}
                      aria-label={`Expand ${service.title}`}
                      className="absolute inset-0 z-[5] cursor-pointer"
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <p className="mt-6 text-center font-body text-xs text-muted">
          Hover a card to read it · click to expand
        </p>
      </div>

      {/* ---------- mobile: tap to expand ---------- */}
      <div className="flex flex-col gap-4 md:hidden">
        {services.map((service, i) => {
          const isActive = active === i;
          return (
            <button
              key={service.no}
              onClick={() => setActive(isActive ? null : i)}
              aria-expanded={isActive}
              className="card-soft p-7 text-left"
              style={{ borderColor: isActive ? `${service.tint}55` : undefined }}
            >
              <span
                className="font-display text-sm font-medium"
                style={{ color: service.tint }}
              >
                {service.no}
              </span>
              <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight">
                {service.title}
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-muted">
                {service.desc}
              </p>
              {isActive && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.35 }}
                  className="mt-4 overflow-hidden font-body text-sm leading-relaxed text-paper/70"
                >
                  {service.detail}
                </motion.p>
              )}
              <span
                className="mt-5 inline-block font-body text-xs"
                style={{ color: service.tint }}
              >
                {isActive ? "Tap to close" : "Tap to read more →"}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
