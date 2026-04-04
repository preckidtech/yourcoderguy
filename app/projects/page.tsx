"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight, Sparkles } from "lucide-react";

// Comprehensively extracted from your Upwork Portfolio & History
const projectData = [
  {
    title: "AI CS Study Assistant",
    category: "Mobile App",
    desc: "Machine learning-powered mobile application built entirely from scratch to dynamically summarize Computer Science course materials and generate smart flashcards using T5 and BART models.",
    tech: ["React Native", "Python", "TensorFlow", "Custom ML"],
    link: "#",
    github: "#",
    featured: true,
  },
  {
    title: "Elesan B2B Equipment Rental",
    category: "Marketplace",
    desc: "A comprehensive B2B equipment rental platform. Architected complex transaction flows, custom commission logic, and multi-party payment routing.",
    tech: ["Next.js", "Sharetribe Flex", "Stripe Connect", "Node.js"],
    link: "#",
    github: "#",
    featured: true,
  },
  {
    title: "DanceDirectory Booking Hub",
    category: "Marketplace",
    desc: "A seamless class booking marketplace designed for high conversion and intuitive user scheduling.",
    tech: ["Next.js", "Sharetribe", "Tailwind CSS"],
    link: "#",
    github: "#",
    featured: false,
  },
  {
    title: "Dictahub AI Interface",
    category: "SaaS / Web App",
    desc: "Engineered two complex, custom user interfaces for proprietary AI models, focusing on seamless UI/UX and real-time data handling.",
    tech: ["Next.js", "React.js", "API Integration"],
    link: "#",
    github: "#",
    featured: false,
  },
  {
    title: "Getragene Lust C2C Market",
    category: "Marketplace",
    desc: "An anonymous C2C marketplace platform built for scale, prioritizing secure user data management and seamless peer-to-peer transactions.",
    tech: ["React", "Sharetribe", "PostgreSQL"],
    link: "#",
    github: "#",
    featured: false,
  },
  {
    title: "Ice Cold Studio Media Portal",
    category: "SaaS / Web App",
    desc: "Architected a custom CMS and lightweight SaaS media management application featuring a secure Client Vault with role-based access control.",
    tech: ["Next.js", "Headless CMS", "RBAC"],
    link: "#",
    github: "#",
    featured: false,
  },
  {
    title: "Premium Healthcare Portal",
    category: "Website",
    desc: "High-performance medical and clinic website optimized for patient conversion, fast load times, and professional aesthetic delivery.",
    tech: ["CMS", "UI/UX Design", "SEO"],
    link: "#",
    github: "#",
    featured: false,
  },
  {
    title: "Enterprise E-Learning LMS",
    category: "Website",
    desc: "Scalable educational platform integrated with Tutor LMS, enabling course creators to manage curriculum and student progress efficiently.",
    tech: ["WordPress", "Tutor LMS", "Payment Gateways"],
    link: "#",
    github: "#",
    featured: false,
  }
];

const filters = ["All", "Marketplace", "SaaS / Web App", "Mobile App", "Website"];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? projectData : projectData.filter(p => p.category === filter);

  return (
    <main className="min-h-screen pt-32 pb-24 px-6 lg:px-24 max-w-7xl mx-auto">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#F8FAFC] tracking-tight mb-6">
            Selected <span className="text-[#FACC15]">Works.</span>
          </h1>
          <p className="text-slate-400 text-lg font-medium leading-relaxed">
            A comprehensive vault of scalable marketplaces, AI-integrated SaaS MVPs, and robust web applications engineered for founders and enterprise clients.
          </p>
        </motion.div>
      </div>
      
      {/* Mobile-Optimized Filter Tabs */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex overflow-x-auto pb-4 mb-12 -mx-6 px-6 md:mx-0 md:px-0 hide-scrollbar gap-3"
      >
        {filters.map(t => (
          <button 
            key={t}
            onClick={() => setFilter(t)}
            className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
              filter === t 
                ? "bg-[#FACC15] text-[#0F172A] shadow-[0_0_15px_rgba(250,204,21,0.3)]" 
                : "bg-slate-800/50 text-slate-400 hover:bg-slate-700 hover:text-white border border-slate-700/50"
            }`}
          >
            {t}
          </button>
        ))}
      </motion.div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
        <AnimatePresence mode="popLayout">
          {filtered.map((p, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              key={p.title}
              className="group flex flex-col"
            >
              {/* Massive Image Preview Container */}
              <div className="w-full aspect-[4/3] md:aspect-[16/10] bg-[#1E293B] rounded-3xl overflow-hidden relative mb-6 border border-slate-700 shadow-xl group-hover:border-slate-500 transition-colors duration-500">
                {/* Image Placeholder - Replace with <Image src="/project-image.jpg" fill className="object-cover" /> */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-500 font-medium group-hover:scale-105 transition-transform duration-700 ease-out bg-slate-800/50 gap-2">
                  <span className="text-sm tracking-widest uppercase opacity-70">{p.title}</span>
                  <span className="text-xs">Preview Image</span>
                </div>

                {/* Top badges */}
                <div className="absolute top-5 left-5 flex flex-wrap gap-2">
                  <span className="bg-[#0F172A]/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-white border border-slate-600 shadow-sm">
                    {p.category}
                  </span>
                  {p.featured && (
                    <span className="bg-[#FACC15]/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-[#0F172A] border border-[#FACC15] shadow-sm flex items-center gap-1">
                      <Sparkles size={12} /> Featured
                    </span>
                  )}
                </div>

                {/* Hover Overlay Links */}
                <div className="absolute inset-0 bg-[#0F172A]/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
                  <a href={p.link} className="w-14 h-14 bg-[#FACC15] rounded-full flex items-center justify-center text-[#0F172A] hover:scale-110 transition-transform shadow-lg">
                    <ExternalLink size={24} />
                  </a>
                  <a href={p.github} className="w-14 h-14 bg-slate-800 border border-slate-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg">
                    <Github size={24} />
                  </a>
                </div>
              </div>

              {/* Text & Meta Content */}
              <div className="flex flex-col flex-grow px-2">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold text-[#F8FAFC] group-hover:text-[#FACC15] transition-colors">
                    {p.title}
                  </h3>
                  <a href={p.link} className="text-slate-500 hover:text-[#FACC15] transition-colors md:hidden">
                    <ArrowUpRight size={24} />
                  </a>
                </div>
                
                <p className="text-slate-400 text-base leading-relaxed mb-6 flex-grow">
                  {p.desc}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {p.tech.map(t => (
                    <span 
                      key={t} 
                      className="text-[11px] font-bold uppercase tracking-wider text-slate-300 bg-slate-800/50 border border-slate-700/50 px-3 py-1.5 rounded-lg shadow-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </main>
  );
}