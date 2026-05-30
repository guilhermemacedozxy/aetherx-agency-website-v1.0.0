"use client";

import Link from "next/link";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link href={href} className="nav-link flex items-center">
      <span className="nav-link-text">
        <span className="nav-text-base">{children}</span>
        <span className="nav-text-hover" aria-hidden="true">
          {children}
        </span>
        <span className="nav-underline" aria-hidden="true" />
      </span>
    </Link>
  );
}
