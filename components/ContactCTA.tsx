import React from 'react';
import { FileText, Mail } from 'lucide-react';

export const ContactCTA: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-[#f97316] via-[#fb923c] to-[#f59e0b] overflow-hidden relative">
      <div className="absolute inset-0 bg-white/5 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <img 
              src="https://cdn.jsdelivr.net/gh/39bit-onsen/CDNmy@main/assets/iine_ai_logo_full.png" 
              alt="いいねAI" 
              className="h-8 md:h-12 w-auto object-contain brightness-0 invert" 
            />
            <h2 className="text-2xl md:text-4xl font-black text-white tracking-tight">の導入はこちら</h2>
          </div>
        </div>

        {/* Action Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-10 max-w-4xl mx-auto">
          
          {/* Service Document Download Card */}
          <div className="bg-white rounded-[2rem] p-8 md:p-10 flex flex-col items-center text-center shadow-[0_15px_40px_rgba(0,0,0,0.1)] transform transition-transform hover:scale-[1.01]">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-[3px] border-[#10b981] flex items-center justify-center mb-6">
              <div className="relative">
                <FileText size={40} className="text-[#10b981]" strokeWidth={1.5} />
                <div className="absolute -bottom-1 -right-1 bg-white p-0.5 rounded-sm">
                   <div className="w-4 h-4 bg-[#10b981] rounded-sm flex items-center justify-center">
                     <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M7 13l5 5 5-5M12 18V6"/></svg>
                   </div>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl md:text-2xl font-black text-gray-800 mb-6 leading-tight">
              いいねAI<br />
              サービス資料
            </h3>
            
            <a 
              href="https://drive.google.com/file/d/1VH3a1SqavlM09jeogzvpARYgP00eaX16/view?usp=drive_link" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-[200px] bg-[#10b981] hover:bg-[#059669] text-white font-black py-3 px-6 rounded-full shadow-md transition-all text-base md:text-lg flex items-center justify-center"
            >
              ダウンロードする
            </a>
          </div>

          {/* Inquiry Card */}
          <div className="bg-white rounded-[2rem] p-8 md:p-10 flex flex-col items-center text-center shadow-[0_15px_40px_rgba(0,0,0,0.1)] transform transition-transform hover:scale-[1.01]">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-[3px] border-[#0ea5e9] flex items-center justify-center mb-6">
              <div className="relative">
                <Mail size={40} className="text-[#0ea5e9]" strokeWidth={1.5} />
                <div className="absolute -bottom-1 -right-1 bg-white p-0.5 rounded-sm">
                   <div className="w-4 h-4 bg-[#0ea5e9] rounded-sm flex items-center justify-center">
                     <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                   </div>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl md:text-2xl font-black text-gray-800 mb-6 leading-tight">
              相談<br />
              お問い合わせ
            </h3>
            
            <a 
              href="https://iine-ai.com/contact/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full max-w-[200px] bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-black py-3 px-6 rounded-full shadow-md transition-all text-base md:text-lg flex items-center justify-center"
            >
              お問い合わせする
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};