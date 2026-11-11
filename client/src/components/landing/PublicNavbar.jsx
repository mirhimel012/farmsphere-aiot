
import { useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  ArrowUpRight,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";

import Logo from "../common/Logo";

const links = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Features", to: "/features"},
  { name: "Technology", to: "/technology"},
  { name: "Our Team", to: "/team"},
];

function NavigationLink({ link, onClick }) {
  const location = useLocation();
  const navigate = useNavigate();

  const isSection = Boolean(link.section);

  const isActive = isSection
    ? location.pathname === "/" &&
      location.hash === link.to.substring(1)
    : location.pathname === link.to;

  const handleSectionClick = (event) => {
    if (!isSection) {
      onClick?.();
      return;
    }

    event.preventDefault();
    onClick?.();

    const sectionId = link.to.substring(2);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 150);
      return;
    }

    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    window.history.replaceState(null, "", `/#${sectionId}`);
  };

  return (
    <Link
      to={link.to}
      onClick={handleSectionClick}
      className={`group relative flex items-center py-2 text-[13px] font-medium transition-colors duration-200 ${
        isActive
          ? "text-accent"
          : "text-text-muted hover:text-text-primary"
      }`}
    >
      {link.name}

      <span
        className={`absolute -bottom-0.5 left-0 h-[2px] rounded-full bg-accent transition-all duration-300 ${
          isActive
            ? "w-full"
            : "w-0 group-hover:w-full"
        }`}
      />
    </Link>
  );
}

function DashboardButton({ mobile = false, onClick }) {
  return (
    <Link
      to="/dashboard"
      onClick={onClick}
      className={`group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl border border-cyan-400/30 bg-cyan-400/[0.07] font-semibold text-accent transition-all duration-300 hover:border-cyan-300/60 hover:bg-cyan-400/[0.13] hover:shadow-[0_0_24px_rgba(34,211,238,0.12)] ${
        mobile
          ? "w-full px-5 py-3.5 text-sm"
          : "px-5 py-2.5 text-[13px]"
      }`}
    >
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.06] to-transparent transition-transform duration-700 group-hover:translate-x-full" />

      <span className="relative">Dashboard</span>

      <ArrowUpRight
        size={16}
        className="relative transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </Link>
  );
}

export default function PublicNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close the mobile menu whenever the route changes.
  // The route itself is also used to determine active navigation.
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-background/85 shadow-[0_4px_25px_rgba(0,0,0,0.12)] backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 lg:px-8">
        {/* Brand */}
        <div className="shrink-0">
          <Logo />
        </div>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <NavigationLink
              key={link.name}
              link={link}
            />
          ))}
        </div>

        {/* Desktop dashboard action */}
        <div className="hidden lg:block">
          <DashboardButton />
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen((previous) => !previous)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-text-primary transition-colors hover:border-cyan-400/30 hover:bg-cyan-400/[0.06] lg:hidden"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile navigation */}
      <div
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out lg:hidden ${
          menuOpen
            ? "grid-rows-[1fr] opacity-100"
            : "pointer-events-none grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-white/[0.06] bg-surface/95 px-5 pb-6 pt-4 backdrop-blur-xl">
            <div className="flex flex-col gap-1">
              {links.map((link) => (
                <NavigationLink
                  key={link.name}
                  link={link}
                  onClick={closeMenu}
                />
              ))}
            </div>

            <div className="mt-5 border-t border-white/[0.07] pt-5">
              <DashboardButton
                mobile
                onClick={closeMenu}
              />

              <div className="mt-4 flex items-center justify-between text-[10px] text-text-muted">
                <span>FarmSphere AIoT V4</span>
                <span className="flex items-center gap-1">
                  Explore platform
                  <ChevronRight size={12} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
