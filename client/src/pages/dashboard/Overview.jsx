
import { useEffect, useState } from "react";

import {
  Sprout,
  Droplets,
  Waves,
  ShieldCheck,
  Activity,
  RefreshCw,
  Clock3,
  Wifi,
  AlertTriangle,
} from "lucide-react";

import PageHeader from "../../components/common/PageHeader";
import SensorCard from "../../components/dashboard/SensorCard";
import DeviceStatus from "../../components/dashboard/DeviceStatus";
import RecentActivity from "../../components/dashboard/RecentActivity";
import SoilChart from "../../components/dashboard/SoilChart";

import { getFarmStatus } from "../../iot/farmService";
import { getSensorStatus } from "../../data/farmDemoData";

export default function Overview() {
  const [farm, setFarm] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadDashboard() {
    try {
      setError("");
      const data = await getFarmStatus();
      setFarm(data);
    } catch (err) {
      setError(err.message || "Unable to load farm status.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadDashboard();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <RefreshCw className="animate-spin text-accent" size={28} />
      </div>
    );
  }

  if (error || !farm) {
    return (
      <div className="rounded-2xl border border-red-400/20 bg-red-400/5 p-6">
        <AlertTriangle className="mb-3 text-red-400" size={24} />
        <h2 className="font-semibold">Dashboard unavailable</h2>
        <p className="mt-2 text-sm text-text-muted">{error}</p>
        <button
          onClick={() => {
            setLoading(true);
            loadDashboard();
          }}
          className="mt-5 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-background"
        >
          Retry
        </button>
      </div>
    );
  }

  const sensors = farm.sensors;

  return (
    <div className="mx-auto max-w-7xl space-y-8">

      {/* PAGE HEADER */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <PageHeader
          badge="FARM CONTROL CENTER"
          title="Dashboard Overview"
          description="Monitor your smart farm systems and device activities from one place."
        />

        <button
          onClick={() => {
            setLoading(true);
            loadDashboard();
          }}
          className="mb-8 inline-flex items-center justify-center gap-2 self-start rounded-xl border border-white/10 px-4 py-2.5 text-xs font-medium text-text-muted transition hover:border-cyan-400/30 hover:text-accent sm:self-auto"
        >
          <RefreshCw size={15} />
          Refresh Demo Data
        </button>
      </div>

      {/* DEMO NOTICE */}
      <div className="flex flex-col justify-between gap-4 rounded-2xl border border-amber-400/20 bg-amber-400/[0.04] p-4 sm:flex-row sm:items-center">
        <div className="flex items-start gap-3">
          <div className="rounded-lg bg-amber-400/10 p-2">
            <Activity size={20} className="text-amber-400" />
          </div>

          <div>
            <h3 className="text-sm font-semibold text-amber-300">
              Simulation Mode Active
            </h3>

            <p className="mt-1 text-xs leading-6 text-text-muted">
              All displayed sensor readings and device states
              are demonstration values. Physical ESP32
              integration is pending.
            </p>
          </div>
        </div>

        <span className="flex shrink-0 items-center gap-2 text-xs text-amber-300">
          <span className="h-2 w-2 rounded-full bg-amber-400" />
          DEMO
        </span>
      </div>

      {/* SYSTEM INFORMATION */}
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3 rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3">
        <div className="flex items-center gap-2">
          <Wifi size={15} className="text-amber-400" />
          <span className="text-xs text-text-muted">
            Device: Not connected
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Clock3 size={15} className="text-accent" />
          <span className="text-xs text-text-muted">
            Last demo update: {new Date(farm.device.lastUpdated).toLocaleTimeString()}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Activity size={15} className="text-accent" />
          <span className="text-xs text-text-muted">
            Source: Simulation
          </span>
        </div>
      </div>

      {/* SENSOR CARDS */}
      <section>
        <div className="mb-5">
          <h2 className="text-base font-semibold">
            Environmental Monitoring
          </h2>
          <p className="mt-1 text-xs text-text-muted">
            Overview of sensor readings
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <SensorCard
            title="Soil Moisture"
            value={sensors.soilMoisture}
            icon={Sprout}
            status={getSensorStatus(sensors.soilMoisture, "soil")}
            color="cyan"
            description="Garden soil"
          />

          <SensorCard
            title="Water Tank"
            value={sensors.tankLevel}
            icon={Droplets}
            status={getSensorStatus(sensors.tankLevel, "water")}
            color="purple"
            description="Central tank"
          />

          <SensorCard
            title="Pet Bowl Level"
            value={sensors.petBowlLevel}
            icon={Waves}
            status={getSensorStatus(sensors.petBowlLevel, "bowl")}
            color="green"
            description="Drinking water"
          />

          <SensorCard
            title="Flame Monitor"
            value={sensors.flameDetected ? "ALERT" : "SAFE"}
            unit=""
            icon={ShieldCheck}
            status={sensors.flameDetected ? "Warning" : "Normal"}
            color={sensors.flameDetected ? "amber" : "green"}
            description="Flame sensor"
          />
        </div>
      </section>

      {/* CHART AND ACTIVITIES */}
      <section className="grid gap-5 xl:grid-cols-[1.5fr_1fr]">
        <SoilChart />
        <RecentActivity activities={farm.activities} />
      </section>

      {/* DEVICE STATUS */}
      <section>
        <div className="mb-5">
          <h2 className="text-base font-semibold">
            Connected Device Status
          </h2>

          <p className="mt-1 text-xs text-text-muted">
            Example actuator states and operating modes
          </p>
        </div>

        <DeviceStatus
          actuators={farm.actuators}
          modes={farm.modes}
        />
      </section>

      {/* SAFETY NOTICE */}
      <div className="flex items-start gap-3 rounded-2xl border border-green-400/10 bg-green-400/[0.025] p-5">
        <ShieldCheck size={21} className="mt-0.5 shrink-0 text-green-400" />

        <div>
          <h3 className="text-sm font-semibold text-green-300">
            Safety-first automation
          </h3>

          <p className="mt-2 text-xs leading-7 text-text-muted">
            The physical controller must independently enforce
            safety restrictions, including low-water protection
            and flame-alert pump shutdown. Dashboard status
            is illustrative until the hardware is connected
            and tested.
          </p>
        </div>
      </div>

    </div>
  );
}
