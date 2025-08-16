"use client";

import { motion } from "framer-motion";
import { SKILLS } from "@/data/content";

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold">Skills</h2>
        <p className="text-ink-dim mt-2">Tech I use to turn ideas into shipped products.</p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-wrap gap-2"
      >
        {SKILLS.map((s) => (
          <span key={s} className="rounded-lg border border-white/10 px-3 py-1.5 text-sm text-ink-dim">
            {s}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
