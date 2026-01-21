import React from 'react';
import { Check, Info } from 'lucide-react';
import { PLANS } from '../constants';

export const PlanList: React.FC = () => {
  return (
    <section id="plans" className="py-24 bg-slate-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight">
            プラン・料金
          </h2>
          <p className="text-gray-500 mt-4 font-bold text-lg">
            初期費用無料！5プロジェクト以上の同時契約で特別割引あり
          </p>
          <div className="w-20 h-1.5 bg-brand-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* 3D Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PLANS.map((plan, i) => (
            <div 
              key={i} 
              className={`relative flex flex-col rounded-[2rem] transition-all duration-200 group
                ${plan.isRecommended 
                  ? 'bg-brand-600 text-white border-2 border-brand-700 border-b-[12px] -translate-y-2' 
                  : 'bg-white text-gray-900 border-2 border-gray-200 border-b-[12px] hover:-translate-y-1'
                }
                active:translate-y-0 active:border-b-[4px] cursor-pointer
              `}
            >
              {/* Popular Badge */}
              {plan.isRecommended && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-yellow-400 text-brand-900 py-1.5 px-6 rounded-full text-xs font-black tracking-widest uppercase shadow-lg z-20 whitespace-nowrap">
                  Recommended
                </div>
              )}

              {/* Header: Name & Price */}
              <div className={`p-8 text-center border-b ${plan.isRecommended ? 'border-white/20' : 'border-gray-100'}`}>
                <h3 className="text-xl font-black mb-4 min-h-[3rem] flex items-center justify-center leading-tight">
                  {plan.name}
                </h3>
                <div className="mb-2">
                  <span className="text-xs font-bold block opacity-70 mb-1">月額（税込）</span>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-sm font-black">¥</span>
                    <span className="text-4xl md:text-5xl font-black tracking-tighter">{plan.price}</span>
                    <span className="text-sm font-bold opacity-70">/月</span>
                  </div>
                </div>
                <div className={`text-[10px] md:text-xs font-bold py-1 px-3 rounded-full inline-block mt-2 ${plan.isRecommended ? 'bg-white/20' : 'bg-gray-100 text-gray-500'}`}>
                  年払いなら実質 ¥{plan.annualPrice}
                </div>
              </div>

              {/* Body: Feature Details */}
              <div className="p-8 space-y-6 flex-grow">
                <div className="space-y-4">
                  <div className="flex flex-col">
                    <span className={`text-[10px] font-black uppercase tracking-wider mb-1 ${plan.isRecommended ? 'text-white/60' : 'text-gray-400'}`}>SNS登録数</span>
                    <div className="font-black text-lg">{plan.snsCount}</div>
                  </div>

                  <div className="flex flex-col">
                    <span className={`text-[10px] font-black uppercase tracking-wider mb-1 ${plan.isRecommended ? 'text-white/60' : 'text-gray-400'}`}>AI生成回数</span>
                    <div className="font-black text-lg flex items-baseline gap-1">
                      {plan.generationCount}
                      <span className="text-xs opacity-70">/ 月</span>
                    </div>
                    {plan.videoCount && (
                      <div className={`mt-1 text-xs font-black py-0.5 px-2 rounded inline-block w-fit ${plan.isRecommended ? 'bg-yellow-400 text-brand-900' : 'bg-brand-50 text-brand-600'}`}>
                        動画制作 {plan.videoCount}
                      </div>
                    )}
                  </div>

                  <div className="pt-4 space-y-3 border-t border-current opacity-10"></div>
                  
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${plan.isRecommended ? 'bg-white text-brand-600' : 'bg-emerald-500 text-white'}`}>
                      <Check size={14} strokeWidth={4} />
                    </div>
                    <span className="text-sm font-bold">予約投稿機能</span>
                  </div>

                  <div className="flex items-center gap-3">
                    {plan.features.analysis ? (
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${plan.isRecommended ? 'bg-white text-brand-600' : 'bg-emerald-500 text-white'}`}>
                        <Check size={14} strokeWidth={4} />
                      </div>
                    ) : (
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 border-2 ${plan.isRecommended ? 'border-white/30 text-white/30' : 'border-gray-200 text-gray-300'}`}>
                        <span className="text-xs font-black">-</span>
                      </div>
                    )}
                    <span className={`text-sm font-bold ${!plan.features.analysis && 'opacity-40'}`}>SNS高度分析レポート</span>
                  </div>
                </div>
              </div>

              {/* Footer: CTA Button */}
              <div className="p-6 pt-0">
                <a 
                  href="https://iine-ai.com/contact/" 
                  className={`block w-full py-4 px-4 rounded-xl font-black text-center text-sm transition-colors border-2 shadow-sm
                    ${plan.isRecommended 
                      ? 'bg-white text-brand-600 border-white hover:bg-brand-50' 
                      : 'bg-gray-900 text-white border-gray-900 hover:bg-black'
                    }
                  `}
                >
                  このプランで相談する
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <div className="mt-16 max-w-3xl mx-auto bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
            <Info size={20} />
          </div>
          <div>
            <p className="text-sm font-bold text-gray-700 leading-relaxed">
              全てのプランにおいて、初期費用は一切かかりません。最低契約期間は3ヶ月からとなります。
              5プロジェクト（アカウント）以上の同時ご契約をご検討の場合は、ボリュームディスカウントが適用されますので、別途お問い合わせください。
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};