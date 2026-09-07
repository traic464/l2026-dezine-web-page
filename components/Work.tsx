"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";

/* ───────────────────────────────────────────────────
   DATA — add a new video by appending an object here
   ─────────────────────────────────────────────────── */
const videos = [
  {
    title: "Café Velvet — brand film",
    category: "Motion / Branding",
    src: "https://px9x0uk0rfztevly.public.blob.vercel-storage.com/work-vdo/AXE_INDIGO_Release%20072726.mp4",
    poster: "https://px9x0uk0rfztevly.public.blob.vercel-storage.com/work-poster/poster_AXE_INDIGO_Release%20072726.png",
    tint: "#d9ff5c",
  },
  {
    title: "NightOwl — app promo",
    category: "UI Motion",
    src: "https://px9x0uk0rfztevly.public.blob.vercel-storage.com/work-vdo/Knorr_opt02_Draft02%202.MP4",
    poster: "https://px9x0uk0rfztevly.public.blob.vercel-storage.com/work-poster/poster_knorr.png",
    tint: "#8b7bff",
  },
  {
    title: "Siam Craft — rebrand reveal",
    category: "Brand Identity",
    src: "https://px9x0uk0rfztevly.public.blob.vercel-storage.com/work-vdo/MBK%20CENTER%20_Cilinique_W1920%20x%20H1080%20PIXEL-_1.MP4",
    poster: "https://px9x0uk0rfztevly.public.blob.vercel-storage.com/work-poster/MBK%20CENTER%20_Cilinique_W1920%20x%20H1080%20PIXEL-_1.png",
    tint: "#6cd4ff",
  },
  {
    title: "Siam Craft — rebrand reveal",
    category: "Brand Identity",
    src: "https://px9x0uk0rfztevly.public.blob.vercel-storage.com/work-vdo/AXE_Kenobi_Release_072026.mp4",
    poster: "https://px9x0uk0rfztevly.public.blob.vercel-storage.com/work-poster/poster_AXE_Kenobi_Release_072026.png",
    tint: "#6cd4ff",
  },
    {
    title: "Café Velvet — brand film",
    category: "Motion / Branding",
    src: "https://px9x0uk0rfztevly.public.blob.vercel-storage.com/work-vdo/NM_Deep_Darkwood%20V2_Release_053124.MP4",
    poster: "https://px9x0uk0rfztevly.public.blob.vercel-storage.com/work-poster/NM_Deep_Darkwood%20V2_Release_053124.png",
    tint: "#d9ff5c",
  },
  {
    title: "NightOwl — app promo",
    category: "UI Motion",
    src: "https://px9x0uk0rfztevly.public.blob.vercel-storage.com/work-vdo/NM%20DEO%20Deep_Relaese_081621.mp4",
    poster: "https://px9x0uk0rfztevly.public.blob.vercel-storage.com/work-poster/NM%20DEO%20Deep_Relaese_081621.png",
    tint: "#8b7bff",
  },
  {
    title: "NightOwl — app promo",
    category: "UI Motion",
    src: "https://px9x0uk0rfztevly.public.blob.vercel-storage.com/work-vdo/Bangphra%20Event%20City_Timeline.mp4",
    poster: "https://px9x0uk0rfztevly.public.blob.vercel-storage.com/work-poster/Bangphra%20Event%20City_Timeline.png",
    tint: "#8b7bff",
  }
];

export default function Work() {
  const [active, setActive] = useState(0);
  const [muted, setMuted] = useState(true);
  const heroRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const reelRef = useRef<HTMLDivElement>(null);
  const current = videos[active];

  const select = useCallback(
    (i: number) => {
      if (i === active) return;
      setActive(i);
      setMuted(true);
    },
    [active],
  );

  useEffect(() => {
    const video = heroRef.current;
    if (!video) return;
    video.load();
    video.play().catch(() => {});
  }, [active]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const video = heroRef.current;
        if (!video) return;
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const toggleMute = () => {
    const video = heroRef.current;
    if (!video) return;
    const next = !muted;
    video.muted = next;
    setMuted(next);
  };

  const scrollReel = (dir: "left" | "right") => {
    reelRef.current?.scrollBy({
      left: dir === "left" ? -232 : 232,
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={sectionRef}
      id="work"
      className="overflow-hidden border-t border-line py-24 md:py-32"
    >
      <div className="container-x">
        {/* header */}
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="font-body text-sm text-accent">
                Selected work
              </span>
              <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl">
                Projects we&apos;re proud of
              </h2>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 font-body text-sm text-muted transition-colors hover:border-accent hover:text-paper"
            >
              Ready to turn your brand story into content that stops the scroll? →
            </a>
          </div>
        </Reveal>

        {/* hero video */}
        <Reveal delay={0.1}>
          <div className="relative mt-14 overflow-hidden rounded-[1.75rem] border border-line bg-ink">
            <div className="relative aspect-video w-full">
              {/* blurred backdrop — fills empty space for portrait videos */}
              {current.poster && (
                <div
                  className="absolute inset-0 scale-110 bg-cover bg-center blur-2xl brightness-[0.35]"
                  style={{ backgroundImage: `url(${current.poster})` }}
                />
              )}

              {/* persistent video element — object-contain keeps full frame visible */}
              <video
                ref={heroRef}
                src={current.src}
                poster={current.poster || undefined}
                muted={muted}
                loop
                playsInline
                className="absolute inset-0 z-[1] h-full w-full object-contain"
              />

              {/* gradient overlay at bottom for text readability */}
              <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-ink/70 via-transparent to-transparent" />

              {/* mute/unmute button */}
              <button
                type="button"
                onClick={toggleMute}
                className="group absolute left-4 top-4 z-[10] flex h-10 w-10 items-center justify-center rounded-full border border-paper/15 bg-ink/60 backdrop-blur-sm transition-colors hover:border-accent hover:bg-ink/80 md:left-6 md:top-6"
                aria-label={muted ? "Unmute" : "Mute"}
              >
                {muted ? (
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 text-paper/70 transition-colors group-hover:text-accent"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M11 5L6 9H2v6h4l5 4V5z" />
                    <line x1="23" y1="9" x2="17" y2="15" />
                    <line x1="17" y1="9" x2="23" y2="15" />
                  </svg>
                ) : (
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 text-accent"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M11 5L6 9H2v6h4l5 4V5z" />
                    <path d="M19.07 4.93a10 10 0 010 14.14" />
                    <path d="M15.54 8.46a5 5 0 010 7.07" />
                  </svg>
                )}
              </button>

              {/* info overlay with animated text */}
              <div className="absolute bottom-0 left-0 right-0 z-[3] p-6 md:p-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <span
                      className="font-body text-xs uppercase tracking-widest"
                      style={{ color: current.tint }}
                    >
                      {current.category}
                    </span>
                    <h3 className="mt-2 font-display text-xl font-semibold tracking-tight md:text-3xl">
                      {current.title}
                    </h3>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </Reveal>

        {/* filmstrip reel */}
        <Reveal delay={0.2}>
          <div className="relative mt-6 overflow-hidden">
            {/* scroll arrows */}
            {videos.length > 3 && (
              <>
                <button
                  type="button"
                  onClick={() => scrollReel("left")}
                  className="absolute -left-3 top-1/2 z-20 hidden -translate-y-1/2 items-center justify-center rounded-full border border-line bg-ink/80 p-2 text-paper/60 backdrop-blur-sm transition-colors hover:border-accent hover:text-accent md:flex"
                  aria-label="Scroll left"
                >
                  <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none">
                    <path
                      d="M12 4l-6 6 6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() => scrollReel("right")}
                  className="absolute -right-3 top-1/2 z-20 hidden -translate-y-1/2 items-center justify-center rounded-full border border-line bg-ink/80 p-2 text-paper/60 backdrop-blur-sm transition-colors hover:border-accent hover:text-accent md:flex"
                  aria-label="Scroll right"
                >
                  <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none">
                    <path
                      d="M8 4l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </>
            )}

            {/* scrollable strip */}
            <div
              ref={reelRef}
              className="scrollbar-hide flex w-full snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-1 py-1"
            >
              {videos.map((v, i) => {
                const isActive = i === active;
                return (
                  <button
                    key={v.src}
                    type="button"
                    onClick={() => select(i)}
                    className={`group relative flex-shrink-0 snap-start overflow-hidden rounded-2xl border-2 transition-all duration-300 ${
                      isActive
                        ? "border-accent"
                        : "border-transparent opacity-60 hover:opacity-90"
                    }`}
                    style={{ width: 216 }}
                    aria-label={`Select ${v.title}`}
                    aria-pressed={isActive}
                  >
                    <div className="relative aspect-video w-full overflow-hidden bg-ink">
                      {/* blurred poster backdrop for portrait thumbs */}
                      {v.poster && (
                        <div
                          className="absolute inset-0 scale-110 bg-cover bg-center blur-xl brightness-[0.3]"
                          style={{ backgroundImage: `url(${v.poster})` }}
                        />
                      )}
                      {/* thumbnail poster image */}
                      <img
                        src={v.poster || undefined}
                        alt={v.title}
                        className="absolute inset-0 z-[1] h-full w-full object-contain"
                      />
                      <div className="absolute inset-0 z-[2] bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />

                      {/* mini play icon */}
                      <div
                        className={`absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full transition-opacity ${
                          isActive
                            ? "opacity-0"
                            : "opacity-80 group-hover:opacity-100"
                        }`}
                        style={{
                          background: "rgba(255,255,255,0.15)",
                          backdropFilter: "blur(4px)",
                        }}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          className="ml-0.5 h-3.5 w-3.5"
                          fill="none"
                        >
                          <polygon points="8,5 20,12 8,19" fill="#fff" />
                        </svg>
                      </div>

                      {/* info */}
                      <div className="absolute bottom-2.5 left-3 right-3 text-left">
                        <p className="truncate font-body text-xs font-medium text-paper">
                          {v.title}
                        </p>
                        <p
                          className="mt-0.5 font-body text-[10px] uppercase tracking-wider"
                          style={{ color: v.tint }}
                        >
                          {v.category}
                        </p>
                      </div>

                    </div>
                  </button>
                );
              })}
            </div>

            {/* dots indicator */}
            <div className="mt-5 flex items-center justify-center gap-1.5">
              {videos.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => select(i)}
                  aria-label={`Go to video ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === active
                      ? "w-5 bg-accent"
                      : "w-1.5 bg-paper/15 hover:bg-paper/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
