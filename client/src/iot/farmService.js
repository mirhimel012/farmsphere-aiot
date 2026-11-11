
import { fetchFarmStatus } from "../services/farmApi";

// ==========================================
// 1. FARM STATUS
// ==========================================

export async function getFarmStatus() {
  return await fetchFarmStatus();
}

// ==========================================
// 2. FARM HISTORY
// ==========================================

export async function getFarmHistory() {
  // History API will be implemented later.
  return [];
}

// ==========================================
// 3. PUMP COMMANDS
// ==========================================

export async function sendPumpCommand() {
  throw new Error(
    "Pump commands are not available yet. Hardware integration is pending."
  );
}

// ==========================================
// 4. FEEDER COMMANDS
// ==========================================

export async function sendFeederCommand() {
  throw new Error(
    "Feeder commands are not available yet. Hardware integration is pending."
  );
}

// ==========================================
// 5. FARM SETTINGS
// ==========================================

export async function getFarmSettings() {
  throw new Error("Farm settings API is not implemented yet.");
}

export async function updateFarmSettings() {
  throw new Error("Farm settings API is not implemented yet.");
}
