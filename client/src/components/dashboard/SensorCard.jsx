
import { motion } from "motion/react";

export default function SensorCard({
  title,
  value,
  unit = "%",
  icon: Icon,
  status,
  color = "cyan",
  description,
}) {
  const colors = {
    cyan: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
    purple: "text-violet-400 bg-violet-400/10 border-violet-400/20",
    green: "text-green-400 bg-green-400/10 border-green-400/20",
    amber: "text-amber-400 bg-amber-400/10 border-amber-400/20",
  };

  const progressColors = {
    cyan: "bg-cyan-400",
    purple: "bg-violet-400",
    green: "bg-green-400",
    amber: "bg-amber-400",
  };

  const showProgress = unit === "%";
  const progress = Math.min(100, Math.max(0, Number(value) || 0));

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass glass-hover rounded-2xl p-5"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-medium text-text-muted">
            {title}
          </p>

          <div className="mt-4 flex items-baseline gap-1">
            <span className="text-3xl font-bold tracking-tight">
              {value}
            </span>

            <span className="text-sm text-text-muted">
              {unit}
            </span>
          </div>
        </div>

        <div className={`rounded-xl border p-3 ${colors[color] || colors.cyan}`}>
          {Icon && <Icon size={22} />}
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between gap-2">
        <span className="text-xs text-text-muted">
          {description}
        </span>

        <span
          className={`shrink-0 rounded-full border px-2.5 py-1 text-[10px] font-medium ${
            colors[color] || colors.cyan
          }`}
        >
          {status}
        </span>
      </div>

      {showProgress && (
        <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/5">
          <div
            className={`h-full rounded-full transition-all duration-500 ${
              progressColors[color] || progressColors.cyan
            }`}
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </motion.div>
  );
}
