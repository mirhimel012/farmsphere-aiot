
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sprout,
  Droplets,
  PawPrint,
  ShieldCheck,
  Cpu,
  Activity,
} from "lucide-react";

const features = [
  {
    icon: Sprout,
    title: "Smart Agriculture",
    description:
      "Monitor soil moisture and automate garden irrigation using intelligent sensor-based control.",
  },
  {
    icon: PawPrint,
    title: "Animal Care",
    description:
      "Support automated fish feeding, shared pet feeding and pet water supply.",
  },
  {
    icon: Droplets,
    title: "Water Management",
    description:
      "Monitor central water availability and manage separate water pump operations.",
  },
  {
    icon: ShieldCheck,
    title: "Farm Safety",
    description:
      "Monitor flame detection events and support safety-aware automation.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden px-5 py-24 sm:py-32 lg:py-40">
        <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="relative mx-auto max-w-5xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2">
            <Activity size={15} className="text-accent" />
            <span className="text-xs font-medium tracking-wider text-accent">
              SMART FARMING TECHNOLOGY
            </span>
          </div>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Farming Smarter.
            <span className="block text-accent">
              Living Better.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-text-muted sm:text-lg">
            FarmSphere AIoT brings agriculture, animal care,
            water management and farm safety together through
            connected sensors and intelligent automation.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/dashboard"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-7 py-4 font-semibold text-background transition hover:bg-cyan-300"
            >
              Explore Dashboard
              <ArrowRight size={18} />
            </Link>

            <a
              href="#features"
              className="rounded-xl border border-white/10 px-7 py-4 font-medium text-text-primary transition hover:bg-white/5"
            >
              Discover Features
            </a>
          </div>

          <p className="mt-10 text-xs tracking-wider text-text-muted">
            AN INNOVATION PROJECT BY TEAM NESTQUORIX
          </p>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="scroll-mt-24 px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-2xl">
            <p className="mb-3 text-xs font-bold tracking-[0.2em] text-accent">
              OUR CAPABILITIES
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              One Platform.
              <span className="text-accent"> Four Smart Systems.</span>
            </h2>

            <p className="mt-5 leading-7 text-text-muted">
              A unified platform designed to make everyday
              farm management more connected, efficient and
              manageable.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="glass glass-hover rounded-2xl p-6"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10">
                    <Icon size={24} className="text-accent" />
                  </div>

                  <h3 className="mb-3 text-lg font-semibold">
                    {feature.title}
                  </h3>

                  <p className="text-sm leading-7 text-text-muted">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section
        id="technology"
        className="scroll-mt-24 border-y border-white/10 bg-surface/50 px-5 py-24"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-xs font-bold tracking-[0.2em] text-accent">
              THE TECHNOLOGY
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              Connected Systems.
              <span className="block text-accent">
                Intelligent Control.
              </span>
            </h2>

            <p className="mt-6 leading-8 text-text-muted">
              FarmSphere uses an ESP32-based architecture
              to collect sensor information and coordinate
              connected farm devices.
            </p>
          </div>

          <div className="glass rounded-3xl p-8">
            <div className="flex flex-col items-center gap-4">
              {[
                { icon: Activity, title: "Sensors & Devices" },
                { icon: Cpu, title: "ESP32 Controller" },
                { icon: Droplets, title: "Data & Communication" },
                { icon: Sprout, title: "Farm Monitoring Platform" },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="w-full max-w-sm"
                  >
                    <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                      <Icon className="text-accent" size={23} />
                      <span className="text-sm font-medium">
                        {item.title}
                      </span>
                    </div>

                    {index !== 3 && (
                      <div className="py-2 text-center text-accent">
                        ↓
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="scroll-mt-24 px-5 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-xs font-bold tracking-[0.2em] text-accent">
            TEAM NESTQUORIX
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Built Through Innovation
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-text-muted">
            A collaborative project combining hardware
            engineering, software development and smart
            automation to explore the future of farming.
          </p>
        </div>
      </section>
    </>
  );
}
