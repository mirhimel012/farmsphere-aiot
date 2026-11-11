
import { useState } from "react";
import { motion } from "motion/react";
import {
  Fish,
  PawPrint,
  Clock,
  History,
  Zap,
  Hand,
  Droplets,
} from "lucide-react";

const demoEvents = [
  {
    id: 1,
    title: "Fish Feeding Cycle",
    description: "Automatic fish feeder cycle completed.",
    time: "09:00 AM",
    mode: "AUTO",
    type: "fish",
    status: "Demo",
  },
  {
    id: 2,
    title: "Pet Feeding Cycle",
    description: "Shared cat and dog feeder cycle simulated.",
    time: "10:15 AM",
    mode: "AUTO",
    type: "pet",
    status: "Demo",
  },
  {
    id: 3,
    title: "Manual Fish Feeder Mode",
    description: "Manual mode selected in dashboard.",
    time: "11:30 AM",
    mode: "MANUAL",
    type: "fish",
    status: "Demo",
  },
  {
    id: 4,
    title: "Pet Water Monitoring",
    description: "Example pet bowl water-level reading checked.",
    time: "12:00 PM",
    mode: "AUTO",
    type: "water",
    status: "Demo",
  },
  {
    id: 5,
    title: "Manual Pet Feeder Mode",
    description: "Manual mode selected in dashboard.",
    time: "01:15 PM",
    mode: "MANUAL",
    type: "pet",
    status: "Demo",
  },
];

export default function FeedingHistory() {
  const [filter, setFilter] = useState("ALL");

  const filteredEvents =
    filter === "ALL"
      ? demoEvents
      : demoEvents.filter((event) => event.type === filter);

  const getIcon = (type) => {
    if (type === "fish") return Fish;
    if (type === "pet") return PawPrint;
    return Droplets;
  };

  return (
    <section className="glass rounded-2xl p-5 sm:p-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="rounded-xl border border-violet-400/20 bg-violet-400/10 p-3 text-violet-400">
            <History size={20} />
          </div>

          <div>
            <h2 className="font-semibold text-white">
              Feeding & Activity History
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
        {[
          { label: "All Events", value: "ALL" },
          { label: "Fish", value: "fish" },
          { label: "Pets", value: "pet" },
          { label: "Water", value: "water" },
        ].map((item) => (
          <button
            key={item.value}
            onClick={() => setFilter(item.value)}
            className={`rounded-lg border px-4 py-2 text-xs font-medium transition ${
              filter === item.value
                ? "border-violet-400/30 bg-violet-400/10 text-violet-300"
                : "border-white/10 text-text-muted hover:bg-white/5"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Timeline */}
      <div className="mt-5 space-y-3">
        {filteredEvents.map((event, index) => {
          const EventIcon = getIcon(event.type);

          return (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="flex gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4"
            >
              <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet-400/10 text-violet-400">
                <EventIcon size={17} />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-sm font-medium text-white">
                    {event.title}
                  </h3>

                  <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-2 py-1 text-[10px] text-amber-300">
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
                    {event.mode === "AUTO" ? (
                      <Zap size={12} />
                    ) : (
                      <Hand size={12} />
                    )}
                    {event.mode}
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}

        {filteredEvents.length === 0 && (
          <p className="py-8 text-center text-sm text-text-muted">
            No activity found.
          </p>
        )}
      </div>

      <p className="mt-4 text-[11px] text-text-muted">
        These are sample events, not actual ESP32 feeding records.
      </p>
    </section>
  );
}
