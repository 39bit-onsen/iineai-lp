import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative hero-split-bg pt-20 pb-20 overflow-hidden min-h-[850px] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Logo & Info */}
          <div className="lg:col-span-5 text-center lg:text-left z-10 flex flex-col items-center lg:items-start space-y-8">
            <div className="w-full">
              {/* Updated folder path to 'assets' */}
              <img 
                src="https://drive.google.com/uc?export=view&id=1g41ROPjmU1gw2rTx3UujoNo-_6Gn_CIK" 
                alt="いいねAI - SNS運用超効率化AIツール"
                className="w-full max-w-lg mx-auto lg:mx-0 object-contain drop-shadow-md"
              />
            </div>

            <p className="text-brand-600 text-lg font-bold leading-relaxed max-w-sm">
              AIでSNS運用を簡単・効率化する新時代ツールをご紹介いたします。
            </p>

            {/* horizontal badge (Longer) */}
            <div className="bg-[#8cc63f] text-white py-1.5 w-full max-w-lg text-center font-bold text-xl rounded-sm shadow-md tracking-widest">
              特許出願済
            </div>

            {/* Real Brand SNS icons from local 'assets' folder */}
            <div className="flex justify-center lg:justify-start items-center gap-8 py-2">
              <img 
                src="assets/instagram.png" 
                className="h-12 w-auto drop-shadow-sm transition-transform hover:scale-110" 
                alt="Instagram" 
              />
              <img 
                src="assets/x.png" 
                className="h-11 w-auto drop-shadow-sm transition-transform hover:scale-110" 
                alt="X" 
              />
              <img 
                src="assets/youtube.png" 
                className="h-10 w-auto drop-shadow-sm transition-transform hover:scale-110" 
                alt="YouTube" 
              />
              <img 
                src="assets/tiktok.png" 
                className="h-12 w-auto drop-shadow-sm transition-transform hover:scale-110" 
                alt="TikTok" 
              />
            </div>

            <div className="pt-4 no-print w-full flex justify-center lg:justify-start">
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
                <div className="absolute top-0 w-full h-8 bg-black z-20 flex justify-center rounded-b-xl">
                   <div className="w-1/3 h-4 bg-gray-800 rounded-b-xl"></div>
                </div>
                <div className="w-full h-full bg-white pt-10 px-4 overflow-y-auto no-scrollbar">
                    <div className="flex items-center justify-between mb-4">
                        <span className="font-bold text-orange-500 text-sm">投稿プレビュー</span>
                        <div className="w-6 h-6 flex items-center justify-center bg-gray-100 rounded">
                          <span className="text-xs">📥</span>
                        </div>
                    </div>
                    <div className="bg-white border rounded-xl shadow-sm mb-4 p-4">
                         <div className="w-full h-40 bg-gray-50 rounded-lg mb-2 flex items-center justify-center border border-gray-100">
                            <h3 className="text-3xl font-black text-orange-500 italic">いいねAI</h3>
                         </div>
                         <div className="space-y-2 mt-4">
                             <div className="flex space-x-2">
                                <div className="w-5 h-5 rounded-full bg-brand-100"></div>
                                <div className="w-5 h-5 rounded-full bg-blue-100"></div>
                                <div className="w-5 h-5 rounded-full bg-green-100"></div>
                             </div>
                             <p className="text-[10px] font-bold">いいね！ 1,234件</p>
                             <div className="text-[10px] text-gray-700 leading-tight">
                                 <span className="font-bold">line_ai</span> 毎日の投稿作成に悩んでいませんか？<br/>いいねAIなら、面倒なSNS運用業務を全て自動化！
                             </div>
                             <div className="text-[10px] text-green-700 font-bold bg-green-50 p-2 rounded space-y-1">
                                <p>✅ AI投稿作成</p>
                                <p>✅ データ分析</p>
                                <p>✅ タスク管理</p>
                                <p>✅ 資料保管</p>
                             </div>
                             <p className="text-[9px] text-gray-500">→最大93%の工数削減を実現！</p>
                         </div>
                    </div>
                    {/* UI Buttons at bottom */}
                    <div className="mt-4 border-t pt-4 flex justify-between gap-1">
                      {['メニュー', '分析', '投稿一覧', 'タスク', '資料'].map((label, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                          <div className={`w-8 h-8 rounded-lg ${idx === 2 ? 'bg-orange-500 text-white' : 'bg-gray-100'} flex items-center justify-center text-[10px]`}>
                            {idx === 2 ? '✍️' : '📊'}
                          </div>
                          <span className="text-[8px] mt-1 text-gray-500">{label}</span>
                        </div>
                      ))}
                    </div>
                </div>
            </div>
            {/* Background glowing circle behind phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/20 rounded-full blur-3xl -z-10"></div>
          </div>

          {/* Right Column: Key Phrase */}
          <div className="lg:col-span-4 flex flex-col justify-center z-10 text-white lg:text-black mt-12 lg:mt-0">
            <div className="p-6 rounded-2xl backdrop-blur-sm lg:backdrop-blur-none">
              <div className="space-y-4 text-3xl sm:text-4xl md:text-5xl font-black leading-tight drop-shadow-md lg:drop-shadow-none text-white lg:text-gray-900">
                <p>SNS運用、</p>
                <p>外注するほどでもない。</p>
                <p>でも、内製は回らない。</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
