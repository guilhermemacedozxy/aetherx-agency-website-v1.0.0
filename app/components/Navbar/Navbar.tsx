"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import NavLink from "./NavLink";
import PrimaryButton from "../ui/PrimaryButton";

const NAV_LINKS = [
  { href: "#inicio", label: "Início" },
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
      className="fixed z-50 flex items-center left-1/2 pl-6 pr-4 bg-[rgba(255,255,255,0.97)] backdrop-blur-[10px] rounded-[10px] shadow-[0_2px_20px_rgba(0,0,0,0.07)]"
      style={{
        top: "var(--navbar-top)",
        translateX: "-50%",
        width: "min(var(--navbar-width), calc(100vw - 32px))",
        height: "var(--navbar-height)",
      }}
      initial={{ opacity: 0, y: -12 }}
      animate={introComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: -12 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Logo */}
      <Link href="/" className="flex-shrink-0 flex items-center">
        <Image
          src="/images/logo.svg"
          alt="AetherX"
          width={52}
          height={26}
          priority
          className="h-6 w-auto"
        />
      </Link>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Nav Links */}
      <nav className="hidden md:flex items-center gap-14 mr-[25px]">
        {NAV_LINKS.map((link) => (
          <NavLink key={link.href} href={link.href}>
            {link.label}
          </NavLink>
        ))}
      </nav>

      {/* CTA */}
      <PrimaryButton href="#contato">Falar conosco</PrimaryButton>
    </motion.header>
  );
}
