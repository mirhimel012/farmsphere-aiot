
export default function PageHeader({ title, description, badge }) {
  return (
    <div className="mb-8">
      {badge && (
        <p className="mb-2 text-xs font-bold tracking-widest text-accent">
          {badge}
        </p>
      )}

      <h1 className="text-2xl font-bold text-text-primary sm:text-3xl">
        {title}
      </h1>

      <p className="mt-2 text-sm leading-6 text-text-muted">
        {description}
      </p>
    </div>
  );
}
