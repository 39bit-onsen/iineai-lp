import React from 'react';

interface InterviewData {
  id: string;
  name: string;
  profile: string;
  address: string;
  image: string;
  headline: string;
  textBefore: string;
  textAfter: string;
  signature: string;
}

const INTERVIEWS: InterviewData[] = [
  {
    id: '01',
    name: 'サービス業 担当者様',
    profile: 'Instagram運用',
    address: 'お客様の声①',
    image: 'https://cdn.jsdelivr.net/gh/39bit-onsen/CDNmy@main/assets/voice1.png',
    headline: '「投稿数も、反応も増えた。SNS運用が“回る”ようになりました」',
    textBefore: 'いいねAI導入前は、Instagram以外の業務も多く、投稿を作るだけで手一杯でした。投稿分析にも時間をかけていましたが、リーチは伸び悩み、「このやり方で合っているのか？」という不安が常にありました。',
    textAfter: 'いいねAIを使い始めてからは、投稿作成の負担が大きく減り、投稿数が明らかに増えました。さらに、文章が親しみやすくなったことでコメントが増え、フォロワー外へのリーチも大きく伸びています。「作れるようになった」だけでなく、「反応が返ってくる運用」に変わった実感があります。',
    signature: 'Voice of Service Industry'
  },
  {
    id: '02',
    name: '小売店 経営者様',
    profile: 'マルチSNS運用',
    address: 'お客様の声②',
    image: 'https://cdn.jsdelivr.net/gh/39bit-onsen/CDNmy@main/assets/voice2.png',
    headline: '「フォロワーが毎日増えるようになり、手応えを感じています」',
    textBefore: '以前は1日に増えるフォロワーが数人程度で、伸び悩みが続いていました。投稿数を増やしたいと思っても、企画・作成・分析を一人で回すのは正直限界でした。',
    textAfter: 'いいねAI導入後は、月15〜20本ペースで投稿できる見込みが立ち、フォロワーも毎日10人以上増えるようになっています。特に、共感を意識した文章を作ってくれる点が大きく、コメントが増えたことでアカウントの空気が変わりました。限られたリソースでSNS運用をしている企業ほど、効果を実感できるサービスだと思います。',
    signature: 'Voice of Retail Business'
  }
];

const TapeDecoration: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`absolute w-32 h-10 bg-white/60 backdrop-blur-sm border border-white/30 shadow-sm rotate-[-45deg] z-20 pointer-events-none opacity-80 ${className}`}></div>
);

export const UserInterview: React.FC = () => {
  return (
    <section className="py-20 bg-[#f8f9fa] overflow-hidden border-t border-gray-100">
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
              {/* Card Shadow Background */}
              <div className="absolute inset-0 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.06)] rounded-sm transform translate-x-1 translate-y-1"></div>
              
              {/* Main Content Container */}
              <div 
                className="relative bg-white border border-gray-100 overflow-hidden rounded-sm"
                style={{ clipPath: 'polygon(0 0, calc(100% - 64px) 0, 100% 64px, 100% 100%, 0 100%)' }}
              >
                {/* Texture Overlay */}
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-multiply" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
                
                {/* Corner Fold */}
                <div className="absolute top-0 right-0 w-16 h-16 z-30 pointer-events-none">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-[#e5e5e2] shadow-[-6px_6px_12px_rgba(0,0,0,0.1)]" style={{ clipPath: 'polygon(0 0, 0 100%, 100% 100%)' }}></div>
                </div>

                <div className="flex flex-col lg:flex-row relative z-10">
                  {/* Left Column: Fixed Image */}
                  <div className="w-full lg:w-2/5 p-6 md:p-8 flex flex-col items-center justify-center bg-gray-50/50">
                    <div className="relative w-full max-w-[320px] lg:max-w-none">
                      <TapeDecoration className="-top-4 -left-8" />
                      <div className="relative overflow-hidden rounded-sm shadow-xl border-[10px] border-white aspect-[4/5] bg-white group-hover:scale-[1.02] transition-transform duration-500">
                        <img 
                          src={interview.image} 
                          alt={interview.name} 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                    </div>
                    
                    <div className="mt-8 text-center w-full">
                      <div className="bg-brand-600 text-white py-1 px-4 rounded-full text-xs font-black tracking-widest inline-block mb-3">
                        CASE STUDY {interview.id}
                      </div>
                      <h4 className="font-black text-xl text-gray-800 mb-1">{interview.name}</h4>
                      <p className="text-sm font-bold text-gray-400">{interview.profile} ／ {interview.address}</p>
                    </div>
                  </div>

                  {/* Right Column: Dynamic Text Content */}
                  <div className="w-full lg:w-3/5 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                    <div className="space-y-8">
                      {/* Big Headline */}
                      <h3 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight tracking-tight border-l-8 border-brand-600 pl-6 mb-10">
                        {interview.headline}
                      </h3>

                      {/* Before Content */}
                      <div className="space-y-3">
                        <span className="inline-block text-[10px] font-black bg-gray-200 text-gray-600 px-2 py-0.5 rounded tracking-widest mb-1">導入前の課題</span>
                        <p className="text-base md:text-lg font-bold text-gray-600 leading-relaxed">
                          {interview.textBefore}
                        </p>
                      </div>

                      {/* After Content (Emphasized) */}
                      <div className="pt-8 border-t border-gray-100 relative">
                        <div className="absolute -top-1 left-0 w-12 h-1.5 bg-brand-600 rounded-full"></div>
                        <span className="inline-block text-[10px] font-black bg-brand-50 text-brand-600 px-2 py-0.5 rounded tracking-widest mb-3">導入後の成果</span>
                        <p className="text-lg md:text-2xl font-black text-red-600 leading-snug italic tracking-tight">
                          「{interview.textAfter}」
                        </p>
                      </div>
                    </div>

                    {/* Footer Signature */}
                    <div className="mt-12 text-right">
                      <div className="inline-block border-b-2 border-gray-300 pb-1">
                        <p className="text-gray-400 font-black italic tracking-widest text-base">
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