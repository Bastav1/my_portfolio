import { useRef } from "react";
import { gsap } from "gsap";

export default function MagneticButton({ as: Tag = "button", strength = 0.35, className = "", children, ...props }) {
  const ref = useRef(null);

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(ref.current, { x: x * strength, y: y * strength, duration: 0.6, ease: "power3.out" });
  };

  const handleLeave = () => {
    gsap.to(ref.current, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" });
  };

  return (
    <Tag ref={ref} onMouseMove={handleMove} onMouseLeave={handleLeave} className={className} {...props}>
      {children}
    </Tag>
  );
}
