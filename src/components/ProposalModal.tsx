import React, { useState } from 'react';
import { X, Calendar, CheckCircle, AlertCircle, Building, Mail, User, Send, Sparkles } from 'lucide-react';
import { validateInquiryForm, InquiryFormData } from '../utils/eventCalculators';

interface ProposalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProposalModal: React.FC<ProposalModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    workEmail: '',
    organization: '',
    eventType: 'summit',
    estimatedAttendees: '250-500',
    briefSummary: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof InquiryFormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateInquiryForm(formData);
    
    if (!result.isValid) {
      setErrors(result.errors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    
    // Simulate production director routing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      workEmail: '',
      organization: '',
      eventType: 'summit',
      estimatedAttendees: '250-500',
      briefSummary: '',
    });
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-xl w-full shadow-2xl border border-slate-200 overflow-hidden relative my-8 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="bg-[#0A192F] px-6 py-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-orange-600 flex items-center justify-center text-white font-bold">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Request an Event Proposal</h3>
              <p className="text-xs text-slate-300">Direct response from a Senior Technical Director within 24 hours</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            aria-label="Close Proposal Modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-[#0A192F]">Proposal Request Received</h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-[#0A192F]">{formData.fullName}</span>. Your brief for <span className="font-semibold text-[#0A192F]">{formData.organization}</span> has been dispatched to our Executive Production team. We will contact you at <span className="font-semibold text-[#0A192F]">{formData.workEmail}</span>.
              </p>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-lg bg-[#0A192F] text-white text-sm font-semibold hover:bg-orange-600 transition-colors"
                >
                  Return to Website
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Victoria Sterling"
                      className={`w-full pl-9 pr-3 py-2.5 text-sm rounded-lg border ${
                        errors.fullName ? 'border-red-500 bg-red-50/50' : 'border-slate-300'
                      } focus:outline-none focus:ring-2 focus:ring-orange-500`}
                    />
                  </div>
                  {errors.fullName && <p className="text-[11px] text-red-600 mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Work Email *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      value={formData.workEmail}
                      onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                      placeholder="v.sterling@company.com"
                      className={`w-full pl-9 pr-3 py-2.5 text-sm rounded-lg border ${
                        errors.workEmail ? 'border-red-500 bg-red-50/50' : 'border-slate-300'
                      } focus:outline-none focus:ring-2 focus:ring-orange-500`}
                    />
                  </div>
                  {errors.workEmail && <p className="text-[11px] text-red-600 mt-1">{errors.workEmail}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Company / Organization *
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="e.g. Sterling Financial"
                      className={`w-full pl-9 pr-3 py-2.5 text-sm rounded-lg border ${
                        errors.organization ? 'border-red-500 bg-red-50/50' : 'border-slate-300'
                      } focus:outline-none focus:ring-2 focus:ring-orange-500`}
                    />
                  </div>
                  {errors.organization && <p className="text-[11px] text-red-600 mt-1">{errors.organization}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Event Type *
                  </label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full px-3 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                  >
                    <option value="summit">Global Keynote Summit / Conference</option>
                    <option value="retreat">Executive Leadership Retreat</option>
                    <option value="gala">Annual Awards & Heritage Gala</option>
                    <option value="activation">Brand Launch & Experiential Expo</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Estimated In-Person Attendees
                </label>
                <select
                  value={formData.estimatedAttendees}
                  onChange={(e) => setFormData({ ...formData, estimatedAttendees: e.target.value })}
                  className="w-full px-3 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                >
                  <option value="50-150">50 – 150 VIPs (Intimate Retreat)</option>
                  <option value="150-500">150 – 500 Guests (Executive Gala)</option>
                  <option value="500-1500">500 – 1,500 Delegates (Annual Conference)</option>
                  <option value="1500-5000">1,500 – 5,000 Delegates (Major Arena Summit)</option>
                  <option value="5000+">5,000+ Delegates (Convention / Expo)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Brief Overview & Target Timing *
                </label>
                <textarea
                  rows={3}
                  value={formData.briefSummary}
                  onChange={(e) => setFormData({ ...formData, briefSummary: e.target.value })}
                  placeholder="Tell us about the target dates, desired city/venue, and primary goals for your event..."
                  className={`w-full px-3 py-2.5 text-sm rounded-lg border ${
                    errors.briefSummary ? 'border-red-500 bg-red-50/50' : 'border-slate-300'
                  } focus:outline-none focus:ring-2 focus:ring-orange-500`}
                />
                {errors.briefSummary && <p className="text-[11px] text-red-600 mt-1">{errors.briefSummary}</p>}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-lg bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span>Routing to Production Director...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Proposal Request</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-center">
                <p className="text-[11px] text-slate-400">
                  Strict confidentiality guaranteed under Vanguard corporate NDA.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
