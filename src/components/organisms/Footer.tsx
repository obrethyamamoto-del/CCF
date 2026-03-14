"use client";

import React from "react";
import { Typography } from "../atoms/Typography";
import { Instagram, Facebook, Youtube, Coffee, Linkedin, Music2, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {
  const socialLinks = [
    { icon: <Instagram size={20} />, href: "https://instagram.com/campuscoffeefest", label: "Instagram" },
    { icon: <Music2 size={20} />, href: "https://tiktok.com/@campuscoffeefest", label: "TikTok" },
    { icon: <Linkedin size={20} />, href: "https://linkedin.com/company/campuscoffeefest", label: "LinkedIn" },
    { icon: <Youtube size={20} />, href: "https://youtube.com/@campuscoffeefest", label: "Youtube" },
    { icon: <Facebook size={20} />, href: "https://facebook.com/campuscoffeefest", label: "Facebook" },
  ];

  return (
    <footer className="relative bg-black pt-24 pb-12 overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-8">
              <div className="relative">
                <div className="w-16 h-16 bg-brand-pink rounded-2xl flex items-center justify-center shadow-xl relative z-10 border border-white/20">
                  <div className="relative">
                    <Coffee className="text-white w-8 h-8" />
                    <div className="absolute -top-5 -right-4 rotate-12">
                      <GraduationCap className="text-brand-blue w-7 h-7 filter drop-shadow-lg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-black tracking-tighter text-white leading-none uppercase">
                    CAMPUS
                  </span>
                  <span className="text-3xl font-light tracking-tighter text-brand-pink leading-none uppercase">
                    COFFEE
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <div className="h-px w-6 bg-brand-blue/50" />
                  <span className="text-[10px] uppercase tracking-[0.5em] text-brand-blue font-black">
                    UNIVERSITY FEST
                  </span>
                </div>
              </div>
            </div>
            <Typography variant="body" className="max-w-md text-white/50 mb-8 leading-relaxed">
              Türkiye&apos;nin en enerjik gençlik ve kahve festivali. 16-17 Nisan tarihlerinde kampüsün kalbinde buluşuyoruz. Sanat, müzik ve kahveyle dolu iki gün sizi bekliyor.
            </Typography>
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ y: -5, backgroundColor: "rgba(255, 143, 177, 1)", color: "#000" }}
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70 transition-all duration-300 shadow-xl"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <Typography variant="body" className="font-black uppercase tracking-widest text-white mb-8">
              Hızlı Erişim
            </Typography>
            <ul className="space-y-4">
              {["Festival", "Deneyimler", "Takvim", "İletişim"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-white/50 hover:text-brand-pink transition-colors duration-300 flex items-center gap-2 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-pink scale-0 group-hover:scale-100 transition-transform" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>


        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <Typography variant="caption" className="normal-case text-white/30">
            © 2026 Campus Coffee Fest. Tüm hakları saklıdır.
          </Typography>

        </div>
      </div>
    </footer>
  );
};
