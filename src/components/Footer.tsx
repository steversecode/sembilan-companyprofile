import React, { useState } from 'react';
import { 
  Building, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight, 
  ShieldCheck, 
  Check, 
  Linkedin, 
  Instagram, 
  Youtube 
} from 'lucide-react';

interface FooterProps {
  onRequestProposal: () => void;
  onOpenCalculator: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onRequestProposal, onOpenCalculator }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#071324] text-white border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Hub & CTA Bar */}
        <div className="pb-12 border-b border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-2">
            <span className="text-xs font-bold text-[#F95700] uppercase tracking-widest">
              Siap Mewujudkan Acara Anda?
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Konsultasikan Kebutuhan Event & Produksi Anda Bersama Kami.
            </h3>
            <p className="text-sm text-slate-400 max-w-xl">
              Dari konsep kreatif, manajemen MICE, gathering, hingga dukungan peralatan panggung dan tata suara terlengkap.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 lg:justify-end">
            <button
              onClick={onOpenCalculator}
              className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/15 text-white text-xs sm:text-sm font-semibold border border-white/15 transition-colors text-center"
            >
              Estimasi Biaya Event
            </button>
            <button
              onClick={onRequestProposal}
              className="px-6 py-3 rounded-full bg-[#F95700] hover:bg-[#E84E00] text-white text-xs sm:text-sm font-semibold transition-colors shadow-md text-center"
            >
              Hubungi Tim Kami
            </button>
          </div>
        </div>

        {/* Main 4-Column Footer Navigation & Details */}
        <div className="py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 border-b border-white/10">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="relative w-8 h-8 flex items-center justify-center">
                <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
                  <path d="M19 6L6 34H13L20 18L19 6Z" fill="#FFFFFF" />
                  <path d="M21 6L34 34H27L20 18L21 6Z" fill="#F95700" />
                  <path d="M11 25H29V29H11V25Z" fill="#38BDF8" />
                </svg>
              </div>
              <div>
                <span className="text-base font-extrabold tracking-tight text-white block leading-tight">
                  SEMBILAN
                </span>
                <span className="text-[9px] font-bold tracking-widest text-[#F95700] uppercase">
                  Communication
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Mitra solusi event terpercaya di Indonesia. Berpengalaman menangani ribuan acara korporat, konser panggung, aktivasi brand, dan MICE bertaraf nasional.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Certified Event Organizer & Production Guild</span>
            </div>
          </div>

          {/* Column 2: Kantor & Hub */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Kantor Operasional
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <div className="font-semibold text-slate-200">Jakarta Head Office</div>
                <div>Gedung Perkantoran Sudirman, Jakarta Selatan</div>
              </li>
              <li>
                <div className="font-semibold text-slate-200">Production Warehouse</div>
                <div>Kawasan Pergudangan Logistik, Tangerang / BSD</div>
              </li>
              <li>
                <div className="font-semibold text-slate-200">Surabaya Branch</div>
                <div>Pusat Bisnis Surabaya Timur</div>
              </li>
            </ul>
          </div>

          {/* Column 3: Layanan */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Layanan Utama
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#services" className="hover:text-[#F95700] transition-colors">
                  MICE (Meeting, Incentive, Convention, Exhibition)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#F95700] transition-colors">
                  Brand Activation & Peluncuran Produk
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#F95700] transition-colors">
                  Corporate Gathering & Gala Dinner
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#F95700] transition-colors">
                  Event Equipment Support & Rental
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#F95700] transition-colors">
                  Sound, LED & Rigging Production
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Kontak Cepat & Newsletter */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Kontak Cepat
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Dapatkan konsultasi gratis dan proposal anggaran untuk rencana event Anda.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Terima kasih! Tim kami akan menghubungi email Anda.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Masukkan email Anda"
                    className="w-full px-3 py-2 text-xs rounded-full bg-white/10 border border-white/15 text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#F95700]"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1 bottom-1 px-3 rounded-full bg-[#F95700] hover:bg-[#E84E00] text-white text-xs font-bold transition-colors"
                    aria-label="Subscribe"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}

            <div className="pt-2 text-xs text-slate-400">
              Hotline: <a href="tel:+622150009999" className="text-[#F95700] font-semibold">+62 (21) 5000-9999</a>
            </div>
          </div>

        </div>

        {/* Bottom Legal / Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} PT Sembilan Komunikasi Indonesia (Sembilan Communication). All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Syarat & Ketentuan</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Sertifikasi & K3</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
