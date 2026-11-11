
const sensorHistory = [
  { id: 1, sensor: "soilMoisture", value: 38, unit: "%", time: "08:00", source: "simulation" },
  { id: 2, sensor: "soilMoisture", value: 40, unit: "%", time: "09:00", source: "simulation" },
  { id: 3, sensor: "soilMoisture", value: 37, unit: "%", time: "10:00", source: "simulation" },
  { id: 4, sensor: "soilMoisture", value: 43, unit: "%", time: "11:00", source: "simulation" },
  { id: 5, sensor: "soilMoisture", value: 41, unit: "%", time: "12:00", source: "simulation" },
  { id: 6, sensor: "soilMoisture", value: 45, unit: "%", time: "13:00", source: "simulation" },
  { id: 7, sensor: "soilMoisture", value: 42, unit: "%", time: "14:00", source: "simulation" },
];

const activityHistory = [
  // Irrigation events
  {
    id: 1,
    title: "Automatic irrigation cycle",
    description: "Soil moisture monitoring completed.",
    time: "10:00 AM",
    mode: "AUTO",
    category: "irrigation",
    type: "water",
    status: "Completed",
    source: "simulation",
  },
  {
    id: 2,
    title: "Soil moisture checked",
    description: "Demo soil moisture reading: 42%.",
    time: "11:30 AM",
    mode: "AUTO",
    category: "irrigation",
    type: "water",
    status: "Normal",
    source: "simulation",
  },
  {
    id: 3,
    title: "Manual irrigation mode",
    description: "Manual mode selected in dashboard simulation.",
    time: "12:15 PM",
    mode: "MANUAL",
    category: "irrigation",
    type: "water",
    status: "Demo",
    source: "simulation",
  },

  // Animal care events
  {
    id: 4,
    title: "Fish Feeding Cycle",
    description: "Automatic fish feeder cycle simulated.",
    time: "09:00 AM",
    mode: "AUTO",
    category: "fish",
    type: "feeding",
    status: "Demo",
    source: "simulation",
  },
  {
    id: 5,
    title: "Pet Feeding Cycle",
    description: "Shared cat and dog feeder cycle simulated.",
    time: "10:15 AM",
    mode: "AUTO",
    category: "pet",
    type: "feeding",
    status: "Demo",
    source: "simulation",
  },
  {
    id: 6,
    title: "Pet Water Monitoring",
    description: "Example pet bowl water-level reading checked.",
    time: "12:00 PM",
    mode: "AUTO",
    category: "water",
    type: "water",
    status: "Demo",
    source: "simulation",
  },

  // Water management events
  {
    id: 7,
    title: "Tank Level Monitoring",
    description: "Example main tank level recorded at 78%.",
    time: "09:00 AM",
    mode: "AUTO",
    category: "tank",
    type: "water",
    status: "Demo",
    source: "simulation",
  },
  {
    id: 8,
    title: "Garden Pump Monitoring",
    description: "Garden pump state checked in simulation.",
    time: "10:15 AM",
    mode: "AUTO",
    category: "garden",
    type: "water",
    status: "Demo",
    source: "simulation",
  },
  {
    id: 9,
    title: "Water Safety Check",
    description: "Prototype low-water safety conditions reviewed.",
    time: "12:15 PM",
    mode: "AUTO",
    category: "alert",
    type: "system",
    status: "Demo",
    source: "simulation",
  },
  {
    id: 10,
    title: "Pet Pump Monitoring",
    description: "Pet water pump state checked in simulation.",
    time: "01:00 PM",
    mode: "AUTO",
    category: "pet",
    type: "water",
    status: "Demo",
    source: "simulation",
  },
];

export const getSensorHistory = (sensor) => {
  if (!sensor || sensor === "all") {
    return sensorHistory;
  }

  return sensorHistory.filter(
    (item) => item.sensor === sensor
  );
};

export const getActivityHistory = (type) => {
  if (!type || type === "all") {
    return activityHistory;
  }

  return activityHistory.filter(
    (item) => item.type === type
  );
};
