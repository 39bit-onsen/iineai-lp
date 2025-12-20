
import React from 'react';
import { Clock, Zap, TrendingUp, Users } from 'lucide-react';

export const ImpactStats: React.FC = () => {
  const stats = [
    { icon: Clock, label: '平均作業時間', value: '1/20', desc: '企画立案から投稿分析までの工数が1/20に。いいねAI導入後、作業量が約93%軽減。', color: 'bg-red-600' },
    { icon: Zap, label: '1投稿を生成わずか', value: '1分', desc: '画像・動画があれば最短1分でSNSの投稿を作成。AIが自動で企画立案するため考案時間を大幅短縮。', color: 'bg-red-500' },
    { icon: TrendingUp, label: 'ECサイト売上', value: '140%', desc: 'いいねAI導入X社、ECサイト月間売上140%増。エンゲージメント率向上による売上アップ。', color: 'bg-red-400', suffix: '増' },
    { icon: Users, label: '月間フォロワー増加数', value: '2.3倍', desc: 'エンゲージメント向上によりフォロワー増加が平均2.3倍。質の高い投稿を継続的に。', color: 'bg-red-300' },
  ];

  return (
    <section className="py-20 bg-gray-50 print-break-inside-avoid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-900 text-white py-3 px-6 rounded-t-lg inline-block mb-0">
          <span className="font-bold">数値で見るいいねAIの導入効果</span>
        </div>
        <div className="w-full h-1 bg-red-600 mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center h-full transform transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className={`p-3 rounded-full text-white mb-4 ${s.color}`}>
                <s.icon className="w-6 h-6" />
              </div>
              <h3 className="text-gray-500 font-bold mb-2">{s.label}</h3>
              <div className="text-5xl font-extrabold text-red-600 mb-2 font-sans tracking-tight">{s.value}</div>
              {s.suffix && <div className="text-red-500 font-bold mb-3">{s.suffix}</div>}
              <p className="text-sm text-gray-600 font-medium leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-right text-xs text-gray-400 mt-4">上記項目に関する根拠などを次頁以降に詳細を記載しています。</p>
      </div>
    </section>
  );
};
