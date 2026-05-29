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
      className="relative flex items-center"
      style={{
        minHeight: "100vh",
        paddingTop: "calc(var(--navbar-height) + clamp(14px, 1.5vh, 24px))",
        paddingBottom: "clamp(14px, 1.5vh, 24px)",
        paddingLeft: "var(--panel-h-padding)",
        paddingRight: "var(--panel-h-padding)",
        background: "#ffffff",
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
