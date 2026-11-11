
import { apiRequest } from "./apiClient";

// ==========================================
// 1. FARM STATUS
// ==========================================

export async function fetchFarmStatus() {
  const response = await apiRequest("/farm/status");
  return response.data;
}

// ==========================================
// 2. BACKEND HEALTH
// ==========================================

export async function fetchBackendHealth() {
  return apiRequest("/health");
}

// ==========================================
// 3. SENSOR HISTORY
// ==========================================

export async function fetchSensorHistory(sensor = "all") {
  const response = await apiRequest(
    `/history/sensors?sensor=${encodeURIComponent(sensor)}`
  );

  return response.data;
}

// ==========================================
// 4. ACTIVITY HISTORY
// ==========================================

export async function fetchActivityHistory(type = "all") {
  const response = await apiRequest(
    `/history/activities?type=${encodeURIComponent(type)}`
  );

  return response.data;
}
