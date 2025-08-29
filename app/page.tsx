
'use client';

import Hero from '../components/Hero';
import MissionVision from '../components/MissionVision';
import Services from '../components/Services';
import Solutions from '../components/Solutions';
import Industries from '../components/Industries';
import Process from '../components/Process';
import TrustSignals from '../components/TrustSignals';
import PartnersAndCertifications from '../components/PartnersAndCertifications';
import ValuesCulture from '../components/ValuesCulture';
import BlogHighlights from '../components/BlogHighlights';
import CallToAction from '../components/CallToAction';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <MissionVision />
      <Services />
      <Solutions />
      <Industries />
      <Process />
      <TrustSignals />
      <PartnersAndCertifications />
      <ValuesCulture />
      <BlogHighlights />
      <CallToAction />
      <Footer />
    </div>
  );
}