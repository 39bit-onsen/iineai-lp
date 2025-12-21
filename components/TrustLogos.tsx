import React from 'react';

export const TrustLogos: React.FC = () => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-xl md:text-3xl font-medium text-gray-700 leading-relaxed tracking-wider">
            中小企業から大手企業まで<br />
            幅広い企業様にご利用いただいております
          </h2>
        </div>
        
        <div className="flex justify-center items-center">
          {/* 
            企業のロゴは一枚のpng（透過画像）として表示。
            最新のURL: trust_logos.png に差し替え。
          */}
          <img 
            src="https://cdn.jsdelivr.net/gh/39bit-onsen/iineai-lp@main/assets/trust_logos.png" 
            alt="導入企業一覧" 
            className="max-w-full h-auto object-contain opacity-90 transition-opacity hover:opacity-100"
            onError={(e) => {
              // 実際の画像がまだ準備できていない場合の代替表示（スタイル確認用）
              e.currentTarget.src = "https://placehold.jp/24/ffffff/444444/1200x400.png?text=導入企業ロゴ一覧（透過PNG一枚画像）";
            }}
          />
        </div>
      </div>
    </section>
  );
};