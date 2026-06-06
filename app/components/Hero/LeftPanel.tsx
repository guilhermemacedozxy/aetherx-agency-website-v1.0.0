"use client";

import Image from "next/image";
import { m } from "framer-motion";
import PremiumButton1 from "../ui/PremiumButton1";
import PremiumButton2 from "../ui/PremiumButton2";

function QRCodeIcon() {
  return (
    <svg
      width="42"
      height="42"
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0"
    >
      <rect x="1" y="1" width="14" height="14" rx="2.5" fill="white" fillOpacity="0.92" />
      <rect x="4" y="4" width="8" height="8" fill="#1a0000" fillOpacity="0.75" />
      <rect x="6.5" y="6.5" width="3" height="3" fill="white" fillOpacity="0.92" />
      <rect x="27" y="1" width="14" height="14" rx="2.5" fill="white" fillOpacity="0.92" />
      <rect x="30" y="4" width="8" height="8" fill="#1a0000" fillOpacity="0.75" />
      <rect x="32.5" y="6.5" width="3" height="3" fill="white" fillOpacity="0.92" />
      <rect x="1" y="27" width="14" height="14" rx="2.5" fill="white" fillOpacity="0.92" />
      <rect x="4" y="30" width="8" height="8" fill="#1a0000" fillOpacity="0.75" />
      <rect x="6.5" y="32.5" width="3" height="3" fill="white" fillOpacity="0.92" />
      <rect x="27" y="27" width="4" height="4" rx="0.8" fill="white" fillOpacity="0.88" />
      <rect x="34" y="27" width="4" height="4" rx="0.8" fill="white" fillOpacity="0.88" />
      <rect x="27" y="34" width="4" height="4" rx="0.8" fill="white" fillOpacity="0.88" />
      <rect x="34" y="34" width="4" height="4" rx="0.8" fill="white" fillOpacity="0.88" />
      <rect x="30.5" y="30.5" width="3" height="3" rx="0.5" fill="white" fillOpacity="0.7" />
      <rect x="17" y="1" width="2.5" height="2.5" rx="0.5" fill="white" fillOpacity="0.7" />
      <rect x="21.5" y="1" width="2.5" height="2.5" rx="0.5" fill="white" fillOpacity="0.7" />
      <rect x="1" y="17" width="2.5" height="2.5" rx="0.5" fill="white" fillOpacity="0.7" />
      <rect x="1" y="21.5" width="2.5" height="2.5" rx="0.5" fill="white" fillOpacity="0.7" />
      <rect x="17" y="17" width="3" height="3" rx="0.5" fill="white" fillOpacity="0.8" />
      <rect x="22" y="17" width="3" height="3" rx="0.5" fill="white" fillOpacity="0.8" />
      <rect x="17" y="22" width="3" height="3" rx="0.5" fill="white" fillOpacity="0.8" />
      <rect x="22" y="22" width="3" height="3" rx="0.5" fill="white" fillOpacity="0.8" />
    </svg>
  );
}

interface LeftPanelProps {
  introComplete: boolean;
}

export default function LeftPanel({ introComplete }: LeftPanelProps) {
  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden flex flex-col bg-[url('/images/background-gui-macedo-1-opt.jpg')] bg-cover bg-center">
      <div className="relative flex flex-col flex-1 border-0 outline-none">
        {/* Legibility overlay */}
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(160deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.06)_50%,rgba(0,0,0,0.24)_100%)]" />

        {/* Content */}
        {introComplete && (
          <div className="relative z-10 flex flex-col h-full justify-center p-[clamp(1.75rem,3vw,3.25rem)] border-0 outline-none">
            {/* Logo */}
            <m.div
              className="mt-15 mb-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
            >
              <Image
                src="/images/logo.svg"
                alt="AetherX"
                width={58}
                height={25}
                className="brightness-0 invert w-14.5 h-6.25"
              />
            </m.div>

            {/* Main copy */}
            <div className="flex flex-col">
              <m.h1
                className="text-white text-[clamp(2.125rem,3.6vw,3.875rem)] leading-[1.08] tracking-tight font-extralight"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: "easeOut", delay: 0.15 }}
              >
                Design e tecnologia
                <br />
                para quem quer
                <br />
                <span className="font-semibold">presença digital.</span>
              </m.h1>

              <m.p
                className="text-white text-lg font-extralight leading-[1.65] w-144.75 max-w-full mt-6 mb-6"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: "easeOut", delay: 0.25 }}
              >
                Fortaleça sua presença digital com design estratégico, tecnologia
                e soluções criadas para destacar sua marca no mercado.
              </m.p>

              <m.div
                className="flex items-center flex-wrap mb-27.5 gap-[clamp(0.75rem,1vw,1.125rem)]"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: "easeOut", delay: 0.35 }}
              >
                <PremiumButton1 href="#contato">Falar conosco</PremiumButton1>
                <PremiumButton2 href="#saiba-mais">Saiba Mais</PremiumButton2>
              </m.div>
            </div>

            {/* QR info */}
            <m.div
              className="flex items-center gap-[clamp(0.625rem,0.8vw,0.875rem)]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.45 }}
            >
              <QRCodeIcon />
              <div>
                <p className="leading-tight text-white text-base font-semibold">
                  Design estratégico e desenvolvimento profissional
                </p>
                <p className="leading-tight text-white text-sm font-extralight">
                  Atendimento digital para clientes do mundo inteiro.
                </p>
              </div>
            </m.div>
          </div>
        )}
      </div>
    </div>
  );
}
