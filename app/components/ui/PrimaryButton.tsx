"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface PrimaryButtonProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
}

const btnStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "8px",
  fontSize: "16px",
  fontWeight: 600,
  color: "#ffffff",
  cursor: "pointer",
  userSelect: "none",
  whiteSpace: "nowrap",
  background: "linear-gradient(135deg, #E85A0A 0%, #CC2000 100%)",
  padding: "0 20px",
  height: "37px",
  border: "none",
  outline: "none",
  textDecoration: "none",
};

export default function PrimaryButton({
  href,
  onClick,
  children,
}: PrimaryButtonProps) {
  if (href) {
    return (
      <Link href={href} style={btnStyle}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} style={btnStyle}>
      {children}
    </button>
  );
}
