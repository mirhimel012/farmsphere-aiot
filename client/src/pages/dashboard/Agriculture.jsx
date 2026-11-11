import IrrigationHistory from "../../components/dashboard/IrrigationHistory";
import SoilMoistureTrend from "../../components/dashboard/SoilMoistureTrend";
import { useEffect, useState } from "react";
import {
  Sprout,
  Droplets,
  Activity,
  ShieldCheck,
  Clock,
  AlertTriangle,
} from "lucide-react";
import { motion } from "motion/react";

import SensorCard from "../../components/dashboard/SensorCard";
import {
  farmDemoData,
  getSensorStatus,
} from "../../data/farmDemoData";
import { getFarmStatus } from "../../iot/farmService";

export default function Agriculture() {
  const [farmData, setFarmData] = useState(farmDemoData);
  const [loading, setLoading] = useState(true);
  const [mode, setMode] = useState("AUTO");

  useEffect(() => {
    async function loadData() {
      try {
        const data = await getFarmStatus();
        setFarmData(data);
      } catch (error) {
        console.error("Agriculture data error:", error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  const soil = farmData.sensors.soilMoisture;
  const pumpStatus = farmData.actuators.gardenPump;
  const soilStatus = getSensorStatus(soil, "soil");

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <div className="flex items-center gap-2 text-cyan-400">
          <Sprout size={20} />
          <span className="text-xs font-semibold uppercase tracking-widest">
            Smart Agriculture
          </span>
        </div>

        <h1 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
          Agriculture & Irrigation
        </h1>

        <p className="mt-2 text-sm text-text-muted">
          Monitor soil conditions and manage your garden irrigation system.
        </p>
      </div>

      {/* Demo Notice */}
      <div className="flex items-start gap-3 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4">
        <AlertTriangle className="mt-0.5 shrink-0 text-amber-400" size={20} />
        <div>
          <p className="text-sm font-semibold text-amber-300">
            Simulation Mode Active
          </p>
          <p className="mt-1 text-xs leading-relaxed text-text-muted">
            These are demonstration readings. The physical ESP32 and garden
            pump are not connected to this dashboard yet.
          </p>
        </div>
      </div>

      {/* Soil Monitoring */}
      <section>
        <div className="mb-4 flex items-center gap-2">
          <Activity size={18} className="text-cyan-400" />
          <h2 className="font-semibold text-white">
            Soil Monitoring
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          <SensorCard
            title="Soil Moisture"
            value={soil}
            unit="%"
            icon={Sprout}
            status={soilStatus}
            color="green"
            description="Demo sensor reading"
          />

          <SensorCard
            title="Garden Water Pump"
            value={pumpStatus}
            unit=""
            icon={Droplets}
            status="Simulation"
            color="cyan"
            description="Relay 1 · GPIO 23"
          />

          <SensorCard
            title="Water Tank Level"
            value={farmData.sensors.tankLevel}
            unit="%"
            icon={Droplets}
            status="Demo reading"
            color="purple"
            description="Tank sensor · Planned GPIO 35"
          />
        </div>
        {/* Soil Moisture Trend */}
        <SoilMoistureTrend />
      </section>

      {/* Irrigation Control */}
      <section className="glass rounded-2xl p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="font-semibold text-white">
              Irrigation Control
            </h2>
            <p className="mt-1 text-xs text-text-muted">
              Select a demonstration operating mode
            </p>
          </div>

          <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-xs text-amber-300">
            Demo Only
          </span>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          {["AUTO", "MANUAL"].map((item) => (
            <button
              key={item}
              onClick={() => setMode(item)}
              className={`rounded-xl border p-4 text-sm font-semibold transition ${
                mode === item
                  ? "border-cyan-400/40 bg-cyan-400/10 text-cyan-300"
                  : "border-white/10 bg-white/[0.02] text-text-muted hover:bg-white/5"
              }`}
            >
              {item === "AUTO" ? "Automatic Mode" : "Manual Mode"}
            </button>
          ))}
        </div>

        <div className="mt-4 rounded-xl bg-white/[0.03] p-4">
          <div className="flex items-center gap-2">
            <ShieldCheck size={18} className="text-green-400" />
            <p className="text-sm font-medium text-white">
              {mode === "AUTO"
                ? "Automatic Irrigation Selected"
                : "Manual Control Selected"}
            </p>
          </div>

          <p className="mt-2 text-xs leading-relaxed text-text-muted">
            {mode === "AUTO"
              ? "The prototype automatically evaluates soil moisture before irrigation."
              : "Manual mode is currently a UI demonstration. Physical pump commands are disabled."}
          </p>
        </div>

        <p className="mt-4 flex items-center gap-2 text-xs text-amber-300">
          <AlertTriangle size={14} />
          Changing this mode does not control the physical pump.
        </p>
      </section>

      {/* Irrigation Logic */}
      <section>
        <h2 className="mb-4 font-semibold text-white">
          Irrigation Logic
        </h2>

        <div className="grid gap-4 sm:grid-cols-3">
          {[
            {
              title: "Dry Soil",
              value: "≤ 30%",
              description: "Prototype dry-soil threshold",
              color: "text-amber-400",
            },
            {
              title: "Sufficient Moisture",
              value: "≥ 55%",
              description: "Prototype wet-soil threshold",
              color: "text-green-400",
            },
            {
              title: "Maximum Pump Run",
              value: "4 sec",
              description: "Prototype safety limit",
              color: "text-cyan-400",
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass rounded-xl p-5"
            >
              <p className="text-xs text-text-muted">
                {item.title}
              </p>
              <p className={`mt-3 text-2xl font-bold ${item.color}`}>
                {item.value}
              </p>
              <p className="mt-2 text-xs text-text-muted">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Irrigation History */}
        <IrrigationHistory />

      {/* Safety Information */}
      <section className="glass rounded-2xl p-5">
        <div className="flex items-center gap-2">
          <ShieldCheck className="text-green-400" size={20} />
          <h2 className="font-semibold text-white">
            Irrigation Safety
          </h2>
        </div>

        <div className="mt-4 space-y-3 text-sm text-text-muted">
          <p>• Pump operation should stop when sufficient soil moisture is reached.</p>
          <p>• Low water tank level must block irrigation.</p>
          <p>• Flame detection must independently block pump operation.</p>
          <p>• ESP32 should enforce pump safety limits independently of the website.</p>
        </div>
      </section>

      <div className="flex items-center gap-2 text-xs text-text-muted">
        <Clock size={14} />
        {loading ? "Loading demonstration data..." : "Demo data loaded"}
      </div>
    </div>
  );
}
