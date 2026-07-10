import { gsap } from "gsap";

export function revealUp(targets, opts = {}) {
  const els = gsap.utils.toArray(targets);
  els.forEach((el, i) => {
    gsap.fromTo(
      el,
      { y: opts.y ?? 44, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: opts.duration ?? 1,
        ease: opts.ease ?? "power3.out",
        delay: i * (opts.stagger ?? 0.08),
        scrollTrigger: {
          trigger: el,
          start: opts.start ?? "top 88%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });
}

export function revealWords(container, selector, opts = {}) {
  const els = gsap.utils.toArray(selector, container);
  const vars = {
    yPercent: 0,
    duration: opts.duration ?? 1.1,
    ease: opts.ease ?? "power4.out",
    stagger: opts.stagger ?? 0.02,
    delay: opts.delay ?? 0,
  };
  if (opts.scrollTrigger !== false) {
    vars.scrollTrigger = {
      trigger: opts.trigger || container,
      start: opts.start || "top 85%",
      toggleActions: "play none none reverse",
    };
  }
  return gsap.fromTo(els, { yPercent: 115 }, vars);
}
