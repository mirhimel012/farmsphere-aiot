
import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import rateLimit from "express-rate-limit";

// ==========================================
// 1. IMPORT API ROUTES
// ==========================================

import healthRoutes from "./routes/healthRoutes.js";
import farmRoutes from "./routes/farmRoutes.js";
import historyRoutes from "./routes/historyRoutes.js";

// ==========================================
// 2. LOAD ENVIRONMENT VARIABLES
// ==========================================

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ==========================================
// 3. SECURITY MIDDLEWARE
// ==========================================

app.use(helmet());

// ==========================================
// 4. CORS CONFIGURATION
// ==========================================

const allowedOrigins = (
  process.env.CLIENT_URL || "http://localhost:5173"
)
  .split(",")
  .map((origin) => origin.trim());

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// ==========================================
// 5. REQUEST PARSING
// ==========================================

app.use(express.json({ limit: "10kb" }));

// ==========================================
// 6. API RATE LIMITING
// ==========================================

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many requests. Please try again later.",
  },
});

app.use("/api", apiLimiter);

// ==========================================
// 7. ROOT API
// ==========================================

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    project: "FarmSphere AIoT V4",
    team: "NestQuorix",
    message: "FarmSphere backend API is running",
    mode: "DEMO",
  });
});

// ==========================================
// 8. REGISTER API ROUTES
// ==========================================

// Health Check API
app.use("/api/health", healthRoutes);

// Farm Sensor API
app.use("/api/farm", farmRoutes);

// History API
app.use("/api/history", historyRoutes);

// ==========================================
// 9. HANDLE UNKNOWN ROUTES
// ==========================================

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "API endpoint not found",
  });
});

// ==========================================
// 10. GLOBAL ERROR HANDLER
// ==========================================

app.use((err, req, res, next) => {
  console.error("Server Error:", err.message);

  if (res.headersSent) {
    return next(err);
  }

  res.status(500).json({
    success: false,
    message: "Internal server error",
  });
});

// ==========================================
// 11. START SERVER
// ==========================================

app.listen(PORT, () => {
  console.log("------------------------------------");
  console.log(" FarmSphere AIoT Backend");
  console.log(` Server running on port ${PORT}`);
  console.log(` Local URL: http://localhost:${PORT}`);
  console.log("------------------------------------");

  console.log("Available API Endpoints:");
  console.log(` Health API: http://localhost:${PORT}/api/health`);
  console.log(` Farm API: http://localhost:${PORT}/api/farm/status`);
  console.log(` Sensor History: http://localhost:${PORT}/api/history/sensors`);
  console.log(` Activity History: http://localhost:${PORT}/api/history/activities`);

  console.log("------------------------------------");
});
