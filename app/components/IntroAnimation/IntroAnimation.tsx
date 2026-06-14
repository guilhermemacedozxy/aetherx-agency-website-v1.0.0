"use client";

import { useEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";

interface IntroAnimationProps {
  onComplete: () => void;
}

export default function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const logoRef    = useRef<HTMLDivElement>(null);
  const tlRef      = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    return () => {
      tlRef.current?.kill();
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, []);

  const runAnimation = useCallback(() => {
    const overlay = overlayRef.current;
    const logo    = logoRef.current;
    if (!overlay || !logo) return;

    gsap.set(logo, { opacity: 0, y: 24, scale: 0.95 });

    tlRef.current = gsap.timeline({
      onComplete: () => {
        document.documentElement.style.overflow = "";
        document.body.style.overflow = "";
        overlay.remove();
        onComplete();
      },
    });

    tlRef.current
      .to(logo, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
      })
      .to({}, { duration: 0.9 })
      .to(logo, {
        opacity: 0,
        y: -16,
        scale: 1.06,
        duration: 0.55,
        ease: "power2.in",
      })
      .to(overlay, {
        opacity: 0,
        duration: 0.45,
        ease: "power2.inOut",
      }, "<0.1");
  }, [onComplete]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 flex items-center justify-center bg-white pointer-events-all"
      style={{ zIndex: 9999 }}
      aria-hidden="true"
    >
      <div
        ref={logoRef}
        className="opacity-0"
        style={{
          width: "clamp(3rem, 5vw, 4.375rem)",
          willChange: "transform, opacity",
        }}
      >
        <img
          src="/images/icons/logo-aetherx.svg"
          alt="AetherX"
          width={70}
          height={35}
          onLoad={runAnimation}
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
}
