"use client";

import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { PERSONAL } from "@/data/content";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
  { href: "#home", label: "Home" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#showcase", label: "Showcase" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

function useLocalTime() {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000 * 30);
    return () => clearInterval(id);
  }, []);
  const time = useMemo(
    () => now.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" }),
    [now]
  );
  return time;
}

export function DynamicIslandDesktop() {
  const time = useLocalTime();
  const controls = useAnimation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    controls.start({
      y: [0, -6, 0, -3, 0],
      transition: { duration: 12, repeat: Infinity, ease: "easeInOut" },
    });
  }, [controls]);

  return (
    <motion.div
      animate={controls}
      // ⬇️ Centered horizontally, positioned near the top (not screen middle)
      className="pointer-events-none fixed left-48 top-4 z-40 hidden -translate-x-1/2 md:block w-[min(92%,1100px)] mt-2"
    >
      <div className="pointer-events-auto rounded-island glass shadow-glow shadow-glow2 overflow-hidden">
        <div className="flex items-center justify-between gap-3 px-6 py-3">
          {/* Identity */}
          <div className="flex items-center gap-3">
            <div className="rounded-island glass px-3 py-1.5 text-sm font-semibold">W</div>
            <div className="text-sm">
              <span className="font-medium">{PERSONAL.name} “{PERSONAL.alias}”</span>
              <span className="opacity-60"> — {PERSONAL.title}</span>
            </div>
          </div>

          {/* Status/time */}
          <div className="text-sm text-ink-dim hidden md:block">
            {PERSONAL.location} <span className="opacity-50">•</span> {time} local
          </div>

          {/* Menu toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="island-menu"
            className="rounded-md glass px-3 py-2 text-sm"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Dropdown with nav links */}
        <AnimatePresence>
          {open && (
            <motion.nav
              id="island-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ type: "tween", duration: 0.28 }}
              className="border-t border-white/5"
            >
              <ul className="grid grid-cols-2 md:flex md:flex-wrap gap-2 px-4 py-4">
                {links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="block rounded-lg px-3 py-2 text-sm hover:bg-white/5"
                      onClick={() => setOpen(false)}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export function DynamicIslandMobile() {
  const controls = useAnimation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    controls.start({
      y: [0, -4, 0, -2, 0],
      transition: { duration: 10, repeat: Infinity, ease: "easeInOut" },
    });
  }, [controls]);

  return (
    <>
      {/* Floating initials pill (top-left), dynamic effect kept */}
      <motion.div animate={controls} className="fixed left-4 top-4 z-40 md:hidden">
        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="island-mobile-menu"
          className="rounded-island glass px-3 py-2 text-sm font-semibold"
        >
          W
        </button>
      </motion.div>

      {/* Same mobile menu behavior you liked */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden bg-black/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <motion.nav
              id="island-mobile-menu"
              initial={{ y: -24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 26 }}
              className="absolute left-4 right-4 top-16 rounded-2xl glass p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <ul className="grid gap-2">
                {links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="block rounded-lg px-3 py-3 text-sm hover:bg-white/5"
                      onClick={() => setOpen(false)}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
