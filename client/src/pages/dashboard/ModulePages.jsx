
import { useEffect, useState } from "react";

import {
  Sprout,
  PawPrint,
  Droplets,
  ShieldCheck,
  ChartNoAxesCombined,
  Info,
  Cpu,
  Wifi,
  Bell,
  Activity,
  RefreshCw,
  Database,
  Shield,
  CheckCircle2,
} from "lucide-react";

import PageHeader from "../../components/common/PageHeader";

// ==========================================
// REUSABLE MODULE PLACEHOLDER
// ==========================================

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

// ==========================================
// OTHER MODULE EXPORTS
// ==========================================

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

// ==========================================
// REUSABLE SETTINGS SECTION
// ==========================================

function SettingsSection({
  title,
  description,
  icon: Icon,
  children,
}) {
  return (
    <section className="glass rounded-2xl p-5 sm:p-6">
      <div className="mb-6 flex items-start gap-3">
        <div className="rounded-xl bg-accent/10 p-2.5 text-accent">
          <Icon size={20} />
        </div>

        <div>
          <h2 className="font-bold text-text-primary">
            {title}
          </h2>

          <p className="mt-1 text-xs leading-relaxed text-text-muted">
            {description}
          </p>
        </div>
      </div>

      <div className="space-y-5">
        {children}
      </div>
    </section>
  );
}

// ==========================================
// SETTINGS TOGGLE
// ==========================================

function SettingsToggle({
  label,
  description,
  enabled,
  onChange,
}) {
  return (
    <div className="flex items-center justify-between gap-4 py-1">
      <div className="min-w-0 flex-1">
        <h3 className="text-sm font-semibold text-text-primary">
          {label}
        </h3>

        <p className="mt-1 text-xs leading-relaxed text-text-muted">
          {description}
        </p>
      </div>

      <button
        type="button"
        role="switch"
        aria-checked={enabled}
        aria-label={label}
        onClick={() => onChange(!enabled)}
        className={`
          relative inline-flex h-7 w-12 shrink-0
          cursor-pointer items-center rounded-full
          border transition-all duration-300 ease-in-out
          focus-visible:outline-none
          focus-visible:ring-2 focus-visible:ring-accent
          focus-visible:ring-offset-2
          focus-visible:ring-offset-background
          ${
            enabled
              ? "border-accent/50 bg-accent shadow-[0_0_16px_rgba(103,232,249,0.25)]"
              : "border-white/15 bg-white/15"
          }
        `}
      >
        <span
          className={`
            pointer-events-none inline-block
            h-5 w-5 shrink-0 rounded-full
            bg-white shadow-md
            transition-transform duration-300 ease-in-out
            ${
              enabled
                ? "translate-x-6"
                : "translate-x-1"
            }
          `}
        />
      </button>
    </div>
  );
}

// ==========================================
// SETTINGS SELECT
// ==========================================

function SettingsSelect({
  label,
  description,
  value,
  onChange,
  options,
}) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h3 className="text-sm font-medium text-text-primary">
          {label}
        </h3>

        <p className="mt-1 text-xs text-text-muted">
          {description}
        </p>
      </div>

      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-xl border border-white/10 bg-[#10131d] px-3 py-2.5 text-sm text-text-primary outline-none transition-colors focus:border-accent sm:w-48"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

// ==========================================
// SETTINGS STORAGE
// ==========================================

const SETTINGS_STORAGE_KEY = "farmsphere-dashboard-settings";

const defaultSettings = {
  preferences: {
    alerts: true,
    safetyAlerts: true,
    activityUpdates: false,
    sound: false,
  },
  temperatureUnit: "celsius",
  refreshInterval: "5",
};

// Load saved settings from browser storage
function loadSettings() {
  try {
    const saved = localStorage.getItem(SETTINGS_STORAGE_KEY);

    if (!saved) {
      return {
        ...defaultSettings,
        preferences: { ...defaultSettings.preferences },
      };
    }

    const parsed = JSON.parse(saved);

    const validPreferences = {};

    Object.keys(defaultSettings.preferences).forEach((key) => {
      validPreferences[key] =
        typeof parsed.preferences?.[key] === "boolean"
          ? parsed.preferences[key]
          : defaultSettings.preferences[key];
    });

    return {
      preferences: validPreferences,

      temperatureUnit: ["celsius", "fahrenheit"].includes(
        parsed.temperatureUnit
      )
        ? parsed.temperatureUnit
        : defaultSettings.temperatureUnit,

      refreshInterval: ["5", "10", "30", "60"].includes(
        String(parsed.refreshInterval)
      )
        ? String(parsed.refreshInterval)
        : defaultSettings.refreshInterval,
    };
  } catch (error) {
    console.error("Could not load saved settings:", error);

    return {
      ...defaultSettings,
      preferences: { ...defaultSettings.preferences },
    };
  }
}

// ==========================================
// MAIN SETTINGS PAGE
// ==========================================

export function SettingsPage() {
  const [settings, setSettings] = useState(loadSettings);

  const {
    preferences,
    temperatureUnit,
    refreshInterval,
  } = settings;

  // Save settings whenever they change
  useEffect(() => {
    try {
      localStorage.setItem(
        SETTINGS_STORAGE_KEY,
        JSON.stringify(settings)
      );
    } catch (error) {
      console.error("Could not save settings:", error);
    }
  }, [settings]);

  // Update notification preferences
  const updatePreference = (key, value) => {
    setSettings((previous) => ({
      ...previous,
      preferences: {
        ...previous.preferences,
        [key]: value,
      },
    }));
  };

  // Update temperature unit
  const setTemperatureUnit = (value) => {
    setSettings((previous) => ({
      ...previous,
      temperatureUnit: value,
    }));
  };

  // Update refresh interval
  const setRefreshInterval = (value) => {
    setSettings((previous) => ({
      ...previous,
      refreshInterval: value,
    }));
  };

  return (
    <div className="mx-auto max-w-7xl space-y-6">

      {/* PAGE HEADER */}
      <PageHeader
        badge="FARMSPHERE AIoT"
        title="System Settings"
        description="Manage dashboard preferences, monitoring options and system information."
      />

      {/* DEMO MODE NOTICE */}
      <div className="flex items-start gap-3 rounded-xl border border-warning/20 bg-warning/5 p-4">
        <Info
          size={20}
          className="mt-0.5 shrink-0 text-warning"
        />

        <div>
          <h3 className="text-sm font-semibold text-text-primary">
            Configuration Demo Mode
          </h3>

          <p className="mt-1 text-xs leading-relaxed text-text-muted">
            Settings are saved locally in this browser.
            They do not change physical ESP32 hardware
            configurations or backend settings.
          </p>
        </div>
      </div>

      {/* DEVICE INFORMATION */}
      <SettingsSection
        title="Device Information"
        description="FarmSphere controller identification and connection details."
        icon={Cpu}
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
            <p className="text-xs text-text-muted">
              Controller Name
            </p>

            <p className="mt-2 text-sm font-semibold text-text-primary">
              FarmSphere Main Controller
            </p>
          </div>

          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
            <p className="text-xs text-text-muted">
              Device ID
            </p>

            <p className="mt-2 break-all text-sm font-semibold text-text-primary">
              farmsphere-esp32-01
            </p>
          </div>

          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
            <p className="text-xs text-text-muted">
              Hardware
            </p>

            <p className="mt-2 text-sm font-semibold text-text-primary">
              ESP32 DevKit V1
            </p>
          </div>

          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
            <p className="text-xs text-text-muted">
              Connection Status
            </p>

            <div className="mt-2 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-warning" />

              <span className="text-sm font-semibold text-warning">
                Not Connected
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-xl bg-white/[0.03] p-3">
          <Wifi size={17} className="text-warning" />

          <p className="text-xs text-text-muted">
            Physical ESP32 connection is pending.
          </p>
        </div>
      </SettingsSection>

      {/* NOTIFICATION PREFERENCES */}
      <SettingsSection
        title="Notification Preferences"
        description="Choose which dashboard notification categories you want enabled."
        icon={Bell}
      >
        <SettingsToggle
          label="General Notifications"
          description="Enable general dashboard notification preferences."
          enabled={preferences.alerts}
          onChange={(value) => updatePreference("alerts", value)}
        />

        <div className="border-t border-white/5" />

        <SettingsToggle
          label="Safety Alerts"
          description="Enable the safety alert preference in this interface."
          enabled={preferences.safetyAlerts}
          onChange={(value) => updatePreference("safetyAlerts", value)}
        />

        <div className="border-t border-white/5" />

        <SettingsToggle
          label="Activity Updates"
          description="Enable activity update preferences."
          enabled={preferences.activityUpdates}
          onChange={(value) => updatePreference("activityUpdates", value)}
        />

        <div className="border-t border-white/5" />

        <SettingsToggle
          label="Sound Effects"
          description="Enable the sound preference for future integration."
          enabled={preferences.sound}
          onChange={(value) => updatePreference("sound", value)}
        />
      </SettingsSection>

      {/* MONITORING PREFERENCES */}
      <SettingsSection
        title="Monitoring Preferences"
        description="Configure local dashboard display preferences."
        icon={Activity}
      >
        <SettingsSelect
          label="Temperature Unit"
          description="Preferred unit for future temperature displays."
          value={temperatureUnit}
          onChange={setTemperatureUnit}
          options={[
            { label: "Celsius (°C)", value: "celsius" },
            { label: "Fahrenheit (°F)", value: "fahrenheit" },
          ]}
        />

        <div className="border-t border-white/5" />

        <SettingsSelect
          label="Refresh Interval"
          description="Preferred refresh interval for future live monitoring."
          value={refreshInterval}
          onChange={setRefreshInterval}
          options={[
            { label: "5 Seconds", value: "5" },
            { label: "10 Seconds", value: "10" },
            { label: "30 Seconds", value: "30" },
            { label: "60 Seconds", value: "60" },
          ]}
        />

        <div className="flex items-center gap-2 rounded-xl bg-white/[0.03] p-3">
          <RefreshCw size={16} className="text-accent" />

          <p className="text-xs text-text-muted">
            Your selected preferences are saved in this browser.
            The refresh interval does not control actual sensor
            polling yet.
          </p>
        </div>
      </SettingsSection>

      {/* SYSTEM INFORMATION */}
      <SettingsSection
        title="System Information"
        description="Project and software information."
        icon={Database}
      >
        <div className="space-y-4">

          <div className="flex items-center justify-between gap-3">
            <span className="text-sm text-text-muted">
              Product Name
            </span>

            <span className="text-sm font-semibold text-text-primary">
              FarmSphere AIoT V4
            </span>
          </div>

          <div className="flex items-center justify-between gap-3">
            <span className="text-sm text-text-muted">
              Version
            </span>

            <span className="text-sm font-semibold text-text-primary">
              4.0
            </span>
          </div>

          <div className="flex items-center justify-between gap-3">
            <span className="text-sm text-text-muted">
              Development Team
            </span>

            <span className="text-sm font-semibold text-text-primary">
              NestQuorix
            </span>
          </div>

          <div className="flex items-center justify-between gap-3">
            <span className="text-sm text-text-muted">
              Platform
            </span>

            <span className="text-sm font-semibold text-text-primary">
              React + Vite
            </span>
          </div>

          <div className="flex items-center justify-between gap-3">
            <span className="text-sm text-text-muted">
              Hardware Integration
            </span>

            <span className="text-xs font-semibold text-warning">
              Pending
            </span>
          </div>

        </div>
      </SettingsSection>

      {/* SYSTEM STATUS */}
      <div className="glass rounded-2xl p-5 sm:p-6">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-success/10 p-2.5 text-success">
            <CheckCircle2 size={20} />
          </div>

          <div>
            <h2 className="font-bold text-text-primary">
              Dashboard Status
            </h2>

            <p className="mt-1 text-xs text-text-muted">
              Frontend interface is available.
            </p>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">

          <div className="rounded-xl bg-white/[0.03] p-3">
            <p className="text-xs text-text-muted">
              Dashboard
            </p>

            <p className="mt-1 text-sm font-semibold text-success">
              Available
            </p>
          </div>

          <div className="rounded-xl bg-white/[0.03] p-3">
            <p className="text-xs text-text-muted">
              Demo Data
            </p>

            <p className="mt-1 text-sm font-semibold text-success">
              Active
            </p>
          </div>

          <div className="rounded-xl bg-white/[0.03] p-3">
            <p className="text-xs text-text-muted">
              Hardware API
            </p>

            <p className="mt-1 text-sm font-semibold text-warning">
              Pending
            </p>
          </div>

        </div>
      </div>

      {/* SECURITY NOTICE */}
      <div className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4">
        <Shield
          size={19}
          className="mt-0.5 shrink-0 text-accent"
        />

        <p className="text-xs leading-relaxed text-text-muted">
          Hardware commands, account authentication, network
          credentials and backend configuration will be
          implemented during the integration phase.
          Do not enter Wi-Fi passwords or private credentials
          into this demo dashboard.
        </p>
      </div>

    </div>
  );
}

// ==========================================
// ABOUT PAGE
// ==========================================

export function About() {
  return (
    <ModulePlaceholder
      title="About FarmSphere"
      description="Learn about our project, technology and development team."
      icon={Info}
    />
  );
}
