"use client";

import { useEffect, useRef, useState } from "react";
import { NAME, PUBLIC_OFFICE, sections } from "@/content/profile";

/**
 * Sticky deep-navy masthead with active-section tracking and mobile drawer.
 */
export function Masthead() {
  const [active, setActive] = useState<string | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const menuBtnRef = useRef<HTMLButtonElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const targets = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-25% 0px -65% 0px" },
    );

    targets.forEach((el) => observer.observe(el));

    const handleScroll = () => {
      const y = window.scrollY;
      if (y < 140) {
        setActive(null);
        return;
      }
      if (
        window.innerHeight + y >= document.documentElement.scrollHeight - 16 &&
        sections.length > 0
      ) {
        setActive(sections[sections.length - 1].id);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!drawerOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setDrawerOpen(false);
        menuBtnRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [drawerOpen]);

  return (
    <>
      <header className="masthead">
        <div className="wrap masthead__inner">
          <a className="masthead__brand" href="#top">
            <span className="masthead__name">{NAME}</span>
            <span className="masthead__sub">
              {PUBLIC_OFFICE.candidacy} · {PUBLIC_OFFICE.partyShort}
            </span>
          </a>

          <nav aria-label="Sections" className="masthead__nav">
            <ul>
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    aria-current={active === s.id ? "location" : undefined}
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            ref={menuBtnRef}
            type="button"
            className="masthead__menu-btn"
            aria-label="Open menu"
            aria-expanded={drawerOpen}
            aria-controls="mobile-drawer"
            onClick={() => setDrawerOpen(true)}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          </button>
        </div>
      </header>

      {drawerOpen ? (
        <div className="drawer-backdrop" onClick={() => setDrawerOpen(false)}>
          <aside
            id="mobile-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            className="drawer"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="drawer__head">
              <span className="drawer__title">{NAME}</span>
              <button
                ref={closeBtnRef}
                type="button"
                className="masthead__menu-btn"
                aria-label="Close menu"
                onClick={() => {
                  setDrawerOpen(false);
                  menuBtnRef.current?.focus();
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                </svg>
              </button>
            </div>
            <ul className="drawer__list">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    aria-current={active === s.id ? "location" : undefined}
                    onClick={() => setDrawerOpen(false)}
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      ) : null}
    </>
  );
}
