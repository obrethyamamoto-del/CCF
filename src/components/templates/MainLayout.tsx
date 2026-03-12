"use client";

import React from "react";
import { Navbar } from "../organisms/Navbar";
import { Footer } from "../organisms/Footer";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};
