
import React from 'react';
import HeroSection from '@/components/about/HeroSection';
import KeyMetricsStrip from '@/components/about/KeyMetricsStrip';
import CompanyTimeline from '@/components/about/CompanyTimeline';
import LeadershipDuo from '@/components/about/LeadershipDuo';
import TechTeamCarousel from '@/components/about/TechTeamCarousel';
import DifferentiationGrid from '@/components/about/DifferentiationGrid';
import CoverageMap from '@/components/about/CoverageMap';
import CertificationsSection from '@/components/about/CertificationsSection';
import TestimonialsSlider from '@/components/about/TestimonialsSlider';
import CtaBanner from '@/components/about/CtaBanner';

const QuiSommesNous = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <KeyMetricsStrip />
      <CompanyTimeline />
      <LeadershipDuo />
      <TechTeamCarousel />
      <DifferentiationGrid />
      <CoverageMap />
      <CertificationsSection />
      <TestimonialsSlider />
      <CtaBanner />
    </div>
  );
};

export default QuiSommesNous;
