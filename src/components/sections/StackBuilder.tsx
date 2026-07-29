"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { stackCategories } from "@/lib/stack-data";
import { cx } from "@/lib/utils";

export function StackBuilder() {
  const [activeId, setActiveId] = useState(stackCategories[0].id);
  const active = stackCategories.find((c) => c.id === activeId)!;
  const ActiveIcon = active.icon;

  return (
    <section id="ekosystem" className="bg-paper-alt py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Co możemy sfinansować i wdrożyć"
          title="Zbudujmy cyfrowy ekosystem Twojej firmy"
          description="Wybierz obszar, żeby zobaczyć, co realnie się w nim zmienia. Nie zaczynamy od marki systemu — zaczynamy od Twoich procesów."
        />

        <Reveal y={20} delay={0.1} className="mt-12">
          <div className="flex flex-wrap gap-2.5">
            {stackCategories.map((cat) => {
              const Icon = cat.icon;
              const isActive = cat.id === activeId;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveId(cat.id)}
                  aria-pressed={isActive}
                  className={cx(
                    "focus-ring inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-[0.85rem] font-medium transition-all",
                    isActive
                      ? "border-ink bg-ink text-white shadow-sm"
                      : "border-line bg-white text-ink-soft hover:border-line-strong hover:text-ink",
                  )}
                >
                  <Icon className="size-3.5" strokeWidth={2} aria-hidden />
                  {cat.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-8 min-h-[340px] rounded-3xl border border-line bg-white p-8 sm:p-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-start gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-accent-soft text-accent-strong">
                  <ActiveIcon className="size-5.5" strokeWidth={1.9} aria-hidden />
                </span>
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                    {active.label}
                  </h3>
                  <p className="mt-1.5 text-[0.95rem] leading-relaxed text-ink-soft">
                    {active.summary}
                  </p>
                </div>
              </div>

              <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-3.5 sm:grid-cols-2">
                {active.capabilities.map((cap) => (
                  <li key={cap} className="flex items-start gap-2.5">
                    <Check className="mt-1 size-4 shrink-0 text-accent" strokeWidth={2.5} aria-hidden />
                    <span className="text-[0.95rem] leading-snug text-ink">{cap}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
