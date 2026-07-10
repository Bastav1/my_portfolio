import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

export default function Preloader({ onComplete }) {
  const rootRef = useRef(null);
  const counterRef = useRef(null);
  const barRef = useRef(null);

  useGSAP(
    () => {
      const counter = { val: 0 };
      const tl = gsap.timeline({
        onComplete: () => onComplete?.(),
      });

      tl.to(counter, {
        val: 100,
        duration: 2.1,
        ease: "power1.inOut",
        onUpdate: () => {
          const v = Math.floor(counter.val);
          if (counterRef.current) counterRef.current.textContent = String(v).padStart(2, "0");
          if (barRef.current) barRef.current.style.width = v + "%";
        },
      })
        .to(".preloader-label", { opacity: 0, duration: 0.35 }, ">-0.15")
        .to(counterRef.current, { opacity: 0, duration: 0.35 }, "<")
        .to(rootRef.current, { yPercent: -100, duration: 0.9, ease: "power4.inOut" }, ">-0.05");
    },
    { scope: rootRef }
  );

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[500] flex flex-col justify-between overflow-hidden bg-paper px-6 py-6 md:px-10 md:py-8"
    >
      <div className="preloader-label flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
        <span>Bastav Podder</span>
        <span>Portfolio — 2026</span>
      </div>

      <div className="flex items-end justify-between">
        <span ref={counterRef} className="font-display text-[16vw] leading-none text-ink md:text-[9vw]">
          00
        </span>
        <span className="preloader-label font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
          Loading
        </span>
      </div>

      <div className="h-px w-full bg-line">
        <div ref={barRef} className="h-full w-0 bg-accent" />
      </div>
    </div>
  );
}
