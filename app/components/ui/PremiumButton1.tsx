"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PremiumButton1Props {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
}

export default function PremiumButton1({
  children,
  href,
  onClick,
}: PremiumButton1Props) {
  const content = (
    <motion.span
      className="inline-flex items-center justify-center rounded-lg font-semibold cursor-pointer select-none overflow-hidden"
      style={{
        backgroundImage: `url('/images/background-gui-macedo-2.svg')`,
        backgroundSize: "250% 250%",
        backgroundPosition: "center",
        padding: "clamp(10px, 0.82vw, 14px) clamp(22px, 1.8vw, 32px)",
        willChange: "transform",
      }}
      whileHover={{ scale: 1.04, backgroundPosition: "30% 40%" }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
    >
      <span
        className="btn-p1-text font-semibold"
        style={{ fontSize: "clamp(13px, 0.82vw, 15px)" }}
      >
        {children}
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
