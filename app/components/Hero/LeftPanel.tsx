"use client";

import Image from "next/image";
import { motion } from "framer-motion";
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
    <motion.div
      className="relative flex-1 rounded-[20px] overflow-hidden flex flex-col max-w-[912px] bg-[url('/images/background-gui-macedo-1.svg')] bg-cover bg-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: introComplete ? 1 : 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="relative flex flex-col flex-1">
        {/* Legibility overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(160deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.06) 50%, rgba(0,0,0,0.24) 100%)",
          }}
        />

        {/* Content — mounts only after intro, so each item animates from initial on mount */}
        {introComplete && (
          <div
            className="relative z-10 flex flex-col h-full justify-center"
            style={{ padding: "clamp(28px, 3vw, 52px)" }}
          >
            {/* Logo */}
            <motion.div
              className="mt-[60px] mb-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
            >
              <Image
                src="/images/logo.svg"
                alt="AetherX"
                width={58}
                height={25}
                className="brightness-0 invert w-[58px] h-[25px]"
              />
            </motion.div>

            {/* Main copy */}
            <div className="flex flex-col">
              <motion.h1
                className="text-white leading-[1.08] tracking-[-0.025em] font-extralight"
                style={{
                  fontSize: "clamp(34px, 3.6vw, 62px)",
                }}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: "easeOut", delay: 0.15 }}
              >
                Design e tecnologia
                <br />
                para quem quer
                <br />
                <span className="font-semibold">presença digital.</span>
              </motion.h1>

              <motion.p
                className="text-white text-lg font-extralight leading-[1.65] w-[579px] max-w-full mt-6 mb-6"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: "easeOut", delay: 0.25 }}
              >
                Fortaleça sua presença digital com design estratégico, tecnologia
                e soluções criadas para destacar sua marca no mercado.
              </motion.p>

              <motion.div
                className="flex items-center flex-wrap mb-[110px]"
                style={{ gap: "clamp(12px, 1vw, 18px)" }}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: "easeOut", delay: 0.35 }}
              >
                <PremiumButton1 href="#contato">Falar conosco</PremiumButton1>
                <PremiumButton2 href="#saiba-mais">Saiba Mais</PremiumButton2>
              </motion.div>
            </div>

            {/* QR info */}
            <motion.div
              className="flex items-center"
              style={{ gap: "clamp(10px, 0.8vw, 14px)" }}
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
            </motion.div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
