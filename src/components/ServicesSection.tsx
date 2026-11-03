import React from 'react';
import { 
  Users, 
  Megaphone, 
  UserCheck, 
  Calendar, 
  Settings, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon?: React.ElementType;
  isEquipmentCard?: boolean;
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'mice',
    title: 'MICE',
    description: 'Meeting, Incentive, Convention, Exhibition',
    icon: Users,
  },
  {
    id: 'brand-activation',
    title: 'Brand Activation',
    description: 'Aktivasi merek yang lebih dekat dengan audiens',
    icon: Megaphone,
  },
  {
    id: 'gathering',
    title: 'Gathering',
    description: 'Membangun kebersamaan dalam setiap acara',
    icon: UserCheck,
  },
  {
    id: 'event-planner',
    title: 'Event Planner',
    description: 'Perencanaan acara secara profesional',
    icon: Calendar,
  },
  {
    id: 'equipment-support',
    title: 'Event Equipment Support',
    description: 'Dukungan peralatan event berkualitas',
    icon: Settings,
  },
  {
    id: 'our-equipment',
    title: 'Our Equipment',
    description: 'Peralatan teknis audio-visual dan panggung terintegrasi',
    isEquipmentCard: true,
  },
];

interface ServicesSectionProps {
  onSelectService: (service: any) => void;
  onRequestProposal: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService, onRequestProposal }) => {
  return (
    <section id="services" className="py-16 md:py-24 bg-white border-b border-slate-100 scroll-mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-start">
          
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-4 space-y-5">
            <div>
              <div className="w-8 h-1 bg-[#F95700] rounded-full mb-3" />
              <span className="text-xs sm:text-sm font-bold text-slate-700 tracking-wide block">
                Our Services
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1B3D] tracking-tight leading-[1.15]">
              Solusi Lengkap<br />
              untuk Setiap Acara
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Dari konsep hingga eksekusi, kami hadir untuk mewujudkan acara yang berkesan.
            </p>

            <div className="pt-2">
              <button
                onClick={onRequestProposal}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#0B1B3D] hover:bg-[#14264E] text-white text-xs sm:text-sm font-semibold shadow-xs hover:shadow-md transition-all group"
              >
                <span>Jelajahi Layanan</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: 3-Column Card Grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
              {SERVICES_DATA.map((service) => {
                if (service.isEquipmentCard) {
                  return (
                    <div
                      key={service.id}
                      onClick={() => onSelectService(service)}
                      className="relative rounded-2xl p-5 border border-blue-200/70 bg-gradient-to-br from-blue-50/90 via-sky-50/60 to-blue-100/50 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer overflow-hidden flex flex-col justify-between group"
                    >
                      {/* Spotlight Image on the right side */}
                      <div className="absolute -right-3 -bottom-3 w-32 h-36 opacity-35 group-hover:opacity-50 transition-opacity pointer-events-none">
                        <img
                          src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=400&q=80"
                          alt="Professional stage lighting spotlight"
                          className="w-full h-full object-cover rounded-xl"
                          loading="lazy"
                        />
                      </div>

                      <div className="relative z-10">
                        <div className="w-5 h-0.5 bg-[#F95700] rounded-full mb-2" />
                        <h3 className="text-base font-bold text-[#0B1B3D] mb-3">
                          Our Equipment
                        </h3>

                        <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                          <li className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                            <span>Sound & Light</span>
                          </li>
                          <li className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                            <span>LED</span>
                          </li>
                          <li className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                            <span>Car & Rigging</span>
                          </li>
                          <li className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                            <span>Booth Production</span>
                          </li>
                          <li className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                            <span>Apparel</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  );
                }

                const Icon = service.icon || Users;

                return (
                  <div
                    key={service.id}
                    onClick={() => onSelectService(service)}
                    className="rounded-2xl p-5 sm:p-6 bg-white border border-slate-200/90 hover:border-slate-300 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between group"
                  >
                    <div>
                      {/* Icon */}
                      <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-[#0B1B3D] group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors mb-4">
                        <Icon className="w-5 h-5 stroke-[1.8]" />
                      </div>

                      {/* Title */}
                      <h3 className="text-base font-bold text-[#0B1B3D] mb-1.5 group-hover:text-[#F95700] transition-colors">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
