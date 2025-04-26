
import React from 'react';
import AboutHero from '@/components/about/AboutHero';
import OurStory from '@/components/about/OurStory';
import LeadershipTeam from '@/components/about/LeadershipTeam';
import OurTechnicians from '@/components/about/OurTechnicians';
import OurValues from '@/components/about/OurValues';
import Certifications from '@/components/about/Certifications';
import AboutTestimonials from '@/components/about/AboutTestimonials';
import AboutCTA from '@/components/about/AboutCTA';

const QuiSommesNous = () => {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <OurStory />
      <LeadershipTeam />
      <OurTechnicians />
      <OurValues />
      <Certifications />
      <AboutTestimonials />
      <AboutCTA />
    </div>
  );
};

export default QuiSommesNous;
