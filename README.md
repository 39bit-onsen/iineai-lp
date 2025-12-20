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
src/
├── index.html          # ブラウザ実行用のエントリポイント。Reactがマウントされます。
├── index.tsx           # Reactのレンダリング開始ファイル。
├── App.tsx             # メインコンポーネント。各セクションの組み立てとレイアウトを管理。
├── types.ts            # プロジェクト全体で使用するインターフェース（型定義）。
├── constants.tsx       # 料金プランや機能一覧などの静的なコンテンツデータ。
├── components/         # UIを構成する再利用可能なコンポーネント群
│   ├── Hero.tsx             # メインビジュアル、キャッチコピー
│   ├── ImpactStats.tsx      # 数値で見る導入効果（統計）
│   ├── ProblemSolution.tsx  # 課題提示と解決策（AIによる比較）
│   ├── TechStack.tsx        # 使用技術の紹介
│   ├── Features.tsx         # 機能一覧グリッド
│   ├── ComparisonTable.tsx  # 他社サービスとの比較表
│   ├── PlanList.tsx         # 料金プラン（レスポンシブ対応）
│   ├── Agency.tsx           # 代理店募集セクション
│   ├── FAQ.tsx              # よくある質問
│   └── Footer.tsx           # フッター、デモ誘導
└── metadata.json       # アプリケーションのメタ情報、権限設定
```

## 🚀 開発の進め方

1.  **ソースコードの正文 (Source of Truth)**:
    開発は `App.tsx` および `components/` 内の各 TSX ファイルを正として行います。HTMLを直接編集するのではなく、Reactコンポーネントを修正することで、保守性と拡張性を維持します。

2.  ** index.html について**:
    `index.html` はブラウザで直接確認するためのコンテナとして機能します。指示がない限り、自動的な更新は行わず、React環境側での開発に集中します。

3.  **スタイリングとアイコン**:
    Tailwind CSS のクラスを直接 className 属性に記述することでデザインを調整します。アイコンは `lucide-react` からインポートして使用します。

## ✨ 特徴

- **コンポーネント分割**: 各セクションが独立しているため、特定箇所の修正が容易です。
- **データ駆動**: 料金や機能の内容は `constants.tsx` に集約されており、テキストの更新がスムーズに行えます。
- **レスポンシブ対応**: Tailwind CSS により、モバイルとデスクトップの両方で最適化されたレイアウトを提供します。
- **印刷最適化**: ブラウザの印刷機能を利用した際もレイアウトが崩れないよう、専用のCSS設定（`no-print` 等）を考慮しています。
