import React, { useState, useEffect } from 'react';
import { Mail, ChevronDown, Menu, X, ArrowRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  onRequestProposal: () => void;
  onOpenCalculator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRequestProposal, onOpenCalculator }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-all duration-200 ${
        isScrolled
          ? 'shadow-sm border-b border-slate-200/80 py-3'
          : 'border-b border-slate-100 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo - Stylized 'A' mark matching reference */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus:outline-none"
            aria-label="Sembilan Communication Home"
          >
            <div className="relative w-9 h-9 flex items-center justify-center">
              <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Left diagonal chevron - Navy/Blue */}
                <path
                  d="M19 6L6 34H13L20 18L19 6Z"
                  fill="#0B1B3D"
                />
                {/* Right diagonal chevron - Orange */}
                <path
                  d="M21 6L34 34H27L20 18L21 6Z"
                  fill="#F95700"
                />
                {/* Crossbar swoosh */}
                <path
                  d="M11 25H29V29H11V25Z"
                  fill="#0052CC"
                  fillOpacity="0.85"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-base font-extrabold tracking-tight text-[#0B1B3D] leading-none">
                SEMBILAN
              </span>
              <span className="text-[9px] font-bold tracking-widest text-[#F95700] uppercase mt-0.5">
                Communication
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9" aria-label="Main Navigation">
            {/* Services with dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <a
                href="#services"
                className="text-xs lg:text-sm font-semibold text-slate-700 hover:text-[#0B1B3D] transition-colors flex items-center gap-1 py-1"
              >
                <span>Services</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-700 transition-transform" />
              </a>

              {servicesDropdown && (
                <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-lg border border-slate-100 py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <a href="#services" className="block px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-[#F95700]">
                    MICE
                  </a>
                  <a href="#services" className="block px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-[#F95700]">
                    Brand Activation
                  </a>
                  <a href="#services" className="block px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-[#F95700]">
                    Gathering & Gala
                  </a>
                  <a href="#services" className="block px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-[#F95700]">
                    Event Planner
                  </a>
                  <a href="#services" className="block px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-[#F95700]">
                    Equipment Support
                  </a>
                </div>
              )}
            </div>

            <a
              href="#social"
              className="text-xs lg:text-sm font-semibold text-slate-700 hover:text-[#0B1B3D] transition-colors py-1"
            >
              Social Media
            </a>

            <a
              href="#portfolio"
              className="text-xs lg:text-sm font-semibold text-slate-700 hover:text-[#0B1B3D] transition-colors py-1"
            >
              Portfolio
            </a>

            <a
              href="#blog"
              className="text-xs lg:text-sm font-semibold text-slate-700 hover:text-[#0B1B3D] transition-colors py-1"
            >
              Blog
            </a>

            {/* Profile with dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProfileDropdown(true)}
              onMouseLeave={() => setProfileDropdown(false)}
            >
              <a
                href="#profile"
                className="text-xs lg:text-sm font-semibold text-slate-700 hover:text-[#0B1B3D] transition-colors flex items-center gap-1 py-1"
              >
                <span>Profile</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-700 transition-transform" />
              </a>

              {profileDropdown && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-xl shadow-lg border border-slate-100 py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <a href="#profile" className="block px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-[#F95700]">
                    Tentang Kami
                  </a>
                  <a href="#profile" className="block px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-[#F95700]">
                    Company Profile
                  </a>
                  <a href="#profile" className="block px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-[#F95700]">
                    Karir
                  </a>
                </div>
              )}
            </div>
          </nav>

          {/* Right Action Area - Contact Us Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenCalculator}
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-600 hover:text-[#F95700] hover:bg-orange-50/60 transition-colors"
              title="Kalkulator Estimasi Anggaran"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#F95700]" />
              <span>Estimasi Biaya</span>
            </button>

            <button
              onClick={onRequestProposal}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0B1B3D] hover:bg-[#14264E] text-white text-xs lg:text-sm font-semibold shadow-xs hover:shadow-sm transition-all active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#0B1B3D] focus:ring-offset-2"
              aria-label="Contact Us"
            >
              <Mail className="w-4 h-4 text-white" />
              <span>Contact Us</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onRequestProposal}
              className="px-3.5 py-1.5 rounded-lg bg-[#0B1B3D] text-white text-xs font-semibold flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-3 pb-4 border-t border-slate-100 mt-2 space-y-2">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-[#F95700] rounded-lg"
            >
              Services
            </a>
            <a
              href="#social"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-[#F95700] rounded-lg"
            >
              Social Media
            </a>
            <a
              href="#portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-[#F95700] rounded-lg"
            >
              Portfolio
            </a>
            <a
              href="#blog"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-[#F95700] rounded-lg"
            >
              Blog
            </a>
            <a
              href="#profile"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-[#F95700] rounded-lg"
            >
              Profile
            </a>
            <div className="pt-2 border-t border-slate-100">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCalculator();
                }}
                className="w-full text-left px-3 py-2 text-xs font-semibold text-[#F95700] flex items-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Kalkulator Estimasi Anggaran Event</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
