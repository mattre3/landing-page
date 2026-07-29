const columns = [
  {
    title: "Oferta",
    links: [
      { label: "Co wdrażamy", href: "#ekosystem" },
      { label: "Proces", href: "#proces" },
      { label: "Finansowanie", href: "#finansowanie" },
      { label: "Sprawdź swoją firmę", href: "#kwalifikator" },
    ],
  },
  {
    title: "Firma",
    links: [
      { label: "Dlaczego my", href: "#problem" },
      { label: "Kontakt", href: "mailto:kontakt@cyfryzacja-firmy.pl" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-dark-bg-alt py-16">
      <div className="container-page">
        <div className="flex flex-col gap-12 border-b border-dark-line pb-12 sm:flex-row sm:justify-between">
          <div className="max-w-sm">
            <span className="flex items-center gap-2">
              <span className="flex size-8 items-center justify-center rounded-lg bg-white/10 text-white">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path
                    d="M2 8.5L6 4l3 3 5-5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12.5L6 8l3 3 5-5"
                    stroke="var(--accent)"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="text-[0.95rem] font-semibold tracking-tight text-dark-text">
                Cyfryzacja&nbsp;Firmy
              </span>
            </span>
            <p className="mt-4 text-[0.9rem] leading-relaxed text-dark-text-soft">
              Diagnozujemy procesy, projektujemy architekturę systemów, pomagamy sfinansować
              wdrożenie i dostarczamy zespół, który je realizuje.
            </p>
            <a
              href="mailto:kontakt@cyfryzacja-firmy.pl"
              className="focus-ring mt-4 inline-block text-[0.9rem] font-medium text-accent hover:underline"
            >
              kontakt@cyfryzacja-firmy.pl
            </a>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:flex sm:gap-16">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="text-[0.8rem] font-semibold uppercase tracking-wide text-dark-text-soft">
                  {col.title}
                </p>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="focus-ring text-[0.9rem] text-dark-text-soft transition-colors hover:text-dark-text"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-8 text-[0.8rem] text-dark-text-soft sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Cyfryzacja Firmy. Wszelkie prawa zastrzeżone.</p>
          <p className="max-w-xl text-dark-text-soft/70">
            Poziom finansowania, dostępność programów oraz terminy zależą od indywidualnej sytuacji
            przedsiębiorstwa i aktualnego naboru wniosków.
          </p>
        </div>
      </div>
    </footer>
  );
}
