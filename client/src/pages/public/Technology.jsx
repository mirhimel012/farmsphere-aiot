
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Cpu,
  Wifi,
  Database,
  Smartphone,
  Droplets,
  Sprout,
  Flame,
  Gauge,
  Waves,
  RotateCw,
  Server,
  Code2,
  Radio,
  Workflow,
} from "lucide-react";

const hardware = [
  {
    name: "ESP32 Development Board",
    category: "Main Controller",
    description:
      "Acts as the central controller, processing sensor inputs and managing connected actuators.",
    icon: Cpu,
    tag: "ESP32",
  },
  {
    name: "Soil Moisture Sensor",
    category: "Agriculture",
    description:
      "Measures soil moisture levels to support irrigation monitoring and watering decisions.",
    icon: Sprout,
    tag: "GPIO 34",
  },
  {
    name: "Flame Sensor",
    category: "Farm Safety",
    description:
      "Detects a flame signal and provides input for the farm safety monitoring module.",
    icon: Flame,
    tag: "GPIO 27",
  },
  {
    name: "Water Level Sensors",
    category: "Water Management",
    description:
      "Planned sensors for monitoring the main water tank and pet water bowl.",
    icon: Waves,
    tag: "GPIO 35 / 32",
  },
];

const actuators = [
  {
    name: "Fish Feeder Servo",
    description: "Supports scheduled fish-feeding operation.",
    pin: "GPIO 18",
    icon: RotateCw,
  },
  {
    name: "Pet Feeder Servo",
    description: "Designed for cat and dog feeding.",
    pin: "GPIO 19",
    icon: RotateCw,
  },
  {
    name: "Garden Pump Relay",
    description: "Controls the garden irrigation pump.",
    pin: "GPIO 23",
    icon: Droplets,
  },
  {
    name: "Pet Water Pump Relay",
    description: "Controls the pet water supply pump.",
    pin: "GPIO 26",
    icon: Droplets,
  },
];

const software = [
  {
    name: "React + Vite",
    role: "Frontend",
    description: "Builds the public website and interactive monitoring dashboard.",
    icon: Code2,
  },
  {
    name: "Tailwind CSS",
    role: "UI Styling",
    description: "Provides the responsive interface and visual design system.",
    icon: Workflow,
  },
  {
    name: "Node.js + Express",
    role: "Backend API",
    description: "Provides the API layer for dashboard data and application services.",
    icon: Server,
  },
  {
    name: "ESP32 + Wi-Fi",
    role: "IoT Layer",
    description: "Designed to connect physical sensors and actuators with the system.",
    icon: Radio,
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

function ArchitectureStep({ icon: Icon, title, description, number }) {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-background/70 p-5">
      <div className="flex items-center justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
          <Icon size={21} />
        </div>
        <span className="font-mono text-xs text-text-muted/50">
          {number}
        </span>
      </div>
      <h3 className="mt-5 font-semibold text-text-primary">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-text-muted">{description}</p>
    </div>
  );
}

export default function Technology() {
  return (
    <main className="overflow-hidden">
      {/* Hero */}
      <section className="relative px-5 pb-20 pt-24 sm:px-8 lg:pb-28 lg:pt-32">
        <div className="pointer-events-none absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />

        <div className="relative mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel>Technology & Architecture</SectionLabel>

            <h1 className="mt-7 text-4xl font-semibold leading-tight tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
              The technology behind
              <span className="block text-accent">smarter farming.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-text-muted sm:text-lg">
              Explore the hardware, software, and connected architecture
              designed to power the FarmSphere AIoT V4 prototype.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Architecture */}
      <section className="px-5 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-2xl">
            <SectionLabel>System architecture</SectionLabel>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
              How the system is connected
            </h2>
            <p className="mt-4 leading-7 text-text-muted">
              The proposed workflow connects physical farm devices with
              the web application through a controller and backend API.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <ArchitectureStep
              number="01"
              icon={Gauge}
              title="Sensors"
              description="Collect soil, water-level, and flame sensor readings."
            />
            <ArchitectureStep
              number="02"
              icon={Cpu}
              title="ESP32 Controller"
              description="Processes sensor inputs and manages actuator logic."
            />
            <ArchitectureStep
              number="03"
              icon={Wifi}
              title="Wi-Fi & Backend"
              description="Designed to transfer data to the application API."
            />
            <ArchitectureStep
              number="04"
              icon={Smartphone}
              title="Web Dashboard"
              description="Displays sensor information, device status, and activity."
            />
          </div>

          <div className="mt-6 rounded-xl border border-accent/15 bg-accent/[0.04] px-5 py-4">
            <p className="text-sm leading-6 text-text-muted">
              <span className="font-semibold text-accent">Development status:</span>{" "}
              The current dashboard uses simulation data. The complete
              physical hardware-to-backend connection is not yet operational.
            </p>
          </div>
        </div>
      </section>

      {/* Hardware */}
      <section className="border-y border-white/[0.06] bg-surface/40 px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-2xl">
            <SectionLabel>Hardware components</SectionLabel>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
              The physical foundation
            </h2>
            <p className="mt-4 leading-7 text-text-muted">
              The prototype uses an ESP32-based design with sensors and
              actuators for different farm management tasks.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {hardware.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.name}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="rounded-2xl border border-white/[0.08] bg-background/70 p-6 transition hover:border-accent/25 sm:p-7"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <Icon size={22} />
                    </div>
                    <span className="rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-text-muted">
                      {item.tag}
                    </span>
                  </div>

                  <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-accent">
                    {item.category}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-text-primary">
                    {item.name}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-text-muted">
                    {item.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Actuators */}
      <section className="px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-2xl">
            <SectionLabel>Output devices</SectionLabel>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
              From monitoring to action
            </h2>
            <p className="mt-4 leading-7 text-text-muted">
              These output devices are designed to perform feeding,
              irrigation, and water-management operations.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/[0.08]">
            {actuators.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.name}
                  className={`flex flex-col gap-4 bg-surface/60 p-5 sm:flex-row sm:items-center sm:justify-between sm:px-7 ${
                    index !== actuators.length - 1
                      ? "border-b border-white/[0.07]"
                      : ""
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-primary">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-sm text-text-muted">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <span className="w-fit rounded-lg border border-white/10 px-3 py-2 font-mono text-xs text-accent">
                    {item.pin}
                  </span>
                </div>
              );
            })}
          </div>

          <p className="mt-4 text-xs leading-6 text-text-muted/70">
            GPIO assignments follow the current project design and should be
            verified against the final physical wiring.
          </p>
        </div>
      </section>

      {/* Software */}
      <section className="border-y border-white/[0.06] bg-surface/40 px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-2xl">
            <SectionLabel>Software technologies</SectionLabel>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
              The digital layer
            </h2>
            <p className="mt-4 leading-7 text-text-muted">
              A web-based application stack supports the dashboard,
              backend services, and planned IoT communication.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {software.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.name}
                  className="rounded-2xl border border-white/[0.08] bg-background/70 p-6"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Icon size={21} />
                  </div>
                  <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-accent">
                    {item.role}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-text-primary">
                    {item.name}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-text-muted">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <SectionLabel>Explore FarmSphere</SectionLabel>
          <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            Technology with a practical purpose.
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-7 text-text-muted">
            See how the project brings agriculture, animal care,
            water management, and farm safety together.
          </p>

          <Link
            to="/dashboard"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-[#080a10] transition hover:brightness-110"
          >
            Explore Dashboard
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
