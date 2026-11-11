
import {
  Droplets,
  Fish,
  PawPrint,
  Sprout,
} from "lucide-react";

const devices = [
  {
    name: "Garden Water Pump",
    key: "gardenPump",
    icon: Sprout,
    description: "Relay Channel 1",
  },
  {
    name: "Pet Water Pump",
    key: "petPump",
    icon: Droplets,
    description: "Relay Channel 2",
  },
  {
    name: "Fish Feeder",
    key: "fishFeeder",
    icon: Fish,
    description: "Servo Motor 1",
  },
  {
    name: "Shared Pet Feeder",
    key: "petFeeder",
    icon: PawPrint,
    description: "Servo Motor 2",
  },
];

export default function DeviceStatus({ actuators, modes }) {
  return (
    <div className="glass rounded-2xl p-5 sm:p-6">
      <div className="mb-6">
        <h2 className="font-semibold">Device Status</h2>
        <p className="mt-1 text-xs text-text-muted">
          Current device states · Demo data
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {devices.map((device) => {
          const Icon = device.icon;
          const state = actuators[device.key];
          const mode =
            device.key === "gardenPump"
              ? modes.watering
              : device.key === "fishFeeder"
                ? modes.fishFeeding
                : device.key === "petFeeder"
                  ? modes.petFeeding
                  : null;

          return (
            <div
              key={device.key}
              className="rounded-xl border border-white/10 bg-white/[0.025] p-4"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-cyan-400/10 p-2.5">
                    <Icon size={19} className="text-accent" />
                  </div>

                  <div>
                    <h3 className="text-xs font-semibold">
                      {device.name}
                    </h3>
                    <p className="mt-1 text-[10px] text-text-muted">
                      {device.description}
                    </p>
                  </div>
                </div>

                <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] text-text-muted">
                  {state}
                </span>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-3">
                <span className="text-[10px] text-text-muted">
                  Operating mode
                </span>

                <span className="text-[10px] font-semibold text-accent">
                  {mode || "N/A"}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
