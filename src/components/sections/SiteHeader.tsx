"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cx } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#problem", label: "Problem" },
  { href: "#ekosystem", label: "Rozwiązanie" },
  { href: "#proces", label: "Proces" },
  { href: "#finansowanie", label: "Finansowanie" },
  { href: "#kwalifikator", label: "Sprawdź firmę" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={cx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-line bg-paper/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="container-page flex h-16 items-center justify-between sm:h-18">
        <a href="#top" className="focus-ring flex items-center gap-2">
          <span
            className={cx(
              "flex size-8 items-center justify-center rounded-lg transition-colors",
              scrolled ? "bg-ink text-paper" : "bg-white/10 text-white",
            )}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path
                d="M2 8.5L6 4l3 3 5-5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 12.5L6 8l3 3 5-5"
                stroke="var(--accent)"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span
            className={cx(
              "text-[0.95rem] font-semibold tracking-tight transition-colors",
              scrolled ? "text-ink" : "text-white",
            )}
          >
            Cyfryzacja&nbsp;Firmy
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Nawigacja główna">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cx(
                "focus-ring text-[0.9rem] font-medium transition-colors",
                scrolled ? "text-ink-soft hover:text-ink" : "text-white/70 hover:text-white",
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#final-cta"
          className={cx(
            "focus-ring hidden h-10 items-center justify-center rounded-full px-5 text-[0.85rem] font-medium transition-colors sm:inline-flex",
            scrolled ? "bg-ink text-paper hover:bg-ink/85" : "bg-white text-ink hover:bg-white/90",
          )}
        >
          Umów konsultację
        </a>
      </div>
    </motion.header>
  );
}
