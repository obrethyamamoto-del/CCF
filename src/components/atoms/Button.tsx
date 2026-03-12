import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button = ({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-bold transition-all duration-500 active:scale-95 disabled:opacity-50 disabled:pointer-events-none min-w-[170px] cursor-pointer tracking-tight";
  
  const variants = {
    primary: "bg-brand-pink text-white hover:bg-white hover:text-black",
    secondary: "gradient-bg text-white hover:opacity-90",
    outline: "border-2 border-white text-white hover:bg-white hover:text-black",
    ghost: "text-white/70 hover:text-white hover:bg-white/5",
  };
  
  const sizes = {
    sm: "px-6 py-2.5 text-[10px] uppercase tracking-[0.2em]",
    md: "px-8 py-3.5 text-xs uppercase tracking-[0.2em]",
    lg: "px-10 py-4.5 text-sm uppercase tracking-[0.2em]",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};
