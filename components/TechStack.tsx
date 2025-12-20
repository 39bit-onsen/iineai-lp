
import React from 'react';

export const TechStack: React.FC = () => {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">
          「いいねAI」を支える技術について
        </h2>
        <p className="text-gray-600 mb-10">
          いいねAIは以下の最新技術を組み合わせて、高度な機能を提供しています。
        </p>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
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
      </div>
    </section>
  );
};
