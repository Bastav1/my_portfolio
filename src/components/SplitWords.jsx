export default function SplitWords({ text, wordClassName = "" }) {
  const words = text.split(" ");
  return words.map((word, i) => (
    <span className="inline-block overflow-hidden pb-[0.14em] -mb-[0.14em] align-top" key={`${word}-${i}`}>
      <span className={`inline-block will-change-transform ${wordClassName}`} data-reveal-word>
        {word}
        {i < words.length - 1 ? " " : ""}
      </span>
    </span>
  ));
}
