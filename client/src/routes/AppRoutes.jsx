
import { Routes, Route } from "react-router-dom";

import PublicLayout from "../layouts/PublicLayout";
import DashboardLayout from "../layouts/DashboardLayout";

// Public Pages
import Home from "../pages/public/Home";

// Dashboard Pages
import Overview from "../pages/dashboard/Overview";
import Agriculture from "../pages/dashboard/Agriculture";
import AnimalCare from "../pages/dashboard/AnimalCare";
import WaterManagement from "../pages/dashboard/WaterManagement";
import FarmSafety from "../pages/dashboard/FarmSafety";
import Analytics from "../pages/dashboard/Analytics";

// Other Pages
import {
  SettingsPage,
  About,
} from "../pages/dashboard/ModulePages";

// 404 Page
function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-5 text-center">
      <h1 className="text-6xl font-extrabold text-accent">
        404
      </h1>

      <p className="mt-4 text-text-muted">
        Page not found.
      </p>

      <a
        href="/"
        className="mt-6 text-sm font-semibold text-accent transition-colors hover:text-accent-secondary"
      >
        Return Home
      </a>
    </div>
  );
}

// Main Application Routes
export default function AppRoutes() {
  return (
    <Routes>
      {/* Public Website */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>

      {/* Dashboard */}
      <Route
        path="/dashboard"
        element={<DashboardLayout />}
      >
        <Route index element={<Overview />} />

        <Route
          path="agriculture"
          element={<Agriculture />}
        />

        <Route
          path="animal-care"
          element={<AnimalCare />}
        />

        <Route
          path="water"
          element={<WaterManagement />}
        />

        <Route
          path="safety"
          element={<FarmSafety />}
        />

        <Route
          path="analytics"
          element={<Analytics />}
        />

        <Route
          path="settings"
          element={<SettingsPage />}
        />
      </Route>

      {/* Unknown Routes */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
