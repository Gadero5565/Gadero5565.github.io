"use client";

import { useState, type KeyboardEvent } from "react";
import { navigation, profile } from "@/data/profile";

const navLinkClass =
  "rounded-md px-2 py-2 text-sm font-medium text-slate-300 transition-colors hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 border-b border-white/10 bg-[#0b1220]/95 backdrop-blur-md"
      onKeyDown={(event: KeyboardEvent<HTMLElement>) => {
        if (event.key === "Escape") setMenuOpen(false);
      }}
    >
      <a
        href="#top"
        className="sr-only absolute left-4 top-2 z-50 rounded-md bg-cyan-300 px-4 py-3 font-semibold text-slate-950 focus:not-sr-only focus:outline-none"
      >
        Skip to main content
      </a>
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8 sm:py-4">
        <a
          href="#top"
          aria-label={`${profile.name}, back to top`}
          className="rounded-sm text-base font-semibold tracking-tight text-white outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          onClick={() => setMenuOpen(false)}
        >
          {profile.name}<span className="text-cyan-300">.</span>
        </a>
        <nav aria-label="Main navigation" className="hidden items-center gap-2 md:flex">
          {navigation.map(({ label, href }) => (
            <a key={href} href={href} className={navLinkClass}>{label}</a>
          ))}
        </nav>
        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-controls="mobile-navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-slate-700 text-slate-100 transition hover:border-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 md:hidden"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            {menuOpen ? (
              <path d="M5 5l14 14M19 5L5 19" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>
      <nav id="mobile-navigation" aria-label="Mobile navigation" className={`${menuOpen ? "block" : "hidden"} border-t border-white/10 px-5 pb-4 pt-2 md:hidden`}>
          <div className="mx-auto flex max-w-6xl flex-col gap-1">
            {navigation.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-slate-200 hover:bg-slate-800 hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                {label}
              </a>
            ))}
          </div>
      </nav>
    </header>
  );
}
