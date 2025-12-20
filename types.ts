export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
}

export interface CaseStudy {
  id: string;
  client: string;
  title: string;
  image: string;
  stat: string;
  statLabel: string;
  category: string;
}

export interface NavItem {
  label: string;
  path?: string;
  dropdown?: NavItem[];
  external?: boolean;
}