import SafetyHistory from "../../components/dashboard/SafetyHistory";
import { useEffect, useState } from "react";
import {
  ShieldCheck,
  Flame,
  AlertTriangle,
  Activity,
  Droplets,
  Clock,
  CheckCircle2,
  Zap,
} from "lucide-react";

import SensorCard from "../../components/dashboard/SensorCard";
import { farmDemoData } from "../../data/farmDemoData";
import { getFarmStatus } from "../../iot/farmService";

export default function FarmSafety() {
  const [farmData, setFarmData] = useState(farmDemoData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await getFarmStatus();
        setFarmData(data);
      } catch (error) {
        console.error("Farm safety data error:", error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  const flameDetected = farmData.sensors.flameDetected;

  const flameStatus = flameDetected ? "FIRE ALERT" : "SAFE";

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <div className="flex items-center gap-2 text-cyan-400">
          <ShieldCheck size={20} />
          <span className="text-xs font-semibold uppercase tracking-widest">
            Farm Safety System
          </span>
        </div>

        <h1 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
          Safety & Fire Detection
        </h1>

        <p className="mt-2 text-sm text-text-muted">
          Monitor flame detection and farm equipment safety conditions.
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
            Flame detection status is demonstration data. The physical
            ESP32 flame sensor is not connected to this dashboard.
          </p>
        </div>
      </div>

      {/* Flame Detection Status */}
      <section>
        <div className="mb-4 flex items-center gap-2">
          <Activity size={18} className="text-cyan-400" />
          <h2 className="font-semibold text-white">
            Flame Detection Monitoring
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <SensorCard
            title="Flame Sensor"
            value={flameStatus}
            unit=""
            icon={Flame}
            status="Simulation"
            color={flameDetected ? "amber" : "green"}
            description="Digital sensor · GPIO 27"
          />

          <div className="glass rounded-2xl p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-text-muted">
                  Overall Safety Status
                </p>

                <p
                  className={`mt-4 text-2xl font-bold ${
                    flameDetected
                      ? "text-amber-400"
                      : "text-green-400"
                  }`}
                >
                  {flameDetected ? "WARNING" : "NORMAL"}
                </p>
              </div>

              <div
                className={`rounded-xl border p-3 ${
                  flameDetected
                    ? "border-amber-400/20 bg-amber-400/10 text-amber-400"
                    : "border-green-400/20 bg-green-400/10 text-green-400"
                }`}
              >
                {flameDetected ? (
                  <AlertTriangle size={24} />
                ) : (
                  <ShieldCheck size={24} />
                )}
              </div>
            </div>

            <p className="mt-5 text-xs text-text-muted">
              {flameDetected
                ? "The demonstration data indicates flame detection."
                : "No flame is indicated by the current demonstration data."}
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Alert */}
      <section
        className={`rounded-2xl border p-5 sm:p-6 ${
          flameDetected
            ? "border-red-400/30 bg-red-400/5"
            : "border-green-400/20 bg-green-400/5"
        }`}
      >
        <div className="flex items-start gap-3">
          {flameDetected ? (
            <AlertTriangle
              className="mt-1 shrink-0 text-red-400"
              size={24}
            />
          ) : (
            <CheckCircle2
              className="mt-1 shrink-0 text-green-400"
              size={24}
            />
          )}

          <div>
            <h2
              className={`font-semibold ${
                flameDetected ? "text-red-300" : "text-green-300"
              }`}
            >
              {flameDetected
                ? "Fire Detection Alert"
                : "No Active Demo Alert"}
            </h2>

            <p className="mt-2 text-sm leading-relaxed text-text-muted">
              {flameDetected
                ? "The demo sensor indicates possible flame detection. Follow your emergency response procedure and verify the physical environment."
                : "The current demonstration reading does not indicate flame detection. This does not confirm that the physical farm is safe."}
            </p>
          </div>
        </div>
      </section>

      {/* Safety Components */}
      <section>
        <div className="mb-4 flex items-center gap-2">
          <ShieldCheck size={18} className="text-cyan-400" />
          <h2 className="font-semibold text-white">
            Safety Components
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          <div className="glass rounded-xl p-5">
            <Flame className="text-amber-400" size={22} />

            <h3 className="mt-4 text-sm font-semibold text-white">
              Flame Sensor
            </h3>

            <p className="mt-2 text-xs text-text-muted">
              Digital flame detection input.
            </p>

            <p className="mt-3 text-xs text-cyan-400">
              GPIO 27
            </p>
          </div>

          <div className="glass rounded-xl p-5">
            <Droplets className="text-cyan-400" size={22} />

            <h3 className="mt-4 text-sm font-semibold text-white">
              Garden Pump Protection
            </h3>

            <p className="mt-2 text-xs text-text-muted">
              Flame detection must independently block garden pump operation.
            </p>

            <p className="mt-3 text-xs text-cyan-400">
              Relay 1 · GPIO 23
            </p>
          </div>

          <div className="glass rounded-xl p-5">
            <Zap className="text-violet-400" size={22} />

            <h3 className="mt-4 text-sm font-semibold text-white">
              ESP32 Safety Logic
            </h3>

            <p className="mt-2 text-xs text-text-muted">
              Safety conditions must be enforced locally by the controller.
            </p>

            <p className="mt-3 text-xs text-cyan-400">
              ESP32 DevKit V1
            </p>
          </div>
        </div>
      </section>

      {/* Safety Guidelines */}
      <section className="glass rounded-2xl p-5 sm:p-6">
        <div className="flex items-center gap-2">
          <ShieldCheck size={20} className="text-green-400" />

          <h2 className="font-semibold text-white">
            Farm Safety Guidelines
          </h2>
        </div>

        <div className="mt-4 space-y-3 text-sm text-text-muted">
          <p>• Flame detection must trigger the ESP32 safety response.</p>
          <p>• Garden pump operation must be blocked when flame is detected.</p>
          <p>• The controller must enforce safety independently of the website.</p>
          <p>• Never rely on a dashboard status as proof that the physical environment is safe.</p>
          <p>• Follow local emergency procedures if an actual fire is suspected.</p>
        </div>
      </section>

      {/* Loading Status */}
      <div className="flex items-center gap-2 text-xs text-text-muted">
        <Clock size={14} />
        {loading ? "Loading demonstration data..." : "Demo data loaded"}
      </div>
      {/* Safety Event History */}
        <SafetyHistory />
    </div>
  );
}
