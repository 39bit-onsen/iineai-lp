import React from 'react';

export const EmotionalAppeal: React.FC = () => {
  return (
    <section className="py-24 pt-16 bg-brand-600 overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-[-20deg] translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-12">
          
          {/* Main Emotional Message - Fixed to single line with fluid typography */}
          <div className="space-y-6">
            <h2 className="text-[5.5vw] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight tracking-tighter whitespace-nowrap">
              「自分の分身がいればどれだけ楽か...」
            </h2>
            <p className="text-2xl md:text-4xl font-black text-yellow-300 tracking-tight">
              そう思ったことはありませんか？
            </p>
          </div>

          {/* Downward Arrow - Larger size and White color for maximum visibility */}
          <div className="flex justify-center pt-4">
            <div className="animate-bounce">
              <svg 
                width="80" 
                height="100" 
                viewBox="0 0 100 80" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg" 
                className="drop-shadow-2xl"
              >
                {/* Arrow 1 (Main Layer) */}
                <path d="M20 10L50 50L80 10" stroke="white" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round"/>
                
                {/* Arrow 2 (Lower Shadow-like Layer) */}
                <path d="M20 30L50 70L80 30" stroke="white" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" opacity="0.4"/>
              </svg>
            </div>
          </div>
          
          {/* Simple Solution Message with Logo */}
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-4 text-2xl md:text-4xl font-black text-white">
              <span>ですが</span>
              <div className="bg-white p-3 rounded-xl shadow-lg inline-block transform -rotate-1">
                <img 
                  src="https://cdn.jsdelivr.net/gh/39bit-onsen/CDNmy@main/assets/iine_ai_logo_full.png" 
                  alt="いいねAI" 
                  className="h-10 md:h-14 w-auto object-contain"
                />
              </div>
              <span>なら実現可能です</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};