export default function Marquee({ items, reverse = false, className = "" }) {
  const renderSet = (hidden) => (
    <div className="flex shrink-0 items-center" aria-hidden={hidden ? "true" : undefined}>
      {items.map((item, i) => (
        <span key={i} className="flex items-center whitespace-nowrap">
          <span className="px-5">{item}</span>
          <span className="text-accent">•</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className={`overflow-hidden ${className}`}>
      <div className={`flex w-max ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
        {renderSet(false)}
        {renderSet(true)}
      </div>
    </div>
  );
}
