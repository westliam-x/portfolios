import { DynamicIslandDesktop, DynamicIslandMobile } from "@/components/DynamicIsland";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Showcase } from "@/components/sections/Showcase"; // ⬅️ new
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Footer } from "@/components/sections/Footer";

export default function Page() {
  return (
    <>
      <div className="hidden md:block">
        <DynamicIslandDesktop />
      </div>
      <div className="md:hidden">
        <DynamicIslandMobile />
      </div>

      <main>
        <Hero />
        <Projects />   {/* Case Studies — 4 items */}
        <Showcase />   {/* Infinite carousel */}
        <Experience />
        <Skills />
      </main>

      <Footer />
    </>
  );
}
