"use client";

import { motion } from "framer-motion";
import { Award, Code2, Database, BrainCircuit } from "lucide-react";

const stats = [
  { value: "2+", label: "Industry Internships", icon: Award },
  { value: "5+", label: "AI Applications Shipped", icon: BrainCircuit },
  { value: "92%", label: "RAG Retrieval Accuracy", icon: Database },
  { value: "40%", label: "Vector DB Optimization", icon: Code2 },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">01 / Profile</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">Who I Am</h2>
          </div>
          <div className="h-[1px] flex-grow bg-white/10 hidden md:block mx-12 mb-4" />
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6 text-zinc-300 text-lg leading-relaxed">
            <p>
              I am Ajinkya Mane, a Computer Science student and software engineer based in Pune, India. I specialize in bridging the gap between sophisticated machine learning models and robust full-stack applications.
            </p>
            <p>
              My engineering philosophy revolves around building <strong className="text-white">production-grade solutions</strong> with real-world utility, rather than simple proof-of-concept models. From architecting high-accuracy RAG (Retrieval-Augmented Generation) systems to implementing secure user flows, I aim to ship clean, optimizeable code.
            </p>
            <p>
              Having worked as a Python Full-Stack Developer intern, I have experience working with databases like PostgreSQL/MongoDB, backend frameworks like Django/Flask/Express, and modern frontend tools like React/Next.js/TailwindCSS to construct high-speed user interfaces.
            </p>
          </div>

          {/* Right Stats Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  key={stat.label}
                  className="glass p-6 rounded-xl border border-white/5 flex flex-col justify-between h-40 hover:border-primary/20 hover:bg-white/[0.02] transition-all"
                >
                  <div className="flex justify-between items-start">
                    <span className="text-2xl sm:text-3xl font-mono font-bold text-white tracking-tight">
                      {stat.value}
                    </span>
                    <Icon className="w-5 h-5 text-primary opacity-80" />
                  </div>
                  <span className="text-xs sm:text-sm text-zinc-400 font-medium leading-snug">
                    {stat.label}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
