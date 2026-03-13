"use client";

import React from "react";
import { Modal } from "../molecules/Modal";
import { Button } from "../atoms/Button";
import { Typography } from "../atoms/Typography";

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const JoinModal = ({ isOpen, onClose }: JoinModalProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form handling logic here
    alert("Başvurunuz alındı! Sizinle en kısa sürede iletişime geçeceğiz.");
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Festival'e Katıl">
      <div className="space-y-6">
        <Typography variant="body" className="text-white/60">
          Campus Coffee Fest 2026'da yerini ayırtmak ve tüm sürprizlerden haberdar olmak için formu doldur.
        </Typography>

        <form 
          action="https://formspree.io/f/xpqylprr"
          method="POST"
          className="space-y-4"
        >
          {/* Hidden field for form identification */}
          <input type="hidden" name="_subject" value="Yeni Festival Katılım Başvurusu" />
          
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-white/40 ml-1">Ad Soyad</label>
            <input
              required
              name="name"
              type="text"
              placeholder="Ahmet Yılmaz"
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-pink/50 transition-colors"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-white/40 ml-1">E-posta Adresi</label>
            <input
              required
              name="email"
              type="email"
              placeholder="ahmet@example.com"
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-pink/50 transition-colors"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-white/40 ml-1">Telefon</label>
            <input
              required
              name="phone"
              type="tel"
              placeholder="05xx xxx xx xx"
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-pink/50 transition-colors"
            />
          </div>

          <div className="pt-4">
            <Button type="submit" variant="secondary" className="w-full py-4 shadow-xl">
              Başvuruyu Tamamla
            </Button>
          </div>
          
          <p className="text-[10px] text-center text-white/20 px-4">
            Kişisel verileriniz KVKK kapsamında korunmaktadır. Başvuru yaparak şartları kabul etmiş sayılırsınız.
          </p>
        </form>
      </div>
    </Modal>
  );
};
