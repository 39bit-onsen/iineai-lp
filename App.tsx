import React from 'react';
import { Hero } from './components/Hero';
import { VideoSection } from './components/VideoSection';
import { TrustLogos } from './components/TrustLogos';
import { CertificationSection } from './components/CertificationSection';
import { ImpactStats } from './components/ImpactStats';
import { ImpactStatsSimple } from './components/ImpactStatsSimple';
import { ProblemSolution } from './components/ProblemSolution';
import { TechStack } from './components/TechStack';
import { AutomationGuide } from './components/AutomationGuide';
import { EmotionalAppeal } from './components/EmotionalAppeal';
import { IntroductionEffect } from './components/IntroductionEffect';
import { Features } from './components/Features';
import { ComparisonTable } from './components/ComparisonTable';
import { PlanList } from './components/PlanList';
import { Agency } from './components/Agency';
import { AgencyV2 } from './components/AgencyV2';
import { ContactCTA } from './components/ContactCTA';
import { UserInterview } from './components/UserInterview';
import { OfficialVideos } from './components/OfficialVideos';
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
        <AutomationGuide />
        <EmotionalAppeal />
        <IntroductionEffect />
        <Features />
        <ComparisonTable />
        <PlanList />
        <Agency />
        <AgencyV2 />
        <ContactCTA />
        <UserInterview />
        <OfficialVideos />
        {/* <FAQ /> */}
      </main>

      <Footer />
    </div>
  );
};

export default App;