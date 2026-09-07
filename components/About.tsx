import Reveal from "./Reveal";

const stats = [
  { value: "8+", label: "Years in business" },
  { value: "120+", label: "Projects delivered" },
  { value: "60+", label: "Clients who trust us" },
  { value: "15+", label: "Designers on the team" },
];

export default function About() {
  return (
    <section id="about" className="border-t border-line py-24 md:py-32">
      <div className="container-x grid grid-cols-1 gap-16 lg:grid-cols-[1fr_0.9fr]">
        <Reveal>
          <span className="font-body text-sm text-accent">About De Zine</span>
          <h2 className="mt-3 max-w-xl font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            A creative partner who stays after launch day
          </h2>
          <p className="mt-6 max-w-lg font-body text-base leading-relaxed text-muted">
            De Zine Studio is built for brands and marketing teams looking for a creative
            partner who takes real ownership of results — not just a studio that delivers
            beautiful work and walks away. Whether you&apos;re a growing brand, a business
            that needs measurable campaigns, or an organization looking for one partner to
            handle both creativity and performance, we&apos;re built for you.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 font-body text-sm font-medium text-paper underline decoration-accent decoration-2 underline-offset-4"
          >
            Start your project →
          </a>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="card-soft p-8">
                <div className="font-display text-4xl font-semibold tracking-tight text-accent md:text-5xl">
                  {s.value}
                </div>
                <div className="mt-3 font-body text-sm text-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
