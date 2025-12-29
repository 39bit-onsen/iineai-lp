import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10 print:hidden">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="mb-12">
            {/* Logo Image */}
            <div className="flex justify-center mb-8">
              <img 
                src="https://cdn.jsdelivr.net/gh/39bit-onsen/CDNmy@main/assets/iine_ai_logo_full.png" 
                alt="いいねAI" 
                className="h-12 md:h-16 w-auto object-contain"
              />
            </div>
            
            <h3 className="text-[6.5vw] sm:text-2xl font-bold mb-4 whitespace-nowrap overflow-hidden text-ellipsis">
              SNS投稿を「AI」で作ってみよう！
            </h3>
            <p className="mb-8 text-gray-400">まずはSNS投稿をAI生成で体験しよう！<br/>今までのSNS投稿作業が劇的に変わる！</p>
            
            <a href="#demo" className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-12 rounded-full shadow-lg transition-transform transform hover:scale-105 inline-block text-xl">
               無料デモ体験はこちら ▼
            </a>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-start md:items-center">
          <p className="order-2 md:order-1 mt-6 md:mt-0">© 2025 Iine AI. All rights reserved.</p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-4 order-1 md:order-2 items-start md:items-center w-full md:w-auto">
             <a href="#" className="hover:text-white transition-colors">運営会社</a>
             <a href="#" className="hover:text-white transition-colors">プライバシーポリシー</a>
             <a href="#" className="hover:text-white transition-colors">特定商取引法に基づく表記</a>
          </div>
        </div>
      </div>
    </footer>
  );
};