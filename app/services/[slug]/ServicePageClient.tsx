"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { ServiceDetail } from "@/lib/services-data";

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function ServicePageClient({
  service,
}: {
  service: ServiceDetail;
}) {
  return (
    <main className="min-h-screen bg-ink text-paper">
      {/* navbar */}
      <header className="fixed inset-x-0 top-0 z-50 bg-ink/80 backdrop-blur-md border-b border-line">
        <nav className="container-x flex h-[76px] items-center justify-between">
          <Link
            href="/#services"
            className="font-display text-xl font-bold tracking-tight"
          >
            De<span className="text-accent">.</span>Zine
          </Link>
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 font-body text-sm text-muted transition-colors hover:border-accent hover:text-paper"
          >
            <svg
              viewBox="0 0 20 20"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 4l-6 6 6 6" />
            </svg>
            All Services
          </Link>
        </nav>
      </header>

      {/* hero */}
      <section className="relative overflow-hidden pt-[76px]">
        <div
          className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full blur-[140px]"
          style={{ backgroundColor: `${service.tint}20` }}
        />
        <div className="noise-overlay" />

        <div className="container-x relative pb-16 pt-20 md:pb-24 md:pt-28">
          <motion.div
            initial="hidden"
            animate="show"
            custom={0}
            variants={fade}
          >
            <span
              className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 font-body text-xs"
              style={{
                borderColor: `${service.tint}40`,
                color: service.tint,
              }}
            >
              Service {service.no}
            </span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="show"
            custom={1}
            variants={fade}
            className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight md:text-6xl"
          >
            {service.h1}
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            custom={2}
            variants={fade}
            className="mt-6 max-w-2xl font-body text-base leading-relaxed text-muted md:text-lg"
          >
            {service.intro}
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            custom={3}
            variants={fade}
            className="mt-10"
          >
            <a
              href="#contact-cta"
              className="inline-flex items-center gap-2 rounded-full px-7 py-4 font-body text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: service.tint }}
            >
              Get a quote
              <span aria-hidden>→</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* what we offer */}
      <section className="border-t border-line py-20 md:py-28">
        <div className="container-x">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            custom={0}
            variants={fade}
          >
            <span className="font-body text-sm" style={{ color: service.tint }}>
              What We Offer
            </span>
            <p className="mt-3 max-w-2xl font-body text-base leading-relaxed text-muted md:text-lg">
              {service.whatWeOffer.heading}
            </p>
          </motion.div>

          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {service.whatWeOffer.items.map((item, i) => (
              <motion.div
                key={item.name}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                custom={i}
                variants={fade}
                className="group rounded-[1.75rem] border border-line bg-white/[0.02] p-8 transition-colors hover:border-opacity-50"
                style={
                  {
                    "--hover-border": `${service.tint}55`,
                  } as React.CSSProperties
                }
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = `${service.tint}55`)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = "")
                }
              >
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl font-display text-sm font-bold"
                  style={{
                    backgroundColor: `${service.tint}18`,
                    color: service.tint,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold tracking-tight">
                  {item.name}
                </h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-muted">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* benefits */}
      <section className="border-t border-line py-20 md:py-28">
        <div className="container-x">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            custom={0}
            variants={fade}
          >
            <span className="font-body text-sm" style={{ color: service.tint }}>
              {service.benefits.heading}
            </span>
          </motion.div>

          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
            {service.benefits.items.map((item, i) => (
              <motion.div
                key={item.name}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                custom={i}
                variants={fade}
                className="flex gap-5"
              >
                <div
                  className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full"
                  style={{
                    backgroundColor: `${service.tint}18`,
                    color: service.tint,
                  }}
                >
                  <svg
                    viewBox="0 0 20 20"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 10l3.5 3.5L15 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-display text-lg font-semibold tracking-tight">
                    {item.name}
                  </h4>
                  <p className="mt-2 font-body text-sm leading-relaxed text-muted">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* who this is for */}
      <section className="border-t border-line py-20 md:py-28">
        <div className="container-x">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            custom={0}
            variants={fade}
          >
            <span className="font-body text-sm" style={{ color: service.tint }}>
              Who This Is For
            </span>
            <p className="mt-4 max-w-3xl font-display text-2xl font-semibold leading-snug tracking-tight md:text-3xl">
              {service.whoFor}
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact-cta"
        className="relative overflow-hidden border-t border-line py-20 md:py-28"
      >
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px]"
          style={{ backgroundColor: `${service.tint}12` }}
        />
        <div className="noise-overlay" />

        <div className="container-x relative text-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            custom={0}
            variants={fade}
          >
            <span className="font-body text-sm" style={{ color: service.tint }}>
              Get Started
            </span>
            <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              {service.cta}
            </h2>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full px-7 py-4 font-body text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
                style={{ backgroundColor: service.tint }}
              >
                Contact us
                <span aria-hidden>→</span>
              </Link>
              <Link
                href="/#services"
                className="inline-flex items-center gap-2 rounded-full border border-line px-7 py-4 font-body text-sm font-medium text-paper transition-colors hover:bg-white/5"
              >
                View all services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* footer */}
      <footer className="border-t border-line py-10">
        <div className="container-x flex flex-col items-center justify-between gap-4 font-body text-xs text-muted md:flex-row">
          <span>
            © {new Date().getFullYear()} De Zine Studio. All rights reserved.
          </span>
          <Link
            href="/#top"
            className="transition-colors hover:text-accent"
          >
            Back to home
          </Link>
        </div>
      </footer>
    </main>
  );
}
