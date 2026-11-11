
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LockKeyhole, ArrowRight, ShieldCheck, AlertCircle } from "lucide-react";
import Logo from "../../components/common/Logo";

const DEMO_PIN = "2004";
const AUTH_KEY = "farmsphere-dashboard-unlocked";

export default function PinLogin() {
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    if (pin === DEMO_PIN) {
      sessionStorage.setItem(AUTH_KEY, "true");

      const destination =
        location.state?.from?.pathname || "/dashboard";

      navigate(destination, { replace: true });
    } else {
      setError("Incorrect PIN. Please try again.");
      setPin("");
    }

    setLoading(false);
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-5 py-12">
      <div className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-accent/[0.07] blur-[110px]" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-accent-secondary/[0.08] blur-[110px]" />

      <div className="relative w-full max-w-md">
        <div className="mb-9 flex justify-center">
          <Logo />
        </div>

        <div className="glass rounded-2xl border border-white/[0.08] p-7 sm:p-9">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-accent/20 bg-accent/[0.08] text-accent">
            <LockKeyhole size={26} />
          </div>

          <div className="mt-6 text-center">
            <h1 className="text-2xl font-bold tracking-tight text-text-primary">
              Dashboard Access
            </h1>

            <p className="mt-3 text-sm leading-6 text-text-muted">
              Enter your security PIN to access the FarmSphere dashboard.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8">
            <label
              htmlFor="dashboard-pin"
              className="mb-2 block text-sm font-medium text-text-primary"
            >
              Security PIN
            </label>

            <input
              id="dashboard-pin"
              type="password"
              inputMode="numeric"
              autoComplete="current-password"
              maxLength={4}
              pattern="[0-9]{4}"
              value={pin}
              onChange={(event) => {
                setPin(event.target.value.replace(/\D/g, "").slice(0, 4));
                setError("");
              }}
              placeholder="Enter 4-digit PIN"
              required
              className="w-full rounded-xl border border-white/10 bg-background/70 px-4 py-4 text-center text-xl tracking-[0.6em] text-text-primary outline-none transition placeholder:text-sm placeholder:tracking-normal focus:border-accent/50 focus:ring-2 focus:ring-accent/10"
            />

            {error && (
              <p className="mt-3 flex items-center gap-2 text-sm text-danger">
                <AlertCircle size={15} />
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={pin.length !== 4 || loading}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-5 py-4 text-sm font-bold text-background transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Unlock Dashboard
              <ArrowRight size={17} />
            </button>
          </form>

          <div className="mt-7 flex items-center justify-center gap-2 border-t border-white/[0.07] pt-5 text-xs text-text-muted">
            <ShieldCheck size={15} className="text-accent" />
            FarmSphere demo access
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-text-muted">
          <a href="/" className="transition hover:text-accent">
            Return to Home
          </a>
        </p>
      </div>
    </main>
  );
}
