"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { problems } from "@/lib/problems-data";
import { cx } from "@/lib/utils";

export function ProblemSection() {
  const [openId, setOpenId] = useState<string | null>(problems[0].id);

  return (
    <section id="problem" className="bg-paper py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Problem"
          title="Twoja firma nie potrzebuje kolejnego programu."
          description="Potrzebuje systemu, w którym wszystko zaczyna ze sobą współpracować. Kliknij, aby zobaczyć przykładowe rozwiązanie."
        />

        <div className="mt-14 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
          {problems.map((item, index) => {
            const isOpen = openId === item.id;
            return (
              <Reveal key={item.id} delay={Math.min(index * 0.04, 0.24)} y={16}>
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  aria-expanded={isOpen}
                  className={cx(
                    "focus-ring w-full rounded-2xl border px-6 py-5 text-left transition-colors",
                    isOpen
                      ? "border-ink bg-ink"
                      : "border-line bg-white hover:border-line-strong",
                  )}
                >
                  <div className="flex items-start justify-between gap-4">
                    <span
                      className={cx(
                        "text-[1.05rem] font-medium leading-snug",
                        isOpen ? "text-white" : "text-ink",
                      )}
                    >
                      {item.problem}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className={cx(
                        "mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full border",
                        isOpen ? "border-white/30 text-white" : "border-line-strong text-ink-soft",
                      )}
                    >
                      <Plus className="size-3.5" strokeWidth={2.25} aria-hidden />
                    </motion.span>
                  </div>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 flex items-start gap-2.5 border-t border-white/15 pt-4">
                          <ArrowRight
                            className="mt-0.5 size-4 shrink-0 text-accent"
                            strokeWidth={2.25}
                            aria-hidden
                          />
                          <p className="text-[0.92rem] leading-relaxed text-white/80">
                            {item.solution}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
