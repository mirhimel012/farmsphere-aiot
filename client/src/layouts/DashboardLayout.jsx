
import { useState } from "react";
import { NavLink, Outlet, Link } from "react-router-dom";
import {
  LayoutDashboard,
  Sprout,
  PawPrint,
  Droplets,
  ShieldCheck,
  ChartNoAxesCombined,
  Settings,
  Menu,
  X,
  ArrowLeft,
  Bell,
  Wifi,
} from "lucide-react";

import Logo from "../components/common/Logo";

const navigation = [
  {
    title: "MAIN MENU",
    items: [
      { name: "Overview", path: "/dashboard", icon: LayoutDashboard, end: true },
      { name: "Agriculture", path: "/dashboard/agriculture", icon: Sprout },
      { name: "Animal Care", path: "/dashboard/animal-care", icon: PawPrint },
      { name: "Water Management", path: "/dashboard/water", icon: Droplets },
      { name: "Farm Safety", path: "/dashboard/safety", icon: ShieldCheck },
    ],
  },
  {
    title: "MANAGEMENT",
    items: [
      { name: "Analytics", path: "/dashboard/analytics", icon: ChartNoAxesCombined },
      { name: "Settings", path: "/dashboard/settings", icon: Settings },
    ],
  },
];

function Sidebar({ closeMenu }) {
  return (
    <aside className="flex h-full flex-col bg-surface px-4 py-5">
      <div className="mb-9 flex items-center justify-between px-2">
        <Logo />

        <button
          onClick={closeMenu}
          className="rounded-lg p-2 text-text-muted lg:hidden"
          aria-label="Close sidebar"
        >
          <X size={20} />
        </button>
      </div>

      {navigation.map((group) => (
        <div key={group.title} className="mb-7">
          <p className="mb-3 px-3 text-[10px] font-bold tracking-[0.18em] text-text-muted">
            {group.title}
          </p>

          <div className="space-y-1">
            {group.items.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.end}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-xl px-3 py-3 text-sm transition ${
                      isActive
                        ? "border border-cyan-400/10 bg-cyan-400/10 font-semibold text-accent"
                        : "text-text-muted hover:bg-white/5 hover:text-text-primary"
                    }`
                  }
                >
                  <Icon size={19} />
                  {item.name}
                </NavLink>
              );
            })}
          </div>
        </div>
      ))}

      <div className="mt-auto border-t border-white/10 pt-5">
        <Link
          to="/"
          className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-text-muted transition hover:bg-white/5 hover:text-accent"
        >
          <ArrowLeft size={18} />
          Back to Website
        </Link>
      </div>
    </aside>
  );
}

export default function DashboardLayout() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background lg:flex">
      {/* Desktop Sidebar */}
      <div className="fixed inset-y-0 left-0 z-30 hidden w-64 border-r border-white/10 lg:block">
        <Sidebar />
      </div>

      {/* Mobile Sidebar */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            className="absolute inset-0 bg-black/70"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          />

          <div className="relative h-full w-72 max-w-[85vw]">
            <Sidebar closeMenu={() => setMenuOpen(false)} />
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="min-w-0 flex-1 lg:ml-64">
        <header className="sticky top-0 z-20 flex h-[72px] items-center justify-between border-b border-white/10 bg-background/85 px-4 backdrop-blur-xl sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMenuOpen(true)}
              className="rounded-lg border border-white/10 p-2 text-text-primary lg:hidden"
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>

            <div>
              <h1 className="text-sm font-semibold text-text-primary">
                Farm Control Center
              </h1>
              <p className="text-[11px] text-text-muted">
                FarmSphere AIoT V4
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-2 sm:flex">
              <span className="h-2 w-2 animate-pulse rounded-full bg-amber-400" />
              <span className="text-xs text-amber-300">
                Demo Mode
              </span>
            </div>

            <button
              className="rounded-xl border border-white/10 p-2 text-text-muted hover:text-accent"
              aria-label="Notifications"
            >
              <Bell size={19} />
            </button>

            <div className="hidden items-center gap-2 text-xs text-text-muted sm:flex">
              <Wifi size={16} className="text-accent" />
              Simulation
            </div>
          </div>
        </header>

        <main className="p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
