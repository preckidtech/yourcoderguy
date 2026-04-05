"use client";

import { motion } from "framer-motion";
import { Youtube, Linkedin, Instagram, Facebook, Twitter, MessageCircle, ArrowUpRight, Code2 } from "lucide-react";
import Image from "next/image";

// Custom SVG for TikTok
const TikTokIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

// Custom SVG for Upwork
const UpworkIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.48 6.06c-1.84 0-3.41 1.05-4.14 2.58L12.2 4H9.45v11.37c0 1.94-1.57 3.52-3.52 3.52S2.41 17.31 2.41 15.37c0-1.94 1.57-3.52 3.52-3.52.88 0 1.68.32 2.3.85V6.86a6.25 6.25 0 0 0-4.6-2.02c-3.45 0-6.25 2.8-6.25 6.25s2.8 6.25 6.25 6.25 6.25-2.8 6.25-6.25V9.41l1.15 4.69 2.59.65-1.46-5.87c.78-1.55 2.39-2.6 4.25-2.6 2.65 0 4.8 2.15 4.8 4.8s-2.15 4.8-4.8 4.8c-.85 0-1.64-.23-2.31-.62l-1.39 5.61 2.7.67.75-3.03c.69.23 1.45.36 2.25.36 3.99 0 7.23-3.24 7.23-7.23s-3.24-7.22-7.23-7.22z"/>
  </svg>
);

export default function SocialLinks() {
  const socials = [
    { name: "Upwork", handle: "Top Rated Expert", url: "https://www.upwork.com/freelancers/~01751909b912ba12d1", icon: <UpworkIcon />, colSpan: "md:col-span-1", color: "text-[#14A800]" },
    { name: "LinkedIn", handle: "yourcoderguy", url: "https://linkedin.com/in/yourcoderguy", icon: <Linkedin size={28} />, colSpan: "md:col-span-1", color: "text-blue-500" },
    { name: "Twitter / X", handle: "@yourcoderguy", url: "https://twitter.com/yourcoderguy", icon: <Twitter size={28} />, colSpan: "md:col-span-1", color: "text-slate-300" },
    { name: "YouTube", handle: "@yourcoderguy", url: "https://youtube.com/@yourcoderrguy?si=__yCEqJICp1xjDgi", icon: <Youtube size={28} />, colSpan: "md:col-span-1", color: "text-red-500" },
    { name: "Instagram", handle: "@yourcoderguy", url: "https://instagram.com/yourcoderguy", icon: <Instagram size={28} />, colSpan: "md:col-span-1", color: "text-pink-500" },
    { name: "TikTok", handle: "@yourcoderguy", url: "https://tiktok.com/@yourcoderguy", icon: <TikTokIcon />, colSpan: "md:col-span-1", color: "text-white" },
  ];

  return (
    <main className="min-h-screen bg-[#0F172A] pt-24 pb-20 px-6 flex justify-center overflow-hidden relative">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#FACC15] rounded-full blur-[150px] opacity-[0.03] pointer-events-none"></div>

      <div className="w-full max-w-2xl z-10">
        
        {/* Identity Section: The Photo Array */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center mb-12 relative"
        >
          {/* Main Profile Image */}
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-[2rem] border border-slate-700 bg-slate-800 shadow-2xl z-20 overflow-hidden rotate-[-2deg] hover:rotate-0 transition-all duration-500 group">
             <Image src="/profile-main.png" alt="Precious" fill className="object-cover object-top" />
          </div>

          {/* Secondary Photo */}
          <div className="absolute top-4 -right-4 md:-right-8 w-28 h-28 rounded-2xl border border-slate-700 bg-slate-800 shadow-xl z-10 overflow-hidden rotate-[12deg] opacity-80 hidden sm:block">
             <Image src="/precious.jpg" alt="Coding" fill className="object-cover grayscale hover:grayscale-0 transition-all" />
          </div>

          {/* Tertiary Photo */}
          <div className="absolute top-8 -left-4 md:-left-8 w-24 h-24 rounded-2xl border border-slate-700 bg-slate-800 shadow-xl z-10 overflow-hidden rotate-[-15deg] opacity-70 hidden sm:block">
            <Image src="/santiago.jpg" alt="Speaking" fill className="object-cover grayscale hover:grayscale-0 transition-all" />
          </div>

          <div className="text-center mt-8 relative z-30">
            <h1 className="text-2xl md:text-3xl font-black text-[#F8FAFC] flex items-center justify-center gap-2">
              your<span className="text-[#FACC15]">coderguy</span> <Code2 size={24} className="text-[#FACC15]" />
            </h1>
            <p className="text-slate-400 font-medium mt-2 max-w-md mx-auto">
              Next.js Developer & AI SaaS Expert. <br/> 
              <span className="text-[#FACC15] text-sm tracking-widest uppercase font-bold">1% Increase Daily.</span>
            </p>
          </div>
        </motion.div>

        {/* The Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Primary CTA: WhatsApp (Spans full width) */}
          <motion.a
            href="https://wa.me/+2348112476891?text=Hello%20Precious!%20I%20am%20reaching%20out%20from%20your%20link%20tree%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2 relative overflow-hidden bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#FACC15]/50 p-6 rounded-3xl group hover:border-[#FACC15] transition-all duration-500 shadow-[0_0_30px_rgba(250,204,21,0.1)] hover:shadow-[0_0_40px_rgba(250,204,21,0.2)] flex items-center justify-between"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FACC15] blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="flex items-center gap-5 relative z-10">
              <div className="w-14 h-14 rounded-full bg-[#FACC15] flex items-center justify-center text-[#0F172A] shadow-lg group-hover:scale-110 transition-transform">
                <MessageCircle size={28} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#F8FAFC]">Hire Me / Collaborate</h2>
                <p className="text-[#FACC15] text-sm font-medium">Available for new projects</p>
              </div>
            </div>
            <ArrowUpRight size={24} className="text-slate-400 group-hover:text-[#FACC15] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all relative z-10" />
          </motion.a>

          {/* Social Links Generator */}
          {socials.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.05 }}
              className={`bg-[#1E293B]/60 backdrop-blur-md border border-slate-700/50 p-5 rounded-3xl hover:bg-slate-800 hover:border-slate-500 transition-all duration-300 group flex items-center justify-between ${social.colSpan}`}
            >
              <div className="flex items-center gap-4">
                <div className={`p-3 bg-slate-800 rounded-xl group-hover:scale-110 transition-transform shadow-inner border border-slate-700 ${social.color}`}>
                  {social.icon}
                </div>
                <div>
                  <h3 className="font-bold text-[#F8FAFC] text-sm md:text-base">{social.name}</h3>
                  <p className="text-slate-500 text-xs md:text-sm tracking-wide">{social.handle}</p>
                </div>
              </div>
              <ArrowUpRight size={18} className="text-slate-600 group-hover:text-white transition-colors" />
            </motion.a>
          ))}
          
          {/* Main Portfolio Link (Spans full width at bottom) */}
          <motion.a
            href="/"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="md:col-span-2 bg-slate-800/40 border border-slate-700/50 p-5 rounded-3xl hover:bg-slate-800 transition-all duration-300 group flex items-center justify-between mt-4"
          >
            <div className="flex items-center gap-3">
              <span className="text-slate-400 text-sm font-medium">Explore my full engineering portfolio</span>
            </div>
            <ArrowUpRight size={18} className="text-slate-500 group-hover:text-[#FACC15] transition-colors" />
          </motion.a>

        </div>
      </div>
    </main>
  );
}