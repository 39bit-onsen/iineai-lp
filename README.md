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
│   ├── VideoSection.tsx       # コンセプトムービー（YouTube埋め込み）。
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
│   ├── AgencyV2.tsx           # SNS運用丸投げ代行プラン（新規提案）。
│   ├── ContactCTA.tsx         # 資料請求・お問い合わせボタン。
│   ├── UserInterview.tsx      # 紙質感を再現した導入者インタビュー。
│   ├── OfficialVideos.tsx     # 公式YouTube紹介動画リスト。
│   └── Footer.tsx             # 最終CTA・企業情報。
└── metadata.json       # メタ情報
```

## 📝 現在のページ構成 (Section Order)

1.  **Hero**: サービス名（フルロゴ）、特許バッジ、スマホデモ、SNSアイコン。
2.  **VideoSection**: ファーストビュー直下の動画。累計導入社数を表示。
3.  **TrustLogos**: 信頼性を担保する導入実績ロゴ。
4.  **CertificationSection**: プラットフォーム公式認定の強調。
5.  **ImpactStats**: カウントアップ演出付きの詳細な導入効果。
6.  **ImpactStatsSimple**: 4つの主要指標によるシンプルな効果まとめ。
7.  **ProblemSolution**: 外注vsいいねAIのコストパフォーマンス比較。
8.  **TechStack**: 3大AI（GPT/Gemini/Claude）搭載による技術的優位性。
9.  **AutomationGuide**: 調査・企画・分析の工数削減グラフ。
10. **EmotionalAppeal**: 運用担当者の心理的負担への寄り添いと解決提示。
11. **IntroductionEffect**: インスタ運用事例（モックアップ画像付）。
12. **Features**: 8つの主要機能詳細カード。
13. **ComparisonTable**: 既存代行やChatGPT単体利用との比較。
14. **PlanList**: 選択しやすい4段階の価格帯（年払い表記付）。
15. **Agency**: 販売代理店募集・報酬シミュレーション。
16. **AgencyV2**: プロによるSNS運用丸投げプランの紹介。
17. **ContactCTA**: 資料請求・お問い合わせ（2カラム構成）。
18. **UserInterview**: 顧客満足度の可視化（紙質感のデザイン）。
19. **OfficialVideos**: 公式YouTube動画への誘導とチャンネルリンク。
20. **Footer**: ロゴ、最終CTA、企業情報リンク。

## 🎨 デザインガイドライン

-   **メインカラー**: 赤色（Red-600）をボタンやアクセントに使用。
-   **ブランドカラー**: ロゴや主要な見出し、装飾には伝統的な**オレンジ色**（Orange-500/600）を使用。
-   **ロゴ画像**: `iine_ai_logo_full.png` を各CTAやヘッダー/フッターで統一して使用。
-   **アイコン**: アバター画像やファビコンには `iineaifavicon.png` を使用。
-   **レスポンシブ**: モバイルファースト設計。 `whitespace-nowrap` や `text-[vw]` でレイアウトを最適化。
-   **印刷最適化**: `print:hidden` を活用し、資料配布に適したレイアウトを提供。

## 🚀 運用・修正方法

-   **テキスト変更**: 基本的に `constants.tsx` または各コンポーネント内のTSXを直接編集してください。
-   **画像変更**: `https://cdn.jsdelivr.net/gh/39bit-onsen/CDNmy@main/assets/` 配下の画像を参照しています。新しいアセットを追加する場合はURLを更新してください。
-   **導入社数の更新**: `components/VideoSection.tsx` 内の「累計導入社数 XXX社突破」のテキストを適宜修正してください。