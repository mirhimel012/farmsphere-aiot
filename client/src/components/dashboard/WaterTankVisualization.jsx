
import { motion } from "motion/react";
import {
  Droplets,
  Waves,
  AlertTriangle,
  CheckCircle2,
  Gauge,
} from "lucide-react";

export default function WaterTankVisualization({ level = 78 }) {
  const tankLevel = Math.min(100, Math.max(0, Number(level) || 0));

  const status =
    tankLevel <= 15
      ? "Critical"
      : tankLevel <= 30
        ? "Low"
        : "Available";

  const statusColor =
    status === "Critical" || status === "Low"
      ? "text-amber-400"
      : "text-green-400";

  return (
    <section className="glass rounded-2xl p-5 sm:p-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-400">
            <Gauge size={22} />
          </div>

          <div>
            <h2 className="font-semibold text-white">
              Advanced Tank Monitoring
            </h2>
            <p className="mt-1 text-xs text-text-muted">
              Main water tank visualization
            </p>
          </div>
        </div>

        <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-xs text-amber-300">
          Demo Data
        </span>
      </div>

      <div className="mt-7 grid items-center gap-8 sm:grid-cols-2">
        {/* Tank Visualization */}
        <div className="flex flex-col items-center">
          <div className="relative h-64 w-44 overflow-hidden rounded-b-[32px] rounded-t-2xl border-2 border-cyan-400/30 bg-cyan-400/5 shadow-[0_0_35px_rgba(34,211,238,0.08)]">
            {/* Measurement Lines */}
            <div className="absolute inset-0 z-10 flex flex-col justify-between px-3 py-5">
              {[100, 75, 50, 25, 0].map((mark) => (
                <div
                  key={mark}
                  className="flex items-center justify-between border-t border-dashed border-white/15"
                >
                  <span className="bg-[#10131d]/50 px-1 text-[9px] text-white/60">
                    {mark}%
                  </span>
                </div>
              ))}
            </div>

            {/* Animated Water */}
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: `${tankLevel}%` }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-cyan-700 to-cyan-300/70"
            />

            {/* Water Details */}
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
              <Waves size={28} className="text-white drop-shadow-lg" />

              <span className="mt-2 text-4xl font-bold text-white drop-shadow-lg">
                {tankLevel}%
              </span>

              <span className="text-xs text-white/80">
                Tank Capacity
              </span>
            </div>
          </div>

          <p className={`mt-4 text-sm font-semibold ${statusColor}`}>
            {status}
          </p>
        </div>

        {/* Tank Information */}
        <div className="space-y-4">
          <div className="rounded-xl bg-white/[0.03] p-4">
            <div className="flex items-center justify-between">
              <p className="text-xs text-text-muted">
                Current Water Level
              </p>
              <Droplets size={17} className="text-cyan-400" />
            </div>

            <p className="mt-3 text-3xl font-bold text-cyan-400">
              {tankLevel}%
            </p>

            <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/5">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${tankLevel}%` }}
                transition={{ duration: 1 }}
                className="h-full rounded-full bg-cyan-400"
              />
            </div>
          </div>

          <div className="rounded-xl bg-white/[0.03] p-4">
            <p className="text-xs text-text-muted">
              Tank Availability
            </p>

            <p className={`mt-2 text-xl font-bold ${statusColor}`}>
              {status}
            </p>

            <p className="mt-1 text-xs text-text-muted">
              Based on prototype demonstration thresholds
            </p>
          </div>

          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
            <div className="flex items-center gap-2">
              {tankLevel <= 15 ? (
                <AlertTriangle size={18} className="text-amber-400" />
              ) : (
                <CheckCircle2 size={18} className="text-green-400" />
              )}

              <p className="text-sm font-medium text-white">
                {tankLevel <= 15
                  ? "Critical Tank Level"
                  : "Tank Status"}
              </p>
            </div>

            <p className="mt-2 text-xs leading-relaxed text-text-muted">
              {tankLevel <= 15
                ? "The demonstration tank level has reached the prototype critical threshold. Irrigation should be blocked."
                : "The demonstration tank level is above the prototype critical threshold."}
            </p>
          </div>
        </div>
      </div>

      <p className="mt-5 border-t border-white/5 pt-4 text-[11px] text-text-muted">
        Main tank sensor: planned GPIO 35. This visualization uses simulated
        readings, not verified physical sensor measurements.
      </p>
    </section>
  );
}
