
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10 print:hidden">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-black italic text-orange-500 mb-6">
                いいねAI
            </h2>
            <h3 className="text-2xl font-bold mb-4">SNS投稿を「AI」で作ってみよう！</h3>
            <p className="mb-8 text-gray-400">まずはSNS投稿をAI生成で体験しよう！<br/>今までのSNS投稿作業が劇的に変わる！</p>
            
            <a href="#demo" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-12 rounded-full shadow-lg transition-transform transform hover:scale-105 inline-block text-xl">
               無料デモ体験はこちら ▼
            </a>
            
            <p className="mt-4 text-sm text-gray-500 underline">https://iine-ai.com/portal/demo/</p>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center">
          <p>© 2024 Iine AI. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
             <a href="#" className="hover:text-white">運営会社</a>
             <a href="#" className="hover:text-white">プライバシーポリシー</a>
             <a href="#" className="hover:text-white">特定商取引法に基づく表記</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
