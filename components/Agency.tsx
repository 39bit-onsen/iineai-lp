
import React from 'react';
import { ChevronRight } from 'lucide-react';

export const Agency: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-red-700 to-red-600 text-white print:bg-white print:text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 border-l-8 border-white pl-4 print:border-red-600">
          販売代理店募集中
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xl mb-6 leading-relaxed font-medium opacity-90">
              「いいねAI」を広めていただけるパートナー様を募集しております。<br/>
              充実した管理画面とサポート体制で、貴社の新しい収益源を創出します。
            </p>
            
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-md border border-white/20 mb-6 print:border-gray-300 print:text-black">
               <h3 className="text-xl font-bold mb-4 text-yellow-300 print:text-red-600">★ 代理店特典</h3>
               <ul className="space-y-3">
                 {['ストック型の紹介料収益（毎月自動入金）', '2次代理店制度による報酬アップ', '自社利用も20%OFFで可能'].map((item, idx) => (
                   <li key={idx} className="flex items-center gap-2">
                      <ChevronRight className="text-yellow-300 print:text-red-600" size={18} />
                      <span>{item}</span>
                   </li>
                 ))}
               </ul>
            </div>
          </div>
          
          <div className="bg-white text-gray-800 p-8 rounded-2xl shadow-2xl print:border print:border-gray-200 print:shadow-none">
            <h3 className="text-2xl font-bold mb-6 text-center border-b pb-4">紹介料シミュレーション</h3>
            <div className="space-y-6">
                <div>
                    <div className="text-sm text-gray-500 mb-1">一次販売代理店（20%報酬）</div>
                    <div className="flex justify-between items-end">
                        <span className="font-bold">50件獲得/月</span>
                        <span className="text-3xl font-black text-red-700">¥1,000,000<span className="text-sm text-gray-500 font-normal">/月</span></span>
                    </div>
                </div>
                 <div>
                    <div className="text-sm text-gray-500 mb-1">二次販売代理店（10%報酬）</div>
                    <div className="flex justify-between items-end">
                        <span className="font-bold">50件獲得/月</span>
                        <span className="text-3xl font-black text-red-700">¥500,000<span className="text-sm text-gray-500 font-normal">/月</span></span>
                    </div>
                </div>
            </div>
            <div className="mt-8 text-center no-print">
                 <button className="w-full bg-gray-900 text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-800 transition">
                    代理店について問い合わせる
                 </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
