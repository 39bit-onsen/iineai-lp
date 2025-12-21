import React from 'react';

export const EmotionalAppeal: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-10">
          
          {/* Main Emotional Message - Single Line */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight tracking-tighter whitespace-nowrap">
              「自分の分身がいればどれだけ楽か...」
            </h2>
            <p className="text-2xl md:text-4xl font-black text-brand-600 tracking-tight">
              そう思ったことはありませんか？
            </p>
          </div>

          {/* Downward Arrow from AutomationGuide Section */}
          <div className="flex justify-center pt-4">
            <div className="animate-bounce">
              <svg 
                width="60" 
                height="80" 
                viewBox="0 0 100 80" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg" 
                className="drop-shadow-xl"
              >
                {/* Rotated version of the AutomationGuide arrow to point down */}
                <path d="M20 10L50 50L80 10" stroke="#f97316" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20 30L50 70L80 30" stroke="#f97316" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
              </svg>
            </div>
          </div>
          
          {/* Simple Solution Message with Logo */}
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-2xl md:text-4xl font-black text-gray-800">
              <span>ですが</span>
              <img 
                src="https://cdn.jsdelivr.net/gh/39bit-onsen/iineai-lp@main/assets/logotype_japanese.png" 
                alt="いいねAI" 
                className="h-10 md:h-16 w-auto object-contain"
              />
              <span>なら実現可能です</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};