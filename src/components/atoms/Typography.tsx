import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface TypographyProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "span";
  variant?: "title" | "subtitle" | "body" | "caption" | "gradient";
  children: React.ReactNode;
  className?: string;
}

export const Typography = ({
  as: Component = "p",
  variant = "body",
  children,
  className,
}: TypographyProps) => {
  const variants = {
    title: "text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight",
    subtitle: "text-xl md:text-2xl font-light text-foreground/80",
    body: "text-base md:text-lg leading-relaxed text-foreground/70",
    caption: "text-sm uppercase tracking-widest font-semibold text-brand-pink",
    gradient: "text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight gradient-text",
  };

  return (
    <Component className={cn(variants[variant], className)}>
      {children}
    </Component>
  );
};
