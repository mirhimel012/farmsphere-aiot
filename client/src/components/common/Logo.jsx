
import { Sprout } from "lucide-react";
import { Link } from "react-router-dom";

export default function Logo({ compact = false }) {
  return (
    <Link to="/" className="flex items-center gap-3 shrink-0">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10">
        <Sprout size={25} className="text-accent" />
      </div>

      {!compact && (
        <div>
          <h1 className="text-base font-extrabold tracking-wider text-text-primary">
            FarmSphere
          </h1>
          <p className="text-[10px] font-medium tracking-[0.2em] text-accent">
            AIoT PLATFORM
          </p>
        </div>
      )}
    </Link>
  );
}
