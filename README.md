# いいねAI ランディングページ プロジェクト

このプロジェクトは、SNS運用効率化AIツール「いいねAI」のランディングページ（LP）開発用リポジトリです。現在はReact環境をベースとしたコンポーネント指向の開発構成になっています。

## 🛠 技術スタック

- **Framework**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (CDN版を利用)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Module Management**: Native ES Modules (ESM) via `importmap`

## 📂 ファイル構成

```text
.
├── index.html          # ブラウザ実行用のエントリポイント。Reactがマウントされます。
├── index.tsx           # Reactのレンダリング開始ファイル。
├── App.tsx             # メインコンポーネント。各セクションの組み立て。
├── types.ts            # インターフェース定義。
├── constants.tsx       # 料金プランや機能一覧などのコンテンツデータ。
├── components/         # UIを構成する再利用可能なコンポーネント群
│   ├── Hero.tsx             # メインビジュアル
│   ├── ImpactStats.tsx      # 導入効果（数値）
│   ├── ProblemSolution.tsx  # 課題提示と解決策
│   ├── TechStack.tsx        # 使用技術
│   ├── Features.tsx         # 機能一覧
│   ├── ComparisonTable.tsx  # 他社比較
│   ├── PlanList.tsx         # 料金プラン
│   ├── Agency.tsx           # 代理店募集
│   ├── FAQ.tsx              # よくある質問
│   └── Footer.tsx           # フッター
└── metadata.json       # アプリケーションのメタ情報
```

## 📝 現在のページ構成 (Section Order)

LPは以下の順序で構成されています：
1. **Hero**: キャッチコピーとスマホ画面を模したデモビジュアル。
2. **ImpactStats**: 「1/20の工数削減」など、具体的な数値を強調したセクション。
3. **ProblemSolution**: 既存のSNS運用の課題と、いいねAIによる解決後の姿を対比。
4. **TechStack**: ChatGPT/Gemini/Claudeなどの利用技術を表示。
5. **Features**: 具体的な8つの主要機能のカード型紹介。
6. **ComparisonTable**: 運用代行やフリーランス、ChatGPT単体利用との比較表。
7. **PlanList**: 4つの料金プラン（出張撮影セット、ベーシック、ライト、スタート）の比較。
8. **Agency**: 代理店向けの報酬シミュレーションと特典。
9. **FAQ**: よくある質問への回答。
10. **Footer**: 最終コンバージョン（デモ体験）への誘導。

## 🎨 デザインガイドライン

- **ベースカラー**: 赤色（Red-600系）をメインアクセントとして使用しています。
- **ブランドカラー**: 「いいねAI」のロゴおよびメインキャッチコピーは**オレンジ色**を維持しています。
- **レイアウト**: 
  - LPとしての訴求力を高めるため、**追従メニュー（Sticky Header）は排除**しています。
  - 右上の「特許出願済」バッジなどは、ユーザーの要望により削除済みです。
- **レスポンシブ**: 全てのコンポーネントはモバイル（スマホ）表示に最適化されています。
- **印刷**: ブラウザの印刷機能（PDF出力等）でレイアウトが崩れないよう、`print:` モディファイアを活用しています。

## 🚀 開発の進め方

1. **ソースコードの正文 (Source of Truth)**:
   開発は `App.tsx` および `components/` 内の各 TSX ファイルを正として行います。
2. **データ管理**:
   テキストや料金の変更は `constants.tsx` を修正することで、全箇所に反映されます。
