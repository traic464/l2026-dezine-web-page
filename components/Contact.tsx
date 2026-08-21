"use client";

import { useState } from "react";
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

export default function Contact() {
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const update = (key: keyof Fields) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    const body = [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      values.phone ? `Phone: ${values.phone}` : null,
      "",
      "About the project:",
      values.project,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${STUDIO_EMAIL}?subject=${encodeURIComponent(
      `New project enquiry from ${values.name}`
    )}&body=${encodeURIComponent(body)}`;

    setSent(true);
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
          <form
            onSubmit={onSubmit}
            noValidate
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
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 font-body text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
              >
                Send it over
                <span aria-hidden>→</span>
              </button>

              <p aria-live="polite" className="font-body text-xs text-muted">
                {sent
                  ? "Opening your email app with everything filled in — just hit send 💌"
                  : "This opens your email app with the details ready to go."}
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
