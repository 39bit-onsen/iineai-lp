
export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  badge?: string;
}

export interface PlanItem {
  name: string;
  price: string;
  annualPrice?: string;
  snsCount: string;
  generationCount: string;
  videoCount?: string;
  isRecommended?: boolean;
  features: {
    analysis: boolean;
    reservation: boolean;
  };
}

export interface FAQItem {
  question: string;
  answer: string;
}
