import Link from "next/link";
import { Github, Twitter, Linkedin, Mail, Code2, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] border-t border-slate-800/60 pt-16 pb-8 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-[#FACC15]/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Info (Takes up more space on desktop) */}
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Code2 size={28} className="text-[#FACC15]" />
              <span className="text-2xl font-black tracking-tight text-[#F8FAFC]">
                your<span className="text-[#FACC15]">coderguy</span>
              </span>
            </Link>
            <p className="text-slate-400 text-base leading-relaxed max-w-sm mb-8">
              Designing and building high-performing SaaS products, premium web applications, and scalable front-end architecture.
            </p>
            <div className="flex items-center gap-4">
              <SocialLink href="https://x.com/yourcoderguy" icon={<Twitter size={20} />} />
              <SocialLink href="#" icon={<Github size={20} />} />
              <SocialLink href="#" icon={<Linkedin size={20} />} />
              <SocialLink href="mailto:preckidtech@gmail.com" icon={<Mail size={20} />} />
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 md:col-start-7">
            <h3 className="text-[#F8FAFC] font-bold text-lg mb-6">Navigation</h3>
            <ul className="space-y-4">
              <li><FooterLink href="/">Home</FooterLink></li>
              <li><FooterLink href="/projects">Project Vault</FooterLink></li>
              <li><FooterLink href="/links">Social Links</FooterLink></li>
              <li><FooterLink href="/admin">Command Center</FooterLink></li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="md:col-span-3">
            <h3 className="text-[#F8FAFC] font-bold text-lg mb-6">Ready to build?</h3>
            <p className="text-slate-400 text-sm mb-6">
              Let's turn that idea into a functional, revenue-generating product.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 text-[#FACC15] font-bold hover:gap-3 transition-all"
            >
              Start a project <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
        
        {/* Copyright Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm font-medium">
            &copy; {new Date().getFullYear()} yourcoderguy. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm font-medium text-slate-500">
            {/* <span className="hover:text-slate-300 cursor-pointer transition-colors">Built in Nigeria</span> */}
            <span className="hover:text-slate-300 cursor-pointer transition-colors">1% Better Daily</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Helper components for cleaner code
function SocialLink({ href, icon }: { href: string, icon: React.ReactNode }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="p-2.5 bg-slate-800/50 rounded-lg text-slate-400 hover:bg-[#FACC15] hover:text-[#0F172A] transition-all"
    >
      {icon}
    </a>
  );
}

function FooterLink({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <Link href={href} className="text-slate-400 hover:text-[#FACC15] transition-colors font-medium">
      {children}
    </Link>
  );
}