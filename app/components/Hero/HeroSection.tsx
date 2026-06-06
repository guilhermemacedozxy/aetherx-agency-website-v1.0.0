"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";

interface HeroSectionProps {
  introComplete: boolean;
}

export default function HeroSection({ introComplete }: HeroSectionProps) {
  const containerRef  = useRef<HTMLDivElement>(null);
  const leftWrapRef   = useRef<HTMLDivElement>(null);
  const rightWrapRef  = useRef<HTMLDivElement>(null);
  const animatedRef   = useRef(false);
  const [panelsOpen, setPanelsOpen] = useState(false);

  useEffect(() => {
    if (!introComplete || animatedRef.current) return;
    const container = containerRef.current;
    const leftWrap  = leftWrapRef.current;
    const rightWrap = rightWrapRef.current;
    if (!container || !leftWrap || !rightWrap) return;

    animatedRef.current = true;

    const containerWidth = container.offsetWidth;
    const panelWidth     = leftWrap.offsetWidth;
    const centerX        = (containerWidth - panelWidth) / 2;

    const leftDelta  = centerX - leftWrap.offsetLeft;
    const rightDelta = centerX - rightWrap.offsetLeft;

    /* Painéis sobrepostos no centro: ligeiramente reduzidos */
    gsap.set(leftWrap, {
      x: leftDelta,
      opacity: 1,
      zIndex: 2,
      scale: 0.95,
      willChange: "transform",
    });
    gsap.set(rightWrap, {
      x: rightDelta,
      opacity: 1,
      zIndex: 1,
      scale: 0.95,
      willChange: "transform",
    });

    /* Abertura cinematográfica: deslize suave + scale expandindo */
    gsap.timeline()
      .to(leftWrap, {
        x: 0,
        scale: 1,
        duration: 1.7,
        ease: "expo.inOut",
      })
      .to(rightWrap, {
        x: 0,
        scale: 1,
        duration: 1.7,
        ease: "expo.inOut",
      }, "<0.05")
      .call(() => {
        leftWrap.style.willChange  = "auto";
        rightWrap.style.willChange = "auto";
        setPanelsOpen(true);
      });
  }, [introComplete]);

  return (
    <section
      id="inicio"
      className="relative flex items-stretch h-screen overflow-hidden pb-4 bg-white"
      style={{
        paddingTop:   "var(--hero-padding-top)",
        paddingLeft:  "var(--panel-h-padding)",
        paddingRight: "var(--panel-h-padding)",
      }}
    >
      <div
        ref={containerRef}
        className="relative w-full flex items-stretch"
        style={{ gap: "var(--panel-gap)" }}
      >
        <div ref={leftWrapRef} className="flex-1 max-w-[57rem] opacity-0">
          <LeftPanel introComplete={panelsOpen} />
        </div>
        <div ref={rightWrapRef} className="flex-1 max-w-[57rem] opacity-0">
          <RightPanel />
        </div>
      </div>
    </section>
  );
}
