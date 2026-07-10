import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let lenis = null;
let rafCallback = null;

export function initSmoothScroll() {
  lenis = new Lenis({
    duration: 1.15,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 1.2,
  });

  lenis.on("scroll", ScrollTrigger.update);

  rafCallback = (time) => {
    lenis.raf(time * 1000);
  };
  gsap.ticker.add(rafCallback);
  gsap.ticker.lagSmoothing(0);

  return () => {
    if (rafCallback) gsap.ticker.remove(rafCallback);
    lenis?.destroy();
    lenis = null;
  };
}

export function stopScroll() {
  lenis?.stop();
}

export function startScroll() {
  lenis?.start();
}

export function scrollToSection(target, options = {}) {
  if (lenis) {
    lenis.scrollTo(target, { offset: -76, duration: 1.4, ...options });
  } else {
    document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
  }
}

export function getLenis() {
  return lenis;
}
