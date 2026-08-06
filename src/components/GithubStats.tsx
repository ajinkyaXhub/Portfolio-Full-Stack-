"use client";

import { motion } from "framer-motion";
import { FolderGit, Star, GitFork } from "lucide-react";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const pinnedRepos = [
  {
    name: "LuminAI-AI-Career-Mentor",
    description: "Full-stack AI Career Mentor featuring ATS resume check, roadmap generator, and mock interviews using Gemini API.",
    stars: 3,
    forks: 1,
    lang: "TypeScript",
  },
  {
    name: "ContextBot-RAG",
    description: "Production-grade document Q&A system using ChromaDB vector store, Hugging Face, and Groq Llama 3.3.",
    stars: 2,
    forks: 0,
    lang: "Python",
  },
  {
    name: "FitGenie-AI-Fitness",
    description: "AI-based Vision fitness assistant providing meal macronutrient estimation and customized workout generators.",
    stars: 2,
    forks: 1,
    lang: "React",
  },
];

export default function GithubStats() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">06 / GitHub</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">Active Contributions</h2>
          </div>
          <div className="h-[1px] flex-grow bg-white/10 hidden md:block mx-12 mb-4" />
        </div>

        {/* GitHub Stats Images */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {/* Main Stats Card */}
          <div className="glass p-6 rounded-xl border border-white/5 flex flex-col justify-between items-center bg-[#050508]/80 backdrop-blur-md">
            <h3 className="text-sm font-bold text-white mb-4 self-start flex items-center gap-2">
              <GithubIcon className="w-4 h-4 text-primary" /> Profile Metrics
            </h3>
            {/* Using GitHub Readme Stats SVG with transparent background and theme colors */}
            <div className="w-full flex justify-center overflow-x-auto py-2">
              <img
                src="https://github-readme-stats.vercel.app/api?username=ajinkyaXhub&show_icons=true&theme=calm&bg_color=030303&title_color=00f2fe&text_color=a1a1aa&icon_color=4facfe&border_color=18181b"
                alt="Ajinkya Mane's Github Stats"
                className="max-w-full rounded h-auto"
                loading="lazy"
              />
            </div>
          </div>

          {/* Top Languages Card */}
          <div className="glass p-6 rounded-xl border border-white/5 flex flex-col justify-between items-center bg-[#050508]/80 backdrop-blur-md">
            <h3 className="text-sm font-bold text-white mb-4 self-start flex items-center gap-2">
              <FolderGit className="w-4 h-4 text-primary" /> Top Languages
            </h3>
            <div className="w-full flex justify-center overflow-x-auto py-2">
              <img
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=ajinkyaXhub&layout=compact&theme=calm&bg_color=030303&title_color=00f2fe&text_color=a1a1aa&icon_color=4facfe&border_color=18181b"
                alt="Ajinkya Mane's Top Languages"
                className="max-w-full rounded h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Pinned Repositories Sub-grid */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-white tracking-wider font-mono">
            Featured Repositories
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {pinnedRepos.map((repo, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                key={repo.name}
                className="glass-card p-6 border border-white/5 hover:border-primary/20 hover:bg-white/[0.01] transition-all flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-primary transition-colors flex items-center gap-2">
                    <FolderGit className="w-4 h-4 text-zinc-500" />
                    {repo.name}
                  </h4>
                  <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                    {repo.description}
                  </p>
                </div>
                <div className="flex justify-between items-center mt-6 pt-4 border-t border-white/5 text-xs text-zinc-500 font-mono">
                  <span className="flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                    {repo.lang}
                  </span>
                  <div className="flex space-x-3">
                    <span className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5" />
                      {repo.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-3.5 h-3.5" />
                      {repo.forks}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
