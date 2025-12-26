import React from 'react';

export const IntroductionEffect: React.FC = () => {
  return (
    <section className="py-24 bg-orange-50 overflow-hidden border-y border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Changed lg:items-start to lg:items-center for overall vertical alignment */}
        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-12 lg:gap-20">
          
          {/* Left Column: Visuals (Smartphone Mockups) */}
          <div className="w-full lg:w-2/5 flex flex-col items-center">
            <div className="relative w-full max-w-[420px] h-[380px] md:h-[460px]">
              {/* Back Phone */}
              <div className="absolute top-12 right-4 w-[180px] md:w-[210px] aspect-[9/19] bg-white rounded-[2rem] border-[6px] border-gray-100 shadow-xl overflow-hidden z-0 transform rotate-2">
                <img 
                  src="https://cdn.jsdelivr.net/gh/39bit-onsen/CDNmy@main/assets/topphone.png" 
                  alt="Instagram Post Case" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Front Phone */}
              <div className="absolute top-0 left-4 w-[180px] md:w-[210px] aspect-[9/19] bg-white rounded-[2rem] border-[6px] border-gray-800 shadow-2xl overflow-hidden z-10 transform -rotate-1">
                <div className="absolute top-0 w-full h-5 bg-gray-800 z-20 flex justify-center rounded-b-xl">
                  <div className="w-12 h-2 bg-black rounded-full mt-1"></div>
                </div>
                <img 
                  src="https://cdn.jsdelivr.net/gh/39bit-onsen/CDNmy@main/assets/topphone.png" 
                  alt="Instagram Profile Case" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="mt-8 md:mt-12 text-center w-full">
              <a 
                href="https://iine-ai.com/cases/shokuhin/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-orange-600 hover:underline text-xs md:text-sm font-medium tracking-wide"
              >
                https://iine-ai.com/cases/shokuhin/
              </a>
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="w-full lg:w-3/5 space-y-8">
            <div className="inline-block bg-[#f97316] text-white py-1.5 px-6 rounded-sm text-sm font-black tracking-widest mb-2 shadow-sm">
              SUCCESS STORY
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tighter leading-tight">
              導入成果（約1ヶ月で実現）
            </h2>

            <ul className="space-y-4">
              {[
                { label: '投稿数3倍増', sub: '（月間6件程度 → 15-20件に）' },
                { label: 'フォロワー増加数3倍以上', sub: '（1日3-5人 → 10人以上に）' },
                { label: 'フォロワー外リーチ大幅向上', sub: '' },
                { label: 'コメント数増加によるエンゲージメント向上', sub: '' },
                { label: '投稿作成時間の大幅短縮', sub: '' },
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 bg-white/60 p-4 rounded-xl shadow-sm border border-orange-100">
                  <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="text-lg md:text-2xl font-black text-gray-900 truncate tracking-tight">{item.label}</span>
                    {item.sub && (
                      <span className="text-sm md:text-lg font-bold text-gray-500 tracking-tight">{item.sub}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            {/* Orange CTA Box - Slimmer design */}
            <div className="bg-[#f97316] py-4 px-6 md:py-6 md:px-10 rounded-2xl shadow-2xl border-b-[6px] border-orange-700 transform hover:scale-[1.01] transition-transform overflow-hidden">
              <div className="text-center space-y-2 md:space-y-3">
                <p className="text-white text-[4.4vw] sm:text-xl md:text-2xl lg:text-3xl font-black tracking-tighter leading-none whitespace-nowrap">
                  いいねAI導入により3倍以上の成長を実現
                </p>
                <div className="w-12 h-0.5 bg-white/30 mx-auto rounded-full"></div>
                <p className="text-white text-base md:text-xl font-bold tracking-tight opacity-95">
                  導入後すぐに効果を実感
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};