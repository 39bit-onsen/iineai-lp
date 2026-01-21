import React from 'react';

export const IntroductionEffect: React.FC = () => {
  return (
    <section className="py-24 bg-orange-50 overflow-hidden border-y border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Column: Visuals (Smartphone Mockups) */}
          <div className="w-full lg:w-2/5 flex flex-col items-center">
            <div className="relative w-full max-w-[320px] md:max-w-[420px] h-[340px] md:h-[460px]">
              {/* Back Phone */}
              <div className="absolute top-10 right-2 w-[150px] md:w-[210px] aspect-[9/19] bg-white rounded-[1.5rem] md:rounded-[2rem] border-[4px] md:border-[6px] border-gray-100 shadow-xl overflow-hidden z-0 transform rotate-2">
                <img 
                  src="https://cdn.jsdelivr.net/gh/39bit-onsen/CDNmy@main/assets/topphone.png" 
                  alt="Instagram Post Case" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Front Phone */}
              <div className="absolute top-0 left-2 w-[150px] md:w-[210px] aspect-[9/19] bg-white rounded-[1.5rem] md:rounded-[2rem] border-[4px] md:border-[6px] border-gray-800 shadow-2xl overflow-hidden z-10 transform -rotate-1">
                <div className="absolute top-0 w-full h-4 md:h-5 bg-gray-800 z-20 flex justify-center rounded-b-xl">
                  <div className="w-8 md:w-12 h-1 md:h-2 bg-black rounded-full mt-1"></div>
                </div>
                <img 
                  src="https://cdn.jsdelivr.net/gh/39bit-onsen/CDNmy@main/assets/topphone.png" 
                  alt="Instagram Profile Case" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="w-full lg:w-3/5 space-y-6 md:space-y-8">
            <div className="inline-block bg-[#f97316] text-white py-1 px-4 rounded-sm text-[10px] md:text-xs font-black tracking-[0.2em] shadow-sm">
              SUCCESS STORY
            </div>
            
            <h2 className="text-[7.2vw] sm:text-5xl font-black text-gray-900 tracking-tighter leading-none whitespace-nowrap">
              導入成果（約1ヶ月）
            </h2>

            <ul className="grid grid-cols-1 gap-3 md:gap-4">
              {[
                { label: '投稿数3倍増', sub: '（月間6件 → 15-20件に）' },
                { label: 'フォロワー増3倍以上', sub: '（1日3-5人 → 10人以上に）' },
                { label: 'リーチ数が大幅に向上', sub: '' },
                { label: 'コメント数増加で交流の活発化', sub: '' },
                { label: '投稿作成時間を大幅短縮', sub: '' },
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 bg-white/80 p-3 md:p-4 rounded-xl shadow-sm border border-orange-100">
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 flex-shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <div className="flex flex-wrap items-baseline gap-1 md:gap-2">
                    <span className="text-base md:text-2xl font-black text-gray-900 tracking-tight leading-tight">{item.label}</span>
                    {item.sub && (
                      <span className="text-[10px] md:text-lg font-bold text-gray-500 tracking-tighter">{item.sub}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            {/* Orange CTA Box */}
            <div className="bg-[#f97316] py-4 px-6 md:py-8 md:px-10 rounded-2xl shadow-xl border-b-[6px] border-orange-700 transform hover:scale-[1.01] transition-transform">
              <div className="text-center space-y-1">
                <p className="text-white text-[4.8vw] sm:text-xl md:text-3xl font-black tracking-tighter leading-none whitespace-nowrap">
                  導入により3倍以上の成長を実現
                </p>
                <div className="w-8 h-0.5 bg-white/40 mx-auto my-2 rounded-full"></div>
                <p className="text-white text-xs md:text-xl font-bold tracking-tight opacity-90">
                  導入後すぐに効果を実感いただけます
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};