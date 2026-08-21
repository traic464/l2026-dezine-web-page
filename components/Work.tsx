import Reveal from "./Reveal";

const projects = [
  {
    name: "Nimbus Coffee",
    tag: "Brand Identity",
    gradient: "from-[#d9ff5c] via-[#8fb84a] to-[#1a2b12]",
  },
  {
    name: "Lumen Studio",
    tag: "Web Design",
    gradient: "from-[#8b7bff] via-[#4d3fae] to-[#0d0a2b]",
  },
  {
    name: "Orbit Finance",
    tag: "UI / UX",
    gradient: "from-[#ff9d6c] via-[#c15c4a] to-[#2b1210]",
  },
  {
    name: "Verdant Market",
    tag: "Packaging",
    gradient: "from-[#6cffb0] via-[#3f9a6c] to-[#0b241a]",
  },
  {
    name: "Aura Wellness",
    tag: "Digital Marketing",
    gradient: "from-[#ff6ca0] via-[#a9457d] to-[#280b1c]",
  },
  {
    name: "Solace Hotel",
    tag: "Art Direction",
    gradient: "from-[#6cd4ff] via-[#3f7ea0] to-[#0a1c28]",
  },
];

export default function Work() {
  return (
    <section id="work" className="border-t border-line py-24 md:py-32">
      <div className="container-x">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="font-body text-sm text-accent">Selected work</span>
              <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl">
                Projects we&apos;re proud of
              </h2>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 font-body text-sm text-muted transition-colors hover:border-accent hover:text-paper"
            >
              Want something like this? Let&apos;s chat →
            </a>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <a href="#contact" className="group block">
                <div
                  className={`relative aspect-[4/5] overflow-hidden rounded-3xl bg-gradient-to-br ${p.gradient} card-glow`}
                >
                  <div className="noise-overlay" />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-black/0 to-black/0 p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="inline-flex items-center gap-2 rounded-full bg-paper px-4 py-2 font-body text-xs font-medium text-ink">
                      View project ↗
                    </span>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <h3 className="font-display text-lg font-medium tracking-tight">
                    {p.name}
                  </h3>
                  <span className="font-body text-xs text-muted">{p.tag}</span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
