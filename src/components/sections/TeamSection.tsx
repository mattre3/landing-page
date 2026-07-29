"use client";

import { Compass, Blocks, Hammer } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, revealItem } from "@/components/ui/Reveal";
import { motion } from "framer-motion";

const pillars = [
  {
    icon: Compass,
    title: "Doradca biznesowy",
    description: "Projektuje proces i architekturę — patrzy na firmę zanim padnie nazwa systemu.",
  },
  {
    icon: Blocks,
    title: "Architekt technologiczny",
    description: "Dobiera systemy i integracje, które rzeczywiście do siebie pasują.",
  },
  {
    icon: Hammer,
    title: "Wdrożeniowcy",
    description: "Konfigurują, integrują, automatyzują i szkolą zespół, aż wszystko zacznie działać.",
  },
];

export function TeamSection() {
  return (
    <section className="bg-paper py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Wdrożeniowcy"
          title="Strategia to dopiero początek."
          description="Do projektu dobieramy specjalistów, którzy od ponad 10 lat pracują przy wdrożeniach technologii dla firm."
        />

        <RevealGroup className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                variants={revealItem}
                className="group rounded-2xl border border-line bg-white p-7 transition-shadow hover:shadow-[0_20px_45px_-24px_rgba(11,13,18,0.25)]"
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-accent-soft text-accent-strong transition-transform group-hover:scale-105">
                  <Icon className="size-5" strokeWidth={1.9} aria-hidden />
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-ink">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-[0.92rem] leading-relaxed text-ink-soft">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </RevealGroup>

        <Reveal delay={0.15} className="mx-auto mt-14 max-w-2xl rounded-2xl border border-line-strong bg-paper-alt px-8 py-7 text-center">
          <p className="text-[1.05rem] font-medium leading-relaxed text-ink">
            Nie zostawiamy klienta z raportem i listą rekomendacji.
            <br />
            Dostarczamy również ludzi, którzy potrafią to wdrożyć.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
