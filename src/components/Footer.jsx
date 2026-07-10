import { profile } from "../data/portfolio.js";
import { scrollToSection } from "../lib/smoothScroll.js";

export default function Footer() {
  return (
    <footer className="bg-dark text-cream/50">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 font-mono text-[11px] uppercase tracking-wider md:flex-row md:px-10">
        <span>
          © {new Date().getFullYear()} {profile.name}. Built with React &amp; GSAP.
        </span>
        <button
          onClick={() => scrollToSection(0)}
          data-cursor
          className="flex items-center gap-2 text-cream/50 transition-colors hover:text-cream"
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  );
}
