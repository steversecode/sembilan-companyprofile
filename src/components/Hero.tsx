import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

interface HeroProps {
  onRequestProposal: () => void;
  onWatchShowreel: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestProposal, onWatchShowreel }) => {
  return (
    <section className="relative w-full overflow-hidden bg-[#071324] text-white">
      {/* Cinematic Full-Width Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=2400&q=85"
          alt="Large corporate conference auditorium with bright blue LED stage screens and audience"
          className="w-full h-full object-cover object-center transform scale-102"
          loading="eager"
        />
        {/* Subtle cinematic gradient overlays to guarantee pristine text contrast while maintaining vibrant arena realism */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071324]/90 via-[#0B1B3D]/75 to-transparent sm:to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071324]/80 via-transparent to-black/20" />
      </div>

      {/* Main Hero Content - Aligned to match the reference image */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20 md:pt-28 md:pb-28 lg:pt-36 lg:pb-32">
        <div className="max-w-2xl">
          {/* Eyebrow Label */}
          <div className="text-xs sm:text-sm font-semibold tracking-wider text-slate-200 uppercase mb-4 sm:mb-5">
            PARTNER SOLUSI EVENT
          </div>

          {/* Main Title - Tagline in Indonesian */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.08] mb-5 sm:mb-6">
            Mewujudkan Acara<br />
            Penuh Makna
          </h1>

          {/* Subtitle / Paragraph in Indonesian */}
          <p className="text-sm sm:text-base md:text-lg text-slate-200 font-normal leading-relaxed mb-8 max-w-xl text-balance">
            Produksi event, aktivasi merek, MICE, gathering perusahaan, dan dukungan peralatan panggung profesional untuk kesuksesan setiap acara Anda.
          </p>

          {/* Action Button & Optional Showreel */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#F95700] hover:bg-[#E84E00] text-white font-semibold text-sm sm:text-base shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Lihat Layanan</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={onWatchShowreel}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-xs sm:text-sm backdrop-blur-xs border border-white/20 transition-colors"
            >
              <Play className="w-3.5 h-3.5 fill-current text-[#F95700]" />
              <span>Tonton Showreel</span>
            </button>
          </div>

          {/* Carousel Pagination Dots */}
          <div className="flex items-center gap-2 pt-2">
            <span className="w-6 h-1.5 rounded-full bg-white transition-all"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/50 hover:bg-white/80 cursor-pointer transition-all"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/50 hover:bg-white/80 cursor-pointer transition-all"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/50 hover:bg-white/80 cursor-pointer transition-all"></span>
          </div>
        </div>
      </div>
    </section>
  );
};
