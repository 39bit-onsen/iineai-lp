import React from 'react';
import { Clock, Zap, BarChart3, Users } from 'lucide-react';

export const ImpactStatsSimple: React.FC = () => {
  const stats = [
    { 
      icon: Clock, 
      label: '平均作業時間', 
      value: '1/20', 
      desc: '企画立案から投稿分析までの工数が1/20に。いいねAI導入後、作業量が約93%軽減。' 
    },
    { 
      icon: Zap, 
      label: '1投稿を生成わずか', 
      value: '1分', 
      desc: '画像・動画があれば最短1分でSNSの投稿を作成。AIが自動で企画立案するため考察時間を大幅短縮。' 
    },
    { 
      icon: BarChart3, 
      label: 'ECサイト売上', 
      value: '140%', 
      suffix: '増',
      desc: 'いいねAI導入X社、ECサイト月間売上140%増。エンゲージメント率向上による売上アップ。' 
    },
    { 
      icon: Users, 
      label: '月間フォロワー増加数', 
      value: '2.3倍', 
      desc: 'エンゲージメント向上によりフォロワー増加が平均2.3倍。質の高い投稿を継続的に。' 
    },
  ];

  return (
    <section className="py-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Dark Box and Orange Line */}
        <div className="relative mb-12">
          <div className="absolute bottom-0 left-0 w-full h-1 bg-[#f97316]"></div>
          <div className="relative inline-block bg-[#111827] text-white py-2 px-8 rounded-t-lg font-bold text-lg md:text-xl tracking-wider">
            数値で見るいいねAIの導入効果
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((s, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              {/* Icon */}
              <div className="w-12 h-12 rounded-full bg-[#ef4444] flex items-center justify-center text-white mb-6">
                <s.icon size={24} />
              </div>
              
              {/* Label */}
              <h3 className="text-sm md:text-base font-bold text-gray-600 mb-4">{s.label}</h3>
              
              {/* Value */}
              <div className="mb-6 flex flex-col items-center">
                <span className="text-5xl md:text-6xl font-black text-[#f97316] tracking-tighter">
                  {s.value}
                </span>
                {s.suffix && (
                  <span className="text-xl font-black text-[#f97316] mt-1">{s.suffix}</span>
                )}
              </div>
              
              {/* Description */}
              <p className="text-sm text-gray-500 leading-relaxed font-medium">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <p className="text-right text-[10px] md:text-xs text-gray-400 mt-6 font-medium">
          上記項目に関する根拠などを次頁以降に詳細を記載しています。
        </p>
      </div>
    </section>
  );
};