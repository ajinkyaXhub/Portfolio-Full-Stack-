"use client";

import { motion } from "framer-motion";
import { ArrowDown, FileText, Mail } from "lucide-react";
import RobotCanvas from "./RobotCanvas";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        {/* Left Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col justify-center space-y-8 text-left"
        >
          {/* Small Tag */}
          <motion.div variants={itemVariants} className="inline-flex items-center space-x-2">
            <span className="h-[1px] w-8 bg-[#00d4e8]" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#00d4e8] font-semibold">
              AI Engineer • Full Stack Developer
            </span>
          </motion.div>

          {/* Huge Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.0] text-white"
          >
            Ajinkya<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00d4e8] via-[#8b5cf6] to-[#f472b6] glow-text leading-[1.2]">
              Mane.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-zinc-400 max-w-xl font-normal leading-relaxed"
          >
            Final Year Computer Science student focused on AI, Machine Learning, LLMs, RAG Systems, and Full Stack Development. Building intelligent systems that bridge the gap between human needs and machine capability.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 items-center"
          >
            <a
              href="#projects"
              className="btn-premium"
            >
              View Projects
            </a>
            <a
              href="/RESUME.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary-glass flex items-center gap-2"
            >
              <FileText className="w-4 h-4" /> Resume
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div variants={itemVariants} className="flex space-x-5 text-zinc-400">
            <a
              href="https://github.com/ajinkyaXhub"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/ajinkya-mane-57145527b"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a href="mailto:ajjumane@gmail.com" className="hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Robot Canvas Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="lg:col-span-5 flex justify-center items-center relative min-h-[480px]"
        >
          {/* Parallax Humanoid Canvas */}
          <RobotCanvas />

          {/* Floating Badges */}
          {/* Badge 1: CGPA */}
          <div className="absolute top-[50px] right-[10px] sm:right-[30px] bg-[#080d1a]/92 border border-[#00d4e8]/30 rounded-xl p-3 flex items-center gap-2.5 backdrop-blur-md shadow-2xl animate-float-badge z-20">
            <span className="text-xl">🎓</span>
            <div className="flex flex-col text-left">
              <span className="font-syne text-base font-bold text-[#00d4e8] leading-none">8.7</span>
              <span className="text-[9px] text-[#6b7a99] font-mono leading-none mt-1">CGPA</span>
            </div>
          </div>

          {/* Badge 2: Full Stack */}
          <div className="absolute bottom-[60px] left-0 sm:left-[20px] bg-[#080d1a]/92 border border-[#00d4e8]/30 rounded-xl p-3 flex items-center gap-2.5 backdrop-blur-md shadow-2xl animate-float-badge z-20" style={{ animationDelay: "2s" }}>
            <span className="text-xl">⚡</span>
            <div className="flex flex-col text-left">
              <span className="font-syne text-sm font-bold text-[#00d4e8] leading-none">Full Stack</span>
              <span className="text-[9px] text-[#6b7a99] font-mono leading-none mt-1">Developer</span>
            </div>
          </div>

          {/* Badge 3: AI Specialist */}
          <div className="absolute top-[45%] right-[-15px] sm:right-0 bg-[#080d1a]/92 border border-[#00d4e8]/30 rounded-xl p-3 flex items-center gap-2.5 backdrop-blur-md shadow-2xl animate-float-badge z-20" style={{ animationDelay: "1s" }}>
            <span className="text-xl">🤖</span>
            <div className="flex flex-col text-left">
              <span className="font-syne text-sm font-bold text-[#00d4e8] leading-none">AI</span>
              <span className="text-[9px] text-[#6b7a99] font-mono leading-none mt-1">Enthusiast</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-1 opacity-50 hover:opacity-100 transition-opacity">
        <span className="text-[10px] font-mono tracking-[0.2em] text-zinc-400">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-zinc-400" />
        </motion.div>
      </div>
    </section>
  );
}
