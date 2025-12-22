import React from 'react';

export const AutomationGuide: React.FC = () => {
  return (
    <section className="pt-20 pb-0 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Left Side: Catchphrase and Logo */}
          <div className="w-full lg:w-5/12 flex flex-col items-center">
            <div className="text-center mb-6">
              <p className="text-[#f97316] text-xl md:text-2xl font-bold mb-1">
                調査・企画・投稿・分析まで
              </p>
              <h2 className="text-[#f97316] font-black tracking-tighter whitespace-nowrap">
                <span className="text-3xl md:text-4xl align-middle mr-2">すべてが</span>
                <span className="text-5xl md:text-7xl align-middle">AI自動化</span>
              </h2>
            </div>
            
            <div className="mb-8 w-full max-w-[320px] lg:max-w-[420px]">
              <img 
                src="https://cdn.jsdelivr.net/gh/39bit-onsen/iineai-lp@main/assets/logotype_japanese.png" 
                alt="いいねAI"
                className="w-full h-auto object-contain drop-shadow-sm"
              />
            </div>

            <div className="text-center space-y-3">
              <p className="text-2xl md:text-3xl font-black text-gray-900 leading-tight">
                いいねAIで大幅な効率化を実現
              </p>
              <p className="text-base md:text-lg font-bold text-gray-600">
                作業時間の削減、運用の質の向上が大幅に見込めます！
              </p>
            </div>
          </div>

          {/* Center: Impactful Arrow */}
          <div className="hidden lg:flex items-center justify-center px-4">
            <div className="relative group">
              <svg width="60" height="80" viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-xl transform transition-transform group-hover:translate-x-2">
                <path d="M10 20L50 50L10 80" stroke="#f97316" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M30 20L70 50L30 80" stroke="#f97316" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
              </svg>
            </div>
          </div>

          {/* Right Side: Comparison Visualization */}
          <div className="w-full lg:w-6/12 bg-gray-50 p-1 md:p-2 rounded-xl shadow-inner">
            {/* Table Header */}
            <div className="bg-[#111827] text-white text-[11px] md:text-sm py-3 px-4 font-bold text-center rounded-t-lg">
              SNS運用に掛かる1ヶ月間の平均時間 <span className="font-normal opacity-70">（※動画10本制作と仮定）</span>
            </div>

            <div className="bg-white p-4 md:p-6 space-y-10 rounded-b-lg border-x border-b border-gray-200">
              
              {/* Row Rendering Function */}
              {[
                { label: '調査', traditional: '約12時間', ai: '1分', reduction: '99.8%', traditionalWidth: '40%', aiWidth: '2%' },
                { label: '企画・投稿作成', traditional: '約36時間', ai: '10分', reduction: '99.5%', traditionalWidth: '95%', aiWidth: '8%' },
                { label: '分析', traditional: '約24時間', ai: '1分', reduction: '99.9%', traditionalWidth: '70%', aiWidth: '2%' }
              ].map((row, idx) => (
                <div key={idx} className="flex items-center gap-2 md:gap-4 relative">
                  {/* Vertical Label */}
                  <div className="w-10 md:w-12 h-24 md:h-28 bg-[#4b5563] flex items-center justify-center text-[10px] md:text-xs font-bold text-white [writing-mode:vertical-rl] leading-none rounded-lg shadow-sm">
                    {row.label}
                  </div>
                  
                  <div className="flex-1 flex items-center gap-2 md:gap-6">
                    {/* Graphs and Middle Value */}
                    <div className="flex-1 space-y-4">
                      {/* Traditional */}
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] md:text-xs font-bold text-gray-400 w-8 whitespace-nowrap">従来</span>
                        <div className="flex-1 h-5 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-[#d1d5db] rounded-full" style={{ width: row.traditionalWidth }}></div>
                        </div>
                        <span className="text-sm md:text-xl font-black text-[#9ca3af] whitespace-nowrap min-w-[70px] text-right">{row.traditional}</span>
                      </div>

                      {/* After (with Orange Border Box showing Reduction %) */}
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] md:text-xs font-bold text-[#f97316] w-10 whitespace-nowrap">導入後</span>
                        <div className="flex-1 h-5 bg-orange-50 rounded-full overflow-hidden">
                          <div className="h-full bg-[#f97316] rounded-full" style={{ width: row.aiWidth }}></div>
                        </div>
                        {/* THE ORANGE BORDER BOX - Now showing Reduction % */}
                        <div className="border-4 border-[#f97316] bg-white px-2 py-1 rounded-md min-w-[80px] flex items-center justify-center shadow-sm">
                          <span className="text-sm md:text-lg font-black text-[#f97316] whitespace-nowrap">
                            {row.reduction} <span className="text-[10px] font-bold">削減</span>
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Right Highlight Box (AI-powered reduction / Red Gradient Border portion) */}
                    <div className="relative p-1.5 rounded-2xl shadow-lg transform scale-110 lg:scale-125 bg-gradient-to-br from-brand-700 via-red-500 to-orange-400">
                      <div className="bg-[#f97316] text-white px-4 py-3 md:px-6 md:py-4 rounded-xl flex flex-col items-center justify-center min-w-[90px] md:min-w-[110px]">
                        <span className="text-[10px] md:text-xs font-bold mb-1 drop-shadow-sm">いいねAI</span>
                        <div className="flex items-baseline gap-0.5">
                          <span className="text-2xl md:text-4xl font-black leading-none">{row.ai.replace(/分|時間/, '')}</span>
                          <span className="text-xs md:text-sm font-bold">{row.ai.includes('分') ? '分' : 'h'}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>

      {/* Footer Orange Bar - Flush with bottom of section */}
      <div className="mt-20 bg-[#f97316] py-10 px-4 mb-0">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-white text-2xl md:text-4xl font-black leading-tight tracking-tight">
            「アイデアを考える時間」と「投稿準備の作業時間」を<br />
            大幅に削減することが可能！
          </h3>
        </div>
      </div>
    </section>
  );
};