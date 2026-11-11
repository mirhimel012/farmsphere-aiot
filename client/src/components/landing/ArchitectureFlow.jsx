
import { motion } from "motion/react";
import {
  Activity,
  Cpu,
  Wifi,
  LayoutDashboard,
} from "lucide-react";

const steps = [
  {
    icon: Activity,
    title: "Sensors & Devices",
    detail: "Collect environmental and system data",
    number: "01",
  },
  {
    icon: Cpu,
    title: "ESP32 Controller",
    detail: "Process inputs and control hardware",
    number: "02",
  },
  {
    icon: Wifi,
    title: "Communication Layer",
    detail: "Transfer information through Wi-Fi",
    number: "03",
  },
  {
    icon: LayoutDashboard,
    title: "FarmSphere Dashboard",
    detail: "Monitor data and request device actions",
    number: "04",
  },
];

export default function ArchitectureFlow() {
  return (
    <div className="grid gap-4 md:grid-cols-4">
      {steps.map((step, index) => {
        const Icon = step.icon;

        return (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.12, duration: 0.5 }}
            className="relative"
          >
            <div className="glass h-full rounded-2xl p-6">
              <div className="mb-6 flex items-center justify-between">
                <Icon size={27} className="text-accent" />
                <span className="text-xs text-text-muted">
                  {step.number}
                </span>
              </div>

              <h3 className="font-semibold">
                {step.title}
              </h3>

              <p className="mt-3 text-xs leading-6 text-text-muted">
                {step.detail}
              </p>
            </div>

            {index !== steps.length - 1 && (
              <div className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-accent md:block">
                →
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
