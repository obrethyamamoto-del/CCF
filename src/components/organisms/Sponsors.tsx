"use client";

import React from "react";
import { Typography } from "../atoms/Typography";
import { motion } from "framer-motion";

const SponsorCard = ({ name }: { name: string }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="flex-shrink-0 w-40 h-24 md:w-52 md:h-28 bg-white/[0.02] border border-white/5 rounded-2xl flex items-center justify-center p-6 transition-all duration-300 hover:bg-white/[0.05] hover:border-white/20 group"
    >
      <span className="text-xs md:text-sm font-bold tracking-widest text-white/20 group-hover:text-white/60 transition-colors duration-300 uppercase text-center leading-tight">
        {name}
      </span>
    </motion.div>
  );
};

export const Sponsors = () => {
  const sponsorsTop = ["Sponsor Alpha", "Sponsor Beta", "Sponsor Gamma", "Sponsor Delta", "Sponsor Epsilon", "Sponsor Zeta"];
  const sponsorsBottom = ["Partner One", "Partner Two", "Partner Three", "Partner Four", "Partner Five", "Partner Six"];

  return (
    <section id="sponsors" className="py-24 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-6 relative z-10 mb-16">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Typography variant="caption" className="mb-4 tracking-[0.4em] opacity-50 uppercase text-xs">DESTEKÇİLERİMİZ</Typography>
            <Typography variant="title" className="text-4xl md:text-6xl mb-6">
              Gücümüze <span className="gradient-text">Güç Katanlar</span>
            </Typography>
            <Typography variant="body" className="max-w-xl mx-auto text-white/30 text-sm md:text-base">
              Campus Coffee Fest&apos;in gerçekleşmesini sağlayan değerli markalar ve çözüm ortaklarımız.
            </Typography>
          </motion.div>
        </div>
      </div>

      {/* Simplified Infinite Scroll */}
      <div className="flex flex-col gap-6">
        {/* Row 1 */}
        <div className="flex overflow-hidden select-none">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex flex-nowrap gap-6 pr-6"
          >
            {[...sponsorsTop, ...sponsorsTop, ...sponsorsTop, ...sponsorsTop].map((name, i) => (
              <SponsorCard key={`top-${i}`} name={name} />
            ))}
          </motion.div>
        </div>

        {/* Row 2 */}
        <div className="flex overflow-hidden select-none">
          <motion.div 
            animate={{ x: [-1000, 0] }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="flex flex-nowrap gap-6 pr-6"
          >
            {[...sponsorsBottom, ...sponsorsBottom, ...sponsorsBottom, ...sponsorsBottom].map((name, i) => (
              <SponsorCard key={`bottom-${i}`} name={name} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
