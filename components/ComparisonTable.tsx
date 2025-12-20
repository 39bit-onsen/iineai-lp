
import React from 'react';

export const ComparisonTable: React.FC = () => {
  const rows = [
    { label: '料金・費用', iine: '月額1万円〜', agency: '月額20〜100万円', freelance: '月額5万円〜', chatgpt: '無料・月額20ドル' },
    { label: '企画・戦略立案', iine: '◎', agency: '◎', freelance: '○', chatgpt: '△' },
    { label: '投稿作成', iine: '◎', agency: '◎', freelance: '○', chatgpt: '△' },
    { label: '24時間対応', iine: '◎', agency: '×', freelance: '×', chatgpt: '◎' },
    { label: '運用の内製化', iine: '◎', agency: '×', freelance: '×', chatgpt: '◎' },
  ];

  const renderMark = (mark: string) => {
    if (mark === '◎') return <span className="text-3xl font-bold text-orange-500">◎</span>;
    if (mark === '○') return <span className="text-2xl text-blue-400">○</span>;
    if (mark === '△') return <span className="text-2xl text-yellow-500">△</span>;
    if (mark === '×') return <span className="text-3xl text-red-400">×</span>;
    return mark;
  };

  return (
    <section className="py-20 bg-orange-50 print-break-inside-avoid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 border-l-8 border-orange-500 pl-4">
          「いいねAI」の他社との比較
        </h2>

        <div className="overflow-x-auto shadow-xl rounded-xl">
          <table className="w-full text-center bg-white border-collapse">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="p-4 border-r border-gray-700 w-1/5">比較一覧</th>
                <th className="p-4 border-r border-gray-700 bg-orange-600 w-1/5 text-xl">いいねAI</th>
                <th className="p-4 border-r border-gray-700 w-1/5">既存SNS運用代行</th>
                <th className="p-4 border-r border-gray-700 w-1/5">フリーランス</th>
                <th className="p-4 w-1/5">ChatGPT単体</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => (
                <tr key={idx} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-4 font-bold text-gray-700 border-r text-left bg-gray-50">{row.label}</td>
                  <td className="p-4 font-bold border-r text-lg text-orange-600">{renderMark(row.iine)}</td>
                  <td className="p-4 border-r text-gray-600">{renderMark(row.agency)}</td>
                  <td className="p-4 border-r text-gray-600">{renderMark(row.freelance)}</td>
                  <td className="p-4 text-gray-600">{renderMark(row.chatgpt)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="bg-black text-white p-6 mt-8 rounded-xl text-center">
            <p className="text-lg md:text-xl font-bold">
                「いいねAI」は、YouTube / Instagram / X(旧Twitter) / TikTokの
                <span className="text-yellow-400 mx-1">公式認定を受けた安心のSNS運用ツール</span>
                です。
            </p>
        </div>
      </div>
    </section>
  );
};
