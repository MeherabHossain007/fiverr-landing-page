import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Process from './components/Process';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import SocialProof from './components/SocialProof';
import Pricing from './components/Pricing';
import Funnel from './components/Funnel';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ExitIntentModal from './components/ExitIntentModal';
import FloatingCTA from './components/FloatingCTA';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <div id="process">
        <Process />
      </div>
      <div id="services">
        <Services />
      </div>
      <CaseStudies />
      <div id="reviews">
        <SocialProof />
      </div>
      <Pricing />
      <Funnel />
      <div id="faq">
        <FAQ />
      </div>
      <Footer />
      
      {/* Overlays */}
      <ExitIntentModal />
      <FloatingCTA />
    </div>
  );
}

export default App;
