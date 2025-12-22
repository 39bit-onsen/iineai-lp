# いいねAI ランディングページ プロジェクト

このプロジェクトは、SNS運用効率化AIツール「いいねAI」のランディングページ（LP）開発用リポジトリです。React 19とTailwind CSSを使用した最新のコンポーネント構成になっています。

## 🛠 技術スタック

- **Framework**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (CDN版)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Module Management**: Native ES Modules (ESM) via `importmap`

## 📂 ファイル構成

```text
.
├── index.html          # エントリポイント。ファビコンや共通スタイルを定義。
├── index.tsx           # Reactマウント用ファイル。
├── App.tsx             # メイン構成。セクションの表示順序を管理。
├── constants.tsx       # コンテンツデータ（プラン、機能、FAQ等）を中央管理。
├── components/         # 各セクションごとのUIコンポーネント
│   ├── Hero.tsx               # メインビジュアル。特許出願済バッジ。
│   ├── VideoSection.tsx       # コンセプトムービー（自動再生対応iframe）。
│   ├── TrustLogos.tsx         # 導入企業ロゴ一覧（画像）。
│   ├── CertificationSection.tsx # 公式認定（YouTube/Instagram等）セクション。
│   ├── ImpactStats.tsx        # 数値で見る導入効果（カウントアップ演出）。
│   ├── ImpactStatsSimple.tsx  # 効果のシンプルまとめ（4項目）。
│   ├── ProblemSolution.tsx    # 課題と解決策。コスト対比。
│   ├── TechStack.tsx          # 採用AI技術（ChatGPT/Gemini/Claude）。
│   ├── AutomationGuide.tsx    # 運用フローの自動化比較（グラフ付）。
│   ├── EmotionalAppeal.tsx    # 「自分の分身」共感訴求セクション。
│   ├── IntroductionEffect.tsx # 具体的なInstagram運用成果事例。
│   ├── Features.tsx           # 8つの主要機能紹介。
│   ├── ComparisonTable.tsx    # 競合（代行・フリーランス）との比較表。
│   ├── PlanList.tsx           # 4つの料金プラン。3Dカードデザイン。
│   ├── Agency.tsx             # 販売代理店募集・報酬シミュレーション。
│   ├── ContactCTA.tsx         # 資料請求・お問い合わせボタン。
│   ├── UserInterview.tsx      # 紙質感を再現した導入者インタビュー。
│   ├── OfficialVideos.tsx     # 公式YouTube紹介動画リスト。
│   └── Footer.tsx             # 最終CTA・企業情報。
└── metadata.json       # メタ情報
```

## 📝 現在のページ構成 (Section Order)

1.  **Hero**: サービス名、特許バッジ、スマホデモ、SNSアイコン。
2.  **VideoSection**: ファーストビュー直下の動画訴求。
3.  **TrustLogos**: 信頼性を担保する導入実績ロゴ。
4.  **CertificationSection**: プラットフォーム公式認定の強調。
5.  **ImpactStats / Simple**: 具体的な削減時間や売上向上の数値エビデンス。
6.  **ProblemSolution**: 外注vsいいねAIのコストパフォーマンス比較。
7.  **TechStack**: 最新AI搭載による技術的優位性。
8.  **AutomationGuide**: 調査・企画・分析の工数削減グラフ。
9.  **EmotionalAppeal**: 運用担当者の心理的負担への寄り添い。
10. **IntroductionEffect**: インスタ運用事例（Before/After）。
11. **Features**: 機能詳細カード。
12. **ComparisonTable**: 市場における立ち位置の明確化。
13. **PlanList**: 選択しやすい4段階の価格帯。
14. **Agency**: パートナーシップの提案。
15. **ContactCTA**: 離脱前のCV導線。
16. **UserInterview**: 顧客満足度の可視化。
17. **OfficialVideos**: YouTube動画への誘導。
18. **Footer**: サイト内ナビゲーションとフッター。

## 🎨 デザインガイドライン

-   **メインカラー**: 赤色（Red-600）をボタンやアクセントに使用。
-   **ブランドカラー**: ロゴや主要な見出し、装飾には伝統的な**オレンジ色**（Orange-500/600）を使用し、視認性とブランドイメージを両立。
-   **アイコン**: アバター画像やファビコンには `iineaifavicon.png` を統一して使用。
-   **レスポンシブ**: モバイルファーストで設計。スマホ表示時にテキストが折り返されないよう `whitespace-nowrap` や `text-[vw]` を活用。
-   **印刷最適化**: PDF化や資料配布を考慮し、背景色や不要なパーツを `print:hidden` で制御。

## 🚀 運用・修正方法

-   **テキスト変更**: 基本的に `constants.tsx` または各コンポーネント内のTSXを直接編集してください。
-   **画像変更**: `https://cdn.jsdelivr.net/gh/39bit-onsen/iineai-lp@main/assets/` 配下の画像を参照しています。新しいアセットを追加する場合はURLを更新してください。
