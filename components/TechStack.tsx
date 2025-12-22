import React from 'react';

export const TechStack: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">
          「いいねAI」を支える技術について
        </h2>
        <p className="text-gray-600 mb-10">
          いいねAIは以下の最新技術を組み合わせて、高度な機能を提供しています。
        </p>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mb-12">
           <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white font-bold text-xs">OpenAI</div>
              <span className="text-3xl font-bold text-gray-800">ChatGPT</span>
           </div>
           <div className="text-2xl text-gray-300">✕</div>
           <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xs">Google</div>
              <span className="text-3xl font-bold text-blue-600">Gemini</span>
           </div>
           <div className="text-2xl text-gray-300">✕</div>
           <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center text-orange-800 font-bold text-xs">Anthropic</div>
              <span className="text-3xl font-bold text-orange-800">Claude</span>
           </div>
        </div>

        <div className="inline-block bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
          <p className="text-lg md:text-xl font-bold text-gray-700">
            これら世界最高峰のAI 3種を、<br className="md:hidden" />
            <span className="text-red-600 text-2xl md:text-3xl font-black mx-1">1日わずか300円〜</span>でフル活用。
          </p>
          <p className="text-sm text-gray-500 mt-2">
            個別契約なら数万円相当のAIパワーを、いいねAIがワンストップで提供します。
          </p>
        </div>
      </div>
    </section>
  );
};