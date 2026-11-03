import React from 'react';
import { X, Play, Film, Volume2, Award } from 'lucide-react';

interface ShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRequestProposal: () => void;
}

export const ShowreelModal: React.FC<ShowreelModalProps> = ({ isOpen, onClose, onRequestProposal }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-[#0A192F] text-white rounded-2xl max-w-4xl w-full shadow-2xl border border-white/20 overflow-hidden relative my-8 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-orange-600 flex items-center justify-center text-white">
              <Film className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold">2026 Production Showreel</h3>
              <p className="text-[11px] text-slate-400">Cinematic arena summits, executive retreats & activations</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            aria-label="Close Showreel"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Cinematic Video Container / Showcase */}
        <div className="relative aspect-16/9 bg-black flex items-center justify-center overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1600&q=85"
            alt="Showreel Keynote Preview"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />

          {/* Interactive Player Simulation Badge */}
          <div className="relative z-10 text-center space-y-4 px-4">
            <div className="w-16 h-16 rounded-full bg-orange-600 hover:bg-orange-500 text-white flex items-center justify-center mx-auto shadow-xl cursor-pointer transform hover:scale-110 transition-all">
              <Play className="w-7 h-7 fill-current ml-1" />
            </div>
            <div>
              <div className="text-xl font-extrabold text-white">4K Arena Production Reel</div>
              <div className="text-xs text-slate-300 mt-1">Runtime: 2 min 48 sec • Spatial Audio Mix</div>
            </div>
          </div>

          {/* Controls Bar */}
          <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-xs text-slate-400 bg-black/60 backdrop-blur-md px-4 py-2.5 rounded-lg border border-white/10">
            <span className="text-orange-400 font-mono">01:14 / 02:48</span>
            <div className="flex-1 mx-4 h-1.5 bg-white/20 rounded-full overflow-hidden">
              <div className="w-5/12 h-full bg-orange-500 rounded-full" />
            </div>
            <div className="flex items-center gap-2 text-white">
              <Volume2 className="w-4 h-4" />
              <span className="text-[11px]">1080p60</span>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 bg-[#071324] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Award className="w-5 h-5 text-orange-400 shrink-0" />
            <span className="text-xs text-slate-300">
              Gold Trophy Winner at the 2025 Global Event Production Awards.
            </span>
          </div>

          <button
            onClick={() => {
              onClose();
              onRequestProposal();
            }}
            className="px-5 py-2.5 rounded-lg bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs uppercase tracking-wider transition-colors shrink-0"
          >
            Plan Your Show
          </button>
        </div>
      </div>
    </div>
  );
};
