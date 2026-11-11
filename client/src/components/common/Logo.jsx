
import { Link } from "react-router-dom";

export default function Logo({ size = "default" }) {
  const isLarge = size === "large";

  return (
    <Link
      to="/"
      className="group inline-flex w-fit items-center gap-3"
      aria-label="FarmSphere home"
    >
      <img
        src="/images/farmsphere-logo.png"
        alt="FarmSphere logo"
        className={`shrink-0 object-contain ${
          isLarge ? "h-14 w-14" : "h-10 w-10"
        }`}
      />

      <span>
        <span className="block text-lg font-bold tracking-tight text-text-primary transition-colors group-hover:text-accent">
          Farm<span className="text-accent">Sphere</span>
        </span>

        <span className="mt-0.5 block text-[9px] font-medium uppercase tracking-[0.18em] text-text-muted">
          Smart Farm Management
        </span>
      </span>
    </Link>
  );
}
