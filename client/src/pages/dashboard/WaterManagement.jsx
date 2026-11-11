import WaterHistory from "../../components/dashboard/WaterHistory";
import WaterTankVisualization from "../../components/dashboard/WaterTankVisualization";
import { useEffect, useState } from "react";
import {
  Droplets,
  Waves,
  Sprout,
  PawPrint,
  Activity,
  ShieldCheck,
  AlertTriangle,
  Clock,
} from "lucide-react";

import SensorCard from "../../components/dashboard/SensorCard";
import { farmDemoData } from "../../data/farmDemoData";
import { getFarmStatus } from "../../iot/farmService";

export default function WaterManagement() {
  const [farmData, setFarmData] = useState(farmDemoData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await getFarmStatus();
        setFarmData(data);
      } catch (error) {
        console.error("Water management data error:", error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  const sensors = farmData.sensors;
  const actuators = farmData.actuators;

  const tankLevel = Math.min(
    100,
    Math.max(0, Number(sensors.tankLevel) || 0)
  );

  const bowlLevel = Math.min(
    100,
    Math.max(0, Number(sensors.petBowlLevel) || 0)
  );

  const tankStatus =
    tankLevel <= 15
      ? "Critical"
      : tankLevel <= 30
        ? "Low"
        : "Available";

  const bowlStatus =
    bowlLevel <= 30
      ? "Low"
      : bowlLevel >= 75
        ? "Full"
        : "Available";

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <div className="flex items-center gap-2 text-cyan-400">
          <Droplets size={20} />
          <span className="text-xs font-semibold uppercase tracking-widest">
            Smart Water Management
          </span>
        </div>

        <h1 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
          Water Management
        </h1>

        <p className="mt-2 text-sm text-text-muted">
          Monitor water availability and pump activity across your smart farm.
        </p>
      </div>

      {/* Demo Notice */}
      <div className="flex items-start gap-3 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4">
        <AlertTriangle
          className="mt-0.5 shrink-0 text-amber-400"
          size={20}
        />

        <div>
          <p className="text-sm font-semibold text-amber-300">
            Simulation Mode Active
          </p>

          <p className="mt-1 text-xs leading-relaxed text-text-muted">
            All water-level readings and pump states are demonstration data.
            Physical ESP32 integration is pending.
          </p>
        </div>
      </div>

      {/* Water Monitoring */}
      <section>
        <div className="mb-4 flex items-center gap-2">
          <Activity size={18} className="text-cyan-400" />
          <h2 className="font-semibold text-white">
            Water Monitoring
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          <SensorCard
            title="Main Water Tank"
            value={tankLevel}
            unit="%"
            icon={Droplets}
            status={tankStatus}
            color="cyan"
            description="Tank sensor · GPIO 35 planned"
          />

          <SensorCard
            title="Pet Bowl Water"
            value={bowlLevel}
            unit="%"
            icon={PawPrint}
            status={bowlStatus}
            color="green"
            description="Bowl sensor · GPIO 32 planned"
          />

          <SensorCard
            title="Garden Water Pump"
            value={actuators.gardenPump}
            unit=""
            icon={Sprout}
            status="Simulation"
            color="purple"
            description="Relay 1 · GPIO 23"
          />
        </div>
      </section>

        {/* Advanced Tank Visualization */}
        <WaterTankVisualization level={sensors.tankLevel} />

      {/* Pump Monitoring */}
      <section>
        <div className="mb-4 flex items-center gap-2">
          <Activity size={18} className="text-cyan-400" />
          <h2 className="font-semibold text-white">
            Pump Monitoring
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="glass rounded-2xl p-5">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-green-400/10 p-3 text-green-400">
                <Sprout size={21} />
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  Garden Water Pump
                </h3>

                <p className="mt-1 text-xs text-text-muted">
                  Relay 1 · GPIO 23
                </p>
              </div>
            </div>

            <p className="mt-5 text-2xl font-bold text-white">
              {actuators.gardenPump}
            </p>

            <p className="mt-1 text-xs text-text-muted">
              Demonstration pump state
            </p>
          </div>

          <div className="glass rounded-2xl p-5">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-violet-400/10 p-3 text-violet-400">
                <PawPrint size={21} />
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  Pet Water Pump
                </h3>

                <p className="mt-1 text-xs text-text-muted">
                  Relay 2 · GPIO 26
                </p>
              </div>
            </div>

            <p className="mt-5 text-2xl font-bold text-white">
              {actuators.petPump}
            </p>

            <p className="mt-1 text-xs text-text-muted">
              Demonstration pump state
            </p>
          </div>
        </div>
      </section>

    {/* Water Activity History */}
    <WaterHistory />

      {/* Safety Information */}
      <section className="glass rounded-2xl p-5">
        <div className="flex items-center gap-2">
          <ShieldCheck size={20} className="text-green-400" />
          <h2 className="font-semibold text-white">
            Water System Safety
          </h2>
        </div>

        <div className="mt-4 space-y-3 text-sm text-text-muted">
          <p>• Irrigation must be blocked when the main tank level is critically low.</p>
          <p>• Pet water management should respond to low bowl-level readings.</p>
          <p>• Pump operation should follow the prototype maximum runtime and cooldown limits.</p>
          <p>• ESP32 must enforce safety conditions independently of the website.</p>
          <p>• Flame detection must independently block garden pump operation.</p>
        </div>
      </section>

      {/* Loading Status */}
      <div className="flex items-center gap-2 text-xs text-text-muted">
        <Clock size={14} />
        {loading ? "Loading demonstration data..." : "Demo data loaded"}
      </div>
    </div>
  );
}
