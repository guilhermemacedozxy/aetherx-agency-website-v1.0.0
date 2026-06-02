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
    if (!overlay || !logo) return;

    document.body.style.overflow = "hidden";

    gsap.set(logo, {
      opacity: 0,
      y: 22,
      filter: "blur(20px)",
      scale: 0.94,
    });

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = "";
        overlay.remove();
        onComplete();
      },
    });

    tl
      /* Entrada: logo emerge do blur com suavidade */
      .to(logo, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        scale: 1,
        duration: 1.15,
        ease: "power3.out",
      })
      /* Pausa: logo nítida e estável */
      .to({}, { duration: 0.85 })
      /* Saída: logo flutua para cima enquanto se dissolve em blur */
      .to(logo, {
        opacity: 0,
        y: -14,
        filter: "blur(18px)",
        scale: 1.07,
        duration: 0.6,
        ease: "power2.in",
      })
      /* Overlay desaparece levemente após a logo começar a sair */
      .to(overlay, {
        opacity: 0,
        duration: 0.45,
        ease: "power2.inOut",
      }, "<0.12");

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
      <div
        ref={logoRef}
        style={{ width: "clamp(48px, 5vw, 70px)", opacity: 0, willChange: "transform, filter, opacity" }}
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
