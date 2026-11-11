
import { useState } from "react";
import { motion } from "motion/react";
import {
  History,
  Sprout,
  PawPrint,
  Droplets,
  Clock,
  AlertTriangle,
} from "lucide-react";

const demoEvents = [
  {
    id: 1,
    title: "Tank Level Monitoring",
    description: "Example main tank level recorded at 78%.",
    time: "09:00 AM",
    type: "tank",
    status: "Demo",
  },
  {
    id: 2,
    title: "Garden Pump Monitoring",
    description: "Garden pump state checked in simulation.",
    time: "10:15 AM",
    type: "garden",
    status: "Demo",
  },
  {
    id: 3,
    title: "Pet Water Monitoring",
    description: "Example pet bowl water level recorded at 85%.",
    time: "11:30 AM",
    type: "pet",
    status: "Demo",
  },
  {
    id: 4,
    title: "Water Safety Check",
    description: "Prototype low-water safety conditions reviewed.",
    time: "12:15 PM",
    type: "alert",
    status: "Demo",
  },
  {
    id: 5,
    title: "Pet Pump Monitoring",
    description: "Pet water pump state checked in simulation.",
    time: "01:00 PM",
    type: "pet",
    status: "Demo",
  },
];

export default function WaterHistory() {
  const [filter, setFilter] = useState("ALL");

  const filteredEvents =
    filter === "ALL"
      ? demoEvents
      : demoEvents.filter((event) => event.type === filter);

  const getIcon = (type) => {
    if (type === "garden") return Sprout;
    if (type === "pet") return PawPrint;
    if (type === "alert") return AlertTriangle;
    return Droplets;
  };

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
              Water Activity History
            </h2>
            <p className="mt-1 text-xs text-text-muted">
              Demonstration water-system records
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
          { label: "Tank", value: "tank" },
          { label: "Garden", value: "garden" },
          { label: "Pet", value: "pet" },
          { label: "Alerts", value: "alert" },
        ].map((item) => (
          <button
            key={item.value}
            onClick={() => setFilter(item.value)}
            className={`rounded-lg border px-4 py-2 text-xs font-medium transition ${
              filter === item.value
                ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-300"
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
              <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
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

                <div className="mt-3 flex items-center gap-2 text-[11px] text-text-muted">
                  <Clock size={12} />
                  {event.time}
                </div>
              </div>
            </motion.div>
          );
        })}

        {filteredEvents.length === 0 && (
          <p className="py-8 text-center text-sm text-text-muted">
            No water activity found.
          </p>
        )}
      </div>

      <p className="mt-4 text-[11px] text-text-muted">
        These are sample events, not actual ESP32 water-system logs.
      </p>
    </section>
  );
}
