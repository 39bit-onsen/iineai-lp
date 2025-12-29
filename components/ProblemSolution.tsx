import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export const ProblemSolution: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-[5.8vw] sm:text-3xl font-black text-gray-900 mb-8 border-b-4 border-brand-600 pb-2 inline-block tracking-tighter whitespace-nowrap">
            SNS運用におけるよくある課題
          </h2>
          
          <div className="space-y-4 text-base md:text-lg">
            <div className="flex flex-col md:flex-row items-start md:items-center bg-gray-50 p-4 rounded-xl border-l-4 border-gray-400 shadow-sm">
              <span className="font-black text-gray-700 min-w-[100px] text-sm md:text-base">人的コスト：</span>
              <span className="text-gray-600 font-bold text-sm md:text-base">担当者の工数負担（平均72時間/月）</span>
              <ArrowRight className="mx-4 text-brand-600 hidden md:block" />
              <ChevronDown className="my-1 text-brand-600 md:hidden" />
              <span className="font-black text-brand-700 text-lg md:text-xl tracking-tight">（導入後：平均12分／月）</span>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center bg-gray-50 p-4 rounded-xl border-l-4 border-gray-400 shadow-sm">
              <span className="font-black text-gray-700 min-w-[100px] text-sm md:text-base">外注コスト：</span>
              <span className="text-gray-600 font-bold text-sm md:text-base">運用代行費用（月額 20 万円～）</span>
              <ArrowRight className="mx-4 text-brand-600 hidden md:block" />
              <ChevronDown className="my-1 text-brand-600 md:hidden" />
              <div className="flex flex-col">
                <span className="font-black text-brand-700 text-lg md:text-xl tracking-tight">導入後：月額1万円～</span>
                <span className="text-[10px] md:text-xs text-brand-500 font-black">（1日わずか300円〜 ／ ペットボトル約2本分）</span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center bg-gray-50 p-4 rounded-xl border-l-4 border-gray-400 shadow-sm">
              <span className="font-black text-gray-700 min-w-[100px] text-sm md:text-base">成果課題：</span>
              <span className="text-gray-600 font-bold text-sm md:text-base">投稿数不足、エンゲージメント低下、属人化</span>
            </div>
          </div>
        </div>

        <div className="bg-brand-600 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl relative overflow-hidden print:bg-white print:text-black print:border print:border-gray-300">
          <div className="absolute top-0 left-0 w-full h-full bg-white opacity-5 transform -skew-x-12 scale-150 print:hidden"></div>
          
          <p className="text-brand-100 font-black mb-4 tracking-[0.2em] text-xs md:text-sm relative z-10 print:text-gray-600">SNS運用超効率化AIツール</p>
          <h3 className="text-[12vw] md:text-7xl font-black italic mb-6 relative z-10 leading-none">
            いいねAI<span className="text-[4vw] md:text-2xl not-italic ml-2 align-middle">で</span>
          </h3>
          <h4 className="text-[5vw] md:text-4xl font-black mb-4 relative z-10 tracking-tighter">
            効率的＋高品質の内製化を実現
          </h4>
          <p className="text-base md:text-3xl font-black bg-white text-brand-600 py-2 px-6 rounded-full inline-block relative z-10 shadow-lg print:bg-transparent print:text-black print:border print:border-black">
            上記の課題をすべて解決
          </p>

          <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 relative z-10 print:hidden">
             <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20 w-full max-w-[280px]">
                <p className="text-xs font-bold opacity-80">外注コスト 月額20万円〜</p>
                <div className="text-3xl font-black my-2">↓</div>
                <div className="flex flex-col items-center">
                  <p className="text-4xl md:text-5xl font-black text-yellow-300 tracking-tighter">1日300円〜</p>
                  <p className="text-[10px] md:text-sm font-black text-white mt-1">（月額1万円〜）</p>
                </div>
             </div>
             <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20 w-full max-w-[280px]">
                <p className="text-xs font-bold opacity-80">運用工数を</p>
                <p className="text-5xl md:text-6xl font-black text-yellow-300 tracking-tighter">93<span className="text-2xl md:text-3xl">%</span></p>
                <p className="text-lg md:text-xl font-black">削減</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};