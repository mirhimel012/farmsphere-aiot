
import { useState } from "react";
import { motion } from "motion/react";
import {
  Droplets,
  Clock,
  Zap,
  Hand,
  History,
} from "lucide-react";

const demoEvents = [
  {
    id: 1,
    title: "Automatic irrigation cycle",
    description: "Soil moisture monitoring completed.",
    time: "10:00 AM",
    mode: "AUTO",
    status: "Completed",
  },
  {
    id: 2,
    title: "Soil moisture checked",
    description: "Demo soil moisture reading: 42%.",
    time: "11:30 AM",
    mode: "AUTO",
    status: "Normal",
  },
  {
    id: 3,
    title: "Manual mode selected",
    description: "Manual mode selected in dashboard simulation.",
    time: "12:15 PM",
    mode: "MANUAL",
    status: "Demo",
  },
  {
    id: 4,
    title: "Irrigation safety check",
    description: "Prototype safety conditions reviewed.",
    time: "01:00 PM",
    mode: "AUTO",
    status: "Passed",
  },
];

export default function IrrigationHistory() {
  const [filter, setFilter] = useState("ALL");

  const filteredEvents =
    filter === "ALL"
      ? demoEvents
      : demoEvents.filter((event) => event.mode === filter);

  return (
    <section className="glass rounded-2xl p-5 sm:p-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-400">
            <History size={20} />
          </div>

          <div>
            <h2 className="font-semibold text-white">
              Irrigation History
            </h2>
            <p className="mt-1 text-xs text-text-muted">
              Demonstration activity records
            </p>
          </div>
        </div>

        <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-xs text-amber-300">
          Demo Data
        </span>
      </div>

      {/* Filters */}
      <div className="mt-5 flex flex-wrap gap-2">
        {["ALL", "AUTO", "MANUAL"].map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            className={`rounded-lg border px-4 py-2 text-xs font-medium transition ${
              filter === item
                ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-300"
                : "border-white/10 text-text-muted hover:bg-white/5"
            }`}
          >
            {item === "ALL"
              ? "All Events"
              : item === "AUTO"
                ? "Automatic"
                : "Manual"}
          </button>
        ))}
      </div>

      {/* Events */}
      <div className="mt-5 space-y-3">
        {filteredEvents.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="flex gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4"
          >
            <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
              {event.mode === "AUTO" ? (
                <Zap size={17} />
              ) : (
                <Hand size={17} />
              )}
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-sm font-medium text-white">
                  {event.title}
                </h3>

                <span className="rounded-full border border-green-400/20 bg-green-400/10 px-2 py-1 text-[10px] text-green-300">
                  {event.status}
                </span>
              </div>

              <p className="mt-1 text-xs leading-relaxed text-text-muted">
                {event.description}
              </p>

              <div className="mt-3 flex flex-wrap items-center gap-3 text-[11px] text-text-muted">
                <span className="flex items-center gap-1">
                  <Clock size={12} />
                  {event.time}
                </span>

                <span className="flex items-center gap-1">
                  <Droplets size={12} />
                  {event.mode}
                </span>
              </div>
            </div>
          </motion.div>
        ))}

        {filteredEvents.length === 0 && (
          <p className="py-8 text-center text-sm text-text-muted">
            No events found.
          </p>
        )}
      </div>

      <p className="mt-4 text-[11px] text-text-muted">
        These records are sample events, not actual ESP32 activity logs.
      </p>
    </section>
  );
}
