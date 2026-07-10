import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import SectionHeading from "./SectionHeading.jsx";
import ProjectRow from "./ProjectRow.jsx";
import { revealUp } from "../lib/animations.js";
import { projects } from "../data/portfolio.js";

export default function Projects() {
  const rootRef = useRef(null);

  useGSAP(
    () => {
      revealUp("[data-project-row]", { y: 60, stagger: 0.08, start: "top 92%" });
    },
    { scope: rootRef }
  );

  return (
    <section id="work" ref={rootRef} className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36">
      <SectionHeading eyebrow="02 / Selected Work" title="Featured Projects" />
      <div>
        {projects.map((project, i) => (
          <ProjectRow key={project.id} project={project} i={i} />
        ))}
      </div>
    </section>
  );
}
