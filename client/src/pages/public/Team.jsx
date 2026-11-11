
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Users } from "lucide-react";

const teamMembers = [
  { name: "Himel Mir", initials: "HM" },
  { name: "Sadia Khan", initials: "SK" },
  { name: "Keya Akter", initials: "KA" },
  { name: "Kamrul Islam", initials: "KI" },
  { name: "Sadiya", initials: "SA" },
];

function SectionLabel({ children }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
      <span className="h-px w-6 bg-accent" />
      {children}
    </span>
  );
}

function TeamCard({ member, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-surface/70 transition duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_12px_45px_rgba(103,232,249,0.06)]"
    >
      <div className="relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br from-accent/[0.10] via-surface-light to-accent-secondary/[0.12]">
        <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
          <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-accent-secondary/10 blur-3xl" />
        </div>

        <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-white/15 bg-background/70 shadow-[0_0_40px_rgba(103,232,249,0.08)] transition duration-500 group-hover:scale-105 group-hover:border-accent/40">
          <span className="bg-gradient-to-br from-accent to-accent-secondary bg-clip-text text-3xl font-semibold tracking-wider text-transparent">
            {member.initials}
          </span>
        </div>
      </div>

      <div className="px-6 py-7 text-center">
        <h3 className="text-xl font-semibold tracking-tight text-text-primary transition-colors group-hover:text-accent">
          {member.name}
        </h3>

        <p className="mt-2 text-sm text-text-muted">
          Team Member
        </p>

        <div className="mx-auto mt-6 h-px w-12 bg-gradient-to-r from-accent/60 to-accent-secondary/60 transition-all duration-300 group-hover:w-20" />
      </div>
    </motion.article>
  );
}

export default function Team() {
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
            <SectionLabel>Meet our team</SectionLabel>

            <h1 className="mt-7 text-4xl font-semibold leading-tight tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
              The people behind
              <span className="block text-accent">
                FarmSphere.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-text-muted sm:text-lg">
              Meet the team of NestQuorix, working together to bring
              intelligent technology into modern farm management.
            </p>

            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-text-muted">
              <Users size={16} className="text-accent" />
              5 Team Members
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="px-5 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <SectionLabel>NestQuorix</SectionLabel>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
              Meet the minds behind the idea.
            </h2>

            <p className="mx-auto mt-4 max-w-xl leading-7 text-text-muted">
              A collaborative team focused on exploring practical
              applications of IoT and intelligent automation.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <TeamCard
                key={member.name}
                member={member}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Shared Vision */}
      <section className="border-y border-white/[0.06] bg-surface/40 px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <SectionLabel>Our shared vision</SectionLabel>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            Building something meaningful, together.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-text-muted">
            As NestQuorix, we aim to explore how IoT and intelligent
            automation can support agriculture, animal care, water
            management, and farm safety.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            Discover what we're building.
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-text-muted">
            Explore the technology and features behind FarmSphere AIoT V4.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/features"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-[#080a10] transition hover:brightness-110"
            >
              Explore Features
              <ArrowRight size={16} />
            </Link>

            <Link
              to="/technology"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-text-primary transition hover:border-accent/40 hover:bg-white/5"
            >
              Our Technology
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
