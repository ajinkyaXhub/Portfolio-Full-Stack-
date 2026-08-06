"use client";

import { useState } from "react";
import { Copy, Check, Mail, Phone } from "lucide-react";

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

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const email = "ajjumane@gmail.com";
  const phone = "+91 8805983485";

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-gradient-to-t from-[#020202] to-transparent">
      <div className="max-w-4xl mx-auto px-6 text-center z-10 relative">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">07 / Connect</span>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mt-2 mb-6">Let's Connect</h2>
        <p className="text-zinc-400 text-base max-w-lg mx-auto mb-12 leading-relaxed">
          Open to opportunities, collaboration proposals, and engineering dialogue. Let's build something serious.
        </p>

        {/* Copy-paste Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto mb-12">
          {/* Email Card */}
          <div className="glass p-5 rounded-xl border border-white/5 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-zinc-900 border border-white/5 rounded-lg text-primary">
                <Mail className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="text-[10px] font-mono text-zinc-500 uppercase block">Email</span>
                <a href={`mailto:${email}`} className="text-sm font-semibold text-white hover:text-primary transition-colors">
                  {email}
                </a>
              </div>
            </div>
            <button
              onClick={() => copyToClipboard(email, "email")}
              className="p-2 bg-zinc-900 border border-white/5 text-zinc-400 hover:text-white rounded transition-colors"
              title="Copy Email Address"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Phone Card */}
          <div className="glass p-5 rounded-xl border border-white/5 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-zinc-900 border border-white/5 rounded-lg text-primary">
                <Phone className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="text-[10px] font-mono text-zinc-500 uppercase block">Phone</span>
                <a href={`tel:${phone}`} className="text-sm font-semibold text-white hover:text-primary transition-colors">
                  {phone}
                </a>
              </div>
            </div>
            <button
              onClick={() => copyToClipboard(phone, "phone")}
              className="p-2 bg-zinc-900 border border-white/5 text-zinc-400 hover:text-white rounded transition-colors"
              title="Copy Phone Number"
            >
              {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Links Grid */}
        <div className="flex justify-center space-x-6 text-zinc-400">
          <a
            href="https://linkedin.com/in/ajinkya-mane-57145527b"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-white text-xs font-mono font-bold tracking-wider uppercase transition-colors"
          >
            <LinkedinIcon className="w-4 h-4 text-primary" /> LinkedIn
          </a>
          <a
            href="https://github.com/ajinkyaXhub"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-white text-xs font-mono font-bold tracking-wider uppercase transition-colors"
          >
            <GithubIcon className="w-4 h-4 text-primary" /> GitHub
          </a>
        </div>
      </div>

      {/* Footer copyright */}
      <div className="border-t border-white/5 mt-24 py-8 text-center text-xs text-zinc-600 font-mono flex flex-col sm:flex-row justify-between max-w-7xl mx-auto px-6 gap-4">
        <span>CRAFTED WITH PRECISION · PUNE, INDIA</span>
        <span>AJINKYA MANE &copy; 2026</span>
      </div>
    </section>
  );
}
