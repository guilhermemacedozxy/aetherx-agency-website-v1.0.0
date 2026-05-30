"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

interface IntroAnimationProps {
  onComplete: () => void;
}

/* Clip-path do wipe diagonal exato a 45° (baixo-esquerda → cima-direita).
   p=0 → ponto no canto BL  |  p=0.5 → triângulo diagonal  |  p=1 → retângulo completo */
function diagonalClip(p: number): string {
  if (p <= 0.5) {
    const t     = p * 2;
    const leftY = ((1 - t) * 100).toFixed(1);
    const botX  = (t * 100).toFixed(1);
    return `polygon(0% 100%, 0% ${leftY}%, ${botX}% 100%)`;
  }
  const t      = (p - 0.5) * 2;
  const topX   = (t * 100).toFixed(1);
  const rightY = ((1 - t) * 100).toFixed(1);
  return `polygon(0% 100%, 0% 0%, ${topX}% 0%, 100% ${rightY}%, 100% 100%)`;
}

export default function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const logoRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    const logo    = logoRef.current;
    if (!overlay || !logo) return;

    document.body.style.overflow = "hidden";

    /* opacity:0 garante que o blur não vaze antes do wipe começar.
       O filter é distribuído com o clip-path somente enquanto opacity > 0. */
    gsap.set(logo, {
      opacity:  0,
      filter:   "blur(14px)",
      clipPath: "polygon(0% 100%, 0% 100%, 0% 100%)",
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
      /* Os três efeitos caminham juntos:
         clip-path abre o wipe diagonal, blur some, opacity sobe —
         sem mancha inicial porque opacity parte de 0. */
      .to(proxy, {
        p: 1,
        duration: 1.25,
        ease: "power3.inOut",
        onUpdate() {
          const p = proxy.p;
          logo.style.clipPath = diagonalClip(p);
          logo.style.filter   = `blur(${((1 - p) * 14).toFixed(1)}px)`;
          logo.style.opacity  = p.toFixed(3);
        },
      })
      /* Pausa: logo totalmente revelada, nítida */
      .to({}, { duration: 0.75 })
      /* Saída: desvanece junto com o site surgindo */
      .to(logo, { opacity: 0, duration: 0.55, ease: "power2.in" })
      .to(overlay, { opacity: 0, duration: 0.35, ease: "power1.inOut" }, "<0.05");

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
      {/* opacity:0 inline evita flash antes do GSAP iniciar */}
      <div ref={logoRef} style={{ width: "clamp(48px, 5vw, 70px)", opacity: 0 }}>
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
