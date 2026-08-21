"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";

const STUDIO_EMAIL = "hello@dezine.studio";

type Fields = {
  name: string;
  email: string;
  phone: string;
  project: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const empty: Fields = { name: "", email: "", phone: "", project: "" };

function validate(values: Fields): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = "Please tell us your name";
  if (!values.email.trim()) {
    errors.email = "We need an email to reply to";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "That email doesn't look quite right";
  }
  if (!values.project.trim()) errors.project = "A sentence or two is plenty";
  return errors;
}

const fieldBase =
  "w-full rounded-2xl border border-line bg-white/[0.04] px-5 py-3.5 font-body text-sm text-paper placeholder:text-paper/35 outline-none transition-colors focus:border-accent";

const sparks = [
  { angle: -90, dist: 60, size: 7, color: "#d9ff5c" },
  { angle: -30, dist: 66, size: 5, color: "#8b7bff" },
  { angle: 30, dist: 58, size: 6, color: "#6cd4ff" },
  { angle: 90, dist: 64, size: 5, color: "#ff9d6c" },
  { angle: 150, dist: 60, size: 6, color: "#6cffb0" },
  { angle: 210, dist: 62, size: 5, color: "#ff6ca0" },
];

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [sentName, setSentName] = useState("");

  const update = (key: keyof Fields) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("request failed");

      setSentName(values.name.trim().split(/\s+/)[0]);
      setStatus("success");
      setValues(empty);
      setErrors({});
    } catch {
      setStatus("error");
    }
  };

  const reset = () => {
    setStatus("idle");
    setSentName("");
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-line py-24 md:py-32"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent2/15 blur-[140px]" />
      <div className="noise-overlay" />

      <div className="container-x relative grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
        <Reveal>
          <span className="font-body text-sm text-accent">Get in touch</span>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Tell us about
            <br />
            your project 👀
          </h2>
          <p className="mt-6 max-w-md font-body text-base leading-relaxed text-muted">
            Big or small, rough or fully mapped out — we&apos;d love to hear it.
            Fill in the form and we&apos;ll get back to you within a couple of
            working days.
          </p>

          <div className="mt-10 flex flex-col gap-3 font-body text-sm">
            <a
              href={`mailto:${STUDIO_EMAIL}`}
              className="inline-flex w-fit items-center gap-3 text-paper transition-colors hover:text-accent"
            >
              <span aria-hidden>✉️</span> {STUDIO_EMAIL}
            </a>
            <a
              href="tel:+66000000000"
              className="inline-flex w-fit items-center gap-3 text-paper transition-colors hover:text-accent"
            >
              <span aria-hidden>📞</span> 02-000-0000
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <AnimatePresence mode="wait" initial={false}>
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 18, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -18, scale: 0.97 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative overflow-hidden rounded-[2rem] border border-accent/30 bg-white/[0.03] px-8 py-14 text-center md:px-12 md:py-20"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/3 rounded-full bg-accent/20 blur-[90px]"
                />

                <div className="relative flex flex-col items-center">
                  <motion.div
                    initial={{ scale: 0, rotate: -25 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                      type: "spring",
                      bounce: 0.5,
                      duration: 0.8,
                      delay: 0.1,
                    }}
                    className="relative flex h-20 w-20 items-center justify-center rounded-full bg-accent"
                  >
                    <svg
                      viewBox="0 0 32 32"
                      className="h-9 w-9"
                      fill="none"
                      aria-hidden
                    >
                      <motion.path
                        d="M8 16.5 13.5 22 24 11"
                        stroke="#0a0a0b"
                        strokeWidth="3.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{
                          duration: 0.45,
                          delay: 0.38,
                          ease: "easeOut",
                        }}
                      />
                    </svg>

                    {sparks.map((s, i) => (
                      <motion.span
                        key={i}
                        aria-hidden
                        className="absolute rounded-full"
                        style={{
                          width: s.size,
                          height: s.size,
                          backgroundColor: s.color,
                        }}
                        initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                        animate={{
                          x: Math.cos((s.angle * Math.PI) / 180) * s.dist,
                          y: Math.sin((s.angle * Math.PI) / 180) * s.dist,
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0.4],
                        }}
                        transition={{
                          duration: 0.9,
                          delay: 0.34 + i * 0.035,
                          ease: "easeOut",
                        }}
                      />
                    ))}
                  </motion.div>

                  <motion.h3
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.5 }}
                    className="mt-8 font-display text-3xl font-semibold tracking-tight md:text-4xl"
                  >
                    Message sent!
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.58 }}
                    className="mt-4 max-w-sm font-body text-base leading-relaxed text-muted"
                  >
                    Thanks{sentName ? `, ${sentName}` : ""} — we&apos;ve got your
                    details and we&apos;ll be in touch within a couple of working
                    days.
                  </motion.p>

                  <motion.button
                    type="button"
                    onClick={reset}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.66 }}
                    className="mt-9 inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 font-body text-sm font-medium text-paper transition-colors hover:border-accent hover:text-accent"
                  >
                    Send another message
                  </motion.button>
                </div>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={onSubmit}
                noValidate
                initial={{ opacity: 0, y: 18, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -18, scale: 0.97 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-[2rem] border border-line bg-white/[0.03] p-7 md:p-10"
              >
                <div className="flex flex-col gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="font-body text-xs uppercase tracking-widest text-muted"
                    >
                      Your name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Jane Doe"
                      value={values.name}
                      onChange={update("name")}
                      aria-invalid={Boolean(errors.name)}
                      className={`mt-2 ${fieldBase} ${
                        errors.name ? "border-red-400/70" : ""
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-2 font-body text-xs text-red-400">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="email"
                        className="font-body text-xs uppercase tracking-widest text-muted"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="jane@company.com"
                        value={values.email}
                        onChange={update("email")}
                        aria-invalid={Boolean(errors.email)}
                        className={`mt-2 ${fieldBase} ${
                          errors.email ? "border-red-400/70" : ""
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-2 font-body text-xs text-red-400">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="font-body text-xs uppercase tracking-widest text-muted"
                      >
                        Phone <span className="normal-case">(optional)</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="xxx-xxx-xxxx"
                        value={values.phone}
                        onChange={update("phone")}
                        className={`mt-2 ${fieldBase}`}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="project"
                      className="font-body text-xs uppercase tracking-widest text-muted"
                    >
                      Tell us about your project
                    </label>
                    <textarea
                      id="project"
                      name="project"
                      rows={5}
                      placeholder="What are you building, and where are you stuck?"
                      value={values.project}
                      onChange={update("project")}
                      aria-invalid={Boolean(errors.project)}
                      className={`mt-2 resize-y ${fieldBase} ${
                        errors.project ? "border-red-400/70" : ""
                      }`}
                    />
                    {errors.project && (
                      <p className="mt-2 font-body text-xs text-red-400">
                        {errors.project}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 font-body text-sm font-medium text-ink transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === "sending" ? (
                      <>
                        <span
                          aria-hidden
                          className="h-4 w-4 animate-spin rounded-full border-2 border-ink/25 border-t-ink"
                        />
                        Sending…
                      </>
                    ) : (
                      <>
                        Send it over
                        <span aria-hidden>→</span>
                      </>
                    )}
                  </button>

                  <p
                    aria-live="polite"
                    className={`font-body text-xs ${
                      status === "error" ? "text-red-400" : "text-muted"
                    }`}
                  >
                    {status === "error"
                      ? "Something went wrong sending that. Mind trying again, or just email us directly?"
                      : "We'll get back to you within a couple of working days."}
                  </p>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  );
}
