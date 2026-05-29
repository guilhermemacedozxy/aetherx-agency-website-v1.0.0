"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}

export default function NavLink({ href, children, active }: NavLinkProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={href}
      className="relative inline-flex items-center py-2"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontSize: "clamp(13px, 0.85vw, 15px)",
        fontWeight: 500,
        color: active ? "#0a0a0a" : "#525252",
        transition: "color 0.2s ease",
        textDecoration: "none",
      }}
    >
      {/* Hover background — approximates hover-gui-macedo.svg effect */}
      <motion.span
        className="nav-hover-bg absolute inset-x-0 -inset-y-0.5 rounded-md pointer-events-none"
        initial={{ opacity: 0, scale: 0.88 }}
        animate={{
          opacity: hovered ? 1 : 0,
          scale: hovered ? 1 : 0.88,
        }}
        transition={{ duration: 0.18, ease: "easeOut" }}
      />

      <span className="relative px-2.5">
        {children}

        {/* Underline */}
        <motion.span
          className="absolute bottom-0 left-2.5 right-2.5 rounded-full pointer-events-none"
          style={{
            height: "1.5px",
            background: "linear-gradient(90deg, #CC2000, #E8540A)",
            originX: 0.5,
          }}
          initial={{ scaleX: active ? 1 : 0 }}
          animate={{ scaleX: active || hovered ? 1 : 0 }}
          transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
        />
      </span>
    </Link>
  );
}
