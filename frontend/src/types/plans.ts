export type FeatureName =
  | "Alias record"
  | "Anycast DNS"
  | "Full API access"
  | "Multiple-layered DoS defense";

export interface Plan {
  name: string;
  price: number;
  period: string;
  users: number;
  description: string;
  features: Record<FeatureName, boolean>;
}

export interface PlansResponse {
  plans: Plan[];
  featureList: FeatureName[];
}
