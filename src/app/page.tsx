import Navbar from "@/components/Navbar";
import BackgroundGrid from "@/components/BackgroundGrid";
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

export default function Home() {
  return (
    <>
      {/* Interactive Cursor Trail */}
      <CustomCursor />

      {/* Luxury Background elements */}
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
    </>
  );
}
