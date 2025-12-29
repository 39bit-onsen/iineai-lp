import React from 'react';
import { CheckCircle2, TrendingUp, Zap, ArrowRight } from 'lucide-react';

export const AgencyV2: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 overflow-hidden relative text-white">
      {/* Decorative background components */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-600/10 skew-x-[-15deg] translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-orange-600/10 skew-x-[15deg] -translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Side: Problem Solving & Value Prop */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-600/20 border border-brand-600/30 rounded-full text-brand-400 text-[10px] md:text-xs font-black tracking-widest uppercase">
                New Service Plan
              </div>
              <h2 className="text-[7.5vw] sm:text-5xl font-black tracking-tighter leading-none">
                SNS運用、プロに<br className="block sm:hidden" />
                <span className="text-brand-500">「丸投げ」</span>しませんか？
              </h2>
              <p className="text-base md:text-xl font-bold text-slate-300 leading-relaxed tracking-tight">
                リソース不足やノウハウ不足で止まっていませんか？<br className="hidden md:block" />
                プロの運用チームが、企画から投稿まで貴社に代わって完結させます。
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {[
                { title: '企画・戦略立案', desc: '独自のAI分析でバズる企画を立案' },
                { title: '投稿作成・編集', desc: '高品質な画像・動画をプロが制作' },
                { title: '予約・自動投稿', desc: '最適なタイミングで24時間運用' },
                { title: '分析・レポート', desc: '成果を可視化し改善を提案' }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/5 p-4 md:p-5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-3 mb-1 md:mb-2">
                    <CheckCircle2 className="text-brand-500 w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                    <span className="font-black text-white text-sm md:text-base tracking-tight">{item.title}</span>
                  </div>
                  <p className="text-[10px] md:text-xs text-slate-400 font-bold">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 p-5 md:p-6 bg-gradient-to-r from-brand-900/40 to-transparent rounded-2xl border-l-4 border-brand-600">
              <TrendingUp className="text-brand-500 w-8 h-8 md:w-10 md:h-10 flex-shrink-0" />
              <div>
                <p className="text-[10px] md:text-sm font-bold text-slate-400">プロ×AIのハイブリッド運用</p>
                <p className="text-sm md:text-lg font-black text-white leading-tight">
                  従来の代行の<span className="text-brand-500">1/5のコスト</span>で圧倒的な成果を。
                </p>
              </div>
            </div>
          </div>
          
          {/* Right Side: Pricing / Simulation Card */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-brand-600 to-orange-600 rounded-[2.5rem] blur-2xl opacity-20"></div>
            
            <div className="relative bg-white text-slate-900 rounded-[2rem] shadow-2xl overflow-hidden flex flex-col mx-auto max-w-sm sm:max-w-none">
              <div className="p-6 md:p-10 border-b border-slate-100 bg-slate-50">
                <h3 className="text-lg md:text-2xl font-black mb-2 text-center tracking-tighter whitespace-nowrap overflow-hidden text-ellipsis">SNS運用丸投げプラン</h3>
                <p className="text-center text-slate-500 text-[10px] md:text-sm font-bold">プロが「いいねAI」をフル活用して運用代行</p>
                
                <div className="mt-6 md:mt-8 flex flex-col items-center">
                  <div className="flex items-baseline gap-1">
                    <span className="text-[10px] md:text-sm font-black text-slate-400">月額</span>
                    <span className="text-[9vw] sm:text-5xl md:text-6xl font-black text-brand-600 tracking-tighter">¥55,000〜</span>
                    <span className="text-[10px] md:text-sm font-black text-slate-400">（税込）</span>
                  </div>
                  <p className="mt-2 text-[9px] md:text-xs font-black text-brand-600 bg-brand-50 px-3 py-1 rounded-full tracking-tighter">
                    ベーシックOne プラン 月額払い
                  </p>
                </div>
              </div>

              <div className="p-6 md:p-10 space-y-6">
                <div className="space-y-3 md:space-y-4">
                  {[
                    { l: '月間投稿数', v: '10〜15本' },
                    { l: 'ストーリーズ更新', v: '週3回〜' },
                    { l: 'コメント・DM返信', v: 'オプション対応' },
                    { l: '定例MTG・レポート', v: '月1回（Zoom）' }
                  ].map((row, i) => (
                    <div key={i} className="flex justify-between items-center text-xs md:text-sm font-bold text-slate-600 pb-2 border-b border-slate-100">
                      <span>{row.l}</span>
                      <span className="text-slate-900 font-black">{row.v}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-orange-50 p-4 rounded-xl border border-orange-100">
                  <div className="flex gap-2">
                    <Zap className="text-orange-500 w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                    <p className="text-[10px] md:text-xs font-bold text-orange-800 leading-relaxed">
                      AI活用により、従来の運用代行では不可能だった「低価格×高品質」を実現。投稿クオリティから分析まで、一切妥協しません。
                    </p>
                  </div>
                </div>

                <button className="group w-full bg-slate-900 text-white font-black py-4 md:py-5 px-6 rounded-2xl hover:bg-black transition-all shadow-xl text-base md:text-lg flex items-center justify-center gap-3">
                  プランについて相談する
                  <ArrowRight className="group-hover:translate-x-1 transition-transform w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};