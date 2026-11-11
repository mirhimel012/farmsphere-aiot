
import { lazy, Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";

import PublicLayout from "../layouts/PublicLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import ProtectedRoute from "./ProtectedRoute";

// Public pages
const Home = lazy(() => import("../pages/public/Home"));
const About = lazy(() => import("../pages/public/About"));
const Features = lazy(() => import("../pages/public/Features"));
const Technology = lazy(() => import("../pages/public/Technology"));
const Team = lazy(() => import("../pages/public/Team"));
const PinLogin = lazy(() => import("../pages/public/PinLogin"));

// Dashboard pages
const Overview = lazy(() => import("../pages/dashboard/Overview"));
const Agriculture = lazy(() => import("../pages/dashboard/Agriculture"));
const AnimalCare = lazy(() => import("../pages/dashboard/AnimalCare"));
const WaterManagement = lazy(
  () => import("../pages/dashboard/WaterManagement")
);
const FarmSafety = lazy(() => import("../pages/dashboard/FarmSafety"));
const Analytics = lazy(() => import("../pages/dashboard/Analytics"));

// Named export from ModulePages
const SettingsPage = lazy(() =>
  import("../pages/dashboard/ModulePages").then((module) => ({
    default: module.SettingsPage,
  }))
);

// Loading screen
function PageLoader() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="text-center">
        <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-accent/20 border-t-accent" />
        <p className="mt-4 text-sm text-text-muted">
          Loading FarmSphere...
        </p>
      </div>
    </div>
  );
}

// 404 Page
function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-5 text-center">
      <h1 className="text-6xl font-extrabold text-accent">404</h1>

      <p className="mt-4 text-text-muted">
        Page not found.
      </p>

      <Link
        to="/"
        className="mt-6 text-sm font-semibold text-accent transition-colors hover:text-accent-secondary"
      >
        Return Home
      </Link>
    </div>
  );
}

export default function AppRoutes() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {/* Public website */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/team" element={<Team />} />
        </Route>

        {/* PIN login */}
        <Route path="/login" element={<PinLogin />} />

        {/* Protected dashboard */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Overview />} />
            <Route path="agriculture" element={<Agriculture />} />
            <Route path="animal-care" element={<AnimalCare />} />
            <Route path="water" element={<WaterManagement />} />
            <Route path="safety" element={<FarmSafety />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="settings" element={<SettingsPage />} />
          </Route>
        </Route>

        {/* Unknown routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
