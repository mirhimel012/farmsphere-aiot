
import { farmDemoData } from "../data/farmDemoData";

// Future integration point:
// Replace this adapter with the real backend API when
// the ESP32 communication system is ready.

const DEMO_MODE = true;

export async function getFarmStatus() {
  if (DEMO_MODE) {
    return {
      ...farmDemoData,
      sensors: { ...farmDemoData.sensors },
      actuators: { ...farmDemoData.actuators },
      modes: { ...farmDemoData.modes },
    };
  }

  throw new Error("Live IoT integration is not configured.");
}

export async function getFarmHistory() {
  if (DEMO_MODE) {
    return [];
  }

  throw new Error("History integration is not configured.");
}

export async function sendPumpCommand() {
  throw new Error(
    "Pump commands are disabled until hardware integration is ready."
  );
}

export async function sendFeederCommand() {
  throw new Error(
    "Feeder commands are disabled until hardware integration is ready."
  );
}

export async function getFarmSettings() {
  throw new Error("Settings integration is not configured.");
}

export async function updateFarmSettings() {
  throw new Error("Settings integration is not configured.");
}
