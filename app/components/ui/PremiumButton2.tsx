"use client";

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
  const inner: React.CSSProperties = {
    borderRadius: "6.5px",
    padding: "11px 28px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    background: "transparent",
    cursor: "pointer",
    userSelect: "none",
    textDecoration: "none",
  };

  const label = (
    <span className="btn-p2-text" style={{ fontSize: "16px", fontWeight: 600 }}>
      {children}
    </span>
  );

  const content = (
    <span className="btn-p2-border">
      <span style={inner}>{label}</span>
    </span>
  );

  if (href) {
    return (
      <a href={href} style={{ display: "inline-flex", textDecoration: "none" }}>
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      style={{ display: "inline-flex", background: "none", border: "none", padding: 0, cursor: "pointer" }}
    >
      {content}
    </button>
  );
}
