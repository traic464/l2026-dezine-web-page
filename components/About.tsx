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
            Good design should look great and actually work
          </h2>
          <p className="mt-6 max-w-lg font-body text-base leading-relaxed text-muted">
            We&apos;re a team of designers, strategists, and storytellers who believe
            great design isn&apos;t just about looking good — it&apos;s about solving real
            problems and creating results businesses can actually feel. Over the years
            we&apos;ve partnered with brands from scrappy startups to household names,
            helping them build identities that grow right alongside them.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 font-body text-sm font-medium text-paper underline decoration-accent decoration-2 underline-offset-4"
          >
            Get to know the team →
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
