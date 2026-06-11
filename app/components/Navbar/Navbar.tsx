"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { AnimatePresence } from "framer-motion";
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
  const headerRef   = useRef<HTMLElement>(null);
  const animatedRef = useRef(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    const header = headerRef.current;
    if (!introComplete || !header || animatedRef.current) return;
    animatedRef.current = true;

    gsap.fromTo(
      header,
      { opacity: 0, y: -16 },
      { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", delay: 1.1 }
    );
  }, [introComplete]);

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
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 50,
          display: "flex",
          justifyContent: "center",
          paddingTop: "var(--navbar-top)",
        }}
      >
        <header
          ref={headerRef}
          className="flex items-center pl-6 pr-4 bg-transparent backdrop-blur-[0.625rem]"
          style={{
            height: "var(--navbar-height)",
            width: "min(var(--navbar-width), calc(100vw - 2rem))",
            borderRadius: isServicesOpen ? "0.625rem 0.625rem 0 0" : "0.625rem",
            transition: "border-radius 0.15s ease",
            opacity: 0,
          }}
        >
          {/* Logo */}
          <Link href="/" className="shrink-0 flex items-center">
            <Image
              src="/images/logo-main.svg"
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
        </header>
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
