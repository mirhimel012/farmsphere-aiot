
export const getFarmStatusData = () => {
  return {
    device: {
      id: "farmsphere-esp32-01",
      name: "FarmSphere Main Controller",
      status: "DEMO",
      dataSource: "simulation",
      lastUpdated: new Date().toISOString(),
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
  };
};
