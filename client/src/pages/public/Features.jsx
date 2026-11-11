
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sprout,
  PawPrint,
  Droplets,
  ShieldCheck,
  Activity,
  Cpu,
  Wifi,
  Smartphone,
  CheckCircle2,
} from "lucide-react";

const modules = [
  {
    number: "01",
    title: "Smart Agriculture",
    subtitle: "Intelligent irrigation monitoring",
    description:
      "Monitor soil moisture and support smarter irrigation decisions. FarmSphere uses sensor readings and automated logic to help manage garden watering.",
    icon: Sprout,
    color: "text-emerald-400",
    border: "border-emerald-400/20",
    points: [
      "Soil moisture monitoring",
      "Automatic irrigation logic",
      "Garden pump status",
      "Soil condition overview",
    ],
  },
  {
    number: "02",
    title: "Smart Animal Care",
    subtitle: "Automated feeding and water monitoring",
    description:
      "Designed to support regular feeding routines for fish, cats, and dogs while monitoring the availability of drinking water.",
    icon: PawPrint,
    color: "text-violet-400",
    border: "border-violet-400/20",
    points: [
      "Fish feeding automation",
      "Cat and dog feeding system",
      "Pet water-level monitoring",
      "Feeder operating modes",
    ],
  },
  {
    number: "03",
    title: "Smart Water Management",
    subtitle: "Better visibility of water resources",
    description:
      "Keep track of water availability in the main tank and pet water bowl. The system is designed to support more informed water management.",
    icon: Droplets,
    color: "text-cyan-400",
    border: "border-cyan-400/20",
    points: [
      "Main tank level monitoring",
      "Pet bowl level monitoring",
      "Water pump management",
      "Low-water status alerts",
    ],
  },
  {
    number: "04",
    title: "Farm Safety",
    subtitle: "An additional layer of farm awareness",
    description:
      "Monitor flame sensor status and provide an alert when a potential fire signal is detected by the prototype.",
    icon: ShieldCheck,
    color: "text-amber-400",
    border: "border-amber-400/20",
    points: [
      "Flame sensor monitoring",
      "Potential fire alerts",
      "Safety event history",
      "Pump safety logic",
    ],
  },
];

const workflow = [
  {
    icon: Activity,
    title: "Sensors",
    description: "Collect environmental and farm readings.",
  },
  {
    icon: Cpu,
    title: "ESP32",
    description: "Processes sensor inputs and controls devices.",
  },
  {
    icon: Wifi,
    title: "Connectivity",
    description: "Transfers available data through Wi-Fi.",
  },
  {
    icon: Smartphone,
    title: "Dashboard",
    description: "Displays monitoring information and system status.",
  },
];

function SectionLabel({ children }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
      <span className="h-px w-6 bg-accent" />
      {children}
    </span>
  );
}

export default function Features() {
  return (
    <main className="overflow-hidden">
      {/* Hero */}
      <section className="relative px-5 pb-20 pt-24 sm:px-8 lg:pb-28 lg:pt-32">
        <div className="pointer-events-none absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />

        <div className="relative mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel>What FarmSphere offers</SectionLabel>

            <h1 className="mx-auto mt-7 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
              Everything your farm needs,
              <span className="block text-accent">
                connected intelligently.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-text-muted sm:text-lg">
              Explore an integrated approach to agriculture, animal care,
              water management, and farm safety through one connected system.
            </p>
          </motion.div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-[#080a10] transition hover:brightness-110"
            >
              Explore Dashboard
              <ArrowRight size={16} />
            </Link>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-text-primary transition hover:border-accent/40 hover:bg-white/5"
            >
              About the Project
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Modules */}
      <section className="px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-2xl">
            <SectionLabel>Core capabilities</SectionLabel>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
              Four modules. One connected farm.
            </h2>
            <p className="mt-4 leading-7 text-text-muted">
              Each module focuses on a different part of farm management,
              working together within the FarmSphere concept.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {modules.map((module, index) => {
              const Icon = module.icon;

              return (
                <motion.article
                  key={module.number}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group rounded-2xl border border-white/[0.08] bg-surface/70 p-7 transition duration-300 hover:-translate-y-1 hover:border-accent/25 hover:bg-surface-light/70 sm:p-9"
                >
                  <div className="flex items-start justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl border ${module.border} bg-white/[0.03] ${module.color}`}
                    >
                      <Icon size={23} strokeWidth={1.8} />
                    </div>

                    <span className="font-mono text-sm text-text-muted/50">
                      {module.number}
                    </span>
                  </div>

                  <p className={`mt-7 text-xs font-semibold uppercase tracking-wider ${module.color}`}>
                    {module.subtitle}
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold text-text-primary">
                    {module.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-text-muted">
                    {module.description}
                  </p>

                  <div className="mt-7 grid gap-3 sm:grid-cols-2">
                    {module.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-center gap-2 text-sm text-text-muted"
                      >
                        <CheckCircle2
                          size={15}
                          className={module.color}
                        />
                        {point}
                      </div>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* System Workflow */}
      <section className="border-y border-white/[0.06] bg-surface/40 px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <SectionLabel>How it works</SectionLabel>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
              From physical signals to useful insights.
            </h2>
            <p className="mt-4 leading-7 text-text-muted">
              A connected workflow designed to bring farm monitoring and
              device control into one interface.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {workflow.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="relative rounded-2xl border border-white/[0.08] bg-background/70 p-6"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <Icon size={21} />
                    </div>

                    <span className="font-mono text-xs text-text-muted/50">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-semibold text-text-primary">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-text-muted">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          <p className="mt-7 text-center text-xs leading-6 text-text-muted/70">
            Architecture overview. Live hardware connectivity is still under
            development.
          </p>
        </div>
      </section>

      {/* Prototype Notice */}
      <section className="px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto flex max-w-5xl flex-col gap-8 rounded-3xl border border-accent/15 bg-gradient-to-br from-accent/[0.07] to-accent-secondary/[0.06] p-8 sm:p-10 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <SectionLabel>Built as an AIoT prototype</SectionLabel>

            <h2 className="mt-5 text-2xl font-semibold text-text-primary sm:text-3xl">
              Designed for smarter farm management.
            </h2>

            <p className="mt-4 text-sm leading-7 text-text-muted">
              FarmSphere AIoT V4 is currently a prototype with a simulation
              dashboard. Physical hardware integration and live monitoring
              are part of the ongoing development process.
            </p>
          </div>

          <Link
            to="/dashboard"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-accent/30 px-6 py-3 text-sm font-semibold text-accent transition hover:bg-accent/10"
          >
            View Demo
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
