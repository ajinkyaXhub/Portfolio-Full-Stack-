"use client";

import { motion } from "framer-motion";
import { Award, Code2, Database, BrainCircuit } from "lucide-react";
import Image from "next/image";

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
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#00d4e8]">01 / Profile</span>
            <h2 className="text-4xl font-extrabold text-white mt-2">Who I Am</h2>
          </div>
          <div className="h-[1px] flex-grow bg-white/10 hidden md:block mx-12 mb-4" />
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6 text-zinc-300 text-base sm:text-lg leading-relaxed">
            <p>
              Hello there! I'm Ajinkya Mane, a dedicated Computer CS Engineer with a strong passion for developing robust and user-friendly applications.
            </p>
            <p>
              My journey in tech began with a curiosity for how things work, quickly evolving into hands-on experience in both <strong className="text-white">front-end development</strong> and <strong className="text-[#00d4e8]">intelligent systems (AI)</strong>. I thrive in environment where I can leverage my skills to build innovative solutions.
            </p>
            <p>
              I build AI systems that solve real business problems, not just proof-of-concepts. From architecting high-accuracy RAG (Retrieval-Augmented Generation) systems to implementing secure user flows, I aim to ship clean, optimizeable code.
            </p>
          </div>

          {/* Right Morphing Image wrapper */}
          <div className="lg:col-span-5 flex justify-center items-center py-6">
            <div className="about-image-wrapper">
              <div className="about-image">
                <Image
                  src="/pfp.jpg"
                  alt="Ajinkya Mane"
                  width={340}
                  height={340}
                  priority
                  className="w-full h-full object-cover object-center filter brightness-95"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                key={stat.label}
                className="glass p-6 rounded-xl border border-white/5 flex flex-col justify-between h-40 hover:border-[#00d4e8]/20 hover:bg-white/[0.01] transition-all"
              >
                <div className="flex justify-between items-start">
                  <span className="text-3xl font-mono font-bold text-white tracking-tight">
                    {stat.value}
                  </span>
                  <Icon className="w-5 h-5 text-[#00d4e8] opacity-80" />
                </div>
                <span className="text-xs text-zinc-400 font-medium leading-snug">
                  {stat.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
