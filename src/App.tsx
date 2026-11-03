import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { SocialSection } from './components/SocialSection';
import { PortfolioSection, CaseStudy } from './components/PortfolioSection';
import { BlogSection, Article } from './components/BlogSection';
import { CompanyProfileSection } from './components/CompanyProfileSection';
import { Footer } from './components/Footer';
import { ProposalModal } from './components/ProposalModal';
import { BudgetCalculatorModal } from './components/BudgetCalculatorModal';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ArticleModal } from './components/ArticleModal';
import { ShowreelModal } from './components/ShowreelModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';

export default function App() {
  const [proposalModalOpen, setProposalModalOpen] = useState(false);
  const [calculatorOpen, setCalculatorOpen] = useState(false);
  const [showreelOpen, setShowreelOpen] = useState(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [selectedService, setSelectedService] = useState<any | null>(null);

  const handleOpenProposal = () => {
    setProposalModalOpen(true);
  };

  const handleOpenCalculator = () => {
    setCalculatorOpen(true);
  };

  const handleOpenShowreel = () => {
    setShowreelOpen(true);
  };

  const handleSelectService = (service: any) => {
    setSelectedService(service);
  };

  const handleSelectCaseStudy = (study: CaseStudy) => {
    setSelectedCaseStudy(study);
  };

  const handleSelectArticle = (article: Article) => {
    setSelectedArticle(article);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col antialiased selection:bg-[#F95700] selection:text-white">
      {/* 1. Compact White Navigation Header */}
      <Navbar
        onRequestProposal={handleOpenProposal}
        onOpenCalculator={handleOpenCalculator}
      />

      <main className="flex-grow">
        {/* 2. Cinematic Full-Width Hero Image */}
        <Hero
          onRequestProposal={handleOpenProposal}
          onWatchShowreel={handleOpenShowreel}
        />

        {/* 3. Services Section: Text on the Left & 3-Column Card Grid on the Right */}
        <ServicesSection
          onSelectService={handleSelectService}
          onRequestProposal={handleOpenProposal}
        />

        {/* 4. Social Media Section: 3-by-2 Image Gallery */}
        <SocialSection />

        {/* 5. Portfolio Section: Large Statistics on the Left & Overlapping Event Photographs on the Right */}
        <PortfolioSection
          onOpenCaseStudy={handleSelectCaseStudy}
          onRequestProposal={handleOpenProposal}
        />

        {/* 6. Blog Section: Three Equal-Width Article Cards */}
        <BlogSection
          onOpenArticle={handleSelectArticle}
        />

        {/* 7. Asymmetrical Company Profile: Text, Partner Logos, and Large Team Photograph */}
        <CompanyProfileSection
          onRequestProposal={handleOpenProposal}
        />
      </main>

      {/* 8. Professional Corporate Footer */}
      <Footer
        onRequestProposal={handleOpenProposal}
        onOpenCalculator={handleOpenCalculator}
      />

      {/* Interactive Modals */}
      <ProposalModal
        isOpen={proposalModalOpen}
        onClose={() => setProposalModalOpen(false)}
      />

      <BudgetCalculatorModal
        isOpen={calculatorOpen}
        onClose={() => setCalculatorOpen(false)}
        onRequestProposalWithBudget={() => {
          setProposalModalOpen(true);
        }}
      />

      <ShowreelModal
        isOpen={showreelOpen}
        onClose={() => setShowreelOpen(false)}
        onRequestProposal={handleOpenProposal}
      />

      <CaseStudyModal
        study={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onRequestProposal={handleOpenProposal}
      />

      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onRequestProposal={handleOpenProposal}
      />

      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onRequestProposal={handleOpenProposal}
      />
    </div>
  );
}
