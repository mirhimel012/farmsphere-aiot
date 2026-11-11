
import {
  getSensorHistory,
  getActivityHistory,
} from "../services/historyService.js";

// ==========================================
// 1. SENSOR HISTORY
// ==========================================

export const fetchSensorHistory = (req, res) => {
  try {
    const { sensor } = req.query;

    const history = getSensorHistory(sensor);

    res.status(200).json({
      success: true,
      message: "Sensor history retrieved successfully",
      data: {
        source: "simulation",
        total: history.length,
        history,
      },
    });
  } catch (error) {
    console.error("Sensor history error:", error.message);

    res.status(500).json({
      success: false,
      message: "Unable to retrieve sensor history",
    });
  }
};

// ==========================================
// 2. ACTIVITY HISTORY
// ==========================================

export const fetchActivityHistory = (req, res) => {
  try {
    const { type } = req.query;

    const activities = getActivityHistory(type);

    res.status(200).json({
      success: true,
      message: "Activity history retrieved successfully",
      data: {
        source: "simulation",
        total: activities.length,
        activities,
      },
    });
  } catch (error) {
    console.error("Activity history error:", error.message);

    res.status(500).json({
      success: false,
      message: "Unable to retrieve activity history",
    });
  }
};
