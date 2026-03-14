"use client";

import React from "react";
import { Typography } from "../atoms/Typography";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";

export const Program = () => {
  const days = [
    {
      date: "16 NİSAN",
      day: "1. GÜN",
      theme: "Coffee & Protocol Day",
      items: [
        { time: "09:00", event: "Açılış & Protokol Karşılama" },
        { time: "11:00", event: "Barista Show: Latte Art Yarışması" },
        { time: "14:00", event: "Workshop: Filtre Kahve Demleme Teknikleri" },
        { time: "17:00", event: "Networking: Marka Buluşmaları" },
      ],
    },
    {
      date: "17 NİSAN",
      day: "2. GÜN",
      theme: "Mixology & Experience Day",
      items: [
        { time: "10:00", event: "Coffee Mixology Atölyesi" },
        { time: "13:00", event: "Panel: Kahve Sektöründe Kariyer" },
        { time: "16:00", event: "Müzik Performansı: Live DJ Set" },
        { time: "20:00", event: "Kapanış Partisi" },
      ],
    },
  ];

  return (
    <section id="program" className="section-padding bg-black relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-brand-pink/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="caption" className="mb-4 tracking-[0.6em] text-brand-pink">ETKİNLİK AKIŞI</Typography>
            <Typography variant="title" className="text-4xl md:text-7xl mb-8 leading-tight">
              Festival <span className="gradient-text">Takvimi</span>
            </Typography>
            <Typography variant="body" className="max-w-2xl mx-auto text-white/40 text-lg">
              Saatleri not etmeyi unutma!
            </Typography>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {days.map((day, dayIdx) => (
            <motion.div 
              key={day.day}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: dayIdx * 0.2 }}
              className="relative p-8 sm:p-10 md:p-12 rounded-[2.5rem] md:rounded-[3rem] bg-white/[0.03] border border-white/10 backdrop-blur-sm shadow-2xl hover:border-brand-pink/30 hover:bg-white/[0.05] transition-all duration-500 group"
            >
              {/* Header: Date and Theme */}
              <div className="flex flex-col gap-4 mb-8 md:mb-12 border-b border-white/5 pb-8">
                <div className="flex items-center flex-wrap gap-3">
                  <span className="px-3 py-1 rounded-full bg-brand-pink text-black text-[9px] md:text-[10px] font-black tracking-widest uppercase">
                    {day.date}
                  </span>
                  <span className="text-white/40 text-[9px] md:text-[10px] font-bold tracking-[0.3em] uppercase">
                    {day.day}
                  </span>
                </div>
                <Typography variant="subtitle" className="text-xl md:text-3xl font-black text-white !leading-tight group-hover:text-brand-pink transition-colors">
                  {day.theme}
                </Typography>
              </div>
              
              {/* Timeline Flow */}
              <div className="space-y-8 md:space-y-10 relative before:absolute before:inset-0 before:left-[11px] before:border-l-2 before:border-white/5 before:my-2 group-hover:before:border-brand-pink/10 transition-colors">
                {day.items.map((item, index) => (
                  <motion.div
                    key={item.time}
                    className="relative pl-8 md:pl-10 flex flex-col gap-1 group/item"
                  >
                    {/* Pulsing Dot */}
                    <div className="absolute left-0 top-1.5 w-6 h-6 flex items-center justify-center">
                       <div className="w-1.5 h-1.5 rounded-full bg-brand-blue shadow-[0_0_12px_rgba(0,212,255,1)] group-hover/item:bg-brand-pink group-hover/item:shadow-[0_0_12px_rgba(255,143,177,1)] transition-all duration-300" />
                    </div>
                    
                    <div className="flex items-center gap-2 text-brand-pink/80 group-hover/item:text-brand-pink transition-colors mb-1">
                      <Clock size={12} strokeWidth={3} className="w-2.5 h-2.5 md:w-3 md:h-3" />
                      <span className="text-[10px] md:text-[11px] font-black tracking-widest">{item.time}</span>
                    </div>
                    
                    <Typography variant="body" className="text-base md:text-lg font-bold text-white group-hover/item:text-brand-blue transition-colors duration-300">
                      {item.event}
                    </Typography>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
