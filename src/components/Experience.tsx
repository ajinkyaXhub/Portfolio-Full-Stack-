"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import TiltCard from "./TiltCard";

const experiences = [
  {
    role: "Python Full Stack Developer Intern",
    company: "ItVedant Pvt. Ltd.",
    location: "Pune, India (Hybrid)",
    period: "Dec 2025 – Feb 2026",
    highlights: [
      "Built and containerized full-stack applications leveraging Django, Flask, React, and PostgreSQL.",
      "Optimized relational database queries, achieving a 30% speedup in average query response times.",
      "Engineered secure authentication systems (JWT, OAuth) and comprehensive admin command panels.",
      "Collaborated in Agile sprints, taking part in code reviews to ensure code quality standards.",
    ],
    tech: ["Python", "Django", "Flask", "React", "PostgreSQL", "Docker", "Render", "Vercel"],
  },
  {
    role: "Software Developer Intern",
    company: "Infeanet Digital Marketing & Web Media",
    location: "Pune, India (On-site)",
    period: "Jun 2023 – Jul 2023",
    highlights: [
      "Developed interactive web pages and UI components using modern frontend technologies.",
      "Integrated backend endpoints and managed client-side data state across multiple views.",
      "Assisted in debugging legacy code, refactoring utility classes to clean standard practices.",
    ],
    tech: ["JavaScript", "HTML5", "CSS3", "Bootstrap", "PHP", "Git"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
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
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#00d4e8]">02 / Experience</span>
            <h2 className="text-4xl font-extrabold text-white mt-2">Career History</h2>
          </div>
          <div className="h-[1px] flex-grow bg-white/10 hidden md:block mx-12 mb-4" />
        </motion.div>

        {/* Timeline Stack */}
        <div className="space-y-8 max-w-4xl">
          {experiences.map((exp, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 80, delay: idx * 0.1 }}
              key={idx}
              className="w-full"
            >
              <TiltCard className="w-full rounded-xl">
                <div className="glass p-8 rounded-xl border border-white/5 hover:border-[#00d4e8]/20 hover:bg-white/[0.01] transition-all relative group">
                  {/* Card Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-[#00d4e8] transition-colors flex items-center gap-2">
                        <Briefcase className="w-5 h-5 text-[#00d4e8] opacity-80" />
                        {exp.role}
                      </h3>
                      <p className="text-base text-zinc-300 font-semibold mt-1">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col md:items-end text-sm text-zinc-400 font-mono space-y-1">
                      <span className="flex items-center md:justify-end gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                        {exp.period}
                      </span>
                      <span className="flex items-center md:justify-end gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="list-disc pl-5 space-y-2 text-zinc-300 text-sm mb-6 leading-relaxed">
                    {exp.highlights.map((item, key) => (
                      <li key={key}>{item}</li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-[10px] font-semibold font-mono uppercase bg-zinc-900 border border-white/5 text-zinc-400 rounded hover:text-white hover:border-[#00d4e8]/20 transition-all"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
