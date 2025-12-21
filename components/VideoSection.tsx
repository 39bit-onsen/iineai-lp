import React from 'react';

export const VideoSection: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Column: Video Placeholder/Player */}
          <div className="w-full lg:w-3/5">
            <div className="relative group shadow-2xl rounded-3xl overflow-hidden border-8 border-gray-50 bg-gray-900 aspect-video flex items-center justify-center">
              {/* Overlay with Play Button */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-all cursor-pointer z-10">
                <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center shadow-2xl transform transition-transform group-hover:scale-110">
                   <div className="w-0 h-0 border-t-[14px] border-t-transparent border-l-[24px] border-l-white border-b-[14px] border-b-transparent ml-1"></div>
                </div>
              </div>
              
              {/* Sample Background Visual (Placeholder) */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black flex flex-col items-center justify-center">
                 <h3 className="text-4xl font-black text-white/20 italic tracking-tighter">IINE AI CONCEPT</h3>
              </div>

              {/* Bottom Info Bar inside video frame */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 z-20">
                 <p className="text-white font-bold text-lg">SNS運用の常識を変える「いいねAI」のすべて</p>
              </div>
            </div>
            {/* Title below video as per framework */}
            <p className="mt-4 text-gray-400 text-sm font-medium text-center lg:text-left">
              ※クリックすると紹介用コンセプトムービーが再生されます
            </p>
          </div>

          {/* Right Column: Text Content */}
          <div className="w-full lg:w-2/5 text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 bg-brand-600 text-white font-black rounded-sm text-xs mb-8 tracking-widest uppercase shadow-sm">
              Concept Movie
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-[1.3] mb-8">
              なぜ多くの<br />
              SNS運用担当者が<br />
              <span className="text-brand-600 underline decoration-brand-100 decoration-8 underline-offset-8">「いいねAI」</span>を選ぶのか？
            </h2>
            
            <div className="space-y-6 mb-10">
              <p className="text-gray-700 text-xl font-bold leading-relaxed">
                最新のAI技術がもたらす革新と、<br className="hidden md:block" />
                圧倒的な成果の裏側をこの動画で詳しく解説しています。
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start pt-6 border-t border-gray-100">
              <div className="flex -space-x-3 overflow-hidden">
                {[1,2,3,4].map(i => (
                  <div key={i} className="inline-block h-12 w-12 rounded-full ring-4 ring-white bg-gray-200 border border-gray-300">
                    <img src={`https://i.pravatar.cc/150?u=${i+10}`} alt="user" className="rounded-full" />
                  </div>
                ))}
              </div>
              <div className="text-left">
                <p className="text-sm font-black text-gray-900">
                  累計導入社数 1,200社突破
                </p>
                <p className="text-xs text-gray-500 font-bold">
                  SNSマーケター・代理店が続々と導入中
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};