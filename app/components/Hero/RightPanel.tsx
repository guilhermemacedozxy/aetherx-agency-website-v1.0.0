"use client";

import { motion } from "framer-motion";

interface RightPanelProps {
  introComplete: boolean;
}

export default function RightPanel({ introComplete }: RightPanelProps) {
  return (
    <motion.div
      className="relative flex-1 rounded-[20px] overflow-hidden max-w-[912px] bg-[url('/images/background-gui-macedo-2.svg')] bg-cover bg-center"
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
