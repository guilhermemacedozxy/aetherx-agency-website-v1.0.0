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
      className="fixed z-50 flex items-center"
      style={{
        top: "var(--navbar-top)",
        left: "50%",
        translateX: "-50%",
        width: "min(var(--navbar-width), calc(100vw - 32px))",
        height: "var(--navbar-height)",
        paddingLeft: "24px",
        paddingRight: "16px",
        background: "rgba(255, 255, 255, 0.97)",
        backdropFilter: "blur(10px)",
        borderRadius: "10px",
        border: "1px solid rgba(0, 0, 0, 0.07)",
        boxShadow: "0 2px 20px rgba(0, 0, 0, 0.07)",
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

      {/* Spacer — pushes nav + CTA to the right */}
      <div className="flex-1" />

      {/* Nav Links */}
      <nav
        className="hidden md:flex items-center"
        style={{ gap: "56px", marginRight: "25px" }}
      >
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
