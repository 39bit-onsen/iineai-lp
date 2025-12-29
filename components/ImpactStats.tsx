import React, { useState, useEffect, useRef } from 'react';
import { Clock, Zap, TrendingUp, Users, ArrowRight } from 'lucide-react';

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
      color: 'bg-orange-600' 
    },
    { 
      icon: Zap, 
      label: '1投稿あたりの生成時間', 
      before: 60, 
      after: 1, 
      unit: '分',
      afterUnit: '分',
      desc: '画像さえあれば、AIが最短1分でキャプション・ハッシュタグまで完結。', 
      color: 'bg-orange-500' 
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
      color: 'bg-orange-400' 
    },
    { 
      icon: Users, 
      label: '月間フォロワー増加数', 
      before: 100, 
      after: 850, 
      unit: '人',
      afterUnit: '人',
      desc: 'AIによるトレンド分析に基づいた投稿で、フォロワー獲得効率が劇的改善。', 
      color: 'bg-orange-300' 
    },
  ];

  return (
    <section className="py-24 bg-orange-50 text-gray-900 print-break-inside-avoid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#f97316] text-white py-2 px-6 rounded-full mb-4 shadow-sm">
            <span className="font-bold tracking-widest text-sm uppercase">Case Study</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900">
            数値で見る「いいねAI」の導入効果
          </h2>
          <div className="w-24 h-1.5 bg-[#f97316] mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-orange-100 flex flex-col h-full transform transition-all hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-2xl text-white ${s.color}`}>
                  <s.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg md:text-xl font-black text-gray-900 tracking-tight">{s.label}</h3>
              </div>

              {/* Mobile-optimized box (Fluid sizing for After, compact Before for mobile only) */}
              <div className="flex items-center justify-between bg-orange-50/50 rounded-2xl p-4 md:p-6 mb-6 border border-orange-100/50 overflow-hidden">
                <div className="text-left md:text-center flex-shrink-0 transform scale-90 sm:scale-100 origin-left">
                  <div className="text-[10px] text-gray-400 font-bold mb-1 uppercase tracking-tighter">Before</div>
                  <div className="text-sm sm:text-base md:text-2xl font-bold text-gray-400 leading-none whitespace-nowrap">
                    {s.prefix}{s.before.toLocaleString()}<span className="text-[10px] md:text-sm ml-0.5">{s.unit}</span>
                  </div>
                </div>

                <div className="px-1 sm:px-2">
                  <ArrowRight className="text-[#f97316] w-4 h-4 sm:w-8 sm:h-8 opacity-50" />
                </div>

                <div className="text-right md:text-center flex-1 min-w-0">
                  <div className="text-[10px] text-[#f97316] font-bold mb-1 uppercase tracking-tighter">After</div>
                  <div className="text-[7.5vw] sm:text-4xl md:text-5xl font-black text-[#f97316] tracking-tighter leading-none truncate">
                    <CountUp end={s.after} prefix={s.prefix} />
                    <span className="text-[3vw] sm:text-xl ml-0.5">{s.afterUnit}</span>
                  </div>
                </div>
              </div>

              <p className="text-xs md:text-base text-gray-600 font-bold leading-relaxed border-l-4 border-orange-200 pl-4 py-1">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center md:text-right text-sm text-gray-400 mt-12 font-medium">
          ※上記数値は導入企業様（小売・サービス業等）の平均的な実績に基づきます。
        </p>
      </div>
    </section>
  );
};