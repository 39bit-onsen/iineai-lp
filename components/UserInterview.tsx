import React from 'react';
import { Play } from 'lucide-react';

interface InterviewData {
  id: string;
  name: string;
  profile: string;
  address: string;
  image1: string;
  image2: string;
  text1: string;
  text2: string;
  signature: string;
}

const INTERVIEWS: InterviewData[] = [
  {
    id: '01',
    name: 'F様／会社員',
    profile: '2戸所有',
    address: '宮城県在住',
    image1: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1200',
    image2: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
    text1: 'はじめはSNS運用はなんとなく\nお金がかかるというイメージがあったけど、\n説明を聞いて意外と堅実で、\n自分のリソースでも無理なく\n始められるんだと思いました。',
    text2: 'AIに任せて投稿が自動で\n回っていくという安心感は大きいです。\nSNS運用って特別な人がするものだと\n思っていましたが、\n会社員が始めやすい投資（運用）だと思います。',
    signature: 'Interview with F様'
  },
  {
    id: '02',
    name: 'Y様／看護師',
    profile: '2戸所有',
    address: '宮城県在住',
    image1: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1200',
    image2: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
    text1: '最初に感じたのは、担当者の丁寧さと誠実さでした。そして、最も大きかったのはサポート体制の充実です。必要情報の準備、AIの活用方法まで、「どうやってやるんですか？」という質問にも丁寧に対応してくれました。',
    text2: '他社では当たり前のように「これ必要です」とだけ言われ、“どう使うか”は自分で調べる必要がありましたが、いいねAIはそこが全然違いました。不安が自然と消えていくようなサポートでした。良い活用方法があれば、今後も前向きに検討していきたいと思っています。',
    signature: 'Interview with Y様'
  }
];

// Masking Tape Decoration Component
const MaskingTape: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`absolute w-32 h-8 bg-white/40 backdrop-blur-[1px] border border-white/20 shadow-sm rotate-[-3deg] z-20 pointer-events-none overflow-hidden ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    {/* Rough edges simulation */}
    <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/5 opacity-50"></div>
    <div className="absolute right-0 top-0 bottom-0 w-1 bg-white/5 opacity-50"></div>
  </div>
);

export const UserInterview: React.FC = () => {
  return (
    <section className="py-24 bg-gray-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-20">
          <p className="text-2xl md:text-5xl font-black text-gray-800 tracking-tight">
            <span className="text-brand-600 mr-3">＼</span> 
            <span className="relative inline-block">
              率直な声
              <span className="absolute -bottom-3 left-0 w-full h-2 bg-orange-400/80 rounded-full"></span>
            </span>
            もいただいております！ 
            <span className="text-brand-600 ml-3">／</span>
          </p>
        </div>

        <div className="space-y-32">
          {INTERVIEWS.map((interview, index) => (
            /* Interview Card Container */
            <div 
              key={interview.id}
              className={`relative max-w-5xl mx-auto group transition-all duration-500 ${index % 2 === 0 ? 'rotate-[-0.5deg]' : 'rotate-[0.5deg]'} hover:rotate-0 hover:-translate-y-2`}
            >
              
              {/* Stacked Paper Effect (Underneath shadows) */}
              <div className="absolute inset-0 bg-white shadow-[0_1px_1px_rgba(0,0,0,0.1),0_2px_2px_rgba(0,0,0,0.1),0_4px_4px_rgba(0,0,0,0.1),0_8px_8px_rgba(0,0,0,0.1),0_16px_16px_rgba(0,0,0,0.1)] rounded-sm transform translate-x-1 translate-y-1"></div>

              {/* Main Card Body */}
              <div 
                className="relative bg-[#fafaf8] border border-gray-200 overflow-hidden rounded-sm"
                style={{ 
                  clipPath: 'polygon(0 0, calc(100% - 64px) 0, 100% 64px, 100% 100%, 0 100%)',
                }}
              >
                {/* Paper Texture Overlay */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

                {/* Fixed Folded Corner */}
                <div className="absolute top-0 right-0 w-16 h-16 z-30 pointer-events-none">
                  {/* The back layer (shadow in the hole) */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gray-300 opacity-20"></div>
                  {/* The fold piece */}
                  <div 
                    className="absolute top-0 right-0 w-16 h-16 bg-[#e5e5e2] shadow-[-6px_6px_12px_rgba(0,0,0,0.2)]"
                    style={{ 
                      clipPath: 'polygon(0 0, 0 100%, 100% 100%)',
                    }}
                  >
                    {/* Subtle highlight on the fold edge */}
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-white/40 transform rotate-45 origin-top-left"></div>
                  </div>
                </div>

                {/* Certification Stamp Effect */}
                <div className="absolute bottom-8 right-12 z-20 pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-700 select-none">
                  <div className="w-24 h-24 border-4 border-red-700 rounded-full flex items-center justify-center text-red-700 font-black text-center text-[10px] leading-tight rotate-[-15deg]">
                    <div className="border-y-2 border-red-700 py-1 px-2">
                      いいねAI<br />公式導入事例
                    </div>
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row relative z-10">
                  
                  {/* Left Side: Visuals */}
                  <div className="w-full lg:w-1/2 p-6 md:p-10 border-b lg:border-b-0 lg:border-r border-gray-200/50">
                    
                    {/* Header inside card (Formal Header) */}
                    <div className="mb-10 relative">
                      <div className="bg-[#1a365d] text-white text-center py-3 rounded-t-sm font-bold text-xl md:text-2xl tracking-[0.2em] shadow-sm">
                        OWNER INTERVIEW
                      </div>
                      <div className="bg-white/80 backdrop-blur-sm text-gray-700 text-center py-5 border-x border-b border-gray-200 rounded-b-sm shadow-sm">
                        <p className="font-bold text-xl md:text-2xl mb-1">{interview.name}</p>
                        <p className="font-bold text-base md:text-lg text-gray-500 tracking-wide">{interview.profile} ／ {interview.address}</p>
                      </div>
                    </div>

                    {/* Photos Stack with Handcrafted Decorations */}
                    <div className="space-y-10">
                      {/* Person Photo */}
                      <div className="relative">
                        <MaskingTape className="-top-3 -left-8" />
                        <div className="relative group/photo cursor-pointer overflow-hidden rounded-sm shadow-lg border-4 border-white aspect-video bg-gray-200">
                          <img 
                            src={interview.image1} 
                            alt="インタビュー回答者" 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover/photo:scale-105"
                          />
                          <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover/photo:bg-black/0 transition-all">
                            <div className="w-16 h-16 bg-white/95 rounded-full flex items-center justify-center shadow-xl transform group-hover/photo:scale-110 transition-transform">
                              <Play className="text-[#1a365d] fill-[#1a365d] ml-1" size={28} />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Property/Result Photo */}
                      <div className="relative">
                        <MaskingTape className="-bottom-3 -right-8 rotate-[15deg]" />
                        <div className="overflow-hidden rounded-sm shadow-md border-4 border-white rotate-[-1deg] bg-gray-200">
                          <img 
                            src={interview.image2} 
                            alt="物件・成果イメージ" 
                            className="w-full h-auto object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Side: Interview Text (Paper Content) */}
                  <div className="w-full lg:w-1/2 p-8 md:p-14 flex flex-col justify-center relative">
                    {/* Subtle notebook lines (optional, kept clean but textured) */}
                    <div className="space-y-12 text-gray-800 leading-relaxed relative z-10">
                      <div className="relative">
                        <p className="text-xl md:text-2xl font-bold whitespace-pre-wrap tracking-tight leading-snug">
                          {interview.text1}
                        </p>
                      </div>

                      <div className="relative pt-12 border-t border-gray-200">
                        {/* Red "Check" or accent mark */}
                        <div className="absolute -top-1 left-0 w-8 h-1 bg-brand-600"></div>
                        <p className="text-xl md:text-2xl font-bold whitespace-pre-wrap tracking-tight leading-snug italic text-gray-700">
                          「{interview.text2}」
                        </p>
                        
                        {/* Footnotes */}
                        <div className="mt-10 space-y-1">
                          <p className="text-[10px] text-gray-400 font-medium">※生成文章 イメージ（images.unsplash.com） クライアント確認用</p>
                          <p className="text-[10px] text-red-600 font-black tracking-widest uppercase">※※ CRITICAL: CONTENT TO BE UPDATED ※※</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Footer Signature (Handwritten style feel) */}
                    <div className="mt-16 text-right">
                      <div className="inline-block border-b-2 border-gray-300 pb-1">
                        <p className="text-gray-400 font-black italic tracking-widest text-lg">
                          {interview.signature}
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};