import React, { useState, useEffect, useRef } from 'react';
import { Clock, Zap, TrendingUp, Users, ArrowRight } from 'lucide-react';

// カウントアップ用の子コンポーネント
const CountUp: React.FC<{ end: number; duration?: number; suffix?: string; prefix?: string }> = ({ end, duration = 1500, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [hasStarted, end, duration]);

  return <span ref={countRef}>{prefix}{count.toLocaleString()}{suffix}</span>;
};

export const ImpactStats: React.FC = () => {
  const stats = [
    { 
      icon: Clock, 
      label: '月間SNS作業時間', 
      before: 72, 
      after: 12, 
      unit: '時間',
      afterUnit: '分',
      desc: '企画立案から投稿・分析まで。月3日分の工数がわずか12分に。', 
      color: 'bg-red-600' 
    },
    { 
      icon: Zap, 
      label: '1投稿あたりの生成時間', 
      before: 60, 
      after: 1, 
      unit: '分',
      afterUnit: '分',
      desc: '画像さえあれば、AIが最短1分でキャプション・ハッシュタグまで完結。', 
      color: 'bg-red-500' 
    },
    { 
      icon: TrendingUp, 
      label: 'ECサイト月間売上', 
      before: 500000, 
      after: 1200000, 
      unit: '円',
      afterUnit: '円',
      prefix: '¥',
      desc: '投稿頻度の安定と質の向上により、流入経路が確立され売上が2.4倍に。', 
      color: 'bg-red-400' 
    },
    { 
      icon: Users, 
      label: '月間フォロワー増加数', 
      before: 100, 
      after: 850, 
      unit: '人',
      afterUnit: '人',
      desc: 'AIによるトレンド分析に基づいた投稿で、フォロワー獲得効率が劇的改善。', 
      color: 'bg-red-300' 
    },
  ];

  return (
    <section className="py-24 bg-gray-50 print-break-inside-avoid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-gray-900 text-white py-2 px-6 rounded-full mb-4">
            <span className="font-bold tracking-widest text-sm">CASE STUDY</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900">
            数値で見る「いいねAI」の導入効果
          </h2>
          <div className="w-24 h-1.5 bg-red-600 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 flex flex-col h-full transform transition-all hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-2xl text-white ${s.color}`}>
                  <s.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-gray-800">{s.label}</h3>
              </div>

              <div className="flex items-center justify-between bg-gray-50 rounded-2xl p-6 mb-6">
                {/* Before */}
                <div className="text-center flex-1">
                  <div className="text-xs text-gray-400 font-bold mb-1 uppercase tracking-tighter">Before</div>
                  <div className="text-2xl font-bold text-gray-400">
                    {s.prefix}{s.before.toLocaleString()}<span className="text-sm ml-1">{s.unit}</span>
                  </div>
                </div>

                {/* Arrow */}
                <div className="px-4">
                  <ArrowRight className="text-red-600 w-8 h-8" />
                </div>

                {/* After */}
                <div className="text-center flex-1">
                  <div className="text-xs text-red-600 font-bold mb-1 uppercase tracking-tighter">After</div>
                  <div className="text-4xl md:text-5xl font-black text-red-600 tracking-tighter">
                    <CountUp end={s.after} prefix={s.prefix} />
                    <span className="text-lg md:text-xl ml-1">{s.afterUnit}</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 font-bold leading-relaxed border-l-4 border-red-100 pl-4 py-1">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center md:text-right text-sm text-gray-400 mt-12 font-medium">
          ※上記数値は導入企業様（小売・サービス業等）の平均的な実績に基づきます。詳細な根拠資料はダウンロードいただけます。
        </p>
      </div>
    </section>
  );
};