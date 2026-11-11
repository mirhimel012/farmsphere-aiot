
import { motion } from "motion/react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

import { soilHistory } from "../../data/farmDemoData";

export default function SoilMoistureTrend() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass rounded-2xl p-5 sm:p-6"
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="font-semibold text-white">
            Soil Moisture Trend
          </h2>
          <p className="mt-1 text-xs text-text-muted">
            Example moisture readings throughout the day
          </p>
        </div>

        <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-xs text-amber-300">
          Demo Data
        </span>
      </div>

      {/* Chart Legend */}
      <div className="mt-5 flex flex-wrap gap-4 text-xs text-text-muted">
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-cyan-400" />
          Soil Moisture
        </span>

        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-amber-400" />
          Dry Threshold: 30%
        </span>

        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-green-400" />
          Wet Threshold: 55%
        </span>
      </div>

      {/* Chart */}
      <div className="mt-6 h-[260px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={soilHistory}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <defs>
              <linearGradient
                id="soilGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#22d3ee"
                  stopOpacity={0.3}
                />
                <stop
                  offset="100%"
                  stopColor="#22d3ee"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <CartesianGrid
              stroke="rgba(255,255,255,0.07)"
              strokeDasharray="3 3"
              vertical={false}
            />

            <XAxis
              dataKey="time"
              tick={{ fill: "#a1a8ba", fontSize: 11 }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              domain={[0, 100]}
              ticks={[0, 20, 30, 40, 55, 60, 80, 100]}
              tick={{ fill: "#a1a8ba", fontSize: 11 }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) => `${value}%`}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "#10131d",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "12px",
                color: "#f5f3ff",
                fontSize: "12px",
              }}
              formatter={(value) => [`${value}%`, "Soil Moisture"]}
              labelStyle={{ color: "#a1a8ba" }}
            />

            <ReferenceLine
              y={30}
              stroke="#fbbf24"
              strokeDasharray="5 5"
            />

            <ReferenceLine
              y={55}
              stroke="#4ade80"
              strokeDasharray="5 5"
            />

            <Area
              type="monotone"
              dataKey="moisture"
              stroke="#22d3ee"
              strokeWidth={2.5}
              fill="url(#soilGradient)"
              activeDot={{ r: 5, strokeWidth: 0 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <p className="mt-3 text-xs text-text-muted">
        Reference thresholds represent prototype demonstration settings,
        not universal agricultural recommendations.
      </p>
    </motion.section>
  );
}
