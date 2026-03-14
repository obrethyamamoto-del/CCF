"use client";

import React, { useState, useEffect } from "react";
import { Coffee, Menu, X, Instagram, Facebook, Youtube, Linkedin, Music2, GraduationCap } from "lucide-react";
import { Button } from "../atoms/Button";
import { motion, AnimatePresence } from "framer-motion";
import { SponsorModal } from "./SponsorModal";

export const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSponsorModalOpen, setIsSponsorModalOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Festival", href: "#about" },
    { name: "Deneyimler", href: "#experiences" },
    // { name: "Sponsorlar", href: "#sponsors" },
    { name: "Takvim", href: "#program" },
    { name: "İletişim", href: "#contact" },
  ];

  const socialLinks = [
    { icon: <Instagram size={20} />, href: "https://instagram.com/campuscoffeefest", label: "Instagram" },
    { icon: <Music2 size={20} />, href: "https://tiktok.com/@campuscoffeefest", label: "TikTok" },
    { icon: <Linkedin size={20} />, href: "https://linkedin.com/company/campuscoffeefest", label: "LinkedIn" },
    { icon: <Youtube size={20} />, href: "https://youtube.com/@campuscoffeefest", label: "Youtube" },
    { icon: <Facebook size={20} />, href: "https://facebook.com/campuscoffeefest", label: "Facebook" },
  ];

  if (!mounted) return null;

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "circOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${
          scrolled 
            ? "bg-black/60 backdrop-blur-2xl border-b border-white/5 py-3 shadow-2xl" 
            : "bg-transparent py-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <motion.div 
              whileHover={{ rotate: 15, scale: 1.1 }}
              className="p-2.5 bg-brand-pink rounded-2xl shadow-lg shadow-brand-pink/30 flex items-center justify-center relative"
            >
              <div className="relative">
                <Coffee className="text-white w-5 h-5" />
                <motion.div
                  initial={{ rotate: -15, x: 8, y: -8 }}
                  className="absolute -top-1.5 -right-1.5"
                >
                  <GraduationCap className="text-brand-blue w-3.5 h-3.5 filter drop-shadow-[0_0_2px_rgba(0,0,0,0.5)]" />
                </motion.div>
              </div>
            </motion.div>
            <div className="flex flex-col">
              <span className="text-lg font-heading font-black tracking-tighter text-white leading-none">
                CAMPUS<span className="text-brand-pink">COFFEE</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-brand-blue font-bold opacity-80">
                UNIVERSITY FEST 2026
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-[11px] font-black uppercase tracking-[0.2em] text-white/70 hover:text-white transition-all duration-300 group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-pink transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Button 
              size="sm" 
              className="hidden sm:flex min-w-[150px] bg-white text-black hover:bg-brand-pink hover:text-white border-none transition-all duration-500"
              onClick={() => setIsSponsorModalOpen(true)}
            >
              Sponsor Ol
            </Button>
            
            <button 
              className="lg:hidden p-2 text-white hover:bg-white/10 rounded-xl transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open Menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black backdrop-blur-2xl lg:hidden"
          >
            <div className="flex flex-col h-full p-8 overflow-y-auto">
              <div className="flex justify-between items-center mb-16">
                 <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-brand-pink rounded-xl relative">
                    <div className="relative">
                      <Coffee className="text-white w-5 h-5" />
                      <div className="absolute -top-1.5 -right-1.5">
                        <GraduationCap className="text-brand-blue w-3.5 h-3.5 filter drop-shadow-[0_0_2px_rgba(0,0,0,0.5)]" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-black tracking-widest text-white leading-none">
                      CAMPUS<span className="text-brand-pink">COFFEE</span>
                    </span>
                    <span className="text-[8px] uppercase tracking-[0.2em] text-brand-blue font-bold opacity-80">
                      UNIVERSITY FEST
                    </span>
                  </div>
                </div>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-3 bg-white/5 rounded-2xl text-white border border-white/10"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col gap-6 mb-12">
                {navItems.map((item, i) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-4xl font-black text-white hover:text-brand-pink transition-colors tracking-tighter"
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>

              <div className="mt-auto pt-10 border-t border-white/5 flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                  <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.3em]">Bizi Takip Et</span>
                  <div className="flex gap-3">
                    {socialLinks.map((social, i) => (
                      <motion.a
                        key={i}
                        href={social.href}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + (i * 0.1) }}
                        className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70 active:scale-95 transition-all"
                        aria-label={social.label}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>

                <Button 
                  size="lg" 
                  className="w-full bg-brand-pink text-white"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsSponsorModalOpen(true);
                  }}
                >
                  Sponsor Ol
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <SponsorModal isOpen={isSponsorModalOpen} onClose={() => setIsSponsorModalOpen(false)} />
    </>
  );
};
