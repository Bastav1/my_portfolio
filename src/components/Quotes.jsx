import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import SectionHeading from "./SectionHeading.jsx";
import { revealUp } from "../lib/animations.js";
import { quotes } from "../data/portfolio.js";

export default function Quotes() {
  const rootRef = useRef(null);

  useGSAP(
    () => {
      revealUp("[data-quote]", { stagger: 0.12, start: "top 90%" });
    },
    { scope: rootRef }
  );

  return (
    <section id="principles" ref={rootRef} className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36">
      <SectionHeading eyebrow="05 / Philosophy" title="Words I Build By" />

      <div className="flex flex-col">
        {quotes.map((quote) => (
          <div
            key={quote.author}
            data-quote
            className="grid gap-4 border-t border-line py-10 last:border-b md:grid-cols-12 md:items-start md:gap-8"
          >
            <span className="font-display text-4xl leading-none text-accent/40 md:col-span-1">“</span>
            <p className="font-display text-2xl leading-snug text-ink md:col-span-8 md:text-3xl">
              {quote.text}
            </p>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted md:col-span-3 md:mt-2 md:text-right">
              — {quote.author}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
