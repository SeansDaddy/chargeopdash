export interface Metric {
  label: string;
  value: string;
  trend: 'up' | 'down';
  change: string;
}

export interface SiteStatus {
  name: string;
  count: number;
  percentage: string;
  color: string;
}

export interface RankingItem {
  name: string;
  value: number;
  location?: string;
  subValue?: string;
}
