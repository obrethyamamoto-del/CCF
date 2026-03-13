"use client";

import React from "react";
import { Modal } from "../molecules/Modal";
import { Button } from "../atoms/Button";
import { Typography } from "../atoms/Typography";

interface SponsorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SponsorModal = ({ isOpen, onClose }: SponsorModalProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Sponsorluk başvurunuz alındı! Ekibimiz detaylar için sizinle iletişime geçecek.");
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Sponsorluk Başvurusu">
      <div className="space-y-6">
        <Typography variant="body" className="text-white/60">
          Markanızı binlerce gençle buluşturmak ve festivalin bir parçası olmak için detayları paylaşın.
        </Typography>

        <form 
          action="https://formspree.io/f/xpqylprr"
          method="POST"
          className="space-y-4"
        >
          {/* Hidden field for form identification */}
          <input type="hidden" name="_subject" value="Yeni Sponsorluk Başvurusu" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-white/40 ml-1">Firma Adı</label>
              <input
                required
                name="company_name"
                type="text"
                placeholder="Marka A.Ş."
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-blue/50 transition-colors"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-white/40 ml-1">Yetkili Kişi</label>
              <input
                required
                name="contact_person"
                type="text"
                placeholder="Ad Soyad"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-blue/50 transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-white/40 ml-1">İletişim E-postası</label>
              <input
                required
                name="email"
                type="email"
                placeholder="kurumsal@marka.com"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-blue/50 transition-colors"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-white/40 ml-1">Telefon Numarası</label>
              <input
                required
                name="phone"
                type="tel"
                placeholder="05xx xxx xx xx"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-blue/50 transition-colors"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-white/40 ml-1">İlgilenilen Sponsorluk Kategorisi</label>
            <select 
              name="category"
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-white focus:outline-none focus:border-brand-blue/50 transition-colors appearance-none cursor-pointer"
            >
              <option className="bg-[#0A0A0A]">Ana Sponsorluk</option>
              <option className="bg-[#0A0A0A]">Platin Sponsorluk</option>
              <option className="bg-[#0A0A0A]">Altın Sponsorluk</option>
              <option className="bg-[#0A0A0A]">Deneyim Alanı Sponsorluğu</option>
              <option className="bg-[#0A0A0A]">Diğer</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-white/40 ml-1">Mesajınız (Opsiyonel)</label>
            <textarea
              name="message"
              rows={3}
              placeholder="Eklemek istediğiniz notlar..."
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-blue/50 transition-colors resize-none"
            />
          </div>

          <div className="pt-4">
            <Button type="submit" variant="primary" className="w-full py-4 shadow-xl !bg-brand-blue flex items-center justify-center gap-2">
              Başvuruyu Gönder
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};
