
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-white to-red-50 pt-24 pb-16 overflow-hidden">
      <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg no-print">
        特許出願済
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 text-center md:text-left z-10">
          <h2 className="text-orange-500 font-bold tracking-widest text-lg sm:text-xl mb-2">
            SNS運用 超効率化AIツール
          </h2>
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-black text-orange-500 italic leading-none mb-6 tracking-tighter">
            いいねAI
          </h1>
          <p className="text-gray-600 text-lg sm:text-xl font-medium mb-8 leading-relaxed">
            AIでSNS運用を簡単・効率化する新時代ツールをご紹介いたします。
          </p>

          <div className="flex justify-center md:justify-start gap-4 mb-8">
            {['IG', 'X', 'YT', 'Tk'].map((sns) => (
              <div key={sns} className="w-12 h-12 bg-white shadow-md rounded-xl flex items-center justify-center text-2xl">
                <span className={`font-bold ${sns === 'IG' ? 'text-pink-500' : sns === 'YT' ? 'text-red-600' : 'text-black'}`}>
                  {sns}
                </span>
              </div>
            ))}
          </div>
          
          <div className="bg-red-600 text-white p-4 rounded-lg shadow-lg inline-block text-left max-w-md">
            <div className="flex items-start">
              <div className="bg-yellow-400 text-yellow-900 font-bold rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0 border-4 border-yellow-200 mr-4 shadow-sm">
                認定
              </div>
              <div>
                <p className="font-bold text-lg">「いいねAI」は、</p>
                <p className="text-sm opacity-90">Instagram / X(旧Twitter) / YouTube / TikTok の<br/>
                <span className="font-bold text-yellow-300 underline decoration-2 underline-offset-2">公式認定を受けた安心のSNS運用ツール</span>です。</p>
              </div>
            </div>
          </div>

          <div className="mt-8 no-print">
            <a href="#demo" className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 rounded-full shadow-xl transition-transform transform hover:scale-105 inline-block text-xl">
               詳細資料ダウンロード
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2 mt-12 md:mt-0 relative flex justify-center print:hidden">
            <div className="relative w-[300px] h-[600px] bg-black rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden">
                <div className="absolute top-0 w-full h-8 bg-black z-20 flex justify-center rounded-b-xl">
                   <div className="w-1/3 h-4 bg-gray-800 rounded-b-xl"></div>
                </div>
                <div className="w-full h-full bg-white pt-10 px-4 overflow-y-auto no-scrollbar">
                    <div className="flex items-center justify-between mb-4">
                        <span className="font-bold text-orange-500">IineAI</span>
                        <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                    </div>
                    <div className="bg-white border rounded-xl shadow-sm mb-4 p-4">
                         <div className="w-full h-40 bg-red-50 rounded-lg mb-2 flex items-center justify-center">
                            <h3 className="text-4xl font-black text-orange-500 italic">いいねAI</h3>
                         </div>
                         <div className="space-y-2">
                             <div className="flex space-x-2">
                                <div className="w-6 h-6 rounded-full bg-red-100"></div>
                                <div className="w-6 h-6 rounded-full bg-blue-100"></div>
                                <div className="w-6 h-6 rounded-full bg-green-100"></div>
                             </div>
                             <p className="text-xs font-bold">いいね！ 1,234件</p>
                             <p className="text-xs text-gray-600">
                                 <span className="font-bold text-black">iine_ai</span> 毎日の投稿作成に悩んでいませんか？いいねAIなら、圧倒的なSNS運用業務を全て自動化！
                             </p>
                             <div className="text-xs text-red-700 font-bold bg-red-50 p-2 rounded">
                                <p>✅ AI投稿作成</p>
                                <p>✅ データ分析</p>
                                <p>✅ タスク管理</p>
                             </div>
                         </div>
                    </div>
                </div>
                <div className="absolute bottom-20 -right-12 w-24 h-24 bg-red-200 opacity-50 rounded-full animate-ping"></div>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600 rounded-full opacity-5 filter blur-3xl -z-10"></div>
        </div>
      </div>
    </section>
  );
};
