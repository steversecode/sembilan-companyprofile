import React, { useState, useId } from 'react';
import { X, Sparkles, CheckCircle2, ArrowRight, DollarSign, Calculator, Layers } from 'lucide-react';
import { calculateEstimate, EstimateParams } from '../utils/eventCalculators';

interface BudgetCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRequestProposalWithBudget: (details: string) => void;
}

export const BudgetCalculatorModal: React.FC<BudgetCalculatorModalProps> = ({
  isOpen,
  onClose,
  onRequestProposalWithBudget,
}) => {
  const [eventType, setEventType] = useState<EstimateParams['eventType']>('summit');
  const [attendees, setAttendees] = useState<number>(500);
  const [durationDays, setDurationDays] = useState<number>(2);
  const [hasLiveStreaming, setHasLiveStreaming] = useState<boolean>(true);
  const [hasVipHospitality, setHasVipHospitality] = useState<boolean>(true);
  const [hasBespokeStaging, setHasBespokeStaging] = useState<boolean>(false);

  const attendeesId = useId();
  const durationId = useId();

  if (!isOpen) return null;

  const estimate = calculateEstimate({
    eventType,
    attendees,
    durationDays,
    hasLiveStreaming,
    hasVipHospitality,
    hasBespokeStaging,
  });

  const handleApply = () => {
    const summary = `Estimated ${eventType.toUpperCase()} for ${attendees} attendees (${durationDays} days): ${estimate.formattedTotal}`;
    onRequestProposalWithBudget(summary);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden relative my-8 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#0A192F] px-6 py-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-orange-600 flex items-center justify-center text-white">
              <Calculator className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Interactive Event Budget Estimator</h3>
              <p className="text-xs text-slate-300">Instant benchmark calculation based on 450+ delivered productions</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            aria-label="Close Calculator"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">
          {/* Event Category Selector */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Select Production Format
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'summit', label: 'Keynote Summit' },
                { id: 'retreat', label: 'VIP Retreat' },
                { id: 'gala', label: 'Awards Gala' },
                { id: 'activation', label: 'Brand Activation' },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setEventType(item.id as EstimateParams['eventType'])}
                  className={`py-2.5 px-3 rounded-lg text-xs font-bold border transition-all ${
                    eventType === item.id
                      ? 'bg-orange-50 border-orange-500 text-orange-700 ring-2 ring-orange-400/30'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Sliders: Attendees and Duration */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-slate-50 p-4 rounded-xl border border-slate-200/80">
            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor={attendeesId} className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  In-Person Delegates
                </label>
                <span className="text-sm font-extrabold text-[#0A192F]">{attendees.toLocaleString()}</span>
              </div>
              <input
                id={attendeesId}
                type="range"
                min="50"
                max="3000"
                step="50"
                value={attendees}
                onChange={(e) => setAttendees(Number(e.target.value))}
                className="w-full accent-orange-600 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>50 VIPs</span>
                <span>1,500</span>
                <span>3,000+</span>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor={durationId} className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Event Duration (Days)
                </label>
                <span className="text-sm font-extrabold text-[#0A192F]">{durationDays} Day{durationDays > 1 ? 's' : ''}</span>
              </div>
              <input
                id={durationId}
                type="range"
                min="1"
                max="5"
                step="1"
                value={durationDays}
                onChange={(e) => setDurationDays(Number(e.target.value))}
                className="w-full accent-orange-600 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>1 Day</span>
                <span>3 Days</span>
                <span>5 Days</span>
              </div>
            </div>
          </div>

          {/* Add-ons Checkboxes */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Technical Modules & Enhancements
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <label className="flex items-start gap-2.5 p-3 rounded-lg border border-slate-200 bg-white hover:border-orange-300 cursor-pointer text-xs">
                <input
                  type="checkbox"
                  checked={hasLiveStreaming}
                  onChange={(e) => setHasLiveStreaming(e.target.checked)}
                  className="rounded text-orange-600 focus:ring-orange-500 mt-0.5"
                />
                <div>
                  <div className="font-bold text-[#0A192F]">4K Live Stream</div>
                  <div className="text-[10px] text-slate-500">Global CDN & backup</div>
                </div>
              </label>

              <label className="flex items-start gap-2.5 p-3 rounded-lg border border-slate-200 bg-white hover:border-orange-300 cursor-pointer text-xs">
                <input
                  type="checkbox"
                  checked={hasVipHospitality}
                  onChange={(e) => setHasVipHospitality(e.target.checked)}
                  className="rounded text-orange-600 focus:ring-orange-500 mt-0.5"
                />
                <div>
                  <div className="font-bold text-[#0A192F]">VIP Hospitality</div>
                  <div className="text-[10px] text-slate-500">Greenroom & concierge</div>
                </div>
              </label>

              <label className="flex items-start gap-2.5 p-3 rounded-lg border border-slate-200 bg-white hover:border-orange-300 cursor-pointer text-xs">
                <input
                  type="checkbox"
                  checked={hasBespokeStaging}
                  onChange={(e) => setHasBespokeStaging(e.target.checked)}
                  className="rounded text-orange-600 focus:ring-orange-500 mt-0.5"
                />
                <div>
                  <div className="font-bold text-[#0A192F]">Curved LED Wall</div>
                  <div className="text-[10px] text-slate-500">Sub-1.9mm volume</div>
                </div>
              </label>
            </div>
          </div>

          {/* Estimate Display Box */}
          <div className="p-5 rounded-xl bg-[#0A192F] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs font-semibold text-orange-400 uppercase tracking-wider block">
                Estimated Turnkey Production Budget
              </span>
              <div className="text-3xl font-extrabold text-white mt-0.5">
                {estimate.formattedTotal}
                <span className="text-xs text-slate-300 font-normal ml-2">
                  (~{estimate.perAttendeeFormatted}/delegate)
                </span>
              </div>
              <p className="text-[11px] text-slate-400 mt-1">
                Includes stage construction, sound engineering, lighting rig, and on-site director.
              </p>
            </div>

            <button
              onClick={handleApply}
              className="px-5 py-3 rounded-lg bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs uppercase tracking-wider shrink-0 flex items-center gap-1.5 transition-colors"
            >
              <span>Lock In Estimate</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
