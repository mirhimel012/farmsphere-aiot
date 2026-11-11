
import express from "express";

import {
  fetchSensorHistory,
  fetchActivityHistory,
} from "../controllers/historyController.js";

const router = express.Router();

// Sensor history
router.get("/sensors", fetchSensorHistory);

// Activity history
router.get("/activities", fetchActivityHistory);

export default router;
