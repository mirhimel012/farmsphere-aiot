
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import { soilHistory } from "../../data/farmDemoData";

export default function SoilChart() {
  return (
    <div className="glass rounded-2xl p-5 sm:p-6">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="font-semibold">Soil Moisture History</h2>
          <p className="mt-1 text-xs text-text-muted">
            Illustrative readings throughout the day
          </p>
        </div>

        <span className="rounded-full border border-amber-400/20 bg-amber-400/5 px-3 py-1.5 text-[10px] text-amber-300">
          Demo data
        </span>
      </div>

      <div className="h-[260px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={soilHistory}
            margin={{ top: 10, right: 5, left: -20, bottom: 0 }}
          >
            <defs>
              <linearGradient id="soilGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#67E8F9" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#67E8F9" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid
              stroke="rgba(255,255,255,0.07)"
              vertical={false}
            />

            <XAxis
              dataKey="time"
              stroke="#A1A8BA"
              tickLine={false}
              axisLine={false}
              fontSize={11}
            />

            <YAxis
              domain={[0, 100]}
              stroke="#A1A8BA"
              tickLine={false}
              axisLine={false}
              fontSize={11}
            />

            <Tooltip
              contentStyle={{
                background: "#10131D",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "12px",
                color: "#F5F3FF",
              }}
              formatter={(value) => [`${value}%`, "Soil Moisture"]}
            />

            <Area
              type="monotone"
              dataKey="moisture"
              stroke="#67E8F9"
              strokeWidth={2.5}
              fill="url(#soilGradient)"
              activeDot={{ r: 5, fill: "#67E8F9" }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
