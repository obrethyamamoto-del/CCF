"use client";

import React from "react";
import { Typography } from "../atoms/Typography";
import { StatCard } from "../molecules/StatCard";
import { motion } from "framer-motion";

export const About = () => {
  const stats = [
    { number: "20K+", label: "Fiziksel Ziyaretçi" },
    { number: "250K+", label: "Dijital Erişim" },
    { number: "53.000", label: "Kampüs Öğrencisi" },
  ];

  return (
    <section id="about" className="section-padding overflow-hidden bg-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="caption" className="mb-4 tracking-[0.3em] text-brand-pink font-bold">FESTİVAL HAKKINDA</Typography>
            <Typography variant="title" className="text-4xl md:text-6xl mb-8 !leading-[1.1]">
              Kampüste <br className="hidden md:block" /> <span className="gradient-text">Yeni Bir Kültür</span> Doğuyor.
            </Typography>
            <Typography variant="body" className="max-w-xl text-lg opacity-60 font-light leading-relaxed mb-6">
              {"Campus Coffee Fest, sadece bir kahve tadımı değil, gençlerin bir araya geldiği, markaların en yeni deneyimlerini sunduğu ve sanatın her köşede hissedildiği modern bir platformdur."}
            </Typography>
            <Typography variant="body" className="max-w-xl text-lg opacity-60 font-light leading-relaxed">
              2026 yılında, sınırları zorlayan bir organizasyonla kampüsü canlandırmaya hazırız.
            </Typography>
          </motion.div>

          {/* Perfectly Balanced Responsive Stats Layout */}
          <div className="w-full lg:max-w-none mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 items-stretch">
              <StatCard number={stats[0].number} label={stats[0].label} />
              <StatCard number={stats[1].number} label={stats[1].label} />
              <div className="sm:col-span-2 lg:col-span-1">
                <StatCard number={stats[2].number} label={stats[2].label} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-brand-pink/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
};
