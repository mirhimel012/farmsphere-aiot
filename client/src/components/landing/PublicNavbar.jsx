
import { Link, NavLink } from "react-router-dom";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from "../common/Logo";

const links = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Features", to: "/#features" },
  { name: "Technology", to: "/#technology" },
  { name: "Our Team", to: "/#team" },
];

export default function PublicNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Logo />

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              className="text-sm text-text-muted transition hover:text-accent"
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <Link
          to="/dashboard"
          className="hidden items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-background transition hover:bg-cyan-300 md:flex"
        >
          Dashboard
          <ArrowRight size={16} />
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg border border-white/10 p-2 text-text-primary md:hidden"
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/10 bg-surface p-5 md:hidden">
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-text-muted hover:text-accent"
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/dashboard"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl bg-accent px-5 py-3 text-center text-sm font-semibold text-background"
            >
              Open Dashboard
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
