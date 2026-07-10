import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import SectionHeading from "./SectionHeading.jsx";
import { revealUp } from "../lib/animations.js";
import { timeline } from "../data/portfolio.js";

export default function Journey() {
  const rootRef = useRef(null);
  const lineRef = useRef(null);
  const fillRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        fillRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: lineRef.current,
            start: "top 75%",
            end: "bottom 85%",
            scrub: 0.6,
          },
        }
      );

      revealUp("[data-timeline-item]", { stagger: 0.15, start: "top 90%" });
    },
    { scope: rootRef }
  );

  return (
    <section id="journey" ref={rootRef} className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36">
      <SectionHeading eyebrow="04 / Journey" title="Education & Credentials" />

      <div ref={lineRef} className="relative">
        <div className="absolute bottom-0 left-[5px] top-0 w-px bg-line">
          <div ref={fillRef} className="h-full w-full origin-top scale-y-0 bg-accent" />
        </div>

        <div className="flex flex-col gap-14">
          {timeline.map((entry) => (
            <div key={entry.title} data-timeline-item className="relative pl-8 md:pl-12">
              <span className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
              <span className="font-mono text-xs uppercase tracking-wider text-accent-dark">{entry.type}</span>
              <h3 className="mt-2 font-display text-2xl text-ink md:text-3xl">{entry.title}</h3>
              <p className="mt-1 font-sans text-muted">{entry.subtitle}</p>
              <p className="mt-1 font-mono text-xs uppercase tracking-wide text-muted/70">
                {entry.period}
                {entry.place ? ` · ${entry.place}` : ""}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
