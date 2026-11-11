
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import {
  Fish,
  PawPrint,
  Clock,
  History,
  Zap,
  Hand,
  Droplets,
  RefreshCw,
  AlertCircle,
} from "lucide-react";

import { fetchActivityHistory } from "../../services/farmApi";

export default function FeedingHistory() {
  const [filter, setFilter] = useState("ALL");
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadHistory = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetchActivityHistory("all");

      const feedingEvents = response.activities.filter(
        (event) =>
          ["fish", "pet", "water"].includes(event.category) &&
          event.type === "feeding" || event.category === "water" &&
          event.title === "Pet Water Monitoring"
      );

      setEvents(feedingEvents);
    } catch (err) {
      setError(err.message || "Unable to load feeding history.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadHistory();
  }, []);

  const filteredEvents =
    filter === "ALL"
      ? events
      : events.filter((event) => {
          if (filter === "fish") return event.category === "fish";
          if (filter === "pet") return event.category === "pet";
          if (filter === "water") return event.title === "Pet Water Monitoring";
          return false;
        });

  const getIcon = (category) => {
    if (category === "fish") return Fish;
    if (category === "pet") return PawPrint;
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
              Backend activity records
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-xs text-amber-300">
            Demo Data
          </span>

          <button
            onClick={loadHistory}
            disabled={loading}
            aria-label="Refresh feeding history"
            className="rounded-lg border border-white/10 p-2 text-text-muted transition hover:bg-white/5 disabled:opacity-50"
          >
            <RefreshCw
              size={15}
              className={loading ? "animate-spin" : ""}
            />
          </button>
        </div>
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

      {/* Loading */}
      {loading && (
        <div className="flex items-center justify-center gap-2 py-10 text-sm text-text-muted">
          <RefreshCw size={16} className="animate-spin" />
          Loading feeding history...
        </div>
      )}

      {/* Error */}
      {!loading && error && (
        <div className="mt-5 flex flex-col items-center gap-3 rounded-xl border border-red-400/20 bg-red-400/5 p-5 text-center">
          <AlertCircle size={22} className="text-red-400" />
          <p className="text-sm text-red-300">{error}</p>

          <button
            onClick={loadHistory}
            className="rounded-lg border border-white/10 px-4 py-2 text-xs text-white hover:bg-white/5"
          >
            Try Again
          </button>
        </div>
      )}

      {/* Timeline */}
      {!loading && !error && (
        <div className="mt-5 space-y-3">
          {filteredEvents.map((event, index) => {
            const EventIcon = getIcon(event.category);

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
      )}

      <p className="mt-4 text-[11px] text-text-muted">
        These are simulated backend records, not actual ESP32 feeding records.
      </p>
    </section>
  );
}
