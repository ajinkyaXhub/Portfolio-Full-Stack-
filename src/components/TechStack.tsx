"use client";

import { motion } from "framer-motion";
import { Terminal, Cpu, Blocks, Layers, Server, Database, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Terminal,
    skills: ["Python", "Java", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "AI & ML",
    icon: Cpu,
    skills: ["TensorFlow", "Scikit Learn", "PyTorch", "NumPy", "Pandas"],
  },
  {
    title: "LLMs & Retrieval",
    icon: Blocks,
    skills: ["Gemini API", "RAG Systems", "LangGraph", "ChromaDB"],
  },
  {
    title: "Frontend Stack",
    icon: Layers,
    skills: ["React", "Next.js", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Backend Services",
    icon: Server,
    skills: ["Node.js", "Express.js", "Flask", "Django", "REST APIs"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "ChromaDB", "SQLite"],
  },
  {
    title: "Tools & DevOps",
    icon: Wrench,
    skills: ["Git/GitHub", "Docker", "VS Code", "Postman", "Render", "Vercel"],
  },
];

export default function TechStack() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants: any = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section id="stack" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">04 / Stack</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">Technical Capabilities</h2>
          </div>
          <div className="h-[1px] flex-grow bg-white/10 hidden md:block mx-12 mb-4" />
        </div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <motion.div
                variants={cardVariants}
                key={cat.title}
                className="glass p-6 rounded-xl border border-white/5 hover:border-primary/20 hover:bg-white/[0.01] transition-all flex flex-col space-y-4 group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-zinc-900 border border-white/5 rounded-lg text-primary group-hover:bg-primary group-hover:text-zinc-950 transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-white tracking-wide">{cat.title}</h3>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs font-mono font-medium bg-zinc-950 border border-white/5 text-zinc-400 rounded hover:text-white hover:border-primary/25 hover:bg-zinc-900 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
