import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import SectionHeading from "./SectionHeading.jsx";
import Marquee from "./Marquee.jsx";
import { revealUp } from "../lib/animations.js";
import { profile } from "../data/portfolio.js";

export default function Contact() {
  const rootRef = useRef(null);

  useGSAP(
    () => {
      revealUp("[data-contact-reveal]", { stagger: 0.12 });
    },
    { scope: rootRef }
  );

  return (
    <section id="contact" ref={rootRef} className="bg-dark text-cream">
      <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36">
        <SectionHeading eyebrow="05 / Contact" title="Let's Talk" dark />

        <div data-contact-reveal className="max-w-2xl">
          <p className="font-display text-[clamp(1.75rem,4vw,3rem)] leading-snug text-cream">
            Have an idea, an opening, or just want to talk shop? My inbox is open.
          </p>
        </div>

        <a
          href={`mailto:${profile.email}`}
          data-contact-reveal
          data-cursor="Email"
          className="group relative mt-10 inline-block font-display text-[clamp(1.75rem,6vw,4.5rem)] text-cream"
        >
          {profile.email}
          <span className="absolute inset-x-0 -bottom-1 h-[2px] origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out group-hover:scale-x-100 md:h-[3px]" />
        </a>

        <div
          data-contact-reveal
          className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-4 font-mono text-sm uppercase tracking-wider text-cream/60"
        >
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor
            className="transition-colors hover:text-cream"
          >
            GitHub ↗
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor
            className="transition-colors hover:text-cream"
          >
            LinkedIn ↗
          </a>
          <span>{profile.location}</span>
          <span>{profile.phone}</span>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <Marquee
          items={[profile.availability, "Say Hello"]}
          className="py-6 font-display text-3xl text-accent/30 md:text-4xl"
        />
      </div>
    </section>
  );
}
