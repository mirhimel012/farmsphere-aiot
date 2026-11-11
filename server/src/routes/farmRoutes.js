
import express from "express";
import { getFarmStatus } from "../controllers/farmController.js";

const router = express.Router();

router.get("/status", getFarmStatus);

export default router;
