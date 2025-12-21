import React, { useState } from 'react';
import { Play, ExternalLink } from 'lucide-react';

export const OfficialVideos: React.FC = () => {
  // 再生中の動画インデックスを管理するステート
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const videoItems = [
    {
      title: "【いいねAI】コンセプト・機能紹介ムービー",
      description: "AIがどのようにSNS運用を効率化するのか、実際の画面を交えて詳しく解説しています。",
      // YouTubeの動画IDから直接サムネイルを取得
      thumbnail: "https://img.youtube.com/vi/4ooDakvthZo/maxresdefault.jpg",
      tag: "CONCEPT",
      embedId: "4ooDakvthZo?si=KR0dZ9FnYn-CDMwN"
    },
    {
      title: "【いいねAI】コンセプト・機能紹介ムービー2",
      description: "AIがどのようにSNS運用を効率化するのか、実際の画面を交えて詳しく解説しています。",
      thumbnail: "https://img.youtube.com/vi/4ooDakvthZo/maxresdefault.jpg",
      tag: "DEMO",
      embedId: "4ooDakvthZo?si=KR0dZ9FnYn-CDMwN"
    }
  ];

  const handlePlay = (index: number) => {
    setPlayingIndex(index);
  };

  return (
    <section className="py-24 bg-[#f1f5f9] relative overflow-hidden border-t border-gray-200">
      {/* Background decoration: Subtle mesh pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `radial-gradient(#1e293b 1px, transparent 0)`, backgroundSize: '40px 40px' }}></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1 bg-brand-600 text-white text-xs font-black rounded-full mb-6 tracking-[0.2em] shadow-sm">
            OFFICIAL CONTENTS
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
            公式紹介動画
          </h2>
          <div className="w-24 h-2 bg-gradient-to-r from-brand-600 to-orange-400 mx-auto rounded-full shadow-sm"></div>
          <p className="mt-8 text-gray-600 font-bold text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            「いいねAI」の仕組みと活用方法を、<br className="hidden md:block" />
            実際の操作画面を交えて分かりやすく解説します。
          </p>
        </div>

        {/* Vertical Video List */}
        <div className="space-y-24">
          {videoItems.map((video, idx) => (
            <div key={idx} className="group flex flex-col items-center">
              
              {/* Video Info Above Player */}
              <div className="w-full mb-10 text-center px-4">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <span className="bg-gray-800 text-white text-[10px] font-black px-2 py-0.5 rounded tracking-widest">
                    {video.tag}
                  </span>
                  <div className="h-px w-8 bg-gray-300"></div>
                </div>
                <h3 className="text-2xl md:text-4xl font-black text-gray-800 mb-4 group-hover:text-brand-600 transition-colors duration-300 tracking-tight">
                  {video.title}
                </h3>
                <p className="text-base md:text-xl text-gray-500 font-bold max-w-3xl mx-auto leading-relaxed">
                  {video.description}
                </p>
              </div>

              {/* Video Player Frame */}
              <div className="relative w-full aspect-video rounded-[2rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border-[6px] border-white bg-gray-900 transition-all duration-700">
                
                {playingIndex === idx ? (
                  /* YouTube Embed Iframe */
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${video.embedId}&autoplay=1&controls=1`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                ) : (
                  /* Visual Placeholder Overlay */
                  <>
                    <div className="absolute inset-0">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title} 
                        className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
                    </div>

                    {/* Play Button Overlay */}
                    <div 
                      className="absolute inset-0 flex items-center justify-center z-10 cursor-pointer"
                      onClick={() => handlePlay(idx)}
                    >
                      <div className="w-24 h-24 md:w-32 md:h-32 bg-brand-600 text-white rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-500 border-4 border-white/30 backdrop-blur-sm">
                        <Play size={48} className="fill-current ml-2" />
                      </div>
                    </div>
                  </>
                )}

                {/* Bottom Reflection Overlay (Only shown when not playing) */}
                {playingIndex !== idx && (
                  <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
                )}
              </div>
              
              {/* Decorative Separator */}
              {idx === 0 && (
                <div className="mt-24 w-1/2 h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-30 rounded-full"></div>
              )}
            </div>
          ))}
        </div>

        {/* Youtube Link Action Card */}
        <div className="mt-28 text-center">
          <a 
            href="https://www.youtube.com/@いいねAI" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex flex-col md:flex-row items-center gap-6 bg-white px-12 py-8 rounded-[2.5rem] shadow-2xl hover:shadow-brand-600/10 transition-all border border-gray-100 group overflow-hidden relative"
          >
            {/* Hover Shine Effect */}
            <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-45 -translate-x-full group-hover:animate-[shine_1.5s_ease-in-out_infinite]"></div>
            
            <div className="flex items-center gap-4 relative z-10">
              <div className="p-1 group-hover:scale-110 transition-transform duration-500">
                <img 
                  src="https://cdn.jsdelivr.net/gh/39bit-onsen/iineai-lp@main/assets/youtube.png" 
                  alt="YouTube Logo"
                  className="h-10 md:h-12 w-auto object-contain drop-shadow-sm"
                />
              </div>
              <div className="text-left">
                <span className="block text-gray-900 font-black text-2xl md:text-3xl tracking-tighter leading-none mb-1">
                  公式YouTubeチャンネル
                </span>
                <span className="block text-gray-400 text-xs font-bold tracking-widest uppercase">Official Channel</span>
              </div>
            </div>
            
            <div className="flex items-center gap-3 text-brand-600 font-black text-xl border-t md:border-t-0 md:border-l border-gray-200 pt-6 md:pt-0 md:pl-8 relative z-10">
              <span>他の活用動画もチェック</span>
              <div className="p-2 bg-brand-50 rounded-full group-hover:translate-x-1 transition-transform">
                <ExternalLink size={24} strokeWidth={3} />
              </div>
            </div>
          </a>
          
          <p className="mt-8 text-gray-400 font-bold text-sm">
            最新機能や導入事例を随時アップロード中
          </p>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shine {
          100% {
            transform: translateX(250%) skewX(-45deg);
          }
        }
      `}} />
    </section>
  );
};