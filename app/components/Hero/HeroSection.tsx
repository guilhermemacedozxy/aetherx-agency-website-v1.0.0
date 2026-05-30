"use client";

import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";

interface HeroSectionProps {
  introComplete: boolean;
}

export default function HeroSection({ introComplete }: HeroSectionProps) {
  return (
    <section
      id="inicio"
      className="relative flex items-stretch h-screen overflow-hidden pb-4 bg-white"
      style={{
        paddingTop: "var(--hero-padding-top)",
        paddingLeft: "var(--panel-h-padding)",
        paddingRight: "var(--panel-h-padding)",
      }}
    >
      <div
        className="w-full flex items-stretch"
        style={{ gap: "var(--panel-gap)" }}
      >
        <LeftPanel introComplete={introComplete} />
        <RightPanel introComplete={introComplete} />
      </div>
    </section>
  );
}
