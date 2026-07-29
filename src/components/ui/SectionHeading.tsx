import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { cx } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isDark = tone === "dark";

  return (
    <div
      className={cx(
        "max-w-2xl",
        isCenter && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <Reveal y={12}>
          <span
            className={cx(
              "eyebrow inline-block mb-4",
              isDark ? "text-accent" : "text-accent-strong",
            )}
          >
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal y={16} delay={0.05}>
        <h2
          className={cx(
            "text-balance font-semibold tracking-tight text-[2rem] leading-[1.12] sm:text-[2.5rem] md:text-[3rem]",
            isDark ? "text-dark-text" : "text-ink",
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal y={16} delay={0.1}>
          <p
            className={cx(
              "mt-5 text-lg leading-relaxed",
              isDark ? "text-dark-text-soft" : "text-ink-soft",
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
