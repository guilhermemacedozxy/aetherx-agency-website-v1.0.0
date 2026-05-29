"use client";

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
  const outer: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "8px",
    padding: "11px 28px",
    cursor: "pointer",
    userSelect: "none",
    backgroundImage: "url('/images/background-gui-macedo-2.svg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    textDecoration: "none",
  };

  const label = (
    <span className="btn-p1-text" style={{ fontSize: "16px", fontWeight: 600 }}>
      {children}
    </span>
  );

  if (href) {
    return (
      <a href={href} style={outer}>
        {label}
      </a>
    );
  }

  return (
    <button onClick={onClick} style={outer}>
      {label}
    </button>
  );
}
