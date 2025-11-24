import React from 'react';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Services from './components/Services';
import SocialProof from './components/SocialProof';
import Pricing from './components/Pricing';
import Funnel from './components/Funnel';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-cyan-500/30">
      <Hero />
      <ProblemSolution />
      <Services />
      <SocialProof />
      <Pricing />
      <Funnel />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
