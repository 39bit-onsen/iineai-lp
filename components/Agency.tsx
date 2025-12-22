import React from 'react';
import { ChevronRight } from 'lucide-react';

export const Agency: React.FC = () => {
  return (
    <section className="py-16 bg-brand-600 overflow-hidden relative text-white print:bg-white print:text-black">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Side: Text and Benefits */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-8 bg-white rounded-full"></div>
                <h2 className="text-2xl md:text-4xl font-black tracking-tight">販売代理店募集中</h2>
              </div>
              
              <div className="space-y-3">
                <p className="text-lg md:text-xl font-bold leading-relaxed">
                  「いいねAI」を広めていただけるパートナー様を募集しております。
                </p>
                <p className="text-base md:text-lg font-bold opacity-90">
                  充実した管理画面とサポート体制で、貴社の新しい収益源を創出します。
                </p>
              </div>
            </div>
            
            {/* Benefits Box - Red Translucent */}
            <div className="bg-white/10 p-6 rounded-2xl border border-white/20 shadow-xl">
               <h3 className="text-lg md:text-xl font-black mb-4 flex items-center gap-2">
                 <span className="text-yellow-300">★</span> 代理店特典
               </h3>
               <ul className="space-y-3">
                 {[
                   'ストック型の紹介料収益（毎月自動入金）',
                   '2次代理店制度による報酬アップ',
                   '自社利用も20%OFFで可能'
                 ].map((item, idx) => (
                   <li key={idx} className="flex items-start gap-2 text-base md:text-lg font-bold">
                      <ChevronRight className="text-white mt-1 flex-shrink-0" size={20} />
                      <span>{item}</span>
                   </li>
                 ))}
               </ul>
            </div>
          </div>
          
          {/* Right Side: Simulation Card */}
          <div className="bg-white text-gray-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col">
            <div className="p-6 md:p-8 flex-grow">
              <h3 className="text-xl font-black mb-6 text-center text-gray-900">
                紹介料シミュレーション
              </h3>
              
              <div className="space-y-6">
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-1 border-b border-gray-100 pb-4">
                      <div className="space-y-0.5">
                        <div className="text-xs text-gray-400 font-bold">一次販売代理店（20%報酬）</div>
                        <div className="font-black text-gray-800 text-base">50件獲得/月</div>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl md:text-3xl font-black text-red-600">¥1,000,000</span>
                        <span className="text-xs text-gray-400 font-bold ml-1">/月</span>
                      </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-1 border-b border-gray-100 pb-4">
                      <div className="space-y-0.5">
                        <div className="text-xs text-gray-400 font-bold">二次販売代理店（10%報酬）</div>
                        <div className="font-black text-gray-800 text-base">50件獲得/月</div>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl md:text-3xl font-black text-red-600">¥500,000</span>
                        <span className="text-xs text-gray-400 font-bold ml-1">/月</span>
                      </div>
                  </div>
              </div>
            </div>

            {/* Dark Button at the bottom of the card */}
            <div className="p-5 md:p-6 pt-0 no-print">
                 <button className="w-full bg-[#111827] text-white font-black py-4 px-6 rounded-xl hover:bg-black transition-all shadow-xl text-lg transform hover:-translate-y-0.5">
                    代理店について問い合わせる
                 </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};