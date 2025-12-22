import React from 'react';

export const ComparisonTable: React.FC = () => {
  const rows = [
    { label: '料金・費用', iine: '月額1万円〜', agency: '月額20〜100万円', freelance: '月額5万円〜', chatgpt: '無料・月額20ドル' },
    { label: '企画・戦略立案', iine: '◎', agency: '◎', freelance: '○', chatgpt: '△' },
    { label: '投稿作成', iine: '◎', agency: '◎', freelance: '○', chatgpt: '△' },
    { label: '24時間対応', iine: '◎', agency: '×', freelance: '×', chatgpt: '◎' },
    { label: '運用の内製化', iine: '◎', agency: '×', freelance: '×', chatgpt: '◎' },
  ];

  const renderMark = (mark: string, isIine: boolean) => {
    if (mark === '◎') {
      return <span className={`text-4xl font-black ${isIine ? 'text-red-600' : 'text-orange-500'}`}>◎</span>;
    }
    if (mark === '○') {
      return <span className="text-5xl font-black text-blue-500">○</span>;
    }
    if (mark === '△') {
      return <span className="text-3xl font-black text-blue-500">△</span>;
    }
    if (mark === '×') {
      return <span className="text-4xl font-black text-blue-500">×</span>;
    }
    return mark;
  };

  return (
    <section className="py-24 bg-white print-break-inside-avoid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight">
            他社サービスとの比較
          </h2>
          <div className="w-20 h-1.5 bg-red-600 mx-auto mt-6"></div>
        </div>

        <div className="overflow-x-auto shadow-2xl rounded-3xl border border-gray-100">
          <table className="w-full text-center bg-white border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="p-6 border-r border-gray-700 w-1/5 text-lg">比較項目</th>
                <th className="p-6 border-r border-gray-700 bg-red-600 w-1/5 text-2xl font-black italic">いいねAI</th>
                <th className="p-6 border-r border-gray-700 w-1/5">既存SNS運用代行</th>
                <th className="p-6 border-r border-gray-700 w-1/5">フリーランス</th>
                <th className="p-6 w-1/5">ChatGPT単体</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => (
                <tr key={idx} className="border-b border-gray-100 transition-colors hover:bg-gray-50/50">
                  <td className="p-6 font-bold text-gray-700 border-r text-left bg-gray-50/50">{row.label}</td>
                  <td className="p-6 font-bold border-r text-lg text-red-700 bg-red-50/30">{renderMark(row.iine, true)}</td>
                  <td className="p-6 border-r text-gray-600">{renderMark(row.agency, false)}</td>
                  <td className="p-6 border-r text-gray-600">{renderMark(row.freelance, false)}</td>
                  <td className="p-6 text-gray-600">{renderMark(row.chatgpt, false)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="bg-gray-900 text-white p-8 mt-12 rounded-2xl text-center shadow-lg">
            <p className="text-lg md:text-2xl font-bold leading-relaxed">
                「いいねAI」は、主要SNSの<span className="text-yellow-400 mx-1 underline underline-offset-4 decoration-yellow-400/50">公式認定を受けた安心の国内ツール</span>です。
            </p>
        </div>
      </div>
    </section>
  );
};