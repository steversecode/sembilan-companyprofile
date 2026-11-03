import React, { useState } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: string;
  location: string;
  scale: string;
  mainImage: string;
  overlapImage: string;
  summary: string;
  highlight?: string;
  stats: {
    label: string;
    value: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
}

const DEFAULT_CASE_STUDY: CaseStudy = {
  id: 'national-gathering-2025',
  title: 'Annual National Gala & Brand Celebration',
  client: 'Multi-Corporate Gathering',
  category: 'Concert & Gala',
  location: 'Gelora Bung Karno & ICE BSD',
  scale: '15.000+ Peserta',
  mainImage: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=85',
  overlapImage: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=700&q=85',
  summary: 'Produksi panggung spektakuler dengan integrasi tata suara line-array, layar curved LED 4K seluas 200 meter persegi, serta manajemen ribuan audiens secara aman dan terkoordinasi.',
  highlight: 'Produksi panggung berskala arena dengan tata pencahayaan moving-head 4K terintegrasi.',
  stats: [
    { label: 'Peserta Hadir', value: '15.000+' },
    { label: 'Layar LED Utama', value: '4K Ultra-Wide' },
    { label: 'Tingkat Kepuasan', value: '99.8%' },
    { label: 'Kru Lapangan', value: '120 Personil' },
  ],
  testimonial: {
    quote: 'Sembilan Communication mewujudkan panggung megah berkelas dunia dengan koordinasi panggung yang tanpa celah.',
    author: 'Bambang Santoso',
    role: 'Head of Corporate Event',
    company: 'Leading Enterprise Client',
  },
};

interface PortfolioSectionProps {
  onOpenCaseStudy: (study: CaseStudy) => void;
  onRequestProposal: () => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onOpenCaseStudy, onRequestProposal }) => {
  return (
    <section id="portfolio" className="py-16 md:py-24 bg-white border-b border-slate-100 scroll-mt-14 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center">
          
          {/* Left Column: Heading, Big Stats, Narrative & Logos */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="w-8 h-1 bg-[#F95700] rounded-full mb-3" />
              <span className="text-xs sm:text-sm font-bold text-slate-700 tracking-wide block">
                Portfolio
              </span>
            </div>

            {/* Side-by-Side Large Statistics */}
            <div className="flex items-center gap-6 sm:gap-8 pt-1">
              <div>
                <div className="text-4xl sm:text-5xl font-extrabold text-[#0B1B3D] tracking-tight leading-none">
                  70.000<span className="text-[#0B1B3D]">+</span>
                </div>
                <div className="text-base sm:text-lg font-bold text-slate-800 mt-1">
                  Events
                </div>
              </div>

              {/* Thin Vertical Divider */}
              <div className="w-[1.5px] h-14 bg-slate-300 self-center"></div>

              <div>
                <div className="text-4xl sm:text-5xl font-extrabold text-[#0B1B3D] tracking-tight leading-none">
                  2M<span className="text-[#0B1B3D]">+</span>
                </div>
                <div className="text-base sm:text-lg font-bold text-slate-800 mt-1">
                  Clients
                </div>
              </div>
            </div>

            {/* Narrative text */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Lebih <strong className="text-slate-900 font-bold">dari 70.000 acara</strong> telah kami selenggarakan, dengan kepercayaan lebih dari <strong className="text-slate-900 font-bold">2 juta klien</strong> di seluruh Indonesia.
            </p>

            {/* Client Logos Row (Telkomsel, BCA, Unilever, Mandiri, Indofood) */}
            <div className="pt-2 pb-1">
              <div className="flex flex-wrap items-center gap-5 sm:gap-6 text-slate-700">
                {/* Telkomsel */}
                <div className="flex items-center gap-1 font-bold text-xs tracking-tight text-slate-800">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E4002B]"></span>
                  <span>Telkomsel</span>
                </div>

                {/* BCA */}
                <div className="flex items-center gap-1 font-extrabold text-sm tracking-tight text-[#00529C]">
                  <span>BCA</span>
                </div>

                {/* Unilever */}
                <div className="flex items-center gap-1 font-bold text-xs text-[#002244] italic">
                  <span className="text-sm font-black">U</span>
                  <span className="text-[11px] not-italic font-semibold text-slate-600">Unilever</span>
                </div>

                {/* Bank Mandiri */}
                <div className="flex items-center gap-1 font-bold text-xs tracking-tight text-[#003876]">
                  <span>mandiri</span>
                </div>

                {/* Indofood */}
                <div className="flex items-center gap-1 font-extrabold text-xs tracking-wider text-[#004B97] uppercase">
                  <span>Indofood</span>
                </div>
              </div>
            </div>

            {/* Button */}
            <div className="pt-1">
              <button
                onClick={() => onOpenCaseStudy(DEFAULT_CASE_STUDY)}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#0B1B3D] hover:bg-[#14264E] text-white text-xs sm:text-sm font-semibold shadow-xs hover:shadow-md transition-all group"
              >
                <span>Lihat Portofolio</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Overlapping Event Photographs */}
          <div className="lg:col-span-7 relative">
            {/* Subtle decorative dot pattern in the background */}
            <div className="absolute -top-6 -right-6 w-32 h-32 opacity-25 pointer-events-none bg-[radial-gradient(#0B1B3D_1.5px,transparent_1.5px)] [background-size:12px_12px]" />

            <div className="relative pb-8 pr-10 sm:pr-14 md:pr-16">
              
              {/* Main Primary Photograph (Angled top-left curve matching reference) */}
              <div
                onClick={() => onOpenCaseStudy(DEFAULT_CASE_STUDY)}
                className="relative rounded-2xl sm:rounded-3xl rounded-tl-[48px] sm:rounded-tl-[64px] overflow-hidden shadow-lg border border-slate-200 group cursor-pointer aspect-16/10 bg-slate-900"
              >
                <img
                  src={DEFAULT_CASE_STUDY.mainImage}
                  alt="Outdoor twilight concert festival stage with huge crowd and purple lighting"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-6 text-white">
                  <span className="text-[10px] font-semibold tracking-wider text-orange-400 uppercase">
                    Headline Production
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-white">
                    National Mega Concert & Summit
                  </h4>
                </div>
              </div>

              {/* Overlapping Secondary Photograph (Vertical entrance arch card on the right) */}
              <div
                onClick={() => onOpenCaseStudy(DEFAULT_CASE_STUDY)}
                className="absolute -bottom-2 right-0 sm:right-2 w-36 sm:w-48 md:w-56 rounded-2xl overflow-hidden shadow-2xl border-4 border-white cursor-pointer group hover:-translate-y-1 transition-all duration-300 z-10 aspect-3/4 bg-slate-900"
              >
                <img
                  src={DEFAULT_CASE_STUDY.overlapImage}
                  alt="Illuminated golden ceremonial entrance archway with crew"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="text-[9px] font-semibold text-orange-300 uppercase">VIP Gateway</div>
                  <div className="text-xs font-bold leading-tight truncate">Ceremonial Entrance</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
