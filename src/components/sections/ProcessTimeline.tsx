"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { processSteps } from "@/lib/process-data";

export function ProcessTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "end 0.4"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.4,
  });

  return (
    <section id="proces" className="bg-paper py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Jak to działa"
          title={
            <>
              Nie musisz wiedzieć, jaki system wybrać.
              <br />
              <span className="text-accent-strong">To nasze zadanie.</span>
            </>
          }
        />

        <div ref={ref} className="relative mt-16">
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-line sm:left-[23px]" aria-hidden />
          <motion.div
            className="absolute left-[19px] top-2 w-px origin-top bg-accent sm:left-[23px]"
            style={{ scaleY: progress, height: "calc(100% - 1rem)" }}
            aria-hidden
          />

          <ol className="flex flex-col gap-12 sm:gap-14">
            {processSteps.map((step, index) => (
              <Reveal as="li" key={step.number} delay={index * 0.05} y={20}>
                <div className="relative flex gap-6 pl-12 sm:gap-8 sm:pl-16">
                  <div className="absolute left-0 flex size-10 items-center justify-center rounded-full border-2 border-accent bg-paper text-[0.8rem] font-semibold text-accent-strong sm:size-12">
                    {step.number}
                  </div>
                  <div className="pt-1">
                    <h3 className="text-lg font-semibold tracking-tight text-ink sm:text-xl">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-xl text-[0.95rem] leading-relaxed text-ink-soft">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
