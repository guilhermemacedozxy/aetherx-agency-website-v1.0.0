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
    >
      {/* Top-left finder */}
      <rect x="1" y="1" width="14" height="14" rx="2.5" fill="white" fillOpacity="0.92" />
      <rect x="4" y="4" width="8" height="8" fill="#1a0000" fillOpacity="0.75" />
      <rect x="6.5" y="6.5" width="3" height="3" fill="white" fillOpacity="0.92" />
      {/* Top-right finder */}
      <rect x="27" y="1" width="14" height="14" rx="2.5" fill="white" fillOpacity="0.92" />
      <rect x="30" y="4" width="8" height="8" fill="#1a0000" fillOpacity="0.75" />
      <rect x="32.5" y="6.5" width="3" height="3" fill="white" fillOpacity="0.92" />
      {/* Bottom-left finder */}
      <rect x="1" y="27" width="14" height="14" rx="2.5" fill="white" fillOpacity="0.92" />
      <rect x="4" y="30" width="8" height="8" fill="#1a0000" fillOpacity="0.75" />
      <rect x="6.5" y="32.5" width="3" height="3" fill="white" fillOpacity="0.92" />
      {/* Data modules — bottom-right quadrant */}
      <rect x="27" y="27" width="4" height="4" rx="0.8" fill="white" fillOpacity="0.88" />
      <rect x="34" y="27" width="4" height="4" rx="0.8" fill="white" fillOpacity="0.88" />
      <rect x="27" y="34" width="4" height="4" rx="0.8" fill="white" fillOpacity="0.88" />
      <rect x="34" y="34" width="4" height="4" rx="0.8" fill="white" fillOpacity="0.88" />
      <rect x="30.5" y="30.5" width="3" height="3" rx="0.5" fill="white" fillOpacity="0.7" />
      {/* Timing modules */}
      <rect x="17" y="1" width="2.5" height="2.5" rx="0.5" fill="white" fillOpacity="0.7" />
      <rect x="21.5" y="1" width="2.5" height="2.5" rx="0.5" fill="white" fillOpacity="0.7" />
      <rect x="1" y="17" width="2.5" height="2.5" rx="0.5" fill="white" fillOpacity="0.7" />
      <rect x="1" y="21.5" width="2.5" height="2.5" rx="0.5" fill="white" fillOpacity="0.7" />
      {/* Center data cluster */}
      <rect x="17" y="17" width="3" height="3" rx="0.5" fill="white" fillOpacity="0.8" />
      <rect x="22" y="17" width="3" height="3" rx="0.5" fill="white" fillOpacity="0.8" />
      <rect x="17" y="22" width="3" height="3" rx="0.5" fill="white" fillOpacity="0.8" />
      <rect x="22" y="22" width="3" height="3" rx="0.5" fill="white" fillOpacity="0.8" />
    </svg>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const EASE_PREMIUM = [0.16, 1, 0.3, 1] as [number, number, number, number];

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE_PREMIUM } },
};

interface LeftPanelProps {
  introComplete: boolean;
}

export default function LeftPanel({ introComplete }: LeftPanelProps) {
  return (
    <motion.div
      className="relative flex-1 rounded-[20px] overflow-hidden gpu flex flex-col"
      style={{
        maxWidth: "912px",
        minHeight: "clamp(480px, calc(100vh - var(--navbar-height) - 48px), 864px)",
        backgroundImage: "url('/images/background-gui-macedo-1.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        willChange: "transform",
      }}
      initial={{ opacity: 0, x: -70 }}
      animate={
        introComplete ? { opacity: 1, x: 0 } : { opacity: 0, x: -70 }
      }
      transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Dark overlay for text legibility */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(160deg, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.08) 50%, rgba(0,0,0,0.28) 100%)",
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col h-full justify-between"
        style={{
          padding: "clamp(28px, 3vw, 52px)",
        }}
        variants={containerVariants}
        initial="hidden"
        animate={introComplete ? "visible" : "hidden"}
      >
        {/* Logo top-left */}
        <motion.div variants={itemVariants}>
          <Image
            src="/images/logo.svg"
            alt="AetherX"
            width={52}
            height={26}
            className="h-7 w-auto"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </motion.div>

        {/* Main content — vertically centered */}
        <div className="flex-1 flex flex-col justify-center py-8">
          {/* Heading */}
          <motion.h1
            className="text-white"
            style={{
              fontSize: "clamp(34px, 3.6vw, 62px)",
              lineHeight: 1.08,
              letterSpacing: "-0.025em",
              fontWeight: 400,
              marginBottom: "clamp(14px, 1.2vw, 22px)",
            }}
            variants={itemVariants}
          >
            Design e tecnologia
            <br />
            para quem quer
            <br />
            <span style={{ fontWeight: 800 }}>presença digital.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-white/75"
            style={{
              fontSize: "clamp(12px, 0.82vw, 15px)",
              lineHeight: 1.65,
              maxWidth: "min(440px, 85%)",
              marginBottom: "clamp(22px, 2vw, 36px)",
            }}
            variants={itemVariants}
          >
            Fortaleça sua presença digital com design estratégico, tecnologia
            e soluções criadas para destacar sua marca no mercado.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex items-center flex-wrap"
            style={{ gap: "clamp(12px, 1vw, 18px)" }}
            variants={itemVariants}
          >
            <PremiumButton1 href="#contato">Falar conosco</PremiumButton1>
            <PremiumButton2 href="#saiba-mais">Saiba Mais</PremiumButton2>
          </motion.div>
        </div>

        {/* Bottom — QR info */}
        <motion.div
          className="flex items-center"
          style={{ gap: "clamp(10px, 0.8vw, 14px)" }}
          variants={itemVariants}
        >
          <QRCodeIcon />
          <div>
            <p
              className="text-white font-semibold leading-tight"
              style={{ fontSize: "clamp(11px, 0.72vw, 13px)" }}
            >
              Design estratégico e desenvolvimento profissional
            </p>
            <p
              className="text-white/60 leading-tight mt-0.5"
              style={{ fontSize: "clamp(10px, 0.68vw, 12px)" }}
            >
              Atendimento digital para clientes do mundo inteiro.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
