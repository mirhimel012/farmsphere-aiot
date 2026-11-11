
export const farmDemoData = {
  device: {
    id: "farmsphere-esp32-01",
    name: "FarmSphere Main Controller",
    status: "DEMO",
    lastUpdated: new Date().toISOString(),
    dataSource: "simulation",
  },

  sensors: {
    soilMoisture: 42,
    tankLevel: 78,
    petBowlLevel: 85,
    flameDetected: false,
  },

  actuators: {
    gardenPump: "OFF",
    petPump: "OFF",
    fishFeeder: "IDLE",
    petFeeder: "IDLE",
  },

  modes: {
    watering: "AUTO",
    fishFeeding: "AUTO",
    petFeeding: "AUTO",
  },

  alerts: [
    {
      id: 1,
      title: "System running in demo mode",
      description: "Physical ESP32 connection is pending.",
      type: "info",
      time: "Just now",
    },
  ],

  activities: [
    {
      id: 1,
      title: "FarmSphere dashboard initialized",
      description: "Demo monitoring environment started.",
      time: "Just now",
      type: "system",
    },
    {
      id: 2,
      title: "Fish feeder mode",
      description: "Automatic mode selected in demo configuration.",
      time: "Demo event",
      type: "feeding",
    },
    {
      id: 3,
      title: "Water monitoring",
      description: "Example tank-level reading loaded.",
      time: "Demo event",
      type: "water",
    },
  ],
};

export const soilHistory = [
  { time: "08:00", moisture: 38 },
  { time: "09:00", moisture: 40 },
  { time: "10:00", moisture: 37 },
  { time: "11:00", moisture: 43 },
  { time: "12:00", moisture: 41 },
  { time: "13:00", moisture: 45 },
  { time: "14:00", moisture: 42 },
];

export const getSensorStatus = (value, type) => {
  if (type === "soil") {
    if (value <= 30) return "Low";
    if (value >= 55) return "Wet";
    return "Healthy";
  }

  if (type === "water") {
    if (value <= 15) return "Critical";
    if (value <= 30) return "Low";
    return "Available";
  }

  if (type === "bowl") {
    if (value <= 30) return "Low";
    if (value >= 75) return "Full";
    return "Available";
  }

  return "Unknown";
};
