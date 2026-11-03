import React, { useState } from 'react';
import { 
  Instagram, 
  Youtube, 
  Linkedin, 
  X, 
  Maximize2 
} from 'lucide-react';

interface GalleryItem {
  id: string;
  image: string;
  title: string;
  caption: string;
}

const GALLERY_PHOTOS: GalleryItem[] = [
  {
    id: 'photo-1',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80',
    title: 'Arena Concert & Stage Lighting',
    caption: 'Konser arena dengan tata cahaya moving head dan efek visual spektakuler.',
  },
  {
    id: 'photo-2',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    title: 'Event Operations Team',
    caption: 'Tim produksi dan kru teknis profesional siap siaga di lokasi acara.',
  },
  {
    id: 'photo-3',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80',
    title: 'Exhibition Booth & Gate Production',
    caption: 'Konstruksi booth pameran dan gapura masuk berkonsep futuristik modern.',
  },
  {
    id: 'photo-4',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80',
    title: 'National Summit Auditorium',
    caption: 'Pelaksanaan konferensi akbar di plenary hall dengan ribuan delegasi.',
  },
  {
    id: 'photo-5',
    image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=800&q=80',
    title: 'Live Broadcast & Camera Crew',
    caption: 'Pengambilan gambar multi-kamera 4K dan live streaming broadcast profesional.',
  },
  {
    id: 'photo-6',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
    title: 'VIP Entrance & Protocol',
    caption: 'Penyambutan tamu kehormatan dan instalasi gateway berkelas korporat.',
  },
];

export const SocialSection: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  return (
    <section id="social" className="py-16 md:py-24 bg-white border-b border-slate-100 scroll-mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-start">
          
          {/* Left Column: Social Media Heading & Channels */}
          <div className="lg:col-span-4 space-y-5">
            <div>
              <div className="w-8 h-1 bg-[#F95700] rounded-full mb-3" />
              <span className="text-xs sm:text-sm font-bold text-slate-700 tracking-wide block">
                Social Media
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1B3D] tracking-tight leading-[1.15]">
              Ikuti Keseruan<br />
              Kami di Media Sosial
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Dapatkan update terbaru acara, behind the scene, dan inspirasi event lainnya.
            </p>

            {/* Social Icons Row matching reference (Instagram, YouTube, LinkedIn, TikTok) */}
            <div className="pt-2 flex items-center gap-3">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#FD1D1D] via-[#E1306C] to-[#C13584] text-white flex items-center justify-center hover:opacity-90 hover:scale-105 transition-all shadow-xs"
                aria-label="Instagram Sembilan Communication"
              >
                <Instagram className="w-5 h-5" />
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#FF0000] text-white flex items-center justify-center hover:opacity-90 hover:scale-105 transition-all shadow-xs"
                aria-label="YouTube Sembilan Communication"
              >
                <Youtube className="w-5 h-5" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#0077B5] text-white flex items-center justify-center hover:opacity-90 hover:scale-105 transition-all shadow-xs"
                aria-label="LinkedIn Sembilan Communication"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              {/* TikTok */}
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#000000] text-white flex items-center justify-center hover:opacity-90 hover:scale-105 transition-all shadow-xs"
                aria-label="TikTok Sembilan Communication"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column: 3-by-2 Image Gallery */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              {GALLERY_PHOTOS.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedPhoto(item)}
                  className="group relative rounded-xl sm:rounded-2xl overflow-hidden aspect-4/3 bg-slate-900 border border-slate-200/90 shadow-2xs hover:shadow-md cursor-pointer transition-all duration-300"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Subtle dark gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B3D]/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-3 text-white">
                    <p className="text-xs font-bold leading-tight truncate">{item.title}</p>
                    <p className="text-[10px] text-slate-300 line-clamp-1 mt-0.5">{item.caption}</p>
                  </div>

                  <div className="absolute top-2 right-2 w-6 h-6 rounded-md bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3 h-3" />
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Indicator Dots */}
            <div className="flex items-center justify-center gap-2 pt-6">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#0B1B3D]"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
            </div>
          </div>

        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
              aria-label="Close photo preview"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="relative aspect-16/10 bg-slate-900">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-5 bg-white space-y-2">
              <h3 className="text-base font-bold text-[#0B1B3D]">
                {selectedPhoto.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                {selectedPhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
