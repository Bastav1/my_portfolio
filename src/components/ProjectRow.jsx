import { useRef } from "react";
import { gsap } from "gsap";

const gradients = [
  "from-accent/40 via-accent/10 to-transparent",
  "from-ink/20 via-accent/10 to-transparent",
  "from-accent/35 via-transparent to-ink/15",
  "from-ink/20 via-accent/20 to-transparent",
];

export default function ProjectRow({ project, i }) {
  const panelRef = useRef(null);
  const reverse = i % 2 === 1;

  const handleMove = (e) => {
    const rect = panelRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    gsap.to(panelRef.current, {
      rotateX: py * -8,
      rotateY: px * 8,
      duration: 0.6,
      ease: "power3.out",
      transformPerspective: 800,
    });
  };

  const handleLeave = () => {
    gsap.to(panelRef.current, { rotateX: 0, rotateY: 0, duration: 0.8, ease: "elastic.out(1, 0.5)" });
  };

  return (
    <div
      data-project-row
      className="grid items-center gap-10 border-t border-line py-14 md:grid-cols-12 md:gap-8 md:py-20"
    >
      <div className={`md:col-span-5 ${reverse ? "md:order-2" : ""}`}>
        <div
          ref={panelRef}
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
          data-cursor={project.links.live ? "View" : "Code"}
          className={`group relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl bg-paper-dim bg-gradient-to-br [transform-style:preserve-3d] ${gradients[i % gradients.length]}`}
        >
          <span className="font-display text-[6rem] text-ink/10 md:text-[8rem]">{project.title.slice(0, 1)}</span>
          <span className="absolute left-5 top-5 font-mono text-xs uppercase tracking-wider text-muted">
            {project.year}
          </span>
          <span className="absolute bottom-5 right-5 font-mono text-[10px] uppercase tracking-wider text-muted opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {project.links.live ? "View live ↗" : "View code ↗"}
          </span>
        </div>
      </div>

      <div className={`md:col-span-7 ${reverse ? "md:order-1" : ""}`}>
        <div className="flex items-start gap-4">
          <span className="pt-1 font-mono text-sm text-muted">{project.index}</span>
          <div className="flex-1">
            <h3 className="font-display text-3xl text-ink md:text-4xl">{project.title}</h3>
            <p className="mt-1 font-sans text-base text-muted">{project.tagline}</p>

            <p className="mt-5 max-w-xl font-sans leading-relaxed text-ink/70">{project.description}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-accent/25 bg-accent-soft px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-accent-dark"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-5">
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="Open"
                  className="inline-flex items-center gap-1.5 font-mono text-[13px] uppercase tracking-wider text-ink underline decoration-accent decoration-2 underline-offset-4 hover:text-accent-dark"
                >
                  Live Site ↗
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="Code"
                  className="inline-flex items-center gap-1.5 font-mono text-[13px] uppercase tracking-wider text-ink underline decoration-line decoration-2 underline-offset-4 hover:text-accent-dark"
                >
                  GitHub ↗
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
