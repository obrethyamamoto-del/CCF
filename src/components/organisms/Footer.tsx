"use client";

import React from "react";
import { Typography } from "../atoms/Typography";
import { Instagram, Twitter, Facebook, Youtube, Coffee } from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {
  const socialLinks = [
    { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
    { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
    { icon: <Facebook size={20} />, href: "#", label: "Facebook" },
    { icon: <Youtube size={20} />, href: "#", label: "Youtube" },
  ];

  return (
    <footer className="relative bg-black pt-24 pb-12 overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 bg-brand-pink rounded-2xl shadow-lg shadow-brand-pink/20">
                <Coffee className="text-white w-6 h-6" />
              </div>
              <div>
                <span className="text-2xl font-black tracking-tighter text-white leading-none block">
                  CAMPUS COFFEE
                </span>
                <span className="text-xs uppercase tracking-[0.3em] text-brand-pink font-bold">
                  FEST 2026
                </span>
              </div>
            </div>
            <Typography variant="body" className="max-w-md text-white/50 mb-8 leading-relaxed">
              Türkiye'nin en enerjik gençlik ve kahve festivali. 16-17 Nisan tarihlerinde kampüsün kalbinde buluşuyoruz. Sanat, müzik ve kahveyle dolu iki gün sizi bekliyor.
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
              {["Festival", "Deneyimler", "Sponsorlar", "Takvim", "İletişim"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-white/50 hover:text-brand-pink transition-colors duration-300 flex items-center gap-2 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-pink scale-0 group-hover:scale-100 transition-transform" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <Typography variant="body" className="font-black uppercase tracking-widest text-white mb-8">
              Destek
            </Typography>
            <ul className="space-y-4">
               <li>
                <a href="#" className="text-white/50 hover:text-white transition-colors">Gizlilik Politikası</a>
              </li>
              <li>
                <a href="#" className="text-white/50 hover:text-white transition-colors">Kullanım Koşulları</a>
              </li>
              <li>
                <a href="#" className="text-white/50 hover:text-white transition-colors">Bilet İade Koşulları</a>
              </li>
              <li>
                <a href="#" className="text-white/50 hover:text-white transition-colors">KVKK Aydınlatma Metni</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <Typography variant="caption" className="normal-case text-white/30">
            © 2026 Campus Coffee Fest. Tüm hakları saklıdır.
          </Typography>
          <div className="flex items-center gap-6">
             <span className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]">Designed by Antigravity AI</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
