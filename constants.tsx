
import { FeatureItem, PlanItem, FAQItem } from './types';

export const FEATURES: FeatureItem[] = [
  {
    id: '01',
    title: '画像/動画からAIによる投稿文を作成',
    description: 'SNSに投稿したい画像や動画を読み込ませると、最適なハッシュタグや投稿文、タイトルを作成します。',
    icon: 'Image',
    badge: 'ベーシック'
  },
  {
    id: '02',
    title: 'SNS投稿企画のAI生成・スケジュール管理',
    description: 'URLやスクショから企画を立案。投稿案を複数生成しスケジュール一覧で管理。',
    icon: 'Calendar',
    badge: 'ベーシック'
  },
  {
    id: '03',
    title: 'SNSアカウントの目標設定',
    description: '現在のフォロワー数を取得し、未来の目標を設定。必要な投稿数を算出し成長を導きます。',
    icon: 'Target',
    badge: 'ベーシック'
  },
  {
    id: '04',
    title: '資料管理からのさらなる学習',
    description: '企業資料や過去の投稿を学習し、よりブランドに合った生成を行います。',
    icon: 'FileText',
    badge: 'ベーシック'
  },
  {
    id: '05',
    title: 'SNSアカウント分析機能',
    description: '自動で分析しレポートを生成。AIが分析結果を理解し、次回の生成精度を向上させます。',
    icon: 'BarChart3',
    badge: 'ベーシック'
  },
  {
    id: '06',
    title: '運用タスクの一元管理',
    description: 'チームメンバーへのタスクアサイン、進捗管理が可能。指示情報が紐づきコミュニケーションが円滑に。',
    icon: 'Users',
    badge: 'ベーシック'
  },
  {
    id: '07',
    title: '広告案の作成・出稿費シミュレーション',
    description: 'LP情報から広告案を立案。平均CTRを基に費用対効果をシミュレーション。',
    icon: 'Megaphone',
    badge: 'ベーシック'
  },
  {
    id: '08',
    title: '投稿機能（予約投稿含む）',
    description: '休日や深夜でも最適なタイミングで自動投稿。管理者の負担をゼロに。',
    icon: 'Clock',
    badge: '全プラン'
  }
];

export const PLANS: PlanItem[] = [
  {
    name: '出張撮影×ベーシック',
    price: '265,000',
    annualPrice: '238,500',
    snsCount: '最大4種類',
    generationCount: '150回 / 月',
    videoCount: '4本 / 月',
    isRecommended: true,
    features: { analysis: true, reservation: true }
  },
  {
    name: 'ベーシック',
    price: '100,000',
    annualPrice: '90,000',
    snsCount: '最大4種類',
    generationCount: '150回 / 月',
    features: { analysis: true, reservation: true }
  },
  {
    name: 'ライト',
    price: '60,000',
    annualPrice: '54,000',
    snsCount: '最大4種類',
    generationCount: '90回 / 月',
    features: { analysis: false, reservation: true }
  },
  {
    name: 'スタート',
    price: '20,000',
    annualPrice: '18,000',
    snsCount: '最大4種類',
    generationCount: '30回 / 月',
    features: { analysis: false, reservation: true }
  }
];

export const FAQS: FAQItem[] = [
  {
    question: '支払い方法はどのようになっていますか？',
    answer: 'クレジットカードと請求書払いに対応しております。'
  },
  {
    question: '最低契約期間はありますか？',
    answer: 'はい、最低契約期間は3ヶ月〜となっております。'
  },
  {
    question: '代理店の登録条件を満たさない場合は契約できないのですか？',
    answer: '基本的には条件を満たしていないと契約できませんが、弊社の判断による特例の場合がございますので一度ご相談ください。'
  }
];
