import React from 'react';
import { Check } from 'lucide-react';
import { PLANS } from '../constants';

export const PlanList: React.FC = () => {
  return (
    <section id="plans" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight">
            プラン・料金
          </h2>
          <p className="text-gray-500 mt-4 font-bold">初期費用無料！5プロジェクト以上の同時契約で特別割引あり</p>
          <div className="w-20 h-1.5 bg-red-600 mx-auto mt-6"></div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden space-y-8">
          {PLANS.map((plan, i) => (
            <div key={i} className={`rounded-3xl overflow-hidden border-2 ${plan.isRecommended ? 'border-red-600 shadow-2xl scale-105 my-8' : 'border-gray-200 shadow-md bg-white'} print-break-inside-avoid`}>
              {plan.isRecommended && <div className="bg-red-600 text-white text-center py-2 font-black tracking-widest text-sm uppercase">Recommended</div>}
              <div className="p-8 text-center bg-gray-50/50">
                <h3 className="text-xl font-black text-gray-900 mb-2">{plan.name}</h3>
                <div className="text-4xl font-black text-red-600 mb-1">¥{plan.price}<span className="text-sm text-gray-500 font-normal">/月</span></div>
                <div className="text-xs text-gray-400 font-bold">年払いなら月あたり ¥{plan.annualPrice}</div>
              </div>
              <div className="p-8 bg-white">
                <ul className="space-y-4">
                  <li className="flex justify-between border-b border-gray-100 pb-3">
                    <span className="text-gray-500 font-bold">SNS種類</span>
                    <span className="font-black">{plan.snsCount}</span>
                  </li>
                  <li className="flex justify-between border-b border-gray-100 pb-3">
                    <span className="text-gray-500 font-bold">生成回数</span>
                    <span className="font-black">{plan.generationCount}</span>
                  </li>
                  {plan.videoCount && (
                    <li className="flex justify-between border-b border-gray-100 pb-3">
                      <span className="text-gray-500 font-bold">動画制作</span>
                      <span className="font-black text-red-600">{plan.videoCount}</span>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-center border-separate border-spacing-x-4">
            <thead>
              <tr>
                <th className="p-6 bg-transparent text-left w-1/6"></th>
                {PLANS.map((plan, i) => (
                  <th key={i} className={`p-8 w-1/6 rounded-t-3xl relative ${plan.isRecommended ? 'bg-red-600 text-white shadow-xl' : 'bg-gray-800 text-white'}`}>
                    {plan.isRecommended && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-red-900 py-1 px-4 rounded-full text-xs font-black tracking-widest uppercase shadow-md">Popular</div>
                    )}
                    <div className="text-lg font-black leading-tight">{plan.name}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white shadow-2xl rounded-b-3xl">
              <tr className="border-b border-gray-100">
                <td className="p-6 text-left font-black bg-gray-50 rounded-bl-3xl">月額料金</td>
                {PLANS.map((p, i) => (
                  <td key={i} className={`p-6 text-2xl font-black ${p.isRecommended ? 'text-red-600 bg-red-50/30' : 'text-gray-900'}`}>
                    ¥{p.price}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-6 text-left font-black bg-gray-50">SNS登録数</td>
                {PLANS.map((p, i) => <td key={i} className={`p-6 font-bold ${p.isRecommended ? 'bg-red-50/30' : ''}`}>{p.snsCount}</td>)}
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-6 text-left font-black bg-gray-50">AI生成数</td>
                {PLANS.map((p, i) => (
                  <td key={i} className={`p-6 ${p.isRecommended ? 'bg-red-50/30' : ''}`}>
                    <div className="font-black text-lg">{p.generationCount}</div>
                    {p.videoCount && <div className="text-xs text-red-600 font-bold mt-1">動画 {p.videoCount}</div>}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-6 text-left font-black bg-gray-50">予約投稿</td>
                {PLANS.map((p, i) => <td key={i} className={`p-6 ${p.isRecommended ? 'bg-red-50/30' : ''}`}><div className="flex justify-center text-emerald-500"><Check strokeWidth={4} /></div></td>)}
              </tr>
              <tr>
                <td className="p-6 text-left font-black bg-gray-50 rounded-br-3xl">AI分析</td>
                {PLANS.map((p, i) => (
                  <td key={i} className={`p-6 rounded-b-3xl ${p.isRecommended ? 'bg-red-50/30' : ''}`}>
                    {p.features.analysis ? <div className="flex justify-center text-emerald-500"><Check strokeWidth={4} /></div> : <span className="text-gray-300">-</span>}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};