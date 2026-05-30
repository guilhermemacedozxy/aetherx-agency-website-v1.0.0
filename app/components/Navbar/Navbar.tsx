"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import NavLink from "./NavLink";
import PrimaryButton from "../ui/PrimaryButton";
import ServicesDropdown from "./ServicesDropdown";

const NAV_LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços", hasDropdown: true },
  { href: "#processo", label: "Processo" },
  { href: "#especialistas", label: "Especialistas" },
];

interface NavbarProps {
  introComplete: boolean;
}

export default function Navbar({ introComplete }: NavbarProps) {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const openDropdown = () => {
    clearTimeout(closeTimerRef.current);
    setIsServicesOpen(true);
  };

  const closeDropdown = () => {
    closeTimerRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 150);
  };

  return (
    <>
      {/* Pill da navbar */}
      <div
        className="fixed z-50 left-1/2"
        style={{
          top: "var(--navbar-top)",
          transform: "translateX(-50%)",
          width: "min(var(--navbar-width), calc(100vw - 32px))",
        }}
      >
        <motion.header
          className="flex items-center pl-6 pr-4 bg-[rgba(255,255,255,0.97)] backdrop-blur-[10px] shadow-[0_2px_20px_rgba(0,0,0,0.07)]"
          style={{
            height: "var(--navbar-height)",
            borderRadius: isServicesOpen ? "10px 10px 0 0" : "10px",
            transition: "border-radius 0.15s ease",
          }}
          initial={{ opacity: 0, y: -12 }}
          animate={introComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: -12 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* Logo */}
          <Link href="/" className="shrink-0 flex items-center">
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
          <nav className="hidden md:flex items-center gap-14 mr-6.25">
            {NAV_LINKS.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.href}
                  onMouseEnter={openDropdown}
                  onMouseLeave={closeDropdown}
                >
                  <NavLink href={link.href}>{link.label}</NavLink>
                </div>
              ) : (
                <NavLink key={link.href} href={link.href}>
                  {link.label}
                </NavLink>
              )
            )}
          </nav>

          {/* CTA */}
          <PrimaryButton href="#contato">Falar conosco</PrimaryButton>
        </motion.header>
      </div>

      {/* Dropdown de serviços — full width, fundido com o pill */}
      <AnimatePresence>
        {isServicesOpen && (
          <ServicesDropdown
            onMouseEnter={openDropdown}
            onMouseLeave={closeDropdown}
          />
        )}
      </AnimatePresence>
    </>
  );
}
