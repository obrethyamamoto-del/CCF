"use client";

import React from "react";
import { Typography } from "../atoms/Typography";
import { ExperienceCard } from "../molecules/ExperienceCard";
import { motion } from "framer-motion";

export const Experiences = () => {
  const experiences = [
    { 
      title: "Kahve Deneyim Alanları", 
      description: "Dünyanın dört bir yanından gelen seçkin çekirdeklerin, usta baristaların ellerinde sanat eserine dönüştüğü tadım noktaları. En taze kavrumlarla hazırlanan özel seçkileri keşfedin.",
      image: "exp-1.png" 
    },
    { 
      title: "Workshop Akademisi", 
      description: "Demleme tekniklerinden latte art inceliklerine kadar kahve dünyasının mutfağına profesyonellerle birlikte adım atın. Teorik bilgiyi pratik uygulama ile birleştirin.",
      image: "exp-2.png" 
    },
    { 
      title: "Müzik & Sosyal Alan", 
      description: "Kahve kokusuna karışan canlı DJ performansları ve modern sanat etkinlikleriyle kampüsün kalbi burada atacak. Arkadaşlarınızla festivalin ritmini yakalayın.",
      image: "exp-3.png" 
    },
    { 
      title: "Marka Deneyim Standları", 
      description: "Sektörün dev markalarının en yeni ürünlerini, interaktif teknolojiler ve sürpriz hediyelerle keşfetme fırsatı. Markaların en yeni koleksiyonlarıyla tanışın.",
      image: "exp-4.png" 
    },
  ];

  return (
    <section id="experiences" className="section-padding bg-black relative overflow-hidden">
      {/* Texture/Glow Overlays */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute -top-24 left-1/4 w-[600px] h-[600px] bg-brand-pink/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[150px]" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="caption" className="mb-4 tracking-[0.5em] text-brand-pink">DUYULARIN ÖTESİNDE</Typography>
            <Typography variant="title" className="text-4xl md:text-8xl mb-8 leading-tight">
              Seni <span className="gradient-text">Neler Bekliyor?</span>
            </Typography>
            <Typography variant="body" className="max-w-3xl mx-auto text-white/50 text-lg md:text-2xl font-light">
              {"Festivalin her metrekaresinde yeni bir keşif, her bardağında farklı bir tutku saklı. Alışılmışın dışına çıkmaya hazır ol."}
            </Typography>
          </motion.div>
        </div>

        {/* 2x2 Grid Layout for Impact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.title} index={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};
