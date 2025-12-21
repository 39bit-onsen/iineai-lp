import React from 'react';
import { Hero } from './components/Hero';
import { VideoSection } from './components/VideoSection';
import { TrustLogos } from './components/TrustLogos';
import { CertificationSection } from './components/CertificationSection';
import { ImpactStats } from './components/ImpactStats';
import { ImpactStatsSimple } from './components/ImpactStatsSimple';
import { ProblemSolution } from './components/ProblemSolution';
import { TechStack } from './components/TechStack';
import { Features } from './components/Features';
import { ComparisonTable } from './components/ComparisonTable';
import { PlanList } from './components/PlanList';
import { Agency } from './components/Agency';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white text-gray-800 font-sans antialiased">
      <main>
        <Hero />
        <VideoSection />
        <TrustLogos />
        <CertificationSection />
        <ImpactStats />
        <ImpactStatsSimple />
        <ProblemSolution />
        <TechStack />
        <Features />
        <ComparisonTable />
        <PlanList />
        <Agency />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
};

export default App;