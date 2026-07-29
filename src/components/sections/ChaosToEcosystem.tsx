"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  FileSpreadsheet,
  Mail,
  Phone,
  MessageCircle,
  ClipboardList,
  Layers,
  Calendar,
  StickyNote,
  Calculator,
  Sparkles,
  Wand2,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

type Tool = {
  id: string;
  label: string;
  icon: typeof FileSpreadsheet;
  chaos: { x: number; y: number; rot: number };
};

const tools: Tool[] = [
  { id: "excel", label: "Excel", icon: FileSpreadsheet, chaos: { x: 12, y: 16, rot: -9 } },
  { id: "gmail", label: "Gmail", icon: Mail, chaos: { x: 48, y: 5, rot: 7 } },
  { id: "telefon", label: "Telefon", icon: Phone, chaos: { x: 86, y: 14, rot: -12 } },
  { id: "whatsapp", label: "WhatsApp", icon: MessageCircle, chaos: { x: 93, y: 52, rot: 10 } },
  { id: "formularze", label: "Formularze", icon: ClipboardList, chaos: { x: 76, y: 88, rot: -8 } },
  { id: "erp", label: "ERP", icon: Layers, chaos: { x: 42, y: 93, rot: 11 } },
  { id: "kalendarz", label: "Kalendarz", icon: Calendar, chaos: { x: 11, y: 82, rot: -6 } },
  { id: "notatki", label: "Notatki", icon: StickyNote, chaos: { x: 3, y: 46, rot: 14 } },
  { id: "ksiegowy", label: "System księgowy", icon: Calculator, chaos: { x: 32, y: 42, rot: -15 } },
];

const RADIUS = 40;

function orbitPosition(index: number, count: number) {
  const angle = (index / count) * Math.PI * 2 - Math.PI / 2;
  return {
    x: Number((50 + RADIUS * Math.cos(angle)).toFixed(3)),
    y: Number((50 + RADIUS * Math.sin(angle)).toFixed(3)),
  };
}

export function ChaosToEcosystem() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-120px" });
  const [organized, setOrganized] = useState(false);
  const isOrganized = organized || inView;

  return (
    <section className="bg-ink py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          tone="dark"
          align="center"
          eyebrow="Technologia dopasowana do firmy"
          title="Z chaosu narzędzi do jednego ekosystemu"
          description="Dziś dane żyją w kilku miejscach naraz. Po wdrożeniu wszystko zaczyna się ze sobą komunikować."
          className="mx-auto"
        />

        <div className="mt-6 flex justify-center">
          <Button
            variant="dark"
            size="md"
            icon={false}
            onClick={() => setOrganized((v) => !v)}
          >
            <Wand2 className="size-4" strokeWidth={2} aria-hidden />
            {isOrganized ? "Pokaż chaos jeszcze raz" : "Uporządkuj mój proces"}
          </Button>
        </div>

        <div
          ref={containerRef}
          className="relative mx-auto mt-14 aspect-square w-full max-w-[520px] sm:aspect-[4/3] sm:max-w-[680px]"
        >
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full overflow-visible" aria-hidden>
            {tools.map((tool, i) => {
              const pos = orbitPosition(i, tools.length);
              return (
                <motion.line
                  key={tool.id}
                  x1={50}
                  y1={50}
                  x2={pos.x}
                  y2={pos.y}
                  stroke="var(--accent)"
                  strokeWidth={0.4}
                  strokeDasharray="1.4 2"
                  initial={false}
                  animate={{ opacity: isOrganized ? 0.75 : 0 }}
                  transition={{ duration: 0.6, delay: isOrganized ? 0.5 : 0 }}
                  className={isOrganized ? "animate-dash" : ""}
                />
              );
            })}
          </svg>

          <motion.div
            initial={false}
            animate={{
              opacity: isOrganized ? 1 : 0,
              scale: isOrganized ? 1 : 0.7,
            }}
            transition={{ duration: 0.5, delay: isOrganized ? 0.35 : 0 }}
            className="absolute left-1/2 top-1/2 z-10 flex w-[128px] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 rounded-2xl border border-accent/40 bg-white px-4 py-5 text-center shadow-[0_20px_50px_-16px_rgba(14,164,114,0.45)]"
          >
            <span className="flex size-9 items-center justify-center rounded-full bg-accent-soft text-accent-strong">
              <Sparkles className="size-4.5" strokeWidth={2} aria-hidden />
            </span>
            <span className="text-[0.72rem] font-semibold uppercase tracking-wide text-ink">
              Digital Hub
            </span>
          </motion.div>

          {tools.map((tool, i) => {
            const orbit = orbitPosition(i, tools.length);
            const target = isOrganized ? orbit : tool.chaos;
            const Icon = tool.icon;
            return (
              <motion.div
                key={tool.id}
                className="absolute z-20 flex flex-col items-center gap-1.5"
                style={{ translateX: "-50%", translateY: "-50%" }}
                initial={false}
                animate={{
                  left: `${target.x}%`,
                  top: `${target.y}%`,
                  rotate: isOrganized ? 0 : tool.chaos.rot,
                }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.035 }}
              >
                <span
                  className={`flex size-11 items-center justify-center rounded-xl border shadow-sm transition-colors duration-500 sm:size-12 ${
                    isOrganized
                      ? "border-accent/50 bg-white text-accent-strong"
                      : "border-white/15 bg-white/[0.06] text-white/70"
                  }`}
                >
                  <Icon className="size-4.5 sm:size-5" strokeWidth={1.8} aria-hidden />
                </span>
                <span
                  className={`whitespace-nowrap text-[0.65rem] font-medium transition-colors duration-500 sm:text-[0.7rem] ${
                    isOrganized ? "text-white/80" : "text-white/45"
                  }`}
                >
                  {tool.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
