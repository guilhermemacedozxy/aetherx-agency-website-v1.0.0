"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

interface IntroAnimationProps {
  onComplete: () => void;
}

/* Calcula o clip-path do wipe diagonal (baixo-esquerda → cima-direita).
   p=0: nada visível (ponto no canto BL)
   p=0.5: triângulo cobrindo metade diagonal
   p=1: retângulo completo */
function diagonalClip(p: number): string {
  if (p <= 0.5) {
    const t = p * 2;
    const leftY  = ((1 - t) * 100).toFixed(1);
    const botX   = (t * 100).toFixed(1);
    return `polygon(0% 100%, 0% ${leftY}%, ${botX}% 100%)`;
  } else {
    const t = (p - 0.5) * 2;
    const topX   = (t * 100).toFixed(1);
    const rightY = ((1 - t) * 100).toFixed(1);
    return `polygon(0% 100%, 0% 0%, ${topX}% 0%, 100% ${rightY}%, 100% 100%)`;
  }
}

export default function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const logoRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    const logo    = logoRef.current;
    if (!overlay || !logo) return;

    document.body.style.overflow = "hidden";

    /* Estado inicial: logo bloqueada no canto inferior-esquerdo, blur alto */
    gsap.set(logo, {
      clipPath: "polygon(0% 100%, 0% 100%, 0% 100%)",
      filter: "blur(14px)",
      opacity: 1,
    });

    const proxy = { p: 0 };

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = "";
        overlay.remove();
        onComplete();
      },
    });

    tl
      /* Wipe diagonal BL → TR com blur se dissolvendo conforme avança */
      .to(proxy, {
        p: 1,
        duration: 1.25,
        ease: "power3.inOut",
        onUpdate() {
          const p = proxy.p;
          logo.style.clipPath = diagonalClip(p);
          logo.style.filter   = `blur(${((1 - p) * 14).toFixed(1)}px)`;
        },
      })
      /* Pausa: logo totalmente revelada e nítida */
      .to({}, { duration: 0.75 })
      /* Saída: desvanece junto com o site surgindo */
      .to(logo, {
        opacity: 0,
        duration: 0.55,
        ease: "power2.in",
      })
      /* Dissolve do overlay */
      .to(
        overlay,
        { opacity: 0, duration: 0.35, ease: "power1.inOut" },
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
