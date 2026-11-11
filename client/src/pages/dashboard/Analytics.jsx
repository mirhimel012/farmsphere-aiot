
import { useEffect, useState } from "react";
import { motion } from "motion/react";

import {
  Activity,
  Droplets,
  Sprout,
  Waves,
  TrendingUp,
  BarChart3,
  Clock,
  RefreshCw,
  AlertCircle,
} from "lucide-react";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  LineChart,
  Line,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import {
  fetchFarmStatus,
  fetchSensorHistory,
  fetchActivityHistory,
} from "../../services/farmApi";

// ==========================================
// REUSABLE STATISTIC CARD
// ==========================================

function StatCard({
  title,
  value,
  unit,
  icon: Icon,
  color,
  subtitle,
}) {
  const colors = {
    cyan: "bg-accent/10 text-accent",
    green: "bg-success/10 text-success",
    purple: "bg-purple-400/10 text-purple-400",
    amber: "bg-warning/10 text-warning",
  };

  return (
    <div className="glass rounded-2xl p-5">
      <div className="flex items-center justify-between">
        <p className="text-sm text-text-muted">{title}</p>

        <div className={`rounded-xl p-2.5 ${colors[color]}`}>
          <Icon size={20} />
        </div>
      </div>

      <div className="mt-4 flex items-baseline gap-1">
        <span className="text-3xl font-bold text-text-primary">
          {value ?? "--"}
        </span>

        <span className="text-sm text-text-muted">{unit}</span>
      </div>

      <p className="mt-2 text-xs text-text-muted">
        {subtitle}
      </p>
    </div>
  );
}

// ==========================================
// REUSABLE CHART CARD
// ==========================================

function ChartCard({ title, subtitle, children }) {
  return (
    <div className="glass rounded-2xl p-5 sm:p-6">
      <div className="mb-6">
        <h2 className="font-bold text-text-primary">
          {title}
        </h2>

        <p className="mt-1 text-xs text-text-muted">
          {subtitle}
        </p>
      </div>

      <div className="h-[260px] w-full">
        {children}
      </div>
    </div>
  );
}

// ==========================================
// EMPTY CHART MESSAGE
// ==========================================

function EmptyChart({ message }) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-white/10 text-center">
      <BarChart3 size={28} className="text-text-muted" />

      <p className="max-w-xs px-4 text-xs text-text-muted">
        {message}
      </p>
    </div>
  );
}

// ==========================================
// CHART TOOLTIP STYLE
// ==========================================

const tooltipStyle = {
  backgroundColor: "#10131d",
  border: "1px solid #293044",
  borderRadius: "12px",
  color: "#f5f3ff",
};

// ==========================================
// MAIN ANALYTICS PAGE
// ==========================================

export default function Analytics() {
  const [farmStatus, setFarmStatus] = useState(null);
  const [soilHistory, setSoilHistory] = useState([]);
  const [activities, setActivities] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadAnalytics = async () => {
    try {
      setLoading(true);
      setError("");

      const [farmResponse, soilResponse, activityResponse] =
        await Promise.all([
          fetchFarmStatus(),
          fetchSensorHistory("soilMoisture"),
          fetchActivityHistory("all"),
        ]);

      setFarmStatus(farmResponse);

      setSoilHistory(
        soilResponse.history.map((item) => ({
          time: item.time,
          moisture: item.value,
        }))
      );

      setActivities(activityResponse.activities);
    } catch (err) {
      setError(
        err.message || "Unable to load analytics data."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAnalytics();
  }, []);

  // ==========================================
  // CALCULATE ANALYTICS
  // ==========================================

  const getAverage = (data, key) => {
    if (!data.length) return 0;

    const total = data.reduce(
      (sum, item) => sum + item[key],
      0
    );

    return Math.round(total / data.length);
  };

  const sensors = farmStatus?.sensors;

  const averageSoil = getAverage(
    soilHistory,
    "moisture"
  );

  const currentTank = sensors?.tankLevel ?? null;
  const currentBowl = sensors?.petBowlLevel ?? null;

  // These count demo activity records, not actual device cycles.
  const pumpEvents = activities.filter(
    (event) =>
      ["irrigation", "garden"].includes(event.category)
  ).length;

  const feederEvents = activities.filter(
    (event) =>
      ["fish", "pet"].includes(event.category)
  ).length;

  const totalActivity = activities.length;

  const activityData = [
    {
      name: "Pump Events",
      pump: pumpEvents,
      feeder: 0,
    },
    {
      name: "Feeder Events",
      pump: 0,
      feeder: feederEvents,
    },
  ];

  // ==========================================
  // LOADING STATE
  // ==========================================

  if (loading) {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center gap-3">
        <RefreshCw
          size={28}
          className="animate-spin text-accent"
        />

        <p className="text-sm text-text-muted">
          Loading farm analytics...
        </p>
      </div>
    );
  }

  // ==========================================
  // ERROR STATE
  // ==========================================

  if (error) {
    return (
      <div className="glass flex min-h-[350px] flex-col items-center justify-center gap-4 rounded-2xl p-6 text-center">
        <AlertCircle size={32} className="text-red-400" />

        <h2 className="font-semibold text-text-primary">
          Analytics Unavailable
        </h2>

        <p className="max-w-md text-sm text-text-muted">
          {error}
        </p>

        <button
          onClick={loadAnalytics}
          className="flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-background"
        >
          <RefreshCw size={15} />
          Try Again
        </button>
      </div>
    );
  }

  // ==========================================
  // MAIN UI
  // ==========================================

  return (
    <div className="space-y-6">

      {/* PAGE HEADER */}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <BarChart3
              className="text-accent"
              size={24}
            />

            <h1 className="text-2xl font-bold text-text-primary">
              Farm Analytics
            </h1>
          </div>

          <p className="mt-2 text-sm text-text-muted">
            Visual insights into your smart farm performance
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-xl border border-warning/20 bg-warning/5 px-3 py-2 text-xs text-warning">
            Demo Data
          </span>

          <button
            onClick={loadAnalytics}
            disabled={loading}
            className="flex items-center gap-2 rounded-xl border border-white/10 px-3 py-2 text-xs text-text-muted transition hover:bg-white/5 disabled:opacity-50"
          >
            <RefreshCw size={14} />
            Refresh
          </button>
        </div>
      </div>

      {/* DEMO NOTICE */}

      <div className="rounded-xl border border-warning/20 bg-warning/5 p-4">
        <p className="text-sm leading-relaxed text-text-muted">
          Analytics data is retrieved from the FarmSphere
          Express backend. All current records are simulated.
          Physical ESP32 sensor history is not connected yet.
        </p>
      </div>

      {/* TIME RANGE */}

      <div className="glass flex flex-col gap-4 rounded-2xl p-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-sm font-bold text-text-primary">
            Analytics Overview
          </h2>

          <p className="mt-1 text-xs text-text-muted">
            Currently available sample history: 24-hour dataset
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            disabled
            className="rounded-lg bg-accent px-4 py-2 text-xs font-semibold text-background"
          >
            24 Hours
          </button>

          <button
            disabled
            title="Requires timestamped historical records"
            className="cursor-not-allowed rounded-lg border border-white/10 px-4 py-2 text-xs text-text-muted opacity-40"
          >
            7 Days
          </button>

          <button
            disabled
            title="Requires timestamped historical records"
            className="cursor-not-allowed rounded-lg border border-white/10 px-4 py-2 text-xs text-text-muted opacity-40"
          >
            30 Days
          </button>
        </div>
      </div>

      {/* SUMMARY STATISTICS */}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

        <StatCard
          title="Average Soil Moisture"
          value={soilHistory.length ? averageSoil : "--"}
          unit="%"
          icon={Sprout}
          color="green"
          subtitle="Average of available backend records"
        />

        <StatCard
          title="Current Tank Level"
          value={currentTank}
          unit="%"
          icon={Waves}
          color="cyan"
          subtitle="Current simulated sensor reading"
        />

        <StatCard
          title="Current Pet Bowl Level"
          value={currentBowl}
          unit="%"
          icon={Droplets}
          color="purple"
          subtitle="Current simulated sensor reading"
        />

        <StatCard
          title="Activity Records"
          value={totalActivity}
          unit="events"
          icon={TrendingUp}
          color="amber"
          subtitle="Available backend demo records"
        />

      </div>

      {/* SOIL MOISTURE CHART */}

      <ChartCard
        title="Soil Moisture Trend"
        subtitle="Soil moisture readings retrieved from backend"
      >
        {soilHistory.length > 0 ? (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={soilHistory}>
              <defs>
                <linearGradient
                  id="soilGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="5%"
                    stopColor="#4ade80"
                    stopOpacity={0.35}
                  />

                  <stop
                    offset="95%"
                    stopColor="#4ade80"
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>

              <CartesianGrid
                stroke="#293044"
                strokeDasharray="3 3"
              />

              <XAxis
                dataKey="time"
                stroke="#a1a8ba"
                fontSize={11}
              />

              <YAxis
                domain={[0, 100]}
                stroke="#a1a8ba"
                fontSize={11}
              />

              <Tooltip contentStyle={tooltipStyle} />

              <Area
                type="monotone"
                dataKey="moisture"
                name="Soil Moisture"
                stroke="#4ade80"
                strokeWidth={2}
                fill="url(#soilGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        ) : (
          <EmptyChart message="No soil moisture history is available." />
        )}
      </ChartCard>

      {/* WATER LEVEL CHARTS */}

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">

        <ChartCard
          title="Water Tank History"
          subtitle="Historical tank readings"
        >
          <EmptyChart message="Tank history is not yet available from the backend. Current tank level is shown in the summary card." />
        </ChartCard>

        <ChartCard
          title="Pet Bowl Water History"
          subtitle="Historical pet bowl readings"
        >
          <EmptyChart message="Pet bowl history is not yet available from the backend. Current bowl level is shown in the summary card." />
        </ChartCard>

      </div>

      {/* DEVICE ACTIVITY CHART */}

      <ChartCard
        title="Device Activity Overview"
        subtitle="Counts of available demo activity records by category"
      >
        {activities.length > 0 ? (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={activityData}>
              <CartesianGrid
                stroke="#293044"
                strokeDasharray="3 3"
              />

              <XAxis
                dataKey="name"
                stroke="#a1a8ba"
                fontSize={11}
              />

              <YAxis
                allowDecimals={false}
                stroke="#a1a8ba"
                fontSize={11}
              />

              <Tooltip contentStyle={tooltipStyle} />

              <Bar
                dataKey="pump"
                name="Pump-related Records"
                fill="#67e8f9"
                radius={[5, 5, 0, 0]}
              />

              <Bar
                dataKey="feeder"
                name="Feeder-related Records"
                fill="#a78bfa"
                radius={[5, 5, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <EmptyChart message="No activity records are available." />
        )}
      </ChartCard>

      {/* FOOTER INFORMATION */}

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4"
      >
        <Activity
          size={18}
          className="mt-0.5 shrink-0 text-accent"
        />

        <p className="text-xs leading-relaxed text-text-muted">
          Analytics is connected to the Express backend.
          Soil moisture history and activity records are
          currently simulated. Tank and pet bowl historical
          charts will become available after their history
          APIs are implemented.
        </p>
      </motion.div>

    </div>
  );
}
