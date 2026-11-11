
export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  centered = false,
}) {
  return (
    <div className={`max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
      <p className="mb-4 text-xs font-bold tracking-[0.22em] text-accent">
        {eyebrow}
      </p>

      <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
        {title}{" "}
        {highlight && (
          <span className="text-accent">{highlight}</span>
        )}
      </h2>

      {description && (
        <p className="mt-5 text-sm leading-8 text-text-muted sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}
