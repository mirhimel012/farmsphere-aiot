
import { getFarmStatusData } from "../services/farmService.js";

export const getFarmStatus = (req, res) => {
  try {
    const farmStatus = getFarmStatusData();

    res.status(200).json({
      success: true,
      message: "Farm status retrieved successfully",
      data: farmStatus,
    });
  } catch (error) {
    console.error("Farm status error:", error.message);

    res.status(500).json({
      success: false,
      message: "Unable to retrieve farm status",
    });
  }
};
