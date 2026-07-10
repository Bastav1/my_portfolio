import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import SectionHeading from "./SectionHeading.jsx";
import { revealUp } from "../lib/animations.js";

export default function About() {
  const rootRef = useRef(null);

  useGSAP(
    () => {
      revealUp("[data-about-reveal]", { stagger: 0.12 });
    },
    { scope: rootRef }
  );

  return (
    <section id="about" ref={rootRef} className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36">
      <SectionHeading eyebrow="01 / About" title="About Me" />

      <div className="grid gap-10 md:grid-cols-12">
        <div data-about-reveal className="md:col-span-4">
          <p className="font-display text-2xl leading-snug text-ink md:text-3xl">
            A civil engineer by degree, a software engineer by craft.
          </p>
        </div>
        <div className="flex flex-col gap-6 md:col-span-7 md:col-start-6">
          <p data-about-reveal className="font-sans text-lg leading-relaxed text-muted md:text-xl">
            I'm currently pursuing a B.Tech in Civil Engineering at{" "}
            <strong className="font-medium text-ink">NIT Durgapur</strong> (2023–2027) — but most of my hours
            go into building software. What started as curiosity turned into shipping production-grade
            platforms: real-time video infrastructure over WebRTC, and a Redis-compatible database written
            from scratch in C++.
          </p>
          <p data-about-reveal className="font-sans text-lg leading-relaxed text-muted md:text-xl">
            I like systems that are fast and honest about their tradeoffs — thread-safe, well-typed, and
            built without leaning on magic. Outside of shipping projects, I compete on LeetCode and
            Codeforces, where I've solved 1,250+ problems and hit a peak contest rating of 1758.
          </p>
          <p data-about-reveal className="font-sans text-lg leading-relaxed text-muted md:text-xl">
            Based in Kolkata, India — open to internships and full-time SDE roles where I can keep building
            things that are both fast and correct.
          </p>
        </div>
      </div>
    </section>
  );
}
