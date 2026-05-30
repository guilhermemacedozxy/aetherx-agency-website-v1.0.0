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

    /* Posição inicial: baixo-esquerda, desfocada */
    gsap.set(logo, {
      opacity: 0,
      filter: "blur(22px)",
      scale: 0.94,
      x: -45,
      y: 45,
    });

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = "";
        overlay.remove();
        onComplete();
      },
    });

    tl
      /* Varre de baixo-esquerda → centro, blur sumindo */
      .to(logo, {
        opacity: 1,
        filter: "blur(0px)",
        scale: 1,
        x: 0,
        y: 0,
        duration: 0.95,
        ease: "power3.out",
      })
      /* Pausa */
      .to({}, { duration: 0.85 })
      /* Varre do centro → cima-direita, blur crescendo */
      .to(logo, {
        opacity: 0,
        filter: "blur(18px)",
        scale: 1.02,
        x: 45,
        y: -45,
        duration: 0.6,
        ease: "power2.in",
      })
      /* Overlay dissolve */
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
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white pointer-events-none"
      aria-hidden="true"
    >
      <div ref={logoRef} style={{ width: "clamp(48px, 5vw, 70px)" }}>
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
