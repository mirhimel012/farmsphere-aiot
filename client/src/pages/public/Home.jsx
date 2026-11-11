
import { Link } from "react-router-dom";
import { motion } from "motion/react";

import {
  ArrowRight,
  ArrowUpRight,
  Sprout,
  PawPrint,
  Droplets,
  ShieldCheck,
  Cpu,
  Waves,
  Zap,
  CircuitBoard,
  Monitor,
  CheckCircle2,
  FlaskConical,
} from "lucide-react";

import SectionHeading from "../../components/landing/SectionHeading";
import FeatureCard from "../../components/landing/FeatureCard";
import ArchitectureFlow from "../../components/landing/ArchitectureFlow";

const features = [
  {
    number: "01",
    icon: Sprout,
    title: "Smart Agriculture",
    description:
      "Monitor soil moisture and automate garden irrigation through sensor-based monitoring and pump control.",
  },
  {
    number: "02",
    icon: PawPrint,
    title: "Animal Care",
    description:
      "Support automated fish feeding, shared cat and dog feeding, and pet drinking-water supply.",
  },
  {
    number: "03",
    icon: Droplets,
    title: "Water Management",
    description:
      "Monitor the central water tank and coordinate separate pumps with low-water protection.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Farm Safety",
    description:
      "Monitor flame detection events and support safety-aware operation of connected devices.",
  },
];

const hardware = [
  {
    icon: Cpu,
    name: "ESP32 DevKit",
    detail: "Main microcontroller",
    status: "Current design",
  },
  {
    icon: Waves,
    name: "Soil Moisture Sensor",
    detail: "Garden soil monitoring",
    status: "Current design",
  },
  {
    icon: Zap,
    name: "Relay Modules",
    detail: "Two pump control channels",
    status: "Current design",
  },
  {
    icon: CircuitBoard,
    name: "Servo Motors",
    detail: "Fish and shared pet feeders",
    status: "Current design",
  },
  {
    icon: Monitor,
    name: "16×2 I²C LCD",
    detail: "Local system information",
    status: "Current design",
  },
  {
    icon: ShieldCheck,
    name: "Flame Sensor",
    detail: "Farm safety monitoring",
    status: "Current design",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65 },
  },
};

function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, x: 20 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="relative mx-auto w-full max-w-lg"
    >
      <div className="absolute inset-10 rounded-full bg-cyan-500/10 blur-[100px]" />

      <div className="glass relative overflow-hidden rounded-3xl p-5 sm:p-7">
        <div className="mb-7 flex items-center justify-between">
          <div>
            <p className="text-xs text-text-muted">
              SYSTEM ARCHITECTURE
            </p>
            <h3 className="mt-1 font-semibold">
              FarmSphere AIoT
            </h3>
          </div>

          <div className="rounded-lg border border-cyan-400/20 bg-cyan-400/10 p-2">
            <Cpu className="text-accent" size={23} />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {[
            { icon: Sprout, label: "Agriculture" },
            { icon: PawPrint, label: "Animal Care" },
            { icon: Droplets, label: "Water System" },
            { icon: ShieldCheck, label: "Farm Safety" },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
              >
                <Icon size={22} className="mb-3 text-accent" />
                <p className="text-xs font-medium">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>

        <div className="my-5 flex items-center justify-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-cyan-400/40" />
          <Cpu size={22} className="text-accent" />
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-cyan-400/40" />
        </div>

        <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/[0.06] p-4 text-center">
          <p className="text-sm font-semibold">
            ESP32 Smart Controller
          </p>
          <p className="mt-1 text-xs text-text-muted">
            Sensor inputs · Device automation
          </p>
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
          <span className="text-xs text-text-muted">
            Prototype visualization
          </span>
          <span className="flex items-center gap-2 text-xs text-amber-300">
            <span className="h-2 w-2 rounded-full bg-amber-400" />
            In Development
          </span>
        </div>
      </div>

      <div className="absolute -bottom-5 -left-5 hidden rounded-xl border border-white/10 bg-surface p-4 shadow-xl sm:block">
        <div className="flex items-center gap-3">
          <FlaskConical className="text-accent" size={22} />
          <div>
            <p className="text-xs font-semibold">Prototype V4</p>
            <p className="text-[10px] text-text-muted">
              ESP32-based system
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Home() {
  return (
    <div className="overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative px-5 pb-28 pt-20 sm:pt-28 lg:pb-36 lg:pt-36">
        <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-purple-600/10 blur-[130px]" />

        <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[130px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeUp}>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2">
                <Sprout size={15} className="text-accent" />
                <span className="text-[10px] font-semibold tracking-[0.16em] text-accent sm:text-xs">
                  INTELLIGENT FARMING TECHNOLOGY
                </span>
              </div>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-5xl font-extrabold leading-[1.12] tracking-tight sm:text-6xl lg:text-7xl"
            >
              Farming
              <span className="block">Smarter.</span>
              <span className="block bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
                Living Better.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-xl text-sm leading-8 text-text-muted sm:text-base"
            >
              Meet FarmSphere AIoT — an integrated smart
              farming platform bringing agriculture,
              animal care, water management and farm safety
              together through connected technology.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-9 flex flex-col gap-4 sm:flex-row"
            >
              <Link
                to="/dashboard"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-accent px-7 py-4 text-sm font-bold text-background transition hover:bg-cyan-300"
              >
                Explore Dashboard
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-7 py-4 text-sm font-semibold transition hover:border-cyan-400/30 hover:bg-white/5"
              >
                Discover Project
                <ArrowUpRight size={17} />
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex items-center gap-3"
            >
              <div className="h-px w-10 bg-accent" />
              <p className="text-[10px] font-semibold tracking-[0.2em] text-text-muted">
                AN INNOVATION PROJECT BY NESTQUORIX
              </p>
            </motion.div>
          </motion.div>

          <HeroVisual />
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="border-y border-white/5 bg-white/[0.015] px-5 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            eyebrow="ABOUT FARMSPHERE"
            title="A Smarter Approach to"
            highlight="Farm Management."
            description="FarmSphere AIoT V4 is an ESP32-based smart farming prototype designed to bring multiple farm operations into one connected management platform. It combines environmental monitoring, automated feeding, water management and safety monitoring."
          />

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {[
              { value: "01", label: "Smart Agriculture" },
              { value: "02", label: "Animal Care" },
              { value: "03", label: "Water Management" },
              { value: "04", label: "Farm Safety" },
            ].map((item) => (
              <div
                key={item.value}
                className="glass rounded-2xl p-5 sm:p-7"
              >
                <p className="text-3xl font-bold text-accent">
                  {item.value}
                </p>
                <p className="mt-3 text-xs font-medium text-text-muted sm:text-sm">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section
        id="features"
        className="scroll-mt-24 px-5 py-24 sm:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="CORE CAPABILITIES"
            title="Four Systems."
            highlight="One Connected Platform."
            description="Each module focuses on a different aspect of farm management while working toward a unified smart farming experience."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <FeatureCard key={feature.number} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section
        id="technology"
        className="scroll-mt-24 border-y border-white/5 bg-surface/40 px-5 py-24 sm:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="SYSTEM ARCHITECTURE"
            title="From Physical Sensors"
            highlight="To Smart Control."
            description="The system is designed around an ESP32 controller that receives sensor inputs, manages connected hardware and communicates with the FarmSphere monitoring platform."
          />

          <div className="mt-14">
            <ArchitectureFlow />
          </div>

          <div className="mt-8 rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.04] p-5">
            <p className="text-xs leading-7 text-text-muted">
              <span className="font-semibold text-accent">
                Communication note:
              </span>{" "}
              The website-to-device communication layer is
              under development. The final implementation
              will be determined after hardware testing.
            </p>
          </div>
        </div>
      </section>

      {/* HARDWARE */}
      <section className="px-5 py-24 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="HARDWARE COMPONENTS"
            title="The Technology"
            highlight="Behind the System."
            description="The V4 prototype design uses an ESP32 controller and a combination of sensors and actuators to support its different farm operations."
          />

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {hardware.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.name}
                  className="glass glass-hover rounded-2xl p-5"
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-xl bg-cyan-400/10 p-3">
                      <Icon size={22} className="text-accent" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm font-semibold">
                        {item.name}
                      </h3>

                      <p className="mt-2 text-xs text-text-muted">
                        {item.detail}
                      </p>

                      <div className="mt-4 flex items-center gap-2">
                        <CheckCircle2
                          size={13}
                          className="text-success"
                        />
                        {/* <span className="text-[10px] text-success">
                          {item.status}
                        </span> */}
                        <span className="text-[10px] text-text-muted">
                          Included in V4 design
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 rounded-2xl border border-amber-400/15 bg-amber-400/[0.04] p-5">
            <p className="text-xs leading-7 text-text-muted">
              <span className="font-semibold text-amber-300">
                Planned additions:
              </span>{" "}
              Water tank and pet bowl level sensors are
              planned for the V4 implementation. Physical
              assembly and testing are still in progress.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-y border-white/5 bg-surface/40 px-5 py-24 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="WORKFLOW"
            title="How FarmSphere"
            highlight="Works."
            description="The platform is designed to connect farm monitoring with device automation through a structured workflow."
            centered
          />

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Monitor",
                description:
                  "Sensors collect soil, water and safety-related information from the farm environment.",
              },
              {
                number: "02",
                title: "Process",
                description:
                  "The ESP32 controller processes sensor inputs and manages supported automation rules.",
              },
              {
                number: "03",
                title: "Manage",
                description:
                  "The FarmSphere platform is designed to display system information and provide authorized controls.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="glass rounded-2xl p-7"
              >
                <span className="text-4xl font-extrabold text-cyan-400/30">
                  {item.number}
                </span>

                <h3 className="mt-5 text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section
        id="team"
        className="scroll-mt-24 px-5 py-24 sm:py-28"
      >
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-400/10">
            <Cpu size={32} className="text-accent-secondary" />
          </div>

          <p className="mb-4 text-xs font-bold tracking-[0.22em] text-accent">
            MEET THE TEAM
          </p>

          <h2 className="text-3xl font-bold sm:text-5xl">
            Innovation Through
            <span className="text-accent"> Collaboration.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-text-muted sm:text-base">
            FarmSphere AIoT is developed by Team NestQuorix,
            bringing together hardware engineering, software
            development and connected technology to explore
            smarter farm management.
          </p>

          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent transition hover:text-cyan-300"
          >
            Learn About Our Project
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-cyan-400/15 bg-gradient-to-br from-cyan-500/10 via-surface to-violet-500/10 px-6 py-16 text-center sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[100px]" />

          <div className="relative">
            <p className="mb-4 text-xs font-bold tracking-[0.2em] text-accent">
              EXPLORE FARMSPHERE
            </p>

            <h2 className="text-3xl font-bold sm:text-5xl">
              Discover the Smart
              <span className="block text-accent">
                Farming Experience.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-text-muted">
              Explore the FarmSphere control center and
              discover how connected technology can support
              modern farm management.
            </p>

            <Link
              to="/dashboard"
              className="mt-9 inline-flex items-center gap-3 rounded-xl bg-accent px-7 py-4 text-sm font-bold text-background transition hover:bg-cyan-300"
            >
              Explore Dashboard
              <ArrowRight size={18} />
            </Link>

            <p className="mt-5 text-[11px] text-text-muted">
              Dashboard currently uses development demo mode.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;
