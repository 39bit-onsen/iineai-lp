
import React from 'react';
import { FAQS } from '../constants';

export const FAQ: React.FC = () => {
  return (
    <section className="py-20 bg-white print-break-inside-avoid">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 border-l-8 border-orange-500 pl-4">
          よくある質問
        </h2>
        
        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <div key={i} className="mb-6 border-b border-gray-100 pb-6 last:border-0 print-break-inside-avoid">
              <div className="flex items-start gap-4">
                <div className="text-orange-500 font-black text-xl flex-shrink-0">Q.</div>
                <h3 className="font-bold text-lg text-gray-800 pt-0.5">{faq.question}</h3>
              </div>
              <div className="flex items-start gap-4 mt-3">
                <div className="text-red-500 font-black text-xl flex-shrink-0">A.</div>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 p-6 bg-gray-50 rounded-lg text-center no-print">
            <p className="font-bold mb-2">上記以外でご不明な場合は、いいねAIまでお問合せください。</p>
            <a href="https://iine-ai.com/support/" className="text-orange-600 underline hover:text-orange-700">
                https://iine-ai.com/support/
            </a>
        </div>
      </div>
    </section>
  );
};
