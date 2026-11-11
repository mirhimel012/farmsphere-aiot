
import { useState } from "react";
import {
  ShieldAlert,
  Flame,
  Droplets,
  Activity,
  Clock,
  Filter,
} from "lucide-react";
import { motion } from "motion/react";

const demoEvents = [
  {
    id: 1,
    title: "Safety monitoring initialized",
    description: "FarmSphere safety monitoring started in demo mode.",
    type: "system",
    time: "Just now",
    status: "Info",
  },
  {
    id: 2,
    title: "Flame sensor status checked",
    description: "No flame detected in the simulation.",
    type: "fire",
    time: "2 minutes ago",
    status: "Safe",
  },
  {
    id: 3,
    title: "Garden pump safety check",
    description: "Garden pump is currently switched OFF.",
    type: "pump",
    time: "5 minutes ago",
    status: "Safe",
  },
  {
    id: 4,
    title: "ESP32 controller status",
    description: "Physical controller connection is pending.",
    type: "system",
    time: "10 minutes ago",
    status: "Demo",
  },
  {
    id: 5,
    title: "Fire detection monitoring",
    description: "Flame detection input is being simulated.",
    type: "fire",
    time: "15 minutes ago",
    status: "Safe",
  },
];

const filters = ["All", "Fire", "Pump", "System"];

const eventIcons = {
  fire: Flame,
  pump: Droplets,
  system: Activity,
};

const eventColors = {
  fire: "text-danger bg-danger/10",
  pump: "text-accent bg-accent/10",
  system: "text-purple-400 bg-purple-400/10",
};

export default function SafetyHistory() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredEvents =
    activeFilter === "All"
      ? demoEvents
      : demoEvents.filter(
          (event) =>
            event.type === activeFilter.toLowerCase()
        );

  return (
    <section className="glass rounded-2xl p-5 sm:p-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <ShieldAlert
              size={20}
              className="text-accent"
            />
            <h2 className="text-lg font-bold text-text-primary">
              Safety Event History
            </h2>
          </div>

          <p className="mt-1 text-sm text-text-muted">
            Example safety events from the demo environment
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs text-warning">
          <Clock size={14} />
          Demo records
        </div>
      </div>

      {/* Filters */}
      <div className="mt-5 flex flex-wrap items-center gap-2">
        <Filter
          size={15}
          className="mr-1 text-text-muted"
        />

        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`rounded-lg px-3 py-2 text-xs font-semibold transition-all ${
              activeFilter === filter
                ? "bg-accent text-background"
                : "border border-white/10 bg-white/5 text-text-muted hover:bg-white/10"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Event Timeline */}
      <div className="mt-6 space-y-4">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event, index) => {
            const Icon = eventIcons[event.type];

            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex gap-3"
              >
                {/* Icon */}
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                    eventColors[event.type]
                  }`}
                >
                  <Icon size={18} />
                </div>

                {/* Event Details */}
                <div className="min-w-0 flex-1 border-b border-white/5 pb-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-sm font-semibold text-text-primary">
                      {event.title}
                    </h3>

                    <span className="rounded-full bg-white/5 px-2 py-1 text-[10px] font-semibold text-text-muted">
                      {event.status}
                    </span>
                  </div>

                  <p className="mt-1 text-xs leading-relaxed text-text-muted">
                    {event.description}
                  </p>

                  <p className="mt-2 text-[11px] text-text-muted">
                    {event.time}
                  </p>
                </div>
              </motion.div>
            );
          })
        ) : (
          <div className="py-8 text-center text-sm text-text-muted">
            No events found for this filter.
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="mt-4 rounded-xl border border-warning/20 bg-warning/5 p-3">
        <p className="text-xs leading-relaxed text-text-muted">
          These are sample records for interface testing.
          They are not real-time fire alerts or verified
          hardware events.
        </p>
      </div>
    </section>
  );
}
