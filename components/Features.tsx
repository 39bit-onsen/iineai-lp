
import React from 'react';
import * as LucideIcons from 'lucide-react';
import { FEATURES } from '../constants';

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 border-l-8 border-red-600 pl-4">
            「いいねAI」の主な機能について
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FEATURES.map((f) => {
            const IconComponent = (LucideIcons as any)[f.icon];
            return (
              <div key={f.id} className="bg-white rounded-xl shadow-md p-6 flex flex-col sm:flex-row gap-4 border border-gray-100 hover:shadow-lg transition-shadow print-break-inside-avoid">
                <div className="flex-shrink-0">
                  <div className="text-6xl font-black text-red-50 leading-none">{f.id}</div>
                </div>
                <div className="flex-grow">
                  {f.badge && (
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-[10px] px-2 py-0.5 rounded font-bold ${f.badge === '全プラン' ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-600'}`}>
                        {f.badge}
                      </span>
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                    {IconComponent && <IconComponent className="text-red-600" size={24} />}
                    {f.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{f.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center no-print">
            <a href="https://www.youtube.com/@いいねAI" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-red-600 text-white font-bold py-3 px-8 rounded-full hover:bg-red-700 transition-colors">
                <span>▶</span> 機能紹介動画を見る
            </a>
            <p className="text-xs text-gray-500 mt-2">いいねAIの主な機能を動画で紹介しております。</p>
        </div>
      </div>
    </section>
  );
};
