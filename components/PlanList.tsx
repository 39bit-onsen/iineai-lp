
import React from 'react';
import { Check } from 'lucide-react';
import { PLANS } from '../constants';

export const PlanList: React.FC = () => {
  return (
    <section id="plans" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2 border-l-8 border-orange-500 pl-4">
          「いいねAI」のプラン比較表
        </h2>
        <p className="text-gray-500 mb-12 ml-6">初期費用無料！同時に5プロジェクト以上の年間契約の場合【特別割引】あり！</p>

        {/* Mobile View */}
        <div className="md:hidden space-y-8">
          {PLANS.map((plan, i) => (
            <div key={i} className={`rounded-2xl overflow-hidden border-2 ${plan.isRecommended ? 'border-orange-500 shadow-xl' : 'border-gray-200 shadow-md'} print-break-inside-avoid`}>
              {plan.isRecommended && <div className="bg-orange-500 text-white text-center py-2 font-bold">おすすめ！</div>}
              <div className="p-6 text-center bg-gray-50">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="text-3xl font-black text-orange-600 mb-1">¥{plan.price}<span className="text-sm text-gray-500 font-normal">/月</span></div>
                <div className="text-sm text-gray-500">年払い: ¥{plan.annualPrice}/月相当</div>
              </div>
              <div className="p-6 bg-white">
                <ul className="space-y-3">
                  <li className="flex justify-between border-b pb-2">
                    <span className="text-gray-500">SNS種類</span>
                    <span className="font-bold">{plan.snsCount}</span>
                  </li>
                  <li className="flex justify-between border-b pb-2">
                    <span className="text-gray-500">生成回数</span>
                    <span className="font-bold">{plan.generationCount}</span>
                  </li>
                  {plan.videoCount && (
                    <li className="flex justify-between border-b pb-2">
                      <span className="text-gray-500">15秒動画</span>
                      <span className="font-bold text-orange-600">{plan.videoCount}</span>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-center border-collapse">
            <thead>
              <tr>
                <th className="p-4 bg-gray-100 text-left w-1/6 rounded-tl-lg">機能紹介</th>
                {PLANS.map((plan, i) => (
                  <th key={i} className={`p-4 w-1/6 ${plan.isRecommended ? 'bg-orange-50 border-t-4 border-orange-500' : 'bg-gray-50'}`}>
                    <div className="text-lg font-bold">{plan.name}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="p-4 text-left font-bold bg-gray-50">利用料金（月払い）</td>
                {PLANS.map((p, i) => <td key={i} className="p-4 text-orange-600 font-bold text-xl">¥{p.price}</td>)}
              </tr>
              <tr>
                <td className="p-4 text-left font-bold bg-gray-50">登録可能なSNS</td>
                {PLANS.map((p, i) => <td key={i} className="p-4">{p.snsCount}</td>)}
              </tr>
              <tr>
                <td className="p-4 text-left font-bold bg-gray-50">AI投稿作成</td>
                {PLANS.map((p, i) => (
                  <td key={i} className="p-4">
                    <div className="font-bold">{p.generationCount}</div>
                    {p.videoCount && <div className="text-xs text-orange-600 mt-1">動画 {p.videoCount}</div>}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-4 text-left font-bold bg-gray-50">予約投稿</td>
                {PLANS.map((p, i) => <td key={i} className="p-4"><div className="flex justify-center text-orange-500"><Check /></div></td>)}
              </tr>
              <tr>
                <td className="p-4 text-left font-bold bg-gray-50">AI分析</td>
                {PLANS.map((p, i) => (
                  <td key={i} className="p-4">
                    {p.features.analysis ? <div className="flex justify-center text-orange-500"><Check /></div> : <span className="text-gray-300">-</span>}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="mt-16 bg-gray-50 p-8 rounded-xl border border-gray-200 print-break-inside-avoid">
            <h3 className="text-2xl font-bold text-center mb-8">「One」プランの違いについて</h3>
            <div className="grid md:grid-cols-2 gap-12">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="bg-orange-100 text-orange-800 font-bold px-4 py-1 inline-block rounded mb-4">通常プラン（ベーシックなど）</div>
                    <h4 className="text-xl font-bold mb-4 text-orange-500">最大4つのSNSを利用可能</h4>
                    <p className="text-gray-600 text-sm mb-4">Instagram, X, YouTube, TikTokすべての媒体を1つのプロジェクトで管理できます。</p>
                    <div className="flex justify-center gap-4 text-2xl font-bold text-gray-400">
                        <span className="text-pink-500">IG</span> & <span className="text-black">X</span> & <span className="text-red-600">YT</span> & <span className="text-black">Tk</span>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                     <div className="bg-gray-200 text-gray-800 font-bold px-4 py-1 inline-block rounded mb-4">Oneプラン</div>
                    <h4 className="text-xl font-bold mb-4 text-orange-500">1つのSNSだけ選んで利用</h4>
                    <p className="text-gray-600 text-sm mb-4">特定のSNSに特化したい場合にお得なプランです。店舗ごとにアカウントが分かれている場合などに最適です。</p>
                    <div className="flex justify-center gap-4 text-2xl font-bold text-gray-400">
                         <span className="text-pink-500">IG</span> or <span className="text-black">X</span> or ...
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
