"use client";

import { motion, useAnimationFrame } from "framer-motion";
import { useRef, useState } from "react";
import { SHOWCASE } from "@/data/content";

// Simple marquee using Framer Motion: duplicates array and loops translation
export function Showcase() {
  // Duplicate to create seamless loop
  const items = [...SHOWCASE, ...SHOWCASE];

  // Optional: pause on hover
  const [paused, setPaused] = useState(false);
  const x = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useAnimationFrame((t, delta) => {
    if (paused) return;
    // speed in px/ms (lower = slower)
    const speed = 0.1;
    x.current -= delta * speed;
    const width = containerRef.current?.scrollWidth || 3000;
    // wrap
    if (Math.abs(x.current) > width / 2) x.current = 0;
    if (containerRef.current) {
      containerRef.current.style.transform = `translateX(${x.current}px)`;
    }
  });

  return (
    <section id="showcase" className="section">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold">Showcase</h2>
        <p className="text-ink-dim mt-2">A wider stream of client work and personal projects.</p>
      </div>

      <div
        className="relative overflow-hidden rounded-2xl glass p-4"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
      >
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-bg/90 to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-bg/90 to-transparent pointer-events-none" />

        <div className="whitespace-nowrap will-change-transform" ref={containerRef}>
          {items.map((it, i) => (
            <a
              key={i + it.title}
              href={it.href || "#"}
              className="mr-4 inline-block w-[320px] align-top"
            >
              <div className="rounded-xl overflow-hidden border border-white/5 bg-bg-softer">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={it.image}
                  alt={it.title}
                  className="h-44 w-full object-cover"
                  loading="lazy"
                />
                <div className="px-3 py-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-medium">{it.title}</h4>
                    <span className="text-[11px] text-ink-dim">{it.kind}</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <p className="text-xs text-ink-dim mt-3">
        Tip: hover (or touch) to pause. Click a card to open.
      </p>
    </section>
  );
}
