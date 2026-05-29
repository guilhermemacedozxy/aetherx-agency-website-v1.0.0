"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";

interface PrimaryButtonProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
}

export default function PrimaryButton({
  href,
  onClick,
  children,
  className = "",
}: PrimaryButtonProps) {
  const inner = (
    <motion.span
      className={`inline-flex items-center justify-center rounded-full font-semibold text-white cursor-pointer select-none ${className}`}
      style={{
        backgroundImage: `url('/images/buttom-gui-macedo-1.jpg'), linear-gradient(135deg, #E8540A 0%, #CC2000 100%)`,
        backgroundSize: "200% 200%, 100% 100%",
        backgroundPosition: "center, center",
        backgroundBlendMode: "overlay, normal",
        fontSize: "clamp(13px, 0.82vw, 15px)",
        padding: "clamp(9px, 0.7vw, 12px) clamp(20px, 1.6vw, 28px)",
        boxShadow: "0 4px 18px rgba(204, 32, 0, 0.35)",
        willChange: "transform",
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex">
        {inner}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className="inline-flex">
      {inner}
    </button>
  );
}
