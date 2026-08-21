import Reveal from "./Reveal";

const testimonials = [
  {
    quote:
      "De Zine helped our brand feel so much more professional. The team really got our business, and delivered exactly what we hoped for, every single time.",
    name: "Paweena Srisuk",
    role: "Founder, Nimbus Coffee",
    initials: "PS",
  },
  {
    quote:
      "The process was structured, clear, and the team actually listened. What we got back exceeded expectations — both the new website and the sales bump that followed.",
    name: "Thanakorn Wiriya",
    role: "CEO, Orbit Finance",
    initials: "TW",
  },
  {
    quote:
      "Impressed from the very first idea all the way through to launch. Genuinely creative thinking, and so much care for the small details.",
    name: "Manatsawee Charoenporn",
    role: "Marketing Lead, Aura Wellness",
    initials: "MJ",
  },
  {
    quote:
      "De Zine doesn't just make things look good — they help you think through brand strategy too. A partner we can genuinely trust.",
    name: "Attapon Kongkiat",
    role: "Owner, Solace Hotel",
    initials: "AK",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="border-t border-line py-24 md:py-32">
      <div className="container-x">
        <Reveal>
          <span className="font-body text-sm text-accent">Kind words</span>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl">
            What our clients say
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <div className="card-soft flex h-full flex-col justify-between p-8 md:p-10">
                <p className="font-display text-xl leading-snug tracking-tight md:text-2xl">
                  “{t.quote}”
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent2/20 font-display text-sm font-semibold text-accent2">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-body text-sm font-medium text-paper">
                      {t.name}
                    </div>
                    <div className="font-body text-xs text-muted">{t.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
