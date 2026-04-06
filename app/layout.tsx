import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { MessageCircle } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://yourcoderguy.com'),
  title: "yourcoderguy | Next.js & AI SaaS Expert",
  description: "Specializing in high-performance SaaS platforms, custom marketplaces, and integrating AI into scalable front-end architecture.",
  openGraph: {
    title: "yourcoderguy | Next.js & AI SaaS Expert",
    description: "Specializing in high-performance SaaS platforms, custom marketplaces, and integrating AI into scalable front-end architecture.",
    url: 'https://yourcoderguy.com',
    siteName: 'yourcoderguy Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "yourcoderguy | Next.js & AI SaaS Expert",
    description: "Specializing in high-performance SaaS platforms, custom marketplaces, and integrating AI into scalable front-end architecture.",
    creator: '@yourcoderguy',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const whatsappMessage = "Hi Precious! I was browsing yourcoderguy.com and would like to discuss a potential project.";
  const encodedMessage = encodeURIComponent(whatsappMessage);

  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} bg-[#0F172A] text-[#F8FAFC] antialiased pt-20 flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <a 
          href={`https://wa.me/+2348112476891?text=${encodedMessage}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 p-4 bg-[#FACC15] text-[#0F172A] rounded-full shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:scale-110 transition-transform flex items-center justify-center group"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={28} className="group-hover:animate-pulse" />
        </a>
      </body>
    </html>
  );
}