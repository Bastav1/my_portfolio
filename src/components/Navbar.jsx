import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { navLinks, profile } from "../data/portfolio.js";
import { scrollToSection, stopScroll, startScroll } from "../lib/smoothScroll.js";
import SocialLinks from "./SocialLinks.jsx";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const rootRef = useRef(null);
  const menuRef = useRef(null);
  const tlRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useGSAP(
    () => {
      gsap.set(menuRef.current, { clipPath: "inset(0% 0% 100% 0%)" });
      tlRef.current = gsap
        .timeline({ paused: true })
        .to(menuRef.current, { clipPath: "inset(0% 0% 0% 0%)", duration: 0.7, ease: "power4.inOut" })
        .from(".mobile-link", { yPercent: 130, stagger: 0.07, duration: 0.8, ease: "power4.out" }, "-=0.35")
        .from(".mobile-meta", { opacity: 0, y: 16, duration: 0.5 }, "-=0.4");
    },
    { scope: rootRef }
  );

  useEffect(() => {
    if (!tlRef.current) return;
    if (menuOpen) {
      stopScroll();
      tlRef.current.play();
    } else {
      startScroll();
      tlRef.current.reverse();
    }
  }, [menuOpen]);

  const goTo = (href) => {
    setMenuOpen(false);
    startScroll();
    scrollToSection(href);
  };

  return (
    <div ref={rootRef}>
      <header
        className={`fixed inset-x-0 top-0 z-[500] transition-all duration-300 ${
          scrolled ? "border-b border-line bg-paper/85 backdrop-blur-md" : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <button
            onClick={() => scrollToSection(0)}
            data-cursor
            className="font-display text-xl font-semibold tracking-tight text-ink"
          >
            BP<span className="text-accent">.</span>
          </button>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-cursor
                onClick={(e) => {
                  e.preventDefault();
                  goTo(link.href);
                }}
                className="group relative py-1 font-mono text-[13px] uppercase tracking-wider text-ink/80 transition-colors hover:text-ink"
              >
                {link.label}
                <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-5">
            <SocialLinks className="hidden items-center gap-4 md:flex" />

            <span className="hidden h-5 w-px bg-line md:block" />

            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="PDF"
              className="hidden rounded-full border border-ink px-5 py-2 font-mono text-[12px] uppercase tracking-wider text-ink transition-colors hover:bg-ink hover:text-paper md:inline-block"
            >
              Resume
            </a>

            <button
              onClick={() => setMenuOpen((v) => !v)}
              data-cursor
              aria-label="Toggle menu"
              className="relative z-[410] flex h-9 w-9 flex-col items-center justify-center gap-[6px] md:hidden"
            >
              <span
                className={`h-[1.5px] w-6 bg-ink transition-transform duration-300 ${
                  menuOpen ? "translate-y-[3.75px] rotate-45 bg-cream" : ""
                }`}
              />
              <span
                className={`h-[1.5px] w-6 bg-ink transition-transform duration-300 ${
                  menuOpen ? "-translate-y-[3.75px] -rotate-45 bg-cream" : ""
                }`}
              />
            </button>
          </div>
        </nav>
      </header>

      <div
        ref={menuRef}
        className={`fixed inset-0 z-[400] flex flex-col justify-between bg-dark px-6 py-24 md:hidden ${
          menuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-2">
          {navLinks.map((link) => (
            <div key={link.href} className="overflow-hidden">
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  goTo(link.href);
                }}
                className="mobile-link block font-display text-5xl text-cream"
              >
                {link.label}
              </a>
            </div>
          ))}
        </div>

        <div className="mobile-meta flex flex-col gap-4 font-mono text-xs uppercase tracking-wider text-cream/60">
          <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="text-cream">
            Download Resume ↗
          </a>
          <div className="flex items-center gap-6">
            <SocialLinks
              className="flex items-center gap-5"
              iconClassName="h-4 w-4"
              linkClassName="text-cream/70 transition-colors hover:text-cream"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
