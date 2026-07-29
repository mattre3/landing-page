"use client";

import { motion } from "framer-motion";
import { CircleCheck, Clock3 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { EcosystemDiagram } from "./EcosystemDiagram";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-dark-bg pb-20 pt-32 sm:pb-28 sm:pt-40"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(60% 50% at 78% 18%, rgba(14,164,114,0.22), transparent 60%), radial-gradient(45% 40% at 8% 82%, rgba(91,98,245,0.16), transparent 60%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="container-page relative grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.05fr_1fr] lg:gap-8">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-dark-line bg-white/5 px-3.5 py-1.5"
          >
            <Clock3 className="size-3.5 text-accent" strokeWidth={2} aria-hidden />
            <span className="text-[0.78rem] font-medium text-dark-text-soft">
              Decyzja o finansowaniu nawet w około 30 dni
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="text-balance mt-6 text-[2.5rem] font-semibold leading-[1.08] tracking-tight text-dark-text sm:text-[3.25rem] md:text-[3.75rem]"
          >
            Sfinansujemy cyfryzację Twojej firmy{" "}
            <span className="bg-gradient-to-r from-accent to-emerald-300 bg-clip-text text-transparent">
              nawet w 100%
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="text-balance mt-6 max-w-xl text-lg leading-relaxed text-dark-text-soft"
          >
            CRM, automatyzacja sprzedaży i marketingu, rezerwacje, telefonia, integracje, ERP i AI.
            Najpierw zaprojektujemy rozwiązanie dopasowane do Twojej firmy. Następnie pomożemy je
            sfinansować i wdrożyć.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center"
          >
            <Button href="#ekosystem" variant="primary" size="lg">
              Sprawdź, co możemy wdrożyć
            </Button>
            <Button href="#final-cta" variant="dark" size="lg" icon={false}>
              Umów bezpłatną konsultację
            </Button>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.36 }}
            className="mt-10 flex flex-col gap-2.5 text-[0.9rem] text-dark-text-soft sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2"
          >
            {[
              "Analiza procesów przed doborem technologii",
              "Wsparcie w pozyskaniu finansowania",
              "Zespół, który realnie wdraża projekt",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CircleCheck className="size-4 shrink-0 text-accent" strokeWidth={2} aria-hidden />
                {item}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <EcosystemDiagram />
        </motion.div>
      </div>
    </section>
  );
}
