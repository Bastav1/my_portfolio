import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import SectionHeading from "./SectionHeading.jsx";
import { revealUp } from "../lib/animations.js";
import { skills } from "../data/portfolio.js";

export default function Skills() {
  const rootRef = useRef(null);

  useGSAP(
    () => {
      revealUp("[data-skill-label]", { y: 16, duration: 0.7, stagger: 0.12 });
      revealUp("[data-skill-chip]", { y: 14, duration: 0.55, stagger: 0.02, start: "top 95%" });
    },
    { scope: rootRef }
  );

  return (
    <section id="skills" ref={rootRef} className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36">
      <SectionHeading eyebrow="03 / Toolkit" title="Skills & Stack" />

      <div className="flex flex-col gap-14">
        {Object.entries(skills).map(([group, items]) => (
          <div key={group}>
            <h3 data-skill-label className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-muted">
              {group}
            </h3>
            <div className="flex flex-wrap gap-3">
              {items.map((item) => (
                <span
                  key={item}
                  data-skill-chip
                  data-cursor
                  className="rounded-full border border-accent/25 bg-accent-soft px-5 py-2.5 font-sans text-sm text-accent-dark transition-colors hover:border-accent hover:bg-accent hover:text-paper"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
