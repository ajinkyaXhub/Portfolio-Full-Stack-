"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import BackgroundGrid from "@/components/BackgroundGrid";
import BackgroundParticles from "@/components/BackgroundParticles";
import CustomCursor from "@/components/CustomCursor";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import CurrentlyExploring from "@/components/CurrentlyExploring";
import GithubStats from "@/components/GithubStats";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Preloader from "@/components/Preloader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // Lock scrolling while preloader runs
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isLoading]);

  return (
    <>
      {/* Cinematic diagnostic preloader overlay */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="preloader"
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[9999]"
          >
            <Preloader onComplete={() => setIsLoading(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Page Content (will fade in after loader) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Interactive Cursor Trail */}
        <CustomCursor />

        {/* Starry Connected Constellation Canvas Backdrop */}
        <BackgroundParticles />

        {/* Floating Glowing Blobs Grid Backdrop */}
        <BackgroundGrid />

        {/* Navigation */}
        <Navbar />

        {/* Main Content Layout */}
        <main className="relative flex flex-col min-h-screen">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <TechStack />
          <CurrentlyExploring />
          <GithubStats />
          <Achievements />
          <Contact />
        </main>
      </motion.div>
    </>
  );
}
