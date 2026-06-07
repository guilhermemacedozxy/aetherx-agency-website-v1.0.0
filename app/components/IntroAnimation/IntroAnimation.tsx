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

  useEffect(() => {
    const overlay = overlayRef.current;
    const logo    = logoRef.current;
    if (!overlay || !logo || !overlay.isConnected) return;

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    gsap.set(logo, {
      opacity: 0,
      y: 22,
      scale: 0.94,
    });

    const tl = gsap.timeline({
      onComplete: () => {
        document.documentElement.style.overflow = "";
        document.body.style.overflow = "";
        overlay.remove();
        onComplete();
      },
    });

    tl
      .to(logo, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.15,
        ease: "power3.out",
      })
      .to({}, { duration: 0.85 })
      .to(logo, {
        opacity: 0,
        y: -14,
        scale: 1.07,
        duration: 0.6,
        ease: "power2.in",
      })
      .to(overlay, {
        opacity: 0,
        duration: 0.45,
        ease: "power2.inOut",
      }, "<0.12");

    return () => {
      tl.kill();
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-9999 flex items-center justify-center bg-white pointer-events-all"
      aria-hidden="true"
    >
      <div
        ref={logoRef}
        style={{ width: "clamp(3rem, 5vw, 4.375rem)", opacity: 0, willChange: "transform, opacity" }}
      >
        <Image
          src="/images/logo.svg"
          alt="AetherX"
          width={70}
          height={35}
          priority
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}
