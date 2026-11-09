"use client";

import { useEffect, useState } from "react";
import { NAME, sections } from "@/content/profile";

/**
 * Sticky translucent masthead. Content scrolls beneath it, and the link for
 * the section currently in view is marked so the reader always knows where
 * they are.
 */
export function Masthead() {
  const [active, setActive] = useState<string | null>(null);

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
      // A thin band just under the masthead decides which section is current.
      { rootMargin: "-30% 0px -65% 0px" },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="masthead">
      <div className="wrap masthead__inner">
        <a className="masthead__name" href="#top">
          {NAME}
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
      </div>
    </header>
  );
}
