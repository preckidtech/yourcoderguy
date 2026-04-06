"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, CheckCircle2, MessageSquare, Phone } from "lucide-react";
import { trackEvent } from "@/lib/trackEvent";

// --- Configuration & Constants ---
const PROJECT_TYPES: readonly string[] = [
  "Custom Marketplace", 
  "SaaS MVP Development", 
  "AI Integration", 
  "Frontend Architecture"
];

const TIMELINE_OPTIONS: readonly string[] = [
  "Ready immediately",
  "Exploring options",
  "Planning for next quarter"
];

const WHATSAPP_NUMBER = "+2348112476891";

export default function Contact() {
  // --- Component State ---
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedTimeline, setSelectedTimeline] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [projectDetails, setProjectDetails] = useState<string>("");

  // --- Handlers ---
  const toggleType = (type: string) => {
    setSelectedTypes(prev => 
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  const handleWhatsAppRedirect = async () => {
    // 1. Asynchronous tracking execution
    try {
      await trackEvent("WHATSAPP_CLICK");
    } catch (error) {
      console.error("Failed to track event", error);
      // Fail gracefully and continue with the redirect
    }

    // 2. Payload Construction
    const intro = "Hello Precious, I am reaching out from yourcoderguy.com to discuss a potential collaboration.\n\n";
    const types = selectedTypes.length > 0 ? `*Project Focus:* ${selectedTypes.join(", ")}\n` : "";
    const timeline = selectedTimeline ? `*Current Status:* ${selectedTimeline}\n` : "";
    const phone = phoneNumber ? `*Direct Contact:* ${phoneNumber}\n` : "";
    const details = projectDetails ? `\n*Project Brief:*\n${projectDetails}\n\n` : "\n";
    const closing = "Please let me know your availability for a brief consultation call.";
    
    const finalMessage = `${intro}${types}${timeline}${phone}${details}${closing}`;
    const encodedPayload = encodeURIComponent(finalMessage);
    
    // 3. Execution
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedPayload}`, "_blank");
  };

  // --- Derived State ---
  const isFormValid: boolean = selectedTypes.length > 0 && selectedTimeline !== "";

  return (
    <main className="min-h-screen pt-32 pb-24 px-6 lg:px-24 max-w-7xl mx-auto flex flex-col">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        
        {/* Section: Intent & Contact Details */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-5 flex flex-col"
        >
          {/* Header Context */}
          <div className="flex items-center gap-3 mb-6" aria-hidden="true">
            <div className="h-px w-8 bg-[#FACC15]" />
            <span className="text-[#FACC15] font-bold tracking-widest uppercase text-sm">Initiate</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black text-[#F8FAFC] tracking-tight mb-8 leading-tight">
            Let's engineer your next <span className="text-[#FACC15]">platform.</span>
          </h1>
          
          <p className="text-slate-400 text-lg leading-relaxed font-medium mb-12">
            Whether you are launching a two-sided marketplace, building an AI-integrated SaaS MVP, or scaling your frontend architecture, I bring intentionality and precision to every codebase. Let's discuss your requirements.
          </p>

          {/* Contact Methods */}
          <div className="space-y-8 mt-auto">
            
            {/* Direct Channel: Email */}
            <div className="group">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Direct Inquiry</p>
              <a 
                href="mailto:hello@yourcoderguy.com" 
                className="inline-flex items-center gap-3 text-lg font-medium text-slate-300 hover:text-[#FACC15] transition-colors"
                aria-label="Send email to hello@yourcoderguy.com"
              >
                <Mail className="text-[#FACC15]" size={20} aria-hidden="true" /> 
                hello@yourcoderguy.com
              </a>
            </div>

            {/* Geographic Context */}
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Current Base</p>
              <div className="flex items-start gap-3 text-slate-300">
                <MapPin className="text-[#FACC15] shrink-0 mt-1" size={20} aria-hidden="true" />
                <div>
                  <p className="text-lg font-medium mb-1">Osogbo, Osun State</p>
                  <p className="text-sm text-slate-500">Available for global remote engagements.</p>
                </div>
              </div>
            </div>
            
          </div>
        </motion.div>

        {/* Section: Interactive Scope Builder */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-7"
        >
          <div className="bg-[#1E293B]/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 lg:p-10 shadow-2xl relative">
            
            <h2 className="text-2xl font-bold text-[#F8FAFC] mb-8">Project Scope</h2>
            
            {/* Fieldset: Objective Selection */}
            <fieldset className="mb-8 border-none p-0 m-0">
              <legend className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex justify-between items-center w-full">
                <span>1. Primary Objective</span>
                <span className="text-slate-500 text-[10px] bg-slate-800 px-2 py-1 rounded">Select multiple</span>
              </legend>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" role="group" aria-label="Project objectives">
                {PROJECT_TYPES.map((type) => (
                  <button
                    key={type}
                    onClick={() => toggleType(type)}
                    aria-pressed={selectedTypes.includes(type)}
                    className={`flex items-center justify-between p-4 rounded-2xl border transition-all duration-300 text-left ${
                      selectedTypes.includes(type)
                        ? "border-[#FACC15] bg-[#FACC15]/10 text-[#F8FAFC] shadow-[0_0_15px_rgba(250,204,21,0.1)]" 
                        : "border-slate-700/50 bg-slate-800/30 text-slate-400 hover:border-slate-600 hover:bg-slate-800"
                    }`}
                  >
                    <span className="font-semibold text-sm">{type}</span>
                    {selectedTypes.includes(type) && <CheckCircle2 size={18} className="text-[#FACC15]" aria-hidden="true" />}
                  </button>
                ))}
              </div>
            </fieldset>

            {/* Fieldset: Timeline Selection */}
            <fieldset className="mb-8 border-none p-0 m-0">
              <legend className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                2. Current Status
              </legend>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3" role="radiogroup" aria-label="Project timeline status">
                {TIMELINE_OPTIONS.map((timeline) => (
                  <button
                    key={timeline}
                    onClick={() => setSelectedTimeline(timeline)}
                    role="radio"
                    aria-checked={selectedTimeline === timeline}
                    className={`flex items-center justify-center text-center p-3 rounded-2xl border transition-all duration-300 ${
                      selectedTimeline === timeline 
                        ? "border-[#FACC15] bg-[#FACC15]/10 text-[#F8FAFC]" 
                        : "border-slate-700/50 bg-slate-800/30 text-slate-400 hover:border-slate-600 hover:bg-slate-800"
                    }`}
                  >
                    <span className="font-semibold text-xs">{timeline}</span>
                  </button>
                ))}
              </div>
            </fieldset>

            {/* Fieldset: Optional Details */}
            <div className="space-y-5 mb-10">
              <div>
                <label htmlFor="phone-input" className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                  <Phone size={14} aria-hidden="true" /> Direct Phone Number <span className="text-slate-600 lowercase font-normal">(Optional)</span>
                </label>
                <input 
                  id="phone-input"
                  type="tel"
                  placeholder="+234..."
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full bg-slate-800/50 border border-slate-700/50 rounded-xl px-5 py-4 text-[#F8FAFC] placeholder-slate-600 focus:outline-none focus:border-[#FACC15] focus:ring-1 focus:ring-[#FACC15] transition-all"
                />
              </div>

              <div>
                <label htmlFor="details-input" className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                  Project Brief <span className="text-slate-600 lowercase font-normal">(Optional)</span>
                </label>
                <textarea 
                  id="details-input"
                  rows={3}
                  placeholder="Tell me a bit about the core features or goals..."
                  value={projectDetails}
                  onChange={(e) => setProjectDetails(e.target.value)}
                  className="w-full bg-slate-800/50 border border-slate-700/50 rounded-xl px-5 py-4 text-[#F8FAFC] placeholder-slate-600 focus:outline-none focus:border-[#FACC15] focus:ring-1 focus:ring-[#FACC15] transition-all resize-none"
                />
              </div>
            </div>

            {/* Submission Action */}
            <button
              onClick={handleWhatsAppRedirect}
              disabled={!isFormValid}
              aria-disabled={!isFormValid}
              className="w-full bg-[#FACC15] text-[#0F172A] py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] transition-transform shadow-[0_0_20px_rgba(250,204,21,0.2)] group"
            >
              <MessageSquare size={22} className={isFormValid ? "group-hover:animate-bounce" : ""} aria-hidden="true" />
              Submit to Secure Chat
            </button>
            
            <p className="text-center text-slate-500 text-xs mt-6 flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" aria-hidden="true" />
              Message drafted locally. End-to-end encrypted via WhatsApp.
            </p>
            
          </div>
        </motion.div>
        
      </div>
    </main>
  );
}