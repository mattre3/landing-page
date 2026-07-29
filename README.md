# Cyfryzacja Firmy — landing page

Premium, sprzedażowy landing page dla firmy doradczo-wdrożeniowej zajmującej się cyfryzacją
przedsiębiorstw. Komunikuje model: **diagnoza firmy → architektura rozwiązania → finansowanie →
wdrożenie**.

## Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/) — mikroanimacje, scroll reveal, interakcje
- [lucide-react](https://lucide.dev) — spójny zestaw ikon

## Struktura

- `src/app` — layout, globalne style i strona główna
- `src/components/sections` — sekcje landing page (Hero, Problem, Stack Builder, Proces,
  Finansowanie, Chaos → Ekosystem, Zespół, Kwalifikator, Dlaczego my, Final CTA, header, footer)
- `src/components/ui` — współdzielone prymitywy UI (Button, Reveal, SectionHeading, Counter)
- `src/lib` — dane treściowe sekcji (moduły ekosystemu, problemy, stack, proces, quiz)

## Uruchomienie

```bash
npm install
npm run dev
```

Otwórz [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```
