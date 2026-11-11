
import {
  Sprout,
  PawPrint,
  Droplets,
  ShieldCheck,
  ChartNoAxesCombined,
  Settings,
  Info,
} from "lucide-react";

import PageHeader from "../../components/common/PageHeader";

function ModulePlaceholder({ title, description, icon: Icon }) {
  return (
    <div className="mx-auto max-w-7xl">
      <PageHeader
        badge="FARMSPHERE AIoT"
        title={title}
        description={description}
      />

      <div className="glass flex min-h-[320px] flex-col items-center justify-center rounded-2xl p-8 text-center">
        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-400/10">
          <Icon size={32} className="text-accent" />
        </div>

        <h2 className="text-xl font-semibold">
          Module Under Development
        </h2>

        <p className="mt-3 max-w-md text-sm leading-7 text-text-muted">
          This section will be developed in the next phase.
          The hardware integration will be added through
          our separate IoT service layer.
        </p>

        <span className="mt-6 rounded-full border border-amber-400/20 bg-amber-400/5 px-4 py-2 text-xs text-amber-300">
          Integration pending
        </span>
      </div>
    </div>
  );
}

export function Agriculture() {
  return (
    <ModulePlaceholder
      title="Smart Agriculture"
      description="Soil moisture monitoring and automated garden irrigation."
      icon={Sprout}
    />
  );
}

export function AnimalCare() {
  return (
    <ModulePlaceholder
      title="Animal Care"
      description="Fish feeding, shared pet feeding and water supply."
      icon={PawPrint}
    />
  );
}

export function WaterManagement() {
  return (
    <ModulePlaceholder
      title="Water Management"
      description="Central tank monitoring and pump management."
      icon={Droplets}
    />
  );
}

export function FarmSafety() {
  return (
    <ModulePlaceholder
      title="Farm Safety"
      description="Flame monitoring and safety event management."
      icon={ShieldCheck}
    />
  );
}

export function Analytics() {
  return (
    <ModulePlaceholder
      title="Analytics & History"
      description="Historical sensor measurements and device activity."
      icon={ChartNoAxesCombined}
    />
  );
}

export function SettingsPage() {
  return (
    <ModulePlaceholder
      title="System Settings"
      description="Device configuration and integration preferences."
      icon={Settings}
    />
  );
}

export function About() {
  return (
    <ModulePlaceholder
      title="About FarmSphere"
      description="Learn about our project, technology and development team."
      icon={Info}
    />
  );
}
