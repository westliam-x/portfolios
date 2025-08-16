"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "@/data/content";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";

export function Projects() {
  const CASES = PROJECTS.slice(0, 4);
  return (
    <section id="case-studies" className="section">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold">Case Studies</h2>
        <p className="text-ink-dim mt-2">Four curated builds with measurable impact.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {CASES.map((p, idx) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: idx * 0.05 }}
            className="rounded-2xl glass overflow-hidden hover:shadow-glow"
          >
            {/* Image banner */}
            <div className="relative h-48 overflow-hidden">
              {p.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <motion.img
                  src={p.image}
                  alt={`${p.name} preview`}
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.04 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                />
              ) : (
                <div className="h-full w-full bg-grid" />
              )}
            </div>

            {/* Content */}
            <div className="p-5">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-lg font-semibold">{p.name}</h3>

                <div className="flex gap-2 text-sm text-ink-dim">
                  {p.link && (
                    <a
                      className="inline-flex items-center gap-1 rounded-md border border-white/10 px-2.5 py-1.5 hover:bg-white/5"
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      title="Live"
                      aria-label="Live demo"
                    >
                      <FaExternalLinkAlt /> <span className="hidden sm:inline">Live</span>
                    </a>
                  )}
                  {p.repo && (
                    <a
                      className="inline-flex items-center gap-1 rounded-md border border-white/10 px-2.5 py-1.5 hover:bg-white/5"
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      title="Code"
                      aria-label="Source code"
                    >
                      {/* Show GitHub icon if it’s a GH link, otherwise a generic Code icon */}
                      {p.repo.includes("github.com") ? <FaGithub /> : <FaCode />}
                      <span className="hidden sm:inline">Code</span>
                    </a>
                  )}
                </div>
              </div>

              <p className="text-ink-dim mt-1">{p.tagline}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <span key={t} className="rounded-lg border border-white/10 px-2.5 py-1 text-xs text-ink-dim">{t}</span>
                ))}
              </div>

              <ul className="mt-4 list-disc list-inside text-sm text-ink-dim space-y-1">
                {p.highlights.map((h) => <li key={h}>{h}</li>)}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
