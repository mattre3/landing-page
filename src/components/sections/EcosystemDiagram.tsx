"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2 } from "lucide-react";
import { ecosystemModules } from "@/lib/ecosystem-data";
import { cx } from "@/lib/utils";

const RADIUS = 42;

function nodePosition(index: number, count: number) {
  const angle = (index / count) * Math.PI * 2 - Math.PI / 2;
  const x = Number((50 + RADIUS * Math.cos(angle)).toFixed(3));
  const y = Number((50 + RADIUS * Math.sin(angle)).toFixed(3));
  return { x, y };
}

export function EcosystemDiagram() {
  const [active, setActive] = useState<string | null>(null);
  const count = ecosystemModules.length;

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[560px] select-none">
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full overflow-visible"
        aria-hidden
      >
        {ecosystemModules.map((mod, i) => {
          const { x, y } = nodePosition(i, count);
          const isActive = active === mod.id;
          return (
            <line
              key={mod.id}
              x1={50}
              y1={50}
              x2={x}
              y2={y}
              stroke={isActive ? "var(--accent)" : "var(--line-strong)"}
              strokeWidth={isActive ? 0.5 : 0.35}
              strokeDasharray="1.4 2.2"
              className={isActive ? "animate-dash" : ""}
              opacity={isActive ? 0.9 : 0.55}
            />
          );
        })}
      </svg>

      <motion.div
        className="absolute left-1/2 top-1/2 z-10 flex w-[132px] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 rounded-2xl border border-line-strong bg-white/95 px-4 py-5 text-center shadow-[0_20px_50px_-20px_rgba(11,13,18,0.35)] backdrop-blur"
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="flex size-9 items-center justify-center rounded-full bg-accent-soft text-accent-strong">
          <Building2 className="size-4.5" strokeWidth={2} aria-hidden />
        </span>
        <span className="text-[0.72rem] font-semibold uppercase tracking-wide text-ink">
          Twoja firma
        </span>
      </motion.div>

      {ecosystemModules.map((mod, i) => {
        const { x, y } = nodePosition(i, count);
        const Icon = mod.icon;
        const isActive = active === mod.id;
        return (
          <div
            key={mod.id}
            className="absolute z-20"
            style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
          >
            <button
              type="button"
              className={cx(
                "focus-ring group relative flex size-11 items-center justify-center rounded-full border bg-white shadow-sm transition-all sm:size-13",
                isActive
                  ? "border-accent text-accent-strong shadow-[0_0_0_4px_var(--accent-soft)]"
                  : "border-line-strong text-ink-soft hover:border-ink hover:text-ink",
              )}
              onMouseEnter={() => setActive(mod.id)}
              onMouseLeave={() => setActive((cur) => (cur === mod.id ? null : cur))}
              onFocus={() => setActive(mod.id)}
              onBlur={() => setActive((cur) => (cur === mod.id ? null : cur))}
              onClick={() => setActive((cur) => (cur === mod.id ? null : mod.id))}
              aria-describedby={`tooltip-${mod.id}`}
            >
              <Icon className="size-4.5 sm:size-5" strokeWidth={1.9} aria-hidden />
            </button>

            <AnimatePresence>
              {isActive && (
                <motion.div
                  id={`tooltip-${mod.id}`}
                  role="tooltip"
                  initial={{ opacity: 0, y: 6, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.96 }}
                  transition={{ duration: 0.15 }}
                  className="pointer-events-none absolute left-1/2 top-full z-30 mt-3 w-52 -translate-x-1/2 rounded-xl border border-line bg-ink px-3.5 py-3 text-left shadow-xl"
                >
                  <p className="text-[0.7rem] font-semibold uppercase tracking-wide text-accent">
                    {mod.label}
                  </p>
                  <p className="mt-1 text-[0.8rem] leading-snug text-white/85">
                    {mod.description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <span className="pointer-events-none absolute left-1/2 top-full mt-1.5 -translate-x-1/2 whitespace-nowrap text-[0.65rem] font-medium text-ink-soft sm:text-[0.7rem]">
              {mod.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
