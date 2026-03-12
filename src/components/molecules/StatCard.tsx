import React from "react";
import { Typography } from "../atoms/Typography";
import { motion } from "framer-motion";

interface StatCardProps {
  number: string;
  label: string;
}

export const StatCard = ({ number, label }: StatCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, borderColor: "rgba(255, 143, 177, 0.3)" }}
      className="w-full aspect-auto md:aspect-square rounded-2xl md:rounded-[2.5rem] bg-white/[0.03] border border-white/10 flex flex-col items-center justify-center text-center backdrop-blur-md transition-all duration-500 shadow-2xl relative overflow-hidden group py-8 md:py-4"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand-pink/5 to-brand-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10 p-4">
        <Typography variant="gradient" className="text-4xl md:text-5xl font-black mb-2 leading-none">
          {number}
        </Typography>
        <Typography variant="body" className="font-bold text-white/50 text-xs md:text-xs uppercase tracking-widest px-2">
          {label}
        </Typography>
      </div>
    </motion.div>
  );
};
