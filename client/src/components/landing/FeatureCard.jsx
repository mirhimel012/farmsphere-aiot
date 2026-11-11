
import { motion } from "motion/react";

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  number,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="glass glass-hover group rounded-2xl p-6 sm:p-7"
    >
      <div className="mb-7 flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10">
          <Icon size={24} className="text-accent transition-transform duration-300 group-hover:scale-110" />
        </div>

        <span className="text-xs font-semibold tracking-widest text-text-muted">
          {number}
        </span>
      </div>

      <h3 className="text-lg font-semibold text-text-primary">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-text-muted">
        {description}
      </p>
    </motion.div>
  );
}
