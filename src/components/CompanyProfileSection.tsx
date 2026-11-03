import React from 'react';
import { Download, ChevronRight } from 'lucide-react';

interface CompanyProfileSectionProps {
  onRequestProposal: () => void;
}

export const CompanyProfileSection: React.FC<CompanyProfileSectionProps> = ({ onRequestProposal }) => {
  const handleDownloadProfile = () => {
    // Generate or download company profile PDF
    const link = document.createElement('a');
    link.href = '#';
    link.setAttribute('download', 'Company-Profile-Sembilan-Communication.pdf');
    alert('Company Profile sedang diunduh. Terima kasih atas ketertarikan Anda!');
  };

  return (
    <section id="profile" className="py-16 md:py-24 bg-white scroll-mt-14 overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Asymmetrical Layout matching reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-12 items-center">
          
          {/* Part 1: Left Text & Download Button (approx 4.5 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div>
              <div className="w-8 h-1 bg-[#F95700] rounded-full mb-3" />
              <span className="text-xs sm:text-sm font-bold text-slate-700 tracking-wide block">
                Tentang Kami
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1B3D] tracking-tight leading-[1.15]">
              Partner Terpercaya<br />
              untuk Kesuksesan Acara Anda
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Kami adalah perusahaan event organizer dan event production yang berpengalaman dalam menghadirkan acara berkualitas, kreatif dan berkesan.
            </p>

            <div className="pt-2">
              <button
                onClick={handleDownloadProfile}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#0B1B3D] hover:bg-[#14264E] text-white text-xs sm:text-sm font-semibold shadow-xs hover:shadow-md transition-all group"
              >
                <Download className="w-4 h-4 text-white" />
                <span>Download Company Profile</span>
              </button>
            </div>
          </div>

          {/* Part 2: Middle Navigation Links & Partner Badges (approx 3 cols) */}
          <div className="lg:col-span-3 lg:border-l lg:border-slate-200 lg:pl-8 space-y-7">
            {/* Links */}
            <div className="space-y-3">
              <a
                href="#profile"
                className="flex items-center justify-between text-sm sm:text-base font-bold text-[#0B1B3D] hover:text-[#F95700] transition-colors py-1 group"
              >
                <span>Company Profile</span>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#F95700] group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#karir"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Halaman Karir Sembilan Communication segera hadir. Hubungi kontak kami untuk informasi lowongan.');
                }}
                className="flex items-center justify-between text-sm sm:text-base font-bold text-[#0B1B3D] hover:text-[#F95700] transition-colors py-1 group"
              >
                <span>Karir</span>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#F95700] group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Partner & Certification Logos matching reference */}
            <div className="pt-2">
              <div className="flex items-center gap-4 text-slate-700">
                {/* IBS Logo */}
                <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-slate-50 border border-slate-100 min-w-[58px]">
                  <span className="text-xs font-black tracking-tighter text-[#003366]">IBS</span>
                  <span className="text-[7px] font-semibold text-slate-500 uppercase tracking-tight text-center leading-tight">
                    Indonesia<br />Business Summit
                  </span>
                </div>

                {/* MICE Indonesia Logo */}
                <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-slate-50 border border-slate-100 min-w-[58px]">
                  <div className="w-4 h-4 rounded-full bg-blue-600 text-white flex items-center justify-center text-[8px] font-extrabold mb-0.5">
                    M
                  </div>
                  <span className="text-[8px] font-bold text-slate-800 tracking-tight">MICE</span>
                  <span className="text-[6px] text-slate-500 font-medium uppercase">Indonesia</span>
                </div>

                {/* Indonesia Event Industry */}
                <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-slate-50 border border-slate-100 min-w-[58px]">
                  <div className="flex items-center gap-0.5 mb-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E4002B]"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-800"></span>
                  </div>
                  <span className="text-[7px] font-bold text-slate-800 leading-tight text-center">
                    Indonesia<br />Event Industry
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Part 3: Right Large Team Photograph with Dynamic Geometric Backdrop */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none">
              
              {/* Dynamic Angular Geometric Backdrop (Navy & Orange) */}
              <div className="absolute top-2 right-4 w-72 sm:w-80 h-72 sm:h-80 -z-10 pointer-events-none">
                <svg viewBox="0 0 300 300" className="w-full h-full" fill="none">
                  {/* Angled Navy Polygon */}
                  <polygon
                    points="60,0 260,0 300,280 120,280"
                    fill="#1E40AF"
                    fillOpacity="0.85"
                  />
                  {/* Angled Orange Accent Stripe */}
                  <polygon
                    points="30,30 65,30 115,280 80,280"
                    fill="#F95700"
                  />
                  {/* Cyan Subtle Highlight */}
                  <polygon
                    points="260,0 280,0 300,140 280,140"
                    fill="#38BDF8"
                  />
                </svg>
              </div>

              {/* Realistic Team Photo (Event management professionals in matching black polo shirts) */}
              <div className="relative z-10 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-slate-200/90 aspect-4/3 sm:aspect-16/11 bg-slate-900 group">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=85"
                  alt="Tim profesional event organizer Sembilan Communication berseragam hitam"
                  className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B3D]/80 via-transparent to-transparent" />
                
                {/* Team Tag */}
                <div className="absolute bottom-3 left-4 right-4 text-white flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-semibold text-orange-400 uppercase tracking-wider block">
                      Dedicated Crew
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white">
                      Tim Solid Sembilan Communication
                    </span>
                  </div>
                  <div className="px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-xs text-[10px] font-semibold text-white">
                    Certified EO
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
