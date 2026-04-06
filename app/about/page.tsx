"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Cpu, Users, Target } from "lucide-react";
import React from "react";

// --- Types & Interfaces ---
interface PillarCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// --- Subcomponents ---
/**
 * Reusable card component for core philosophies and pillars.
 * Extracted to maintain lean render cycles in the primary component.
 */
function PillarCard({ icon, title, description }: PillarCardProps) {
  return (
    <article className="bg-slate-800/30 border border-slate-700/50 p-8 rounded-3xl hover:border-[#FACC15]/30 hover:bg-slate-800/50 transition-all group">
      <div 
        className="text-[#FACC15] mb-6 p-4 bg-[#0F172A] rounded-2xl inline-block shadow-inner group-hover:scale-110 transition-transform"
        aria-hidden="true"
      >
        {icon}
      </div>
      <h3 className="text-xl font-bold text-[#F8FAFC] mb-3">{title}</h3>
      <p className="text-slate-400 leading-relaxed font-medium text-sm">
        {description}
      </p>
    </article>
  );
}

// --- Main Layout Component ---
export default function About() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6 lg:px-24 max-w-7xl mx-auto flex flex-col">
      
      {/* Section: Editorial Hero Context */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center mb-32">
        
        {/* Sub-section: Core Narrative */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col justify-center"
        >
          <div className="flex items-center gap-3 mb-6" aria-hidden="true">
            <div className="h-px w-8 bg-[#FACC15]" />
            <span className="text-[#FACC15] font-bold tracking-widest uppercase text-sm">Nice to meet you</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#F8FAFC] tracking-tight mb-6 leading-tight">
            Engineering with <span className="text-[#FACC15]">intention.</span>
          </h1>
          
          <div className="space-y-6 text-slate-400 text-lg leading-relaxed font-medium">
            <p>
              I am <strong className="text-[#F8FAFC]">Oyebode Precious Isaac</strong>, a Full-Stack Next.js Developer specializing in custom SaaS platforms, AI MVPs, and complex two-sided marketplaces. Currently completing my Computer Science degree (expected July 2026), my approach to technology is rooted in a simple but relentless philosophy: <strong className="text-slate-200">a 1% increase daily.</strong>
            </p>
            <p>
              My work focuses on bridging the gap between solid backend engineering and high-performance frontends. I partner closely with founders to architect scalable platforms, implement complex Stripe Connect transaction flows, and build dynamic interfaces using Next.js and Sharetribe. As I continue to evolve, I am actively expanding my stack into React Native mobile development and Data Analytics to provide true end-to-end product mastery.
            </p>
            <p>
              Beyond client architecture, I am deeply invested in the tech ecosystem. Based in Osun State, Nigeria, I serve as the Software Director of my university's tech community, coordinating developer teams, managing deployments, and empowering the next generation of software engineers.
            </p>
          </div>
        </motion.div>

        {/* Sub-section: Visual Identity */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-5 relative"
        >
          <div className="aspect-[3/4] w-full rounded-3xl overflow-hidden bg-slate-800 border border-slate-700 relative shadow-2xl group">
            <Image 
              src="/profile.png" // Updated to match your verified homepage asset
              alt="Portrait of Oyebode Precious Isaac" 
              fill 
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105" 
              priority
            /> 
            
            {/* Visual Grading Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/20 to-transparent opacity-60" aria-hidden="true" />
          </div>
          
          {/* Ambient Lighting Element */}
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#FACC15] rounded-full blur-3xl opacity-20 -z-10" aria-hidden="true" />
        </motion.div>
      </section>

      {/* Section: Operational Philosophy */}
      <section className="mb-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <PillarCard 
            icon={<Target size={32} />}
            title="1% Better Daily"
            description="Incremental progress is the core of my workflow. Every commit, every component, and every architecture decision is a calculated step toward mastery."
          />
          <PillarCard 
            icon={<Cpu size={32} />}
            title="Marketplaces & AI SaaS"
            description="I architect products that scale. My focus is on robust database design, secure API integrations, and deploying fast, accessible Next.js interfaces."
          />
          <PillarCard 
            icon={<Users size={32} />}
            title="Community Leadership"
            description="As a Tech Director, I believe knowledge is meant to be shared. I manage development roadmaps, mentor junior developers, and build resilient tech communities."
          />
        </motion.div>
      </section>

      {/* Section: Call to Action Routing */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full bg-[#1E293B] border border-slate-700 rounded-3xl p-10 lg:p-16 text-center relative overflow-hidden"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-[#FACC15] to-transparent" aria-hidden="true" />
        
        <h2 className="text-3xl lg:text-4xl font-black text-[#F8FAFC] mb-6">Let's build something remarkable.</h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Whether you are launching your first marketplace MVP or rebuilding a legacy SaaS platform with modern front-end architecture, I bring the full-stack depth and product thinking your project needs.
        </p>
        
        <Link 
          href="/contact"
          className="inline-flex items-center gap-2 bg-[#FACC15] text-[#0F172A] px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform shadow-[0_0_20px_rgba(250,204,21,0.2)]"
        >
          Let's discuss your project <ArrowRight size={20} aria-hidden="true" />
        </Link>
      </motion.section>

    </main>
  );
}