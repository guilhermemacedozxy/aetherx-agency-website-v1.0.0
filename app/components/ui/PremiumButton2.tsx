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
  const content = (
    <span className="relative inline-flex rounded-[8px]">
      <span className="btn-p2-border absolute inset-0 rounded-[8px] pointer-events-none" />
      <span className="rounded-[6.5px] inline-flex items-center justify-center bg-transparent cursor-pointer select-none no-underline">
        <span className="btn-p2-text text-base font-semibold py-[14px] px-[37px]">
          {children}
        </span>
      </span>
    </span>
  );

  if (href) {
    return (
      <a href={href} className="inline-flex no-underline">
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className="inline-flex bg-transparent border-none p-0 cursor-pointer"
    >
      {content}
    </button>
  );
}
