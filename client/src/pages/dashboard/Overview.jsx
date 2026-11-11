
import {
  Sprout,
  Droplets,
  PawPrint,
  ShieldCheck,
  Activity,
} from "lucide-react";

import PageHeader from "../../components/common/PageHeader";

const systems = [
  {
    title: "Smart Agriculture",
    description: "Soil monitoring and garden irrigation",
    icon: Sprout,
  },
  {
    title: "Animal Care",
    description: "Fish and shared pet feeding",
    icon: PawPrint,
  },
  {
    title: "Water Management",
    description: "Central tank and water pumps",
    icon: Droplets,
  },
  {
    title: "Farm Safety",
    description: "Flame monitoring and safety events",
    icon: ShieldCheck,
  },
];

export default function Overview() {
  return (
    <div className="mx-auto max-w-7xl">
      <PageHeader
        badge="FARM CONTROL CENTER"
        title="Dashboard Overview"
        description="Monitor your FarmSphere systems from one place."
      />

      <div className="mb-8 rounded-2xl border border-amber-400/20 bg-amber-400/5 p-4">
        <div className="flex items-start gap-3">
          <Activity className="mt-1 shrink-0 text-amber-400" size={20} />

          <div>
            <h3 className="text-sm font-semibold text-amber-300">
              Development Demo
            </h3>

            <p className="mt-1 text-xs leading-6 text-text-muted">
              The hardware integration is not connected yet.
              Live sensor readings and device controls will
              be added after physical testing.
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {systems.map((system) => {
          const Icon = system.icon;

          return (
            <div
              key={system.title}
              className="glass glass-hover rounded-2xl p-6"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10">
                <Icon className="text-accent" size={22} />
              </div>

              <h3 className="font-semibold text-text-primary">
                {system.title}
              </h3>

              <p className="mt-2 text-xs leading-6 text-text-muted">
                {system.description}
              </p>

              <p className="mt-5 text-xs text-amber-300">
                Integration pending
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
