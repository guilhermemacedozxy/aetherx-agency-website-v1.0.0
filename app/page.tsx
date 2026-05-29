"use client";

import { useState } from "react";
import IntroAnimation from "./components/IntroAnimation/IntroAnimation";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/Hero/HeroSection";

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <>
      <IntroAnimation onComplete={() => setIntroComplete(true)} />
      <Navbar introComplete={introComplete} />
      <main>
        <HeroSection introComplete={introComplete} />
      </main>
    </>
  );
}
