
import React, { useState } from 'react';
import { Play, ExternalLink } from 'lucide-react';

export const OfficialVideos: React.FC = () => {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const handlePlay = (index: number) => {
    setPlayingIndex(index);
  };

  return (
    <section className="py-24 bg-orange-50 relative overflow-hidden border-y border-orange-100">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `radial-gradient(#1e293b 1px, transparent 0)`, backgroundSize: '40px 40px' }}></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1 bg-brand-600 text-white text-xs font-black rounded-full mb-6 tracking-[0.2em] shadow-sm">
            OFFICIAL CONTENTS
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
            公式紹介動画
          </h2>
          <div className="w-24 h-2 bg-gradient-to-r from-brand-600 to-orange-400 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-24">
          {/* Video 1: Industry First Video */}
          <div className="group flex flex-col items-center">
            <div className="w-full mb-10 text-center px-4">
              <div className="flex items-center justify-center gap-2 mb-3">
                <span className="bg-gray-800 text-white text-[10px] font-black px-2 py-0.5 rounded tracking-widest">FULL DEMO</span>
              </div>
              <h3 className="text-2xl md:text-4xl font-black text-gray-800 mb-4 group-hover:text-brand-600 transition-colors duration-300 tracking-tight leading-tight">
                {/* Responsive Title for Video 1 */}
                <span className="md:hidden">
                  【業界初】<br />SNS運用がAIで自動化！
                </span>
                <span className="hidden md:inline">
                  【業界初】SNS運用がAIで自動化！
                </span>
              </h3>
              <p className="hidden md:block text-base md:text-xl text-gray-500 font-bold max-w-3xl mx-auto leading-relaxed">
                SNS運用の未来を実演。最新のAI技術により、企画から投稿までを完全自動化する「いいねAI」の真価をご覧ください。
              </p>
            </div>

            <div className="relative w-full aspect-video rounded-[2rem] overflow-hidden shadow-2xl border-[6px] border-white bg-gray-900">
              {playingIndex === 0 ? (
                <iframe className="absolute inset-0 w-full h-full" src={`https://www.youtube.com/embed/otH3NQSWxVY?autoplay=1&controls=1`} title="【業界初】SNS運用がAIで自動化！" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              ) : (
                <>
                  <div className="absolute inset-0 cursor-pointer" onClick={() => handlePlay(0)}>
                    <img src="https://img.youtube.com/vi/otH3NQSWxVY/maxresdefault.jpg" alt="【業界初】SNS運用がAIで自動化！" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center z-10 cursor-pointer" onClick={() => handlePlay(0)}>
                    <div className="w-24 h-24 md:w-32 md:h-32 bg-brand-600 text-white rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-500 border-4 border-white/30 backdrop-blur-sm">
                      <Play size={48} className="fill-current ml-2" />
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Video 2: Concept Video */}
          <div className="group flex flex-col items-center">
            <div className="w-full mb-10 text-center px-4">
              <div className="flex items-center justify-center gap-2 mb-3">
                <span className="bg-gray-800 text-white text-[10px] font-black px-2 py-0.5 rounded tracking-widest">CONCEPT</span>
              </div>
              <h3 className="text-2xl md:text-4xl font-black text-gray-800 mb-4 group-hover:text-brand-600 transition-colors duration-300 tracking-tight leading-tight">
                {/* Responsive Title for Video 2 */}
                <span className="md:hidden">
                  【いいねAI】コンセプト<br />機能紹介ムービー
                </span>
                <span className="hidden md:inline">
                  【いいねAI】コンセプト・機能紹介ムービー
                </span>
              </h3>
              <p className="hidden md:block text-base md:text-xl text-gray-500 font-bold max-w-3xl mx-auto leading-relaxed">
                SNS運用の常識を覆す「いいねAI」の主要コンセプトと革新的な機能をダイジェストで紹介します。
              </p>
            </div>

            <div className="relative w-full aspect-video rounded-[2rem] overflow-hidden shadow-2xl border-[6px] border-white bg-gray-900">
              {playingIndex === 1 ? (
                <iframe className="absolute inset-0 w-full h-full" src={`https://www.youtube.com/embed/Nnw1d2GP_sg?autoplay=1&controls=1`} title="コンセプト紹介ムービー" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              ) : (
                <>
                  <div className="absolute inset-0 cursor-pointer" onClick={() => handlePlay(1)}>
                    <img src="https://img.youtube.com/vi/Nnw1d2GP_sg/maxresdefault.jpg" alt="コンセプト紹介ムービー" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center z-10 cursor-pointer" onClick={() => handlePlay(1)}>
                    <div className="w-24 h-24 md:w-32 md:h-32 bg-brand-600 text-white rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-500 border-4 border-white/30 backdrop-blur-sm">
                      <Play size={48} className="fill-current ml-2" />
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Youtube Link Action Card */}
        <div className="mt-28 text-center px-4">
          <a 
            href="https://www.youtube.com/@%E3%81%84%E3%81%84%E3%81%ADAI" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex flex-col md:flex-row items-center gap-4 md:gap-6 bg-white px-8 md:px-12 py-6 md:py-8 rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl hover:shadow-brand-600/10 transition-all border border-gray-100 group overflow-hidden relative w-full md:w-auto"
          >
            <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-45 -translate-x-full group-hover:animate-[shine_1.5s_ease-in-out_infinite]"></div>
            
            <div className="flex items-center gap-4 relative z-10">
              <div className="p-1 group-hover:scale-110 transition-transform duration-500">
                <img 
                  src="https://cdn.jsdelivr.net/gh/39bit-onsen/CDNmy@main/assets/youtube.png" 
                  alt="YouTube Logo"
                  className="h-8 md:h-12 w-auto object-contain drop-shadow-sm"
                />
              </div>
              <div className="text-left">
                <span className="block text-gray-900 font-black text-xl md:text-3xl tracking-tighter leading-none mb-1 whitespace-nowrap">
                  <span className="sm:hidden">公式チャンネル</span>
                  <span className="hidden sm:inline">公式YouTubeチャンネル</span>
                </span>
                <span className="block text-gray-400 text-[10px] md:text-xs font-bold tracking-widest uppercase">Official Channel</span>
              </div>
            </div>
            
            <div className="flex items-center gap-3 text-brand-600 font-black text-base md:text-xl border-t md:border-t-0 md:border-l border-gray-200 pt-4 md:pt-0 md:pl-8 relative z-10 w-full md:w-auto justify-center md:justify-start">
              <span>活用動画をチェック</span>
              <div className="p-2 bg-brand-50 rounded-full group-hover:translate-x-1 transition-transform">
                {/* Fixed responsive icon size by removing invalid md:size prop and using Tailwind classes */}
                <ExternalLink className="w-5 h-5 md:w-6 md:h-6" strokeWidth={3} />
              </div>
            </div>
          </a>
          
          <p className="mt-8 text-gray-400 font-bold text-sm">
            最新機能や導入事例を随時アップロード中
          </p>
        </div>
      </div>
    </section>
  );
};
