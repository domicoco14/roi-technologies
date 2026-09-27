'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProblemSection from '@/components/ProblemSection';
import HowWeFixIt from '@/components/HowWeFixIt';
import RoiCalculator from '@/components/RoiCalculator';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import WhyTrustUs from '@/components/WhyTrustUs';
import FaqSection from '@/components/FaqSection';
import StoreCheckModal from '@/components/StoreCheckModal';
import FloatingAuditPill from '@/components/FloatingAuditPill';
import Footer from '@/components/Footer';

export default function Home() {
  const [isStoreCheckOpen, setIsStoreCheckOpen] = useState(false);

  const handleOpenStoreCheck = () => setIsStoreCheckOpen(true);
  const handleCloseStoreCheck = () => setIsStoreCheckOpen(false);

  return (
    <main className="min-h-screen bg-[#08090E] text-white selection:bg-amber-400 selection:text-black relative overflow-x-hidden">
      {/* Navigation Header */}
      <Navbar onOpenStoreCheck={handleOpenStoreCheck} />

      {/* Hero Section */}
      <Hero onOpenStoreCheck={handleOpenStoreCheck} />

      {/* The Problem Section */}
      <ProblemSection onOpenStoreCheck={handleOpenStoreCheck} />

      {/* How We Fix It (4-Step Method) */}
      <HowWeFixIt onOpenStoreCheck={handleOpenStoreCheck} />

      {/* Interactive ROI Revenue Leak Calculator */}
      <RoiCalculator onOpenStoreCheck={handleOpenStoreCheck} />

      {/* Services Offerings Grid */}
      <ServicesSection onOpenStoreCheck={handleOpenStoreCheck} />

      {/* About Section (El-Roi Brand Origin Story) */}
      <AboutSection onOpenStoreCheck={handleOpenStoreCheck} />

      {/* Why Trust Us Proof Section */}
      <WhyTrustUs onOpenStoreCheck={handleOpenStoreCheck} />

      {/* Frequently Asked Questions */}
      <FaqSection onOpenStoreCheck={handleOpenStoreCheck} />

      {/* Footer */}
      <Footer onOpenStoreCheck={handleOpenStoreCheck} />

      {/* Sticky Floating Audit Button */}
      <FloatingAuditPill onOpenStoreCheck={handleOpenStoreCheck} />

      {/* Interactive Audit Modal */}
      <StoreCheckModal isOpen={isStoreCheckOpen} onClose={handleCloseStoreCheck} />
    </main>
  );
}
