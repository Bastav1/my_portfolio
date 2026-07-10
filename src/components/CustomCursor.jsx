import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
  const dotRef = useRef(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    document.documentElement.classList.add("has-fine-cursor");

    const dot = dotRef.current;
    const moveX = gsap.quickSetter(dot, "x", "px");
    const moveY = gsap.quickSetter(dot, "y", "px");

    const onMove = (e) => {
      moveX(e.clientX);
      moveY(e.clientY);
    };

    window.addEventListener("mousemove", onMove);

    return () => {
      document.documentElement.classList.remove("has-fine-cursor");
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      className="pointer-events-none fixed left-0 top-0 z-[999] hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cream mix-blend-difference md:block"
    />
  );
}
