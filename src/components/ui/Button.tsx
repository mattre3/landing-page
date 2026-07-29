"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cx } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "dark";
type ButtonSize = "md" | "lg";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: boolean;
  className?: string;
  type?: "button" | "submit";
};

const base =
  "focus-ring inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors whitespace-nowrap";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-accent text-white hover:bg-accent-strong",
  secondary: "bg-ink text-paper hover:bg-ink/85",
  ghost: "bg-transparent text-ink border border-line-strong hover:border-ink hover:bg-ink/[0.03]",
  dark: "bg-white text-ink hover:bg-white/90",
};

const sizes: Record<ButtonSize, string> = {
  md: "h-11 px-5 text-[0.9rem]",
  lg: "h-13 px-7 text-base",
};

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  icon = true,
  className,
  type = "button",
}: ButtonProps) {
  const classes = cx(base, variants[variant], sizes[size], className);

  const content = (
    <motion.span
      className={classes}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.15 }}
    >
      {children}
      {icon && <ArrowRight className="size-4" strokeWidth={2.25} aria-hidden />}
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} onClick={onClick} className="inline-block">
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className="inline-block">
      {content}
    </button>
  );
}
