"use client";

import { X, Check } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, revealItem } from "@/components/ui/Reveal";
import { motion } from "framer-motion";

const differentiators = [
  "Nie zaczynamy od wyboru CRM.",
  "Nie jesteśmy przedstawicielem jednego producenta.",
  "Nie automatyzujemy źle zaprojektowanych procesów.",
  "Najpierw projektujemy sposób działania firmy.",
  "Dopiero później dobieramy technologię.",
  "Na końcu ją wdrażamy.",
];

const typical = ["Klient wybiera system", "Firma wdrożeniowa konfiguruje system", "Proces dopasowywany jest do programu"];

const ours = [
  "Analizujemy proces",
  "Projektujemy docelowy model",
  "Dobieramy technologię",
  "Integrujemy systemy",
  "Automatyzujemy",
  "Szkolimy zespół",
];

export function WhyUsSection() {
  return (
    <section className="bg-paper py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading eyebrow="Dlaczego my" title="Zaczynamy w innym miejscu niż większość firm." />

        <RevealGroup className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2" stagger={0.06}>
          {differentiators.map((line) => (
            <motion.div
              key={line}
              variants={revealItem}
              className="rounded-xl border border-line bg-white px-5 py-4 text-[0.95rem] font-medium leading-snug text-ink"
            >
              {line}
            </motion.div>
          ))}
        </RevealGroup>

        <div className="mt-16 grid grid-cols-1 gap-5 lg:grid-cols-2">
          <Reveal y={20}>
            <div className="h-full rounded-2xl border border-line bg-paper-alt p-8">
              <p className="eyebrow text-ink-soft">Typowe wdrożenie</p>
              <ul className="mt-5 flex flex-col gap-3.5">
                {typical.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[0.95rem] text-ink-soft">
                    <X className="mt-0.5 size-4 shrink-0 text-ink-soft/60" strokeWidth={2.25} aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal y={20} delay={0.08}>
            <div className="h-full rounded-2xl border border-accent bg-ink p-8 shadow-[0_30px_60px_-28px_rgba(14,164,114,0.4)]">
              <p className="eyebrow text-accent">Nasze podejście</p>
              <ul className="mt-5 flex flex-col gap-3.5">
                {ours.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[0.95rem] font-medium text-white">
                    <Check className="mt-0.5 size-4 shrink-0 text-accent" strokeWidth={2.5} aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
