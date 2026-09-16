"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";

/* ───────────────────────────────────────────────────
   DATA — add a new video by appending an object here
   ─────────────────────────────────────────────────── */
const videos = [
  {
    title: "AXE",
    category: "Motion / Branding",
    src: "https://lrpnune4ontjklea.public.blob.vercel-storage.com/work/Axe1/6s_16x9_AXE%20INDIGO_Release%20072726%20%281%29.mp4",
    poster: "https://lrpnune4ontjklea.public.blob.vercel-storage.com/work/Axe1/Screenshot%202569-09-09%20at%2022.20.45.png",
    tint: "#d9ff5c",
  },
  {
    title: "AXE",
    category: "Motion / Branding",
    src: "https://lrpnune4ontjklea.public.blob.vercel-storage.com/work/Axe2/AXE%20%E0%B8%AB%E0%B8%AD%E0%B8%A1%E0%B8%9E%E0%B8%A3%E0%B8%B5%E0%B9%80%E0%B8%A1%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%A1%E0%B9%80%E0%B8%81%E0%B8%B4%E0%B8%99%E0%B8%84%E0%B8%B2%E0%B8%94%20-%20AXE%20Thailand.MP4",
    poster: "https://lrpnune4ontjklea.public.blob.vercel-storage.com/work/Axe2/Screenshot%202569-09-09%20at%2022.22.16.png",
    tint: "#8b7bff",
  },
  {
    title: "AXE",
    category: "Motion / Branding",
    src: "https://lrpnune4ontjklea.public.blob.vercel-storage.com/work/Axe3/Axe_Cherry_spritz_Draft04.mp4",
    poster: "https://lrpnune4ontjklea.public.blob.vercel-storage.com/work/Axe3/Screenshot%202569-09-09%20at%2022.22.56.png",
    tint: "#6cd4ff",
  },
  {
    title: "Bangphra Event",
    category: "Motion / Branding",
    src: "https://lrpnune4ontjklea.public.blob.vercel-storage.com/work/Bangphra%20Event/Bangphra%20Event%20City_Timeline.mp4",
    poster: "https://lrpnune4ontjklea.public.blob.vercel-storage.com/work/Bangphra%20Event/Screenshot%202569-09-09%20at%2022.23.51.png",
    tint: "#8b7bff",
  },
  {
    title: "Clinique",
    category: "Motion / Branding",
    src: "https://lrpnune4ontjklea.public.blob.vercel-storage.com/work/Clinique/MBK%20CENTER%20_Cilinique_W1920%20x%20H1080%20PIXEL-_1.MP4",
    poster: "https://lrpnune4ontjklea.public.blob.vercel-storage.com/work/Clinique/Screenshot%202569-09-09%20at%2022.30.03.png",
    tint: "#6cd4ff",
  },
  {
    title: "Dove",
    category: "Motion / Branding",
    src: "https://lrpnune4ontjklea.public.blob.vercel-storage.com/work/Dove/15s_Hya%26Glow_Draft01.MP4",
    poster: "https://lrpnune4ontjklea.public.blob.vercel-storage.com/work/Dove/Screenshot%202569-09-09%20at%2022.33.42.png",
    tint: "#d9ff5c",
  },
  {
    title: "Knorr",
    category: "Motion / Branding",
    src: "https://lrpnune4ontjklea.public.blob.vercel-storage.com/work/Knor/10s_1080x1920_Knorr_opt02_Draft02%202.MP4",
    poster: "https://lrpnune4ontjklea.public.blob.vercel-storage.com/work/Knor/Screenshot%202569-09-09%20at%2022.28.14.png",
    tint: "#8b7bff",
  },
  {
    title: "NIVEA",
    category: "Motion / Branding",
    src: "https://lrpnune4ontjklea.public.blob.vercel-storage.com/work/Nivea/Body%20milk_06s_9x16_dao_Benefit_Release_101625.mp4",
    poster: "https://lrpnune4ontjklea.public.blob.vercel-storage.com/work/Nivea/Screenshot%202569-09-09%20at%2022.24.46.png",
    tint: "#8b7bff",
  },
  {
    title: "NIVEA",
    category: "Motion / Branding",
    src: "https://lrpnune4ontjklea.public.blob.vercel-storage.com/work/Nivea_KOL/15s_9x16_Sun%20KOL%20Korea_Natchanoa_Release%20040126.mp4",
    poster: "https://lrpnune4ontjklea.public.blob.vercel-storage.com/work/Nivea_KOL/Screenshot%202569-09-09%20at%2022.29.06.png",
    tint: "#6cd4ff",
  },
  {
    title: "NIVEA",
    category: "Motion / Branding",
    src: "https://lrpnune4ontjklea.public.blob.vercel-storage.com/work/Nivea2/Luminous%20promotion_Release_050824.mp4",
    poster: "https://lrpnune4ontjklea.public.blob.vercel-storage.com/work/Nivea2/Screenshot%202569-09-09%20at%2022.26.09.png",
    tint: "#8b7bff",
  },
  {
    title: "Rexona",
    category: "Motion / Branding",
    src: "https://lrpnune4ontjklea.public.blob.vercel-storage.com/work/Rexona/One%20Day%20with%20PP_Release%20032626.mp4",
    poster: "https://lrpnune4ontjklea.public.blob.vercel-storage.com/work/Rexona/Screenshot%202569-09-09%20at%2022.27.16.png",
    tint: "#8b7bff",
  },
  {
    title: "Rexona",
    category: "Motion / Branding",
    src: "https://lrpnune4ontjklea.public.blob.vercel-storage.com/work/Rexona2/15s_V1_9x16_Release_082624.mp4",
    poster: "https://lrpnune4ontjklea.public.blob.vercel-storage.com/work/Rexona2/Screenshot%202569-09-09%20at%2022.31.58.png",
    tint: "#8b7bff",
  },
  {
    title: "Rexona",
    category: "Motion / Branding",
    src: "https://lrpnune4ontjklea.public.blob.vercel-storage.com/work/Rexona3/15s_Motion%20billboard_Release_021226.mp4",
    poster: "https://lrpnune4ontjklea.public.blob.vercel-storage.com/work/Rexona3/Screenshot%202569-09-09%20at%2022.32.57.png",
    tint: "#8b7bff",
  },
  {
    title: "TODD",
    category: "Motion / Branding",
    src: "https://lrpnune4ontjklea.public.blob.vercel-storage.com/work/Todd/Made%20By%20TODD%201080x1920%20Hi-res_Release%20052324.MP4",
    poster: "https://lrpnune4ontjklea.public.blob.vercel-storage.com/work/Todd/Screenshot%202569-09-09%20at%2022.31.07.png",
    tint: "#8b7bff",
  },
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
