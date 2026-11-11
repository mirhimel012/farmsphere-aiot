
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
  Wifi,
  LayoutDashboard,
  Activity,
} from "lucide-react";

const features = [
  {
    icon: Sprout,
    title: "Smart Agriculture",
    description: "Soil moisture monitoring and intelligent irrigation management.",
    color: "text-emerald-400",
  },
  {
    icon: PawPrint,
    title: "Animal Care",
    description: "Automated feeding and pet drinking-water monitoring.",
    color: "text-violet-400",
  },
  {
    icon: Droplets,
    title: "Water Management",
    description: "Water-level monitoring and pump management.",
    color: "text-cyan-400",
  },
  {
    icon: ShieldCheck,
    title: "Farm Safety",
    description: "Flame detection monitoring and safety event alerts.",
    color: "text-amber-400",
  },
];

const architecture = [
  { icon: Activity, title: "Sensors" },
  { icon: Cpu, title: "ESP32 Controller" },
  { icon: Wifi, title: "Connectivity" },
  { icon: LayoutDashboard, title: "Dashboard" },
];

function Eyebrow({ children }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-7 bg-accent" />
      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent sm:text-xs">
        {children}
      </span>
    </div>
  );
}

function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.15 }}
      className="relative mx-auto w-full max-w-lg"
    >
      <div className="glass relative overflow-hidden rounded-2xl p-6 sm:p-8">
        <div className="flex items-center justify-between border-b border-white/[0.07] pb-5">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/15 bg-accent/[0.07]">
              <Cpu size={23} className="text-accent" />
            </div>

            <div>
              <h3 className="text-sm font-semibold text-text-primary">
                FarmSphere AIoT
              </h3>
              <p className="mt-1 text-[10px] tracking-wider text-text-muted">
                SMART FARM PLATFORM
              </p>
            </div>
          </div>

          <span className="rounded-md border border-amber-400/20 bg-amber-400/[0.06] px-3 py-1.5 text-[10px] font-semibold text-amber-300">
            DEMO
          </span>
        </div>

        <div className="mt-7">
          <p className="text-xs text-text-muted">Platform overview</p>
          <h3 className="mt-2 text-xl font-semibold text-text-primary">
            One connected farm.
            <span className="block text-accent">Multiple possibilities.</span>
          </h3>
        </div>

        <div className="mt-7 grid grid-cols-2 gap-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-4 transition duration-300 hover:border-accent/20 hover:bg-white/[0.04]"
              >
                <Icon size={22} className={feature.color} />
                <p className="mt-4 text-xs font-semibold text-text-primary">
                  {feature.title}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex items-center gap-3 rounded-xl border border-accent/15 bg-accent/[0.04] p-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
            <Cpu size={21} className="text-accent" />
          </div>

          <div>
            <p className="text-sm font-semibold text-text-primary">
              ESP32 Smart Controller
            </p>
            <p className="mt-1 text-[10px] text-text-muted">
              Central hardware controller
            </p>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-white/[0.07] pt-4">
          <span className="text-[10px] text-text-muted">
            FarmSphere V4
          </span>
          <span className="flex items-center gap-2 text-[10px] text-amber-300">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            Development demo
          </span>
        </div>
      </div>

      <div className="pointer-events-none absolute -bottom-5 -right-5 -z-10 h-40 w-40 rounded-full bg-accent/[0.07] blur-3xl" />
    </motion.div>
  );
}

function HeroSection() {
  return (
    <section className="relative px-5 pb-20 pt-10 sm:px-8 sm:pb-24 sm:pt-14 lg:pt-16">
      <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-violet-500/[0.07] blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-cyan-500/[0.07] blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.12 },
            },
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-accent/15 bg-accent/[0.04] px-4 py-2">
              <Sprout size={15} className="text-accent" />
              <span className="text-[10px] font-semibold tracking-[0.15em] text-accent sm:text-xs">
                INTELLIGENT FARMING TECHNOLOGY
              </span>
            </div>
          </motion.div>

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0 },
            }}
            className="max-w-2xl text-5xl font-extrabold leading-[1.12] tracking-tight text-text-primary sm:text-6xl lg:text-7xl"
          >
            Farming
            <span className="block">Smarter.</span>
            <span className="block bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
              Living Better.
            </span>
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mt-7 max-w-xl text-sm leading-8 text-text-muted sm:text-base"
          >
            FarmSphere AIoT brings agriculture, animal care, water
            management, and farm safety together in one intelligent
            farm management concept.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
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

            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-7 py-4 text-sm font-semibold text-text-primary transition hover:border-accent/30 hover:bg-white/[0.03]"
            >
              Discover Project
              <ArrowUpRight size={17} />
            </Link>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            className="mt-10 flex items-center gap-3"
          >
            <span className="h-px w-9 bg-accent" />
            <p className="text-[10px] font-semibold tracking-[0.16em] text-text-muted">
              AN INNOVATION PROJECT BY NESTQUORIX
            </p>
          </motion.div>
        </motion.div>

        <HeroVisual />
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section className="border-y border-white/[0.05] bg-white/[0.015] px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <Eyebrow>Core capabilities</Eyebrow>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
              Four systems.
              <span className="block text-accent">
                One connected platform.
              </span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-text-muted">
              Explore the main areas of FarmSphere AIoT V4.
            </p>
          </div>

          <Link
            to="/features"
            className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-accent transition hover:text-cyan-300"
          >
            View all features
            <ArrowUpRight size={17} />
          </Link>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                className="group rounded-2xl border border-white/[0.07] bg-surface/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/25 hover:bg-surface-light/70"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.04]">
                  <Icon size={22} className={feature.color} />
                </div>

                <h3 className="mt-6 text-base font-semibold text-text-primary">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-text-muted">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ArchitectureSection() {
  return (
    <section className="px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Simple architecture</Eyebrow>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            From sensors to
            <span className="text-accent"> smart monitoring.</span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-text-muted">
            A connected architecture designed to bring physical
            farm devices and digital monitoring together.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {architecture.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="relative rounded-2xl border border-white/[0.07] bg-surface/60 p-6 text-center transition hover:border-accent/25"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon size={22} />
                </div>

                <h3 className="mt-4 text-sm font-semibold text-text-primary">
                  {item.title}
                </h3>

                <span className="mt-2 block font-mono text-[10px] text-text-muted/60">
                  STEP 0{index + 1}
                </span>
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-xl border border-white/[0.07] bg-surface/40 px-5 py-5 sm:flex-row">
          <p className="text-xs leading-6 text-text-muted">
            Hardware-to-dashboard integration is under development.
            Current dashboard readings are simulated.
          </p>

          <Link
            to="/technology"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-accent transition hover:text-cyan-300"
          >
            Explore technology
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="px-5 pb-20 sm:px-8 sm:pb-28">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl border border-accent/15 bg-gradient-to-br from-accent/[0.07] via-surface to-accent-secondary/[0.06] px-6 py-12 sm:px-12 sm:py-16">
        <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-accent/10 blur-[100px]" />

        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <Eyebrow>Explore FarmSphere</Eyebrow>

            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-text-primary sm:text-4xl">
              See smarter farm management in action.
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-text-muted">
              Explore the FarmSphere dashboard and discover
              the different modules of our AIoT prototype.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              to="/dashboard"
              className="group inline-flex items-center gap-3 rounded-xl bg-accent px-6 py-4 text-sm font-bold text-background transition hover:bg-cyan-300"
            >
              Open Dashboard
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <p className="mt-3 text-center text-[10px] text-text-muted">
              Currently running in demo mode
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <FeaturesSection />
      <ArchitectureSection />
      <FinalCTA />
    </main>
  );
}
