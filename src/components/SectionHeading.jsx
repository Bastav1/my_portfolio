import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import SplitWords from "./SplitWords.jsx";
import { revealWords } from "../lib/animations.js";

export default function SectionHeading({ eyebrow, title, dark = false }) {
  const ref = useRef(null);

  useGSAP(
    () => {
      revealWords(ref.current, "[data-reveal-word]");
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className="mb-14 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-6 md:mb-20">
      <h2
        className={`min-w-0 font-display text-[clamp(2rem,8vw,4.5rem)] leading-[1] ${dark ? "text-cream" : "text-ink"}`}
      >
        <SplitWords text={title} />
      </h2>
      <span
        className={`whitespace-nowrap font-mono text-xs uppercase tracking-[0.2em] sm:mb-2 ${
          dark ? "text-accent" : "text-accent-dark"
        }`}
      >
        {eyebrow}
      </span>
    </div>
  );
}
