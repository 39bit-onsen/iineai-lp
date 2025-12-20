
import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { Hero } from './components/Hero';
import { ImpactStats } from './components/ImpactStats';
import { ProblemSolution } from './components/ProblemSolution';
import { TechStack } from './components/TechStack';
import { Features } from './components/Features';
import { ComparisonTable } from './components/ComparisonTable';
import { PlanList } from './components/PlanList';
import { Agency } from './components/Agency';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white text-gray-800 font-sans antialiased">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100 shadow-sm print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="font-black italic text-2xl text-orange-500">
            いいねAI
          </div>
          
          <nav className="hidden md:flex gap-6 text-sm font-bold text-gray-600">
            <a href="#features" className="hover:text-orange-500 transition-colors">機能</a>
            <a href="#plans" className="hover:text-orange-500 transition-colors">料金</a>
            <a href="#demo" className="text-white bg-orange-500 px-4 py-2 rounded-full hover:bg-orange-600 transition-colors">無料デモ</a>
          </nav>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-orange-500 focus:outline-none"
          >
            <Menu />
          </button>
        </div>

        {/* Mobile Nav Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-xl absolute w-full left-0 top-16 z-40">
            <nav className="flex flex-col p-4 space-y-4 text-center">
              <a href="#features" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-gray-700 font-bold hover:bg-gray-50 rounded">機能</a>
              <a href="#plans" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-gray-700 font-bold hover:bg-gray-50 rounded">料金</a>
              <a href="#demo" onClick={() => setMobileMenuOpen(false)} className="block py-3 text-white bg-orange-500 font-bold rounded-full shadow-md">無料デモ体験</a>
            </nav>
          </div>
        )}
      </header>

      <main>
        <Hero />
        <ImpactStats />
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
