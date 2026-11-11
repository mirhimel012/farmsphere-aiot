
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
  Target,
  Lightbulb,
  FlaskConical,
  Network,
  Code2,
  Activity,
} from "lucide-react";

const objectives = [
  {
    icon: Sprout,
    title: "Improve farm monitoring",
    description:
      "Explore sensor-based monitoring of soil conditions and water availability.",
  },
  {
    icon: PawPrint,
    title: "Support animal care",
    description:
      "Develop automated feeding concepts and pet drinking-water monitoring.",
  },
  {
    icon: Droplets,
    title: "Manage water resources",
    description:
      "Monitor water levels and coordinate separate pump operations.",
  },
  {
    icon: ShieldCheck,
    title: "Consider farm safety",
    description:
      "Include flame detection and safety-aware device operation in the prototype.",
  },
];

const modules = [
  {
    number: "01",
    icon: Sprout,
    title: "Smart Agriculture",
    description:
      "Soil moisture monitoring and automated garden irrigation concepts.",
  },
  {
    number: "02",
    icon: PawPrint,
    title: "Animal Care",
    description:
      "Fish feeding, shared cat and dog feeding, and pet water supply.",
  },
  {
    number: "03",
    icon: Droplets,
    title: "Water Management",
    description:
      "Main tank monitoring and separate garden and pet water pumps.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Farm Safety",
    description:
      "Flame detection monitoring and safety-aware system behaviour.",
  },
];

const technologies = [
  {
    icon: Cpu,
    name: "ESP32",
    description: "Embedded controller",
  },
  {
    icon: Network,
    name: "IoT",
    description: "Connected devices",
  },
  {
    icon: Code2,
    name: "Web platform",
    description: "React and Express",
  },
  {
    icon: Activity,
    name: "Monitoring",
    description: "Dashboard and history",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55 },
  },
};

function Eyebrow({ children }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span className="h-px w-7 bg-accent" />
      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent sm:text-xs">
        {children}
      </span>
    </div>
  );
}

function ProjectHero() {
  return (
    <section className="relative overflow-hidden px-5 pb-20 pt-24 sm:pb-28 sm:pt-32">
      <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-purple-600/[0.07] blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-cyan-500/[0.07] blur-[120px]" />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.12 } },
        }}
        className="relative mx-auto max-w-5xl text-center"
      >
        <motion.div variants={fadeUp}>
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/15 bg-cyan-400/[0.04] px-4 py-2 text-[10px] font-semibold tracking-[0.15em] text-accent">
            <FlaskConical size={14} />
            ABOUT THE PROJECT
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="mt-8 text-4xl font-extrabold leading-tight tracking-tight text-text-primary sm:text-6xl lg:text-7xl"
        >
          Understanding
          <span className="block bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
            FarmSphere AIoT.
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mx-auto mt-7 max-w-3xl text-sm leading-8 text-text-muted sm:text-base"
        >
          An ESP32-based smart farming prototype exploring how
          connected technology can bring agriculture, animal care,
          water management and farm safety into one platform.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-9 flex flex-wrap justify-center gap-3"
        >
          <Link
            to="/#features"
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-background transition hover:bg-cyan-300"
          >
            Explore capabilities
            <ArrowRight size={17} />
          </Link>

          <Link
            to="/dashboard"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3.5 text-sm font-semibold text-text-primary transition hover:border-cyan-400/30 hover:bg-white/[0.03]"
          >
            View dashboard
            <ArrowUpRight size={17} />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

function Introduction() {
  return (
    <section className="border-y border-white/[0.05] bg-white/[0.015] px-5 py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <Eyebrow>Project introduction</Eyebrow>

          <h2 className="max-w-xl text-3xl font-bold leading-tight tracking-tight text-text-primary sm:text-4xl">
            Bringing different farm operations
            <span className="text-accent"> into one place.</span>
          </h2>

          <p className="mt-6 text-sm leading-8 text-text-muted">
            FarmSphere AIoT V4 is a smart farming prototype
            developed by Team NestQuorix. It uses an ESP32-based
            design to connect different farm monitoring and
            automation concepts.
          </p>

          <p className="mt-4 text-sm leading-8 text-text-muted">
            The project combines embedded hardware with a web-based
            dashboard. The goal is to make information from different
            farm operations easier to monitor and understand.
          </p>

          <p className="mt-4 text-sm leading-8 text-text-muted">
            Our current development focuses on the website and
            prototype simulation while physical hardware integration
            and testing continue.
          </p>
        </div>

        <div className="glass rounded-2xl p-6 sm:p-8">
          <div className="flex items-center justify-between border-b border-white/[0.07] pb-5">
            <div>
              <p className="text-xs text-text-muted">
                PROJECT IDENTITY
              </p>
              <h3 className="mt-1 text-lg font-bold text-text-primary">
                FarmSphere AIoT V4
              </h3>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/15 bg-cyan-400/[0.06]">
              <Cpu size={23} className="text-accent" />
            </div>
          </div>

          <div className="divide-y divide-white/[0.06]">
            {[
              ["Project", "Smart farming prototype"],
              ["Team", "NestQuorix"],
              ["Controller", "ESP32 DevKit"],
              ["Platform", "Web-based dashboard"],
              ["Version", "V4"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="flex items-center justify-between gap-4 py-4"
              >
                <span className="text-xs text-text-muted">
                  {label}
                </span>
                <span className="text-right text-xs font-semibold text-text-primary">
                  {value}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-xl border border-amber-400/15 bg-amber-400/[0.04] p-4">
            <p className="text-xs leading-6 text-amber-200">
              Current stage: Prototype development and simulation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Motivation() {
  return (
    <section className="px-5 py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <Eyebrow>Why we are building it</Eyebrow>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-text-primary sm:text-5xl">
            One platform for
            <span className="block text-accent">
              multiple farm needs.
            </span>
          </h2>
        </div>

        <div className="space-y-5">
          <div className="flex gap-4 border-b border-white/[0.07] pb-6">
            <Lightbulb
              size={22}
              className="mt-1 shrink-0 text-accent"
            />

            <div>
              <h3 className="text-base font-semibold text-text-primary">
                A connected approach
              </h3>
              <p className="mt-2 text-sm leading-7 text-text-muted">
                Farm operations often involve different monitoring
                and equipment needs. FarmSphere explores a unified
                way to organize these functions.
              </p>
            </div>
          </div>

          <div className="flex gap-4 border-b border-white/[0.07] pb-6">
            <Target
              size={22}
              className="mt-1 shrink-0 text-accent"
            />

            <div>
              <h3 className="text-base font-semibold text-text-primary">
                Practical automation concepts
              </h3>
              <p className="mt-2 text-sm leading-7 text-text-muted">
                The prototype explores how sensor inputs and
                embedded control logic can support selected
                everyday farm tasks.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <Network
              size={22}
              className="mt-1 shrink-0 text-accent"
            />

            <div>
              <h3 className="text-base font-semibold text-text-primary">
                Accessible monitoring
              </h3>
              <p className="mt-2 text-sm leading-7 text-text-muted">
                A web-based interface provides a central place
                to view the project's monitoring information
                and system status.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Objectives() {
  return (
    <section className="border-y border-white/[0.05] bg-surface/40 px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <Eyebrow>Project objectives</Eyebrow>

          <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-5xl">
            What we aim to achieve.
          </h2>

          <p className="mt-5 text-sm leading-8 text-text-muted">
            The main objectives behind the FarmSphere prototype
            are focused on monitoring, automation and safety.
          </p>
        </div>

        <div className="mt-12 grid gap-x-10 sm:grid-cols-2">
          {objectives.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex gap-5 border-t border-white/[0.08] py-7"
              >
                <span className="pt-1 text-xs font-semibold text-accent/50">
                  0{index + 1}
                </span>

                <div className="flex-1">
                  <Icon size={22} className="text-accent" />

                  <h3 className="mt-4 text-base font-semibold text-text-primary">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-text-muted">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Modules() {
  return (
    <section className="px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <Eyebrow>System modules</Eyebrow>

          <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-5xl">
            Four areas of operation.
          </h2>

          <p className="mt-5 text-sm leading-8 text-text-muted">
            Each module represents a different part of the
            proposed FarmSphere system.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {modules.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.number}
                className="glass glass-hover rounded-2xl p-6 sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/15 bg-cyan-400/[0.06]">
                    <Icon size={22} className="text-accent" />
                  </div>

                  <span className="text-sm font-semibold text-text-muted/50">
                    {item.number}
                  </span>
                </div>

                <h3 className="mt-6 text-lg font-semibold text-text-primary">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-text-muted">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Technology() {
  return (
    <section className="border-y border-white/[0.05] bg-surface/40 px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <Eyebrow>Technology overview</Eyebrow>

          <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-5xl">
            Hardware meets software.
          </h2>

          <p className="mt-5 text-sm leading-8 text-text-muted">
            The project combines an embedded controller,
            connected sensors and a web application.
            The final device communication layer remains
            subject to hardware testing.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {technologies.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.name}
                className="border-t border-white/[0.09] py-6"
              >
                <Icon size={23} className="text-accent" />

                <h3 className="mt-5 text-sm font-semibold text-text-primary">
                  {item.name}
                </h3>

                <p className="mt-2 text-xs text-text-muted">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-8 rounded-xl border border-amber-400/15 bg-amber-400/[0.035] p-5">
          <p className="text-xs leading-7 text-text-muted">
            <span className="font-semibold text-amber-300">
              Development status:
            </span>{" "}
            The website dashboard currently displays simulated
            readings. Physical ESP32 integration and live
            sensor communication are not yet complete.
          </p>
        </div>
      </div>
    </section>
  );
}

function AboutCTA() {
  return (
    <section className="px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl rounded-2xl border border-cyan-400/15 bg-gradient-to-br from-cyan-400/[0.07] via-surface to-violet-400/[0.05] p-7 sm:p-12">
        <div className="max-w-2xl">
          <Eyebrow>Explore further</Eyebrow>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-text-primary sm:text-4xl">
            See how FarmSphere comes together.
          </h2>

          <p className="mt-5 text-sm leading-7 text-text-muted">
            Explore the project dashboard and discover the
            different monitoring modules in our prototype.
          </p>

          <Link
            to="/dashboard"
            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-accent px-6 py-3.5 text-sm font-bold text-background transition hover:bg-cyan-300"
          >
            Open Dashboard
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <main className="overflow-hidden">
      <ProjectHero />
      <Introduction />
      <Motivation />
      <Objectives />
      <Modules />
      <Technology />
      <AboutCTA />
    </main>
  );
}
