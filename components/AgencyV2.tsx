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
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-600/20 border border-brand-600/30 rounded-full text-brand-400 text-sm font-black tracking-widest uppercase">
                New Service Plan
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight">
                SNS運用、プロに<br />
                <span className="text-brand-500">「丸投げ」</span>しませんか？
              </h2>
              <p className="text-lg md:text-xl font-bold text-slate-300 leading-relaxed">
                リソース不足やノウハウ不足で止まっていませんか？<br />
                「いいねAI」を駆使するプロの運用チームが、企画から投稿まで貴社に代わって全て完結させます。
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: '企画・戦略立案', desc: '独自のAI分析でバズる企画を立案' },
                { title: '投稿作成・編集', desc: '高品質な画像・動画をプロが制作' },
                { title: '予約・自動投稿', desc: '最適なタイミングで24時間体制運用' },
                { title: '分析・レポート', desc: '毎月の成果を可視化し改善を提案' }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/5 p-5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <CheckCircle2 className="text-brand-500 w-5 h-5" />
                    <span className="font-black text-white">{item.title}</span>
                  </div>
                  <p className="text-xs text-slate-400 font-bold">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-brand-900/40 to-transparent rounded-2xl border-l-4 border-brand-600">
              <TrendingUp className="text-brand-500 w-10 h-10 flex-shrink-0" />
              <div>
                <p className="text-sm font-bold text-slate-400">プロ×AIのハイブリッド運用</p>
                <p className="text-lg font-black text-white">
                  従来の代行サービスの<span className="text-brand-500">1/5のコスト</span>で圧倒的な成果を。
                </p>
              </div>
            </div>
          </div>
          
          {/* Right Side: Pricing / Simulation Card */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-brand-600 to-orange-600 rounded-[2.5rem] blur-2xl opacity-20"></div>
            
            <div className="relative bg-white text-slate-900 rounded-[2rem] shadow-2xl overflow-hidden flex flex-col">
              <div className="p-8 md:p-10 border-b border-slate-100 bg-slate-50">
                <h3 className="text-2xl font-black mb-2 text-center">SNS運用丸投げプラン</h3>
                <p className="text-center text-slate-500 text-sm font-bold">プロが「いいねAI」をフル活用して運用代行</p>
                
                <div className="mt-8 flex flex-col items-center">
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm font-black text-slate-400">月額</span>
                    <span className="text-5xl md:text-6xl font-black text-brand-600 tracking-tighter">¥55,000〜</span>
                    <span className="text-sm font-black text-slate-400">（税込）</span>
                  </div>
                  <p className="mt-3 text-[10px] md:text-xs font-black text-brand-600 bg-brand-50 px-3 py-1 rounded-full tracking-widest">
                    ベーシックOne プラン 月額払い
                  </p>
                </div>
              </div>

              <div className="p-8 md:p-10 space-y-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm font-bold text-slate-600 pb-2 border-b border-slate-100">
                    <span>月間投稿数</span>
                    <span className="text-slate-900 font-black">10〜15本</span>
                  </div>
                  <div className="flex justify-between items-center text-sm font-bold text-slate-600 pb-2 border-b border-slate-100">
                    <span>ストーリーズ更新</span>
                    <span className="text-slate-900 font-black">週3回〜</span>
                  </div>
                  <div className="flex justify-between items-center text-sm font-bold text-slate-600 pb-2 border-b border-slate-100">
                    <span>コメント・DM返信</span>
                    <span className="text-slate-900 font-black">オプション対応</span>
                  </div>
                  <div className="flex justify-between items-center text-sm font-bold text-slate-600 pb-2 border-b border-slate-100">
                    <span>定例MTG・レポート</span>
                    <span className="text-slate-900 font-black">月1回（Zoom）</span>
                  </div>
                </div>

                <div className="bg-orange-50 p-4 rounded-xl border border-orange-100">
                  <div className="flex gap-3">
                    <Zap className="text-orange-500 w-5 h-5 flex-shrink-0" />
                    <p className="text-xs font-bold text-orange-800 leading-relaxed">
                      AIを活用することで、従来の運用代行では不可能だった「超低価格×高品質」を実現しました。投稿画像1枚のクオリティから分析精度まで、一切妥協しません。
                    </p>
                  </div>
                </div>

                <button className="group w-full bg-slate-900 text-white font-black py-5 px-6 rounded-2xl hover:bg-black transition-all shadow-xl text-lg flex items-center justify-center gap-3">
                  丸投げプランについて相談する
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};