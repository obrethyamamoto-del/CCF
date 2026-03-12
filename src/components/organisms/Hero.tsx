"use client";

import React from "react";
import { Typography } from "../atoms/Typography";
import { Button } from "../atoms/Button";
import { motion } from "framer-motion";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with optimized dark overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt="Festival Background"
          fill
          className="object-cover opacity-50"
          priority
        />
        {/* Multi-layer gradient for depth and text contrast */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="caption" className="mb-4 text-brand-pink drop-shadow-md font-black uppercase tracking-[0.2em]">
            16 - 17 Nisan 2026 • AKDENİZ ÜNİVERSİTESİ KAMPÜSÜ
          </Typography>
          <Typography variant="title" className="mb-6 max-w-4xl mx-auto text-white drop-shadow-2xl !text-4xl md:!text-7xl lg:!text-8xl !leading-[1.1]">
            Geleceği <span className="gradient-text">Kahve Kokusuyla</span> Birlikte Keşfet.
          </Typography>
          <Typography variant="subtitle" className="mb-10 max-w-2xl mx-auto text-white/80 drop-shadow-md font-medium">
            Türkiye&apos;nin en büyük gençlik ve kahve festivali geri dönüyor. İki gün boyunca kesintisiz deneyim, müzik ve kültür seni bekliyor.
          </Typography>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button variant="secondary" size="lg" className="w-full sm:w-auto shadow-2xl">
              Katıl
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-black shadow-2xl" 
              onClick={() => document.getElementById('program')?.scrollIntoView()}
            >
              Festival Takvimi
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Orbs */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-brand-pink/20 rounded-full blur-[150px] animate-float opacity-40" />
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-brand-blue/20 rounded-full blur-[150px] animate-float opacity-40" style={{ animationDelay: "1.5s" }} />
    </section>
  );
};
