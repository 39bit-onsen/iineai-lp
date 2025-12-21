import React from 'react';

export const IntroductionEffect: React.FC = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
          
          {/* Left Column: Visuals (40% width) */}
          <div className="w-full lg:w-2/5 flex flex-col items-center lg:items-start">
            {/* Increased height slightly to prevent overlap with the link below */}
            <div className="relative w-full max-w-[420px] h-[380px] md:h-[460px]">
              {/* Back Phone (InstagramB: Post View) */}
              <div className="absolute top-12 right-4 w-[180px] md:w-[210px] aspect-[9/19] bg-white rounded-[2rem] border-[6px] border-gray-100 shadow-xl overflow-hidden z-0 transform rotate-2">
                <img 
                  src="https://cdn.jsdelivr.net/gh/39bit-onsen/iineai-lp@main/assets/InstagramB.png" 
                  alt="Instagram Post Case" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Front Phone (InstagramA: Profile View) */}
              <div className="absolute top-0 left-4 w-[180px] md:w-[210px] aspect-[9/19] bg-white rounded-[2rem] border-[6px] border-gray-800 shadow-2xl overflow-hidden z-10 transform -rotate-1">
                {/* Selfie Camera Notch */}
                <div className="absolute top-0 w-full h-5 bg-gray-800 z-20 flex justify-center rounded-b-xl">
                  <div className="w-12 h-2 bg-black rounded-full mt-1"></div>
                </div>
                <img 
                  src="https://cdn.jsdelivr.net/gh/39bit-onsen/iineai-lp@main/assets/InstagramA.png" 
                  alt="Instagram Profile Case" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Case Link - Moved further down to avoid overlap */}
            <div className="mt-8 md:mt-12 text-center lg:text-left w-full pl-4">
              <a 
                href="https://iine-ai.com/cases/shokuhin/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cyan-600 hover:underline text-xs md:text-sm font-medium tracking-wide"
              >
                https://iine-ai.com/cases/shokuhin/
              </a>
            </div>
          </div>

          {/* Right Column: Text Content (60% width) */}
          <div className="w-full lg:w-3/5 space-y-6 md:space-y-8">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-gray-900 tracking-tighter leading-none">
              導入成果（約1ヶ月で実現）
            </h2>

            <ul className="space-y-2 md:space-y-3">
              {[
                { label: '投稿数3倍増', sub: '（月間6件程度 → 15-20件に）' },
                { label: 'フォロワー増加数3倍以上', sub: '（1日3-5人 → 10人以上に）' },
                { label: 'フォロワー外リーチ大幅向上', sub: '' },
                { label: 'コメント数増加によるエンゲージメント向上', sub: '' },
                { label: '投稿作成時間の大幅短縮', sub: '' },
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 border-b border-gray-100 pb-1.5 md:pb-2">
                  <span className="text-lg md:text-xl font-bold text-gray-400 flex-shrink-0">•</span>
                  <div className="flex items-baseline gap-2 whitespace-nowrap overflow-hidden">
                    <span className="text-base md:text-xl lg:text-2xl font-black text-gray-900 truncate tracking-tight">{item.label}</span>
                    {item.sub && (
                      <span className="text-[10px] md:text-base lg:text-lg font-bold text-gray-500 tracking-tight">{item.sub}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            {/* Orange CTA Box - Refined padding and single line text */}
            <div className="bg-[#f97316] p-5 md:p-6 lg:p-8 rounded-xl shadow-lg border-b-4 border-orange-700">
              <div className="text-center space-y-1.5 md:space-y-2">
                <p className="text-white text-lg md:text-2xl lg:text-3xl font-black tracking-tight whitespace-nowrap overflow-hidden text-ellipsis">
                  いいねAI導入により3倍以上の成長を実現
                </p>
                <p className="text-white text-base md:text-xl lg:text-2xl font-bold tracking-tight opacity-90">
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