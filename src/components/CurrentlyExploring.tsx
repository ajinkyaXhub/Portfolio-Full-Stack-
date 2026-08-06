"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Compass } from "lucide-react";

const exploringTopics = [
  { name: "Agentic AI", desc: "Constructing multi-agent networks that plan, evaluate, and self-correct tasks asynchronously." },
  { name: "LangGraph", desc: "Building stateful multi-actor systems with cyclic graph architectures for agentic workflows." },
  { name: "Explainable AI (XAI)", desc: "Applying SHAP, LIME, and integrated gradients to interpret neural net and ensemble decisions." },
  { name: "MLOps Pipelines", desc: "Automating model testing, data drift monitoring, and rolling deployments using Docker/CI." },
  { name: "Deep Learning", desc: "Experimenting with visual encoders, sequence models, and custom parameter-efficient fine-tuning." },
];

export default function CurrentlyExploring() {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass p-8 rounded-2xl border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2.5 bg-zinc-900 border border-white/5 rounded-lg text-primary">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white tracking-wide">Currently Exploring</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {exploringTopics.map((topic, idx) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                key={topic.name}
                className="bg-zinc-950/60 p-5 rounded-lg border border-white/5 hover:border-primary/20 transition-all flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-sm font-semibold text-white flex items-center gap-1.5 mb-2">
                    <BrainCircuit className="w-3.5 h-3.5 text-primary opacity-80" />
                    {topic.name}
                  </h4>
                  <p className="text-[11px] text-zinc-400 leading-normal">{topic.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
