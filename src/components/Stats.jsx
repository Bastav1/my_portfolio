import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { stats } from "../data/portfolio.js";

function Counter({ value, prefix = "", suffix = "" }) {
  const ref = useRef(null);

  useGSAP(() => {
    const obj = { val: 0 };
    gsap.to(obj, {
      val: value,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: { trigger: ref.current, start: "top 90%", once: true },
      onUpdate: () => {
        ref.current.textContent = `${prefix}${Math.floor(obj.val).toLocaleString()}${suffix}`;
      },
    });
  }, []);

  return (
    <span ref={ref} className="font-display text-[clamp(2.2rem,5vw,4rem)] text-accent-dark">
      {prefix}0{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="border-y border-line bg-paper-dim">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-12 px-6 py-16 md:grid-cols-4 md:px-10 md:py-20">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-2">
            <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
            <span className="font-mono text-xs uppercase tracking-wider text-muted">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
