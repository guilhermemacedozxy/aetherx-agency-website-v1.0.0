"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface PrimaryButtonProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
}

const btnClass =
  "inline-flex items-center justify-center rounded-[8px] text-base font-semibold text-white cursor-pointer select-none whitespace-nowrap bg-[url(/images/buttom-gui-macedo-1.jpg)] bg-cover bg-center py-[14px] px-[37px] border-none outline-none no-underline";

export default function PrimaryButton({
  href,
  onClick,
  children,
}: PrimaryButtonProps) {
  if (href) {
    return (
      <Link href={href} className={btnClass}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={btnClass}>
      {children}
    </button>
  );
}
