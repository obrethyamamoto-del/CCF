"use client";

import React from "react";
import { Typography } from "../atoms/Typography";
import { Button } from "../atoms/Button";
import { motion } from "framer-motion";
import { Mail, Phone, Instagram, Send } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-12 rounded-[40px] gradient-bg text-white relative overflow-hidden"
          >
            <div className="relative z-10">
              <Typography variant="title" className="text-4xl md:text-5xl mb-6 text-white">
                Bir kahve eşliğinde <br /> detayları konuşalım.
              </Typography>
              <Typography variant="body" className="mb-10 text-white/80">
                Festivalimizle ilgili her türlü soru, iş birliği ve sponsorluk talepleriniz için bize ulaşın. Kahveyi biz ısmarlıyoruz!
              </Typography>
              
              <div className="space-y-6">
                <a href="mailto:info@campuscoffeefest.com" className="flex items-center gap-4 hover:translate-x-2 transition-transform">
                  <div className="p-3 bg-white/10 rounded-full"><Mail size={20} /></div>
                  <span className="font-medium">info@campuscoffeefest.com</span>
                </a>
                <a href="tel:+905549574646" className="flex items-center gap-4 hover:translate-x-2 transition-transform">
                  <div className="p-3 bg-white/10 rounded-full"><Phone size={20} /></div>
                  <span className="font-medium">0554 957 46 46</span>
                </a>
                <a 
                  href="https://instagram.com/campuscoffeefest" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-4 hover:translate-x-2 transition-transform"
                >
                  <div className="p-3 bg-white/10 rounded-full"><Instagram size={20} /></div>
                  <span className="font-medium">@campuscoffeefest</span>
                </a>
              </div>
            </div>
            {/* Background elements */}
            <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          </motion.div>

          <div className="space-y-8">
            <Typography variant="caption">İLETİŞİM FORMU</Typography>
            <Typography variant="title" className="text-3xl md:text-4xl mb-8">
              Mesajınızı <span className="gradient-text">Bırakın</span>
            </Typography>
            
            <form 
              action="https://formspree.io/f/xpqylprr" 
              method="POST"
              className="space-y-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  required
                  name="name"
                  type="text" 
                  placeholder="Adınız Soyadınız" 
                  className="w-full px-6 py-4 rounded-2xl bg-foreground/5 border border-foreground/10 focus:border-brand-pink outline-none transition-colors"
                />
                <input 
                  required
                  name="email"
                  type="email" 
                  placeholder="E-posta Adresiniz" 
                  className="w-full px-6 py-4 rounded-2xl bg-foreground/5 border border-foreground/10 focus:border-brand-pink outline-none transition-colors"
                />
              </div>
              <textarea 
                required
                name="message"
                placeholder="Mesajınız..." 
                rows={4}
                className="w-full px-6 py-4 rounded-2xl bg-foreground/5 border border-foreground/10 focus:border-brand-pink outline-none transition-colors resize-none"
              ></textarea>
              <Button type="submit" variant="secondary" className="w-full gap-2 py-4">
                Gönder <Send size={18} />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
