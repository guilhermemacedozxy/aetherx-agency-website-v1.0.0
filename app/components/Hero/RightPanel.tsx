"use client";

import { motion } from "framer-motion";

interface RightPanelProps {
  introComplete: boolean;
}

export default function RightPanel({ introComplete }: RightPanelProps) {
  return (
    <motion.div
      className="relative flex-1 rounded-[20px] overflow-hidden gpu"
      style={{
        maxWidth: "912px",
        minHeight: "clamp(480px, calc(100vh - var(--navbar-height) - 48px), 864px)",
        backgroundImage: "url('/images/background-gui-macedo-2.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        willChange: "transform",
      }}
      initial={{ opacity: 0, x: 70 }}
      animate={
        introComplete ? { opacity: 1, x: 0 } : { opacity: 0, x: 70 }
      }
      transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
    >
      {/* Subtle vignette overlay for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 30% 40%, rgba(255,240,235,0) 0%, rgba(230,200,195,0.15) 100%)",
        }}
      />
    </motion.div>
  );
}
