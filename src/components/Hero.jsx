import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import SplitWords from "./SplitWords.jsx";
import Marquee from "./Marquee.jsx";
import MagneticButton from "./MagneticButton.jsx";
import { profile } from "../data/portfolio.js";
import { scrollToSection } from "../lib/smoothScroll.js";

const tickerItems = [
  "React",
  "Next.js",
  "TypeScript",
  "C++",
  "System Design",
  "WebRTC",
  "Node.js",
  "MongoDB",
  "Docker",
];

export default function Hero({ ready }) {
  const rootRef = useRef(null);
  const blobARef = useRef(null);
  const blobBRef = useRef(null);

  useGSAP(
    () => {
      gsap.to(blobARef.current, { x: 60, y: -30, duration: 9, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(blobBRef.current, { x: -50, y: 40, duration: 11, repeat: -1, yoyo: true, ease: "sine.inOut" });
    },
    { scope: rootRef }
  );

  useGSAP(
    () => {
      if (!ready) return;
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.fromTo(
        "[data-hero-eyebrow] [data-reveal-word]",
        { yPercent: 115 },
        { yPercent: 0, duration: 0.9, stagger: 0.02 }
      )
        .fromTo(
          "[data-hero-line] [data-reveal-word]",
          { yPercent: 115 },
          { yPercent: 0, duration: 1.1, stagger: 0.035 },
          "-=0.7"
        )
        .from("[data-hero-sub]", { y: 24, opacity: 0, duration: 0.9 }, "-=0.75")
        .from("[data-hero-cta]", { y: 20, opacity: 0, duration: 0.8, stagger: 0.1 }, "-=0.6")
        .from("[data-hero-scrollcue]", { opacity: 0, duration: 0.6 }, "-=0.4")
        .from("[data-hero-marquee]", { opacity: 0, duration: 0.9 }, "-=0.6");
    },
    { scope: rootRef, dependencies: [ready] }
  );

  return (
    <section id="hero" ref={rootRef} className="relative flex min-h-screen flex-col justify-between overflow-hidden pt-28">
      <div
        ref={blobARef}
        className="pointer-events-none absolute -left-32 top-10 h-[26rem] w-[26rem] rounded-full bg-accent/35 blur-[100px]"
      />
      <div
        ref={blobBRef}
        className="pointer-events-none absolute -right-24 top-1/3 h-[22rem] w-[22rem] rounded-full bg-accent-dark/15 blur-[110px]"
      />

      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 md:px-10">
        <p data-hero-eyebrow className="mb-6 font-mono text-xs uppercase tracking-[0.18em] text-muted md:text-sm">
          <SplitWords text={profile.role} />
        </p>

        <h1
          data-hero-line
          className="font-display text-[clamp(3rem,12vw,9rem)] leading-[0.95] text-ink"
        >
          <SplitWords text={profile.name} />
        </h1>

        <div data-hero-sub className="mt-8 max-w-xl space-y-3">
          <p className="font-sans text-xl text-ink/80 md:text-2xl">{profile.tagline}</p>
          <p className="font-sans text-base text-muted md:text-lg">
            Civil Engineering undergrad at NIT Durgapur, shipping production-grade apps and ranked in the top
            tier on competitive programming — on the side.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <MagneticButton
            as="a"
            href="#work"
            data-hero-cta
            data-cursor
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#work");
            }}
            className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 font-mono text-[13px] uppercase tracking-wider text-paper transition-colors hover:bg-accent-dark"
          >
            See my work
          </MagneticButton>
          <MagneticButton
            as="a"
            href="#contact"
            data-hero-cta
            data-cursor
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#contact");
            }}
            className="inline-flex items-center gap-2 rounded-full border border-ink px-7 py-3.5 font-mono text-[13px] uppercase tracking-wider text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            Get in touch
          </MagneticButton>
        </div>
      </div>

      <div data-hero-scrollcue className="relative mx-auto mb-8 hidden items-center gap-3 md:flex">
        <span className="h-10 w-px bg-muted/60" />
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">Scroll</span>
      </div>

      <div data-hero-marquee className="relative border-y border-line bg-paper-dim">
        <Marquee items={tickerItems} className="py-4 font-mono text-sm uppercase tracking-widest text-muted" />
      </div>
    </section>
  );
}
