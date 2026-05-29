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
  const leftCurtainRef = useRef<HTMLDivElement>(null);
  const rightCurtainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    const logo = logoRef.current;
    const left = leftCurtainRef.current;
    const right = rightCurtainRef.current;

    if (!overlay || !logo || !left || !right) return;

    document.body.style.overflow = "hidden";

    gsap.set(logo, { opacity: 0, scale: 0.91 });
    gsap.set([left, right], { xPercent: 0 });

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = "";
        overlay.remove();
        onComplete();
      },
    });

    tl
      // Logo fades in
      .to(logo, {
        opacity: 1,
        scale: 1,
        duration: 0.9,
        ease: "power4.out",
      })
      // Hold
      .to({}, { duration: 0.75 })
      // Logo fades out
      .to(logo, {
        opacity: 0,
        scale: 1.07,
        duration: 0.55,
        ease: "power4.in",
      })
      // Left curtain exits left
      .to(
        left,
        {
          xPercent: -100,
          duration: 1.35,
          ease: "power4.inOut",
        },
        "<0.06"
      )
      // Right curtain exits right — starts simultaneously
      .to(
        right,
        {
          xPercent: 100,
          duration: 1.35,
          ease: "power4.inOut",
        },
        "<"
      );

    return () => {
      tl.kill();
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999] pointer-events-none"
      aria-hidden="true"
    >
      {/* Left curtain */}
      <div
        ref={leftCurtainRef}
        className="absolute inset-y-0 left-0 w-1/2 bg-black gpu"
        style={{ willChange: "transform" }}
      />

      {/* Right curtain */}
      <div
        ref={rightCurtainRef}
        className="absolute inset-y-0 right-0 w-1/2 bg-black gpu"
        style={{ willChange: "transform" }}
      />

      {/* Logo — centered above curtains */}
      <div
        ref={logoRef}
        className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none"
      >
        <div
          style={{
            width: "clamp(80px, 8.5vw, 136px)",
            filter: "brightness(0) invert(1)",
          }}
        >
          <Image
            src="/images/logo.svg"
            alt="AetherX"
            width={136}
            height={68}
            priority
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
