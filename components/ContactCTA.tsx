import React from 'react';
import { FileText, Mail } from 'lucide-react';

export const ContactCTA: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-400 to-orange-500 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Logo */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <img 
            src="https://cdn.jsdelivr.net/gh/39bit-onsen/iineai-lp@main/assets/logotype_japanese.png" 
            alt="いいねAI" 
            className="h-10 md:h-14 w-auto object-contain brightness-0 invert" 
          />
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            の導入はこちら
          </h2>
        </div>

        {/* Cards Container */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Left Card: Service Document */}
          <div className="bg-white rounded-[2.5rem] p-10 flex flex-col items-center text-center shadow-2xl transform transition-transform hover:-translate-y-2">
            <div className="w-24 h-24 rounded-full border-4 border-emerald-500 flex items-center justify-center mb-8">
              <div className="relative">
                <FileText size={48} className="text-emerald-500" strokeWidth={1.5} />
                <div className="absolute -bottom-1 -right-1 bg-emerald-500 text-white rounded-sm p-0.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
                </div>
              </div>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-black text-gray-800 mb-8 leading-tight">
              いいねAI<br />
              サービス資料
            </h3>
            
            <a 
              href="#download" 
              className="w-full max-w-[260px] bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-colors text-lg"
            >
              ダウンロードする
            </a>
          </div>

          {/* Right Card: Inquiry */}
          <div className="bg-white rounded-[2.5rem] p-10 flex flex-col items-center text-center shadow-2xl transform transition-transform hover:-translate-y-2">
            <div className="w-24 h-24 rounded-full border-4 border-blue-600 flex items-center justify-center mb-8">
               <div className="relative">
                <Mail size={48} className="text-blue-600" strokeWidth={1.5} />
                <div className="absolute -bottom-1 -right-1 bg-blue-600 text-white rounded-sm p-0.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
              </div>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-black text-gray-800 mb-8 leading-tight">
              相談<br />
              お問い合わせ
            </h3>
            
            <a 
              href="https://iine-ai.com/support/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full max-w-[260px] bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-colors text-lg"
            >
              お問い合わせする
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};