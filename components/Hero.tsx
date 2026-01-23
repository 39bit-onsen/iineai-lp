import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative hero-split-bg pt-20 pb-20 overflow-hidden min-h-[850px] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Logo & Info */}
          <div className="lg:col-span-5 text-center lg:text-left z-10 flex flex-col items-center lg:items-start space-y-8">
            <div className="w-full">
              <img 
                src="https://cdn.jsdelivr.net/gh/39bit-onsen/CDNmy@main/assets/iine_ai_logo_full.png" 
                alt="いいねAI - SNS運用超効率化AIツール"
                className="w-full max-w-lg mx-auto lg:mx-0 object-contain drop-shadow-md"
              />
            </div>

            <p className="text-brand-600 text-lg font-bold leading-relaxed max-w-sm">
              AI de SNS運用を簡単・効率化する新時代ツールをご紹介いたします。
            </p>

            {/* horizontal badge (Longer) */}
            <div className="bg-[#8cc63f] text-white py-1.5 w-full max-w-lg text-center font-bold text-xl rounded-sm shadow-md tracking-widest">
              特許出願済
            </div>

            {/* Real Brand SNS icons - Now linked to official accounts */}
            <div className="flex justify-center items-center gap-8 py-2 w-full max-w-lg">
              <a href="https://www.instagram.com/iineai.sns/" target="_blank" rel="noopener noreferrer">
                <img 
                  src="https://cdn.jsdelivr.net/gh/39bit-onsen/CDNmy@main/assets/instagram.png" 
                  className="h-12 w-auto drop-shadow-sm transition-transform hover:scale-110" 
                  alt="Instagram" 
                />
              </a>
              <a href="https://x.com/iineAI_sns" target="_blank" rel="noopener noreferrer">
                <img 
                  src="https://cdn.jsdelivr.net/gh/39bit-onsen/CDNmy@main/assets/x.png" 
                  className="h-11 w-auto drop-shadow-sm transition-transform hover:scale-110" 
                  alt="X" 
                />
              </a>
              <a href="https://www.youtube.com/@%E3%81%84%E3%81%84%E3%81%ADAI" target="_blank" rel="noopener noreferrer">
                <img 
                  src="https://cdn.jsdelivr.net/gh/39bit-onsen/CDNmy@main/assets/youtube.png" 
                  className="h-10 w-auto drop-shadow-sm transition-transform hover:scale-110" 
                  alt="YouTube" 
                />
              </a>
              <a href="https://www.tiktok.com/@iineai_sns" target="_blank" rel="noopener noreferrer">
                <img 
                  src="https://cdn.jsdelivr.net/gh/39bit-onsen/CDNmy@main/assets/tiktok.png" 
                  className="h-12 w-auto drop-shadow-sm transition-transform hover:scale-110" 
                  alt="TikTok" 
                />
              </a>
            </div>

            <div className="pt-4 no-print w-full max-w-lg flex justify-center">
              <a 
                href="#demo" 
                className="bg-brand-600 hover:bg-brand-700 text-white font-black py-5 px-14 rounded-full shadow-2xl transition-all inline-block text-2xl animate-subtle-pulse border-4 border-white"
              >
                 詳細資料ダウンロード
              </a>
            </div>
          </div>

          {/* Middle Column: Device Mockup */}
          <div className="lg:col-span-3 flex justify-center relative z-20">
            <div className="relative w-[280px] h-[580px] bg-black rounded-[3rem] border-8 border-gray-900 shadow-2xl overflow-hidden transform rotate-2">
                <div className="absolute top-0 w-full h-8 bg-black z-30 flex justify-center rounded-b-xl">
                   <div className="w-1/3 h-4 bg-gray-800 rounded-b-xl"></div>
                </div>
                <div className="w-full h-full bg-white flex items-center justify-center overflow-hidden">
                    <img 
                      src="https://cdn.jsdelivr.net/gh/39bit-onsen/CDNmy@main/assets/phone.png" 
                      alt="いいねAI アプリ画面デモ"
                      className="w-full h-full object-contain"
                    />
                </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/20 rounded-full blur-3xl -z-10"></div>
          </div>

          {/* Right Column: Key Phrase */}
          <div className="lg:col-span-4 flex flex-col justify-center z-10 text-white lg:text-black mt-12 lg:mt-0">
            <div className="p-6 rounded-2xl backdrop-blur-sm lg:backdrop-blur-none">
              <div className="space-y-4 text-3xl sm:text-4xl md:text-5xl font-black leading-tight drop-shadow-md lg:drop-shadow-none text-white lg:text-gray-900">
                <p className="whitespace-nowrap">SNS運用、</p>
                <p className="whitespace-nowrap">外注するほどでもない。</p>
                <p className="whitespace-nowrap">切実な現場を</p>
                <p className="whitespace-nowrap">AIが救います。</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};