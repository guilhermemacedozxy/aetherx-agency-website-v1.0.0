"use client";

import { useState, useCallback } from "react";
import { LazyMotion, domAnimation } from "framer-motion";
import IntroAnimation from "./components/IntroAnimation/IntroAnimation";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/Hero/HeroSection";
import AboutSection from "./components/About/AboutSection";

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);
  const handleIntroComplete = useCallback(() => setIntroComplete(true), []);

  return (
    <LazyMotion features={domAnimation}>
      <IntroAnimation onComplete={handleIntroComplete} />
      <Navbar introComplete={introComplete} />
      <main>
        <HeroSection introComplete={introComplete} />
        <AboutSection />
      </main>
    </LazyMotion>
  );
}
