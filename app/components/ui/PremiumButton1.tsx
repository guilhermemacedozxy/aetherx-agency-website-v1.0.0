"use client";

import { ReactNode } from "react";

interface PremiumButton1Props {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
}

const outerClass =
  "inline-flex items-center justify-center rounded-[8px] py-[14px] px-[28px] cursor-pointer select-none bg-[url('/images/background-gui-macedo-2-opt.jpg')] bg-cover bg-center no-underline";

export default function PremiumButton1({
  children,
  href,
  onClick,
}: PremiumButton1Props) {
  const label = (
    <span className="btn-p1-text text-base font-semibold">{children}</span>
  );

  if (href) {
    return (
      <a href={href} className={outerClass}>
        {label}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={outerClass}>
      {label}
    </button>
  );
}
