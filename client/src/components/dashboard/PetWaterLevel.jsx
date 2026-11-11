
import { motion } from "motion/react";
import {
  Droplets,
  AlertTriangle,
  CheckCircle2,
  Waves,
} from "lucide-react";

export default function PetWaterLevel({ level = 85, pumpStatus = "OFF" }) {
  const waterLevel = Math.min(100, Math.max(0, Number(level) || 0));

  const status =
    waterLevel <= 30
      ? "Low"
      : waterLevel >= 75
        ? "Full"
        : "Available";

  const statusColor =
    status === "Low"
      ? "text-amber-400"
      : status === "Full"
        ? "text-green-400"
        : "text-cyan-400";

  return (
    <section className="glass rounded-2xl p-5 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-400">
            <Droplets size={22} />
          </div>

          <div>
            <h2 className="font-semibold text-white">
              Pet Water Level
            </h2>
            <p className="mt-1 text-xs text-text-muted">
              Smart drinking bowl monitoring
            </p>
          </div>
        </div>

        <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-xs text-amber-300">
          Demo Data
        </span>
      </div>

      <div className="mt-6 grid items-center gap-6 sm:grid-cols-2">
        {/* Water Visualization */}
        <div className="flex flex-col items-center">
          <div className="relative h-48 w-36 overflow-hidden rounded-b-[40px] rounded-t-xl border-2 border-cyan-400/30 bg-cyan-400/5">
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: `${waterLevel}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-cyan-600/80 to-cyan-300/50"
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <Waves className="text-white" size={25} />
              <span className="mt-2 text-3xl font-bold text-white drop-shadow-lg">
                {waterLevel}%
              </span>
              <span className="text-xs text-white/80">
                Water Level
              </span>
            </div>
          </div>

          <p className={`mt-4 text-sm font-semibold ${statusColor}`}>
            {status}
          </p>
        </div>

        {/* Water Details */}
        <div className="space-y-4">
          <div className="rounded-xl bg-white/[0.03] p-4">
            <p className="text-xs text-text-muted">
              Current Water Level
            </p>
            <p className="mt-2 text-3xl font-bold text-cyan-400">
              {waterLevel}%
            </p>
            <p className="mt-1 text-xs text-text-muted">
              Demonstration sensor reading
            </p>
          </div>

          <div className="rounded-xl bg-white/[0.03] p-4">
            <p className="text-xs text-text-muted">
              Pet Water Pump
            </p>
            <p className="mt-2 text-2xl font-bold text-white">
              {pumpStatus}
            </p>
            <p className="mt-1 text-xs text-text-muted">
              Relay 2 · GPIO 26
            </p>
          </div>

          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
            <div className="flex items-center gap-2">
              {status === "Low" ? (
                <AlertTriangle size={17} className="text-amber-400" />
              ) : (
                <CheckCircle2 size={17} className="text-green-400" />
              )}

              <p className="text-sm font-medium text-white">
                {status === "Low"
                  ? "Low Water Level Warning"
                  : "Water Level Status"}
              </p>
            </div>

            <p className="mt-2 text-xs leading-relaxed text-text-muted">
              {status === "Low"
                ? "The demonstration water level is low. Check the water supply."
                : "The demonstration water level is currently within the available range."}
            </p>
          </div>
        </div>
      </div>

      {/* Prototype Thresholds */}
      <div className="mt-6 border-t border-white/5 pt-5">
        <h3 className="text-sm font-semibold text-white">
          Prototype Water Thresholds
        </h3>

        <div className="mt-3 grid grid-cols-3 gap-2">
          <div className="rounded-lg bg-amber-400/5 p-3 text-center">
            <p className="text-lg font-bold text-amber-400">
              ≤ 30%
            </p>
            <p className="mt-1 text-[10px] text-text-muted">
              Low
            </p>
          </div>

          <div className="rounded-lg bg-cyan-400/5 p-3 text-center">
            <p className="text-lg font-bold text-cyan-400">
              31–74%
            </p>
            <p className="mt-1 text-[10px] text-text-muted">
              Available
            </p>
          </div>

          <div className="rounded-lg bg-green-400/5 p-3 text-center">
            <p className="text-lg font-bold text-green-400">
              ≥ 75%
            </p>
            <p className="mt-1 text-[10px] text-text-muted">
              Full
            </p>
          </div>
        </div>
      </div>

      <p className="mt-4 text-[11px] text-text-muted">
        GPIO 32 is planned for the pet bowl level sensor. Physical integration
        is pending. Thresholds are prototype demonstration settings.
      </p>
    </section>
  );
}
