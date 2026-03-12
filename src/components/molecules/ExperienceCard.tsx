import React from "react";
import { Typography } from "../atoms/Typography";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface ExperienceCardProps {
  title: string;
  description: string;
  image: string;
  index: number;
}

export const ExperienceCard = ({ title, description, image, index }: ExperienceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.215, 0.61, 0.355, 1] }}
      whileHover="hover"
      className="relative group aspect-square rounded-[3rem] overflow-hidden cursor-pointer bg-neutral-900 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border border-white/5"
    >
      {/* Background Image with Zoom and Pan Effect */}
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition-all duration-[2s] ease-out group-hover:scale-110 group-hover:rotate-2"
      />

      {/* Dynamic Overlays for Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-90 transition-opacity duration-500" />
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
      <div className="absolute inset-0 bg-brand-pink/10 opacity-0 group-hover:opacity-40 transition-opacity duration-700 z-0" />


      {/* Content Container - Optimized Padding */}
      <div className="absolute bottom-0 left-0 p-8 md:p-10 lg:p-12 w-full z-30 transition-transform duration-500 group-hover:-translate-y-4">
        <div className="flex flex-col gap-3">
          {/* Tagline */}
          <div className="flex items-center gap-2 overflow-hidden mb-1">
            <div className="h-[2px] w-0 bg-brand-pink group-hover:w-10 transition-all duration-700" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-brand-pink font-black opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-4 group-hover:translate-x-0 drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">
              DENEYİMLEYİN
            </span>
          </div>

          <Typography variant="subtitle" className="text-white font-black text-2xl md:text-3xl lg:text-4xl mb-1 !leading-[1.2] group-hover:text-brand-pink transition-colors duration-500 drop-shadow-2xl">
            {title}
          </Typography>

          {/* Description - Optimized readability and size */}
          <div className="overflow-hidden">
            <p className="text-white font-medium text-xs md:text-sm lg:text-base leading-relaxed max-h-0 group-hover:max-h-40 transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 drop-shadow-lg">
              {description}
            </p>
          </div>

          {/* Progress-like indicator with a specific lead color */}
          <div className="relative h-1.5 w-full bg-white/5 mt-4 rounded-full overflow-hidden">
            <motion.div 
              className="absolute h-full left-0 top-0 flex items-center"
              variants={{
                initial: { width: "15%" },
                hover: { width: "100%" }
              }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Main Progress Body (Pink) */}
              <div className="h-full w-full bg-brand-pink relative">
                {/* Leading Edge (Blue Line - 'Başında mavi çizgi') */}
                <div className="absolute right-0 top-0 h-full w-12 bg-brand-blue shadow-[0_0_15px_rgba(0,212,255,1)] z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
