"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PremiumButton2Props {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
}

export default function PremiumButton2({
  children,
  href,
  onClick,
}: PremiumButton2Props) {
  const content = (
    <motion.span
      className="inline-flex cursor-pointer select-none"
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      style={{ willChange: "transform" }}
    >
      {/* Gradient border layer via mask technique */}
      <span className="btn-p2-border">
        <span
          className="inline-flex items-center justify-center rounded-[6.5px]"
          style={{
            padding: "clamp(10px, 0.82vw, 14px) clamp(22px, 1.8vw, 32px)",
            background: "transparent",
          }}
        >
          <span
            className="btn-p2-text font-semibold"
            style={{ fontSize: "clamp(13px, 0.82vw, 15px)" }}
          >
            {children}
          </span>
        </span>
      </span>
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} className="inline-flex">
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className="inline-flex">
      {content}
    </button>
  );
}
