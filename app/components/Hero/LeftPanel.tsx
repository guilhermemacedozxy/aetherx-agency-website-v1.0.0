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
      style={{ flexShrink: 0 }}
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

const PANEL_MIN_H =
  "clamp(480px, calc(100vh - var(--hero-padding-top) - 16px), 864px)";

interface LeftPanelProps {
  introComplete: boolean;
}

export default function LeftPanel({ introComplete }: LeftPanelProps) {
  return (
    /* Panel container — only opacity, no translate */
    <motion.div
      className="relative flex-1 rounded-[20px] overflow-hidden flex flex-col"
      style={{
        maxWidth: "912px",
        backgroundImage: "url('/images/background-gui-macedo-1.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: introComplete ? 1 : 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
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
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
            style={{ marginTop: "60px", marginBottom: "12px" }}
          >
            <Image
              src="/images/logo.svg"
              alt="AetherX"
              width={58}
              height={25}
              style={{ filter: "brightness(0) invert(1)", width: "58px", height: "25px" }}
            />
          </motion.div>

          {/* Main copy */}
          <div className="flex flex-col">
            <motion.h1
              className="text-white"
              style={{
                fontSize: "clamp(34px, 3.6vw, 62px)",
                lineHeight: 1.08,
                letterSpacing: "-0.025em",
                fontWeight: 200,
                marginBottom: "clamp(14px, 1.2vw, 22px)",
              }}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.15 }}
            >
              Design e tecnologia
              <br />
              para quem quer
              <br />
              <span style={{ fontWeight: 600 }}>presença digital.</span>
            </motion.h1>

            <motion.p
              style={{
                color: "#FFFFFF",
                fontSize: "18px",
                fontWeight: 200,
                lineHeight: 1.65,
                width: "579px",
                maxWidth: "100%",
                marginTop: "24px",
                marginBottom: "24px",
              }}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.25 }}
            >
              Fortaleça sua presença digital com design estratégico, tecnologia
              e soluções criadas para destacar sua marca no mercado.
            </motion.p>

            <motion.div
              className="flex items-center flex-wrap"
              style={{ gap: "clamp(12px, 1vw, 18px)", marginBottom: "110px" }}
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
              <p
                className="leading-tight"
                style={{ color: "#FFFFFF", fontSize: "16px", fontWeight: 600 }}
              >
                Design estratégico e desenvolvimento profissional
              </p>
              <p
                className="leading-tight"
                style={{ color: "#FFFFFF", fontSize: "14px", fontWeight: 200 }}
              >
                Atendimento digital para clientes do mundo inteiro.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
}
