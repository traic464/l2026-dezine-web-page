const socials = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Facebook", href: "https://facebook.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Behance", href: "https://behance.net" },
];

const sitemap = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#testimonials" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line py-16">
      <div className="container-x">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <span className="font-display text-2xl font-bold tracking-tight">
              De<span className="text-accent">.</span>Zine
            </span>
            <p className="mt-4 max-w-xs font-body text-sm leading-relaxed text-muted">
              A creative design studio helping brands and businesses build identities,
              experiences, and digital products that stand out and stick.
            </p>
          </div>

          <div>
            <h4 className="font-body text-xs uppercase tracking-widest text-muted">
              Menu
            </h4>
            <ul className="mt-5 flex flex-col gap-3 font-body text-sm">
              {sitemap.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-paper/80 transition-colors hover:text-accent">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body text-xs uppercase tracking-widest text-muted">
              Contact
            </h4>
            <ul className="mt-5 flex flex-col gap-3 font-body text-sm text-paper/80">
              <li>hello@dezine.studio</li>
              <li>02-000-0000</li>
              <li>Bangkok, Thailand</li>
            </ul>
          </div>

          <div>
            <h4 className="font-body text-xs uppercase tracking-widest text-muted">
              Social
            </h4>
            <ul className="mt-5 flex flex-col gap-3 font-body text-sm">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-paper/80 transition-colors hover:text-accent"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-line pt-8 font-body text-xs text-muted md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} De Zine Studio. All rights reserved.</span>
          <span>Made with care, in Bangkok 🇹🇭</span>
        </div>
      </div>
    </footer>
  );
}
