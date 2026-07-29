"use client";

import { Reveal, RevealGroup, revealItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Counter } from "@/components/ui/Counter";
import { motion } from "framer-motion";

type Stat = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  note: string;
};

const stats: Stat[] = [
  { value: 100, suffix: "%", label: "finansowania", note: "w wybranych programach" },
  { value: 30, prefix: "~", label: "dni do decyzji", note: "w wybranych programach" },
  { value: 1, label: "projekt", note: "od analizy do wdrożenia" },
];

export function FinancingSection() {
  return (
    <section id="finansowanie" className="relative overflow-hidden bg-ink py-24 sm:py-32">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(55% 60% at 50% 0%, rgba(14,164,114,0.28), transparent 65%)",
        }}
      />
      <div className="container-page relative">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal y={14}>
            <span className="eyebrow inline-block text-accent">Finansowanie</span>
          </Reveal>
          <Reveal y={18} delay={0.05}>
            <h2 className="text-balance mt-4 text-[2.1rem] font-semibold leading-[1.14] tracking-tight text-white sm:text-[2.75rem]">
              Nawet 100% kosztów cyfryzacji może zostać sfinansowane.
            </h2>
          </Reveal>
          <Reveal y={18} delay={0.1}>
            <p className="text-balance mt-5 text-lg leading-relaxed text-white/70">
              Zamiast odkładać cyfryzację na kolejny rok, sprawdźmy, czy możesz wykorzystać
              dostępne programy finansowania.
            </p>
          </Reveal>
        </div>

        <RevealGroup className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={revealItem}
              className="rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-8 text-center backdrop-blur-sm"
            >
              <div className="text-[2.75rem] font-semibold leading-none tracking-tight text-white">
                <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <p className="mt-3 text-[0.95rem] font-medium text-white/85">{stat.label}</p>
              <p className="mt-1 text-[0.8rem] text-white/50">{stat.note}</p>
            </motion.div>
          ))}
        </RevealGroup>

        <Reveal y={12} delay={0.15} className="mt-12 flex justify-center">
          <Button href="#kwalifikator" variant="primary" size="lg">
            Sprawdź możliwość finansowania
          </Button>
        </Reveal>

        <Reveal delay={0.2} className="mx-auto mt-8 max-w-xl text-center">
          <p className="text-[0.78rem] leading-relaxed text-white/40">
            Poziom finansowania, dostępność programu, terminy oraz warunki zależą od konkretnego
            przedsiębiorstwa, regionu oraz aktualnego naboru wniosków.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
