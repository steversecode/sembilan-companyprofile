import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

export interface Article {
  id: string;
  title: string;
  date: string;
  image: string;
  category: string;
  excerpt: string;
  content: string[];
  readTime?: string;
  author?: {
    name: string;
    role: string;
  };
}

export const ARTICLES_DATA: Article[] = [
  {
    id: 'article-1',
    title: 'Tips Sukses Menggelar Event Brand Activation',
    date: '12 Okt 2025',
    readTime: '5 min read',
    author: {
      name: 'Tim Produksi Kreatif',
      role: 'Brand Activation Specialist',
    },
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80',
    category: 'Brand Activation',
    excerpt: 'Strategi menciptakan interaksi langsung yang berkesan antara audiens dan merek melalui instalasi panggung interaktif.',
    content: [
      'Aktivasi merek yang sukses membutuhkan sentuhan emosional dan keterlibatan langsung peserta. Mulai dari konsep booth interaktif, pencahayaan dramatis, hingga integrasi digital real-time.',
      'Sembilan Communication mengedepankan sinergi antara desain arsitektur booth dan alur pengalaman pengunjung agar pesan utama brand tersampaikan secara maksimal.',
    ],
  },
  {
    id: 'article-2',
    title: 'Tren Event 2025: Lebih Interaktif dan Berbasis Teknologi',
    date: '5 Okt 2025',
    readTime: '6 min read',
    author: {
      name: 'Tim Visual & Lighting',
      role: 'Technical Stage Director',
    },
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80',
    category: 'Technology',
    excerpt: 'Pemanfaatan teknologi curved LED, interaksi sensorik, dan hybrid streaming dalam konferensi modern.',
    content: [
      'Tahun 2025 menandai pergeseran besar dalam ekspektasi peserta event korporat. Audiens menginginkan visual beresolusi tinggi, panggung imersif, dan transisi panggung tanpa jeda.',
      'Penggunaan curved LED volume dan sistem kontrol pencahayaan terpusat memungkinkan dinamika visual yang memukau bagi peserta in-person maupun pemirsa siaran langsung.',
    ],
  },
  {
    id: 'article-3',
    title: 'Panduan Memilih Vendor Event yang Tepat',
    date: '28 Sep 2025',
    readTime: '4 min read',
    author: {
      name: 'Manajemen Operasional',
      role: 'Project Director',
    },
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80',
    category: 'Event Planning',
    excerpt: 'Poin-poin krusial yang wajib diperiksa sebelum menunjuk mitra event production untuk skala korporat.',
    content: [
      'Memilih vendor produksi event bukan sekadar membandingkan penawaran harga, melainkan memastikan kesiapan teknis, ketersediaan peralatan cadangan (redundancy system), dan rekam jejak kru di lapangan.',
      'Pastikan mitra Anda memiliki sertifikasi kelayakan peralatan, tim insinyur audio-visual berdedikasi, serta transparansi jadwal produksi.',
    ],
  },
];

interface BlogSectionProps {
  onOpenArticle: (article: Article) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onOpenArticle }) => {
  return (
    <section id="blog" className="py-16 md:py-24 bg-white border-b border-slate-100 scroll-mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-start">
          
          {/* Left Column: Heading, Subtitle & White Button (4 cols) */}
          <div className="lg:col-span-4 space-y-5 min-w-0">
            <div>
              <div className="w-8 h-1 bg-[#F95700] rounded-full mb-3" />
              <span className="text-xs sm:text-sm font-bold text-slate-700 tracking-wide block">
                Blog
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1B3D] tracking-tight leading-[1.15]">
              Insight & Tips<br />
              Seputar Event
            </h2>

            <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
              Artikel terbaru seputar dunia event, brand activation, dan industri MICE.
            </p>

            <div className="pt-1">
              <button
                onClick={() => onOpenArticle(ARTICLES_DATA[0])}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-semibold border border-slate-300 hover:border-slate-400 shadow-2xs transition-all group"
              >
                <span>Lihat Semua Artikel</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Area: Three Equal-Width Article Cards (8 cols) */}
          <div className="lg:col-span-8 min-w-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
              {ARTICLES_DATA.map((article) => (
                <article
                  key={article.id}
                  onClick={() => onOpenArticle(article)}
                  className="bg-white rounded-2xl border border-slate-200/90 hover:border-slate-300 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col overflow-hidden cursor-pointer group min-w-0"
                >
                  {/* Article Thumbnail */}
                  <div className="relative h-36 sm:h-40 w-full overflow-hidden bg-slate-100">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>

                  {/* Card Content */}
                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div className="space-y-2">
                      {/* Date with calendar icon */}
                      <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                        <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span>{article.date}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-sm sm:text-base font-bold text-[#0B1B3D] group-hover:text-[#F95700] transition-colors leading-snug line-clamp-2">
                        {article.title}
                      </h3>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
