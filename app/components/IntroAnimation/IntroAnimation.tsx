"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

interface IntroAnimationProps {
  onComplete: () => void;
}

export default function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    const logo = logoRef.current;
    if (!overlay || !logo) return;

    document.body.style.overflow = "hidden";

    gsap.set(logo, { opacity: 0, filter: "blur(14px)", scale: 0.97 });

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = "";
        overlay.remove();
        onComplete();
      },
    });

    tl
      // Logo aparece com blur clearing
      .to(logo, {
        opacity: 1,
        filter: "blur(0px)",
        scale: 1,
        duration: 0.85,
        ease: "power2.out",
      })
      // Pausa
      .to({}, { duration: 0.9 })
      // Logo desaparece com suave blur
      .to(logo, {
        opacity: 0,
        filter: "blur(10px)",
        scale: 1.03,
        duration: 0.65,
        ease: "power2.in",
      })
      // Overlay dissolve
      .to(
        overlay,
        {
          opacity: 0,
          duration: 0.3,
          ease: "power1.inOut",
        },
        "<0.05"
      );

    return () => {
      tl.kill();
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-9999 flex items-center justify-center bg-white pointer-events-none"
      aria-hidden="true"
    >
      <div ref={logoRef} style={{ width: "clamp(72px, 7.5vw, 112px)" }}>
        <Image
          src="/images/logo.svg"
          alt="AetherX"
          width={112}
          height={56}
          priority
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}
