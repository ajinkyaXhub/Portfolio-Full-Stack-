"use client";

import { motion } from "framer-motion";
import { Award, Code2, Database, BrainCircuit } from "lucide-react";
import Image from "next/image";
import TiltCard from "./TiltCard";

const stats = [
  { value: "2+", label: "Industry Internships", icon: Award },
  { value: "5+", label: "AI Applications Shipped", icon: BrainCircuit },
  { value: "92%", label: "RAG Retrieval Accuracy", icon: Database },
  { value: "40%", label: "Vector DB Optimization", icon: Code2 },
];

export default function About() {
  const textRevealVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4"
        >
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#00d4e8]">01 / Profile</span>
            <h2 className="text-4xl font-extrabold text-white mt-2">Who I Am</h2>
          </div>
          <div className="h-[1px] flex-grow bg-white/10 hidden md:block mx-12 mb-4" />
        </motion.div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.15 } },
            }}
            className="lg:col-span-7 space-y-6 text-zinc-300 text-base sm:text-lg leading-relaxed"
          >
            <motion.p variants={textRevealVariants}>
              Hello there! I'm Ajinkya Mane, a dedicated Computer CS Engineer with a strong passion for developing robust and user-friendly applications.
            </motion.p>
            <motion.p variants={textRevealVariants}>
              My journey in tech began with a curiosity for how things work, quickly evolving into hands-on experience in both <strong className="text-white">front-end development</strong> and <strong className="text-[#00d4e8]">intelligent systems (AI)</strong>. I thrive in environments where I can leverage my skills to build innovative solutions.
            </motion.p>
            <motion.p variants={textRevealVariants}>
              I build AI systems that solve real business problems, not just proof-of-concepts. From architecting high-accuracy RAG (Retrieval-Augmented Generation) systems to implementing secure user flows, I aim to ship clean, optimizeable code.
            </motion.p>
          </motion.div>

          {/* Right Morphing Image wrapper with 3D Tilt Card effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center items-center py-6"
          >
            <TiltCard className="rounded-full">
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
            </TiltCard>
          </motion.div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, delay: index * 0.1 }}
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
