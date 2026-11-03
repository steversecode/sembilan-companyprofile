import React from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Layers, FileText } from 'lucide-react';

interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  badge: string;
  image: string;
  icon: React.ElementType;
  description: string;
  features: string[];
  deliverables: string[];
}

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onRequestProposal: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({ service, onClose, onRequestProposal }) => {
  if (!service) return null;

  const Icon = service.icon;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden relative my-8 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with image */}
        <div className="relative h-56 w-full bg-slate-900">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/50 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-5 left-6 right-6 text-white flex items-end justify-between">
            <div>
              <span className="px-2.5 py-1 rounded bg-orange-600 text-[10px] font-bold uppercase tracking-wider mb-1.5 inline-block">
                {service.badge}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">{service.title}</h3>
              <p className="text-xs text-slate-300 mt-1">{service.tagline}</p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md text-white flex items-center justify-center shrink-0">
              <Icon className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <p className="text-sm text-slate-600 leading-relaxed">
            {service.description}
          </p>

          {/* Technical Scope */}
          <div>
            <h4 className="text-xs font-bold text-[#0A192F] uppercase tracking-wider mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-orange-600" />
              Core Production Architecture
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-200/70">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Deliverables */}
          <div>
            <h4 className="text-xs font-bold text-[#0A192F] uppercase tracking-wider mb-3 flex items-center gap-2">
              <FileText className="w-4 h-4 text-orange-600" />
              Client Deliverables & Documentation
            </h4>
            <div className="space-y-2">
              {service.deliverables.map((deliv, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                  <span>{deliv}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer action */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <div className="text-xs text-slate-500">
              Turnkey delivery backed by Vanguard SLA.
            </div>
            <button
              onClick={() => {
                onClose();
                onRequestProposal();
              }}
              className="px-5 py-2.5 rounded-lg bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2"
            >
              <span>Request Custom Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
