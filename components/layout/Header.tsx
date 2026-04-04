"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Code2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll for the glassmorphism effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0F172A]/80 backdrop-blur-xl border-b border-slate-800 shadow-lg" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-[#FACC15] p-2 rounded-lg text-[#0F172A] group-hover:scale-105 transition-transform">
            <Code2 size={24} strokeWidth={2.5} />
          </div>
          <span className="text-2xl font-black tracking-tight text-[#F8FAFC]">
            your<span className="text-[#FACC15]">coderguy</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/projects" className="text-sm font-semibold text-slate-300 hover:text-[#FACC15] transition-colors tracking-wide">Portfolio</Link>
          <Link href="/about" className="text-sm font-semibold text-slate-300 hover:text-[#FACC15] transition-colors tracking-wide">About</Link>
          <Link href="/links" className="text-sm font-semibold text-slate-300 hover:text-[#FACC15] transition-colors tracking-wide">Socials</Link>
          
          <div className="h-6 w-px bg-slate-700 mx-2"></div>

          <Link 
            href="/contact" 
            className="relative overflow-hidden group bg-[#FACC15] text-[#0F172A] px-7 py-2.5 rounded-full font-bold transition-all hover:shadow-[0_0_20px_rgba(250,204,21,0.4)]"
          >
            <span className="relative z-10">Let's Talk</span>
            <div className="absolute inset-0 h-full w-full bg-white/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></div>
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-slate-300 hover:text-[#FACC15] transition-colors focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 w-full bg-[#0F172A]/95 backdrop-blur-2xl border-b border-slate-800 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col px-6 py-8 gap-6">
              <Link href="/projects" onClick={() => setIsOpen(false)} className="text-xl font-bold text-slate-300 hover:text-[#FACC15] transition-colors">Portfolio</Link>
              <Link href="/about" onClick={() => setIsOpen(false)} className="text-xl font-bold text-slate-300 hover:text-[#FACC15] transition-colors">About</Link>
              <Link href="/links" onClick={() => setIsOpen(false)} className="text-xl font-bold text-slate-300 hover:text-[#FACC15] transition-colors">Socials</Link>
              
              <Link 
                href="/contact" 
                onClick={() => setIsOpen(false)}
                className="bg-[#FACC15] text-[#0F172A] text-center px-6 py-4 mt-4 rounded-2xl font-black text-lg shadow-lg"
              >
                Let's Talk
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}