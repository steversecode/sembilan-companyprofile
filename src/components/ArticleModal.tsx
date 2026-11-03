import React from 'react';
import { X, Calendar, Clock, User, Share2, ArrowLeft } from 'lucide-react';
import { Article } from './BlogSection';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
  onRequestProposal: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose, onRequestProposal }) => {
  if (!article) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-3xl w-full shadow-2xl border border-slate-200 overflow-hidden relative my-8 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Image */}
        <div className="relative h-64 sm:h-72 w-full bg-slate-900">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/40 to-transparent" />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors"
            aria-label="Close Article"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="px-3 py-1 rounded bg-orange-600 text-white text-xs font-bold uppercase tracking-wider mb-2 inline-block">
              {article.category}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              {article.title}
            </h2>
            <div className="flex items-center gap-4 text-xs text-slate-300 mt-2">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-orange-400" />
                {article.date}
              </span>
              {article.readTime && (
                <>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-orange-400" />
                    {article.readTime}
                  </span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Article Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Author bar */}
          {article.author && (
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 font-bold border border-slate-200">
                  <User className="w-5 h-5 text-slate-600" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#0B1B3D]">{article.author.name}</div>
                  <div className="text-xs text-slate-500">{article.author.role}</div>
                </div>
              </div>

              <div className="text-xs font-semibold text-slate-400">
                Sembilan Communication Insights
              </div>
            </div>
          )}

          {/* Lead excerpt */}
          <p className="text-base font-semibold text-slate-800 leading-relaxed italic border-l-4 border-orange-500 pl-4 py-1">
            {article.excerpt}
          </p>

          {/* Content Paragraphs */}
          <div className="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
            {article.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Callout box */}
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-sm font-bold text-[#0A192F]">Have questions on technical staging?</h4>
              <p className="text-xs text-slate-500">Schedule a 20-minute briefing with our engineering directors.</p>
            </div>
            <button
              onClick={() => {
                onClose();
                onRequestProposal();
              }}
              className="px-4 py-2 rounded-lg bg-[#0A192F] hover:bg-orange-600 text-white text-xs font-bold transition-colors shrink-0"
            >
              Consult Technical Guild
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
