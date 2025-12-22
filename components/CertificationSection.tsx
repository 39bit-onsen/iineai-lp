import React from 'react';

export const CertificationSection: React.FC = () => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          
          {/* Left: Certification Mark */}
          <div className="w-full max-w-[280px] md:max-w-[340px] flex-shrink-0">
            <img 
              src="https://cdn.jsdelivr.net/gh/39bit-onsen/CDNmy@main/assets/certification_badge.png" 
              alt="公式認定マーク" 
              className="w-full h-auto drop-shadow-xl transform hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                e.currentTarget.src = "https://placehold.jp/40/ffffff/d4af37/400x400.png?text=認定マーク画像";
              }}
            />
          </div>

          {/* Right: Text Message */}
          <div className="text-center md:text-left space-y-4 md:space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight">
              いいねAI <span className="text-2xl md:text-3xl font-medium ml-1">は、</span>
            </h3>
            
            <p className="text-xl md:text-3xl font-bold text-gray-700 tracking-tight">
              YouTube / Instagram / X / TikTokの
            </p>

            <div className="text-3xl md:text-5xl font-black text-gray-800 leading-tight">
              <span className="relative inline-block text-blue-600">
                公式認定
                <span className="absolute bottom-1 left-0 w-full h-1.5 bg-blue-600/30 rounded-full"></span>
              </span>
              を受け入れた
              <span className="relative inline-block text-blue-600">
                SNS運用
                <span className="absolute bottom-1 left-0 w-full h-1.5 bg-blue-600/30 rounded-full"></span>
              </span>
              ツールです
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};