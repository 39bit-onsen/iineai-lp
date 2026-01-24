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
            
            <a 
              href="https://drive.google.com/file/d/1VH3a1SqavlM09jeogzvpARYgP00eaX16/view?usp=drive_link" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-12 rounded-full shadow-lg transition-transform transform hover:scale-105 inline-block text-xl"
            >
               無料デモ体験はこちら ▼
            </a>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-sm text-gray-500 flex flex-col md:flex-row justify-center items-center">
          <p>© 2025 Iine AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};