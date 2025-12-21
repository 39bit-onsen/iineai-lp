import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export const ProblemSolution: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-red-600 pb-4 inline-block">
            SNS運用におけるよくある課題
          </h2>
          
          <div className="space-y-6 text-lg">
            <div className="flex flex-col md:flex-row items-start md:items-center bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
              <span className="font-bold text-gray-700 min-w-[120px]">人的コスト：</span>
              <span className="text-gray-600">担当者の工数負担（平均72時間/月）</span>
              <ArrowRight className="mx-4 text-red-600 hidden md:block" />
              <ChevronDown className="my-2 text-red-600 md:hidden" />
              <span className="font-bold text-red-700 text-xl">（導入後：平均12分／月）</span>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
              <span className="font-bold text-gray-700 min-w-[120px]">外注コスト：</span>
              <span className="text-gray-600">運用代行費用（月額 20 万円～）</span>
              <ArrowRight className="mx-4 text-red-600 hidden md:block" />
              <ChevronDown className="my-2 text-red-600 md:hidden" />
              <div className="flex flex-col">
                <span className="font-bold text-red-700 text-xl">導入後：月額1万円～</span>
                <span className="text-xs text-red-500 font-bold">（1日わずか300円〜 ／ ペットボトル約2本分）</span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
              <span className="font-bold text-gray-700 min-w-[120px]">成果課題：</span>
              <span className="text-gray-600">投稿数不足、エンゲージメント率低下、ノウハウの属人化</span>
            </div>
          </div>
        </div>

        <div className="bg-red-600 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl relative overflow-hidden print:bg-white print:text-black print:border print:border-gray-300">
          <div className="absolute top-0 left-0 w-full h-full bg-white opacity-5 transform -skew-x-12 scale-150 print:hidden"></div>
          
          <p className="text-red-100 font-bold mb-4 tracking-widest relative z-10 print:text-gray-600">SNS運用超効率化AIツール</p>
          <h3 className="text-5xl md:text-7xl font-black italic mb-6 relative z-10">
            いいねAI<span className="text-2xl not-italic ml-2 align-middle">で</span>
          </h3>
          <h4 className="text-2xl md:text-4xl font-bold mb-4 relative z-10">
            効率的＋高品質の内製化を実現し
          </h4>
          <p className="text-xl md:text-3xl font-bold bg-white text-red-600 py-2 px-6 rounded-full inline-block relative z-10 print:bg-transparent print:text-black print:border print:border-black">
            上記の課題を解決
          </p>

          <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-8 relative z-10 print:hidden">
             <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20">
                <p className="text-sm opacity-80">外注コスト 月額20万円〜</p>
                <div className="text-4xl font-bold my-2">↓</div>
                <div className="flex flex-col items-center">
                  <p className="text-5xl font-black text-yellow-300">1日300円〜</p>
                  <p className="text-sm font-bold text-white mt-1">（月額1万円〜）</p>
                </div>
             </div>
             <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20">
                <p className="text-sm opacity-80">運用工数を</p>
                <p className="text-6xl font-black text-yellow-300">93<span className="text-3xl">%</span></p>
                <p className="text-xl font-bold">削減</p>
             </div>
          </div>
          
          <p className="mt-8 text-sm text-red-100 font-bold relative z-10 opacity-80">
            ※月額費用を30日で換算。少額の投資で、プロ級のSNS運用体制を社内に構築できます。
          </p>
        </div>
      </div>
    </section>
  );
};