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
    text2: '※ダミー文章 ダミーイメージ\n※クライアント確認\n※※要変更※※',
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
    text2: '※ダミー文章 ダミーイメージ\n※クライアント確認\n※※要変更※※',
    signature: 'Interview with Y様'
  }
];

const MaskingTape: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`absolute w-32 h-8 bg-white/40 backdrop-blur-[1px] border border-white/20 shadow-sm rotate-[-3deg] z-20 pointer-events-none overflow-hidden ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/5 opacity-50"></div>
    <div className="absolute right-0 top-0 bottom-0 w-1 bg-white/5 opacity-50"></div>
  </div>
);

export const UserInterview: React.FC = () => {
  return (
    <section className="py-20 bg-white overflow-hidden border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <p className="text-2xl md:text-5xl font-black text-gray-800 tracking-tight">
            <span className="text-brand-600 mr-3">＼</span> 
            <span className="relative inline-block">
              導入者の声
              <span className="absolute -bottom-3 left-0 w-full h-2 bg-orange-400/80 rounded-full"></span>
            </span>
            も届いています
            <span className="text-brand-600 ml-3">／</span>
          </p>
        </div>

        <div className="space-y-24">
          {INTERVIEWS.map((interview, index) => (
            <div 
              key={interview.id}
              className={`relative max-w-5xl mx-auto group transition-all duration-500 ${index % 2 === 0 ? 'rotate-[-0.5deg]' : 'rotate-[0.5deg]'} hover:rotate-0 hover:-translate-y-1`}
            >
              <div className="absolute inset-0 bg-white shadow-[0_15px_40px_rgba(0,0,0,0.08)] rounded-sm transform translate-x-1 translate-y-1"></div>
              <div 
                className="relative bg-[#fafaf8] border border-gray-200 overflow-hidden rounded-sm"
                style={{ clipPath: 'polygon(0 0, calc(100% - 64px) 0, 100% 64px, 100% 100%, 0 100%)' }}
              >
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
                
                <div className="absolute top-0 right-0 w-16 h-16 z-30 pointer-events-none">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gray-300 opacity-20"></div>
                  <div className="absolute top-0 right-0 w-16 h-16 bg-[#e5e5e2] shadow-[-6px_6px_12px_rgba(0,0,0,0.2)]" style={{ clipPath: 'polygon(0 0, 0 100%, 100% 100%)' }}></div>
                </div>

                <div className="flex flex-col lg:flex-row relative z-10">
                  {/* Left Column: Media */}
                  <div className="w-full lg:w-1/2 p-6 md:p-10 border-b lg:border-b-0 lg:border-r border-gray-200/50">
                    <div className="mb-8 relative">
                      <div className="bg-[#1a365d] text-white text-center py-2 rounded-t-sm font-black text-lg md:text-xl tracking-[0.2em]">CASE STUDY</div>
                      <div className="bg-white/80 backdrop-blur-sm text-gray-700 text-center py-4 border-x border-b border-gray-200 rounded-b-sm">
                        <p className="font-black text-lg md:text-xl mb-1">{interview.name}</p>
                        <p className="font-bold text-xs md:text-sm text-gray-500">{interview.profile} ／ {interview.address}</p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      {/* Image 1 (Video) */}
                      <div className="relative">
                        <MaskingTape className="-top-3 -left-4" />
                        <div className="relative group/photo overflow-hidden rounded-sm shadow-md border-4 border-white aspect-video bg-gray-200">
                          <img src={interview.image1} alt="インタビュー回答者 動画" className="w-full h-full object-cover transition-transform duration-700 group-hover/photo:scale-105" />
                          <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover/photo:bg-black/0 transition-all">
                            <div className="w-14 h-14 bg-white/95 rounded-full flex items-center justify-center shadow-lg transform group-hover/photo:scale-110 transition-transform">
                              <Play className="text-[#1a365d] fill-[#1a365d] ml-1" size={24} />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Image 2 (Added below Video) */}
                      <div className="relative">
                        <div className="relative group/photo2 overflow-hidden rounded-sm shadow-md border-4 border-white aspect-video bg-gray-200">
                          <img src={interview.image2} alt="インタビュー回答者 イメージ" className="w-full h-full object-cover transition-transform duration-700 group-hover/photo2:scale-105" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Text */}
                  <div className="w-full lg:w-1/2 p-8 md:p-14 flex flex-col justify-center relative">
                    <div className="space-y-10 text-gray-800 relative z-10">
                      <p className="text-xl md:text-2xl font-black whitespace-pre-wrap tracking-tight leading-snug">{interview.text1}</p>
                      <div className="relative pt-10 border-t border-gray-200">
                        <div className="absolute -top-1 left-0 w-8 h-1 bg-brand-600"></div>
                        <p className="text-xl md:text-2xl font-black whitespace-pre-wrap tracking-tight leading-snug italic text-red-600">「{interview.text2}」</p>
                      </div>
                    </div>
                    <div className="mt-12 text-right">
                      <div className="inline-block border-b-2 border-gray-300 pb-1">
                        <p className="text-gray-400 font-black italic tracking-widest text-base">{interview.signature}</p>
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