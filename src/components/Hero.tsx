"use client";

import { motion } from "framer-motion";
import { ArrowDown, FileText, Mail } from "lucide-react";
import Image from "next/image";

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
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
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
            <span className="h-[1px] w-8 bg-primary" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary font-semibold">
              AI Engineer • Full Stack Developer
            </span>
          </motion.div>

          {/* Huge Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-white"
          >
            Building{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-[#8a3ffc] glow-text">
              AI-powered products
            </span>{" "}
            that solve real-world problems.
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-zinc-400 max-w-xl font-normal leading-relaxed"
          >
            Final Year Computer Science student focused on AI, Machine Learning, LLMs, RAG Systems, and Full Stack Development. Shipping production-grade solutions that optimize workflow efficiency.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 items-center"
          >
            <a
              href="#projects"
              className="px-6 py-3.5 bg-primary text-[#030303] text-sm font-semibold rounded-md shadow-lg shadow-primary/10 hover:shadow-primary/20 hover:bg-[#00d4e8] transition-all transform hover:-translate-y-0.5"
            >
              View Projects
            </a>
            <a
              href="/certificates/Learntube Web Dev Certificate.pdf" /* Fallback to a cert or resume link */
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-md text-sm font-semibold transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
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

        {/* Right Accent Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="lg:col-span-5 flex justify-center items-center relative"
        >
          {/* Glassmorphic border container */}
          <div className="relative group w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
            {/* Glowing Backdrop Circle */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 via-purple-600/10 to-transparent blur-3xl opacity-80 group-hover:scale-105 transition-transform duration-700" />
            
            {/* Animated Ring */}
            <div className="absolute inset-0 rounded-2xl border border-white/5 p-4 bg-zinc-900/40 backdrop-blur-md shadow-2xl flex items-center justify-center">
              <div className="relative w-full h-full rounded-xl overflow-hidden border border-white/10">
                <Image
                  src="/pfp.jpg"
                  alt="Ajinkya Mane"
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                />
              </div>
            </div>

            {/* Micro badges floating around profile card */}
            <div className="absolute top-8 -left-8 glass border border-white/10 px-4 py-2 rounded-lg flex items-center gap-2 animate-bounce duration-[4000ms]">
              <span className="text-emerald-400 animate-pulse text-xl">●</span>
              <span className="text-xs text-zinc-300 font-mono tracking-wide">Available for Roles</span>
            </div>
            
            <div className="absolute bottom-8 -right-8 glass border border-white/10 px-4 py-2 rounded-lg flex items-center gap-2 animate-bounce duration-[5000ms]">
              <span className="text-primary text-base">🤖</span>
              <span className="text-xs text-zinc-300 font-mono tracking-wide">AI Research</span>
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
