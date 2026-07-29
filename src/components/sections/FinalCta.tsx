"use client";

import { motion } from "framer-motion";
import { Timer, ShieldCheck, Target } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

const points = [
  { icon: Timer, label: "30 minut" },
  { icon: ShieldCheck, label: "Bez zobowiązań" },
  { icon: Target, label: "Konkretna analiza możliwości" },
];

export function FinalCta() {
  return (
    <section id="final-cta" className="relative overflow-hidden bg-dark-bg py-24 sm:py-32">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(50% 60% at 50% 100%, rgba(14,164,114,0.25), transparent 65%)",
        }}
      />
      <motion.div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background: "radial-gradient(35% 45% at 82% 15%, rgba(91,98,245,0.18), transparent 65%)",
        }}
      />

      <div className="container-page relative mx-auto max-w-3xl text-center">
        <Reveal y={18}>
          <h2 className="text-balance text-[2.25rem] font-semibold leading-[1.1] tracking-tight text-dark-text sm:text-[3.25rem]">
            Nie kupuj kolejnego systemu.
            <br />
            <span className="bg-gradient-to-r from-accent to-emerald-300 bg-clip-text text-transparent">
              Zaprojektujmy cyfrowy model Twojej firmy.
            </span>
          </h2>
        </Reveal>

        <Reveal y={16} delay={0.08}>
          <p className="text-balance mx-auto mt-6 max-w-xl text-lg leading-relaxed text-dark-text-soft">
            Podczas pierwszej rozmowy sprawdzimy, co w Twojej firmie warto uporządkować,
            zautomatyzować lub połączyć oraz jakie możliwości finansowania są obecnie dostępne.
          </p>
        </Reveal>

        <Reveal y={14} delay={0.16} className="mt-10 flex justify-center">
          <Button href="mailto:kontakt@cyfryzacja-firmy.pl" variant="primary" size="lg">
            Umów bezpłatną konsultację
          </Button>
        </Reveal>

        <Reveal delay={0.24} className="mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
          {points.map((point) => {
            const Icon = point.icon;
            return (
              <span key={point.label} className="flex items-center gap-2 text-[0.85rem] font-medium text-dark-text-soft">
                <Icon className="size-4 text-accent" strokeWidth={2} aria-hidden />
                {point.label}
              </span>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
