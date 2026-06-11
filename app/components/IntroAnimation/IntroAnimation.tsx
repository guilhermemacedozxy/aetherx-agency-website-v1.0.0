"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

interface IntroAnimationProps {
  onComplete: () => void;
}

export default function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const logoRef    = useRef<HTMLDivElement>(null);
  const lineRef    = useRef<HTMLDivElement>(null);
  const glowRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    const logo    = logoRef.current;
    const line    = lineRef.current;
    const glow    = glowRef.current;
    if (!overlay || !logo || !line || !glow || !overlay.isConnected) return;

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    gsap.set(logo, { opacity: 0, y: 32, scale: 0.88 });
    gsap.set(line, { scaleX: 0, opacity: 0.9 });
    gsap.set(glow, { opacity: 0, scale: 0.5 });

    const tl = gsap.timeline({
      onComplete: () => {
        document.documentElement.style.overflow = "";
        document.body.style.overflow = "";
        overlay.remove();
        onComplete();
      },
    });

    tl
      .to(line, {
        scaleX: 1,
        duration: 0.9,
        ease: "power2.inOut",
      })
      .to(glow, {
        opacity: 0.75,
        scale: 1,
        duration: 0.85,
        ease: "power3.out",
      }, "<0.1")
      .to(logo, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.05,
        ease: "power4.out",
      }, "<0.2")
      .to({}, { duration: 0.7 })
      .to(logo, {
        opacity: 0,
        y: -28,
        scale: 1.08,
        duration: 0.5,
        ease: "power2.in",
      })
      .to(glow, {
        opacity: 0,
        scale: 0.4,
        duration: 0.45,
        ease: "power2.in",
      }, "<")
      .to(line, {
        scaleX: 0,
        opacity: 0,
        duration: 0.4,
        ease: "power2.in",
      }, "<0.05")
      .to(overlay, {
        opacity: 0,
        duration: 0.55,
        ease: "power2.inOut",
      }, "<0.1");

    return () => {
      tl.kill();
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 flex items-center justify-center bg-black"
      style={{ zIndex: 9999 }}
      aria-hidden="true"
    >
      {/* Glow laranja atrás da logo */}
      <div
        ref={glowRef}
        className="absolute pointer-events-none"
        style={{
          width: "clamp(18rem, 35vw, 30rem)",
          height: "clamp(18rem, 35vw, 30rem)",
          background:
            "radial-gradient(circle, rgba(255,110,20,0.22) 0%, rgba(255,70,0,0.1) 40%, transparent 68%)",
          borderRadius: "50%",
          willChange: "transform, opacity",
        }}
      />

      {/* Logo + linha empilhados */}
      <div className="relative z-10 flex flex-col items-center gap-7">
        <div
          ref={logoRef}
          style={{
            width: "clamp(5rem, 9vw, 8.5rem)",
            willChange: "transform, opacity",
          }}
        >
          <Image
            src="/images/logo-main.svg"
            alt="AetherX"
            width={136}
            height={68}
            priority
            className="w-full h-auto brightness-0 invert"
          />
        </div>

        {/* Linha horizontal que se desenha */}
        <div
          ref={lineRef}
          style={{
            width: "clamp(10rem, 20vw, 18rem)",
            height: "1px",
            background:
              "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.45) 25%, rgba(255,255,255,0.45) 75%, transparent 100%)",
            transformOrigin: "center",
            willChange: "transform, opacity",
          }}
        />
      </div>
    </div>
  );
}
