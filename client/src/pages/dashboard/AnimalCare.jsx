import FeedingHistory from "../../components/dashboard/FeedingHistory";
import PetWaterLevel from "../../components/dashboard/PetWaterLevel";
import { useEffect, useState } from "react";
import {
  Fish,
  PawPrint,
  Droplets,
  Clock,
  ShieldCheck,
  AlertTriangle,
  Activity,
} from "lucide-react";

import SensorCard from "../../components/dashboard/SensorCard";
import { farmDemoData } from "../../data/farmDemoData";
import { getFarmStatus } from "../../iot/farmService";

export default function AnimalCare() {
  const [farmData, setFarmData] = useState(farmDemoData);
  const [loading, setLoading] = useState(true);
  const [fishMode, setFishMode] = useState("AUTO");
  const [petMode, setPetMode] = useState("AUTO");

  useEffect(() => {
    async function loadData() {
      try {
        const data = await getFarmStatus();
        setFarmData(data);
      } catch (error) {
        console.error("Animal care data error:", error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  const sensors = farmData.sensors;
  const actuators = farmData.actuators;

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <div className="flex items-center gap-2 text-cyan-400">
          <PawPrint size={20} />
          <span className="text-xs font-semibold uppercase tracking-widest">
            Smart Animal Care
          </span>
        </div>

        <h1 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
          Animal Care & Feeding
        </h1>

        <p className="mt-2 text-sm text-text-muted">
          Monitor automatic feeding systems and pet water availability.
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
            All displayed readings and feeding states are demonstration data.
            Physical ESP32 feeding and water systems are not connected.
          </p>
        </div>
      </div>

      {/* Monitoring Cards */}
      <section>
        <div className="mb-4 flex items-center gap-2">
          <Activity size={18} className="text-cyan-400" />
          <h2 className="font-semibold text-white">
            Animal Care Monitoring
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <SensorCard
            title="Fish Feeder"
            value={actuators.fishFeeder}
            unit=""
            icon={Fish}
            status="Simulation"
            color="cyan"
            description="Servo 1 · GPIO 18"
          />

          <SensorCard
            title="Pet Feeder"
            value={actuators.petFeeder}
            unit=""
            icon={PawPrint}
            status="Simulation"
            color="purple"
            description="Servo 2 · GPIO 19"
          />

          <SensorCard
            title="Pet Bowl Water"
            value={sensors.petBowlLevel}
            unit="%"
            icon={Droplets}
            status="Demo reading"
            color="green"
            description="Bowl level sensor · GPIO 32 planned"
          />

          <SensorCard
            title="Pet Water Pump"
            value={actuators.petPump}
            unit=""
            icon={Droplets}
            status="Simulation"
            color="amber"
            description="Relay 2 · GPIO 26"
          />
        </div>
      </section>

      {/* Feeding Controls */}
      <section>
        <div className="mb-4">
          <h2 className="font-semibold text-white">
            Feeding Management
          </h2>

          <p className="mt-1 text-xs text-text-muted">
            Select demonstration operating modes for each feeder.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {/* Fish Feeder */}
          <div className="glass rounded-2xl p-5">
            <div className="flex items-center gap-3">
              <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-400">
                <Fish size={22} />
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  Smart Fish Feeder
                </h3>
                <p className="mt-1 text-xs text-text-muted">
                  Automatic aquarium feeding
                </p>
              </div>
            </div>

            <div className="mt-5 rounded-xl bg-white/[0.03] p-4">
              <p className="text-xs text-text-muted">
                Prototype feeding interval
              </p>

              <p className="mt-2 text-2xl font-bold text-cyan-400">
                12 Seconds
              </p>

              <p className="mt-1 text-xs text-text-muted">
                Servo motor · GPIO 18
              </p>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              {["AUTO", "MANUAL"].map((item) => (
                <button
                  key={item}
                  onClick={() => setFishMode(item)}
                  className={`rounded-xl border p-3 text-xs font-semibold transition ${
                    fishMode === item
                      ? "border-cyan-400/40 bg-cyan-400/10 text-cyan-300"
                      : "border-white/10 text-text-muted hover:bg-white/5"
                  }`}
                >
                  {item === "AUTO" ? "Automatic" : "Manual"}
                </button>
              ))}
            </div>

            <p className="mt-3 text-xs text-text-muted">
              Selected mode: {fishMode}
            </p>
          </div>

          {/* Pet Feeder */}
          <div className="glass rounded-2xl p-5">
            <div className="flex items-center gap-3">
              <div className="rounded-xl border border-violet-400/20 bg-violet-400/10 p-3 text-violet-400">
                <PawPrint size={22} />
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  Shared Pet Feeder
                </h3>
                <p className="mt-1 text-xs text-text-muted">
                  Cat and dog feeding system
                </p>
              </div>
            </div>

            <div className="mt-5 rounded-xl bg-white/[0.03] p-4">
              <p className="text-xs text-text-muted">
                Prototype feeding interval
              </p>

              <p className="mt-2 text-2xl font-bold text-violet-400">
                18 Seconds
              </p>

              <p className="mt-1 text-xs text-text-muted">
                Servo motor · GPIO 19
              </p>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              {["AUTO", "MANUAL"].map((item) => (
                <button
                  key={item}
                  onClick={() => setPetMode(item)}
                  className={`rounded-xl border p-3 text-xs font-semibold transition ${
                    petMode === item
                      ? "border-violet-400/40 bg-violet-400/10 text-violet-300"
                      : "border-white/10 text-text-muted hover:bg-white/5"
                  }`}
                >
                  {item === "AUTO" ? "Automatic" : "Manual"}
                </button>
              ))}
            </div>

            <p className="mt-3 text-xs text-text-muted">
              Selected mode: {petMode}
            </p>
          </div>
        </div>
      </section>

        {/* Pet Water Management */}
        <PetWaterLevel
        level={sensors.petBowlLevel}
        pumpStatus={actuators.petPump}
        />


      {/* Feeding History */}
        <FeedingHistory />

      {/* Feeding Safety */}
      <section className="glass rounded-2xl p-5">
        <div className="flex items-center gap-2">
          <ShieldCheck size={20} className="text-green-400" />
          <h2 className="font-semibold text-white">
            Animal Care Safety
          </h2>
        </div>

        <div className="mt-4 space-y-3 text-sm text-text-muted">
          <p>• Feeding intervals shown here are prototype simulation settings.</p>
          <p>• Automatic feeding must follow a suitable real-world feeding schedule before deployment.</p>
          <p>• Low pet bowl water level should trigger the appropriate water-management logic.</p>
          <p>• Physical servo and pump commands must remain protected by ESP32 safety checks.</p>
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
