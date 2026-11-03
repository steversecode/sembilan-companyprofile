import React from 'react';
import { X, CheckCircle, MapPin, Users, Calendar, ArrowRight, ShieldCheck, Star } from 'lucide-react';
import { CaseStudy } from './PortfolioSection';

interface CaseStudyModalProps {
  study: CaseStudy | null;
  onClose: () => void;
  onRequestProposal: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ study, onClose, onRequestProposal }) => {
  if (!study) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-3xl w-full shadow-2xl border border-slate-200 overflow-hidden relative my-8 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Hero Image */}
        <div className="relative h-64 sm:h-80 w-full bg-slate-900">
          <img
            src={study.mainImage}
            alt={study.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/40 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="px-2.5 py-1 rounded bg-orange-600 text-[11px] font-bold uppercase tracking-wider mb-2 inline-block">
              {study.client}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {study.title}
            </h3>
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 mt-2">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-orange-400" />
                {study.location}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-orange-400" />
                {study.scale}
              </span>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Key Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            {study.stats.map((stat, idx) => (
              <div key={idx} className="text-center sm:text-left">
                <div className="text-xl sm:text-2xl font-extrabold text-[#0A192F]">
                  {stat.value}
                </div>
                <div className="text-[11px] text-slate-500 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Project Narrative */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-[#0A192F]">Production Challenge & Delivery</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              {study.summary}
            </p>
          </div>

          {/* Testimonial Quote */}
          {study.testimonial && (
            <div className="p-5 rounded-xl bg-orange-50/70 border border-orange-200/80 space-y-3">
              <div className="flex items-center gap-1 text-orange-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-sm italic text-slate-800 leading-relaxed font-serif-accent">
                "{study.testimonial.quote}"
              </p>
              <div className="text-xs font-bold text-[#0B1B3D]">
                {study.testimonial.author}
                <span className="text-slate-500 font-normal"> — {study.testimonial.role}, {study.testimonial.company}</span>
              </div>
            </div>
          )}

          {/* Overlapping secondary image highlight */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center pt-2">
            <div className="rounded-xl overflow-hidden aspect-16/10 border border-slate-200">
              <img
                src={study.overlapImage}
                alt={`${study.title} technical execution`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#F95700] uppercase tracking-wider">
                Technical Distinction
              </span>
              <p className="text-xs text-slate-600 leading-relaxed">
                {study.highlight || 'Standar produksi berkelas dunia dengan koordinasi multi-kru terpadu.'}
              </p>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#0B1B3D] pt-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Zero Security or Streaming Incident</span>
              </div>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-500">
              Planning a similar enterprise summit or gala?
            </span>
            <button
              onClick={() => {
                onClose();
                onRequestProposal();
              }}
              className="px-6 py-2.5 rounded-lg bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2"
            >
              <span>Request Similar Scope</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
