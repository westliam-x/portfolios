"use client";

import { PERSONAL } from "@/data/content";
import { FaDownload } from "react-icons/fa";

export function Footer() {
  return (
    <footer id="contact" className="section pt-0 pb-16">
      <div className="rounded-2xl glass p-6 text-center">
        <h3 className="text-xl font-semibold">Let’s build something great.</h3>
        <p className="text-ink-dim mt-2">
          Open to roles, contracts, and collaborations.
        </p>
        <a
          className="inline-block mt-4 rounded-xl bg-white/10 hover:bg-white/15 px-5 py-3"
          href={`mailto:${PERSONAL.email}`}
        >
          {PERSONAL.email}
        </a>
        <a
          href="/Emelifonwu-William-Resume.pdf"
          download
          className="inline-flex items-center gap-2 rounded-xl bg-accent-cyan/20 hover:bg-accent-cyan/30 px-5 py-3"
        >
               <FaDownload /> Resume
        </a>

        <p className="text-ink-dim mt-6 text-sm">
          © {new Date().getFullYear()} {PERSONAL.name} “{PERSONAL.alias}”. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}
