"use client";

import { motion } from "framer-motion";
import { EXPERIENCE } from "@/data/content";

export function Experience() {
  return (
    <section id="experience" className="section">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold">Experience</h2>
        <p className="text-ink-dim mt-2">Places I’ve built and improved software.</p>
      </div>

      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10 hidden md:block" />
        <div className="space-y-6">
          {EXPERIENCE.map((x, idx) => (
            <motion.div
              key={x.company + idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: idx * 0.05, type: "spring", stiffness: 220, damping: 22 }}
              className="rounded-2xl glass p-5"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h3 className="text-lg font-semibold">{x.role}</h3>
                  <p className="text-ink-dim">{x.company}{x.location ? ` — ${x.location}` : ""}</p>
                </div>
                <div className="text-sm text-ink-dim">{x.period}</div>
              </div>
              <p className="mt-3 text-ink-dim">{x.summary}</p>
              <ul className="mt-3 space-y-1 list-disc list-inside text-sm text-ink-dim">
                {x.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
