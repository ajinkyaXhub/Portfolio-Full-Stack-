"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Award, FileSpreadsheet, ExternalLink } from "lucide-react";

const achievements = [
  {
    title: "ContextBot RAG Excellence",
    description: "Architected a custom retrieval-augmented pipeline achieving 92% semantic accuracy while optimizing memory footprint by 40% using vector compression.",
    icon: CheckCircle2,
  },
  {
    title: "LLM Scale Integration",
    description: "Integrated state-of-the-art APIs (Groq Llama 3.3, OpenAI) across 5 core applications, serving 500+ custom fitness schedules.",
    icon: Award,
  },
  {
    title: "Cinema Booking System Publication",
    description: "Co-authored and published comprehensive research covering system architecture and database load-balancing in IJRPR & IJIRCEE journals.",
    icon: FileSpreadsheet,
  },
];

const certificates = [
  { name: "Generative AI", org: "Google Cloud", file: "Generative AI - google cloud.pdf" },
  { name: "Prompt Engineering", org: "Microsoft", file: "Prompt Engg - Microsoft.pdf" },
  { name: "Java Full Stack with React & AI", org: "BRAINOVISION", file: "java nsttp.pdf" },
  { name: "Basics of DSA", org: "SkillUP", file: "DSA - simplilearn.pdf" },
  { name: "IoT Smart Light Systems (LoRa)", org: "Research Project", file: "LoRa IOIT.pdf" },
  { name: "Management and Leadership", org: "Infosys", file: "Infosys SpringBoard certificate.pdf" },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">05 / Accolades</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">Achievements & Certifications</h2>
          </div>
          <div className="h-[1px] flex-grow bg-white/10 hidden md:block mx-12 mb-4" />
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {achievements.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                key={item.title}
                className="glass p-6 rounded-xl border border-white/5 flex flex-col space-y-4 hover:border-primary/20 transition-all"
              >
                <div className="p-3 bg-zinc-900 border border-white/5 rounded-lg text-primary w-fit">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white tracking-wide">{item.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Certifications Sub-Grid */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-white tracking-wider font-mono">
            Verified Certifications
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certificates.map((cert, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                key={cert.name}
                className="glass px-5 py-4 rounded-lg border border-white/5 flex items-center justify-between gap-4 group hover:bg-white/[0.01]"
              >
                <div>
                  <h4 className="text-sm font-semibold text-white group-hover:text-primary transition-colors">
                    {cert.name}
                  </h4>
                  <p className="text-[11px] text-zinc-400 font-mono mt-0.5">{cert.org}</p>
                </div>
                <a
                  href={`/certificates/${cert.file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-zinc-900 border border-white/5 text-zinc-400 hover:text-white rounded hover:border-primary/25 transition-all flex items-center justify-center"
                  title="View Certificate PDF"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
