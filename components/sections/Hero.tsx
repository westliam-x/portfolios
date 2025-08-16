"use client";

import { motion } from "framer-motion";
import { PERSONAL, SOCIALS } from "@/data/content";
import {
  FaGithub,
  FaLinkedin,
  FaGlobe,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.08 * i,
      duration: 0.5,
      type: "spring",
      stiffness: 220,
      damping: 24,
    },
  }),
};

const iconMap: Record<string, JSX.Element> = {
  github: <FaGithub />,
  linkedin: <FaLinkedin />,
  globe: <FaGlobe />,
  mail: <FaEnvelope />,
};

export function Hero() {
  return (
    <section id="home" className="section pt-32 md:pt-40">
      <div className="flex flex-col gap-8">
        <motion.h1
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-4xl md:text-6xl font-semibold tracking-tight text-ink"
        >
          {PERSONAL.name} <span className="opacity-60">“{PERSONAL.alias}”</span>
          <br />
          <span className="text-ink">
            I build calm, fast, lovable interfaces.
          </span>
        </motion.h1>

        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          custom={1}
          variants={fadeUp}
          className="max-w-2xl text-ink-dim text-lg leading-relaxed"
        >
          {PERSONAL.shortBio}
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          custom={2}
          variants={fadeUp}
          className="flex flex-wrap items-center gap-3"
        >
          <a
            href="#case-studies"
            className="rounded-xl bg-white/10 hover:bg-white/15 px-5 py-3"
          >
            See work
          </a>
          <a
            href={`mailto:${PERSONAL.email}`}
            className="rounded-xl border border-white/10 hover:bg-white/5 px-5 py-3"
          >
            Say hello
          </a>
          <a
            href="/Emelifonwu-William-Resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-xl bg-accent-cyan/20 hover:bg-accent-cyan/30 px-5 py-3"
          >
            <FaDownload /> Resume
          </a>

          <div className="flex items-center gap-3 ml-2">
            {SOCIALS.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-sm text-ink-dim hover:text-ink hover:bg-white/5"
                aria-label={s.name}
                title={s.name}
              >
                {(s.icon && iconMap[s.icon]) ?? null}
                <span>{s.name}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
