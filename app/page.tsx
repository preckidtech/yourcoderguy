"use client";

import { useState, KeyboardEvent } from "react";
import { motion } from "framer-motion";
import { Download, ArrowRight, Github, ExternalLink, Terminal as TerminalIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

type TerminalLine = { type: "input" | "output"; text: string };

export default function Home() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<TerminalLine[]>([
    { type: "input", text: "whoami" },
    { type: "output", text: "Precious Oyebode Isaac: Next.js Developer | AI SaaS & Marketplace Expert." },
    { type: "output", text: "Type 'skills', 'stack', 'motto', or 'clear'..." }
  ]);

  const handleCommand = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const cmd = input.trim().toLowerCase();
      const newHistory = [...history, { type: "input" as const, text: cmd }];
      
      switch (cmd) {
        case "skills":
          newHistory.push({ type: "output", text: "> Custom Marketplace Development, SaaS MVP Engineering, AI Integration." });
          break;
        case "stack":
          newHistory.push({ type: "output", text: "> Next.js, Node.js, TypeScript, Sharetribe Flex, Stripe Connect, PostgreSQL." });
          break;
        case "motto":
          newHistory.push({ type: "output", text: "> 1% increase daily." });
          break;
        case "clear":
          setHistory([]);
          setInput("");
          return;
        case "":
          break;
        default:
          newHistory.push({ type: "output", text: `> command not found: ${cmd}` });
      }
      
      setHistory(newHistory);
      setInput("");
    }
  };

  return (
    <main className="min-h-screen px-6 py-12 lg:px-24 flex flex-col items-center">
      
      {/* Hero Section */}
      <section className="w-full max-w-4xl flex flex-col items-center text-center mt-16 mb-24">
        
        {/* Glowing "Available for Work" Status Indicator */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 bg-slate-800/50 border border-slate-700 px-4 py-1.5 rounded-full mb-8"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          </span>
          <span className="text-xs font-medium text-slate-300 tracking-wide">Accepting new consultations</span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-[3px] border-[#FACC15] mb-8 overflow-hidden bg-slate-800 shadow-[0_0_30px_rgba(250,204,21,0.15)]"
        >
          {/* Ensure your profile.png is in the public folder */}
          <Image src="/profile.png" alt="Precious" fill className="object-cover object-top" />
        </motion.div>

        {/* Refined Apple-style Typography */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-[#F8FAFC] leading-tight"
        >
          Architecting scalable <br className="hidden md:block" />
          <span className="text-[#FACC15]">Marketplaces & AI SaaS.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed font-medium"
        >
          Full-stack Next.js developer specializing in two-sided marketplace development, SaaS MVP engineering, and AI-integrated web applications for founders and product teams.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto"
        >
          <Link 
            href="/contact"
            className="w-full sm:w-auto bg-[#FACC15] text-[#0F172A] px-8 py-3.5 rounded-full font-bold flex items-center justify-center gap-2 hover:scale-105 transition-transform"
          >
            Start a Project <ArrowRight size={18} />
          </Link>
          
          <button 
            className="w-full sm:w-auto border border-slate-700 text-slate-300 px-8 py-3.5 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-slate-800 hover:text-white transition-all"
          >
            Download CV <Download size={18} />
          </button>
        </motion.div>
      </section>

      {/* Interactive Terminal Easter Egg */}
      <section className="w-full max-w-3xl mb-32">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#1E293B] rounded-xl border border-slate-700 overflow-hidden shadow-2xl"
        >
          <div className="bg-slate-800/80 px-4 py-3 flex items-center gap-2 border-b border-slate-700">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-[#FACC15]" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="text-xs text-slate-400 ml-2 font-mono flex items-center gap-2">
              <TerminalIcon size={14} /> yourcoderguy — bash
            </span>
          </div>
          <div className="p-6 font-mono text-sm md:text-base h-64 overflow-y-auto">
            {history.map((line, i) => (
              <div key={i} className="mb-2">
                {line.type === "input" ? (
                  <p><span className="text-[#FACC15] mr-2">$</span><span className="text-slate-200">{line.text}</span></p>
                ) : (
                  <p className="text-slate-400 ml-4">{line.text}</p>
                )}
              </div>
            ))}
            <div className="flex items-center gap-2 mt-2">
              <span className="text-[#FACC15]">$</span>
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleCommand}
                spellCheck={false}
                className="bg-transparent border-none outline-none text-slate-200 w-full font-mono focus:ring-0"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Featured Projects with Preview Animation */}
      <section className="w-full max-w-5xl">
        <div className="flex justify-between items-end mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#F8FAFC]">Selected Work</h2>
          <Link href="/projects" className="text-[#FACC15] text-sm font-bold hover:underline flex items-center gap-1">
            View All <ArrowRight size={14} />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Project Card 1: Sharetribe Marketplace */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group flex flex-col gap-4"
          >
            <div className="w-full aspect-[4/3] rounded-2xl bg-slate-800 border border-slate-700 overflow-hidden relative">
              {/* <Image src="/sharetribe-preview.jpg" alt="Marketplace" fill className="object-cover group-hover:scale-105 transition-transform duration-500" /> */}
              <div className="absolute inset-0 flex items-center justify-center text-slate-500 font-medium group-hover:scale-105 transition-transform duration-500">
                Marketplace Preview Image
              </div>
              
              <div className="absolute bottom-4 left-4 flex gap-2">
                <span className="bg-[#0F172A]/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-slate-300 border border-slate-700">Sharetribe Flex</span>
                <span className="bg-[#0F172A]/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#FACC15] border border-slate-700">Next.js</span>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#F8FAFC] mb-2 group-hover:text-[#FACC15] transition-colors">B2B Equipment Rental Platform</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                A custom two-sided marketplace engineered with complex transaction flows, Stripe Connect integration, and multi-party payment routing.
              </p>
              <div className="flex gap-5">
                <a href="#" className="text-[#F8FAFC] flex items-center gap-2 text-sm font-bold hover:text-[#FACC15] transition-colors">
                  <ExternalLink size={16} /> View Details
                </a>
              </div>
            </div>
          </motion.div>

          {/* Project Card 2: AI / SaaS */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group flex flex-col gap-4"
          >
            <div className="w-full aspect-[4/3] rounded-2xl bg-slate-800 border border-slate-700 overflow-hidden relative">
              {/* <Image src="/ai-app-preview.jpg" alt="AI SaaS" fill className="object-cover group-hover:scale-105 transition-transform duration-500" /> */}
              <div className="absolute inset-0 flex items-center justify-center text-slate-500 font-medium group-hover:scale-105 transition-transform duration-500">
                AI MVP Preview Image
              </div>
              
              <div className="absolute bottom-4 left-4 flex gap-2">
                <span className="bg-[#0F172A]/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-slate-300 border border-slate-700">Node.js</span>
                <span className="bg-[#0F172A]/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#FACC15] border border-slate-700">AI Integration</span>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#F8FAFC] mb-2 group-hover:text-[#FACC15] transition-colors">AI/NLP Study Assistant</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                An advanced MVP leveraging machine learning models (T5 & BART) for automated dynamic content summarization and smart flashcard generation.
              </p>
              <div className="flex gap-5">
                <a href="#" className="text-[#F8FAFC] flex items-center gap-2 text-sm font-bold hover:text-[#FACC15] transition-colors">
                  <ExternalLink size={16} /> View Details
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

    </main>
  );
}