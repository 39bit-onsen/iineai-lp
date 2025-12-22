import React, { useState } from 'react';

export const VideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const embedId = "4ooDakvthZo?si=KR0dZ9FnYn-CDMwN";
  const thumbnail = "https://img.youtube.com/vi/4ooDakvthZo/maxresdefault.jpg";

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Column: Video Player */}
          <div className="w-full lg:w-3/5">
            <div className="relative group shadow-2xl rounded-3xl overflow-hidden border-8 border-gray-50 bg-gray-900 aspect-video flex items-center justify-center">
              
              {isPlaying ? (
                /* YouTube Embed Iframe */
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${embedId}&autoplay=1&controls=1`}
                  title="いいねAI コンセプトムービー"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              ) : (
                /* Visual Placeholder Overlay */
                <>
                  <div className="absolute inset-0 cursor-pointer" onClick={() => setIsPlaying(true)}>
                    <img 
                      src={thumbnail} 
                      alt="いいねAI コンセプトムービー サムネイル" 
                      className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
                  </div>

                  {/* Overlay with Play Button */}
                  <div 
                    className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/5 transition-all cursor-pointer z-10"
                    onClick={() => setIsPlaying(true)}
                  >
                    <div className="w-24 h-24 bg-brand-600 rounded-full flex items-center justify-center shadow-2xl transform transition-transform group-hover:scale-110 border-4 border-white/30 backdrop-blur-sm">
                       <div className="w-0 h-0 border-t-[14px] border-t-transparent border-l-[24px] border-l-white border-b-[14px] border-b-transparent ml-1"></div>
                    </div>
                  </div>
                  
                  {/* Bottom Info Bar inside video frame (Only shown when not playing) */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 z-20 pointer-events-none">
                     <p className="text-white font-bold text-lg">SNS運用の常識を変える「いいねAI」のすべて</p>
                  </div>
                </>
              )}
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
            
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-[1.3] mb-12">
              なぜ多くの<br />
              SNS運用担当者が<br />
              <span className="text-brand-600 underline decoration-brand-100 decoration-8 underline-offset-8">「いいねAI」</span>を選ぶのか？
            </h2>
            
            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start pt-8 border-t border-gray-100">
              <div className="flex -space-x-3 overflow-hidden">
                {[1,2,3,4].map(i => (
                  <div key={i} className="inline-block h-12 w-12 rounded-full ring-4 ring-white bg-white border border-gray-100 shadow-sm overflow-hidden">
                    <img 
                      src="https://cdn.jsdelivr.net/gh/39bit-onsen/iineai-lp@main/assets/favicon.png" 
                      alt="User Icon" 
                      className="w-full h-full object-contain p-2" 
                    />
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