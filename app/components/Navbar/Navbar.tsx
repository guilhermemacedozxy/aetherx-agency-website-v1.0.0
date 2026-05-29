"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import NavLink from "./NavLink";
import PrimaryButton from "../ui/PrimaryButton";

const NAV_LINKS = [
  { href: "#inicio", label: "Início", active: true },
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#processo", label: "Processo" },
  { href: "#especialistas", label: "Especialistas" },
];

interface NavbarProps {
  introComplete: boolean;
}

export default function Navbar({ introComplete }: NavbarProps) {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-white/96 backdrop-blur-sm"
      style={{
        height: "var(--navbar-height)",
        paddingLeft: "clamp(20px, 2.5vw, 52px)",
        paddingRight: "clamp(20px, 2.5vw, 52px)",
        borderBottom: "1px solid rgba(0,0,0,0.05)",
      }}
      initial={{ opacity: 0, y: -28 }}
      animate={introComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: -28 }}
      transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Logo */}
      <Link href="/" className="flex-shrink-0 flex items-center">
        <Image
          src="/images/logo.svg"
          alt="AetherX"
          width={68}
          height={34}
          priority
          className="h-8 w-auto"
        />
      </Link>

      {/* Nav Links — centered */}
      <nav className="hidden md:flex items-center gap-1 lg:gap-2">
        {NAV_LINKS.map((link) => (
          <NavLink key={link.href} href={link.href} active={link.active}>
            {link.label}
          </NavLink>
        ))}
      </nav>

      {/* CTA */}
      <PrimaryButton href="#contato">Falar conosco</PrimaryButton>
    </motion.header>
  );
}
