"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ClipboardCheck, RotateCcw } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { quizQuestions } from "@/lib/quiz-data";
import { cx } from "@/lib/utils";

export function QualifierQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const totalSteps = quizQuestions.length;
  const isDone = step >= totalSteps;

  const areas = useMemo(() => {
    const collected = new Set<string>();
    quizQuestions.forEach((q) => {
      const chosen = answers[q.id];
      const option = q.options.find((o) => o.label === chosen);
      option?.areas?.forEach((a) => collected.add(a));
    });
    if (collected.size === 0) {
      collected.add("Uporządkowanie procesów sprzedaży i obsługi klienta");
      collected.add("Automatyzacja pracy administracyjnej");
    }
    return Array.from(collected);
  }, [answers]);

  function selectAnswer(questionId: string, label: string) {
    setAnswers((prev) => ({ ...prev, [questionId]: label }));
    setTimeout(() => setStep((s) => s + 1), 220);
  }

  function reset() {
    setAnswers({});
    setStep(0);
  }

  const progressPct = Math.min((step / totalSteps) * 100, 100);
  const currentQuestion = quizQuestions[step];

  return (
    <section id="kwalifikator" className="bg-paper-alt py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          align="center"
          eyebrow="Sprawdź swoją firmę"
          title="Sprawdź, co warto zdigitalizować w Twojej firmie"
          description="Cztery krótkie pytania. Bez rejestracji, bez zobowiązań."
          className="mx-auto"
        />

        <Reveal delay={0.1} className="mx-auto mt-12 max-w-xl">
          <div className="rounded-3xl border border-line bg-white p-7 shadow-[0_30px_60px_-30px_rgba(11,13,18,0.18)] sm:p-9">
            <div className="mb-8 h-1.5 w-full overflow-hidden rounded-full bg-paper-alt">
              <motion.div
                className="h-full rounded-full bg-accent"
                initial={false}
                animate={{ width: `${progressPct}%` }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>

            <AnimatePresence mode="wait">
              {!isDone ? (
                <motion.div
                  key={currentQuestion.id}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                >
                  <p className="eyebrow text-accent-strong">
                    Pytanie {step + 1} z {totalSteps}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                    {currentQuestion.question}
                  </h3>

                  <div className="mt-6 flex flex-col gap-2.5">
                    {currentQuestion.options.map((option) => {
                      const isSelected = answers[currentQuestion.id] === option.label;
                      return (
                        <button
                          key={option.label}
                          type="button"
                          onClick={() => selectAnswer(currentQuestion.id, option.label)}
                          className={cx(
                            "focus-ring w-full rounded-xl border px-5 py-3.5 text-left text-[0.95rem] font-medium transition-colors",
                            isSelected
                              ? "border-accent bg-accent-soft text-accent-strong"
                              : "border-line text-ink hover:border-line-strong hover:bg-paper-alt",
                          )}
                        >
                          {option.label}
                        </button>
                      );
                    })}
                  </div>

                  {step > 0 && (
                    <button
                      type="button"
                      onClick={() => setStep((s) => s - 1)}
                      className="focus-ring mt-6 inline-flex items-center gap-1.5 text-[0.85rem] font-medium text-ink-soft hover:text-ink"
                    >
                      <ArrowLeft className="size-3.5" strokeWidth={2} aria-hidden />
                      Wstecz
                    </button>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="flex size-11 items-center justify-center rounded-xl bg-accent-soft text-accent-strong">
                    <ClipboardCheck className="size-5" strokeWidth={1.9} aria-hidden />
                  </span>
                  <h3 className="mt-4 text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                    Na podstawie odpowiedzi widzimy kilka obszarów, które warto przeanalizować.
                  </h3>

                  <ul className="mt-5 flex flex-col gap-2.5">
                    {areas.map((area) => (
                      <li
                        key={area}
                        className="rounded-xl border border-line bg-paper-alt px-4 py-3 text-[0.9rem] font-medium text-ink"
                      >
                        {area}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <Button href="#final-cta" variant="primary" size="md">
                      Umów analizę firmy
                    </Button>
                    <button
                      type="button"
                      onClick={reset}
                      className="focus-ring inline-flex items-center justify-center gap-1.5 text-[0.85rem] font-medium text-ink-soft hover:text-ink"
                    >
                      <RotateCcw className="size-3.5" strokeWidth={2} aria-hidden />
                      Zacznij od nowa
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
