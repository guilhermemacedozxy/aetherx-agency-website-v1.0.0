"use client";

import { motion } from "framer-motion";

const PANEL_MIN_H =
  "clamp(480px, calc(100vh - var(--hero-padding-top) - 16px), 864px)";

interface RightPanelProps {
  introComplete: boolean;
}

export default function RightPanel({ introComplete }: RightPanelProps) {
  return (
    <motion.div
      className="relative flex-1 rounded-[20px] overflow-hidden"
      style={{
        maxWidth: "912px",
        backgroundImage: "url('/images/background-gui-macedo-2.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: introComplete ? 1 : 0 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
    >
      {/* Subtle depth vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 30% 40%, rgba(255,240,235,0) 0%, rgba(220,190,185,0.12) 100%)",
        }}
      />
    </motion.div>
  );
}
