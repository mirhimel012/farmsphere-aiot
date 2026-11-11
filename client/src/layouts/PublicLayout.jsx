
import { Outlet } from "react-router-dom";
import PublicNavbar from "../components/landing/PublicNavbar";

export default function PublicLayout() {
  return (
    <div className="min-h-screen">
      <PublicNavbar />

      <main>
        <Outlet />
      </main>

      <footer className="border-t border-white/10 px-5 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <p className="text-sm font-semibold text-text-primary">
            FarmSphere <span className="text-accent">AIoT</span>
          </p>

          <p className="text-xs text-text-muted">
            Developed by Team NestQuorix · 2026
          </p>
        </div>
      </footer>
    </div>
  );
}
